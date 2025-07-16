* TOC
{:toc}

### Overview

**Public dashboard configuration** allows access to the dashboard without authentication, i.e., the dashboard can be viewed by anyone who has the URL link. 

In **ThingsBoard Edge**, **public dashboards** work similarly to how they do on the **ThingsBoard Server**. 

**Edge-Specific Considerations:**

* **Edge public dashboards** remain available within the local network, even if the internet is unavailable or restricted.

* **Edge public dashboards** is accessible through the Edge's **local URL link**. The public URL will typically be in the format:
```bash
http://Edge-IP:8080/dashboards/dashboard-id
```
* Even if the connection to the **ThingsBoard Server** is lost, the **public dashboard** will continue to operate using real-time device data from the **Edge**.

* **Edge** will synchronize any updates or changes with the central **ThingsBoard Server**, once connectivity is restored.

Read more about **Edge Dashboards creation and management** [here](/docs/{{docsPrefix}}user-guide/db-overview/){: target="_blank"}.

Read more about **Dashboard widgets** [here](/docs/{{peDocsPrefix}}user-guide/widgets/){: target="_blank"}.

{% if docsPrefix == "pe/edge/" %}
### Making Dashboard Group Public
{% else %}
### Making Dashboard Public
{% endif %}

{% capture local-deployment %}
To have access to the data of the devices, assets and entity views through the public link, make these entities public as well.
{% endcapture %}
{% include templates/info-banner.md content=local-deployment %}

{% if docsPrefix == "pe/edge/" %}
**Dashboard groups** are managed on the **ThingsBoard Server**. The dashboard group must first be created on the **ThingsBoard Server** and then assigned to the **ThingsBoard Edge** instance.
{% endif %}
{% include images-gallery.html imageCollection="makePublic" showListImageTitles="true" %}

{% if docsPrefix == "pe/edge/" %}
#### Making Dashboard Group Private
{% else %}
#### Making Dashboard Private
{% endif %}

{% include images-gallery.html imageCollection="makePrivate" showListImageTitles="true" %}

### Next steps

{% include templates/edge/guides-banner-edge.md %}