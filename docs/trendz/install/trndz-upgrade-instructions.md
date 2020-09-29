---
layout: docwithnav
title: Upgrade instructions
description: ThingsBoard Trendz Analytics upgrade instructions

---


<ul id="markdown-toc">
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
$ sudo service trendz stop
```

* Install latest Trendz Analytics service 

{% capture tabspec %}trendz-installation-1-5-0
trendz-installation-1-5-0-ubuntu,Ubuntu,shell,resources/1.5.0/trendz-ubuntu-installation.sh,/docs/user-guide/install/resources/1.5.0/trendz-ubuntu-installation.sh
trendz-installation-1-5-0-centos,CentOS,shell,resources/1.5.0/trendz-centos-installation.sh,/docs/user-guide/install/resources/1.5.0/trendz-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

**NOTE:** Package installer will ask you to merge your trendz configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.  
 
#### Start the service

```bash
$ sudo service trendz start
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
$ sudo service trendz stop
```

* Install latest Trendz Analytics service 

{% capture tabspec %}trendz-installation-1-4-1
trendz-installation-1-4-1-ubuntu,Ubuntu,shell,resources/1.4.1/trendz-ubuntu-installation.sh,/docs/user-guide/install/resources/1.4.1/trendz-ubuntu-installation.sh
trendz-installation-1-4-1-centos,CentOS,shell,resources/1.4.1/trendz-centos-installation.sh,/docs/user-guide/install/resources/1.4.1/trendz-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

**NOTE:** Package installer will ask you to merge your trendz configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.  
 
#### Start the service

```bash
$ sudo service trendz start
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
$ sudo service trendz stop
```

* Install latest Trendz Analytics service 

{% capture tabspec %}trendz-installation-1-4-0
trendz-installation-1-4-0-ubuntu,Ubuntu,shell,resources/1.4.0/trendz-ubuntu-installation.sh,/docs/user-guide/install/resources/1.4.0/trendz-ubuntu-installation.sh
trendz-installation-1-4-0-centos,CentOS,shell,resources/1.4.0/trendz-centos-installation.sh,/docs/user-guide/install/resources/1.4.0/trendz-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

**NOTE:** Package installer will ask you to merge your trendz configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.  
 
#### Start the service

```bash
$ sudo service trendz start
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
