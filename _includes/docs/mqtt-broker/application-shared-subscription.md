
* TOC
{:toc}

The Application Shared Subscription entity provides the capability to leverage the [Shared Subscriptions](/docs/mqtt-broker/user-guide/shared-subscriptions/) 
feature for **APPLICATION** clients. This feature enables multiple clients to subscribe and receive messages from a shared subscription. 
Upon creating the Application Shared Subscription entity, a corresponding Kafka topic is automatically created. 
This Kafka topic serves as a repository for all messages pertaining to the shared subscription.

To create a new Application Shared Subscription entity within the system, it is necessary to authenticate as an Admin user.

{% include templates/mqtt-broker/authentication.md %}

##### Create/update Application Shared Subscription

```bash
curl --location --request POST 'http://localhost:8083/api/app/shared/subs' \
--header "X-Authorization: Bearer $ACCESS_TOKEN" \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "test",
    "partitions": 1,
    "topicFilter": "test/topic"
}'
```
{: .copy-code}

Upon executing the aforementioned request, an entity will be created within the PostgreSQL database, and a Kafka topic named `tbmq.msg.app.shared.test.topic` will be added. 
The Kafka topic will consist of a single partition.
{% include templates/mqtt-broker/application-shared-subscriptions.md %}

**Please be aware** that once the entity is created, it is not possible to update the _partitions_ or _topicFilter_ fields. 
Therefore, it is crucial to carefully consider the desired topic filter and the number of partitions before creating the entity.
It is recommended to create the entity with a greater number of partitions rather than fewer. 
This allows for horizontal scalability by accommodating the addition of new clients to the shared subscription in the future.
In situations where the entity has been created with improper values or configurations, it becomes necessary to delete the entity and 
subsequently create a new one with the correct values. 
Thus, it is essential to exercise caution and make well-informed decisions during the initial creation process to avoid the need for subsequent modifications or recreations.

As an example, if you anticipate having a topic filter to which 5 clients will be subscribed, 
it is advisable to configure the number of partitions as a multiple of 5, such as 5, 10, or 15. 
By doing so, you ensure that the load is evenly distributed among the subscribers, promoting balanced processing and improved performance.

##### Get all Application Shared Subscription entities

```bash
curl --location --request GET 'http://localhost:8083/api/app/shared/subs?pageSize=100&page=0' \
--header "X-Authorization: Bearer $ACCESS_TOKEN"
```
{: .copy-code}
**Note**, _pageSize_ parameter equal to 100 and _page_ parameter equal to 0, so the above request will fetch first 100 application shared subscription entities.

##### Delete Application Shared Subscription entity

Once you delete Application Shared Subscription entity, the respectful Kafka topic will also be deleted.
**Note**, for this `TB_KAFKA_ENABLE_TOPIC_DELETION` environment variable should be set to `true`.

```bash
curl --location --request DELETE 'http://localhost:8083/api/app/shared/subs/$APP_SHARED_SUBS_ID' \
--header "X-Authorization: Bearer $ACCESS_TOKEN"
```
{: .copy-code}

Paste actual ID of the Application shared subscription entity you want to delete instead of _$APP_SHARED_SUBS_ID_.
