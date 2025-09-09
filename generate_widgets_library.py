import argparse
import base64
import json
import re
from pathlib import Path
from typing import Dict, Any, Optional, List
from shutil import copy2

try:
    import yaml
except ImportError:
    raise SystemExit("Please install PyYAML: pip install pyyaml")


# ---------- constants ----------
OUTPUT_IMAGES_DIR = Path("images/widgets-library")
OUTPUT_YAML_FILE = Path("_data/widgets-library.yml")
BUNDLES_SUBDIR = "bundles"
WIDGETS_SUBDIR = "widgets"

BUNDLES_BLACKLIST: List[str] = [
    "air_quality",
]



LIKELY_IMG_DIRS = [
    "application/src/main/resources",
    "application/src/main/data",
    "application/src/main/web",
    "ui-ngx/src/assets",
]


def slugify(s: str) -> str:
    s = s.strip()
    s = s.replace(" ", "_")
    s = re.sub(r"[^A-Za-z0-9_.-]+", "", s)
    s = s.replace(".", "-").replace("_", "-")
    s = re.sub(r"-+", "-", s)
    return s.lower().strip("-")


def ensure_dir(p: Path) -> None:
    p.mkdir(parents=True, exist_ok=True)


def fs_to_site_path(p: Path) -> str:
    return "/" + p.as_posix().lstrip("./")


def save_base64_to_file(b64: str, out_path: Path) -> Optional[str]:
    try:
        ensure_dir(out_path.parent)
        out_path.write_bytes(base64.b64decode(b64))
        return fs_to_site_path(out_path)
    except Exception as e:
        print(f"[WARN] Failed to save image {out_path}: {e}")
        return None


def try_extract_dataurl(image_field: str) -> Optional[tuple]:
    if not image_field:
        return None

    m = re.match(r"^data:image/([a-zA-Z0-9+.-]+);base64,(.+)$", image_field)
    if m:
        return (m.group(1), m.group(2))

    if "data:image/" in image_field and ";base64," in image_field:
        try:
            tail = image_field.split("data:image/", 1)[1]
            ext, rest = tail.split(";base64,", 1)
            return (ext, rest)
        except Exception:
            return None
    return None


def find_image_in_repo(pe_root: Path, filename: str) -> Optional[Path]:
    candidates: List[Path] = []

    for sub in LIKELY_IMG_DIRS:
        root = pe_root / sub
        if root.is_dir():
            for p in root.rglob(filename):
                candidates.append(p)

    if not candidates:
        for p in pe_root.rglob(filename):
            candidates.append(p)

    if not candidates:
        return None

    def score(path: Path) -> int:
        s = path.as_posix().lower()
        sc = 0
        if "images" in s: sc += 2
        if "system" in s: sc += 1
        # короче путь — чуть выше приоритет
        sc += max(0, 1000 - len(s))
        return sc

    candidates.sort(key=score, reverse=True)
    return candidates[0]


def copy_repo_image_to_docs(src_path: Path, dst_path: Path) -> Optional[str]:
    try:
        ensure_dir(dst_path.parent)
        copy2(src_path, dst_path)
        return fs_to_site_path(dst_path)
    except Exception as e:
        print(f"[WARN] Failed to copy {src_path} -> {dst_path}: {e}")
        return None


def try_copy_from_api_link(image_field: str, pe_root: Path, out_path_without_ext: Path) -> Optional[str]:
    if not image_field:
        return None
    m = re.search(r"/api/images/.+?/([^/]+)$", image_field)
    if not m:
        return None
    filename = m.group(1)
    src = find_image_in_repo(pe_root, filename)
    if not src:
        print(f"[WARN] Repo image not found for '{filename}'")
        return None

    ext = src.suffix or ".png"
    out_path = out_path_without_ext.with_suffix(ext)
    return copy_repo_image_to_docs(src, out_path)

def save_bundle_image(image_field: str, bundle_key: str, pe_root: Path) -> Optional[str]:
    data = try_extract_dataurl(image_field)
    if data:
        ext, b64 = data
        if ext.lower() == "svg+xml":
            ext = "svg"
        out_path = OUTPUT_IMAGES_DIR / BUNDLES_SUBDIR / f"{bundle_key}.{ext}"
        return save_base64_to_file(b64, out_path)

    out_path_guess = OUTPUT_IMAGES_DIR / BUNDLES_SUBDIR / f"{bundle_key}"
    copied = try_copy_from_api_link(image_field, pe_root, out_path_guess)
    if copied:
        return copied

    print(f"[WARN] Bundle '{bundle_key}' has no embeddable/copyable image; skipping image.")
    return None


