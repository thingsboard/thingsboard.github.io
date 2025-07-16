* TOC
{:toc}

### Overview

**ThingsBoard Edge** allows different types of automation events—**Scheduler** and **Rule Chain** events. 

The **Scheduler event** is periodic task performed automatically, such as telemetry and attribute update or RPC commands, etc.
For more details on this feature, see the [ThingBoard Platform Scheduler documentation](/docs/pe/user-guide/scheduler/){: target="_blank"} and the [Edge Scheduler documentation](/docs/pe/edge/user-guide/scheduler/){: target="_blank"}.

{% capture white-labeling-note %}
The **scheduler** feature is supported only in the **Professional Edition**.
{% endcapture %}
{% include templates/info-banner.md content=white-labeling-note %}

A **Rule Chain** allows you to perform automated tasks based on incoming data or events. 
These tasks are performed by [rule nodes](/docs/pe/user-guide/rule-engine-2-0/overview/#rule-node){: target="_blank"}, which are the building blocks of the **Rule Chain**. For example, when a device sends temperature data that reaches the threshold, the Rule Chain processes it and creates an alarm notification.
Read more about [Rule Engine](/docs/pe/user-guide/rule-engine-2-0/overview/){: target="_blank"} and [Rule Chain Templates](/docs/pe/edge/rule-engine/rule-chain-templates/){: target="_blank"} in the corresponding documentation.

#### Edge-Specific Considerations

* Prior to **Edge 4.0**, **Rule Chain templates** could not be created or modified directly on **ThingsBoard Edge**. They had to be configured in **ThingsBoard Cloud** and then synchronized with **Edge**.
* Starting with **Edge version 4.0**, you can create and edit a **Rule Chain** on the **Edge**.
* **Scheduler events** has to be configured in **ThingsBoard Cloud** and assigned to **Edge**.
* Once **Rule Chain templates** and **Scheduler events** are synchronized to **Edge** instance, they run entirely at the edge, independent of internet connection.
* Both **Scheduler events** and **Rule Chain templates** execute locally on the **Edge**.

### The Comparison Matrix 

![comparison-matrix](/images/pe/edge/user-guide/scheduler/comparison-matrix.webp){: style="display: block; margin: auto; max-width: 700px"}

### When to Use Each One?

* **Scheduler:** 
  * Time-based triggers are required;
  * A periodic or scheduled automation that is independent of device data.

* **Rule Chains:**
  * Real-time reaction to events or telemetry;
  * Complex logic, or external API calls are required;
  * Local incoming data, attribute updates, alarms, etc., processing.

### Using Both Features

To create enhanced automation logic on your Edge, use both **Scheduler events** and **Rule Chain templates**. 

![both-features-logic](/images/pe/edge/user-guide/scheduler/both-feature-logic.webp){: style="display: block; margin: auto; max-width: 750px"}

#### Use Case

To turn off devices (e.g., pumps) every night at 7 PM and alert if they’re still running 10 minutes later, configure two **Scheduler events** and modify the **Rule Chain template**.
{% include images-gallery.html imageCollection="example" showListImageTitles="true" %}

### Next steps

{% include templates/edge/guides-banner-edge.md %}
