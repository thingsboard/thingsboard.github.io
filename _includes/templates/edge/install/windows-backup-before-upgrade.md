## Backup before upgrading

{% capture check-space %}
Make sure your system has enough free space to store the backup.
{% endcapture %}
{% include templates/info-banner.md content=check-space %}

Stop the Edge service:

```text
net stop tb-edge
```
{: .copy-code}

To back up the database, follow these steps:

1. Launch **pgAdmin** and log in as the **postgres** superuser.
2. In the left sidebar, expand your server and locate the **tb_edge** database.
3. Right-click **tb_edge** and select **Backup**.
4. In the **Backup Dialog**, specify a filename and location for your backup.
5. Click **Backup** to create the backup file.
