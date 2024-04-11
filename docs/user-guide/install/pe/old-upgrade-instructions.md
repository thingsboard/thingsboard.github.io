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
        <a href="#upgrading-to-251pe" id="markdown-toc-upgrading-to-251">Upgrading to 2.5.1PE</a>
        <ul>
             <li>
                 <a href="#ubuntucentos-251" id="markdown-toc-ubuntucentos-20">Ubuntu/CentOS</a>
             </li>
             <li>
                 <a href="#windows-251" id="markdown-toc-windows-20">Windows</a>
             </li>
        </ul>
  </li>
  <li>
        <a href="#upgrading-to-252pe" id="markdown-toc-upgrading-to-252">Upgrading to 2.5.2PE</a>
        <ul>
             <li>
                 <a href="#ubuntucentos-252" id="markdown-toc-ubuntucentos-252">Ubuntu/CentOS</a>
             </li>
             <li>
                 <a href="#windows-252" id="markdown-toc-windows-252">Windows</a>
             </li>
        </ul>
  </li>
  <li>
        <a href="#upgrading-to-253pe" id="markdown-toc-upgrading-to-253">Upgrading to 2.5.3PE</a>
        <ul>
             <li>
                 <a href="#ubuntucentos-253" id="markdown-toc-ubuntucentos-253">Ubuntu/CentOS</a>
             </li>
             <li>
                 <a href="#windows-253" id="markdown-toc-windows-253">Windows</a>
             </li>
        </ul>
    </li>
  <li>
        <a href="#upgrading-to-254pe" id="markdown-toc-upgrading-to-254">Upgrading to 2.5.4PE</a>
        <ul>
             <li>
                 <a href="#ubuntucentos-254" id="markdown-toc-ubuntucentos-254">Ubuntu/CentOS</a>
             </li>
             <li>
                 <a href="#windows-254" id="markdown-toc-windows-254">Windows</a>
             </li>
        </ul>
  </li>
  <li>
        <a href="#upgrading-to-255pe" id="markdown-toc-upgrading-to-255">Upgrading to 2.5.5PE</a>
        <ul>
             <li>
                 <a href="#ubuntucentos-255" id="markdown-toc-ubuntucentos-255">Ubuntu/CentOS</a>
             </li>
             <li>
                 <a href="#windows-255" id="markdown-toc-windows-255">Windows</a>
             </li>
        </ul>
  </li>
  <li>
        <a href="#upgrading-to-256pe" id="markdown-toc-upgrading-to-256">Upgrading to 2.5.6PE</a>
        <ul>
             <li>
                 <a href="#ubuntucentos-256" id="markdown-toc-ubuntucentos-256">Ubuntu/CentOS</a>
             </li>
             <li>
                 <a href="#windows-256" id="markdown-toc-windows-256">Windows</a>
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
  <li>
        <a href="#upgrading-to-301pe" id="markdown-toc-upgrading-to-301pe">Upgrading to 3.0.1PE</a>
        <ul>
            <li>
                <a href="#ubuntucentos-301" id="markdown-toc-ubuntucentos-301">Ubuntu/CentOS</a>
            </li>
            <li>
                <a href="#windows-301" id="markdown-toc-windows-301">Windows</a>
            </li>
        </ul>
    </li>
  <li>
          <a href="#upgrading-to-31pe" id="markdown-toc-upgrading-to-31pe">Upgrading to 3.1PE</a>
          <ul>
              <li>
                  <a href="#ubuntucentos-31" id="markdown-toc-ubuntucentos-31">Ubuntu/CentOS</a>
              </li>
              <li>
                  <a href="#windows-31" id="markdown-toc-windows-31">Windows</a>
              </li>
          </ul>
      </li>
  <li>
      <a href="#upgrading-to-311pe" id="markdown-toc-upgrading-to-311pe">Upgrading to 3.1.1PE</a>
      <ul>
          <li>
              <a href="#ubuntucentos-311" id="markdown-toc-ubuntucentos-311">Ubuntu/CentOS</a>
          </li>
          <li>
              <a href="#windows-311" id="markdown-toc-windows-311">Windows</a>
          </li>
      </ul>
  </li>
  <li>
      <a href="#upgrading-to-32pe" id="markdown-toc-upgrading-to-32pe">Upgrading to 3.2PE</a>
      <ul>
          <li>
              <a href="#ubuntucentos-32" id="markdown-toc-ubuntucentos-32">Ubuntu/CentOS</a>
          </li>
          <li>
              <a href="#windows-32" id="markdown-toc-windows-32">Windows</a>
          </li>
      </ul>
  </li>
  <li>
      <a href="#upgrading-to-321pe" id="markdown-toc-upgrading-to-321pe">Upgrading to 3.2.1PE</a>
      <ul>
          <li>
              <a href="#ubuntucentos-321" id="markdown-toc-ubuntucentos-321">Ubuntu/CentOS</a>
          </li>
          <li>
              <a href="#windows-321" id="markdown-toc-windows-321">Windows</a>
          </li>
      </ul>
  </li>
  <li>
      <a href="#upgrading-to-322pe" id="markdown-toc-upgrading-to-322pe">Upgrading to 3.2.2PE</a>
      <ul>
          <li>
              <a href="#ubuntucentos-322" id="markdown-toc-ubuntucentos-322">Ubuntu/CentOS</a>
          </li>
          <li>
              <a href="#windows-322" id="markdown-toc-windows-322">Windows</a>
          </li>
      </ul>
  </li>
  <li>
      <a href="#upgrading-to-33pe" id="markdown-toc-upgrading-to-33pe">Upgrading to 3.3PE</a>
      <ul>
          <li>
              <a href="#ubuntucentos-33" id="markdown-toc-ubuntucentos-33">Ubuntu/CentOS</a>
          </li>
          <li>
              <a href="#windows-33" id="markdown-toc-windows-33">Windows</a>
          </li>
      </ul>
  </li>
  <li>
      <a href="#upgrading-to-331pe" id="markdown-toc-upgrading-to-331pe">Upgrading to 3.3.1PE</a>
      <ul>
          <li>
              <a href="#ubuntucentos-331" id="markdown-toc-ubuntucentos-331">Ubuntu/CentOS</a>
          </li>
          <li>
              <a href="#windows-331" id="markdown-toc-windows-331">Windows</a>
          </li>
      </ul>
  </li>
  <li>
      <a href="#upgrading-to-332pe" id="markdown-toc-upgrading-to-332pe">Upgrading to 3.3.2PE</a>
      <ul>
          <li>
              <a href="#ubuntucentos-332" id="markdown-toc-ubuntucentos-332">Ubuntu/CentOS</a>
          </li>
          <li>
              <a href="#windows-332" id="markdown-toc-windows-332">Windows</a>
          </li>
      </ul>
  </li>
  <li>
      <a href="#upgrading-to-333pe" id="markdown-toc-upgrading-to-333pe">Upgrading to 3.3.3PE</a>
      <ul>
          <li>
              <a href="#ubuntucentos-333" id="markdown-toc-ubuntucentos-333">Ubuntu/CentOS</a>
          </li>
          <li>
              <a href="#windows-333" id="markdown-toc-windows-333">Windows</a>
          </li>
      </ul>
  </li>
  <li>
      <a href="#upgrading-to-334pe" id="markdown-toc-upgrading-to-334pe">Upgrading to 3.3.4PE</a>
      <ul>
          <li>
              <a href="#ubuntucentos-334" id="markdown-toc-ubuntucentos-334">Ubuntu/CentOS</a>
          </li>
          <li>
              <a href="#windows-334" id="markdown-toc-windows-334">Windows</a>
          </li>
      </ul>
  </li>
  <li>
      <a href="#upgrading-to-3341pe" id="markdown-toc-upgrading-to-3341pe">Upgrading to 3.3.4.1PE</a>
      <ul>
          <li>
              <a href="#ubuntucentos-3341" id="markdown-toc-ubuntucentos-3341">Ubuntu/CentOS</a>
          </li>
          <li>
              <a href="#windows-3341" id="markdown-toc-windows-3341">Windows</a>
          </li>
      </ul>
  </li>
  <li>
      <a href="#upgrading-to-34pe" id="markdown-toc-upgrading-to-34pe">Upgrading to 3.4PE</a>
      <ul>
          <li>
              <a href="#ubuntucentos-34" id="markdown-toc-ubuntucentos-34">Ubuntu/CentOS</a>
          </li>
          <li>
              <a href="#windows-34" id="markdown-toc-windows-34">Windows</a>
          </li>
      </ul>
  </li>
  <li>
      <a href="#upgrading-to-341pe" id="markdown-toc-upgrading-to-341pe">Upgrading to 3.4.1PE</a>
      <ul>
          <li>
              <a href="#ubuntucentos-341" id="markdown-toc-ubuntucentos-341">Ubuntu/CentOS</a>
          </li>
          <li>
              <a href="#windows-341" id="markdown-toc-windows-341">Windows</a>
          </li>
      </ul>
  </li>
  <li>
      <a href="#upgrading-to-342pe" id="markdown-toc-upgrading-to-342pe">Upgrading to 3.4.2PE</a>
      <ul>
          <li>
              <a href="#ubuntucentos-342" id="markdown-toc-ubuntucentos-342">Ubuntu/CentOS</a>
          </li>
          <li>
              <a href="#windows-342" id="markdown-toc-windows-342">Windows</a>
          </li>
      </ul>
  </li>
  <li>
      <a href="#upgrading-to-343pe" id="markdown-toc-upgrading-to-343pe">Upgrading to 3.4.3PE</a>
      <ul>
          <li>
              <a href="#ubuntucentos-343" id="markdown-toc-ubuntucentos-343">Ubuntu/CentOS</a>
          </li>
          <li>
              <a href="#windows-343" id="markdown-toc-windows-343">Windows</a>
          </li>
      </ul>
  </li>
  <li>
      <a href="#upgrading-to-344pe" id="markdown-toc-upgrading-to-344pe">Upgrading to 3.4.4PE</a>
      <ul>
          <li>
              <a href="#ubuntucentos-344" id="markdown-toc-ubuntucentos-344">Ubuntu/CentOS</a>
          </li>
          <li>
              <a href="#windows-344" id="markdown-toc-windows-344">Windows</a>
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

