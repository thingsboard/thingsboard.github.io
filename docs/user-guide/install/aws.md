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

 - Monolithic ThingsBoard v2.3 instance with Cassandra running as a docker container;
   
   For Cassandra based AMI you can choose **any** instance type with at least 4GB of RAM, since ThingsBoard server and Cassandra requires 4Gb of RAM.
 - Monolithic ThingsBoard v2.3 instance with PostgreSQL running as a docker container.
   
   For PostgreSQL based AMI you can choose **any** instance type with at least 1GB of RAM, since ThingsBoard server and PostgreSQL requires at least 1Gb of RAM. 
 
Both AMIs are based on monolithic version of ThingsBoard and are deployed as a docker container inside the Ubuntu 18.04 VM. 
Both AMIs are created to simplify the deployment and getting started process. 
We recommend to use those AMIs as a shared development environments and move to microservices deployment once you plan a production deployment.  

Use one of the following links to start the installation for Cassandra based AMIs:

- [N. Virginia (us-east-1)](https://console.aws.amazon.com/ec2/v2/home?region=us-east-1#LaunchInstanceWizard:ami=ami-029ad4f8b3144b685)
 - [Ohio (us-east-2)](https://console.aws.amazon.com/ec2/v2/home?region=us-east-2#LaunchInstanceWizard:ami=ami-091a55ff227ffade3)
 - [N. California (us-west-1)](https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-0dc88357166ec1d7e)
 - [Oregon (us-west-2)](https://console.aws.amazon.com/ec2/v2/home?region=us-west-2#LaunchInstanceWizard:ami=ami-02b094bb33f808ad7)
 - [Canada (ca-central-1)](https://console.aws.amazon.com/ec2/v2/home?region=ca-central-1#LaunchInstanceWizard:ami=ami-01eb56d15cb817054)
 - [Ireland (eu-west-1)](https://console.aws.amazon.com/ec2/v2/home?region=eu-west-1#LaunchInstanceWizard:ami=ami-02d7857e97e0fb6f7)
 - [Frankfurt (eu-central-1)](https://console.aws.amazon.com/ec2/v2/home?region=eu-central-1#LaunchInstanceWizard:ami=ami-03a36615404747b5d)
 - [London (eu-west-2)](https://console.aws.amazon.com/ec2/v2/home?region=eu-west-2#LaunchInstanceWizard:ami=ami-06015cf862fd8f8bf)
 - [Singapore (ap-southeast-1)](https://console.aws.amazon.com/ec2/v2/home?region=ap-southeast-1#LaunchInstanceWizard:ami=ami-0a509841be972ffb5)
 - [Sydney (ap-southeast-2)](https://console.aws.amazon.com/ec2/v2/home?region=ap-southeast-2#LaunchInstanceWizard:ami=ami-0aed3c0e421e1b510)
 - [Seoul (ap-northeast-2)](https://console.aws.amazon.com/ec2/v2/home?region=ap-northeast-2#LaunchInstanceWizard:ami=ami-09dcffbd25983dbdc)
 - [Tokyo (ap-northeast-1)](https://console.aws.amazon.com/ec2/v2/home?region=ap-northeast-1#LaunchInstanceWizard:ami=ami-0a794bffb5664039a)
 - [Mumbai (ap-south-1)](https://console.aws.amazon.com/ec2/v2/home?region=ap-south-1#LaunchInstanceWizard:ami=ami-00cc3c6dfda32f6b3)
 - [Paris (eu-west-3)](https://console.aws.amazon.com/ec2/v2/home?region=eu-west-3#LaunchInstanceWizard:ami=ami-05a89a6a9d086bdb7)
 - [São Paulo, (sa-east-1)](https://console.aws.amazon.com/ec2/v2/home?region=sa-east-1#LaunchInstanceWizard:ami=ami-0d4605e37c42d8332)
 - [Stockholm (eu-north-1)](https://console.aws.amazon.com/ec2/v2/home?region=eu-north-1#LaunchInstanceWizard:ami=ami-0a816563bfb6faaa9)
 
Use one of the following links to start the installation for PostgreSQL based AMIs: 

 - [N. Virginia (us-east-1)](https://console.aws.amazon.com/ec2/v2/home?region=us-east-1#LaunchInstanceWizard:ami=ami-0ab68f7e54cd44c8c)
 - [Ohio (us-east-2)](https://console.aws.amazon.com/ec2/v2/home?region=us-east-2#LaunchInstanceWizard:ami=ami-07f26b73eadf64019)
 - [N. California (us-west-1)](https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-0002fe3986d5fee07)
 - [Oregon (us-west-2)](https://console.aws.amazon.com/ec2/v2/home?region=us-west-2#LaunchInstanceWizard:ami=ami-0bc7db888b7f3e34e)
 - [Canada (ca-central-1)](https://console.aws.amazon.com/ec2/v2/home?region=ca-central-1#LaunchInstanceWizard:ami=ami-0a792fcb04cd6b907)
 - [Ireland (eu-west-1)](https://console.aws.amazon.com/ec2/v2/home?region=eu-west-1#LaunchInstanceWizard:ami=ami-05128302fd6e0bba0)
 - [Frankfurt (eu-central-1)](https://console.aws.amazon.com/ec2/v2/home?region=eu-central-1#LaunchInstanceWizard:ami=ami-0098fe7995dc97968)
 - [London (eu-west-2)](https://console.aws.amazon.com/ec2/v2/home?region=eu-west-2#LaunchInstanceWizard:ami=ami-0d4fdcef02fd13b63)
 - [Singapore (ap-southeast-1)](https://console.aws.amazon.com/ec2/v2/home?region=ap-southeast-1#LaunchInstanceWizard:ami=ami-079a39096e7ea0f88)
 - [Sydney (ap-southeast-2)](https://console.aws.amazon.com/ec2/v2/home?region=ap-southeast-2#LaunchInstanceWizard:ami=ami-0c72345de5229a93b)
 - [Seoul (ap-northeast-2)](https://console.aws.amazon.com/ec2/v2/home?region=ap-northeast-2#LaunchInstanceWizard:ami=ami-0cf1a8f71ab30656a)
 - [Tokyo (ap-northeast-1)](https://console.aws.amazon.com/ec2/v2/home?region=ap-northeast-1#LaunchInstanceWizard:ami=ami-047e210098562f7a1)
 - [Mumbai (ap-south-1)](https://console.aws.amazon.com/ec2/v2/home?region=ap-south-1#LaunchInstanceWizard:ami=ami-032ee4fa88b8919ca)
 - [Paris (eu-west-3)](https://console.aws.amazon.com/ec2/v2/home?region=eu-west-3#LaunchInstanceWizard:ami=ami-0f72b31f18f9f6577)
 - [São Paulo, (sa-east-1)](https://console.aws.amazon.com/ec2/v2/home?region=sa-east-1#LaunchInstanceWizard:ami=ami-0a12840a13cd42ace)
 - [Stockholm (eu-north-1)](https://console.aws.amazon.com/ec2/v2/home?region=eu-north-1#LaunchInstanceWizard:ami=ami-03ac2919da209f1bf)
 
 
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

