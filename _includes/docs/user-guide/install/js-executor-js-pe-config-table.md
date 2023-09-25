<table>
  <thead>
      <tr>
          <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>js.response_poll_interval</td>
          <td>REMOTE_JS_RESPONSE_POLL_INTERVAL_MS</td>
          <td>25</td>
          <td>Interval in milliseconds to poll response from JS executor services</td>
      </tr>
      <tr>
          <td>js.max_result_size</td>
          <td>JS_MAX_RESULT_SIZE</td>
          <td>300000</td>
          <td>Maximum allowed symbols in a result after processing a script</td>
      </tr>
      <tr>
          <td>script.use_sandbox</td>
          <td>SCRIPT_USE_SANDBOX</td>
          <td>true</td>
          <td>Use Sandboxed (secured) JVM JavaScript environment</td>
      </tr>
      <tr>
          <td>script.memory_usage_trace_frequency</td>
          <td>MEMORY_USAGE_TRACE_FREQUENCY</td>
          <td>1000</td>
          <td>Interval of logging statistics about memory usage</td>
      </tr>
      <tr>
          <td>script.script_body_trace_frequency</td>
          <td>SCRIPT_BODY_TRACE_FREQUENCY</td>
          <td>10000</td>
          <td>Interval of logging information during about script execution</td>
      </tr>
     <tr>
          <td>script.stat_print_frequency</td>
          <td>SCRIPT_STAT_PRINT_FREQUENCY</td>
          <td>10000</td>
          <td>Interval of printing the statistics JS executions</td>
      </tr>
      <tr>
          <td>script.max_active_scripts</td>
          <td>MAX_ACTIVE_SCRIPTS</td>
          <td>1000</td>
          <td>Maximum allowed simultaneous script execution</td>
      </tr>
      <tr>
          <td>script.slow_query_log_ms</td>
          <td>SLOW_QUERY_LOG_MS</td>
          <td>5.000000</td>
          <td>Interval of showing queries that took a long time to perform In milliseconds</td>
      </tr>
      <tr>
          <td>script.slow_query_log_body</td>
          <td>SLOW_QUERY_LOG_BODY</td>
          <td>false</td>
          <td>Enable/Disable show slow queries body</td>
      </tr>
  </tbody>
</table>
