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

##### Step 1. Choose AMI type, instance type and region

ThingsBoard supports two AMI types depending on the database used:

 - Monolithic ThingsBoard v2.2 instance with Cassandra running as a docker container;
   
   For Cassandra based AMI you can choose **any** instance type with at least 4GB of RAM, since ThingsBoard server and Cassandra requires 4Gb of RAM.
 - Monolithic ThingsBoard v2.2 instance with PostgreSQL running as a docker container.
   
   For PostgreSQL based AMI you can choose **any** instance type with at least 1GB of RAM, since ThingsBoard server and PostgreSQL requires at least 1Gb of RAM. 
 
Both AMIs are based on monolithic version of ThingsBoard and are deployed as a docker container inside the Ubuntu 18.04 VM. 
Both AMIs are created to simplify the deployment and getting started process. 
We recommend to use those AMIs as a shared development environments and move to microservices deployment once you plan a production deployment.  

Use one of the following links to start the installation for Cassandra based AMIs:

 - [N. Virginia (us-east-1)](https://console.aws.amazon.com/ec2/v2/home?region=us-east-1#LaunchInstanceWizard:ami=ami-0b81630d6d3f92801)
 - [Ohio (us-east-2)](https://console.aws.amazon.com/ec2/v2/home?region=us-east-2#LaunchInstanceWizard:ami=ami-00f9ae986d71bc667)
 - [N. California (us-west-1)](https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-027991c0bdd617c39)
 - [Oregon (us-west-2)](https://console.aws.amazon.com/ec2/v2/home?region=us-west-2#LaunchInstanceWizard:ami=ami-03ac2a69635016026)
 - [Canada (ca-central-1)](https://console.aws.amazon.com/ec2/v2/home?region=ca-central-1#LaunchInstanceWizard:ami=ami-06697fd522b440f38)
 - [Ireland (eu-west-1)](https://console.aws.amazon.com/ec2/v2/home?region=eu-west-1#LaunchInstanceWizard:ami=ami-0ddfd2fe706aa6c09)
 - [Frankfurt (eu-central-1)](https://console.aws.amazon.com/ec2/v2/home?region=eu-central-1#LaunchInstanceWizard:ami=ami-07ffa5d0577eaaa42)
 - [London (eu-west-2)](https://console.aws.amazon.com/ec2/v2/home?region=eu-west-2#LaunchInstanceWizard:ami=ami-06b127ea000d901fa)
 - [Singapore (ap-southeast-1)](https://console.aws.amazon.com/ec2/v2/home?region=ap-southeast-1#LaunchInstanceWizard:ami=ami-0d4223a60f442bbe1)
 - [Sydney (ap-southeast-2)](https://console.aws.amazon.com/ec2/v2/home?region=ap-southeast-2#LaunchInstanceWizard:ami=ami-0674f77098218018f)
 - [Seoul (ap-northeast-2)](https://console.aws.amazon.com/ec2/v2/home?region=ap-northeast-2#LaunchInstanceWizard:ami=ami-07debe7479ecdc1ff)
 - [Tokyo (ap-northeast-1)](https://console.aws.amazon.com/ec2/v2/home?region=ap-northeast-1#LaunchInstanceWizard:ami=ami-0d8229226dee50f57)
 - [Mumbai (ap-south-1)](https://console.aws.amazon.com/ec2/v2/home?region=ap-south-1#LaunchInstanceWizard:ami=ami-03144c38a8ea90d55)
 - [Paris (eu-west-3)](https://console.aws.amazon.com/ec2/v2/home?region=eu-west-3#LaunchInstanceWizard:ami=ami-08a19badc0076ff0d)
 - [São Paulo (sa-east-1)](https://console.aws.amazon.com/ec2/v2/home?region=sa-east-1#LaunchInstanceWizard:ami=ami-0955075450f9dff35)
 
Use one of the following links to start the installation for PostgreSQL based AMIs: 

 - [N. Virginia (us-east-1)](https://console.aws.amazon.com/ec2/v2/home?region=us-east-1#LaunchInstanceWizard:ami=ami-05d1ea97fe05ef168)
 - [Ohio (us-east-2)](https://console.aws.amazon.com/ec2/v2/home?region=us-east-2#LaunchInstanceWizard:ami=ami-00964f091a3b27a47)
 - [N. California (us-west-1)](https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-01bb1904586cf87d4)
 - [Oregon (us-west-2)](https://console.aws.amazon.com/ec2/v2/home?region=us-west-2#LaunchInstanceWizard:ami=ami-0265ab5d35645f516)
 - [Canada (ca-central-1)](https://console.aws.amazon.com/ec2/v2/home?region=ca-central-1#LaunchInstanceWizard:ami=ami-0ea7430a7df0ffff9)
 - [Ireland (eu-west-1)](https://console.aws.amazon.com/ec2/v2/home?region=eu-west-1#LaunchInstanceWizard:ami=ami-0d206fc7586feac05)
 - [Frankfurt (eu-central-1)](https://console.aws.amazon.com/ec2/v2/home?region=eu-central-1#LaunchInstanceWizard:ami=ami-04c00fc3d32a05104)
 - [London (eu-west-2)](https://console.aws.amazon.com/ec2/v2/home?region=eu-west-2#LaunchInstanceWizard:ami=ami-01a496d69d43adeaf)
 - [Singapore (ap-southeast-1)](https://console.aws.amazon.com/ec2/v2/home?region=ap-southeast-1#LaunchInstanceWizard:ami=ami-0e10ff29d7d5337bb)
 - [Sydney (ap-southeast-2)](https://console.aws.amazon.com/ec2/v2/home?region=ap-southeast-2#LaunchInstanceWizard:ami=ami-0f23f58b09f42f7de)
 - [Seoul (ap-northeast-2)](https://console.aws.amazon.com/ec2/v2/home?region=ap-northeast-2#LaunchInstanceWizard:ami=ami-06972e1f38f98db2f)
 - [Tokyo (ap-northeast-1)](https://console.aws.amazon.com/ec2/v2/home?region=ap-northeast-1#LaunchInstanceWizard:ami=ami-0e68d2b8fe4eb8fb3)
 - [Mumbai (ap-south-1)](https://console.aws.amazon.com/ec2/v2/home?region=ap-south-1#LaunchInstanceWizard:ami=ami-02776b1af29a81638)
 - [Paris (eu-west-3)](https://console.aws.amazon.com/ec2/v2/home?region=eu-west-3#LaunchInstanceWizard:ami=ami-089b1bc3db3b084cb)
 - [São Paulo (sa-east-1)](https://console.aws.amazon.com/ec2/v2/home?region=sa-east-1#LaunchInstanceWizard:ami=ami-08d8d2f83b29077f6) 
 
 
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

