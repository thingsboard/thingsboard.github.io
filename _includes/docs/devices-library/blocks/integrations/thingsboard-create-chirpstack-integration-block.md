{% if page.hasIntegrationDeviceConfiguration | downcase == "true"%}
{% assign articleFilename = page.name |  replace: ".md", "" %}
{% assign guideFilePath = "/docs/devices-library/blocks/integration-devices-configuration/" | append: articleFilename | append: "-chirpstack-block.md" %}

{% include {{ guideFilePath }} %}

{% endif %}

CHIRPSTACK

### Create uplink converter

### Create integration