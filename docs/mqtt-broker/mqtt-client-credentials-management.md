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
    "name": "testCreds",
    "credentialsType":"MQTT_BASIC",
    "credentialsValue":"{ \"clientId\": null, \"userName\": \"test_user\", \"password\": \"test_pass\", \"authRules\": { \"pubAuthRulePatterns\": [\"test\/.*\"], \"subAuthRulePatterns\": [\"my\/.*\"] } }"
}'
```
{: .copy-code}

This configuration will allow to log in for clients with username **test_user** and password **test_pass**.
Clients that are logged in by these credentials will be able to publish only to topics that start with _test/_ and subscribe to topics that start with _my/_.

**SSL** credentials example:

```bash
curl --location --request POST 'http://localhost:8083/api/mqtt/client/credentials' \
--header 'X-Authorization: Bearer $ACCESS_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "testSSLCreds",
    "credentialsType":"SSL",
    "credentialsValue":"{ \"parentCertCommonName\": \"Root Common Name\", \"authRulesMapping\": { \"test\": { \"pubAuthRulePatterns\": [\"test_ssl\/.*\"], \"subAuthRulePatterns\": [\"test_ssl\/.*\"] } } }"
}'
```
{: .copy-code}

Where:
- **parentCertCommonName** - the common name of the certificate in the certificate chain.
  **Note**, certificates that are closer to client's certificate have higher priority than certificates which are closer to the root certificate.
- **authRulesMapping** - mapping rules to map extracted from the common name keyword to the authorization rules (to allow client publish and subscribe only to certain topics).

This configuration will allow to log in clients with the SSL certificate that has _Root Common Name_ as the root certificate and where the certificate common name contains string _test_.
Clients that are logged in by these credentials will be able to publish/subscribe only to topics that start with _test_ssl/_.

##### Get all MQTT Client Credentials

```bash
curl --location --request GET 'http://localhost:8083/api/mqtt/client/credentials?pageSize=100&page=0' \
--header 'X-Authorization: Bearer $ACCESS_TOKEN'
```
{: .copy-code}
**Note**, _pageSize_ parameter equal to 100 and _page_ parameter equal to 0, so the above request will fetch first 100 mqtt client credentials.

##### Delete MQTT Client Credentials

```bash
curl --location --request DELETE 'http://localhost:8083/api/mqtt/client/credentials/$CREDENTIALS_ID' \
--header 'X-Authorization: Bearer $ACCESS_TOKEN'
```
{: .copy-code}

Paste actual ID of the MQTT client credentials you want to delete instead of <i>$CREDENTIALS_ID</i>.