---
layout: docwithnav
title: Getting started with ThingsBoard Edge
description: Getting started with ThingsBoard Edge

---

* TOC
{:toc}

## Prerequisites

{% capture beta_note %}
**Important note before upgrading cloud to ThingsBoard 2.6.0beta / ThingsBoard 2.6.0PE-beta**
 - ThingsBoard Edge and ThingsBoard CE/PE version that support Edge functionality is currently in **beta** phase, so please upgrade only in case you are interested in evaluating the Edge functionality
 - Usage of the **beta** version in your production environment not recommended and could be used only on your own risk 


{% endcapture %}
{% include templates/info-banner.md content=beta_note %}

{% capture beta_note %}
**Important note before upgrading cloud to ThingsBoard 2.6.0beta / ThingsBoard 2.6.0PE-beta**
 - At the moment Edge functionality only supported by ThingsBoard version (**ThingsBoard 2+**) that uses AngularJS. 
 - We are actively working on ThingsBoard Edge version that will be able to support Angular 9 (**ThingsBoard 3+**) as well.
{% endcapture %}
{% include templates/info-banner.md content=beta_note %}

In order to use ThingsBoard Edge you'll need to install or upgrade your existing ThingsBoard CE/PE version to **2.6.0beta / 2.6.0PE-beta**.

## Step 1: Upgrading ThingsBoard CE/PE (cloud) to 2.6.0beta / 2.6.0PE-beta {#upgrading-to-260beta}

{% capture contenttogglespeccloud %}
ThingsBoard Community Edition%,%ce%,%templates/thingsboard-edge/upgrade-ce-to-2-6-0-beta.md%br%
ThingsBoard Professional Edition%,%pe%,%templates/thingsboard-edge/upgrade-pe-to-2-6-0-beta.md{% endcapture %}

{% include content-toggle.html content-toggle-id="ubuntuThingsboardVersion" toggle-spec=contenttogglespeccloud %} 

## Step 2. Obtain and configure license key

{% include templates/thingsboard-edge/obtain-license.md %}

## Step 3: Provision the edge

{% include templates/thingsboard-edge/add-edge.md %}

## Step 4: Install and connect edge to cloud

Browse available ThingsBoard Edge [**installation options**](/docs/thingsboard-edge/install/installation-options/) and choose the most suitable installation guide.
Follow steps in chosen ThingsBoard Edge installation guide to install, configure and connect edge to cloud.

## Next Steps with ThingsBoard Edge

{% include templates/thingsboard-edge/next-steps.md %}
