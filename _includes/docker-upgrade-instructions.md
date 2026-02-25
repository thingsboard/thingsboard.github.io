{%- assign platform = "ThingsBoard CE" -%}
{%- assign current_version = include.version -%}
{%- assign current_version_with_platform = current_version -%}
{%- assign previous_version = include.prev_version -%}
{%- assign update_status = include.update_status | default: "true" -%}
{%- assign applicable_versions = include.applicable_versions -%}
{%- assign patch_status = include.patch_status -%}
{%- assign base_version = include.base_version -%}
{%- assign x_status = include.x -%}

{% if docsPrefix == "pe/" %}
{%- assign platform = "ThingsBoard PE" -%}
{%- assign current_version_with_platform = current_version | append: "pe" -%}
{% endif %}

{%- assign curr_parts = current_version | split: "." -%}
{%- assign prev_parts = previous_version | split: "." -%}

{%- assign curr_major = curr_parts[0] -%}
{%- assign curr_minor = curr_parts[1] -%}

{%- assign curr_major_n = curr_major | plus: 0 -%}
{%- assign curr_minor_n = curr_minor | plus: 0 -%}

{%- assign prev_major = prev_parts[0] -%}
{%- assign prev_minor = prev_parts[1] -%}

{%- assign previous_version_anchor = previous_version | replace: ".", "" -%}

{%- assign previous_version_path = prev_major | append: "-" | append: prev_minor | append: "-x" -%}

{%- assign use_external_link = false -%}
{%- if curr_major != prev_major or curr_minor != prev_minor -%}
{%- assign use_external_link = true -%}
{%- endif -%}

{%- assign prev_parts = previous_version | split: "." -%}
{%- assign prev_major = prev_parts[0] -%}
{%- assign prev_minor = prev_parts[1] -%}

{% if patch_status == "true" %}
### Upgrading {{ platform }} to latest {{ base_version }} ({{ current_version }})
{% else %}
### Upgrading {{ platform }} to {{ current_version }}
{% endif %}

{%- if x_status == "true" -%}
{%- assign prev_version_label = prev_major | append: "." | append: prev_minor | append: ".x" -%}
{%- else -%}
{%- assign prev_version_label = previous_version -%}
{%- endif -%}

{% if docsPrefix == "pe/" %}
{%- assign prev_version_label = prev_version_label | append: "PE" -%}
{% endif %}

{% assign platform_hash = "#upgrading-thingsboard-ce-to-" %}
{% if docsPrefix == "pe/" %}
{%- assign platform_hash = "#upgrading-thingsboard-pe-to-" -%}
{% endif %}

{%- if use_external_link -%}
{%- assign prev_version_href = "/docs/" | append: docsPrefix | append: "user-guide/install/upgrade-instructions/docker/v" | append: previous_version_path | append: "/" | append: platform_hash | append: previous_version_anchor -%}
{%- else -%}
{%- assign prev_version_href = platform_hash | append: previous_version_anchor -%}
{%- endif -%}

{% capture difference %}
**NOTE:**
{% if curr_major > "4" or (curr_major == "4" and curr_minor >= "2") %}
These upgrade steps are applicable for ThingsBoard version {{ prev_version }}{% if patch_status == "true" %} or any {{ base_version }} patch{% endif %}.
In order to upgrade to {{ current_version_with_platform | upcase }} you need to [**upgrade to {{ prev_version }} first**]({{ prev_version_href }}).
{% else %}
These upgrade steps are applicable for ThingsBoard version {{ prev_version_label }}{% if applicable_versions %}{% assign versions = applicable_versions | split: "," %}{% for v in versions %} and ThingsBoard version {{ v | strip }}{% endfor %}{% endif %}.
In order to upgrade to {{ current_version_with_platform | upcase }} you need to [**upgrade to {{ prev_version_label }} first**]({{ prev_version_href }}).
{% endif %}
{% endcapture %}

{% if curr_major > "4" or (curr_major == "4" and curr_minor >= "2") %}
{% if patch_status == "true" %}
{% include templates/info-banner.md content=difference %}
{% endif %}
{% else %}
{% include templates/info-banner.md content=difference %}
{% endif %}

{%- if curr_major_n > 4 -%}
{%- if docsPrefix == "pe/" -%}
{% include templates/install/pe-tb-products-upgrade-compatibility.md %}
{%- else -%}
{% include templates/install/tb-products-upgrade-compatibility.md %}
{%- endif -%}
{%- elsif curr_major_n == 4 and curr_minor_n >= 3 -%}
{%- if docsPrefix == "pe/" -%}
{% include templates/install/pe-tb-products-upgrade-compatibility.md %}
{%- else -%}
{% include templates/install/tb-products-upgrade-compatibility.md %}
{%- endif -%}
{%- endif -%}

#### {{ platform }} service upgrade

{% assign skipUpgrade = false %}
{% if update_status == "false" %}
{% assign skipUpgrade = true %}
{% endif %}

{% if docsPrefix == "pe/" %}
{% assign pe_version = version | append: "PE" %}
{% if curr_major > "4" or (curr_major == "4" and curr_minor >= "2") %}
{% include docs/pe/user-guide/install/new-docker-upgrade-steps.md version=pe_version previous_version=previous_version %}
{% else %}
{% include docs/pe/user-guide/install/docker-upgrade-steps.md version=pe_version skipUpgrade=skipUpgrade %}
{% endif %}
{% else %}
{% if curr_major > "4" or (curr_major == "4" and curr_minor >= "2") %}
{% include docs/user-guide/install/new-docker-upgrade-steps.md version=version previous_version=previous_version %}
{% else %}
{% include docs/user-guide/install/docker-upgrade-steps.md version=version skipUpgrade=skipUpgrade %}
{% endif %}
{% endif %}
