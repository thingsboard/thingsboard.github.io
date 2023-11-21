* TOC
{:toc}

ThingsBoard Rule Engine is a highly customizable and configurable system for complex event processing. 
With rule engine you are able to filter, enrich and transform incoming messages originated by IoT devices and related assets. 
You are also able to trigger various actions, for example, notifications or communication with external systems.
  
## Key Concepts

#### Rule Engine Message 

Rule Engine Message is a serializable, immutable data structure that represent various messages in the system. For example:

  * Incoming [telemetry](/docs/{{docsPrefix}}user-guide/telemetry/), [attribute update](/docs/{{docsPrefix}}user-guide/attributes/) or [RPC call](/docs/{{docsPrefix}}user-guide/rpc/) from device;
  * Entity life-cycle event: created, updated, deleted, assigned, unassigned, attributes updated;
  * Device status event: connected, disconnected, active, inactive, etc;
  * Other system events.
  
Rule Engine Message contains the following information:

  * Message ID: time based, universally unique identifier;
  * Originator of the message: Device, Asset or other [Entity](/docs/{{docsPrefix}}user-guide/entities-and-relations/) identifier;
  * Type of the message: "Post telemetry" or "Inactivity Event", etc;
  * Payload of the message: JSON body with actual message payload;
  * Metadata: List of key-value pairs with additional data about the message. 

#### Rule Node

Rule Node is a basic component of Rule Engine that process single incoming message at a time and produce one or more outgoing messages. 
Rule Node is a main logical unit of the Rule Engine. Rule Node can filter, enrich, transform incoming messages, perform action or communicate with external systems.

#### Rule Node Connection

Rule Nodes may be connected to other rule nodes. Each relation has relation type, a label used to identify logical meaning of the relation. 
When rule node produces the outgoing message it always specifies the relation type which is used to route message to next nodes.
 
Typical rule node relations are "Success" and "Failure". 
Rule nodes that represent logical operations may use "True" or "False". 
Some specific rule nodes may use completely different relation types, for example: "Post Telemetry", "Attributes Updated", "Entity Created", etc.


Some rule nodes support custom connection names. Just type your custom connection name and click the "Create a new one!" link:

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/custom-connection.png)


All connection names are **case-sensitive**.

#### Rule Chain

Rule Chain is a logical group of rule nodes and their relations. For example, the rule chain below will:

  * save all telemetry messages to the database;
  * raise "High Temperature Alarm" if temperature field in the message will be higher then 50 degrees;
  * raise "Low Temperature Alarm" if temperature field in the message will be lower then -40 degrees;
  * log failure to execute the temperature check scripts to console in case of logical or syntax error in the script. 

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/rule-node-relations.png)

Tenant administrator is able to define one **Root Rule Chain** and optionally multiple other rule chains. 
Root rule chain handles all incoming messages and may forward them to other rule chains for additional processing.
Other rule chains may also forward messages to different rule chains.

For example, the rule chain below will:

  * raise "High Temperature Alarm" if temperature field in the message will be higher then 50 degrees;
  * clear "High Temperature Alarm" if temperature field in the message will be less then 50 degrees;
  * forward events about "Created" and "Cleared" alarms to external rule chain that handles notifications to corresponding users.
 
![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/rule-chain-references.png)

#### Message Processing Result

There are three possible results of message processing: Success, Failure and Timeout.
The message processing attempt is marked as "Success" when the last rule node in the processing chain successfully process the message.
The message processing attempt is marked as "Failure" if one of the rule nodes produce "Failure" of message processing, 
and there is no rule nodes to handle that failure. 
The message processing attempt is marked as "Timeout" when overall time of processing exceed configurable threshold.

See diagram below and let's review the possible scenarios:

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/not-a-failure.png)

