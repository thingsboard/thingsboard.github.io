---
layout: docwithnav-mqtt-broker
title: MQTT Client Credentials
description: Create/Update/Delete MQTT Client Credentials

---

* TOC
{:toc}

MQTT Client Credentials allow you to configure security for the connecting clients.

To create a new client credentials in the system first of all you need to authorize as an Admin.

{% include templates/mqtt-broker/authentication.md %}

##### Create/update MQTT Client Credentials

**MQTT_BASIC** credentials example:

```bash
curl --location --request POST 'http://localhost:8083/api/mqtt/client/credentials' \
--header 'X-Authorization: Bearer $ACCESS_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
    "clientId": null,
    "credentialsType":"MQTT_BASIC",
    "credentialsValue":"{\"userName\":\"test_user\",\"password\":\"test_pass\",\"authorizationRulePattern\":\"test_basic/.*\"}"
}'
```
{: .copy-code}

This configuration will allow to login clients with username **test_user** and password **test_pass**.
Clients that are logged in by these credentials will be able to publish/subscribe only to topics that start from _test_basic/_.

**SSL** credentials example:

```bash
curl --location --request POST 'http://localhost:8083/api/mqtt/client/credentials' \
--header 'X-Authorization: Bearer $ACCESS_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
    "clientId": null,
    "credentialsType":"SSL",
    "credentialsValue":"{\"parentCertCommonName\":\"Root Common Name\",\"patternRegEx\":\".*(test).*\",\"authorizationRulesMapping\":{\"test\":\"test_ssl/.*\"}}"
}'
```
{: .copy-code}

Where:
- **parentCertCommonName** - the common name of the certificate in the certificate chain.
  **Note:** Certificates that are closer to client's certificate have higher priority than certificates which are closer to the root certificate.
- **patternRegEx** - regular expression to parse client's common name and get some keyword from it
- **authorizationRulesMapping** - mapping rules to map extracted from the common name keyword to the authorization rules (to allow client publish and subscribe only to certain topics)

This configuration will allow to login clients with the SSL certificate that has _Root Common Name_ as the root certificate and where the certificate common name contains string _test_.
Clients that are logged in by these credentials will be able to publish/subscribe only to topics that start from _test_ssl/_.


##### Get all MQTT Client Credentials

```bash
curl --location --request GET 'http://localhost:8083/api/mqtt/client/credentials' \
--header 'X-Authorization: Bearer $ACCESS_TOKEN'
```
{: .copy-code}
