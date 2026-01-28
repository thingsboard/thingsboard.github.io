from __future__ import annotations

import re
from datetime import datetime
from pathlib import Path
from typing import List, Tuple, Optional

DATA_FILE = Path("_data/upgrade-instructions-data.yml")

SYSTEMS = [
    ("centos", "CentOS"),
    ("ubuntu", "Ubuntu"),
    ("docker", "Docker"),
    ("docker-compose", "Docker Compose"),
    ("windows", "Windows"),
]

CE_UPG_BASE = Path("docs/user-guide/install/upgrade-instructions")
PE_UPG_BASE = Path("docs/pe/user-guide/install/upgrade-instructions")

CE_UPG_EFFECTIVE_URL = "/docs/user-guide/install/upgrade-instructions/"
PE_UPG_EFFECTIVE_URL = "/docs/pe/user-guide/install/upgrade-instructions/"

CE_UPG_LAYOUT = "docwithnav"
PE_UPG_LAYOUT = "docwithnav-pe"

CE_REL_FAMILY_DIR = Path("docs/releases/releases-table")
PE_REL_FAMILY_DIR = Path("docs/pe/releases/releases-table")

CE_REL_INCLUDES_DIR = Path("_includes/docs/releases/releases-table")
PE_REL_INCLUDES_DIR = Path("_includes/docs/pe/releases/releases-table")

CE_REL_EFFECTIVE_URL = "/docs/releases/releases-table/"
PE_REL_EFFECTIVE_URL = "/docs/pe/releases/releases-table/"

CE_REL_LAYOUT = "docwithnav"
PE_REL_LAYOUT = "docwithnav-pe"

OVERWRITE_UPGRADE_MD = False
OVERWRITE_RELEASE_INCLUDES = False
OVERWRITE_RELEASE_FAMILY_FILES = False

UPGRADABLE_FROM_QUOTES = '"'
BOOL_QUOTES = '"'


SEMVER_RE = re.compile(r"^\d+(?:\.\d+)*$")
TOP_KEY_RE = re.compile(r"^(\d+(?:\.\d+)*):\s*$")

CE_REL_INCLUDE_RE = re.compile(
    r"^\{\%\s*include\s+docs/releases/releases-table/(v\d+(?:-\d+)*\.md)\s*\%\}\s*$"
)
PE_REL_INCLUDE_RE = re.compile(
    r"^\{\%\s*include\s+docs/pe/releases/releases-table/(v\d+(?:-\d+)*\.md)\s*\%\}\s*$"
)

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


def md_filename_for_version_full(version: str) -> str:
    return "v" + "-".join(version.split(".")) + ".md"


def sort_versions_desc(versions: List[str]) -> List[str]:
    uniq = list(dict.fromkeys(versions))
    uniq.sort(key=parse_version_to_tuple, reverse=True)
    return uniq


DATE_FORMATS = [
    "%d %b %Y",
    "%d %B %Y",
    "%b %d %Y",
    "%B %d %Y",
    "%b %d, %Y",
    "%B %d, %Y",
    "%d %b, %Y",
    "%d %B, %Y",
]

def parse_user_date(s: str) -> Optional[datetime]:
    s = s.strip()
    for fmt in DATE_FORMATS:
        try:
            return datetime.strptime(s, fmt)
        except ValueError:
            continue
    return None


def fmt_last_updated(dt: datetime) -> str:
    return dt.strftime("%b %d, %Y").replace(" 0", " ")


def fmt_latest_patch_date(dt: datetime) -> str:
    return fmt_last_updated(dt)


def fmt_release_date_frontmatter(dt: datetime) -> str:
    return fmt_last_updated(dt)


def fmt_release_date_for_includes(dt: datetime) -> str:
    return dt.strftime("%b %d, %Y").replace(" 0", " ")


def extract_versions_with_line_indexes(lines: List[str]) -> List[Tuple[str, int]]:
    out: List[Tuple[str, int]] = []
    for i, line in enumerate(lines):
        m = TOP_KEY_RE.match(line.rstrip("\n"))
        if m:
            out.append((m.group(1), i))
    return out


def write_file(path: Path, content: str, overwrite: bool) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    if path.exists() and not overwrite:
        print(f"SKIP (exists): {path}")
        return
    path.write_text(content, encoding="utf-8")
    print(f"WROTE: {path}")

