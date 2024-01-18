You’ll need to set up Azure Cache for Redis. ThingsBoard uses cache to improve performance and avoid frequent DB reads.

You can do this via this [guide](https://docs.microsoft.com/en-us/azure/azure-cache-for-redis/quickstart-create-redis)

or using az cli tools 
```
az redis create --name $TB_REDIS_NAME --location $AKS_LOCATION --resource-group $AKS_RESOURCE_GROUP --sku Basic --vm-size c0 --enable-non-ssl-port 
```
{: .copy-code}

As like az postgres az redis create has a lot of options and few of them are required like: 

  - ***name*** (or -n) - Name of the Redis cache;
  - ***resource-group*** -  Name of resource group;
  - ***sku*** - Type of Redis cache(accepted values: Basic, Premium, Standard; 
  - ***vm-size*** - Size of Redis cache to deploy. Basic and Standard Cache sizes start with C. Premium Cache sizes start with P (accepted values: c0, c1, c2, c3, c4, c5, c6, p1, p2, p3, p4, p5);
  - ***location*** (or -l) - Location. Values from: az account list-locations.

To see the full list of parameters please [see](https://docs.microsoft.com/en-us/cli/azure/redis?view=azure-cli-latest#az_redis_create)

Example of response:
```
{
  "accessKeys": null,
  "enableNonSslPort": true,
  "hostName": "tb-redis.redis.cache.windows.net",
  "id": "/subscriptions/daff3288-1d5d-47c7-abf0-bfb7b738a18c/resourceGroups/myResourceGroup/providers/Microsoft.Cache/Redis/tb-redis",
  "instances": [
    {
      "isMaster": false,
      "isPrimary": false,
      "nonSslPort": 13000,
      "shardId": null,
      "sslPort": 15000,
      "zone": null
    }
  ],
  "linkedServers": [],
  "location": "East US",
  "minimumTlsVersion": null,
  "name": "tb-redis",
  "port": 6379,
  "privateEndpointConnections": null,
  "provisioningState": "Creating",
  "publicNetworkAccess": "Enabled",
  "redisConfiguration": {
    "maxclients": "256",
    "maxfragmentationmemory-reserved": "12",
    "maxmemory-delta": "2",
    "maxmemory-reserved": "2"
  },
  "redisVersion": "4.0.14",
  "replicasPerMaster": null,
  "replicasPerPrimary": null,
  "resourceGroup": "myResourceGroup",
  "shardCount": null,
  "sku": {
    "capacity": 0,
    "family": "C",
    "name": "Basic"
  },
  "sslPort": 6380,
  "staticIp": null,
  "subnetId": null,
  "tags": {},
  "tenantSettings": {},
  "type": "Microsoft.Cache/Redis",
  "zones": null
}
```

We need to take `hostName` parameter and replace YOUR_REDIS_ENDPOINT_URL_WITHOUT_PORT in file tb-redis-configmap.yml

After this we need to get redis keys for connection, for this we need to execute: 
```
    az redis list-keys --name $TB_REDIS_NAME --resource-group $AKS_RESOURCE_GROUP
```
{: .copy-code}

after took "primary" and paste into tb-redis-configmap.yml file replacing YOU_REDIS_PASS
