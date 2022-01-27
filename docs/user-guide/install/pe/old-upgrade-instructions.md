---
layout: docwithnav-pe
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
                <a href="#windows-3" id="markdown-toc-windows-4">Windows</a>
            </li>
        </ul>
    </li>
  <li>
        <a href="#upgrading-to-30pe" id="markdown-toc-upgrading-to-30pe">Upgrading to 3.0PE</a>
        <ul>
            <li>
                <a href="#ubuntucentos-4" id="markdown-toc-ubuntucentos-5">Ubuntu/CentOS</a>        
            </li>
            <li>
                <a href="#windows-4" id="markdown-toc-windows-5">Windows</a>
            </li>
        </ul>
    </li>
</ul>



## Prepare for upgrading ThingsBoard (CentOS, Ubuntu)

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

## Backup Database
Make a backup of the database before upgrading.  
#### PostgreSQL
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

#### Cassandra   
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

### Start Database
**Cassandra**  
```bash
sudo systemctl start cassandra
```
{: .copy-code}

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
sudo service thingsboard stop
```
{: .copy-code}

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

Execute upgrade script
```bash
sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=2.4.0 
```
{: .copy-code}

#### Start the service

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-2.4.1pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-2.4.1pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.
 
```text
net stop thingsboard
```
{: .copy-code}

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
{: .copy-code}

#### Start the service

```text
net start thingsboard
```
{: .copy-code}

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
sudo service thingsboard stop
```
{: .copy-code}

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

Execute upgrade script:
```bash
sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=2.4.1
```
{: .copy-code}

#### Start the service

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-2.4.2.1pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-2.4.2.1pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.
 
```text
net stop thingsboard
```
{: .copy-code}

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
{: .copy-code}

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
sudo service thingsboard stop
```
{: .copy-code}

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

Execute upgrade script:
```bash
sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=2.4.2
```
{: .copy-code}

#### Start the service

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-2.4.3pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-2.4.3pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.
 
```text
net stop thingsboard
```
{: .copy-code}

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
{: .copy-code}

#### Start the service

```text
net start thingsboard
```
{: .copy-code}

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
sudo service thingsboard stop
```
{: .copy-code}

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

**NOTE:** If you are using **PostgreSql(Sql)** for time-series data storage before executing the upgrade script, go to the PostgreSQL terminal(psql) and follow the instructions below: 

```bash
    # Connect to thingsboard database:
    \c thingsboard
    
    # Execute the next commands:
    
    # Update ts_kv table constraints:
    ALTER TABLE ts_kv DROP CONSTRAINT IF EXISTS ts_kv_unq_key;
    ALTER TABLE ts_kv DROP CONSTRAINT IF EXISTS ts_kv_pkey;
    ALTER TABLE ts_kv ADD CONSTRAINT ts_kv_pkey PRIMARY KEY (entity_type, entity_id, key, ts);
    
    # Update ts_kv_latest table constraints:
    ALTER TABLE ts_kv_latest DROP CONSTRAINT IF EXISTS ts_kv_latest_unq_key;
    ALTER TABLE ts_kv_latest DROP CONSTRAINT IF EXISTS ts_kv_latest_pkey;
    ALTER TABLE ts_kv_latest ADD CONSTRAINT ts_kv_latest_pkey PRIMARY KEY (entity_type, entity_id, key);
    
    # exit psql terminal 
    \q
```

Finally, execute upgrade script:
```bash
sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=2.4.3
```
{: .copy-code}

#### Start the service

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-2.5pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-2.5pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.
 
```text
net stop thingsboard
```
{: .copy-code}

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

**NOTE:** If you are using **PostgreSql(Sql)** for time-series data storage before executing the upgrade script, you need to access the psql terminal. Once you will be logged to the psql terminal, please follow the instructions below:

```bash
    # Connect to thingsboard database:
    \c thingsboard
    
    # Execute the next commands:
    
    # Update ts_kv table constraints:
    ALTER TABLE ts_kv DROP CONSTRAINT IF EXISTS ts_kv_unq_key;
    ALTER TABLE ts_kv DROP CONSTRAINT IF EXISTS ts_kv_pkey;
    ALTER TABLE ts_kv ADD CONSTRAINT ts_kv_pkey PRIMARY KEY (entity_type, entity_id, key, ts);
    
    # Update ts_kv_latest table constraints:
    ALTER TABLE ts_kv_latest DROP CONSTRAINT IF EXISTS ts_kv_latest_unq_key;
    ALTER TABLE ts_kv_latest DROP CONSTRAINT IF EXISTS ts_kv_latest_pkey;
    ALTER TABLE ts_kv_latest ADD CONSTRAINT ts_kv_latest_pkey PRIMARY KEY (entity_type, entity_id, key);
    
    # exit psql terminal 
    \q
```
{: .copy-code}

* Finally, run **upgrade.bat** script to upgrade ThingsBoard to the new version.

**NOTE** Scripts listed above should be executed using Administrator Role.

```text
C:\thingsboard>upgrade.bat --fromVersion=2.4.3
```
{: .copy-code}

