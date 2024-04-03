---
layout: docwithnav
assignees:
- ashvayka
title: Upgrade instructions
description: ThingsBoard IoT platform upgrade instructions

---

<h3>In order to update ThingsBoard PE please follow <a style="pointer-events: all;" href="/docs/user-guide/install/pe/upgrade-instructions/">these instructions</a></h3>

<ul id="markdown-toc">
    <li>
      <a href="#upgrading-to-363" id="markdown-toc-upgrading-to-363">Upgrading to 3.6.3</a>
      <ul>
          <li>
              <a href="#ubuntucentos-363" id="markdown-toc-ubuntucentos-363">Ubuntu/CentOS</a>
          </li>
          <li>
              <a href="#windows-363" id="markdown-toc-windows-362">Windows</a>
          </li>
      </ul>
    </li>
    <li>
      <a href="#upgrading-to-362" id="markdown-toc-upgrading-to-362">Upgrading to 3.6.2</a>
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
      <a href="#upgrading-to-361" id="markdown-toc-upgrading-to-361">Upgrading to 3.6.1</a>
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
      <a href="#upgrading-to-36" id="markdown-toc-upgrading-to-36">Upgrading to 3.6</a>
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
      <a href="#upgrading-to-351" id="markdown-toc-upgrading-to-351">Upgrading to 3.5.1</a>
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
      <a href="#upgrading-to-35" id="markdown-toc-upgrading-to-35">Upgrading to 3.5</a>
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
    <a href="/docs/user-guide/install/old-upgrade-instructions/" id="markdown-toc-upgrading-to-240">Older versions</a>
    </li> 
</ul>

## Upgrading to 3.6.3 {#upgrading-to-363}

