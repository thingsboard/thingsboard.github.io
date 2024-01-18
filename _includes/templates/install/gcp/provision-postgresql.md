#### 5.1 Prerequisites

Enable service networking to allow your K8S cluster connect to the DB instance:

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

#### 5.2 Create database server instance

Create the PostgreSQL instance with database version "**PostgreSQL 15**" and the following recommendations:

* use the same region where your K8S cluster **GCP_REGION** is located;
* use the same VPC network where your K8S cluster **GCP_REGION** is located;
* use private IP address to connect to your instance and disable public IP address;
* use highly available DB instance for production and single zone instance for development clusters;
* use at least 2 vCPUs and 7.5 GB RAM, which is sufficient for most of the workloads. You may scale it later if needed;

Execute the following command:

```bash

gcloud beta sql instances create $TB_DATABASE_NAME \
--database-version=POSTGRES_15 \
--region=$GCP_REGION --availability-type=regional \
--no-assign-ip --network=projects/$GCP_PROJECT/global/networks/$GCP_NETWORK \
--cpu=2 --memory=7680MB
```
{: .copy-code}

Alternatively, you may follow [this](https://cloud.google.com/sql/docs/postgres/create-instance) guide to configure your database.

Note your IP address (**YOUR_DB_IP_ADDRESS**) from command output. Successful command output should look similar to this:

```text
Created [https://sqladmin.googleapis.com/sql/v1beta4/projects/YOUR_PROJECT_ID/instances/thingsboard-db].
NAME            DATABASE_VERSION  LOCATION       TIER              PRIMARY_ADDRESS  PRIVATE_ADDRESS  STATUS
tb-db           POSTGRES_12       us-central1-f  db-custom-2-7680  35.192.189.68    -                RUNNABLE
```

#### 5.3 Set database password

Set password for your new database server instance:

```bash
gcloud sql users set-password postgres \
--instance=$TB_DATABASE_NAME \
--password=secret
```
{: .copy-code}

where:

* *thingsboard* is the name of your database. You may input a different name. We will refer to it later in this guide using **YOUR_DB_NAME**;
* *secret* is the password. You **should** input a different password. We will refer to it later in this guide using **YOUR_DB_PASSWORD**;

#### 5.4 Create database

Create "thingsboard" database inside your postgres database server instance:

```bash
gcloud sql databases create thingsboard --instance=$TB_DATABASE_NAME
```
{: .copy-code}
