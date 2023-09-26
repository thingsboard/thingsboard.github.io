<table>
  <thead>
      <tr>
          <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>event.debug.max-symbols</td>
          <td>TB_MAX_DEBUG_EVENT_SYMBOLS</td>
          <td>4096</td>
          <td>Maximum number of symbols per debug event. The event content will be truncated if needed.</td>
      </tr>
      <tr>
          <td>event.debug.rate_limits.enabled</td>
          <td>DEBUG_MODE_RATE_LIMITS_PER_TENANT_ENABLED</td>
          <td>true</td>
          <td>If true rate limits will be active</td>
      </tr>
      <tr>
          <td>event.debug.rate_limits.integration</td>
          <td>INTEGRATION_DEBUG_MODE_RATE_LIMITS_PER_TENANT</td>
          <td>50000:3600</td>
          <td>No more than 50000 messages per hour</td>
      </tr>
      <tr>
          <td>event.debug.rate_limits.converter</td>
          <td>ICONVERTER_DEBUG_MODE_RATE_LIMITS_PER_TENANT</td>
          <td>50000:3600</td>
          <td>No more than 50000 messages per hour</td>
      </tr>
  </tbody>
</table>
