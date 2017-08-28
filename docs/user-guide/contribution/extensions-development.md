---
layout: docwithnav
assignees:
- vbabak
title: Extensions (Plugins and Actions) Development Guide

---

* TOC
{:toc}

#### Introduction

**ThingsBoard extensions** are custom modules that provide additional functionality to the ThingsBoard core components.

They can be easily developed based on your business needs.

For example, a custom **extension** can be added to send messages from **ThingsBoard** to any other external system once **ThingsBoard** receives *telemetry* (timeseries or attributes).
Additionally, an **extension** can apply some transformations to the telemetry before forwarding a message.

Alternatively, an **extension** can forward the same device *telemetry* data to your *RESTfull* microservice. The microservice itself does the stream analytics on data and pushes the aggregated result back to **ThingsBoard** as new *telemetry* data for this device.

Here is the high level design flow of **ThingsBoard extensions**:

![image](/images/user-guide/contribution/extension-design.png)

#### Design

Extensions are designed as additional *components* that can be easily added to **ThingsBoard**.

In order to achieve this goal, extensions are implemented as separate project dependencies.

You can check the list of the extensions that are included into **ThingsBoard** by default [here](https://github.com/thingsboard/thingsboard/tree/master/extensions).

**ThingsBoard** scans the dependency classes, and adds new extensions that are marked with the predefined set of *ThingsBoard Plugin and Action Annotations* to the platform.
This is done during the application startup. 

Adding an extension is as easy as annotating custom classes with special annotations and adding your jar file to the classpath of the **ThingsBoard** server instance. Everything else will be done by **ThingsBoard**.

The Approach that we prefer to use in the [thingsboard.io](https://thingsboard.io/) and strongly advise to follow is every new extension that is added has to be a separate *maven* module that resides in *extensions* sub-module of the [core module of ThingsBoard project](https://github.com/thingsboard/thingsboard).

This new *maven* module should be added as a dependency to the *application* module dependencies.

Here is an example how *Kafka Extension* can be added as dependency to *application/pom.xml* file:

```xml
...
<dependencies>
    ...
    <dependency>
        <groupId>org.thingsboard.extensions</groupId>
        <artifactId>extension-kafka</artifactId>
        <classifier>extension</classifier>
    </dependency>
</dependencies>
...
```

During the start-up, **ThingsBoard** will parse *classes* in the classpath, find the ones that are annotated with custom *ThingsBoard Plugin and Action Annotations* and add a new extension to the platform.

The extension becomes ready and can be used by users.

#### API details

In order to properly build a new extension you'll need to develop *Action* and *Plugin* functionality using the predefined set of *Classes*, *Interfaces* and *Annotations*.
Also, you'll need to implement JSON descriptors for the UI forms of the *Plugin* and *Action* components.

We are going to provide the details on how to create new extensions to the system based on the [REST API Call Extension](/docs/reference/plugins/rest/) that is already placed in the system.

*Extension* is responsible for sending HTTP requests to specific endpoints. Here is extension [code](https://github.com/thingsboard/thingsboard/tree/master/extensions/extension-rest-api-call/src/main/java/org/thingsboard/server/extensions/rest).

Developing of the extension consists of two stages:

- Implement server side classes of *Plugin* and *Action*. Classes are responsible for handling telemetry messages and doing job by connecting to other 3rd party systems, sending messages there etc.
- Add JSON descriptors that used to generate UI forms for *Plugin* and *Action* configuration.

#### Server-side classes development

The server-side development contains two parts - *Action* and *Plugin* classes coding.

![image](/images/user-guide/contribution/action-plugin-communication.png)

##### Action Development Guide

*Action* is responsible for processing messages that have been sent from device (timeseries or attribute data) and converting it into a *Java* object (an object must implement *RuleToPluginMsg* interface) that is going to be processed by *Plugin*.
This *Java* object contains payload data that is created from the device telemetry message data (timeseries or attribute) and *Action* configuration. 
The payload contains data that is going to be sent to external systems, for example, message body for the email or message that is going to be sent to Kafka topic.

Here are particular samples:

- in case of **Email Extension**, *Action* will create email object
- in case of **Kafka Extension**, *Action* will create message object that will be published to Kafka topic
- in case of **REST API Call Extension**, *Action* will create object that contains information regarding REST request to specific endpoint
- etc.

To create *Action* for specific extension, you'll need to create class that implements *org.thingsboard.server.extensions.api.plugins.PluginAction* interface:

```java
public interface PluginAction<T> extends ConfigurableComponent<T>, RuleLifecycleComponent {
    Optional<RuleToPluginMsg<?>> convert(RuleContext ctx, ToDeviceActorMsg toDeviceActorMsg, RuleProcessingMetaData deviceMsgMd);
    Optional<ToDeviceMsg> convert(PluginToRuleMsg<?> response);
    boolean isOneWayAction();
}
```

- **convert(RuleContext ctx, ToDeviceActorMsg toDeviceActorMsg, RuleProcessingMetaData deviceMsgMd)** - builds messages that is going to be send to *Plugin*
- **convert(PluginToRuleMsg<?> response)** - converts responses from *Plugin* notifying regarding result of the *Action* call
- **isOneWayAction()** - notifies platform that action is going to wait for a it's result before return

and *org.thingsboard.server.extensions.api.rules.RuleLifecycleComponent* interface:
 
```java
public interface RuleLifecycleComponent {
    void resume();
    void suspend();
    void stop();
}
```
   
- **resume** method - provides logic that should be done once the action resumed if needed.
- **suspend** method - provides logic that should be done once the action paused if needed (closes external resources, close connections etc.).
- **stop** method - provides logic that should be done once the action stopped if needed (closes external resources, close connections etc.).

This class is the core of your *Action* and here you should implement logic where you will create a *Java* object (an object that implements *RuleToPluginMsg* interface). 
This object is going to be passed to *Plugin* for processing.

*Action* class must be annotated with *org.thingsboard.server.extensions.api.component.Action* so **ThingsBoard** will correctly process this class during start-up.

In case of **REST API Call Extension** sample class is *org.thingsboard.server.extensions.rest.action.RestApiCallPluginAction*.
In this extension *Action* is responsible for creating a *Java* object that contains information regarding the *REST* request.

A *Java* object that *Action* creates is a simple instance of a POJO Java class that holds the necessary information.

In case of **REST API Call Extension** sample class is *org.thingsboard.server.extensions.rest.action.RestApiCallActionPayload*.
It holds information regarding REST request - *body*, *http method*, *result code*, etc. 
This class must implement *Serializable* interface to be able to be transferred to *Plugin*.

Payload object *above* must be wrapped to a class that extends *org.thingsboard.server.extensions.api.plugins.msg.AbstractRuleToPluginMsg* class. 
Basically, this is needed to pass objects between the *Plugin* and *Action* components and contains technical metadata.

To finish with *Action* implementation you'll need to add *POJO Java* class that contains the configuration of the *UI Action* form.
It contains fields that are mapped to the UI form of *Action*. In this form, user will provide details regarding the configuration of your *Action*.

In case of **REST API Call Extension** sample class is *org.thingsboard.server.extensions.rest.action.RestApiCallPluginActionConfiguration*.
It holds information regarding the template of the *REST* request, *expected result code* etc.
Please refer to the [UI development part](/docs/user-guide/contribution/extensions-development/#ui-json-descriptors-development) to get details regarding how *UI* forms are generated.


##### Plugin Development Guide

A *Plugin* is responsible for receiving a *Java* object (implements *org.thingsboard.server.extensions.api.plugins.msgRuleToPluginMsg*) that was created by *Action* and process it accordingly. 
This processing depends on your needs and could be anything like:

- send emails
- send messages to an external system
- send messages to ThingsBoard instance
- etc.

Development of *Plugin* starts from creating a class that implements *org.thingsboard.server.extensions.api.plugins.Plugin* interface:

```java
public interface Plugin<T> extends ConfigurableComponent<T> {
    void process(PluginContext ctx, PluginWebsocketMsg<?> wsMsg);
    void process(PluginContext ctx, TenantId tenantId, RuleId ruleId, RuleToPluginMsg<?> msg) throws RuleException;
    void process(PluginContext ctx, PluginRestMsg msg);
    void process(PluginContext ctx, RpcMsg msg);
    void process(PluginContext ctx, FromDeviceRpcResponse msg);
    void process(PluginContext ctx, TimeoutMsg<?> msg);
    void onServerAdded(PluginContext ctx, ServerAddress server);
    void onServerRemoved(PluginContext ctx, ServerAddress server);
    void resume(PluginContext ctx);
    void suspend(PluginContext ctx);
    void stop(PluginContext ctx);
}
```

- **process(PluginContext ctx, PluginWebsocketMsg<?> wsMsg)** method - processes messages from the web-sockets. 
For example, a plugin is able to process telemetry web-socket messages and do some actions once they arrive.  
- **process(PluginContext ctx, TenantId tenantId, RuleId ruleId, RuleToPluginMsg<?> msg) throws RuleException** method - processes messages that are triggered by rules.
- **process(PluginContext ctx, PluginRestMsg msg)** method - processes messages from REST endpoints. 
For example, a plugin is able to process telemetry or RPC REST messages and do some actions once they arrive. 
- **process(PluginContext ctx, RpcMsg msg)** method - processes messages from RPC calls from other cluster instances. 
For example, plugin is able to process telemetry RPC messages from other cluster instances and do some actions once they arrived.
- **process(PluginContext ctx, FromDeviceRpcResponse msg)** method - processes messages from RPC device responses.
- **process(PluginContext ctx, TimeoutMsg<?> msg)** method - processes timeout messages once RPC request to device is hanging more than expected.
- **onServerAdded** method - provides logic that should be executed once new ThingsBoard instance added to the cluster.
- **onServerRemoved** method - provides logic that should be executed once new ThingsBoard instance removed from the cluster.
- **resume** method - provides logic that should be executed once plugin resumed, if needed (re-inits external connections, clean sessions etc.).
- **suspend** method - provides logic that should be executed once plugin suspended, if needed (closes external connections, resources etc.).
- **stop** method - provides logic that should be executed once plugin stopped, if needed (closes external connections, resources etc.).


This class is the core of your *Plugin* and here you should implement the logic in order to init the plugin correctly.

It must be annotated with *org.thingsboard.server.extensions.api.component.Plugin* annotation so **ThingsBoard** will correctly process this class during start-up.

In case of **REST API Call Extension** sample class is *org.thingsboard.server.extensions.rest.plugin.RestApiCallPlugin*.
In this extension *Plugin* is responsible for setting URL and headers for the REST request.

Alos, you need to create class that implements *org.thingsboard.server.extensions.api.plugins.handlers.RuleMsgHandler* interface.

This class is actually doing 'real' work - send messages to HTTP endpoints, Kafka topics, etc.

In case of **REST API Call Extension** the sample class is *org.thingsboard.server.extensions.rest.plugin.RestApiCallMsgHandler*.
This class is responsible for creating *Spring REST template* and sending HTTP requests.

To finish with *Plugin* implementation you'll need to add a *POJO Java* class that contains the configuration of the *UI Plugin* form.
It contains fields that are mapped to the UI form of *Plugin*. In this form, user will provide details regarding the configuration of your *Plugin*.

In case of **REST API Call Extension** sample class is *org.thingsboard.server.extensions.rest.plugin.RestApiCallPluginConfiguration*.
It holds information regarding the host of the REST endpoint, base path, authentication details, etc.
Please refer to the [UI development part](/docs/user-guide/contribution/extensions-development/#ui-json-descriptors-development) to get details regarding how *UI* forms are generated.


#### UI JSON descriptors development

*Plugin* and *Action* UI forms are auto-generated using *react-schema-form* [builder](http://networknt.github.io/react-schema-form/).
It allows building UI forms from pre-defined JSON configuration.
JSON file contains description for the *schema* and *form* components.
*Schema* and *form* components are used to describe what types of elements will be on the form and how are they located.

**NOTE**
*For the drop-down box with predefined set of options, but without multi-select feature use this [sample configuration](http://networknt.github.io/react-schema-form-rc-select/).*

For the extension you'll need to define two UI configurations - *Plugin* and *Action* JSON descriptor configurations.

#### Plugin JSON descriptor configuration

This JSON file contains schema and form definition for the *Plugin* form generation. It must be located in the *resources* folder. This file will be later refernced as **${PLUGIN_FORM_DESCRIPTOR_JSON_FILE}**.

Here is a sample: 

```xml
{
  "schema": {
    "title": "REST API Call Plugin Configuration",
    "type": "object",
    "properties": {
      "host": {
        "title": "Host",
        "type": "string"
      },
      "port": {
        "title": "Port",
        "type": "integer",
        "default": 8080,
        "minimum": 0,
        "maximum": 65536
      },
      "basePath": {
        "title": "Base Path",
        "type": "string",
        "default": "/"
      },
      "authMethod": {
        "title": "Authentication method",
        "type": "string"
      },
      "userName": {
        "title": "Username",
        "type": "string"
      },
      "password": {
        "title": "Password",
        "type": "string"
      },
      "headers": {
        "title": "Request Headers",
        "type": "array",
        "items": {
          "title": "Request Header",
          "type": "object",
          "properties": {
            "key": {
              "title": "Key",
              "type": "string"
            },
            "value": {
              "title": "Value",
              "type": "string"
            }
          }
        }
      }
    },
    "required": [
      "host",
      "port",
      "basePath",
      "authMethod"
    ]
  },
  "form": [
    "host",
    "port",
    "basePath",
    {
      "key": "authMethod",
      "type": "rc-select",
      "multiple": false,
      "items": [
        {
          "value": "NO_AUTH",
          "label": "No authentication"
        },
        {
          "value": "BASIC_AUTH",
          "label": "Basic authentication"
        }
      ]
    },
    "userName",
    {
      "key": "password",
      "type": "password"
    },
    "headers"
  ]
}
```


#### JSON Action Descriptor Configuration

This JSON file contains schema and form definition for the *Action* form generation. It has to be located in the *resources* folder. This file will be refernced later as **${ACTION_FORM_DESCRIPTOR_JSON_FILE}**.

Here is a sample: 

```xml
{
  "schema": {
    "title": "REST API Call Action Configuration",
    "type": "object",
    "properties": {
      "sync": {
        "title": "Requires delivery confirmation",
        "type": "boolean"
      },
      "template": {
        "title": "Body Template",
        "type": "string"
      },
      "actionPath": {
        "title": "Action Path",
        "type": "string",
        "default": "/"
      },
      "requestMethod": {
        "title": "Request method",
        "type": "string"
      },
      "expectedResultCode": {
        "title": "Expected Result Code",
        "type": "integer"
      }
    },
    "required": [
      "sync",
      "template",
      "actionPath",
      "expectedResultCode",
      "requestMethod"
    ]
  },
  "form": [
    "sync",
    {
      "key": "template",
      "type": "textarea",
      "rows": 5
    },
    "actionPath",
    {
      "key": "requestMethod",
      "type": "rc-select",
      "multiple": false,
      "items": [
        {
          "value": "POST",
          "label": "POST"
        },
        {
          "value": "PUT",
          "label": "PUT"
        }
      ]
    },
    "expectedResultCode"
  ]
}
```

Here is sample of the **REST API Call Extension** *Plugin* and *Action* form configuration files location:

![image](/images/user-guide/contribution/plugin-action-json-location.png)

Once the *JSON* files are created and placed in the *resources* directory, the *Plugin* and *Action* annotations have to be set with the corresponding JSON file names:

```java
@Plugin(name = "${PLUGIN_NAME}", actions = {"${ACTION_CLASS_NAME}".class},
        descriptor = "${PLUGIN_FORM_DESCRIPTOR_JSON_FILE}", configuration = "${PLUGIN_CONFIGURATION_CLASS_NAME}".class)
```

```java
@Action(name = "${ACTION_NAME}",
        descriptor = "${ACTION_FORM_DESCRIPTOR_JSON_FILE}", configuration =  "${ACTION_CONFIGURATION_CLASS_NAME}".class)
```

Sample for **REST API Call Extension**:

```java
@Plugin(name = "REST API Call Plugin", actions = {RestApiCallPluginAction.class},
        descriptor = "RestApiCallPluginDescriptor.json", configuration = RestApiCallPluginConfiguration.class)
@Slf4j
public class RestApiCallPlugin extends AbstractPlugin<RestApiCallPluginConfiguration> {
```
    
```java
@Action(name = "REST API Call Plugin Action",
        descriptor = "RestApiCallActionDescriptor.json", configuration = RestApiCallPluginActionConfiguration.class)
@Slf4j
public class RestApiCallPluginAction extends AbstractTemplatePluginAction<RestApiCallPluginActionConfiguration> {
```

#### Extension testing and verification

Now it's time to start **ThingsBoard** and verify that **extension** works as you expected.

Here is [configuration](/docs/reference/plugins/rest/) and verification of **REST API Call Extension**. 

The same steps could be applied for the newly added extension, but taking into account new extension configuration and functionality. 