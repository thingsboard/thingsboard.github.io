#!/usr/bin/env python3
import re, os, sys, textwrap

OLD = "_includes/docs/user-guide/rule-engine-2-0/enrichment-nodes.md"
NEW_INDEX = "_includes/docs/user-guide/rule-engine-2-0/enrichment-nodes/index.md"
INCLUDES_DIR = "_includes/docs/user-guide/rule-engine-2-0/enrichment-nodes"
PE_DIR = "docs/pe/user-guide/rule-engine-2-0/enrichment-nodes"

def slugify(t):
    t = re.sub(r"\s*\{#.*?\}\s*$", "", t.strip())
    return re.sub(r"[^a-z0-9]+","-", t.lower()).strip("-")

def norm(s): return re.sub(r"[^a-z0-9]+","", s.lower())

if not os.path.exists(OLD):
    sys.exit(f"Not found: {OLD}")
if not os.path.exists(NEW_INDEX):
    sys.exit(f"Not found: {NEW_INDEX}")

old = open(OLD, encoding="utf-8").read()
new_index = open(NEW_INDEX, encoding="utf-8").read()

# map заголовков на слаги из index.md (если есть)
link_map = { m.group(1).strip().lower(): m.group(2).strip()
             for m in re.finditer(r"- \[([^\]]+)\]\(/docs/[^)]+/enrichment-nodes/([^)\/\s]+)", new_index) }
link_map_norm = { norm(k): v for k, v in link_map.items() }

# извлечь секции по H2
sections = list(re.finditer(r"(?m)^##\s+([^\n]+)\n(.*?)(?=^##\s+|\Z)", old, flags=re.DOTALL))
if not sections:
    sys.exit("No H2 sections found in monolithic file")

os.makedirs(INCLUDES_DIR, exist_ok=True)
os.makedirs(PE_DIR, exist_ok=True)

# 1) Сгенерировать includes/*.md
for m in sections:
    title, body = m.group(1).strip(), m.group(2).rstrip()
    slug = link_map_norm.get(norm(title)) or slugify(title)
    inc_path = os.path.join(INCLUDES_DIR, f"{slug}.md")
    content = f"## {title}\n\n{body.strip()}\n"
    open(inc_path, "w", encoding="utf-8").write(content)
    print("Wrote", inc_path)

# 2) index.md под PE
pe_index = textwrap.dedent("""\
    ---
    layout: docwithnav-pe
    title: Enrichment nodes
    description: Rule Engine 2.0 Enrichment nodes
    ---

    {% assign docsPrefix = "pe/" %}
    {% include get-hosts-name.html docsPrefix=docsPrefix %}
    {% include docs/user-guide/rule-engine-2-0/enrichment-nodes/index.md %}
""")
open(os.path.join(PE_DIR, "index.md"), "w", encoding="utf-8").write(pe_index)
print("Wrote", os.path.join(PE_DIR, "index.md"))

# 3) Сгенерировать PE страницы для каждой ноды
for m in sections:
    title = m.group(1).strip()
    slug = link_map_norm.get(norm(title)) or slugify(title)
    fm_title = re.sub(r"\s*\{#.*?\}\s*$", "", title.strip())
    page = textwrap.dedent(f"""\
        ---
        layout: docwithnav-pe
        title: {fm_title}
        description: {fm_title}
        ---

        {{% assign docsPrefix = "pe/" %}}
        {{% include get-hosts-name.html docsPrefix=docsPrefix %}}
        {{% include docs/user-guide/rule-engine-2-0/enrichment-nodes/{slug}.md %}}
    """)
    pe_path = os.path.join(PE_DIR, f"{slug}.md")
    open(pe_path, "w", encoding="utf-8").write(page)
    print("Wrote", pe_path)

print("Done.")
