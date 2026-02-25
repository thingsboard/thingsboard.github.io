{%- assign platform = "Trendz Analytics" -%}
{%- assign current_version = include.version -%}
{%- assign family = include.family -%}
{%- assign patch_status = include.patch_status -%}
{%- assign base_version = include.base_version -%}

{%- assign curr_parts = current_version | split: "." -%}

{%- assign curr_major = curr_parts[0] -%}
{%- assign curr_minor = curr_parts[1] -%}

{%- assign curr_major_n = curr_major | plus: 0 -%}
{%- assign curr_minor_n = curr_minor | plus: 0 -%}

{% if patch_status == "true" %}
### Upgrading {{ platform }} to latest {{ base_version }} ({{ current_version }})
{% else %}
### Upgrading {{ platform }} to {{ current_version }}
{% endif %}

{%- assign platform_hash = "#upgrading-trendz-analytics-to-" -%}

{% capture difference %}
**NOTE:**
<br>
[**Prepare**](#prepare-for-upgrading-trendz-analytics) for upgrading Trendz Analytics.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

{% capture tb_haproxy_note %}
**NOTE:**
<br>
If you are using Trendz behind **HAProxy**, make sure that the paths **`/trendz/`** and **`/apiTrendz/`** are routed to the Trendz backend instead of **`/trendz`** and **`/apiTrendz`**.
**NOTE:**
<br>
Additionally, we highly recommend adding Trendz to the **ThingsBoard HAProxy configuration** so that Trendz is accessible from the **same domain as ThingsBoard**.
{% endcapture %}
{% include templates/warn-banner.md content=tb_haproxy_note %}

#### Trendz Analytics package download

```bash
wget https://dist.thingsboard.io/trendz-{{ current_version }}.rpm
```
{: .copy-code}

#### Trendz Analytics service upgrade

* Install latest Trendz Analytics service

```bash
sudo rpm -Uvh trendz-{{ current_version }}.rpm
```
{: .copy-code}

**NOTE:** Package installer will ask you to merge your Trendz configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.

Execute regular upgrade script:

```bash
sudo /usr/share/trendz/bin/install/upgrade.sh
```
{: .copy-code}

#### Start the service

```bash
sudo service trendz start
```
{: .copy-code}

#### Sync Trendz with ThingsBoard

After upgrade, it's necessary to sync Trendz with ThingsBoard. You can find out how to do it [here](/docs/trendz/install/rhel#step-6-sync-thingsboard-with-trendz).
