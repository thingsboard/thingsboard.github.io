#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
sync_widget_bundles.py

Условия:
- JSON-файлы лежат в папке: json-bundles/*.json
- YAML всегда: _data/widgets-library.yml
- Картинки:
  * data:image/...;base64,... (в image или resources[].data) — сохраняем напрямую
  * иначе — копируем из второго проекта по путям/именам из JSON (image / resources[].link / fileName)

Пути сохранения в текущем репозитории:
- /images/widgets-library/bundles/<bundle_alias>.<ext>
- /images/widgets-library/widgets/<bundle_alias>/<widget_key>.<ext>
"""

from __future__ import annotations
import argparse, base64, json, os, re, shutil, sys
from dataclasses import dataclass, field
from pathlib import Path
from typing import Optional, Iterable

try:
    from ruamel.yaml import YAML
    from ruamel.yaml.scalarstring import DoubleQuotedScalarString as DQ
except ImportError:
    print("Please install dependency: pip install ruamel.yaml", file=sys.stderr)
    sys.exit(1)

# --- Константы проекта ---
YML_PATH     = Path("_data/widgets-library.yml")
JSON_DIR     = Path("json-bundles")                 # <--- Ищем JSON-ы здесь
IMG_ROOT     = Path("images/widgets-library")
BUNDLES_DIR  = IMG_ROOT / "bundles"
WIDGETS_DIR  = IMG_ROOT / "widgets"

DATA_URL_RE = re.compile(r"^data:(?P<mime>[\w/+.-]+);base64,(?P<b64>.+)$", re.DOTALL)

# ---------- Утилиты ----------

def one_line(s: Optional[str]) -> str:
    if not s:
        return ""
    return " ".join(str(s).replace("\r", "").split())

def safe_key(s: Optional[str]) -> str:
    s = (s or "").strip().lower()
    s = re.sub(r"[^a-z0-9]+", "-", s)
    s = re.sub(r"-+", "-", s).strip("-")
    return s or "item"

def guess_ext_from_mime(mime: Optional[str]) -> str:
    m = (mime or "").lower()
    if m.endswith("svg+xml"): return "svg"
    if m.endswith("png"): return "png"
    if m.endswith(("jpeg","jpg")): return "jpg"
    if m.endswith("webp"): return "webp"
    return "png"

def write_bytes(dst: Path, data: bytes) -> None:
    dst.parent.mkdir(parents=True, exist_ok=True)
    with open(dst, "wb") as f:
        f.write(data)

def load_yaml(path: Path):
    yaml = YAML()
    yaml.preserve_quotes = True
    yaml.width = 2048
    with open(path, "r", encoding="utf-8") as f:
        data = yaml.load(f) or {}
    return yaml, data

def normalize_strings(node):
    if isinstance(node, dict):
        for k, v in list(node.items()):
            node[k] = normalize_strings(v)
    elif isinstance(node, list):
        for i, v in enumerate(node):
            node[i] = normalize_strings(v)
    elif isinstance(node, str):
        return DQ(one_line(node))
    return node

# ---------- Поиск/сохранение изображений ----------

@dataclass
class SaveReport:
    saved: list[str] = field(default_factory=list)
    missed: list[str] = field(default_factory=list)

    def add_saved(self, p: Path):
        self.saved.append(str(p))

    def add_missed(self, what: str):
        if what and what not in self.missed:
            self.missed.append(what)

def try_data_url_to_file(spec: Optional[str], dst_base: Path) -> Optional[Path]:
    if not spec:
        return None
    s = spec
    idx = s.find("data:image")
    if idx >= 0:
        s = s[idx:]
    m = DATA_URL_RE.match(s)
    if not m:
        return None
    ext = guess_ext_from_mime(m.group("mime"))
    out = dst_base.with_suffix("." + ext)
    write_bytes(out, base64.b64decode(m.group("b64")))
    return out

def _iter_image_candidates(raw: Optional[str], file_name: Optional[str], link: Optional[str]) -> Iterable[str]:
    for x in (link, file_name, raw):
        if x:
            yield x

def _resolve_in_assets(src: Path, candidate: str) -> Optional[Path]:
    """
    Ищем файл во втором проекте:
    1) Абсолютный путь на диске (если вдруг так пришло)
    2) src / candidate
    3) src / candidate.lstrip('/')
    4) Поиск по basename по всему src (fallback)
    """
    cand = Path(candidate)
    if cand.is_file():
        return cand

    cand2 = (src / cand).resolve()
    if cand2.is_file():
        return cand2

    cand3 = (src / candidate.lstrip("/")).resolve()
    if cand3.is_file():
        return cand3

    name = Path(candidate).name
    for root, _, files in os.walk(src):
        if name in files:
            return Path(root) / name

    return None

def save_from_resources(resources: list[dict] | None, dst_base: Path, assets_src: Path, report: SaveReport) -> Optional[Path]:
    if not resources:
        return None
    for r in resources:
        b64, fname, link = r.get("data"), r.get("fileName"), r.get("link")
        if b64 and fname:
            ext = Path(fname).suffix.lstrip(".") or guess_ext_from_mime(r.get("mediaType"))
            out = dst_base.with_suffix("." + ext)
            try:
                write_bytes(out, base64.b64decode(b64))
                return out
            except Exception:
                pass
        for cand in _iter_image_candidates(raw=None, file_name=fname, link=link):
            found = _resolve_in_assets(assets_src, cand)
            if found and found.is_file():
                out = dst_base.with_suffix(found.suffix or ".png")
                out.parent.mkdir(parents=True, exist_ok=True)
                shutil.copy2(found, out)
                return out
    # отчёт о первом осмысленном промахе
    r0 = (resources[0] if resources else {}) or {}
    miss = r0.get("link") or r0.get("fileName")
    if miss:
        report.add_missed(miss)
    return None

def save_any_image(spec: Optional[str], resources: list[dict] | None, dst_base: Path, assets_src: Path, report: SaveReport) -> Optional[Path]:
    out = try_data_url_to_file(spec, dst_base)
    if out:
        return out
    out = save_from_resources(resources, dst_base, assets_src, report)
    if out:
        return out
    if spec:
        found = _resolve_in_assets(assets_src, spec)
        if found and found.is_file():
            out = dst_base.with_suffix(found.suffix or ".png")
            out.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(found, out)
            return out
        report.add_missed(spec)
    return None

# ---------- Слияние JSON -> YAML ----------

def merge_bundle(yml_root: dict, j: dict, assets_src: Path, report: SaveReport) -> None:
    wb = j.get("widgetsBundle") or {}
    alias = wb.get("alias") or safe_key(wb.get("name") or wb.get("title") or "bundle")
    bundle_key = alias

    bundle_node = yml_root.get(bundle_key) or {}
    yml_root[bundle_key] = bundle_node

    bundle_node["title"] = one_line(wb.get("title") or wb.get("name") or alias)
    bundle_node["description"] = one_line(wb.get("description") or "")

    bdst = BUNDLES_DIR / safe_key(bundle_key)
    bout = save_any_image(
        spec=wb.get("image"),
        resources=wb.get("resources") or [],
        dst_base=bdst,
        assets_src=assets_src,
        report=report
    )
    if bout:
        bundle_node["image"] = "/" + bout.as_posix()
        report.add_saved(bout)

    section = bundle_node.get("section") or {}
    bundle_node["section"] = section

    for wt in j.get("widgetTypes") or []:
        raw_key = wt.get("fqn") or wt.get("name") or "widget"
        wkey = safe_key(raw_key)
        node = section.get(wkey) or {}
        section[wkey] = node

        node["title"] = one_line(wt.get("name") or raw_key)
        node["description"] = one_line(wt.get("description") or "")

        wdst = WIDGETS_DIR / safe_key(bundle_key) / wkey
        wout = save_any_image(
            spec=wt.get("image"),
            resources=wt.get("resources") or [],
            dst_base=wdst,
            assets_src=assets_src,
            report=report
        )
        if wout:
            node["image"] = "/" + wout.as_posix()
            report.add_saved(wout)

# ---------- CLI ----------

def main():
    ap = argparse.ArgumentParser(description="Sync widget bundles from json-bundles/*.json into _data/widgets-library.yml; copy images from a second project.")
    ap.add_argument("--assets-src", required=True, help="Путь к корню ВТОРОГО проекта, где лежат исходные картинки")
    args = ap.parse_args()

    assets_src = Path(args.assets_src).resolve()
    if not assets_src.is_dir():
        print(f"[ERROR] --assets-src не существует или не папка: {assets_src}", file=sys.stderr)
        sys.exit(2)

    if not YML_PATH.is_file():
        print(f"[ERROR] Не найден YAML: {YML_PATH}", file=sys.stderr)
        sys.exit(2)

    if not JSON_DIR.is_dir():
        print(f"[ERROR] Не найдена папка с JSON: {JSON_DIR}", file=sys.stderr)
        sys.exit(2)

    yaml, yml_root = load_yaml(YML_PATH)

    json_files = sorted(JSON_DIR.glob("*.json"))
    if not json_files:
        print("[INFO] В json-bundles/ нет *.json — делать нечего.")
        return

    report = SaveReport()
    merged = 0

    for jf in json_files:
        try:
            data = json.loads(jf.read_text(encoding="utf-8"))
        except Exception as e:
            print(f"[SKIP] {jf.name}: не удалось прочитать JSON ({e})")
            continue

        wb = data.get("widgetsBundle") or {}
        alias = wb.get("alias") or safe_key(wb.get("name") or wb.get("title") or jf.stem)
        print(f"[MERGE] {alias} <- {jf.name}")
        merge_bundle(yml_root, data, assets_src, report)
        merged += 1

    yml_root = normalize_strings(yml_root)
    YML_PATH.parent.mkdir(parents=True, exist_ok=True)
    with open(YML_PATH, "w", encoding="utf-8") as f:
        yaml.dump(yml_root, f)

    print("\n[DONE] YAML обновлён:", YML_PATH)
    print("[DONE] Картинки — базовая папка:", IMG_ROOT)
    print(f"[STATS] Обработано JSON: {merged}")
    print(f"[STATS] Сохранено изображений: {len(report.saved)}")

    if report.missed:
        print("\n[WARN] Не удалось найти/сохранить некоторые изображения (проверь пути во втором проекте):")
        for miss in report.missed:
            print("  -", miss)

if __name__ == "__main__":
    main()
