* TOC
{:toc}

### Scheduler Overview

{% capture white-labeling-note %}
The **scheduler** feature is supported only in the **Professional Edition**.
{% endcapture %}
{% include templates/info-banner.md content=white-labeling-note %}

The **ThingsBoard Scheduler** is a feature that allows users to automate periodic tasks, such as telemetry and attribute updates, RPC commands, and rule chain triggers.

The **Scheduler** feature for **Edge** is designed similarly to that of the **Platform**. 
For a comprehensive understanding, please refer to the **ThingsBoard Platform** [Scheduler documentation](/docs/pe/user-guide/scheduler/){: target="_blank"}.

**Scheduler events** cannot be created or modified directly from **ThingsBoard Edge**, all scheduling must be configured in **ThingsBoard Platform** and then assigned to the **Edge** instance.
These scheduled tasks are executed directly on the **Edge** instance, ensuring real-time automation even without a cloud connection.

### Configuring the Scheduler Feature 

To create a **scheduler event**: 

{% include images-gallery.html imageCollection="createSchedulerEvent" showListImageTitles="true" %}

### Scheduled Irrigation Management Using ThingsBoard Edge (Use Case)

To illustrate the **Scheduler** feature's role in automation and management efficiency, let’s look at the [Smart Irrigation solution template](/docs/pe/solution-templates/smart-irrigation/){: target="_blank"}.

This solution enables automated irrigation based on **soil moisture sensor readings** and **predefined schedules**. 
The goal is to sustain optimal soil moisture levels while **minimizing water consumption**.

Since irrigation systems are often deployed in remote agricultural fields, the **ThingsBoard Edge** instance will run locally to ensure uninterrupted operation, even in cases of network disruptions.

The **Smart Irrigation solution template** offers a solution to:
* Ensure fields are irrigated twice a day at predefined times.
* Monitor critical parameters in real-time, such as:
  * Soil moisture levels.
  * Daily water consumption.
  * Irrigation duration.
* Operate locally on **ThingsBoard Edge** to avoid reliance on constant internet connectivity.

To install the solution template, log in to the **ThingsBoard Platform** and go to the **Solution templates** section. 
Scroll down to the **Smart Irrigation** block and click the **"Install"** button.

{% include images-gallery.html imageCollection="installTemplate" %}

#### Configuration Details

Let's take a look at the configuration details. 
Since **rule chains** and **scheduler events** cannot be created directly on the **Edge**, all configurations are first completed on the **ThingsBoard Platform** and then synchronized with the **Edge** instance.

The **Smart Irrigation solution template** automatically creates **Edge** instance and assigns all required configurations.

{% include images-gallery.html imageCollection="remoteFarmR1" showListImageTitles="true" %}

##### Scheduler

{% include images-gallery.html imageCollection="schedulerParameters" showListImageTitles="true" %}

##### Rule Chains

{% include images-gallery.html imageCollection="ruleChainParameters" showListImageTitles="true" %}

##### Visualisation

{% include images-gallery.html imageCollection="dashboard" showListImageTitles="true" %}

#### Benefits of the Scheduler
The **scheduler** feature configured in the **Smart Irrigation solution template**:
* Ensures autonomous irrigation in remote locations, independent of cloud dependency. 
* Optimizes water usage by running irrigation based on a fixed schedule. 
* Improves operational efficiency by reducing manual intervention. 
* Enhances monitoring with real-time soil moisture telemetry updates.

### Next steps

{% include templates/edge/guides-banner-edge.md %}