---
layout: docwithnav
assignees:
- ashvayka
title: Upgrade instructions
description: ThingsBoard PE IoT platform upgrade instructions

---

<ul id="markdown-toc">
  <li>
    <a href="#upgrading-to-241pe" id="markdown-toc-upgrading-to-241pe">Upgrading to 2.4.1PE</a>
    <ul>
        <li>
            <a href="#ubuntucentos" id="markdown-toc-ubuntucentos-1">Ubuntu/CentOS</a>        
        </li>
        <li>
            <a href="#windows" id="markdown-toc-windows-1">Windows</a>        
        </li>
    </ul>
  </li>
  <li>
      <a href="#upgrading-to-2421pe" id="markdown-toc-upgrading-to-2421pe">Upgrading to 2.4.2.1PE</a>
      <ul>
          <li>
              <a href="#ubuntucentos-1" id="markdown-toc-ubuntucentos-2">Ubuntu/CentOS</a>        
          </li>
          <li>
              <a href="#windows-1" id="markdown-toc-windows-2">Windows</a>        
          </li>
      </ul>
  </li>
  <li>
      <a href="#upgrading-to-243pe" id="markdown-toc-upgrading-to-243pe">Upgrading to 2.4.3PE</a>
      <ul>
          <li>
              <a href="#ubuntucentos-2" id="markdown-toc-ubuntucentos-3">Ubuntu/CentOS</a>        
          </li>
          <li>
              <a href="#windows-2" id="markdown-toc-windows-3">Windows</a>
          </li>
      </ul>
  </li>
  <li>
        <a href="#upgrading-to-25pe" id="markdown-toc-upgrading-to-25pe">Upgrading to 2.5PE</a>
        <ul>
            <li>
                <a href="#ubuntucentos-3" id="markdown-toc-ubuntucentos-4">Ubuntu/CentOS</a>        
            </li>
            <li>
                <a href="#windows-3" id="markdown-toc-windows-3">Windows</a>
            </li>
        </ul>
    </li>
</ul>



## Prepare for upgrading ThingsBoard (CentOS, Ubuntu)

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
Make a backup of the database before upgrading.  
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
If there is enough free space - make a backup.
```bash
$ sudo -Hiu postgres pg_dump thingsboard > thingsboard.sql.bak
```
Check backup file being created.

#### Cassandra   
Check Cassandra status. It is necessary to stop Cassandra for the backup.

```
$ sudo systemctl status cassandra
```

Flush all memtables from the node to SSTables on disk.

```
$ nodetool drain
```

Stop Cassandra.

```
$ sudo systemctl stop cassandra
```

And you have to check the status again to ensure they are surely stopped.

```bash
$ sudo systemctl status cassandra
```

***Make sure you have enough space to place a backup of the database***  
Check database size.
```bash
$ du -h /var/lib/cassandra/ | tail -1
```

Check free space.
```bash
$ df -h /
```
Make a backup of Cassandra database.
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
Do nothing, postgresql is already running.  


## Upgrading to 2.4.1PE

These steps are applicable for 2.4.0PE ThingsBoard Professional Edition version.

### Ubuntu/CentOS

#### ThingsBoard PE package download

{% capture tabspec %}thingsboard-download-2-4-1
thingsboard-download-2-4-1-ubuntu,Ubuntu,shell,resources/2.4.1pe/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/2.4.1pe/thingsboard-ubuntu-download.sh
thingsboard-download-2-4-1-centos,CentOS,shell,resources/2.4.1pe/thingsboard-centos-download.sh,/docs/user-guide/install/resources/2.4.1pe/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```bash
$ sudo service thingsboard stop
```

