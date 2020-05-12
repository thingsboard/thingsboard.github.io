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
