---
layout: docwithnav-trendz
title: Upgrade instructions
description: ThingsBoard Trendz Analytics upgrade instructions

---


<ul id="markdown-toc">
        <li>
          <a href="#upgrading-to-1112" id="markdown-toc-upgrading-to-1112">Upgrading to 1.11.2</a>
          <ul>
              <li>
                  <a href="#ubuntucentos-1112" id="markdown-toc-ubuntucentos-1112">Ubuntu/CentOS</a>        
              </li>
              <li>
                  <a href="#windows-1112" id="markdown-toc-windows-1112">Windows</a>        
              </li>
          </ul>
        </li>
        <li>
          <a href="#upgrading-to-1111" id="markdown-toc-upgrading-to-1111">Upgrading to 1.11.1</a>
          <ul>
              <li>
                  <a href="#ubuntucentos-1111" id="markdown-toc-ubuntucentos-1111">Ubuntu/CentOS</a>        
              </li>
              <li>
                  <a href="#windows-1111" id="markdown-toc-windows-1111">Windows</a>        
              </li>
          </ul>
        </li>
        <li>
          <a href="#upgrading-to-1110" id="markdown-toc-upgrading-to-1110">Upgrading to 1.11.0</a>
          <ul>
              <li>
                  <a href="#ubuntucentos-1110" id="markdown-toc-ubuntucentos-1110">Ubuntu/CentOS</a>        
              </li>
              <li>
                  <a href="#windows-1110" id="markdown-toc-windows-1110">Windows</a>        
              </li>
          </ul>
        </li>
        <li>
          <a href="#upgrading-to-1103-hf7" id="markdown-toc-upgrading-to-1103-hf7">Upgrading to 1.10.3-HF7</a>
          <ul>
              <li>
                  <a href="#ubuntucentos-1103-hf7" id="markdown-toc-ubuntucentos-1103-hf7">Ubuntu/CentOS</a>        
              </li>
              <li>
                  <a href="#windows-1103-hf7" id="markdown-toc-windows-1103-hf7">Windows</a>        
              </li>
          </ul>
        </li>
        <li>
          <a href="#upgrading-to-1103" id="markdown-toc-upgrading-to-1103">Upgrading to 1.10.3</a>
          <ul>
              <li>
                  <a href="#ubuntucentos-1103" id="markdown-toc-ubuntucentos-1103">Ubuntu/CentOS</a>        
              </li>
              <li>
                  <a href="#windows-1103" id="markdown-toc-windows-1103">Windows</a>        
              </li>
          </ul>
        </li>
        <li>
          <a href="#upgrading-to-1102" id="markdown-toc-upgrading-to-1102">Upgrading to 1.10.2</a>
          <ul>
              <li>
                  <a href="#ubuntucentos-1102" id="markdown-toc-ubuntucentos-1102">Ubuntu/CentOS</a>        
              </li>
              <li>
                  <a href="#windows-1102" id="markdown-toc-windows-1102">Windows</a>        
              </li>
          </ul>
        </li>
        <li>
          <a href="#upgrading-to-1101" id="markdown-toc-upgrading-to-1101">Upgrading to 1.10.1</a>
          <ul>
              <li>
                  <a href="#ubuntucentos-1101" id="markdown-toc-ubuntucentos-1101">Ubuntu/CentOS</a>        
              </li>
              <li>
                  <a href="#windows-1101" id="markdown-toc-windows-1101">Windows</a>        
              </li>
          </ul>
        </li>
        <li>
          <a href="#upgrading-to-1100" id="markdown-toc-upgrading-to-1100">Upgrading to 1.10.0</a>
          <ul>
              <li>
                  <a href="#ubuntucentos-1100" id="markdown-toc-ubuntucentos-1100">Ubuntu/CentOS</a>        
              </li>
              <li>
                  <a href="#windows-1100" id="markdown-toc-windows-1100">Windows</a>        
              </li>
          </ul>
        </li>
        <li>
          <a href="#upgrading-to-192-hf3" id="markdown-toc-upgrading-to-192-HF3">Upgrading to 1.9.2-HF3</a>
          <ul>
              <li>
                  <a href="#ubuntucentos-192" id="markdown-toc-ubuntucentos-192">Ubuntu/CentOS</a>        
              </li>
              <li>
                  <a href="#windows-192" id="markdown-toc-windows-192">Windows</a>        
              </li>
          </ul>
        </li> 
        <li>
          <a href="#upgrading-to-182" id="markdown-toc-upgrading-to-182">Upgrading to 1.8.2</a>
          <ul>
              <li>
                  <a href="#ubuntucentos-182" id="markdown-toc-ubuntucentos-182">Ubuntu/CentOS</a>        
              </li>
              <li>
                  <a href="#windows-182" id="markdown-toc-windows-182">Windows</a>        
              </li>
          </ul>
        </li> 
        <li>
          <a href="#upgrading-to-180" id="markdown-toc-upgrading-to-181">Upgrading to 1.8.1</a>
          <ul>
              <li>
                  <a href="#ubuntucentos-180" id="markdown-toc-ubuntucentos-180">Ubuntu/CentOS</a>        
              </li>
              <li>
                  <a href="#windows-180" id="markdown-toc-windows-180">Windows</a>        
              </li>
              <li>
                <a href="#tb_widget_bundle-180" id="markdown-toc-tb_widget_bundle-180">Widget Bundle for ThingsBoard</a>        
              </li>
          </ul>
        </li> 
    <li>
      <a href="#upgrading-to-170" id="markdown-toc-upgrading-to-170">Upgrading to 1.7.0</a>
      <ul>
          <li>
              <a href="#ubuntucentos-170" id="markdown-toc-ubuntucentos-170">Ubuntu/CentOS</a>        
          </li>
          <li>
              <a href="#windows-170" id="markdown-toc-windows-170">Windows</a>        
          </li>
          <li>
            <a href="#tb_widget_bundle-170" id="markdown-toc-tb_widget_bundle-170">Widget Bundle for ThingsBoard</a>        
          </li>
      </ul>
    </li>  
    <li>
      <a href="#upgrading-to-160" id="markdown-toc-upgrading-to-160">Upgrading to 1.6.0</a>
      <ul>
          <li>
              <a href="#ubuntucentos-160" id="markdown-toc-ubuntucentos-160">Ubuntu/CentOS</a>        
          </li>
          <li>
              <a href="#windows-160" id="markdown-toc-windows-160">Windows</a>        
          </li>
      </ul>
  </li>  
    <li>
      <a href="#upgrading-to-151" id="markdown-toc-upgrading-to-151">Upgrading to 1.5.1</a>
      <ul>
          <li>
              <a href="#ubuntucentos-151" id="markdown-toc-ubuntucentos-151">Ubuntu/CentOS</a>        
          </li>
          <li>
              <a href="#windows-151" id="markdown-toc-windows-151">Windows</a>        
          </li>
      </ul>
  </li>  
  <li>
      <a href="#upgrading-to-150" id="markdown-toc-upgrading-to-150">Upgrading to 1.5.0</a>
      <ul>
          <li>
              <a href="#ubuntucentos-150" id="markdown-toc-ubuntucentos-150">Ubuntu/CentOS</a>        
          </li>
          <li>
              <a href="#windows-150" id="markdown-toc-windows-150">Windows</a>        
          </li>
          <li>
            <a href="#tb_widget_bundle-150" id="markdown-toc-tb_widget_bundle-150">Widget Bundle for ThingsBoard</a>        
          </li>
      </ul>
  </li>          
  <li>
    <a href="#upgrading-to-141" id="markdown-toc-upgrading-to-141">Upgrading to 1.4.1</a>
    <ul>
        <li>
            <a href="#ubuntucentos-141" id="markdown-toc-ubuntucentos-141">Ubuntu/CentOS</a>        
        </li>
        <li>
            <a href="#windows-141" id="markdown-toc-windows-141">Windows</a>        
        </li>
    </ul>
  </li>
  <li>
    <a href="#upgrading-to-140" id="markdown-toc-upgrading-to-140">Upgrading to 1.4.0</a>
    <ul>
        <li>
            <a href="#ubuntucentos-140" id="markdown-toc-ubuntucentos-140">Ubuntu/CentOS</a>        
        </li>
        <li>
            <a href="#windows-140" id="markdown-toc-windows-140">Windows</a>        
        </li>
    </ul>
  </li>  
