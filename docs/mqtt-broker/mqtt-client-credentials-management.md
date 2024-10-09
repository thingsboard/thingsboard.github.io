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

**SSL** credentials examples:

```bash
curl --location --request POST 'http://localhost:8083/api/mqtt/client/credentials' \
--header "X-Authorization: Bearer $ACCESS_TOKEN" \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "testSSLCreds",
    "credentialsType":"SSL",
    "credentialsValue":"{ \"certCnPattern\": \"Root Common Name\", \"certCnIsRegex\": false, \"authRulesMapping\": { \"test\": { \"pubAuthRulePatterns\": [\"test_ssl\/.*\"], \"subAuthRulePatterns\": [\"test_ssl\/.*\"] } } }"
}'
```
{: .copy-code}

```bash
curl --location --request POST 'http://localhost:8083/api/mqtt/client/credentials' \
--header "X-Authorization: Bearer $ACCESS_TOKEN" \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "testSSLCredsWithPattern",
    "credentialsType":"SSL",
    "credentialsValue":"{ \"certCnPattern\": \".* Pattern Common Name .*\", \"certCnIsRegex\": true, \"authRulesMapping\": { \"test\": { \"pubAuthRulePatterns\": [\"test_ssl\/.*\"], \"subAuthRulePatterns\": [\"test_ssl\/.*\"] } } }"
}'
```
{: .copy-code}

Where:
- **certCnPattern** - the pattern for the common name that should be present in the certificate chain.
- **certCnIsRegex** - option to control whether the common name (CN) pattern is treated as a regular expression (regex) for matching.
- **authRulesMapping** - mapping rules to map extracted from the client's CN keyword to the authorization rules (to allow clients to publish and subscribe only to certain topics).

By employing the above configurations, clients connecting with an X.509 Certificate chain will be permitted to log in based on specific criteria.
The X.509 Certificate chain should have the certificate CN that matches exactly with the _Root Common Name_ string in the first case, 
matches with _.* Pattern Common Name .*_ in the second case, and the certificate's CN should contain the string _test_.
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
