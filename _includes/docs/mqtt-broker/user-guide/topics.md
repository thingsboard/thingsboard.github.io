
* TOC
{:toc}

This guide explains how MQTT topics work, how to use wildcards in topic strings, and provide examples to help you effectively utilize this feature in your MQTT deployments.

## Topics

In MQTT, topics are fundamental to the communication model. They act as addressing mechanisms that enable publishers and subscribers to exchange messages.
There are two types of topics:
* **Topic Names**. Used by publishers to send messages. **Must not contain** wildcards or start with `$` (such topic reserved for TBMQ system purposes).
* **Topic Filters**. Used by subscribers to receive messages and **can include** wildcard characters such as `#` and `+`.

Remember that the length of any MQTT topic must not exceed 65535 bytes.
Additionally, the topic must be at least 1 character long and must not contain a null character.

Topics in MQTT are hierarchical and use forward slash or delimiter character (`/`) as a topic level separator. 
This separator divides the topic tree into "topic levels".
For example, a topic may look like `sensors/livingroom/temperature`, where `sensors`, `livingroom` and `temperature` are topic levels.
Such a structure facilitates effective control over message routing, especially when using wildcards in topics.

## Wildcards

Wildcards in MQTT topics provide powerful mechanisms to simplify the subscription to multiple topics and reduce the complexity of managing topic subscriptions in dynamic environments. They enable subscribers to use patterns to match multiple topic hierarchies with a single subscription.

MQTT supports two types of wildcards:
1. **Multi-level wildcard (`#`)** - matches any number of levels at the end of the topic string.
2. **Single-level wildcard (`+`)** - matches one level in the topic hierarchy.

### Multi-level wildcard

The number sign (`#`) is a wildcard character that matches all remaining levels in the topic hierarchy. It represents the parent and any number of child levels.

<table>
  <thead>
      <tr>
          <td style="width: 30%"><b>Subscription Topic Filter</b></td>
          <td style="width: 35%"><b>Matching Topics</b></td>
          <td style="width: 35%"><b>Not Matching Topics</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
        <td>sensors/#</td>
        <td>
          sensors<br>
          sensors/<br>
          sensors/livingroom<br>
          sensors/livingroom/window
        </td>
        <td>
          /sensors
        </td>
      </tr>
  </tbody>
</table>

The multi-level wildcard `#` **must**:
* Be used only once.
* Be at the end of the topic filter.
* Be preceded by a delimiter character (`/`).

These topic filters are **invalid** because the `#` wildcard is not correctly positioned at the end of the topic filter or is not properly preceded by a delimiter character:
* `#sensors`
* `#/sensors`
* `sensors/#/`
* `sensors/#/temperature`

### Single-level wildcard

The plus character (`+`) represents a single level in the topic hierarchy. It can be used to subscribe to topics with a common pattern at one specific level.

<table>
  <thead>
      <tr>
          <td style="width: 30%"><b>Subscription Topic Filter</b></td>
          <td style="width: 35%"><b>Matching Topics</b></td>
          <td style="width: 35%"><b>Not Matching Topics</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
        <td>sensors/+/temperature</td>
        <td>
          sensors/livingroom/temperature<br>
          sensors/bedroom/temperature
        </td>
        <td>
          sensors/livingroom/window/temperature<br>
          sensors/temperature
        </td>
      </tr>
  </tbody>
</table>

The single-level wildcard `+` **must** either:
* Be at the start of the topic filter or follow a forward slash `/`.
* Be at the end of the topic filter or be followed by a forward slash `/`.

These topic filters are **invalid** because the `+` wildcard is not correctly positioned relative to the delimiter characters:
* `+sensors`
* `sensors+`
* `sensors/home+`
* `sensors/+home`

### Wildcards usage examples

The next examples demonstrate the flexibility and depth of subscription patterns possible with different positions of single-level and multi-level wildcards in MQTT topics.

<table>
  <thead>
      <tr>
          <td style="width: 50%"><b>Subscription Topic Filter</b></td><td style="width: 50%"><b>Matching Topics</b></td>
      </tr>
  </thead>
