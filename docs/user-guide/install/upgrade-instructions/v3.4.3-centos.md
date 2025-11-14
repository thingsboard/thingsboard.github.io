---
layout: docwithnav
title: Upgrade to v3.4.3 (Centos)
description: ThingsBoard upgrade guide for Centos - v3.4.3
hidetoc: "true"
breadcrumbs: "true"
breadcrumbs-steps: "1"
---

### CentOS

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.4.2. In order to upgrade to 3.4.3 you need to [**upgrade to 3.4.2 first**](/docs/user-guide/install/upgrade-instructions/v3.4.2-centos/).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

```bash
{% include_relative resources/3.4.3/thingsboard-centos-download.sh %}
```
{: .copy-code}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

```bash
{% include_relative resources/3.4.3/thingsboard-centos-installation.sh %}
```
{: .copy-code}

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
