You'll need to set up [Amazon ElastiCache (Redis)](https://aws.amazon.com/elasticache/redis/). ThingsBoard uses cache to improve performance and avoid frequent DB reads.

Please open AWS console and navigate to ElastiCache->Redis->Create.

* Specify Redis Engine version 6.x and node type with at least 1 GB of RAM;
* Make sure your Redis cluster is accessible from the ThingsBoard cluster. The easiest way to achieve this is to deploy the Redis cluster in the same VPC. We also recommend to use private subnets. Use "eksctl-thingsboard-cluster-ClusterSharedNodeSecurityGroup-*" security group;
* Disable automatic backups.

{% include images-gallery.html imageCollection="redisSetup"%}

Once the Redis cluster switch to the 'Available' state, navigate to 'Details' and copy 'Primary Endpoint' without ':6379' port sufix, it`s **YOUR_REDIS_ENDPOINT_URL_WITHOUT_PORT**.

{% include images-gallery.html imageCollection="redisEndpointUrl"%}

Edit “tb-redis-configmap.yml” and replace **YOUR_REDIS_ENDPOINT_URL_WITHOUT_PORT**.