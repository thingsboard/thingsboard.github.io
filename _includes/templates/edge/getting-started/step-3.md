To process data on site, and communicate with local and cloud-side services, the **Edge Rule Chain Template** is used.  
In essence, the **Edge Root Rule Chain** refers to the **Rule Chain** within the **ThingsBoard Edge** that processes incoming data and can trigger specific actions based on certain conditions.

To understand how the telemetry data is transmitted from the **Edge** to the **Cloud**, let's review the default **Edge Root Rule Chain**:

{% include images-gallery.html imageCollection="step3" showListImageTitles="true" %}

{% capture local-deployment %}
To edit the **Edge Rule Chain Template** or create a new one, log in to your **ThingsBoard Server** instance at **SERVER_URL** and navigate to the **Edge management > Rule chain templates** section and follow [these instructions](/docs/{{docsPrefix}}rule-engine/rule-chain-templates/){: target="_blank"}.
{% endcapture %}
{% include templates/info-banner.md content=local-deployment %}
