{% capture edge-previousVersion %}
These steps are applicable for Edge {{previousVersion}} version.
{% endcapture %}
{% include templates/info-banner.md content=edge-previousVersion %}

Set the terminal in the directory which contains the "docker-compose.yml" file, and run the following command to stop and remove the currently running TB Edge container (if it's still running):
```
docker compose stop mytbedge
```
{: .copy-code}

Modify the main docker compose file (docker-compose.yml) for **ThingsBoard Edge** and update the image version:

```text
sed -i 's|thingsboard/tb-edge:{{previousVersion}}|thingsboard/tb-edge:{{versionName}}|' docker-compose.yml
```
{: .copy-code}

Upgrade the **ThingsBoard Edge** service:

```bash
docker compose run mytbedge upgrade-tb-edge.sh
```
{: .copy-code}

To start this docker compose, run the following command:
```
docker compose up -d && docker compose logs -f mytbedge
```
{: .copy-code}

