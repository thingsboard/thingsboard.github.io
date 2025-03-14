_**NOTE**: These steps are applicable for ThingsBoard {{previousVersion}} version._

Set the terminal in the directory which contains the "docker-compose.yml" file, and run the following command to stop and remove the currently running TB Edge container (if it's still running):
```
docker compose stop && docker compose rm mytbedge -f
```
{: .copy-code}

#### Backup Database

Before upgrading, make a copy of the database volume:

```bash
docker run --rm -v tb-edge-postgres-data:/source -v tb-edge-postgres-data-backup:/backup busybox sh -c "cp -a /source/. /backup"
```
{: .copy-code}

The next step creates a docker compose file for the **ThingsBoard Edge upgrade** process and runs the upgrade. 
Once the upgrade process is successfully completed, the TB Edge upgrade container is automatically stopped:

```
cat > docker-compose-upgrade.yml <<EOF && docker compose -f docker-compose-upgrade.yml up --abort-on-container-exit
version: '3.8'
services:
  mytbedge:
    restart: on-failure
    image: "thingsboard/tb-edge-pe:{{versionName}}"
    environment:
      SPRING_DATASOURCE_URL: jdbc:postgresql://postgres:5432/tb-edge
    volumes:
      - tb-edge-data:/data
      - tb-edge-logs:/var/log/tb-edge
    entrypoint: upgrade-tb-edge.sh
  postgres:
    restart: always
    image: "postgres:15"
    ports:
      - "5432"
    environment:
      POSTGRES_DB: tb-edge
      POSTGRES_PASSWORD: postgres
    volumes:
      - tb-edge-postgres-data:/var/lib/postgresql/data

volumes:
  tb-edge-data:
    name: tb-edge-data
  tb-edge-logs:
    name: tb-edge-logs
  tb-edge-postgres-data:
    name: tb-edge-postgres-data

EOF
```
{: .copy-code.expandable-9}

Modify the main docker compose file (docker-compose.yml) for **ThingsBoard Edge** and update the image version:

```text
sed -i 's|thingsboard/tb-edge-pe:{{previousVersion}}|thingsboard/tb-edge-pe:{{versionName}}|' docker-compose.yml
```
{: .copy-code}

To start this docker compose, run the following command:
```
docker compose up -d && docker compose logs -f mytbedge
```
{: .copy-code}