## Upgrading to 2.5.1PE

These steps are applicable for 2.4.3PE ThingsBoard Professional Edition version.

### Ubuntu/CentOS {#ubuntucentos-251}

#### ThingsBoard PE package download

{% capture tabspec %}thingsboard-download-2-5
thingsboard-download-2-5-1-ubuntu,Ubuntu,shell,resources/2.5.1pe/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/2.5.1pe/thingsboard-ubuntu-download.sh
thingsboard-download-2-5-1-centos,CentOS,shell,resources/2.5.1pe/thingsboard-centos-download.sh,/docs/user-guide/install/resources/2.5.1pe/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

* Install Thingsboard Web Report component as described [here](/docs/user-guide/install/pe/ubuntu/#step-8-install-thingsboard-webreport-component).


{% capture tabspec %}thingsboard-installation-2-5-1
thingsboard-installation-2-5-1-ubuntu,Ubuntu,shell,resources/2.5.1pe/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/2.5.1pe/thingsboard-ubuntu-installation.sh
thingsboard-installation-2-5-1-centos,CentOS,shell,resources/2.5.1pe/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/2.5.1pe/thingsboard-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

**NOTE:** Upgrading ThingsBoard PE from 2.4.3 to 2.5.1 version in case of using PostgreSQL database require to upgrade the PostgreSQL service to 11.x version.

Please refer to the guides below that will describe how to upgrade your PostgreSQL service on:

- [Ubuntu](https://gist.github.com/ShvaykaD/1f0e6c1321a0a2b4b9f3b9ea9ab3e8d3)
- [CentOS](https://gist.github.com/ShvaykaD/313745d31a9af6db3d6a01ec9f16aac8)

**NOTE:** Package installer will ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.

Finally, execute upgrade script:
```bash
sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=2.4.3
```
{: .copy-code}

#### Start the service

{% include templates/redis-post-upgrade-notice.md %}

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows {#windows-251}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-2.5.1pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-2.5.1pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-2.5.1pe.exe**.
* Compare your old ThingsBoard configuration files (from the backup you made in the first step) with new ones.
* Please note that upgrading ThingsBoard PE from 2.4.3 to 2.5.1 version in case of using PostgreSQL database require to upgrade the PostgreSQL service to 11.x version.

* Finally, run **upgrade.bat** script to upgrade ThingsBoard to the new version.

**NOTE** Scripts listed above should be executed using Administrator Role.

```text
C:\thingsboard>upgrade.bat --fromVersion=2.4.3
```
{: .copy-code}

#### Start the service

{% include templates/redis-post-upgrade-notice.md %}

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 2.5.2PE

### Ubuntu/CentOS {#ubuntucentos-252}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 2.5.1PE. In order to upgrade to 2.5.2PE you need to [**upgrade to 2.5.1PE first**](/docs/user-guide/install/pe/upgrade-instructions/#ubuntucentos-251).

#### ThingsBoard PE package download

{% capture tabspec %}thingsboard-download-2-5-2
thingsboard-download-2-5-2-ubuntu,Ubuntu,shell,resources/2.5.2pe/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/2.5.2pe/thingsboard-ubuntu-download.sh
thingsboard-download-2-5-2-centos,CentOS,shell,resources/2.5.2pe/thingsboard-centos-download.sh,/docs/user-guide/install/resources/2.5.2pe/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

* Install Thingsboard Web Report component as described [here](/docs/user-guide/install/pe/ubuntu/#step-8-install-thingsboard-webreport-component).


{% capture tabspec %}thingsboard-installation-2-5-2
thingsboard-installation-2-5-2-ubuntu,Ubuntu,shell,resources/2.5.2pe/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/2.5.2pe/thingsboard-ubuntu-installation.sh
thingsboard-installation-2-5-2-centos,CentOS,shell,resources/2.5.2pe/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/2.5.2pe/thingsboard-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

**NOTE:** Upgrading ThingsBoard to 2.5.2 version in case of using PostgreSQL database require to upgrade the PostgreSQL service to 11.x version.

Please refer to the guides below that will describe how to upgrade your PostgreSQL service on:

- [Ubuntu](https://gist.github.com/ShvaykaD/1f0e6c1321a0a2b4b9f3b9ea9ab3e8d3)
- [CentOS](https://gist.github.com/ShvaykaD/313745d31a9af6db3d6a01ec9f16aac8)

**NOTE:** Package installer will ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.

#### Start the service

{% include templates/redis-post-upgrade-notice.md %}

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows {#windows-252}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 2.5.1PE. In order to upgrade to 2.5.2PE you need to [**upgrade to 2.5.1PE first**](/docs/user-guide/install/pe/upgrade-instructions/#windows-251).

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-2.5.2pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-2.5.2pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-2.5.2pe.exe**.
* Compare your old ThingsBoard configuration files (from the backup you made in the first step) with new ones.
* Please note that upgrading ThingsBoard PE from 2.4.3 to 2.5.1 version in case of using PostgreSQL database require to upgrade the PostgreSQL service to 11.x version.

* Finally, run **upgrade.bat** script to upgrade ThingsBoard to the new version.

**NOTE** Scripts listed above should be executed using Administrator Role.

```text
C:\thingsboard>upgrade.bat --fromVersion=2.4.3
```
{: .copy-code}

#### Start the service

{% include templates/redis-post-upgrade-notice.md %}

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 2.5.3PE

### Ubuntu/CentOS {#ubuntucentos-253}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 2.5.2PE. In order to upgrade to 2.5.3PE you need to [**upgrade to 2.5.2PE first**](/docs/user-guide/install/pe/upgrade-instructions/#ubuntucentos-252).

#### ThingsBoard PE package download

{% capture tabspec %}thingsboard-download-2-5-3
thingsboard-download-2-5-3-ubuntu,Ubuntu,shell,resources/2.5.3pe/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/2.5.3pe/thingsboard-ubuntu-download.sh
thingsboard-download-2-5-3-centos,CentOS,shell,resources/2.5.3pe/thingsboard-centos-download.sh,/docs/user-guide/install/resources/2.5.3pe/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

* Install Thingsboard Web Report component as described [here](/docs/user-guide/install/pe/ubuntu/#step-8-install-thingsboard-webreport-component).


{% capture tabspec %}thingsboard-installation-2-5-3
thingsboard-installation-2-5-3-ubuntu,Ubuntu,shell,resources/2.5.3pe/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/2.5.3pe/thingsboard-ubuntu-installation.sh
thingsboard-installation-2-5-3-centos,CentOS,shell,resources/2.5.3pe/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/2.5.3pe/thingsboard-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

**NOTE:** Package installer will ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.

#### Start the service

{% include templates/redis-post-upgrade-notice.md %}

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows {#windows-253}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 2.5.2PE. In order to upgrade to 2.5.3PE you need to [**upgrade to 2.5.2PE first**](/docs/user-guide/install/pe/upgrade-instructions/#windows-252).

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-2.5.3pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-2.5.3pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-2.5.3pe.exe**.
* Compare your old ThingsBoard configuration files (from the backup you made in the first step) with new ones.

#### Start the service

{% include templates/redis-post-upgrade-notice.md %}

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 2.5.4PE

### Ubuntu/CentOS {#ubuntucentos-254}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 2.5.3PE. In order to upgrade to 2.5.4PE you need to [**upgrade to 2.5.3PE first**](/docs/user-guide/install/pe/upgrade-instructions/#ubuntucentos-253).

#### ThingsBoard PE package download

{% capture tabspec %}thingsboard-download-2-5-4
thingsboard-download-2-5-4-ubuntu,Ubuntu,shell,resources/2.5.4pe/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/2.5.4pe/thingsboard-ubuntu-download.sh
thingsboard-download-2-5-4-centos,CentOS,shell,resources/2.5.4pe/thingsboard-centos-download.sh,/docs/user-guide/install/resources/2.5.4pe/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

* Install Thingsboard Web Report component as described [here](/docs/user-guide/install/pe/ubuntu/#step-9-install-thingsboard-webreport-component).


{% capture tabspec %}thingsboard-installation-2-5-4
thingsboard-installation-2-5-4-ubuntu,Ubuntu,shell,resources/2.5.4pe/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/2.5.4pe/thingsboard-ubuntu-installation.sh
thingsboard-installation-2-5-4-centos,CentOS,shell,resources/2.5.4pe/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/2.5.4pe/thingsboard-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

**NOTE:** Package installer will ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.

#### Start the service

{% include templates/redis-post-upgrade-notice.md %}

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows {#windows-254}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 2.5.3PE. In order to upgrade to 2.5.4PE you need to [**upgrade to 2.5.3PE first**](/docs/user-guide/install/pe/upgrade-instructions/#windows-253).

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-2.5.4pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-2.5.4pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-2.5.4pe.exe**.
* Compare your old ThingsBoard configuration files (from the backup you made in the first step) with new ones.

#### Start the service

{% include templates/redis-post-upgrade-notice.md %}

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 2.5.5PE

### Ubuntu/CentOS {#ubuntucentos-255}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 2.5.4PE. In order to upgrade to 2.5.5PE you need to [**upgrade to 2.5.4PE first**](/docs/user-guide/install/pe/upgrade-instructions/#ubuntucentos-254).

#### ThingsBoard PE package download

{% capture tabspec %}thingsboard-download-2-5-5
thingsboard-download-2-5-5-ubuntu,Ubuntu,shell,resources/2.5.5pe/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/2.5.5pe/thingsboard-ubuntu-download.sh
thingsboard-download-2-5-5-centos,CentOS,shell,resources/2.5.5pe/thingsboard-centos-download.sh,/docs/user-guide/install/resources/2.5.5pe/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

* Install Thingsboard Web Report component as described [here](/docs/user-guide/install/pe/ubuntu/#step-9-install-thingsboard-webreport-component).


{% capture tabspec %}thingsboard-installation-2-5-5
thingsboard-installation-2-5-5-ubuntu,Ubuntu,shell,resources/2.5.5pe/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/2.5.5pe/thingsboard-ubuntu-installation.sh
thingsboard-installation-2-5-5-centos,CentOS,shell,resources/2.5.5pe/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/2.5.5pe/thingsboard-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

**NOTE:** Package installer will ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.

#### Start the service

{% include templates/redis-post-upgrade-notice.md %}

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows {#windows-255}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 2.5.4PE. In order to upgrade to 2.5.5PE you need to [**upgrade to 2.5.4PE first**](/docs/user-guide/install/pe/upgrade-instructions/#windows-254).

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-2.5.5pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-2.5.5pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-2.5.5pe.exe**.
* Compare your old ThingsBoard configuration files (from the backup you made in the first step) with new ones.

#### Start the service

{% include templates/redis-post-upgrade-notice.md %}

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 2.5.6PE

### Ubuntu/CentOS {#ubuntucentos-256}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 2.5.5PE. In order to upgrade to 2.5.6PE you need to [**upgrade to 2.5.5PE first**](/docs/user-guide/install/pe/upgrade-instructions/#ubuntucentos-255).

#### ThingsBoard PE package download

{% capture tabspec %}thingsboard-download-2-5-6
thingsboard-download-2-5-6-ubuntu,Ubuntu,shell,resources/2.5.6pe/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/2.5.6pe/thingsboard-ubuntu-download.sh
thingsboard-download-2-5-6-centos,CentOS,shell,resources/2.5.6pe/thingsboard-centos-download.sh,/docs/user-guide/install/resources/2.5.6pe/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

* Install Thingsboard Web Report component as described [here](/docs/user-guide/install/pe/ubuntu/#step-9-install-thingsboard-webreport-component).


{% capture tabspec %}thingsboard-installation-2-5-6
thingsboard-installation-2-5-6-ubuntu,Ubuntu,shell,resources/2.5.6pe/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/2.5.6pe/thingsboard-ubuntu-installation.sh
thingsboard-installation-2-5-6-centos,CentOS,shell,resources/2.5.6pe/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/2.5.6pe/thingsboard-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

**NOTE:** Package installer will ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.

#### Start the service

{% include templates/redis-post-upgrade-notice.md %}

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows {#windows-256}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 2.5.5PE. In order to upgrade to 2.5.6PE you need to [**upgrade to 2.5.5PE first**](/docs/user-guide/install/pe/upgrade-instructions/#windows-255).

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-2.5.6pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-2.5.6pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-2.5.6pe.exe**.
* Compare your old ThingsBoard configuration files (from the backup you made in the first step) with new ones.

#### Start the service

{% include templates/redis-post-upgrade-notice.md %}

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

## Upgrading to 3.0.1PE


### Ubuntu/CentOS {#ubuntucentos-301}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.0PE. In order to upgrade to 3.0.1PE you need to [**upgrade to 3.0PE first**](/docs/user-guide/install/pe/upgrade-instructions/#ubuntucentos-30).

<br>

{% include templates/install/tb-30-update.md %}

{% capture tb_3_0_postgreSQL_linux %}
**Since ThingsBoard 3.0PE only PostgreSQL database is supported for entities data**
- If you are using **Cassandra** database for entities data please install PostgreSQL database before proceeding upgrade procedure using the following guide:
  - [PostgreSQL Installation on Ubuntu](/docs/user-guide/install/pe/ubuntu/?ubuntuThingsboardDatabase=postgresql#step-4-configure-thingsboard-database)
  - [PostgreSQL Installation on CentOS/RHEL](/docs/user-guide/install/pe/rhel/?rhelThingsboardDatabase=postgresql#step-4-configure-thingsboard-database)

{% endcapture %}
{% include templates/info-banner.md content=tb_3_0_postgreSQL_linux %}

#### ThingsBoard PE package download

{% capture tabspec %}thingsboard-download-3-0-1
thingsboard-download-3-0-1-ubuntu,Ubuntu,shell,resources/3.0.1pe/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/3.0.1pe/thingsboard-ubuntu-download.sh
thingsboard-download-3-0-1-centos,CentOS,shell,resources/3.0.1pe/thingsboard-centos-download.sh,/docs/user-guide/install/resources/3.0.1pe/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

* Install Thingsboard Web Report component as described [here](/docs/user-guide/install/pe/ubuntu/#step-8-install-thingsboard-webreport-component).


{% capture tabspec %}thingsboard-installation-3-0-1
thingsboard-installation-3-0-1-ubuntu,Ubuntu,shell,resources/3.0.1pe/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/3.0.1pe/thingsboard-ubuntu-installation.sh
thingsboard-installation-3-0-1-centos,CentOS,shell,resources/3.0.1pe/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/3.0.1pe/thingsboard-centos-installation.sh{% endcapture %}  
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

{% include templates/redis-post-upgrade-notice.md %}

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows {#windows-301}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.0PE. In order to upgrade to 3.0.1PE you need to [**upgrade to 3.0PE first**](/docs/user-guide/install/pe/upgrade-instructions/#windows-30).

<br>

{% include templates/install/tb-30-update.md %}

{% capture tb_3_0_1_postgreSQL_windows %}
**Since ThingsBoard 3.0PE only PostgreSQL database is supported for entities data**
- If you are using **Cassandra** database for entities data please install PostgreSQL database before proceeding upgrade procedure using the following guide:
  - [PostgreSQL Installation on Windows](/docs/user-guide/install/pe/windows/?ubuntuThingsboardDatabase=postgresql#step-4-configure-thingsboard-database)

{% endcapture %}
{% include templates/info-banner.md content=tb_3_0_1_postgreSQL_windows %}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.0.1pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.0.1pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.0.1pe.exe**.
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

{% include templates/redis-post-upgrade-notice.md %}

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 3.1PE


### Ubuntu/CentOS {#ubuntucentos-31}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.0.1PE. In order to upgrade to 3.1PE you need to [**upgrade to 3.0.1PE first**](/docs/user-guide/install/pe/upgrade-instructions/#ubuntucentos-301).

#### ThingsBoard PE package download

{% capture tabspec %}thingsboard-download-3-1
thingsboard-download-3-1-ubuntu,Ubuntu,shell,resources/3.1pe/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/3.1pe/thingsboard-ubuntu-download.sh
thingsboard-download-3-1-centos,CentOS,shell,resources/3.1pe/thingsboard-centos-download.sh,/docs/user-guide/install/resources/3.1pe/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

* Install Thingsboard Web Report component as described [here](/docs/user-guide/install/pe/ubuntu/#step-8-install-thingsboard-webreport-component).


{% capture tabspec %}thingsboard-installation-3-1
thingsboard-installation-3-1-ubuntu,Ubuntu,shell,resources/3.1pe/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/3.1pe/thingsboard-ubuntu-installation.sh
thingsboard-installation-3-1-centos,CentOS,shell,resources/3.1pe/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/3.1pe/thingsboard-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

**NOTE:** Package installer will ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.  
Please make sure that you set **database.ts.type** parameter value (in the file **/etc/thingsboard/conf/thingsboard.yml**) to "cassandra" instead of "sql" if you are using Cassandra database for timeseries data:

```
database:
  ts_max_intervals: "${DATABASE_TS_MAX_INTERVALS:700}" # Max number of DB queries generated by single API call to fetch telemetry records
  ts:
    type: "${DATABASE_TS_TYPE:sql}" # cassandra, sql, or timescale (for hybrid mode, DATABASE_TS_TYPE value should be cassandra, or timescale)
```

**NOTE**: Cassandra database does not support [advanced filters](/docs/user-guide/advanced-filters/). If you were using **Cassandra** database for timeseries data please make sure that **database.ts_latest.type** parameter value (in the file **/etc/thingsboard/conf/thingsboard.yml**) is "sql":

```
database:
...
  ts_latest:
    type: "${DATABASE_TS_LATEST_TYPE:sql}" # cassandra, sql, or timescale (for hybrid mode, DATABASE_TS_TYPE value should be cassandra, or timescale)
```

and execute the following migration script:

```bash
# Execute script to migrate latest timeseries data from Cassandra to PostgreSQL
sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=cassandra-latest-to-postgres
```
{: .copy-code}

Execute regular upgrade script:

```bash
sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=3.0.1
```
{: .copy-code}

#### Start the service

{% include templates/redis-post-upgrade-notice.md %}

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows {#windows-31}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.0.1PE. In order to upgrade to 3.1PE you need to [**upgrade to 3.0.1PE first**](/docs/user-guide/install/pe/upgrade-instructions/#windows-301).

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.1pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.1pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.1pe.exe**.
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
C:\thingsboard>upgrade.bat --fromVersion=cassandra-latest-to-postgres
```
{: .copy-code}

Execute regular upgrade script:

```text
C:\thingsboard>upgrade.bat --fromVersion=3.0.1
```
{: .copy-code}

#### Start the service

{% include templates/redis-post-upgrade-notice.md %}

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 3.1.1PE


### Ubuntu/CentOS {#ubuntucentos-311}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.1PE. In order to upgrade to 3.1.1PE you need to [**upgrade to 3.1PE first**](/docs/user-guide/install/pe/upgrade-instructions/#ubuntucentos-31).

#### ThingsBoard PE package download

{% capture tabspec %}thingsboard-download-3-1-1
thingsboard-download-3-1-1-ubuntu,Ubuntu,shell,resources/3.1.1pe/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/3.1.1pe/thingsboard-ubuntu-download.sh
thingsboard-download-3-1-1-centos,CentOS,shell,resources/3.1.1pe/thingsboard-centos-download.sh,/docs/user-guide/install/resources/3.1.1pe/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

* Install Thingsboard Web Report component as described [here](/docs/user-guide/install/pe/ubuntu/#step-9-install-thingsboard-webreport-component).


{% capture tabspec %}thingsboard-installation-3-1-1
thingsboard-installation-3-1-1-ubuntu,Ubuntu,shell,resources/3.1.1pe/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/3.1.1pe/thingsboard-ubuntu-installation.sh
thingsboard-installation-3-1-1-centos,CentOS,shell,resources/3.1.1pe/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/3.1.1pe/thingsboard-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

**NOTE:** Package installer will ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.  
Please make sure that you set **database.ts.type** parameter value (in the file **/etc/thingsboard/conf/thingsboard.yml**) to "cassandra" instead of "sql" if you are using Cassandra database for timeseries data:

```
database:
  ts_max_intervals: "${DATABASE_TS_MAX_INTERVALS:700}" # Max number of DB queries generated by single API call to fetch telemetry records
  ts:
    type: "${DATABASE_TS_TYPE:sql}" # cassandra, sql, or timescale (for hybrid mode, DATABASE_TS_TYPE value should be cassandra, or timescale)
```

Execute regular upgrade script:

```bash
sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=3.1.0
```
{: .copy-code}

#### Start the service

{% include templates/redis-post-upgrade-notice.md %}

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows {#windows-311}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.1PE. In order to upgrade to 3.1.1PE you need to [**upgrade to 3.1PE first**](/docs/user-guide/install/pe/upgrade-instructions/#windows-31).

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.1.1pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.1.1pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.1.1pe.exe**.
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

Execute regular upgrade script:

```text
C:\thingsboard>upgrade.bat --fromVersion=3.1.0
```
{: .copy-code}

#### Start the service

{% include templates/redis-post-upgrade-notice.md %}

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 3.2PE


### Ubuntu/CentOS {#ubuntucentos-32}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.1.1PE. In order to upgrade to 3.2PE you need to [**upgrade to 3.1.1PE first**](/docs/user-guide/install/pe/upgrade-instructions/#ubuntucentos-311).

#### ThingsBoard PE package download

{% capture tabspec %}thingsboard-download-3-2
thingsboard-download-3-2-ubuntu,Ubuntu,shell,resources/3.2pe/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/3.2pe/thingsboard-ubuntu-download.sh
thingsboard-download-3-2-centos,CentOS,shell,resources/3.2pe/thingsboard-centos-download.sh,/docs/user-guide/install/resources/3.2pe/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

* Install Thingsboard Web Report component as described [here](/docs/user-guide/install/pe/ubuntu/#step-9-install-thingsboard-webreport-component).


{% capture tabspec %}thingsboard-installation-3-2
thingsboard-installation-3-2-ubuntu,Ubuntu,shell,resources/3.2pe/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/3.2pe/thingsboard-ubuntu-installation.sh
thingsboard-installation-3-2-centos,CentOS,shell,resources/3.2pe/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/3.2pe/thingsboard-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

**NOTE:** Package installer will ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.  
Please make sure that you set **database.ts.type** parameter value (in the file **/etc/thingsboard/conf/thingsboard.yml**) to "cassandra" instead of "sql" if you are using Cassandra database for timeseries data:

```
database:
  ts_max_intervals: "${DATABASE_TS_MAX_INTERVALS:700}" # Max number of DB queries generated by single API call to fetch telemetry records
  ts:
    type: "${DATABASE_TS_TYPE:sql}" # cassandra, sql, or timescale (for hybrid mode, DATABASE_TS_TYPE value should be cassandra, or timescale)
```

Execute regular upgrade script:

```bash
sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=3.1.1
```
{: .copy-code}

#### Start the service

{% include templates/redis-post-upgrade-notice.md %}

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows {#windows-32}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.1.1PE. In order to upgrade to 3.2PE you need to [**upgrade to 3.1.1PE first**](/docs/user-guide/install/pe/upgrade-instructions/#windows-311).

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.2pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.2pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.2pe.exe**.
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

Execute regular upgrade script:

```text
C:\thingsboard>upgrade.bat --fromVersion=3.1.1
```
{: .copy-code}

#### Start the service

{% include templates/redis-post-upgrade-notice.md %}

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 3.2.1PE

### Ubuntu/CentOS {#ubuntucentos-321}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.2PE. In order to upgrade to 3.2.1PE you need to [**upgrade to 3.2PE first**](/docs/user-guide/install/pe/upgrade-instructions/#ubuntucentos-32).

#### ThingsBoard PE package download

{% capture tabspec %}thingsboard-download-3-2-1
thingsboard-download-3-2-1-ubuntu,Ubuntu,shell,resources/3.2.1pe/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/3.2.1pe/thingsboard-ubuntu-download.sh
thingsboard-download-3-2-1-centos,CentOS,shell,resources/3.2.1pe/thingsboard-centos-download.sh,/docs/user-guide/install/resources/3.2.1pe/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

* Install Thingsboard Web Report component as described [here](/docs/user-guide/install/pe/ubuntu/#step-9-install-thingsboard-webreport-component).


{% capture tabspec %}thingsboard-installation-3-2-1
thingsboard-installation-3-2-1-ubuntu,Ubuntu,shell,resources/3.2.1pe/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/3.2.1pe/thingsboard-ubuntu-installation.sh
thingsboard-installation-3-2-1-centos,CentOS,shell,resources/3.2.1pe/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/3.2.1pe/thingsboard-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

**NOTE:** Package installer will ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.  
Please make sure that you set **database.ts.type** parameter value (in the file **/etc/thingsboard/conf/thingsboard.yml**) to "cassandra" instead of "sql" if you are using Cassandra database for timeseries data:

```
database:
  ts_max_intervals: "${DATABASE_TS_MAX_INTERVALS:700}" # Max number of DB queries generated by single API call to fetch telemetry records
  ts:
    type: "${DATABASE_TS_TYPE:sql}" # cassandra, sql, or timescale (for hybrid mode, DATABASE_TS_TYPE value should be cassandra, or timescale)
```

Execute regular upgrade script:

```bash
sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=3.2.0
```
{: .copy-code}

#### Start the service

{% include templates/redis-post-upgrade-notice.md %}

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows {#windows-321}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.2PE. In order to upgrade to 3.2.1PE you need to [**upgrade to 3.2PE first**](/docs/user-guide/install/pe/upgrade-instructions/#windows-32).

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.2.1pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.2.1pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.2.1pe.exe**.
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

Execute regular upgrade script:

```text
C:\thingsboard>upgrade.bat --fromVersion=3.2.0
```
{: .copy-code}

#### Start the service

{% include templates/redis-post-upgrade-notice.md %}

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 3.2.2PE

### Ubuntu/CentOS {#ubuntucentos-322}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.2.1PE. In order to upgrade to 3.2.2PE you need to [**upgrade to 3.2.1PE first**](/docs/user-guide/install/pe/upgrade-instructions/#ubuntucentos-321).

<br>

{% capture tb_3_2_2pe_java_11_linux %}
**NOTE: Since ThingsBoard version 3.2.2PE Java 11 is used**
- Please install Java 11 before proceeding upgrade procedure using the following guide:
  - [Java 11 Installation on Ubuntu](/docs/user-guide/install/pe/ubuntu/#step-1-install-java-11-openjdk)
  - [Java 11 Installation on CentOS/RHEL](/docs/user-guide/install/pe/rhel/#step-1-install-java-11-openjdk)

{% endcapture %}
{% include templates/warn-banner.md content=tb_3_2_2pe_java_11_linux %}


#### ThingsBoard PE package download

{% capture tabspec %}thingsboard-download-3-2-2
thingsboard-download-3-2-2-ubuntu,Ubuntu,shell,resources/3.2.2pe/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/3.2.2pe/thingsboard-ubuntu-download.sh
thingsboard-download-3-2-2-centos,CentOS,shell,resources/3.2.2pe/thingsboard-centos-download.sh,/docs/user-guide/install/resources/3.2.2pe/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

* Install Thingsboard Web Report component as described [here](/docs/user-guide/install/pe/ubuntu/#step-9-install-thingsboard-webreport-component).


{% capture tabspec %}thingsboard-installation-3-2-2
thingsboard-installation-3-2-2-ubuntu,Ubuntu,shell,resources/3.2.2pe/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/3.2.2pe/thingsboard-ubuntu-installation.sh
thingsboard-installation-3-2-2-centos,CentOS,shell,resources/3.2.2pe/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/3.2.2pe/thingsboard-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

**NOTE:** Package installer will ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.  
Please make sure that you set **database.ts.type** parameter value (in the file **/etc/thingsboard/conf/thingsboard.yml**) to "cassandra" instead of "sql" if you are using Cassandra database for timeseries data:

```
database:
  ts_max_intervals: "${DATABASE_TS_MAX_INTERVALS:700}" # Max number of DB queries generated by single API call to fetch telemetry records
  ts:
    type: "${DATABASE_TS_TYPE:sql}" # cassandra, sql, or timescale (for hybrid mode, DATABASE_TS_TYPE value should be cassandra, or timescale)
```

Execute regular upgrade script:

```bash
sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=3.2.1
```
{: .copy-code}

#### Start the service

{% include templates/redis-post-upgrade-notice.md %}

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows {#windows-322}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.2.1PE. In order to upgrade to 3.2.2PE you need to [**upgrade to 3.2.1PE first**](/docs/user-guide/install/pe/upgrade-instructions/#windows-321).

<br>

{% capture tb_3_2_2pe_java_11_windows %}
**NOTE: Since ThingsBoard version 3.2.2PE Java 11 is used**
- Please install Java 11 before proceeding upgrade procedure using the following guide:
  - [Java 11 Installation on Windows](/docs/user-guide/install/pe/windows/#step-1-install-java-11-openjdk)

{% endcapture %}
{% include templates/warn-banner.md content=tb_3_2_2pe_java_11_windows %}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.2.2pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.2.2pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.2.2pe.exe**.
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

Execute regular upgrade script:

```text
C:\thingsboard>upgrade.bat --fromVersion=3.2.1
```
{: .copy-code}

#### Start the service

{% include templates/redis-post-upgrade-notice.md %}

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 3.3PE

### Ubuntu/CentOS {#ubuntucentos-33}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.2.2PE. In order to upgrade to 3.3PE you need to [**upgrade to 3.2.2PE first**](/docs/user-guide/install/pe/upgrade-instructions/#ubuntucentos-322).

#### ThingsBoard PE package download

{% capture tabspec %}thingsboard-download-3-3
thingsboard-download-3-3-ubuntu,Ubuntu,shell,resources/3.3pe/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/3.3pe/thingsboard-ubuntu-download.sh
thingsboard-download-3-3-centos,CentOS,shell,resources/3.3pe/thingsboard-centos-download.sh,/docs/user-guide/install/resources/3.3pe/thingsboard-centos-download.sh{% endcapture %}
{% include tabs.html %}

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

* Install Thingsboard Web Report component as described [here](/docs/user-guide/install/pe/ubuntu/#step-9-install-thingsboard-webreport-component).


{% capture tabspec %}thingsboard-installation-3-3
thingsboard-installation-3-3-ubuntu,Ubuntu,shell,resources/3.3pe/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/3.3pe/thingsboard-ubuntu-installation.sh
thingsboard-installation-3-3-centos,CentOS,shell,resources/3.3pe/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/3.3pe/thingsboard-centos-installation.sh{% endcapture %}
{% include tabs.html %}

**NOTE:** Package installer will ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.
Please make sure that you set **database.ts.type** parameter value (in the file **/etc/thingsboard/conf/thingsboard.yml**) to "cassandra" instead of "sql" if you are using Cassandra database for timeseries data:

```
database:
  ts_max_intervals: "${DATABASE_TS_MAX_INTERVALS:700}" # Max number of DB queries generated by single API call to fetch telemetry records
  ts:
    type: "${DATABASE_TS_TYPE:sql}" # cassandra, sql, or timescale (for hybrid mode, DATABASE_TS_TYPE value should be cassandra, or timescale)
```

**NOTE**: If you were using MQTT over SSL instead of default MQTT, please make sure you have a proper configuration (**thingsboard.conf** and/or **thingsboard.yml**) of ports/addresses:

**/etc/thingsboard/conf/thingsboard.conf**

```
export MQTT_SSL_ENABLED=true
export MQTT_SSL_BIND_ADDRESS=0.0.0.0
export MQTT_SSL_BIND_PORT=8883

export MQTT_BIND_ADDRESS=0.0.0.0
export MQTT_BIND_PORT=1883
```
{: .copy-code}

**/etc/thingsboard/conf/thingsboard.yml**

```
transport:

. . .

  # Local MQTT transport parameters
  mqtt:
    # Enable/disable mqtt transport protocol.
    enabled: "${MQTT_ENABLED:true}"
    bind_address: "${MQTT_BIND_ADDRESS:0.0.0.0}"
    bind_port: "${MQTT_BIND_PORT:1883}"

. . .

    ssl:
      # Enable/disable SSL support
      enabled: "${MQTT_SSL_ENABLED:true}"
      # MQTT SSL bind address
      bind_address: "${MQTT_SSL_BIND_ADDRESS:0.0.0.0}"
      # MQTT SSL bind port
      bind_port: "${MQTT_SSL_BIND_PORT:8883}"
```

Execute regular upgrade script:

```bash
sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=3.2.2
```
{: .copy-code}

#### Start the service

{% include templates/redis-post-upgrade-notice.md %}

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows {#windows-33}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.2.2PE. In order to upgrade to 3.3PE you need to [**upgrade to 3.2.2PE first**](/docs/user-guide/install/pe/upgrade-instructions/#windows-322).

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.3pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.3pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.3pe.exe**.
* Compare your old ThingsBoard configuration files (from the backup you made in the first step) with new ones.
* Please make sure that you set **database.ts.type** parameter value (in the file **\<ThingsBoard install dir\>\conf\thingsboard.yml**) to "cassandra" instead of "sql" if you are using Cassandra database for timeseries data:

```
database:
  ts_max_intervals: "${DATABASE_TS_MAX_INTERVALS:700}" # Max number of DB queries generated by single API call to fetch telemetry records
  ts:
    type: "${DATABASE_TS_TYPE:sql}" # cassandra, sql, or timescale (for hybrid mode, DATABASE_TS_TYPE value should be cassandra, or timescale)
```

* If you were using MQTT over SSL instead of default MQTT, please make sure you have a proper configuration (**thingsboard.yml**) of ports/addresses:

```
transport:

. . .

  # Local MQTT transport parameters
  mqtt:
    # Enable/disable mqtt transport protocol.
    enabled: "${MQTT_ENABLED:true}"
    bind_address: "${MQTT_BIND_ADDRESS:0.0.0.0}"
    bind_port: "${MQTT_BIND_PORT:1883}"

. . .

    ssl:
      # Enable/disable SSL support
      enabled: "${MQTT_SSL_ENABLED:true}"
      # MQTT SSL bind address
      bind_address: "${MQTT_SSL_BIND_ADDRESS:0.0.0.0}"
      # MQTT SSL bind port
      bind_port: "${MQTT_SSL_BIND_PORT:8883}"
```

* Finally, run **upgrade.bat** script to upgrade ThingsBoard to the new version.

**NOTE** Scripts listed above should be executed using Administrator Role.

Execute regular upgrade script:

```text
C:\thingsboard>upgrade.bat --fromVersion=3.2.2
```
{: .copy-code}

#### Start the service

{% include templates/redis-post-upgrade-notice.md %}

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 3.3.1PE

### Ubuntu/CentOS {#ubuntucentos-331}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.3.0PE. In order to upgrade to 3.3.1PE you need to [**upgrade to 3.3.0PE first**](/docs/user-guide/install/pe/upgrade-instructions/#ubuntucentos-33).

#### ThingsBoard PE package download

{% capture tabspec %}thingsboard-download-3-3-1
thingsboard-download-3-3-1-ubuntu,Ubuntu,shell,resources/3.3.1pe/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/3.3.1pe/thingsboard-ubuntu-download.sh
thingsboard-download-3-3-1-centos,CentOS,shell,resources/3.3.1pe/thingsboard-centos-download.sh,/docs/user-guide/install/resources/3.3.1pe/thingsboard-centos-download.sh{% endcapture %}
{% include tabs.html %}

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

* Install Thingsboard Web Report component as described [here](/docs/user-guide/install/pe/ubuntu/#step-9-install-thingsboard-webreport-component).


{% capture tabspec %}thingsboard-installation-3-3-1
thingsboard-installation-3-3-1-ubuntu,Ubuntu,shell,resources/3.3.1pe/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/3.3.1pe/thingsboard-ubuntu-installation.sh
thingsboard-installation-3-3-1-centos,CentOS,shell,resources/3.3.1pe/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/3.3.1pe/thingsboard-centos-installation.sh{% endcapture %}
{% include tabs.html %}

**NOTE:** Package installer may ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.
Please make sure that you set **database.ts.type** parameter value (in the file **/etc/thingsboard/conf/thingsboard.yml**) to "cassandra" instead of "sql" if you are using Cassandra database for timeseries data:

```
database:
  ts_max_intervals: "${DATABASE_TS_MAX_INTERVALS:700}" # Max number of DB queries generated by single API call to fetch telemetry records
  ts:
    type: "${DATABASE_TS_TYPE:sql}" # cassandra, sql, or timescale (for hybrid mode, DATABASE_TS_TYPE value should be cassandra, or timescale)
```

Execute regular upgrade script:

```bash
sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=3.3.0
```
{: .copy-code}

#### Start the service

{% include templates/redis-post-upgrade-notice.md %}

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows {#windows-331}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.3.0PE. In order to upgrade to 3.3.1PE you need to [**upgrade to 3.3.0PE first**](/docs/user-guide/install/pe/upgrade-instructions/#windows-33).

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.3.1pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.3.1pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.3.1pe.exe**.
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

Execute regular upgrade script:

```text
C:\thingsboard>upgrade.bat --fromVersion=3.3.0
```
{: .copy-code}

#### Start the service

{% include templates/redis-post-upgrade-notice.md %}

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 3.3.2PE

### Ubuntu/CentOS {#ubuntucentos-332}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.3.1PE. In order to upgrade to 3.3.2PE you need to [**upgrade to 3.3.1PE first**](/docs/user-guide/install/pe/upgrade-instructions/#ubuntucentos-331).

#### ThingsBoard PE package download

{% capture tabspec %}thingsboard-download-3-3-2
thingsboard-download-3-3-2-ubuntu,Ubuntu,shell,resources/3.3.2pe/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/3.3.2pe/thingsboard-ubuntu-download.sh
thingsboard-download-3-3-2-centos,CentOS,shell,resources/3.3.2pe/thingsboard-centos-download.sh,/docs/user-guide/install/resources/3.3.2pe/thingsboard-centos-download.sh{% endcapture %}
{% include tabs.html %}

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```bash
$ sudo service thingsboard stop
```

* Install Thingsboard Web Report component as described [here](/docs/user-guide/install/pe/ubuntu/#step-9-install-thingsboard-webreport-component).


{% capture tabspec %}thingsboard-installation-3-3-2
thingsboard-installation-3-3-2-ubuntu,Ubuntu,shell,resources/3.3.2pe/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/3.3.2pe/thingsboard-ubuntu-installation.sh
thingsboard-installation-3-3-2-centos,CentOS,shell,resources/3.3.2pe/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/3.3.2pe/thingsboard-centos-installation.sh{% endcapture %}
{% include tabs.html %}

**NOTE:** Package installer may ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.
Please make sure that you set **database.ts.type** parameter value (in the file **/etc/thingsboard/conf/thingsboard.yml**) to "cassandra" instead of "sql" if you are using Cassandra database for timeseries data:

```
database:
  ts_max_intervals: "${DATABASE_TS_MAX_INTERVALS:700}" # Max number of DB queries generated by single API call to fetch telemetry records
  ts:
    type: "${DATABASE_TS_TYPE:sql}" # cassandra, sql, or timescale (for hybrid mode, DATABASE_TS_TYPE value should be cassandra, or timescale)
```

Execute regular upgrade script:

```bash
# Execute regular upgrade script
$ sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=3.3.1
```

#### Start the service

{% include templates/redis-post-upgrade-notice.md %}

```bash
$ sudo service thingsboard start
```

### Windows {#windows-332}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.3.1PE. In order to upgrade to 3.3.2PE you need to [**upgrade to 3.3.1PE first**](/docs/user-guide/install/pe/upgrade-instructions/#windows-331).

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.3.2pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.3.2pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.3.1pe.exe**.
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

Execute regular upgrade script:

```text
C:\thingsboard>upgrade.bat --fromVersion=3.3.1
```

#### Start the service

{% include templates/redis-post-upgrade-notice.md %}

```text
net start thingsboard
```

## Upgrading to 3.3.3PE

### Ubuntu/CentOS {#ubuntucentos-333}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.3.2PE. In order to upgrade to 3.3.3PE you need to [**upgrade to 3.3.2PE first**](/docs/user-guide/install/pe/upgrade-instructions/#ubuntucentos-332).

{% include templates/install/tb-333-update.md %}

#### ThingsBoard PE package download

{% capture tabspec %}thingsboard-download-3-3-3
thingsboard-download-3-3-3-ubuntu,Ubuntu,shell,resources/3.3.3pe/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/3.3.3pe/thingsboard-ubuntu-download.sh
thingsboard-download-3-3-3-centos,CentOS,shell,resources/3.3.3pe/thingsboard-centos-download.sh,/docs/user-guide/install/resources/3.3.3pe/thingsboard-centos-download.sh{% endcapture %}
{% include tabs.html %}

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```bash
$ sudo service thingsboard stop
```

* Install Thingsboard Web Report component as described [here](/docs/user-guide/install/pe/ubuntu/#step-9-install-thingsboard-webreport-component).


{% capture tabspec %}thingsboard-installation-3-3-3
thingsboard-installation-3-3-3-ubuntu,Ubuntu,shell,resources/3.3.3pe/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/3.3.3pe/thingsboard-ubuntu-installation.sh
thingsboard-installation-3-3-3-centos,CentOS,shell,resources/3.3.3pe/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/3.3.3pe/thingsboard-centos-installation.sh{% endcapture %}
{% include tabs.html %}

**NOTE:** Package installer may ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.

Execute regular upgrade script:

```bash
# Execute regular upgrade script
$ sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=3.3.2
```

#### Start the service

```bash
$ sudo service thingsboard start
```

### Windows {#windows-333}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.3.2PE. In order to upgrade to 3.3.3PE you need to [**upgrade to 3.3.2PE first**](/docs/user-guide/install/pe/upgrade-instructions/#windows-332).

{% include templates/install/tb-333-update.md %}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.3.3pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.3.3pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.3.3pe.exe**.
* Compare and merge your old ThingsBoard configuration files (from the backup you made in the first step) with new ones.

* Finally, run **upgrade.bat** script to upgrade ThingsBoard to the new version.

**NOTE** Scripts listed above should be executed using Administrator Role.

Execute regular upgrade script:

```text
C:\thingsboard>upgrade.bat --fromVersion=3.3.2
```

#### Start the service


```text
net start thingsboard
```

## Upgrading to 3.3.4PE

### Ubuntu/CentOS {#ubuntucentos-334}

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.3.3PE. In order to upgrade to 3.3.4PE you need to [**upgrade to 3.3.3PE first**](/docs/user-guide/install/pe/upgrade-instructions/#ubuntucentos-333).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard PE package download

{% capture tabspec %}thingsboard-download-3-3-4
thingsboard-download-3-3-4-ubuntu,Ubuntu,shell,resources/3.3.4pe/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/3.3.4pe/thingsboard-ubuntu-download.sh
thingsboard-download-3-3-4-centos,CentOS,shell,resources/3.3.4pe/thingsboard-centos-download.sh,/docs/user-guide/install/resources/3.3.4pe/thingsboard-centos-download.sh{% endcapture %}
{% include tabs.html %}

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

* Install Thingsboard Web Report component as described [here](/docs/user-guide/install/pe/ubuntu/#step-9-install-thingsboard-webreport-component).

{% capture tabspec %}thingsboard-installation-3-3-4
thingsboard-installation-3-3-4-ubuntu,Ubuntu,shell,resources/3.3.4pe/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/3.3.4pe/thingsboard-ubuntu-installation.sh
thingsboard-installation-3-3-4-centos,CentOS,shell,resources/3.3.4pe/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/3.3.4pe/thingsboard-centos-installation.sh{% endcapture %}
{% include tabs.html %}

{% capture difference %}
**NOTE:**
<br>
Package installer may ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Execute regular upgrade script:

```bash
sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=3.3.3
```
{: .copy-code}

#### Start the service

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows {#windows-334}

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.3.3PE. In order to upgrade to 3.3.4PE you need to [**upgrade to 3.3.3PE first**](/docs/user-guide/install/pe/upgrade-instructions/#windows-333).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-3.3.4pe.zip](https://dist.thingsboard.io/thingsboard-windows-3.3.4pe.zip).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Unzip installation archive to ThingsBoard install dir.
* Compare and merge your old ThingsBoard configuration files (from the backup you made in the first step) with new ones.
* Finally, run **upgrade.bat** script to upgrade ThingsBoard to the new version.

{% capture difference %}
**NOTE:**
<br>
Scripts listed above should be executed using Administrator Role.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Execute regular upgrade script:

```text
C:\thingsboard>upgrade.bat --fromVersion=3.3.3
```
{: .copy-code}

#### Start the service

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 3.3.4.1PE

### Ubuntu/CentOS {#ubuntucentos-3341}

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.3.4PE. In order to upgrade to 3.3.4.1PE you need to [**upgrade to 3.3.4PE first**](/docs/user-guide/install/pe/upgrade-instructions/#ubuntucentos-334).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard PE package download

{% capture tabspec %}thingsboard-download-3-3-4-1
thingsboard-download-3-3-4-1-ubuntu,Ubuntu,shell,resources/3.3.4.1pe/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/3.3.4.1pe/thingsboard-ubuntu-download.sh
thingsboard-download-3-3-4-1-centos,CentOS,shell,resources/3.3.4.1pe/thingsboard-centos-download.sh,/docs/user-guide/install/resources/3.3.4.1pe/thingsboard-centos-download.sh{% endcapture %}
{% include tabs.html %}

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

* Install Thingsboard Web Report component as described [here](/docs/user-guide/install/pe/ubuntu/#step-9-install-thingsboard-webreport-component).

{% capture tabspec %}thingsboard-installation-3-3-4-1
thingsboard-installation-3-3-4-1-ubuntu,Ubuntu,shell,resources/3.3.4.1pe/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/3.3.4.1pe/thingsboard-ubuntu-installation.sh
thingsboard-installation-3-3-4-1-centos,CentOS,shell,resources/3.3.4.1pe/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/3.3.4.1pe/thingsboard-centos-installation.sh{% endcapture %}
{% include tabs.html %}

{% capture difference %}
**NOTE:**
<br>
Package installer may ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### Start the service

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows {#windows-3341}

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.3.4PE. In order to upgrade to 3.3.4.1PE you need to [**upgrade to 3.3.4PE first**](/docs/user-guide/install/pe/upgrade-instructions/#windows-334).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-3.3.4.1pe.zip](https://dist.thingsboard.io/thingsboard-windows-3.3.4.1pe.zip).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Unzip installation archive to ThingsBoard install dir.
* Compare and merge your old ThingsBoard configuration files (from the backup you made in the first step) with new ones.

#### Start the service

```text
net start thingsboard
```
{: .copy-code}


## Upgrading to 3.4PE

### Ubuntu/CentOS {#ubuntucentos-34}

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.3.4.1PE. In order to upgrade to 3.4PE you need to [**upgrade to 3.3.4.1PE first**](/docs/user-guide/install/pe/upgrade-instructions/#ubuntucentos-3341).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard PE package download

{% capture tabspec %}thingsboard-download-3-4
thingsboard-download-3-4-ubuntu,Ubuntu,shell,resources/3.4pe/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/3.4pe/thingsboard-ubuntu-download.sh
thingsboard-download-3-4-centos,CentOS,shell,resources/3.4pe/thingsboard-centos-download.sh,/docs/user-guide/install/resources/3.4pe/thingsboard-centos-download.sh{% endcapture %}
{% include tabs.html %}

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

* Install Thingsboard Web Report component as described [here](/docs/user-guide/install/pe/ubuntu/#step-9-install-thingsboard-webreport-component).

{% capture tabspec %}thingsboard-installation-3-4
thingsboard-installation-3-4-ubuntu,Ubuntu,shell,resources/3.4pe/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/3.4pe/thingsboard-ubuntu-installation.sh
thingsboard-installation-3-4-centos,CentOS,shell,resources/3.4pe/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/3.4pe/thingsboard-centos-installation.sh{% endcapture %}
{% include tabs.html %}

{% capture difference %}
**NOTE:**
<br>
Package installer may ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Execute regular upgrade script:

```bash
sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=3.3.4
```
{: .copy-code}

#### Start the service

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows {#windows-34}

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.3.4.1PE. In order to upgrade to 3.4PE you need to [**upgrade to 3.3.4.1PE first**](/docs/user-guide/install/pe/upgrade-instructions/#windows-3341).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.4pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.4pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.4pe.exe**.
* Compare and merge your old ThingsBoard configuration files (from the backup you made in the first step) with new ones.
* Finally, run **upgrade.bat** script to upgrade ThingsBoard to the new version.

{% capture difference %}
**NOTE:**
<br>
Scripts listed above should be executed using Administrator Role.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Execute regular upgrade script:

```text
C:\thingsboard>upgrade.bat --fromVersion=3.3.4
```
{: .copy-code}

#### Start the service

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 3.4.1PE

### Ubuntu/CentOS {#ubuntucentos-341}

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.4PE. In order to upgrade to 3.4.1PE you need to [**upgrade to 3.4PE first**](/docs/user-guide/install/pe/upgrade-instructions/#ubuntucentos-34).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard PE package download

{% capture tabspec %}thingsboard-download-3-4-1
thingsboard-download-3-4-1-ubuntu,Ubuntu,shell,resources/3.4.1pe/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/3.4.1pe/thingsboard-ubuntu-download.sh
thingsboard-download-3-4-1-centos,CentOS,shell,resources/3.4.1pe/thingsboard-centos-download.sh,/docs/user-guide/install/resources/3.4.1pe/thingsboard-centos-download.sh{% endcapture %}
{% include tabs.html %}

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

* Install Thingsboard Web Report component as described [here](/docs/user-guide/install/pe/ubuntu/#step-9-install-thingsboard-webreport-component).

{% capture tabspec %}thingsboard-installation-3-4-1
thingsboard-installation-3-4-1-ubuntu,Ubuntu,shell,resources/3.4.1pe/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/3.4.1pe/thingsboard-ubuntu-installation.sh
thingsboard-installation-3-4-1-centos,CentOS,shell,resources/3.4.1pe/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/3.4.1pe/thingsboard-centos-installation.sh{% endcapture %}
{% include tabs.html %}

{% capture difference %}
**NOTE:**
<br>
Package installer may ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Execute regular upgrade script:

```bash
sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=3.4.0
```
{: .copy-code}

#### Start the service

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows {#windows-341}

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.4PE. In order to upgrade to 3.4.1PE you need to [**upgrade to 3.4PE first**](/docs/user-guide/install/pe/upgrade-instructions/#windows-34).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.4.1pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.4.1pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.4.1pe.exe**.
* Compare and merge your old ThingsBoard configuration files (from the backup you made in the first step) with new ones.
* Finally, run **upgrade.bat** script to upgrade ThingsBoard to the new version.

{% capture difference %}
**NOTE:**
<br>
Scripts listed above should be executed using Administrator Role.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Execute regular upgrade script:

```text
C:\thingsboard>upgrade.bat --fromVersion=3.4.0
```
{: .copy-code}

#### Start the service

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 3.4.2PE

### Ubuntu/CentOS {#ubuntucentos-342}

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.4.1PE. In order to upgrade to 3.4.2PE you need to [**upgrade to 3.4.1PE first**](/docs/user-guide/install/pe/upgrade-instructions/#ubuntucentos-341).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard PE package download

{% capture tabspec %}thingsboard-download-3-4-2
thingsboard-download-3-4-2-ubuntu,Ubuntu,shell,resources/3.4.2pe/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/3.4.2pe/thingsboard-ubuntu-download.sh
thingsboard-download-3-4-2-centos,CentOS,shell,resources/3.4.2pe/thingsboard-centos-download.sh,/docs/user-guide/install/resources/3.4.2pe/thingsboard-centos-download.sh{% endcapture %}
{% include tabs.html %}

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

* Install Thingsboard Web Report component as described [here](/docs/user-guide/install/pe/ubuntu/#step-9-install-thingsboard-webreport-component).

{% capture tabspec %}thingsboard-installation-3-4-2
thingsboard-installation-3-4-2-ubuntu,Ubuntu,shell,resources/3.4.2pe/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/3.4.2pe/thingsboard-ubuntu-installation.sh
thingsboard-installation-3-4-2-centos,CentOS,shell,resources/3.4.2pe/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/3.4.2pe/thingsboard-centos-installation.sh{% endcapture %}
{% include tabs.html %}

{% capture difference %}
**NOTE:**
<br>
Package installer may ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Execute regular upgrade script:

```bash
sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=3.4.1
```
{: .copy-code}

#### Start the service

```bash
sudo service thingsboard start
```
{: .copy-code}

{% capture default-jwt %}
Update the JWT signing key if you use the default one "thingsboardDefaultSigningKey" on production environments. See [JWT security settings](/docs/pe/user-guide/ui/jwt-security-settings/) for details.
{% endcapture %}
{% include templates/info-banner.md content=default-jwt %}

### Windows {#windows-342}

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.4.1PE. In order to upgrade to 3.4.2PE you need to [**upgrade to 3.4.1PE first**](/docs/user-guide/install/pe/upgrade-instructions/#windows-341).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.4.2pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.4.2pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.4.2pe.exe**.
* Compare and merge your old ThingsBoard configuration files (from the backup you made in the first step) with new ones.
* Finally, run **upgrade.bat** script to upgrade ThingsBoard to the new version.

{% capture difference %}
**NOTE:**
<br>
Scripts listed above should be executed using Administrator Role.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Execute regular upgrade script:

```text
C:\thingsboard>upgrade.bat --fromVersion=3.4.1
```
{: .copy-code}

#### Start the service

```text
net start thingsboard
```
{: .copy-code}

{% capture default-jwt %}
Update the JWT signing key if you use the default one "thingsboardDefaultSigningKey" on production environments. See [JWT security settings](/docs/pe/user-guide/ui/jwt-security-settings/) for details.
{% endcapture %}
{% include templates/info-banner.md content=default-jwt %}

## Upgrading to 3.4.3PE

### Ubuntu/CentOS {#ubuntucentos-343}

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.4.2PE. In order to upgrade to 3.4.3PE you need to [**upgrade to 3.4.2PE first**](/docs/user-guide/install/pe/upgrade-instructions/#ubuntucentos-342).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard PE package download

{% capture tabspec %}thingsboard-download-3-4-3
thingsboard-download-3-4-3-ubuntu,Ubuntu,shell,resources/3.4.3pe/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/3.4.3pe/thingsboard-ubuntu-download.sh
thingsboard-download-3-4-3-centos,CentOS,shell,resources/3.4.3pe/thingsboard-centos-download.sh,/docs/user-guide/install/resources/3.4.3pe/thingsboard-centos-download.sh{% endcapture %}
{% include tabs.html %}

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

* Install Thingsboard Web Report component as described [here](/docs/user-guide/install/pe/ubuntu/#step-9-install-thingsboard-webreport-component).

{% capture tabspec %}thingsboard-installation-3-4-3
thingsboard-installation-3-4-3-ubuntu,Ubuntu,shell,resources/3.4.3pe/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/3.4.3pe/thingsboard-ubuntu-installation.sh
thingsboard-installation-3-4-3-centos,CentOS,shell,resources/3.4.3pe/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/3.4.3pe/thingsboard-centos-installation.sh{% endcapture %}
{% include tabs.html %}

{% capture difference %}
**NOTE:**
<br>
Package installer may ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### Start the service

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows {#windows-343}

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.4.2PE. In order to upgrade to 3.4.3PE you need to [**upgrade to 3.4.2PE first**](/docs/user-guide/install/pe/upgrade-instructions/#windows-342).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.4.3pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.4.3pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.4.3pe.exe**.
* Compare and merge your old ThingsBoard configuration files (from the backup you made in the first step) with new ones.

#### Start the service

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 3.4.4PE

### Ubuntu/CentOS {#ubuntucentos-344}

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.4.3PE. In order to upgrade to 3.4.4PE you need to [**upgrade to 3.4.3PE first**](/docs/user-guide/install/pe/upgrade-instructions/#ubuntucentos-343).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard PE package download

{% capture tabspec %}thingsboard-download-3-4-4
thingsboard-download-3-4-4-ubuntu,Ubuntu,shell,resources/3.4.4pe/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/3.4.4pe/thingsboard-ubuntu-download.sh
thingsboard-download-3-4-4-centos,CentOS,shell,resources/3.4.4pe/thingsboard-centos-download.sh,/docs/user-guide/install/resources/3.4.4pe/thingsboard-centos-download.sh{% endcapture %}
{% include tabs.html %}

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

* Install Thingsboard Web Report component as described [here](/docs/user-guide/install/pe/ubuntu/#step-9-install-thingsboard-webreport-component).

{% capture tabspec %}thingsboard-installation-3-4-4
thingsboard-installation-3-4-4-ubuntu,Ubuntu,shell,resources/3.4.4pe/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/3.4.4pe/thingsboard-ubuntu-installation.sh
thingsboard-installation-3-4-4-centos,CentOS,shell,resources/3.4.4pe/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/3.4.4pe/thingsboard-centos-installation.sh{% endcapture %}
{% include tabs.html %}

{% capture difference %}
**NOTE:**
<br>
Package installer may ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### Start the service

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows {#windows-344}

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.4.3PE. In order to upgrade to 3.4.4PE you need to [**upgrade to 3.4.3PE first**](/docs/user-guide/install/pe/upgrade-instructions/#windows-343).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.4.4pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.4.4pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.4.4pe.exe**.
* Compare and merge your old ThingsBoard configuration files (from the backup you made in the first step) with new ones.

#### Start the service

```text
net start thingsboard
```
{: .copy-code}

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}
