---
layout: docwithnav
assignees:
- ashvayka
title: Old Upgrade instructions
description: ThingsBoard IoT platform upgrade instructions
hidetoc: "true"

---

<h3>In order to update to new ThingsBoard releases, please follow
these <a style="pointer-events: all;" href="/docs/user-guide/install/upgrade-instructions/">CE</a> and 
<a style="pointer-events: all;" href="/docs/pe/user-guide/install/upgrade-instructions/">PE</a> instructions</h3>

<ul id="markdown-toc">
  <li>
    <a href="#upgrading-to-103" id="markdown-toc-upgrading-to-103">Upgrading to 1.0.3</a>
  </li>
  <li>
    <a href="#upgrading-to-110" id="markdown-toc-upgrading-to-110">Upgrading to 1.1.0</a>
  </li>
  <li>
    <a href="#upgrading-to-120" id="markdown-toc-upgrading-to-120">Upgrading to 1.2.0</a>
    <ul>
        <li>
            <a href="#ubuntucentos" id="markdown-toc-ubuntucentos">Ubuntu/CentOS</a>
        </li>
        <li>
            <a href="#windows" id="markdown-toc-windows">Windows</a>
        </li>
    </ul>
  </li>
  <li>
    <a href="#upgrading-to-121" id="markdown-toc-upgrading-to-121">Upgrading to 1.2.1</a>
    <ul>
        <li>
            <a href="#ubuntucentos-1" id="markdown-toc-ubuntucentos-1">Ubuntu/CentOS</a>
        </li>
        <li>
            <a href="#windows-1" id="markdown-toc-windows-1">Windows</a>
        </li>
    </ul>
  </li>
  <li>
    <a href="#upgrading-to-122" id="markdown-toc-upgrading-to-122">Upgrading to 1.2.2</a>
    <ul>
        <li>
            <a href="#ubuntucentos-2" id="markdown-toc-ubuntucentos-2">Ubuntu/CentOS</a>
        </li>
        <li>
            <a href="#windows-2" id="markdown-toc-windows-2">Windows</a>
        </li>
    </ul>
  </li>
  <li>
    <a href="#upgrading-to-123" id="markdown-toc-upgrading-to-123">Upgrading to 1.2.3</a>
    <ul>
        <li>
            <a href="#ubuntucentos-3" id="markdown-toc-ubuntucentos-3">Ubuntu/CentOS</a>
        </li>
        <li>
            <a href="#windows-3" id="markdown-toc-windows-3">Windows</a>
        </li>
    </ul>
  </li>
  <li>
    <a href="#upgrading-to-130" id="markdown-toc-upgrading-to-130">Upgrading to 1.3.0</a>
    <ul>
        <li>
            <a href="#ubuntucentos-4" id="markdown-toc-ubuntucentos-4">Ubuntu/CentOS</a>
        </li>
        <li>
            <a href="#windows-4" id="markdown-toc-windows-4">Windows</a>
        </li>
    </ul>
  </li>  
  <li>
    <a href="#upgrading-to-131" id="markdown-toc-upgrading-to-131">Upgrading to 1.3.1</a>
    <ul>
        <li>
            <a href="#ubuntucentos-5" id="markdown-toc-ubuntucentos-5">Ubuntu/CentOS</a>
        </li>
        <li>
            <a href="#windows-5" id="markdown-toc-windows-5">Windows</a>
        </li>
    </ul>
  </li>  
  <li>
    <a href="#upgrading-to-140" id="markdown-toc-upgrading-to-140">Upgrading to 1.4.0</a>
    <ul>
        <li>
            <a href="#ubuntucentos-6" id="markdown-toc-ubuntucentos-6">Ubuntu/CentOS</a>
        </li>
        <li>
            <a href="#windows-6" id="markdown-toc-windows-6">Windows</a>
        </li>
    </ul>
  </li>  
  <li>
    <a href="#upgrading-to-200" id="markdown-toc-upgrading-to-200">Upgrading to 2.0.0</a>
    <ul>
        <li>
            <a href="#ubuntucentos-7" id="markdown-toc-ubuntucentos-7">Ubuntu/CentOS</a>
        </li>
        <li>
            <a href="#windows-7" id="markdown-toc-windows-7">Windows</a>
        </li>
    </ul>
  </li>  
  <li>
    <a href="#upgrading-to-201" id="markdown-toc-upgrading-to-201">Upgrading to 2.0.1</a>
    <ul>
        <li>
            <a href="#ubuntucentos-8" id="markdown-toc-ubuntucentos-8">Ubuntu/CentOS</a>
        </li>
        <li>
            <a href="#windows-8" id="markdown-toc-windows-8">Windows</a>
        </li>
    </ul>
  </li>  
  <li>
    <a href="#upgrading-to-202" id="markdown-toc-upgrading-to-202">Upgrading to 2.0.2</a>
    <ul>
        <li>
            <a href="#ubuntucentos-9" id="markdown-toc-ubuntucentos-9">Ubuntu/CentOS</a>
        </li>
        <li>
            <a href="#windows-9" id="markdown-toc-windows-9">Windows</a>
        </li>
    </ul>
  </li>  
  <li>
    <a href="#upgrading-to-203" id="markdown-toc-upgrading-to-203">Upgrading to 2.0.3</a>
    <ul>
        <li>
            <a href="#ubuntucentos-10" id="markdown-toc-ubuntucentos-10">Ubuntu/CentOS</a>
        </li>
        <li>
            <a href="#windows-10" id="markdown-toc-windows-10">Windows</a>
        </li>
    </ul>
  </li>  
  <li>
    <a href="#upgrading-to-210" id="markdown-toc-upgrading-to-210">Upgrading to 2.1.0</a>
    <ul>
        <li>
            <a href="#ubuntucentos-11" id="markdown-toc-ubuntucentos-11">Ubuntu/CentOS</a>
        </li>
        <li>
            <a href="#windows-11" id="markdown-toc-windows-11">Windows</a>
        </li>
    </ul>
  </li>  
  <li>
    <a href="#upgrading-to-220" id="markdown-toc-upgrading-to-220">Upgrading to 2.2.0</a>
    <ul>
        <li>
            <a href="#ubuntucentos-12" id="markdown-toc-ubuntucentos-12">Ubuntu/CentOS</a>
        </li>
        <li>
            <a href="#windows-12" id="markdown-toc-windows-12">Windows</a>
        </li>
    </ul>
  </li>  
  <li>
    <a href="#upgrading-to-230" id="markdown-toc-upgrading-to-230">Upgrading to 2.3.0</a>
    <ul>
        <li>
            <a href="#ubuntucentos-13" id="markdown-toc-ubuntucentos-13">Ubuntu/CentOS</a>
        </li>
        <li>
            <a href="#windows-13" id="markdown-toc-windows-13">Windows</a>
        </li>
    </ul>
  </li>  
  <li>
    <a href="#upgrading-to-231" id="markdown-toc-upgrading-to-231">Upgrading to 2.3.1</a>
    <ul>
        <li>
            <a href="#ubuntucentos-14" id="markdown-toc-ubuntucentos-14">Ubuntu/CentOS</a>
        </li>
        <li>
            <a href="#windows-14" id="markdown-toc-windows-14">Windows</a>
        </li>
    </ul>
  </li>
  <li>
    <a href="#upgrading-to-240" id="markdown-toc-upgrading-to-240">Upgrading to 2.4.0</a>
    <ul>
        <li>
            <a href="#ubuntucentos-15" id="markdown-toc-ubuntucentos-15">Ubuntu/CentOS</a>
        </li>
        <li>
            <a href="#windows-15" id="markdown-toc-windows-15">Windows</a>
        </li>
    </ul>
  </li>
  <li>
    <a href="#upgrading-to-241" id="markdown-toc-upgrading-to-241">Upgrading to 2.4.1</a>
    <ul>
        <li>
            <a href="#ubuntucentos-16" id="markdown-toc-ubuntucentos-16">Ubuntu/CentOS</a>
        </li>
        <li>
            <a href="#windows-16" id="markdown-toc-windows-16">Windows</a>
        </li>
    </ul>
  </li>
  <li>
    <a href="#upgrading-to-2421" id="markdown-toc-upgrading-to-2421">Upgrading to 2.4.2.1</a>
    <ul>
        <li>
            <a href="#ubuntucentos-17" id="markdown-toc-ubuntucentos-17">Ubuntu/CentOS</a>
        </li>
        <li>
            <a href="#windows-17" id="markdown-toc-windows-17">Windows</a>
        </li>
    </ul>
  </li>
  <li>
    <a href="#upgrading-to-243" id="markdown-toc-upgrading-to-243">Upgrading to 2.4.3</a>
    <ul>
        <li>
            <a href="#ubuntucentos-18" id="markdown-toc-ubuntucentos-18">Ubuntu/CentOS</a>
        </li>
        <li>
            <a href="#windows-18" id="markdown-toc-windows-18">Windows</a>
        </li>
    </ul>
  </li>
  <li>
    <a href="#upgrading-to-25" id="markdown-toc-upgrading-to-25">Upgrading to 2.5</a>
    <ul>
        <li>
            <a href="#ubuntucentos-19" id="markdown-toc-ubuntucentos-19">Ubuntu/CentOS</a>
        </li>
        <li>
            <a href="#windows-19" id="markdown-toc-windows-19">Windows</a>
        </li>
    </ul>
  </li>
  <li>
      <a href="#upgrading-to-251" id="markdown-toc-upgrading-to-251">Upgrading to 2.5.1</a>
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
      <a href="#upgrading-to-252" id="markdown-toc-upgrading-to-252">Upgrading to 2.5.2</a>
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
      <a href="#upgrading-to-253" id="markdown-toc-upgrading-to-253">Upgrading to 2.5.3</a>
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
      <a href="#upgrading-to-254" id="markdown-toc-upgrading-to-254">Upgrading to 2.5.4</a>
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
      <a href="#upgrading-to-255" id="markdown-toc-upgrading-to-255">Upgrading to 2.5.5</a>
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
      <a href="#upgrading-to-256" id="markdown-toc-upgrading-to-256">Upgrading to 2.5.6</a>
      <ul>
          <li>
              <a href="#ubuntucentos-256" id="markdown-toc-ubuntucentos-256">Ubuntu/CentOS</a>
          </li>
          <li>
              <a href="#windows-256" id="markdown-toc-windows-256">Windows</a>
          </li>
      </ul>
  </li>