</ul>

## Upgrading to 1.11.2

These steps are applicable for 1.11.1 Trendz Analytics version.

### Ubuntu/CentOS {#ubuntucentos-1112}

#### Trendz Analytics package download

{% capture tabspec %}trendz-download-1-11-2
trendz-download-1-8-0-ubuntu,Ubuntu,shell,resources/1.11.2/trendz-ubuntu-download.sh,/docs/user-guide/install/resources/1.11.2/trendz-ubuntu-download.sh
trendz-download-1-8-0-centos,CentOS,shell,resources/1.11.2/trendz-centos-download.sh,/docs/user-guide/install/resources/1.11.2/trendz-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### Trendz Analytics service upgrade

* Stop Trendz Analytics service if it is running.

```bash
sudo service trendz stop
```
{: .copy-code}

* Install latest Trendz Analytics service

{% capture tabspec %}trendz-installation-1-11-2
trendz-installation-1-8-0-ubuntu,Ubuntu,shell,resources/1.11.2/trendz-ubuntu-installation.sh,/docs/user-guide/install/resources/1.11.2/trendz-ubuntu-installation.sh
trendz-installation-1-8-0-centos,CentOS,shell,resources/1.11.2/trendz-centos-installation.sh,/docs/user-guide/install/resources/1.11.2/trendz-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

**NOTE:** Package installer will ask you to merge your trendz configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.

Execute regular upgrade script:

```bash
sudo /usr/share/trendz/bin/install/upgrade.sh --fromVersion=1.11.1
```   

#### Start the service

```bash
sudo service trendz start
```
{: .copy-code}

### Windows {#windows-1112}

#### Trendz Analytics package download

