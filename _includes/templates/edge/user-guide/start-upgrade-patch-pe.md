_**NOTE**: These steps are applicable for ThingsBoard {{previousVersion}} version._

Set the terminal in the directory which contains the "docker-compose.yml" file, and run the following command to stop and remove the currently running TB Edge container (if it's still running):
```
docker compose stop mytbedge
```
{: .copy-code}

Before upgrading, make a copy of the database volume:

```bash
docker run --rm -v tb-edge-postgres-data:/source -v tb-edge-postgres-data-backup:/backup busybox sh -c "cp -a /source/. /backup"
```
{: .copy-code}

Modify the main docker compose file (docker-compose.yml) for **ThingsBoard Edge** and update the image version:

```text
sed -i 's|thingsboard/tb-edge-pe:{{previousVersion}}|thingsboard/tb-edge-pe:{{versionName}}|' docker-compose.yml
```
{: .copy-code}

Start the docker compose:
```
docker compose up -d && docker compose logs -f mytbedge
```
{: .copy-code}

