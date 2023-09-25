<table>
  <thead>
      <tr>
          <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>queue.pubsub.project_id</td>
          <td>TB_QUEUE_PUBSUB_PROJECT_ID</td>
          <td>YOUR_PROJECT_ID</td>
          <td>Project ID from Google Cloud</td>
      </tr>
      <tr>
          <td>queue.pubsub.service_account</td>
          <td>TB_QUEUE_PUBSUB_SERVICE_ACCOUNT</td>
          <td>YOUR_SERVICE_ACCOUNT</td>
          <td>API Credentials in JSON format</td>
      </tr>
      <tr>
          <td>queue.pubsub.max_msg_size</td>
          <td>TB_QUEUE_PUBSUB_MAX_MSG_SIZE</td>
          <td>1048576</td>
          <td>Message size for PubSub queue.Value in bytes</td>
      </tr>
      <tr>
          <td>queue.pubsub.max_messages</td>
          <td>TB_QUEUE_PUBSUB_MAX_MESSAGES</td>
          <td>1000</td>
          <td>Number of messages per a consumer</td>
      </tr>
      <tr>
          <td>queue.pubsub.queue-properties.rule-engine</td>
          <td>TB_QUEUE_PUBSUB_RE_QUEUE_PROPERTIES</td>
          <td>ackDeadlineInSec:30;messageRetentionInSec:604800</td>
          <td>Pub/Sub properties for Rule Engine subscribers, messages which will commit after ackDeadlineInSec period can be consume again</td>
      </tr>
      <tr>
          <td>queue.pubsub.queue-properties.core</td>
          <td>TB_QUEUE_PUBSUB_CORE_QUEUE_PROPERTIES</td>
          <td>ackDeadlineInSec:30;messageRetentionInSec:604800</td>
          <td>Pub/Sub properties for Core subscribers, messages which will commit after ackDeadlineInSec period can be consume again</td>
      </tr>
      <tr>
          <td>queue.pubsub.queue-properties.transport-api</td>
          <td>TB_QUEUE_PUBSUB_TA_QUEUE_PROPERTIES</td>
          <td>ackDeadlineInSec:30;messageRetentionInSec:604800</td>
          <td>Pub/Sub properties for Transport API subscribers, messages which will commit after ackDeadlineInSec period can be consume again</td>
      </tr>
      <tr>
          <td>queue.pubsub.queue-properties.notifications</td>
          <td>TB_QUEUE_PUBSUB_NOTIFICATIONS_QUEUE_PROPERTIES</td>
          <td>ackDeadlineInSec:30;messageRetentionInSec:604800</td>
          <td>Pub/Sub properties for Version Control subscribers, messages which will commit after ackDeadlineInSec period can be consume again</td>
      </tr>
  </tbody>
</table>
