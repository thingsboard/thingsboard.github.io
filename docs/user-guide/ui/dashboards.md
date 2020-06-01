---
layout: docwithnav
assignees:
- ashvayka
title: Dashboards
description: ThingsBoard IoT Dashboards

---

* TOC
{:toc}

## Video tutorial

<div id="video">  
    <div id="video_wrapper">
        <iframe src="https://www.youtube.com/embed/L_geyNzS7tM" frameborder="0" allowfullscreen></iframe>
    </div>
</div>

## Default IoT dashboard for customer user

Since ThingsBoard 1.2 you are now able to define default IoT dashboard for your customer users in 2 simple steps:

#### Step 1. Assign IoT dashboard to customer

See embedded video tutorial above on tips how to do this.

#### Step 2. Open customer user details

Navigate to "**Customers** -> Your customer -> **Customer Users**" and toggle edit mode using 'pencil' button in the top-right corner of the screen.

#### Step 3. Select IoT dashboard 

select the IoT dashboard from the list and apply changes. Please note that you can also check the "Always Fullscreen" mode to prevent a user from navigating to different dashboards/screens. 

![image](/images/user-guide/ui/default-dashboard.png)

## IoT Dashboard import/export

#### Dashboard export

You are able to export your dashboard to JSON format and import it to the same or another ThingsBoard instance.

In order to export dashboard, you should navigate to the **Dashboards** page and click on the export button located on the particular dashboard row.
 
![image](/images/user-guide/ui/export-dashboard.png)

#### Dashboard import

Similar, to import the dashboard you should navigate to the **Dashboards** page and click on the "+" button located in the top-right corner of the **Dashboards** table and then choose "Import dashboard" option. 

![image](/images/user-guide/ui/import-dashboard.png)

The dashboard import window should popup and you will be prompted to upload the json file.

![image](/images/user-guide/ui/import-dashboard-window.png)

Once you click on the "import" button you will need to specify the device aliases. 
This basically allows you to set what device(s) correspond to dashboard alias.

![image](/images/user-guide/ui/import-dashboard-aliases.png)

