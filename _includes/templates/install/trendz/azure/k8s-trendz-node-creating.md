Provision a dedicated node pool that will be hosting Trendz instances.

Running Trendz on a separate node pool is recommended to ensure predictable resource allocation and to isolate analytical workloads from core platform components.

You may change the machine type depending on your workload.
For production environments, at least 4 vCPUs and 8–16 GB of RAM is recommended.

We will create 1 dedicated node pool with 1 node in a specific availability zone.
The node will be labeled accordingly and used to target the Trendz deployment via nodeSelector.

```bash
az aks nodepool add --resource-group $AKS_RESOURCE_GROUP --cluster-name $TB_CLUSTER_NAME --name trendz --node-count 1 --zones 3 --labels role=trendz
```
{: .copy-code}