ThingsBoard uses cache to improve performance and avoid frequent DB reads.
By default, deployment already uses the local Valkey cache. However, Thingsboard is compatible with managed services such as Amazon ElastiCache.

Here are the steps to create a basic ElastiCache Valkey cluster:
* Open AWS console and navigate to [ElastiCache Valkey caches](https://console.aws.amazon.com/elasticache#/valkey) → Create;
* You can choose the Deployment option **Serverless** or **Design your own cache**;
* Specify Valkey Engine version 8.x and node type with at least 1 GB of RAM;
* Make sure your Valkey cluster is accessible from the ThingsBoard cluster. The easiest way to achieve this is to deploy the Valkey cluster in the same VPC. We also recommend to use private subnets. Use "eksctl-thingsboard-cluster-ClusterSharedNodeSecurityGroup-*" security group;
* Disable automatic backups.

{% include images-gallery.html imageCollection="redisSetup"%}

Once the Valkey cluster switches to the ‘Available’ state, navigate to the ‘Details’ section and copy the ‘Primary Endpoint’ field without ‘:6379’ port sufix - it`s Valkey endpoint for ThingsBoard.

{% include images-gallery.html imageCollection="redisEndpointUrl"%}

Edit the `tb-valkey.yml` file, find the StatefulSet section named `tb-valkey`, and set the `spec.replicas` value to 0 to disable the default local Valkey deployment.

Edit `tb-cache-configmap.yml` and replace **REDIS_HOST** value with Valkey endpoint.