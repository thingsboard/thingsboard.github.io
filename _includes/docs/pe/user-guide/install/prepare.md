### Prepare for upgrading ThingsBoard 

**Stop ThingsBoard**
Check if ThingsBoard and database services are running
Initially ThingsBoard, check status to ensure it is stopped and then databases.
```bash
sudo systemctl stop thingsboard
```
{: .copy-code}

```bash
sudo systemctl status thingsboard
```
{: .copy-code}

#### Backup Database
Make a backup of the database before upgrading.
##### PostgreSQL
Check PostgreSQL status. It is unnecessary to stop PostgreSQL for the backup.
```bash
sudo systemctl status postgresql
```
{: .copy-code}

***Make sure you have enough space to place a backup of the database***
Check database size
```bash
sudo -u postgres psql -c "SELECT pg_size_pretty( pg_database_size('thingsboard') );"
```
{: .copy-code}
Check free space

```bash
df -h /
```
{: .copy-code}

If there is enough free space - make a backup.
```bash
sudo -Hiu postgres pg_dump thingsboard > thingsboard.sql.bak
```
{: .copy-code}

Check backup file being created.

##### Cassandra
Check Cassandra status. It is necessary to stop Cassandra for the backup.

```bash
sudo systemctl status cassandra
```
{: .copy-code}

Flush all memtables from the node to SSTables on disk.

```bash
nodetool drain
```
{: .copy-code}

Stop Cassandra.

```bash
sudo systemctl stop cassandra
```
{: .copy-code}
And you have to check the status again to ensure they are surely stopped.

```bash
sudo systemctl status cassandra
```
{: .copy-code}

***Make sure you have enough space to place a backup of the database***
Check database size.
```bash
du -h /var/lib/cassandra/ | tail -1
```
{: .copy-code}

Check free space.
```bash
df -h /
```
{: .copy-code}

Make a backup of Cassandra database.
```bash
mkdir backup
sudo tar -cvf backup/cassandra.tar /var/lib/cassandra
```
{: .copy-code}

***Check archive being created***

#### Start Database
**Cassandra**
```bash
sudo systemctl start cassandra
```
{: .copy-code}

**PostgreSQL**
Do nothing, postgresql is already running.