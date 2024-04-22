{% assign integrationType = include.integration-type %}
{% assign converterFilePath = "/docs/devices-library/blocks/integrations/converters/basic/" | append: integrationType | append: "-uplink-converter.js" %}

{% capture converterCode %}
{% include {{ converterFilePath }} %}
{% endcapture %}

{% capture customDecodingCodeCapture %}
{% assign customDecodingCodeFilePath = "/docs/devices-library/blocks/integrations/converters/custom-decoding/" | append: page.name | replace: ".md", ".js" %}
{% include {{ customDecodingCodeFilePath }} %}
{% endcapture %}

{% capture wholeConverterCodeBlock %}
{% assign converterCode = converterCode | replace: "// Custom decoding placeholder", customDecodingCodeCapture %}
{% include code-toggle.liquid code=converterCode params="javascript|.copy-code.expandable-15" %}
{% endcapture %}

{% capture customDecodingCodeBlock %}
{% include code-toggle.liquid code=customDecodingCodeCapture params="javascript|.copy-code.expandable-10" %}
{% endcapture %}

### Uplink converter in ThingsBoard integration

Such as we have already connected gateway and configured integration - we will need to modify the converter and add an ability to parse incoming payload from the device.  

To do this you can add code to "*Decoding block*", it locates between comments "*// --- Decoding code --- //*" in your converter, if you are using the default converters (for ThingsBoard v3.5.2 or above).

{{ customDecodingCodeBlock }}

Or you can copy the whole code of the converter and paste it to your converter:  

{{ wholeConverterCodeBlock }}
