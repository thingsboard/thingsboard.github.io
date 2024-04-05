---
layout: docwithnav-pe
assignees:
- ashvayka
title: Upgrade instructions
description: ThingsBoard PE IoT platform upgrade instructions

---


<ul id="markdown-toc">
  <li>
        <a href="#prepare-for-upgrading-thingsboard-centos-ubuntu" id="markdown-toc-prepare-for-upgrading-thingsboard-centos-ubuntu">Prepare for upgrading ThingsBoard (CentOS, Ubuntu)</a>
  </li>
  <li>
      <a href="#upgrading-to-363pe" id="markdown-toc-upgrading-to-363pe">Upgrading to 3.6.3PE</a>
      <ul>
          <li>
              <a href="#ubuntucentos-363" id="markdown-toc-ubuntucentos-363">Ubuntu/CentOS</a>
          </li>
          <li>
              <a href="#windows-363" id="markdown-toc-windows-363">Windows</a>
          </li>
      </ul>
  </li>
  <li>
      <a href="#upgrading-to-362pe" id="markdown-toc-upgrading-to-362pe">Upgrading to 3.6.2PE</a>
      <ul>
          <li>
              <a href="#ubuntucentos-362" id="markdown-toc-ubuntucentos-362">Ubuntu/CentOS</a>
          </li>
          <li>
              <a href="#windows-362" id="markdown-toc-windows-362">Windows</a>
          </li>
      </ul>
  </li>
  <li>
      <a href="#upgrading-to-361pe" id="markdown-toc-upgrading-to-361pe">Upgrading to 3.6.1PE</a>
      <ul>
          <li>
              <a href="#ubuntucentos-361" id="markdown-toc-ubuntucentos-361">Ubuntu/CentOS</a>
          </li>
          <li>
              <a href="#windows-361" id="markdown-toc-windows-361">Windows</a>
          </li>
      </ul>
  </li>
  <li>
      <a href="#upgrading-to-36pe" id="markdown-toc-upgrading-to-36pe">Upgrading to 3.6PE</a>
      <ul>
          <li>
              <a href="#ubuntucentos-36" id="markdown-toc-ubuntucentos-36">Ubuntu/CentOS</a>
          </li>
          <li>
              <a href="#windows-36" id="markdown-toc-windows-36">Windows</a>
          </li>
      </ul>
  </li>
  <li>
      <a href="#upgrading-to-351pe" id="markdown-toc-upgrading-to-351pe">Upgrading to 3.5.1PE</a>
      <ul>
          <li>
              <a href="#ubuntucentos-351" id="markdown-toc-ubuntucentos-351">Ubuntu/CentOS</a>
          </li>
          <li>
              <a href="#windows-351" id="markdown-toc-windows-351">Windows</a>
          </li>
      </ul>
  </li>
  <li>
      <a href="#upgrading-to-35pe" id="markdown-toc-upgrading-to-35pe">Upgrading to 3.5PE</a>
      <ul>
          <li>
              <a href="#ubuntucentos-35" id="markdown-toc-ubuntucentos-35">Ubuntu/CentOS</a>
          </li>
          <li>
              <a href="#windows-35" id="markdown-toc-windows-35">Windows</a>
          </li>
      </ul>
  </li>
  <li>
    <a href="/docs/user-guide/install/pe/old-upgrade-instructions/" id="markdown-toc-upgrading-to-240">Older versions</a>
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

## Upgrading to 3.6.3PE

