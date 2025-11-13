---
layout: docwithnav
title: Upgrade to v3.3.3 (Windows)
description: ThingsBoard upgrade guide for Windows - v3.3.3
hidetoc: "true"
breadcrumbs: "true"
breadcrumbs-steps: "1"
---

### Windows

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.3.2. In order to upgrade to 3.3.3 you need to [**upgrade to 3.3.2 first**](/docs/user-guide/install/upgrade-instructions/v3.3.2-windows/).

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
