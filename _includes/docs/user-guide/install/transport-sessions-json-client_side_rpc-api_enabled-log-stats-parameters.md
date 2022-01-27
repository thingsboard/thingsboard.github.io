<table>
    <thead>
      <tr>
          <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
      </tr>
    </thead>
    <tbody>
        <tr>
            <td>transport.sessions.inactivity_timeout</td>
            <td>TB_TRANSPORT_SESSIONS_INACTIVITY_TIMEOUT</td>
            <td>300000</td>
            <td>Inactivity timeout for device session in transport service. The last activity time of the device session is updated if device sends any message, including keepalive messages.</td>
        </tr>
        <tr>
            <td>transport.sessions.report_timeout</td>
            <td>TB_TRANSPORT_SESSIONS_REPORT_TIMEOUT</td>
            <td>3000</td>
            <td>Interval of periodic check for expired sessions and report of the changes to session last activity time.</td>
        </tr>
        <tr>
            <td class="item item-pe">transport.rate_limits.enabled</td>
            <td>TB_TRANSPORT_RATE_LIMITS_ENABLED</td>
            <td>false</td>
            <td></td>
        </tr>
        <tr>
            <td class="item item-pe">transport.rate_limits.tenant</td>
            <td>TB_TRANSPORT_RATE_LIMITS_TENANT</td>
            <td>1000:1,20000:60</td>
            <td></td>
        </tr>
        <tr>
            <td class="item item-pe">transport.rate_limits.device</td>
            <td>TB_TRANSPORT_RATE_LIMITS_DEVICE</td>
            <td>10:1,300:60</td>
            <td></td>
        </tr>
        <tr>
            <td>transport.json.type_cast_enabled</td>
            <td>JSON_TYPE_CAST_ENABLED</td>
            <td>{{JSON_TYPE_CAST_ENABLED_VALUE}}</td>
            <td>Cast String data types to Numeric if possible when processing Telemetry/Attributes JSON</td>
        </tr>
        <tr>
            <td>transport.json.max_string_value_length</td>
            <td>JSON_MAX_STRING_VALUE_LENGTH</td>
            <td>0</td>
            <td>Maximum allowed string value length when processing Telemetry/Attributes JSON (0 value disables string value length check)</td>
        </tr>
        <tr>
            <td>transport.client_side_rpc.timeout</td>
            <td>CLIENT_SIDE_RPC_TIMEOUT</td>
            <td>60000</td>
            <td></td>
        </tr>
        <tr>
            <td>transport.api_enabled</td>
            <td>TB_TRANSPORT_API_ENABLED</td>
            <td>true</td>
            <td>Enable/disable http/mqtt/coap transport protocols (has higher priority than certain protocol's 'enabled' property)</td>
        </tr>
        <tr>
            <td>transport.log.enabled</td>
            <td>TB_TRANSPORT_LOG_ENABLED</td>
            <td>true</td>
            <td>Enable/Disable log of transport messages to telemetry. For example, logging of LwM2M registration update.</td>
        </tr>
        <tr>
            <td>transport.log.max_length</td>
            <td>TB_TRANSPORT_LOG_MAX_LENGTH</td>
            <td>1024</td>
            <td>Maximum length of the log message. The content will be truncated to the specified value if needed.</td>
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
            <td>Interval of transport statistics logging.</td>
        </tr>
    </tbody>
</table>