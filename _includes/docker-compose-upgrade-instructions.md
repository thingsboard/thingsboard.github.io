{%- assign platform = "ThingsBoard CE" -%}
{%- assign current_version = include.version -%}
{%- assign current_version_with_platform = current_version -%}
{%- assign previous_version = include.prev_version -%}
{%- assign update_status = include.update_status | default: "true" -%}
{%- assign applicable_versions = include.applicable_versions -%}
{%- assign x_status = include.x -%}

{% if docsPrefix == "pe/" %}
{%- assign platform = "ThingsBoard PE" -%}
{%- assign current_version_with_platform = current_version | append: "pe" -%}
{% endif %}

{%- assign curr_parts = current_version | split: "." -%}
{%- assign prev_parts = previous_version | split: "." -%}

{%- assign curr_major = curr_parts[0] -%}
{%- assign curr_minor = curr_parts[1] -%}

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

### Upgrading {{ platform }} to {{ current_version }}

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
{%- assign prev_version_href = "/docs/" | append: docsPrefix | append: "user-guide/install/upgrade-instructions/docker-compose/v" | append: previous_version_path | append: "/" | append: platform_hash | append: previous_version_anchor -%}
{%- else -%}
{%- assign prev_version_href = platform_hash | append: previous_version_anchor -%}
{%- endif -%}

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version {{ prev_version_label }}{% if applicable_versions %}{% assign versions = applicable_versions | split: "," %}{% for v in versions %} and ThingsBoard version {{ v | strip }}{% endfor %}{% endif %}.
In order to upgrade to {{ current_version_with_platform | upcase }} you need to [**upgrade to {{ prev_version_label }} first**]({{ prev_version_href }}).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

{% assign docker-compose-repo-link = "https://github.com/thingsboard/" %}

{% if docsPrefix == "pe/" %}
{% assign docker-compose-repo-link = docker-compose-repo-link | append: "thingsboard-pe-docker-compose/tree/release-" | append: current_version %}
{% else %}
{% assign docker-compose-repo-link = docker-compose-repo-link | append: "thingsboard/tree/v" | append: current_version | append: "/docker" %}
{% endif %}

{% capture update_manifests_note %}
We strongly recommend that you also update your Docker Compose deployment manifests to [**the corresponding version from GitHub repository**]({{ docker-compose-repo-link }}) with every ThingsBoard upgrade. This ensures your ThingsBoard service runs with the latest best-practice parameters and configurations, while also guarantees that all required services are correctly deployed to support the newest features introduced in the release.
<br>
<br>
If you are running older releases of ThingsBoard - be aware that the manifests in `master` branch of the repository may contain configurations for features that are not available in your specific version. Always ensure that manifests are compatible with your target ThingsBoard version while merging deployment files.
{% endcapture %}
{% include templates/warn-banner.md content=update_manifests_note %}

#### {{ platform }} service upgrade

{% assign skipUpgrade = false %}
{% if update_status == "false" %}
{% assign skipUpgrade = true %}
{% endif %}

{% assign version = version %}
{% if docsPrefix == "pe/" %}
{% assign version = version | append: "PE" %}
{% endif %}

{% include docs/user-guide/install/docker-compose-upgrade-steps.md version=version skipUpgrade=skipUpgrade %}