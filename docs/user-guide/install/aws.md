---
layout: docwithnav
assignees:
- ashvayka
title: Installing Thingsboard on AWS EC2
description: Installing Thingsboard on AWS EC2

---

{% include templates/live-demo-banner.md %}

* TOC
{:toc}

This guide describes how to install Thingsboard on AWS EC2 using public AWS AMIs.

##### Step 1. Choose AMI

Use one of the following links to start the installation:

 - [N. Virginia (us-east-1)](https://console.aws.amazon.com/ec2/v2/home?region=us-east-1#LaunchInstanceWizard:ami=ami-4663d150)
 - [Ohio (us-east-2)](https://console.aws.amazon.com/ec2/v2/home?region=us-east-2#LaunchInstanceWizard:ami=ami-920d29f7)
 - [N. California (us-west-1)](https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-cb5f04ab)
 - [Oregon (us-west-2)](https://console.aws.amazon.com/ec2/v2/home?region=us-west-2#LaunchInstanceWizard:ami=ami-5648c236)
 - [Canada (ca-central-1)](https://console.aws.amazon.com/ec2/v2/home?region=ca-central-1#LaunchInstanceWizard:ami=ami-4a25982e)
 - [Ireland (eu-west-1)](https://console.aws.amazon.com/ec2/v2/home?region=eu-west-1#LaunchInstanceWizard:ami=ami-af390bc9)
 - [Frankfurt (eu-central-1)](https://console.aws.amazon.com/ec2/v2/home?region=eu-central-1#LaunchInstanceWizard:ami=ami-e2ad7c8d)
 - [London (eu-west-2)](https://console.aws.amazon.com/ec2/v2/home?region=eu-west-2#LaunchInstanceWizard:ami=ami-04425660)
 - [Singapore (ap-southeast-1)](https://console.aws.amazon.com/ec2/v2/home?region=ap-southeast-1#LaunchInstanceWizard:ami=ami-171ea374)
 - [Sydney (ap-southeast-2)](https://console.aws.amazon.com/ec2/v2/home?region=ap-southeast-2#LaunchInstanceWizard:ami=ami-95faf6f6)
 - [Seoul (ap-northeast-2)](https://console.aws.amazon.com/ec2/v2/home?region=ap-northeast-2#LaunchInstanceWizard:ami=ami-993be8f7)
 - [Tokyo (ap-northeast-1)](https://console.aws.amazon.com/ec2/v2/home?region=ap-northeast-1#LaunchInstanceWizard:ami=ami-915901f6)
 - [Mumbai (ap-south-1)](https://console.aws.amazon.com/ec2/v2/home?region=ap-south-1#LaunchInstanceWizard:ami=ami-4f3d4e20)
 - [São Paulo (sa-east-1)](https://console.aws.amazon.com/ec2/v2/home?region=sa-east-1#LaunchInstanceWizard:ami=ami-6081e10c)
 
**NOTE** This AMIs are optimized for low memory instances, thus we do not recommend to use them for performance tests.
 
##### Step 2. Choose Instance Type

You can choose **any** instance type **except t1.micro and t2.nano**, since Thingsboard server and related third-party requires 1Gb of RAM.
This instruction is verified on t2.micro which is eligible for free tier.   

##### Step 3. Configure Instance

No specific configuration items here. You can leave this tab without changes or apply configuration that is specific to your use-case.

##### Step 4. Add Storage

Minimum 8 Gb of Storage is required. We recommend to have at least 50 if you plan to upload some data.

##### Step 5. Add Tags

No specific configuration items here. You can leave this tab without changes or apply configuration that is specific to your use-case.

##### Step 6: Configure Security Group

We recommend to create new security group, for example "Thingsboard". Configure following inbound rules:

| Type            | Protocol | Port Range | Source    |
|-----------------|----------|------------|-----------|
| HTTP            | TCP      | 80         | 0.0.0.0/0 |
| SSH             | TCP      | 22         | 0.0.0.0/0 |
| Custom TCP Rule | TCP      | 1883       | 0.0.0.0/0 |
| Custom UDP Rule | UDP      | 5683       | 0.0.0.0/0 |

##### Step 7: Review and launch your instance

Once instance is launched, please wait some time for services to boot up and open Administration UI in the browser using public DNS from instance details.

