---
layout: docwithnav-pe
assignees:
- ashvayka
title: Cluster setup using AWS infrastructure
description: ThingsBoard IoT platform cluster setup with Kubernetes in AWS EKS

---

* TOC
{:toc}
  Here you can find scripts for different deployment scenarios using AWS platform:

- [**monolith**](/docs/user-guide/install/pe/cluster/aws-monolith-setup/) - simplistic deployment of ThingsBoard monolith
  with [Amazon RDS for PostgreSQL](https://aws.amazon.com/rds/postgresql/)
- [**microservices**](/docs/user-guide/install/pe/cluster/aws-microservices-setup/) - deployment of ThingsBoard microservices
  with [Amazon RDS for PostgreSQL](https://aws.amazon.com/rds/postgresql/), [Amazon MSK](https://aws.amazon.com/msk/)
  and [ElastiCache for Redis](https://aws.amazon.com/elasticache/redis/)
- [**custom-microservices**](/docs/user-guide/install/pe/cluster/aws-custom-microservices-setup/) - deployment of ThingsBoard microservices
  alongside with PostgreSQL, Kafka and Redis
