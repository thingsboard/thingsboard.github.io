Running Trendz is an optional step.
We recommend deploying Trendz on a dedicated node group to isolate analytical workloads and ensure stable performance.

Provision an additional node group that will be hosting Trendz instances.
You may change the machine type depending on your workload.
For production environments, at least 4 vCPUs and 8–16 GB of RAM is recommended.

We will create 1 dedicated node pool with 1 node in a specific availability zone.
This node pool will be labeled and used to target the Trendz deployment via nodeSelector or node affinity rules.

```bash
gcloud container node-pools create trendz --cluster=$TB_CLUSTER_NAME --zone=$GCP_ZONE --node-locations=$GCP_ZONE3 \
--node-labels=role=trendz --num-nodes=1 --min-nodes=1 --max-nodes=1 --machine-type=e2-standard-4
```
{: .copy-code}
