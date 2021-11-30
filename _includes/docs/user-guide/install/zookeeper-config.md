#### Zookeeper connection parameters

<table>
    <thead>
      <tr>
          <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td>zk.enabled</td>
          <td>ZOOKEEPER_ENABLED</td>
          <td>false</td>
          <td>Enable/disable zookeeper discovery service. Used for ThingsBoard cluster</td>
        </tr>
        <tr>
          <td>zk.url</td>
          <td>ZOOKEEPER_URL</td>
          <td>localhost:2181</td>
          <td>Zookeeper connect string</td>
        </tr>
        <tr>
          <td>zk.retry_interval_ms</td>
          <td>ZOOKEEPER_RETRY_INTERVAL_MS</td>
          <td>3000</td>
          <td>Zookeeper retry interval in milliseconds</td>
        </tr>
        <tr>
          <td>zk.connection_timeout_ms</td>
          <td>ZOOKEEPER_CONNECTION_TIMEOUT_MS</td>
          <td>3000</td>
          <td>Zookeeper connection timeout in milliseconds</td>
        </tr>
        <tr>
          <td>zk.session_timeout_ms</td>
          <td>ZOOKEEPER_SESSION_TIMEOUT_MS</td>
          <td>3000</td>
          <td>Zookeeper session timeout in milliseconds</td>
        </tr>
        <tr>
          <td>zk.zk_dir</td>
          <td>ZOOKEEPER_NODES_DIR</td>
          <td>/thingsboard</td>
          <td>Name of the directory in zookeeper 'filesystem'</td>
        </tr>
    </tbody>
</table>
