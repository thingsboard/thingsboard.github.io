When claster created we can connect kubectl to it using
```
az aks get-credentials --resource-group $AKS_RESOURCE_GROUP --name $TB_CLUSTER_NAME
```
{: .copy-code}

Fot validation you can execute command
```
kubectl get nodes
```
{: .copy-code}

You should see cluster`s nodes list