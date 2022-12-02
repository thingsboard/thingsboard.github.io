
* TOC
{:toc}

Application Shared Subscription entity allows you to start using the [Shared Subscriptions](/docs/mqtt-broker/user-guide/shared-subscriptions/) 
feature for **APPLICATION** clients. Once the entity is created, the respectful Kafka topic is created, where all the messages are pushed that relate to 
a shared subscription.

To create a new application shared subscription entity in the system first of all you need to authorize as an Admin.

{% include templates/mqtt-broker/authentication.md %}

##### Create/update Application Shared Subscription

```bash
curl --location --request POST 'http://localhost:8083/api/app/shared/subs' \
--header 'X-Authorization: Bearer $ACCESS_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "test",
    "partitions": 1,
    "topic": "test/topic"
}'
```
{: .copy-code}

The above request will create an entity in the PostgreSQL database and Kafka topic with the name `test.topic` and 1 partition.
The topic name construction is done as follows (MQTT topic -> Kafka topic):
```
test/topic -> test.topic
test/# -> test.mlw
test/+ -> test.slw
```

where
* `/` is replaced by `.`
* `#` is replaced by `mlw` (multi-lvl wildcard)
* `+` is replaced by `slw` (single-lvl wildcard)

**Note,** once the entity is created, you can not update the _partitions_ or _topic_ fields. So, think carefully about the needed topic
and the number of partitions before you create the entity. Otherwise, you will be required to delete improper entity and re-create it with the correct values.

##### Get all Application Shared Subscription entities

```bash
curl --location --request GET 'http://localhost:8083/api/app/shared/subs?pageSize=100&page=0' \
--header 'X-Authorization: Bearer $ACCESS_TOKEN'
```
{: .copy-code}
**Note**, _pageSize_ parameter equal to 100 and _page_ parameter equal to 0, so the above request will fetch first 100 application shared subscription entities.

##### Delete Application Shared Subscription entity

Once you delete Application Shared Subscription entity, the respectful Kafka topic will also be deleted.
**Note**, for this `TB_KAFKA_ENABLE_TOPIC_DELETION` environment variable should be set to `true`.

```bash
curl --location --request DELETE 'http://localhost:8083/api/app/shared/subs/$APP_SHARED_SUBS_ID' \
--header 'X-Authorization: Bearer $ACCESS_TOKEN'
```
{: .copy-code}

Paste actual ID of the Application shared subscription entity you want to delete instead of <i>$APP_SHARED_SUBS_ID</i>.
