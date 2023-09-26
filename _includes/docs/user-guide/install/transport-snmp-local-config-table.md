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
          <td>transport.snmp.bind_port</td>
          <td>SNMP_BIND_PORT</td>
          <td>1620</td>
          <td>Snmp bind port</td>
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
          <td>transport.snmp.response.ignore_type_cast_errors</td>
          <td>SNMP_RESPONSE_IGNORE_TYPE_CAST_ERRORS</td>
          <td>false</td>
          <td></td>
      </tr>
  </tbody>
</table>