</ul>

## Upgrading to 1.0.3

These steps are applicable for 1.0, 1.0.1 and 1.0.2 ThingsBoard versions.

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-1-0-3
thingsboard-download-1-0-3-ubuntu,Ubuntu,shell,resources/1.0.3/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/1.0.3/thingsboard-ubuntu-download.sh
thingsboard-download-1-0-3-centos,CentOS,shell,resources/1.0.3/thingsboard-centos-download.sh,/docs/user-guide/install/resources/1.0.3/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard service upgrade

{% capture tabspec %}thingsboard-installation-1-0-3
thingsboard-installation-1-0-3-ubuntu,Ubuntu,shell,resources/1.0.3/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/1.0.3/thingsboard-ubuntu-installation.sh
thingsboard-installation-1-0-3-centos,CentOS,shell,resources/1.0.3/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/1.0.3/thingsboard-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

#### Database upgrade

This step is required only if you are upgrading from 1.0 or 1.0.1 versions.
Please use following instruction to update your single node instance:

Download upgrade scripts:
```bash
wget https://raw.githubusercontent.com/thingsboard/thingsboard.github.io/master/docs/user-guide/install/resources/1.0.3/upgrade_1.0_1.0.2.sh
wget https://raw.githubusercontent.com/thingsboard/thingsboard.github.io/master/docs/user-guide/install/resources/1.0.3/system_widgets_1.0_1.0.2.cql
```
{: .copy-code}

Launch main script:
```bash
chmod +x upgrade_1.0_1.0.2.sh
./upgrade_1.0_1.0.2.sh
``` 
{: .copy-code}

#### Start the service

```bash
sudo service thingsboard start
```
{: .copy-code}

## Upgrading to 1.1.0

These steps are applicable for 1.0.3 ThingsBoard version.

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-1-1-0
thingsboard-download-1-1-0-ubuntu,Ubuntu,shell,resources/1.1.0/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/1.1.0/thingsboard-ubuntu-download.sh
thingsboard-download-1-1-0-centos,CentOS,shell,resources/1.1.0/thingsboard-centos-download.sh,/docs/user-guide/install/resources/1.1.0/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard service upgrade

{% capture tabspec %}thingsboard-installation-1-1-0
thingsboard-installation-1-1-0-ubuntu,Ubuntu,shell,resources/1.1.0/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/1.1.0/thingsboard-ubuntu-installation.sh
thingsboard-installation-1-1-0-centos,CentOS,shell,resources/1.1.0/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/1.1.0/thingsboard-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

#### Database upgrade

Please use the following instruction to update your single node instance:

Download upgrade scripts:
```bash
wget https://raw.githubusercontent.com/thingsboard/thingsboard.github.io/master/docs/user-guide/install/resources/1.1.0/upgrade_1.0.3_1.1.0.sh
wget https://raw.githubusercontent.com/thingsboard/thingsboard.github.io/master/docs/user-guide/install/resources/1.1.0/system_widgets_1.0.3_1.1.0.cql
```
{: .copy-code}

Launch main script:
```bash
chmod +x upgrade_1.0.3_1.1.0.sh
./upgrade_1.0.3_1.1.0.sh
``` 
{: .copy-code}

#### Start the service

```bash
$ sudo service thingsboard start
```

## Upgrading to 1.2.0

These steps are applicable for 1.1.0 ThingsBoard version.

### Ubuntu/CentOS

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-1-2-0
thingsboard-download-1-2-0-ubuntu,Ubuntu,shell,resources/1.2.0/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/1.2.0/thingsboard-ubuntu-download.sh
thingsboard-download-1-2-0-centos,CentOS,shell,resources/1.2.0/thingsboard-centos-download.sh,/docs/user-guide/install/resources/1.2.0/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard service upgrade

{% capture tabspec %}thingsboard-installation-1-2-0
thingsboard-installation-1-2-0-ubuntu,Ubuntu,shell,resources/1.2.0/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/1.2.0/thingsboard-ubuntu-installation.sh
thingsboard-installation-1-2-0-centos,CentOS,shell,resources/1.2.0/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/1.2.0/thingsboard-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

#### Database upgrade

Download upgrade scripts:
```bash
wget https://raw.githubusercontent.com/thingsboard/thingsboard.github.io/master/docs/user-guide/install/resources/1.2.0/upgrade_1.1.0_1.2.0.sh
wget https://raw.githubusercontent.com/thingsboard/thingsboard.github.io/master/docs/user-guide/install/resources/1.2.0/system_widgets.cql
```
{: .copy-code}

Launch main script:
```bash
chmod +x upgrade_1.1.0_1.2.0.sh
./upgrade_1.1.0_1.2.0.sh
```
{: .copy-code}

