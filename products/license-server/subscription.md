---
layout: docwithnav-license
assignees:
- ashvayka
title: ThingsBoard Subscription plans definition 
description: Features and advantages of pay-as-you-go payment model

---

 
 <div id="video">  
     <div id="video_wrapper">
         <iframe src="https://www.youtube.com/embed/dK-QDFGxWek" frameborder="0" allowfullscreen></iframe>
     </div>
 </div>
 <p></p>


ThingsBoars Inc. provides for their customers two payment models, i. e. subscriptions (pay-as-you-go) and perpetual fallback.   
**Pay-as-you-go** is a billing system in which **ThingsBoard Professional Edition (TB PE)** customers purchase different kind of licenses on a time basis (no additional fees per messages or per devices). In other words this option allows to subscribe for ThingsBoard PE service. 
There are five pre-defined subscription plans that are limited by amount of devices and/or assets and support priority:

- ***Maker***
- ***Prototype***
- ***StartUp***
- ***Business***
- ***Enterprise***

Pay-as-you-go subscriptions are convenient for small companies and start-ups that are getting started with the platform and would like to minimize upfront licensing costs. Although pay-as-you-go model also fits needs of established businesses while developing and releasing IoT solution. See [pricing](/pricing/) for more details about available subscriptions. 
License Server allows to buy monthly or yearly subscriptions for ThingsBoard. In order to purchase the Subscription the customer may register on License portal and then follow simple steps: 
- Go to ***Subscriptions*** — ***Choose a product*** — Choose a plan — Input ***Billing info*** — ***Create***

or choose exact plan directly from [pricing](/pricing/). Once you press ***Get your license*** button you will be routed to the License portal authentication/registration or directly to ***Billing info*** step if you are already logged in on the License portal. 


By default, subscription covers single ThingsBoard PE instance (server process). However, customer can add more instances to the same subscription. This allows to launch multiple instances that use same subscription credentials in one server cluster.
This feature is very useful for container based setups.

![image](https://img.thingsboard.io/license/manageInstance.png)  

Once you purchase a subscription, you can flexibly upgrade or downgrade your subscription plan. If the subscription is deleted before expiration, Stripe will keep the balance. After a certain time period (about an hour) negative Amount due (***Account credit***) with the remain units will appear in [Billing section](/products/license-server/billing-info/) of License portal. This sum is deducted from Total fee whenever particular customer purchase a new plan or a perpetual license.

![image](https://img.thingsboard.io/license/subscription.png)  
 

### User Guide

 - **Launching TB PE using pay-as-you-go subscription**
 
 - **Launching TB PE using perpetual license**
 
 - **Migrating from AWS IoT Marketplace**
 
 - **Upgrading your TB PE subscription** 
 
 - **Moving ThingsBoard to another hardware instance** 


