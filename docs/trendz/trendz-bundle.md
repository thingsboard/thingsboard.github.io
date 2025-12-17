---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Import Advanced analytics Bundle into ThingsBoard
description: Import Advanced analytics Bundle into ThingsBoard

tb-trendz-3.5-resource-lib-update:
  0:
    image: /images/trendz/trendz-tb_lib_fix_1.png
    title: 'Open widget bundle'
  1:
    image: /images/trendz/trendz-tb_lib_fix_2.png
    title: 'Search for Trendz bundle'
  2:
    image: /images/trendz/trendz-tb_lib_fix_3.png
    title: 'Edit widget'
  3:
    image: /images/trendz/trendz-tb_lib_fix_4.png
    title: 'Update library link'
---

* TOC
{:toc}

All visualizations created in Trendz Analytics could be added on ThingsBoard Dashboards. 
We created special `Advanced analytics Bundle` for ThingsBoard - widgets collection that should be imported into ThingsBoard `Widgets library`.
You can use them to add views from Trendz into ThingsBoard dashboards and share analysis results with other users.

{% capture trendz_info %}
From ThingsBoard 4.3+ and Trendz 1.15+, the bundle name is `Advanced analytics Bundle`, and this bundle is a system bundle.

For older versions, you can find the bundle at the tenant level with the name `Trendz Bundle` (after successful import).
{% endcapture %}
{% include templates/info-banner.md content=trendz_info %}

## Import Advanced analytics Bundle

### ThingsBoard 4.3+ and Trendz 1.15+

Starting from ThingsBoard 4.3 and Trendz 1.15, Trendz widgets are now managed at the sysadmin level and are upgraded automatically. 
Starting from these versions, there are no additional actions required from the user to import this bundle. The only requirement is:
Trendz should be connected to ThingsBoard. You can find out how to do it [here](/docs/trendz/install/ubuntu#step-6-sync-thingsboard-with-trendz).

If Trendz is synced with ThingsBoard, you can find the system bundle `Advanced analytics Bundle` in the `Widgets library`.

### ThingsBoard 3.4+ and Trendz 1.9+
You can import Trendz bundle to the ThingsBoard via Trendz UI: 

* Open Trendz settings page as tenant administrator
* Scroll to `Trendz Widget Bundle Management` section
* Press `Upload bundle` button to add Trendz widget library to the ThingsBoard.
* In case when ThingsBoard already contains `Trendz bundle` but it is not up-to-date, the `Upload bundle` button would apply the latest changes.

### ThingsBoard 3.3+ and Trendz 1.8+
Starting from ThingsBoard 3.3 and Trendz 1.8 - Trendz widgets can be natively embedded into the ThingsBoard dashboard.
Native Trendz widgets works much faster compared to original Trendz widgets that are based on iFrame. 

Add native Trendz library into ThingsBoard extensions:
* Download <a href="https://dist.thingsboard.io/trendz-tb-lib-1.8.0-SNAPSHOT.jar" download target="_blank">Native Trendz Library</a>
* Deploy library into ThingsBoard extension directory

```
scp trendz-tb-lib-1.8.0-SNAPSHOT.jar ubuntu@${THINGSBOARD_SERVER}:~/.

ssh ${THINGSBOARD_SERVER}

sudo cp trendz-tb-lib-1.0.0-SNAPSHOT.jar /usr/share/thingsboard/extensions/
sudo chown thingsboard:thingsboard /usr/share/thingsboard/extensions/trendz-tb-lib-1.0.0-SNAPSHOT.jar
```

* Restart ThingsBoard service to apply changes

```
sudo service thingsboard restart
```

Import Native Trendz widgets bundle
* Download <a href="https://dist.thingsboard.io/native_trendz_bundle.json" download target="_blank">Native_Trendz_widgets_bundle</a>
* Login as Tenant Administrator into ThingsBoard and go to **Widget Library**
* Press **Add new widget bundle** and select **import widget bundle**
* Import downloaded  widget bundle 

### ThingsBoard 3.0 - 3.2
* Download a <a href="https://dist.thingsboard.io/trendz_bundle_tb3.json" download target="_blank">Trendz_widgets_bundle V3</a> 
* Login as Tenant Administrator into ThingsBoard and go to **Widget Library**
* Press **Add new widget bundle** and select **import widget bundle**
* Import downloaded  widget bundle 

### ThingsBoard 2.x
* Download a <a href="https://dist.thingsboard.io/trendz_bundle_tb2.json" download target="_blank">Trendz_widgets_bundle V2</a> 
* Login as Tenant Administrator into ThingsBoard and go to **Widget Library**
* Press **Add new widget bundle** and select **import widget bundle**
* Import downloaded  widget bundle

This bundle contains 4 widgets:
* **Trendz View Static**- allow adding saved Trendz visualizations into ThingsBoard dashboards
* **Trendz View Latest**- similar to previous but also support dashboard aliases for resolving entities
* **Trendz Chat Assitant** - is an interactive tool that allows users to engage in chat-based sessions for quick data retrieval and analysis.
* **Trendz Builder (Deprecated)** - Trendz Visualization Builder for providing self-service interface to your end-users, 
so they can create their own analysis using ThingsBoard dashboard.
 
**Note:** If after importing Trendz Widget Bundle into ThingsBoard, widgets do not work and white screen with error displayed - double-check
that correct bundle was imported. Widget API in ThingsBoard v2.x and v3.x is different. Ensure that you downloaded bundle for 
the correct ThingsBoard version.

## Troubleshooting

### ThingsBoard 3.5+ blank widget with error
Starting from ThingsBoard 3.5 we are using Angular 15 and link to library should be updated because standard link loads library that is based on Angluar 12, and it is not compatible with Angular 15.
To solve the problem you should follow next steps:

* Update Trendz to the latest version (1.10.1 or higher). If you are using Trendz Cloud just skip this step.
* Login to ThingsBoard as Tenant administrator
* Navigate to Resources -> Widgets Library
* Select and Edit Trendz Bundle
* For each widget in Trendz bundle
  * Open for edit
  * Switch to resources tab (top left corner)
  * Update link to Trendz library
    * In case of ThingsBoard/Trendz cloud (North America) use the following URL - https://thingsboard.cloud/trendz/bundle/trendz-tb-lib.js
    * In case of ThingsBoard/Trendz cloud (Europe) use the following URL - https://eu.thingsboard.cloud/trendz/bundle/trendz-tb-lib.js
  * Save widget
* Navigate to your dashboard and refresh the page - issue should be solved

{% include images-gallery.html imageCollection="tb-trendz-3.5-resource-lib-update" %}

### Wrong bundle version
If after importing Trendz Widget Bundle into ThingsBoard, widgets do not work and white screen with error displayed - double-check
that correct bundle was imported. Widget API in ThingsBoard v2.x and v3.x is different. Ensure that you downloaded bundle for
the correct ThingsBoard version.

### HTTPS to HTTP links
If ThingsBoard uses HTTPS and link to Trendz library uses http - you will see mixed content error in browser console and widget will not load. You should enable HTTPS for Trendz as well.


## Next Steps

{% assign currentGuide = "EmbedVisualizations" %}{% include templates/trndz-guides-banner.md %}
