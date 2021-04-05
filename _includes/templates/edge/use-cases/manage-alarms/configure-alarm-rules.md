We will use [alarm rules](/docs/user-guide/device-profiles/#alarm-rules) feature to raise alarm when temperature reading is greater than 50 °C degrees.
For this purpose, we should create new device profile and add new alarm rule. We recommend creating dedicated [device profiles](/docs/user-guide/device-profiles/) for each corresponding device type. Let's create new device profile "edge thermostat".

{% include images-gallery.html imageCollection="configureAlarmRules" showListImageTitles="true" %}

Please open ThingsBoard **Edge** UI using the URL: [http://localhost:18080](http://localhost:18080) to see provisioned device profiles.

{% include templates/edge/bind-port-changed-banner.md %}

{% include images-gallery.html imageCollection="configureAlarmRulesEdge" showListImageTitles="true" %}