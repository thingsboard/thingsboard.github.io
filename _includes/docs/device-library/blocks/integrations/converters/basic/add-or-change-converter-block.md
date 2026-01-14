{% assign integrationType = include.integration-type %}
{% assign integrationTypeCorrectName = include.integration-type-correct-name %}

{% if integrationType == "thethingsstack" %}
{% assign integrationTypeForLink = "TTN" %}
{% elsif integrationType == "thethingsindustries" %}
{% assign integrationTypeForLink = "TTI" %}
{% elsif integrationType == "loriot" %}
{% assign integrationTypeForLink = "LORIOT" %}
{% elsif integrationType == "chirpstack" %}
{% assign integrationTypeForLink = "CHIRPSTACK" %}
{% else %}
{% assign integrationTypeForLink = integrationType | upcase %}
{% endif %}

{% assign converterFilePath = "/docs/device-library/blocks/integrations/converters/basic/" | append: integrationType | append: "-uplink-converter.js" %}
{% assign uplinkConverterLink = "https://raw.githubusercontent.com/thingsboard/data-converters/refs/heads/release/latest/VENDORS/" | append: page.vendor | append: "/" | append: page.model | append: "/" | append: integrationTypeForLink | append: "/uplink/converter.json" %}

### Uplink converter in ThingsBoard integration

{% if page.converters20 %}

<b>Step 1: Download the JSON file</b>

Download the JSON file with the uplink converter settings by clicking the button below.

[Download uplink converter for {{ integrationTypeCorrectName }} integration.]({{ uplinkConverterLink }}){: target="_blank" download="converter.json" .button }

{% include /docs/device-library/blocks/integrations/converters/basic/import-uplink-converter-for-integration-type.md integration-type=integrationType integration-type-correct-name=integrationTypeCorrectName %}

{% else %}

Such as we have already connected gateway and configured integration - we will need to modify the converter and add an ability to parse incoming payload from the device.

To do this you can add code to "*Decoding block*", it locates between comments "*// --- Decoding code --- //*" in your converter, if you are using the default converters (for ThingsBoard v3.5.2 or above).


{% capture customDecodingCodeCapture %}
{% assign customDecodingCodeFilePath = "/docs/device-library/blocks/integrations/converters/custom-decoding/" | append: page.name | replace: ".md", ".js" %}
{% include {{ customDecodingCodeFilePath }} %}
{% endcapture %}

{% capture customDecodingCodeBlock %}
{% include code-toggle.liquid code=customDecodingCodeCapture params="javascript|.copy-code.expandable-10" %}
{% endcapture %}

{{ customDecodingCodeBlock }}

Or you can copy the whole code of the converter and paste it to your converter:

{% capture converterCode %}
{% include {{ converterFilePath }} %}
{% endcapture %}

{% capture wholeConverterCodeBlock %}
{% assign converterCode = converterCode | replace: "// Custom decoding placeholder", customDecodingCodeCapture %}
{% include code-toggle.liquid code=converterCode params="javascript|.copy-code.expandable-15" %}
{% endcapture %}

{{ wholeConverterCodeBlock }}

{% endif %}