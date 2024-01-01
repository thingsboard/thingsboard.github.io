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
      <a href="#upgrading-to-344" id="markdown-toc-upgrading-to-344">Upgrading to 3.4.4</a>
      <ul>
          <li>
              <a href="#ubuntucentos-344" id="markdown-toc-ubuntucentos-344">Ubuntu/CentOS</a>
          </li>
          <li>
              <a href="#windows-344" id="markdown-toc-windows-344">Windows</a>
          </li>
      </ul>
    </li>
    <li>
      <a href="#upgrading-to-343" id="markdown-toc-upgrading-to-343">Upgrading to 3.4.3</a>
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
      <a href="#upgrading-to-342" id="markdown-toc-upgrading-to-342">Upgrading to 3.4.2</a>
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
      <a href="#upgrading-to-341" id="markdown-toc-upgrading-to-341">Upgrading to 3.4.1</a>
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
      <a href="#upgrading-to-34" id="markdown-toc-upgrading-to-34">Upgrading to 3.4</a>
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
      <a href="#upgrading-to-3341" id="markdown-toc-upgrading-to-3341">Upgrading to 3.3.4.1</a>
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
      <a href="#upgrading-to-334" id="markdown-toc-upgrading-to-334">Upgrading to 3.3.4</a>
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
      <a href="#upgrading-to-333" id="markdown-toc-upgrading-to-333">Upgrading to 3.3.3</a>
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
      <a href="#upgrading-to-332" id="markdown-toc-upgrading-to-332">Upgrading to 3.3.2</a>
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
      <a href="#upgrading-to-331" id="markdown-toc-upgrading-to-331">Upgrading to 3.3.1</a>
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
      <a href="#upgrading-to-33" id="markdown-toc-upgrading-to-33">Upgrading to 3.3</a>
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
      <a href="#upgrading-to-322" id="markdown-toc-upgrading-to-322">Upgrading to 3.2.2</a>
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
      <a href="#upgrading-to-321" id="markdown-toc-upgrading-to-321">Upgrading to 3.2.1</a>
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
      <a href="#upgrading-to-32" id="markdown-toc-upgrading-to-32">Upgrading to 3.2</a>
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
      <a href="#upgrading-to-311" id="markdown-toc-upgrading-to-311">Upgrading to 3.1.1</a>
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
      <a href="#upgrading-to-31" id="markdown-toc-upgrading-to-31">Upgrading to 3.1</a>
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
      <a href="#upgrading-to-301" id="markdown-toc-upgrading-to-30">Upgrading to 3.0.1</a>
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
      <a href="#upgrading-to-30" id="markdown-toc-upgrading-to-30">Upgrading to 3.0</a>
      <ul>
          <li>
              <a href="#ubuntucentos-30" id="markdown-toc-ubuntucentos-30">Ubuntu/CentOS</a>
          </li>
          <li>
              <a href="#windows-30" id="markdown-toc-windows-30">Windows</a>
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
    <a href="/docs/user-guide/install/old-upgrade-instructions/" id="markdown-toc-upgrading-to-240">Older versions</a>
    </li> 
</ul>

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

## Upgrading to 3.4.4 {#upgrading-to-344}

