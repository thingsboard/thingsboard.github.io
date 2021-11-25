## Cluster deletion

Execute the following command to delete all ThingsBoard pods:

```bash
./k8s-delete-resources.sh
```
{: .copy-code}

Execute the following command to delete all ThingsBoard pods and configmaps:

```bash
./k8s-delete-all.sh
```
{: .copy-code}

Execute the following command to delete EKS cluster (you should change the name of the cluster and zone):

```bash
az aks delete --resource-group myResourceGroup --name myAKSCluster
```
{: .copy-code}
