---
layout: docwithnav-pe
title: ThingsBoard instructions for upgrading from Community Edition
description: Upgrading from Community Edition


---

## Upgrading from Community Edition

### Ubuntu/CentOS {#ubuntucentos-ce}

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for the latest ThingsBoard Community Edition version. In order to upgrade to Professional Edition you need to [**upgrade to the latest Community Edition version first**](/docs/user-guide/install/upgrade-instructions/).
{% endcapture %}
{% include templates/warn-banner.md content=difference %}

#### ThingsBoard PE package download

{% capture tabspec %}thingsboard-download-latest
thingsboard-download-latest-ubuntu,Ubuntu,shell,resources/latest-pe/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/latest-pe/thingsboard-ubuntu-download.sh
thingsboard-download-latest-centos,CentOS,shell,resources/latest-pe/thingsboard-centos-download.sh,/docs/user-guide/install/resources/latest-pe/thingsboard-centos-download.sh{% endcapture %}
{% include tabs.html %}

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

* Install Thingsboard Web Report component as described [here](/docs/user-guide/install/pe/ubuntu/#step-9-install-thingsboard-webreport-component).

{% capture tabspec %}thingsboard-installation-latest
thingsboard-installation-latest-ubuntu,Ubuntu,shell,resources/latest-pe/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/latest-pe/thingsboard-ubuntu-installation.sh
thingsboard-installation-latest-centos,CentOS,shell,resources/latest-pe/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/latest-pe/thingsboard-centos-installation.sh{% endcapture %}
{% include tabs.html %}

{% capture difference %}
**NOTE:**
<br>
Package installer may ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

* Configure Professional Edition license key as described [here](/docs/user-guide/install/pe/ubuntu/#step-3-obtain-and-configure-license-key).

Execute regular upgrade script:

```bash
sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=CE
```
{: .copy-code}

#### Start the service

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows {#windows-ce}

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for the latest ThingsBoard Community Edition version. In order to upgrade to Professional Edition you need to [**upgrade to the latest Community Edition version first**](/docs/user-guide/install/upgrade-instructions/).
{% endcapture %}
{% include templates/warn-banner.md content=difference %}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-{{ site.release.pe_ver }}.exe](https://dist.thingsboard.io/thingsboard-windows-setup-{{ site.release.pe_ver }}.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard CE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run the **thingsboard-windows-setup-{{ site.release.pe_ver }}.exe**.
* Compare and merge your old ThingsBoard configuration files (from the backup you made in the first step) with new ones.
* Configure Professional Edition license key as described [here](/docs/user-guide/install/pe/windows/#step-3-obtain-and-configure-license-key).
* Finally, run **upgrade.bat** script to upgrade ThingsBoard to the new version.

{% capture difference %}
**NOTE:**
<br>
Scripts listed above should be executed using Administrator Role.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Execute regular upgrade script:

```text
C:\thingsboard>upgrade.bat --fromVersion=CE
```
{: .copy-code}

#### Start the service

```text
net start thingsboard
```
{: .copy-code}
