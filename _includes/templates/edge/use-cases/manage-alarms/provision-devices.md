For simplicity, we will provision device manually using the UI.

Let's first create **DHT22 temperature sensor** and **Air Conditioner** devices on the edge and add relation between these devices. This relation will be used to find related **Air Conditioner** device once **DHT22 temperature sensor** will send critical temperature value.

We are going to provision device on the Edge. Please open ThingsBoard **Edge** UI using the URL: [http://localhost:8080](http://localhost:8080).

{% include templates/edge/bind-port-changed-banner.md %}

{% include images-gallery.html imageCollection="provisionDevicesEdge" showListImageTitles="true" %}


{% if currentThingsBoardVersion == "ThingsBoard Professional Edition" %}
Please open ThingsBoard **{{currentThingsBoardVersion}}** using the URL [Cloud](https://thingsboard.cloud) or [http://localhost:8080](http://localhost:8080):
{% endif %}
{% if currentThingsBoardVersion == "ThingsBoard Community Edition" %}
Please open ThingsBoard **{{currentThingsBoardVersion}}** using the URL [Live Demo](https://demo.thingsboard.io) or [http://localhost:8080](http://localhost:8080):
{% endif %}

{% include images-gallery.html imageCollection="provisionDevices" showListImageTitles="true" %}