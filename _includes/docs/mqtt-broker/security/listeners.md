* TOC
{:toc}

TBMQ provides flexible configuration options for its listeners, supporting TCP, SSL/TLS, and MQTT over WebSockets protocols.

### TCP Listener

By default, TBMQ has the TCP listener enabled on port `1883`.
However, if you wish to disable the TCP listener, you can set the `LISTENER_TCP_ENABLED` environment variable to `false`.

Furthermore, if you need to change the host address that the broker is binding to or the port it is listening to, 
you can modify the `LISTENER_TCP_BIND_ADDRESS` and `LISTENER_TCP_BIND_PORT` variables, respectively. 
This gives you the flexibility to configure the broker to listen on a specific network interface and port of your choice.

By adjusting these environment variables, you can customize the TCP listening behavior of TBMQ to suit your specific requirements.

### TLS Listener

To enable the SSL/TLS listener, set the `LISTENER_SSL_ENABLED` environment variable to `true`. By default, the broker is listening on the `8883` port.
To change the host and/or port that the broker is listening to, update the `LISTENER_SSL_BIND_ADDRESS` and `LISTENER_SSL_BIND_PORT` variables, respectively.

Choose the type of credentials you want to use by setting the `LISTENER_SSL_CREDENTIALS_TYPE` parameter. Currently, the supported options are `PEM` and `KEYSTORE`.
Note that you can find a list of all available properties in the [configuration documentation](/docs/{{docsPrefix}}mqtt-broker/install/config/).

If you choose KeyStore as the credentials type, you need to configure the following:
- Set `LISTENER_SSL_KEY_STORE` variable to the path to your `.jks` file with the server certificate chain.
- Set `LISTENER_SSL_KEY_STORE_PASSWORD` variable to the password used to access the key store.
- Set `LISTENER_SSL_KEY_PASSWORD` variable to the password for the server certificate.

If you choose Pem as the credentials type, you need to configure the following:
- Set `LISTENER_SSL_PEM_CERT` variable to the path of your server certificate file.
- Set `LISTENER_SSL_PEM_KEY` variable to the path of your server certificate private key file.
- Set `LISTENER_SSL_PEM_KEY_PASSWORD` variable to the password of your server certificate private key.

If you require two-way TLS, you also need to configure the TrustStore by adding the trusted certificates/chains to the configured KeyStore/PEM files.
For more information about configuration possibilities and certificate generation, please review the following security [pages](/docs/{{docsPrefix}}mqtt-broker/security/mqtts/).

### WS Listener

By default, TBMQ has the WebSocket listener enabled on port `8084`.
However, in case you want to disable the WS listener, you can set the `LISTENER_WS_ENABLED` environment variable to `false`.

Additionally, if you need to change the host address that the broker is binding to or the port it is listening to,
you can modify the `LISTENER_WS_BIND_ADDRESS` and `LISTENER_WS_BIND_PORT` variables, respectively.

WS listener is configured to negotiate via all MQTT versions by default, i.e. `WS_NETTY_SUB_PROTOCOLS` is set to `mqttv3.1,mqtt`.
The subprotocol setting `mqtt` represents MQTT 3.1.1 and MQTT 5.

### WSS Listener

To enable the WebSocket Secure listener, set the `LISTENER_WSS_ENABLED` environment variable to `true`. By default, the broker is listening on the `8085` port.
To change the host and/or port that the broker is listening to, update the `LISTENER_WSS_BIND_ADDRESS` and `LISTENER_WSS_BIND_PORT` variables, respectively.

Choose the type of credentials you want to use by setting the `LISTENER_WSS_CREDENTIALS_TYPE` parameter. 
Supported options are the same as for [TLS](#tls-listener) listener.

If you choose KeyStore as the credentials type, you need to configure the following:
- Set `LISTENER_WSS_KEY_STORE` variable to the path to your `.jks` file with the server certificate chain.
- Set `LISTENER_WSS_KEY_STORE_PASSWORD` variable to the password used to access the key store.
- Set `LISTENER_WSS_KEY_PASSWORD` variable to the password for the server certificate.

If you choose Pem as the credentials type, you need to configure the following:
- Set `LISTENER_WSS_PEM_CERT` variable to the path of your server certificate file.
- Set `LISTENER_WSS_PEM_KEY` variable to the path of your server certificate private key file.
- Set `LISTENER_WSS_PEM_KEY_PASSWORD` variable to the password of your server certificate private key.

Do not forget to configure the TrustStore by adding the trusted certificates/chains if you require two-way TLS.
WSS listener is set to the same negotiation subprotocols as [WS](#ws-listener) listener. If you need to change this default behavior, update `WSS_NETTY_SUB_PROTOCOLS` parameter appropriately.

### Next steps

- [**Connectivity settings**](/docs/{{docsPrefix}}mqtt-broker/user-guide/ui/settings/#connectivity) - Learn how to configure hosts and ports in the TBMQ UI for use in different protocol-based features.
{% assign currentGuide = "SecurityGuide" %}{% include templates/mqtt-broker-guides-banner.md %}
