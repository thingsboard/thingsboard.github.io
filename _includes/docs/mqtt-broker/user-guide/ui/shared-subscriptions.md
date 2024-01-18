
* TOC
{:toc}

The Application Shared Subscription entity provides the capability to leverage the [Shared Subscriptions](/docs/mqtt-broker/user-guide/shared-subscriptions/) 
feature for **APPLICATION** clients. This feature enables multiple clients to subscribe and receive messages from a shared subscription.

### Usage Notes

In TBMQ Application shared subscriptions are entities that used for management of shared subscriptions.

* Add Application shared subscriptions if you plan to use shared subscriptions feature with [Application clients](/docs/mqtt-broker/user-guide/mqtt-client-type/#application-client).
* After creation of the entity **Topic filter** and **Partitions** fields **can not be changed**.
* Application Shared Subscription feature **works with MQTT v5 and earlier versions**.

Broker administrators are able to manage shared subscriptions via Web UI or [REST API](/docs/mqtt-broker/application-shared-subscription/).

### Adding Shared Subscription

In order to add new shared subscriptions please follow next steps:
1. Open _Shared Subscriptions_ page and click on the plus icon button Add Application Shared Subscription.
2. In the dialog please fill the following fields:
   - **Name** - indicates the shared subscription name. Can be any name you like, e.g., "Application Shared Subscription".
   - **Topic filter** - this is the actual topic filter that can include wildcards (#, +). If shared subscription topic filter is `$share/group1/city/+/home/#`, set Topic filter field as `city/+/home/#`.
       Can not be changed after creation and must be unique.
   - **Partitions** - It is recommended that the number of partitions to be equal or multiple of an expected number of clients of the shared subscription.
     For example, if 5 clients are going to be subscribed to the shared subscription, set the Partitions to 5, 10 or 15. 
     This will guarantee the load is distributed evenly by the subscribers. Can not be changed after creation.
3. Click the _Add_ button.

{% include images-gallery.html imageCollection="add-shared-subscriptions" %}

Upon executing the aforementioned actions, a Kafka topic named `tbmq.msg.app.shared.city.slw.home.mlw` will be added.
{% include templates/mqtt-broker/application-shared-subscriptions.md %}

### Editing Shared Subscriptions

In the current version of TBMQ only field Name of shared subscription can be edited after creation.

To edit entity please do the following steps:
1. Click on the corresponding row of the table Shared Subscriptions.
2. Click on the _Toggle edit mode_ button in the top right corner with pencil icon.
3. Modify name.
4. Click _Apply changes_ button to save changes.

### Deleting Shared Subscriptions

Shared Subscriptions entities can be removed from TBMQ system using the Web UI or [REST API](/docs/mqtt-broker/application-shared-subscription/).

There are a few ways of deleting:

1. **Delete single**.
   * Click on the Delete icon in the corresponding row of the subscriptions and confirm action.
   * Click on the row and then click the _Delete Application Shared Subscription_ button in the entity details right side panel.
2. **Delete multiple**.
   * By clicking on the checkbox you can select multiple items. Then click the Delete icon in the top right corner and confirm action.

{% include images-gallery.html imageCollection="delete-shared-subscriptions" %}

Once you delete Application Shared Subscription entity, the respectful Kafka topic will also be deleted.
**Note**, for this `TB_KAFKA_ENABLE_TOPIC_DELETION` environment variable should be set to `true`.
