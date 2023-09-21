{% assign feature = "Custom Menu" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}

## Introduction

The ThingsBoard Custom Menu feature allows you to extend ThingsBoard UI.
You can add new and show/hide existing menu items.

## Hide existing menu items

To hide menu items in the ThingsBoard user interface, specify the menu items you want to hide in JSON data format in the "Custom Menu" window.

Example of JSON data format to hide "Home" and "Alarms" menu items:

```json
{
  "disabledMenuItems": [
    "home",
    "alarms"
  ],
  "menuItems": []
}
```
{: .copy-code}

Let's see how this works:

{% assign addNewMenuItem = '
    ===
        image: https://img.thingsboard.io/user-guide/white-labeling/custom-menu/custom-menu-add-new-menu-item-1.png,
        title: Go to the "**White Labeling**" page -> "**Custom Menu**" tab. Menu items names that can be hidden are displayed in the empty "**Custom Menu**" window;
    ===
        image: https://img.thingsboard.io/user-guide/white-labeling/custom-menu/custom-menu-hide-menu-item-2.png,
        title: Please provide the menu items you want to hide in JSON data format in the "**Custom Menu**" window. Then click "**Save**";
    ===
        image: https://img.thingsboard.io/user-guide/white-labeling/custom-menu/custom-menu-hide-menu-item-3.png,
        title: Selected menu items are now hidden.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=addNewMenuItem %}

## Add new menu items

You can add a new menu item that will link to a specific dashboard, documentation page, or an external webpage.
To do this, specify the parameters of the new menu item in JSON data format in the "**Custom Menu**" window.

JSON configuration for adding new menu item should contain the following parameters:

| **Parameter**          | **Description**                                                |
|:-----------------------|:---------------------------------------------------------------|
| *name*                 | Menu item name.                                                |
| *iconUrl*              | Link to icon.                                                  |
| *materialIcon*         | Icon name which is selected from the default material icons.   |
| *iframeUrl*            | Link to the page you want to open.                             |
| *dashboardId*          | Specify the dashboard ID you want to open.                     |
| *hideDashboardToolbar* | Show/hide the dashboard toolbar.                               |
| *childMenuItems*       | Сreate sub-menu items grouped under one section.               |
| ---                    

Let's create three new menu items: two items will link to dashboards and will be grouped under one section. 
The third item will link to the documentation.

{% assign addNewMenuItem = '
    ===
        image: https://img.thingsboard.io/user-guide/white-labeling/custom-menu/custom-menu-add-new-menu-item-1.png,
        title: Go to the "**White Labeling**" page -> "**Custom Menu**" tab;
    ===
        image: https://img.thingsboard.io/user-guide/white-labeling/custom-menu/custom-menu-add-new-menu-item-2.png,
        title: Specify data in JSON format in the "**Custom Menu**" window. Use the JSON below as an example. Click "**Save**";
    ===
        image: https://img.thingsboard.io/user-guide/white-labeling/custom-menu/custom-menu-add-new-menu-item-3.png,
        title: New menu items are created. Click on the "My Dashboards" section -> "Waste Management Administration" page. The dashboard specified in JSON will open;
    ===
        image: https://img.thingsboard.io/user-guide/white-labeling/custom-menu/custom-menu-add-new-menu-item-4.png,
        title: Go to the "Smart farming and smart agriculture solutions" page. The page will open with documentation specified in JSON.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=addNewMenuItem %}

<br>
For this example, use the following JSON to add new menu items.

Don't forget to replace $DASHBOARD_ID value with your dashboard id.

```json
{
  "disabledMenuItems": [],
  "menuItems": [
    {
      "name": "My Dashboards",
      "iconUrl": null,
      "materialIcon": "grid_view",
      "iframeUrl": null,
      "dashboardId": null,
      "hideDashboardToolbar": null,
      "setAccessToken": false,
      "childMenuItems": [
        {
          "name": "Waste Management Administration",
          "iconUrl": null,
          "materialIcon": "dashboard",
          "iframeUrl": null,
          "dashboardId": "$DASHBOARD_ID",
          "hideDashboardToolbar": false,
          "setAccessToken": false,
          "childMenuItems": []
        },
        {
          "name": "Assisted Living Administration",
          "iconUrl": null,
          "materialIcon": "tablet_dashboard",
          "iframeUrl": null,
          "dashboardId": "$DASHBOARD_ID",
          "hideDashboardToolbar": null,
          "setAccessToken": false,
          "childMenuItems": []
        }
      ]
    },
    {
      "name": "Smart farming solutions",
      "iconUrl": "https://cdn-icons-png.flaticon.com/512/3214/3214679.png",
      "materialIcon": null,
      "iframeUrl": "https://thingsboard.io/smart-farming/",
      "dashboardId": null,
      "hideDashboardToolbar": null,
      "setAccessToken": false,
      "childMenuItems": []
    }
  ]
}
```
{: .copy-code}

## Next steps

{% assign currentGuide = "AdvancedFeatures" %}{% include templates/multi-project-guides-banner.md %}