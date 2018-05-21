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
  * Type of the message: "Telemetry Upload Request" or "Inactivity Event", etc;
  * Payload of the message: JSON body with actual message payload;
  * Metadata: List of key-value pairs with additional data about the message. 

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

Some rule nodes have specific UI feature that allow users to test JS functions. 
Once you click on the "Test Filter Function" you will see the JS Editor that allows you to substitute input parameters and verify the output of the function.
    
![image](/images/user-guide/rule-engine-2-0/rule-node-test-function.png)

## Debugging

ThingsBoard provides ability to review incoming and outgoing messages for each Rule Node.
To enable debug, user need to ensure that "Debug mode" checkbox is selected in the main configuration window 
(see first image in the [Configuration](/docs/user-guide/rule-engine-2-0/overview/#configuration) section). 

Once debug is enabled, user is able to see incoming and outgoing messages info as long as corresponding relation types to producing and target sibling nodes.
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

  * [**Device RPC Call to fetch data from related Device**](/docs/user-guide/rule-engine-2-0/tutorials/rpc-reply-tutorial/) TODO.

