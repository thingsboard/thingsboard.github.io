---
layout: docwithnav
title: Installing ThingsBoard on DigitalOcean 
description: Installing ThingsBoard on DigitalOcean

---

This guide describes how to install ThingsBoard Community Edition on DigitalOcean. 

* TOC
{:toc}

{% include templates/install/digital-ocean-droplet.md %} 

### Step 4. Use regular installation instruction for Ubuntu

Please navigate to the ThingsBoard [**installation instruction**](/docs/user-guide/install/ubuntu/) 
for Ubuntu and complete the installation steps.

**Note:** Use your droplet IP address instead of "localhost" to access the instance WEB UI.

### Post-installation steps

{% include templates/install/ubuntu-haproxy-postinstall.md %}

### Troubleshooting

{% include templates/install/troubleshooting.md %}

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}




