---
layout: docwithnav-pe
title: Upgrade to v3.3.4 (Windows)
description: ThingsBoard PE upgrade guide for Windows - v3.3.4
hidetoc: "true"
breadcrumbs: "true"
breadcrumbs-steps: "1"
---

### Windows

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.3.3PE. In order to upgrade to 3.3.4PE you need to [**upgrade to 3.3.3PE first**](/docs/user-guide/install/pe/upgrade-instructions/v3.3.3-windows/).
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
