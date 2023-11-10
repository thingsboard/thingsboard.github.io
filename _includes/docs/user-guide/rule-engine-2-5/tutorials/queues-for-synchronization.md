* TOC
{:toc}

## Use case

Let's assume you need to implement the "counter" logic using ThingsBoard Rule Engine.
Basically, message processing is executed asynchronously inside the Rule Nodes. Due to this fact, in most cases, the logic "get present counter value -> add new counter value -> save counter value" 
leads to the incorrect final result (unlike your expectations) due to the race condition issue. 
It is a well-known problem for all who dealt with multi-threading programming.
You can refer to this [article](https://opensourceforgeeks.blogspot.com/2014/01/race-condition-synchronization-atomic.html) which nicely describes the problem and the existed solutions.
Starting the ThingsBoard v2.5 this processing issue could be solved using special configurable queues.

In this tutorial, we will configure ThingsBoard Rule Engine to use queue with sequential by originator message submit strategy.
Although this scenario is fictional, you will learn how to work with the queue to allow processing messages in sequential order
and use this knowledge in real-life applications.

## Prerequisites 

We assume you have completed the following guides and reviewed the articles listed below:

  * [Getting Started](/docs/{{docsPrefix}}getting-started-guides/helloworld/) guide.
  * [Rule Engine Overview](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/).
  
In addition, you need to have at least one device provisioned in your environment.

## Step 1: Creating the Rule Chain

![image](https://img.thingsboard.io/user-guide/rule-engine-2-5/tutorials/sync_rule_chain.png)

We will add two generator nodes that will generate seven messages each. First generator will produce a message with the counter value of 101.
Second - with the value of 10. So the result should be 777.

![image](https://img.thingsboard.io/user-guide/rule-engine-2-5/tutorials/generator1.png)
![image](https://img.thingsboard.io/user-guide/rule-engine-2-5/tutorials/generator2.png)

Both messages will be put into the queue with the name **"SequentialByOriginator"**. It uses the message submit strategy called **"SEQUENTIAL_WITHIN_ORIGINATOR"** 
{% unless docsPrefix == "paas/" %}(please, refer to [**configuration guide**](/docs/user-guide/install/{{docsPrefix}}config/) for more details){% endunless %} which means that
the subsequent message will start being processed when the preceding message is acknowledged (is processed and deleted from the queue) based on the originator.

![image](https://img.thingsboard.io/user-guide/rule-engine-2-5/tutorials/checkpoint.png)

We will get the present "counter" value using **"Originator Attributes"** node.
![image](https://img.thingsboard.io/user-guide/rule-engine-2-5/tutorials/sync_originator_attributes.png)

The calculations will be done using **"Counter Script"** node. 

![image](https://img.thingsboard.io/user-guide/rule-engine-2-5/tutorials/sync_counter_script.png)

The last step will be to save the new counter value using **"Save Attributes"** node.

## Step 2: Validation the Rule Chain logic

Let's check that our logic is correct by saving the Rule Chain. The generators will automatically produce 14 messages:

![image](https://img.thingsboard.io/user-guide/rule-engine-2-5/tutorials/sync_events.png)

The final counter value that is persisted for a device is:

![image](https://img.thingsboard.io/user-guide/rule-engine-2-5/tutorials/sync_result.png)

That means that our logic works correctly.

## TL;DR

Download and import attached json [**file**](/docs/{{docsPrefix}}user-guide/rule-engine-2-5/tutorials/resources/synchronization_rule_chain.json) with a rule chain from this tutorial.
Don't forget to populate the Generator nodes with your specific device.
 
## Next steps

{% assign currentGuide = "DataProcessing" %}{% include templates/multi-project-guides-banner.md %}






