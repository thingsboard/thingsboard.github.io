
from __future__ import annotations

import re
import sys
from pathlib import Path
from typing import List, Tuple


DATA_FILE = Path("_data/upgrade-instructions-data.yml")

SYSTEMS = [
    ("centos", "CentOS"),
    ("ubuntu", "Ubuntu"),
    ("docker", "Docker"),
    ("docker-compose", "Docker Compose"),
    ("windows", "Windows"),
]

CE_BASE = Path("docs/user-guide/install/upgrade-instructions")
PE_BASE = Path("docs/pe/user-guide/install/upgrade-instructions")

CE_EFFECTIVE_URL = "/docs/user-guide/install/upgrade-instructions/"
PE_EFFECTIVE_URL = "/docs/pe/user-guide/install/upgrade-instructions/"

CE_LAYOUT = "docwithnav"
PE_LAYOUT = "docwithnav-pe"

OVERWRITE_MD = False

LTS_QUOTES = '"'
UPGRADABLE_FROM_QUOTES = '"'
UPGRADE_QUOTES = '"'
X_QUOTES = '"'

SEMVER_RE = re.compile(r"^\d+(?:\.\d+)*$")
TOP_KEY_RE = re.compile(r"^(\d+(?:\.\d+)*):\s*$")


def ask(prompt: str) -> str:
    return input(prompt).strip()


def ask_bool(prompt: str) -> bool:
    while True:
        raw = input(prompt).strip().lower()
        if raw in ("true", "t", "yes", "y", "1"):
            return True
        if raw in ("false", "f", "no", "n", "0"):
            return False
        print("Please answer true/false (or yes/no, 1/0).")


def validate_version_string(v: str) -> None:
    if not SEMVER_RE.match(v):
        raise ValueError("Version must be digits separated by dots, e.g. 4.2.1.1")


def parse_version_to_tuple(v: str) -> Tuple[int, ...]:
    parts = [int(p) for p in v.split(".")]
    if len(parts) == 2:
        parts.append(0)
    return tuple(parts)


def is_version_greater(a: str, b: str) -> bool:
    ta = parse_version_to_tuple(a)
    tb = parse_version_to_tuple(b)
    max_len = max(len(ta), len(tb))
    pa = ta + (-1,) * (max_len - len(ta))
    pb = tb + (-1,) * (max_len - len(tb))
    return pa > pb


def family_of(version: str) -> str:
    parts = version.split(".")
    if len(parts) < 2:
        raise ValueError("Version must have at least major.minor, e.g. 4.2.0")
    return f"{parts[0]}.{parts[1]}"


def family_exists(existing_versions: List[str], fam: str) -> bool:
    pref = fam + "."
    return any(v == fam or v.startswith(pref) for v in existing_versions)


def md_filename_for_family(fam: str) -> str:
    major, minor = fam.split(".", 1)
    return f"v{major}-{minor}-x.md"


def render_md_ce(fam: str, os_key: str, os_title: str) -> str:
    return f"""---
layout: {CE_LAYOUT}
title: ThingsBoard CE v{fam}.x upgrade instructions for {os_title}
description: ThingsBoard CE v{fam}.x upgrade guide for {os_title}
active-menu-item-click: "true"
breadcrumbs: true
breadcrumbs-steps: 2
breadcrumbs-show: 2
effective-url: '{CE_EFFECTIVE_URL}'
---

* TOC
{{:toc}}

{{% include upgrade-instructions.liquid family="{fam}" os="{os_key}" %}}
"""


def render_md_pe(fam: str, os_key: str, os_title: str) -> str:
    return f"""---
layout: {PE_LAYOUT}
title: ThingsBoard PE v{fam}.x upgrade instructions for {os_title}
description: ThingsBoard PE v{fam}.x upgrade guide for {os_title}
active-menu-item-click: "true"
breadcrumbs: true
breadcrumbs-steps: 2
breadcrumbs-show: 2
effective-url: '{PE_EFFECTIVE_URL}'
---

* TOC
{{:toc}}

{{% assign docsPrefix = "pe/" %}}

{{% include upgrade-instructions.liquid family="{fam}" os="{os_key}" %}}
"""


