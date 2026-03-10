{% assign current_version = include.version %}
{% assign previous_version = include.previous_version %}

{% capture update_note %}
{% assign base_version_parts = base_version | split: "." %}
{% assign patch_part = base_version_parts[2] %}
{% assign prev_version_script = previous_version %}{% if previous_version contains ".x" %}{% assign prev_version_script = previous_version | replace: ".x", "+" %}{% endif %}
{% if patch_status == "true" %}
{% if is_latest_patch == "true" %}{% assign prev_maintenance = patch_part | minus: 1 %}If you are upgrading from {{ prev_version_script }}, you **must** run the script below. However, if you are upgrading from version {{ family | append: "." | append: prev_maintenance | append: "+" }}, **DO NOT** run the upgrade script; proceed directly to starting the service.{% else %}If you are upgrading from {{ prev_version_script }}, you **must** run the script below. However, if you are upgrading from version {{ family | append: "." | append: patch_part | append: ".x" }}, **DO NOT** run the upgrade script; proceed directly to starting the service.{% endif %}
{% else %}
If you are upgrading from version {{ previous_version }}, you must run the script below
{% endif %}
{% endcapture %}
1. Change the parameter `TB_VERSION` in the `.env` file.

```.env
TB_VERSION={{ current_version }}
```

2. Execute the following commands:
    
```bash
./docker-stop-services.sh  
```
{: .copy-code}  

{% include templates/warn-banner.md content=update_note %}

```bash
./docker-upgrade-tb.sh
```
{: .copy-code}  

```bash
./docker-start-services.sh
```
{: .copy-code}