---
layout: docwithnav
title: ThingsBoard upgrade instructions for Ubuntu
description: ThingsBoard upgrade guide for Ubuntu
hidetoc: true
breadcrumbs: true
breadcrumbs-steps: 1

---

* TOC
{:toc}

### Upgrading ThingsBoard CE to 4.2.1

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 4.2.x. In order to upgrade to 4.2.1 you need to [**upgrade to 4.2.x first**](#upgrading-to-420).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

{% include resources.liquid version="4.2.1" kind="ubuntu-download" %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

{% include resources.liquid version="4.2.1" kind="ubuntu-installation" %}

{% capture difference %}
**NOTE:**
<br>
Package installer may ask you to merge your ThingsBoard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Execute regular upgrade script:

```bash
sudo /usr/share/thingsboard/bin/install/upgrade.sh
```
{: .copy-code}

#### Start the service

```bash
sudo service thingsboard start
```
{: .copy-code}


### Upgrading ThingsBoard CE to 4.2.0

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 4.1.x. In order to upgrade to 4.2 you need to [**upgrade to 4.1.x first**](#upgrading-to-410).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

{% include resources.liquid version="4.2" kind="ubuntu-download" %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

{% include resources.liquid version="4.2" kind="ubuntu-installation" %}

{% capture difference %}
**NOTE:**
<br>
Package installer may ask you to merge your ThingsBoard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Execute regular upgrade script:

```bash
sudo /usr/share/thingsboard/bin/install/upgrade.sh
```
{: .copy-code}

#### Start the service

```bash
sudo service thingsboard start
```
{: .copy-code}


### Upgrading ThingsBoard CE to 4.1.0

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 4.0.x. In order to upgrade to 4.1 you need to [**upgrade to 4.0.x first**](#upgrading-to-400).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

{% include resources.liquid version="4.1" kind="ubuntu-download" %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

{% include resources.liquid version="4.1" kind="ubuntu-installation" %}

{% capture difference %}
**NOTE:**
<br>
Package installer may ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Execute regular upgrade script:

```bash
sudo /usr/share/thingsboard/bin/install/upgrade.sh
```
{: .copy-code}

#### Start the service

```bash
sudo service thingsboard start
```
{: .copy-code}


### Upgrading ThingsBoard CE to 4.0.2

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.9.x and ThingsBoard version 4.0.x. In order to upgrade to 4.0.2 you need to [**upgrade to 3.9.x first**](#upgrading-to-390).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

{% include resources.liquid version="4.0.2" kind="ubuntu-download" %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

{% include resources.liquid version="4.0.2" kind="ubuntu-installation" %}

{% capture difference %}
**NOTE:**
<br>
Package installer may ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Execute regular upgrade script:

```bash
sudo /usr/share/thingsboard/bin/install/upgrade.sh
```
{: .copy-code}

#### Start the service

```bash
sudo service thingsboard start
```
{: .copy-code}


### Upgrading ThingsBoard CE to 4.0.1

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.9.x. In order to upgrade to 4.0.1 you need to [**upgrade to 3.9.x first**](#upgrading-to-390).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

{% include resources.liquid version="4.0.1" kind="ubuntu-download" %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

{% include resources.liquid version="4.0.1" kind="ubuntu-installation" %}

{% capture difference %}
**NOTE:**
<br>
Package installer may ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Execute regular upgrade script:

```bash
sudo /usr/share/thingsboard/bin/install/upgrade.sh
```
{: .copy-code}

#### Start the service

```bash
sudo service thingsboard start
```
{: .copy-code}


### Upgrading ThingsBoard CE to 4.0.0

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.9.x. In order to upgrade to 4.0 you need to [**upgrade to 3.9.x first**](#upgrading-to-390).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

{% include resources.liquid version="4.0" kind="ubuntu-download" %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

{% include resources.liquid version="4.0" kind="ubuntu-installation" %}

{% capture difference %}
**NOTE:**
<br>
Package installer may ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Execute regular upgrade script:

```bash
sudo /usr/share/thingsboard/bin/install/upgrade.sh
```
{: .copy-code}

#### Start the service

```bash
sudo service thingsboard start
```
{: .copy-code}


### Upgrading ThingsBoard CE to 3.9.1

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.9. In order to upgrade to 3.9.1 you need to [**upgrade to 3.9 first**](#upgrading-to-390).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

{% include resources.liquid version="3.9.1" kind="ubuntu-download" %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

{% include resources.liquid version="3.9.1" kind="ubuntu-installation" %}

{% capture difference %}
**NOTE:**
<br>
Package installer may ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Execute regular upgrade script:

```bash
sudo /usr/share/thingsboard/bin/install/upgrade.sh
```
{: .copy-code}

#### Start the service

```bash
sudo service thingsboard start
```
{: .copy-code}


### Upgrading ThingsBoard CE to 3.9.0

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.8.1. In order to upgrade to 3.9 you need to [**upgrade to 3.8.1 first**](#upgrading-to-381).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

{% include resources.liquid version="3.9" kind="ubuntu-download" %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

{% include resources.liquid version="3.9" kind="ubuntu-installation" %}

{% capture difference %}
**NOTE:**
<br>
Package installer may ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Execute regular upgrade script:

```bash
sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=3.8.1
```
{: .copy-code}

#### Start the service

```bash
sudo service thingsboard start
```
{: .copy-code}


### Upgrading ThingsBoard CE to 3.8.1

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.8. In order to upgrade to 3.8.1 you need to [**upgrade to 3.8 first**](#upgrading-to-380).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

{% include resources.liquid version="3.8.1" kind="ubuntu-download" %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

{% include resources.liquid version="3.8.1" kind="ubuntu-installation" %}

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


### Upgrading ThingsBoard CE to 3.8.0

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.7. In order to upgrade to 3.8 you need to [**upgrade to 3.7 first**](#upgrading-to-370).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### Install PostgreSQL contrib package (For CentOS only) 



#### ThingsBoard package download

{% include resources.liquid version="3.8" kind="ubuntu-download" %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

{% include resources.liquid version="3.8" kind="ubuntu-installation" %}

{% capture difference %}
**NOTE:**
<br>
Package installer may ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Execute regular upgrade script:

```bash
sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=3.7.0
```
{: .copy-code}

#### Start the service

```bash
sudo service thingsboard start
```
{: .copy-code}


### Upgrading ThingsBoard CE to 3.7.0

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.6.4. In order to upgrade to 3.7 you need to [**upgrade to 3.6.4 first**](#upgrading-to-364).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

{% include templates/install/tb-370-update-linux.md %}

#### ThingsBoard package download

{% include resources.liquid version="3.7" kind="ubuntu-download" %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

{% include resources.liquid version="3.7" kind="ubuntu-installation" %}

{% capture difference %}
**NOTE:**
<br>
Package installer may ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Execute regular upgrade script:

```bash
sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=3.6.4
```
{: .copy-code}

#### Start the service

{% capture cassandra-370 %}
**In case Cassandra is installed**, ensure that a proper **JAVA_HOME** parameter is set for *cassandra.in.sh* include file. As of 3.7.0 release, latest stable Cassandra version does not support Java 17 yet.

In case action is required, you can refer to *"you will need to install Java..."* section of [**Cassandra installation guide**](/docs/user-guide/install/ubuntu/?ubuntuThingsboardDatabase=hybrid#cassandra-installation). 
{% endcapture %}
{% include templates/info-banner.md content=cassandra-370 %}

```bash
sudo service thingsboard start
```
{: .copy-code}


### Upgrading ThingsBoard CE to 3.6.4

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.6.3. In order to upgrade to 3.6.4 you need to [**upgrade to 3.6.3 first**](#upgrading-to-363).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

{% include resources.liquid version="3.6.4" kind="ubuntu-download" %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

{% include resources.liquid version="3.6.4" kind="ubuntu-installation" %}

{% capture difference %}
**NOTE:**
<br>
Package installer may ask you to merge your thingsboard configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Execute regular upgrade script:

```bash
sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=3.6.3
```
{: .copy-code}

#### Start the service

```bash
sudo service thingsboard start
```
{: .copy-code}


### Upgrading ThingsBoard CE to 3.6.3

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.6.2. In order to upgrade to 3.6.3 you need to [**upgrade to 3.6.2 first**](#upgrading-to-362).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

{% include resources.liquid version="3.6.3" kind="ubuntu-download" %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

{% include resources.liquid version="3.6.3" kind="ubuntu-installation" %}

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


### Upgrading ThingsBoard CE to 3.6.2

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.6.1. In order to upgrade to 3.6.2 you need to [**upgrade to 3.6.1 first**](#upgrading-to-361).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

{% include resources.liquid version="3.6.2" kind="ubuntu-download" %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

{% include resources.liquid version="3.6.2" kind="ubuntu-installation" %}

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


### Upgrading ThingsBoard CE to 3.6.1

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.6. In order to upgrade to 3.6.1 you need to [**upgrade to 3.6 first**](#upgrading-to-360).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

{% include resources.liquid version="3.6.1" kind="ubuntu-download" %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

{% include resources.liquid version="3.6.1" kind="ubuntu-installation" %}

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


### Upgrading ThingsBoard CE to 3.6.0

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.5.1. In order to upgrade to 3.6 you need to [**upgrade to 3.5.1 first**](#upgrading-to-351).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

{% include resources.liquid version="3.6" kind="ubuntu-download" %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

{% include resources.liquid version="3.6" kind="ubuntu-installation" %}

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


### Upgrading ThingsBoard CE to 3.5.1

{% capture difference %}
**NOTE**:
<br>
These upgrade steps are applicable for ThingsBoard version 3.5. In order to upgrade to 3.5.1 you need to [**upgrade to 3.5 first**](#upgrading-to-350).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

{% include resources.liquid version="3.5.1" kind="ubuntu-download" %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

{% include resources.liquid version="3.5.1" kind="ubuntu-installation" %}

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


### Upgrading ThingsBoard CE to 3.5.0

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.4.4. In order to upgrade to 3.5 you need to [**upgrade to 3.4.4 first**](#upgrading-to-344).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

{% include templates/install/tb-350-update.md %}

#### ThingsBoard package download

{% include resources.liquid version="3.5" kind="ubuntu-download" %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

{% include resources.liquid version="3.5" kind="ubuntu-installation" %}

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


### Upgrading ThingsBoard CE to 3.4.4

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.4.3. In order to upgrade to 3.4.4 you need to [**upgrade to 3.4.3 first**](#upgrading-to-343).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

{% include resources.liquid version="3.4.4" kind="ubuntu-download" %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

{% include resources.liquid version="3.4.4" kind="ubuntu-installation" %}

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


### Upgrading ThingsBoard CE to 3.4.3

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.4.2. In order to upgrade to 3.4.3 you need to [**upgrade to 3.4.2 first**](#upgrading-to-342).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

{% include resources.liquid version="3.4.3" kind="ubuntu-download" %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

{% include resources.liquid version="3.4.3" kind="ubuntu-installation" %}

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


### Upgrading ThingsBoard CE to 3.4.2

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.4.1. In order to upgrade to 3.4.2 you need to [**upgrade to 3.4.1 first**](#upgrading-to-341).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

{% include resources.liquid version="3.4.2" kind="ubuntu-download" %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

{% include resources.liquid version="3.4.2" kind="ubuntu-installation" %}

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
Update the JWT signing key if you use the default one "thingsboardDefaultSigningKey" on production environments. See [JWT security settings](/docs/user-guide/ui/security-settings/#jwt-security-settings) for details.
{% endcapture %}
{% include templates/info-banner.md content=default-jwt %}


### Upgrading ThingsBoard CE to 3.4.1

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.4. In order to upgrade to 3.4.1 you need to [**upgrade to 3.4 first**](#upgrading-to-34).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

{% include resources.liquid version="3.4.1" kind="ubuntu-download" %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

{% include resources.liquid version="3.4.1" kind="ubuntu-installation" %}

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


### Upgrading ThingsBoard CE to 3.4

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.3.4.1. In order to upgrade to 3.4 you need to [**upgrade to 3.3.4.1 first**](#upgrading-to-3341).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

{% include resources.liquid version="3.4" kind="ubuntu-download" %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

{% include resources.liquid version="3.4" kind="ubuntu-installation" %}

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


### Upgrading ThingsBoard CE to 3.3.4.1

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.3.4. In order to upgrade to 3.3.4.1 you need to [**upgrade to 3.3.4 first**](#upgrading-to-334).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

{% include resources.liquid version="3.3.4.1" kind="ubuntu-download" %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

{% include resources.liquid version="3.3.4.1" kind="ubuntu-installation" %}

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


### Upgrading ThingsBoard CE to 3.3.4

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.3.3. In order to upgrade to 3.3.4 you need to [**upgrade to 3.3.3 first**](#upgrading-to-333).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

{% include resources.liquid version="3.3.4" kind="ubuntu-download" %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

{% include resources.liquid version="3.3.4" kind="ubuntu-installation" %}

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


### Upgrading ThingsBoard CE to 3.3.3

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.3.2. In order to upgrade to 3.3.3 you need to [**upgrade to 3.3.2 first**](#upgrading-to-332).

{% include templates/install/tb-333-update.md %}

#### ThingsBoard package download

{% include resources.liquid version="3.3.3" kind="ubuntu-download" %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
$ sudo service thingsboard stop
```

{% include resources.liquid version="3.3.3" kind="ubuntu-installation" %}

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


### Upgrading ThingsBoard CE to 3.3.2

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.3.1. In order to upgrade to 3.3.2 you need to [**upgrade to 3.3.1 first**](#upgrading-to-331).

#### ThingsBoard package download

{% include resources.liquid version="3.3.2" kind="ubuntu-download" %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
$ sudo service thingsboard stop
```

{% include resources.liquid version="3.3.2" kind="ubuntu-installation" %}

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


### Upgrading ThingsBoard CE to 3.3.1

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.3.0. In order to upgrade to 3.3.1 you need to [**upgrade to 3.3.0 first**](#upgrading-to-33).

#### ThingsBoard package download

{% include resources.liquid version="3.3.1" kind="ubuntu-download" %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
$ sudo service thingsboard stop
```

{% include resources.liquid version="3.3.1" kind="ubuntu-installation" %}

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


### Upgrading ThingsBoard CE to 3.3

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.2.2. In order to upgrade to 3.3 you need to [**upgrade to 3.2.2 first**](#upgrading-to-322).

#### ThingsBoard package download

{% include resources.liquid version="3.3" kind="ubuntu-download" %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
$ sudo service thingsboard stop
```

{% include resources.liquid version="3.3" kind="ubuntu-installation" %}

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


### Upgrading ThingsBoard CE to 3.2.2

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.2.1. In order to upgrade to 3.2.2 you need to [**upgrade to 3.2.1 first**](#upgrading-to-321).

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

{% include resources.liquid version="3.2.2" kind="ubuntu-download" %}  

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
$ sudo service thingsboard stop
```

{% include resources.liquid version="3.2.2" kind="ubuntu-installation" %}

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


### Upgrading ThingsBoard CE to 3.2.1

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.2. In order to upgrade to 3.2.1 you need to [**upgrade to 3.2 first**](#upgrading-to-32).

#### ThingsBoard package download

{% include resources.liquid version="3.2.1" kind="ubuntu-download" %}  

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
$ sudo service thingsboard stop
```

{% include resources.liquid version="3.2.1" kind="ubuntu-installation" %}

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


### Upgrading ThingsBoard CE to 3.2

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.1.1. In order to upgrade to 3.2 you need to [**upgrade to 3.1.1 first**](#upgrading-to-311).

#### ThingsBoard package download

{% include resources.liquid version="3.2" kind="ubuntu-download" %}  

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
$ sudo service thingsboard stop
```

{% include resources.liquid version="3.2" kind="ubuntu-installation" %}

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


### Upgrading ThingsBoard CE to 3.1.1

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.1. In order to upgrade to 3.1.1 you need to [**upgrade to 3.1 first**](#upgrading-to-31).

#### ThingsBoard package download

{% include resources.liquid version="3.1.1" kind="ubuntu-download" %}  

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
$ sudo service thingsboard stop
```

{% include resources.liquid version="3.1.1" kind="ubuntu-installation" %}

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


### Upgrading ThingsBoard CE to 3.1

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.0.1. In order to upgrade to 3.1 you need to [**upgrade to 3.0.1 first**](#upgrading-to-301).

#### ThingsBoard package download

{% include resources.liquid version="3.1" kind="ubuntu-download" %}  

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
$ sudo service thingsboard stop
```

{% include resources.liquid version="3.1" kind="ubuntu-installation" %}

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
sudo /usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=cassandra-latest-to-postgres
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


### Upgrading ThingsBoard CE to 3.0.1

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.0. In order to upgrade to 3.0.1 you need to [**upgrade to 3.0 first**](#upgrading-to-30).

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

{% include resources.liquid version="3.0.1" kind="ubuntu-download" %}  

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
$ sudo service thingsboard stop
```

{% include resources.liquid version="3.0.1" kind="ubuntu-installation" %}

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


### Upgrading ThingsBoard CE to 3.0

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

{% include resources.liquid version="3.0.0" kind="ubuntu-download" %}  

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
$ sudo service thingsboard stop
```

{% include resources.liquid version="3.0.0" kind="ubuntu-installation" %}

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

### Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}
