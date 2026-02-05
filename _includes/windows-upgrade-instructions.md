{%- assign platform = "ThingsBoard CE" -%}
{%- assign current_version = include.version -%}
{%- assign family = include.family -%}
{%- assign current_version_with_platform = current_version -%}
{%- assign previous_version = include.prev_version -%}
{%- assign update_status = include.update_status | default: "true" -%}
{%- assign applicable_versions = include.applicable_versions -%}
{%- assign manual_version_upgrade = include.manual_version_upgrade | default: "false" -%}
{%- assign manual_version_upgrade_label = include.manual_version_upgrade_label -%}
{%- assign zip = include.zip | default: "false" -%}
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

{%- assign prev_parts = previous_version | split: "." (-%}
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
{%- assign prev_version_href = "/docs/" | append: docsPrefix | append: "user-guide/install/upgrade-instructions/windows/v" | append: previous_version_path | append: "/" | append: platform_hash | append: previous_version_anchor -%}
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

{% if current_version == "3.7" %}
{% include templates/install/tb-370-update-windows.md %}
{% endif %}
{% if current_version == "3.5" %}
{% include templates/install/tb-350-update.md %}
{% endif %}

#### ThingsBoard{% if docsPrefix == "pe/" %} PE{% endif %} package download

{% assign upgrade_package = "" %}
{% if docsPrefix == "pe/" %}
{% assign upgrade_package = "thingsboard-windows-" %}
{% if zip == "true" %}
{% assign upgrade_package = upgrade_package | append: current_version | append: "pe.zip" %}
{% else %}
{% assign upgrade_package = upgrade_package | append: "setup-" | append: current_version | append: "pe.exe" %}
{% endif %}
Download ThingsBoard PE installation package for Windows: [{{ upgrade_package }}](https://dist.thingsboard.io/{{ upgrade_package }}).
{% else %}
Download ThingsBoard installation file for Windows: [thingsboard-windows-{{ current_version }}.zip](https://github.com/thingsboard/thingsboard/releases/download/v{{ current_version }}/thingsboard-windows-{{ current_version }}.zip).
{% endif %}

#### ThingsBoard{% if docsPrefix == "pe/" %} PE{% endif %} service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard{% if docsPrefix == "pe/"%} PE{% endif %} configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
{% if docsPrefix == "pe/" %}
{% if zip == "true" %}
* Copy content of the **{{ upgrade_package }}** to the same location.
{% else %}
* Run the installation package **{{ upgrade_package }}**
{% endif %}
{% endif %}
{% if docsPrefix != "pe/" %}
* Remove ThingsBoard install dir.
* Unzip installation archive to ThingsBoard install dir.
{% endif %}
* Compare and merge your old ThingsBoard configuration files (from the backup you made in the first step) with new ones.


{% capture update_note %}
{% assign base_version_parts = base_version | split: "." %}
{% assign patch_part = base_version_parts[2] %}
{% if patch_status == "true" %}
If you are upgrading from {{ previous_version }}, you **must** run the script below. However, if you are upgrading from version {{ family | append: "." | append: patch_part | append: ".x" }}, **DO NOT** run the upgrade script; proceed directly to starting the service.
{% else %}
If you are upgrading from version {{ previous_version }}, you must run the script below
{% endif %}
{% endcapture %}

{% capture update_script %}
Execute regular upgrade script:

```text
C:\thingsboard>upgrade.bat{% if manual_version_upgrade == "true" %} --fromVersion={% if manual_version_upgrade_label %}{{ manual_version_upgrade_label }}{% else %}{{ previous_version }}{% endif %}{% endif %}
```
{: .copy-code}
{% endcapture %}

{% if curr_major > "4" or (curr_major == "4" and curr_minor >= "2") %}
{% include templates/warn-banner.md content=update_note %}
{{ update_script }}
{% else %}

{% if update_status == "true" %}
{% capture difference %}
**NOTE:**
<br>
Scripts listed above should be executed using Administrator Role.
{% endcapture %}
{% include templates/info-banner.md content=difference %}
{% endif %}

{% if update_status == "true" %}
{{ update_script }}
{% endif %}

{% endif %}

#### Start the service
```text
net start thingsboard
```
{: .copy-code}

{% if current_version == "3.4.2" %}
{% capture default-jwt %}
Update the JWT signing key if you use the default one "thingsboardDefaultSigningKey" on production environments. See [JWT security settings](/docs/user-guide/ui/security-settings/#jwt-security-settings) for details.
{% endcapture %}
{% include templates/info-banner.md content=default-jwt %}
{% endif %}
