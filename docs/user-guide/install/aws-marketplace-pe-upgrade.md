---
layout: docwithnav
title: Upgrading ThingsBoard PE from AWS Marketplace
description: Upgrading ThingsBoard PE from AWS Marketplace

---

This guide describes how to upgrade ThingsBoard Professional Edition from AWS Marketplace. 

<ul id="markdown-toc">
  <li>
    <a href="#upgrading-to-thingsboard-pe-v202" id="markdown-toc-upgrading-to-thingsboard-pe-v202">Upgrading to ThingsBoard PE v.2.0.2</a>
  </li>
  <li>
    <a href="#upgrading-to-thingsboard-pe-v210" id="markdown-toc-upgrading-to-thingsboard-pe-v210">Upgrading to ThingsBoard PE v.2.1.0</a>
  </li>
  <li>
    <a href="#upgrading-to-thingsboard-pe-v213" id="markdown-toc-upgrading-to-thingsboard-pe-v213">Upgrading to ThingsBoard PE v.2.1.3</a>
  </li>
</ul>

## Upgrading to ThingsBoard PE v.2.0.2

These steps are applicable for ThingsBoard PE with Cassandra v.1.4.

{% include templates/upgrade-to-20-notice.md %}

#### Connect to your ThingsBoard PE v.1.4 instance over SSH.

Below is example command as a reference:

```bash
$ ssh -i <PRIVATE-KEY> ubuntu@<PUBLIC_DNS_NAME>
```

or goto EC2 instances and locate your ThingsBoard PE v1.4 instance. 
Then select **Actions -> Connect** and follow instructions provided in **Connect To Your Instance** dialog.

#### Upgrade ThingsBoard PE package 

In the console execute the following command:

```bash
$ sudo tb-update-pkg.sh
```

The output should be like:

```text
Updating ThingsBoard Professional Edition...
Installing ThingsBoard PE package...
(Reading database ... 104150 files and directories currently installed.)
Preparing to unpack /tmp/tb.deb ...
Unpacking thingsboard (2.0.2PE-1) over (1.4.0PE-1) ...
Setting up thingsboard (2.0.2PE-1) ...
```

**NOTE:** Package installer will ask you to merge your thingsboard.conf configuration.

```text
Configuration file '/usr/share/thingsboard/conf/thingsboard.conf'
 ==> Modified (by you or by a script) since installation.
 ==> Package distributor has shipped an updated version.
   What would you like to do about it ?  Your options are:
    Y or I  : install the package maintainer's version
    N or O  : keep your currently-installed version
      D     : show the differences between the versions
      Z     : start a shell to examine the situation
 The default action is to keep your current version.
*** thingsboard.conf (Y/I/N/O/D/Z) [default=N] ? Y
```

Select **install the package maintainer's version** by entering **Y** or **I**.

**NOTE:** Package installer will ask you to merge your thingsboard.yml configuration.

```text
Configuration file '/usr/share/thingsboard/conf/thingsboard.yml'
 ==> Modified (by you or by a script) since installation.
 ==> Package distributor has shipped an updated version.
   What would you like to do about it ?  Your options are:
    Y or I  : install the package maintainer's version
    N or O  : keep your currently-installed version
      D     : show the differences between the versions
      Z     : start a shell to examine the situation
 The default action is to keep your current version.
*** thingsboard.yml (Y/I/N/O/D/Z) [default=N] ? Y
```

Select **install the package maintainer's version** by entering **Y** or **I**.

After installation your previous configuration will be stored in the following files:

```bash
/usr/share/thingsboard/conf/thingsboard.conf.dpkg-old
/usr/share/thingsboard/conf/thingsboard.yml.dpkg-old
```

If you changed configuration files previously you can compare new configuration with the old one in order to restore your configuration values.

At least the following configuration parameters should be restored:

- edit **/usr/share/thingsboard/conf/thingsboard.conf**, for ex.:

```bash
$ sudo vi /usr/share/thingsboard/conf/thingsboard.conf
```

- locate and replace ```-Dplatform=deb``` with ```-Dplatform=ami-pe-cassandra```. The final line should be the following:

```
   ...
   export JAVA_OPTS="$JAVA_OPTS -Dplatform=ami-pe-cassandra -Dinstall.data_dir=/usr/share/thingsboard/data"
   ...
```

- edit **/usr/share/thingsboard/conf/thingsboard.yml**. for ex.:

