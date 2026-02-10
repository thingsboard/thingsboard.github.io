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

{% capture tb_haproxy_note %}
**NOTE:**
<br>
If you are using Trendz behind **HAProxy**, make sure that the paths **`/trendz/`** and **`/apiTrendz/`** are routed to the Trendz backend instead of **`/trendz`** and **`/apiTrendz`**.
Additionally, we highly recommend adding Trendz to the **ThingsBoard HAProxy configuration** so that Trendz is accessible from the **same domain as ThingsBoard**.
{% endcapture %}
{% include templates/warn-banner.md content=tb_haproxy_note %}

#### Trendz Analytics package download

Download Trendz Analytics installation package for Windows: [trendz-windows-{{ current_version }}.zip](https://dist.thingsboard.io/trendz-windows-{{ current_version }}.zip).

#### Trendz Analytics service upgrade

* Stop Trendz service if it is running.

```text
net stop trendz
```
{: .copy-code}

* Make a backup of previous Trendz Analytics configuration located in \<Trendz install dir\>\conf (for ex. C:\trendz\conf).
* Remove ThingsBoard install dir.
* Unzip installation archive to ThingsBoard install dir.
* Compare your old Trendz configuration files (from the backup you made in the first step) with new ones.

{% assign base_version_parts = base_version | split: "." %}
{% assign patch_part = base_version_parts[2] %}
{% if patch_status == "true" %}
{% capture update_note %}
**NOTE:**
If you are upgrading from version {{ family | append: "." | append: patch_part | append: ".x" }}, **DO NOT** run the upgrade script; proceed directly to starting the service.
{% endcapture %}
{% include templates/info-banner.md content=update_note %}
{% endif %}

* Finally, run **upgrade.bat** script to upgrade Trendz to the new version.

**NOTE** Scripts listed above should be executed using Administrator Role. 

```text
C:\trendz>upgrade.bat
```
{: .copy-code}

#### Start the service

```text
net start trendz
```
{: .copy-code}

#### Sync Trendz with ThingsBoard

After upgrade, it's necessary to sync Trendz with ThingsBoard. You can find out how to do it [here](/docs/trendz/install/windows#step-6-sync-thingsboard-with-trendz).