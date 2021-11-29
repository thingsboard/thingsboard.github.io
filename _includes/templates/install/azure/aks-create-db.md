You’ll need to set up PostgreSQL on Azure. ThingsBoard will use it as a main database to store devices, dashboards, rule chains and device telemetry.

You may follow [this](https://docs.microsoft.com/en-us/azure/postgresql/flexible-server/quickstart-create-server-portal) guide, but take into account the following requirements:
   * Keep your postgresql password in a safe place. We will refer to it later in this guide using YOUR_RDS_PASSWORD;
   * Make sure your Azure Database for PostgreSQL version is latest 12.x, not 13.x yet;
   * Make sure your Azure Database for PostgreSQL instance is accessible from the ThingsBoard cluster;
   * Make sure you use “thingsboard” as initial database name;
    
and recomendations:
   * Use "High availability" enabled. It enables a lot of useful settings by default;

Another way by which you can create Azure Database for PostgreSQL is use az tool 
(don't forget to replace 'POSTGRESS_USER' and 'POSTGRESS_PASS' with your username and password):

```bash
az postgres flexible-server create --location $AKS_LOCATION --resource-group $AKS_RESOURCE_GROUP \
  --name $TB_DATABASE_NAME --admin-user POSTGRESS_USER --admin-password POSTGRESS_PASS \
  --public-access 0.0.0.0 --storage-size 32 \
  --version 12 -d thingsboard
```
{: .copy-code}

`az postgres flexible-server create` has a lot of parameters few of them are: 

  - ***location***  - Location. Values from: az account list-locations;
  - ***resource-group*** (or -g) - Name of resource group;
  - ***name*** - Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters; 
  - ***admin-user*** - Administrator username for the server. Once set, it cannot be changed; 
  - ***admin-password***  - The password of the administrator. Minimum 8 characters and maximum 128 characters. Password must contain characters from three of the following categories: English uppercase letters, English lowercase letters, numbers, and non-alphanumeric characters; 
  - ***public-access*** - Determines the public access. Enter single or range of IP addresses to be included in the allowed list of IPs. IP address ranges must be dash-separated and not contain any spaces. Specifying 0.0.0.0 allows public access from any resources deployed within Azure to access your server. Setting it to "None" sets the server in public access mode but does not create a firewall rule;
  - ***storage-size*** - The storage capacity of the server. Minimum is 32 GiB and max is 16 TiB;
  - ***version*** - Server major version. 
  - ***high-availability*** - nable or disable high availability feature. Default value is Disabled. High availability can only be set during flexible server create time (accepted values: Disabled, Enabled. default value: Disabled);
  - ***database-name*** (or -d) - The name of the database to be created when provisioning the database server.

You can see full parameters list [here](https://docs.microsoft.com/en-us/cli/azure/postgres/flexible-server?view=azure-cli-latest#az_postgres_flexible_server_create).

Example of response: 
```
{
  "connectionString": "postgresql://postgres:postgres@$tb-db.postgres.database.azure.com/postgres?sslmode=require",
  "databaseName": "thingsboard",
  "firewallName": "AllowAllAzureServicesAndResourcesWithinAzureIps_2021-11-17_15-45-6",
  "host": "tb-db.postgres.database.azure.com",
  "id": "/subscriptions/daff3288-1d5d-47c7-abf0-bfb7b738a18c/resourceGroups/myResourceGroup/providers/Microsoft.DBforPostgreSQL/flexibleServers/thingsboard",
  "location": "East US",
  "password": "postgres",
  "resourceGroup": "myResourceGroup",
  "skuname": "Standard_D2s_v3",
  "username": "postgres",
  "version": "12"
}
```


Note the value of **host** from the command output (*tb-db.postgres.database.azure.com* in our case). 
Also note username and password (*postgres*) from the command.

Edit the database settings file and replace *YOUR_AZURE_POSTGRES_ENDPOINT_URL* with the **host** value,
*YOUR_AZURE_POSTGRES_USER* and *YOUR_AZURE_POSTGRES_PASSWORD* with the correct values:

```bash
nano tb-node-db-configmap.yml
```