```bash
$ sudo vi /usr/share/thingsboard/conf/thingsboard.yml
```

- locate the following lines:

```
   database:
     type: "${DATABASE_TYPE:sql}" # cassandra OR sql
```

- change ```database.type``` value from ```sql``` to ```cassandra```:

```
   database:
     type: "${DATABASE_TYPE:cassandra}" # cassandra OR sql
```

#### Upgrade Database

Execute database upgrade using the following command:

```bash
$ sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=1.4.0
```

The output should be like:

```text
 ===================================================
 :: ThingsBoard Professional Edition ::       (v2.0.2PE)
 ===================================================

Starting ThingsBoard Upgrade from version 1.4.0 ...
Upgrading ThingsBoard from version 1.4.0 to 2.0.0 ...
Updating schema ...
Schema updated.
Updating data from version 1.4.0 to 2.0.0 ...
Updating system data...
Upgrading ThingsBoard from version 2.0.0 to 2.0.0PE ...
Updating schema ...
Schema updated.
Updating converters ...
Converters updated.
Updating data from version 2.0.0 to 2.0.0PE ...
Upgrade finished successfully!
ThingsBoard upgraded successfully!
```

In case of any **failures** during database upgrade **Please contact [support@thingsboard.io](mailto:support@thingsboard.io)**.

#### Start ThingsBoard PE service

Execute the following command in order to start ThingsBoard service:

```bash
$ sudo service thingsboard start
```

You can issue the following command in order to check if there are any errors on the backend side:

```bash
$ cat /var/log/thingsboard/thingsboard.log | grep ERROR
```


## Upgrading to ThingsBoard PE v.2.1.0

These steps are applicable for ThingsBoard PE with Cassandra v.2.0.2.

#### Connect to your ThingsBoard PE v.2.0.2 instance over SSH.

Below is example command as a reference:

```bash
$ ssh -i <PRIVATE-KEY> ubuntu@<PUBLIC_DNS_NAME>
```

or goto EC2 instances and locate your ThingsBoard PE v2.0.2 instance. 
Then select **Actions -> Connect** and follow instructions provided in **Connect To Your Instance** dialog.

#### Upgrade ThingsBoard PE package 

In the console execute the following command:

```bash
$ sudo tb-update-pkg.sh
```

The output should be like:

```text
Updating ThingsBoard Professional Edition...
Installing ThingsBoard PE package...
(Reading database ... 104150 files and directories currently installed.)
Preparing to unpack /tmp/tb.deb ...
Unpacking thingsboard (2.1.0PE-1) over (2.0.2PE-1) ...
Setting up thingsboard (2.1.0PE-1) ...
```

**NOTE:** Package installer will ask you to merge your thingsboard.conf configuration.

```text
Configuration file '/usr/share/thingsboard/conf/thingsboard.conf'
 ==> Modified (by you or by a script) since installation.
 ==> Package distributor has shipped an updated version.
   What would you like to do about it ?  Your options are:
    Y or I  : install the package maintainer's version
    N or O  : keep your currently-installed version
      D     : show the differences between the versions
      Z     : start a shell to examine the situation
 The default action is to keep your current version.
*** thingsboard.conf (Y/I/N/O/D/Z) [default=N] ? Y
```

Select **install the package maintainer's version** by entering **Y** or **I**.

**NOTE:** Package installer will ask you to merge your thingsboard.yml configuration.

```text
Configuration file '/usr/share/thingsboard/conf/thingsboard.yml'
 ==> Modified (by you or by a script) since installation.
 ==> Package distributor has shipped an updated version.
   What would you like to do about it ?  Your options are:
    Y or I  : install the package maintainer's version
    N or O  : keep your currently-installed version
      D     : show the differences between the versions
      Z     : start a shell to examine the situation
 The default action is to keep your current version.
*** thingsboard.yml (Y/I/N/O/D/Z) [default=N] ? Y
```

Select **install the package maintainer's version** by entering **Y** or **I**.

After installation your previous configuration will be stored in the following files:

```bash
/usr/share/thingsboard/conf/thingsboard.conf.dpkg-old
/usr/share/thingsboard/conf/thingsboard.yml.dpkg-old
```

If you changed configuration files previously you can compare new configuration with the old one in order to restore your configuration values.

At least the following configuration parameters should be restored:

- edit **/usr/share/thingsboard/conf/thingsboard.conf**, for ex.:

