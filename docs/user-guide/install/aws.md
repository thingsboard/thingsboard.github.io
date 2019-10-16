---
layout: docwithnav
assignees:
- ashvayka
title: Installing ThingsBoard CE on AWS
description: Installing ThingsBoard CE on AWS

---

![image](/images/coming-soon.jpg)

<!--
{% include templates/live-demo-banner.md %}

* TOC
{:toc}

This guide describes how to install ThingsBoard on AWS EC2 using public AWS AMIs.

##### Step 1. Choose AMI type, instance type and region

ThingsBoard supports two AMI types depending on the database used:

 - Monolithic ThingsBoard v2.3 instance with Cassandra running as a docker container;
   
   For Cassandra based AMI you can choose **any** instance type with at least 4GB of RAM, since ThingsBoard server and Cassandra requires 4Gb of RAM.
 - Monolithic ThingsBoard v2.3 instance with PostgreSQL running as a docker container.
   
   For PostgreSQL based AMI you can choose **any** instance type with at least 1GB of RAM, since ThingsBoard server and PostgreSQL requires at least 1Gb of RAM. 
 
Both AMIs are based on monolithic version of ThingsBoard and are deployed as a docker container inside the Ubuntu 18.04 VM. 
Both AMIs are created to simplify the deployment and getting started process. 
We recommend to use those AMIs as a shared development environments and move to microservices deployment once you plan a production deployment.  

