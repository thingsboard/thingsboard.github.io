{% assign integrationType = include.integration-type | downcase %}
{% assign integrationTypeCorrectName = include.integration-type-correct-name %}

<br><b>Step 2: Import the Uplink converter into ThingsBoard</b>

After downloading the file with the Uplink converter configuration, import it into ThingsBoard:

- Navigate to the "**Data converters**" page in the "**Integration center**" section.
- Click the "**+**" icon in the top-right corner of the page and select "**Import converter**" from the drop-down menu.
- Drag and drop the downloaded JSON file (containing the uplink converter configuration) into the import window, then click "**Import**".
- The uplink converter is now successfully imported.

{% assign uplinkConverter = '
    ===
    image: /images/devices-library/basic/integrations/import-uplink-converter-1.png,
    title: Navigate to the "**Data converters**" page in the "**Integration center**" section. Click the "**+**" icon in the top-right corner of the page and select "**Import converter**" from the drop-down menu.
    ===
    image: /images/devices-library/basic/integrations/import-uplink-converter-2.png,
    title: Drag and drop the downloaded JSON file (containing the uplink converter configuration) into the import window, then click "**Import**".
    ===
    image: /images/devices-library/basic/integrations/integration_type/import-uplink-converter-3.png,
    title: The uplink converter is now successfully imported.
    ' | replace: "integration_type" , integrationType
%}

{% include images-gallery.liquid imageCollection=uplinkConverter %}

<br><b>Step 3: Replace the Uplink converter in the {{integrationTypeCorrectName}} integration</b>

Now, let&#39;s update your {{integrationTypeCorrectName}} integration to use the new uplink converter:
- Go to the "**Integrations**" page in the "**Integration center**" section.
- Click on your {{integrationTypeCorrectName}} integration to open its details window.
- Enter edit mode by clicking the orange pencil button in the top-right corner.
- Replace the existing uplink converter with the imported one.
- Don&#39;t forget to save your changes!

{% assign editIntegration = '
    ===
    image: /images/devices-library/basic/integrations/integration_type/edit-integration-1.png,
    title: Go to the "**Integrations**" page in the "**Integration center**" section. Click on your integration_correct_name integration to open its details window. Enter edit mode by clicking the orange pencil button in the top-right corner.
    ===
    image: /images/devices-library/basic/integrations/integration_type/edit-integration-2.png,
    title: Replace the existing uplink converter with the imported one.
    ===
    image: /images/devices-library/basic/integrations/integration_type/edit-integration-3.png,
    title: Don&#39;t forget to save your changes!
    ' 
    | replace: "integration_correct_name" , integrationTypeCorrectName
    | replace: "integration_type" , integrationType 
%}

{% include images-gallery.liquid imageCollection=editIntegration %}