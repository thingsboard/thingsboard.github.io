---
layout: docwithnav
assignees:
- ikulikov
title: Upgrade instructions

---

* TOC
{:toc}

## Upgrading to 1.1.0

This steps are applicable for 1.0.0 IoT Gateway version.

### Ubuntu/CentOS

#### Gateway package download

{% capture tabspec %}tb-gateway-download-1-1-0
tb-gateway-download-1-1-0-ubuntu,Ubuntu,shell,resources/1.1.0/tb-gateway-ubuntu-download.sh,/docs/iot-gateway/install/resources/1.1.0/tb-gateway-ubuntu-download.sh
tb-gateway-download-1-1-0-centos,CentOS,shell,resources/1.1.0/tb-gateway-centos-download.sh,/docs/iot-gateway/install/resources/1.1.0/tb-gateway-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### Gateway service upgrade

{% capture tabspec %}tb-gateway-installation-1-1-0
tb-gateway-installation-1-1-0-ubuntu,Ubuntu,shell,resources/1.1.0/tb-gateway-ubuntu-installation.sh,/docs/iot-gateway/install/resources/1.1.0/tb-gateway-ubuntu-installation.sh
tb-gateway-installation-1-1-0-centos,CentOS,shell,resources/1.1.0/tb-gateway-centos-installation.sh,/docs/iot-gateway/install/resources/1.1.0/tb-gateway-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

#### Start the service

```bash
$ sudo service tb-gateway start
```

### Windows

#### Gateway package download

Download Gateway installation archive for Windows: [tb-gateway-windows-1.1.zip](https://github.com/thingsboard/thingsboard-gateway/releases/download/v1.1/tb-gateway-windows-1.1.zip).

#### Gateway service upgrade

* Make backup of previous Gateway configuration located in \<Gateway install dir\>\conf (for ex. C:\tb-gateway\conf).
* Uninstall previous version of Gateway service by running **uninstall.bat** located in Gateway install dir.

**NOTE** Scripts listed above should be executed using Administrator Role.

```text
C:\tb-gateway>uninstall.bat
```
* Remove Gateway install dir.
* Unzip installation archive to Gateway install dir.
* Compare your old Gateway configuration files (from backup you made in first step) with new ones.
* Run **install.bat** script to install new version of Gateway as a Windows service.

```text
C:\tb-gateway>install.bat
```

#### Start the service

```text
net start tb-gateway
```

## Upgrading to 1.2.0

This steps are applicable for 1.1.0 IoT Gateway version.

### Ubuntu/CentOS

#### Gateway package download

{% capture tabspec %}tb-gateway-download-1-2-0
tb-gateway-download-1-2-0-ubuntu,Ubuntu,shell,resources/1.2.0/tb-gateway-ubuntu-download.sh,/docs/iot-gateway/install/resources/1.2.0/tb-gateway-ubuntu-download.sh
tb-gateway-download-1-2-0-centos,CentOS,shell,resources/1.2.0/tb-gateway-centos-download.sh,/docs/iot-gateway/install/resources/1.2.0/tb-gateway-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### Gateway service upgrade

{% capture tabspec %}tb-gateway-installation-1-2-0
tb-gateway-installation-1-2-0-ubuntu,Ubuntu,shell,resources/1.2.0/tb-gateway-ubuntu-installation.sh,/docs/iot-gateway/install/resources/1.2.0/tb-gateway-ubuntu-installation.sh
tb-gateway-installation-1-2-0-centos,CentOS,shell,resources/1.2.0/tb-gateway-centos-installation.sh,/docs/iot-gateway/install/resources/1.2.0/tb-gateway-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

#### Start the service

```bash
$ sudo service tb-gateway start
```

### Windows

#### Gateway package download

Download Gateway installation archive for Windows: [tb-gateway-windows-1.2.zip](https://github.com/thingsboard/thingsboard-gateway/releases/download/v1.2/tb-gateway-windows-1.2.zip).

#### Gateway service upgrade

* Make backup of previous Gateway configuration located in \<Gateway install dir\>\conf (for ex. C:\tb-gateway\conf).
* Uninstall previous version of Gateway service by running **uninstall.bat** located in Gateway install dir.

**NOTE** Scripts listed above should be executed using Administrator Role.

```text
C:\tb-gateway>uninstall.bat
```
* Remove Gateway install dir.
* Unzip installation archive to Gateway install dir.
* Compare your old Gateway configuration files (from backup you made in first step) with new ones.
* Run **install.bat** script to install new version of Gateway as a Windows service.

```text
C:\tb-gateway>install.bat
```

#### Start the service

```text
net start tb-gateway
```
