---
layout: docwithnav
title: Create custom Rule nodes
description: Create custom Rule nodes

---

* TOC
{:toc}

## Overview

In this tutorial, you will learn how to create your own custom nodes, namely:

 - Filter node that will check whether the **key** from telemetry data of the inbound message exists. If the selected key exists - send Message via **True** chain, otherwise **False** chain is used.
 
 ![image](/images/user-guide/contribution/customization/check-key-node.png)
 
 - Enrichment node that will calculate Sum of the telemetry data, which fields begin with the specified **Input Key** and add the result into Message Metadata with **Output Key**.
 
 ![image](/images/user-guide/contribution/customization/get-sum-in-metadata-node.png)
 
 - Transformation node will calculate Sum of the telemetry data, which fields begin with the specified **Input Key** and add Sum to the new Message payload with **Output Key**.
 
 ![image](/images/user-guide/contribution/customization/get-sum-node.png)


## Prerequisites 

We assume you have completed the following guides and reviewed the articles listed below:

  * [Getting Started](/docs/getting-started-guides/helloworld/) guide.
  * [Rule Engine Overview](/docs/user-guide/rule-engine-2-0/overview/) article.
  * [Rule Engine Architecture](/docs/user-guide/rule-engine-2-0/architecture/) article.`


## Customization 

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


## Building from sources

  We assume you have already installed Thingsboard platform and all third-party applications.

  If you don't have access to ThingsBoard instance yet, use the [Installation guides](/docs/guides/#AnchorIDInstallationGuides) to fix this.

### Source code

 You can clone source code of the project from the official [github repo](https://github.com/thingsboard/rule-node-examples).

```
git clone git@github.com:thingsboard/rule-node-examples.git
```

### Build

 - Execute the following command  from the rule-node-examples folder to build the project:
 
```
mvn clean install
``` 

 - Next step will be import jar-archive to your Thingsboard instance that should be here:
 
```
./target/rule-engine-1.0.0-custom-nodes.jar
```

 - The last step will be run the following command from the ThingsBoard folder to build the ThingsBoard:
 
```
mvn clean install
```  


### UI configuration

The UI for the ThingsBoard rule nodes was configured with the help of the project that is also hosted on the official [github repo](https://github.com/thingsboard/thingsboard-rule-config-ui).

```bash
git clone git@github.com:thingsboard/thingsboard-rule-config-ui.git
# checkout custom-nodes branch
git checkout name_of_branch
```
