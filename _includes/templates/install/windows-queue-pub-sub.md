{% include templates/install/queue-pub-sub-config.md %}

##### ThingsBoard Configuration

Open the Notepad or other editor as administrator user (right click on the app icon and select "Run as administrator").  
Open the following file for editing (select "All Files" instead of "Text Documents" in file choosing dialog, the encoding is UTF-8):

```text 
C:\Program Files (x86)\thingsboard\conf\thingsboard.yml
``` 
{: .copy-code}

and locate "queue:" block. Make sure the queue type is "pubsub", and don't forget to replace "YOUR_PROJECT_ID", "YOUR_SERVICE_ACCOUNT" with your **real Pub/Sub project id, and service account (it is whole data from json file):**

```yml
queue:
  type: "${TB_QUEUE_TYPE:pubsub}"
...
  pubsub:
    project_id: "${TB_QUEUE_PUBSUB_PROJECT_ID:YOUR_PROJECT_ID}"
    service_account: "${TB_QUEUE_PUBSUB_SERVICE_ACCOUNT:YOUR_SERVICE_ACCOUNT}"
    max_msg_size: "${TB_QUEUE_PUBSUB_MAX_MSG_SIZE:1048576}" #in bytes
    max_messages: "${TB_QUEUE_PUBSUB_MAX_MESSAGES:1000}"
```

The following params affect the **number of requests** per second from each partitions per each queue, make sure the next params have the correct values:

```yml
queue:
...
  transport_api:
    request_poll_interval: "${TB_QUEUE_TRANSPORT_REQUEST_POLL_INTERVAL_MS:1000}"
    response_poll_interval: "${TB_QUEUE_TRANSPORT_RESPONSE_POLL_INTERVAL_MS:1000}"
...
  core:
    poll-interval: "${TB_QUEUE_CORE_POLL_INTERVAL_MS:1000}"
...
  js:
    response_poll_interval: "${REMOTE_JS_RESPONSE_POLL_INTERVAL_MS:1000}"
...
  rule-engine:
    poll-interval: "${TB_QUEUE_RULE_ENGINE_POLL_INTERVAL_MS:1000}"
...
    queues:
        poll-interval: "${TB_QUEUE_RE_MAIN_POLL_INTERVAL_MS:1000}"
        poll-interval: "${TB_QUEUE_RE_HP_POLL_INTERVAL_MS:1000}"
        poll-interval: "${TB_QUEUE_RE_SQ_POLL_INTERVAL_MS:1000}"
...
  transport:
    poll_interval: "${TB_QUEUE_TRANSPORT_NOTIFICATIONS_POLL_INTERVAL_MS:1000}"
```
