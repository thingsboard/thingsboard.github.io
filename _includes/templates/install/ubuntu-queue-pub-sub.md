#### Google Pub/Sub Configuration

To access Pub/Sub service, you first need to create an [Google cloud account](https://cloud.google.com/).

To work with Pub/Sub service you will need to create a project using [this instruction](https://cloud.google.com/resource-manager/docs/creating-managing-projects).
Create service account credentials using [this instruction](https://cloud.google.com/pubsub/docs/quickstart-py-mac#create_service_account_credentials),
and save json file with your service account credentials step 9. [here](https://cloud.google.com/pubsub/docs/quickstart-py-mac#create_service_account_credentials).

You will need to change following Queue type parameter in [thingsboard.yml](/docs/user-guide/install/config/#thingsboardyml):

```bash
queue:
  type: "${TB_QUEUE_TYPE:pubsub}"
```

Add your credentials in [thingsboard.yml](/docs/user-guide/install/config/#thingsboardyml).  Don’t forget to replace “YOUR_PROJECT_ID”, "YOUR_SERVICE_ACCOUNT" with your **real Pub/Sub project id:,
 and service account from saved json file.**

```bash
queue:
...
  pubsub:
    project_id: "${TB_QUEUE_PUBSUB_PROJECT_ID:YOUR_PROJECT_ID}"
    service_account: "${TB_QUEUE_PUBSUB_SERVICE_ACCOUNT:YOUR_SERVICE_ACCOUNT}"
```

If need you can configure default Pub/Sub parameters in [thingsboard.yml](/docs/user-guide/install/config/#thingsboardyml):

```bash
queue:
...
  pubsub:
...
    max_msg_size: "${TB_QUEUE_PUBSUB_MAX_MSG_SIZE:1048576}" #in bytes
    max_messages: "${TB_QUEUE_PUBSUB_MAX_MESSAGES:1000}"
    queue-properties:
      rule-engine: "${TB_QUEUE_PUBSUB_RE_QUEUE_PROPERTIES:ackDeadlineInSec:30;messageRetentionInSec:604800}"
      core: "${TB_QUEUE_PUBSUB_CORE_QUEUE_PROPERTIES:ackDeadlineInSec:30;messageRetentionInSec:604800}"
      transport-api: "${TB_QUEUE_PUBSUB_TA_QUEUE_PROPERTIES:ackDeadlineInSec:30;messageRetentionInSec:604800}"
      notifications: "${TB_QUEUE_PUBSUB_NOTIFICATIONS_QUEUE_PROPERTIES:ackDeadlineInSec:30;messageRetentionInSec:604800}"
      js-executor: "${TB_QUEUE_PUBSUB_JE_QUEUE_PROPERTIES:ackDeadlineInSec:30;messageRetentionInSec:604800}"
```
