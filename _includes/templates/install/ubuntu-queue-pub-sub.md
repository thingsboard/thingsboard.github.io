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

# These params affect the number of requests per second from each partitions per each queue!!!
export TB_QUEUE_TRANSPORT_REQUEST_POLL_INTERVAL_MS=1000
export TB_QUEUE_TRANSPORT_RESPONSE_POLL_INTERVAL_MS=1000
export TB_QUEUE_CORE_POLL_INTERVAL_MS=1000
export REMOTE_JS_RESPONSE_POLL_INTERVAL_MS=1000
export TB_QUEUE_RULE_ENGINE_POLL_INTERVAL_MS=1000
export TB_QUEUE_RE_MAIN_POLL_INTERVAL_MS=1000
export TB_QUEUE_RE_HP_POLL_INTERVAL_MS=1000
export TB_QUEUE_RE_SQ_POLL_INTERVAL_MS=1000
export TB_QUEUE_TRANSPORT_NOTIFICATIONS_POLL_INTERVAL_MS=1000
```
{: .copy-code}
