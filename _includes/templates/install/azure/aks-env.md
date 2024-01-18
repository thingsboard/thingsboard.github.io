Define environment variables that you will use in various commands later in this guide.

We assume you are using Linux. Execute the following command:

```bash
export AKS_RESOURCE_GROUP=ThingsBoardResources
export AKS_LOCATION=eastus
export AKS_GATEWAY=tb-gateway
export TB_CLUSTER_NAME=tb-cluster
export TB_DATABASE_NAME=tb-db
export TB_REDIS_NAME=tb-redis
echo "You variables ready to create resource group $AKS_RESOURCE_GROUP in location $AKS_LOCATION 
and cluster in it $TB_CLUSTER_NAME with database $TB_DATABASE_NAME"
```
{: .copy-code}

where: 
   - myResourceGroup - a logical group in which Azure resources are deployed and managed. We will refer to it later in this guide using ***AKS_RESOURCE_GROUP*** ;
   - *eastus* - is location where you want to create resource group. We will refer to it later in this guide using ***AKS_LOCATION***;
    You can see all locations list executing *az account list-locations*;
   - *tb-gateway* - the name of Azure application gateway;  
   - *tb-cluster* - cluster name. We will refer to it later in this guide using ***TB_CLUSTER_NAME*** ;
   - *tb-db* is the name of your database server. You may input a different name. We will refer to it later in this guide using TB_DATABASE_NAME;