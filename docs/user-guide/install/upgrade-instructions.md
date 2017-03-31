---
layout: docwithnav
assignees:
- ashvayka
title: Upgrade instructions
description: Thingsboard IoT platform upgrade instructions

---

* TOC
{:toc}

## Upgrading to 1.0.3

This steps are applicable for both 1.0, 1.0.1 and 1.0.2 Thingsboard versions.

#### Thingsboard package download

{% capture tabspec %}thingsboard-download-1-0-3
thingsboard-download-1-0-3-ubuntu,Ubuntu,shell,resources/1.0.3/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/1.0.3/thingsboard-ubuntu-download.sh
thingsboard-download-1-0-3-centos,CentOS,shell,resources/1.0.3/thingsboard-centos-download.sh,/docs/user-guide/install/resources/1.0.3/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### Thingsboard service upgrade

{% capture tabspec %}thingsboard-installation-1-0-3
thingsboard-installation-1-0-3-ubuntu,Ubuntu,shell,resources/1.0.3/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/1.0.3/thingsboard-ubuntu-installation.sh
thingsboard-installation-1-0-3-centos,CentOS,shell,resources/1.0.3/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/1.0.3/thingsboard-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

#### Database upgrade

This step is required only if you are upgrading from 1.0 or 1.0.1 versions.
Please use following instruction to update your single node instance:

```bash
# Download upgrade scripts
$ wget https://raw.githubusercontent.com/thingsboard/thingsboard.github.io/master/docs/user-guide/install/resources/1.0.3/upgrade_1.0_1.0.2.sh
$ wget https://raw.githubusercontent.com/thingsboard/thingsboard.github.io/master/docs/user-guide/install/resources/1.0.3/system_widgets_1.0_1.0.2.cql

# Launch main script
$ chmod +x upgrade_1.0_1.0.2.sh
$ ./upgrade_1.0_1.0.2.sh

``` 
 
{% capture tabspec %}cassandra-installation-1-0-3
cassandra-installation-1-0-3-upgrade-script,Thingsboard Upgrade script,shell,resources/1.0.3/upgrade_1.0_1.0.2.sh,/docs/user-guide/install/resources/1.0.3/upgrade_1.0_1.0.2.sh
cassandra-installation-1-0-3-cql-script,Cassandra CQL script,sql,resources/1.0.3/system_widgets_1.0_1.0.2.cql,/docs/user-guide/install/resources/1.0.3/system_widgets_1.0_1.0.2.cql{% endcapture %}
{% include tabs.html %}
  
#### Start the service

```bash
$ sudo service thingsboard start
```

## Upgrading to 1.1.0

This steps are applicable for 1.0.3 Thingsboard version.

#### Thingsboard package download

{% capture tabspec %}thingsboard-download-1-1-0
thingsboard-download-1-1-0-ubuntu,Ubuntu,shell,resources/1.1.0/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/1.1.0/thingsboard-ubuntu-download.sh
thingsboard-download-1-1-0-centos,CentOS,shell,resources/1.1.0/thingsboard-centos-download.sh,/docs/user-guide/install/resources/1.1.0/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### Thingsboard service upgrade

{% capture tabspec %}thingsboard-installation-1-1-0
thingsboard-installation-1-1-0-ubuntu,Ubuntu,shell,resources/1.1.0/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/1.1.0/thingsboard-ubuntu-installation.sh
thingsboard-installation-1-1-0-centos,CentOS,shell,resources/1.1.0/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/1.1.0/thingsboard-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

#### Database upgrade

Please use following instruction to update your single node instance:

```bash
# Download upgrade scripts
$ wget https://raw.githubusercontent.com/thingsboard/thingsboard.github.io/master/docs/user-guide/install/resources/1.1.0/upgrade_1.0.3_1.1.0.sh
$ wget https://raw.githubusercontent.com/thingsboard/thingsboard.github.io/master/docs/user-guide/install/resources/1.1.0/system_widgets_1.0.3_1.1.0.cql

# Launch main script
$ chmod +x upgrade_1.0.3_1.1.0.sh
$ ./upgrade_1.0.3_1.1.0.sh

``` 
 
{% capture tabspec %}cassandra-installation-1-1-0
cassandra-installation-1-1-0-upgrade-script,Thingsboard Upgrade script,shell,resources/1.1.0/upgrade_1.0.3_1.1.0.sh,/docs/user-guide/install/resources/1.1.0/upgrade_1.0.3_1.1.0.sh
cassandra-installation-1-1-0-cql-script,Cassandra CQL script,sql,resources/1.1.0/system_widgets_1.0.3_1.1.0.cql,/docs/user-guide/install/resources/1.1.0/system_widgets_1.0.3_1.1.0.cql{% endcapture %}
{% include tabs.html %}
  
#### Start the service

```bash
$ sudo service thingsboard start
```

## Upgrading to 1.2.0

This steps are applicable for 1.1.0 Thingsboard version.

### Ubuntu/CentOS

