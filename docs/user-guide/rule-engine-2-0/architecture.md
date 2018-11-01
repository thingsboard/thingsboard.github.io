---
layout: docwithnav
title: Rule Engine Architecture
description: Rule Engine Architecture

---

* TOC
{:toc}

ThingsBoard rule engine is based on two main components: the actor model and message queue.

<br/>

![image](/images/user-guide/rule-engine-2-0/rule-engine-architecture.svg)
 
### Actor model

Actor model enables high performance and concurrent processing of messages from device transport layer as long as server-side API calls. 
ThingsBoard uses Akka as an actor system implementation. 
There are two main actors related to the rule engine: Rule Chain Actor and Rule Node Actor.

#### Rule Chain Actor

Rule Chain actor is responsible for rule node configuration, routing messages between rule nodes, and handling queue put and ack commands.
Each Rule Chain Actor represent single rule chain configured by the user. Rule Chain Actor is parent for multiple Rule Node actors.

#### Rule Node Actor

Rule Node actor is responsible for processing of the incoming messages. The logic of message processing is highly customizable.
There are many built-in implementations of the RuleNodes and you can develop your own, custom rule node implementations as well.
See [Customization Guide](/docs/user-guide/contribution/customization-guide/) for more details.
 
### Message Queue

Each incoming message is pushed to the queue before it is processed by the rule engine. 
For example, once device pushes a telemetry over MQTT, the telemetry message is stored into the queue. 
Once queue acknowledges push operation, ThingsBoard will push message delivery acknowledgement back to the device.

Once the rule engine will process the incoming message, the message is acknowledged and removed from the queue. 
  
During the server restart or rule chain reconfiguration, all messages that are stored in the queue and was not yet acknowledged will be reprocessed.

Message queue also has throttling capabilities to limit number of the messages that are being processed at a single point of time per each tenant. 

#### Message Acknowledgement

Message is acknowledged by the rule engine in two cases:

  * Message is processed by the last rule node in a chain
        
    ![image](/images/user-guide/rule-engine-2-0/rule-engine-ack-case1.svg)

  * Message is pushed by the rule node to multiple other rule nodes. In this case rule chain actor will copy the incoming message to multiple outgoing messages. 
    Outgoing messages will be separately pushed to the queue and incoming message will be acknowledged 

    ![image](/images/user-guide/rule-engine-2-0/rule-engine-ack-case2.svg)
  
#### In memory message queue
  
In memory message queue is a default message queue available in community edition. This type of queue allows to configure max message count in the queue.
In case of message is not acknowledged for a certain amount of time, it will be removed from the queue.
  
#### Cassandra based message queue  

Persistent message queue that stores all data in Cassandra DB. Available in ThingsBoard Professional Edition only.

#### PostgreSQL based message queue

Persistent message queue that stores all data in PostgreSQL DB. Available in ThingsBoard Professional Edition only.

#### Custom message queue implementations
 
You can implement own Message Queue since the project is open-source.   

## Next steps

{% assign currentGuide = "DataProcessing" %}{% include templates/guides-banner.md %}