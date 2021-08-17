To provision dashboard to edge we need to open edge dashboards on **{{currentThingsBoardVersion}}** server and assign the newly created dashboard. Once this dashboard is assigned we are going to open ThingsBoard **Edge** UI to see the same dashboard on the edge.

{% if currentThingsBoardVersion == "ThingsBoard Professional Edition" %}
Please open **{{currentThingsBoardVersion}}** using the URL [http://localhost:8080](http://localhost:8080).

{% include images-gallery.html imageCollection="step6PE" showListImageTitles="true" %}

{% endif %}

{% if currentThingsBoardVersion == "ThingsBoard Community Edition" %}
Please open **{{currentThingsBoardVersion}}** using the URL [Live Demo](https://demo.thingsboard.io) or [http://localhost:8080](http://localhost:8080).

{% include images-gallery.html imageCollection="step6CE" showListImageTitles="true" %}

{% endif %}

Let's open ThingsBoard **Edge** UI using the URL [http://localhost:8080](http://localhost:8080) to verify that dashboard was provisioned.

{% include images-gallery.html imageCollection="step6Edge" showListImageTitles="true" %}

Congratulations! Dashboard has been provisioned to the edge. Now you can send new telemetry reading, and it will immediately appear in the chart on the edge.
