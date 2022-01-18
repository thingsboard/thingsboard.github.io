Create a zonal cluster with **1** node of **e2-standard-4** machine type.

Execute the following command (recommended):

```bash
gcloud container clusters create $TB_CLUSTER_NAME \
--release-channel stable \
--zone $GCP_ZONE \
--node-locations $GCP_ZONE \
--network=$GCP_NETWORK \
--enable-ip-alias \
--num-nodes=1 \
--node-labels=role=main \
--machine-type=e2-standard-4
```
{: .copy-code}

Alternatively, you may use [this](https://cloud.google.com/kubernetes-engine/docs/how-to/creating-a-zonal-cluster) guide for custom cluster setup.