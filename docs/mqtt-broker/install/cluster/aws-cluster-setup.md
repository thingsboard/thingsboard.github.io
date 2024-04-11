---
layout: docwithnav-mqtt-broker
title: Cluster setup using AWS infrastructure
description: TBMQ microservices setup with Kubernetes in AWS EKS

tbmq-rds-set-up:
  0:
    image: /images/mqtt-broker/install/aws-rds-vpc.png
    title: 'AWS RDS Connectivity - choose VPC with the name of your cluster'
  1:
    image: /images/mqtt-broker/install/aws-rds-vpc-sg.png
    title: 'AWS RDS SG - choose "eksctl-tbmq-cluster-ClusterSharedNodeSecurityGroup-*" security group'
  2:
    image: /images/mqtt-broker/install/aws-rds-default-database.png
    title: 'AWS RDS Additional config - type "thingsboard_mqtt_broker" for the initial database name'

tbmq-msk-set-up:
  0:
    image: /images/mqtt-broker/install/aws-msk-creation.png
    title: 'AWS MSK - create cluster'

tbmq-msk-configuration:
  0:
    image: /images/mqtt-broker/install/aws-msk-vpc.png
    title: 'AWS MSK - choose TBMQ cluster’s VPC'
  1:
    image: /images/mqtt-broker/install/aws-msk-vpc-sg.png
    title: 'AWS MSK - choose "eksctl-tbmq-cluster-ClusterSharedNodeSecurityGroup-*" security group'
  2:
    image: /images/mqtt-broker/install/aws-msk-security.png
    title: 'AWS MSK - enable Plaintext communication between clients and brokers'

tbmq-redis-set-up:
  0:
    image: /images/mqtt-broker/install/aws-redis-create.png
    title: 'AWS ElastiCache - create Redis cluster'
  1:
    image: /images/mqtt-broker/install/aws-redis-cluster-settings.png
    title: 'AWS ElastiCache - choose 7.x engine version and appropriate Node type'
  2:
    image: /images/mqtt-broker/install/aws-redis-connectivity.png
    title: 'AWS ElastiCache - choose TBMQ VPC and private subnets'  
  3:
    image: /images/mqtt-broker/install/aws-redis-advanced.png
    title: 'AWS ElastiCache - choose "eksctl-tbmq-cluster-ClusterSharedNodeSecurityGroup-*" security group'

tbmq-rds-link-configure:
  0:
    image: /images/mqtt-broker/install/aws-rds-endpoint.png
    title: 'AWS RDS Details'

tbmq-msk-link-configure:
  0:
    image: /images/mqtt-broker/install/aws-msk-arn.png
    title: 'AWS MSK Details'
    
tbmq-redis-link-configure:
  0:
    image: /images/mqtt-broker/install/aws-redis-result.png
    title: 'AWS ElastiCache Details'

---

{% include docs/mqtt-broker/install/aws-cluster-setup.md %}
