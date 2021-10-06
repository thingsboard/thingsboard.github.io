For simplicity, we will provision device manually using the UI.

Let's first create **DHT22 temperature sensor** and **Air Conditioner** devices on the edge and add relation between these devices. This relation will be used to find related **Air Conditioner** device once **DHT22 temperature sensor** will send critical temperature value.

We are going to provision device on the Edge. Please open ThingsBoard **Edge** UI using the URL: **http://EDGE_URL**.

{% include images-gallery.html imageCollection="provisionDevicesEdge" showListImageTitles="true" %}

Please open ThingsBoard **{{currentThingsBoardVersion}}** using the URL **http://SERVER_URL**:

{% include images-gallery.html imageCollection="provisionDevices" showListImageTitles="true" %}