def extract_frontmatter(text: str) -> Tuple[str, str, str]:
    if not text.startswith("---"):
        return "", "", text
    parts = text.split("---", 2)
    if len(parts) < 3:
        return "", "", text
    fm_body = parts[1]
    rest = parts[2]
    fm_full = "---" + fm_body + "---"
    return fm_full, fm_body, rest


def replace_frontmatter_lines_keep_everything_else(text: str, replacements: dict) -> str:
    fm_full, fm_body, rest = extract_frontmatter(text)
    if not fm_full:
        return text

    fm_lines = fm_body.splitlines(True)
    new_lines = []
    for line in fm_lines:
        stripped = line.strip()
        key = stripped.split(":", 1)[0] if ":" in stripped else ""
        if key in replacements:
            new_lines.append(replacements[key] + "\n")
        else:
            new_lines.append(line)

    new_fm_full = "---\n" + "".join(new_lines).lstrip("\n") + "---"
    return new_fm_full + rest


def upsert_frontmatter_key(text: str, key: str, value_line: str) -> str:
    if not text.startswith("---"):
        return text

    parts = text.split("---", 2)
    if len(parts) < 3:
        return text

    fm_body = parts[1]
    rest = parts[2]
    fm_lines = fm_body.splitlines(True)

    key_re = re.compile(rf"^\s*{re.escape(key)}\s*:\s*.*$")

    for i, line in enumerate(fm_lines):
        if key_re.match(line.strip()):
            fm_lines[i] = value_line + "\n"
            new_fm = "---\n" + "".join(fm_lines).lstrip("\n") + "---"
            return new_fm + rest

    # insert if missing
    insert_after = None
    for i, line in enumerate(fm_lines):
        if line.strip().startswith("breadcrumbs-steps:"):
            insert_after = i
            break

    if insert_after is None:
        fm_lines.append(value_line + "\n")
    else:
        fm_lines.insert(insert_after + 1, value_line + "\n")

    new_fm = "---\n" + "".join(fm_lines).lstrip("\n") + "---"
    return new_fm + rest


def render_upgrade_md_ce(fam: str, os_key: str, os_title: str) -> str:
    return f"""---
layout: {CE_UPG_LAYOUT}
title: ThingsBoard CE v{fam}.x upgrade instructions for {os_title}
description: ThingsBoard CE v{fam}.x upgrade guide for {os_title}
active-menu-item-click: "true"
breadcrumbs: true
breadcrumbs-steps: 2
breadcrumbs-show: 2
effective-url: '{CE_UPG_EFFECTIVE_URL}'
---

* TOC
{{{{:toc}}}}

{{{{% include upgrade-instructions.liquid family="{fam}" os="{os_key}" %}}}}
"""


def render_upgrade_md_pe(fam: str, os_key: str, os_title: str) -> str:
    return f"""---
layout: {PE_UPG_LAYOUT}
title: ThingsBoard PE v{fam}.x upgrade instructions for {os_title}
description: ThingsBoard PE v{fam}.x upgrade guide for {os_title}
active-menu-item-click: "true"
breadcrumbs: true
breadcrumbs-steps: 2
breadcrumbs-show: 2
effective-url: '{PE_UPG_EFFECTIVE_URL}'
---

* TOC
{{{{:toc}}}}

{{{{% assign docsPrefix = "pe/" %}}}}

{{{{% include upgrade-instructions.liquid family="{fam}" os="{os_key}" %}}}}
"""


def render_release_include_ce(version: str, release_dt: datetime) -> str:
    date_str = fmt_release_date_for_includes(release_dt)
    return f"### ThingsBoard CE v{version} ({date_str})\n"


def render_release_include_pe(version: str, release_dt: datetime) -> str:
    date_str = fmt_release_date_for_includes(release_dt)
    return f"### ThingsBoard PE v{version} ({date_str})\n"