```bash
$ sudo vi /usr/share/thingsboard/conf/thingsboard.conf
```

- locate and replace ```-Dplatform=deb``` with ```-Dplatform=ami-pe-cassandra```. The final line should be the following:

```
   ...
   export JAVA_OPTS="$JAVA_OPTS -Dplatform=ami-pe-cassandra -Dinstall.data_dir=/usr/share/thingsboard/data"
   ...
```

- edit **/usr/share/thingsboard/conf/thingsboard.yml**. for ex.:

```bash
$ sudo vi /usr/share/thingsboard/conf/thingsboard.yml
```

- locate the following lines:

```
   database:
     type: "${DATABASE_TYPE:sql}" # cassandra OR sql
```

- change ```database.type``` value from ```sql``` to ```cassandra```:

```
   database:
     type: "${DATABASE_TYPE:cassandra}" # cassandra OR sql
```

#### Upgrade Database

Execute database upgrade using the following command:

```bash
$ sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=2.0.0
```

The output should be like:

```text
 ===================================================
 :: ThingsBoard Professional Edition ::       (v2.1.0PE)
 ===================================================

Starting ThingsBoard Upgrade from version 2.0.0 ...
Upgrading ThingsBoard from version 2.0.0 to 2.1.0PE ...
Updating schema ...
Schema updated.
Updating converters ...
Converters updated.
Updating data from version 2.0.0 to 2.1.0PE ...
Upgrade finished successfully!
ThingsBoard upgraded successfully!
```

In case of any **failures** during database upgrade **Please contact [support@thingsboard.io](mailto:support@thingsboard.io)**.

#### Start ThingsBoard PE service

Execute the following command in order to start ThingsBoard service:

```bash
$ sudo service thingsboard start
```

You can issue the following command in order to check if there are any errors on the backend side:

```bash
$ cat /var/log/thingsboard/thingsboard.log | grep ERROR
```

#### Install ThingsBoard Web Report Server

Execute the following command in order to install Report Server prerequisites:

```bash
$ sudo apt install -yq gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 \
     libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 \
     libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 \
     libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 \
     ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget fonts-roboto
```

Download ThingsBoard Web Report Server installation script:

```bash
$ cd ~
$ wget --quiet -O tb-install-web-report.sh https://thingsboard.io/docs/user-guide/install/resources/tb-install-web-report.sh
$ chmod +x tb-install-web-report.sh
```

Execute installation script:

```bash
$ sudo ./tb-install-web-report.sh
```

The output should be like:

```text
Installing ThingsBoard Web Report Server...
Installing ThingsBoard Web Report Server package...
Selecting previously unselected package tb-web-report.
(Reading database ... 145356 files and directories currently installed.)
Preparing to unpack /tmp/tb-web-report.deb ...
Unpacking tb-web-report (2.1.0PE-1) ...
Setting up tb-web-report (2.1.0PE-1) ...
Processing triggers for systemd (229-4ubuntu21.1) ...
Processing triggers for ureadahead (0.100.0-19) ...
Latest version of ThingsBoard Web Report Server has been installed.
```

#### Start ThingsBoard Web Report Server

Execute the following command in order to start ThingsBoard Web Report Server:

```bash
$ sudo service tb-web-report start
```

## Upgrading to ThingsBoard PE v.2.1.3

These steps are applicable for ThingsBoard PE with Cassandra v.2.1.0.

#### Connect to your ThingsBoard PE v.2.1.0 instance over SSH.

Below is example command as a reference:

```bash
$ ssh -i <PRIVATE-KEY> ubuntu@<PUBLIC_DNS_NAME>
```

or goto EC2 instances and locate your ThingsBoard PE v2.1.0 instance. 
Then select **Actions -> Connect** and follow instructions provided in **Connect To Your Instance** dialog.

#### Upgrade ThingsBoard PE package 

In the console execute the following command:

```bash
$ sudo tb-update-pkg.sh
```

The output should be like:

```text
Updating ThingsBoard Professional Edition...
Installing ThingsBoard PE package...
(Reading database ... 104150 files and directories currently installed.)
Preparing to unpack /tmp/tb.deb ...
Unpacking thingsboard (2.1.3PE-1) over (2.1.0PE-1) ...
Setting up thingsboard (2.1.3PE-1) ...
```

**NOTE:** Package installer will ask you to merge your thingsboard.conf configuration.

