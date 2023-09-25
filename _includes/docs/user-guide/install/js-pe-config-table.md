<table>
  <thead>
      <tr>
          <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>js.evaluator</td>
          <td>JS_EVALUATOR</td>
          <td>local</td>
          <td>local (Nashorn Engine, deprecated) OR remote JS-Executors (NodeJS)</td>
      </tr>
      <tr>
          <td>js.max_total_args_size</td>
          <td>JS_MAX_TOTAL_ARGS_SIZE</td>
          <td>150000</td>
          <td>Limit on the number of arguments that are passed to the function to execute the script</td>
      </tr>
      <tr>
          <td>js.max_result_size</td>
          <td>JS_MAX_RESULT_SIZE</td>
          <td>300000</td>
          <td>Maximum allowed symbols in a result after processing a script</td>
      </tr>
      <tr>
          <td>js.max_script_body_size</td>
          <td>JS_MAX_SCRIPT_BODY_SIZE</td>
          <td>50000</td>
          <td>Maximum allowed symbols in script body</td>
      </tr>
      <tr>
          <td>js.local.js_thread_pool_size</td>
          <td>LOCAL_JS_THREAD_POOL_SIZE</td>
          <td>50</td>
          <td>Specify thread pool size for javascript executor service</td>
      </tr>
      <tr>
          <td>js.local.use_js_sandbox</td>
          <td>USE_LOCAL_JS_SANDBOX</td>
          <td>true</td>
          <td>Use Sandboxed (secured) JVM JavaScript environment</td>
      </tr>
      <tr>
          <td>js.local.monitor_thread_pool_size</td>
          <td>LOCAL_JS_SANDBOX_MONITOR_THREAD_POOL_SIZE</td>
          <td>4</td>
          <td>Specify thread pool size for JavaScript sandbox resource monitor</td>
      </tr>
      <tr>
          <td>js.local.max_cpu_time</td>
          <td>LOCAL_JS_SANDBOX_MAX_CPU_TIME</td>
          <td>8000</td>
          <td>Maximum CPU time in milliseconds allowed for script execution</td>
      </tr>
      <tr>
          <td>js.local.max_errors</td>
          <td>LOCAL_JS_SANDBOX_MAX_ERRORS</td>
          <td>3</td>
          <td>Maximum allowed JavaScript execution errors before JavaScript will be blacklisted</td>
      </tr>
      <tr>
          <td>js.local.max_requests_timeout</td>
          <td>LOCAL_JS_MAX_REQUEST_TIMEOUT</td>
          <td>0</td>
          <td>JS Eval max request timeout. 0 - no timeout</td>
      </tr>
      <tr>
          <td>js.local.max_black_list_duration_sec</td>
          <td>LOCAL_JS_SANDBOX_MAX_BLACKLIST_DURATION_SEC</td>
          <td>60</td>
          <td>Maximum time in seconds for black listed function to stay in the list.</td>
      </tr>
      <tr>
          <td>js.local.stats.enabled</td>
          <td>TB_JS_LOCAL_STATS_ENABLED</td>
          <td>false</td>
          <td>Enable/Disable stats collection for local JS executor</td>
      </tr>
      <tr>
          <td>js.local.stats.print_interval_ms</td>
          <td>TB_JS_LOCAL_STATS_PRINT_INTERVAL_MS</td>
          <td>10000</td>
          <td>Interval of logging for local JS executor stats</td>
      </tr>
      <tr>
          <td>js.remote.js_thread_pool_size</td>
          <td>REMOTE_JS_THREAD_POOL_SIZE</td>
          <td>50</td>
          <td>Specify thread pool size for javascript executor service</td>
      </tr>
      <tr>
          <td>js.remote.max_errors</td>
          <td>REMOTE_JS_SANDBOX_MAX_ERRORS</td>
          <td>3</td>
          <td>Maximum allowed JavaScript execution errors before JavaScript will be blacklisted</td>
      </tr>
      <tr>
          <td>js.remote.max_black_list_duration_sec</td>
          <td>REMOTE_JS_SANDBOX_MAX_BLACKLIST_DURATION_SEC</td>
          <td>60</td>
          <td>Maximum time in seconds for black listed function to stay in the list</td>
      </tr>
      <tr>
          <td>js.remote.stats.enabled</td>
          <td>TB_JS_REMOTE_STATS_ENABLED</td>
          <td>false</td>
          <td>Enable/Disable stats collection for remote JS executor</td>
      </tr>
      <tr>
          <td>js.remote.stats.print_interval_ms</td>
          <td>TB_JS_REMOTE_STATS_PRINT_INTERVAL_MS</td>
          <td>10000</td>
          <td>Interval of logging for remote JS executor stats</td>
      </tr>
  </tbody>
</table>