### Ubuntu/CentOS {#ubuntucentos-344}

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.4.3. In order to upgrade to 3.4.4 you need to [**upgrade to 3.4.3 first**](/docs/user-guide/install/upgrade-instructions/#ubuntucentos-343).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-3-4-4
thingsboard-download-3-4-4-ubuntu,Ubuntu,shell,resources/3.4.4/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/3.4.4/thingsboard-ubuntu-download.sh
thingsboard-download-3-4-4-centos,CentOS,shell,resources/3.4.4/thingsboard-centos-download.sh,/docs/user-guide/install/resources/3.4.4/thingsboard-centos-download.sh{% endcapture %}
{% include tabs.html %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

{% capture tabspec %}thingsboard-installation-3-4-4
thingsboard-installation-3-4-4-ubuntu,Ubuntu,shell,resources/3.4.4/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/3.4.4/thingsboard-ubuntu-installation.sh
thingsboard-installation-3-4-4-centos,CentOS,shell,resources/3.4.4/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/3.4.4/thingsboard-centos-installation.sh{% endcapture %}
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
These upgrade steps are applicable for ThingsBoard version 3.4.3. In order to upgrade to 3.4.4 you need to [**upgrade to 3.4.3 first**](/docs/user-guide/install/upgrade-instructions/#windows-343).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-3.4.4.zip](https://github.com/thingsboard/thingsboard/releases/download/v3.4.4/thingsboard-windows-3.4.4.zip).

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

#### Start the service

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 3.4.3 {#upgrading-to-343}

### Ubuntu/CentOS {#ubuntucentos-343}

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.4.2. In order to upgrade to 3.4.3 you need to [**upgrade to 3.4.2 first**](/docs/user-guide/install/upgrade-instructions/#ubuntucentos-342).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-3-4-3
thingsboard-download-3-4-3-ubuntu,Ubuntu,shell,resources/3.4.3/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/3.4.3/thingsboard-ubuntu-download.sh
thingsboard-download-3-4-3-centos,CentOS,shell,resources/3.4.3/thingsboard-centos-download.sh,/docs/user-guide/install/resources/3.4.3/thingsboard-centos-download.sh{% endcapture %}
{% include tabs.html %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

{% capture tabspec %}thingsboard-installation-3-4-3
thingsboard-installation-3-4-3-ubuntu,Ubuntu,shell,resources/3.4.3/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/3.4.3/thingsboard-ubuntu-installation.sh
thingsboard-installation-3-4-3-centos,CentOS,shell,resources/3.4.3/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/3.4.3/thingsboard-centos-installation.sh{% endcapture %}
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
These upgrade steps are applicable for ThingsBoard version 3.4.2. In order to upgrade to 3.4.3 you need to [**upgrade to 3.4.2 first**](/docs/user-guide/install/upgrade-instructions/#windows-342).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-3.4.3.zip](https://github.com/thingsboard/thingsboard/releases/download/v3.4.3/thingsboard-windows-3.4.3.zip).

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

#### Start the service

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 3.4.2 {#upgrading-to-342}

### Ubuntu/CentOS {#ubuntucentos-342}

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.4.1. In order to upgrade to 3.4.2 you need to [**upgrade to 3.4.1 first**](/docs/user-guide/install/upgrade-instructions/#ubuntucentos-341).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-3-4-2
thingsboard-download-3-4-2-ubuntu,Ubuntu,shell,resources/3.4.2/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/3.4.2/thingsboard-ubuntu-download.sh
thingsboard-download-3-4-2-centos,CentOS,shell,resources/3.4.2/thingsboard-centos-download.sh,/docs/user-guide/install/resources/3.4.2/thingsboard-centos-download.sh{% endcapture %}
{% include tabs.html %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

{% capture tabspec %}thingsboard-installation-3-4-2
thingsboard-installation-3-4-2-ubuntu,Ubuntu,shell,resources/3.4.2/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/3.4.2/thingsboard-ubuntu-installation.sh
thingsboard-installation-3-4-2-centos,CentOS,shell,resources/3.4.2/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/3.4.2/thingsboard-centos-installation.sh{% endcapture %}
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
Update the JWT signing key if you use the default one "thingsboardDefaultSigningKey" on production environments. See [JWT security settings](/docs/user-guide/ui/jwt-security-settings/) for details. 
{% endcapture %}
{% include templates/info-banner.md content=default-jwt %}

### Windows {#windows-342}

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.4.1. In order to upgrade to 3.4.2 you need to [**upgrade to 3.4.1 first**](/docs/user-guide/install/upgrade-instructions/#windows-341).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-3.4.2.zip](https://github.com/thingsboard/thingsboard/releases/download/v3.4.2/thingsboard-windows-3.4.2.zip).

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
C:\thingsboard>upgrade.bat --fromVersion=3.4.1
```
{: .copy-code}

#### Start the service

```text
net start thingsboard
```
{: .copy-code}

{% capture default-jwt %}
Update the JWT signing key if you use the default one "thingsboardDefaultSigningKey" on production environments. See [JWT security settings](/docs/user-guide/ui/jwt-security-settings/) for details. 
{% endcapture %}
{% include templates/info-banner.md content=default-jwt %}

## Upgrading to 3.4.1 {#upgrading-to-341}

### Ubuntu/CentOS {#ubuntucentos-341}

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.4. In order to upgrade to 3.4.1 you need to [**upgrade to 3.4 first**](/docs/user-guide/install/upgrade-instructions/#ubuntucentos-34).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-3-4-1
thingsboard-download-3-4-1-ubuntu,Ubuntu,shell,resources/3.4.1/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/3.4.1/thingsboard-ubuntu-download.sh
thingsboard-download-3-4-1-centos,CentOS,shell,resources/3.4.1/thingsboard-centos-download.sh,/docs/user-guide/install/resources/3.4.1/thingsboard-centos-download.sh{% endcapture %}
{% include tabs.html %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

{% capture tabspec %}thingsboard-installation-3-4-1
thingsboard-installation-3-4-1-ubuntu,Ubuntu,shell,resources/3.4.1/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/3.4.1/thingsboard-ubuntu-installation.sh
thingsboard-installation-3-4-1-centos,CentOS,shell,resources/3.4.1/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/3.4.1/thingsboard-centos-installation.sh{% endcapture %}
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
These upgrade steps are applicable for ThingsBoard version 3.4. In order to upgrade to 3.4.1 you need to [**upgrade to 3.4 first**](/docs/user-guide/install/upgrade-instructions/#windows-34).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-3.4.1.zip](https://github.com/thingsboard/thingsboard/releases/download/v3.4.1/thingsboard-windows-3.4.1.zip).

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
C:\thingsboard>upgrade.bat --fromVersion=3.4.0
```
{: .copy-code}

#### Start the service

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 3.4 {#upgrading-to-34}

### Ubuntu/CentOS {#ubuntucentos-34}

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.3.4.1. In order to upgrade to 3.4 you need to [**upgrade to 3.3.4.1 first**](/docs/user-guide/install/upgrade-instructions/#ubuntucentos-3341).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-3-4
thingsboard-download-3-4-ubuntu,Ubuntu,shell,resources/3.4/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/3.4/thingsboard-ubuntu-download.sh
thingsboard-download-3-4-centos,CentOS,shell,resources/3.4/thingsboard-centos-download.sh,/docs/user-guide/install/resources/3.4/thingsboard-centos-download.sh{% endcapture %}
{% include tabs.html %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

{% capture tabspec %}thingsboard-installation-3-4
thingsboard-installation-3-4-ubuntu,Ubuntu,shell,resources/3.4/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/3.4/thingsboard-ubuntu-installation.sh
thingsboard-installation-3-4-centos,CentOS,shell,resources/3.4/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/3.4/thingsboard-centos-installation.sh{% endcapture %}
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
These upgrade steps are applicable for ThingsBoard version 3.3.4.1. In order to upgrade to 3.4 you need to [**upgrade to 3.3.4.1 first**](/docs/user-guide/install/upgrade-instructions/#windows-3341).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-3.4.zip](https://github.com/thingsboard/thingsboard/releases/download/v3.4/thingsboard-windows-3.4.zip).

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
C:\thingsboard>upgrade.bat --fromVersion=3.3.4
```
{: .copy-code}

#### Start the service

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 3.3.4.1 {#upgrading-to-3341}

### Ubuntu/CentOS {#ubuntucentos-3341}

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.3.4. In order to upgrade to 3.3.4.1 you need to [**upgrade to 3.3.4 first**](/docs/user-guide/install/upgrade-instructions/#ubuntucentos-334).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-3-3-4-1
thingsboard-download-3-3-4-1-ubuntu,Ubuntu,shell,resources/3.3.4.1/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/3.3.4.1/thingsboard-ubuntu-download.sh
thingsboard-download-3-3-4-1-centos,CentOS,shell,resources/3.3.4.1/thingsboard-centos-download.sh,/docs/user-guide/install/resources/3.3.4.1/thingsboard-centos-download.sh{% endcapture %}
{% include tabs.html %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

{% capture tabspec %}thingsboard-installation-3-3-4-1
thingsboard-installation-3-3-4-1-ubuntu,Ubuntu,shell,resources/3.3.4.1/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/3.3.4.1/thingsboard-ubuntu-installation.sh
thingsboard-installation-3-3-4-1-centos,CentOS,shell,resources/3.3.4.1/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/3.3.4.1/thingsboard-centos-installation.sh{% endcapture %}
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
These upgrade steps are applicable for ThingsBoard version 3.3.4. In order to upgrade to 3.3.4.1 you need to [**upgrade to 3.3.4 first**](/docs/user-guide/install/upgrade-instructions/#windows-334).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-3.3.4.1.zip](https://github.com/thingsboard/thingsboard/releases/download/v3.3.4.1/thingsboard-windows-3.3.4.1.zip).

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

#### Start the service

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 3.3.4 {#upgrading-to-334}

### Ubuntu/CentOS {#ubuntucentos-334}

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.3.3. In order to upgrade to 3.3.4 you need to [**upgrade to 3.3.3 first**](/docs/user-guide/install/upgrade-instructions/#ubuntucentos-333).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-3-3-4
thingsboard-download-3-3-4-ubuntu,Ubuntu,shell,resources/3.3.4/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/3.3.4/thingsboard-ubuntu-download.sh
thingsboard-download-3-3-4-centos,CentOS,shell,resources/3.3.4/thingsboard-centos-download.sh,/docs/user-guide/install/resources/3.3.4/thingsboard-centos-download.sh{% endcapture %}
{% include tabs.html %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

{% capture tabspec %}thingsboard-installation-3-3-4
thingsboard-installation-3-3-4-ubuntu,Ubuntu,shell,resources/3.3.4/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/3.3.4/thingsboard-ubuntu-installation.sh
thingsboard-installation-3-3-4-centos,CentOS,shell,resources/3.3.4/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/3.3.4/thingsboard-centos-installation.sh{% endcapture %}
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
These upgrade steps are applicable for ThingsBoard version 3.3.3. In order to upgrade to 3.3.4 you need to [**upgrade to 3.3.3 first**](/docs/user-guide/install/upgrade-instructions/#windows-333).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-3.3.4.zip](https://github.com/thingsboard/thingsboard/releases/download/v3.3.4/thingsboard-windows-3.3.4.zip).

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
C:\thingsboard>upgrade.bat --fromVersion=3.3.3
```
{: .copy-code}

#### Start the service

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 3.3.3 {#upgrading-to-333}

### Ubuntu/CentOS {#ubuntucentos-333}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.3.2. In order to upgrade to 3.3.3 you need to [**upgrade to 3.3.2 first**](/docs/user-guide/install/upgrade-instructions/#ubuntucentos-332).

{% include templates/install/tb-333-update.md %}

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-3-3-3
thingsboard-download-3-3-3-ubuntu,Ubuntu,shell,resources/3.3.3/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/3.3.3/thingsboard-ubuntu-download.sh
thingsboard-download-3-3-3-centos,CentOS,shell,resources/3.3.3/thingsboard-centos-download.sh,/docs/user-guide/install/resources/3.3.3/thingsboard-centos-download.sh{% endcapture %}
{% include tabs.html %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
$ sudo service thingsboard stop
```

{% capture tabspec %}thingsboard-installation-3-3-3
thingsboard-installation-3-3-3-ubuntu,Ubuntu,shell,resources/3.3.3/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/3.3.3/thingsboard-ubuntu-installation.sh
thingsboard-installation-3-3-3-centos,CentOS,shell,resources/3.3.3/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/3.3.3/thingsboard-centos-installation.sh{% endcapture %}
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

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.3.2. In order to upgrade to 3.3.3 you need to [**upgrade to 3.3.2 first**](/docs/user-guide/install/upgrade-instructions/#windows-332).

{% include templates/install/tb-333-update.md %}

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-3.3.3.zip](https://github.com/thingsboard/thingsboard/releases/download/v3.3.3/thingsboard-windows-3.3.3.zip).

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```

* Make a backup of previous ThingsBoard configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).

* Remove ThingsBoard install dir.
* Unzip installation archive to ThingsBoard install dir.
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


## Upgrading to 3.3.2 {#upgrading-to-332}

### Ubuntu/CentOS {#ubuntucentos-332}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.3.1. In order to upgrade to 3.3.2 you need to [**upgrade to 3.3.1 first**](/docs/user-guide/install/upgrade-instructions/#ubuntucentos-331).

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-3-3-2
thingsboard-download-3-3-2-ubuntu,Ubuntu,shell,resources/3.3.2/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/3.3.2/thingsboard-ubuntu-download.sh
thingsboard-download-3-3-2-centos,CentOS,shell,resources/3.3.2/thingsboard-centos-download.sh,/docs/user-guide/install/resources/3.3.2/thingsboard-centos-download.sh{% endcapture %}
{% include tabs.html %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
$ sudo service thingsboard stop
```

{% capture tabspec %}thingsboard-installation-3-3-2
thingsboard-installation-3-3-2-ubuntu,Ubuntu,shell,resources/3.3.2/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/3.3.2/thingsboard-ubuntu-installation.sh
thingsboard-installation-3-3-2-centos,CentOS,shell,resources/3.3.2/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/3.3.2/thingsboard-centos-installation.sh{% endcapture %}
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

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.3.1. In order to upgrade to 3.3.2 you need to [**upgrade to 3.3.1 first**](/docs/user-guide/install/upgrade-instructions/#windows-331).

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-3.3.2.zip](https://github.com/thingsboard/thingsboard/releases/download/v3.3.2/thingsboard-windows-3.3.2.zip).

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```

* Make a backup of previous ThingsBoard configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).

* Remove ThingsBoard install dir.
* Unzip installation archive to ThingsBoard install dir.
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

## Upgrading to 3.3.1 {#upgrading-to-331}

### Ubuntu/CentOS {#ubuntucentos-331}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.3.0. In order to upgrade to 3.3.1 you need to [**upgrade to 3.3.0 first**](/docs/user-guide/install/upgrade-instructions/#ubuntucentos-33).

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-3-3-1
thingsboard-download-3-3-1-ubuntu,Ubuntu,shell,resources/3.3.1/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/3.3.1/thingsboard-ubuntu-download.sh
thingsboard-download-3-3-1-centos,CentOS,shell,resources/3.3.1/thingsboard-centos-download.sh,/docs/user-guide/install/resources/3.3.1/thingsboard-centos-download.sh{% endcapture %}
{% include tabs.html %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
$ sudo service thingsboard stop
```

{% capture tabspec %}thingsboard-installation-3-3-1
thingsboard-installation-3-3-1-ubuntu,Ubuntu,shell,resources/3.3.1/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/3.3.1/thingsboard-ubuntu-installation.sh
thingsboard-installation-3-3-1-centos,CentOS,shell,resources/3.3.1/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/3.3.1/thingsboard-centos-installation.sh{% endcapture %}
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

{% include templates/redis-post-upgrade-notice.md %}

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows {#windows-331}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.3.0. In order to upgrade to 3.3.1 you need to [**upgrade to 3.3.0 first**](/docs/user-guide/install/upgrade-instructions/#windows-33).

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-3.3.1.zip](https://github.com/thingsboard/thingsboard/releases/download/v3.3.1/thingsboard-windows-3.3.1.zip).

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

{% include templates/redis-post-upgrade-notice.md %}

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 3.3 {#upgrading-to-33}

### Ubuntu/CentOS {#ubuntucentos-33}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.2.2. In order to upgrade to 3.3 you need to [**upgrade to 3.2.2 first**](/docs/user-guide/install/upgrade-instructions/#ubuntucentos-322).

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-3-3
thingsboard-download-3-3-ubuntu,Ubuntu,shell,resources/3.3/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/3.3/thingsboard-ubuntu-download.sh
thingsboard-download-3-3-centos,CentOS,shell,resources/3.3/thingsboard-centos-download.sh,/docs/user-guide/install/resources/3.3/thingsboard-centos-download.sh{% endcapture %}
{% include tabs.html %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
$ sudo service thingsboard stop
```

{% capture tabspec %}thingsboard-installation-3-3
thingsboard-installation-3-3-ubuntu,Ubuntu,shell,resources/3.3/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/3.3/thingsboard-ubuntu-installation.sh
thingsboard-installation-3-3-centos,CentOS,shell,resources/3.3/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/3.3/thingsboard-centos-installation.sh{% endcapture %}
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

{% include templates/redis-post-upgrade-notice.md %}

```bash
sudo service thingsboard start
```
{: .copy-code}
### Windows {#windows-33}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.2.2. In order to upgrade to 3.3 you need to [**upgrade to 3.2.2 first**](/docs/user-guide/install/upgrade-instructions/#windows-322).

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-3.3.zip](https://github.com/thingsboard/thingsboard/releases/download/v3.3/thingsboard-windows-3.3.zip).

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

{% include templates/redis-post-upgrade-notice.md %}

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 3.2.2 {#upgrading-to-322}

### Ubuntu/CentOS {#ubuntucentos-322}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.2.1. In order to upgrade to 3.2.2 you need to [**upgrade to 3.2.1 first**](/docs/user-guide/install/upgrade-instructions/#ubuntucentos-321).

<br>

{% capture tb_3_2_2_java_11_linux %}
**NOTE: Since ThingsBoard version 3.2.2 Java 11 is used**
- Please install Java 11 before proceeding upgrade procedure using the following guide:
    - [Java 11 Installation on Ubuntu](/docs/user-guide/install/ubuntu/#step-1-install-java-11-openjdk)
    - [Java 11 Installation on CentOS/RHEL](/docs/user-guide/install/rhel/#step-1-install-java-11-openjdk)

{% endcapture %}
{% include templates/warn-banner.md content=tb_3_2_2_java_11_linux %}


{% capture cassandra-in-beta %}
Please note that Cassandra 4.x is still in beta. ThingsBoard is compatible with Cassandra 3.x as well.
However, since ThingsBoard 3.2.2+ requires Java 11 and Cassandra 3.x is [not compatible](https://cassandra.apache.org/doc/latest/new/java11.html) with Java 8, you **can't launch ThingsBoard 3.2.2+ and Cassandra 3.x on the same machine without separate docker containers for both.**.
{% if docsPrefix == "pe/" %}
Please consider using [docker compose](/docs/user-guide/install/pe/cluster/docker-compose-setup/) or other [cluster setup](/docs/user-guide/install/pe/cluster-setup/)
to avoid issues with beta version of Cassandra.
{% else %}
Please consider using [docker compose](/docs/user-guide/install/cluster/docker-compose-setup/) or other [cluster setup](/docs/user-guide/install/cluster-setup/)
to avoid issues with beta version of Cassandra.
{% endif %}
{% endcapture %}
{% include templates/info-banner.md content=cassandra-in-beta %}

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-3-2-2
thingsboard-download-3-2-2-ubuntu,Ubuntu,shell,resources/3.2.2/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/3.2.2/thingsboard-ubuntu-download.sh
thingsboard-download-3-2-2-centos,CentOS,shell,resources/3.2.2/thingsboard-centos-download.sh,/docs/user-guide/install/resources/3.2.2/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
$ sudo service thingsboard stop
```

{% capture tabspec %}thingsboard-installation-3-2-2
thingsboard-installation-3-2-2-ubuntu,Ubuntu,shell,resources/3.2.2/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/3.2.2/thingsboard-ubuntu-installation.sh
thingsboard-installation-3-2-2-centos,CentOS,shell,resources/3.2.2/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/3.2.2/thingsboard-centos-installation.sh{% endcapture %}
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

{% include templates/redis-post-upgrade-notice.md %}

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows {#windows-322}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.2.1. In order to upgrade to 3.2.2 you need to [**upgrade to 3.2.1 first**](/docs/user-guide/install/upgrade-instructions/#windows-321).

<br>

{% capture tb_3_2_2_java_11_windows %}
**NOTE: Since ThingsBoard version 3.2.2 Java 11 is used**
- Please install Java 11 before proceeding upgrade procedure using the following guide:
    - [Java 11 Installation on Windows](/docs/user-guide/install/windows/#step-1-install-java-11-openjdk)

{% endcapture %}
{% include templates/warn-banner.md content=tb_3_2_2_java_11_windows %}

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-3.2.2.zip](https://github.com/thingsboard/thingsboard/releases/download/v3.2.2/thingsboard-windows-3.2.2.zip).

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

{% include templates/redis-post-upgrade-notice.md %}

```text
net start thingsboard
```

## Upgrading to 3.2.1 {#upgrading-to-321}

### Ubuntu/CentOS {#ubuntucentos-321}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.2. In order to upgrade to 3.2.1 you need to [**upgrade to 3.2 first**](/docs/user-guide/install/upgrade-instructions/#ubuntucentos-32).

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-3-2-1
thingsboard-download-3-2-1-ubuntu,Ubuntu,shell,resources/3.2.1/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/3.2.1/thingsboard-ubuntu-download.sh
thingsboard-download-3-2-1-centos,CentOS,shell,resources/3.2.1/thingsboard-centos-download.sh,/docs/user-guide/install/resources/3.2.1/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
$ sudo service thingsboard stop
```

{% capture tabspec %}thingsboard-installation-3-2-1
thingsboard-installation-3-2-1-ubuntu,Ubuntu,shell,resources/3.2.1/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/3.2.1/thingsboard-ubuntu-installation.sh
thingsboard-installation-3-2-1-centos,CentOS,shell,resources/3.2.1/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/3.2.1/thingsboard-centos-installation.sh{% endcapture %}
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

{% include templates/redis-post-upgrade-notice.md %}

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows {#windows-321}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.2. In order to upgrade to 3.2.1 you need to [**upgrade to 3.2 first**](/docs/user-guide/install/upgrade-instructions/#windows-32).

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-3.2.1.zip](https://github.com/thingsboard/thingsboard/releases/download/v3.2.1/thingsboard-windows-3.2.1.zip).

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

{% include templates/redis-post-upgrade-notice.md %}

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 3.2 {#upgrading-to-32} 

### Ubuntu/CentOS {#ubuntucentos-32}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.1.1. In order to upgrade to 3.2 you need to [**upgrade to 3.1.1 first**](/docs/user-guide/install/upgrade-instructions/#ubuntucentos-311).

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-3-2
thingsboard-download-3-2-ubuntu,Ubuntu,shell,resources/3.2/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/3.2/thingsboard-ubuntu-download.sh
thingsboard-download-3-2-centos,CentOS,shell,resources/3.2/thingsboard-centos-download.sh,/docs/user-guide/install/resources/3.2/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
$ sudo service thingsboard stop
```

{% capture tabspec %}thingsboard-installation-3-2
thingsboard-installation-3-2-ubuntu,Ubuntu,shell,resources/3.2/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/3.2/thingsboard-ubuntu-installation.sh
thingsboard-installation-3-2-centos,CentOS,shell,resources/3.2/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/3.2/thingsboard-centos-installation.sh{% endcapture %} 
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

{% include templates/redis-post-upgrade-notice.md %}

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows {#windows-32}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.1.1. In order to upgrade to 3.2 you need to [**upgrade to 3.1.1 first**](/docs/user-guide/install/upgrade-instructions/#windows-311).

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-3.2.zip](https://github.com/thingsboard/thingsboard/releases/download/v3.2/thingsboard-windows-3.2.zip).

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

{% include templates/redis-post-upgrade-notice.md %}

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 3.1.1 {#upgrading-to-311} 

### Ubuntu/CentOS {#ubuntucentos-311}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.1. In order to upgrade to 3.1.1 you need to [**upgrade to 3.1 first**](/docs/user-guide/install/upgrade-instructions/#ubuntucentos-31).

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-3-1-1
thingsboard-download-3-1-1-ubuntu,Ubuntu,shell,resources/3.1.1/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/3.1.1/thingsboard-ubuntu-download.sh
thingsboard-download-3-1-1-centos,CentOS,shell,resources/3.1.1/thingsboard-centos-download.sh,/docs/user-guide/install/resources/3.1.1/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
$ sudo service thingsboard stop
```

{% capture tabspec %}thingsboard-installation-3-1-1
thingsboard-installation-3-1-1-ubuntu,Ubuntu,shell,resources/3.1.1/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/3.1.1/thingsboard-ubuntu-installation.sh
thingsboard-installation-3-1-1-centos,CentOS,shell,resources/3.1.1/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/3.1.1/thingsboard-centos-installation.sh{% endcapture %} 
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

{% include templates/redis-post-upgrade-notice.md %}

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows {#windows-311}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.1. In order to upgrade to 3.1.1 you need to [**upgrade to 3.1 first**](/docs/user-guide/install/upgrade-instructions/#windows-31).

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-3.1.1.zip](https://github.com/thingsboard/thingsboard/releases/download/v3.1.1/thingsboard-windows-3.1.1.zip).

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

{% include templates/redis-post-upgrade-notice.md %}

```text
net start thingsboard
```

## Upgrading to 3.1 {#upgrading-to-31} 

### Ubuntu/CentOS {#ubuntucentos-31}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.0.1. In order to upgrade to 3.1 you need to [**upgrade to 3.0.1 first**](/docs/user-guide/install/upgrade-instructions/#ubuntucentos-301).

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-3-1
thingsboard-download-3-1-ubuntu,Ubuntu,shell,resources/3.1/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/3.1/thingsboard-ubuntu-download.sh
thingsboard-download-3-1-centos,CentOS,shell,resources/3.1/thingsboard-centos-download.sh,/docs/user-guide/install/resources/3.1/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
$ sudo service thingsboard stop
```

{% capture tabspec %}thingsboard-installation-3-1
thingsboard-installation-3-1-ubuntu,Ubuntu,shell,resources/3.1/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/3.1/thingsboard-ubuntu-installation.sh
thingsboard-installation-3-1-centos,CentOS,shell,resources/3.1/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/3.1/thingsboard-centos-installation.sh{% endcapture %} 
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
sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=3.0.1-cassandra
```
{: .copy-code}

Execute regular upgrade script:

```bash
sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=3.0.1
```
{: .copy-code}

#### Start the service

{% include templates/redis-post-upgrade-notice.md %}

{% include templates/redis-post-upgrade-notice.md %}

```bash
sudo service thingsboard start
```
{: .copy-code}

### Windows {#windows-31}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.0.1. In order to upgrade to 3.1 you need to [**upgrade to 3.0.1 first**](/docs/user-guide/install/upgrade-instructions/#windows-301).

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-3.1.zip](https://github.com/thingsboard/thingsboard/releases/download/v3.1/thingsboard-windows-3.1.zip).

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
C:\thingsboard>upgrade.bat --fromVersion=3.0.1-cassandra
```
{: .copy-code}

Execute regular upgrade script:

```text
C:\thingsboard>upgrade.bat --fromVersion=3.0.1
```
{: .copy-code}

#### Start the service

{% include templates/redis-post-upgrade-notice.md %}

{% include templates/redis-post-upgrade-notice.md %}

```text
net start thingsboard
```
{: .copy-code}

## Upgrading to 3.0.1 {#upgrading-to-301} 

### Ubuntu/CentOS {#ubuntucentos-301}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.0. In order to upgrade to 3.0.1 you need to [**upgrade to 3.0 first**](/docs/user-guide/install/upgrade-instructions/#ubuntucentos-30).

<br>

{% include templates/install/tb-30-update.md %}

<br>

{% capture tb_3_0_1_postgreSQL_linux %}
**Since ThingsBoard 3.0 only PostgreSQL database is supported for entities data**  
 - If you are using **Cassandra** database for entities data please install PostgreSQL database before proceeding upgrade procedure using the following guide:
   - [PostgreSQL Installation on Ubuntu](/docs/user-guide/install/ubuntu/?ubuntuThingsboardDatabase=postgresql#step-3-configure-thingsboard-database)
   - [PostgreSQL Installation on CentOS/RHEL](/docs/user-guide/install/rhel/?rhelThingsboardDatabase=postgresql#step-3-configure-thingsboard-database)

{% endcapture %}
{% include templates/info-banner.md content=tb_3_0_1_postgreSQL_linux %}

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-3-0-1
thingsboard-download-3-0-1-ubuntu,Ubuntu,shell,resources/3.0.1/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/3.0.1/thingsboard-ubuntu-download.sh
thingsboard-download-3-0-1-centos,CentOS,shell,resources/3.0.1/thingsboard-centos-download.sh,/docs/user-guide/install/resources/3.0.1/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
$ sudo service thingsboard stop
```

{% capture tabspec %}thingsboard-installation-3-0-1
thingsboard-installation-3-0-1-ubuntu,Ubuntu,shell,resources/3.0.1/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/3.0.1/thingsboard-ubuntu-installation.sh
thingsboard-installation-3-0-1-centos,CentOS,shell,resources/3.0.1/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/3.0.1/thingsboard-centos-installation.sh{% endcapture %} 
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
sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=2.5.0-cassandra
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

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.0. In order to upgrade to 3.0.1 you need to [**upgrade to 3.0 first**](/docs/user-guide/install/upgrade-instructions/#windows-30).

<br>

{% include templates/install/tb-30-update.md %}

{% capture tb_3_0_1_postgreSQL_windows %}
**Since ThingsBoard 3.0 only PostgreSQL database is supported for entities data**  
 - If you are using **Cassandra** database for entities data please install PostgreSQL database before proceeding upgrade procedure using the following guide:
   - [PostgreSQL Installation on Windows](/docs/user-guide/install/windows/?ubuntuThingsboardDatabase=postgresql#step-3-configure-thingsboard-database)

{% endcapture %}
{% include templates/info-banner.md content=tb_3_0_1_postgreSQL_windows %}

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-3.0.1.zip](https://github.com/thingsboard/thingsboard/releases/download/v3.0.1/thingsboard-windows-3.0.1.zip).

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
C:\thingsboard>upgrade.bat --fromVersion=2.5.0-cassandra
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

## Upgrading to 3.0 {#upgrading-to-30}


**NOTE**: These upgrade steps are applicable for ThingsBoard version 2.5.6. In order to upgrade to 3.0 you need to [**upgrade to 2.5.6 first**](/docs/user-guide/install/upgrade-instructions/#ubuntucentos-256).

### Ubuntu/CentOS {#ubuntucentos-30}

{% include templates/install/tb-30-update.md %}

<br>

{% capture tb_3_0_postgreSQL_linux %}
**Since ThingsBoard 3.0 only PostgreSQL database is supported for entities data**  
 - If you are using **Cassandra** database for entities data please install PostgreSQL database before proceeding upgrade procedure using the following guide:
   - [PostgreSQL Installation on Ubuntu](/docs/user-guide/install/ubuntu/?ubuntuThingsboardDatabase=postgresql#step-3-configure-thingsboard-database)
   - [PostgreSQL Installation on CentOS/RHEL](/docs/user-guide/install/rhel/?rhelThingsboardDatabase=postgresql#step-3-configure-thingsboard-database)

{% endcapture %}
{% include templates/info-banner.md content=tb_3_0_postgreSQL_linux %}

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-3-0
thingsboard-download-3-0-ubuntu,Ubuntu,shell,resources/3.0.0/thingsboard-ubuntu-download.sh,/docs/user-guide/install/resources/3.0.0/thingsboard-ubuntu-download.sh
thingsboard-download-3-0-centos,CentOS,shell,resources/3.0.0/thingsboard-centos-download.sh,/docs/user-guide/install/resources/3.0.0/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
$ sudo service thingsboard stop
```

{% capture tabspec %}thingsboard-installation-3-0
thingsboard-installation-3-0-ubuntu,Ubuntu,shell,resources/3.0.0/thingsboard-ubuntu-installation.sh,/docs/user-guide/install/resources/3.0.0/thingsboard-ubuntu-installation.sh
thingsboard-installation-3-0-centos,CentOS,shell,resources/3.0.0/thingsboard-centos-installation.sh,/docs/user-guide/install/resources/3.0.0/thingsboard-centos-installation.sh{% endcapture %} 
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
sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=2.5.0-cassandra
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

### Windows {#windows-30}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 2.5.6. In order to upgrade to 3.0 you need to [**upgrade to 2.5.6 first**](/docs/user-guide/install/upgrade-instructions/#windows-256).

{% include templates/install/tb-30-update.md %}

{% capture tb_3_0_postgreSQL_windows %}
**Since ThingsBoard 3.0 only PostgreSQL database is supported for entities data**  
 - If you are using **Cassandra** database for entities data please install PostgreSQL database before proceeding upgrade procedure using the following guide:
   - [PostgreSQL Installation on Windows](/docs/user-guide/install/windows/?ubuntuThingsboardDatabase=postgresql#step-3-configure-thingsboard-database)

{% endcapture %}
{% include templates/info-banner.md content=tb_3_0_postgreSQL_windows %}

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-3.0.zip](https://github.com/thingsboard/thingsboard/releases/download/v3.0/thingsboard-windows-3.0.zip).

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
C:\thingsboard>upgrade.bat --fromVersion=2.5.0-cassandra
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


## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}
