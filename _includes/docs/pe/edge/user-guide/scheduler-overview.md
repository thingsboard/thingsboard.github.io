* TOC
{:toc}

### Overview

{% capture white-labeling-note %}
The **scheduler** feature is supported only in the **Professional Edition**.
{% endcapture %}
{% include templates/info-banner.md content=white-labeling-note %}

In **ThingsBoard**, the **scheduler** is a feature that allows users to automate tasks such as telemetry and attribute updates, RPC commands, and rule chain triggers.

For a comprehensive understanding of the **scheduler** feature, please refer to the **ThingsBoard Platform** [Scheduler documentation](/docs/pe/user-guide/scheduler/){: target="_blank"}.

Other documentation that may also be helpful:
* [Rule Engine](/docs/pe/user-guide/rule-engine-2-0/re-getting-started/){: target="_blank"}
* [Rule Engine Message](/docs/pe/user-guide/rule-engine-2-0/overview/#rule-engine-message){: target="_blank"}
* [Root Rule Chain](/docs/pe/user-guide/rule-engine-2-0/overview/#rule-chain){: target="_blank"}

### Configuring the Scheduler Feature 

**Scheduler events** cannot be created or modified directly from **ThingsBoard Edge**, all scheduling must be configured in **ThingsBoard Platform** and then synchronized with the **Edge** instance. 

To create a scheduler event: 

{% include images-gallery.html imageCollection="createSchedulerEvent" showListImageTitles="true" %}

### Next steps

{% include templates/edge/guides-banner-edge.md %}