### Ubuntu/CentOS {#ubuntucentos-363}

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.6.2. In order to upgrade to 3.6.3 you need to [**upgrade to 3.6.2 first**](/docs/user-guide/install/upgrade-instructions/#ubuntucentos-362).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-3-6-3
thingsboard-download-3-6-3-ubuntu,Ubuntu,shell,resources/3.6.3/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/3.6.3/thingsboard-ubuntu-download.sh
thingsboard-download-3-6-3-centos,CentOS,shell,resources/3.6.3/thingsboard-centos-download.sh,/docs/user-guide/install/resources/3.6.3/thingsboard-centos-download.sh{% endcapture %}
{% include tabs.html %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

{% capture tabspec %}thingsboard-installation-3-6-3
thingsboard-installation-3-6-3-ubuntu,Ubuntu,shell,resources/3.6.3/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/3.6.3/thingsboard-ubuntu-installation.sh
thingsboard-installation-3-6-3-centos,CentOS,shell,resources/3.6.3/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/3.6.3/thingsboard-centos-installation.sh{% endcapture %}
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
These upgrade steps are applicable for ThingsBoard version 3.6.2. In order to upgrade to 3.6.3 you need to [**upgrade to 3.6.2 first**](/docs/user-guide/install/upgrade-instructions/#windows-362).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-3.6.3.zip](https://github.com/thingsboard/thingsboard/releases/download/v3.6.3/thingsboard-windows-3.6.3.zip).

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Remove ThingsBoard install dir.
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
C:\thingsboard>upgrade.bat --fromVersion=3.6.2
```
{: .copy-code}

#### Start the service

```text
net start thingsboard
```
{: .copy-code}


## Upgrading to 3.6.2 {#upgrading-to-362}

### Ubuntu/CentOS {#ubuntucentos-362}

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.6.1. In order to upgrade to 3.6.2 you need to [**upgrade to 3.6.1 first**](/docs/user-guide/install/upgrade-instructions/#ubuntucentos-361).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-3-6-2
thingsboard-download-3-6-2-ubuntu,Ubuntu,shell,resources/3.6.2/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/3.6.2/thingsboard-ubuntu-download.sh
thingsboard-download-3-6-2-centos,CentOS,shell,resources/3.6.2/thingsboard-centos-download.sh,/docs/user-guide/install/resources/3.6.2/thingsboard-centos-download.sh{% endcapture %}
{% include tabs.html %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

{% capture tabspec %}thingsboard-installation-3-6-2
thingsboard-installation-3-6-2-ubuntu,Ubuntu,shell,resources/3.6.2/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/3.6.2/thingsboard-ubuntu-installation.sh
thingsboard-installation-3-6-2-centos,CentOS,shell,resources/3.6.2/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/3.6.2/thingsboard-centos-installation.sh{% endcapture %}
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
These upgrade steps are applicable for ThingsBoard version 3.6.1. In order to upgrade to 3.6.2 you need to [**upgrade to 3.6.1 first**](/docs/user-guide/install/upgrade-instructions/#windows-361).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-3.6.2.zip](https://github.com/thingsboard/thingsboard/releases/download/v3.6.2/thingsboard-windows-3.6.2.zip).

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Remove ThingsBoard install dir.
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
C:\thingsboard>upgrade.bat --fromVersion=3.6.1
```
{: .copy-code}

#### Start the service

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 3.6.1 {#upgrading-to-361}

### Ubuntu/CentOS {#ubuntucentos-361}

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.6. In order to upgrade to 3.6.1 you need to [**upgrade to 3.6 first**](/docs/user-guide/install/upgrade-instructions/#ubuntucentos-36).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-3-6-1
thingsboard-download-3-6-1-ubuntu,Ubuntu,shell,resources/3.6.1/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/3.6.1/thingsboard-ubuntu-download.sh
thingsboard-download-3-6-1-centos,CentOS,shell,resources/3.6.1/thingsboard-centos-download.sh,/docs/user-guide/install/resources/3.6.1/thingsboard-centos-download.sh{% endcapture %}
{% include tabs.html %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

{% capture tabspec %}thingsboard-installation-3-6-1
thingsboard-installation-3-6-1-ubuntu,Ubuntu,shell,resources/3.6.1/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/3.6.1/thingsboard-ubuntu-installation.sh
thingsboard-installation-3-6-1-centos,CentOS,shell,resources/3.6.1/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/3.6.1/thingsboard-centos-installation.sh{% endcapture %}
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
These upgrade steps are applicable for ThingsBoard version 3.6. In order to upgrade to 3.6.1 you need to [**upgrade to 3.6 first**](/docs/user-guide/install/upgrade-instructions/#windows-36).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-3.6.1.zip](https://github.com/thingsboard/thingsboard/releases/download/v3.6.1/thingsboard-windows-3.6.1.zip).

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Remove ThingsBoard install dir.
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
C:\thingsboard>upgrade.bat --fromVersion=3.6.0
```
{: .copy-code}

#### Start the service

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 3.6 {#upgrading-to-36}

### Ubuntu/CentOS {#ubuntucentos-36}

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.5.1. In order to upgrade to 3.6 you need to [**upgrade to 3.5.1 first**](/docs/user-guide/install/upgrade-instructions/#ubuntucentos-351).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-3-6
thingsboard-download-3-6-ubuntu,Ubuntu,shell,resources/3.6/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/3.6/thingsboard-ubuntu-download.sh
thingsboard-download-3-6-centos,CentOS,shell,resources/3.6/thingsboard-centos-download.sh,/docs/user-guide/install/resources/3.6/thingsboard-centos-download.sh{% endcapture %}
{% include tabs.html %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

{% capture tabspec %}thingsboard-installation-3-5
thingsboard-installation-3-6-ubuntu,Ubuntu,shell,resources/3.6/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/3.6/thingsboard-ubuntu-installation.sh
thingsboard-installation-3-6-centos,CentOS,shell,resources/3.6/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/3.6/thingsboard-centos-installation.sh{% endcapture %}
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
These upgrade steps are applicable for ThingsBoard version 3.5.1. In order to upgrade to 3.6 you need to [**upgrade to 3.5.1 first**](/docs/user-guide/install/upgrade-instructions/#windows-351).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-3.6.zip](https://github.com/thingsboard/thingsboard/releases/download/v3.6/thingsboard-windows-3.6.zip).

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Remove ThingsBoard install dir.
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
C:\thingsboard>upgrade.bat --fromVersion=3.5.1
```
{: .copy-code}

#### Start the service

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 3.5.1 {#upgrading-to-351}

### Ubuntu/CentOS {#ubuntucentos-351}

{% capture difference %}
**NOTE**:
<br>
These upgrade steps are applicable for ThingsBoard version 3.5. In order to upgrade to 3.5.1 you need to [**upgrade to 3.5 first**](/docs/user-guide/install/upgrade-instructions/#ubuntucentos-35).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-3-5-1
thingsboard-download-3-5-1-ubuntu,Ubuntu,shell,resources/3.5.1/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/3.5.1/thingsboard-ubuntu-download.sh
thingsboard-download-3-5-1-centos,CentOS,shell,resources/3.5.1/thingsboard-centos-download.sh,/docs/user-guide/install/resources/3.5.1/thingsboard-centos-download.sh{% endcapture %}
{% include tabs.html %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

{% capture tabspec %}thingsboard-installation-3-5-1
thingsboard-installation-3-5-1-ubuntu,Ubuntu,shell,resources/3.5.1/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/3.5.1/thingsboard-ubuntu-installation.sh
thingsboard-installation-3-5-1-centos,CentOS,shell,resources/3.5.1/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/3.5.1/thingsboard-centos-installation.sh{% endcapture %}
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
These upgrade steps are applicable for ThingsBoard version 3.5. In order to upgrade to 3.5.1 you need to [**upgrade to 3.5 first**](/docs/user-guide/install/upgrade-instructions/#windows-35).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-3.5.1.zip](https://github.com/thingsboard/thingsboard/releases/download/v3.5.1/thingsboard-windows-3.5.1.zip).

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Remove ThingsBoard install dir.
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
C:\thingsboard>upgrade.bat --fromVersion=3.5.0
```
{: .copy-code}

#### Start the service

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 3.5 {#upgrading-to-35}

### Ubuntu/CentOS {#ubuntucentos-35}

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.4.4. In order to upgrade to 3.5 you need to [**upgrade to 3.4.4 first**](/docs/user-guide/install/upgrade-instructions/#ubuntucentos-344).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

{% include templates/install/tb-350-update.md %}

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-3-5
thingsboard-download-3-5-ubuntu,Ubuntu,shell,resources/3.5/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/3.5/thingsboard-ubuntu-download.sh
thingsboard-download-3-5-centos,CentOS,shell,resources/3.5/thingsboard-centos-download.sh,/docs/user-guide/install/resources/3.5/thingsboard-centos-download.sh{% endcapture %}
{% include tabs.html %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

{% capture tabspec %}thingsboard-installation-3-5
thingsboard-installation-3-5-ubuntu,Ubuntu,shell,resources/3.5/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/3.5/thingsboard-ubuntu-installation.sh
thingsboard-installation-3-5-centos,CentOS,shell,resources/3.5/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/3.5/thingsboard-centos-installation.sh{% endcapture %}
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
These upgrade steps are applicable for ThingsBoard version 3.4.4. In order to upgrade to 3.5 you need to [**upgrade to 3.4.4 first**](/docs/user-guide/install/upgrade-instructions/#windows-344).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

{% include templates/install/tb-350-update.md %}

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-3.5.zip](https://github.com/thingsboard/thingsboard/releases/download/v3.5/thingsboard-windows-3.5.zip).

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Remove ThingsBoard install dir.
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
