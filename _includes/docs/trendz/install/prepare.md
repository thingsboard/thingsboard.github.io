### Prepare for upgrading Trendz Analytics

**Stop Trendz Analytics**
Check if Trendz and database services are stopped.
```bash
sudo systemctl stop trendz
```
{: .copy-code}

```bash
sudo systemctl status trendz
```
{: .copy-code}

#### Backup Database
Make a backup of the database before upgrading.

Check PostgreSQL status. It is unnecessary to stop PostgreSQL for the backup.
```bash
sudo systemctl status postgresql
```
{: .copy-code}

***Make sure you have enough space to place a backup of the database***

Check database size
```bash
sudo -u postgres psql -c "SELECT pg_size_pretty( pg_database_size('trendz') );"
```
{: .copy-code}
Check free space

```bash
df -h /
```
{: .copy-code}

If there is enough free space - make a backup.
```bash
sudo -Hiu postgres pg_dump trendz > trendz.sql.bak
```
{: .copy-code}

Check backup file being created.