{%- assign current_version = include.version -%}
{%- assign previous_version = include.prev_version -%}

{%- assign previous_version_anchor = previous_version | replace: ".", "" -%}

### Upgrading ThingsBoard CE to {{ current_version }}

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version {{ previous_version }}. In order to upgrade to {{ current_version }} you need to [**upgrade to {{ previous_version }} first**](#upgrading-thingsboard-ce-to-{{ previous_version_anchor }}).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

```bash
wget https://github.com/thingsboard/thingsboard/releases/download/{{ current_version }}/thingsboard-{{ current_version }}.deb
```
{: .copy-code}

{% include resources.liquid version=current_version kind="ubuntu-download" %}

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

Start the service
```bash
sudo service thingsboard start
```
{: .copy-code}