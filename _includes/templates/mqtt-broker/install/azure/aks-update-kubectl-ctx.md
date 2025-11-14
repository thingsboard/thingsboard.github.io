When the cluster is created, we can connect kubectl to it using the next command:

```bash
az aks get-credentials --resource-group $AKS_RESOURCE_GROUP --name $TB_CLUSTER_NAME
```
{: .copy-code}

For validation, you can execute the following command:

```bash
kubectl get nodes
```
{: .copy-code}

You should see cluster`s nodes list.
