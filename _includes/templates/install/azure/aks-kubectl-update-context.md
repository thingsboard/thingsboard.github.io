When claster created we can connect kubectl to it using
```
az aks get-credentials --resource-group $AKS_RESOURCE_GROUP --name $TB_CLUSTER_NAME
```
{: .copy-code}

Or if you want to create kube config file and use it in future execute:

```
 az aks get-credentials --resource-group $AKS_RESOURCE_GROUP --name $TB_CLUSTER_NAME --file /path/to/file
```
{: .copy-code}

After you just need to ***export KUBECONFIG=/path/to/file*** and you can use kubectl on your cluster (Don't forget that this method works only in current terminal session and when you create a new one, you need to export again)

Fot validation you can execute command
```
kubectl get nodes
```
{: .copy-code}

You should see cluster`s nodes list