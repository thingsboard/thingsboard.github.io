Before creation AKS cluster we need to create Azure Resource Group, we will use Azure CLI for this 
```
az group create --name $AKS_RESOURCE_GROUP --location $AKS_LOCATION
```
{: .copy-code}

To see more info about `az group` please you can use [this](https://docs.microsoft.com/en-us/cli/azure/group). 

After we created Resource group we can create AKS cluster in it using: 
```
az aks create --resource-group $AKS_RESOURCE_GROUP \
    --name $TB_CLUSTER_NAME \
    --generate-ssh-keys \
    --enable-addons ingress-appgw \
    --appgw-name $AKS_GATEWAY \
    --appgw-subnet-cidr "10.2.0.0/16" \
    --node-vm-size Standard_DS3_v2 \
    --node-count {{nodeCount}}
```
{: .copy-code}

`az aks create` has two required parameters - `name` and `resource-group`(we use variable that we set earlier)
and a lot not required parameters(will use defaults values) few of them are:

  - ***node-count*** - Number of nodes in the Kubernetes node pool. After creating a cluster, you can change the size of its node pool with az aks scale (default value is 3);
  - ***enable-addons*** - Enable the Kubernetes addons in a comma-separated list (use az aks addon list to get avaliable addons list );
  - ***node-osdisk-size*** - OS disk type to be used for machines in a given agent pool: Ephemeral or Managed. Defaults to 'Ephemeral' when possible in conjunction with VM size and OS disk size. May not be changed for this pool after creation;
  - ***node-vm-size (or -s)*** - Size of Virtual Machines to create as Kubernetes nodes (default value is Standard_DS2_v2);
  - ***generate-ssh-keys*** - Generate SSH public and private key files if missing. The keys will be stored in the ~/.ssh directory. 

From the command above we add AKS addon for [ApplicationGateway](https://docs.microsoft.com/en-us/azure/application-gateway/). We will use this gateway as Path-Based Load Balancer for Thingsboard Infrastructure

Full list af `az aks create` options you can see [here](https://docs.microsoft.com/en-us/cli/azure/aks?view=azure-cli-latest#az_aks_create)


Alternatively, you may use [this](https://docs.microsoft.com/en-us/azure/aks/kubernetes-walkthrough-portal) guide for custom cluster setup.
