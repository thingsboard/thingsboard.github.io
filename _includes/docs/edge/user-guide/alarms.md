* TOC
{:toc}

## Overview

The **ThingsBoard Alarm** is an essential feature for monitoring and responding to entities events and conditions. For a comprehensive understanding of the **ThingsBoard Alarm** feature, please refer to the [Working with Alarms](/docs/{{cloudDocsPrefix}}user-guide/alarms/) documentation.

Although the **Alarm** feature for the **Edge** is designed in a similar manner to that of the **Cloud**, it includes several notable additions: 
* Alarms are processed locally on the **Edge** and focused on the immediate conditions for alarm triggering without relying on connectivity.
* The Alarm data can be pushed from the **Edge** to the **Cloud** and can also be sent back from the **Cloud** to the **Edge**. This setup enables real-time monitoring and management of alarms across different locations.
* Edge Alarms can be integrated with other local systems or software solutions for further processing, notifications, or actions.

In essence, the **ThingsBoard Edge Alarms** provide real-time, localized alarm management that can operate independently of **Cloud** connectivity.

## Create an Alarm on the Edge Instance

The **Edge Alarms** are created and configured in the same way as the **Cloud Alarms**. Therefore, it is necessary to define the **parameters and the rules** according to which the alarm is to be triggered. 

The easiest way to create an Alarm is to use the [Alarm Rules within the Device profile](/docs/{{cloudDocsPrefix}}user-guide/device-profiles/#alarm-rules). The majority of tasks can be configured with **Alarm Rules** with minimal effort.

If more complex logic is required, we suggest utilising the alternative option, namely the **["Create Alarm"](/docs/{{cloudDocsPrefix}}user-guide/rule-engine-2-0/action-nodes/#create-alarm-node)** and **["Clear Alarm"](/docs/{{cloudDocsPrefix}}user-guide/rule-engine-2-0/action-nodes/#clear-alarm-node)** rule nodes in the **[Rule Engine](/docs/{{cloudDocsPrefix}}user-guide/rule-engine-2-0/re-getting-started/)**. This is a more advanced option that requires a certain level of programming expertise. Please refer to the [corresponding example](/docs/user-guide/rule-engine-2-0/tutorials/create-clear-alarms/).

## Alarms Pushing from the Cloud to the Edge

The **ThingsBoard system** allows for pushing **Alarms** from the **Cloud** to the **Edge** in order to enhance operational efficiency and reduce reliance on **Cloud** resources.

#### Prerequisite

It is essential to determine which **Rule chain** you intend to use, as this will have a significant impact on the configuration process.

#### Guidelines

To push Alarms from the **Cloud** to the **Edge**, follow these steps:

{% include images-gallery.html imageCollection="push-to-edge" showListImageTitles="true" %}

## Alarms Pushing from the Edge to the Cloud

The ThingsBoard system also allows for pushing Alarms from the **Edge** to the **Cloud**.
{% capture local-deployment %}
**Please note!** <br>
You **cannot** create or edit the **Rule Chain** on the **Edge** itself. It must be configured as a template on the **Cloud (Server)**, and then assigned to the **Edge** instance. Only then will the actual **Rule Chain**, derived from that template, begin to function and process data from devices (entities) according to its configuration.
{% endcapture %}
{% include templates/info-banner.md content=local-deployment %}

#### Prerequisite

It is essential to determine which **Rule chain** you intend to use, as this will have a significant impact on the configuration process.

#### Guidelines

To push Alarms from the **Edge** to the **Cloud**, follow these steps:

{% include images-gallery.html imageCollection="push-to-cloud" showListImageTitles="true" %} 

## Next steps

{% include templates/edge/guides-banner-edge.md %}