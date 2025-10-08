* TOC
{:toc}

<b>Rule Engine</b> in ThingsBoard is the core data processing mechanism responsible for receiving, transforming, routing, and reacting to events and telemetry coming from devices and related assets.

Rule Engine built around three main components:

- [Message](#rule-engine-message) - any incoming event. It can be an incoming data from devices, device life-cycle event, REST API event, RPC request, etc.
- [Rule node](#rule-node) - a function that is executed on an incoming message. There are many different Node types that can filter, transform or execute some action on incoming Message.
- [Rule chain](#rule-chain) - nodes are connected with each other with relations, so the outbound message from rule node is sent to next connected rule nodes.

## Key characteristics

- <b>Stream processing</b>. Incoming data (telemetry, attributes, RPC, events) is immediately processed by the Rule Engine, where it can be filtered, enriched, or transformed.
- <b>Rule chain as a workflow</b>. Data processing is organized into <b>Rule chains</b> — workflows composed of individual <b>Rule nodes</b>. Each node performs a specific action such as filtering, saving data to a database, sending a notification, or calling an external API.
- <b>Flexibility and Extensibility</b>. The Rule Engine supports both built-in nodes and custom logic via scripts (JavaScript or TBEL). It also allows integrations with external systems (HTTP, Kafka, MQTT).
- <b>Integrations and Reactivity</b>. The Rule Engine can trigger business logic in response to events — for example, sending an email or SMS when a temperature threshold is exceeded, or integrating with external services and platforms.

## Typical use cases

Here are some common scenarios that can be configured using <b>ThingsBoard Rule Chains</b>:
- <b>Data validation and transformation</b> – Validate and modify incoming telemetry or attributes before persisting them in the database.
- <b>Telemetry aggregation</b> – Copy telemetry or attributes from devices to related assets to enable aggregation. For example, data from multiple devices can be combined into a related Asset for summary analytics.
- <b>Alarm management</b> – Create, update, or clear alarms based on defined conditions.
- <b>Device life-cycle monitoring</b> – Trigger actions when device state changes. For example, generate alerts when a device goes online or offline.
- <b>Data enrichment</b> – Load additional context required for processing. For example, load temperature threshold value for a device that is defined in device&#39;s Customer or Tenant attribute.
- <b>External system integration</b> – Trigger REST API calls to external applications and services.
- <b>Notifications – Send email alerts when complex events occur, with the ability to include attributes from related entities in the email template.
- <b>User personalization</b> – Take into account user preferences during event processing.
- <b>Remote control</b> – Execute RPC calls to devices based on defined conditions.
- <b>Big data / cloud integration</b> – Connect to external pipelines and platforms such as Kafka, Spark, or AWS services.

## Rule Engine message 

Rule Engine Message is a serializable, immutable data structure that represent various messages in the system. For example:

  * Incoming [telemetry](/docs/{{docsPrefix}}user-guide/telemetry/){:target="_blank"}, [attribute update](/docs/{{docsPrefix}}user-guide/attributes/){:target="_blank"} or [RPC call](/docs/{{docsPrefix}}user-guide/rpc/){:target="_blank"} from device;
  * Entity life-cycle event: created, updated, deleted, assigned, unassigned, attributes updated;
  * Device status event: connected, disconnected, active, inactive, etc;
  * Other system events.
  
Rule Engine Message contains the following information:

  * Message ID: time based, universally unique identifier;
  * Originator of the message: Device, Asset or other [Entity](/docs/{{docsPrefix}}user-guide/entities-and-relations/){:target="_blank"} identifier;
  * Type of the message: "Post telemetry" or "Inactivity Event", etc;
  * Payload of the message: JSON body with actual message payload;
  * Metadata: List of key-value pairs with additional data about the message. 

## Rule node

Rule Node is a basic component of Rule Engine that process single incoming message at a time and produce one or more outgoing messages. 
Rule Node is a main logical unit of the Rule Engine. Rule Node can filter, enrich, transform incoming messages, perform action or communicate with external systems.

## Rule node connection

Rule Nodes may be connected to other rule nodes. Each relation has relation type, a label used to identify logical meaning of the relation. 
When rule node produces the outgoing message it always specifies the relation type which is used to route message to next nodes.
 
Typical rule node relations are "Success" and "Failure". 
Rule nodes that represent logical operations may use "True" or "False". 
Some specific rule nodes may use completely different relation types, for example: "Post Telemetry", "Attributes Updated", "Entity Created", etc.


Some rule nodes support custom connection names. Just type your custom connection name and click the "Create a new one!" link:

![image](/images/user-guide/rule-engine-2-0/nodes/custom-connection.png)

All connection names are **case-sensitive**.

## Rule chain

Rule Chain is a logical group of rule nodes and their relations. For example, the rule chain below will:

  * save all telemetry messages to the database;
  * raise "High Temperature Alarm" if temperature field in the message will be higher then 50 degrees;
  * raise "Low Temperature Alarm" if temperature field in the message will be lower then -40 degrees;
  * log failure to execute the temperature check scripts to console in case of logical or syntax error in the script. 

![image](/images/user-guide/rule-engine-2-0/rule-node-relations.png)

Tenant administrator is able to define one **Root Rule Chain** and optionally multiple other rule chains. 
Root rule chain handles all incoming messages and may forward them to other rule chains for additional processing.
Other rule chains may also forward messages to different rule chains.

For example, the rule chain below will:

  * raise "High Temperature Alarm" if temperature field in the message will be higher then 50 degrees;
  * clear "High Temperature Alarm" if temperature field in the message will be less then 50 degrees;
  * forward events about "Created" and "Cleared" alarms to external rule chain that handles notifications to corresponding users.
 
![image](/images/user-guide/rule-engine-2-0/rule-chain-references.png)

## Message processing result

There are three possible results of message processing: Success, Failure and Timeout.
The message processing attempt is marked as "Success" when the last rule node in the processing chain successfully process the message.
The message processing attempt is marked as "Failure" if one of the rule nodes produce "Failure" of message processing, 
and there is no rule nodes to handle that failure. 
The message processing attempt is marked as "Timeout" when overall time of processing exceed configurable threshold.

See diagram below and let's review the possible scenarios:

![image](/images/user-guide/rule-engine-2-0/not-a-failure.png)

If the "Transformation" script fails, the message is not marked as "Failed", because there is a "Save to DB" node connected with "Failure" relation.
If the "Transformation" script is successful, it will be pushed to "External System" with the REST API call.
If the external system is overloaded, the REST API call may "hang" for some time. 
Let's assume the overall timeout for message pack processing is 20 seconds. Let's ignore Transformation script execution time because it is < 1ms.
So, if the "External System" will reply within 20 seconds, the message will be successfully processed. 
Similar, if "Save to DB" call will succeed, the message will be successfully processed. 
However, if the external system will not reply within 20 seconds, the message processing attempt will be marked as "timed-out".
Similar, if "Save to DB" call will fail, the message will be marked as failed.

### Rule Engine queue

See new [documentation](/docs/{{docsPrefix}}user-guide/rule-engine-2-5/queues/){:target="_blank"}

#### Queue submit strategy

See new [documentation](/docs/{{docsPrefix}}user-guide/rule-engine-2-5/queues/#queue-submit-strategy){:target="_blank"}

#### Queue processing strategy

See new [documentation](/docs/{{docsPrefix}}user-guide/rule-engine-2-5/queues/#queue-processing-strategy){:target="_blank"}

#### Default queues

See new [documentation](/docs/{{docsPrefix}}user-guide/rule-engine-2-5/queues/#default-queues){:target="_blank"}

## Predefined message types

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
 
## Rule node types

All available rule nodes are grouped in correspondence with their nature:

  * [**Filter nodes**](/docs/user-guide/rule-engine-2-0/nodes/filter/){:target="_blank"} are used for message filtering and routing
  * [**Enrichment nodes**](/docs/user-guide/rule-engine-2-0/nodes/enrichment/){:target="_blank"} are used to enrich message with information stored in the database
  * [**Transformation nodes**](/docs/user-guide/rule-engine-2-0/nodes/transformation/){:target="_blank"} are used for changing message fields such as originator, type, data, and metadata
  * [**Action nodes**](/docs/user-guide/rule-engine-2-0/nodes/action/){:target="_blank"} are used to execute various actions based on the message
  * [**External nodes**](/docs/user-guide/rule-engine-2-0/nodes/external/){:target="_blank"} are used to interact with external systems
  * [**Flow nodes**](/docs/user-guide/rule-engine-2-0/nodes/flow/){:target="_blank"} are used to control message flow between rule chains and interact with queues
  * [**Analytics nodes**](/docs/user-guide/rule-engine-2-0/nodes/analytics/){:target="_blank"} are used to aggregate data

## Configuration

Each Rule Node may have specific configuration parameters that depend on the Rule Node Implementation. 
For example, "Filter - script" rule node is configurable via custom JS function that process incoming data. 
"External - send email" node configuration allows to specify mail server connection parameters.
  
Rule Node configuration window may be opened by double-clicking on the node in the Rule Chain editor:    
  
![image](/images/user-guide/rule-engine-2-0/rule-node-configuration.png)

### Test script functions

Some rule nodes have specific UI feature that allow users to test TBEL/JS functions. 
Once you click on the **Test Filter Function** you will see the JS Editor that allows you to substitute input parameters and verify the output of the function.
    
![image](/images/user-guide/rule-engine-2-0/rule-node-test-function.png)

You can define:

- **Message Type** in the top left field.
- **Message payload** in the left Message section.
- **Metadata** in right Metadata section.
- Actual **TBEL/JS script** in Filter section.

After pressing **Test** output will be returned in right **Output** section.

## Rule Engine statistics

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
(see first image in the [Configuration](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#configuration){:target="_blank"} section). 

Once debug is enabled, user is able to see incoming and outgoing messages info as long as corresponding relation types.
See image below for a sample debug messages view:
  
![image](/images/user-guide/rule-engine-2-0/rule-node-debug.png)  

## Managing rule chains

Rule chains page displays a table of configured tenant rule chains. From here, you can create, export/import, delete, and mark the rule chain as root.

### Create rule chain

To add a new rule chain, you should:

{% include images-gallery.html imageCollection="create-rule-chain" showListImageTitles="true" %}

### Import/Export

You are able to [export](#export-rule-chain) your rule chain to а JSON file and [import](#import-rule-chain) it to the same or another ThingsBoard instance.

#### Export rule chain

In order to export rule chain, you should:

- Go to the "<b>Rule chains</b>" page.
- Click the "<b>Export rule chain</b>" icon in the row of the desired rule chain. 
 
A JSON file containing the configuration of that rule chain will be saved to your computer.

{% include images-gallery.html imageCollection="export-rule-chain" %}

#### Import rule chain

To import rule chain from а JSON file, you should:

{% include images-gallery.html imageCollection="import-rule-chain" showListImageTitles="true" %}

{% capture difference %}
**Note 1:**
<br>
All imported rule chain are **not root** rule chain.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

{% capture difference %}
**Note 2:**
<br>
If imported rule chain contains references to other rule chains (via **Rule Chain** node), then you will need to update those references before saving rule chain.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

### Make rule chain root

To make rule chain root, you should:

{% include images-gallery.html imageCollection="make-rule-chain-as-root" showListImageTitles="true" %}

### Delete rule chain

You can delete a rule chain using one of the following ways:

First way:

{% include images-gallery.html imageCollection="delete-rule-chain-1" showListImageTitles="true" %}

Second way:

{% include images-gallery.html imageCollection="delete-rule-chain-2" showListImageTitles="true" %}

You can also delete multiple rule chains at once.

{% include images-gallery.html imageCollection="delete-rule-chain-3" showListImageTitles="true" %}

{% unless docsPrefix contains "paas/" %}
## Architecture

To learn more about internals of the Rule Engine, see [architecture](/docs/{{docsPrefix}}reference/){:target="_blank"} page.

{% endunless %}
## Custom REST API calls to Rule Engine

{% assign feature = "Custom Rule Engine REST API calls" %}{% include templates/pe-feature-banner.md %}

ThingsBoard provides API to send custom REST API calls to the Rule Engine, process the payload of the request and return result of the processing in response body. 
This is useful for a number of use cases. For example:
 
 - extend existing REST API of the platform with custom API calls;
 - enrich REST API call with the attributes of device/asset/customer and forward to external system for complex processing;
 - provide custom API for your custom widgets.
 
To execute the REST API call, you may use rule-engine-controller [REST APIs](/docs/{{docsPrefix}}reference/rest-api/){:target="_blank"}: 
 
![image](/images/user-guide/rule-engine-2-0/rest-api.png) 

> <b>Note</b>: the entity id you have specified in the call will be the originator of Rule Engine message. If you do not specify the entity id parameters, your user entity will become an originator of the message.

## Tutorials

ThingsBoard authors have prepared several tutorials to help you get started with designing rule chains by example:

  * [**Transform incoming messages from device**](/docs/user-guide/rule-engine-2-0/tutorials/transform-incoming-telemetry/){:target="_blank"} 
  * [**Transform incoming messages using previous messages from device**](/docs/user-guide/rule-engine-2-0/tutorials/transform-telemetry-using-previous-record/) {:target="_blank"}
  * [**Create and clear alarms on incoming device messages**](/docs/user-guide/rule-engine-2-0/tutorials/create-clear-alarms/){:target="_blank"}
  * [**Send emails to customer on device alarm**](/docs/user-guide/rule-engine-2-0/tutorials/send-email/) {:target="_blank"}
  * [**Send messages between related devices**](/docs/user-guide/rule-engine-2-0/tutorials/rpc-reply-tutorial/){:target="_blank"}
  
See more tutorials [here](/docs/{{docsPrefix}}guides/){:target="_blank"}.

{% unless docsPrefix contains "paas/" %}

## Troubleshooting

If you are using Kafka queue for processing messages, ThingsBoard provides the ability to monitor if the rate of pushing messages to the Kafka is faster than rate of consuming and processing them (in such case you will have a growing latency for message processing).
To enable this functionality, you need to ensure that Kafka consumer-stats are enabled (see <b>queue.kafka.consumer-stats</b> section of the [Configuration properties](/docs/user-guide/install/{{docsPrefix}}config/#thingsboard-core-settings){:target="_blank"})

Once Kafka consumer-stats are enabled, you will see logs (see [Troubleshooting](/docs/user-guide/troubleshooting/#logs){:target="_blank"}) about offset lag for consumer groups (there are consumer-group logs for tb-core, tb-rule-engine and all transport services).

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
