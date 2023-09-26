<table>
  <thead>
      <tr>
          <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>usage.stats.report.enabled</td>
          <td>USAGE_STATS_REPORT_ENABLED</td>
          <td>true</td>
          <td>Enable/Disable collection of statistics about API usage. Collected on a system and tenant level by default</td>
      </tr>
      <tr>
          <td>usage.stats.report.enabled_per_customer</td>
          <td>USAGE_STATS_REPORT_PER_CUSTOMER_ENABLED</td>
          <td>false</td>
          <td>Enable/Disable collection of statistics about API usage on a customer level</td>
      </tr>
      <tr>
          <td>usage.stats.report.interval</td>
          <td>USAGE_STATS_REPORT_INTERVAL</td>
          <td>10</td>
          <td>Interval of reporting the statistics. By default, the summarized statistics is sent every 10 seconds</td>
      </tr>
      <tr>
          <td>usage.stats.check.cycle</td>
          <td>USAGE_STATS_CHECK_CYCLE</td>
          <td>60000</td>
          <td>Interval of checking the start of next cycle and re-enabling the blocked tenants/customers</td>
      </tr>
      <tr>
          <td>usage.stats.gauge_report_interval</td>
          <td>USAGE_STATS_GAUGE_REPORT_INTERVAL</td>
          <td>180000</td>
          <td>In milliseconds. Default value is 3 minutes</td>
      </tr>
      <tr>
          <td>usage.stats.devices.report_interval</td>
          <td>DEVICES_STATS_REPORT_INTERVAL</td>
          <td>60</td>
          <td>In seconds, default value is 1 minutes. When changing, in cluster mode, make sure usage.stats.gauge_report_interval is set to x2-x3 of this value</td>
      </tr>
  </tbody>
</table>
