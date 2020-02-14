---
layout: docwithnav
assignees:
- ashvayka
title: Upgrade instructions
description: ThingsBoard PE IoT platform upgrade instructions

---

* TOC
{:toc}

# Prerequisites
Follow this guide to upgrade from the existing version to the latest.  
Certain actions depend on the database used with ThingsBoard instance. Differences marked with the type of database

# Linux 
### Pay attention to this marks in the script!

**PostgreSQL**

Do this if postgres is used.

**Cassandra**

Do this if Cassandra is used - Hybrid or Standalone mode. 

## Check Current version of your ThingsBoard

```bash
$ dpkg -l | grep thingsboard
```
## Download new versions of packets

If you are going to update to the ThingsBoard not the last version, please, go with dist **thingsboard-X.X.X** Where **X.X.X** is the version of the ThingsBoard on which you want to update.
  
Todays latest version is **thingsboard-2.4.3** so in order to update to the latest version of Thingsboard you may proceed with the following script:  
  
**Latest version** 

**Ubuntu**
```bash
$ wget https://dist.thingsboard.io/thingsboard-2.4.3pe.deb
$ wget https://dist.thingsboard.io/tb-web-report-2.4.3pe.deb
```
**Centos**
```bash
$ wget https://dist.thingsboard.io/thingsboard-2.4.3pe.rpm
$ wget https://dist.thingsboard.io/tb-web-report-2.4.3pe.rpm
```

## Upgrading web-report
Check if web-report service is running  
```bash
$ sudo systemctl status tb-web-report  
```

**Stop web-report service**  
```bash
$ sudo systemctl stop tb-web-report  
```

And you have to check the status again to ensure it is stopped  
Install web-report

**Web-report service upgrade**
**Ubuntu**
```bash
$ sudo dpkg -i tb-web-report-2.4.3pe.deb
```

**Centos**
```bash
$ sudo rpm -Uvh tb-web-report-2.4.3pe.rpm
```

**Start web-report**
```
$ sudo systemctl start tb-web-report
```


## Prepare for upgrading ThingsBoard

**Stop ThingsBoard**
Check if ThingsBoard and database services are running 
Initially ThingsBoard, check status to ensure it is stopped and then databases.  
```
$ sudo systemctl stop thingsboard
```

```
$ sudo systemctl status thingsboard
```

## Backup Database
Make a backup of the database before upgrading  
#### PostgreSQL
Check PostgreSQL status. It is unnecessary to stop PostgreSQL for the backup.
```
$ sudo systemctl status postgresql
```
***Make sure you have enough space to place a backup of the database***  
Check database size
```bash
$ sudo -u postgres psql -c "SELECT pg_size_pretty( pg_database_size('thingsboard') );"
```
Check free space
```bash
$ df -h /
```
If there is enough free space - make a backup
```bash
$ sudo -Hiu postgres pg_dump thingsboard > thingsboard.sql.bak
```
Check backup file being created  

#### Cassandra   
Check Cassandra status. It is necessary to stop Cassandra for the backup.

```
$ sudo systemctl status cassandra
```

Flush all memtables from the node to SSTables on disk

```
$ nodetool drain
```

Stop Cassandra

```
$ sudo systemctl stop cassandra
```

And you have to check the status again to ensure they are surely stopped

```bash
$ sudo systemctl status cassandra
```

***Make sure you have enough space to place a backup of the database***  
Check database size
```bash
$ du -h /var/lib/cassandra/ | tail -1
```

Check free space
```bash
$ df -h /
```
Make a backup of Cassandra database
```bash
$ mkdir backup
$ sudo tar -cvf backup/cassandra.tar /var/lib/cassandra
```  
***Check archive being created***

### Start Database
**Cassandra**  
```
$ sudo systemctl start cassandra
```
**PostgreSQL**
Do nothing, postgresql is already running  

## Upgrading ThingsBoard package  
Backup ThingsBoard config files
```
$ sudo cp /etc/thingsboard/conf/thingsboard.conf /etc/thingsboard/conf/thingsboard.conf.bak
$ sudo cp /etc/thingsboard/conf/thingsboard.yml /etc/thingsboard/conf/thingsboard.yml.bak
```
Install new package  
**Ubuntu**
```
$ sudo dpkg -i thingsboard-2.4.1pe.deb
```  
**Centos**
```
$ sudo rpm -Uvh thingsboard-2.4.1pe.rpm
```
**Note for pre 2.4.0 versions updating**
***For the pre 2.4.0 versions before updating you have to get a new license key for the client provided by License Server.***

Open /etc/thingsboard/conf/thingsboard.conf, find string
```yml
...
export TB_LICENSE_SECRET=LICENSE_KEY
...
```
Put here license key

Now you have to compare config files and replace all existing settings values from the old config

```bash
/etc/thingsboard/conf/thingsboard.yml.bak
/etc/thingsboard/conf/thingsboard.conf.bak
```
To the new config file.

**Ubuntu**
```bash
/etc/thingsboard/conf/thingsboard.yml
```
**Centos**

```bash
/etc/thingsboard/conf/thingsboard.yml.rpmnew
```
**Upgrading**
Then run upgrading database schema.
***Replace --fromVersion value to current(installed) ThingsBoard version or earlier***
```bash
$ sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=2.4.1
```
Start ThingsBoard service
```bash
$ sudo systemctl start thingsboard
```
Check its status and logs
```bash
$ sudo systemctl status thingsboard
$ tail -f /var/log/thingsboard/thingsboard.log
```

***If there are no errors - update is finished***  
# Windows

**ThingsBoard PE package download**
Dists from the previous versions can be found here: 

* [thingsboard-windows-setup-2.4.1pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-2.4.1pe.exe)
* [thingsboard-windows-setup-2.4.2pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-2.4.2pe.exe)  

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-2.4.3pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-2.4.3pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.
 
```text
net stop thingsboard
```

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-2.4.3pe.exe**.
* Compare your old ThingsBoard configuration files (from the backup you made in the first step) with new ones.
* Please make sure that you set **database.entities.type** and **database.ts.type** parameters values (in the file **\<ThingsBoard install dir\>\conf\thingsboard.yml**) to "cassandra" instead of "sql" in order to upgrade your cassandra database:
  
  ```
  database:
    entities:
      type: "${DATABASE_ENTITIES_TYPE:cassandra}" # cassandra OR sql
    ts:
      type: "${DATABASE_TS_TYPE:cassandra}" # cassandra OR sql (for hybrid mode, only this value should be cassandra)
  ```       

* Run **upgrade.bat** script to upgrade ThingsBoard to the new version.

**NOTE** Scripts listed above should be executed using Administrator Role.

```text
C:\thingsboard>upgrade.bat --fromVersion=2.4.2
```

**Start the service**

```text
net start thingsboard
```

# Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}
