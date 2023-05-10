---
layout: docwithnav-mqtt-broker
title: MQTT Listeners
description: TCP and SSL MQTT Listeners configuration

---

* TOC
{:toc}

You can configure the Thingsboard MQTT broker to listen on TCP and SSL/TLS protocols.

### TCP Listener

The TCP listener is enabled on the `1883` port by default.

To disable the TCP listener, set the `LISTENER_TCP_ENABLED` environment variable to `false`.

To change the host and/or port that the broker is listening to, update the `LISTENER_TCP_BIND_ADDRESS` and `LISTENER_TCP_BIND_PORT` variables, respectively.

### SSL Listener

To enable the SSL/TLS listener, set the `LISTENER_SSL_ENABLED` environment variable to `true`. By default, the broker is listening on the `8883` port.

To change the host and/or port that the broker is listening to, update the `LISTENER_SSL_BIND_ADDRESS` and `LISTENER_SSL_BIND_PORT` variables, respectively.

You can choose the type of credentials by setting the `LISTENER_SSL_CREDENTIALS_TYPE` parameter (`PEM` and `KEYSTORE` are supported).
Note that you can find a list of all available properties in the [configuration documentation](/docs/mqtt-broker/install/config/).

For KeyStore, you need to configure the following (also check for other available parameters):
- Set `LISTENER_SSL_KEY_STORE` variable to the path to your `.jks` file with the server certificate chain.
- Set `LISTENER_SSL_KEY_PASSWORD` variable to the password for the server certificate.

For the Pem, you need to configure the following::
- Set `LISTENER_SSL_PEM_CERT` variable to the path of your server certificate file.
- Set `LISTENER_SSL_PEM_KEY` variable to the path of your server certificate private key file.
- Set `LISTENER_SSL_PEM_KEY_PASSWORD` variable to the password of your server certificate private key file.

If you want two-way TLS, you also need to configure the TrustStore by adding the trusted certificates/chains to the configured KeyStore/PEM files.
For more information about configuration possibilities and certificate generation, please review the following ThingsBoard security [pages](/docs/user-guide/mqtt-over-ssl/).
