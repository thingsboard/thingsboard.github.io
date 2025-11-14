
* TOC
{:toc}

{% if docsPrefix != "pe/" %}
{% assign sinceVersion = "2.0" %}
{% include templates/mqtt-broker/since.md %}
{% endif %}

In MQTT, a subscription is a mechanism that allows clients to receive messages directed to specific topics. 
When a client subscribes to a topic, it expresses its interest in receiving all messages published to that topic.

## Subscriptions table

On the Subscriptions page you may **observe, analyze or filter** all subscriptions on the broker. 
The table contains the following information about each subscription:
* **Client ID**. The identifier of the client that is the owner of the subscription.
{% include templates/mqtt-broker/subscription-options.md %}

{% include images-gallery.html imageCollection="subscriptions-table" %}

## Manage subscriptions

You can easily add, remove or edit subscriptions from the 'Session details' window.
1. Open the 'Subscriptions' page in the left-hand menu.
2. Click on the table row to open [session subscription](/docs/{{docsPrefix}}mqtt-broker/user-guide/ui/sessions/#subscriptions) details.
3. Add, edit or delete client subscriptions.
4. Click 'Update' to save changes.

{% include images-gallery.html imageCollection="subscription-session" %}

{% capture monitoringSubscriptions %}
You can track the number of current subscriptions and other broker activity on the [Monitoring](/docs/{{docsPrefix}}mqtt-broker/user-guide/ui/monitoring/) and Home pages.
{% endcapture %}
{% include templates/info-banner.md title="Subscriptions chart" content=monitoringSubscriptions %}

## Clearing Empty Subscription Nodes

Subscriptions in the broker are stored in the memory using the [Trie](https://en.wikipedia.org/wiki/Trie) data structure,
which is known for its efficient searching capabilities.
The Trie (also called a prefix tree) is a tree-based data structure that allows for quick retrieval of information based on a key or a sequence of characters.

The Trie organizes the topic filters in a hierarchical manner, where each node represents a topic level from the topic filter.
By using the Trie data structure, the broker can quickly locate and retrieve client subscriptions based on the topic name provided by a published message.
This ensures that clients receive the published messages they are interested in without significant delays, contributing to improved performance and responsiveness of the broker.

When a client subscription is deleted (unsubscribed), the broker removes the data from its memory and marks the node as empty.
Over time, if many subscriptions are deleted, there may be many empty nodes left in the broker's memory.
These empty nodes can cause inefficiencies and waste memory resources.

Clearing empty subscription nodes frees up memory resources and can improve the performance of the broker,
as it can process subscription matching more quickly when there are fewer empty nodes to search through.

To Clear empty subscription nodes click on the button 'Clear empty subscription nodes' in the top right corner (the trash button) and confirm action.

{% include images-gallery.html imageCollection="clear-empty-subscription-nodes" %}

Additionally, the broker is configured to clear empty subscription nodes by a scheduler. This is controlled by the following environment variables:
`MQTT_SUB_TRIE_CLEAR_NODES_CRON` and `MQTT_SUB_TRIE_CLEAR_NODES_ZONE`.
