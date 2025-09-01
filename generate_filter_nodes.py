#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generate node family pages from a merged markdown (run from repo root).

Creates:
1) _includes/docs/user-guide/rule-engine-2-0/nodes/<family>/
   - index.md — bullets linking to /docs/... (absolute paths)
   - <slug>.md — raw content per node (no heading)
2) docs/user-guide/rule-engine-2-0/nodes/<family>/
   - index.md — front matter wrapper with hidetoc + redirects, including includes/index.md
   - <slug>.md — front matter wrapper with hidetoc, including includes/<slug>.md

Redirects:
- If DOCS_INDEX_REDIRECTS is provided (comma-separated), it is used.
- Else if DEFAULT_REDIRECTS_BY_FAMILY has the family key, it is used.
- Else a sensible default list is generated for the given family:
  /docs/user-guide/rule-engine-2-0/<family>/
  /docs/pe/user-guide/rule-engine-2-0/<family>/
  /docs/pe/user-guide/rule-engine-2-0/<family>/
  /docs/paas/eu/user-guide/rule-engine-2-0/<family>/
"""

import os
import re
import sys
from pathlib import Path
from typing import List, Tuple

# =========================
# 🔧 CONFIG — ENV OVERRIDES
# =========================
FAMILY_NAME = os.environ.get("NODES_FAMILY", "enrichment-nodes")
SOURCE_MD = Path(os.environ.get("SOURCE_MD", "_includes/docs/user-guide/rule-engine-2-0")) / (FAMILY_NAME + ".md")
INCLUDES_BASE = Path(os.environ.get("INCLUDES_BASE", "_includes/docs/user-guide/rule-engine-2-0/nodes"))
DOCS_BASE = Path(os.environ.get("DOCS_BASE", "docs/user-guide/rule-engine-2-0/nodes"))
SECTION_HEADING_LEVEL = int(os.environ.get("SECTION_HEADING_LEVEL", "2"))
SECTION_TITLE_ALLOWLIST_RE = os.environ.get("SECTION_TITLE_ALLOWLIST_RE", "").strip()

# Optional explicit redirects for specific families
DEFAULT_REDIRECTS_BY_FAMILY = {
    "filter-nodes": [
        "/docs/user-guide/rule-engine-2-0/filter-nodes/",
        "/docs/pe/user-guide/rule-engine-2-0/filter-nodes/",
        "/docs/paas/user-guide/rule-engine-2-0/filter-nodes/",
        "/docs/paas/eu/user-guide/rule-engine-2-0/filter-nodes/",
    ]
}


def die(msg: str, code: int = 1):
    print("[ERROR] " + msg, file=sys.stderr)
    sys.exit(code)


def slugify(title: str) -> str:
    t = title.lower()
    t = re.sub(r"[^a-z0-9]+", "-", t)
    t = re.sub(r"-{2,}", "-", t).strip("-")
    return t or "section"


def split_sections(md_text: str, heading_level: int) -> List[Tuple[str, str, str]]:
    """Extract sections by heading level, returning list of (title, anchor, body)."""
    hashes = "#" * heading_level
    hx = re.compile(r"(?m)^" + re.escape(hashes) + r"\s+(.+?)(?:\s*\{#([^\}]+)\})?\s*$")
    matches = list(hx.finditer(md_text))
    out: List[Tuple[str, str, str]] = []
    if not matches:
        return out
    for i, m in enumerate(matches):
        start = m.end()
        end = matches[i + 1].start() if i + 1 < len(matches) else len(md_text)
        title = m.group(1).strip()
        anchor = (m.group(2) or "").strip()
        body = md_text[start:end].lstrip("\n")
        out.append((title, anchor, body))
    return out


def extract_short_description(body: str) -> str:
    """First meaningful line after images/objects/quotes/code fences."""
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
    return " ".join(w.capitalize() for w in name.replace("-", " ").split())


def default_redirects_for(family: str) -> List[str]:
    base = "/docs/user-guide/rule-engine-2-0/{}/".format(family)
    return [
        base,
        "/docs/pe/user-guide/rule-engine-2-0/{}/".format(family),
        "/docs/paas/user-guide/rule-engine-2-0/{}/".format(family),
        "/docs/paas/eu/user-guide/rule-engine-2-0/{}/".format(family),
    ]


def get_redirects(family: str) -> List[str]:
    env_val = os.environ.get("DOCS_INDEX_REDIRECTS", "").strip()
    if env_val:
        return [s.strip() for s in env_val.split(",") if s.strip()]
    if family in DEFAULT_REDIRECTS_BY_FAMILY:
        return DEFAULT_REDIRECTS_BY_FAMILY[family]
    return default_redirects_for(family)


def make_docs_index_front_matter(title: str, description: str, redirects: List[str]) -> str:
    lines = [
        "---",
        "layout: docwithnav",
        "title: " + title,
        "description: " + description,
        'hidetoc: "true"',
        ]
    if redirects:
        lines.append("redirect_from:")
        for r in redirects:
            lines.append('  - "{}"'.format(r))
    lines.append("")
    lines.append("---")
    return "\n".join(lines)


def make_docs_node_front_matter(title: str) -> str:
    return (
            "---\n"
            "layout: docwithnav\n"
            "title: " + title + "\n"
                                "description: " + title + " node\n"
                                                          'hidetoc: "true"\n'
                                                          "---\n"
    )


def main():
    if not SOURCE_MD.exists():
        die("Source file not found: {}".format(SOURCE_MD))

    text = SOURCE_MD.read_text(encoding="utf-8")
    sections = split_sections(text, SECTION_HEADING_LEVEL)

    if SECTION_TITLE_ALLOWLIST_RE:
        allow_re = re.compile(SECTION_TITLE_ALLOWLIST_RE, re.IGNORECASE)
        sections = [s for s in sections if allow_re.search(s[0])]

    if not sections:
        die("No sections found at heading level {} in {}".format(SECTION_HEADING_LEVEL, SOURCE_MD))

    includes_out_dir = INCLUDES_BASE / FAMILY_NAME
    docs_out_dir = DOCS_BASE / FAMILY_NAME
    includes_out_dir.mkdir(parents=True, exist_ok=True)
    docs_out_dir.mkdir(parents=True, exist_ok=True)

    bullets: List[str] = []

    for title, anchor, body in sections:
        slug = slugify(title)
        includes_md_path = includes_out_dir / (slug + ".md")
        docs_md_path = docs_out_dir / (slug + ".md")

        # Write raw node body (includes)
        includes_md_path.write_text(body.rstrip() + "\n", encoding="utf-8")

        # Short description and absolute link for includes index
        short = extract_short_description(body).rstrip(".")
        absolute_link = "/docs/user-guide/rule-engine-2-0/nodes/{}/{}".format(FAMILY_NAME, slug)
        bullets.append("- [{}]({}) — {}.".format(title, absolute_link, short))

        # Write docs wrapper
        fm = make_docs_node_front_matter(title)
        wrapper = (
                fm
                + "\n"
                + "{% include get-hosts-name.html %}\n"
                + "{% include docs/user-guide/rule-engine-2-0/nodes/"
                + FAMILY_NAME
                + "/"
                + slug
                + ".md %}\n"
        )
        docs_md_path.write_text(wrapper, encoding="utf-8")

    # includes index
    includes_index = includes_out_dir / "index.md"
    includes_index.write_text(
        "<!-- Auto-generated index for {}. Do not edit by hand. -->\n\n{}\n".format(
            FAMILY_NAME, "\n".join(bullets)
        ),
        encoding="utf-8",
    )

    # docs index
    fam_title = family_title(FAMILY_NAME)
    redirects = get_redirects(FAMILY_NAME)
    fm_index = make_docs_index_front_matter(
        title=fam_title,
        description="Rule Engine 2.0 {}".format(fam_title),
        redirects=redirects,
    )
    docs_index = docs_out_dir / "index.md"
    docs_index.write_text(
        fm_index
        + "\n\n"
        + "{% include get-hosts-name.html %}\n"
        + "{% include docs/user-guide/rule-engine-2-0/nodes/"
        + FAMILY_NAME
        + "/index.md %}\n",
        encoding="utf-8",
        )

    print("[OK] Wrote includes to:", includes_out_dir)
    print("[OK] Wrote docs to:", docs_out_dir)
    print("All done!")


if __name__ == "__main__":
    main()