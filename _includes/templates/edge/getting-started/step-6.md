To provision dashboard to edge we need to open edge dashboards on **{{currentThingsBoardVersion}}** server and assign the newly created dashboard. Once this dashboard is assigned we are going to open ThingsBoard **Edge** UI to see the same dashboard on the edge.

{% if currentThingsBoardVersion == "ThingsBoard Professional Edition" %}
If you are interested in more details how to provision different entities from the cloud to the edge please refer to the [edge management](/docs/edge/config/pe/management/) for more details.
Please open **{{currentThingsBoardVersion}}** using the URL [http://localhost:8080](http://localhost:8080) or [Cloud](https://cloud.thingsboard.io).{% endif %}
{% if currentThingsBoardVersion == "ThingsBoard Community Edition" %}
If you are interested in more details how to provision different entities from the cloud to the edge please refer to the [edge management](/docs/edge/config/ce/management/)  for more details.
Please open **{{currentThingsBoardVersion}}** using the URL [http://localhost:8080](http://localhost:8080) or [Live Demo](https://demo.thingsboard.io).{% endif %}

{% include images-gallery.html imageCollection="step6CE" showListImageTitles="true" %}

Let's open ThingsBoard **Edge** UI using the URL [http://localhost:18080](http://localhost:18080) to verify that dashboard was provisioned.

{% include images-gallery.html imageCollection="step6Edge" showListImageTitles="true" %}

Congratulations! Dashboard has been provisioned to the edge. Now you can send new telemetry reading, and it will immediately appear in the chart on the edge.
