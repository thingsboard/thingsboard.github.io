---
layout: docwithnav
title: Getting started with ThingsBoard Edge
description: Getting started with ThingsBoard Edge

---

* TOC
{:toc}

## Prerequisites

In order to use ThingsBoard Edge you will need to have ThingsBoard CE server that supports Edge functionality up and running. The easiest way is to use [Live Demo](https://demo.thingsboard.io/signup) server, that is already updated to the required version.

The alternative option is to install ThingsBoard CE server that supports Edge functionality on-premise. 
Please visit [Upgrade instructions for ThingsBoard CE server](/docs/thingsboard-edge/install/upgrade-ce-server/) to install **3.3beta** version of ThingsBoard CE server that supports Edge functionality before the official **3.3** ThingsBoard CE server release.
<br><br>

{% capture beta_note %}
**Important note before upgrading server to ThingsBoard 3.3beta**
 - ThingsBoard Edge and ThingsBoard CE **3.3beta** version that supports Edge functionality is currently in **beta** phase, so please upgrade only in case you are interested in evaluating the Edge functionality
 - Usage of the **beta** version in your production environment not recommended and could be used only on your own risk

{% endcapture %}
{% include templates/info-banner.md content=beta_note %}

{% capture pe_beta_note %}
ThingsBoard PE **3.3PE-beta** version that supports Edge functionality is currently in active development stage and will be available soon for evaluating. At the moment ThingsBoard Edge **beta** evaluation could be done only against ThingsBoard **CE** server version. 
{% endcapture %}
{% include templates/info-banner.md content= pe_beta_note %}

## Step 1. Obtain and configure license key

{% include templates/thingsboard-edge/obtain-license.md %}

## Step 2: Provision the edge

{% include templates/thingsboard-edge/add-edge.md %}

## Step 3: Install and connect edge to server

Browse available ThingsBoard Edge [**installation options**](/docs/thingsboard-edge/install/installation-options/) and choose the most suitable installation guide.
Follow steps in chosen ThingsBoard Edge installation guide to install, configure and connect edge to cloud.

## Next Steps with ThingsBoard Edge

{% include templates/thingsboard-edge/next-steps.md %}
