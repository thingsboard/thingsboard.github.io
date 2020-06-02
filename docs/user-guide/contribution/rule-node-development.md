---
layout: docwithnav
title: Rule Node Development Guide
description: Create custom Rule nodes

---

* TOC
{:toc}

## Overview

In this tutorial, you will learn how to create your custom nodes, namely:

 - [**Filter node**](https://github.com/thingsboard/rule-node-examples/blob/master/src/main/java/org/thingsboard/rule/engine/node/filter/TbKeyFilterNode.java) that will check whether the **key** from telemetry data of the inbound message exists. If the selected key exists - send Message via **True** chain, otherwise **False** chain is used.
 
 ![image](/images/user-guide/contribution/customization/check-key-node.png)
 
 ![image](/images/user-guide/contribution/customization/add-check-key-node.png)
 
 - [**Enrichment node**](https://github.com/thingsboard/rule-node-examples/blob/master/src/main/java/org/thingsboard/rule/engine/node/enrichment/TbGetSumIntoMetadata.java) that will calculate Sum of the telemetry data, separately for each device, when fields begin with the specified **Input Key** and add the result into Message Metadata with **Output Key**.
 
 ![image](/images/user-guide/contribution/customization/get-sum-in-metadata-node.png)
 
 ![image](/images/user-guide/contribution/customization/add-get-sum-into-matadata-node.png)
 
 - [**Transformation node**](https://github.com/thingsboard/rule-node-examples/blob/master/src/main/java/org/thingsboard/rule/engine/node/transform/TbCalculateSumNode.java) that will calculate Sum of the telemetry data, separately for each device, when fields begin with the specified **Input Key** and add Sum to the new Message payload with **Output Key**.
 
 ![image](/images/user-guide/contribution/customization/calculate-sum-node.png)
 
 ![image](/images/user-guide/contribution/customization/add-calculate-sum-node.png)


## Prerequisites 

We assume you have completed the following guides and reviewed the articles listed below:

  * [Getting Started](/docs/getting-started-guides/helloworld/) guide.
  * [Rule Engine Overview](/docs/user-guide/rule-engine-2-0/overview/) article.
  * [Rule Engine Architecture](/docs/user-guide/rule-engine-2-0/architecture/) article.

## Customization 

In order to create new rule node, you should implement the [TbNode](https://github.com/thingsboard/thingsboard/blob/release-2.0/rule-engine/rule-engine-api/src/main/java/org/thingsboard/rule/engine/api/TbNode.java) interface:

```java
package org.thingsboard.rule.engine.api;

...

public interface TbNode {

    void init(TbContext ctx, TbNodeConfiguration configuration) throws TbNodeException;

    void onMsg(TbContext ctx, TbMsg msg) throws ExecutionException, InterruptedException, TbNodeException;

    void destroy();

}
```

and annotate your implementation with the following [multi-value annotation](https://github.com/thingsboard/thingsboard/blob/release-2.0/rule-engine/rule-engine-api/src/main/java/org/thingsboard/rule/engine/api/RuleNode.java) that refers to the runtime:

```java
org.thingsboard.rule.engine.api.RuleNode 
```

Also each rule node may have a configuration class that implement [NodeConfiguration](https://github.com/thingsboard/thingsboard/blob/release-2.0/rule-engine/rule-engine-api/src/main/java/org/thingsboard/rule/engine/api/NodeConfiguration.java) interface.

```java
package org.thingsboard.rule.engine.api;

public interface NodeConfiguration<T extends NodeConfiguration> {

    T defaultConfiguration();

}
```
- [TbKeyFilterNodeConfiguration](https://github.com/thingsboard/rule-node-examples/blob/master/src/main/java/org/thingsboard/rule/engine/node/filter/TbKeyFilterNodeConfiguration.java) class:

{% highlight java %}
    package org.thingsboard.rule.engine.node.filter;
    
    import lombok.Data;
    import org.thingsboard.rule.engine.api.NodeConfiguration;
    
    @Data
    public class TbKeyFilterNodeConfiguration implements NodeConfiguration<TbKeyFilterNodeConfiguration> {
    
        private String key;
    
        @Override
        public TbKeyFilterNodeConfiguration defaultConfiguration() {
            TbKeyFilterNodeConfiguration configuration = new TbKeyFilterNodeConfiguration();
            configuration.setKey(null);
            return configuration;
        }
    }{% endhighlight %}
    
- [TbCalculateSumNodeConfiguration](https://github.com/thingsboard/rule-node-examples/blob/master/src/main/java/org/thingsboard/rule/engine/node/transform/TbCalculateSumNodeConfiguration.java) class:
{% highlight java %}
    package org.thingsboard.rule.engine.node.transform;
    
    import lombok.Data;
    import org.thingsboard.rule.engine.api.NodeConfiguration;
    
    
    @Data
    public class TbCalculateSumNodeConfiguration implements NodeConfiguration<TbCalculateSumNodeConfiguration> {
    
        private String inputKey;
        private String outputKey;
    
        @Override
        public TbCalculateSumNodeConfiguration defaultConfiguration() {
            TbCalculateSumNodeConfiguration configuration = new TbCalculateSumNodeConfiguration();
            configuration.setInputKey("temperature");
            configuration.setOutputKey("TemperatureSum");
            return configuration;
        }
    }{% endhighlight %}    

- [TbGetSumIntoMetadataConfiguration](https://github.com/thingsboard/rule-node-examples/blob/master/src/main/java/org/thingsboard/rule/engine/node/enrichment/TbGetSumIntoMetadataConfiguration.java) class:
{% highlight java %}
    package org.thingsboard.rule.engine.node.enrichment;
    
    import lombok.Data;
    import org.thingsboard.rule.engine.api.NodeConfiguration;
    
    @Data
    public class TbGetSumIntoMetadataConfiguration implements NodeConfiguration<TbGetSumIntoMetadataConfiguration> {
    
        private String inputKey;
        private String outputKey;
    
    
        @Override
        public TbGetSumIntoMetadataConfiguration defaultConfiguration() {
            TbGetSumIntoMetadataConfiguration configuration = new TbGetSumIntoMetadataConfiguration();
            configuration.setInputKey("temperature");
            configuration.setOutputKey("TemperatureSum");
            return configuration;
        }
    }{% endhighlight %}        


Configuration classes defines in Rule node classes.

### Methods flow

In this section, we explain the purpose of each implemented method from **TbNode** interface:

#### Method init()

{% highlight java %}void init(TbContext ctx, TbNodeConfiguration configuration) throws TbNodeException;{% endhighlight %}
 
Method to initialize rule node after its creation. Body of **init** method for each above mention rule node is almost the same. We convert the incoming JSON configuration to the specific [NodeConfiguration](https://github.com/thingsboard/thingsboard/blob/release-2.0/rule-engine/rule-engine-api/src/main/java/org/thingsboard/rule/engine/api/NodeConfiguration.java) implementation.

 - [**check key**](https://github.com/thingsboard/rule-node-examples/blob/master/src/main/java/org/thingsboard/rule/engine/node/filter/TbKeyFilterNode.java) node:
 
{% highlight java %}
    private TbKeyFilterNodeConfiguration config;
    private String key;
            
    @Override
    public void init(TbContext tbContext, TbNodeConfiguration configuration) throws TbNodeException {
        this.config = TbNodeUtils.convert(configuration, TbKeyFilterNodeConfiguration.class);
        key = config.getKey();
    }{% endhighlight %}
    
 - [**calculate sum**](https://github.com/thingsboard/rule-node-examples/blob/master/src/main/java/org/thingsboard/rule/engine/node/transform/TbCalculateSumNode.java) node:
 
{% highlight java %}
    private TbCalculateSumConfiguration config;
    private String inputKey;
    private String outputKey;
    
    @Override
    public void init(TbContext ctx, TbNodeConfiguration configuration) throws TbNodeException {
        this.config = TbNodeUtils.convert(configuration, TbCalculateSumConfiguration.class);
        inputKey = config.getInputKey();
        outputKey = config.getOutputKey();
    }{% endhighlight %}    

 - [**get sum into metadata**](https://github.com/thingsboard/rule-node-examples/blob/master/src/main/java/org/thingsboard/rule/engine/node/enrichment/TbGetSumIntoMetadata.java) node:
 
{% highlight java %}
    private TbGetSumIntoMetadataConfiguration config;
    private String inputKey;
    private String outputKey;
    
    @Override
    public void init(TbContext ctx, TbNodeConfiguration configuration) throws TbNodeException {
        this.config = TbNodeUtils.convert(configuration, TbGetSumIntoMetadataConfiguration.class);
        inputKey = config.getInputKey();
        outputKey = config.getOutputKey();
    }{% endhighlight %}    
 It is invoked only after rule node creation or updating and takes two input parameters:
 
 - [**TbContext**](https://github.com/thingsboard/thingsboard/blob/release-2.0/rule-engine/rule-engine-api/src/main/java/org/thingsboard/rule/engine/api/TbContext.java) is an interface that gives access for rule node to majority of services, e.g for save telemetry to DB and notify over WebSockets to all subscriptions of entity data changes: 
    
   {% highlight java %}ctx.getTelemetryService().saveAndNotify(msg.getOriginator(), tsKvEntryList, ttl, new TelemetryNodeCallback(ctx, msg));{% endhighlight %}
               
 - [**TbNodeConfiguration**](https://github.com/thingsboard/thingsboard/blob/release-2.0/rule-engine/rule-engine-api/src/main/java/org/thingsboard/rule/engine/api/TbNodeConfiguration.java) 
    TbNodeConfiguration is a simple class that has only one field that processed on rule node web UI: {% highlight java %}private final JsonNode data;{% endhighlight %}

#### Method onMsg()

{% highlight java %}void onMsg(TbContext ctx, TbMsg msg) throws ExecutionException, InterruptedException, TbNodeException;{% endhighlight %}
 
 Method for processing received messages. It is invoked each time when messages arrive in the node. and also takes two input parameters:

- [**TbMsg**](https://github.com/thingsboard/thingsboard/blob/release-2.0/common/message/src/main/java/org/thingsboard/server/common/msg/TbMsg.java) is a final serialized class that gives access to fields from the message and also allows you to copy the message, convert the message to ByteBuffer and other way round.
        
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
 
- [**TbContext**](https://github.com/thingsboard/thingsboard/blob/release-2.0/rule-engine/rule-engine-api/src/main/java/org/thingsboard/rule/engine/api/TbContext.java) interface also has methods that route outbound messages over the chain, e.g

![image](/images/user-guide/contribution/customization/check-key-config.png)  ![image](/images/user-guide/contribution/customization/relations.png)  

true & false: 
    {% highlight java %}
        ctx.tellNext(msg, mapper.readTree(msg.getData()).has(key) ? "True" : "False");{% endhighlight %}  
          
failure:
    {% highlight java %}
        ctx.tellFailure(msg, e);
        
        ctx.tellNext(msg, FAILURE, new Exception());{% endhighlight %}
  
tellSelf and updateSelf methods:
    {% highlight java %}
        ctx.tellSelf(tickMsg, curDelay);
        
        ctx.updateSelf(ruleNode);{% endhighlight %}
        
        
{% highlight java %}***NOTE*** Method tellSelf() use in rule nodes that based on a specific delay. Method updateSelf() used on each update the rule node.{% endhighlight %}
      
        
Also, [**TbContext**](https://github.com/thingsboard/thingsboard/blob/release-2.0/rule-engine/rule-engine-api/src/main/java/org/thingsboard/rule/engine/api/TbContext.java) allow to create new message:   
     {% highlight java %}
        String data = "{temperature:20, humidity:30}"
     
        ctx.newMsg(msg.getType(), msg.getOriginator(), msg.getMetaData(), data);{% endhighlight %}
      
and transform message:     
     {% highlight java %}
     ctx.transformMsg(origMsg, origMsg.getType(), origMsg.getOriginator(), metaData, origMsg.getData());{% endhighlight %} 

{% highlight java %}
***NOTE*** The difference between these methods that:
    
       TbMsg newMsg() create a new message with a new messageId;
    
       TbMsg transformMsg() convert an already existing message;{% endhighlight %}   

#### Method destroy()
           
{% highlight java %}void destroy();{% endhighlight %}  

This method that invoked only after rule node stops or update and don't have input parameters.

### Build

 - Clone Rule node examples project:
  
```
git clone git@github.com:thingsboard/rule-node-examples.git
```

 - Execute the following command  from the rule-node-examples folder to build the project:
 
    - **Note** First you need to execute this command from your Thingsboard folder. 
 
```
mvn clean install
``` 

### Import executable jar-file to your ThingsBoard instance

Import jar-file to your Thingsboard project as dependency library, that should be here:
 
```
./target/rule-engine-1.0.0-custom-nodes.jar
```

**NOTE** if you have changed the package name from **org.thingsboard.rule.engine** to your company package name, e.g. **com.example.rule.engine**, 
you need also to add your package name in **thingsboard.yml** file in plugins section:

```yaml
# Plugins configuration parameters
plugins:
  # Comma separated package list used during classpath scanning for plugins
  scan_packages: "${PLUGINS_SCAN_PACKAGES:org.thingsboard.server.extensions,org.thingsboard.rule.engine,com.example.rule.engine}"

```

#### Thingsboard using IDE:

 - See separate instructions for [IDEA](https://www.jetbrains.com/help/idea/library.html#add-library-to-module-dependencies) and [Eclipse](https://help.eclipse.org/luna/index.jsp?topic=%2Forg.eclipse.jst.j2ee.doc.user%2Ftopics%2Ftjimpapp.html).
 
Restart ThingsBoard server-side container. Please, refer to the following link to see how to do this: [Running server-side container](/docs/user-guide/contribution/how-to-contribute/#running-server-side-container). 
 
```
**Once ThingsBoard was restarted you need to clear browser cache and refresh the web page to reload UI of Rule Nodes**
``` 
 
#### Thingsboard as a service:
 
 - first, you need to execute the following command to migrate jar-file to Thingsboard extensions:
   
```
sudo mv rule-engine-1.0.0-custom-nodes.jar /usr/share/thingsboard/extensions/
```

 - next, execute the following to change the owner to thingsboard:

```
sudo chown thingsboard:thingsboard /usr/share/thingsboard/extensions/*
```

Restart Thingsboard service:

```
sudo service thingsboard restart

**Once ThingsBoard was restarted you need to clear browser cache and refresh the web page to reload UI of Rule Nodes**
```
  
### UI configuration

The ThingsBoard rule nodes UI is configured with another project in the official [github repo](https://github.com/thingsboard/rule-node-examples-ui-ngx). Please, refer to the following [link](https://github.com/thingsboard/rule-node-examples-ui-ngx#rule-node-examples-ui-ngx) to see build instructions.

#### Running Rule Node UI container in hot redeploy mode

To run Rule Node UI container in hot redeploy mode:

 - first you need to change constant **ruleNodeUiforwardPort** from **8080** to **5000** in file **proxy.conf.js** that should be here:
    
```
cd ${TB_WORK_DIR}/ui-ngx/proxy.conf.js
```
    
 - second, you need to run UI container in hot redeploy mode. Please, refer to the following link to see how to do this: [Running UI container in hot redeploy mode](/docs/user-guide/contribution/how-to-contribute/#running-ui-container-in-hot-redeploy-mode).   
    
 - last step is to execute the following command from your local directory **TB_RULE_NODE_UI_WORK_DIR**:
    
    ```
    npm start
    ```

## Next steps
 
 {% assign currentGuide = "Contribution" %}{% include templates/guides-banner.md %}
