---
layout: docwithnav-mqtt-broker
title: MQTT Listeners
description: TCP and SSL MQTT Listeners configuration

---

* TOC
{:toc}

You can configure the broker to listen on TCP and SSL/TLS protocols.

### TCP Listener

TCP listener is enabled on the `1883` port by default.

To disable TCP listener set `LISTENER_TCP_ENABLED` env variable to `false`.

To change host and/or port the broker is listening to, update `LISTENER_TCP_BIND_ADDRESS` and `LISTENER_TCP_BIND_PORT` variables respectively.

### SSL Listener

To enable SSL/TLS listener set `LISTENER_SSL_ENABLED` env variable to `true`. By default broker is listening to `8883` port.

To change host and/or port the broker is listening to, update `LISTENER_SSL_BIND_ADDRESS` and `LISTENER_SSL_BIND_PORT` variables respectively.

You can choose the type of the credentials by setting the `LISTENER_SSL_CREDENTIALS_TYPE` parameter (`PEM` and `KEYSTORE` are supported).
Note, you can check all the available properties in the [configuration](/docs/mqtt-broker/install/config/) doc.

For the KeyStore, you need to configure (check other parameters available):
- set `LISTENER_SSL_KEY_STORE` variable to the path to your `.jks` file with server certificate chain;
- set `LISTENER_SSL_KEY_PASSWORD` variable to the password to the server certificate.

For the Pem, you need to configure:
- set `LISTENER_SSL_PEM_CERT` variable to the path to your server certificate file;
- set `LISTENER_SSL_PEM_KEY` variable to the path to your server certificate private key file;
- set `LISTENER_SSL_PEM_KEY_PASSWORD` variable to the password to your server certificate private key file.

If you want two-way TLS you need to configure TrustStore as well by adding the trusted certificates/chains to the configured keystore/pem files.
Review the following ThingsBoard security [pages](/docs/user-guide/mqtt-over-ssl/) for more information about the configuration possibilities and certificates generation.
