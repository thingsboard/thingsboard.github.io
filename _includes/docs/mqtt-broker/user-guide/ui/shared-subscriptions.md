
Shared subscriptions are the MQTT version 5 feature that allows multiple clients to share a single subscription and receive messages from the subscribed topic. 

Shared subscriptions can help in:
* Reducing the number of connections and subscriptions.
* Improving scalability and resource efficiency.
* Providing more flexibility in distributing messages to clients.

However, the feature also has limitations such as limited message ordering, potential message loss, and increased complexity. 
More details about architecture and usage of Shared Subscriptions feature in the ThingsBoard MQTT Broker you can find the [docs]().

## Usage Notes

In the ThinsBoard MQTT Broker shared subscriptions are entities that used for management of shared subscriptions.

* Add shared subscriptions if you plan to use these entities with [Application clients]().
* After creation **Topic filter** and **Partitions** fields **can not be changed**, instead only Name is editable.
* Application Shared Subscription feature **works with MQTT v5 and earlier versions**.

Broker administrators are able to manage shared subscriptions via Web UI or [REST API]().

## Adding Shared Subscription

In order to add new shared subscriptions please follow next steps:
1. Open _Shared Subscriptions_ page and click on the plus icon button Add Application Shared Subscription.
2. In the dialog please fill the following fields:
   - **Name** - indicates the shared subscription name.
   - **Topic filter** - this is the actual topic filter that can include wildcards (#, +). 
   If shared subscription topic is `$share/group1/city/+/home/#`, set Topic filter as `city/+/home/#`.
   * **Can not be changed afrer creation.**
   * **Must be unique**.
   - **Partitions** - It is recommended that the number of partitions to be equal or multiple of an expected number of clients of the shared subscription.
     For example, if 5 clients are going to be subscribed to the shared subscription, set the Partitions to 5, 10 or 15.
     This will guarantee the load is distributed evenly by the subscribers.
     * **Can not be changed afrer creation.**
3. Click the _Add_ button.

## Editing Shared Subscriptions

In the current version of the ThingsBoard MQTT Broker only field Name of shared subscription can be edited after creation.

To edit entity please do the following steps:
1. Click on the corresponding row of the table Shared Subscriptions.
2. Click on the _Toggle edit mode_ button in the top right corner with pencil icon.
3. Modify name.
4. Click _Apply changes_ button to save changes.

## Deleting Shared Subscriptions

Shared Subscriptions entities can be removed from the ThingsBoard MQTT Broker system using the Web UI or [REST Api]().

There are a few ways of deleting:

1. **Delete single**.
   * Click on the Delete icon in the corresponding row of the credentials and confirm action.
   * Click on the row and then click the _Delete Application Shared Subscription_ button in the entity details right side panel.
2. **Delete mulptiple**.
   * By clicking on the checkbox you can select multiple items. Then click the Delete icon in the top right corner and confirm action.
