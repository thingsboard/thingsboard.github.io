---
layout: docwithnav
title: ThingsBoard upgrade instructions for Windows
description: ThingsBoard upgrade guide for Windows
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

Download ThingsBoard installation file for Windows: [thingsboard-windows-4.2.1.zip](https://github.com/thingsboard/thingsboard/releases/download/v4.2.1/thingsboard-windows-4.2.1.zip).

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
C:\thingsboard>upgrade.bat
```
{: .copy-code}

#### Start the service

```text
net start thingsboard
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

Download ThingsBoard installation file for Windows: [thingsboard-windows-4.2.zip](https://github.com/thingsboard/thingsboard/releases/download/v4.2/thingsboard-windows-4.2.zip).

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
C:\thingsboard>upgrade.bat
```
{: .copy-code}

#### Start the service

```text
net start thingsboard
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

Download ThingsBoard installation archive for Windows: [thingsboard-windows-4.1.zip](https://github.com/thingsboard/thingsboard/releases/download/v4.1/thingsboard-windows-4.1.zip).

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
C:\thingsboard>upgrade.bat
```
{: .copy-code}

#### Start the service

```text
net start thingsboard
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

Download ThingsBoard installation archive for Windows: [thingsboard-windows-4.0.2.zip](https://github.com/thingsboard/thingsboard/releases/download/v4.0.2/thingsboard-windows-4.0.2.zip).

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
C:\thingsboard>upgrade.bat
```
{: .copy-code}

#### Start the service

```text
net start thingsboard
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

Download ThingsBoard installation archive for Windows: [thingsboard-windows-4.0.1.zip](https://github.com/thingsboard/thingsboard/releases/download/v4.0.1/thingsboard-windows-4.0.1.zip).

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
C:\thingsboard>upgrade.bat
```
{: .copy-code}

#### Start the service

```text
net start thingsboard
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

Download ThingsBoard installation archive for Windows: [thingsboard-windows-4.0.zip](https://github.com/thingsboard/thingsboard/releases/download/v4.0/thingsboard-windows-4.0.zip).

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
C:\thingsboard>upgrade.bat
```
{: .copy-code}

#### Start the service

```text
net start thingsboard
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

Download ThingsBoard installation archive for Windows: [thingsboard-windows-3.9.1.zip](https://github.com/thingsboard/thingsboard/releases/download/v3.9.1/thingsboard-windows-3.9.1.zip).

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
C:\thingsboard>upgrade.bat
```
{: .copy-code}

#### Start the service

```text
net start thingsboard
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

Download ThingsBoard installation archive for Windows: [thingsboard-windows-3.9.zip](https://github.com/thingsboard/thingsboard/releases/download/v3.9/thingsboard-windows-3.9.zip).

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
C:\thingsboard>upgrade.bat --fromVersion=3.8.1
```
{: .copy-code}

#### Start the service

```text
net start thingsboard
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

Download ThingsBoard installation archive for Windows: [thingsboard-windows-3.8.1.zip](https://github.com/thingsboard/thingsboard/releases/download/v3.8/thingsboard-windows-3.8.zip).

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

#### Start the service

```text
net start thingsboard
```
{: .copy-code}


### Upgrading ThingsBoard CE to 3.8.0

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.7. In order to upgrade to 3.8 you need to [**upgrade to 3.7 first**](#upgrading-to-370).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-3.8.zip](https://github.com/thingsboard/thingsboard/releases/download/v3.8/thingsboard-windows-3.8.zip).

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
C:\thingsboard>upgrade.bat --fromVersion=3.7.0
```
{: .copy-code}

#### Start the service

```text
net start thingsboard
```
{: .copy-code}


### Upgrading ThingsBoard CE to 3.7.0

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.6.4. In order to upgrade to 3.7 you need to [**upgrade to 3.6.4 first**](#upgrading-to-364).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

{% include templates/install/tb-370-update-windows.md %}

#### ThingsBoard package download

Download ThingsBoard installation archive for Windows: [thingsboard-windows-3.7.zip](https://github.com/thingsboard/thingsboard/releases/download/v3.7/thingsboard-windows-3.7.zip).

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
C:\thingsboard>upgrade.bat --fromVersion=3.6.4
```
{: .copy-code}

#### Start the service

```text
net start thingsboard
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

Download ThingsBoard installation archive for Windows: [thingsboard-windows-3.6.4.zip](https://github.com/thingsboard/thingsboard/releases/download/v3.6.4/thingsboard-windows-3.6.4.zip).

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
C:\thingsboard>upgrade.bat --fromVersion=3.6.3
```
{: .copy-code}

#### Start the service

```text
net start thingsboard
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


### Upgrading ThingsBoard CE to 3.6.2

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.6.1. In order to upgrade to 3.6.2 you need to [**upgrade to 3.6.1 first**](#upgrading-to-361).
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


### Upgrading ThingsBoard CE to 3.6.1

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.6. In order to upgrade to 3.6.1 you need to [**upgrade to 3.6 first**](#upgrading-to-360).
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


### Upgrading ThingsBoard CE to 3.6.0

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.5.1. In order to upgrade to 3.6 you need to [**upgrade to 3.5.1 first**](#upgrading-to-351).
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


### Upgrading ThingsBoard CE to 3.5.1

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.5. In order to upgrade to 3.5.1 you need to [**upgrade to 3.5 first**](#upgrading-to-350).
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


### Upgrading ThingsBoard CE to 3.5.0

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.4.4. In order to upgrade to 3.5 you need to [**upgrade to 3.4.4 first**](#upgrading-to-344).
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


### Upgrading ThingsBoard CE to 3.4.4

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.4.3. In order to upgrade to 3.4.4 you need to [**upgrade to 3.4.3 first**](#upgrading-to-343).
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


### Upgrading ThingsBoard CE to 3.4.3

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.4.2. In order to upgrade to 3.4.3 you need to [**upgrade to 3.4.2 first**](#upgrading-to-342).
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


### Upgrading ThingsBoard CE to 3.4.2

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.4.1. In order to upgrade to 3.4.2 you need to [**upgrade to 3.4.1 first**](#upgrading-to-341).
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


### Upgrading ThingsBoard CE to 3.4

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.3.4.1. In order to upgrade to 3.4 you need to [**upgrade to 3.3.4.1 first**](#upgrading-to-3341).
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


### Upgrading ThingsBoard CE to 3.3.4.1

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.3.4. In order to upgrade to 3.3.4.1 you need to [**upgrade to 3.3.4 first**](#upgrading-to-334).
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


### Upgrading ThingsBoard CE to 3.3.4

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.3.3. In order to upgrade to 3.3.4 you need to [**upgrade to 3.3.3 first**](#upgrading-to-333).
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


### Upgrading ThingsBoard CE to 3.3.3

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.3.2. In order to upgrade to 3.3.3 you need to [**upgrade to 3.3.2 first**](#upgrading-to-332).

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


### Upgrading ThingsBoard CE to 3.3.2

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.3.1. In order to upgrade to 3.3.2 you need to [**upgrade to 3.3.1 first**](#upgrading-to-331).

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


### Upgrading ThingsBoard CE to 3.3.1

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.3.0. In order to upgrade to 3.3.1 you need to [**upgrade to 3.3.0 first**](#upgrading-to-33).

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


### Upgrading ThingsBoard CE to 3.3

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.2.2. In order to upgrade to 3.3 you need to [**upgrade to 3.2.2 first**](#upgrading-to-322).

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


### Upgrading ThingsBoard CE to 3.2.2

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.2.1. In order to upgrade to 3.2.2 you need to [**upgrade to 3.2.1 first**](#upgrading-to-321).

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


### Upgrading ThingsBoard CE to 3.2.1

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.2. In order to upgrade to 3.2.1 you need to [**upgrade to 3.2 first**](#upgrading-to-32).

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


### Upgrading ThingsBoard CE to 3.2

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.1.1. In order to upgrade to 3.2 you need to [**upgrade to 3.1.1 first**](#upgrading-to-311).

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


### Upgrading ThingsBoard CE to 3.1.1

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.1. In order to upgrade to 3.1.1 you need to [**upgrade to 3.1 first**](#upgrading-to-31).

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


### Upgrading ThingsBoard CE to 3.1

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.0.1. In order to upgrade to 3.1 you need to [**upgrade to 3.0.1 first**](#upgrading-to-301).

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
C:\thingsboard>upgrade.bat --fromVersion=cassandra-latest-to-postgres
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


### Upgrading ThingsBoard CE to 3.0.1

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.0. In order to upgrade to 3.0.1 you need to [**upgrade to 3.0 first**](#upgrading-to-30).

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


### Upgrading ThingsBoard CE to 3.0

**NOTE**: These upgrade steps are applicable for ThingsBoard version 2.5.6. In order to upgrade to 3.0 you need to [**upgrade to 2.5.6 first**](/docs/user-guide/install/upgrade-instructions/windows/v2-5-6/).

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


### Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}
