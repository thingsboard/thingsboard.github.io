Define environment variables that you will use in various commands later in this guide.

We assume you are using Linux. Execute the following command:

```bash
export AKS_RESOURCE_GROUP=TBMQResources
export AKS_LOCATION=eastus
export AKS_GATEWAY=tbmq-gateway
export TB_CLUSTER_NAME=tbmq-cluster
export TB_DATABASE_NAME=tbmq-db
echo "You variables ready to create resource group $AKS_RESOURCE_GROUP in location $AKS_LOCATION 
and cluster in it $TB_CLUSTER_NAME with database $TB_DATABASE_NAME"
```
{: .copy-code}

where:

* TBMQResources — a logical group in which Azure resources are deployed and managed. We will refer to it later in this guide using **AKS_RESOURCE_GROUP**;
* eastus — is the location where you want to create the resource group. We will refer to it later in this guide using **AKS_LOCATION**. You can see all locations list by executing `az account list-locations`;
* tbmq-gateway — the name of Azure application gateway;
* tbmq-cluster — cluster name. We will refer to it later in this guide using **TB_CLUSTER_NAME**;
* tbmq-db — is the name of your database server. You may input a different name. We will refer to it later in this guide using **TB_DATABASE_NAME**.
