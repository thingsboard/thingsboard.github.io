First we will create a new device "In-vehicle monitoring system" on the edge.

Please open ThingsBoard **Edge** UI using the URL: [http://localhost:8080](http://localhost:8080).

{% include templates/edge/bind-port-changed-banner.md %}

{% include images-gallery.html imageCollection="provisionDevicesEdge" showListImageTitles="true" %}

{% if currentThingsBoardVersion == "ThingsBoard Professional Edition" %}
Please open ThingsBoard **{{currentThingsBoardVersion}}** using the URL [Cloud](https://thingsboard.cloud) or [http://localhost:8080](http://localhost:8080):
{% endif %}
{% if currentThingsBoardVersion == "ThingsBoard Community Edition" %}
Please open ThingsBoard **{{currentThingsBoardVersion}}** using the URL [Live Demo](https://demo.thingsboard.io) or [http://localhost:8080](http://localhost:8080):
{% endif %}

{% include images-gallery.html imageCollection="provisionDevices" showListImageTitles="true" %}