```text
Configuration file '/usr/share/thingsboard/conf/thingsboard.conf'
 ==> Modified (by you or by a script) since installation.
 ==> Package distributor has shipped an updated version.
   What would you like to do about it ?  Your options are:
    Y or I  : install the package maintainer's version
    N or O  : keep your currently-installed version
      D     : show the differences between the versions
      Z     : start a shell to examine the situation
 The default action is to keep your current version.
*** thingsboard.conf (Y/I/N/O/D/Z) [default=N] ? Y
```

Select **install the package maintainer's version** by entering **Y** or **I**.

**NOTE:** Package installer will ask you to merge your thingsboard.yml configuration.

```text
Configuration file '/usr/share/thingsboard/conf/thingsboard.yml'
 ==> Modified (by you or by a script) since installation.
 ==> Package distributor has shipped an updated version.
   What would you like to do about it ?  Your options are:
    Y or I  : install the package maintainer's version
    N or O  : keep your currently-installed version
      D     : show the differences between the versions
      Z     : start a shell to examine the situation
 The default action is to keep your current version.
*** thingsboard.yml (Y/I/N/O/D/Z) [default=N] ? Y
```

Select **install the package maintainer's version** by entering **Y** or **I**.

After installation your previous configuration will be stored in the following files:

```bash
/usr/share/thingsboard/conf/thingsboard.conf.dpkg-old
/usr/share/thingsboard/conf/thingsboard.yml.dpkg-old
```

If you changed configuration files previously you can compare new configuration with the old one in order to restore your configuration values.

At least the following configuration parameters should be restored:

- edit **/usr/share/thingsboard/conf/thingsboard.conf**, for ex.:

```bash
$ sudo vi /usr/share/thingsboard/conf/thingsboard.conf
```

- locate and replace ```-Dplatform=deb``` with ```-Dplatform=ami-pe-cassandra```. The final line should be the following:

```
   ...
   export JAVA_OPTS="$JAVA_OPTS -Dplatform=ami-pe-cassandra -Dinstall.data_dir=/usr/share/thingsboard/data"
   ...
```

- edit **/usr/share/thingsboard/conf/thingsboard.yml**. for ex.:

```bash
$ sudo vi /usr/share/thingsboard/conf/thingsboard.yml
```

- locate the following lines:

```
    database:
      entities:
        type: "${DATABASE_ENTITIES_TYPE:sql}" # cassandra OR sql
      ts:
        type: "${DATABASE_TS_TYPE:sql}" # cassandra OR sql (for hybrid mode, only this value should be cassandra)
```

- change ```database.entities.type``` and ```database.ts.type``` values from ```sql``` to ```cassandra```:

```
    database:
      entities:
        type: "${DATABASE_ENTITIES_TYPE:cassandra}" # cassandra OR sql
      ts:
        type: "${DATABASE_TS_TYPE:cassandra}" # cassandra OR sql (for hybrid mode, only this value should be cassandra)
```

#### Upgrade Database

Execute database upgrade using the following command:

```bash
$ sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=2.0.0
```

The output should be like:

```text
 ===================================================
 :: ThingsBoard Professional Edition ::       (v2.1.3PE)
 ===================================================

Starting ThingsBoard Upgrade from version 2.0.0 ...
Upgrading ThingsBoard from version 2.0.0 to 2.1.1 ...
Updating schema ...
Schema updated.
Upgrading ThingsBoard from version 2.1.1 to 2.1.2 ...
Upgrading Cassandra DataBase from version 2.1.1 to 2.1.2 ...
Dumping entity views ...
Entity views dumped.
Updating schema ...
Schema updated.
Restoring entity views ...
Entity views restored.
Upgrading ThingsBoard from version 2.1.2 to 2.1.3PE ...
Updating schema ...
Schema updated.
Updating converters ...
Converters updated.
Updating data from version 2.1.2 to 2.1.3PE ...
Updating system data...
Upgrade finished successfully!
ThingsBoard upgraded successfully!
```

In case of any **failures** during database upgrade **Please contact [support@thingsboard.io](mailto:support@thingsboard.io)**.

#### Start ThingsBoard PE service

Execute the following command in order to start ThingsBoard service:

```bash
$ sudo service thingsboard start
```

You can issue the following command in order to check if there are any errors on the backend side:

```bash
$ cat /var/log/thingsboard/thingsboard.log | grep ERROR
```
