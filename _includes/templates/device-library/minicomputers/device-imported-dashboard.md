You are able to import a dashboard in JSON format. To import a dashboard, you should go to the Dashboard group and click
 on the “+” button in the upper right corner of the page and choose “Import dashboard”. The dashboard import window 
should pop up, and you will be prompted to upload the JSON file and click “Import”.

{% assign importingDashboardCE = '
    ===
        image: /images/user-guide/dashboards/dashboard-import-ce.png
    ===
        image: /images/user-guide/dashboards/dashboard-import-1-ce.png
    ===
        image: /images/user-guide/dashboards/dashboard-import-2-ce.png
    '
%}

{% assign importingDashboardPE = '
    ===
        image: /images/user-guide/dashboards/dashboard-import-pe.png
    ===
        image: /images/user-guide/dashboards/dashboard-import-1-pe.png
    ===
        image: /images/user-guide/dashboards/dashboard-import-2-pe.png
    '
%}

{% if docsPrefix == "pe/" or docsPrefix == "paas/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=importingDashboardPE %}
{% else %}  
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=importingDashboardCE %}
{% endif %}

JSON below is a dashboard:
```json
{
  "title": "OrangePI",
  "image": null,
  "mobileHide": false,
  "mobileOrder": null,
  "configuration": {
    "description": "",
    "widgets": {
      "847b32bd-ca5b-29d0-7958-6a9684c2ded8": {
        "isSystemType": true,
        "bundleAlias": "cards",
        "typeAlias": "attributes_card",
        "type": "latest",
        "title": "New widget",
        "image": null,
        "description": null,
        "sizeX": 7.5,
        "sizeY": 3,
        "config": {
          "datasources": [
            {
              "type": "entity",
              "name": null,
              "entityAliasId": "e64513b0-faf1-efdc-518a-236fb9f8e79e",
              "filterId": null,
              "dataKeys": [
                {
                  "name": "active",
                  "type": "attribute",
                  "label": "active",
                  "color": "#f44336",
                  "settings": {},
                  "_hash": 0.7425645028813859
                },
                {
                  "name": "ip_address",
                  "type": "attribute",
                  "label": "ip_address",
                  "color": "#2196f3",
                  "settings": {},
                  "_hash": 0.4956812732480287
                },
                {
                  "name": "macaddress",
                  "type": "attribute",
                  "label": "macaddress",
                  "color": "#4caf50",
                  "settings": {},
                  "_hash": 0.355748280280748
                }
              ]
            }
          ],
          "timewindow": {
            "displayValue": "",
            "selectedTab": 0,
```
If you did everything right, you have to see the following dashboard:
![](/images/devices-library/orangepi/minicomputer-dashboard.png)