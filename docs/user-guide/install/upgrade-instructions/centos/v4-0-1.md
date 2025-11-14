---
layout: docwithnav
title: Upgrade to v4.0.1 (Centos)
description: ThingsBoard upgrade guide for Centos - v4.0.1
hidetoc: "true"
breadcrumbs: "true"
breadcrumbs-steps: "1"
---

### CentOS

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.9.x. In order to upgrade to 4.0.1 you need to [**upgrade to 3.9.x first**](/docs/user-guide/install/upgrade-instructions/v3.9.0-centos/).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

{% include resources.liquid version="4.0.1" kind="centos-download" %}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

{% include resources.liquid version="4.0.1" kind="centos-installation" %}

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
