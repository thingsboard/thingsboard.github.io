---
layout: docwithnav
title: Installing ThingsBoard PE from AWS Marketplace
description: Installing ThingsBoard PE from AWS Marketplace

---

This guide describes how to install ThingsBoard Professional Edition from AWS Marketplace. 

With this option you pay for Thingsboard Professional Edition on hourly basis.
 

* TOC
{:toc}

##### Prerequisites

- Active [Amazon AWS](https://aws.amazon.com/){:target="_blank"} account

##### Step 1. Select ThingsBoard PE Instance Type

Select one of the available AWS Marketplace Subscriptions:
- [AWS Marketplace: ThingsBoard PE Maker](https://aws.amazon.com/marketplace/pp/B07MLRVF3Q){:target="_blank"}
- [AWS Marketplace: ThingsBoard PE Prototype](https://aws.amazon.com/marketplace/pp/B07MLS5VMB){:target="_blank"}
- [AWS Marketplace: ThingsBoard PE Startup](https://aws.amazon.com/marketplace/pp/B07MQ1G36K){:target="_blank"}
- [AWS Marketplace: ThingsBoard PE Business](https://aws.amazon.com/marketplace/pp/B07MLRWV22){:target="_blank"}
- [AWS Marketplace: ThingsBoard PE Enterprise](https://aws.amazon.com/marketplace/pp/B07MBYZSFQ){:target="_blank"}

##### Step 2. Subscribe to Selected Instance Type

- Press **Continue to Subscribe** button

![image](/images/user-guide/install/aws-marketplace-pe/tb-pe-mk-subscribe.png)

##### Step 3. Accept Terms and Conditions

- Review and Accept all Terms and Conditions

![image](/images/user-guide/install/aws-marketplace-pe/tb-pe-mk-accept.png)

##### Step 4. Continue to Configuration

Once Step 3 is completed you are able to save money by purchasing annual subscription and/or continue to configuration.

![image](/images/user-guide/install/aws-marketplace-pe/tb-pe-mk-configuration.png)

##### Step 5. Choose your Region

Select your region and continue to launch

![image](/images/user-guide/install/aws-marketplace-pe/tb-pe-mk-launch.png)

##### Step 6. Read Usage Instructions

Make sure you review the usage instructions

![image](/images/user-guide/install/aws-marketplace-pe/tb-pe-mk-usage.png)

##### Step 7. Choose your EC2 Instance Type

You can optionally change your EC2 Instance Type, VPC and Subnet. 

![image](/images/user-guide/install/aws-marketplace-pe/tb-pe-mk-launch-vpc.png)

##### Step 8. Configure Security Group Settings

Make sure you create new Security Group based on seller settings. You can optionally select different or create new KeyPair for your instance. 

![image](/images/user-guide/install/aws-marketplace-pe/tb-pe-mk-launch-security.png)

Populate necessary Security Group name and details and save new group

![image](/images/user-guide/install/aws-marketplace-pe/tb-pe-mk-new-security-group.png)

Finally, click "Launch".

![image](/images/user-guide/install/aws-marketplace-pe/tb-pe-mk-launch-launch.png)

##### Step 9. Open EC2 console

Once Launch is complete, you can navigate to EC2 console to find out the Public IP address of the newly created instance.

![image](/images/user-guide/install/aws-marketplace-pe/tb-pe-mk-launch-complete.png)

##### Step 10. Obtain your Public IP and EC2 Instance ID

In AWS EC2 console you need to wait while instance state will be changes to **running** and all Status checks will be finished.

![image](/images/user-guide/install/aws-marketplace-pe/tb-pe-mk-ec2-console.png)

On the image above example instance has this Public DNS name 

- **ec2-54-82-252-113.compute-1.amazonaws.com**

Instance ID 

- **i-03d850e6a818328e4**

##### Step 11. Connect to Thingsboard UI

Now you can open this link in your browser:

- http://PUBLIC_DNS_NAME/login

In this example:

- http://ec2-54-82-252-113.compute-1.amazonaws.com/login

Use this login to connect as system Administrator 

- **sysadmin@thingsboard.org**

Default password for System Administrator is Instance ID (from Step 10). In this example: 

-  **i-03d850e6a818328e4**

Now you can proceed to the next steps.

## Frequently Asked Questions

See [**FAQ**](/products/thingsboard-pe/aws/#frequently-asked-questions) for information.

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}
