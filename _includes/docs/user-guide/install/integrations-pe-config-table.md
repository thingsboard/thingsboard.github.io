<table>
  <thead>
      <tr>
          <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>integrations.statistics.enabled</td>
          <td>INTEGRATIONS_STATISTICS_ENABLED</td>
          <td>true</td>
          <td>Enable/disable integrations statistics</td>
      </tr>
      <tr>
          <td>integrations.statistics.persist_frequency</td>
          <td>INTEGRATIONS_STATISTICS_PERSIST_FREQUENCY</td>
          <td>3600000</td>
          <td>Integration statistic persistence frequency in milliseconds</td>
      </tr>
      <tr>
          <td>integrations.reinit.enabled</td>
          <td>INTEGRATIONS_REINIT_ENABLED</td>
          <td>true</td>
          <td>Enable/Disable integrations hot reinitialization</td>
      </tr>
      <tr>
          <td>integrations.reinit.frequency</td>
          <td>INTEGRATIONS_REINIT_FREQUENCY</td>
          <td>300000</td>
          <td>Checking interval for reinit integrations</td>
      </tr>
      <tr>
          <td>integrations.rate_limits.enabled</td>
          <td>TB_INTEGRATION_RATE_LIMITS_ENABLED</td>
          <td>false</td>
          <td>Enable/Disable integrations rate limits</td>
      </tr>
      <tr>
          <td>integrations.rate_limits.tenant</td>
          <td>TB_INTEGRATION_RATE_LIMITS_TENANT</td>
          <td>1000:1,20000:60</td>
          <td>The value of integrations rate limit. By default, no more then 1000 messages per second and no more 20000 messages per hour</td>
      </tr>
      <tr>
          <td>integrations.rate_limits.device</td>
          <td>TB_INTEGRATION_RATE_LIMITS_DEVICE</td>
          <td>10:1,300:60</td>
          <td>The value of integrations device rate limit. By default, no more then 10 messages per second and no more 300 messages per hour</td>
      </tr>
      <tr>
          <td>integrations.allow_Local_network_hosts</td>
          <td>INTEGRATIONS_ALLOW_LOCAL_NETWORK_HOSTS</td>
          <td>true</td>
          <td>Enable/Disable integrations local network hosts</td>
      </tr>
      <tr>
          <td>integrations.rpc.enabled</td>
          <td>INTEGRATIONS_RPC_ENABLED</td>
          <td>true</td>
          <td>Enable/Disable RPC call via integrations</td>
      </tr>
      <tr>
          <td>integrations.rpc.port</td>
          <td>INTEGRATIONS_RPC_PORT</td>
          <td>9090</td>
          <td>Integration bind port</td>
      </tr>
      <tr>
          <td>integrations.rpc.ssl.enabled</td>
          <td>INTEGRATIONS_RPC_SSL_ENABLED</td>
          <td>false</td>
          <td>Enable/disable SSL support</td>
      </tr>
      <tr>
          <td>integrations.rpc.ssl.cert</td>
          <td>INTEGRATIONS_RPC_SSL_CERT</td>
          <td>certChainFile.pem</td>
          <td>Integration SSL certificate name</td>
      </tr>
      <tr>
          <td>integrations.rpc.ssl.privateKey</td>
          <td>INTEGRATIONS_RPC_SSL_PRIVATE_KEY</td>
          <td>privateKeyFile.pem</td>
          <td>Integration SSL private key</td>
      </tr>
      <tr>
          <td>integrations.rpc.client_max_keep_alive_time_sec</td>
          <td>INTEGRATIONS_RPC_CLIENT_MAX_KEEP_ALIVE_TIME_SEC</td>
          <td>300</td>
          <td>Disconnect a client if no keepalive ping received in the specified time</td>
      </tr>
  </tbody>
</table>
