## Backup before upgrading

{% capture check-space %}
Make sure your system has enough free space to store the backup.
{% endcapture %}
{% include templates/info-banner.md content=check-space %}

Go to your **docker-compose.yml** directory and stop the container:

```bash
docker compose stop
```
{: .copy-code}

Before upgrading, make a **backup copy** of the database volume:

```bash
docker run --rm -v tb-edge-postgres-data:/source -v tb-edge-postgres-data-backup:/backup busybox sh -c "cp -a /source/. /backup"
```
{: .copy-code}

This copies all contents from **tb-edge-postgres-data** to **tb-edge-postgres-data-backup**.

### Restore the backup (if needed)

{% include templates/edge/user-guide/backup/docker-restore-backup.md %}