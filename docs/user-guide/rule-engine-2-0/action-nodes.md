---
layout: docwithnav
title: Action Nodes
description: Rule Engine 2.0 Action Nodes

---

Action Nodes execute different actions based on incoming Message.

* TOC
{:toc}


# Clear Alarm Node

**!!! TODO-RE - add description and link to tutorial**
{: style="color:red" }


# Create Alarm Node

**!!! TODO-RE - add description and link to tutorial**
{: style="color:red" }


# Generator Node
You can configure:
- Message generation frequency in seconds
- Message originator 
- Javascript function that will generate the actual message.

This node can be used for debugging Rule Chains. 

For more details how to write generation function, please see **Script Transformation** Node description

# Log Node
Transform incoming Message with configured JS function to String and log final value into the Thingsboard log file. 

**INFO** log level is used for logging.

JavaScript function receive 3 input parameters 

- <code>metadata</code> - is a Message metadata.
- <code>msg</code> - is a Message payload.
- <code>msgType</code> - is a Message type.

During Node configuration, Administrator can make test executions of configured Script. Just press **Test to String function** 
button and new test window will be opened.

You can define:

- Message payload in left 'Message' section.
- Message Type in the top left field.
- Metadata in right 'Metadata' section.
- Actual JS script in 'toString' section.

After pressing **Test** output will be returned in left **Output** section.

# RPC Call Reply Node

**!!! TODO-RE - add description and link to tutorial**
{: style="color:red" }


# RPC Call Request Node

**!!! TODO-RE - add description and link to tutorial**
{: style="color:red" }


# Save Attributes Node

**!!! TODO-RE - add description and link to tutorial**
{: style="color:red" }



# Save Timeseries Node


**!!! TODO-RE - add description and link to tutorial**
{: style="color:red" }



