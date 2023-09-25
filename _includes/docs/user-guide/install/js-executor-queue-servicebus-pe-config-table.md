<table>
  <thead>
      <tr>
          <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>service_bus.namespace_name</td>
          <td>TB_QUEUE_SERVICE_BUS_NAMESPACE_NAME</td>
          <td></td>
          <td>Azure namespace</td>
      </tr>
      <tr>
          <td>service_bus.sas_key_name</td>
          <td>TB_QUEUE_SERVICE_BUS_SAS_KEY_NAME</td>
          <td></td>
          <td>Azure Service Bus Shared Access Signatures key name</td>
      </tr>
      <tr>
          <td>service_bus.sas_key</td>
          <td>TB_QUEUE_SERVICE_BUS_SAS_KEY</td>
          <td></td>
          <td>Azure Service Bus Shared Access Signatures key</td>
      </tr>
      <tr>
          <td>service_bus.max_messages</td>
          <td>TB_QUEUE_SERVICE_BUS_MAX_MESSAGES</td>
          <td></td>
          <td>Number of messages per a consumer</td>
      </tr>
      <tr>
          <td>service_bus.queue_properties</td>
          <td>TB_QUEUE_SERVICE_BUS_JE_QUEUE_PROPERTIES</td>
          <td>lockDurationInSec:30;maxSizeInMb:1024;messageTimeToLiveInSec:604800</td>
          <td>Azure Service Bus queue properties</td>
      </tr>
  </tbody>
</table>
