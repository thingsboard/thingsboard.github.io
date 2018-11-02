---
layout: docwithnav
title: Rule Node Development Guide
description: Create custom Rule nodes

---

* TOC
{:toc}

## Overview

In this tutorial, you will learn how to create your own custom nodes, namely:

 - **Filter node** that will check whether the **key** from telemetry data of the inbound message exists. If the selected key exists - send Message via **True** chain, otherwise **False** chain is used.
 
 ![image](/images/user-guide/contribution/customization/check-key-node.png)
 
 - **Enrichment node** that will calculate Sum of the telemetry data, which fields begin with the specified **Input Key** and add the result into Message Metadata with **Output Key**.
 
 ![image](/images/user-guide/contribution/customization/get-sum-in-metadata-node.png)
 
 - **Transformation node** will calculate Sum of the telemetry data, which fields begin with the specified **Input Key** and add Sum to the new Message payload with **Output Key**.
 
 ![image](/images/user-guide/contribution/customization/get-sum-node.png)


## Prerequisites 

We assume you have completed the following guides and reviewed the articles listed below:

  * [Getting Started](/docs/getting-started-guides/helloworld/) guide.
  * [Rule Engine Overview](/docs/user-guide/rule-engine-2-0/overview/) article.
  * [Rule Engine Architecture](/docs/user-guide/rule-engine-2-0/architecture/) article.

## Customization 

