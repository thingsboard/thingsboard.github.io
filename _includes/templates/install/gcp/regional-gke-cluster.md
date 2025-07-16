Create a regional cluster distributed across 3 zones with nodes of your preferred machine type.
The example below provisions one **e2-standard-4** node per zone **(three nodes total)**, but you can modify the `--machine-type` and `--num-nodes` to suit your workload requirements.
For a full list of available machine types and their specifications, refer to the [GCP machine types documentation](https://cloud.google.com/compute/docs/machine-resource).

Execute the following command (recommended):

```bash
gcloud container clusters create $TB_CLUSTER_NAME \
--release-channel stable \
--region $GCP_REGION \
--network=$GCP_NETWORK \
--node-locations $GCP_ZONE1,$GCP_ZONE2,$GCP_ZONE3 \
--enable-ip-alias \
--num-nodes=1 \
--node-labels=role=main \
--machine-type=e2-standard-4
```
{: .copy-code}

Alternatively, you may use [this](https://cloud.google.com/kubernetes-engine/docs/how-to/creating-a-regional-cluster) guide for custom cluster setup.
