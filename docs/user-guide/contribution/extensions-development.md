---
layout: docwithnav
assignees:
- vbabak
title: Extensions (Plugins and Actions) Development Guide

---

* TOC
{:toc}

#### Introduction

**Thingsboard extensions** are additional modules that could be developed and fitted to the platform to provide new functionality required by your needs.
As an example, you can easily add your custom **extension** that could send messages from **Thingsboard** to any other external system, additionally applying your specific business logic calculations before send.
Or you can add **extension** that do specific stream analytics on device *telemetry* stream data and pushes result back to **Thingsboard** instance.

Here is high level design flow of **Thingsboard extensions**:

![image](/images/user-guide/contribution/extension-design.png)

#### Maven module

Custom extensions are separate *maven* modules in **Thingsboard** [github repository](https://github.com/thingsboard/thingsboard/tree/master/extensions).
New *maven* module must be created inside *extensions* module to add new extension.
Then this new *maven* module should be added as dependency to the *application* module dependencies.

*** TODO - ADD DETAILS REGARDING WHERE INCLUDE THIS  ***

During the start-up **Thingsboard** parses *classes* inside classpath, finds annotated with custom *Thingsboard Plugin and Action Annotations* and adds new extension to the platform.

Once it's done you are able to use your custom extension as any other extension in the system.

#### API

To properly construct new extension you'll need to develop **Action** and **Plugin** functionality using predefined set of *Classes*, *Interfaces* and *Annotations*.
As well, you'll need to provide JSON descriptor for the UI forms of the **Plugin** and **Action**.

We'll provide details how to create new extensions to the system using as a reference [REST API Call Extension](/docs/reference/plugins/rest/) that is already placed to the system.

Plugin is responsible for sending HTTP requests to specific endpoints and code for this plugin is located [here](https://github.com/thingsboard/thingsboard/tree/master/extensions/extension-rest-api-call/src/main/java/org/thingsboard/server/extensions/rest).

#### Server-side development

Server-side development contains of two parts - **Action** and **Plugin** coding.

![image](/images/user-guide/contribution/action-plugin-communication.png)

##### Action guide development

Action is responsible for processing messages that have been delivered from the devices (telemetry or attribute data) and converting it into **RuleToPluginMsg** object that is going to be processed by **Plugin**.
Here are particular samples:

    - in case of Email extension, action will create email object
    - in case of Kafka extenstion, action will create message object that will be published to Kafka topic
    - in case of REST API Call extenstion, action will create object that contains information reqarding REST request to specific endpoint
    - etc.

First, you'll need to create class that implements **org.thingsboard.server.extensions.api.plugins.PluginAction** interface.

This class is the core of your **Action** and here you should implement logic where you'll create object that is going to be passed to **Plugin** for processing.

It must be annotated with **org.thingsboard.server.extensions.api.component.Action** so **Thingsboard** will correctly process this class during start-up.

In case of **REST API Call** extension sample class is **org.thingsboard.server.extensions.rest.action.RestApiCallPluginAction**.
In this extension **Action** is responsible for creating object that contains information regarding REST request - body, http method, result code, etc.

Object that **Action** creates is a simple POJO class that holds needed information.

In case of **REST API Call** extension sample class is **org.thingsboard.server.extensions.rest.action.RestApiCallActionPayload**.
It holds information regarding REST request. This class must implements **Serializable** interface to be able to be received by **Plugin**.

*** TODO - ADD WHAT IS RestApiCallActionMsg ***

To finish with **Action** implementation you'll need to add POJO class that contains configuration of the *UI Action* form.
It basically contains fields that are mapped to the UI form of **Action**. In this form user will provide details regarding configuration of your **Action**.

In case of **REST API Call** extension sample class is **org.thingsboard.server.extensions.rest.action.RestApiCallPluginActionConfiguration**.
It holds information regarding template of the REST request, expected result code etc.
Please refer to the [UI development part](/docs/user-guide/contribution/extensions-development/#ui-development) to get details regarding how *UI* forms are generated.


##### Plugin guide development

Plugin is responsible for receiving **RuleToPluginMsg** object that was created by **Action** and process it accordingly. This processing depends on your needs and could be anything:

    - send emails
    - send messages to external system
    - send messages to Thingsboard instance
    - etc.

First, you'll need to create class that implements **org.thingsboard.server.extensions.api.plugins.Plugin** interface.

This class is the core of your **Plugin** and here you should implement logic regarding to correctly init plugin.

It must be annotated with **org.thingsboard.server.extensions.api.component.Plugin** so **Thingsboard** will correctly process this class during start-up.

In case of **REST API Call** extension sample class is **org.thingsboard.server.extensions.rest.plugin.RestApiCallPlugin**.
In this extension **Plugin** is responsible for setting URL and headers for the REST request.

Secondly, you need to add class that implements **org.thingsboard.server.extensions.api.plugins.handlers.RuleMsgHandler** interface.

This class actually doing 'real' work - send messages to http endpoints, kafka topics, etc.

In case of **REST API Call** extension sample class is **org.thingsboard.server.extensions.rest.plugin.RestApiCallMsgHandler**.
This message handler is responsible for creating **Spring REST template** and sending HTTP request.

To finish with **Plugin** implementation you'll need to add POJO class that contains configuration of the *UI Plugin* form.
It basically contains fields that are mapped to the UI form of **Plugin**. In this form user will provide details regarding configuration of your **Plugin**.

In case of **REST API Call** extension sample class is **org.thingsboard.server.extensions.rest.plugin.RestApiCallPluginConfiguration**.
It holds information regarding host of the REST endpoint, base path, authentication details, etc.
Please refer to the [UI development part](/docs/user-guide/contribution/extensions-development/#ui-development) to get details regarding how *UI* forms are generated.


#### UI development

**Plugin** and **Action** UI forms are auto-generated using *react-schema-form* [builder](http://networknt.github.io/react-schema-form/).
It allows to build UI forms from pre-defined JSON configuration.
JSON file contains description for the *schema* and *form* components.
*Schema* and *form* components are used to describe what type of elements are going to be on the form and how exactly they are located.

**NOTE**
*For the drop-down box with pre-defined set of options, but without multi-select feature use this [sample configuration](http://networknt.github.io/react-schema-form-rc-select/).*

For the extension you'll need to define two UI configurations - **Plugin** and **Action** JSON configurations.

#### Plugin JSON configuration

This JSON file contains schema and form definition for the **Plugin** form generation. Must be located in the *resources* folder. We'll later refer to this file as **${PLUGIN_FORM_DESCRIPTOR_JSON_FILE}**.

#### Action JSON configuration

This JSON file contains schema and form definition for the **Action** form generation. Must be located in the *resources* folder. We'll later refer to this file as **${ACTION_FORM_DESCRIPTOR_JSON_FILE}**.

Here is sample of the **REST API Call** Plugin and Action form configuration files:

![image](/images/user-guide/contribution/plugin-action-json-location.png)

Once appropriate *JSON* files are created and placed in *resources* project directory they should be provided to the **Plugin** and **Action** annotations accordingly:

```java
@Plugin(name = "${PLUGIN_NAME}", actions = {"${ACTION_CLASS_NAME}".class},
        descriptor = "${PLUGIN_FORM_DESCRIPTOR_JSON_FILE}", configuration = "${PLUGIN_CONFIGURATION_CLASS_NAME}".class)
```

```java
@Action(name = "${ACTION_NAME}",
        descriptor = "${ACTION_FORM_DESCRIPTOR_JSON_FILE}", configuration =  "${ACTION_CONFIGURATION_CLASS_NAME}".class)
```

#### Extension testing and verification

Now it's time to start **Thingsboard** and verify that your **Extension** works as you expected.