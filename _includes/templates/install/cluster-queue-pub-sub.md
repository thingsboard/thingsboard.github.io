{% include templates/install/queue-pub-sub-config.md %}

Configure ThingsBoard environment file:

```text
sudo nano .env
```
{: .copy-code}

Check following line:**

```.env
TB_QUEUE_TYPE=pubsub
```
{: .copy-code}

Configure Pub/Sub environment file for ThingsBoard queue service:

```text
sudo nano queue-pubsub.env
```
{: .copy-code}

Don’t forget to replace “YOUR_PROJECT_ID”, "YOUR_SERVICE_ACCOUNT" with your **real Pub/Sub project id, and service account (it is whole data from json file):**

```.env
TB_QUEUE_TYPE=pubsub
TB_QUEUE_PUBSUB_PROJECT_ID=YOUR_PROJECT_ID
TB_QUEUE_PUBSUB_SERVICE_ACCOUNT=YOUR_SERVICE_ACCOUNT

# These params affect the number of requests per second from each partitions per each queue!!!
TB_QUEUE_TRANSPORT_REQUEST_POLL_INTERVAL_MS=1000
TB_QUEUE_TRANSPORT_RESPONSE_POLL_INTERVAL_MS=1000
TB_QUEUE_CORE_POLL_INTERVAL_MS=1000
REMOTE_JS_RESPONSE_POLL_INTERVAL_MS=1000
TB_QUEUE_RULE_ENGINE_POLL_INTERVAL_MS=1000
TB_QUEUE_RE_MAIN_POLL_INTERVAL_MS=1000
TB_QUEUE_RE_HP_POLL_INTERVAL_MS=1000
TB_QUEUE_RE_SQ_POLL_INTERVAL_MS=1000
TB_QUEUE_TRANSPORT_NOTIFICATIONS_POLL_INTERVAL_MS=1000
```
{: .copy-code}
