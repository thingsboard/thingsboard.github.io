<table>
  <thead>
      <tr>
          <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>notification_system.thread_pool_size</td>
          <td>TB_NOTIFICATION_SYSTEM_THREAD_POOL_SIZE</td>
          <td>10</td>
          <td>Specify thread pool size for Notification System processing notification rules and notification sending. Recommend value < =10</td>
      </tr>
      <tr>
          <td>notification_system.rules.deduplication_durations</td>
          <td>TB_NOTIFICATION_RULES_DEDUPLICATION_DURATIONS</td>
          <td>NEW_PLATFORM_VERSION:0;RATE_LIMITS:14400000;</td>
          <td>Semicolon-separated deduplication durations (in millis) for trigger types. Format: 'NotificationRuleTriggerType1:123;NotificationRuleTriggerType2:456'</td>
      </tr>
  </tbody>
</table>
