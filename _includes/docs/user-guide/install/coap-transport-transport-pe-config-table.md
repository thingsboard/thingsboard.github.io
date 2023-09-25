<table>
  <thead>
      <tr>
          <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>transport.coap.enabled</td>
          <td>COAP_ENABLED</td>
          <td>true</td>
          <td>Enable/disable coap transport protocol.</td>
      </tr>
      <tr>
          <td>transport.coap.timeout</td>
          <td>COAP_TIMEOUT</td>
          <td>10000</td>
          <td>CoaP processing timeout in milliseconds</td>
      </tr>
      <tr>
          <td>transport.coap.piggyback_timeout</td>
          <td>COAP_PIGGYBACK_TIMEOUT</td>
          <td>500</td>
          <td>CoaP piggyback response timeout in milliseconds</td>
      </tr>
      <tr>
          <td>transport.coap.psm_activity_timer</td>
          <td>COAP_PSM_ACTIVITY_TIMER</td>
          <td>10000</td>
          <td>Default PSM Activity Timer if not specified in device profile</td>
      </tr>
      <tr>
          <td>transport.coap.paging_transmission_window</td>
          <td>COAP_PAGING_TRANSMISSION_WINDOW</td>
          <td>10000</td>
          <td>Default Paging Transmission Window for eDRX support if not specified in the device profile</td>
      </tr>
      <tr>
          <td>transport.coap.dtls.retransmission_timeout</td>
          <td>COAP_DTLS_RETRANSMISSION_TIMEOUT_MS</td>
          <td>9000</td>
          <td>RFC7925_RETRANSMISSION_TIMEOUT_IN_MILLISECONDS = 9000</td>
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
