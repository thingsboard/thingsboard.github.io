{% if page.hasIntegrationDeviceConfiguration | downcase == "true"%}
{% assign articleFilename = page.name |  replace: ".md", "" %}
{% assign guideFilePath = "/docs/devices-library/blocks/integration-devices-configuration/" | append: articleFilename | append: "-thethingsstack-block.md" %}

{% include {{ guideFilePath }} %}

{% endif %}

THE THINGS STACK

### Create uplink converter

### Create integration