#### Thingsboard package download

{% capture tabspec %}thingsboard-download-1-2-0
thingsboard-download-1-2-0-ubuntu,Ubuntu,shell,resources/1.2.0/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/1.2.0/thingsboard-ubuntu-download.sh
thingsboard-download-1-2-0-centos,CentOS,shell,resources/1.2.0/thingsboard-centos-download.sh,/docs/user-guide/install/resources/1.2.0/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### Thingsboard service upgrade

{% capture tabspec %}thingsboard-installation-1-2-0
thingsboard-installation-1-2-0-ubuntu,Ubuntu,shell,resources/1.2.0/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/1.2.0/thingsboard-ubuntu-installation.sh
thingsboard-installation-1-2-0-centos,CentOS,shell,resources/1.2.0/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/1.2.0/thingsboard-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

#### Database upgrade

```bash
# Download upgrade scripts
$ wget https://raw.githubusercontent.com/thingsboard/thingsboard.github.io/master/docs/user-guide/install/resources/1.2.0/upgrade_1.1.0_1.2.0.sh
$ wget https://raw.githubusercontent.com/thingsboard/thingsboard.github.io/master/docs/user-guide/install/resources/1.2.0/system_widgets.cql

# Launch main script
$ chmod +x upgrade_1.1.0_1.2.0.sh
$ ./upgrade_1.1.0_1.2.0.sh

```

#### Start the service

```bash
$ sudo service thingsboard start
```

### Windows

#### Thingsboard package download

