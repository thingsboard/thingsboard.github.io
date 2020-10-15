### Ubuntu/CentOS {#ubuntucentos-260beta}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 2.5.5. In order to upgrade to 2.6.0beta you need to [**upgrade to 2.5.5 first**](/docs/user-guide/install/upgrade-instructions/#ubuntucentos-255).

#### ThingsBoard package download

{% capture tabspec %}thingsboard-download-2-6-0-beta
thingsboard-download-2-6-0-beta-ubuntu,Ubuntu,shell,resources/2.6.0beta/thingsboard-ubuntu-download.sh,/docs/thingsboard-edge/resources/2.6.0beta/thingsboard-ubuntu-download.sh
thingsboard-download-2-6-0-beta-centos,CentOS,shell,resources/2.6.0beta/thingsboard-centos-download.sh,/docs/thingsboard-edge/resources/2.6.0beta/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard service upgrade

{% capture tabspec %}thingsboard-installation-2-6-0-beta
thingsboard-installation-2-6-0-beta-ubuntu,Ubuntu,shell,resources/2.6.0beta/thingsboard-ubuntu-installation.sh,/docs/thingsboard-edge/resources/2.6.0beta/thingsboard-ubuntu-installation.sh
thingsboard-installation-2-6-0-beta-centos,CentOS,shell,resources/2.6.0beta/thingsboard-centos-installation.sh,/docs/thingsboard-edge/resources/2.6.0beta/thingsboard-centos-installation.sh{% endcapture %} 
{% include tabs.html %}

**NOTE:** Package installer will ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.  

#### Start the service

```bash
$ sudo service thingsboard start
```

### Windows {#windows-260beta}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 2.5.5. In order to upgrade to 2.6.0beta you need to [**upgrade to 2.5.5 first**](/docs/user-guide/install/upgrade-instructions/#windows-255).

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-2.6.0beta.zip](https://github.com/thingsboard/thingsboard/releases/download/v2.6.0beta/thingsboard-windows-2.6.0beta.zip).

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.
 
```text
net stop thingsboard
```

* Make a backup of previous ThingsBoard configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Remove ThingsBoard install dir.
* Unzip installation archive to ThingsBoard install dir.
* Compare your old ThingsBoard configuration files (from the backup you made in the first step) with new ones.

#### Start the service

```text
net start thingsboard
```