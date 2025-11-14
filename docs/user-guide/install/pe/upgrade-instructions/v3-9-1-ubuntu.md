---
layout: docwithnav-pe
title: Upgrade to v3.9.1 (Ubuntu)
description: ThingsBoard PE upgrade guide for Ubuntu - v3.9.1
hidetoc: "true"
breadcrumbs: "true"
breadcrumbs-steps: "1"
---

### Ubuntu

{% capture difference %}
**NOTE:**
<br>
These upgrade steps are applicable for ThingsBoard version 3.9PE. In order to upgrade to 3.9.1PE you need to [**upgrade to 3.9PE first**](/docs/user-guide/install/pe/upgrade-instructions/v3.9.0-ubuntu/).
{% endcapture %}
{% include templates/info-banner.md content=difference %}


#### ThingsBoard PE package download

{% include resources.liquid version="3.9.1" kind="ubuntu-download" pe="true" %}

#### ThingsBoard PE service upgrade

* Stop ThingsBoard service if it is running.

```bash
sudo service thingsboard stop
```
{: .copy-code}

* Install Thingsboard Web Report component as described [here](/docs/user-guide/install/pe/ubuntu/#step-9-install-thingsboard-webreport-component).

{% include resources.liquid version="3.9.1" kind="ubuntu-installation" pe="true" %}

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
