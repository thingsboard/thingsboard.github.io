* TOC
{:toc}

## Overview

The **Edge Dashboards** are robust and effective tools for local monitoring and management of IoT data. They can function and display data in real time, even when there is no connection to the Cloud. The data can be synchronized with the server when the connection is restored.

The **Edge Dashboards** are designed in the same way as the [Platform (Cloud) Dashboards](/docs/{{cloudDocsPrefix}}user-guide/dashboards/){: target="_blank"}. Please read the Platform Dashboard documentation for a general understanding of its functionality.

## Dashboard Provision to ThingsBoard Edge

The dashboards can be created and managed on the **ThingsBoard server**, and then [provisioned](/docs/{{docsPrefix}}getting-started/#step-5-provision-dashboard-to-thingsboard-edge){: target="_blank"} to the **Edge instance**. This approach enables the simultaneous deployment of changes to all Edge instances.

You can verify that the Dashboard is provisioned: 

{% include images-gallery.html imageCollection="dashboard-provision" showListImageTitles="true" %}

## The Edge Dashboard Creation And Management

You can also create and manage **Dashboards** right from the **Edge** itself. All changes are automatically propagated to the Platform when connected. 

To **create** the Edge Dashboard on your **ThingsBoard Edge** instance, do the following:

{% include images-gallery.html imageCollection="create-dashboard" showListImageTitles="true" %}
You can learn about **Widgets** [here](/docs/{{cloudDocsPrefix}}user-guide/widgets/){: target="_blank"}.

Read more about the **Dashboard toolbar** [here](/docs/{{cloudDocsPrefix}}user-guide/dashboards/#dashboard-toolbar){: target="_blank"}.

To verify that the changes are successfully propagated: 

{% include images-gallery.html imageCollection="changes-from-edge-to-server" showListImageTitles="true" %}

If you have multiple instances of **ThingsBoard Edge**, you can delete the Dashboard on one of them *without affecting* it on the other instances. To delete the **Dashboard** from all **ThingsBoard Edge** instances *at once*, delete it from your ThingsBoard platform.

### Assign/Remove Customers

Before you assign customers to the Dashboard, make sure that you have assigned them to the **ThingsBoard Edge** instance first. You can read more about Customers [here](/docs/{{cloudDocsPrefix}}user-guide/ui/customers/){: target="_blank"}.

To **assign/unassign** customers to the **Edge Dashboard**, do the following:

{% include images-gallery.html imageCollection="assign-customer" showListImageTitles="true" %}

## Next Steps

{% include templates/edge/guides-banner-edge.md %}