#### Google Pub/Sub Configuration

To access Pub/Sub service, you first need to create an [Google cloud account](https://cloud.google.com/).

To work with Pub/Sub service you will need to create a project using [this instruction](https://cloud.google.com/resource-manager/docs/creating-managing-projects).

Create service account credentials using [this instruction](https://cloud.google.com/pubsub/docs/quickstart-py-mac#create_service_account_credentials),
and save json file with your service account credentials step 9 [here](https://cloud.google.com/pubsub/docs/quickstart-py-mac#create_service_account_credentials).

##### ThingsBoard Configuration

Edit ThingsBoard configuration file

```text
sudo nano /etc/thingsboard/conf/thingsboard.conf
```
{: .copy-code}

Add the following lines to the configuration file. Don’t forget to replace “YOUR_PROJECT_ID”, "YOUR_SERVICE_ACCOUNT" with your **real Pub/Sub project id, and service account (it is whole data from json file):**

```bash
export TB_QUEUE_TYPE=pubsub
export TB_QUEUE_PUBSUB_PROJECT_ID=YOUR_PROJECT_ID
export TB_QUEUE_PUBSUB_SERVICE_ACCOUNT=YOUR_SERVICE_ACCOUNT
```

