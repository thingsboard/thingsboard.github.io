In **ThingsBoard**, the **device** is the key entity that generates telemetry data, which is stored and processed for dashboards and analytics. 
**ThingsBoard** also provides a **virtual device shell** for sending telemetry on behalf of the physical device for testing purposes.

To add a new device on the **Edge**, log in to your **ThingsBoard Edge** instance at **EDGE_URL** and follow these steps:

{% include images-gallery.html imageCollection="step1" showListImageTitles="true" %}

In addition, the following may be used:
* [Bulk provisioning](/docs/{{peDocsPrefix}}user-guide/bulk-provisioning/){: target="_blank"}: Use to deploy multiple devices from a CSV file via user interface.
* [REST API](/docs/{{peDocsPrefix}}api/){: target="_blank"}: Use to add devices and other entities programmatically.

{% capture local-deployment %}
Once a device is created on the **Edge**, it will be **automatically provisioned** to the **ThingsBoard server**. To view the Edge device on the Server, visit the **SERVER_URL** and navigate to the **Entities > Devices** section.
{% endcapture %}
{% include templates/info-banner.md content=local-deployment %}
