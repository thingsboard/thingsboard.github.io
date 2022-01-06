Create a regional cluster with **3** nodes of **e2-standard-4** machine type.

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
