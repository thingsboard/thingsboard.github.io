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
See [Customization Guide](/docs/user-guide/rule-engine-2-0/architecture/#customization-guide) for more details.

### Customization guide

In order to create new rule node, you should implement the TbNode interface

```java
package org.thingsboard.rule.engine.api;

...

public interface TbNode {

    void init(TbContext ctx, TbNodeConfiguration configuration) throws TbNodeException;

    void onMsg(TbContext ctx, TbMsg msg) throws ExecutionException, InterruptedException, TbNodeException;

    void destroy();

}
```

and annotate your implementation with the following annotation:

```java
org.thingsboard.rule.engine.api.RuleNode 
```