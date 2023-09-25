<table>
  <thead>
      <tr>
          <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>state.defaultInactivityTimeoutInSec</td>
          <td>DEFAULT_INACTIVITY_TIMEOUT</td>
          <td>600</td>
          <td>Should be greater than transport.sessions.report_timeout</td>
      </tr>
      <tr>
          <td>state.defaultStateCheckIntervalInSec</td>
          <td>DEFAULT_STATE_CHECK_INTERVAL</td>
          <td>60</td>
          <td>Interval for checking the device state after a specified period of time. Time in seconds</td>
      </tr>
      <tr>
          <td>state.persistToTelemetry</td>
          <td>PERSIST_STATE_TO_TELEMETRY</td>
          <td>false</td>
          <td>Controls whether we store device 'active' flag in attributes (default) or telemetry. If you device to change this parameter, you should re-create the device info view as one of the following: If 'persistToTelemetry' is changed from 'false' to 'true': 'CREATE OR REPLACE VIEW device_info_view AS SELECT * FROM device_info_active_ts_view;' If 'persistToTelemetry' is changed from 'true' to 'false': 'CREATE OR REPLACE VIEW device_info_view AS SELECT * FROM device_info_active_attribute_view;'</td>
      </tr>
  </tbody>
</table>
