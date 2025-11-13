---
layout: docwithnav
title: Upgrade to v3.9 (Centos)
description: ThingsBoard upgrade guide for Centos - v3.9
hidetoc: "true"
breadcrumbs: "true"
breadcrumbs-steps: "1"
---

### CentOS

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.8.1. In order to upgrade to 3.9 you need to [**upgrade to 3.8.1 first**](/docs/user-guide/install/upgrade-instructions/v3.8.1-centos/).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

```bash
{% include_relative resources/3.9/thingsboard-centos-download.sh %}
```
{: .copy-code}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

```bash
{% include_relative resources/3.9/thingsboard-centos-installation.sh %}
```
{: .copy-code}

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
