### Prepare for upgrading ThingsBoard Edge

Back up your ThingsBoard Edge data before upgrading.

#### Stop the Edge container

Navigate to your **docker-compose.yml** directory and stop the container:

```
docker compose stop
```
{: .copy-code}

#### Backup the database volume

Before upgrading, make a **backup copy** of the database volume:

```bash
docker run --rm -v tb-edge-postgres-data:/source -v tb-edge-postgres-data-backup:/backup busybox sh -c "cp -a /source/. /backup"
```
{: .copy-code}

This copies all contents from **tb-edge-postgres-data** to **tb-edge-postgres-data-backup**.

#### Restore the backup (if needed)

{% include templates/edge/user-guide/backup/docker-restore-backup.md %}