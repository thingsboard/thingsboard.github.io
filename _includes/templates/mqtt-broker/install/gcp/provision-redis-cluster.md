**WARNING:** If this template is included, we should update GKE prerequisites by adding `networkconnectivity.googleapis.com`

You need to set up Google Cloud Memorystore for Redis Cluster. TBMQ uses cache to store messages for [DEVICE persistent clients](/docs/mqtt-broker/architecture/#persistent-device-client),
to improve performance and avoid frequent DB reads (see below for more details).

It is useful when clients connect to TBMQ with the authentication enabled.
For every connection, the request is made to find MQTT client credentials that can authenticate the client.
Thus, there could be an excessive amount of requests to be processed for a large number of connecting clients at once.

To ensure reliability and durability across Redis restarts or failovers, 
we recommend using Redis Cluster with persistence enabled. 

Before creating a Redis Cluster, you must configure a Service Connection Policy (SCP) for your project, network, and region. 
This is required because Redis Cluster uses Private Service Connect (PSC) to enable VPC-level access to the managed Redis instances.
Without this step, the cluster creation will fail with an error indicating that no service connection policy is associated with the project/network/region.

To configure the SCP, follow this [guide](https://cloud.google.com/vpc/docs/configure-service-connection-policies).

An alternative way to do this is by using `gcloud` tool:

```bash
gcloud network-connectivity service-connection-policies create redis-cluster-scp \
    --network=projects/$GCP_PROJECT/global/networks/$GCP_NETWORK \
    --region=$GCP_REGION \
    --service-class=gcp-memorystore-redis \
    --subnets=projects/$GCP_PROJECT/regions/$GCP_REGION/subnetworks/$GCP_NETWORK
```

In order to set up the Redis cluster, follow this [guide](https://cloud.google.com/memorystore/docs/cluster/create-instances#create_an_instance).

Another way to do this is by using `gcloud` tool:

```bash
gcloud redis clusters create $TB_REDIS_NAME \
    --region=$GCP_REGION \
    --shard-count=3 \
    --replica-count=1 \
    --persistence-mode=RDB \
    --rdb-snapshot-period=12h \
    --network=projects/$GCP_PROJECT/global/networks/$GCP_NETWORK
```
{: .copy-code}

`gcloud redis instances create` has many options. A few important parameters are:

* **region** - location of your Redis instance (e.g., us-central1);
* **shard-count** - number of Redis shards (nodes). Minimum is 1, recommended 3+ for large workloads.
* **replica-count** - number of replicas per shard (HA).
* **redis-version** - recommended to use `redis_7_2`;
* **persistence-mode** - enables disk-based snapshotting for durability.
* **rdb-snapshot-period** - configures automatic snapshots every 12 hours.
* **network** - VPC network name (must match the GCP project network).

To see the full list of parameters, check the CLI [reference](https://cloud.google.com/sdk/gcloud/reference/redis/clusters/create).

Example of response:

```text
Create request issued for: [tbmq-redis]
Waiting for operation [projects/$GCP_PROJECT/locations/europe-west6/operations/operation-1744037679309-632316a59a3f8-36d8b3df-07092f17] to complete...done.                                                                                                                     
Created cluster [tbmq-redis].
authorizationMode: AUTH_MODE_DISABLED
automatedBackupConfig:
  automatedBackupMode: DISABLED
clusterEndpoints:
- connections:
  - pscAutoConnection:
      address: 10.172.0.6
      connectionType: CONNECTION_TYPE_DISCOVERY
      forwardingRule: https://www.googleapis.com/compute/v1/projects/$GCP_PROJECT/regions/europe-west6/forwardingRules/sca-auto-fr-5f22b780-399f-4572-840e-52999ae09e2b
      network: projects/$GCP_PROJECT/global/networks/$GCP_NETWORK
      projectId: $GCP_PROJECT
      pscConnectionId: '19404658127405062'
      pscConnectionStatus: PSC_CONNECTION_STATUS_ACTIVE
      serviceAttachment: projects/430913155293/regions/europe-west6/serviceAttachments/gcp-memorystore-auto-cb3ac4ed-c840-4e-psc-sa
  - pscAutoConnection:
      address: 10.172.0.7
      forwardingRule: https://www.googleapis.com/compute/v1/projects/$GCP_PROJECT/regions/europe-west6/forwardingRules/sca-auto-fr-60653003-26b2-44bc-b270-da4246bef8c0
      network: projects/$GCP_PROJECT/global/networks/$GCP_NETWORK
      projectId: $GCP_PROJECT
      pscConnectionId: '19404658127405063'
      pscConnectionStatus: PSC_CONNECTION_STATUS_ACTIVE
      serviceAttachment: projects/430913155293/regions/europe-west6/serviceAttachments/gcp-memorystore-auto-cb3ac4ed-c840-4e-psc-sa-2
createTime: '2025-04-07T14:54:39.351678778Z'
deletionProtectionEnabled: false
discoveryEndpoints:
- address: 10.172.0.6
  port: 6379
  pscConfig:
    network: projects/$GCP_PROJECT/global/networks/$GCP_NETWORK
encryptionInfo:
  encryptionType: GOOGLE_DEFAULT_ENCRYPTION
name: projects/$GCP_PROJECT/locations/europe-west6/clusters/tbmq-redis
nodeType: REDIS_HIGHMEM_MEDIUM
persistenceConfig:
  mode: RDB
  rdbConfig:
    rdbSnapshotPeriod: TWELVE_HOURS
    rdbSnapshotStartTime: '2025-04-07T14:54:39.320409249Z'
preciseSizeGb: 39.0
pscConnections:
- address: 10.172.0.6
  forwardingRule: https://www.googleapis.com/compute/v1/projects/$GCP_PROJECT/regions/europe-west6/forwardingRules/sca-auto-fr-5f22b780-399f-4572-840e-52999ae09e2b
  network: projects/$GCP_PROJECT/global/networks/$GCP_NETWORK
  projectId: $GCP_PROJECT
  pscConnectionId: '19404658127405062'
  serviceAttachment: projects/430913155293/regions/europe-west6/serviceAttachments/gcp-memorystore-auto-cb3ac4ed-c840-4e-psc-sa
- address: 10.172.0.7
  forwardingRule: https://www.googleapis.com/compute/v1/projects/$GCP_PROJECT/regions/europe-west6/forwardingRules/sca-auto-fr-60653003-26b2-44bc-b270-da4246bef8c0
  network: projects/$GCP_PROJECT/global/networks/$GCP_NETWORK
  projectId: $GCP_PROJECT
  pscConnectionId: '19404658127405063'
  serviceAttachment: projects/430913155293/regions/europe-west6/serviceAttachments/gcp-memorystore-auto-cb3ac4ed-c840-4e-psc-sa-2
pscServiceAttachments:
- connectionType: CONNECTION_TYPE_DISCOVERY
  serviceAttachment: projects/430913155293/regions/europe-west6/serviceAttachments/gcp-memorystore-auto-cb3ac4ed-c840-4e-psc-sa
- serviceAttachment: projects/430913155293/regions/europe-west6/serviceAttachments/gcp-memorystore-auto-cb3ac4ed-c840-4e-psc-sa-2
replicaCount: 1
shardCount: 3
sizeGb: 39
state: ACTIVE
transitEncryptionMode: TRANSIT_ENCRYPTION_MODE_DISABLED
uid: cb3ac4ed-c840-4edd-8eb4-1d2a31f758ba
zoneDistributionConfig:
  mode: MULTI_ZONE
```

We need to take `discoveryEndpoints.address` parameter value and replace `YOUR_REDIS_ENDPOINT_URL_WITHOUT_PORT` in the file _tb-broker-cache-configmap.yml_.