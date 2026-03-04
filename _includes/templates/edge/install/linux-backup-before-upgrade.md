## Backup before upgrading

{% capture check-space %}
Make sure your system has enough free space to store the backup.
{% endcapture %}
{% include templates/info-banner.md content=check-space %}

Stop the ThingsBoard Edge service to prevent data writes during the upgrade:

```bash
sudo systemctl stop tb-edge
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