#### Start the service

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-1.2.zip](https://github.com/thingsboard/thingsboard/releases/download/v1.2/thingsboard-windows-1.2.zip).

#### ThingsBoard service upgrade

* Make a backup of previous ThingsBoard configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Uninstall the previous version of ThingsBoard service by running **uninstall.bat** located in ThingsBoard install dir.

**NOTE** Scripts listed above should be executed using Administrator Role.

```text
C:\thingsboard>uninstall.bat
```
{: .copy-code}

* Remove ThingsBoard install dir.
* Unzip installation archive to ThingsBoard install dir.
* Compare your old ThingsBoard configuration files (from the backup you made in the first step) with new ones.
* Run **install.bat** script to install the new version of ThingsBoard as a Windows service.

```text
C:\thingsboard>install.bat
```
{: .copy-code}

#### Database upgrade
 
* Download upgrade scripts to some folder:
  * [upgrade_1.1.0_1.2.0.bat](https://raw.githubusercontent.com/thingsboard/thingsboard.github.io/master/docs/user-guide/install/resources/1.2.0/upgrade_1.1.0_1.2.0.bat)
  * [system_widgets.cql](https://raw.githubusercontent.com/thingsboard/thingsboard.github.io/master/docs/user-guide/install/resources/1.2.0/system_widgets.cql)
* Execute **upgrade_1.1.0_1.2.0.bat** (**NOTE** This script should be executed using Administrative Role)

```text
upgrade_1.1.0_1.2.0.bat
```
{: .copy-code}

#### Start the service

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 1.2.1

These steps are applicable for 1.2.0 ThingsBoard version.

### Ubuntu/CentOS

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-1-2-1
thingsboard-download-1-2-1-ubuntu,Ubuntu,shell,resources/1.2.1/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/1.2.1/thingsboard-ubuntu-download.sh
thingsboard-download-1-2-1-centos,CentOS,shell,resources/1.2.1/thingsboard-centos-download.sh,/docs/user-guide/install/resources/1.2.1/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard service upgrade

{% capture tabspec %}thingsboard-installation-1-2-1
thingsboard-installation-1-2-1-ubuntu,Ubuntu,shell,resources/1.2.1/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/1.2.1/thingsboard-ubuntu-installation.sh
thingsboard-installation-1-2-1-centos,CentOS,shell,resources/1.2.1/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/1.2.1/thingsboard-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

#### Database upgrade

Download upgrade scripts:
```bash
wget https://raw.githubusercontent.com/thingsboard/thingsboard.github.io/master/docs/user-guide/install/resources/1.2.1/upgrade_1.2.0_1.2.1.sh
wget https://raw.githubusercontent.com/thingsboard/thingsboard.github.io/master/docs/user-guide/install/resources/1.2.1/schema_update.cql
wget https://raw.githubusercontent.com/thingsboard/thingsboard.github.io/master/docs/user-guide/install/resources/1.2.1/system_widgets.cql
```

Launch main script:
```bash
chmod +x upgrade_1.2.0_1.2.mqtt-js-telemetry-data-as-object.sh
./upgrade_1.2.0_1.2.mqtt-js-telemetry-data-as-object.sh
```
{: .copy-code}

#### Start the service

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-1.2.1.zip](https://github.com/thingsboard/thingsboard/releases/download/v1.2.1/thingsboard-windows-1.2.1.zip).

#### ThingsBoard service upgrade

* Make a backup of previous ThingsBoard configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Uninstall the previous version of ThingsBoard service by running **uninstall.bat** located in ThingsBoard install dir.

**NOTE** Scripts listed above should be executed using Administrator Role.

```text
C:\thingsboard>uninstall.bat
```
{: .copy-code}

* Remove ThingsBoard install dir.
* Unzip installation archive to ThingsBoard install dir.
* Compare your old ThingsBoard configuration files (from the backup you made in the first step) with new ones.
* Run **install.bat** script to install the new version of ThingsBoard as a Windows service.

```text
C:\thingsboard>install.bat
```
{: .copy-code}

#### Database upgrade
 
* Download upgrade scripts to some folder:
  * [upgrade_1.2.0_1.2.1.bat](https://raw.githubusercontent.com/thingsboard/thingsboard.github.io/master/docs/user-guide/install/resources/1.2.1/upgrade_1.2.0_1.2.1.bat)
  * [schema_update.cql](https://raw.githubusercontent.com/thingsboard/thingsboard.github.io/master/docs/user-guide/install/resources/1.2.1/schema_update.cql)
  * [system_widgets.cql](https://raw.githubusercontent.com/thingsboard/thingsboard.github.io/master/docs/user-guide/install/resources/1.2.1/system_widgets.cql)
* Execute **upgrade_1.2.0_1.2.1.bat** (**NOTE** This script should be executed using Administrative Role)

```text
upgrade_1.2.0_1.2.1.bat
```
{: .copy-code} 

#### Start the service

```text
net start thingsboard
```
{: .copy-code}
## Upgrading to 1.2.2

These steps are applicable for 1.2.1 ThingsBoard version.

### Ubuntu/CentOS

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-1-2-2
thingsboard-download-1-2-2-ubuntu,Ubuntu,shell,resources/1.2.2/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/1.2.2/thingsboard-ubuntu-download.sh
thingsboard-download-1-2-2-centos,CentOS,shell,resources/1.2.2/thingsboard-centos-download.sh,/docs/user-guide/install/resources/1.2.2/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard service upgrade

{% capture tabspec %}thingsboard-installation-1-2-2
thingsboard-installation-1-2-2-ubuntu,Ubuntu,shell,resources/1.2.2/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/1.2.2/thingsboard-ubuntu-installation.sh
thingsboard-installation-1-2-2-centos,CentOS,shell,resources/1.2.2/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/1.2.2/thingsboard-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

#### Database upgrade

Download upgrade scripts:
```bash
wget https://raw.githubusercontent.com/thingsboard/thingsboard.github.io/master/docs/user-guide/install/resources/1.2.2/upgrade_1.2.1_1.2.2.sh
wget https://raw.githubusercontent.com/thingsboard/thingsboard.github.io/master/docs/user-guide/install/resources/1.2.2/system_widgets.cql
```
{: .copy-code}

Launch main script:
```bash
chmod +x upgrade_1.2.1_1.2.2.sh
./upgrade_1.2.1_1.2.2.sh
```
{: .copy-code}

#### Start the service

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-1.2.2.zip](https://github.com/thingsboard/thingsboard/releases/download/v1.2.2/thingsboard-windows-1.2.2.zip).

#### ThingsBoard service upgrade

* Make a backup of previous ThingsBoard configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Uninstall the previous version of ThingsBoard service by running **uninstall.bat** located in ThingsBoard install dir.

**NOTE** Scripts listed above should be executed using Administrator Role.

```text
C:\thingsboard>uninstall.bat
```
{: .copy-code}
* Remove ThingsBoard install dir.
* Unzip installation archive to ThingsBoard install dir.
* Compare your old ThingsBoard configuration files (from the backup you made in the first step) with new ones.
* Run **install.bat** script to install the new version of ThingsBoard as a Windows service.

```text
C:\thingsboard>install.bat
```
{: .copy-code}

#### Database upgrade
 
* Download upgrade scripts to some folder:
  * [upgrade_1.2.1_1.2.2.bat](https://raw.githubusercontent.com/thingsboard/thingsboard.github.io/master/docs/user-guide/install/resources/1.2.2/upgrade_1.2.1_1.2.2.bat)
  * [system_widgets.cql](https://raw.githubusercontent.com/thingsboard/thingsboard.github.io/master/docs/user-guide/install/resources/1.2.2/system_widgets.cql)
* Execute **upgrade_1.2.1_1.2.2.bat** (**NOTE** This script should be executed using Administrative Role)

```text
upgrade_1.2.1_1.2.2.bat
```
{: .copy-code}

#### Start the service

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 1.2.3

These steps are applicable for 1.2.2 ThingsBoard version.

### Ubuntu/CentOS

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-1-2-3
thingsboard-download-1-2-3-ubuntu,Ubuntu,shell,resources/1.2.3/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/1.2.3/thingsboard-ubuntu-download.sh
thingsboard-download-1-2-3-centos,CentOS,shell,resources/1.2.3/thingsboard-centos-download.sh,/docs/user-guide/install/resources/1.2.3/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard service upgrade

{% capture tabspec %}thingsboard-installation-1-2-3
thingsboard-installation-1-2-3-ubuntu,Ubuntu,shell,resources/1.2.3/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/1.2.3/thingsboard-ubuntu-installation.sh
thingsboard-installation-1-2-3-centos,CentOS,shell,resources/1.2.3/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/1.2.3/thingsboard-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

#### Database upgrade
Download upgrade scripts:
```bash
wget https://raw.githubusercontent.com/thingsboard/thingsboard.github.io/master/docs/user-guide/install/resources/1.2.3/upgrade_1.2.2_1.2.3.sh
wget https://raw.githubusercontent.com/thingsboard/thingsboard.github.io/master/docs/user-guide/install/resources/1.2.3/schema_update.cql
wget https://raw.githubusercontent.com/thingsboard/thingsboard.github.io/master/docs/user-guide/install/resources/1.2.3/system_widgets.cql
```
{: .copy-code}

Launch main script:
```bash
chmod +x upgrade_1.2.2_1.2.3.sh
./upgrade_1.2.2_1.2.3.sh
```
{: .copy-code}

#### Start the service

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-1.2.3.zip](https://github.com/thingsboard/thingsboard/releases/download/v1.2.3/thingsboard-windows-1.2.3.zip).

#### ThingsBoard service upgrade

* Make a backup of previous ThingsBoard configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Uninstall the previous version of ThingsBoard service by running **uninstall.bat** located in ThingsBoard install dir.

**NOTE** Scripts listed above should be executed using Administrator Role.

```text
C:\thingsboard>uninstall.bat
```
{: .copy-code}

* Remove ThingsBoard install dir.
* Unzip installation archive to ThingsBoard install dir.
* Compare your old ThingsBoard configuration files (from the backup you made in the first step) with new ones.
* Run **install.bat** script to install the new version of ThingsBoard as a Windows service.

```text
C:\thingsboard>install.bat
```
{: .copy-code}

#### Database upgrade
 
* Download upgrade scripts to some folder:
  * [upgrade_1.2.2_1.2.3.bat](https://raw.githubusercontent.com/thingsboard/thingsboard.github.io/master/docs/user-guide/install/resources/1.2.3/upgrade_1.2.2_1.2.3.bat)
  * [schema_update.cql](https://raw.githubusercontent.com/thingsboard/thingsboard.github.io/master/docs/user-guide/install/resources/1.2.3/schema_update.cql)
  * [system_widgets.cql](https://raw.githubusercontent.com/thingsboard/thingsboard.github.io/master/docs/user-guide/install/resources/1.2.3/system_widgets.cql)
* Execute **upgrade_1.2.2_1.2.3.bat** (**NOTE** This script should be executed using Administrative Role)

```text
upgrade_1.2.2_1.2.3.bat
```
{: .copy-code}

#### Start the service

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 1.3.0

These steps are applicable for 1.2.3 ThingsBoard version.

### Ubuntu/CentOS

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-1-3-0
thingsboard-download-1-3-0-ubuntu,Ubuntu,shell,resources/1.3.0/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/1.3.0/thingsboard-ubuntu-download.sh
thingsboard-download-1-3-0-centos,CentOS,shell,resources/1.3.0/thingsboard-centos-download.sh,/docs/user-guide/install/resources/1.3.0/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard service upgrade

{% capture tabspec %}thingsboard-installation-1-3-0
thingsboard-installation-1-3-0-ubuntu,Ubuntu,shell,resources/1.3.0/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/1.3.0/thingsboard-ubuntu-installation.sh
thingsboard-installation-1-3-0-centos,CentOS,shell,resources/1.3.0/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/1.3.0/thingsboard-centos-installation.sh{% endcapture %}
{% include tabs.html %}

**NOTE:** Package installer will ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.
Please make sure that you set database.type parameter value (in the file **/etc/thingsboard/conf/thingsboard.yml**) to "cassandra" instead of "sql" in order to upgrade your cassandra database:
 
```
database:
    type: "${DATABASE_TYPE:cassandra}" # cassandra OR sql
```

Execute upgrade script:
```bash
sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=1.2.3 
```
{: .copy-code}

#### Start the service

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-1.3.zip](https://github.com/thingsboard/thingsboard/releases/download/v1.3/thingsboard-windows-1.3.zip).

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.
 
```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Remove ThingsBoard install dir.
* Unzip installation archive to ThingsBoard install dir.
* Compare your old ThingsBoard configuration files (from the backup you made in the first step) with new ones.
* Please make sure that you set database.type parameter value (in the file **\<ThingsBoard install dir\>\conf\thingsboard.yml**) to "cassandra" instead of "sql" in order to upgrade your cassandra database:
  
```
  database:
      type: "${DATABASE_TYPE:cassandra}" # cassandra OR sql
```    

* Run **upgrade.bat** script to upgrade ThingsBoard to the new version.

**NOTE** Scripts listed above should be executed using Administrator Role.

```text
C:\thingsboard>upgrade.bat --fromVersion=1.2.3
```
{: .copy-code}

#### Start the service

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 1.3.1

These steps are applicable for 1.3.0 ThingsBoard version.

### Ubuntu/CentOS

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-1-3-1
thingsboard-download-1-3-1-ubuntu,Ubuntu,shell,resources/1.3.1/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/1.3.1/thingsboard-ubuntu-download.sh
thingsboard-download-1-3-1-centos,CentOS,shell,resources/1.3.1/thingsboard-centos-download.sh,/docs/user-guide/install/resources/1.3.1/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard service upgrade

{% capture tabspec %}thingsboard-installation-1-3-1
thingsboard-installation-1-3-1-ubuntu,Ubuntu,shell,resources/1.3.1/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/1.3.1/thingsboard-ubuntu-installation.sh
thingsboard-installation-1-3-1-centos,CentOS,shell,resources/1.3.1/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/1.3.1/thingsboard-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

**NOTE:** Package installer may ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.  
Please make sure that you set database.type parameter value (in the file **/etc/thingsboard/conf/thingsboard.yml**) to "cassandra" instead of "sql" in order to upgrade your cassandra database:
 
```
database:
    type: "${DATABASE_TYPE:cassandra}" # cassandra OR sql
```

Execute upgrade script:
```bash
sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=1.3.0 
```
{: .copy-code}

#### Start the service

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-1.3.1.zip](https://github.com/thingsboard/thingsboard/releases/download/v1.3.1/thingsboard-windows-1.3.1.zip).

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.
 
```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Remove ThingsBoard install dir.
* Unzip installation archive to ThingsBoard install dir.
* Compare your old ThingsBoard configuration files (from the backup you made in the first step) with new ones.
* Please make sure that you set database.type parameter value (in the file **\<ThingsBoard install dir\>\conf\thingsboard.yml**) to "cassandra" instead of "sql" in order to upgrade your cassandra database:
  
```
  database:
      type: "${DATABASE_TYPE:cassandra}" # cassandra OR sql
```    

* Run **upgrade.bat** script to upgrade ThingsBoard to the new version.

**NOTE** Scripts listed above should be executed using Administrator Role.

```text
C:\thingsboard>upgrade.bat --fromVersion=1.3.0
```
{: .copy-code}

#### Start the service

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 1.4.0

These steps are applicable for 1.3.1 ThingsBoard version.

### Ubuntu/CentOS

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-1-4-0
thingsboard-download-1-4-0-ubuntu,Ubuntu,shell,resources/1.4.0/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/1.4.0/thingsboard-ubuntu-download.sh
thingsboard-download-1-4-0-centos,CentOS,shell,resources/1.4.0/thingsboard-centos-download.sh,/docs/user-guide/install/resources/1.4.0/thingsboard-centos-download.sh{% endcapture %}
{% include tabs.html %}

#### ThingsBoard service upgrade

{% capture tabspec %}thingsboard-installation-1-4-0
thingsboard-installation-1-4-0-ubuntu,Ubuntu,shell,resources/1.4.0/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/1.4.0/thingsboard-ubuntu-installation.sh
thingsboard-installation-1-4-0-centos,CentOS,shell,resources/1.4.0/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/1.4.0/thingsboard-centos-installation.sh{% endcapture %}
{% include tabs.html %}

**NOTE:** Package installer will ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.
Please make sure that you set database.type parameter value (in the file **/etc/thingsboard/conf/thingsboard.yml**) to "cassandra" instead of "sql" in order to upgrade your cassandra database:

```
database:
    type: "${DATABASE_TYPE:cassandra}" # cassandra OR sql
```

Execute upgrade script:
```bash
sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=1.3.1
```
{: .copy-code}

#### Start the service

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-1.4.zip](https://github.com/thingsboard/thingsboard/releases/download/v1.4/thingsboard-windows-1.4.zip).

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Remove ThingsBoard install dir.
* Unzip installation archive to ThingsBoard install dir.
* Compare your old ThingsBoard configuration files (from the backup you made in the first step) with new ones.
* Please make sure that you set database.type parameter value (in the file **\<ThingsBoard install dir\>\conf\thingsboard.yml**) to "cassandra" instead of "sql" in order to upgrade your cassandra database:

```
  database:
      type: "${DATABASE_TYPE:cassandra}" # cassandra OR sql
```

* Run **upgrade.bat** script to upgrade ThingsBoard to the new version.

**NOTE** Scripts listed above should be executed using Administrator Role.

```text
C:\thingsboard>upgrade.bat --fromVersion=1.3.1
```
{: .copy-code}

#### Start the service

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 2.0.0

These steps are applicable for 1.4.0 ThingsBoard version.

### Ubuntu/CentOS

{% include templates/upgrade-to-20-notice.md %}

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-2-0-0
thingsboard-download-2-0-0-ubuntu,Ubuntu,shell,resources/2.0.0/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/2.0.0/thingsboard-ubuntu-download.sh
thingsboard-download-2-0-0-centos,CentOS,shell,resources/2.0.0/thingsboard-centos-download.sh,/docs/user-guide/install/resources/2.0.0/thingsboard-centos-download.sh{% endcapture %}
{% include tabs.html %}

#### ThingsBoard service upgrade

{% capture tabspec %}thingsboard-installation-2-0-0
thingsboard-installation-2-0-0-ubuntu,Ubuntu,shell,resources/2.0.0/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/2.0.0/thingsboard-ubuntu-installation.sh
thingsboard-installation-2-0-0-centos,CentOS,shell,resources/2.0.0/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/2.0.0/thingsboard-centos-installation.sh{% endcapture %}
{% include tabs.html %}

**NOTE:** Package installer will ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.
Please make sure that you set database.type parameter value (in the file **/etc/thingsboard/conf/thingsboard.yml**) to "cassandra" instead of "sql" in order to upgrade your cassandra database:
 
```
database:
    type: "${DATABASE_TYPE:cassandra}" # cassandra OR sql
```

Execute upgrade script:
```bash
sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=1.4.0 
```
{: .copy-code}

#### Start the service

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows

{% include templates/upgrade-to-20-notice.md %}

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-2.0.zip](https://github.com/thingsboard/thingsboard/releases/download/v2.0/thingsboard-windows-2.0.zip).

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.
 
```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Remove ThingsBoard install dir.
* Unzip installation archive to ThingsBoard install dir.
* Compare your old ThingsBoard configuration files (from the backup you made in the first step) with new ones.
* Please make sure that you set database.type parameter value (in the file **\<ThingsBoard install dir\>\conf\thingsboard.yml**) to "cassandra" instead of "sql" in order to upgrade your cassandra database:
  
```
  database:
      type: "${DATABASE_TYPE:cassandra}" # cassandra OR sql
```      

* Run **upgrade.bat** script to upgrade ThingsBoard to the new version.

**NOTE** Scripts listed above should be executed using Administrator Role.

```text
C:\thingsboard>upgrade.bat --fromVersion=1.4.0
```
{: .copy-code}

#### Start the service

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 2.0.1

These steps are applicable for 2.0.0 ThingsBoard version.

### Ubuntu/CentOS

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-2-0-1
thingsboard-download-2-0-1-ubuntu,Ubuntu,shell,resources/2.0.1/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/2.0.1/thingsboard-ubuntu-download.sh
thingsboard-download-2-0-1-centos,CentOS,shell,resources/2.0.1/thingsboard-centos-download.sh,/docs/user-guide/install/resources/2.0.1/thingsboard-centos-download.sh{% endcapture %}
{% include tabs.html %}

#### ThingsBoard service upgrade

{% capture tabspec %}thingsboard-installation-2-0-1
thingsboard-installation-2-0-1-ubuntu,Ubuntu,shell,resources/2.0.1/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/2.0.1/thingsboard-ubuntu-installation.sh
thingsboard-installation-2-0-1-centos,CentOS,shell,resources/2.0.1/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/2.0.1/thingsboard-centos-installation.sh{% endcapture %}
{% include tabs.html %}

**NOTE:** Package installer will ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.
Please make sure that you set database.type parameter value (in the file **/etc/thingsboard/conf/thingsboard.yml**) to "cassandra" instead of "sql" in order to upgrade your cassandra database:
 
```
database:
    type: "${DATABASE_TYPE:cassandra}" # cassandra OR sql
```

#### Start the service

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-2.0.1.zip](https://github.com/thingsboard/thingsboard/releases/download/v2.0.1/thingsboard-windows-2.0.1.zip).

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Remove ThingsBoard install dir.
* Unzip installation archive to ThingsBoard install dir.
* Compare your old ThingsBoard configuration files (from the backup you made in the first step) with new ones.
* Please make sure that you set database.type parameter value (in the file **\<ThingsBoard install dir\>\conf\thingsboard.yml**) to "cassandra" instead of "sql" in order to upgrade your cassandra database:

```
  database:
      type: "${DATABASE_TYPE:cassandra}" # cassandra OR sql
```

#### Start the service

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 2.0.2

These steps are applicable for 2.0.1 ThingsBoard version.

### Ubuntu/CentOS

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-2-0-2
thingsboard-download-2-0-2-ubuntu,Ubuntu,shell,resources/2.0.2/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/2.0.2/thingsboard-ubuntu-download.sh
thingsboard-download-2-0-2-centos,CentOS,shell,resources/2.0.2/thingsboard-centos-download.sh,/docs/user-guide/install/resources/2.0.2/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard service upgrade

{% capture tabspec %}thingsboard-installation-2-0-2
thingsboard-installation-2-0-2-ubuntu,Ubuntu,shell,resources/2.0.2/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/2.0.2/thingsboard-ubuntu-installation.sh
thingsboard-installation-2-0-2-centos,CentOS,shell,resources/2.0.2/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/2.0.2/thingsboard-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

**NOTE:** Package installer will ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.  
Please make sure that you set database.type parameter value (in the file **/etc/thingsboard/conf/thingsboard.yml**) to "cassandra" instead of "sql" in order to upgrade your cassandra database:
 
```
database:
    type: "${DATABASE_TYPE:cassandra}" # cassandra OR sql
```

#### Start the service

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-2.0.2.zip](https://github.com/thingsboard/thingsboard/releases/download/v2.0.2/thingsboard-windows-2.0.2.zip).

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Remove ThingsBoard install dir.
* Unzip installation archive to ThingsBoard install dir.
* Compare your old ThingsBoard configuration files (from the backup you made in the first step) with new ones.
* Please make sure that you set database.type parameter value (in the file **\<ThingsBoard install dir\>\conf\thingsboard.yml**) to "cassandra" instead of "sql" in order to upgrade your cassandra database:

```
  database:
      type: "${DATABASE_TYPE:cassandra}" # cassandra OR sql
```

#### Start the service

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 2.0.3

These steps are applicable for 2.0.2 ThingsBoard version.

### Ubuntu/CentOS

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-2-0-3
thingsboard-download-2-0-3-ubuntu,Ubuntu,shell,resources/2.0.3/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/2.0.3/thingsboard-ubuntu-download.sh
thingsboard-download-2-0-3-centos,CentOS,shell,resources/2.0.3/thingsboard-centos-download.sh,/docs/user-guide/install/resources/2.0.3/thingsboard-centos-download.sh{% endcapture %}
{% include tabs.html %}

#### ThingsBoard service upgrade

{% capture tabspec %}thingsboard-installation-2-0-3
thingsboard-installation-2-0-3-ubuntu,Ubuntu,shell,resources/2.0.3/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/2.0.3/thingsboard-ubuntu-installation.sh
thingsboard-installation-2-0-3-centos,CentOS,shell,resources/2.0.3/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/2.0.3/thingsboard-centos-installation.sh{% endcapture %}
{% include tabs.html %}

**NOTE:** Package installer will ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.
Please make sure that you set database.type parameter value (in the file **/etc/thingsboard/conf/thingsboard.yml**) to "cassandra" instead of "sql" in order to upgrade your cassandra database:

```
database:
    type: "${DATABASE_TYPE:cassandra}" # cassandra OR sql
```

#### Start the service

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-2.0.3.zip](https://github.com/thingsboard/thingsboard/releases/download/v2.0.3/thingsboard-windows-2.0.3.zip).

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Remove ThingsBoard install dir.
* Unzip installation archive to ThingsBoard install dir.
* Compare your old ThingsBoard configuration files (from the backup you made in the first step) with new ones.
* Please make sure that you set database.type parameter value (in the file **\<ThingsBoard install dir\>\conf\thingsboard.yml**) to "cassandra" instead of "sql" in order to upgrade your cassandra database:

```
  database:
      type: "${DATABASE_TYPE:cassandra}" # cassandra OR sql
```

#### Start the service

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 2.1.0

These steps are applicable for 2.0.3 ThingsBoard version.

### Ubuntu/CentOS

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-2-1-0
thingsboard-download-2-1-0-ubuntu,Ubuntu,shell,resources/2.1.0/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/2.1.0/thingsboard-ubuntu-download.sh
thingsboard-download-2-1-0-centos,CentOS,shell,resources/2.1.0/thingsboard-centos-download.sh,/docs/user-guide/install/resources/2.1.0/thingsboard-centos-download.sh{% endcapture %}
{% include tabs.html %}

#### ThingsBoard service upgrade

{% capture tabspec %}thingsboard-installation-2-1-0
thingsboard-installation-2-1-0-ubuntu,Ubuntu,shell,resources/2.1.0/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/2.1.0/thingsboard-ubuntu-installation.sh
thingsboard-installation-2-1-0-centos,CentOS,shell,resources/2.1.0/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/2.1.0/thingsboard-centos-installation.sh{% endcapture %}
{% include tabs.html %}

**NOTE:** Package installer will ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.
Please make sure that you set database.type parameter value (in the file **/etc/thingsboard/conf/thingsboard.yml**) to "cassandra" instead of "sql" in order to upgrade your cassandra database:

```
database:
    type: "${DATABASE_TYPE:cassandra}" # cassandra OR sql
```

#### Start the service

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-2.1.zip](https://github.com/thingsboard/thingsboard/releases/download/v2.1/thingsboard-windows-2.1.zip).

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Remove ThingsBoard install dir.
* Unzip installation archive to ThingsBoard install dir.
* Compare your old ThingsBoard configuration files (from the backup you made in the first step) with new ones.
* Please make sure that you set database.type parameter value (in the file **\<ThingsBoard install dir\>\conf\thingsboard.yml**) to "cassandra" instead of "sql" in order to upgrade your cassandra database:

```
  database:
      type: "${DATABASE_TYPE:cassandra}" # cassandra OR sql
```

#### Start the service

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 2.2.0

These steps are applicable for 2.1.0, 2.1.1, 2.1.2 and 2.1.3 ThingsBoard versions.

### Ubuntu/CentOS

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-2-2-0
thingsboard-download-2-2-0-ubuntu,Ubuntu,shell,resources/2.2.0/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/2.2.0/thingsboard-ubuntu-download.sh
thingsboard-download-2-2-0-centos,CentOS,shell,resources/2.2.0/thingsboard-centos-download.sh,/docs/user-guide/install/resources/2.2.0/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard service upgrade

{% capture tabspec %}thingsboard-installation-2-2-0
thingsboard-installation-2-2-0-ubuntu,Ubuntu,shell,resources/2.2.0/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/2.2.0/thingsboard-ubuntu-installation.sh
thingsboard-installation-2-2-0-centos,CentOS,shell,resources/2.2.0/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/2.2.0/thingsboard-centos-installation.sh{% endcapture %}  
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
sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=2.0.0 
```
{: .copy-code}

#### Start the service

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-2.2.zip](https://github.com/thingsboard/thingsboard/releases/download/v2.2/thingsboard-windows-2.2.zip).

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Remove ThingsBoard install dir.
* Unzip installation archive to ThingsBoard install dir.
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
C:\thingsboard>upgrade.bat --fromVersion=2.0.0
```
{: .copy-code}

#### Start the service

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 2.3.0

These steps are applicable for 2.2.0 ThingsBoard version.

### Ubuntu/CentOS

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-2-3-0
thingsboard-download-2-3-0-ubuntu,Ubuntu,shell,resources/2.3.0/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/2.3.0/thingsboard-ubuntu-download.sh
thingsboard-download-2-3-0-centos,CentOS,shell,resources/2.3.0/thingsboard-centos-download.sh,/docs/user-guide/install/resources/2.3.0/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard service upgrade

{% capture tabspec %}thingsboard-installation-2-3-0
thingsboard-installation-2-3-0-ubuntu,Ubuntu,shell,resources/2.3.0/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/2.3.0/thingsboard-ubuntu-installation.sh
thingsboard-installation-2-3-0-centos,CentOS,shell,resources/2.3.0/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/2.3.0/thingsboard-centos-installation.sh{% endcapture %}  
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
sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=2.2.0 
```
{: .copy-code}

#### Start the service

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-2.3.zip](https://github.com/thingsboard/thingsboard/releases/download/v2.3/thingsboard-windows-2.3.zip).

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.
 
```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Remove ThingsBoard install dir.
* Unzip installation archive to ThingsBoard install dir.
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
C:\thingsboard>upgrade.bat --fromVersion=2.2.0
```
{: .copy-code}

#### Start the service

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 2.4.0

These steps are applicable for 2.3.1 ThingsBoard version.

### Ubuntu/CentOS {#ubuntucentos-15}

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-2-4-0
thingsboard-download-2-4-0-ubuntu,Ubuntu,shell,resources/2.4.0/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/2.4.0/thingsboard-ubuntu-download.sh
thingsboard-download-2-4-0-centos,CentOS,shell,resources/2.4.0/thingsboard-centos-download.sh,/docs/user-guide/install/resources/2.4.0/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
$ sudo service thingsboard stop
```

{% capture tabspec %}thingsboard-installation-2-4-0
thingsboard-installation-2-4-0-ubuntu,Ubuntu,shell,resources/2.4.0/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/2.4.0/thingsboard-ubuntu-installation.sh
thingsboard-installation-2-4-0-centos,CentOS,shell,resources/2.4.0/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/2.4.0/thingsboard-centos-installation.sh{% endcapture %}  
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
sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=2.3.1 
```
{: .copy-code}

#### Start the service

{% include templates/redis-post-upgrade-notice.md %}

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows {#windows-15}

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-2.4.zip](https://github.com/thingsboard/thingsboard/releases/download/v2.4/thingsboard-windows-2.4.zip).

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).

* Remove ThingsBoard install dir.
* Unzip installation archive to ThingsBoard install dir.
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
C:\thingsboard>upgrade.bat --fromVersion=2.3.1
```
{: .copy-code}

#### Start the service

{% include templates/redis-post-upgrade-notice.md %}

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 2.4.1

These steps are applicable for 2.4.0 ThingsBoard version.

### Ubuntu/CentOS {#ubuntucentos-16}

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-2-4-1
thingsboard-download-2-4-1-ubuntu,Ubuntu,shell,resources/2.4.1/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/2.4.1/thingsboard-ubuntu-download.sh
thingsboard-download-2-4-1-centos,CentOS,shell,resources/2.4.1/thingsboard-centos-download.sh,/docs/user-guide/install/resources/2.4.1/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
$ sudo service thingsboard stop
```

{% capture tabspec %}thingsboard-installation-2-4-1
thingsboard-installation-2-4-1-ubuntu,Ubuntu,shell,resources/2.4.1/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/2.4.1/thingsboard-ubuntu-installation.sh
thingsboard-installation-2-4-1-centos,CentOS,shell,resources/2.4.1/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/2.4.1/thingsboard-centos-installation.sh{% endcapture %}  
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
sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=2.4.0 
```
{: .copy-code}

#### Start the service

{% include templates/redis-post-upgrade-notice.md %}

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows {#windows-16}

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-2.4.1.zip](https://github.com/thingsboard/thingsboard/releases/download/v2.4.1/thingsboard-windows-2.4.1.zip).

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Remove ThingsBoard install dir.
* Unzip installation archive to ThingsBoard install dir.
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

{% include templates/redis-post-upgrade-notice.md %}

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 2.4.2.1

These steps are applicable for 2.4.1 and 2.4.2 ThingsBoard versions.

### Ubuntu/CentOS {#ubuntucentos-17}

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-2-4-2
thingsboard-download-2-4-2-ubuntu,Ubuntu,shell,resources/2.4.2.1/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/2.4.2.1/thingsboard-ubuntu-download.sh
thingsboard-download-2-4-2-centos,CentOS,shell,resources/2.4.2.1/thingsboard-centos-download.sh,/docs/user-guide/install/resources/2.4.2.1/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
$ sudo service thingsboard stop
```

{% capture tabspec %}thingsboard-installation-2-4-2
thingsboard-installation-2-4-2-ubuntu,Ubuntu,shell,resources/2.4.2.1/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/2.4.2.1/thingsboard-ubuntu-installation.sh
thingsboard-installation-2-4-2-centos,CentOS,shell,resources/2.4.2.1/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/2.4.2.1/thingsboard-centos-installation.sh{% endcapture %}  
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

{% include templates/redis-post-upgrade-notice.md %}

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows {#windows-17}

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-2.4.2.1.zip](https://github.com/thingsboard/thingsboard/releases/download/v2.4.2.1/thingsboard-windows-2.4.2.1.zip).

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Remove ThingsBoard install dir.
* Unzip installation archive to ThingsBoard install dir.
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

{% include templates/redis-post-upgrade-notice.md %}

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 2.4.3

These steps are applicable for 2.4.2 and 2.4.2.1 ThingsBoard versions.

### Ubuntu/CentOS {#ubuntucentos-18}

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-2-4-3
thingsboard-download-2-4-3-ubuntu,Ubuntu,shell,resources/2.4.3/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/2.4.3/thingsboard-ubuntu-download.sh
thingsboard-download-2-4-3-centos,CentOS,shell,resources/2.4.3/thingsboard-centos-download.sh,/docs/user-guide/install/resources/2.4.3/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
$ sudo service thingsboard stop
```

{% capture tabspec %}thingsboard-installation-2-4-3
thingsboard-installation-2-4-3-ubuntu,Ubuntu,shell,resources/2.4.3/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/2.4.3/thingsboard-ubuntu-installation.sh
thingsboard-installation-2-4-3-centos,CentOS,shell,resources/2.4.3/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/2.4.3/thingsboard-centos-installation.sh{% endcapture %}  
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

{% include templates/redis-post-upgrade-notice.md %}

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows {#windows-18}

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-2.4.3.zip](https://github.com/thingsboard/thingsboard/releases/download/v2.4.3/thingsboard-windows-2.4.3.zip).

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).

* Remove ThingsBoard install dir.
* Unzip installation archive to ThingsBoard install dir.
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

{% include templates/redis-post-upgrade-notice.md %}

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 2.5

These steps are applicable for 2.4.3 ThingsBoard version.

### Ubuntu/CentOS {#ubuntucentos-19}

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-2-5
thingsboard-download-2-5-ubuntu,Ubuntu,shell,resources/2.5/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/2.5/thingsboard-ubuntu-download.sh
thingsboard-download-2-5-centos,CentOS,shell,resources/2.5/thingsboard-centos-download.sh,/docs/user-guide/install/resources/2.5/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
$ sudo service thingsboard stop
```

{% capture tabspec %}thingsboard-installation-2-5
thingsboard-installation-2-5-ubuntu,Ubuntu,shell,resources/2.5/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/2.5/thingsboard-ubuntu-installation.sh
thingsboard-installation-2-5-centos,CentOS,shell,resources/2.5/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/2.5/thingsboard-centos-installation.sh{% endcapture %}
{% include tabs.html %}

**NOTE:** Upgrading ThingsBoard from 2.4.3 to 2.5 version in case of using PostgreSQL database require to upgrade the PostgreSQL service to 11.x version.

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

{% include templates/redis-post-upgrade-notice.md %}

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows {#windows-19}

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-2.5.zip](https://github.com/thingsboard/thingsboard/releases/download/v2.5/thingsboard-windows-2.5.zip).

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Remove ThingsBoard install dir.
* Unzip installation archive to ThingsBoard install dir.
* Compare your old ThingsBoard configuration files (from the backup you made in the first step) with new ones.
* Please note that upgrading ThingsBoard from 2.4.3 to 2.5 version in case of using PostgreSQL database require to upgrade the PostgreSQL service to 11.x version.
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

## Upgrading to 2.5.1 {#upgrading-to-251}

These steps are applicable for 2.4.3+ ThingsBoard version.

### Ubuntu/CentOS {#ubuntucentos-251}

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-2-5-1
thingsboard-download-2-5-1-ubuntu,Ubuntu,shell,resources/2.5.1/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/2.5.1/thingsboard-ubuntu-download.sh
thingsboard-download-2-5-1-centos,CentOS,shell,resources/2.5.1/thingsboard-centos-download.sh,/docs/user-guide/install/resources/2.5.1/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
$ sudo service thingsboard stop
```

{% capture tabspec %}thingsboard-installation-2-5-1
thingsboard-installation-2-5-1-ubuntu,Ubuntu,shell,resources/2.5.1/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/2.5.1/thingsboard-ubuntu-installation.sh
thingsboard-installation-2-5-1-centos,CentOS,shell,resources/2.5.1/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/2.5.1/thingsboard-centos-installation.sh{% endcapture %}
{% include tabs.html %}

**NOTE:** Upgrading ThingsBoard to 2.5.1 version in case of using PostgreSQL database require to upgrade the PostgreSQL service to 11.x version.

Please refer to the guides below that will describe how to upgrade your PostgreSQL service on:

- [Ubuntu](https://gist.github.com/ShvaykaD/1f0e6c1321a0a2b4b9f3b9ea9ab3e8d3)
- [CentOS](https://gist.github.com/ShvaykaD/313745d31a9af6db3d6a01ec9f16aac8)

**NOTE:** Package installer will ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.

Finally, execute upgrade script and specify your previous ThingsBoard version:
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

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-2.5.1.zip](https://github.com/thingsboard/thingsboard/releases/download/v2.5.1/thingsboard-windows-2.5.1.zip).

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Remove ThingsBoard install dir.
* Unzip installation archive to ThingsBoard install dir.
* Compare your old ThingsBoard configuration files (from the backup you made in the first step) with new ones.
* Please note that upgrading ThingsBoard from 2.4.3 to 2.5 version in case of using PostgreSQL database require to upgrade the PostgreSQL service to 11.x version.

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

## Upgrading to 2.5.2 {#upgrading-to-252}

### Ubuntu/CentOS {#ubuntucentos-252}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 2.5.1. In order to upgrade to 2.5.2 you need to [**upgrade to 2.5.1 first**](/docs/user-guide/install/upgrade-instructions/#ubuntucentos-251).

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-2-5-2
thingsboard-download-2-5-2-ubuntu,Ubuntu,shell,resources/2.5.2/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/2.5.2/thingsboard-ubuntu-download.sh
thingsboard-download-2-5-2-centos,CentOS,shell,resources/2.5.2/thingsboard-centos-download.sh,/docs/user-guide/install/resources/2.5.2/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
$ sudo service thingsboard stop
```

{% capture tabspec %}thingsboard-installation-2-5-2
thingsboard-installation-2-5-2-ubuntu,Ubuntu,shell,resources/2.5.2/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/2.5.2/thingsboard-ubuntu-installation.sh
thingsboard-installation-2-5-2-centos,CentOS,shell,resources/2.5.2/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/2.5.2/thingsboard-centos-installation.sh{% endcapture %}
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

**NOTE**: These upgrade steps are applicable for ThingsBoard version 2.5.1. In order to upgrade to 2.5.2 you need to [**upgrade to 2.5.1 first**](/docs/user-guide/install/upgrade-instructions/#windows-251).

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-2.5.2.zip](https://github.com/thingsboard/thingsboard/releases/download/v2.5.2/thingsboard-windows-2.5.2.zip).

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).

* Remove ThingsBoard install dir.
* Unzip installation archive to ThingsBoard install dir.
* Compare your old ThingsBoard configuration files (from the backup you made in the first step) with new ones.
* Please note that upgrading ThingsBoard from 2.4.3 to 2.5 version in case of using PostgreSQL database require to upgrade the PostgreSQL service to 11.x version.

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

## Upgrading to 2.5.3 {#upgrading-to-253}

### Ubuntu/CentOS {#ubuntucentos-253}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 2.5.2. In order to upgrade to 2.5.3 you need to [**upgrade to 2.5.2 first**](/docs/user-guide/install/upgrade-instructions/#ubuntucentos-252).

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-2-5-3
thingsboard-download-2-5-3-ubuntu,Ubuntu,shell,resources/2.5.3/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/2.5.3/thingsboard-ubuntu-download.sh
thingsboard-download-2-5-3-centos,CentOS,shell,resources/2.5.3/thingsboard-centos-download.sh,/docs/user-guide/install/resources/2.5.3/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
$ sudo service thingsboard stop
```

{% capture tabspec %}thingsboard-installation-2-5-3
thingsboard-installation-2-5-3-ubuntu,Ubuntu,shell,resources/2.5.3/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/2.5.3/thingsboard-ubuntu-installation.sh
thingsboard-installation-2-5-3-centos,CentOS,shell,resources/2.5.3/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/2.5.3/thingsboard-centos-installation.sh{% endcapture %}
{% include tabs.html %}

**NOTE:** Package installer will ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.

#### Start the service

{% include templates/redis-post-upgrade-notice.md %}

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows {#windows-253}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 2.5.2. In order to upgrade to 2.5.3 you need to [**upgrade to 2.5.2 first**](/docs/user-guide/install/upgrade-instructions/#windows-252).

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-2.5.3.zip](https://github.com/thingsboard/thingsboard/releases/download/v2.5.3/thingsboard-windows-2.5.3.zip).

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).

* Remove ThingsBoard install dir.
* Unzip installation archive to ThingsBoard install dir.
* Compare your old ThingsBoard configuration files (from the backup you made in the first step) with new ones.

#### Start the service

{% include templates/redis-post-upgrade-notice.md %}

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 2.5.4 {#upgrading-to-254}

### Ubuntu/CentOS {#ubuntucentos-254}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 2.5.3. In order to upgrade to 2.5.4 you need to [**upgrade to 2.5.3 first**](/docs/user-guide/install/upgrade-instructions/#ubuntucentos-253).

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-2-5-4
thingsboard-download-2-5-4-ubuntu,Ubuntu,shell,resources/2.5.4/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/2.5.4/thingsboard-ubuntu-download.sh
thingsboard-download-2-5-4-centos,CentOS,shell,resources/2.5.4/thingsboard-centos-download.sh,/docs/user-guide/install/resources/2.5.4/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
$ sudo service thingsboard stop
```

{% capture tabspec %}thingsboard-installation-2-5-4
thingsboard-installation-2-5-4-ubuntu,Ubuntu,shell,resources/2.5.4/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/2.5.4/thingsboard-ubuntu-installation.sh
thingsboard-installation-2-5-4-centos,CentOS,shell,resources/2.5.4/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/2.5.4/thingsboard-centos-installation.sh{% endcapture %}
{% include tabs.html %}

**NOTE:** Package installer will ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.

#### Start the service

{% include templates/redis-post-upgrade-notice.md %}

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows {#windows-254}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 2.5.3. In order to upgrade to 2.5.4 you need to [**upgrade to 2.5.3 first**](/docs/user-guide/install/upgrade-instructions/#windows-253).

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-2.5.4.zip](https://github.com/thingsboard/thingsboard/releases/download/v2.5.4/thingsboard-windows-2.5.4.zip).

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).

* Remove ThingsBoard install dir.
* Unzip installation archive to ThingsBoard install dir.
* Compare your old ThingsBoard configuration files (from the backup you made in the first step) with new ones.

#### Start the service

{% include templates/redis-post-upgrade-notice.md %}

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 2.5.5 {#upgrading-to-255}

### Ubuntu/CentOS {#ubuntucentos-255}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 2.5.4. In order to upgrade to 2.5.5 you need to [**upgrade to 2.5.4 first**](/docs/user-guide/install/upgrade-instructions/#ubuntucentos-254).

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-2-5-5
thingsboard-download-2-5-5-ubuntu,Ubuntu,shell,resources/2.5.5/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/2.5.5/thingsboard-ubuntu-download.sh
thingsboard-download-2-5-5-centos,CentOS,shell,resources/2.5.5/thingsboard-centos-download.sh,/docs/user-guide/install/resources/2.5.5/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
$ sudo service thingsboard stop
```

{% capture tabspec %}thingsboard-installation-2-5-5
thingsboard-installation-2-5-5-ubuntu,Ubuntu,shell,resources/2.5.5/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/2.5.5/thingsboard-ubuntu-installation.sh
thingsboard-installation-2-5-5-centos,CentOS,shell,resources/2.5.5/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/2.5.5/thingsboard-centos-installation.sh{% endcapture %}
{% include tabs.html %}

**NOTE:** Package installer will ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.

#### Start the service

{% include templates/redis-post-upgrade-notice.md %}

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows {#windows-255}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 2.5.4. In order to upgrade to 2.5.5 you need to [**upgrade to 2.5.4 first**](/docs/user-guide/install/upgrade-instructions/#windows-254).

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-2.5.5.zip](https://github.com/thingsboard/thingsboard/releases/download/v2.5.5/thingsboard-windows-2.5.5.zip).

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Remove ThingsBoard install dir.
* Unzip installation archive to ThingsBoard install dir.
* Compare your old ThingsBoard configuration files (from the backup you made in the first step) with new ones.

#### Start the service

{% include templates/redis-post-upgrade-notice.md %}

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 2.5.6 {#upgrading-to-256}

### Ubuntu/CentOS {#ubuntucentos-256}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 2.5.5. In order to upgrade to 2.5.6 you need to [**upgrade to 2.5.5 first**](/docs/user-guide/install/upgrade-instructions/#ubuntucentos-255).

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-2-5-6
thingsboard-download-2-5-6-ubuntu,Ubuntu,shell,resources/2.5.6/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/2.5.6/thingsboard-ubuntu-download.sh
thingsboard-download-2-5-6-centos,CentOS,shell,resources/2.5.6/thingsboard-centos-download.sh,/docs/user-guide/install/resources/2.5.6/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
$ sudo service thingsboard stop
```

{% capture tabspec %}thingsboard-installation-2-5-6
thingsboard-installation-2-5-6-ubuntu,Ubuntu,shell,resources/2.5.6/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/2.5.6/thingsboard-ubuntu-installation.sh
thingsboard-installation-2-5-6-centos,CentOS,shell,resources/2.5.6/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/2.5.6/thingsboard-centos-installation.sh{% endcapture %}
{% include tabs.html %}

**NOTE:** Package installer will ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.

#### Start the service

{% include templates/redis-post-upgrade-notice.md %}

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows {#windows-256}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 2.5.5. In order to upgrade to 2.5.6 you need to [**upgrade to 2.5.5 first**](/docs/user-guide/install/upgrade-instructions/#windows-255).

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-2.5.6.zip](https://github.com/thingsboard/thingsboard/releases/download/v2.5.6/thingsboard-windows-2.5.6.zip).

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).

* Remove ThingsBoard install dir.
* Unzip installation archive to ThingsBoard install dir.
* Compare your old ThingsBoard configuration files (from the backup you made in the first step) with new ones.

#### Start the service

{% include templates/redis-post-upgrade-notice.md %}

```text
net start thingsboard
```
{: .copy-code}


## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}
