#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Split a "family" markdown (e.g. filter-nodes.md) into:
1) _includes/docs/user-guide/rule-engine-2-0/nodes/<family>/
   - index.md — bulleted list with absolute links to /docs/... pages
   - <slug>.md — full content for each node (without heading)
2) docs/user-guide/rule-engine-2-0/nodes/<family>/
   - index.md — front matter wrapper that includes the includes/index.md
   - <slug>.md — front matter wrappers that include the includes/<slug>.md
Run from the repository root.
"""

from __future__ import annotations
import os
import re
import sys
from pathlib import Path
from typing import List, Tuple

# =========================
# 🔧 CONFIG — EDIT HERE
# =========================
# Family name, e.g. "filter-nodes" or "action-nodes"
FAMILY_NAME = os.environ.get("NODES_FAMILY", "filter-nodes")

# Source "merged" markdown path (old location), relative to repo root
SOURCE_MD = Path(os.environ.get("SOURCE_MD", "_includes/docs/user-guide/rule-engine-2-0")) / f"{FAMILY_NAME}.md"

# Bases for generated output
INCLUDES_BASE = Path(os.environ.get("INCLUDES_BASE", "_includes/docs/user-guide/rule-engine-2-0/nodes"))
DOCS_BASE     = Path(os.environ.get("DOCS_BASE",     "docs/user-guide/rule-engine-2-0/nodes"))

# Heading level that denotes a new node section inside the FAMILY_NAME.md (e.g. "## ")
SECTION_HEADING_LEVEL = int(os.environ.get("SECTION_HEADING_LEVEL", "2"))  # 2 means "## "

# Optional: restrict sections by title regex
SECTION_TITLE_ALLOWLIST_RE = os.environ.get("SECTION_TITLE_ALLOWLIST_RE", "").strip()

# =========================
# Derived paths
# =========================
INCLUDES_OUT_DIR = INCLUDES_BASE / FAMILY_NAME
DOCS_OUT_DIR     = DOCS_BASE     / FAMILY_NAME
INCLUDES_INDEX   = INCLUDES_OUT_DIR / "index.md"
DOCS_INDEX       = DOCS_OUT_DIR     / "index.md"


def die(msg: str, code: int = 1):
    print(f"[ERROR] {msg}", file=sys.stderr)
    sys.exit(code)


def slugify(title: str) -> str:
    t = title.lower()
    t = re.sub(r"[^a-z0-9]+", "-", t)
    t = re.sub(r"-{2,}", "-", t).strip("-")
    return t or "section"


def split_sections(md_text: str, heading_level: int) -> List[Tuple[str, str, str]]:
    hashes = "#" * heading_level
    hx = re.compile(rf"(?m)^{re.escape(hashes)}\s+(.+?)(?:\s*\{{#([^\}}]+)\}})?\s*$")
    matches = list(hx.finditer(md_text))
    sections: List[Tuple[str, str, str]] = []
    if not matches:
        return sections
    for i, m in enumerate(matches):
        start = m.end()
        end = matches[i + 1].start() if i + 1 < len(matches) else len(md_text)
        title = m.group(1).strip()
        anchor = (m.group(2) or "").strip()
        body = md_text[start:end].lstrip("\n")
        sections.append((title, anchor, body))
    return sections


def extract_short_description(body: str) -> str:
    lines = body.splitlines()
    in_code = False
    candidate = ""
    for raw in lines:
        line = raw.strip()
        if line.startswith("```"):
            in_code = not in_code
            continue
        if in_code:
            continue
        if not line:
            continue
        if line.startswith(("![", "<object", ">", "#")):
            continue
        if re.match(r"^(\*|\-|\d+\.)\s", line):
            if not candidate:
                candidate = line
            continue
        return line
    return candidate or ""


def family_title(name: str) -> str:
    # "filter-nodes" -> "Filter nodes"
    return re.sub(r"\b(\w)", lambda m: m.group(1).upper(), name.replace("-", " "), count=1).capitalize()


def main():
    if not SOURCE_MD.exists():
        die(f"Source file not found: {SOURCE_MD}")

    text = SOURCE_MD.read_text(encoding="utf-8")

    sections = split_sections(text, SECTION_HEADING_LEVEL)
    if SECTION_TITLE_ALLOWLIST_RE:
        allow_re = re.compile(SECTION_TITLE_ALLOWLIST_RE, re.IGNORECASE)
        sections = [s for s in sections if allow_re.search(s[0])]

    if not sections:
        die(f"No sections found at heading level {SECTION_HEADING_LEVEL} in {SOURCE_MD}")

    # Ensure output dirs
    INCLUDES_OUT_DIR.mkdir(parents=True, exist_ok=True)
    DOCS_OUT_DIR.mkdir(parents=True, exist_ok=True)

    # Build includes index bullets
    bullets: List[str] = []

    for title, anchor, body in sections:
        slug = slugify(title)
        includes_md_path = INCLUDES_OUT_DIR / f"{slug}.md"
        docs_md_path     = DOCS_OUT_DIR     / f"{slug}.md"

        # Write includes/<slug>.md — raw body
        includes_md_path.write_text(body.rstrip() + "\n", encoding="utf-8")
        print(f"[OK] Wrote {includes_md_path}")

        # Short description for bullet
        short = extract_short_description(body).rstrip(".")
        # Absolute link to docs page (no .md)
        absolute_link = f"/docs/user-guide/rule-engine-2-0/nodes/{FAMILY_NAME}/{slug}"
        bullets.append(f"- [{title}]({absolute_link}) — {short}.")

        # Write docs/<slug>.md wrapper
        fm_title = title
        fm_desc  = f"{title} node"
        docs_wrapper = (
                           f"""---
layout: docwithnav
title: {fm_title}
description: {fm_desc}

---

{{% include get-hosts-name.html %}}
{{% include docs/user-guide/rule-engine-2-0/nodes/{FAMILY_NAME}/{slug}.md %}}
""").strip() + "\n"

        docs_md_path.write_text(docs_wrapper, encoding="utf-8")
        print(f"[OK] Wrote {docs_md_path}")

    # Write includes/index.md with bullets
    includes_index_content = (
            f"<!-- Auto-generated index for {FAMILY_NAME}. Do not edit by hand. -->\n\n"
            + "\n".join(bullets) + "\n"
    )
    INCLUDES_INDEX.write_text(includes_index_content, encoding="utf-8")
    print(f"[OK] Wrote {INCLUDES_INDEX}")

    # Write docs/index.md wrapper
    fam_title = family_title(FAMILY_NAME)
    docs_index_content = (
            f"""---
layout: docwithnav
title: {fam_title.capitalize()}
description: Rule Engine 2.0 {fam_title.capitalize()}

---

{{% include get-hosts-name.html %}}
{{% include docs/user-guide/rule-engine-2-0/nodes/{FAMILY_NAME}/index.md %}}"""
            .strip()
            + "\n"
    )
    DOCS_INDEX.write_text(docs_index_content, encoding="utf-8")
    print(f"[OK] Wrote {DOCS_INDEX}")

    print("\nAll done!")

if __name__ == "__main__":
    main()