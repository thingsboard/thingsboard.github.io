---
layout: docwithnav-pe
title: ThingsBoard PE upgrade instructions for Windows
description: ThingsBoard PE upgrade guide for Windows
hidetoc: true
breadcrumbs: true
breadcrumbs-steps: 1

---

* TOC
{:toc}

### Upgrading ThingsBoard PE to 4.2.1

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 4.2.xPE. In order to upgrade to 4.2.1PE you need to [**upgrade to 4.2PE first**](#upgrading-to-420).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-4.2.1pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-4.2.1pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run the **thingsboard-windows-setup-4.2.1pe.exe**.
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


### Upgrading ThingsBoard PE to 4.2.0

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 4.1.xPE. In order to upgrade to 4.2PE you need to [**upgrade to 4.1PE first**](#upgrading-to-410).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-4.2pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-4.2pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run the **thingsboard-windows-setup-4.2pe.exe**.
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


### Upgrading ThingsBoard PE to 4.1.0

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.9.xPE and ThingsBoard version 4.0.xPE. In order to upgrade to 4.1PE you need to [**upgrade to 4.0.2PE first**](#upgrading-to-402).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-4.1pe.zip](https://dist.thingsboard.io/thingsboard-windows-4.1pe.zip).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Copy content of the **thingsboard-windows-4.1pe.zip** to the same location.
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


### Upgrading ThingsBoard PE to 4.0.2

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.9.xPE and ThingsBoard version 4.0.xPE. In order to upgrade to 4.0.2PE you need to [**upgrade to 3.9.1PE first**](#upgrading-to-391).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-4.0.2pe.zip](https://dist.thingsboard.io/thingsboard-windows-4.0.2pe.zip).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Copy content of the **thingsboard-windows-4.0.2pe.zip** to the same location.
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


### Upgrading ThingsBoard PE to 4.0.1

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.9.xPE. In order to upgrade to 4.0.1PE you need to [**upgrade to 3.9.1PE first**](#upgrading-to-391).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-4.0.1pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-4.0.1pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-4.0.1pe.exe**.
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


### Upgrading ThingsBoard PE to 4.0.0

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.9.xPE. In order to upgrade to 4.0PE you need to [**upgrade to 3.9.1PE first**](#upgrading-to-391).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-4.0pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-4.0pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-4.0pe.exe**.
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


### Upgrading ThingsBoard PE to 3.9.1

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.9PE. In order to upgrade to 3.9PE you need to [**upgrade to 3.9PE first**](#upgrading-to-390).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard PE package download

Download and extract ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.9.1pe.zip](https://dist.thingsboard.io/thingsboard-windows-3.9.1pe.zip).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Copy content of the **thingsboard-windows-3.9.1pe.zip** to the same location.
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


### Upgrading ThingsBoard PE to 3.9.0

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.8.1PE. In order to upgrade to 3.9PE you need to [**upgrade to 3.8.1PE first**](#upgrading-to-381).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.9pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.9pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.8pe.exe**.
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


### Upgrading ThingsBoard PE to 3.8.1

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.8PE. In order to upgrade to 3.8.1PE you need to [**upgrade to 3.8PE first**](#upgrading-to-380).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.8.1pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.8.1pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.8.1pe.exe**.
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


### Upgrading ThingsBoard PE to 3.8.0

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.7PE. In order to upgrade to 3.8PE you need to [**upgrade to 3.7PE first**](#upgrading-to-370).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.8pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.8pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.8pe.exe**.
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


### Upgrading ThingsBoard PE to 3.7.0

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.6.4PE. In order to upgrade to 3.7PE you need to [**upgrade to 3.6.4PE first**](#upgrading-to-364).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

{% include templates/install/tb-370-update-windows.md %}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.7pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.7pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.7pe.exe**.
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


### Upgrading ThingsBoard PE to 3.6.4

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.6.3PE. In order to upgrade to 3.6.4PE you need to [**upgrade to 3.6.3PE first**](#upgrading-to-363).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.6.4pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.6.4pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.6.4pe.exe**.
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


### Upgrading ThingsBoard PE to 3.6.3

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.6.2PE. In order to upgrade to 3.6.3PE you need to [**upgrade to 3.6.2PE first**](#upgrading-to-362).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.6.3pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.6.3pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.6.3pe.exe**.
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


### Upgrading ThingsBoard PE to 3.6.2

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.6.1PE. In order to upgrade to 3.6.2PE you need to [**upgrade to 3.6.1PE first**](#upgrading-to-361).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.6.2pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.6.2pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.6.2pe.exe**.
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


### Upgrading ThingsBoard PE to 3.6.1

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.6PE. In order to upgrade to 3.6.1PE you need to [**upgrade to 3.6PE first**](#upgrading-to-360).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.6.1pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.6.1pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.6.1pe.exe**.
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


### Upgrading ThingsBoard PE to 3.6.0

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.5.1PE. In order to upgrade to 3.6PE you need to [**upgrade to 3.5.1PE first**](#upgrading-to-351).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.6pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.6pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.6pe.exe**.
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


### Upgrading ThingsBoard PE to 3.5.1

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.5PE. In order to upgrade to 3.5.1PE you need to [**upgrade to 3.5PE first**](#upgrading-to-350).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.5.1pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.5.1pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.5.1pe.exe**.
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


### Upgrading ThingsBoard PE to 3.5.0

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.4.4PE. In order to upgrade to 3.5PE you need to [**upgrade to 3.4.4PE first**](#upgrading-to-344).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

{% include templates/install/tb-350-update.md %}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.5pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.5pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.5pe.exe**.
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


### Upgrading ThingsBoard PE to 3.4.4

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.4.3PE. In order to upgrade to 3.4.4PE you need to [**upgrade to 3.4.3PE first**](#upgrading-to-343).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.4.4pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.4.4pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.4.4pe.exe**.
* Compare and merge your old ThingsBoard configuration files (from the backup you made in the first step) with new ones.

#### Start the service

```text
net start thingsboard
```
{: .copy-code}


### Upgrading ThingsBoard PE to 3.4.3

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.4.2PE. In order to upgrade to 3.4.3PE you need to [**upgrade to 3.4.2PE first**](#upgrading-to-342).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.4.3pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.4.3pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.4.3pe.exe**.
* Compare and merge your old ThingsBoard configuration files (from the backup you made in the first step) with new ones.

#### Start the service

```text
net start thingsboard
```
{: .copy-code}


### Upgrading ThingsBoard PE to 3.4.2

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.4.1PE. In order to upgrade to 3.4.2PE you need to [**upgrade to 3.4.1PE first**](#upgrading-to-341).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.4.2pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.4.2pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.4.2pe.exe**.
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
Update the JWT signing key if you use the default one "thingsboardDefaultSigningKey" on production environments. See [JWT security settings](/docs/pe/user-guide/ui/security-settings/#jwt-security-settings) for details.
{% endcapture %}
{% include templates/info-banner.md content=default-jwt %}


### Upgrading ThingsBoard PE to 3.4.1

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.4PE. In order to upgrade to 3.4.1PE you need to [**upgrade to 3.4PE first**](#upgrading-to-34).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.4.1pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.4.1pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.4.1pe.exe**.
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


### Upgrading ThingsBoard PE to 3.4

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.3.4.1PE. In order to upgrade to 3.4PE you need to [**upgrade to 3.3.4.1PE first**](#upgrading-to-3341).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.4pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.4pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.4pe.exe**.
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


### Upgrading ThingsBoard PE to 3.3.4.1

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.3.4PE. In order to upgrade to 3.3.4.1PE you need to [**upgrade to 3.3.4PE first**](#upgrading-to-334).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-3.3.4.1pe.zip](https://dist.thingsboard.io/thingsboard-windows-3.3.4.1pe.zip).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Unzip installation archive to ThingsBoard install dir.
* Compare and merge your old ThingsBoard configuration files (from the backup you made in the first step) with new ones.

#### Start the service

```text
net start thingsboard
```
{: .copy-code}


### Upgrading ThingsBoard PE to 3.3.4

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.3.3PE. In order to upgrade to 3.3.4PE you need to [**upgrade to 3.3.3PE first**](#upgrading-to-333).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-3.3.4pe.zip](https://dist.thingsboard.io/thingsboard-windows-3.3.4pe.zip).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
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


### Upgrading ThingsBoard PE to 3.3.3

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.3.2PE. In order to upgrade to 3.3.3PE you need to [**upgrade to 3.3.2PE first**](#upgrading-to-332).

{% include templates/install/tb-333-update.md %}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.3.3pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.3.3pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.3.3pe.exe**.
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


### Upgrading ThingsBoard PE to 3.3.2

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.3.1PE. In order to upgrade to 3.3.2PE you need to [**upgrade to 3.3.1PE first**](#upgrading-to-331).

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.3.2pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.3.2pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.3.1pe.exe**.
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


### Upgrading ThingsBoard PE to 3.3.1

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.3.0PE. In order to upgrade to 3.3.1PE you need to [**upgrade to 3.3.0PE first**](#upgrading-to-33).

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.3.1pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.3.1pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.3.1pe.exe**.
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

```text
net start thingsboard
```
{: .copy-code}


### Upgrading ThingsBoard PE to 3.3

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.2.2PE. In order to upgrade to 3.3PE you need to [**upgrade to 3.2.2PE first**](#upgrading-to-322).

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.3pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.3pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.3pe.exe**.
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

```text
net start thingsboard
```
{: .copy-code}


### Upgrading ThingsBoard PE to 3.2.2

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.2.1PE. In order to upgrade to 3.2.2PE you need to [**upgrade to 3.2.1PE first**](#upgrading-to-321).

<br>

{% capture tb_3_2_2pe_java_11_windows %}
**NOTE: Since ThingsBoard version 3.2.2PE Java 11 is used**
- Please install Java 11 before proceeding upgrade procedure using the following guide:
  - [Java 11 Installation on Windows](/docs/user-guide/install/pe/windows/#step-1-install-java-11-openjdk)

{% endcapture %}
{% include templates/warn-banner.md content=tb_3_2_2pe_java_11_windows %}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.2.2pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.2.2pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.2.2pe.exe**.
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

```text
net start thingsboard
```
{: .copy-code}


### Upgrading ThingsBoard PE to 3.2.1

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.2PE. In order to upgrade to 3.2.1PE you need to [**upgrade to 3.2PE first**](#upgrading-to-32).

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.2.1pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.2.1pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.2.1pe.exe**.
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

```text
net start thingsboard
```
{: .copy-code}


### Upgrading ThingsBoard PE to 3.2

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.1.1PE. In order to upgrade to 3.2PE you need to [**upgrade to 3.1.1PE first**](#upgrading-to-311).

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.2pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.2pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.2pe.exe**.
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

```text
net start thingsboard
```
{: .copy-code}


### Upgrading ThingsBoard PE to 3.1.1

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.1PE. In order to upgrade to 3.1.1PE you need to [**upgrade to 3.1PE first**](#upgrading-to-31).

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.1.1pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.1.1pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.1.1pe.exe**.
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

```text
net start thingsboard
```
{: .copy-code}


### Upgrading ThingsBoard PE to 3.1

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.0.1PE. In order to upgrade to 3.1PE you need to [**upgrade to 3.0.1PE first**](#upgrading-to-301).

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.1pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.1pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.1pe.exe**.
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

```text
net start thingsboard
```
{: .copy-code}


### Upgrading ThingsBoard PE to 3.0.1

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.0PE. In order to upgrade to 3.0.1PE you need to [**upgrade to 3.0PE first**](#upgrading-to-30).

<br>

{% include templates/install/tb-30-update.md %}

{% capture tb_3_0_1_postgreSQL_windows %}
**Since ThingsBoard 3.0PE only PostgreSQL database is supported for entities data**
- If you are using **Cassandra** database for entities data please install PostgreSQL database before proceeding upgrade procedure using the following guide:
  - [PostgreSQL Installation on Windows](/docs/user-guide/install/pe/windows/?ubuntuThingsboardDatabase=postgresql#step-4-configure-thingsboard-database)

{% endcapture %}
{% include templates/info-banner.md content=tb_3_0_1_postgreSQL_windows %}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.0.1pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.0.1pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.0.1pe.exe**.
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
C:\thingsboard>upgrade.bat --fromVersion=2.5.0PE-cassandra
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


### Upgrading ThingsBoard PE to 3.0

{% capture tb_3_0_postgreSQL_windows %}
**Since ThingsBoard 3.0PE only PostgreSQL database is supported for entities data**  
 - If you are using **Cassandra** database for entities data please install PostgreSQL database before proceeding upgrade procedure using the following guide:
   - [PostgreSQL Installation on Windows](/docs/user-guide/install/pe/windows/?ubuntuThingsboardDatabase=postgresql#step-4-configure-thingsboard-database)

{% endcapture %}
{% include templates/info-banner.md content=tb_3_0_postgreSQL_windows %}

#### ThingsBoard PE package download

Download ThingsBoard PE installation package for Windows: [thingsboard-windows-setup-3.0pe.exe](https://dist.thingsboard.io/thingsboard-windows-setup-3.0pe.exe).

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.
 
```text
net stop thingsboard
```
{: .copy-code}

* Make a backup of previous ThingsBoard PE configuration located in \<ThingsBoard install dir\>\conf (for ex. C:\thingsboard\conf).
* Run installation package **thingsboard-windows-setup-3.0pe.exe**.
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
C:\thingsboard>upgrade.bat --fromVersion=2.5.0PE-cassandra
```
{: .copy-code}

Otherwise execute regular upgrade script:

```text
C:\thingsboard>upgrade.bat --fromVersion=2.5.0
```
{: .copy-code}
#### Start the service

```text
net start thingsboard
```
{: .copy-code}

### Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}
