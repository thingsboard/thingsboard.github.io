{% include templates/install/queue-pub-sub-config.md %}

##### ThingsBoard Configuration

Edit ThingsBoard configuration file

```text
sudo nano /etc/thingsboard/conf/thingsboard.conf
```
{: .copy-code}

Add the following lines to the configuration file. Don't forget to replace “YOUR_PROJECT_ID”, "YOUR_SERVICE_ACCOUNT" with your **real Pub/Sub project id, and service account (it is whole data from json file):**

```bash
export TB_QUEUE_TYPE=pubsub
export TB_QUEUE_PUBSUB_PROJECT_ID=YOUR_PROJECT_ID
export TB_QUEUE_PUBSUB_SERVICE_ACCOUNT=YOUR_SERVICE_ACCOUNT
```
{: .copy-code}

