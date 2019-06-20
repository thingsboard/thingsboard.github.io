---
layout: docwithnav
assignees:
- ashvayka
title: What is ThingsBoard License Server?
description: Features and advantages of ThingsBoard License Server

---

The **ThingsBoard License Server** is a proprietary billing solution that allows **ThingsBoard Professional Edition (TB PE)** customers to easily purchase license keys online.
The online payment processing is secured by [Stripe](https://stripe.com/), which allows both credit cards and wire transfer. 


You may already know that TB PE supports pay-as-you-go subscriptions and perpetual license models. 
The License Server was introduced in mid 2019, based on our experience of billing first 500 TB PE clients, for the following reasons:

 - **Deploy anywhere.** Before License Server, the pay-as-you-go subscription was available only on few marketplaces like AWS and Azure. 
  It was not technically possible to deploy a pay-as-you-go subscription on premises or any other clouds, like Digital Ocean or Alibaba Cloud.
  Now, you can launch your TB PE instance anywhere you like.
    
 - **Simplify upgrades.** Migration between subscription plans was possible, but not as easy and straightforward as it should be. 
 This process involved manual reconfiguration, DB backup/restore and obviously caused downtime.
 With License Server, this is done with just few clicks and no downtime at all.  
    
 - **Simplify purchase process.** Now you can easily purchase a yearly license online, without manual paperwork. 
 This allows to launch your instance in minutes. All invoices are available for download in the license portal in a PDF form.
 
 - **Improve customer experience.** Some cloud marketplaces are greedy for the customer's data. 
 It was hard for us to improve the customer satisfaction rate without direct communication with the client.
 
 - **Improved cluster setup process** With a modern microservices deployment approach, we added ability to setup single license key per all nodes in the ThingsBoard cluster. 
 This minimize efforts for cluster management and removes manual work required to add/remove nodes in the cluster. 
 Now you can launch several cluster nodes in a [floating mode](https://en.wikipedia.org/wiki/Floating_licensing) and actual ThingsBoard processes are not related to a physical hardware.
 
The License Server product is designed to be generic, and may be used to sell any software products with the pay-as-you-go or perpetual license models.
If you are interested to use it for selling your software, please [contact us](/docs/contact-us/).  
 
### Product features

 - **Pay-as-you-go subscriptions**
 
License Server allows to purchase monthly or yearly subscriptions for ThingsBoard. See [pricing](TODO) for more details about available subscriptions.
Once you purchase a subscription, you can flexibly upgrade or downgrade your subscription plan. By default, subscription covers single ThingsBoard PE instance (server process). 
However, you can add more instances to the same subscription. This allows to launch multiple instances that use same subscription credentials in one server cluster.
This feature is very useful for container based setups.

Pay-as-you-go subscriptions are convenient for small companies and start-ups that are getting started with the platform and would like to minimize upfront licensing costs. 
Most of the subscriptions are limited by amount of devices and/or assets you can create.

 - **Perpetual fallback licenses**  
 
License Server allows to purchase perpetual fallback licenses. 
A perpetual fallback license is a license that allows you to use a specific version of software without an active subscription for it. 
When purchasing perpetual fallback license, you get one year of software updates included. After one year, you can continue using the platform.
You can purchase software updates for subsequent year for additional fee, typically 40% of the initial license cost.

Single perpetual fallback license covers single ThingsBoard PE instance (server process). 
For example, if you like to run ThingsBoard PE in a HA mode, you will need at least two licenses.

 - **Secure online payments via Stripe**
 
License Server is collecting Payments via [Stripe](https://stripe.com/). 
This means we use best practises in terms of security and processing of transactions provided by the most popular online payment platform.
ThingsBoard has no access to your credit card data. You can cancel your subscription at any time. 
ThingsBoard also provides ability to download electronic copy of the invoices.   

 - **Coupons**
 
License Server allows administrator to provision coupons. This coupons may be used by partners, distributors and for marketing campaigns.

 - **Hardware agnostic licensing**
 
License Server does not generate license keys based on hardware or VM parameters. 
License Server client issues periodic license check requests to the License Server. 
This requests validate that the subscription / perpetual license is valid and the number of launched instances does not exceed subscription threshold.
See [Architecture](#architecture) for more details. 

### Prerequisites

The License Server Client (e.g. your ThingsBoard PE instance) requires internet connection to host: license.thingsboard.io to issue license check requests. 
In case internet connection to the host is not available for more then 24 hours, License Server Client may shutdown ThingsBoard instance.  

### Architecture  

The License Server provides REST API for the License Server clients to **activate** and **check** licenses.

- **Instance Activation flow**

During first launch of ThingsBoard PE, built-in License Server Client generates an "Activate Instance Request" to the License Server. 
This request contains the license key and version info about the current platform installation. 
License Server lookup the subscription info based on the license key and replies with the instance id, subscription plan data and some magic bytes.
License Client stores this information locally and uses instance id and some magic bytes for the next license check requests. 

![image](/images/license/licenseActivation.gif)

License Client issues periodic license check requests to the License Server.
If those requests are not successful for configurable period of time (typically 24 hours), the license client will shut down the ThingsBoard PE instance.
In case of successful request, client may receive update to the subscription plan data. This may be caused by the update of subscription plan.   

![image](/images/license/licenseCheck.gif)    

### User Guide

 - **Launching TB PE using pay-as-you-go subscription**
 
 - **Launching TB PE using perpetual license**  
 
 - **Upgrading the subscription**
 
 - **Moving ThingsBoard to another hardware instance** 