* Install Thingsboard Web Report component as described [here](/docs/user-guide/install/pe/ubuntu/#step-8-install-thingsboard-webreport-component).


{% capture tabspec %}thingsboard-installation-2-4-1
thingsboard-installation-2-4-1-ubuntu,Ubuntu,shell,resources/2.4.1pe/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/2.4.1pe/thingsboard-ubuntu-installation.sh
thingsboard-installation-2-4-1-centos,CentOS,shell,resources/2.4.1pe/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/2.4.1pe/thingsboard-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

**NOTE:** Package installer will ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.  
Please make sure that you set **database.entities.type** and **database.ts.type** parameters values (in the file **/etc/thingsboard/conf/thingsboard.yml**) to "cassandra" instead of "sql" in order to upgrade your cassandra database:
 
```
    database:
      entities:
        type: "${DATABASE_ENTITIES_TYPE:cassandra}" # cassandra OR sql
      ts:
        type: "${DATABASE_TS_TYPE:cassandra}" # cassandra OR sql (for hybrid mode, only this value should be cassandra)
```

```bash
# Execute upgrade script
$ sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=2.4.0 
```

#### Start the service

```bash
$ sudo service thingsboard start
```

### Windows

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-2.4.1pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-2.4.1pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.
 
```text
net stop thingsboard
```

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-2.4.1pe.exe**.
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
C:\thingsboard>upgrade.bat --fromVersion=2.4.0
```

#### Start the service

```text
net start thingsboard
```

## Upgrading to 2.4.2.1PE

These steps are applicable for 2.4.1PE and 2.4.2PE ThingsBoard Professional Edition versions.

### Ubuntu/CentOS

#### ThingsBoard PE package download

{% capture tabspec %}thingsboard-download-2-4-2
thingsboard-download-2-4-2-ubuntu,Ubuntu,shell,resources/2.4.2.1pe/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/2.4.2.1pe/thingsboard-ubuntu-download.sh
thingsboard-download-2-4-2-centos,CentOS,shell,resources/2.4.2.1pe/thingsboard-centos-download.sh,/docs/user-guide/install/resources/2.4.2.1pe/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```bash
$ sudo service thingsboard stop
```

* Install Thingsboard Web Report component as described [here](/docs/user-guide/install/pe/ubuntu/#step-8-install-thingsboard-webreport-component).


{% capture tabspec %}thingsboard-installation-2-4-2
thingsboard-installation-2-4-2-ubuntu,Ubuntu,shell,resources/2.4.2.1pe/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/2.4.2.1pe/thingsboard-ubuntu-installation.sh
thingsboard-installation-2-4-2-centos,CentOS,shell,resources/2.4.2.1pe/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/2.4.2.1pe/thingsboard-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

**NOTE:** Package installer will ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.  
Please make sure that you set **database.entities.type** and **database.ts.type** parameters values (in the file **/etc/thingsboard/conf/thingsboard.yml**) to "cassandra" instead of "sql" in order to upgrade your cassandra database:
 
```
    database:
      entities:
        type: "${DATABASE_ENTITIES_TYPE:cassandra}" # cassandra OR sql
      ts:
        type: "${DATABASE_TS_TYPE:cassandra}" # cassandra OR sql (for hybrid mode, only this value should be cassandra)
```

```bash
# Execute upgrade script
$ sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=2.4.1
```

#### Start the service

```bash
$ sudo service thingsboard start
```

### Windows

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-2.4.2.1pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-2.4.2.1pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.
 
```text
net stop thingsboard
```

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-2.4.2.1pe.exe**.
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
C:\thingsboard>upgrade.bat --fromVersion=2.4.1
```

#### Start the service

```text
net start thingsboard
```

## Upgrading to 2.4.3PE

These steps are applicable for 2.4.2PE and 2.4.2.1PE ThingsBoard Professional Edition versions.

### Ubuntu/CentOS

#### ThingsBoard PE package download

{% capture tabspec %}thingsboard-download-2-4-3
thingsboard-download-2-4-3-ubuntu,Ubuntu,shell,resources/2.4.3pe/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/2.4.3pe/thingsboard-ubuntu-download.sh
thingsboard-download-2-4-3-centos,CentOS,shell,resources/2.4.3pe/thingsboard-centos-download.sh,/docs/user-guide/install/resources/2.4.3pe/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```bash
$ sudo service thingsboard stop
```

* Install Thingsboard Web Report component as described [here](/docs/user-guide/install/pe/ubuntu/#step-8-install-thingsboard-webreport-component).


{% capture tabspec %}thingsboard-installation-2-4-3
thingsboard-installation-2-4-3-ubuntu,Ubuntu,shell,resources/2.4.3pe/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/2.4.3pe/thingsboard-ubuntu-installation.sh
thingsboard-installation-2-4-3-centos,CentOS,shell,resources/2.4.3pe/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/2.4.3pe/thingsboard-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

**NOTE:** Package installer will ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.  
Please make sure that you set **database.entities.type** and **database.ts.type** parameters values (in the file **/etc/thingsboard/conf/thingsboard.yml**) to "cassandra" instead of "sql" in order to upgrade your cassandra database:
 
```
    database:
      entities:
        type: "${DATABASE_ENTITIES_TYPE:cassandra}" # cassandra OR sql
      ts:
        type: "${DATABASE_TS_TYPE:cassandra}" # cassandra OR sql (for hybrid mode, only this value should be cassandra)
```

```bash
# Execute upgrade script
$ sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=2.4.2
```

#### Start the service

```bash
$ sudo service thingsboard start
```

### Windows

#### ThingsBoard PE package download

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

#### Start the service

```text
net start thingsboard
```

## Upgrading to 2.5PE

These steps are applicable for 2.4.3PE ThingsBoard Professional Edition version.

### Ubuntu/CentOS

#### ThingsBoard PE package download

{% capture tabspec %}thingsboard-download-2-5
thingsboard-download-2-5-ubuntu,Ubuntu,shell,resources/2.5pe/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/2.5pe/thingsboard-ubuntu-download.sh
thingsboard-download-2-5-centos,CentOS,shell,resources/2.5pe/thingsboard-centos-download.sh,/docs/user-guide/install/resources/2.5pe/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```bash
$ sudo service thingsboard stop
```

* Install Thingsboard Web Report component as described [here](/docs/user-guide/install/pe/ubuntu/#step-8-install-thingsboard-webreport-component).


{% capture tabspec %}thingsboard-installation-2-5
thingsboard-installation-2-5-ubuntu,Ubuntu,shell,resources/2.5pe/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/2.5pe/thingsboard-ubuntu-installation.sh
thingsboard-installation-2-5-centos,CentOS,shell,resources/2.5pe/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/2.5pe/thingsboard-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

**NOTE:** Upgrading ThingsBoard PE from 2.4.3 to 2.5 version in case of using PostgreSQL database require to upgrade the PostgreSQL service to 11.x version.

Please refer to the guides below that will describe how to upgrade your PostgreSQL service on:

 - [Ubuntu](https://gist.github.com/ShvaykaD/1f0e6c1321a0a2b4b9f3b9ea9ab3e8d3)
 - [CentOS](https://gist.github.com/ShvaykaD/313745d31a9af6db3d6a01ec9f16aac8)
 
**NOTE:** Package installer will ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.  
Please make sure that you set **database.entities.type** and **database.ts.type** parameters values (in the file **/etc/thingsboard/conf/thingsboard.yml**) to "cassandra" instead of "sql" in order to upgrade your cassandra database:
 
```
database:
  ts_max_intervals: "${DATABASE_TS_MAX_INTERVALS:700}" # Max number of DB queries generated by single API call to fetch telemetry records
  entities:
    type: "${DATABASE_ENTITIES_TYPE:sql}" # cassandra OR sql
  ts:
    type: "${DATABASE_TS_TYPE:sql}" # cassandra, sql, or timescale (for hybrid mode, DATABASE_TS_TYPE value should be cassandra, or timescale)

# note: timescale works only with postgreSQL database for DATABASE_ENTITIES_TYPE.
```

```bash
# Execute upgrade script
$ sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=2.4.3
```

#### Start the service

```bash
$ sudo service thingsboard start
```

### Windows

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-2.5pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-2.5pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.
 
```text
net stop thingsboard
```

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-2.5pe.exe**.
* Compare your old ThingsBoard configuration files (from the backup you made in the first step) with new ones.
* Please note that upgrading ThingsBoard PE from 2.4.3 to 2.5 version in case of using PostgreSQL database require to upgrade the PostgreSQL service to 11.x version.
* Please make sure that you set **database.entities.type** and **database.ts.type** parameters values (in the file **\<ThingsBoard install dir\>\conf\thingsboard.yml**) to "cassandra" instead of "sql" in order to upgrade your cassandra database:
  
```
database:
  ts_max_intervals: "${DATABASE_TS_MAX_INTERVALS:700}" # Max number of DB queries generated by single API call to fetch telemetry records
  entities:
    type: "${DATABASE_ENTITIES_TYPE:sql}" # cassandra OR sql
  ts:
    type: "${DATABASE_TS_TYPE:sql}" # cassandra, sql, or timescale (for hybrid mode, DATABASE_TS_TYPE value should be cassandra, or timescale)

# note: timescale works only with postgreSQL database for DATABASE_ENTITIES_TYPE.
```       

* Run **upgrade.bat** script to upgrade ThingsBoard to the new version.

**NOTE** Scripts listed above should be executed using Administrator Role.

```text
C:\thingsboard>upgrade.bat --fromVersion=2.4.3
```

#### Start the service

```text
net start thingsboard
```


## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}
