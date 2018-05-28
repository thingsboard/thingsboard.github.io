---
layout: docwithnav
assignees:
- ashvayka
title: Installing ThingsBoard on AWS EC2
description: Installing ThingsBoard on AWS EC2

---

{% include templates/live-demo-banner.md %}

* TOC
{:toc}

This guide describes how to install ThingsBoard on AWS EC2 using public AWS AMIs.

##### Step 1. Choose AMI

Use one of the following links to start the installation:

 - [N. Virginia (us-east-1)](https://console.aws.amazon.com/ec2/v2/home?region=us-east-1#LaunchInstanceWizard:ami=ami-93588be9)
 - [Ohio (us-east-2)](https://console.aws.amazon.com/ec2/v2/home?region=us-east-2#LaunchInstanceWizard:ami=ami-3d163a58)
 - [N. California (us-west-1)](https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-21695441)
 - [Oregon (us-west-2)](https://console.aws.amazon.com/ec2/v2/home?region=us-west-2#LaunchInstanceWizard:ami=ami-b15794c9)
 - [Canada (ca-central-1)](https://console.aws.amazon.com/ec2/v2/home?region=ca-central-1#LaunchInstanceWizard:ami=ami-88c67eec)
 - [Ireland (eu-west-1)](https://console.aws.amazon.com/ec2/v2/home?region=eu-west-1#LaunchInstanceWizard:ami=ami-24fa245d)
 - [Frankfurt (eu-central-1)](https://console.aws.amazon.com/ec2/v2/home?region=eu-central-1#LaunchInstanceWizard:ami=ami-3ba41d54)
 - [London (eu-west-2)](https://console.aws.amazon.com/ec2/v2/home?region=eu-west-2#LaunchInstanceWizard:ami=ami-8e0914ea)
 - [Singapore (ap-southeast-1)](https://console.aws.amazon.com/ec2/v2/home?region=ap-southeast-1#LaunchInstanceWizard:ami=ami-b24400d1)
 - [Sydney (ap-southeast-2)](https://console.aws.amazon.com/ec2/v2/home?region=ap-southeast-2#LaunchInstanceWizard:ami=ami-33759851)
 - [Seoul (ap-northeast-2)](https://console.aws.amazon.com/ec2/v2/home?region=ap-northeast-2#LaunchInstanceWizard:ami=ami-3c993c52)
 - [Tokyo (ap-northeast-1)](https://console.aws.amazon.com/ec2/v2/home?region=ap-northeast-1#LaunchInstanceWizard:ami=ami-cd875dab)
 - [Mumbai (ap-south-1)](https://console.aws.amazon.com/ec2/v2/home?region=ap-south-1#LaunchInstanceWizard:ami=ami-0cf7b463)
 - [São Paulo (sa-east-1)](https://console.aws.amazon.com/ec2/v2/home?region=sa-east-1#LaunchInstanceWizard:ami=ami-600d740c)
 
**NOTE** This AMIs are optimized for low memory instances, thus we do not recommend to use them for performance tests.
 
##### Step 2. Choose Instance Type

You can choose **any** instance type **except t1.micro and t2.nano**, since ThingsBoard server and related third-party requires 1Gb of RAM.
This instruction is verified on t2.micro which is eligible for free tier.   

##### Step 3. Configure Instance

No specific configuration items here. You can leave this tab without changes or apply a configuration that is specific to your use-case.

##### Step 4. Add Storage

Minimum 8 Gb of Storage is required. We recommend having at least 50 if you plan to upload some data.

##### Step 5. Add Tags

No specific configuration items here. You can leave this tab without changes or apply a configuration that is specific to your use-case.

##### Step 6: Configure Security Group

We recommend to create new security group, for example "ThingsBoard". Configure following inbound rules:

| Type            | Protocol | Port Range | Source    |
|-----------------|----------|------------|-----------|
| HTTP            | TCP      | 80         | 0.0.0.0/0 |
| SSH             | TCP      | 22         | 0.0.0.0/0 |
| Custom TCP Rule | TCP      | 1883       | 0.0.0.0/0 |
| Custom UDP Rule | UDP      | 5683       | 0.0.0.0/0 |

##### Step 7: Review and launch your instance

Once the instance is launched, please wait some time for services to boot up and open Administration UI in the browser using public DNS from instance details.

