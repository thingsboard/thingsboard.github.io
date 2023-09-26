<table>
  <thead>
      <tr>
          <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>queue.service_bus.namespace_name</td>
          <td>TB_QUEUE_SERVICE_BUS_NAMESPACE_NAME</td>
          <td>YOUR_NAMESPACE_NAME</td>
          <td>Azure namespace</td>
      </tr>
      <tr>
          <td>queue.service_bus.sas_key_name</td>
          <td>TB_QUEUE_SERVICE_BUS_SAS_KEY_NAME</td>
          <td>YOUR_SAS_KEY_NAME</td>
          <td></td>
      </tr>
      <tr>
          <td>queue.service_bus.sas_key</td>
          <td>TB_QUEUE_SERVICE_BUS_SAS_KEY</td>
          <td>YOUR_SAS_KEY</td>
          <td>Azure Service Bus Shared Access Signatures key</td>
      </tr>
      <tr>
          <td>queue.service_bus.max_messages</td>
          <td>TB_QUEUE_SERVICE_BUS_MAX_MESSAGES</td>
          <td>1000</td>
          <td>Number of messages per a consumer</td>
      </tr>
      <tr>
          <td>queue.service_bus.queue-properties.rule-engine</td>
          <td>TB_QUEUE_SERVICE_BUS_RE_QUEUE_PROPERTIES</td>
          <td>lockDurationInSec:30;maxSizeInMb:1024;messageTimeToLiveInSec:604800</td>
          <td>Azure Service Bus properties for Rule Engine queues</td>
      </tr>
      <tr>
          <td>queue.service_bus.queue-properties.core</td>
          <td>TB_QUEUE_SERVICE_BUS_CORE_QUEUE_PROPERTIES</td>
          <td>lockDurationInSec:30;maxSizeInMb:1024;messageTimeToLiveInSec:604800</td>
          <td>Azure Service Bus properties for Core queues</td>
      </tr>
      <tr>
          <td>queue.service_bus.queue-properties.transport-api</td>
          <td>TB_QUEUE_SERVICE_BUS_TA_QUEUE_PROPERTIES</td>
          <td>lockDurationInSec:30;maxSizeInMb:1024;messageTimeToLiveInSec:604800</td>
          <td>Azure Service Bus properties for Transport Api queues</td>
      </tr>
      <tr>
          <td>queue.service_bus.queue-properties.notifications</td>
          <td>TB_QUEUE_SERVICE_BUS_NOTIFICATIONS_QUEUE_PROPERTIES</td>
          <td>lockDurationInSec:30;maxSizeInMb:1024;messageTimeToLiveInSec:604800</td>
          <td>Azure Service Bus properties for Notification queues</td>
      </tr>
  </tbody>
</table>