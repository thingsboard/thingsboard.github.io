Define environment variables that you will use in various commands later in this guide.

We assume you are using Linux. Execute the following command:

```bash
export GCP_PROJECT=$(gcloud config get-value project)
export GCP_REGION=us-central1
export GCP_ZONE=us-central1
export GCP_ZONE1=us-central1-a
export GCP_ZONE2=us-central1-b
export GCP_ZONE3=us-central1-c
export GCP_NETWORK=default
export TB_CLUSTER_NAME={{tbClusterName}}
export TB_DATABASE_NAME=tb-db
echo "You have selected project: $GCP_PROJECT, region: $GCP_REGION, gcp zones: $GCP_ZONE1,$GCP_ZONE2,$GCP_ZONE3, network: $GCP_NETWORK, cluster: $TB_CLUSTER_NAME and database: $TB_DATABASE_NAME"
```
{: .copy-code}

where:

* first line uses gcloud command to fetch your current GCP project id. We will refer to it later in this guide using **GCP_PROJECT**;
* *us-central1* is one of the available compute [regions](https://cloud.google.com/compute/docs/regions-zones#available). We will refer to it later in this guide using **GCP_REGION**;
* *default* is a default GCP network name; We will refer to it later in this guide using **;GCP_NETWORK**;
* *tb-ce* is the name of your cluster. You may input a different name. We will refer to it later in this guide using **$TB_CLUSTER_NAME**;
* *tb-db* is the name of your database server. You may input a different name. We will refer to it later in this guide using **TB_DATABASE_NAME**;
