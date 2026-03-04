{% capture patch_restrictions %}
If you are upgrading from **{{minorVersion}}**, you **MUST** run the script below.{% if showPatchWarning %} However, if you are upgrading from version **{{mainteneceVersion}}**,
**DO NOT** run the upgrade script; proceed directly to starting the Edge service.{% endif %}
{% endcapture -%}

{% include templates/warn-banner.md content=patch_restrictions %}

{% if page.url contains 'centos' or page.url contains 'ubuntu' %}

Upgrade the **ThingsBoard Edge** service:
```bash
sudo /usr/share/tb-edge/bin/install/upgrade.sh 
```
{: .copy-code}

{% elsif page.url contains 'windows' %}
Upgrade the **ThingsBoard Edge** service:
```bash
C:\tb-edge>upgrade.bat 
```
{: .copy-code}
**Note:** The upgrade script must be run with Administrator privileges.

{% elsif page.url contains 'docker' %}
Upgrade the **ThingsBoard Edge** service:
```bash
docker compose run mytbedge upgrade-tb-edge.sh
```
{: .copy-code}
{% endif %}