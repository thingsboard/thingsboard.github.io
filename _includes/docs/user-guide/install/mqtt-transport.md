<table>
    <thead>
      <tr>
          <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
      </tr>
    </thead>
    <tbody>
    <tr>
        <td>transport.mqtt.bind_address</td>
        <td>MQTT_BIND_ADDRESS</td>
        <td>0.0.0.0</td>
        <td>MQTT bind address</td>
    </tr>
    <tr>
        <td>transport.mqtt.bind_port</td>
        <td>MQTT_BIND_PORT</td>
        <td>1883</td>
        <td>MQTT bind port</td>
    </tr>
    <tr>
        <td>transport.mqtt.timeout</td>
        <td>MQTT_TIMEOUT</td>
        <td>10000</td>
        <td>MQTT processing timeout in milliseconds</td>
    </tr>
    <tr>
        <td>transport.mqtt.msg_queue_size_per_device_limit</td>
        <td>MQTT_MSG_QUEUE_SIZE_PER_DEVICE_LIMIT</td>
        <td>100</td>
        <td>Messages await in the queue before device connected state. This limit works on low level before TenantProfileLimits mechanism
        </td>
    </tr>
    <tr>
        <td>transport.mqtt.netty.leak_detector_level</td>
        <td>NETTY_LEAK_DETECTOR_LVL</td>
        <td>DISABLED</td>
        <td>Netty leak detector level</td>
    </tr>
    <tr>
        <td>transport.mqtt.netty.boss_group_thread_count</td>
        <td>NETTY_BOSS_GROUP_THREADS</td>
        <td>1</td>
        <td>Netty BOSS threads count</td>
    </tr>
    <tr>
        <td>transport.mqtt.netty.worker_group_thread_count</td>
        <td>NETTY_WORKER_GROUP_THREADS</td>
        <td>12</td>
        <td>Netty worker threads count</td>
    </tr>
    <tr>
        <td>transport.mqtt.netty.max_payload_size</td>
        <td>NETTY_MAX_PAYLOAD_SIZE</td>
        <td>65536</td>
        <td>Max payload size in bytes</td>
    </tr>
    <tr>
        <td>transport.mqtt.netty.so_keep_alive</td>
        <td>NETTY_SO_KEEPALIVE</td>
        <td>false</td>
        <td></td>
    </tr>
    <tr>
        <td>transport.mqtt.ssl.enabled</td>
        <td>MQTT_SSL_ENABLED</td>
        <td>false</td>
        <td>Enable/disable MQTTS support</td>
    </tr>
    <tr>
        <td>transport.mqtt.ssl.bind_address</td>
        <td>MQTT_SSL_BIND_ADDRESS</td>
        <td>0.0.0.0</td>
        <td>MMQTT SSL bind address</td>
    </tr>
    <tr>
        <td>transport.mqtt.ssl.bind_port</td>
        <td>MQTT_SSL_BIND_PORT</td>
        <td>8883</td>
        <td>MQTT SSL bind port</td>
    </tr>
    <tr>
        <td>transport.mqtt.ssl.protocol</td>
        <td>MQTT_SSL_PROTOCOL</td>
        <td>TLSv1.2</td>
        <td>SSL protocol: See <a href="http://docs.oracle.com/javase/8/docs/technotes/guides/security/StandardNames.html#SSLContext">this link</a></td>
    </tr>
    <tr>
        <td>transport.mqtt.ssl.credentials.type.</td>
        <td>MQTT_SSL_CREDENTIALS_TYPE</td>
        <td>PEM</td>
        <td>Server credentials type (PEM - pem certificate file; KEYSTORE - java keystore)</td>
    </tr>
    <tr>
        <td>transport.mqtt.ssl.credentials.pem.cert_file</td>
        <td>MQTT_SSL_PEM_CERT</td>
        <td>mqttserver.pem</td>
        <td>Path to the server certificate file (holds server certificate or certificate chain, may include server private key)
        </td>
    </tr>
    <tr>
        <td>transport.mqtt.ssl.credentials.pem.key_file</td>
        <td>MQTT_SSL_PEM_KEY</td>
        <td>mqttserver_key.pem</td>
        <td>Path to the server certificate private key file (optional)</td>
    </tr>
    <tr>
        <td>transport.mqtt.ssl.credentials.pem.key_password</td>
        <td>MQTT_SSL_PEM_KEY_PASSWORD</td>
        <td>server_key_password</td>
        <td>Server certificate private key password (optional)</td>
    </tr>
    <tr>
        <td>transport.mqtt.ssl.credentials.keystore.type</td>
        <td>MQTT_SSL_KEY_STORE_TYPE</td>
        <td>PKCS12</td>
        <td>Type of the key store: PKCS12 or JKS</td>
    </tr>
    <tr>
        <td>transport.mqtt.ssl.credentials.keystore.store_file</td>
        <td>MQTT_SSL_KEY_STORE</td>
        <td>mqttserver.jks</td>
        <td>Path to the key store that holds the SSL certificate</td>
    </tr>
    <tr>
        <td>transport.mqtt.ssl.credentials.keystore.store_password</td>
        <td>MQTT_SSL_KEY_STORE_PASSWORD</td>
        <td>server_ks_password</td>
        <td>Password used to access the key store</td>
    </tr>
    <tr>
        <td>transport.mqtt.ssl.credentials.keystore.key_password</td>
        <td>MQTT_SSL_KEY_PASSWORD</td>
        <td>server_key_password</td>
        <td>Password used to access the key</td>
    </tr>
    <tr>
        <td>transport.mqtt.ssl.skip_validity_check_for_client_cert</td>
        <td>MQTT_SSL_SKIP_VALIDITY_CHECK_FOR_CLIENT_CERT</td>
        <td>false</td>
        <td>Skip certificate validity check for client certificates</td>
    </tr>
    </tbody>
</table>
