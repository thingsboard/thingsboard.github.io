---
layout: docwithnav
title: Rule Engine Overview
description: Rule Engine Overview

---

* TOC
{:toc}

ThingsBoard Rule Engine is a highly customizable and configurable system for complex event processing. 
With rule engine you are able to filter, enrich and transform incoming messages originated by IoT devices and related assets. 
You are also able to trigger various actions, for example, notifications or communication with external systems.
  
## Key Concepts

#### Rule Engine Message 

Rule Engine Message is a serializable, immutable data structure that represent various messages in the system. For example:

  * Incoming [telemetry](/docs/user-guide/telemetry/), [attribute update](/docs/user-guide/attributes/) or [RPC call](/docs/user-guide/rpc/) from device;
  * Entity life-cycle event: created, updated, deleted, assigned, unassigned, attributes updated;
  * Device status event: connected, disconnected, active, inactive, etc;
  * Other system events.
  
Rule Engine Message contains the following information:

  * Message ID: time based, universally unique identifier;
  * Originator of the message: Device, Asset or other [Entity](/docs/user-guide/entities-and-relations/) identifier;
  * Type of the message: "Post telemetry" or "Inactivity Event", etc;
  * Payload of the message: JSON body with actual message payload;
  * Metadata: List of key-value pairs with additional data about the message. 

##### Predefined Message Types

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
          <td>Request from device to publish <a href="/docs/user-guide/attributes/#attribute-types">client side</a> attributes (see <a href="/docs/reference/mqtt-api/#publish-attribute-update-to-the-server">attributes api</a> for reference)</td>
          <td><b>deviceName</b> - originator device name,<br><b>deviceType</b> - originator device type</td>
          <td>key/value json: <br> <code style="font-size: 12px;">{ <br> &nbsp;&nbsp;"currentState": "IDLE" <br> }</code></td>
      </tr>
      <tr>
          <td>POST_TELEMETRY_REQUEST</td>
          <td><b>Post telemetry</b></td>
          <td>Request from device to publish telemetry (see <a href="/docs/reference/mqtt-api/#telemetry-upload-api">telemetry upload api</a> for reference)</td>
          <td><b>deviceName</b> - originator device name,<br><b>deviceType</b> - originator device type,<br><b>ts</b> - timestamp (milliseconds)</td>
          <td>key/value json: <br> <code style="font-size: 12px;">{ <br> &nbsp;&nbsp;"temperature": 22.7 <br> }</code></td>
      </tr>
      <tr>
          <td>TO_SERVER_RPC_REQUEST</td>
          <td><b>RPC Request from Device</b></td>
          <td>RPC request from device (see <a href="/docs/reference/mqtt-api/#client-side-rpc">client side rpc</a> for reference)</td>
          <td><b>deviceName</b> - originator device name,<br><b>deviceType</b> - originator device type,<br><b>requestId</b> - RPC request Id provided by client</td>
          <td>json containing <b>method</b> and <b>params</b>: <br> <code style="font-size: 12px;">{ <br> &nbsp;&nbsp;"method": "getTime", <br>&nbsp;&nbsp;"params": { "param1": "val1" } <br> }</code></td>
      </tr>
      <tr>
          <td>RPC_CALL_FROM_SERVER_TO_DEVICE</td>
          <td><b>RPC Request to Device</b></td>
          <td>RPC request from server to device (see <a href="/docs/user-guide/rpc/#server-side-rpc-api">server side rpc api</a> for reference)</td>
          <td><b>requestUUID</b> - internal request id used by sustem to identify reply target,<br><b>expirationTime</b> - time when request will be expired,<br><b>oneway</b> - specifies request type: <i>true</i> - without response, <i>false</i> - with response</td>
          <td>json containing <b>method</b> and <b>params</b>: <br> <code style="font-size: 12px;">{ <br> &nbsp;&nbsp;"method": "getGpioStatus", <br>&nbsp;&nbsp;"params": { "param1": "val1" } <br> }</code></td>
      </tr>
      <tr>
          <td>ACTIVITY_EVENT</td>
          <td><b>Activity Event</b></td>
          <td>Event indicating that device becomes active</td>
          <td><b>deviceName</b> - originator device name,<br><b>deviceType</b> - originator device type</td>
          <td>json containing device activity information: <br> <code style="font-size: 12px;">{<br> &nbsp;&nbsp;"active": true,<br> &nbsp;&nbsp;"lastConnectTime": 1526979083267,<br> &nbsp;&nbsp;"lastActivityTime": 1526979083270,<br> &nbsp;&nbsp;"lastDisconnectTime": 1526978493963,<br> &nbsp;&nbsp;"lastInactivityAlarmTime": 1526978512339,<br> &nbsp;&nbsp;"inactivityTimeout": 10000<br>}</code></td>
      </tr>
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
          <td>Event produced when entity was added to <a href="/docs/user-guide/groups/">Entity Group</a>. This Message Type is specific to <a href="/products/thingsboard-pe/">ThingsBoard PE</a>.</td>
          <td><b>userName</b> - name of the user who performed assignment operation,<br><b>userId</b> - the user Id,<br><b>addedToEntityGroupName</b> - entity group name,<br><b>addedToEntityGroupId</b> - Id of entity group</td>
          <td>empty json payload</td>
      </tr>
      <tr>
          <td>REMOVED_FROM_ENTITY_GROUP</td>
          <td><b>Removed from Group</b></td>
          <td>Event produced when entity was removed from <a href="/docs/user-guide/groups/">Entity Group</a>. This Message Type is specific to <a href="/products/thingsboard-pe/">ThingsBoard PE</a>.</td>
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
   </tbody>