def render_release_family_ce(
        fam: str,
        release_date_dt: Optional[datetime],
        latest_patch_version: str,
        latest_patch_dt: Optional[datetime],
        release_note_label: str,
        lts_true: bool,
) -> str:
    release_date_str = fmt_release_date_frontmatter(release_date_dt) if release_date_dt else "TBD"
    last_updated_str = fmt_last_updated(latest_patch_dt) if latest_patch_dt else release_date_str
    latest_patch_str = f"v{latest_patch_version} ({fmt_latest_patch_date(latest_patch_dt)})" if latest_patch_dt else f"v{latest_patch_version}"
    lts_line = "lts: 'true'\n" if lts_true else ""

    return f"""---
layout: {CE_REL_LAYOUT}
title: Thingsboard v{fam}.x release notes
description: Discover Thingsboard v{fam}.x release notes
breadcrumbs: 'true'
breadcrumbs-steps: '1'
{lts_line}release-date: {release_date_str}
last-updated: {last_updated_str}
release-note-label: {release_note_label}
active-menu-item-click: 'true'
latest-patch: {latest_patch_str}
effective-url: '{CE_REL_EFFECTIVE_URL}'
---
* TOC
{{{{:toc}}}}

"""


def render_release_family_pe(
        fam: str,
        release_date_dt: Optional[datetime],
        latest_patch_version: str,
        latest_patch_dt: Optional[datetime],
        release_note_label: str,
        lts_true: bool,
) -> str:
    release_date_str = fmt_release_date_frontmatter(release_date_dt) if release_date_dt else "TBD"
    last_updated_str = fmt_last_updated(latest_patch_dt) if latest_patch_dt else release_date_str
    latest_patch_str = f"v{latest_patch_version} ({fmt_latest_patch_date(latest_patch_dt)})" if latest_patch_dt else f"v{latest_patch_version}"
    lts_line = "lts: 'true'\n" if lts_true else ""

    return f"""---
layout: {PE_REL_LAYOUT}
title: Thingsboard PE v{fam}.x release notes
description: Discover Thingsboard PE v{fam}.x release notes
breadcrumbs: 'true'
breadcrumbs-steps: '1'
{lts_line}release-date: {release_date_str}
last-updated: {last_updated_str}
release-note-label: {release_note_label}
active-menu-item-click: 'true'
latest-patch: {latest_patch_str}
effective-url: '{PE_REL_EFFECTIVE_URL}'
---
* TOC
{{{{:toc}}}}

{{{{% assign docsPrefix = "pe/" %}}}}

"""


def get_included_versions_from_family(lines: List[str], is_pe: bool) -> List[str]:
    out: List[str] = []
    inc_re = PE_REL_INCLUDE_RE if is_pe else CE_REL_INCLUDE_RE
    for line in lines:
        m = inc_re.match(line.strip())
        if not m:
            continue
        fname = m.group(1)  # v4-2-1-1-0-1.md
        mm = re.match(r"^v(\d+(?:-\d+)*)\.md$", fname)
        if mm:
            out.append(mm.group(1).replace("-", "."))
    return out


def build_include_line_for_version(version: str, is_pe: bool) -> str:
    fname = md_filename_for_version_full(version)
    if is_pe:
        return f"{{% include docs/pe/releases/releases-table/{fname} %}}"
    return f"{{% include docs/releases/releases-table/{fname} %}}"


def update_or_insert_release_family_includes(family_path: Path, version: str, is_pe: bool) -> None:
    text = family_path.read_text(encoding="utf-8")
    lines = text.splitlines(True)

    existing = get_included_versions_from_family(lines, is_pe=is_pe)

    fam = family_of(version)
    fam_prefix = fam + "."
    existing_same_fam = [v for v in existing if v.startswith(fam_prefix)]

    merged = sort_versions_desc(existing_same_fam + [version])
    include_lines = [build_include_line_for_version(v, is_pe=is_pe) + "\n" for v in merged]

    inc_re = PE_REL_INCLUDE_RE if is_pe else CE_REL_INCLUDE_RE

    start = None
    end = None
    for i, line in enumerate(lines):
        if inc_re.match(line.strip()):
            if start is None:
                start = i
            end = i
        else:
            if start is not None:
                break

    if start is not None and end is not None:
        new_lines = lines[:start] + include_lines + lines[end + 1:]
    else:
        if lines and not lines[-1].endswith("\n"):
            lines[-1] += "\n"
        if lines and lines[-1].strip() != "":
            lines.append("\n")
        new_lines = lines + include_lines

    family_path.write_text("".join(new_lines), encoding="utf-8")
    print(f"UPDATED includes in: {family_path}")


