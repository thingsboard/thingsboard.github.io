<table>
  <thead>
      <tr>
          <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>device.connectivity.http.enabled</td>
          <td>DEVICE_CONNECTIVITY_HTTP_ENABLED</td>
          <td>true</td>
          <td>If true check-connectivity service will include curl command to the list of all test commands using DEVICE_CONNECTIVITY_HTTP_HOST and DEVICE_CONNECTIVITY_HTTP_PORT variables</td>
      </tr>
      <tr>
          <td>device.connectivity.http.host</td>
          <td>DEVICE_CONNECTIVITY_HTTP_HOST</td>
          <td></td>
          <td>Host of http transport service. If empty base url will be used.</td>
      </tr>
      <tr>
          <td>device.connectivity.http.port</td>
          <td>DEVICE_CONNECTIVITY_HTTP_PORT</td>
          <td>8080</td>
          <td>Port of http transport service. If empty default http port will be used.</td>
      </tr>
      <tr>
          <td>device.connectivity.https.enabled</td>
          <td>DEVICE_CONNECTIVITY_HTTPS_ENABLED</td>
          <td>false</td>
          <td>If true check-connectivity service will include curl command to the list of all test commands using DEVICE_CONNECTIVITY_HTTPS_HOST and DEVICE_CONNECTIVITY_HTTPS_PORT variables</td>
      </tr>
      <tr>
          <td>device.connectivity.https.host</td>
          <td>DEVICE_CONNECTIVITY_HTTPS_HOST</td>
          <td></td>
          <td>Host of http transport service. If empty base url will be used.</td>
      </tr>
      <tr>
          <td>device.connectivity.https.port</td>
          <td>DEVICE_CONNECTIVITY_HTTPS_PORT</td>
          <td>443</td>
          <td>Port of http transport service. If empty default https port will be used.</td>
      </tr>
      <tr>
          <td>device.connectivity.mqtt.enabled</td>
          <td>DEVICE_CONNECTIVITY_MQTT_ENABLED</td>
          <td>true</td>
          <td>If true mosquito command will be included to the list of all test commands using DEVICE_CONNECTIVITY_MQTT_HOST and DEVICE_CONNECTIVITY_MQTT_PORT</td>
      </tr>
      <tr>
          <td>device.connectivity.mqtt.host</td>
          <td>DEVICE_CONNECTIVITY_MQTT_HOST</td>
          <td></td>
          <td>Host of mqtt transport service. If empty base url host will be used.</td>
      </tr>
      <tr>
          <td>device.connectivity.mqtt.port</td>
          <td>DEVICE_CONNECTIVITY_MQTT_PORT</td>
          <td>1883</td>
          <td>Port of mqtt transport service</td>
      </tr>
      <tr>
          <td>device.connectivity.mqtts.enabled</td>
          <td>DEVICE_CONNECTIVITY_MQTTS_ENABLED</td>
          <td>false</td>
          <td>If true mosquito command will be included to the list of all test commands using DEVICE_CONNECTIVITY_MQTTS_HOST and DEVICE_CONNECTIVITY_MQTTS_PORT</td>
      </tr>
      <tr>
          <td>device.connectivity.mqtts.host</td>
          <td>DEVICE_CONNECTIVITY_MQTTS_HOST</td>
          <td></td>
          <td>Host of mqtt transport service. If empty base url host will be used.</td>
      </tr>
      <tr>
          <td>device.connectivity.mqtts.port</td>
          <td>DEVICE_CONNECTIVITY_MQTTS_PORT</td>
          <td>8883</td>
          <td>Port of mqtt transport service. If empty default port for mqtts will be used.</td>
      </tr>
      <tr>
          <td>device.connectivity.mqtts.pem_cert_file</td>
          <td>DEVICE_CONNECTIVITY_MQTT_SSL_PEM_CERT</td>
          <td>mqttserver.pem</td>
          <td>Path to the server certificate file</td>
      </tr>
      <tr>
          <td>device.connectivity.coap.enabled</td>
          <td>DEVICE_CONNECTIVITY_COAP_ENABLED</td>
          <td>true</td>
          <td>If true coap command will be included to the list of all test commands using DEVICE_CONNECTIVITY_COAP_HOST and DEVICE_CONNECTIVITY_COAP_PORT.</td>
      </tr>
      <tr>
          <td>device.connectivity.coap.host</td>
          <td>DEVICE_CONNECTIVITY_COAP_HOST</td>
          <td></td>
          <td>Host of coap transport service. If empty base url host will be used.</td>
      </tr>
      <tr>
          <td>device.connectivity.coap.port</td>
          <td>DEVICE_CONNECTIVITY_COAP_PORT</td>
          <td>5683</td>
          <td>Port of coap transport service. If empty default port for coap will be used.</td>
      </tr>
      <tr>
          <td>device.connectivity.coaps.enabled</td>
          <td>DEVICE_CONNECTIVITY_COAPS_ENABLED</td>
          <td>false</td>
          <td>If true coap command will be included to the list of all test commands using DEVICE_CONNECTIVITY_COAPS_HOST and DEVICE_CONNECTIVITY_COAPS_PORT.</td>
      </tr>
      <tr>
          <td>device.connectivity.coaps.host</td>
          <td>DEVICE_CONNECTIVITY_COAPS_HOST</td>
          <td></td>
          <td>Host of coap transport service. If empty base url host will be used.</td>
      </tr>
      <tr>
          <td>device.connectivity.coaps.port</td>
          <td>DEVICE_CONNECTIVITY_COAPS_PORT</td>
          <td>5684</td>
          <td>Port of coap transport service. If empty default port for coaps will be used.</td>
      </tr>      
  </tbody>
</table>
