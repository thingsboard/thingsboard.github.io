---
layout: docwithnav-mqtt-broker
title: MQTT Client Credentials
description: Create/Update/Delete MQTT Client Credentials

---

* TOC
{:toc}

MQTT Client Credentials provide the means to configure security measures for connecting clients within the system.

To create new client credentials within the system, it is imperative to first authenticate as an Admin user. 
This authorization process grants you the necessary privileges and access rights to perform administrative tasks.

By authenticating as an Admin user, you will have the authority to create and manage client credentials, 
enabling you to enforce robust security measures for the clients connecting to the system. 
This approach ensures that the system remains secure and that only authorized clients can establish connections and interact with TBMQ.

{% include templates/mqtt-broker/authentication.md %}

##### Create/update MQTT Client Credentials

**MQTT_BASIC** credentials example:

```bash
curl --location --request POST 'http://localhost:8083/api/mqtt/client/credentials' \
--header "X-Authorization: Bearer $ACCESS_TOKEN" \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "testCreds",
    "credentialsType":"MQTT_BASIC",
    "credentialsValue":"{ \"clientId\": null, \"userName\": \"test_user\", \"password\": \"test_pass\", \"authRules\": { \"pubAuthRulePatterns\": [\"test\/.*\"], \"subAuthRulePatterns\": [\"my\/.*\"] } }"
}'
```
{: .copy-code}

By implementing the above configuration, clients with the username **test_user** and password **test_pass** will be able to successfully log in to the system. 
However, it's important to note that these clients will have restricted privileges based on the specified topic access permissions.

Clients authenticated with these credentials will be limited to publishing messages solely to topics that start with _test/_. 
Additionally, they will be allowed to subscribe exclusively to topics that start with _my/_. 
This configuration ensures that the clients' access is constrained to specific topic patterns, thereby maintaining a controlled and secure environment.

**SSL** credentials example:

```bash
curl --location --request POST 'http://localhost:8083/api/mqtt/client/credentials' \
--header "X-Authorization: Bearer $ACCESS_TOKEN" \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "testSSLCreds",
    "credentialsType":"SSL",
    "credentialsValue":"{ \"certCommonName\": \"Root Common Name\", \"authRulesMapping\": { \"test\": { \"pubAuthRulePatterns\": [\"test_ssl\/.*\"], \"subAuthRulePatterns\": [\"test_ssl\/.*\"] } } }"
}'
```
{: .copy-code}

Where:
- **certCommonName** - the common name (CN) of the specific certificate in the certificate chain.
- **authRulesMapping** - mapping rules to map extracted from the CN keyword to the authorization rules (to allow clients to publish and subscribe only to certain topics).

By employing the above configuration, clients connecting with an SSL certificate chain will be permitted to log in based on specific criteria.
The SSL certificate chain should have the root certificate CN that matches the _Root Common Name_ string, and the certificate's CN should contain the string _test_.
Once authenticated using these credentials, clients will gain access to publishing and subscribing privileges limited to topics that start with _test_ssl/_.

##### Get all MQTT Client Credentials

```bash
curl --location --request GET 'http://localhost:8083/api/mqtt/client/credentials?pageSize=100&page=0' \
--header "X-Authorization: Bearer $ACCESS_TOKEN"
```
{: .copy-code}
**Note**, _pageSize_ parameter equal to 100 and _page_ parameter equal to 0, so the above request will fetch first 100 MQTT client credentials.

##### Delete MQTT Client Credentials

```bash
curl --location --request DELETE 'http://localhost:8083/api/mqtt/client/credentials/$CREDENTIALS_ID' \
--header "X-Authorization: Bearer $ACCESS_TOKEN"
```
{: .copy-code}

Paste actual ID of the MQTT client credentials you want to delete instead of _$CREDENTIALS_ID_.
