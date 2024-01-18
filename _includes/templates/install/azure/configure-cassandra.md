Using Cassandra is an optional step. 
We recommend to use Cassandra if you plan to insert more than 5K data points per second or would like to optimize storage space.

##### Provision additional node pools

Provision additional node pools that will be hosting Cassandra instances. 
You may change the machine type. At least 4 vCPUs and 16GB of RAM is recommended.

We will create **3** separate node pools with **1** node per zone. 
Since we plan to use zonal disks, we don't want k8s to launch a pod on the node where the corresponding disk is not available.
Those zones will have the same node label. We will use this label to target deployment of our stateful set.

So,  define **3** node pools in three zones for your location:

```bash
az aks nodepool add --resource-group $AKS_RESOURCE_GROUP --cluster-name $TB_CLUSTER_NAME --name tbcassandra1 --node-count 1 --zones 1 --labels role=cassandra
az aks nodepool add --resource-group $AKS_RESOURCE_GROUP --cluster-name $TB_CLUSTER_NAME --name tbcassandra2 --node-count 1 --zones 2 --labels role=cassandra
az aks nodepool add --resource-group $AKS_RESOURCE_GROUP --cluster-name $TB_CLUSTER_NAME --name tbcassandra3 --node-count 1 --zones 3 --labels role=cassandra
```
{: .copy-code}

{% assign tbCassandraRegion = "dc1" %}
{% include templates/install/azure/cassandra-k8s-common.md %}