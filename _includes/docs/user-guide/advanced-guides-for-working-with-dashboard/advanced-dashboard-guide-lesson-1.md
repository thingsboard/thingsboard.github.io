* TOC
{:toc}

{% capture difference %}
Before proceeding with this guide, it&#39;s recommended that you follow [Getting Started](/docs/{{docsPrefix}}getting-started-guides/helloworld/){:target="_blank"} guide to become familiar with ThingsBoard devices and dashboards. This will enhance your learning experience and understanding of the concepts presented here.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Imagine you have several buildings, each containing multiple office spaces equipped with devices that monitor water and electricity usage, CO2 levels, temperature, and humidity. 
This lesson is the first in a series of step-by-step tutorials to help you create a multifunctional dashboard for visualizing and monitoring data from your premises-integrated devices.

By completing this series, you will be able to:

- Display your buildings on a map widget;
- Show a list of office spaces with detailed information about each one of them;
- Show a list of devices in a selected office and visualize their layout on the room plan;
- Develop dedicated panels for each device, showcasing both real-time and historical data;
- Share your dashboard with clients.

For simplicity, we&#39;ll concentrate on a single office in Building A, equipped with smart devices to monitor everything from energy consumption to environmental conditions.

Let&#39;s begin with the basics: add new entities, establish relationships between them, and display our buildings in the OpenStreet Map and Entities table widgets.
After completing the first guide, you will have a dashboard that looks like this:

