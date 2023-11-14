To provision dashboard to edge we need to open edge dashboards on **{{currentThingsBoardVersion}}** server and assign the newly created dashboard. 
Once this dashboard is assigned we are going to open ThingsBoard **Edge** UI to see the same dashboard on the edge.

Please open **{{currentThingsBoardVersion}}** using the URL **SERVER_URL**.

{% if currentThingsBoardVersion == "ThingsBoard Professional Edition" %}
{% include images-gallery.html imageCollection="step5PE" showListImageTitles="true" %}{% endif %}
{% if currentThingsBoardVersion == "ThingsBoard Community Edition" %}
{% include images-gallery.html imageCollection="step5CE" showListImageTitles="true" %}{% endif %}

Let's open ThingsBoard **Edge** UI using the URL **EDGE_URL** to verify that dashboard was provisioned.

{% include images-gallery.html imageCollection="step5Edge" showListImageTitles="true" %}

Congratulations! Dashboard has been provisioned to the edge. Now you can send new telemetry reading, and it will immediately appear in the chart on the edge.