def get_latest_included_version_from_family(family_path: Path, is_pe: bool) -> Optional[str]:
    if not family_path.exists():
        return None
    lines = family_path.read_text(encoding="utf-8").splitlines()
    versions = get_included_versions_from_family(lines, is_pe=is_pe)
    if not versions:
        return None
    versions = sort_versions_desc(versions)
    return versions[0]


def ensure_release_family_file(
        fam: str,
        ce_family_path: Path,
        pe_family_path: Path,
        new_version: str,
        release_date_dt: Optional[datetime],
        release_note_label_ce: str,
        release_note_label_pe: str,
        lts_true: bool,
) -> None:
    if not ce_family_path.exists():
        base = render_release_family_ce(
            fam=fam,
            release_date_dt=release_date_dt,
            latest_patch_version=new_version,
            latest_patch_dt=release_date_dt,
            release_note_label=release_note_label_ce,
            lts_true=lts_true,
        )
        write_file(ce_family_path, base, overwrite=OVERWRITE_RELEASE_FAMILY_FILES)

    if not pe_family_path.exists():
        base = render_release_family_pe(
            fam=fam,
            release_date_dt=release_date_dt,
            latest_patch_version=new_version,
            latest_patch_dt=release_date_dt,
            release_note_label=release_note_label_pe,
            lts_true=lts_true,
        )
        write_file(pe_family_path, base, overwrite=OVERWRITE_RELEASE_FAMILY_FILES)

def build_new_version_block(
        new_version: str,
        upgradable_from: str,
        release_date_raw: str,
        is_lts: bool,
        upgrade: bool,
) -> str:
    lts_val = "true" if is_lts else "false"
    upgrade_val = "true" if upgrade else "false"

    return (
        f"{new_version}:\n"
        f"  upgradable-from: {UPGRADABLE_FROM_QUOTES}{upgradable_from}{UPGRADABLE_FROM_QUOTES}\n"
        f"  release-date: {release_date_raw}\n"
        f"  lts: {BOOL_QUOTES}{lts_val}{BOOL_QUOTES}\n"
        f"  upgrade: {BOOL_QUOTES}{upgrade_val}{BOOL_QUOTES}\n"
        f"  x: {BOOL_QUOTES}true{BOOL_QUOTES}\n"
    )

