* TOC
{:toc}

## Overview

The **ThingsBoard Alarm** is an essential feature for monitoring and responding to entity events and conditions. 
For a comprehensive understanding of the **ThingsBoard Alarm** feature, please refer to the [Working with Alarms](/docs/{{cloudDocsPrefix}}user-guide/alarms/){: target="_blank"} documentation.

Although the **Alarm** feature for the **Edge** is designed similarly to that of the **Cloud**, it includes several notable additions: 
* Alarms are processed locally on the **Edge** and focused on the immediate conditions for alarm triggering without relying on connectivity.
* The Alarm data can be pushed from the **Edge** to the **Cloud** and can also be sent back from the **Cloud** to the **Edge**. This setup enables real-time monitoring and management of alarms across different locations.
* Edge Alarms can be integrated with other local systems or software solutions for further processing, notifications, or actions.

In essence, the **ThingsBoard Edge Alarms** provide real-time, localized alarm management that can operate independently of **Cloud** connectivity.

## Create an Alarm on the Edge Instance

The **Edge Alarms** are created and configured in the same way as the **Cloud Alarms**. Therefore, it is necessary to define the **parameters and the rules** according to which the alarm is to be triggered. 

The easiest way to create an Alarm is to use the [Alarm Rules within the Device profile](/docs/{{cloudDocsPrefix}}user-guide/device-profiles/#alarm-rules){: target="_blank"}. The majority of tasks can be configured with **Alarm Rules** with minimal effort.

If more complex logic is required, we suggest using the alternative option, namely the ["Create Alarm"](/docs/user-guide/rule-engine-2-0/nodes/action/create-alarm/){:target="_blank"} and ["Clear Alarm"](/docs/user-guide/rule-engine-2-0/nodes/action/clear-alarm/){: target="_blank"} rule nodes in the [Rule Engine](/docs/{{cloudDocsPrefix}}user-guide/rule-engine-2-0/re-getting-started/){: target="_blank"}. This is a more advanced option that requires a certain level of programming expertise. Please refer to the [corresponding example](/docs/user-guide/rule-engine-2-0/tutorials/create-clear-alarms/){: target="_blank"}.

## Alarms Pushing from the Cloud to the Edge

The **ThingsBoard system** allows for pushing **Alarms** from the **Cloud** to the **Edge** to enhance operational efficiency and reduce reliance on **Cloud** resources.

{% capture prerequisite %}
Determine the **Rule Chain** you intend to use in advance, as this will have a significant impact on the configuration process.
{% endcapture %}
{% include templates/info-banner.md content=prerequisite %}

### Guidelines

To push Alarms from the **Cloud** to the **Edge**, follow these steps:

{% include images-gallery.html imageCollection="push-to-edge" showListImageTitles="true" %}

## Alarms Pushing from the Edge to the Cloud

**ThingsBoard** also allows for pushing alarms from the **Edge** to the **Cloud**.
{% capture local-deployment %}
**Please note!** <br>
If you use **earlier versions** of Edge, you **cannot** create or edit a **Rule Chain** on the **Edge** itself. It must be configured as a template in the **Cloud (Server)**, and then assigned to the **Edge** instance. 

Starting with **Edge version 4.0**, you can create and edit a **Rule Chain** on the **Edge**.
{% endcapture %}
{% include templates/info-banner.md content=local-deployment %}

### Guidelines

To push Alarms from the **Edge** to the **Cloud**, follow these steps:

{% include images-gallery.html imageCollection="push-to-cloud" showListImageTitles="true" %} 

## Next steps

{% include templates/edge/guides-banner-edge.md %}
