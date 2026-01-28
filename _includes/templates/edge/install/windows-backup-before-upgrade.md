## Prepare for upgrading ThingsBoard Edge

To ensure data integrity during the upgrade, back up your ThingsBoard Edge data.

### Stop the Edge service

```text
net stop tb-edge
```
{: .copy-code}

### Back up the database

1. Launch **pgAdmin** and log in as the **postgres** superuser.
2. In the left sidebar, expand your server and locate the **tb_edge** database.
3. Right-click **tb_edge** and select **Backup**.
4. In the **Backup Dialog**, specify a filename and location for your backup.
5. Click **Backup** to create the backup file.
