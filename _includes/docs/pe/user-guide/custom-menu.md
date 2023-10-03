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

**Available ThingsBoard menu items names that can be disabled:**  

| **Parameter**             | **Description**                                                                                                                          |
|:--------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
| home                      | This parameter provides the option to hide the "Home" item on the left panel.                                                            |
| tenants                   | This parameter provides the option to hide the "Tenants" item on the left panel.                                                         |
| tenant_profiles           | This parameter provides the option to hide the "Tenant Profiles" item on the left panel (only at the system administrator level).        |
| billing                   | This parameter provides the option to hide the "Plan and Billing" item on the left panel.                                                |
| alarms                    | This parameter provides the option to hide the "Alarms" item on the left panel.                                                          |
| dashboards                | This parameter provides the option to hide the "Dashboards" item on the left panel.                                                      |
| dashboard_all             | This parameter provides the option to hide the "All" tab on the "Dashboards" page.                                                       |
| dashboard_groups          | This parameter provides the option to hide the "Groups" tab on the "Dashboards" page.                                                    |
| solution_templates        | This parameter provides the option to hide the "Solution Templates" item on the left panel.                                              |
| entities                  | This parameter provides the option to hide the "Entities" item on the left panel.                                                        |
| devices                   | This parameter provides the option to hide the "Devices" item on the left panel.                                                         |
| assets                    | This parameter provides the option to hide the "Assets" item on the left panel.                                                          |
| entity_views              | This parameter provides the option to hide the "Entity Views" item on the left panel.                                                    |
| profiles                  | This parameter provides the option to hide the "Profiles" item on the left panel.                                                        |
| device_profiles           | This parameter provides the option to hide the "Device profiles" item on the left panel.                                                 |
| asset_profiles            | This parameter provides the option to hide the "Asset profiles" item on the left panel.                                                  |
| customers                 | This parameter provides the option to hide the "Customers" item on the left panel.                                                       |
| customer_all              | This parameter provides the option to hide the "All" tab on the "Customers" page.                                                        |
| customer_groups           | This parameter provides the option to hide the "Groups" tab on the "Customers" page.                                                     |
| customers_hierarchy       | This parameter provides the option to hide the "Hierarchy" tab on the "Customers" page.                                                  |
| users                     | This parameter provides the option to hide the "Users" item on the left panel.                                                           |
| user_all                  | This parameter provides the option to hide the "All" tab on the "Customers" page.                                                        |
| user_groups               | This parameter provides the option to hide the "Groups" tab on the "Customers" page.                                                     |
| integrations_center       | This parameter provides the option to hide the "Integrations center" item on the left panel.                                             |
| integrations              | This parameter provides the option to hide the "Integrations" item on the left panel.                                                    |
| converters                | This parameter provides the option to hide the "Data converters" item on the left panel.                                                 |
| rule_chains               | This parameter provides the option to hide the "Rule chains" item on the left panel.                                                     |
| edge_management           | This parameter provides the option to hide the "Edge management" item on the left panel.                                                 |
| edges                     | This parameter provides the option to hide the "Instances" item on the left panel.                                                       |
| rulechain_templates       | This parameter provides the option to hide the "Rule chain templates" item on the left panel.                                            |
| integration_templates     | This parameter provides the option to hide the "Integration templates" item on the left panel.                                           |
| converter_templates       | This parameter provides the option to hide the "Converter templates" item on the left panel.                                             |
| features                  | This parameter provides the option to hide the "Advanced features" item on the left panel.                                               |
| otaUpdates                | This parameter provides the option to hide the "OTA updates" item on the left panel.                                                     |
| version_control           | This parameter provides the option to hide the "Version control" item on the left panel.                                                 |
| scheduler                 | This parameter provides the option to hide the "Scheduler" item on the left panel.                                                       |
| resources                 | This parameter provides the option to hide the "Resources" item on the left panel.                                                       |
| widget_library            | This parameter provides the option to hide the "Widgets Library" item on the left panel.                                                 |
| resources_library         | This parameter provides the option to hide the "Resources library" item on the left panel.                                               |
| notifications_center      | This parameter provides the option to hide the "Notifications center" item on the left panel.                                            |
| notification_inbox        | This parameter provides the option to hide the "Inbox" tab on the "Notifications center" page.                                           |
| notification_sent         | This parameter provides the option to hide the "Sent" tab on the "Notifications center" page.                                            |
| notification_recipients   | This parameter provides the option to hide the "Recipients" tab on the "Notifications center" page.                                      |
| notification_templates    | This parameter provides the option to hide the "Templates" tab on the "Notifications center" page.                                       |
| notification_rules        | This parameter provides the option to hide the "Rules" tab on the "Notifications center" page.                                           |
| api_usage                 | This parameter provides the option to hide the "Api Usage" item on the left panel.                                                       |
| white_labeling            | This parameter provides the option to hide the "White Labeling" item on the left panel.                                                  |
| white_labeling_general    | This parameter provides the option to hide the "General" tab on the "White Labeling" page.                                               |
| login_white_labeling      | This parameter provides the option to hide the "Login" tab on the "White Labeling" page.                                                 |
| mail_templates            | This parameter provides the option to hide the "Mail Templates" tab on the "White Labeling" page.                                        |
| custom_translation        | This parameter provides the option to hide the "Custom Translation" tab on the "White Labeling" page.                                    |
| custom_menu               | This parameter provides the option to hide the "Custom Menu" tab on the "White Labeling" page.                                           |
| settings                  | This parameter provides the option to hide the "Settings" item on the left panel.                                                        |
| general                   | This parameter provides the option to hide the "General" tab on the "Settings" page (only at the system administrator level).            |
| home_settings             | This parameter provides the option to hide the "Home Settings" tab on the "Settings" page.                                               |
| mail_server               | This parameter provides the option to hide the "Mail Server" tab on the "Settings" page.                                                 |
| notification_settings     | This parameter provides the option to hide the "Notifications" tab on the "Settings" page.                                               |
| queues                    | This parameter provides the option to hide the "Queues" tab on the "Settings" page (only at the system administrator level).             |
| repository_settings       | This parameter provides the option to hide the "Repository settings" tab on the "Settings" page.                                         |
| auto_commit_settings      | This parameter provides the option to hide the "Auto-commit settings" tab on the "Settings" page.                                        |
| security_settings         | This parameter provides the option to hide the "Security" item on the left panel.                                                        |
| security_settings_general | This parameter provides the option to hide the "General" item in the "Security" drop-down menu (only at the system administrator level). |
| 2fa                       | This parameter provides the option to hide the "Two-factor authentication" item on the left panel.                                       |
| roles                     | This parameter provides the option to hide the "Roles" item on the left panel.                                                           |
| self_registration         | This parameter provides the option to hide the "Self Registration" item on the left panel.                                               |
| audit_log                 | This parameter provides the option to hide the "Audit Logs" item on the left panel.                                                      |
| oauth2                    | This parameter provides the option to hide the "Oauth2" item on the left panel.                                                          |
| ---                       

