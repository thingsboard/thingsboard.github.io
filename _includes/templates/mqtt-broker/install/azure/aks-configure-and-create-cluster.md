Before creating the AKS cluster, we need to create Azure Resource Group. We will use Azure CLI for this:

```bash
az group create --name $AKS_RESOURCE_GROUP --location $AKS_LOCATION
```
{: .copy-code}

To see more info about `az group` please follow the next [link](https://learn.microsoft.com/en-us/cli/azure/group?view=azure-cli-latest).

After the Resource group is created, we can create the AKS cluster by using the next command:

```bash
az aks create --resource-group $AKS_RESOURCE_GROUP \
    --name $TB_CLUSTER_NAME \
    --generate-ssh-keys \
    --enable-addons ingress-appgw \
    --appgw-name $AKS_GATEWAY \
    --appgw-subnet-cidr "10.225.0.0/24" \
    --node-vm-size Standard_D4s_v6 \
    --node-count 3
```
{: .copy-code}

`az aks create` has two required parameters - `name` and `resource-group` (we use variables that we have set earlier),
and a lot of not required parameters (defaults values will be used if not set). A few of them are:

* **node-count** - Number of nodes in the Kubernetes node pool. After creating a cluster, you can change the size of its node pool with `az aks scale` (default value is 3);
* **enable-addons** - Enable the Kubernetes addons in a comma-separated list (use `az aks addon list` to get an available addons list);
* **node-osdisk-size** - OS disk type to be used for machines in a given agent pool: Ephemeral or Managed. Defaults to ‘Ephemeral’ when possible in conjunction with VM size and OS disk size. May not be changed for this pool after creation;
* **node-vm-size** (or -s) - Size of Virtual Machines to create as Kubernetes nodes (default value is Standard_DS2_v2);
* **generate-ssh-keys** - Generate SSH public and private key files if missing. The keys will be stored in the ~/.ssh directory.

From the command above, we add AKS addon for [ApplicationGateway](https://learn.microsoft.com/en-us/azure/application-gateway/).
We will use this gateway as Path-Based Load Balancer for the TBMQ.

Full list af `az aks create` options can be found [here](https://learn.microsoft.com/en-us/cli/azure/aks?view=azure-cli-latest#az_aks_create).

Alternatively, you may use this [guide](https://learn.microsoft.com/en-us/azure/aks/learn/quick-kubernetes-deploy-portal?tabs=azure-cli) for custom cluster setup.
