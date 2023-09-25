<table>
  <thead>
      <tr>
          <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>transport.snmp.enabled</td>
          <td>SNMP_ENABLED</td>
          <td>true</td>
          <td>Enable/disable SNMP transport protocol</td>
      </tr>
      <tr>
          <td>transport.snmp.response_processing.parallelism_level</td>
          <td>SNMP_RESPONSE_PROCESSING_PARALLELISM_LEVEL</td>
          <td>20</td>
          <td>parallelism level for executor (workStealingPool) that is responsible for handling responses from SNMP devices</td>
      </tr>
      <tr>
          <td>transport.snmp.underlying_protocol</td>
          <td>SNMP_UNDERLYING_PROTOCOL</td>
          <td>udp</td>
          <td>to configure SNMP to work over UDP or TCP</td>
      </tr>
      <tr>
          <td>transport.sessions.inactivity_timeout</td>
          <td>TB_TRANSPORT_SESSIONS_INACTIVITY_TIMEOUT</td>
          <td>300000</td>
          <td>Inactivity timeout for device session in transport service. The last activity time of the device session is updated if device sends any message, including keepalive messages</td>
      </tr>
      <tr>
          <td>transport.sessions.report_timeout</td>
          <td>TB_TRANSPORT_SESSIONS_REPORT_TIMEOUT</td>
          <td>3000</td>
          <td>Interval of periodic check for expired sessions and report of the changes to session last activity time</td>
      </tr>
      <tr>
          <td>transport.json.type_cast_enabled</td>
          <td>JSON_TYPE_CAST_ENABLED</td>
          <td>true</td>
          <td>Cast String data types to Numeric if possible when processing Telemetry/Attributes JSON</td>
      </tr>
      <tr>
          <td>transport.json.max_string_value_length</td>
          <td>JSON_MAX_STRING_VALUE_LENGTH</td>
          <td>0</td>
          <td>Maximum allowed string value length when processing Telemetry/Attributes JSON (0 value disables string value length check)</td>
      </tr>
      <tr>
          <td>transport.log.enabled</td>
          <td>TB_TRANSPORT_LOG_ENABLED</td>
          <td>true</td>
          <td>Enable/Disable log of transport messages to telemetry. For example, logging of LwM2M registration update</td>
      </tr>
      <tr>
          <td>transport.log.max_length</td>
          <td>TB_TRANSPORT_LOG_MAX_LENGTH</td>
          <td>1024</td>
          <td>Maximum length of the log message. The content will be truncated to the specified value if needed</td>
      </tr>
      <tr>
          <td>transport.stats.enabled</td>
          <td>TB_TRANSPORT_STATS_ENABLED</td>
          <td>true</td>
          <td>Enable/Disable collection of transport statistics</td>
      </tr>
      <tr>
          <td>transport.stats.print-interval-ms</td>
          <td>TB_TRANSPORT_STATS_PRINT_INTERVAL_MS</td>
          <td>60000</td>
          <td>Interval of transport statistics logging</td>
      </tr>
  </tbody>
</table>
