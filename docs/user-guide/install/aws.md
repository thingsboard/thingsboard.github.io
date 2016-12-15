---
layout: docwithnav
assignees:
- ashvayka
title: Installing Thingsboard on AWS EC2 

---

This guide describes how to install Thingsboard on AWS EC2 using public AWS AMIs.

##### Step 1. Choose AMI

Use one of the following links to start the installation:

 - [N. Virginia (us-east-1)](https://console.aws.amazon.com/ec2/v2/home?region=us-east-1#LaunchInstanceWizard:ami=ami-dec7c8c9)
 - [Ohio (us-east-2)](https://console.aws.amazon.com/ec2/v2/home?region=us-east-2#LaunchInstanceWizard:ami=ami-7fa4fe1a) 
 - [N. California (us-west-1)](https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-3894c258)
 - [Oregon (us-west-2)](https://console.aws.amazon.com/ec2/v2/home?region=us-west-2#LaunchInstanceWizard:ami=ami-24f94c44)
 - [Canada (ca-central-1)](https://console.aws.amazon.com/ec2/v2/home?region=ca-central-1#LaunchInstanceWizard:ami=ami-0a30826e)
 - [Ireland (eu-west-1)](https://console.aws.amazon.com/ec2/v2/home?region=eu-west-1#LaunchInstanceWizard:ami=ami-fdb7908e)
 - [Frankfurt (eu-central-1)](https://console.aws.amazon.com/ec2/v2/home?region=eu-central-1#LaunchInstanceWizard:ami=ami-c914d5a6)
 - [London (eu-west-2)](https://console.aws.amazon.com/ec2/v2/home?region=eu-west-2#LaunchInstanceWizard:ami=ami-93eae0f7)
 - [Singapore (ap-southeast-1)](https://console.aws.amazon.com/ec2/v2/home?region=ap-southeast-1#LaunchInstanceWizard:ami=ami-e9a10e8a) 
 - [Sydney (ap-southeast-2)](https://console.aws.amazon.com/ec2/v2/home?region=ap-southeast-2#LaunchInstanceWizard:ami=ami-2384bc40)
 - [Seoul (ap-northeast-2)](https://console.aws.amazon.com/ec2/v2/home?region=ap-northeast-2#LaunchInstanceWizard:ami=ami-da65b2b4)
 - [Tokyo (ap-northeast-1)](https://console.aws.amazon.com/ec2/v2/home?region=ap-northeast-1#LaunchInstanceWizard:ami=ami-21dbb446)
 - [Mumbai (ap-south-1)](https://console.aws.amazon.com/ec2/v2/home?region=ap-south-1#LaunchInstanceWizard:ami=ami-3f8bfc50)
 - [São Paulo (sa-east-1)](https://console.aws.amazon.com/ec2/v2/home?region=sa-east-1#LaunchInstanceWizard:ami=ami-bfca52d3)
 
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

