---
layout: docwithnav-pe
title: Installing ThingsBoard PE from GCP Marketplace
description: Installing ThingsBoard PE from Google Cloud Platform Marketplace
redirect_from: "/docs/user-guide/install/pe/gcp2/"
---

This guide describes how to install ThingsBoard Professional Edition from GCP Marketplace. 
Using this guide you will install bring-your-own-license (BYOL) version of the product.
Basically, you get the license directly from ThingsBoard, Inc, but purchase corresponding server instances and infrastructure from GCP.       

* TOC
{:toc}

### Prerequisites

- Active [GCP](https://cloud.google.com/){:target="_blank"} account

### Step 1. Launch ThingsBoard PE BYOL

Open [ThingsBoard Professional Edition BYOL](https://console.cloud.google.com/marketplace/details/thingsboard-public/thingsboard-pe) product page on GCP Marketplace.

![image](/images/user-guide/install/gcp-marketplace-pe/launch.png) 

- Click the **Launch on Compute Engine** button

- You can take the default settings or customize them. When complete click **Deploy** button

![image](/images/user-guide/install/gcp-marketplace-pe/deploy.png) 

That's it! Your ThingsBoard instance is now deploying! When complete you should see:

![image](/images/user-guide/install/gcp-marketplace-pe/ssh.png) 

- Click the **SSH** button. This will open the SSH session in the browser window. Don't close this window. We will use it in Step 3.1.

### Step 2. Obtain your license secret

In order to activate your ThingsBoard instance you will need to get the license secret. 
ThingsBoard Licenses are managed by [ThingsBoard License Portal](https://license.thingsboard.io/signup).   

Please register on [ThingsBoard License Portal](https://license.thingsboard.io/signup) to get your license. 
See [How-to get pay-as-you-go subscription](https://www.youtube.com/watch?v=dK-QDFGxWek){:target="_blank"} or [How-to get perpetual license](https://www.youtube.com/watch?v=GPe0lHolWek){:target="_blank"} for more details.
 
Please save your license secret to a safe place. We will use them later in this guide.
 
### Step 3. Configure your license secret

Once you get the license secret, you should put it to the thingsboard configuration file. 

#### Step 3.1. Put License Secret to thingsboard configuration file

Open the file for editing using the following command:

```bash 
sudo nano /etc/thingsboard/conf/thingsboard.conf
``` 
{: .copy-code}

Locate the following configuration block:

```bash
# License secret obtained from ThingsBoard License Portal (https://license.thingsboard.io)
# UNCOMMENT NEXT LINE AND PUT YOUR LICENSE SECRET:
# export TB_LICENSE_SECRET=
```

and put your license secret. Please don't forget to uncomment the export statement. See example below: 

```bash
# License secret obtained from ThingsBoard License Portal (https://license.thingsboard.io)
# UNCOMMENT NEXT LINE AND PUT YOUR LICENSE SECRET:
export TB_LICENSE_SECRET=YOUR_LICENSE_SECRET_HERE
``` 

### Step 4. Launch ThingsBoard service  

Execute the following command to start ThingsBoard:

```bash
sudo service thingsboard start
```
{: .copy-code}

{% capture 90-sec-ui %}
Please allow up to 120 seconds for the Web UI to start. This is applicable only for slow machines with 1-2 CPUs or 1-2 GB RAM.{% endcapture %}
{% include templates/info-banner.md content=90-sec-ui %}

### Step 5. Connect to Thingsboard UI

Now you can open this link in your browser:

![image](/images/user-guide/install/gcp-marketplace-pe/admin-panel.png) 

Use this login to connect as system Administrator 

- **sysadmin@thingsboard.org**

Default password for System Administrator is **sysadmin** 

Now you can proceed to the next steps.

### Post-installation steps

**Configure HAProxy to enable HTTPS**

 * Step 1. Assign valid domain name system (DNS) record to your instance external IP address.
 * Step 2. Connect to your instance using SSH or PuTTY using instructions from the previous questions above.
 * Step 3. Execute the following commands:
 ```bash
 sudo certbot-certonly --domain smth.yourcompany.com --email support@yourcompany.com
 sudo haproxy-refresh
 ```
{: .copy-code}

    where **smth.yourcompany.com** is your DNS name from the second step
    and **support@yourcompany.com** is your email to get notifications from [certbot](https://certbot.eff.org/). 
