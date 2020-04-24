---
layout: docwithnav
title: Using queues for synchronization
description: Using queues for synchronization

---

* TOC
{:toc}

## Use case

Let's assume your device is using DHT22 sensor to collect and push temperature readings in the room to ThingsBoard.
In case the temperature exceeds some threshold we will simulate the air conditioning system to be enabled.
Otherwise, it will be disabled.

In this tutorial, we will configure ThingsBoard Rule Engine to use queue with sequential by originator message submit strategy.
Although this scenario is fictional, you will learn how to work with the queue to allow processing messages in sequential order
and use this knowledge in real-life applications.

## Prerequisites 

We assume you have completed the following guides and reviewed the articles listed below:

  * [Getting Started](/docs/getting-started-guides/helloworld/) guide.
  * [Rule Engine Overview](/docs/user-guide/rule-engine-2-0/overview/).
  
In addition, you need to have at least one device provisioned in your environment.

## Step 1: Creating the Rule Chain

![image](/docs/user-guide/rule-engine-2-5/tutorials/resources/sync_rule_chain.png)

We will add two generator nodes that will generate a single message each. First generator will produce a message with the temperature value of 21.
Second - with the value of 19 in one second later.

![image](/docs/user-guide/rule-engine-2-5/tutorials/resources/generator1.png)
![image](/docs/user-guide/rule-engine-2-5/tutorials/resources/generator2.png)

Both messages will be put into the queue with the name **"SequentialByOriginator"**. It uses the message submit strategy called **"SEQUENTIAL_WITHIN_ORIGINATOR"** 
(please, refer to [**configuration guide**](/docs/user-guide/install/config/) for more details) which means that
the subsequent message will start being processed when the preceding message is acknowledged (is processed and deleted from the queue) based on the originator.

![image](/docs/user-guide/rule-engine-2-5/tutorials/resources/checkpoint.png)

We will filter the messages based on the temperature value.
![image](/docs/user-guide/rule-engine-2-5/tutorials/resources/filter_by_temperature.png)

The first message will go through the **'True'** chain. The new attribute **'state'** will be created with the value **'on'**.
That would mean the air conditioning system is enabled. We have simulated the 7 seconds delay to show that the second message will be on hold until the first message is processed (acknowledged).

![image](/docs/user-guide/rule-engine-2-5/tutorials/resources/on_state_script.png)

The two last steps are saving the attribute and displaying the Success Log.
After the log message is displayed, the first message is considered as processed (acknowledged) since there is no more logic coming afterward.

![image](/docs/user-guide/rule-engine-2-5/tutorials/resources/save_and_log.png)

The second message is started being processed. It will go through the **"False"** chain of the **"Filter By Temperature"** node.
The **"Originator Attributes"** node is used for fetching the **'state'** attribute.
In case it is absent, the message will go through **"Failure"** chain. This is done to illustrate that in case the second message is started being processed before the first is finished, 
the logic fails and the attribute is not updated.

![image](/docs/user-guide/rule-engine-2-5/tutorials/resources/originator_attributes.png)

The **"Filter Script"** node is used to filter the message based on the air conditioning system state. In case it is enabled (the value is **'on'**), we change the state to **'off'** and save attribute.

![image](/docs/user-guide/rule-engine-2-5/tutorials/resources/filter_by_state.png)
![image](/docs/user-guide/rule-engine-2-5/tutorials/resources/off_state.png)

Otherwise, we do nothing. The same save attributes and log nodes are used to finish the processing.

![image](/docs/user-guide/rule-engine-2-5/tutorials/resources/save_and_log.png)

## Step 2: Validation the Rule Chain logic

Let's check that our logic is correct by saving the Rule Chain. The generators will automatically produce two messages:

**"Checkpoint"** node receives two messages:

![image](/docs/user-guide/rule-engine-2-5/tutorials/resources/checkpoint_events.png)

We can see that the next node, **"Filter By Temperature"**, receives the second message after 7 seconds the first came. That means that our logic works correctly.

![image](/docs/user-guide/rule-engine-2-5/tutorials/resources/checkpoint_events.png)

And the **"Originator Attributes"** node processed the second message successfully.

![image](/docs/user-guide/rule-engine-2-5/tutorials/resources/originator_events.png)

## TL;DR

Download and import attached json [**file**](/docs/user-guide/rule-engine-2-5/tutorials/resources/synchronization_rule_chain.json) with a rule chain from this tutorial.
Don't forget to populate the Generator nodes with your specific device.
 
## Next steps

{% assign currentGuide = "DataProcessing" %}{% include templates/guides-banner.md %}






