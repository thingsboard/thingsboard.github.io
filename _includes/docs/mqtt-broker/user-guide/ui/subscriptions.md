
* TOC
{:toc}

In MQTT, a subscription is a mechanism that allows clients to receive messages directed to specific topics. 
When a client subscribes to a topic, it expresses its interest in receiving all messages published to that topic.

### Subscriptions table

On the Subscriptions page you may **observe, analyze or filter** all subscriptions on the broker. 
The table contains the following information about each subscription:
* **Client ID**.
{% include templates/mqtt-broker/subscription-options.md %}

{% include images-gallery.html imageCollection="subscriptions-table" %}

### Manage subscriptions

You can easily add, remove or edit subscriptions from the 'Session details' window.
1. Open the 'Subscriptions' page in the left-hand menu.
2. Click on the icon button 'Session details'.
3. Click on the tab 'Subscriptions' to [manage session subscriptions](/docs/mqtt-broker/user-guide/ui/sessions/#subscriptions).
4. Add, edit or delete client subscriptions.
5. Click 'Update' to save changes.

{% include images-gallery.html imageCollection="subscription-session" %}

{% capture monitoringSubscriptions %}
You can track the number of current subscriptions and other broker activity on the [Monitoring](/docs/mqtt-broker/user-guide/ui/monitoring/) and Home pages.
{% endcapture %}
{% include templates/info-banner.md title="Subscriptions chart" content=monitoringSubscriptions %}