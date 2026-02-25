{%- assign platform = "ThingsBoard CE" -%}
{%- assign current_version = include.version -%}
{%- assign family = include.family -%}
{%- assign current_version_with_platform = current_version -%}
{%- assign previous_version = include.prev_version -%}
{%- assign update_status = include.update_status | default: "true" -%}
{%- assign applicable_versions = include.applicable_versions -%}
{%- assign manual_version_upgrade = include.manual_version_upgrade | default: "false" -%}
{%- assign manual_version_upgrade_label = include.manual_version_upgrade_label -%}
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
{%- assign prev_version_href = "/docs/" | append: docsPrefix | append: "user-guide/install/upgrade-instructions/ubuntu/v" | append: previous_version_path | append: "/" | append: platform_hash | append: previous_version_anchor -%}
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
{%- if docsPrefix == "pe/" -%}
<br>
[**Prepare**](#prepare-for-upgrading-thingsboard) for upgrading ThingsBoard.
{%- endif -%}
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
{% include templates/install/tb-370-update-linux.md %}
{% endif %}
{% if current_version == "3.5" %}
{% include templates/install/tb-350-update.md %}
{% endif %}

#### ThingsBoard{% if docsPrefix == "pe/" %} PE{% endif %} package download

{% if docsPrefix == "pe/" %}
```bash
wget https://dist.thingsboard.io/thingsboard-{{ current_version_with_platform }}.deb
```
{: .copy-code}
{% else %}
```bash
wget https://github.com/thingsboard/thingsboard/releases/download/v{{ current_version_with_platform }}/thingsboard-{{ current_version_with_platform }}.deb
```
{: .copy-code}
{% endif %}

#### ThingsBoard{% if docsPrefix == "pe/" %} PE{% endif %} service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

{% if docsPrefix == "pe/" %}
* Install Thingsboard Web Report component as described [here](/docs/user-guide/install/pe/ubuntu/#step-9-install-thingsboard-webreport-component).
{% endif %}

```bash
sudo dpkg -i thingsboard-{{ current_version_with_platform }}.deb
```
{: .copy-code}

{% capture difference %}
**NOTE:**
<br>
Package installer may ask you to merge your ThingsBoard configuration. It is preferred to use merge option to make sure that all your previous parameters will not be overwritten.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

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

```bash
sudo /usr/share/thingsboard/bin/install/upgrade.sh{% if manual_version_upgrade == "true" %} --fromVersion={% if manual_version_upgrade_label %}{{ manual_version_upgrade_label }}{% else %}{{ previous_version }}{% endif %}{% endif %}
```
{: .copy-code}
{% endcapture %}

{% if curr_major > "4" or (curr_major == "4" and curr_minor >= "2") %}
{% include templates/warn-banner.md content=update_note %}
{{ update_script }}
{% elsif update_status == "true" %}

```bash
sudo /usr/share/thingsboard/bin/install/upgrade.sh{% if manual_version_upgrade == "true" %} --fromVersion={% if manual_version_upgrade_label %}{{ manual_version_upgrade_label }}{% else %}{{ previous_version }}{% endif %}{% endif %}
```
{: .copy-code}
{% endif %}

#### Start the service
{% if current_version == "3.7" %}
{% capture cassandra-370 %}
**In case Cassandra is installed**, ensure that a proper **JAVA_HOME** parameter is set for *cassandra.in.sh* include file. As of 3.7.0 release, latest stable Cassandra version does not support Java 17 yet.

In case action is required, you can refer to *"you will need to install Java..."* section of [**Cassandra installation guide**](/docs/user-guide/install/ubuntu/?ubuntuThingsboardDatabase=hybrid#cassandra-installation).
{% endcapture %}
{% include templates/info-banner.md content=cassandra-370 %}
{% endif %}

```bash
sudo service thingsboard start
```
{: .copy-code}

{% if current_version == "3.4.2" %}
{% capture default-jwt %}
Update the JWT signing key if you use the default one "thingsboardDefaultSigningKey" on production environments. See [JWT security settings](/docs/user-guide/ui/security-settings/#jwt-security-settings) for details.
{% endcapture %}
{% include templates/info-banner.md content=default-jwt %}
{% endif %}