def save_widget_image(widget_json: Dict[str, Any], bundle_key: str, widget_slug: str, pe_root: Path) -> Optional[str]:

    for res in widget_json.get("resources") or []:
        data = res.get("data")
        media_type = (res.get("mediaType") or "").lower()
        if data and media_type.startswith("image/"):
            ext = media_type.split("/", 1)[1] or "png"
            if ext.lower() == "svg+xml":
                ext = "svg"
            out_path = OUTPUT_IMAGES_DIR / WIDGETS_SUBDIR / bundle_key / f"{widget_slug}.{ext}"
            saved = save_base64_to_file(data, out_path)
            if saved:
                return saved

    image_field = widget_json.get("image") or ""
    data = try_extract_dataurl(image_field)
    if data:
        ext, b64 = data
        if ext.lower() == "svg+xml":
            ext = "svg"
        out_path = OUTPUT_IMAGES_DIR / WIDGETS_SUBDIR / bundle_key / f"{widget_slug}.{ext}"
        return save_base64_to_file(b64, out_path)

    api_link = None
    if "/api/images/" in image_field:
        api_link = image_field
    else:
        for r in widget_json.get("resources") or []:
            link = r.get("link") or ""
            if link.startswith("/api/images/"):
                api_link = link
                break

    if api_link:
        out_path_guess = OUTPUT_IMAGES_DIR / WIDGETS_SUBDIR / bundle_key / f"{widget_slug}"
        copied = try_copy_from_api_link(api_link, pe_root, out_path_guess)
        if copied:
            return copied

    print(f"[WARN] Widget '{bundle_key}/{widget_slug}' has no embeddable image data nor repo file; skipping image.")
    return None

# ---------- main ----------
def main():
    parser = argparse.ArgumentParser(description="Generate widgets-library.yml from ThingsBoard PE JSON.")
    parser.add_argument("--pe-root", required=True, help="Path to thingsboard-pe project root")
    args = parser.parse_args()

    pe_root = Path(args.pe_root).resolve()
    bundles_dir = pe_root / "application/src/main/data/json/system/widget_bundles"
    types_dir = pe_root / "application/src/main/data/json/system/widget_types"

    if not bundles_dir.is_dir():
        raise SystemExit(f"Bundles directory not found: {bundles_dir}")
    if not types_dir.is_dir():
        raise SystemExit(f"Widget types directory not found: {types_dir}")

    ensure_dir(OUTPUT_IMAGES_DIR)

    fqn_to_path: Dict[str, Path] = {}
    for p in types_dir.glob("*.json"):
        try:
            js = json.loads(p.read_text(encoding="utf-8"))
        except Exception as e:
            print(f"[WARN] Skip widget type {p.name}: {e}")
            continue
        fqn = js.get("fqn")
        if fqn:
            fqn_to_path[fqn] = p

    out_yaml: Dict[str, Any] = {}

    for bundle_path in sorted(bundles_dir.glob("*.json")):
        try:
            bundle = json.loads(bundle_path.read_text(encoding="utf-8"))
        except Exception as e:
            print(f"[WARN] Skip bundle {bundle_path.name}: {e}")
            continue

        wb = bundle.get("widgetsBundle") or {}
        alias = (wb.get("alias") or "").strip()
        title = (wb.get("title") or "").strip()
        description = (wb.get("description") or "").strip() or None
        image_raw = wb.get("image") or ""

        if not alias or not title:
            print(f"[WARN] Bundle {bundle_path.name} missing alias/title, skipping")
            continue

        if alias in BUNDLES_BLACKLIST:
            print(f"[INFO] Skipping blacklisted bundle: {alias}")
            continue

        bundle_key = alias
        bundle_image_path = save_bundle_image(image_raw, bundle_key, pe_root)

        bundle_dict: Dict[str, Any] = {"title": title}
        if description:
            bundle_dict["description"] = description
        if bundle_image_path:
            bundle_dict["image"] = bundle_image_path

        section: Dict[str, Any] = {}
        for fqn in bundle.get("widgetTypeFqns") or []:
            widget_path = fqn_to_path.get(fqn)
            if not widget_path:
                print(f"[WARN] Widget type '{fqn}' not found in {types_dir}")
                continue
            try:
                wj = json.loads(widget_path.read_text(encoding="utf-8"))
            except Exception as e:
                print(f"[WARN] Cannot read widget '{fqn}' at {widget_path.name}: {e}")
                continue

            w_name = (wj.get("name") or "").strip()
            tail = fqn.split(".")[-1] if "." in fqn else widget_path.stem
            w_slug = slugify(tail)

            widget_image_path = save_widget_image(wj, bundle_key, w_slug, pe_root)

            entry: Dict[str, Any] = {"title": w_name or w_slug.replace("-", " ").title()}
            if widget_image_path:
                entry["image"] = widget_image_path

            section[w_slug] = entry

        bundle_dict["section"] = section
        out_yaml[bundle_key] = bundle_dict

    with OUTPUT_YAML_FILE.open("w", encoding="utf-8") as f:
        yaml.safe_dump(out_yaml, f, allow_unicode=True, sort_keys=False)

    print(f"[OK] YAML generated: {OUTPUT_YAML_FILE.resolve()}")
    print(f"[OK] Images stored under: {OUTPUT_IMAGES_DIR.resolve()}")


if __name__ == "__main__":
    main()