Download ThingsBoard Trendz Analytics installation package for Windows: [trendz-windows-1.11.2.zip](https://dist.thingsboard.io/trendz-windows-1.11.2.zip).

#### Trendz Analytics service upgrade

* Stop Trendz service if it is running.

```text
net stop trendz
```
{: .copy-code}

* Make a backup of previous Trendz Analytics configuration located in \<Trendz install dir\>\conf (for ex. C:\trendz\conf).
* Remove ThingsBoard install dir.
* Unzip installation archive to ThingsBoard install dir.
* Compare your old Trendz configuration files (from the backup you made in the first step) with new ones.

* Finally, run **upgrade.bat** script to upgrade Trendz to the new version.

**NOTE** Scripts listed above should be executed using Administrator Role.

```text
C:\trendz>upgrade.bat --fromVersion=1.11.1
```

#### Start the service

```text
net start trendz
```
{: .copy-code}

## Upgrading to 1.11.1

These steps are applicable for 1.11.0 Trendz Analytics version.

### Ubuntu/CentOS {#ubuntucentos-1111}

#### Trendz Analytics package download

{% capture tabspec %}trendz-download-1-11-1
trendz-download-1-8-0-ubuntu,Ubuntu,shell,resources/1.11.1/trendz-ubuntu-download.sh,/docs/user-guide/install/resources/1.11.1/trendz-ubuntu-download.sh
trendz-download-1-8-0-centos,CentOS,shell,resources/1.11.1/trendz-centos-download.sh,/docs/user-guide/install/resources/1.11.1/trendz-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### Trendz Analytics service upgrade

* Stop Trendz Analytics service if it is running.

```bash
sudo service trendz stop
```
{: .copy-code}

* Install latest Trendz Analytics service

{% capture tabspec %}trendz-installation-1-11-1
trendz-installation-1-8-0-ubuntu,Ubuntu,shell,resources/1.11.1/trendz-ubuntu-installation.sh,/docs/user-guide/install/resources/1.11.1/trendz-ubuntu-installation.sh
trendz-installation-1-8-0-centos,CentOS,shell,resources/1.11.1/trendz-centos-installation.sh,/docs/user-guide/install/resources/1.11.1/trendz-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

**NOTE:** Package installer will ask you to merge your trendz configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.

Execute regular upgrade script:

```bash
sudo /usr/share/trendz/bin/install/upgrade.sh --fromVersion=1.11.0
```   

#### Start the service

```bash
sudo service trendz start
```
{: .copy-code}

### Windows {#windows-1111}

#### Trendz Analytics package download

Download ThingsBoard Trendz Analytics installation package for Windows: [trendz-windows-1.11.1.zip](https://dist.thingsboard.io/trendz-windows-1.11.1.zip).

#### Trendz Analytics service upgrade

* Stop Trendz service if it is running.

```text
net stop trendz
```
{: .copy-code}

* Make a backup of previous Trendz Analytics configuration located in \<Trendz install dir\>\conf (for ex. C:\trendz\conf).
* Remove ThingsBoard install dir.
* Unzip installation archive to ThingsBoard install dir.
* Compare your old Trendz configuration files (from the backup you made in the first step) with new ones.

* Finally, run **upgrade.bat** script to upgrade Trendz to the new version.

**NOTE** Scripts listed above should be executed using Administrator Role.

```text
C:\trendz>upgrade.bat --fromVersion=1.11.0
```

#### Start the service

```text
net start trendz
```
{: .copy-code}

## Upgrading to 1.11.0

These steps are applicable for 1.10.3 Trendz Analytics version.

{% capture tb_3_7_0_upgrade_note %}
**Important note before upgrading to Trendz 1.11.0**

Trendz backend was migrated to Java 17. Install JDK 17 and ensure that system's default Java version is set to 17.

Please refer to Step 1 of the corresponding installation guide for detailed instructions:

[**Ubuntu**](/docs/trendz/install/ubuntu/#step-1-install-java-17-openjdk)

[**CentOS/RHEL**](/docs/trendz/install/rhel/#step-1-install-java-17-openjdk)

{% endcapture %}
{% include templates/warn-banner.md content=tb_3_7_0_upgrade_note %}


### Ubuntu/CentOS {#ubuntucentos-1110}

#### Trendz Analytics package download

{% capture tabspec %}trendz-download-1-11-0
trendz-download-1-8-0-ubuntu,Ubuntu,shell,resources/1.11.0/trendz-ubuntu-download.sh,/docs/user-guide/install/resources/1.11.0/trendz-ubuntu-download.sh
trendz-download-1-8-0-centos,CentOS,shell,resources/1.11.0/trendz-centos-download.sh,/docs/user-guide/install/resources/1.11.0/trendz-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### Trendz Analytics service upgrade

* Stop Trendz Analytics service if it is running.

```bash
sudo service trendz stop
```
{: .copy-code}

* Install latest Trendz Analytics service

{% capture tabspec %}trendz-installation-1-11-0
trendz-installation-1-8-0-ubuntu,Ubuntu,shell,resources/1.11.0/trendz-ubuntu-installation.sh,/docs/user-guide/install/resources/1.11.0/trendz-ubuntu-installation.sh
trendz-installation-1-8-0-centos,CentOS,shell,resources/1.11.0/trendz-centos-installation.sh,/docs/user-guide/install/resources/1.11.0/trendz-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

**NOTE:** Package installer will ask you to merge your trendz configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.

Execute regular upgrade script:

```bash
sudo /usr/share/trendz/bin/install/upgrade.sh --fromVersion=1.10.3
```   

#### Start the service

```bash
sudo service trendz start
```
{: .copy-code}

### Windows {#windows-1110}

{% capture tb_3_7_0_upgrade_note %}
**Important note before upgrading to Trendz 1.11.0**

Trendz backend was migrated to Java 17. Install JDK 17 and ensure that system's default Java version is set to 17.

Please refer to [**Step 1 of the installation guide**](/docs/trendz/install/windows/#step-1-install-java-17-openjdk) for detailed instructions.

{% endcapture %}
{% include templates/warn-banner.md content=tb_3_7_0_upgrade_note %}

#### Trendz Analytics package download

Download ThingsBoard Trendz Analytics installation package for Windows: [trendz-windows-1.11.0.zip](https://dist.thingsboard.io/trendz-windows-1.11.0.zip).

#### Trendz Analytics service upgrade

* Stop Trendz service if it is running.

```text
net stop trendz
```
{: .copy-code}

* Make a backup of previous Trendz Analytics configuration located in \<Trendz install dir\>\conf (for ex. C:\trendz\conf).
* Remove ThingsBoard install dir.
* Unzip installation archive to ThingsBoard install dir.
* Compare your old Trendz configuration files (from the backup you made in the first step) with new ones.

* Finally, run **upgrade.bat** script to upgrade Trendz to the new version.

**NOTE** Scripts listed above should be executed using Administrator Role.

```text
C:\trendz>upgrade.bat --fromVersion=1.10.3
```

#### Start the service

```text
net start trendz
```
{: .copy-code}

## Upgrading to 1.10.3-HF7

These steps are applicable for 1.10.3 Trendz Analytics version.

### Ubuntu/CentOS {#ubuntucentos-1103-hf7}

#### Trendz Analytics package download

{% capture tabspec %}trendz-download-1-10-3-hf7
trendz-download-1-8-0-ubuntu,Ubuntu,shell,resources/1.10.3-HF7/trendz-ubuntu-download.sh,/docs/user-guide/install/resources/1.10.3-HF7/trendz-ubuntu-download.sh
trendz-download-1-8-0-centos,CentOS,shell,resources/1.10.3-HF7/trendz-centos-download.sh,/docs/user-guide/install/resources/1.10.3-HF7/trendz-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### Trendz Analytics service upgrade

* Stop Trendz Analytics service if it is running.

```bash
sudo service trendz stop
```
{: .copy-code}

* Install latest Trendz Analytics service

{% capture tabspec %}trendz-installation-1-10-3-hf7
trendz-installation-1-8-0-ubuntu,Ubuntu,shell,resources/1.10.3-HF7/trendz-ubuntu-installation.sh,/docs/user-guide/install/resources/1.10.3/trendz-ubuntu-installation.sh
trendz-installation-1-8-0-centos,CentOS,shell,resources/1.10.3-HF7/trendz-centos-installation.sh,/docs/user-guide/install/resources/1.10.3/trendz-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

**NOTE:** Package installer will ask you to merge your trendz configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.

Execute regular upgrade script:

```bash
sudo /usr/share/trendz/bin/install/upgrade.sh --fromVersion=1.10.3
```   

#### Start the service

```bash
sudo service trendz start
```
{: .copy-code}

### Windows {#windows-1103-hf7}

#### Trendz Analytics package download

Download ThingsBoard Trendz Analytics installation package for Windows: [trendz-windows-1.10.3-HF7.zip](https://dist.thingsboard.io/trendz-windows-1.10.3-HF7.zip).

#### Trendz Analytics service upgrade

* Stop Trendz service if it is running.

```text
net stop trendz
```
{: .copy-code}

* Make a backup of previous Trendz Analytics configuration located in \<Trendz install dir\>\conf (for ex. C:\trendz\conf).
* Remove ThingsBoard install dir.
* Unzip installation archive to ThingsBoard install dir.
* Compare your old Trendz configuration files (from the backup you made in the first step) with new ones.

* Finally, run **upgrade.bat** script to upgrade Trendz to the new version.

**NOTE** Scripts listed above should be executed using Administrator Role.

```text
C:\trendz>upgrade.bat --fromVersion=1.10.3
```

#### Start the service

```text
net start trendz
```
{: .copy-code}

## Upgrading to 1.10.3

These steps are applicable for 1.10.2 Trendz Analytics version.

### Ubuntu/CentOS {#ubuntucentos-1103}

#### Trendz Analytics package download

{% capture tabspec %}trendz-download-1-10-3
trendz-download-1-8-0-ubuntu,Ubuntu,shell,resources/1.10.3/trendz-ubuntu-download.sh,/docs/user-guide/install/resources/1.10.3/trendz-ubuntu-download.sh
trendz-download-1-8-0-centos,CentOS,shell,resources/1.10.3/trendz-centos-download.sh,/docs/user-guide/install/resources/1.10.3/trendz-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### Trendz Analytics service upgrade

* Stop Trendz Analytics service if it is running.

```bash
sudo service trendz stop
```
{: .copy-code}

* Install latest Trendz Analytics service

{% capture tabspec %}trendz-installation-1-10-2
trendz-installation-1-8-0-ubuntu,Ubuntu,shell,resources/1.10.3/trendz-ubuntu-installation.sh,/docs/user-guide/install/resources/1.10.3/trendz-ubuntu-installation.sh
trendz-installation-1-8-0-centos,CentOS,shell,resources/1.10.3/trendz-centos-installation.sh,/docs/user-guide/install/resources/1.10.3/trendz-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

**NOTE:** Package installer will ask you to merge your trendz configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.

Execute regular upgrade script:

```bash
sudo /usr/share/trendz/bin/install/upgrade.sh --fromVersion=1.10.2
```   

#### Start the service

```bash
sudo service trendz start
```
{: .copy-code}

### Windows {#windows-1103}

#### Trendz Analytics package download

Download ThingsBoard Trendz Analytics installation package for Windows: [trendz-windows-1.10.3.zip](https://dist.thingsboard.io/trendz-windows-1.10.3.zip).

#### Trendz Analytics service upgrade

* Stop Trendz service if it is running.

```text
net stop trendz
```
{: .copy-code}

* Make a backup of previous Trendz Analytics configuration located in \<Trendz install dir\>\conf (for ex. C:\trendz\conf).
* Remove ThingsBoard install dir.
* Unzip installation archive to ThingsBoard install dir.
* Compare your old Trendz configuration files (from the backup you made in the first step) with new ones.

* Finally, run **upgrade.bat** script to upgrade Trendz to the new version.

**NOTE** Scripts listed above should be executed using Administrator Role.

```text
C:\trendz>upgrade.bat --fromVersion=1.10.2
```

#### Start the service

```text
net start trendz
```
{: .copy-code}

## Upgrading to 1.10.2

In Trendz 1.10.2 we add support of Python script execution for calculated fields and custom prediction models. Python script support is an experimental feature that was included into the current release. 
For usage in production installations we recommend to start Python executor as a [separate docker container](/docs/trendz/install/docker/#standalone-python-executor-service). However, it is also possible to execute Python scripts in monolithic Trendz installations. In that case this feature requires Python 3.8 to be [installed on the server same server with Trendz](/docs/trendz/install/ubuntu/#step-8-install-trendz-python-executor). 

Please follow the steps below to upgrade your Trendz Analytics instance to 1.10.2 version. These steps are applicable for 1.10.1 Trendz Analytics version.

### Ubuntu/CentOS {#ubuntucentos-1102}

#### Trendz Analytics package download

{% capture tabspec %}trendz-download-1-10-2
trendz-download-1-8-0-ubuntu,Ubuntu,shell,resources/1.10.2/trendz-ubuntu-download.sh,/docs/user-guide/install/resources/1.10.2/trendz-ubuntu-download.sh
trendz-download-1-8-0-centos,CentOS,shell,resources/1.10.2/trendz-centos-download.sh,/docs/user-guide/install/resources/1.10.2/trendz-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### Trendz Analytics service upgrade

* Stop Trendz Analytics service if it is running.

```bash
sudo service trendz stop
```
{: .copy-code}

* Install latest Trendz Analytics service

{% capture tabspec %}trendz-installation-1-10-2
trendz-installation-1-8-0-ubuntu,Ubuntu,shell,resources/1.10.2/trendz-ubuntu-installation.sh,/docs/user-guide/install/resources/1.10.2/trendz-ubuntu-installation.sh
trendz-installation-1-8-0-centos,CentOS,shell,resources/1.10.2/trendz-centos-installation.sh,/docs/user-guide/install/resources/1.10.2/trendz-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

**NOTE:** Package installer will ask you to merge your trendz configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.

Execute regular upgrade script:

```bash
sudo /usr/share/trendz/bin/install/upgrade.sh --fromVersion=1.10.1
```   

#### Start the service

```bash
sudo service trendz start
```
{: .copy-code}

### Windows {#windows-1102}

#### Trendz Analytics package download

Download ThingsBoard Trendz Analytics installation package for Windows: [trendz-windows-1.10.2.zip](https://dist.thingsboard.io/trendz-windows-1.10.2.zip).

#### Trendz Analytics service upgrade

* Stop Trendz service if it is running.

```text
net stop trendz
```
{: .copy-code}

* Make a backup of previous Trendz Analytics configuration located in \<Trendz install dir\>\conf (for ex. C:\trendz\conf).
* Remove ThingsBoard install dir.
* Unzip installation archive to ThingsBoard install dir.
* Compare your old Trendz configuration files (from the backup you made in the first step) with new ones.

* Finally, run **upgrade.bat** script to upgrade Trendz to the new version.

**NOTE** Scripts listed above should be executed using Administrator Role.

```text
C:\trendz>upgrade.bat --fromVersion=1.10.1
```

#### Start the service

```text
net start trendz
```
{: .copy-code}

## Upgrading to 1.10.1

These steps are applicable for 1.10.0 Trendz Analytics version.

### Ubuntu/CentOS {#ubuntucentos-1101}

#### Trendz Analytics package download

{% capture tabspec %}trendz-download-1-10-1
trendz-download-1-8-0-ubuntu,Ubuntu,shell,resources/1.10.1/trendz-ubuntu-download.sh,/docs/user-guide/install/resources/1.10.1/trendz-ubuntu-download.sh
trendz-download-1-8-0-centos,CentOS,shell,resources/1.10.1/trendz-centos-download.sh,/docs/user-guide/install/resources/1.10.1/trendz-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### Trendz Analytics service upgrade

* Stop Trendz Analytics service if it is running.

```bash
sudo service trendz stop
```
{: .copy-code}

* Install latest Trendz Analytics service

{% capture tabspec %}trendz-installation-1-10-1
trendz-installation-1-8-0-ubuntu,Ubuntu,shell,resources/1.10.1/trendz-ubuntu-installation.sh,/docs/user-guide/install/resources/1.10.1/trendz-ubuntu-installation.sh
trendz-installation-1-8-0-centos,CentOS,shell,resources/1.10.1/trendz-centos-installation.sh,/docs/user-guide/install/resources/1.10.1/trendz-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

**NOTE:** Package installer will ask you to merge your trendz configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.

Execute regular upgrade script:

```bash
sudo /usr/share/trendz/bin/install/upgrade.sh --fromVersion=1.10.0
```   

#### Start the service

```bash
sudo service trendz start
```
{: .copy-code}

### Windows {#windows-1101}

#### Trendz Analytics package download

Download ThingsBoard Trendz Analytics installation package for Windows: [trendz-windows-1.10.1.zip](https://dist.thingsboard.io/trendz-windows-1.10.1.zip).

#### Trendz Analytics service upgrade

* Stop Trendz service if it is running.

```text
net stop trendz
```
{: .copy-code}

* Make a backup of previous Trendz Analytics configuration located in \<Trendz install dir\>\conf (for ex. C:\trendz\conf).
* Remove ThingsBoard install dir.
* Unzip installation archive to ThingsBoard install dir.
* Compare your old Trendz configuration files (from the backup you made in the first step) with new ones.

* Finally, run **upgrade.bat** script to upgrade Trendz to the new version.

**NOTE** Scripts listed above should be executed using Administrator Role.

```text
C:\trendz>upgrade.bat --fromVersion=1.10.0
```

#### Start the service

```text
net start trendz
```
{: .copy-code}

#### Trendz Bundle update
If you are using ThingsBoard v3.5.0 or higher, you alos need to update Trendz bundle in ThingsBoard to use correct Trendz library version in ThingsBoard. 
Detailed instructions how to do that you can find in [this article](/docs/trendz/trendz-bundle/#thingsboard-35-blank-widget-with-error)

## Upgrading to 1.10.0

These steps are applicable for 1.9.2 Trendz Analytics version.

### Ubuntu/CentOS {#ubuntucentos-1100}

#### Trendz Analytics package download

{% capture tabspec %}trendz-download-1-10-0
trendz-download-1-8-0-ubuntu,Ubuntu,shell,resources/1.10.0/trendz-ubuntu-download.sh,/docs/user-guide/install/resources/1.10.0/trendz-ubuntu-download.sh
trendz-download-1-8-0-centos,CentOS,shell,resources/1.10.0/trendz-centos-download.sh,/docs/user-guide/install/resources/1.10.0/trendz-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### Trendz Analytics service upgrade

* Stop Trendz Analytics service if it is running.

```bash
sudo service trendz stop
```
{: .copy-code}

* Install latest Trendz Analytics service

{% capture tabspec %}trendz-installation-1-9-2
trendz-installation-1-8-0-ubuntu,Ubuntu,shell,resources/1.10.0/trendz-ubuntu-installation.sh,/docs/user-guide/install/resources/1.10.0/trendz-ubuntu-installation.sh
trendz-installation-1-8-0-centos,CentOS,shell,resources/1.10.0/trendz-centos-installation.sh,/docs/user-guide/install/resources/1.10.0/trendz-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

**NOTE:** Package installer will ask you to merge your trendz configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.

Execute regular upgrade script:

```bash
sudo /usr/share/trendz/bin/install/upgrade.sh --fromVersion=1.9.2
```   

#### Start the service

```bash
sudo service trendz start
```
{: .copy-code}

### Windows {#windows-1100}

#### Trendz Analytics package download

Download ThingsBoard Trendz Analytics installation package for Windows: [trendz-windows-1.10.0-HF1.zip](https://dist.thingsboard.io/trendz-windows-1.10.0-HF1.zip).

#### Trendz Analytics service upgrade

* Stop Trendz service if it is running.

```text
net stop trendz
```
{: .copy-code}

* Make a backup of previous Trendz Analytics configuration located in \<Trendz install dir\>\conf (for ex. C:\trendz\conf).
* Remove ThingsBoard install dir.
* Unzip installation archive to ThingsBoard install dir.
* Compare your old Trendz configuration files (from the backup you made in the first step) with new ones.

* Finally, run **upgrade.bat** script to upgrade Trendz to the new version.

**NOTE** Scripts listed above should be executed using Administrator Role.

```text
C:\trendz>upgrade.bat --fromVersion=1.9.2
```

#### Start the service

```text
net start trendz
```
{: .copy-code}


## Upgrading to 1.9.2-HF3

These steps are applicable for 1.8.0, 1.8.1, 1.9.0, 1.9.1, 1.9.2 Trendz Analytics version.

### Ubuntu/CentOS {#ubuntucentos-192}

#### Trendz Analytics package download

{% capture tabspec %}trendz-download-1-9-2
trendz-download-1-8-0-ubuntu,Ubuntu,shell,resources/1.9.2/trendz-ubuntu-download.sh,/docs/user-guide/install/resources/1.9.2/trendz-ubuntu-download.sh
trendz-download-1-8-0-centos,CentOS,shell,resources/1.9.2/trendz-centos-download.sh,/docs/user-guide/install/resources/1.9.2/trendz-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### Trendz Analytics service upgrade

* Stop Trendz Analytics service if it is running.

```bash
sudo service trendz stop
```
{: .copy-code}

* Install latest Trendz Analytics service 

{% capture tabspec %}trendz-installation-1-9-2
trendz-installation-1-8-0-ubuntu,Ubuntu,shell,resources/1.9.2/trendz-ubuntu-installation.sh,/docs/user-guide/install/resources/1.9.2/trendz-ubuntu-installation.sh
trendz-installation-1-8-0-centos,CentOS,shell,resources/1.9.2/trendz-centos-installation.sh,/docs/user-guide/install/resources/1.9.2/trendz-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

**NOTE:** Package installer will ask you to merge your trendz configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.  
  
Execute regular upgrade script:

```bash
sudo /usr/share/trendz/bin/install/upgrade.sh --fromVersion=1.8.0
```   
 
#### Start the service

```bash
sudo service trendz start
```
{: .copy-code}

### Windows {#windows-192}

#### Trendz Analytics package download

Download ThingsBoard Trendz Analytics installation package for Windows: [trendz-windows-1.9.2.zip](https://dist.thingsboard.io/trendz-windows-1.9.2.zip).

#### Trendz Analytics service upgrade

* Stop Trendz service if it is running.
 
```text
net stop trendz
```
{: .copy-code}

* Make a backup of previous Trendz Analytics configuration located in \<Trendz install dir\>\conf (for ex. C:\trendz\conf).
* Remove ThingsBoard install dir.
* Unzip installation archive to ThingsBoard install dir.
* Compare your old Trendz configuration files (from the backup you made in the first step) with new ones.

* Finally, run **upgrade.bat** script to upgrade Trendz to the new version.

**NOTE** Scripts listed above should be executed using Administrator Role.

```text
C:\trendz>upgrade.bat --fromVersion=1.8.0
```

#### Start the service

```text
net start trendz
```
{: .copy-code}


## Upgrading to 1.8.2

These steps are applicable for 1.8.0 and 1.8.1 Trendz Analytics version.

### Ubuntu/CentOS {#ubuntucentos-182}

#### Trendz Analytics package download

{% capture tabspec %}trendz-download-1-8-2
trendz-download-1-8-0-ubuntu,Ubuntu,shell,resources/1.8.0/trendz-ubuntu-download.sh,/docs/user-guide/install/resources/1.8.0/trendz-ubuntu-download.sh
trendz-download-1-8-0-centos,CentOS,shell,resources/1.8.0/trendz-centos-download.sh,/docs/user-guide/install/resources/1.8.0/trendz-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### Trendz Analytics service upgrade

* Stop Trendz Analytics service if it is running.

```bash
sudo service trendz stop
```
{: .copy-code}

* Install latest Trendz Analytics service 

{% capture tabspec %}trendz-installation-1-8-0
trendz-installation-1-8-0-ubuntu,Ubuntu,shell,resources/1.8.0/trendz-ubuntu-installation.sh,/docs/user-guide/install/resources/1.8.0/trendz-ubuntu-installation.sh
trendz-installation-1-8-0-centos,CentOS,shell,resources/1.8.0/trendz-centos-installation.sh,/docs/user-guide/install/resources/1.8.0/trendz-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

**NOTE:** Package installer will ask you to merge your trendz configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.  
  
#### Start the service

```bash
sudo service trendz start
```
{: .copy-code}

### Windows {#windows-182}

#### Trendz Analytics package download

Download ThingsBoard Trendz Analytics installation package for Windows: [trendz-windows-1.8.2.zip](https://dist.thingsboard.io/trendz-windows-1.8.2.zip).

#### Trendz Analytics service upgrade

* Stop Trendz service if it is running.
 
```text
net stop trendz
```
{: .copy-code}

* Make a backup of previous Trendz Analytics configuration located in \<Trendz install dir\>\conf (for ex. C:\trendz\conf).
* Remove ThingsBoard install dir.
* Unzip installation archive to ThingsBoard install dir.
* Compare your old Trendz configuration files (from the backup you made in the first step) with new ones.

#### Start the service

```text
net start trendz
```
{: .copy-code}

## Upgrading to 1.8.1

These steps are applicable for 1.7.0 Trendz Analytics version.

### Ubuntu/CentOS {#ubuntucentos-180}

#### Trendz Analytics package download

{% capture tabspec %}trendz-download-1-8-0
trendz-download-1-8-0-ubuntu,Ubuntu,shell,resources/1.8.0/trendz-ubuntu-download.sh,/docs/user-guide/install/resources/1.8.0/trendz-ubuntu-download.sh
trendz-download-1-8-0-centos,CentOS,shell,resources/1.8.0/trendz-centos-download.sh,/docs/user-guide/install/resources/1.8.0/trendz-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### Trendz Analytics service upgrade

* Stop Trendz Analytics service if it is running.

```bash
sudo service trendz stop
```
{: .copy-code}

* Install latest Trendz Analytics service 

{% capture tabspec %}trendz-installation-1-8-0
trendz-installation-1-8-0-ubuntu,Ubuntu,shell,resources/1.8.0/trendz-ubuntu-installation.sh,/docs/user-guide/install/resources/1.8.0/trendz-ubuntu-installation.sh
trendz-installation-1-8-0-centos,CentOS,shell,resources/1.8.0/trendz-centos-installation.sh,/docs/user-guide/install/resources/1.8.0/trendz-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

**NOTE:** Package installer will ask you to merge your trendz configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.  
 
Execute regular upgrade script:

```bash
sudo /usr/share/trendz/bin/install/upgrade.sh --fromVersion=1.7.0
``` 
{: .copy-code}
 
#### Start the service

```bash
sudo service trendz start
```
{: .copy-code}

### Windows {#windows-180}

#### Trendz Analytics package download

Download ThingsBoard Trendz Analytics installation package for Windows: [trendz-windows-1.8.0.zip](https://dist.thingsboard.io/trendz-windows-1.8.0.zip).

#### Trendz Analytics service upgrade

* Stop Trendz service if it is running.
 
```text
net stop trendz
```
{: .copy-code}

* Make a backup of previous Trendz Analytics configuration located in \<Trendz install dir\>\conf (for ex. C:\trendz\conf).
* Remove ThingsBoard install dir.
* Unzip installation archive to ThingsBoard install dir.
* Compare your old Trendz configuration files (from the backup you made in the first step) with new ones.

* Finally, run **upgrade.bat** script to upgrade Trendz to the new version.

**NOTE** Scripts listed above should be executed using Administrator Role.

```text
C:\trendz>upgrade.bat --fromVersion=1.7.0
```

#### Start the service

```text
net start trendz
```
{: .copy-code}

## Upgrading to 1.7.0

**Note** These steps are applicable for 1.5.0, 1.5.1 and 1.6.0 Trendz Analytics version.

### Ubuntu/CentOS {#ubuntucentos-170}

{% capture tb_3_0_1_postgreSQL_linux %}
**Since Trendz Analytics 1.7.0 only PostgreSQL database is supported**  
 - During upgrade all data would be migrated form in-memory database into PostgreSQL
 - Please install PostgreSQL database before proceeding upgrade procedure using the following guide:
   - [PostgreSQL Installation on Ubuntu](/docs/trendz/install/ubuntu/#step-5-configure-trendz-database)
   - [PostgreSQL Installation on CentOS/RHEL](/docs/trendz/install/rhel/#step-5-configure-trendz-database)

{% endcapture %}
{% include templates/info-banner.md content=tb_3_0_1_postgreSQL_linux %}

#### Trendz Analytics package download

{% capture tabspec %}trendz-download-1-7-0
trendz-download-1-7-0-ubuntu,Ubuntu,shell,resources/1.7.0/trendz-ubuntu-download.sh,/docs/user-guide/install/resources/1.7.0/trendz-ubuntu-download.sh
trendz-download-1-7-0-centos,CentOS,shell,resources/1.7.0/trendz-centos-download.sh,/docs/user-guide/install/resources/1.7.0/trendz-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### Backup Trendz Analytics configuration files and database

For creating backup of Trendz configuration files and data storage, execute following commands:

```bash
cd /usr/share/trendz
sudo tar -zcvf trndz_data_old.tar.gz ./data
sudo tar -zcvf trndz_conf_old.tar.gz ./conf
```
{: .copy-code}

#### Trendz Analytics service upgrade

* Stop Trendz Analytics service if it is running.

```bash
sudo service trendz stop
```
{: .copy-code}

* Install latest Trendz Analytics service 

{% capture tabspec %}trendz-installation-1-7-0
trendz-installation-1-7-0-ubuntu,Ubuntu,shell,resources/1.7.0/trendz-ubuntu-installation.sh,/docs/user-guide/install/resources/1.7.0/trendz-ubuntu-installation.sh
trendz-installation-1-7-0-centos,CentOS,shell,resources/1.7.0/trendz-centos-installation.sh,/docs/user-guide/install/resources/1.7.0/trendz-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

**NOTE:** Package installer will ask you to merge your trendz configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.  
Please make sure that you set **SPRING_DATASOURCE_URL**, **SPRING_DATASOURCE_USERNAME** and **SPRING_DATASOURCE_PASSWORD** parameters value (in the file **/etc/trendz/conf/trendz.conf**) 
 and application can connect to new PostgreSQL database: 
 
```bash
# DB Configuration 
export SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/trendz
export SPRING_DATASOURCE_USERNAME=postgres
export SPRING_DATASOURCE_PASSWORD=PUT_YOUR_POSTGRESQL_PASSWORD_HERE
```
{: .copy-code}

Execute regular upgrade script:

```bash
sudo /usr/share/trendz/bin/install/upgrade.sh --fromVersion=1.6.0
``` 
{: .copy-code}
 
#### Start the service

```bash
sudo service trendz start
```
{: .copy-code}

### Windows {#windows-170}

{% capture tb_3_0_1_postgreSQL_linux %}
**Since Trendz Analytics 1.7.0 only PostgreSQL database is supported**  
 - During upgrade all data would be migrated form in-memory database into PostgreSQL
 - Please install PostgreSQL database before proceeding upgrade procedure using the following guide:
   - [PostgreSQL Installation on Windows](/docs/trendz/install/windows/#step-5-configure-trendz-database)

{% endcapture %}
{% include templates/info-banner.md content=tb_3_0_1_postgreSQL_linux %}


#### Trendz Analytics package download

Download ThingsBoard Trendz Analytics installation package for Windows: [trendz-windows-1.7.0.zip](https://dist.thingsboard.io/trendz-windows-1.7.0.zip).

#### Trendz Analytics service upgrade

* Stop Trendz service if it is running.
 
```text
net stop trendz
```
{: .copy-code}

* Make a backup of previous Trendz Analytics configuration located in \<Trendz install dir\>\conf (for ex. C:\trendz\conf).
* Make a backup of previous Trendz Analytics data storage located in \<Trendz install dir\>\data (for ex. C:\trendz\data).
* Remove ThingsBoard install dir.
* Unzip installation archive to ThingsBoard install dir.
* Compare your old Trendz configuration files (from the backup you made in the first step) with new ones.

Please make sure that you set **SPRING_DATASOURCE_URL**, **SPRING_DATASOURCE_USERNAME** and **SPRING_DATASOURCE_PASSWORD** parameters value
 (in the file **C:\Program Files (x86)\trendz\conf\trendz.yml**) and application can connect to new PostgreSQL database:

```yml
# SQL DAO Configuration
spring:
  data:
    jpa:
      repositories:
        enabled: "true"
  jpa:
    open-in-view: "false"
    hibernate:
      ddl-auto: "none"
  datasource:
    driverClassName: "${SPRING_DRIVER_CLASS_NAME:org.postgresql.Driver}"
    url: "${SPRING_DATASOURCE_URL:jdbc:postgresql://localhost:5432/trendz}"
    username: "${SPRING_DATASOURCE_USERNAME:postgres}"
    password: "${SPRING_DATASOURCE_PASSWORD:YOUR_POSTGRES_PASSWORD_HERE}"
    hikari:
      maximumPoolSize: "${SPRING_DATASOURCE_MAXIMUM_POOL_SIZE:5}"
``` 
{: .copy-code} 

* Finally, run **upgrade.bat** script to upgrade Trendz to the new version.

**NOTE** Scripts listed above should be executed using Administrator Role.

```text
C:\trendz>upgrade.bat --fromVersion=1.6.0
```

#### Start the service

```text
net start trendz
```
{: .copy-code}

### Widget Bundle for ThingsBoard {#tb_widget_bundle-170}

In Trendz version 1.7.0 Widget Bundle for ThingsBoard was changed. You have to upgrade widget bundle to the latest version to receive latest
features introduced in version 1.7.0

#### Download new Widget Bundle

* For ThingsBoard version **3.x** please use 
this <a href="https://dist.thingsboard.io/trendz_bundle_tb3.json" download target="_blank">trendz_bundle_tb3</a>


* For ThingsBoard version **2.x** please use 
this <a href="https://dist.thingsboard.io/trendz_bundle_tb2.json" download target="_blank">trendz_bundle_tb2</a>

#### Replace old Bundle with the new one

* Login to ThingsBoard as tenant administrator
* Open **Widgets Library** section
* Delete old **Trendz Bundle**
* Import new Trendz Bundle from previous step

Widgets that already added to ThingsBoard dashboard are not affected and should not be changed.

## Upgrading to 1.6.0

These steps are applicable for 1.5.0 and 1.5.1 Trendz Analytics version.

### Ubuntu/CentOS {#ubuntucentos-160}

#### Trendz Analytics package download

{% capture tabspec %}trendz-download-1-6-0
trendz-download-1-6-0-ubuntu,Ubuntu,shell,resources/1.6.0/trendz-ubuntu-download.sh,/docs/user-guide/install/resources/1.6.0/trendz-ubuntu-download.sh
trendz-download-1-6-0-centos,CentOS,shell,resources/1.6.0/trendz-centos-download.sh,/docs/user-guide/install/resources/1.6.0/trendz-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### Trendz Analytics service upgrade

* Stop Trendz Analytics service if it is running.

```bash
sudo service trendz stop
```
{: .copy-code}

* Install latest Trendz Analytics service 

{% capture tabspec %}trendz-installation-1-6-0
trendz-installation-1-6-0-ubuntu,Ubuntu,shell,resources/1.6.0/trendz-ubuntu-installation.sh,/docs/user-guide/install/resources/1.6.0/trendz-ubuntu-installation.sh
trendz-installation-1-6-0-centos,CentOS,shell,resources/1.6.0/trendz-centos-installation.sh,/docs/user-guide/install/resources/1.6.0/trendz-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

**NOTE:** Package installer will ask you to merge your trendz configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.  
 
#### Start the service

```bash
sudo service trendz start
```
{: .copy-code}

### Windows {#windows-160}

#### Trendz Analytics package download

Download ThingsBoard Trendz Analytics installation package for Windows: [trendz-windows-1.6.0.zip](https://dist.thingsboard.io/trendz-windows-1.6.0.zip).

#### Trendz Analytics service upgrade

* Stop Trendz service if it is running.
 
```text
net stop trendz
```
{: .copy-code}

* Make a backup of previous Trendz Analytics configuration located in \<Trendz install dir\>\conf (for ex. C:\trendz\conf).
* Remove ThingsBoard install dir.
* Unzip installation archive to ThingsBoard install dir.
* Compare your old Trendz configuration files (from the backup you made in the first step) with new ones.


#### Start the service

```text
net start trendz
```
{: .copy-code}



## Upgrading to 1.5.1

These steps are applicable for 1.5.0 Trendz Analytics version.

### Ubuntu/CentOS {#ubuntucentos-151}

#### Trendz Analytics package download

{% capture tabspec %}trendz-download-1-5-1
trendz-download-1-5-1-ubuntu,Ubuntu,shell,resources/1.5.1/trendz-ubuntu-download.sh,/docs/user-guide/install/resources/1.5.1/trendz-ubuntu-download.sh
trendz-download-1-5-1-centos,CentOS,shell,resources/1.5.1/trendz-centos-download.sh,/docs/user-guide/install/resources/1.5.1/trendz-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### Trendz Analytics service upgrade

* Stop Trendz Analytics service if it is running.

```bash
sudo service trendz stop
```
{: .copy-code}

* Install latest Trendz Analytics service 

{% capture tabspec %}trendz-installation-1-5-1
trendz-installation-1-5-1-ubuntu,Ubuntu,shell,resources/1.5.1/trendz-ubuntu-installation.sh,/docs/user-guide/install/resources/1.5.1/trendz-ubuntu-installation.sh
trendz-installation-1-5-1-centos,CentOS,shell,resources/1.5.1/trendz-centos-installation.sh,/docs/user-guide/install/resources/1.5.1/trendz-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

**NOTE:** Package installer will ask you to merge your trendz configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.  
 
#### Start the service

```bash
sudo service trendz start
```
{: .copy-code}

### Windows {#windows-151}

#### Trendz Analytics package download

Download ThingsBoard Trendz Analytics installation package for Windows: [trendz-windows-1.5.1.zip](https://dist.thingsboard.io/trendz-windows-1.5.1.zip).

#### Trendz Analytics service upgrade

* Stop Trendz service if it is running.
 
```text
net stop trendz
```
{: .copy-code}

* Make a backup of previous Trendz Analytics configuration located in \<Trendz install dir\>\conf (for ex. C:\trendz\conf).
* Remove ThingsBoard install dir.
* Unzip installation archive to ThingsBoard install dir.
* Compare your old Trendz configuration files (from the backup you made in the first step) with new ones.


#### Start the service

```text
net start trendz
```
{: .copy-code}

## Upgrading to 1.5.0

These steps are applicable for 1.4.1 Trendz Analytics version.

### Ubuntu/CentOS {#ubuntucentos-150}

#### Trendz Analytics package download

{% capture tabspec %}trendz-download-1-5-0
trendz-download-1-5-0-ubuntu,Ubuntu,shell,resources/1.5.0/trendz-ubuntu-download.sh,/docs/user-guide/install/resources/1.5.0/trendz-ubuntu-download.sh
trendz-download-1-5-0-centos,CentOS,shell,resources/1.5.0/trendz-centos-download.sh,/docs/user-guide/install/resources/1.5.0/trendz-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### Trendz Analytics service upgrade

* Stop Trendz Analytics service if it is running.

```bash
sudo service trendz stop
```

* Install latest Trendz Analytics service 

{% capture tabspec %}trendz-installation-1-5-0
trendz-installation-1-5-0-ubuntu,Ubuntu,shell,resources/1.5.0/trendz-ubuntu-installation.sh,/docs/user-guide/install/resources/1.5.0/trendz-ubuntu-installation.sh
trendz-installation-1-5-0-centos,CentOS,shell,resources/1.5.0/trendz-centos-installation.sh,/docs/user-guide/install/resources/1.5.0/trendz-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

**NOTE:** Package installer will ask you to merge your trendz configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.  
 
#### Start the service

```bash
sudo service trendz start
```

### Windows {#windows-150}

#### Trendz Analytics package download

Download ThingsBoard Trendz Analytics installation package for Windows: [trendz-windows-1.5.0.zip](https://dist.thingsboard.io/trendz-windows-1.5.0.zip).

#### Trendz Analytics service upgrade

* Stop Trendz service if it is running.
 
```text
net stop trendz
```

* Make a backup of previous Trendz Analytics configuration located in \<Trendz install dir\>\conf (for ex. C:\trendz\conf).
* Remove ThingsBoard install dir.
* Unzip installation archive to ThingsBoard install dir.
* Compare your old Trendz configuration files (from the backup you made in the first step) with new ones.


#### Start the service

```text
net start trendz
```

### Widget Bundle for ThingsBoard {#tb_widget_bundle-150}

In Trendz version 1.5.0 Widget Bundle for ThingsBoard was changed. You have to upgrade widget bundle to the latest version to receive latest
features introduced in version 1.5.0

#### Download new Widget Bundle

* For ThingsBoard version **3.x** please use 
this <a href="https://dist.thingsboard.io/trendz_bundle_tb3.json" download target="_blank">trendz_bundle_tb3</a>


* For ThingsBoard version **2.x** please use 
this <a href="https://dist.thingsboard.io/trendz_bundle_tb2.json" download target="_blank">trendz_bundle_tb2</a>

#### Replace old Bundle with the new one

* Login to ThingsBoard as tenant administrator
* Open **Widgets Library** section
* Delete old **Trendz Bundle**
* Import new Trendz Bundle from previous step

Widgets that already added to ThingsBoard dashboard are not affected and should not be changed.

## Upgrading to 1.4.1

These steps are applicable for 1.4.0 Trendz Analytics version.

### Ubuntu/CentOS {#ubuntucentos-141}

#### Trendz Analytics package download

{% capture tabspec %}trendz-download-1-4-1
trendz-download-1-4-1-ubuntu,Ubuntu,shell,resources/1.4.1/trendz-ubuntu-download.sh,/docs/user-guide/install/resources/1.4.1/trendz-ubuntu-download.sh
trendz-download-1-4-1-centos,CentOS,shell,resources/1.4.1/trendz-centos-download.sh,/docs/user-guide/install/resources/1.4.1/trendz-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### Trendz Analytics service upgrade

* Stop Trendz Analytics service if it is running.

```bash
sudo service trendz stop
```

* Install latest Trendz Analytics service 

{% capture tabspec %}trendz-installation-1-4-1
trendz-installation-1-4-1-ubuntu,Ubuntu,shell,resources/1.4.1/trendz-ubuntu-installation.sh,/docs/user-guide/install/resources/1.4.1/trendz-ubuntu-installation.sh
trendz-installation-1-4-1-centos,CentOS,shell,resources/1.4.1/trendz-centos-installation.sh,/docs/user-guide/install/resources/1.4.1/trendz-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

**NOTE:** Package installer will ask you to merge your trendz configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.  
 
#### Start the service

```bash
sudo service trendz start
```

### Windows {#windows-141}

#### Trendz Analytics package download

Download ThingsBoard Trendz Analytics installation package for Windows: [trendz-windows-1.4.1.zip](https://dist.thingsboard.io/trendz-windows-1.4.1.zip).

#### Trendz Analytics service upgrade

* Stop Trendz service if it is running.
 
```text
net stop trendz
```

* Make a backup of previous ThingsBoard Trendz Analytics configuration located in \<Trendz install dir\>\conf (for ex. C:\trendz\conf).
* Compare your old Trendz configuration files (from the backup you made in the first step) with new ones.


#### Start the service

```text
net start trendz
```

## Upgrading to 1.4.0

These steps are applicable for 1.3.1 Trendz Analytics version.

### Ubuntu/CentOS {#ubuntucentos-140}

#### Trendz Analytics package download

{% capture tabspec %}trendz-download-1-4-0
trendz-download-1-4-0-ubuntu,Ubuntu,shell,resources/1.4.0/trendz-ubuntu-download.sh,/docs/user-guide/install/resources/1.4.0/trendz-ubuntu-download.sh
trendz-download-1-4-0-centos,CentOS,shell,resources/1.4.0/trendz-centos-download.sh,/docs/user-guide/install/resources/1.4.0/trendz-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### Trendz Analytics service upgrade

* Stop Trendz Analytics service if it is running.

```bash
sudo service trendz stop
```

* Install latest Trendz Analytics service 

{% capture tabspec %}trendz-installation-1-4-0
trendz-installation-1-4-0-ubuntu,Ubuntu,shell,resources/1.4.0/trendz-ubuntu-installation.sh,/docs/user-guide/install/resources/1.4.0/trendz-ubuntu-installation.sh
trendz-installation-1-4-0-centos,CentOS,shell,resources/1.4.0/trendz-centos-installation.sh,/docs/user-guide/install/resources/1.4.0/trendz-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

**NOTE:** Package installer will ask you to merge your trendz configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.  
 
#### Start the service

```bash
sudo service trendz start
```

### Windows {#windows-140}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [trendz-windows-1.4.0.zip](https://dist.thingsboard.io/trendz-windows-1.4.0.zip).

#### ThingsBoard PE service upgrade

* Stop Trendz service if it is running.
 
```text
net stop trendz
```

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\trendz\conf).
* Compare your old Trendz configuration files (from the backup you made in the first step) with new ones.


#### Start the service

```text
net start trendz
```
