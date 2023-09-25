<table>
  <thead>
      <tr>
          <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>tbel.enabled</td>
          <td>TBEL_ENABLED</td>
          <td>true</td>
          <td>Enable/Disable TBEL feature.</td>
      </tr>
      <tr>
          <td>tbel.max_total_args_size</td>
          <td>TBEL_MAX_TOTAL_ARGS_SIZE</td>
          <td>100000</td>
          <td>Limit on the number of arguments that are passed to the function to execute the script</td>
      </tr>
      <tr>
          <td>tbel.max_result_size</td>
          <td>TBEL_MAX_RESULT_SIZE</td>
          <td>300000</td>
          <td>Maximum allowed symbols in a result after processing a script</td>
      </tr>
      <tr>
          <td>tbel.max_script_body_size</td>
          <td>TBEL_MAX_SCRIPT_BODY_SIZE</td>
          <td>50000</td>
          <td>Maximum allowed symbols in script body</td>
      </tr>
      <tr>
          <td>tbel.max_memory_limit_mb</td>
          <td>TBEL_MAX_MEMORY_LIMIT_MB</td>
          <td>8</td>
          <td>Maximum allowed TBEL script execution memory</td>
      </tr>
      <tr>
          <td>tbel.max_errors</td>
          <td>TBEL_MAX_ERRORS</td>
          <td>3</td>
          <td>Maximum allowed TBEL script execution errors before it will be blacklisted</td>
      </tr>
      <tr>
          <td>tbel.max_requests_timeout</td>
          <td>TBEL_MAX_REQUEST_TIMEOUT</td>
          <td>500</td>
          <td>TBEL Eval max request timeout in milliseconds. 0 - no timeout</td>
      </tr>
      <tr>
          <td>tbel.max_black_list_duration_sec</td>
          <td>TBEL_MAX_BLACKLIST_DURATION_SEC</td>
          <td>60</td>
          <td>Maximum time in seconds for black listed function to stay in the list.</td>
      </tr>
      <tr>
          <td>tbel.thread_pool_size</td>
          <td>TBEL_THREAD_POOL_SIZE</td>
          <td>50</td>
          <td>Specify thread pool size for javascript executor service</td>
      </tr>
      <tr>
          <td>tbel.compiled_scripts_cache_size</td>
          <td>TBEL_COMPILED_SCRIPTS_CACHE_SIZE</td>
          <td>1000</td>
          <td>Maximum cache size of TBEL compiled scripts</td>
      </tr>
      <tr>
          <td>tbel.stats.enabled</td>
          <td>TB_TBEL_STATS_ENABLED</td>
          <td>false</td>
          <td>Enable/Disable stats collection for TBEL engine</td>
      </tr>
      <tr>
          <td>tbel.stats.print_interval_ms</td>
          <td>TB_TBEL_STATS_PRINT_INTERVAL_MS</td>
          <td>10000</td>
          <td>Interval of logging for TBEL stats</td>
      </tr>
  </tbody>
</table>
