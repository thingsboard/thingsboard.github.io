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

{% capture tabspec %}thingsboard-download
A,Ubuntu,shell,resources/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/thingsboard-ubuntu-download.sh
B,CentOS,shell,resources/thingsboard-centos-download.sh,/docs/user-guide/install/resources/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### Thingsboard service upgrade

{% capture tabspec %}thingsboard-installation
A,Ubuntu,shell,resources/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/thingsboard-ubuntu-installation.sh
B,CentOS,shell,resources/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/thingsboard-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

#### Database upgrade

This step is required only if you are upgrading from 1.0 or 1.0.1 versions.
Please use following instruction to update your single node instance:

```bash
# Download upgrade scripts
$ wget https://raw.githubusercontent.com/thingsboard/thingsboard.github.io/master/docs/user-guide/install/resources/upgrade_1.0_1.0.2.sh
$ wget https://raw.githubusercontent.com/thingsboard/thingsboard.github.io/master/docs/user-guide/install/resources/system_widgets_1.0_1.0.2.cql

# Launch main script
$ chmod +x upgrade_1.0_1.0.2.sh
$ ./upgrade_1.0_1.0.2.sh

``` 
 
{% capture tabspec %}cassandra-installation
A,Thingsboard Upgrade script,shell,resources/upgrade_1.0_1.0.2.sh,/docs/user-guide/install/resources/upgrade_1.0_1.0.2.sh
B,Cassandra CQL script,sql,resources/system_widgets_1.0_1.0.2.cql,/docs/user-guide/install/resources/system_widgets_1.0_1.0.2.cql{% endcapture %}
{% include tabs.html %}
  
#### Start the service

```bash
$ sudo service thingsboard start
```
