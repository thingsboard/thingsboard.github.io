---
layout: docwithnav
title: Rule Node Development Guide
description: Create custom Rule nodes

---

* TOC
{:toc}

## Overview

In this tutorial, you will learn how to create custom rule nodes and add them to your ThingsBoard server instance. 
We will review rule nodes of three different types: Filter, Enrichment and Transformation.  

## Prerequisites 

We assume you have completed the following guides and   reviewed the articles listed below:

  * [Getting Started](/docs/getting-started-guides/helloworld/) guide.
  * [Rule Engine Overview](/docs/user-guide/rule-engine-2-0/overview/) article.
  * [Rule Engine Architecture](/docs/user-guide/rule-engine-2-0/architecture/) article.
  
We also assume you have the following third-party installed:

  * [OpenJDK 8](https://openjdk.java.net/install/)
  * [Maven 3.6.0+](https://maven.apache.org/install.html)
  * Any modern Java IDE, although we recommend [IntelliJ IDEA](https://www.jetbrains.com/idea/download)
  * [Optional] Install [Lombok](https://projectlombok.org/) plugin to your favorite IDE.
  
## Step 1. Download and build sample project


Clone the repository and navigate to the repo folder:

```bash
git clone https://github.com/thingsboard/rule-node-examples
cd rule-node-examples
```
{: .copy-code}

By default, sample project is configured to use APIs of the ThingsBoard Community Edition. 
This makes your rule nodes compatible with both Community and Professional editions of the platform.

In case you would like to use some of the exclusive Professional Edition APIs (like working with Entity Groups, etc), 
you should change the "thingsboard.version" parameter in thingsboard.yml:

```bash
nano pom.xml
```
{: .copy-code}

For example, the property below is set to {{ site.release.pe_full_ver }} Professional Edition:

```xml
...
    <properties>
        ...
        <thingsboard.version>{{ site.release.pe_full_ver }}</thingsboard.version>
        ...
    </properties>
...
```
{: .copy-code}
     
  
Finally, build the project:

```bash
mvn clean install
```  

Expected output:

```text
...
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  1.431 s
[INFO] Finished at: 2020-08-18T11:01:40+03:00
[INFO] ------------------------------------------------------------------------
```

## Step 2. Import project to the IDE

Make sure the [Lombok](https://projectlombok.org/) plugin is installed to your favorite IDE. Import project to your favorite IDE as a Maven project.

## Step 3. Create your rule node

In order to create new rule node, you should implement the 
[TbNode](https://github.com/thingsboard/thingsboard/blob/{{ site.release.branch }}/rule-engine/rule-engine-api/src/main/java/org/thingsboard/rule/engine/api/TbNode.java) interface and annotate it with the
[RuleNode](https://github.com/thingsboard/thingsboard/blob/{{ site.release.branch }}/rule-engine/rule-engine-api/src/main/java/org/thingsboard/rule/engine/api/RuleNode.java) annotation.

As an example, you may review a very simple Rule Node that filters incoming message based on the existence of the key in the message payload. 
This rule node is part of the project you have downloaded on the previous step.  


```java
@RuleNode(
        type = ComponentType.FILTER,
        name = "check key",
        relationTypes = {"True", "False"},
        configClazz = TbKeyFilterNodeConfiguration.class,
        nodeDescription = "Checks the existence of the selected key in the message payload.",
        nodeDetails = "If the selected key exists - send Message via <b>True</b> chain, otherwise <b>False</b> chain is used.",
        uiResources = {"static/rulenode/custom-nodes-config.js"},
        configDirective = "tbFilterNodeCheckKeyConfig")
public class TbKeyFilterNode implements TbNode {

    private static final ObjectMapper mapper = new ObjectMapper();

    private TbKeyFilterNodeConfiguration config;
    private String key;


    @Override
    public void init(TbContext tbContext, TbNodeConfiguration configuration) throws TbNodeException {
        this.config = TbNodeUtils.convert(configuration, TbKeyFilterNodeConfiguration.class);
        key = config.getKey();
    }

    @Override
    public void onMsg(TbContext ctx, TbMsg msg) {
        try {
            ctx.tellNext(msg, mapper.readTree(msg.getData()).has(key) ? "True" : "False");
        } catch (IOException e) {
            ctx.tellFailure(msg, e);
        }
    }

    @Override
    public void destroy() {
    }
}
```

Few things to notice in the source code listed above:

### The @RuleNode annotation

The @RuleNode annotation defines node type, name, description, UI form and outbound [relations].

Let's walk through available parameters:

* *type* is one of the available [Rule Node Types](/docs/user-guide/rule-engine-2-0/overview/#rule-node-types). This parameter affects which section of the Rule Chain Editor will contain your Rule Node;
* *name* - any reasonable name of your rule node that will be used for Rule Chain Editor and debug messages;
* *nodeDescription* - short description of your node. Visible in the Rule Chain Editor;
* *nodeDetails* - full description of your node with html tags support. Visible in the Rule Chain Editor;
* *configClazz* - full class name of the class that describes the configuration json.  
* *relationTypes* - array of strings with pre-defined [relation types](https://thingsboard.io/docs/user-guide/rule-engine-2-0/overview/#rule-node-relation);
This values should correspond to the ones that are used in [TbContext.tellNext](https://github.com/thingsboard/thingsboard/blob/{{ site.release.branch }}/rule-engine/rule-engine-api/src/main/java/org/thingsboard/rule/engine/api/TbContext.java#L76) method;
* *customRelations* - boolean value that indicates you are going to use any custom relations in [TbContext.tellNext](https://github.com/thingsboard/thingsboard/blob/{{ site.release.branch }}/rule-engine/rule-engine-api/src/main/java/org/thingsboard/rule/engine/api/TbContext.java#L76) method;
* *configDirective* - name of the Angular based UI directive that will allow user to edit the configuration of the rule node. This is optional and may be empty. In such case, the user will see raw JSON editor;
* *uiResources* - path to your Angular UI file that contains the configuration directive. This is optional and may be empty. In such case, the user will see raw JSON editor;
* *icon* - icon name from the angular material package;
* *iconUrl* - full URL to the icon that will be used to display the rule node in the list of nodes located in the Rule Chain Editor;
* *docUrl* - link to the documentation page of the current rule node that will be available in the Rule Chain Editor. 


### Rule Node lifecycle 

The **"init"** method is called by the rule engine when the new rule node is created. 
This may happen if someone adds the rule node to the rule chain or system is stopped.
This method is mostly used to parse the configuration which is a JSON object or to obtain a local copy of [TbContext](https://github.com/thingsboard/thingsboard/blob/{{ site.release.branch }}/rule-engine/rule-engine-api/src/main/java/org/thingsboard/rule/engine/api/TbContext.java).
The "TbNodeUtils.convert" is parsing the raw configuration to the java object of a specified class.

The **"destroy"** method is called by the rule engine when the rule node is destroyed. 
This may happen if someone removes the rule node from the rule chain or system is stopped.

When the user decides to change the configuration of the existing rule node, the rule engine will call **"destroy"** and **"init"** methods sequentially.

### Processing of the incoming messages

The Rule Node implementation **must** use one of the following methods to inform the Rule Engine that the message is successfully processed:

```java

/**
 * Indicates that message was successfully processed by the rule node.
 * Sends message to all Rule Nodes in the Rule Chain
 * that are connected to the current Rule Node using "Success" relationType.
 *
 * @param msg
 */
void tellSuccess(TbMsg msg);

/**
 * Sends message to all Rule Nodes in the Rule Chain
 * that are connected to the current Rule Node using specified relationType.
 *
 * @param msg
 * @param relationType
 */
void tellNext(TbMsg msg, String relationType);

/**
 * Sends message to all Rule Nodes in the Rule Chain
 * that are connected to the current Rule Node using one of specified relationTypes.
 *
 * @param msg
 * @param relationTypes
 */
void tellNext(TbMsg msg, Set<String> relationTypes);

```

If the message processing fails, the Rule Node implementation **must** call the "tellFailure" method:

```java

/**
 * Notifies Rule Engine about failure to process current message.
 *
 * @param msg - message
 * @param th  - exception
 */
void tellFailure(TbMsg msg, Throwable th);

```

If the Rule Node implementation will not call any of the methods listed above, the Rule Engine will wait for a configurable timeout and **block** processing of the other messages 
and eventually mark current message as failed. 

### Using ThingsBoard services

The [TbContext](https://github.com/thingsboard/thingsboard/blob/{{ site.release.branch }}/rule-engine/rule-engine-api/src/main/java/org/thingsboard/rule/engine/api/TbContext.java) contains "getters" for a lot of useful services. 
Please don't forget to press "Download Sources" in your favorite IDE to simplify browsing of the interfaces of those services;
A short list of available services getters is listed below:

```java
// Allows to work with entity attributes: get and save them;
AttributesService getAttributesService();

// Allows CRUD (Create, Read, Updat, Delete) operations over the customer entities;  
CustomerService getCustomerService();

// Allows CRUD operations over users;
UserService getUserService();

// Allows CRUD operations over assets;
AssetService getAssetService();

// Allows CRUD operations over devices;
DeviceService getDeviceService();

// Allows CRUD operations over entity views;
EntityViewService getEntityViewService();

// Allows to programmatically create and manage dashboards;
DashboardService getDashboardService();

// Allows to create and clear alarms;
RuleEngineAlarmService getAlarmService();

// Allows to programmatically create and manage rule chains;
RuleChainService getRuleChainService();

// Allows to send RPC commands to devices;
RuleEngineRpcService getRpcService();

// Allows to store telemetry to the database and push notifications to the dashbaords via WebSockets;
RuleEngineTelemetryService getTelemetryService();

// Allows to find telemetry and save it to the database without notifications to the dashboards;
TimeseriesService getTimeseriesService();

// Allows to programmatically query and manage entity relations;
RelationService getRelationService();
```

ThingsBoard PE users may get access to additional services using *TbContext.getPeContext()* method. TbPeContext provides access to the following services:

```java
// Allows to programmatically create and manage integrations;
IntegrationService getIntegrationService();

// Allows to programmatically create and manage entity groups;
EntityGroupService getEntityGroupService();

// Allows to programmatically create reports;
ReportService getReportService();

// Allows to programmatically manage blob entities;
BlobEntityService getBlobEntityService();

// Allows to programmatically manage group permissions;
GroupPermissionService getGroupPermissionService();

// Allows to programmatically manage roles;
RoleService getRoleService();

// Get entity owner (TenantId or CustomerId)
EntityId getOwner(TenantId tenantId, EntityId entityId);

// Clear entity owners cache
void clearOwners(EntityId entityId);

// Get all sub-customers of the current entity
Set<EntityId> getChildOwners(TenantId tenantId, EntityId parentOwnerId);

// Allows to change entity owner. Expects TenantId or CustomerId as targetOwnerId
void changeDashboardOwner(TenantId tenantId, EntityId targetOwnerId, Dashboard dashboard) throws ThingsboardException;

void changeUserOwner(TenantId tenantId, EntityId targetOwnerId, User user) throws ThingsboardException;

void changeCustomerOwner(TenantId tenantId, EntityId targetOwnerId, Customer customer) throws ThingsboardException;

void changeEntityViewOwner(TenantId tenantId, EntityId targetOwnerId, EntityView entityView) throws ThingsboardException;

void changeAssetOwner(TenantId tenantId, EntityId targetOwnerId, Asset asset) throws ThingsboardException;

void changeDeviceOwner(TenantId tenantId, EntityId targetOwnerId, Device device) throws ThingsboardException;

void changeEntityOwner(TenantId tenantId, EntityId targetOwnerId, EntityId entityId, EntityType entityType) throws ThingsboardException;

// Allows to push custom downlink message to the integration
void pushToIntegration(IntegrationId integrationId, TbMsg tbMsg, FutureCallback<Void> callback);
```
  

### Creating new messages from the rule node

It might be necessary to create and push messages that are derived from the current message to the Rule Engine. 
For example, let's write a custom rule node that duplicates message from the current customer to all customer devices:

```java

@Override
public void onMsg(TbContext ctx, TbMsg msg) {
    EntityId msgOriginator = msg.getOriginator();
    // Checking that the message originator is a Customer;
    if (EntityType.CUSTOMER.equals(msgOriginator.getEntityType())) {
        CustomerId customerId = new CustomerId(msgOriginator.getId());
        boolean hasNext = true;
        // Creating the page link to iterate through the devices;
        PageLink pageLink = new PageLink(1024);
        while (hasNext) {
            // Using the Device Service to get devices from the database;
            PageData<Device> devices = ctx.getDeviceService().findDevicesByTenantIdAndCustomerId(ctx.getTenantId(), customerId, pageLink);
            hasNext = devices.hasNext();
            pageLink = pageLink.nextPageLink();
            for (Device device : devices.getData()) {
                // Creating new message with different originator
                TbMsg newMsg = TbMsg.newMsg(msg.getQueueName(), msg.getType(), device.getId(), msg.getMetaData(), msg.getData());
                // Pushing new message to the queue instead of tellNext to make sure that the message will be persisted;
                ctx.enqueueForTellNext(newMsg, "Success");
            }
        }
        // Don't forget to acknowledge original message or use ctx.tellSuccess(msg);
        ctx.ack(msg);
    } else {
        ctx.tellFailure(msg, new IllegalArgumentException("Msg originator is not Customer!"));
    }
}

```    

You may notice that we have used [TbContext.enqueueForTellNext](https://github.com/thingsboard/thingsboard/blob/{{ site.release.branch }}/rule-engine/rule-engine-api/src/main/java/org/thingsboard/rule/engine/api/TbContext.java#L119) method to push new message to the Rule Engine.
The message will be pushed to the related rule nodes, based on the relation type. The alternative option is to put the message to the beginning of the processing, basically to the root rule chain.

```java

void enqueue(TbMsg msg, String queueName, Runnable onSuccess, Consumer<Throwable> onFailure);

```

Also, you may use slightly different method that also allows you to receive confirmation that the new message is successfully pushed to the queue:

```java

void enqueueForTellNext(TbMsg msg, String queueName, String relationType, Runnable onSuccess, Consumer<Throwable> onFailure);

```
   

### Multithreading

The Rule Engine is an implementation of an [actor model](https://en.wikipedia.org/wiki/Actor_model) which invokes 
[TbNode.onMsg](https://github.com/thingsboard/thingsboard/blob/{{ site.release.branch }}/rule-engine/rule-engine-api/src/main/java/org/thingsboard/rule/engine/api/TbNode.java#L30) method sequentially
for every new message in the rule node mailbox. Thus, if you process the message in the same thread, your implementation is thread safe. 

However, for performance reasons, most of the API calls are executed in a separate threads. 
For example, let's review how one should save the telemetry from the incoming message:

```java

@Override
public void onMsg(TbContext ctx, TbMsg msg) {
    try {
        // Parsing the incoming message;
        ObjectNode json = (ObjectNode) mapper.readTree(msg.getData());
        // Converting temperature from °F to °C
        double temperatureF = json.get("temperature").asDouble();
        double temperatureC = (temperatureF - 32) * 5 / 9;
        // Creating the telemetry data point
        TsKvEntry tsKvEntry = new BasicTsKvEntry(System.currentTimeMillis(), new DoubleDataEntry("temperature", temperatureC));
        // Using async API call to save telemetry with the callback
        ctx.getTelemetryService().saveAndNotify(ctx.getTenantId(), msg.getOriginator(), Collections.singletonList(tsKvEntry), new FutureCallback<Void>() {
            @Override
            public void onSuccess(@Nullable Void aVoid) {
                // Telemetry is saved, now we can acknowledge the message; 
                ctx.tellSuccess(msg);
            }

            @Override
            public void onFailure(Throwable throwable) {
                // Telemetry is not saved, we need rule engine to reprocess the message;
                ctx.tellFailure(msg, throwable);
            }
        });
    } catch (JsonProcessingException e) {
        ctx.tellFailure(msg, e);
    }
}

```

You may notice that we "acknowledge" or "forward" the message via TbContext.tellSuccess in the callback thread and not in the main thread.


### Clustering mode

Single instance of the rule node is launched for each rule-engine microservice. For example, if you have three rule engine instances, each of them will launch one instance of the RuleNode.
The Rule Engine [messages](https://thingsboard.io/docs/user-guide/rule-engine-2-0/overview/#rule-engine-message) are partitioned based on the originator id of the message (device or asset id).
So, messages from one device will always go to the same rule node instance on a specific rule engine microservice. 
The only corner case is when the rule nodes are added or removed. In such a case, the "repartition" event occur.

As a rule node developer, you may override default method [TbNode.onPartitionChangeMsg](https://github.com/thingsboard/thingsboard/blob/{{ site.release.branch }}/rule-engine/rule-engine-api/src/main/java/org/thingsboard/rule/engine/api/TbNode.java#L34)
to react on the changes of cluster topology. This is useful for stateful nodes that decide to cache information based on the originator (device/asset) id of the message.
In order to determine that the current entity id belongs to current list of assigned partitions, one may use [TbContext.isLocalEntity](https://github.com/thingsboard/thingsboard/blob/{{ site.release.branch }}/rule-engine/rule-engine-api/src/main/java/org/thingsboard/rule/engine/api/TbContext.java#L152).
See complete example below:   

```java
package org.thingsboard.rule.engine.node.filter;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import lombok.extern.slf4j.Slf4j;
import org.thingsboard.rule.engine.api.EmptyNodeConfiguration;
import org.thingsboard.rule.engine.api.RuleNode;
import org.thingsboard.rule.engine.api.TbContext;
import org.thingsboard.rule.engine.api.TbNode;
import org.thingsboard.rule.engine.api.TbNodeConfiguration;
import org.thingsboard.rule.engine.api.TbNodeException;
import org.thingsboard.server.common.data.DataConstants;
import org.thingsboard.server.common.data.id.EntityId;
import org.thingsboard.server.common.data.kv.AttributeKvEntry;
import org.thingsboard.server.common.data.plugin.ComponentType;
import org.thingsboard.server.common.msg.TbMsg;
import org.thingsboard.server.common.msg.queue.PartitionChangeMsg;

import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import java.util.concurrent.ExecutionException;


@Slf4j
@RuleNode(
        type = ComponentType.FILTER,
        name = "Cache example",
        relationTypes = {"True", "False"},
        configClazz = EmptyNodeConfiguration.class,
        nodeDescription = "Checks that the incoming value exceeds certain threshold",
        nodeDetails = "If temperature is too high - send Message via <b>True</b> chain, otherwise <b>False</b> chain is used.",
        uiResources = {"static/rulenode/rulenode-core-config.js"},
        configDirective = "tbNodeEmptyConfig")
public class TbCacheExampleNode implements TbNode {

    private static final ObjectMapper mapper = new ObjectMapper();
    private ConcurrentMap<EntityId, Double> cache;

    @Override
    public void init(TbContext tbContext, TbNodeConfiguration configuration) throws TbNodeException {
        this.cache = new ConcurrentHashMap<>();
    }

    @Override
    public void onMsg(TbContext ctx, TbMsg msg) {
        try {
            // Parsing the incoming message;
            ObjectNode json = (ObjectNode) mapper.readTree(msg.getData());
            double temperature = json.get("temperature").asDouble();
            // Fetching temperatureThreshold attribute from cache or from the database
            Double temperatureThreshold = getCacheValue(ctx, msg.getOriginator(), "temperatureThreshold", 42);
            // Compare and do something with the result of comparison;
            ctx.tellNext(msg, temperature > temperatureThreshold ? "True" : "False");
        } catch (JsonProcessingException e) {
            ctx.tellFailure(msg, e);
        }
    }

    @Override
    public void onPartitionChangeMsg(TbContext ctx, PartitionChangeMsg msg) {
        // Cleanup the cache for all entities that are no longer assigned to current server partitions
        cache.entrySet().removeIf(entry -> !ctx.isLocalEntity(entry.getKey()));
    }

    private double getCacheValue(TbContext ctx, EntityId entityId, String attributeKey, double defaultValue) {
        // Get value from cache or from the database.
        return cache.computeIfAbsent(entityId, id -> {
            try {
                Optional<AttributeKvEntry> attr = ctx.getAttributesService().find(ctx.getTenantId(), entityId, DataConstants.SERVER_SCOPE, attributeKey).get();
                if (attr.isPresent()) {
                    return attr.get().getDoubleValue().orElse(defaultValue);
                } else {
                    return defaultValue;
                }
            } catch (InterruptedException | ExecutionException e) {
                throw new RuntimeException(e);
            }
        });
    }


    @Override
    public void destroy() {
        // In case you have changed the configuration, it is good idea to clear the entire cache.
        cache.clear();
    }
}

```  


## Step 4. Import custom rule nodes to your ThingsBoard instance

Once you have finished coding of the rule node, execute the build command again:

```bash
mvn clean install
```  

Then, locate the jar-file to your ThingsBoard project as dependency library. The result of the build is located here:
 
```bash
target/rule-engine-1.0.0-custom-nodes.jar
```

Now you are ready to add the jar-file with your rule nodes to your ThingsBoard instance:

* Use Step 4.1 if your ThingsBoard is installed as a service. 
* Use Step 4.2 if your ThingsBoard is built from sources and launched locally from your IDE  

  
### Step 4.1 Add JAR file to ThingsBoard installed as a service
 
 - first, you need to execute the following command to copy jar-file to ThingsBoard extensions:
   
```bash
sudo cp rule-engine-1.0.0-custom-nodes.jar /usr/share/thingsboard/extensions/
```

 - next, execute the following to change the owner to ThingsBoard:

```bash
sudo chown thingsboard:thingsboard /usr/share/thingsboard/extensions/*
```

Restart Thingsboard service:

```bash
sudo service thingsboard restart
```

**Once ThingsBoard was restarted you need to clear browser cache and refresh the web page to reload UI of Rule Nodes**
  
### Step 4.2 Add JAR file to local ThingsBoard launched using IDE

 - See separate instructions for [IDEA](https://www.jetbrains.com/help/idea/library.html#add-library-to-module-dependencies) and [Eclipse](https://help.eclipse.org/luna/index.jsp?topic=%2Forg.eclipse.jst.j2ee.doc.user%2Ftopics%2Ftjimpapp.html).
 
Restart ThingsBoard server-side container. Please, refer to the following link to see how to do this: [Running server-side container](/docs/user-guide/contribution/how-to-contribute/#running-server-side-container). 
 
**Once ThingsBoard was restarted you need to clear browser cache and refresh the web page to reload UI of Rule Nodes**
  
## Step 5. Add your custom package name to thingsboard.yml

**NOTE** if you have changed the package name from **org.thingsboard.rule.engine** to your company package name, e.g. **com.example.rule.engine**, 
you need also to add your package name in **thingsboard.yml** file in plugins section:

```yaml
# Plugins configuration parameters
plugins:
  # Comma separated package list used during classpath scanning for plugins
  scan_packages: "${PLUGINS_SCAN_PACKAGES:org.thingsboard.server.extensions,org.thingsboard.rule.engine,com.example.rule.engine}"

```  

## Step 6. Troubleshoot your rule node

The easiest way to validate your custom rule node is to create a [generator](/docs/user-guide/rule-engine-2-0/action-nodes/#generator-node) rule node 
and connect it to your custom rule node. This will generate configurable stream of incoming messages. 
Once this is done, you should enable [debug](/docs/user-guide/rule-engine-2-0/overview/#debugging) for your custom rule node to validate node output and check them for errors. 
  
## Step 7. Rule Node UI customization (optional)

The ThingsBoard rule nodes UI is configured with another project in the official [github repo](https://github.com/thingsboard/rule-node-examples-ui-ngx). Please, refer to the following [link](https://github.com/thingsboard/rule-node-examples-ui-ngx#rule-node-examples-ui-ngx) to see build instructions.

To run Rule Node UI container in hot redeploy mode:

 - first you need to change constant **ruleNodeUiforwardPort** from **8080** to **5000** in file **proxy.conf.js** that should be here:
    
```
nano ${TB_WORK_DIR}/ui-ngx/proxy.conf.js
```
    
 - second, you need to run UI container in hot redeploy mode. Please, refer to the following link to see how to do this: [Running UI container in hot redeploy mode](/docs/user-guide/contribution/how-to-contribute/#running-ui-container-in-hot-redeploy-mode).   
    
 - last step is to execute the following command from your local directory **TB_RULE_NODE_UI_WORK_DIR**:
    
    ```
    npm start
    ```

## Next steps
 
 {% assign currentGuide = "Contribution" %}{% include templates/guides-banner.md %}
