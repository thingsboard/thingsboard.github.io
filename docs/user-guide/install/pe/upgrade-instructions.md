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
      <a href="#upgrading-to-242pe" id="markdown-toc-upgrading-to-242pe">Upgrading to 2.4.2PE</a>
      <ul>
          <li>
              <a href="#ubuntucentos-2" id="markdown-toc-ubuntucentos-2">Ubuntu/CentOS</a>        
          </li>
          <li>
              <a href="#windows-2" id="markdown-toc-windows-2">Windows</a>        
          </li>
      </ul>
  </li>
</ul>

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

## Upgrading to 2.4.2PE

These steps are applicable for 2.4.1PE ThingsBoard Professional Edition version.

### Ubuntu/CentOS

#### ThingsBoard PE package download

{% capture tabspec %}thingsboard-download-2-4-2
thingsboard-download-2-4-2-ubuntu,Ubuntu,shell,resources/2.4.2pe/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/2.4.2pe/thingsboard-ubuntu-download.sh
thingsboard-download-2-4-2-centos,CentOS,shell,resources/2.4.2pe/thingsboard-centos-download.sh,/docs/user-guide/install/resources/2.4.2pe/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```bash
$ sudo service thingsboard stop
```

* Install Thingsboard Web Report component as described [here](/docs/user-guide/install/pe/ubuntu/#step-8-install-thingsboard-webreport-component).


{% capture tabspec %}thingsboard-installation-2-4-2
thingsboard-installation-2-4-2-ubuntu,Ubuntu,shell,resources/2.4.2pe/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/2.4.2pe/thingsboard-ubuntu-installation.sh
thingsboard-installation-2-4-2-centos,CentOS,shell,resources/2.4.2pe/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/2.4.2pe/thingsboard-centos-installation.sh{% endcapture %}  
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

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-2.4.2pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-2.4.2pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.
 
```text
net stop thingsboard
```

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-2.4.2pe.exe**.
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

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}
