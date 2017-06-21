---
layout: docwithnav
assignees:
- vbabak
title: Extensions (Plugins and Actions) Development Guide

---

* TOC
{:toc}

#### Introduction

**Thingsboard extensions** are custom modules that provide additional functionality to the Thingsboard core components.

They could be easily developed based on your business needs.

For example, custom **extension** could be added to send messages from **Thingsboard** to any other external system once **Thingsboard** receives *telemetry* (timeseries or attributes). 
Additionally **extension** could apply some transformations to the telemetry before forwarding message.

Or **extension** could forwards the same device *telemetry* data to your *REST* microservice, microservice itself does stream analytics on this data and pushes back aggregated results to **Thingsboard** as new *telemetry* data for this device.

Here is high level design flow of **Thingsboard extensions**:

![image](/images/user-guide/contribution/extension-design.png)

#### Design

Extensions designed as an additional *components* that could be easily added to the **Thingsboard**. 

To be able to achieve this goal extensions are implemented as a separate project dependencies.

You can check the list of the extensions that are included into **Thingsboard** by default [here](https://github.com/thingsboard/thingsboard/tree/master/extensions).

**Thingsboard** scans dependency classes, and adds to the platform new extensions that are marked with predefined set of *Thingsboard Plugin and Action Annotations*.
This all done during the startup of the application. 

Adding extension as easy as annotate custom classes with special annotations, add your jar file to the classpath of the **Thingsboard** server instance and everything else will be done by **Thingsboard**. 

Approach, that we prefer to use in the [thingsboard.io](https://thingsboard.io/) and strongly advise you do the same - every new extension that is added is a new *maven* module that resides in *extensions* sub-module of the [core module of Thingsboard project](https://github.com/thingsboard/thingsboard).

This new *maven* module should be added as dependency to the *application* module dependencies.

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

And now during the start-up, **Thingsboard** will parse *classes* inside classpath, find annotated with custom *Thingsboard Plugin and Action Annotations* and add new extension to the platform.

Now extension is ready and could be used by users.

#### API details

To properly construct new extension you'll need to develop *Action* and *Plugin* functionality using predefined set of *Classes*, *Interfaces* and *Annotations*.
As well, you'll need to implement JSON descriptors for the UI forms of the *Plugin* and *Action* components.

We are going to provide details how to create new extensions to the system based on [REST API Call Extension](/docs/reference/plugins/rest/) that is already placed to the system.

*Extension* is responsible for sending HTTP requests to specific endpoints. Here is extension [code](https://github.com/thingsboard/thingsboard/tree/master/extensions/extension-rest-api-call/src/main/java/org/thingsboard/server/extensions/rest).

Developing of the extension consists of two stages:

- Implement server side classes of *Plugin* and *Action*. Classes are responsible for handling telemetry messages and doing job by connecting to other 3rd party systems, sending messages there etc.
- Add JSON descriptors that used to generate UI forms for *Plugin* and *Action* configuration.

#### Server-side classes development

Server-side development contains of two parts - *Action* and *Plugin* classes coding.

![image](/images/user-guide/contribution/action-plugin-communication.png)

##### Action guide development

*Action* is responsible for processing messages that have been sent from device (timeseries or attribute data) and converting it into *Java* object (object must implements *RuleToPluginMsg* interface) that is going to be processed by *Plugin*.
This *Java* object contains payload data that is created from the device telemetry message data (timeseries or attribute) and *Action* configuration. 
Payload contains data that is going to be send to external systems, for example message body for the email or message that is going to be sent to Kafka topic.

Here are particular samples:

- in case of **Email Extension**, *Action* will create email object
- in case of **Kafka Extenstion**, *Action* will create message object that will be published to Kafka topic
- in case of **REST API Call Extenstion**, *Action* will create object that contains information regarding REST request to specific endpoint
- etc.

To create *Action* for specific extension, you'll need to create class that implements *org.thingsboard.server.extensions.api.plugins.PluginAction* interface.

This class is the core of your *Action* and here you should implement logic where you'll create *Java* object (object that implements *RuleToPluginMsg* interface). 
And this object is going to be passed to *Plugin* for processing.

*Action* class must be annotated with *org.thingsboard.server.extensions.api.component.Action* so **Thingsboard** will correctly process this class during start-up.

In case of **REST API Call Extension** sample class is *org.thingsboard.server.extensions.rest.action.RestApiCallPluginAction*.
In this extension *Action* is responsible for creating *Java* object that contains information regarding *REST* request.

*Java* object that *Action* creates is a simple POJO Java class that holds needed information.

In case of **REST API Call Extension** sample class is *org.thingsboard.server.extensions.rest.action.RestApiCallActionPayload*.
It holds information regarding REST request - *body*, *http method*, *result code*, etc. 
This class must implements *Serializable* interface to be able to be transferred to *Plugin*.

Payload object *above* must be wrapped to a class that extends *org.thingsboard.server.extensions.api.plugins.msg.AbstractRuleToPluginMsg* class. 
Basically this is needed to pass objects between the *Plugin* and *Action* components and contains technical metadata.

To finish with *Action* implementation you'll need to add *POJO Java* class that contains configuration of the *UI Action* form.
It contains fields that are mapped to the UI form of *Action*. In this form user will provide details regarding configuration of your *Action*.

In case of **REST API Call Extension** sample class is *org.thingsboard.server.extensions.rest.action.RestApiCallPluginActionConfiguration*.
It holds information regarding template of the *REST* request, *expected result code* etc.
Please refer to the [UI development part](/docs/user-guide/contribution/extensions-development/#ui-json-descriptors-development) to get details regarding how *UI* forms are generated.


##### Plugin guide development

*Plugin* is responsible for receiving *Java* object (implements *org.thingsboard.server.extensions.api.plugins.msgRuleToPluginMsg*) that was created by *Action* and process it accordingly. 
This processing depends on your needs and could be anything:

- send emails
- send messages to external system
- send messages to Thingsboard instance
- etc.

Development of *Plugin* starts from creating class that implements *org.thingsboard.server.extensions.api.plugins.Plugin* interface.

This class is the core of your *Plugin* and here you should implement logic regarding to correctly init plugin.

It must be annotated with *org.thingsboard.server.extensions.api.component.Plugin* annotation so **Thingsboard** will correctly process this class during start-up.

In case of **REST API Call Extension** sample class is *org.thingsboard.server.extensions.rest.plugin.RestApiCallPlugin*.
In this extension *Plugin* is responsible for setting URL and headers for the REST request.

Secondly, you need to create class that implements *org.thingsboard.server.extensions.api.plugins.handlers.RuleMsgHandler* interface.

This class actually doing 'real' work - send messages to http endpoints, kafka topics, etc.

In case of **REST API Call Extension** sample class is *org.thingsboard.server.extensions.rest.plugin.RestApiCallMsgHandler*.
This class is responsible for creating *Spring REST template* and sending HTTP requests.

To finish with *Plugin* implementation you'll need to add *POJO Java* class that contains configuration of the *UI Plugin* form.
It contains fields that are mapped to the UI form of *Plugin*. In this form user will provide details regarding configuration of your *Plugin*.

In case of **REST API Call Extension** sample class is *org.thingsboard.server.extensions.rest.plugin.RestApiCallPluginConfiguration*.
It holds information regarding host of the REST endpoint, base path, authentication details, etc.
Please refer to the [UI development part](/docs/user-guide/contribution/extensions-development/#ui-json-descriptors-development) to get details regarding how *UI* forms are generated.


#### UI JSON descriptors development

*Plugin* and *Action* UI forms are auto-generated using *react-schema-form* [builder](http://networknt.github.io/react-schema-form/).
It allows to build UI forms from pre-defined JSON configuration.
JSON file contains description for the *schema* and *form* components.
*Schema* and *form* components are used to describe what type of elements are going to be on the form and how exactly they are located.

**NOTE**
*For the drop-down box with pre-defined set of options, but without multi-select feature use this [sample configuration](http://networknt.github.io/react-schema-form-rc-select/).*

For the extension you'll need to define two UI configurations - *Plugin* and *Action* JSON descriptor configurations.

#### Plugin JSON descriptor configuration

This JSON file contains schema and form definition for the *Plugin* form generation. Must be located in the *resources* folder. We'll later refer to this file as **${PLUGIN_FORM_DESCRIPTOR_JSON_FILE}**.

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


#### Action JSON descriptor configuration

This JSON file contains schema and form definition for the *Action* form generation. Must be located in the *resources* folder. We'll later refer to this file as **${ACTION_FORM_DESCRIPTOR_JSON_FILE}**.

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

Once appropriate *JSON* files are created and placed in *resources* project directory they should be set to the *Plugin* and *Action* annotations accordingly:

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

Now it's time to start **Thingsboard** and verify that **extension** works as you expected.

Here is [configuration](docs/reference/plugins/rest/) and verification of **REST API Call Extension**. 

The same steps could be applied for newly added extension, but taking into account new extension configuration and functionality. 