Let's see how this works:

{% assign addNewMenuItem = '
    ===
        image: /images/user-guide/white-labeling/custom-menu/custom-menu-add-new-menu-item-1.png,
        title: Go to the "**White Labeling**" page -> "**Custom Menu**" tab. Menu items names that can be hidden are displayed in the empty "**Custom Menu**" window;
    ===
        image: /images/user-guide/white-labeling/custom-menu/custom-menu-hide-menu-item-2.png,
        title: Please provide the menu items you want to hide in JSON data format in the "**Custom Menu**" window. Then click "**Save**";
    ===
        image: /images/user-guide/white-labeling/custom-menu/custom-menu-hide-menu-item-3.png,
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
        image: /images/user-guide/white-labeling/custom-menu/custom-menu-add-new-menu-item-1.png,
        title: Go to the "**White Labeling**" page -> "**Custom Menu**" tab;
    ===
        image: /images/user-guide/white-labeling/custom-menu/custom-menu-add-new-menu-item-2.png,
        title: Specify data in JSON format in the "**Custom Menu**" window. Use the JSON below as an example. Click "**Save**";
    ===
        image: /images/user-guide/white-labeling/custom-menu/custom-menu-add-new-menu-item-3.png,
        title: New menu items are created. Click on the "My Dashboards" section -> "Waste Management Administration" page. The dashboard specified in JSON will open;
    ===
        image: /images/user-guide/white-labeling/custom-menu/custom-menu-add-new-menu-item-4.png,
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