def main() -> int:
    print("=== Upgrade instructions generator ===")

    new_version = ask("1) New version name: ")
    try:
        validate_version_string(new_version)
    except Exception as e:
        print(f"ERROR: {e}")
        return 2

    release_date_raw = ask(f"2) {new_version} release date: ")
    release_dt = parse_user_date(release_date_raw)
    if release_dt is None:
        print("ERROR: Can't parse release date. Examples: '28 Jan 2026', 'Jan 28 2026', 'Jan 28, 2026'")
        return 2

    is_lts = ask_bool(f"3) Is {new_version} lts version (true/false): ")
    upgradable_from = ask(f"4) {new_version} upgradable-from: ")
    upgrade = ask_bool(f"5) {new_version} upgrade (true/false): ")

    if not DATA_FILE.exists():
        print(f"ERROR: {DATA_FILE} not found")
        return 2

    yml_text = DATA_FILE.read_text(encoding="utf-8")
    yml_lines = yml_text.splitlines(keepends=True)

    versions_with_idx = extract_versions_with_line_indexes(yml_lines)
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
        release_date_raw=release_date_raw,
        is_lts=is_lts,
        upgrade=upgrade,
    )

    if insert_at is None:
        if yml_lines and not yml_lines[-1].endswith("\n"):
            yml_lines[-1] += "\n"
        yml_lines.append(new_block)
        print(f"Added new version to YAML (appended): {new_version}")
    else:
        yml_lines.insert(insert_at, new_block)
        print(f"Added new version to YAML (inserted): {new_version}")

    DATA_FILE.write_text("".join(yml_lines), encoding="utf-8")
    print(f"WROTE: {DATA_FILE}")

    fam = family_of(new_version)
    is_new_family = not family_exists(existing_versions, fam)

    if is_new_family:
        print(f"New upgrade-instructions family detected: {fam} -> generating md files...")
        fname = md_filename_for_family(fam)
        for os_key, os_title in SYSTEMS:
            ce_path = CE_UPG_BASE / os_key / fname
            pe_path = PE_UPG_BASE / os_key / fname
            write_file(ce_path, render_upgrade_md_ce(fam, os_key, os_title), overwrite=OVERWRITE_UPGRADE_MD)
            write_file(pe_path, render_upgrade_md_pe(fam, os_key, os_title), overwrite=OVERWRITE_UPGRADE_MD)
    else:
        print(f"Upgrade-instructions family {fam} already exists -> no new upgrade md files created.")

    ver_fname = md_filename_for_version_full(new_version)
    ce_inc_path = CE_REL_INCLUDES_DIR / ver_fname
    pe_inc_path = PE_REL_INCLUDES_DIR / ver_fname

    write_file(ce_inc_path, render_release_include_ce(new_version, release_dt), overwrite=OVERWRITE_RELEASE_INCLUDES)
    write_file(pe_inc_path, render_release_include_pe(new_version, release_dt), overwrite=OVERWRITE_RELEASE_INCLUDES)

    ce_family_path = CE_REL_FAMILY_DIR / md_filename_for_family(fam)
    pe_family_path = PE_REL_FAMILY_DIR / md_filename_for_family(fam)

    release_family_is_new = (not ce_family_path.exists()) and (not pe_family_path.exists())

    release_note_label_ce = "TBD"
    release_note_label_pe = "TBD"

    if release_family_is_new:
        release_note_label_ce = ask(f"6) Release note label for CE v{fam}.x: ")
        same_for_pe = ask_bool("7) Is the same release-note-label for PE? (true/false): ")
        if same_for_pe:
            release_note_label_pe = release_note_label_ce
        else:
            release_note_label_pe = ask(f"8) Release note label for PE v{fam}.x: ")

    ensure_release_family_file(
        fam=fam,
        ce_family_path=ce_family_path,
        pe_family_path=pe_family_path,
        new_version=new_version,
        release_date_dt=release_dt,
        release_note_label_ce=release_note_label_ce,
        release_note_label_pe=release_note_label_pe,
        lts_true=is_lts,
    )

    update_or_insert_release_family_includes(ce_family_path, new_version, is_pe=False)
    update_or_insert_release_family_includes(pe_family_path, new_version, is_pe=True)

    latest_ce = get_latest_included_version_from_family(ce_family_path, is_pe=False)
    latest_pe = get_latest_included_version_from_family(pe_family_path, is_pe=True)

    if latest_ce == new_version:
        rep = {
            "latest-patch": f"latest-patch: v{new_version} ({fmt_latest_patch_date(release_dt)})",
            "last-updated": f"last-updated: {fmt_last_updated(release_dt)}",
        }
        ce_text = ce_family_path.read_text(encoding="utf-8")
        ce_family_path.write_text(replace_frontmatter_lines_keep_everything_else(ce_text, rep), encoding="utf-8")
        print(f"UPDATED frontmatter latest-patch/last-updated in: {ce_family_path}")

    if latest_pe == new_version:
        rep = {
            "latest-patch": f"latest-patch: v{new_version} ({fmt_latest_patch_date(release_dt)})",
            "last-updated": f"last-updated: {fmt_last_updated(release_dt)}",
        }
        pe_text = pe_family_path.read_text(encoding="utf-8")
        pe_family_path.write_text(replace_frontmatter_lines_keep_everything_else(pe_text, rep), encoding="utf-8")
        print(f"UPDATED frontmatter latest-patch/last-updated in: {pe_family_path}")

    if is_lts:
        ce_text = ce_family_path.read_text(encoding="utf-8")
        pe_text = pe_family_path.read_text(encoding="utf-8")

        ce_new = upsert_frontmatter_key(ce_text, "lts", "lts: 'true'")
        pe_new = upsert_frontmatter_key(pe_text, "lts", "lts: 'true'")

        if ce_new != ce_text:
            ce_family_path.write_text(ce_new, encoding="utf-8")
            print(f"UPDATED frontmatter lts in: {ce_family_path}")

        if pe_new != pe_text:
            pe_family_path.write_text(pe_new, encoding="utf-8")
            print(f"UPDATED frontmatter lts in: {pe_family_path}")

    print("Done.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
