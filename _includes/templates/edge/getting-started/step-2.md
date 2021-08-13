Provision device from the edge to the cloud done automatically, so no additional actions required. 
Once device has been created on the edge, it's going to be automatically created on the cloud.

{% if currentThingsBoardVersion == "ThingsBoard Professional Edition" %}
To see provisioned device please open **{{currentThingsBoardVersion}}** using the URL [Cloud](https://thingsboard.cloud) or [http://localhost:8080](http://localhost:8080).{% endif %}
{% if currentThingsBoardVersion == "ThingsBoard Community Edition" %}
To see provisioned device please open **{{currentThingsBoardVersion}}** using the URL [Live Demo](https://demo.thingsboard.io) or [http://localhost:8080](http://localhost:8080) .{% endif %}

{% include images-gallery.html imageCollection="step2" showListImageTitles="true" %}