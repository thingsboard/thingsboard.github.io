---
layout: docwithnav
assignees:
- ashvayka
title: Upgrade instructions

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