<tbody>
    <tr>
      <td>sensors/+/temperature/#</td>
      <td>
        sensors/livingroom/temperature<br>
        sensors/bedroom/temperature<br>
        sensors/livingroom/temperature/status
      </td>
    </tr>
    <tr>
      <td>sensors/+/sensor/#</td>
      <td>
        sensors/kitchen/sensor/temperature<br>
        sensors/bedroom/sensor/humidity<br>
        sensors/livingroom/sensor/light/intensity
      </td>
    </tr>
    <tr>
      <td>+/house/#</td>
      <td>
        north/house/livingroom/temperature<br>
        south/house/kitchen/humidity<br>
        east/house/garden/light/intensity
      </td>
    </tr>
    <tr>
      <td>factory/+/status/#</td>
      <td>
        factory/machine1/status<br>
        factory/machine2/status<br>
        factory/machine1/status/error
      </td>
    </tr>
    <tr>
      <td>+/devices/+/battery</td>
      <td>
        home/devices/laptop/battery<br>
        office/devices/phone/battery<br>
        car/devices/gps/battery
      </td>
    </tr>
    <tr>
      <td>building/+/room/+/temperature</td>
      <td>
        building/1stfloor/room/101/temperature<br>
        building/2ndfloor/room/201/temperature<br>
        building/3rdfloor/room/301/temperature
      </td>
    </tr>
  </tbody>
</table>

## Best practices

When designing MQTT topics, it's important to follow best practices to ensure clarity, consistency, and manageability. 

* Avoid blank spaces and special characters (except `/`). They are not explicitly forbidden, but they can cause confusion or errors.
* Avoid camel case. Use lowercase letters consistently to avoid case-sensitivity confusion. Topics are case-sensitive, so it means that `sensors/temperature` and `Sensors/Temperature` are considered two different topics.
* Avoid starting or ending topic with forward slashes (`/`). It can be unintuitive and lead to inconsistencies. For example, the topics `sensors/home` and `/sensors/home` are considered as different topics.
* Avoid subscribing to all topics. Subscribing to `#` means the client will receive every message published to any topic in the MQTT broker. This can quickly overwhelm the client with a flood of messages, leading to performance issues and potential crashes.
* Avoid very deep hierarchies as they can become difficult to manage over time. Use clear, descriptive, and hierarchical topic names, for example `building/floor1/room1/temperature`.
* Avoid non-printable characters to ensure compatibility across different systems and prevent unexpected issues. Try to use only ASCII characters instead.

## Multiple subscriptions match

In MQTT, it's possible for a client to have multiple subscriptions where more than one subscription matches the topic of a published message.

Consider a client that subscribes to the following topics:
* `sensors/+/temperature`
* `sensors/room1/#`

If a message is published to the topic `sensors/room1/temperature`, **both subscriptions match** this topic. 

In this case, TBMQ will not send the message to each matching subscription. 
Instead, it will deliver the message to the **subscription with the highest QoS**, or to the first matching subscription if multiple have the same QoS.

## Configuring maximum topic segments

In TBMQ configuration, you can define the maximum number of forward slashes (`/`) that can be used in a topic.

By default, there is no restriction because the environment variable `MQTT_TOPIC_MAX_SEGMENTS_COUNT` is set to `0` (disabled).

Having too many segments in a topic name can negatively impact processing time and performance. 
Each additional segment increases the complexity of topic matching and routing within the broker, which can lead to increased latency and resource consumption.

For example, if you set `MQTT_TOPIC_MAX_SEGMENTS_COUNT` to `2`, the broker will throw an error if a user tries to use more than two forward slashes (`/`) in the topic, such as in `sensors/floor1/room1/temperature` that contains `3` forward slashes.

## Shared subscription topics

It is also worth mentioning feature [shared subscriptions](/docs/{{docsPrefix}}mqtt-broker/user-guide/shared-subscriptions/) that are used to distribute messages across multiple subscribers, allowing for load balancing and efficient use of resources.

Shared subscription topic has a **specific format** to differentiate it from regular topic. 

The general structure of shared topics is:
```
$share/{ShareName}/{TopicFilter}
```

where:
* $share - is a constant that denotes the subscription as shared.
* {ShareName} - is the identifier of the shared subscription, which helps distinguish it from other shared subscriptions.
* {TopicFilter} - represents the topic filter used for the subscription, similar to regular subscriptions.
  It can include wildcards such as `#` and `+` to match multiple topics.

Example of a shared subscription topic:

```
$share/group1/country/+/city/+/home/#
```
