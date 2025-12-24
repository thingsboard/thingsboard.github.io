## Prepare for upgrading ThingsBoard Edge

To ensure data integrity during the upgrade, back up your ThingsBoard Edge data.

### Stop the Edge service

Stop the ThingsBoard Edge service to prevent data writes during the upgrade:

```bash
sudo systemctl stop tb-edge
```
{: .copy-code}

### Back up the database

Create a database backup before upgrading to avoid potential data loss.

{% capture check-space %}
Make sure your system has enough free space to store the backup.
{% endcapture %}
{% include templates/info-banner.md content=check-space %}

Check the current database size:

```bash
sudo -u postgres psql -c "SELECT pg_size_pretty( pg_database_size('tb_edge') );"
```
{: .copy-code}

Check available disk space:

```bash
df -h /
```
{: .copy-code}

Create the backup:

```bash
sudo -Hiu postgres pg_dump tb_edge > tb_edge.sql.bak
```
{: .copy-code}

Verify the backup was created successfully:

```bash
ls -lh tb_edge.sql.bak
```
{: .copy-code}

### Restore the backup (if needed)

{% include templates/edge/user-guide/backup/ubuntu-restore-backup.md %}