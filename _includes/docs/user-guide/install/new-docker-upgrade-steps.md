{% assign current_version = include.version %}
{% assign previous_version = include.previous_version %}
{%- assign family = include.family -%}

{% capture update_note %}
{% assign base_version_parts = base_version | split: "." %}
{% assign patch_part = base_version_parts[2] %}
{% if patch_status == "true" %}
If you are upgrading from {{ previous_version }}, you **must** run the script below. However, if you are upgrading from version {{ family | append: "." | append: patch_part | append: ".x" }}, **DO NOT** run the upgrade script; proceed directly to starting the service.
{% else %}
If you are upgrading from version {{ previous_version }}, you must run the script below
{% endif %}
{% endcapture %}


1. Change the version of the `thingsboard/tb-node` in the `docker-compose.yml` file to the **{{ current_version }}**.

2. Execute the following commands:

 ```bash
 docker pull thingsboard/tb-node:{{ current_version }}
 docker compose stop thingsboard-ce
 ```
 {: .copy-code}

 {% include templates/warn-banner.md content=update_note %}

 ```bash
 docker compose run --rm -e UPGRADE_TB=true thingsboard-ce 
 ```
 {: .copy-code}  

 ```bash
 docker compose up -d
 ```   
 {: .copy-code}