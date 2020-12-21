---
layout: docwithnav
assignees:
- vsosliuk
title: Device authentication options
description: ThingsBoard IoT Device authentication options.

---

Device credentials are used in order to connect to the ThingsBoard server by applications that are running on the device.
ThingsBoard is designed to support different device credentials. There are two supported credentials types at the moment:

 - [**Access Tokens**](/docs/user-guide/access-token/) - general purpose credentials that are suitable for wide range of devices. 
 Access Token based authentication may be used in not encrypted or one-way SSL mode.
   - **Advantages:** supported by resource constrained devices. Low network overhead. Easy to provision and use.
   - **Disadvantages:** may be easily intercepted while using un-encrypted network connection (HTTP instead of HTTPS, MQTT without TLS/SSL, etc).
 - [**Basic MQTT Credentials**](/docs/user-guide/basic-mqtt/) - Similar to first option, but work based on MQTT Client Id, username and password. May be used in not encrypted or one-way SSL mode.
   - **Advantages:** supported by resource constrained devices. Low network overhead. Easy to provision and use.
   - **Disadvantages:** may be easily intercepted while using un-encrypted network connection (MQTT without TLS/SSL).   
 - [**X.509 Certificates**](/docs/user-guide/certificates/) - [PKI](https://en.wikipedia.org/wiki/Public_key_infrastructure) and [TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security) standard. 
 X.509 Certificate based authentication is used in two-way SSL mode.
   - **Advantages:** high level of security using the encrypted network connection and public key infrastructure.
   - **Disadvantages:** not supported by some resource constrained devices. Affects battery and CPU usage.

Device credentials need to be provisioned to corresponding device entity on the server. 
There are multiple ways to do this:

 - **Automatically**, using ThingsBoard [REST API](/docs/reference/rest-api/). For example during manufacturing, QA or purchase order fulfilment.
 - **Manually**, using ThingsBoard [Web UI](/docs/user-guide/ui/devices/#manage-device-credentials). For example for development purposes, or by system administrator.