</table>

#### Rule Node

Rule Node is a basic component of Rule Engine that process single incoming message at a time and produce one or more outgoing messages. 
Rule Node is a main logical unit of the Rule Engine. Rule Node can filter, enrich, transform incoming messages, perform action or communicate with external systems.

#### Rule Node Relation

Rule Nodes may be related to other rule nodes. Each relation has relation type, a label used to identify logical meaning of the relation. 
When rule node produces the outgoing message it always specifies the relation type which is used to route message to next nodes.
 
Typical rule node relations are "Success" and "Failure". 
Rule nodes that represent logical operations may use "True" or "False". 
Some specific rule nodes may use completely different relation types, for example: "Post Telemetry", "Attributes Updated", "Entity Created", etc. 

#### Rule Chain

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
 
## Message Queue
 
All incoming messages are stored in the queue before they are pushed for processing by the root rule chain. 
Once message are processed, they are removed from queue. 
For security and performance reasons, system administrator may configure max size of the queue per tenant and other important parameters.
To learn more about message queue, acknowledgement criteria and internals of the rule engine, see [architecture](/docs/user-guide/rule-engine-2-0/architecture/) page. 

## Rule Node Types

All available rule nodes are grouped in correspondence with their nature:

  * [**Filter Nodes**](/docs/user-guide/rule-engine-2-0/filter-nodes/) are used for message filtering and routing;
  * [**Enrichment Nodes**](/docs/user-guide/rule-engine-2-0/enrichment-nodes/) are used to update meta-data of the incoming Message;
  * [**Transformation Nodes**](/docs/user-guide/rule-engine-2-0/transformation-nodes/) are used for changing incoming Message fields like Originator, Type, Payload, Metadata;
  * [**Action Nodes**](/docs/user-guide/rule-engine-2-0/action-nodes/) execute various actions based on incoming Message;
  * [**External Nodes**](/docs/user-guide/rule-engine-2-0/external-nodes/) are used to interact with external systems.

## Configuration

Each Rule Node may have specific configuration parameters that depend on the Rule Node Implementation. 
For example, "Filter - script" rule node is configurable via custom JS function that process incoming data. 
"External - send email" node configuration allows to specify mail server connection parameters.
  
Rule Node configuration window may be opened by double-clicking on the node in the Rule Chain editor:    
  
![image](/images/user-guide/rule-engine-2-0/rule-node-configuration.png)

### Test JavaScript functions

Some rule nodes have specific UI feature that allow users to test JS functions. 
Once you click on the **Test Filter Function** you will see the JS Editor that allows you to substitute input parameters and verify the output of the function.
    
![image](/images/user-guide/rule-engine-2-0/rule-node-test-function.png)

You can define:

- **Message Type** in the top left field.
- **Message payload** in the left Message section.
- **Metadata** in right Metadata section.
- Actual **JS script** in Filter section.

After pressing **Test** output will be returned in right **Output** section.

## Debugging

ThingsBoard provides ability to review incoming and outgoing messages for each Rule Node.
To enable debug, user need to ensure that "Debug mode" checkbox is selected in the main configuration window 
(see first image in the [Configuration](/docs/user-guide/rule-engine-2-0/overview/#configuration) section). 

Once debug is enabled, user is able to see incoming and outgoing messages info as long as corresponding relation types.
See image below for a sample debug messages view:
  
![image](/images/user-guide/rule-engine-2-0/rule-node-debug.png)  

## Import/Export

You are able to export your rule chain to JSON format and import it to the same or another ThingsBoard instance.

In order to export rule chain, you should navigate to the **Rule Chains** page and click on the export button located on the particular rule chain card.
 
![image](/images/user-guide/rule-engine-2-0/rule-chain-export.png)

Similar, to import the rule chain you should navigate to the **Rules Chains** page and click on the big "+" button in the bottom-right part of the screen and then click on the import button. 

## Architecture

To learn more about internals of the rule engine, see [architecture](/docs/user-guide/rule-engine-2-0/architecture/) page.

## Tutorials

ThingsBoard authors have prepared several tutorials to help you get started with designing rule chains by example:

  * [**Transform incoming telemetry**](/docs/user-guide/rule-engine-2-0/tutorials/transform-incoming-telemetry/) 
  * [**Transform telemetry using previous record**](/docs/user-guide/rule-engine-2-0/tutorials/transform-telemetry-using-previous-record/) 
  * [**Create And Clear Alarms**](/docs/user-guide/rule-engine-2-0/tutorials/create-clear-alarms/)
  * [**Send Email**](/docs/user-guide/rule-engine-2-0/tutorials/send-email/) 
  * [**RPC Reply With data from Related Device**](/docs/user-guide/rule-engine-2-0/tutorials/rpc-reply-tutorial/) 

