You can configure additional settings like: TLS connection, byte order, word order, and other. The table below describes the parameters for this purpose:

| **Parameter**   | **Description** |
|:----------------|:----------------
| Byte order      | LITTLE          |
| Word order      | LITTLE          | 
| Vendor name     |                 |
| Product code    |                 |
| Vendor URL      |                 |
| Product name    |                 |
| Model name      |                 |
| ---             

{% assign advancedConnectionSettingsBasic = '
    ===
        image: https://img.thingsboard.io/gateway/modbus-connector/advanced-connection-settings-basic-1-ce.png,
        title: Click on the "**Advanced connection settings**" subsection to open it;
    ===
        image: https://img.thingsboard.io/gateway/modbus-connector/advanced-connection-settings-basic-2-ce.png,
        title: Make the necessary settings.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=advancedConnectionSettingsBasic %}