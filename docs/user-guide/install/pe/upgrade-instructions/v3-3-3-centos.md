---
layout: docwithnav-pe
title: Upgrade to v3.3.3 (Centos)
description: ThingsBoard PE upgrade guide for Centos - v3.3.3
hidetoc: "true"
breadcrumbs: "true"
breadcrumbs-steps: "1"
---

### CentOS

**NOTE**: These upgrade steps are applicable for ThingsBoard version 3.3.2PE. In order to upgrade to 3.3.3PE you need to [**upgrade to 3.3.2PE first**](/docs/user-guide/install/pe/upgrade-instructions/v3.3.2-centos/).

{% include templates/install/tb-333-update.md %}

#### ThingsBoard PE package download

{% include resources.liquid version="3.3.3" kind="centos-download" pe="true" %}

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```bash
$ sudo service thingsboard stop
```

* Install Thingsboard Web Report component as described [here](/docs/user-guide/install/pe/ubuntu/#step-9-install-thingsboard-webreport-component).


{% include resources.liquid version="3.3.3" kind="centos-installation" pe="true" %}

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
