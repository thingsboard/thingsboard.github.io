## MQTT Listeners

You can configure the broker to listen on TCP and SSL protocols.

### TCP Listener

TCP listener is enabled on the `1883` port by default.

To disable TCP listener set `LISTENER_TCP_ENABLED` env variable to `false`.

To change host and/or port the broker is listening to, update `LISTENER_TCP_BIND_ADDRESS` and `LISTENER_TCP_BIND_PORT` variable respectively.

### SSL Listener

To enable TCP listener set `LISTENER_SSL_ENABLED` env variable to `true`. By default broker is listening to `8883` port.

To change host and/or port the broker is listening to, update `LISTENER_SSL_BIND_ADDRESS` and `LISTENER_SSL_BIND_PORT` variable respectively.

Also, you need to configure KeyStore:
- set `LISTENER_SSL_KEY_STORE` variable to the path to your `.jks` file with server certificate chain
- set `LISTENER_SSL_KEY_PASSWORD` variable to the password to the server certificate

If you want two-way TLS you need to configure TrustStore as well:
- set `LISTENER_SSL_TRUST_STORE` variable to the path to your `.jks` file with trust-store certificate chain
- set `LISTENER_SSL_TRUST_STORE_PASSWORD` variable to the password to the trust-store certificate