def write_file(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    if path.exists() and not OVERWRITE_MD:
        print(f"SKIP (exists): {path}")
        return
    path.write_text(content, encoding="utf-8")
    print(f"WROTE: {path}")


def build_new_version_block(
        new_version: str,
        upgradable_from: str,
        release_date: str,
        is_lts: bool,
        upgrade: bool,
) -> str:
    lts_val = "true" if is_lts else "false"
    upgrade_val = "true" if upgrade else "false"

    return (
        f"{new_version}:\n"
        f"  upgradable-from: {UPGRADABLE_FROM_QUOTES}{upgradable_from}{UPGRADABLE_FROM_QUOTES}\n"
        f"  release-date: {release_date}\n"
        f"  lts: {LTS_QUOTES}{lts_val}{LTS_QUOTES}\n"
        f"  upgrade: {UPGRADE_QUOTES}{upgrade_val}{UPGRADE_QUOTES}\n"
        f"  x: \"true\"\n"
    )


def extract_versions_with_line_indexes(lines: List[str]) -> List[Tuple[str, int]]:
    out: List[Tuple[str, int]] = []
    for i, line in enumerate(lines):
        m = TOP_KEY_RE.match(line.rstrip("\n"))
        if m:
            out.append((m.group(1), i))
    return out


def main() -> int:
    print("=== Upgrade instructions generator ===")

    new_version = ask("1) New version name: ")
    try:
        validate_version_string(new_version)
    except Exception as e:
        print(f"ERROR: {e}")
        return 2

    release_date = ask(f"2) {new_version} release date: ")
    is_lts = ask_bool(f"3) Is {new_version} lts version (true/false): ")
    upgradable_from = ask(f"4) {new_version} upgradable-from: ")
    upgrade = ask_bool(f"5) {new_version} upgrade (true/false): ")

    if not DATA_FILE.exists():
        print(f"ERROR: {DATA_FILE} not found")
        return 2

    raw = DATA_FILE.read_text(encoding="utf-8")
    lines = raw.splitlines(keepends=True)

    versions_with_idx = extract_versions_with_line_indexes(lines)
    existing_versions = [v for v, _ in versions_with_idx]

    if new_version in existing_versions:
        print(f"ERROR: Version {new_version} already exists in {DATA_FILE}. Nothing changed.")
        return 2

    insert_at = None
    for v, idx in versions_with_idx:
        try:
            if is_version_greater(new_version, v):
                insert_at = idx
                break
        except Exception:
            continue

    new_block = build_new_version_block(
        new_version=new_version,
        upgradable_from=upgradable_from,
        release_date=release_date,
        is_lts=is_lts,
        upgrade=upgrade,
    )

    if insert_at is None:
        if lines and not lines[-1].endswith("\n"):
            lines[-1] += "\n"
        lines.append(new_block)
        print(f"Added new version to YAML (appended): {new_version}")
    else:
        lines.insert(insert_at, new_block)
        print(f"Added new version to YAML (inserted): {new_version}")

    DATA_FILE.write_text("".join(lines), encoding="utf-8")
    print(f"WROTE: {DATA_FILE}")

    fam = family_of(new_version)
    is_new_family = not family_exists(existing_versions, fam)

    if not is_new_family:
        print(f"Family {fam} already exists -> no new md files created.")
        return 0

    print(f"New family detected: {fam} -> generating md files...")

    filename = md_filename_for_family(fam)
    for os_key, os_title in SYSTEMS:
        ce_path = CE_BASE / os_key / filename
        pe_path = PE_BASE / os_key / filename

        write_file(ce_path, render_md_ce(fam, os_key, os_title))
        write_file(pe_path, render_md_pe(fam, os_key, os_title))

    print("Done.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