Download Thingsboard installation archive for Windows: [thingsboard-windows-1.2.zip](https://github.com/thingsboard/thingsboard/releases/download/v1.2/thingsboard-windows-1.2.zip).

#### Thingsboard service upgrade

* Make backup of previous Thingsboard configuration located in \<Thingsboard install dir\>\conf (for ex. C:\thingsboard\conf).
* Uninstall previous version of Thingsboard service by running **uninstall.bat** located in Thingsboard install dir.

**NOTE** Scripts listed above should be executed using Administrator Role.

```text
C:\thingsboard>uninstall.bat
```
* Remove Thingsboard install dir.
* Unzip installation archive to Thingsboard install dir.
* Compare your old Thingsboard configuration files (from backup you made in first step) with new ones.
* Run **install.bat** script to install new version of Thingsboard as a Windows service.

```text
C:\thingsboard>install.bat
```

#### Database upgrade
 
* Download upgrade scripts to some folder:
  * [upgrade_1.1.0_1.2.0.bat](https://raw.githubusercontent.com/thingsboard/thingsboard.github.io/master/docs/user-guide/install/resources/1.2.0/upgrade_1.1.0_1.2.0.bat)
  * [system_widgets.cql](https://raw.githubusercontent.com/thingsboard/thingsboard.github.io/master/docs/user-guide/install/resources/1.2.0/system_widgets.cql)
* Execute **upgrade_1.1.0_1.2.0.bat** (**NOTE** This script should be executed using Administrative Role)

```text
upgrade_1.1.0_1.2.0.bat
```
  
#### Start the service

```text
net start thingsboard
```

## Upgrading to 1.2.1

This steps are applicable for 1.2.0 Thingsboard version.

### Ubuntu/CentOS

#### Thingsboard package download

{% capture tabspec %}thingsboard-download-1-2-1
thingsboard-download-1-2-1-ubuntu,Ubuntu,shell,resources/1.2.1/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/1.2.1/thingsboard-ubuntu-download.sh
thingsboard-download-1-2-1-centos,CentOS,shell,resources/1.2.1/thingsboard-centos-download.sh,/docs/user-guide/install/resources/1.2.1/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### Thingsboard service upgrade

{% capture tabspec %}thingsboard-installation-1-2-1
thingsboard-installation-1-2-1-ubuntu,Ubuntu,shell,resources/1.2.1/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/1.2.1/thingsboard-ubuntu-installation.sh
thingsboard-installation-1-2-1-centos,CentOS,shell,resources/1.2.1/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/1.2.1/thingsboard-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

#### Database upgrade

```bash
# Download upgrade scripts
$ wget https://raw.githubusercontent.com/thingsboard/thingsboard.github.io/master/docs/user-guide/install/resources/1.2.1/upgrade_1.2.0_1.2.1.sh
$ wget https://raw.githubusercontent.com/thingsboard/thingsboard.github.io/master/docs/user-guide/install/resources/1.2.1/schema_update.cql
$ wget https://raw.githubusercontent.com/thingsboard/thingsboard.github.io/master/docs/user-guide/install/resources/1.2.1/system_widgets.cql

# Launch main script
$ chmod +x upgrade_1.2.0_1.2.1.sh
$ ./upgrade_1.2.0_1.2.1.sh

```

#### Start the service

```bash
$ sudo service thingsboard start
```

### Windows

#### Thingsboard package download

Download Thingsboard installation archive for Windows: [thingsboard-windows-1.2.1.zip](https://github.com/thingsboard/thingsboard/releases/download/v1.2.1/thingsboard-windows-1.2.1.zip).

#### Thingsboard service upgrade

* Make backup of previous Thingsboard configuration located in \<Thingsboard install dir\>\conf (for ex. C:\thingsboard\conf).
* Uninstall previous version of Thingsboard service by running **uninstall.bat** located in Thingsboard install dir.

**NOTE** Scripts listed above should be executed using Administrator Role.

```text
C:\thingsboard>uninstall.bat
```
* Remove Thingsboard install dir.
* Unzip installation archive to Thingsboard install dir.
* Compare your old Thingsboard configuration files (from backup you made in first step) with new ones.
* Run **install.bat** script to install new version of Thingsboard as a Windows service.

```text
C:\thingsboard>install.bat
```

#### Database upgrade
 
* Download upgrade scripts to some folder:
  * [upgrade_1.2.0_1.2.1.bat](https://raw.githubusercontent.com/thingsboard/thingsboard.github.io/master/docs/user-guide/install/resources/1.2.1/upgrade_1.2.0_1.2.1.bat)
  * [schema_update.cql](https://raw.githubusercontent.com/thingsboard/thingsboard.github.io/master/docs/user-guide/install/resources/1.2.1/schema_update.cql)
  * [system_widgets.cql](https://raw.githubusercontent.com/thingsboard/thingsboard.github.io/master/docs/user-guide/install/resources/1.2.1/system_widgets.cql)
* Execute **upgrade_1.2.0_1.2.1.bat** (**NOTE** This script should be executed using Administrative Role)

```text
upgrade_1.2.0_1.2.1.bat
```
  
#### Start the service

```text
net start thingsboard
```

## Upgrading to 1.2.2

This steps are applicable for 1.2.1 Thingsboard version.

### Ubuntu/CentOS

#### Thingsboard package download

{% capture tabspec %}thingsboard-download-1-2-2
thingsboard-download-1-2-2-ubuntu,Ubuntu,shell,resources/1.2.2/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/1.2.2/thingsboard-ubuntu-download.sh
thingsboard-download-1-2-2-centos,CentOS,shell,resources/1.2.2/thingsboard-centos-download.sh,/docs/user-guide/install/resources/1.2.2/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### Thingsboard service upgrade

{% capture tabspec %}thingsboard-installation-1-2-2
thingsboard-installation-1-2-2-ubuntu,Ubuntu,shell,resources/1.2.2/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/1.2.2/thingsboard-ubuntu-installation.sh
thingsboard-installation-1-2-2-centos,CentOS,shell,resources/1.2.2/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/1.2.2/thingsboard-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

#### Database upgrade

```bash
# Download upgrade scripts
$ wget https://raw.githubusercontent.com/thingsboard/thingsboard.github.io/master/docs/user-guide/install/resources/1.2.2/upgrade_1.2.1_1.2.2.sh
$ wget https://raw.githubusercontent.com/thingsboard/thingsboard.github.io/master/docs/user-guide/install/resources/1.2.2/system_widgets.cql

# Launch main script
$ chmod +x upgrade_1.2.1_1.2.2.sh
$ ./upgrade_1.2.1_1.2.2.sh

```

#### Start the service

```bash
$ sudo service thingsboard start
```

### Windows

#### Thingsboard package download

Download Thingsboard installation archive for Windows: [thingsboard-windows-1.2.2.zip](https://github.com/thingsboard/thingsboard/releases/download/v1.2.2/thingsboard-windows-1.2.2.zip).

#### Thingsboard service upgrade

* Make backup of previous Thingsboard configuration located in \<Thingsboard install dir\>\conf (for ex. C:\thingsboard\conf).
* Uninstall previous version of Thingsboard service by running **uninstall.bat** located in Thingsboard install dir.

**NOTE** Scripts listed above should be executed using Administrator Role.

```text
C:\thingsboard>uninstall.bat
```
* Remove Thingsboard install dir.
* Unzip installation archive to Thingsboard install dir.
* Compare your old Thingsboard configuration files (from backup you made in first step) with new ones.
* Run **install.bat** script to install new version of Thingsboard as a Windows service.

```text
C:\thingsboard>install.bat
```

#### Database upgrade
 
* Download upgrade scripts to some folder:
  * [upgrade_1.2.1_1.2.2.bat](https://raw.githubusercontent.com/thingsboard/thingsboard.github.io/master/docs/user-guide/install/resources/1.2.2/upgrade_1.2.1_1.2.2.bat)
  * [system_widgets.cql](https://raw.githubusercontent.com/thingsboard/thingsboard.github.io/master/docs/user-guide/install/resources/1.2.2/system_widgets.cql)
* Execute **upgrade_1.2.1_1.2.2.bat** (**NOTE** This script should be executed using Administrative Role)

```text
upgrade_1.2.1_1.2.2.bat
```
  
#### Start the service

```text
net start thingsboard
```
