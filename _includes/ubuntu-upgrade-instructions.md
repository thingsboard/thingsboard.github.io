{%- assign current_version = include.version -%}
{%- assign previous_version = include.prev_version -%}
{%- assign update_status = include.update_status | default: "true" -%}
{%- assign applicable_versions = include.applicable_versions -%}
{%- assign manual_version_upgrade = include.manual_version_upgrade | default: "false" -%}
{%- assign manual_version_upgrade_label = include.manual_version_upgrade_label -%}
{%- assign x_status = include.x -%}

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

### Upgrading ThingsBoard CE to {{ current_version }}

{%- if x_status == "true" -%}
{%- assign prev_version_label = prev_major | append: "." | append: prev_minor | append: ".x" -%}
{%- else -%}
{%- assign prev_version_label = previous_version -%}
{%- endif -%}

{%- if use_external_link -%}
{%- assign prev_version_href = "/docs/user-guide/install/upgrade-instructions/ubuntu/v" | append: previous_version_path | append: "/#upgrading-thingsboard-ce-to-" | append: previous_version_anchor -%}
{%- else -%}
{%- assign prev_version_href = "#upgrading-thingsboard-ce-to-" | append: previous_version_anchor -%}
{%- endif -%}

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version {{ prev_version_label }}{% if applicable_versions %}{% assign versions = applicable_versions | split: "," %}{% for v in versions %} and ThingsBoard version {{ v | strip }}{% endfor %}{% endif %}.
In order to upgrade to {{ current_version }} you need to [**upgrade to {{ prev_version_label }} first**]({{ prev_version_href }}).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

{% if current_version == "3.7" %}
{% include templates/install/tb-370-update-linux.md %}
{% endif %}
{% if current_version == "3.5" %}
{% include templates/install/tb-350-update.md %}
{% endif %}

#### ThingsBoard package download

```bash
wget https://github.com/thingsboard/thingsboard/releases/download/{{ current_version }}/thingsboard-{{ current_version }}.deb
```
{: .copy-code}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

```bash
sudo dpkg -i thingsboard-{{ current_version }}.deb
```
{: .copy-code}

{% capture difference %}
**NOTE:**
<br>
Package installer may ask you to merge your ThingsBoard configuration. It is preferred to use merge option to make sure that all your previous parameters will not be overwritten.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

{% if update_status == "true" %}
Execute regular upgrade script:

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
