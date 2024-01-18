Before creation AKS cluster we need to create Azure Resource Group - a logical group in which Azure resources are deployed and managed. We can create this via Azure [portal](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal)
or we can use Azure CLI tool.
```
az group create --name MyResourceGroup --location YOUR_LOCATION
```
{: .copy-code}


See more info about `az group` operations [here](https://docs.microsoft.com/en-us/cli/azure/group)

If you need to delete group you can use:
 
```
az group delete -n MyResourceGroup
```
{: .copy-code}