### Ubuntu/CentOS {#ubuntucentos-363}

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.6.2PE. In order to upgrade to 3.6.3PE you need to [**upgrade to 3.6.2PE first**](/docs/user-guide/install/pe/upgrade-instructions/#ubuntucentos-362).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard PE package download

{% capture tabspec %}thingsboard-download-3-6-3
thingsboard-download-3-6-3-ubuntu,Ubuntu,shell,resources/3.6.3pe/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/3.6.3pe/thingsboard-ubuntu-download.sh
thingsboard-download-3-6-3-centos,CentOS,shell,resources/3.6.3pe/thingsboard-centos-download.sh,/docs/user-guide/install/resources/3.6.3pe/thingsboard-centos-download.sh{% endcapture %}
{% include tabs.html %}

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

* Install Thingsboard Web Report component as described [here](/docs/user-guide/install/pe/ubuntu/#step-9-install-thingsboard-webreport-component).

{% capture tabspec %}thingsboard-installation-3-6-3
thingsboard-installation-3-6-3-ubuntu,Ubuntu,shell,resources/3.6.3pe/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/3.6.3pe/thingsboard-ubuntu-installation.sh
thingsboard-installation-3-6-3-centos,CentOS,shell,resources/3.6.3pe/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/3.6.3pe/thingsboard-centos-installation.sh{% endcapture %}
{% include tabs.html %}

{% capture difference %}
**NOTE:**
<br>
Package installer may ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Execute regular upgrade script:

```bash
sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=3.6.2
```
{: .copy-code}

#### Start the service

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows {#windows-363}

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.6.2PE. In order to upgrade to 3.6.3PE you need to [**upgrade to 3.6.2PE first**](/docs/user-guide/install/pe/upgrade-instructions/#windows-362).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.6.3pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.6.3pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.6.3pe.exe**.
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
C:\thingsboard>upgrade.bat --fromVersion=3.6.2
```
{: .copy-code}

#### Start the service

```text
net start thingsboard
```
{: .copy-code}


## Upgrading to 3.6.2PE

### Ubuntu/CentOS {#ubuntucentos-362}

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.6.1PE. In order to upgrade to 3.6.2PE you need to [**upgrade to 3.6.1PE first**](/docs/user-guide/install/pe/upgrade-instructions/#ubuntucentos-361).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard PE package download

{% capture tabspec %}thingsboard-download-3-6-2
thingsboard-download-3-6-2-ubuntu,Ubuntu,shell,resources/3.6.2pe/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/3.6.2pe/thingsboard-ubuntu-download.sh
thingsboard-download-3-6-2-centos,CentOS,shell,resources/3.6.2pe/thingsboard-centos-download.sh,/docs/user-guide/install/resources/3.6.2pe/thingsboard-centos-download.sh{% endcapture %}
{% include tabs.html %}

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

* Install Thingsboard Web Report component as described [here](/docs/user-guide/install/pe/ubuntu/#step-9-install-thingsboard-webreport-component).

{% capture tabspec %}thingsboard-installation-3-6-2
thingsboard-installation-3-6-2-ubuntu,Ubuntu,shell,resources/3.6.2pe/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/3.6.2pe/thingsboard-ubuntu-installation.sh
thingsboard-installation-3-6-2-centos,CentOS,shell,resources/3.6.2pe/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/3.6.2pe/thingsboard-centos-installation.sh{% endcapture %}
{% include tabs.html %}

{% capture difference %}
**NOTE:**
<br>
Package installer may ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Execute regular upgrade script:

```bash
sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=3.6.1
```
{: .copy-code}

#### Start the service

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows {#windows-362}

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.6.1PE. In order to upgrade to 3.6.2PE you need to [**upgrade to 3.6.1PE first**](/docs/user-guide/install/pe/upgrade-instructions/#windows-361).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.6.2pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.6.2pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.6.2pe.exe**.
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
C:\thingsboard>upgrade.bat --fromVersion=3.6.1
```
{: .copy-code}

#### Start the service

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 3.6.1PE

### Ubuntu/CentOS {#ubuntucentos-361}

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.6PE. In order to upgrade to 3.6.1PE you need to [**upgrade to 3.6PE first**](/docs/user-guide/install/pe/upgrade-instructions/#ubuntucentos-36).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard PE package download

{% capture tabspec %}thingsboard-download-3-6-1
thingsboard-download-3-6-1-ubuntu,Ubuntu,shell,resources/3.6.1pe/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/3.6.1pe/thingsboard-ubuntu-download.sh
thingsboard-download-3-6-1-centos,CentOS,shell,resources/3.6.1pe/thingsboard-centos-download.sh,/docs/user-guide/install/resources/3.6.1pe/thingsboard-centos-download.sh{% endcapture %}
{% include tabs.html %}

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

* Install Thingsboard Web Report component as described [here](/docs/user-guide/install/pe/ubuntu/#step-9-install-thingsboard-webreport-component).

{% capture tabspec %}thingsboard-installation-3-6-1
thingsboard-installation-3-6-1-ubuntu,Ubuntu,shell,resources/3.6.1pe/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/3.6.1pe/thingsboard-ubuntu-installation.sh
thingsboard-installation-3-6-1-centos,CentOS,shell,resources/3.6.1pe/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/3.6.1pe/thingsboard-centos-installation.sh{% endcapture %}
{% include tabs.html %}

{% capture difference %}
**NOTE:**
<br>
Package installer may ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Execute regular upgrade script:

```bash
sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=3.6.0
```
{: .copy-code}

#### Start the service

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows {#windows-361}

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.6PE. In order to upgrade to 3.6.1PE you need to [**upgrade to 3.6PE first**](/docs/user-guide/install/pe/upgrade-instructions/#windows-36).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.6.1pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.6.1pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.6.1pe.exe**.
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
C:\thingsboard>upgrade.bat --fromVersion=3.6.0
```
{: .copy-code}

#### Start the service

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 3.6PE

### Ubuntu/CentOS {#ubuntucentos-36}

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.5.1PE. In order to upgrade to 3.6PE you need to [**upgrade to 3.5.1PE first**](/docs/user-guide/install/pe/upgrade-instructions/#ubuntucentos-351).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard PE package download

{% capture tabspec %}thingsboard-download-3-6
thingsboard-download-3-6-ubuntu,Ubuntu,shell,resources/3.6pe/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/3.6pe/thingsboard-ubuntu-download.sh
thingsboard-download-3-6-centos,CentOS,shell,resources/3.6pe/thingsboard-centos-download.sh,/docs/user-guide/install/resources/3.6pe/thingsboard-centos-download.sh{% endcapture %}
{% include tabs.html %}

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

* Install Thingsboard Web Report component as described [here](/docs/user-guide/install/pe/ubuntu/#step-9-install-thingsboard-webreport-component).

{% capture tabspec %}thingsboard-installation-3-6
thingsboard-installation-3-6-ubuntu,Ubuntu,shell,resources/3.6pe/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/3.6pe/thingsboard-ubuntu-installation.sh
thingsboard-installation-3-6-centos,CentOS,shell,resources/3.6pe/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/3.6pe/thingsboard-centos-installation.sh{% endcapture %}
{% include tabs.html %}

{% capture difference %}
**NOTE:**
<br>
Package installer may ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Execute regular upgrade script:

```bash
sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=3.5.1
```
{: .copy-code}

#### Start the service

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows {#windows-36}

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.5.1PE. In order to upgrade to 3.6PE you need to [**upgrade to 3.5.1PE first**](/docs/user-guide/install/pe/upgrade-instructions/#windows-351).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.6pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.6pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.6pe.exe**.
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
C:\thingsboard>upgrade.bat --fromVersion=3.5.1
```
{: .copy-code}

#### Start the service

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 3.5.1PE

### Ubuntu/CentOS {#ubuntucentos-351}

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.5PE. In order to upgrade to 3.5.1PE you need to [**upgrade to 3.5PE first**](/docs/user-guide/install/pe/upgrade-instructions/#ubuntucentos-35).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard PE package download

{% capture tabspec %}thingsboard-download-3-5-1
thingsboard-download-3-5-1-ubuntu,Ubuntu,shell,resources/3.5.1pe/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/3.5.1pe/thingsboard-ubuntu-download.sh
thingsboard-download-3-5-1-centos,CentOS,shell,resources/3.5.1pe/thingsboard-centos-download.sh,/docs/user-guide/install/resources/3.5.1pe/thingsboard-centos-download.sh{% endcapture %}
{% include tabs.html %}

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

* Install Thingsboard Web Report component as described [here](/docs/user-guide/install/pe/ubuntu/#step-9-install-thingsboard-webreport-component).

{% capture tabspec %}thingsboard-installation-3-5-1
thingsboard-installation-3-5-1-ubuntu,Ubuntu,shell,resources/3.5.1pe/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/3.5.1pe/thingsboard-ubuntu-installation.sh
thingsboard-installation-3-5-1-centos,CentOS,shell,resources/3.5.1pe/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/3.5.1pe/thingsboard-centos-installation.sh{% endcapture %}
{% include tabs.html %}

{% capture difference %}
**NOTE:**
<br>
Package installer may ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Execute regular upgrade script:

```bash
sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=3.5.0
```
{: .copy-code}

#### Start the service

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows {#windows-351}

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.5PE. In order to upgrade to 3.5.1PE you need to [**upgrade to 3.5PE first**](/docs/user-guide/install/pe/upgrade-instructions/#windows-35).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.5.1pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.5.1pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.5.1pe.exe**.
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
C:\thingsboard>upgrade.bat --fromVersion=3.5.0
```
{: .copy-code}

#### Start the service

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 3.5PE

### Ubuntu/CentOS {#ubuntucentos-35}

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.4.4PE. In order to upgrade to 3.5PE you need to [**upgrade to 3.4.4PE first**](/docs/user-guide/install/pe/upgrade-instructions/#ubuntucentos-344).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

{% include templates/install/tb-350-update.md %}

#### ThingsBoard PE package download

{% capture tabspec %}thingsboard-download-3-5
thingsboard-download-3-5-ubuntu,Ubuntu,shell,resources/3.5pe/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/3.5pe/thingsboard-ubuntu-download.sh
thingsboard-download-3-5-centos,CentOS,shell,resources/3.5pe/thingsboard-centos-download.sh,/docs/user-guide/install/resources/3.5pe/thingsboard-centos-download.sh{% endcapture %}
{% include tabs.html %}

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

* Install Thingsboard Web Report component as described [here](/docs/user-guide/install/pe/ubuntu/#step-9-install-thingsboard-webreport-component).

{% capture tabspec %}thingsboard-installation-3-5
thingsboard-installation-3-5-ubuntu,Ubuntu,shell,resources/3.5pe/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/3.5pe/thingsboard-ubuntu-installation.sh
thingsboard-installation-3-5-centos,CentOS,shell,resources/3.5pe/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/3.5pe/thingsboard-centos-installation.sh{% endcapture %}
{% include tabs.html %}

{% capture difference %}
**NOTE:**
<br>
Package installer may ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Execute regular upgrade script:

```bash
sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=3.4.4
```
{: .copy-code}

#### Start the service

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows {#windows-35}

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.4.4PE. In order to upgrade to 3.5PE you need to [**upgrade to 3.4.4PE first**](/docs/user-guide/install/pe/upgrade-instructions/#windows-344).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

{% include templates/install/tb-350-update.md %}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.5pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.5pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.5pe.exe**.
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
C:\thingsboard>upgrade.bat --fromVersion=3.4.4
```
{: .copy-code}

#### Start the service

```text
net start thingsboard
```
{: .copy-code}


## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}
