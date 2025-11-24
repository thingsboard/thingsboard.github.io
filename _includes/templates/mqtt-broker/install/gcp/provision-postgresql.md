#### Prerequisites

Enable service networking to allow your K8S cluster to connect to the DB instance:

```bash
gcloud services enable servicenetworking.googleapis.com --project=$GCP_PROJECT

gcloud compute addresses create google-managed-services-$GCP_NETWORK \
--global \
--purpose=VPC_PEERING \
--prefix-length=16 \
--network=projects/$GCP_PROJECT/global/networks/$GCP_NETWORK

gcloud services vpc-peerings connect \
--service=servicenetworking.googleapis.com \
--ranges=google-managed-services-$GCP_NETWORK \
--network=$GCP_NETWORK \
--project=$GCP_PROJECT
    
```
{: .copy-code}

#### Create database server instance

Create the PostgreSQL instance with database version "**PostgreSQL 17**" and the following recommendations:

* use the same region where your K8S cluster **GCP_REGION** is located;
* use the same VPC network where your K8S cluster **GCP_REGION** is located;
* use private IP address to connect to your instance and disable public IP address;
* use highly available DB instance for production and single zone instance for development clusters;
* use at least 2 vCPUs and 7.5 GB RAM, which is sufficient for most of the workloads. You may scale it later if needed.

Execute the following command:

```bash

gcloud beta sql instances create $TB_DATABASE_NAME \
--database-version=POSTGRES_17 \
--region=$GCP_REGION --availability-type=regional \
--no-assign-ip --network=projects/$GCP_PROJECT/global/networks/$GCP_NETWORK \
--cpu=2 --memory=7680MB --edition=ENTERPRISE
```
{: .copy-code}

Alternatively, you may follow [this](https://cloud.google.com/sql/docs/postgres/create-instance) guide to configure your database.

Note your IP address (**YOUR_DB_IP_ADDRESS**) from the command output. Successful command output should look similar to this:

```text
Created [https://sqladmin.googleapis.com/sql/v1beta4/projects/YOUR_PROJECT_ID/instances/$TB_DATABASE_NAME].
NAME                        DATABASE_VERSION  LOCATION       TIER              PRIMARY_ADDRESS  PRIVATE_ADDRESS  STATUS
$TB_DATABASE_NAME           POSTGRES_17       us-central1-f  db-custom-2-7680  35.192.189.68    -                RUNNABLE
```

#### Set database password

Set the password for your new database server instance:

```bash
gcloud sql users set-password postgres \
--instance=$TB_DATABASE_NAME \
--password=secret
```
{: .copy-code}

where:

* *instance* is the name of your database server instance;
* *secret* is the password. You **should** input a different password. We will refer to it later in this guide using **YOUR_DB_PASSWORD**.

#### Create the database

Create "{{tbDbName}}" database inside your postgres database server instance:

```bash
gcloud sql databases create {{tbDbName}} --instance=$TB_DATABASE_NAME
```
{: .copy-code}

where, *{{tbDbName}}* is the name of your database. You may input a different name. We will refer to it later in this guide using **YOUR_DB_NAME**.
