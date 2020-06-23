---
layout: docwithnav
title: Upgrade instructions
description: ThingsBoard Trendz Analytics upgrade instructions

---


<ul id="markdown-toc">          
  <li>
    <a href="#upgrading-to-141" id="markdown-toc-upgrading-to-141">Upgrading to 1.4.1</a>
    <ul>
        <li>
            <a href="#ubuntucentos" id="markdown-toc-ubuntucentos-1">Ubuntu/CentOS</a>        
        </li>
        <li>
            <a href="#windows" id="markdown-toc-windows-1">Windows</a>        
        </li>
    </ul>
  </li>
  <li>
        <a href="#upgrading-to-140" id="markdown-toc-upgrading-to-140">Upgrading to 1.4.0</a>
        <ul>
            <li>
                <a href="#ubuntucentos" id="markdown-toc-ubuntucentos-1">Ubuntu/CentOS</a>        
            </li>
            <li>
                <a href="#windows" id="markdown-toc-windows-1">Windows</a>        
            </li>
        </ul>
      </li>  
</ul>

## Upgrading to 1.4.1

These steps are applicable for 1.4.0 Trendz Analytics version.

### Ubuntu/CentOS {#ubuntucentos}

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

### Windows {#windows}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [trendz-windows-1.4.1.zip](https://dist.thingsboard.io/trendz-windows-1.4.1.zip).

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

## Upgrading to 1.4.0

These steps are applicable for 1.3.1 Trendz Analytics version.

### Ubuntu/CentOS {#ubuntucentos}

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

### Windows {#windows}

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