#### Start the service

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 3.0PE

{% capture tb_3_0_upgrade_note %}
**Important note before upgrading to ThingsBoard 3.0PE**
 - TODO
{% endcapture %}
{% include templates/info-banner.md content=tb_3_0_upgrade_note %}

<br>

These steps are applicable for 2.5PE ThingsBoard Professional Edition version.

### Ubuntu/CentOS

{% capture tb_3_0_postgreSQL_linux %}
**Since ThingsBoard 3.0PE only PostgreSQL database is supported for entities data**  
 - If you are using **Cassandra** database for entities data please install PostgreSQL database before proceeding upgrade procedure using the following guide:
   - [PostgreSQL Installation on Ubuntu](/docs/user-guide/install/pe/ubuntu/?ubuntuThingsboardDatabase=postgresql#step-4-configure-thingsboard-database)
   - [PostgreSQL Installation on CentOS/RHEL](/docs/user-guide/install/pe/rhel/?rhelThingsboardDatabase=postgresql#step-4-configure-thingsboard-database)

{% endcapture %}
{% include templates/info-banner.md content=tb_3_0_postgreSQL_linux %}

#### ThingsBoard PE package download

{% capture tabspec %}thingsboard-download-3-0
thingsboard-download-3-0-ubuntu,Ubuntu,shell,resources/3.0.0pe/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/3.0.0pe/thingsboard-ubuntu-download.sh
thingsboard-download-3-0-centos,CentOS,shell,resources/3.0.0pe/thingsboard-centos-download.sh,/docs/user-guide/install/resources/3.0.0pe/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```bash
Sudo service thingsboard stop
```
{: .copy-code}

* Install Thingsboard Web Report component as described [here](/docs/user-guide/install/pe/ubuntu/#step-8-install-thingsboard-webreport-component).


{% capture tabspec %}thingsboard-installation-3-0
thingsboard-installation-3-0-ubuntu,Ubuntu,shell,resources/3.0.0pe/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/3.0.0pe/thingsboard-ubuntu-installation.sh
thingsboard-installation-3-0-centos,CentOS,shell,resources/3.0.0pe/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/3.0.0pe/thingsboard-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

**NOTE:** Package installer will ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.  
Please make sure that you set **database.ts.type** parameter value (in the file **/etc/thingsboard/conf/thingsboard.yml**) to "cassandra" instead of "sql" if you are using Cassandra database for timeseries data:

```
    database:
      ts_max_intervals: "${DATABASE_TS_MAX_INTERVALS:700}" # Max number of DB queries generated by single API call to fetch telemetry records
      ts:
        type: "${DATABASE_TS_TYPE:sql}" # cassandra, sql, or timescale (for hybrid mode, DATABASE_TS_TYPE value should be cassandra, or timescale)
```

**NOTE**: If you were using **Cassandra** database for entities data execute the following migration script: 

```bash
# Execute migration script from Cassandra to PostgreSQL
sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=2.5.0PE-cassandra
```
{: .copy-code}

Otherwise execute regular upgrade script:

```bash
sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=2.5.0
```
{: .copy-code}

#### Start the service

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows

{% capture tb_3_0_postgreSQL_windows %}
**Since ThingsBoard 3.0PE only PostgreSQL database is supported for entities data**  
 - If you are using **Cassandra** database for entities data please install PostgreSQL database before proceeding upgrade procedure using the following guide:
   - [PostgreSQL Installation on Windows](/docs/user-guide/install/pe/windows/?ubuntuThingsboardDatabase=postgresql#step-4-configure-thingsboard-database)

{% endcapture %}
{% include templates/info-banner.md content=tb_3_0_postgreSQL_windows %}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.0pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.0pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.
 
```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.0pe.exe**.
* Compare your old ThingsBoard configuration files (from the backup you made in the first step) with new ones.
* Please make sure that you set **database.ts.type** parameter value (in the file **\<ThingsBoard install dir\>\conf\thingsboard.yml**) to "cassandra" instead of "sql" if you are using Cassandra database for timeseries data:
  
```
    database:
      ts_max_intervals: "${DATABASE_TS_MAX_INTERVALS:700}" # Max number of DB queries generated by single API call to fetch telemetry records
      ts:
        type: "${DATABASE_TS_TYPE:sql}" # cassandra, sql, or timescale (for hybrid mode, DATABASE_TS_TYPE value should be cassandra, or timescale)
```       

* Finally, run **upgrade.bat** script to upgrade ThingsBoard to the new version.

**NOTE** Scripts listed above should be executed using Administrator Role.

**NOTE**: If you were using **Cassandra** database for entities data execute the following migration script: 

```text
C:\thingsboard>upgrade.bat --fromVersion=2.5.0PE-cassandra
```
{: .copy-code}

Otherwise execute regular upgrade script:

```text
C:\thingsboard>upgrade.bat --fromVersion=2.5.0
```
{: .copy-code}
#### Start the service

```text
net start thingsboard
```
{: .copy-code}


## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}
