### Ubuntu/CentOS {#ubuntucentos-260pe-beta}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 2.5.5PE. In order to upgrade to 2.6.0PE-beta you need to [**upgrade to 2.5.5PE first**](/docs/user-guide/install/pe/upgrade-instructions/#ubuntucentos-255).

#### ThingsBoard PE package download

{% capture tabspec %}thingsboard-download-2-6-0-pe-beta
thingsboard-download-2-6-0-pe-beta-ubuntu,Ubuntu,shell,resources/2.6.0pe-beta/thingsboard-ubuntu-download.sh,/docs/thingsboard-edge/resources/2.6.0pe-beta/thingsboard-ubuntu-download.sh
thingsboard-download-2-6-0-pe-beta-centos,CentOS,shell,resources/2.6.0pe-beta/thingsboard-centos-download.sh,/docs/thingsboard-edge/resources/2.6.0pe-beta/thingsboard-centos-download.sh{% endcapture %}  
{% include tabs.html %}

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```bash
$ sudo service thingsboard stop
```

* Install Thingsboard Web Report component as described [here](/docs/user-guide/install/pe/ubuntu/#step-9-install-thingsboard-webreport-component).


{% capture tabspec %}thingsboard-installation-2-6-0-pe-beta
thingsboard-installation-2-6-0-pe-beta-ubuntu,Ubuntu,shell,resources/2.6.0pe-beta/thingsboard-ubuntu-installation.sh,/docs/thingsboard-edge/resources/2.6.0pe-beta/thingsboard-ubuntu-installation.sh
thingsboard-installation-2-6-0-pe-beta-centos,CentOS,shell,resources/2.6.0pe-beta/thingsboard-centos-installation.sh,/docs/thingsboard-edge/resources/2.6.0pe-beta/thingsboard-centos-installation.sh{% endcapture %} 
{% include tabs.html %}

**NOTE:** Package installer will ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.  

#### Start the service

```bash
$ sudo service thingsboard start
```

### Windows {#windows-260beta}

**NOTE**: These upgrade steps are applicable for ThingsBoard version 2.5.5PE. In order to upgrade to 2.6.0PE-beta you need to [**upgrade to 2.5.5PE first**](/docs/user-guide/install/pe/upgrade-instructions/#windows-255).

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-2.6.0pe-beta.exe](https://dist.thingsboard.io/thingsboard-windows-setup-2.6.0pe-beta.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.
 
```text
net stop thingsboard
```

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-2.6.0pe-beta.exe**.
* Compare your old ThingsBoard configuration files (from the backup you made in the first step) with new ones.

#### Start the service

```text
net start thingsboard
```