If the "Transformation" script fails, the message is not marked as "Failed", because there is a "Save to DB" node connected with "Failure" relation.
If the "Transformation" script is successful, it will be pushed to "External System" with the REST API call.
If the external system is overloaded, the REST API call may "hang" for some time. 
Let's assume the overall timeout for message pack processing is 20 seconds. Let's ignore Transformation script execution time because it is < 1ms.
So, if the "External System" will reply within 20 seconds, the message will be successfully processed. 
Similar, if "Save to DB" call will succeed, the message will be successfully processed. 
However, if the external system will not reply within 20 seconds, the message processing attempt will be marked as "timed-out".
Similar, if "Save to DB" call will fail, the message will be marked as failed.

#### Rule Engine Queue

See new [documentation](/docs/{{docsPrefix}}user-guide/rule-engine-2-5/queues/)

##### Queue submit strategy

See new [documentation](/docs/{{docsPrefix}}user-guide/rule-engine-2-5/queues/#queue-submit-strategy)

##### Queue processing strategy

See new [documentation](/docs/{{docsPrefix}}user-guide/rule-engine-2-5/queues/#queue-processing-strategy)

##### Default queues

See new [documentation](/docs/{{docsPrefix}}user-guide/rule-engine-2-5/queues/#default-queues)

## Predefined Message Types

List of the predefined Message Types is presented in the following table:

<table>
  <thead>
      <tr>
          <td><b>Message Type</b></td><td><b>Display Name</b></td><td><b>Description</b></td><td><b>Message metadata</b></td><td><b>Message payload</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>POST_ATTRIBUTES_REQUEST</td>
          <td><b>Post attributes</b></td>
          <td>Request from device to publish <a href="/docs/{{docsPrefix}}user-guide/attributes/#attribute-types">client side</a> attributes (see <a href="/docs/{{docsPrefix}}reference/mqtt-api/#publish-attribute-update-to-the-server">attributes api</a> for reference)</td>
          <td><b>deviceName</b> - originator device name,<br><b>deviceType</b> - originator device type</td>
          <td>key/value json: <br> <code style="font-size: 12px;">{ <br> &nbsp;&nbsp;"currentState": "IDLE" <br> }</code></td>
      </tr>
      <tr>
          <td>POST_TELEMETRY_REQUEST</td>
          <td><b>Post telemetry</b></td>
          <td>Request from device to publish telemetry (see <a href="/docs/{{docsPrefix}}reference/mqtt-api/#telemetry-upload-api">telemetry upload api</a> for reference)</td>
          <td><b>deviceName</b> - originator device name,<br><b>deviceType</b> - originator device type,<br><b>ts</b> - timestamp (milliseconds)</td>
          <td>key/value json: <br> <code style="font-size: 12px;">{ <br> &nbsp;&nbsp;"temperature": 22.7 <br> }</code></td>
      </tr>
      <tr>
          <td>TO_SERVER_RPC_REQUEST</td>
          <td><b>RPC Request from Device</b></td>
          <td>RPC request from device (see <a href="/docs/{{docsPrefix}}reference/mqtt-api/#client-side-rpc">client side rpc</a> for reference)</td>
          <td><b>deviceName</b> - originator device name,<br><b>deviceType</b> - originator device type,<br><b>requestId</b> - RPC request Id provided by client</td>
          <td>json containing <b>method</b> and <b>params</b>: <br> <code style="font-size: 12px;">{ <br> &nbsp;&nbsp;"method": "getTime", <br>&nbsp;&nbsp;"params": { "param1": "val1" } <br> }</code></td>
      </tr>
      <tr>
          <td>RPC_CALL_FROM_SERVER_TO_DEVICE</td>
          <td><b>RPC Request to Device</b></td>
          <td>RPC request from server to device (see <a href="/docs/{{docsPrefix}}user-guide/rpc/#server-side-rpc-api">server side rpc api</a> for reference)</td>
          <td><b>requestUUID</b> - internal request id used by sustem to identify reply target,<br><b>expirationTime</b> - time when request will be expired,<br><b>oneway</b> - specifies request type: <i>true</i> - without response, <i>false</i> - with response</td>
          <td>json containing <b>method</b> and <b>params</b>: <br> <code style="font-size: 12px;">{ <br> &nbsp;&nbsp;"method": "getGpioStatus", <br>&nbsp;&nbsp;"params": { "param1": "val1" } <br> }</code></td>
      </tr>
      <tr>
          <td>ACTIVITY_EVENT</td>
          <td><b>Activity Event</b></td>
          <td>Event indicating that device becomes active</td>
          <td><b>deviceName</b> - originator device name,<br><b>deviceType</b> - originator device type</td>
          <td>json containing device activity information: <br> <code style="font-size: 12px;">{<br> &nbsp;&nbsp;"active": true,<br> &nbsp;&nbsp;"lastConnectTime": 1526979083267,<br> &nbsp;&nbsp;"lastActivityTime": 1526979083270,<br> &nbsp;&nbsp;"lastDisconnectTime": 1526978493963,<br> &nbsp;&nbsp;"lastInactivityAlarmTime": 1526978512339,<br> &nbsp;&nbsp;"inactivityTimeout": 10000<br>}</code></td>
      </tr>code
      <tr>
          <td>INACTIVITY_EVENT</td>
          <td><b>Inactivity Event</b></td>
          <td>Event indicating that device becomes inactive</td>
          <td><b>deviceName</b> - originator device name,<br><b>deviceType</b> - originator device type</td>
          <td>json containing device activity information, see <b>Activity Event</b> payload</td>
      </tr>
      <tr>
          <td>CONNECT_EVENT</td>
          <td><b>Connect Event</b></td>
          <td>Event produced when device is connected</td>
          <td><b>deviceName</b> - originator device name,<br><b>deviceType</b> - originator device type</td>
          <td>json containing device activity information, see <b>Activity Event</b> payload</td>
      </tr>
      <tr>
          <td>DISCONNECT_EVENT</td>
          <td><b>Disconnect Event</b></td>
          <td>Event produced when device is disconnected</td>
          <td><b>deviceName</b> - originator device name,<br><b>deviceType</b> - originator device type</td>
          <td>json containing device activity information, see <b>Activity Event</b> payload</td>
      </tr>
      <tr>
          <td>ENTITY_CREATED</td>
          <td><b>Entity Created</b></td>
          <td>Event produced when new entity was created in system</td>
          <td><b>userName</b> - name of the user who created the entity,<br><b>userId</b> - the user Id</td>
          <td>json containing created entity details: <br> <code style="font-size: 12px;">{<br> &nbsp;&nbsp;"id": {<br> &nbsp;&nbsp;&nbsp;&nbsp;"entityType": "DEVICE",<br> &nbsp;&nbsp;&nbsp;&nbsp;"id": "efc4b9e0-5d0f-11e8-8559-37a7f8cdca74"<br> &nbsp;&nbsp;},<br> &nbsp;&nbsp;"createdTime": 1526918366334,<br> &nbsp;&nbsp;...<br> &nbsp;&nbsp;"name": "my-device",<br> &nbsp;&nbsp;"type": "temp-sensor"<br>}</code></td>
      </tr>
      <tr>
          <td>ENTITY_UPDATED</td>
          <td><b>Entity Updated</b></td>
          <td>Event produced when existing entity was updated</td>
          <td><b>userName</b> - name of the user who updated the entity,<br><b>userId</b> - the user Id</td>
          <td>json containing updated entity details, see <b>Entity Created</b> payload</td>
      </tr>
      <tr>
          <td>ENTITY_DELETED</td>
          <td><b>Entity Deleted</b></td>
          <td>Event produced when existing entity was deleted</td>
          <td><b>userName</b> - name of the user who deleted the entity,<br><b>userId</b> - the user Id</td>
          <td>json containing deleted entity details, see <b>Entity Created</b> payload</td>
      </tr>
      <tr>
          <td>ENTITY_ASSIGNED</td>
          <td><b>Entity Assigned</b></td>
          <td>Event produced when existing entity was assigned to customer</td>
          <td><b>userName</b> - name of the user who performed assignment operation,<br><b>userId</b> - the user Id,<br><b>assignedCustomerName</b> - assigned customer name,<br><b>assignedCustomerId</b> - Id of assigned customer</td>
          <td>json containing assigned entity details, see <b>Entity Created</b> payload</td>
      </tr>
      <tr>
          <td>ENTITY_UNASSIGNED</td>
          <td><b>Entity Unassigned</b></td>
          <td>Event produced when existing entity was unassigned from customer</td>
          <td><b>userName</b> - name of the user who performed unassignment operation,<br><b>userId</b> - the user Id,<br><b>unassignedCustomerName</b> - unassigned customer name,<br><b>unassignedCustomerId</b> - Id of unassigned customer</td>
          <td>json containing unassigned entity details, see <b>Entity Created</b> payload</td>
      </tr>
      <tr>
          <td>ADDED_TO_ENTITY_GROUP</td>
          <td><b>Added to Group</b></td>
          <td>Event produced when entity was added to <a href="/docs/{{docsPrefix}}user-guide/groups/">Entity Group</a>. This Message Type is specific to <a href="/products/thingsboard-pe/">ThingsBoard PE</a>.</td>
          <td><b>userName</b> - name of the user who performed assignment operation,<br><b>userId</b> - the user Id,<br><b>addedToEntityGroupName</b> - entity group name,<br><b>addedToEntityGroupId</b> - Id of entity group</td>
          <td>empty json payload</td>
      </tr>
      <tr>
          <td>REMOVED_FROM_ENTITY_GROUP</td>
          <td><b>Removed from Group</b></td>
          <td>Event produced when entity was removed from <a href="/docs/{{docsPrefix}}user-guide/groups/">Entity Group</a>. This Message Type is specific to <a href="/products/thingsboard-pe/">ThingsBoard PE</a>.</td>
          <td><b>userName</b> - name of the user who performed unassignment operation,<br><b>userId</b> - the user Id,<br><b>removedFromEntityGroupName</b> - entity group name,<br><b>removedFromEntityGroupId</b> - Id of entity group</td>
          <td>empty json payload</td>
      </tr>
      <tr>
          <td>ATTRIBUTES_UPDATED</td>
          <td><b>Attributes Updated</b></td>
          <td>Event produced when entity attributes update was performed</td>
          <td><b>userName</b> - name of the user who performed attributes update,<br><b>userId</b> - the user Id,<br><b>scope</b> - updated attributes scope (can be either <b>SERVER_SCOPE</b> or <b>SHARED_SCOPE</b>)</td>
          <td>key/value json with updated attributes: <br> <code style="font-size: 12px;">{ <br> &nbsp;&nbsp;"softwareVersion": "1.2.3" <br> }</code></td>
      </tr>
      <tr>
          <td>ATTRIBUTES_DELETED</td>
          <td><b>Attributes Deleted</b></td>
          <td>Event produced when some of entity attributes were deleted</td>
          <td><b>userName</b> - name of the user who deleted attributes,<br><b>userId</b> - the user Id,<br><b>scope</b> - deleted attributes scope (can be either <b>SERVER_SCOPE</b> or <b>SHARED_SCOPE</b>)</td>
          <td>json with <b>attributes</b> field containing list of deleted attributes keys: <br> <code style="font-size: 12px;">{ <br> &nbsp;&nbsp;"attributes": ["modelNumber", "serial"] <br> }</code></td>
      </tr>
      <tr>
        <td>ALARM</td>
        <td><b>Alarm event</b></td>
        <td>Event produced when an alarm was created, updated or deleted</td>
        <td> 
            All fields from original Message Metadata
            <br><b>isNewAlarm</b> - true if a new alram was just created
            <br><b>isExistingAlarm</b> - true if an alarm is existing already
            <br><b>isClearedAlarm</b> - true if an alarm was cleared
        </td>
        <td>json containing created alarm details: <br><code style="font-size: 12px;">
        {
          <br> &nbsp;&nbsp;"tenantId": {
            <br> &nbsp;&nbsp;&nbsp;&nbsp; ...
          <br> &nbsp;&nbsp;},
          <br> &nbsp;&nbsp;"type": "High Temperature Alarm",
          <br> &nbsp;&nbsp;"originator": {
            <br> &nbsp;&nbsp;&nbsp;&nbsp; ...
          <br> &nbsp;&nbsp;},
          <br> &nbsp;&nbsp;"severity": "CRITICAL",
          <br> &nbsp;&nbsp;"status": "CLEARED_UNACK",
          <br> &nbsp;&nbsp;"startTs": 1526985698000,
          <br> &nbsp;&nbsp;"endTs": 1526985698000,
          <br> &nbsp;&nbsp;"ackTs": 0,
          <br> &nbsp;&nbsp;"clearTs": 1526985712000,
          <br> &nbsp;&nbsp;"details": {
            <br> &nbsp;&nbsp;&nbsp;&nbsp;"temperature": 70,
            <br> &nbsp;&nbsp;&nbsp;&nbsp;"ts": 1526985696000
          <br> &nbsp;&nbsp;},
          <br> &nbsp;&nbsp;"propagate": true,
          <br> &nbsp;&nbsp;"id": "33cd8999-5dac-11e8-bbab-ad47060c9431",
          <br> &nbsp;&nbsp;"createdTime": 1526985698000,
          <br> &nbsp;&nbsp;"name": "High Temperature Alarm"
        <br>}
        </code>
        </td>
      </tr>
      <tr>
        <td>ALARM_ASSIGNED</td>
        <td><b>Alarm Assigned</b></td>
        <td>Event produced when an alarm was assigned to some user</td>
        <td> 
            All fields from original Message Metadata
            <br><b>entityName</b> - name of alarm
            <br><b>entityType</b> - ALARM
            <br><b>userEmail</b> - user email
            <br><b>userFirstName</b> - user first name
            <br><b>userId</b> - user id
            <br><b>userLastName</b> - user last name
            <br><b>userName</b> - user name
        </td>
        <td>json containing alarm details, see Alarm event<br>        
        </td>
      </tr>
      <tr>
        <td>ALARM_UNASSIGNED</td>
        <td><b>Alarm Unassigned</b></td>
        <td>Event produced when an alarm was unassigned from user</td>
        <td> 
            All fields from original Message Metadata
            <br><b>entityName</b> - name of alarm
            <br><b>entityType</b> - ALARM
            <br><b>userEmail</b> - user email
            <br><b>userFirstName</b> - user first name
            <br><b>userId</b> - user id
            <br><b>userLastName</b> - user last name
            <br><b>userName</b> - user name
        </td>
        <td>json containing alarm details, see Alarm event<br>        
        </td>
      </tr>
      <tr>
        <td>COMMENT_CREATED</td>
        <td><b>Comment Created</b></td>
        <td>Event produced when an alarm comment was created</td>
        <td> 
            All fields from original Message Metadata
            <br><b>userId</b> - user id
            <br><b>userName</b> - user name
            <br><b>userFirstName</b> - first name of user
            <br><b>userLastName</b> - last name of user
            <br><b>userEmail</b> - email of user
            <br><b>comment</b> - json object containing comment details and text of comment
        </td>
        <td>json containing alarm details, see Alarm event
        </td>
      </tr>
      <tr>
        <td>COMMENT_UPDATED</td>
        <td><b>Comment Updated</b></td>
        <td>Event produced when an alarm comment was updated</td>
        <td> 
            All fields from original Message Metadata
            <br><b>userId</b> - user id
            <br><b>userName</b> - user name
            <br><b>userFirstName</b> - first name of user
            <br><b>userLastName</b> - last name of user
            <br><b>userEmail</b> - email of user
            <br><b>comment</b> - json object containing comment details and text of comment
        </td>
        <td>json containing alarm details, see Alarm event
        </td>
      </tr>
      <tr>
          <td>REST_API_REQUEST</td>
          <td><b>REST API Request to Rule Engine</b></td>
          <td>Event produced when user executes REST API call</td>
          <td><b>requestUUID</b> - the unique request id,<br><b>expirationTime</b> - the expiration time of the request</td>
          <td>json with request payload</td>
      </tr>
   </tbody>
</table>
 
## Rule Node Types

All available rule nodes are grouped in correspondence with their nature:

  * [**Filter Nodes**](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/filter-nodes/) are used for message filtering and routing;
  * [**Enrichment Nodes**](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/enrichment-nodes/) are used to update meta-data of the incoming Message;
  * [**Transformation Nodes**](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/transformation-nodes/) are used for changing incoming Message fields like Originator, Type, Payload, Metadata;
  * [**Action Nodes**](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/action-nodes/) execute various actions based on incoming Message;
  * [**External Nodes**](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/external-nodes/) are used to interact with external systems.

## Configuration

Each Rule Node may have specific configuration parameters that depend on the Rule Node Implementation. 
For example, "Filter - script" rule node is configurable via custom JS function that process incoming data. 
"External - send email" node configuration allows to specify mail server connection parameters.
  
Rule Node configuration window may be opened by double-clicking on the node in the Rule Chain editor:    
  
![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/rule-node-configuration.png)

### Test script functions

Some rule nodes have specific UI feature that allow users to test TBEL/JS functions. 
Once you click on the **Test Filter Function** you will see the JS Editor that allows you to substitute input parameters and verify the output of the function.
    
![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/rule-node-test-function.png)

You can define:

- **Message Type** in the top left field.
- **Message payload** in the left Message section.
- **Metadata** in right Metadata section.
- Actual **TBEL/JS script** in Filter section.

After pressing **Test** output will be returned in right **Output** section.

## Rule Engine Statistics

ThingsBoard Team have prepared the "default" dashboard for Rule Engine statistics. 
This dashboard is automatically loaded for each tenant. 
You may access it by navigating to "Api Usage"->"View statistics" (see screen below).

{% include images-gallery.html imageCollection="open-statistics"  %}

The statistics collection is enabled by default and is controlled via configuration properties.

You may notice insights about errors in processing and what causes them on the dashbaord below: 

{% include images-gallery.html imageCollection="view-statistics"  %}

## Debugging

ThingsBoard provides ability to review incoming and outgoing messages for each Rule Node.
To enable debug, user need to ensure that "Debug mode" checkbox is selected in the main configuration window 
(see first image in the [Configuration](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#configuration) section). 

Once debug is enabled, user is able to see incoming and outgoing messages info as long as corresponding relation types.
See image below for a sample debug messages view:
  
![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/rule-node-debug.png)  

## Import/Export

You are able to export your rule chain to JSON format and import it to the same or another ThingsBoard instance.

In order to export rule chain, you should navigate to the **Rule Chains** page and click on the export button located on the particular rule chain card.
 
![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/rule-chain-export.png)

Similar, to import the rule chain you should navigate to the **Rules Chains** page and click on the big "+" button in the bottom-right part of the screen and then click on the import button. 

{% if docsPrefix != "paas/" %}
## Architecture

To learn more about internals of the rule engine, see [architecture](/docs/{{docsPrefix}}reference/) page.

{% endif %}
## Custom REST API calls to Rule Engine

{% assign feature = "Custom Rule Engine REST API calls" %}{% include templates/pe-feature-banner.md %}

ThingsBoard provides API to send custom REST API calls to the rule engine, process the payload of the request and return result of the processing in response body. 
This is useful for a number of use cases. For example:
 
 - extend existing REST API of the platform with custom API calls;
 - enrich REST API call with the attributes of device/asset/customer and forward to external system for complex processing;
 - provide custom API for your custom widgets.
 
To execute the REST API call, you may use rule-engine-controller [REST APIs](/docs/{{docsPrefix}}reference/rest-api/): 
 
![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/rest-api.png) 

Note: the entity id you have specified in the call will be the originator of Rule Engine message. If you do not specify the entity id parameters, your user entity will become an originator of the message.

## Tutorials

ThingsBoard authors have prepared several tutorials to help you get started with designing rule chains by example:

  * [**Transform incoming messages from device**](/docs/user-guide/rule-engine-2-0/tutorials/transform-incoming-telemetry/) 
  * [**Transform incoming messages using previous messages from device**](/docs/user-guide/rule-engine-2-0/tutorials/transform-telemetry-using-previous-record/) 
  * [**Create and clear alarms on incoming device messages**](/docs/user-guide/rule-engine-2-0/tutorials/create-clear-alarms/)
  * [**Send emails to customer on device alarm**](/docs/user-guide/rule-engine-2-0/tutorials/send-email/) 
  * [**Send messages between related devices**](/docs/user-guide/rule-engine-2-0/tutorials/rpc-reply-tutorial/)
  
See more tutorials [here](/docs/{{docsPrefix}}guides/).

{% unless docsPrefix == "paas/" %}

## Troubleshooting

If you are using Kafka queue for processing messages, ThingsBoard provides the ability to monitor if the rate of pushing messages to the Kafka is faster than rate of consuming and processing them (in such case you will have a growing latency for message processing).
To enable this functionality, you need to ensure that Kafka consumer-stats are enabled (see <b>queue.kafka.consumer-stats</b> section of the [Configuration properties](/docs/user-guide/install/{{docsPrefix}}config/#thingsboard-core-settings))

Once Kafka consumer-stats are enabled, you will see logs (see [Troubleshooting](/docs/user-guide/troubleshooting/#logs)) about offset lag for consumer groups (there are consumer-group logs for tb-core, tb-rule-engine and all transport services).

Here's an example of the log message:

```bash
2021-03-19 15:01:59,794 [kafka-consumer-stats-11-thread-1] INFO  o.t.s.q.k.TbKafkaConsumerStatsService - [re-Main-consumer] Topic partitions with lag: [[topic=[tb_rule_engine.main.0], partition=[0], committedOffset=[5413], endOffset=[5418], lag=[5]]].
```

From this message we can see that there are 5 (5418 - 5413 = 5) messages pushed to the <b>Main</b> queue (<b>tb_rule_engine.main.0</b> Kafka topic) but not yet processed. 

In general the logs have the following structure:

```bash
TIME [STATS_PRINTING_THREAD_NAME] INFO  o.t.s.q.k.TbKafkaConsumerStatsService - [CONSUMER_GROUP_NAME] Topic partitions with lag: [[topic=[KAFKA_TOPIC], partition=[KAFKA_TOPIC_PARTITION], committedOffset=[LAST_PROCESSED_MESSAGE_OFFSET], endOffset=[LAST_QUEUED_MESSAGE_OFFSET], lag=[LAG]],[topic=[ANOTHER_TOPIC], partition=[], committedOffset=[], endOffset=[], lag=[]],...].
```

Where:
- `CONSUMER_GROUP_NAME` - name of the consumer group which is processing messages (could be any of the rule-engine queues, core queue etc)
- `KAFKA_TOPIC` - name of the exact Kafka topic
- `KAFKA_TOPIC_PARTITION` - number of the topic's partition
- `LAST_PROCESSED_MESSAGE_OFFSET` - the sequence number of the last message which was processed by the consumer (last acknowledged message in the Rule Engine etc)
- `LAST_QUEUED_MESSAGE_OFFSET` - the sequence number of the last message that was successfully pushed to the Kafka topic
- `LAG` - the amount of unprocessed messages


**NOTE:** Logs about consumer lag are printed only if there is a lag for this consumer group.

{% endunless %}
