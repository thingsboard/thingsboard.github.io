{%- assign platform = "ThingsBoard CE" -%}
{%- assign current_version = include.version -%}
{%- assign current_version_with_platform = current_version -%}
{%- assign previous_version = include.prev_version -%}
{%- assign update_status = include.update_status | default: "true" -%}
{%- assign applicable_versions = include.applicable_versions -%}
{%- assign manual_version_upgrade = include.manual_version_upgrade | default: "false" -%}
{%- assign manual_version_upgrade_label = include.manual_version_upgrade_label -%}
{%- assign zip = include.zip | default: "false" -%}
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

{%- assign prev_parts = previous_version | split: "." (-%}
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
{%- assign prev_version_href = "/docs/" | append: docsPrefix | append: "user-guide/install/upgrade-instructions/windows/v" | append: previous_version_path | append: "/" | append: platform_hash | append: previous_version_anchor -%}
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
{% if update_status == "true" %}
* Finally, run **upgrade.bat** script to upgrade ThingsBoard to the new version.
{% endif %}

{% if update_status == "true" %}
{% capture difference %}
**NOTE:**
<br>
Scripts listed above should be executed using Administrator Role.
{% endcapture %}
{% include templates/info-banner.md content=difference %}
{% endif %}

{% if update_status == "true" %}
Execute regular upgrade script:

```text
C:\thingsboard>upgrade.bat{% if manual_version_upgrade == "true" %} --fromVersion={% if manual_version_upgrade_label %}{{ manual_version_upgrade_label }}{% else %}{{ previous_version }}{% endif %}{% endif %}
```
{: .copy-code}
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
