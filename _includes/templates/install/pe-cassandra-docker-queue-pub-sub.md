{% include templates/install/queue-pub-sub-config.md %}

```text
nano tb-node.env
```
{: .copy-code}

Add the following line to the yml file. Don’t forget to replace “YOUR_PROJECT_ID”, "YOUR_SERVICE_ACCOUNT" with your **real Pub/Sub project id, and service account (it is whole data from json file):

```bash
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

Check docker-compose.yml and configure ports if you need:

```bash
nano docker-compose.yml
```

```bash
services:
  tbpe:
    restart: always
    image: "${DOCKER_REPO}/${TB_NODE_DOCKER_NAME}:${TB_VERSION}"
    ports:
      - "8080:8080"
      - "1883:1883"
      - "5683:5683"
```
{: .copy-code}