In order to create new rule node, you should implement the [TbNode](https://github.com/thingsboard/thingsboard/blob/master/rule-engine/rule-engine-api/src/main/java/org/thingsboard/rule/engine/api/TbNode.java) interface:

```java
package org.thingsboard.rule.engine.api;

...

public interface TbNode {

    void init(TbContext ctx, TbNodeConfiguration configuration) throws TbNodeException;

    void onMsg(TbContext ctx, TbMsg msg) throws ExecutionException, InterruptedException, TbNodeException;

    void destroy();

}
```

and annotate your implementation with the following [annotation](https://github.com/thingsboard/thingsboard/blob/master/rule-engine/rule-engine-api/src/main/java/org/thingsboard/rule/engine/api/RuleNode.java):

```java
org.thingsboard.rule.engine.api.RuleNode 
```

Also each rule node must have a configuration class that implement [NodeConfiguration](https://github.com/thingsboard/thingsboard/blob/master/rule-engine/rule-engine-api/src/main/java/org/thingsboard/rule/engine/api/NodeConfiguration.java) interface.

```java
package org.thingsboard.rule.engine.api;

public interface NodeConfiguration<T extends NodeConfiguration> {

    T defaultConfiguration();

}
```

Configuration class define in Rule node classes.

### Methods flow

Body of init method for each above mention rule node is almost the same, in each of them defined configuration using static method ```convert()``` from public class [TbNodeUtils](https://github.com/thingsboard/thingsboard/blob/master/rule-engine/rule-engine-api/src/main/java/org/thingsboard/rule/engine/api/util/TbNodeUtils.java) converts JSON data from TbNodeConfiguration to Configuration class.
All of the configuration parameters assigns in the **init** method.

{% highlight java %}void init(TbContext ctx, TbNodeConfiguration configuration) throws TbNodeException;{% endhighlight %}
 
 Method to initialize rule node after its creation. It is invoked only after rule node creation or updating and takes two input parameters:
 
 - [**TbContext**](https://github.com/thingsboard/thingsboard/blob/master/rule-engine/rule-engine-api/src/main/java/org/thingsboard/rule/engine/api/TbContext.java) is an interface that gives access for rule node to majority of services, e.g for save telemetry to DB and notify over WebSockets to all subscriptions of entity data changes: 
    
   {% highlight java %}ctx.getTelemetryService().saveAndNotify(msg.getOriginator(), tsKvEntryList, ttl, new TelemetryNodeCallback(ctx, msg));{% endhighlight %}
               
 - [**TbNodeConfiguration**](https://github.com/thingsboard/thingsboard/blob/master/rule-engine/rule-engine-api/src/main/java/org/thingsboard/rule/engine/api/TbNodeConfiguration.java) is a simple class that has only one private access final field ```JsonNode data```  that processed on rule node web UI.

{% highlight java %}void onMsg(TbContext ctx, TbMsg msg) throws ExecutionException, InterruptedException, TbNodeException;{% endhighlight %}
 
 Method for processing received messages. It is invoked each time when messages arrive in the node. and also takes two input parameters:

- [**TbMsg**](https://github.com/thingsboard/thingsboard/blob/master/common/message/src/main/java/org/thingsboard/server/common/msg/TbMsg.java) is a final serialized class that gives access to fields from the message and also allows you to copy the message, convert the message to ByteBuffer and other way round.
        
   gives access to fields: 
   
     {% highlight java %}
          msg.getData();
          msg.getMetaData();
          msg.getOriginator();
          msg.getType();
          msg.getId();
          msg.getRuleNodeId();
          msg.getRuleChainId();
          msg.getClusterPartition();
          msg.getDataType();{% endhighlight %}
     
   copy message: 
    {% highlight java %}
        TbMsg copy = msg.copy(UUIDs.timeBased(), entityId, targetId, DEFAULT_CLUSTER_PARTITION);
        
        ***NOTE*** using in cluster mode. {% endhighlight %} 
 
- [**TbContext**](https://github.com/thingsboard/thingsboard/blob/master/rule-engine/rule-engine-api/src/main/java/org/thingsboard/rule/engine/api/TbContext.java) interface also has methods that route outbound messages over the chain, e.g

![image](/images/user-guide/contribution/customization/check-key-config.png)  ![image](/images/user-guide/contribution/customization/relations.png)  

true & false: 
    {% highlight java %}
        ctx.tellNext(msg, mapper.readTree(msg.getData()).has(key) ? "True" : "False");{% endhighlight %}  
          
failure:
    {% highlight java %}
        ctx.tellNext(msg, FAILURE, new Exception("Message doesn't contains the Input Key: " + key));
        
        ***NOTE*** **key** is a fild from configuration class and its translate as **Message key** in rule node web UI.{% endhighlight %}
        
Also, [**TbContext**](https://github.com/thingsboard/thingsboard/blob/master/rule-engine/rule-engine-api/src/main/java/org/thingsboard/rule/engine/api/TbContext.java) allow to create and transform message e.g:   
     {% highlight java %}ctx.newMsg(msg.getType(), msg.getOriginator(), msg.getMetaData(), "{temperature:20, humidity:30}");
     
ctx.transformMsg(origMsg, origMsg.getType(), origMsg.getOriginator(), metaData, origMsg.getData());

***NOTE*** the difference between this two methods is that newMsg() creates a new message with a new messageId while the transformMsg() simply transforms an already existing message.
{% endhighlight %}  
           
{% highlight java %}void destroy();{% endhighlight %}  

This method that invoked only after rule node stops or update and don't have input parameters.

### Build

 - Clone Rule node examples project:
  
```
git clone git@github.com:thingsboard/rule-node-examples.git
```

 - Execute the following command  from the rule-node-examples folder to build the project:
 
```
mvn clean install
``` 

 - Next, import jar-archive to your Thingsboard project as dependency library, that should be here:
 
```
./target/rule-engine-1.0.0-custom-nodes.jar
```

See separate instructions for [IDEA](https://www.jetbrains.com/help/idea/library.html#add-library-to-module-dependencies) and [Eclipse](https://help.eclipse.org/luna/index.jsp?topic=%2Forg.eclipse.jst.j2ee.doc.user%2Ftopics%2Ftjimpapp.html).

 - The last step will be start ThingsBoard server-side container. Please, refer to the following link to see how to do this: [Running server-side container](/docs/user-guide/contribution/how-to-contribute/#running-server-side-container).
 
### UI configuration

The UI for the ThingsBoard rule nodes was configured with the help of the project that is also hosted on the official [github repo](). <br>
Please, find the **README.md** file that describes how to build the project.


```bash
TODO: paste the link
```

#### Running Rule Node UI container in hot redeploy mode

To running Rule Node UI container in hot redeploy mode:

  - first you need to change constant **forwardPort** from **8080** to **3000** in file **server.js** that should be here:
  
    ```
    thingsboard-rule-config-ui/server.js
    ```
  
  - second, you need to running UI container in hot redeploy mode. Please, refer to the following link to see how to do this: [Running UI container in hot redeploy mode](/docs/user-guide/contribution/how-to-contribute/#running-ui-container-in-hot-redeploy-mode).
  
  - last step is to execute the following command from your local directory **custom-rule-node-examples-ui**
    
    ```
    npm run build 
    ```
 
## Next steps
 
 {% assign currentGuide = "Contribution" %}{% include templates/guides-banner.md %}