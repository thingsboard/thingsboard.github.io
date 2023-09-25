<table>
  <thead>
      <tr>
          <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>metrics.enabled</td>
          <td>METRICS_ENABLED</td>
          <td>false</td>
          <td>Enable/disable actuator metrics.</td>
      </tr>
      <tr>
          <td>metrics.timer.percentiles</td>
          <td>METRICS_TIMER_PERCENTILES</td>
          <td>0.5</td>
          <td>Metrics percentiles returned by actuator for timer metrics. List of double values (divided by ,).</td>
      </tr>
      <tr>
          <td>management.endpoints.web.exposure.include</td>
          <td>METRICS_ENDPOINTS_EXPOSE</td>
          <td>info</td>
          <td>Expose metrics endpoint (use value 'prometheus' to enable prometheus metrics).</td>
      </tr>
  </tbody>
</table>
