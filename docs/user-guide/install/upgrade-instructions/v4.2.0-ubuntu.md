---
layout: docwithnav
title: Upgrade to v4.2 (Ubuntu)
description: ThingsBoard upgrade guide for Ubuntu - v4.2
hidetoc: "true"
breadcrumbs: "true"
breadcrumbs-steps: "1"
---

### Ubuntu

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 4.1.x. In order to upgrade to 4.2 you need to [**upgrade to 4.1.x first**](/docs/user-guide/install/upgrade-instructions/v4.1.0-ubuntu/).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### ThingsBoard package download

```bash
{% include_relative resources/4.2/thingsboard-ubuntu-download.sh %}
```
{: .copy-code}

#### ThingsBoard service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

```bash
{% include_relative resources/4.2/thingsboard-ubuntu-installation.sh %}
```
{: .copy-code}

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
