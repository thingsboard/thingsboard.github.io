---
layout: docwithnav-pe
title: Upgrade to v4.2.1 (Windows)
description: ThingsBoard PE upgrade guide for Windows - v4.2.1
hidetoc: "true"
breadcrumbs: "true"
breadcrumbs-steps: "1"
---

### Windows

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 4.2.xPE. In order to upgrade to 4.2.1PE you need to [**upgrade to 4.2PE first**](/docs/user-guide/install/pe/upgrade-instructions/v4.2.0-windows/).
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