Use one of the following links to start the installation for Cassandra based AMIs:

 - [N. Virginia (us-east-1)](https://console.aws.amazon.com/ec2/v2/home?region=us-east-1#LaunchInstanceWizard:ami=ami-06bbc8270d3b825c8)
 - [Ohio (us-east-2)](https://console.aws.amazon.com/ec2/v2/home?region=us-east-2#LaunchInstanceWizard:ami=ami-0338996707f0699ed)
 - [N. California (us-west-1)](https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-0905e75ffe1c53b0a)
 - [Oregon (us-west-2)](https://console.aws.amazon.com/ec2/v2/home?region=us-west-2#LaunchInstanceWizard:ami=ami-0f84d072d240ee434)
 - [Canada (ca-central-1)](https://console.aws.amazon.com/ec2/v2/home?region=ca-central-1#LaunchInstanceWizard:ami=ami-0c609772c29abc79d)
 - [Ireland (eu-west-1)](https://console.aws.amazon.com/ec2/v2/home?region=eu-west-1#LaunchInstanceWizard:ami=ami-098b0ae09708cb345)
 - [Frankfurt (eu-central-1)](https://console.aws.amazon.com/ec2/v2/home?region=eu-central-1#LaunchInstanceWizard:ami=ami-005239c9b2d9c9136)
 - [London (eu-west-2)](https://console.aws.amazon.com/ec2/v2/home?region=eu-west-2#LaunchInstanceWizard:ami=ami-0bc91f391b8b088e3)
 - [Singapore (ap-southeast-1)](https://console.aws.amazon.com/ec2/v2/home?region=ap-southeast-1#LaunchInstanceWizard:ami=ami-03a8684135f70e727)
 - [Sydney (ap-southeast-2)](https://console.aws.amazon.com/ec2/v2/home?region=ap-southeast-2#LaunchInstanceWizard:ami=ami-0a43642034c1b2b6a)
 - [Seoul (ap-northeast-2)](https://console.aws.amazon.com/ec2/v2/home?region=ap-northeast-2#LaunchInstanceWizard:ami=ami-0735851c9683d88a0)
 - [Tokyo (ap-northeast-1)](https://console.aws.amazon.com/ec2/v2/home?region=ap-northeast-1#LaunchInstanceWizard:ami=ami-0dca84da533d23f52)
 - [Mumbai (ap-south-1)](https://console.aws.amazon.com/ec2/v2/home?region=ap-south-1#LaunchInstanceWizard:ami=ami-0a6f2378d7d0429dd)
 - [Paris (eu-west-3)](https://console.aws.amazon.com/ec2/v2/home?region=eu-west-3#LaunchInstanceWizard:ami=ami-01d75cccedb8c14ad)
 - [São Paulo, (sa-east-1)](https://console.aws.amazon.com/ec2/v2/home?region=sa-east-1#LaunchInstanceWizard:ami=ami-00cec440a6d01f221)
 - [Stockholm (eu-north-1)](https://console.aws.amazon.com/ec2/v2/home?region=eu-north-1#LaunchInstanceWizard:ami=ami-0a219a17229fef2d0)
 
Use one of the following links to start the installation for PostgreSQL based AMIs: 

 - [N. Virginia (us-east-1)](https://console.aws.amazon.com/ec2/v2/home?region=us-east-1#LaunchInstanceWizard:ami=ami-0db4beb393ae6f0e5)
 - [Ohio (us-east-2)](https://console.aws.amazon.com/ec2/v2/home?region=us-east-2#LaunchInstanceWizard:ami=ami-057826120d96ce9f1)
 - [N. California (us-west-1)](https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-00e7e99011ec3331f)
 - [Oregon (us-west-2)](https://console.aws.amazon.com/ec2/v2/home?region=us-west-2#LaunchInstanceWizard:ami=ami-03114ddd8e139132d)
 - [Canada (ca-central-1)](https://console.aws.amazon.com/ec2/v2/home?region=ca-central-1#LaunchInstanceWizard:ami=ami-0cbd9c97ae1ae47fb)
 - [Ireland (eu-west-1)](https://console.aws.amazon.com/ec2/v2/home?region=eu-west-1#LaunchInstanceWizard:ami=ami-0d2a1f215a46cfbc9)
 - [Frankfurt (eu-central-1)](https://console.aws.amazon.com/ec2/v2/home?region=eu-central-1#LaunchInstanceWizard:ami=ami-0c175564f025984b6)
 - [London (eu-west-2)](https://console.aws.amazon.com/ec2/v2/home?region=eu-west-2#LaunchInstanceWizard:ami=ami-00098d6e58fba660a)
 - [Singapore (ap-southeast-1)](https://console.aws.amazon.com/ec2/v2/home?region=ap-southeast-1#LaunchInstanceWizard:ami=ami-01621fc34a5423423)
 - [Sydney (ap-southeast-2)](https://console.aws.amazon.com/ec2/v2/home?region=ap-southeast-2#LaunchInstanceWizard:ami=ami-0fb13b3f721d9d991)
 - [Seoul (ap-northeast-2)](https://console.aws.amazon.com/ec2/v2/home?region=ap-northeast-2#LaunchInstanceWizard:ami=ami-064a94dd98b556224)
 - [Tokyo (ap-northeast-1)](https://console.aws.amazon.com/ec2/v2/home?region=ap-northeast-1#LaunchInstanceWizard:ami=ami-03fe1bc2c64484f77)
 - [Mumbai (ap-south-1)](https://console.aws.amazon.com/ec2/v2/home?region=ap-south-1#LaunchInstanceWizard:ami=ami-09e8b8cef98e56ea8)
 - [Paris (eu-west-3)](https://console.aws.amazon.com/ec2/v2/home?region=eu-west-3#LaunchInstanceWizard:ami=ami-03a2affe931efb595)
 - [São Paulo, (sa-east-1)](https://console.aws.amazon.com/ec2/v2/home?region=sa-east-1#LaunchInstanceWizard:ami=ami-0779a1ab32c12f7e8)
 - [Stockholm (eu-north-1)](https://console.aws.amazon.com/ec2/v2/home?region=eu-north-1#LaunchInstanceWizard:ami=ami-0207bb6be991c441a)
 
 
**NOTE** This AMIs are optimized for low memory instances, thus we do not recommend to use them for performance tests.
 
##### Step 2. Configure Instance

No specific configuration items here. You can leave this tab without changes or apply a configuration that is specific to your use-case.

##### Step 3. Add Storage

Minimum 20 Gb of Storage is required. We recommend having at least 50 if you plan to upload some data.

##### Step 4. Add Tags

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

-->