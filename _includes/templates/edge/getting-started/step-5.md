To provision dashboard to Edge we need to open Edge dashboards on **{{currentThingsBoardVersion}}** Server and assign the newly created dashboard. 
Once this dashboard is assigned we are going to open ThingsBoard **Edge** UI to see the same dashboard on the Edge.

Please open **{{currentThingsBoardVersion}}** using the URL **SERVER_URL**.

{% include images-gallery.html imageCollection="step5Server" showListImageTitles="true" %}

Now, open ThingsBoard **Edge** UI using the URL **EDGE_URL** to verify that dashboard was provisioned.

{% include images-gallery.html imageCollection="step5Edge" showListImageTitles="true" %}

Congratulations! Dashboard has been provisioned to the Edge. Now you can send new telemetry reading, and it will immediately appear in the chart on the Edge.