![image](https://img.thingsboard.io/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/lesson-1-pe.png)

{% include templates/prerequisites-pe.md %}

## Adding entities and establishing relationships between them

Before we add and configure the dashboard, we need to add some entities, specifically assets and devices. 
Assets will represent our buildings and offices, while devices will represent our sensors.

### Adding assets

[Assets](/docs/{{docsPrefix}}user-guide/ui/assets/){:target="_blank"} are abstract IoT entities that may be related to other assets and devices.

For this tutorial, we will create two assets to represent buildings: **Building A** and **Building B**, and two more assets to represent office spaces: **Office A** and **Office B**.
Let&#39;s get started.

- Login to your ThingsBoard instance as [Tenant Administrator](/docs/{{docsPrefix}}user-guide/ui/tenants/){:target="_blank"};
- Go to the "Assets" page of the "Entities" section on the sidebar. By default, you&#39;ll be redirected to the "All" device group. We&#39;ll begin by adding new assets to this group;
- Click the "plus" icon located in the top-right corner of the table. Select "Add new asset" from the drop-down menu to start adding your first asset;
- In the asset name field, type "Building A". Type "building" in the "Asset profile" section and click on "Create a new one!" to establish a new profile for this asset;
- Click the "Add" button to confirm the asset profile creation;
- Now click "Add" to finalize adding the asset.

Congratulations! You have added your first asset.

{% include images-gallery.html imageCollection="adding-assets-1" %}

Similarly, add the asset "Building B". Also, add the assets "Office A" and "Office B" with the asset type "office".

{% include images-gallery.html imageCollection="adding-assets-2" %}

### Adding devices

[Devices](/docs/{{docsPrefix}}user-guide/ui/devices/){:target="_blank"} are basic IoT objects that collect data from their environment and transmit it to the ThingsBoard platform, as well as respond to Remote Procedure Call (RPC) commands.

You can add devices manually, just like assets. However, ThingsBoard has the capability for [bulk provisioning](/docs/{{docsPrefix}}user-guide/bulk-provisioning/){:target="_blank"} of devices (and assets) using CSV files. This is very useful when you need to add multiple entities at once.

For this tutorial, we need to add four devices: Indoor Air Quality Sensor, Energy Meter, Water Flow Meter, and IAQ Sensor. Later, we will simulate sending telemetry from these devices to ThingsBoard using emulators. 
So, let&#39;s start:

- Create a CSV file or [download a pre-made one](/docs/user-guide/advanced-guides-for-working-with-dashboard/files-from-tutorial/devices.csv){:target="_blank"}, where each row corresponds to the creation of a single device with specified parameters:

| **Name** | **Type**      | **Label**                 |
|:---------|:--------------|---------------------------|
| SD-001   | air-sensor    | Indoor Air Quality Sensor |
| EM-002   | energy-sensor | Energy Meter              |
| WM-003   | water-sensor  | Water Flow Meter          |
| AM-307   | air-sensor    | IAQ Sensor                |
| ---      

Your CSV file should look like this:

```text
name,type,label
SD-001,air-sensor,Indoor Air Quality Sensor
EM-002,energy-sensor,Energy Meter
WM-003,water-sensor,Water Flow Meter
AM-307,air-sensor,IAQ Sensor
```
{: .copy-code}

- Navigate to the "Devices" page of the "Entities" section on the sidebar. By default, you'll be redirected to the "All" device group;
- Click the "plus" icon located in the top-right corner of the table. Select "Import device" from the drop-down menu;
- Drag the CSV file into the import window and click "Continue";
- Select CSV delimiter and click "Continue";
- Map the data between the columns of the uploaded file and the data types in the ThingsBoard platform. Click "Continue" and then click "OK".

Four new devices should be successfully created: "SD-001" (Indoor Air Quality Sensor), "EM-002" (Energy Meter), "WM-003" (Water Flow Meter), and "AM-307" (IAQ Sensor).

{% include images-gallery.html imageCollection="adding-devices-1" %}

### Adding relations between entities

[Relations](/docs/{{docsPrefix}}user-guide/entities-and-relations/#relations){:target="_blank"} are directed connections between one entity and one or more others.
To ensure that our Office A and Office B are linked only to Building A, we will set up relations between them. Follow these steps:

- Return to the "Assets" page and click on the "Building A" to open the details window. Navigate to the "Relations" tab, ensure the direction is "From", and click the "plus" icon to add new relation;
- Select the type "Assets", then specify "Office A" and "Office B" in the list of entities. Click "Add".

Now your Office A and Office B are linked only to Building A.

{% include images-gallery.html imageCollection="relations-from-building-to-office" %}

Now let&#39;s establish relations between the devices "SD-001" (Indoor Air Quality Sensor), "EM-002" (Energy Meter), "WM-003" (Water Flow Meter) and Office A:

- Click on "Office A" and navigate to the "Relations" tab. Ensure the direction is "From" and click the "plus" icon;
- Select the type "Device" and specify "SD-001", "EM-002", and "WM-003" in the list of entities. Click "Add".

Now the specified devices are "related" to "Office A" asset.

{% include images-gallery.html imageCollection="relations-from-office-to-device-1" %}

Similarly, establish relation between the "AM-307" (IAQ Sensor) device and "Office B" asset.

{% include images-gallery.html imageCollection="relations-from-office-to-device-2" %}

## Adding dashboard

The [dashboard](/docs/{{docsPrefix}}user-guide/dashboards/){:target="_blank"} is more than just a space for displaying your data in a convenient format.
Creating a structured and visually appealing dashboard is essential for efficiently monitoring and managing your assets and devices efficiently.

Add a dashboard to start visualizing assets and devices on it. For this dashboard, we will create a separate group:

- Go to the "Dashboards" page and navigate to the "Groups" tab. Click the "plus" icon to create a new dashboard group. Name it "Buildings" and click "Add";
- Open the created dashboard group;
- Click the "plus" icon in the upper-right corner of the screen to add new dashboard;
- Enter the title for the dashboard - "Buildings" and click "Add";
- Save the dashboard by clicking the "Save" button in the upper-right corner of the screen.

Your first dashboard has been successfully added. It will open automatically after adding. Save the dashboard by clicking the "Save" button in the upper right corner of the page.

{% include images-gallery.html imageCollection="adding-dashboard" %}

## OpenStreet Map widget

Now we move on to the most interesting part — adding your first [widget](/docs/{{docsPrefix}}user-guide/widgets/){:target="_blank"} – OpenStreet Map, which will display our two assets on the map: Building A and Building B.
To display the buildings on the map, we need to set their coordinates - latitude and longitude as the attributes.

Additionally, we will configure the widget to display general information about the building, including its address, email, phone number, and image when the building marker is clicked.
This information will also be added as attributes.

So, let&#39;s start with the preparatory work - adding building images and attributes.

#### Upload building images

Building images need to be uploaded to the [Image gallery](/docs/{{docsPrefix}}user-guide/image-gallery/#upload-image){:target="_blank"}, which serves as a centralized repository for storing and managing images.
They will be used in the tooltip of the map widget. You can use the [Building A](https://img.thingsboard.io/user-guide/advanced-guides-for-working-with-dashboard/images-from-tutorial/645-5th-Ave-New-York.png){:target="_blank"} and [Building B](https://img.thingsboard.io/user-guide/advanced-guides-for-working-with-dashboard/images-from-tutorial/641-E-54th-St-New-York.png){:target="_blank"} images from this guide or upload your own images.

{% include images-gallery.html imageCollection="adding-buildings-images" showListImageTitles="true" %}

Now you need to obtain and save the links to these images for further use it in the buildings&#39; attributes:

{% include images-gallery.html imageCollection="embed-buildings-images" showListImageTitles="true" %}

#### Adding the necessary attributes

Now let&#39;s move on to adding the necessary attributes:

{% include images-gallery.html imageCollection="adding-building-attributes-1" showListImageTitles="true" %}

Coordinates of the buildings used in this example:

| **Building** | **latitude**        | **longitude** |
|:-------------|:--------------------|---------------|
| Building A   | 40.75912            | -73.97600     |
| Building B   | 40.75901            | -73.96997     |
| ---

Similarly, add the following attributes: "**address**", "**email**", "**phone**", **"contactPerson"** and "**buildingImage**" with values from the table below. Use the value type "String" for these attributes.

{% include images-gallery.html imageCollection="adding-building-attributes-2" %}

Buildings' information used in this example:

| **Building** | **Address**                 | **Email**           | **Phone**      | **Contact person** | **Building image**                   |
|:-------------|:----------------------------|:--------------------|:---------------|:-------------------|:-------------------------------------|
| Building A   | 645 5th Ave, New York       | building-a@mail.com | +121 244 55 66 | Thomas Johnson     | Use the link to the Building A image |
| Building B   | 641 Lexington Ave, New York | building-b@mail.com | +121 555 66 77 | Jack Williams      | Use the link to the Building B image |
|---

Finally, your attributes list for Building A should look like this:

{% include images-gallery.html imageCollection="adding-building-attributes-3" %}

The attributes list for Building B should look like this:

{% include images-gallery.html imageCollection="adding-building-attributes-4" %}

#### Adding OpenStreet Map widget

All preparatory settings are done, and now we can add **OpenStreet Map** widget:

- Open the "Buildings" dashboard that you have created;
- Click the "Add widget" button at the top of the screen or click the large "Add new widget" icon in the center of the screen (if this is your first widget on this dashboard);
- Find the "OpenStreet Map" widget in the "Maps" widgets bundle and click on it;
- Now we need to add an [alias](/docs/{{docsPrefix}}user-guide/ui/aliases/){:target="_blank"} to define the entities from which the data will be extracted. In the "Alias" field, enter a name for it - "Buildings", and click "Create a new one";
- Enter the name of the alias and select a filter type - "Asset type". Then specify the "building" asset type and click the "Add" button in the lower right corner. This alias will display all assets of the "building" type in the widget;
- Now, add the following attributes as data keys: "latitude", "longitude", "address", "email", "phone", and "buildingImage".

{% include images-gallery.html imageCollection="adding-maps-widget-1" %}

The "Appearance" tab:

- Navigate to the "Appearance" tab. Change OpenStreet map provider to "CartoDB.Positron";

{% include images-gallery.html imageCollection="adding-maps-widget-2" %}

- Scroll to the "Label" section. The label is located above the marker and can display specific information about the entity, such as its name, type, telemetry data, etc.

    Add the label to the appropriate field by taking it from the documentation. This will display the building&#39;s name and customize the appearance of the tooltip;

The label used in the example:

```js
<div style="position: relative; white-space: nowrap; text-align: center; font-size: 12px; top: -5px;"><span style="border-radius: 10px; background-color: #fff; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px;">${entityName}</span></div>
```
{: .copy-code}

{% include images-gallery.html imageCollection="adding-maps-widget-3" %}

- A little further down, find the "Tooltip" section. Here we will configure the data that will be displayed in the tooltip when clicking on the building marker.
  - Turn on the "Use tooltip function" option;
  - Use the function provided in the documentation to display the selected building's image and its contact details.

The tooltip function used in the example:

```js
const address = data.address ? data.address : 'N/A';
const email = data.email ? data.email : 'N/A';
const phone = data.phone ? data.phone : 'N/A';
const buildingImage = data.buildingImage ? data.buildingImage : 'Building image not found';
return '<div style="display:flex;flex-direction:column;font-family:\'Roboto\';font-weight:500;font-size:14px;line-height:24px;letter-spacing:0.25px;color:#29313C;margin-bottom:5px">' +
            `<img style="width: 300px; height: auto" src=${buildingImage}>` +
            '<div style="margin-top:5px;">${entityName}</div>' +
            '<div style="display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:10px">' +
                '<div style="font-size:11px;line-height:16px;font-weight:500;color:rgba(0, 0, 0, 0.38);">Address</div>' +
                '<div style="font-size:12px;line-height:20px;font-weight:500;color:#29313C;letter-spacing:0.25px;text-align:right;">'+ address +'</div>' +
            '</div>' +
            '<div style="display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:10px">' +
                '<div style="font-size:11px;line-height:16px;font-weight:500;color:rgba(0, 0, 0, 0.38);">Email</div>' +
                '<div style="font-size:12px;line-height:20px;font-weight:500;color:#29313C;letter-spacing:0.25px;text-align:right;">'+ email +'</div>' +
            '</div>' +
            '<div style="display:flex;flex-direction:row;align-items:baseline;justify-content:space-between;gap:10px">' +
                '<div style="font-size:11px;line-height:16px;font-weight:500;color:rgba(0, 0, 0, 0.38);">Phone</div>' +
                '<div style="font-size:12px;line-height:20px;font-weight:500;color:#29313C;letter-spacing:0.25px;text-align:right;">'+ phone +'</div>' +
            '</div>'
       '</div>';
```
{:.copy-code.expandable-5}

{% include images-gallery.html imageCollection="adding-maps-widget-4" %}

- In the "Marker image" section, turn off the "Use marker image function" option, and add a custom marker image. Click "Browse from gallery" and upload new image marker. Use [provided custom marker image](https://img.thingsboard.io/user-guide/advanced-guides-for-working-with-dashboard/images-from-tutorial/building-icon.svg){:target="_blank"} or upload your own marker image. Set the marker image size to 60 pixels;

{% include images-gallery.html imageCollection="adding-maps-widget-5" %}

The "Widget card" tab:

- Navigate to the "Widget card" tab. Turn off the "Display widget title" option;
- Set padding value to 0;
- Open "Advanced widget style" section. Copy the CSS from the documentation and paste it into the "Widget CSS" section. This CSS defines the styling for the tooltip;

```css
.leaflet-popup-content {
  width: auto !important;
  margin: 8px;
}
a.leaflet-popup-close-button {
  font-size: 20px;
  color: black;
  backdrop-filter: blur(5px);
  background: rgba(255, 255, 255, 0.35);
  border-radius: 2px;
  top: 17px;
  right: 17px;
}
``` 
{:.copy-code}

- Turn off the "Enable data export" option;
- Click "Add" to confirm adding the widget.

{% include images-gallery.html imageCollection="adding-maps-widget-6" %}

Congratulations, we have added your first widget, that displays our two buildings. Move the widget to the top-right corner of the dashboard and resize it by grabbing any corner and dragging it. 
After adjusting the placement and size of the widget, click the "Save" button in the top-right corner to save the dashboard.

{% include images-gallery.html imageCollection="adding-maps-widget-7" %}

Now click on any building image to display a tooltip with information about it.

{% include images-gallery.html imageCollection="adding-maps-widget-8" %}

## Adding Buildings list widget

We have already created a widget that displays our two buildings on a map. Now let&#39;s create another widget - Entities table, which will display our buildings in a list.

{% include images-gallery.html imageCollection="adding-entities-table-widget-1" showListImageTitles="true" %}

Our dashboard now features two widgets. The first widget displays the location of our buildings on a map, and the second lists the buildings and their addresses.

{% include images-gallery.html imageCollection="adding-entities-table-widget-2" %}

## Customize the appearance of the dashboard

Let&#39;s make our dashboard more appealing by customizing its appearance. We will set a custom background for the "Buildings" state and apply custom CSS styles to the widgets.

**Setting a custom background image**

Transform the look of your dashboard by adding a custom background image for the "Buildings" state. This visual enhancement not only makes the interface more engaging but also aligns it with your branding or aesthetic preferences.
You can use [the image from this tutorial](https://img.thingsboard.io/user-guide/advanced-guides-for-working-with-dashboard/images-from-tutorial/district-night-background.png){:target="_blank"} or your own.

{% include images-gallery.html imageCollection="background-image-building-state" showListImageTitles="true" %}

**Customizing Widgets Appearance with CSS**

We will also make changes to the appearance of all future widgets on the dashboard using CSS. We will round their corners and add a side shadow.

- Click the "Settings" button on the dashboard toolbar;
- Scroll down to the "Advanced settings" section. This area allows you to modify in-depth settings that affect the entire dashboard;
- In the "Dashboard CSS" section, input the following CSS code to style all widgets:

```text
.tb-widget-container > .tb-widget {
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(23, 33, 90, 0.5);
}
.tb-dashboard-page .tb-widget-container > .tb-widget .leaflet-popup a.tb-custom-action {
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    border-bottom: none;
    color: #00695C;
}
```
{: .copy-code}

This CSS snippet applies styles to elements with the `.tb-widget` class that are direct children of the `.tb-widget-container`.
It specifies `border-radius: 8px`, which gives the element soft rounded corners, and `box-shadow: 0px 4px 10px rgba(23, 33, 90, 0.5)`, which creates a semi-transparent shadow with a subtle blur, offset by 4 pixels downward, adding visual depth, and specifies `opacity: 0.9` to make the element slightly transparent, allowing for some background visibility while maintaining the content&#39;s visibility.

- After entering the CSS code, click the "Save" button to apply the changes;
- Save the dashboard by clicking the "Save" button in the upper-right corner of the page.

As you can see, the widget corners are now rounded, and the background is slightly transparent.

{% include images-gallery.html imageCollection="dashboard-settings-css" %}

## Final view of the dashboard for this lesson

As a result your dashboard should look like this:

{% include images-gallery.html imageCollection="dashboard-final-lesson-1" %}

## Next step

Congratulations on completing the first chapter of our guide! You&#39;ve successfully crafted a dashboard that not only lists your buildings but also vividly displays their locations on a map widget.
This achievement lays a solid foundation for more advanced functionalities that we will explore in the next chapters.

In the second part of our guide, we will continue developing our dashboard. When you are ready to proceed, simply click the button below.

<br>
<p><a href="/docs/{{docsPrefix}}user-guide/advanced-guides-for-working-with-dashboard/advanced-dashboard-guide-lesson-2/" class="n-button add-device">Lesson 2. Dashboard states, widget actions, and analogue and digital gauges</a></p>