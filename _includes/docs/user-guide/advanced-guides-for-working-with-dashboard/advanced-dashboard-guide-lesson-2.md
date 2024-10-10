* TOC
{:toc}

Welcome to the second part of our tutorial series! 
If you missed part one, we covered the basics, including getting familiar with assets and devices, adding a dashboard, and adding your first widget. 
It's highly recommended to check out lesson 1 if you haven't already.

<br>
<p><a href="/docs/{{docsPrefix}}user-guide/advanced-guides-for-working-with-dashboard/advanced-dashboard-guide-lesson-1/" class="n-button add-device">Lesson 1. Visualizing assets data using OpenStreet Map and Entities table widgets</a></p>

<br>

In this lesson, we'll continue to develop our project. We will add states for buildings and offices, and implement navigation between them.
We will also continue adding widgets, including one that visualizes the placement of devices on the office plan. Let's get started.

{% include carousel.liquid collectionMap = 'dashboard-lesson-2' nonActiveItemsVisibility = false %}

## Adding building and office states

Dashboard [states](/docs/{{docsPrefix}}user-guide/dashboards/#states){:target="_blank"} allow you to create a multi-level hierarchy within your dashboard. Think of each state as a separate page. 
For instance, each building, office, and device can have its own state. We already have a default ("Buildings") state that shows a list of buildings and their locations on a map.

We need to add a few more states to our dashboard: "building", "office", and states for each device.

In this lesson, we will focus on adding and configuring states for buildings and offices. Device states will be added in the next lesson.

**Adding a state for a building**

To add a new state, follow these steps:

{% include images-gallery.html imageCollection="adding-building-state" showListImageTitles="true" %}

**Adding a state for an office**

Repeat the steps to add a state for the office:

{% include images-gallery.html imageCollection="adding-office-state" showListImageTitles="true" %}

Now that the new states have been added, let’s set up navigation between them and the default state. 

## Building's state

The state of the selected building will display complete information about it.
You will be able to view details such as the building's address, contact information of the person responsible for leasing inquiries in this building, as well as a list of your offices in this building.

Instead of creating separate dashboard settings for each building, we will configure a single "building" state.
Each time you select a different building, the widgets will automatically fetch and display data related to that building, thanks to the "[Entity from dashboard state](/docs/{{docsPrefix}}user-guide/ui/aliases/#entity-from-dashboard-state){:target="_blank"}" alias.

Let's see how this works.

### Navigation between default and building states

Navigation between states will be implemented using the action function.
The [action](/docs/{{docsPrefix}}user-guide/ui/widget-actions){:target="_blank"} function can be used to transition to a new state of the dashboard, navigate between dashboards, link to an external resource represented by a URL, or perform other user-configurable actions.

<br>
**Adding an action for the map widget**

We will add the ability to transition to the state of the selected building via a tooltip when clicking on the building marker in the [OpenStreet Map widget](/docs/{{docsPrefix}}user-guide/advanced-guides-for-working-with-dashboard/advanced-dashboard-guide-lesson-1/#openstreet-map-widget){:target="_blank"}.
For this, use the "[Navigate to new dashboard state](/docs/{{docsPrefix}}user-guide/ui/widget-actions/#navigate-to-new-dashboard-state){:target="_blank"}" action. Let's get started:

- While in dashboard editing mode, click on the "pencil" icon of the map widget to enter its editing mode;
- Navigate to the "Actions" tab and click the "plus" icon to add an action;
- Select "[Tooltip tag action](/docs/{{docsPrefix}}user-guide/ui/widget-actions/#tooltip-tag-action){:target="_blank"}" as the action source, name it "building_details", set the action type to "Navigate to new dashboard state" and specify "building" state as "Target dashboard state". Click "Add";

Now in the "Actions" window, you can see the configured action. All that's left is to add the line "Details" to the popup menu for transitioning to the new state.

{% include images-gallery.html imageCollection="map-widget-navigation-between-states-1" %}

- Navigate to the "Appearance" tab, find the "Tooltip" section and add the following lines to the end of the existing tooltip:

```text
            +
        '<div style="text-align:center;background:var(--tb-primary-50, #87ceeb);border-radius:6px">' +
            '<link-act name="building_details">Details ></link-act>' +
        '</div>'
```
{: .copy-code}

Or replace the existing tooltip with the following one:

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
            '</div>'+
       '</div>' +
        '<div style="text-align:center;background:var(--tb-primary-50, #87ceeb);border-radius:6px">' +
            '<link-act name="building_details">Details ></link-act>' +
        '</div>';
```
{:.copy-code.expandable-4}

{% capture difference %}
Ensure that the name of the created action matches the name specified in the function.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

- Save the changes to the widget and the dashboard;

{% include images-gallery.html imageCollection="map-widget-navigation-between-states-2" %}

Now, when you click on any building marker of the map widget, a tooltip with "Details" line will appear. Clicking on it will navigate you to the state of the selected building.

{% include images-gallery.html imageCollection="map-widget-navigation-between-states-3" %}

<br>
**Adding an action for the "Buildings list" widget**

Now let's add the action for the "[Buildings list](/docs/{{docsPrefix}}user-guide/advanced-guides-for-working-with-dashboard/advanced-dashboard-guide-lesson-1/#adding-entities-table-widget){:target="_blank"}" widget so that clicking on a building name takes you to its state.

{% include images-gallery.html imageCollection="adding-action-buildings-list-widget" showListImageTitles="true" %}

Transition to the "Building A" state by selecting the corresponding building in the "Buildings list" widget:

{% include images-gallery.html imageCollection="navigation-between-states-1" showListImageTitles="true" %}

To go to the "Building B" state:

{% include images-gallery.html imageCollection="navigation-between-states-2" showListImageTitles="true" %}

<br>
**Adding a background image for the building state**

Let's add a background image for the new state to make it visually more attractive. You can use [the image from this tutorial](/images/user-guide/advanced-guides-for-working-with-dashboard/images-from-tutorial/building-background.png){:target="_blank"} or your own.

{% include images-gallery.html imageCollection="background-image-building-state" showListImageTitles="true" %}

Now let's move on to adding widgets to the "building" state.

### Adding information card about building

The first widget we'll add to the "building" state is a card that displays information about the selected building. It will include the building's address, contact person, phone number, and email address.

- Click the large "Add new widget" icon in the center of the screen;
- Select the "Markdown/HTML Card" from the "Cards" widgets bundle;
- Now we need to add an alias to define the entities from which the data will be extracted. In the "Alias" field, enter a name for it - "Selected entity", and click "Create a new one";
- Specify a filter type - "Entity from dashboard state", and click the "Add"; 
- Add data keys like "address", "contactPerson", "email", and "phone";
- Navigate to the "Appearance" tab, and add the Markdown/HTML pattern to the appropriate window by taking it from the documentation:

```html
<div class="card">
    <h1 class="card-title">Information on ${entityName}</h1>
    <div class="attributes">
        <div class="attribute_container">
            <div class="icon_wrapper">
                <tb-icon class="icon" color="primary" matButtonIcon>place</tb-icon>
            </div>
            <div class="attribute_content">
                <p class="attribute">${address}</p>
                <span class="attribute attribute_label">Address</span>
            </div>
        </div>
        <div class="attribute_container">
            <div class="icon_wrapper">
                <tb-icon class="icon" color="primary" matButtonIcon>person</tb-icon>
            </div>
            <div class="attribute_content">
                <p class="attribute">${contactPerson}</p>
                <span class="attribute attribute_label">Contact person</span>
            </div>
        </div>
        <div class="attribute_container">
            <div class="icon_wrapper">
                <tb-icon class="icon" color="primary" matButtonIcon>call</tb-icon>
            </div>
            <div class="attribute_content">
                <p class="attribute">${phone}</p>
                <span class="attribute attribute_label">Phone</span>
            </div>
        </div>
        <div class="attribute_container">
            <div class="icon_wrapper">
                <tb-icon class="icon" color="primary" matButtonIcon>mail_outline</tb-icon>
            </div>
            <div class="attribute_content">
                <p class="attribute">${email}</p>
                <span class="attribute attribute_label">Email</span>
            </div>
        </div>
    </div>
</div>
```
{:.copy-code.expandable-5}

- A little further down, find the "Markdown/HTML CSS" section. Add Markdown/HTML CSS by taking it from the documentation:

```css
.card {
    padding: 0px;
}

.card-title {
    font-size: 16px;
    letter-spacing: 0.25px;
    padding: 16px;
}

.attribute_container {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 16px;
    border-bottom: 1px solid #0000000d;
}

.icon {
    z-index: 1;
}

.icon_wrapper {
    display: flex;
    position: relative;
    align-items: center;
    padding: 8px;
    border: 1px solid var(--tb-primary-100, #9bc0e9);
    border-radius: 4px;
}

.icon_wrapper:before {
    content: '';
    z-index: 0;
    position: absolute;
    opacity: 0.1;
    background-color: var(--tb-primary-200, #305680);
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
}

.attribute {
    font-size: 14px;
    line-height: 20px;
}

.attribute_label {
    color: #00000061;
}
```
{:.copy-code.expandable-5}

- Navigate to the "Widget card" tab, disable "Enable fullscreen" and "Enable data export" options, and then click "Add" to confirm adding the widget.

We have added an information card about the building. Resize the widget to your liking.

{% include images-gallery.html imageCollection="adding-markdown-card-widget" %}

### Map widget

Next, we will add a map widget that will display only the selected building. In a previous lesson, we added a similar [widget that displays all our buildings on the map](/docs/{{docsPrefix}}user-guide/advanced-guides-for-working-with-dashboard/advanced-dashboard-guide-lesson-1/#openstreet-map-widget){:target="_blank"}. 
ThingsBoard allows copying widgets, so let’s add the map widget by copying and pasting.

- Return to the default state of your dashboard where the original map widget is located;
- Enter the dashboard editing mode;
- Copy the map widget: right-click on the map widget and select "Copy" from the context menu;
- Go to the building state;
- Paste the map widget: right-click on the dashboard area and select "Paste" to place the copied widget on the dashboard.

{% include images-gallery.html imageCollection="copy-paste-map-widget-1" %}

Now, we should change the data source to display only the selected building:

- Click the "pencil" icon on the map widget to open its settings;
- Change the data source to the alias "Selected entity" to focus the map on the selected building;
- Go to the "Appearance" tab, find the "Tooltip" section, and delete the code fragment as shown in the screenshot. Confirm all changes;
- Place the widget in the upper right corner of the dashboard and adjust its size. Save the dashboard by clicking "Save".

{% include images-gallery.html imageCollection="copy-paste-map-widget-2" %}

In the "Building list" widget, click on the row of any building to transition to its state.

{% include images-gallery.html imageCollection="copy-paste-map-widget-3" %}

### Offices list widget

Next, we will add a widget to display the list of offices in the selected building. It will be a table that, in addition to listing the offices, will show information about which floor the office is located on and the contact person&#39;s phone number.

#### Adding the necessary attributes

Information about the floor and the contact phone number should be added as attributes for each office. 
Additionally, as attributes, we will add information such as the office manager&#39;s first and last name, physical address, and office email, which we will use later in another widget.

{% include images-gallery.html imageCollection="adding-office-attributes-1" showListImageTitles="true" %} 

- Similarly, add the attributes "phone", "email", "address", and "officeManager".

After adding these attributes for both offices, your attributes list for each office should look like this:

{% include images-gallery.html imageCollection="adding-office-attributes-2" %}

Use the values for the attributes from the table below:

| **Offices** | **Floor** | **Email**         | **Phone**       | **Office manager** | **Address**           |
|:------------|:----------|:------------------|:----------------|:-------------------|:----------------------|
| Office A    | 3         | office.a@mail.com | +1 121 333 4455 | Emma Johnson       | 645 5th Ave, New York |
| Office B    | 4         | office.b@mail.com | +1 121 666 5522 | Millie Brown       | 645 5th Ave, New York |
| ---         

#### Adding Offices list widget

Now let's add the widget itself, which will display the list of offices. In this widget, we will use the alias type "[Asset search query](/docs/{{docsPrefix}}user-guide/ui/aliases/#asset-search-query){:target="_blank"}". 
This alias allows displaying assets of specified asset types (asset profiles) to a specified level that are linked to the root entity. In our case, the root entity is the selected building.

{% include images-gallery.html imageCollection="offices-list-widget-1" showListImageTitles="true" %}

<br>
The configured "building" state should look like this:

{% include images-gallery.html imageCollection="offices-list-widget-2" %}

## Office's state

By transitioning to the state of the selected office, you will receive the contact information of the person responsible for the office, see a list of all devices in the office and their main telemetry readings, as well as see the office plan and the placement of devices on it.

### Navigation between the building and office states

Let's set up the ability to transition to the "office" state by clicking on the row with its name in the "Offices list" widget. Use the "[Navigation to dashboard state](/docs/{{docsPrefix}}user-guide/ui/widget-actions/#navigate-to-new-dashboard-state){:target="_blank"}" action here as well.

{% include images-gallery.html imageCollection="navigate-to-office-state-1" showListImageTitles="true" %}

<br>
Navigate to the "Office A" state by selecting the appropriate office in the "Offices list" widget:

{% include images-gallery.html imageCollection="navigate-to-office-state-2" showListImageTitles="true" %}

Add a background image for this state. You already know how to do it. Use [the image from this tutorial](/images/user-guide/advanced-guides-for-working-with-dashboard/images-from-tutorial/office-room.png){:target="_blank"} or your own.

{% include images-gallery.html imageCollection="background-image-office-state" %}

### Adding information card about office

Let's add a widget card that will display contact information about the selected office, such as the building address, contact person, phone number, and email address.

- Click the large "Add new widget" icon in the center of the screen;
- Select the "Markdown/HTML Card" from the "Cards" widgets bundle;
- Specify the alias "Selected entity" as the data source;
- Add the following data keys: "address", "floor", "officeManager", "email", and "phone";
- Navigate to the "Appearance" tab. Add the Markdown/HTML pattern to the appropriate window by taking it from the documentation:

```html
<div class="card">
    <h1 class="card-title">Information on ${entityName}</h1>
    <div class="attributes">
        <div class="attribute_container">
            <div class="icon_wrapper">
                <tb-icon class="icon" color="primary" matButtonIcon>place</tb-icon>
            </div>
            <div class="attribute_content">
                <p class="attribute">${address}</p>
                <span class="attribute attribute_label">Address</span>
            </div>
        </div>
        <div class="attribute_container">
            <div class="icon_wrapper">
                <tb-icon class="icon" color="primary" matButtonIcon>mdi:floor-plan</tb-icon>
            </div>
            <div class="attribute_content">
                <p class="attribute">${floor:0}</p>
                <span class="attribute attribute_label">Floor</span>
            </div>
        </div>
        <div class="attribute_container">
            <div class="icon_wrapper">
                <tb-icon class="icon" color="primary" matButtonIcon>person</tb-icon>
            </div>
            <div class="attribute_content">
                <p class="attribute">${officeManager}</p>
                <span class="attribute attribute_label">Office manager</span>
            </div>
        </div>
        <div class="attribute_container">
            <div class="icon_wrapper">
                <tb-icon class="icon" color="primary" matButtonIcon>call</tb-icon>
            </div>
            <div class="attribute_content">
                <p class="attribute">${phone}</p>
                <span class="attribute attribute_label">Phone</span>
            </div>
        </div>
        <div class="attribute_container">
            <div class="icon_wrapper">
                <tb-icon class="icon" color="primary" matButtonIcon>mail_outline</tb-icon>
            </div>
            <div class="attribute_content">
                <p class="attribute">${email}</p>
                <span class="attribute attribute_label">Email</span>
            </div>
        </div>
    </div>
</div>
```
{:.copy-code.expandable-5}

- A little further down, find the "Markdown/HTML CSS" section. Add Markdown/HTML CSS according to the example below:

```css
.card {
    padding: 0px;
}

.card-title {
    font-size: 16px;
    letter-spacing: 0.25px;
    padding: 16px;
}

.attribute_container {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 16px;
    border-bottom: 1px solid #0000000d;
}

.icon {
    z-index: 1;
}

.icon_wrapper {
    display: flex;
    position: relative;
    align-items: center;
    padding: 8px;
    border: 1px solid var(--tb-primary-100, #9bc0e9);
    border-radius: 4px;
}

.icon_wrapper:before {
    content: '';
    z-index: 0;
    position: absolute;
    opacity: 0.1;
    background-color: var(--tb-primary-200, #305680);
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
}

.attribute {
    font-size: 14px;
    line-height: 20px;
}

.attribute_label {
    color: #00000061;
}
```
{:.copy-code.expandable-4}

- Navigate to the "Widget card" tab, disable "Enable fullscreen" and "Enable data export" options;
- Click "Add" to confirm adding the widget;
- Resize the widget to your liking. After, save the dashboard.

{% include images-gallery.html imageCollection="adding-office-markdown-card-widget" %}

### Image Map widget

Our next goal is to visually display the locations of our devices on the floor plan. For this, we will use the "Image Map" widget. 
But before we add this widget, we need to do some preparatory work by specifying the coordinates for each device and upload office plan image.

#### Adding device's coordinates

For each device, you need to specify its location coordinates on the building’s floor plan as attributes. These coordinates should be within a range from 0 to 1.

{% include images-gallery.html imageCollection="device-coordinates-1" showListImageTitles="true" %}

Similarly, add attributes with coordinates for the "Energy Meter", "Water Meter", and "IAQ Sensor" devices.

The final list of attributes for devices should look like this:

{% include images-gallery.html imageCollection="device-coordinates-2" %}

Coordinates of the devices used in this example:

| **Device**                         | **xPos** | **yPos** |
|:-----------------------------------|:---------|----------|
| SD-001 (Indoor Air Quality Sensor) | 0.51     | 0.68     |
| EM-002 (Energy Meter)              | 0.14     | 0.95     |
| WM-003 (Water Flow Meter)          | 0.14     | 0.32     |
| AM-307 (IAQ Sensor)                | 0.49     | 0.38     |
| ---                                

#### Upload office plan image

Now we need to upload the Office A plan and the Office B plan as graphic files to the [Image gallery](/docs/{{docsPrefix}}user-guide/image-gallery){:target="_blank"} and add links to them as server attributes for the "Office A" and "Office B" assets, respectively.

For Office A use [the provided Office A plan image](/images/user-guide/advanced-guides-for-working-with-dashboard/images-from-tutorial/office-a-plan.png){:target="_blank"} or your own.

- Go to the "Image gallery" page of the "Resources" section;
- Click "Upload image" button. This will open a new window designed for the upload image. Here, you can either drag and drop your office plan image file or select it through a file explorer. Then, click "Upload";
- Once the upload is successful and your image appears in the gallery, look for the "Embed image" icon next to the image. Click this to get a unique link that directly references your uploaded image;
- Go to the "Assets" page of the "Entities" section, and click on "Office A". Navigate to the "Attributes" tab, and click the "plus" icon to add a new attribute;
- Name this attribute "office-plan", choose "String" for the value type, and paste the previously copied link into the value field. Confirm the addition by clicking "Add";

We have added a new attribute with a link to the image of the Office A plan.

{% include images-gallery.html imageCollection="add-office-plan-1" %}

Similarly, upload the Office B plan image to the Image gallery, and add a link to it for "Office B" asset as a server attribute. Use the [provided Office B plan image](/images/user-guide/advanced-guides-for-working-with-dashboard/images-from-tutorial/office-b-plan.png){:target="_blank"}or your own.

{% include images-gallery.html imageCollection="add-office-plan-2" %}

#### Adding Image Map widget

Now that we've completed the preparatory steps, it's time to add the Image Map widget itself. In this widget we will use the "[Device search query](/docs/{{docsPrefix}}user-guide/ui/aliases/#device-search-query){:target="_blank"}" alias type. 
This alias allows displaying devices of specified device types (device profiles) to a specified level that are linked to the root entity. In our case, the root entity is the selected office.

- Go to the "office" state and enter dashboard editing mode;
- Click the "Add widget" button at the top of the screen;
- Select the "Image Map" widget from the "Maps" widgets bundle;
- Now we need to add a new alias. In the "Alias" field, enter a name for it - "Office sensors", and click "Create a new one";
- Select the alias type "Device search query", turn on the option "Use dashboard state entity as root", set "Max relation level" to 1, relation type to "Contains", and list the device types: "smart-sensor", "energy-sensor", and "water-sensor. Click "Add";
- Add "xPos", "yPos", and "type" as data keys;

{% include images-gallery.html imageCollection="adding-image-map-widget-1" %}

The "Appearance" tab:

- Set the [previously uploaded office plan image](#upload-office-plan-image) as the background of the widget:
  - Navigate to the "Appearance" tab, and scroll to the "Map provider settings" section;
  - Specify "Selected entity" as the image URL source entity alias. This setting ensures that the widget uses the image linked to the selected office;
  - Specify the "office-plan" as the image URL source entity attribute. This is the attribute where the link to the office plan image is stored;

Now, whenever you select a specific office, the widget will automatically fetch and display the associated office plan image from the "office-plan" attribute.

{% include images-gallery.html imageCollection="adding-image-map-widget-2" %}

- Scroll to the "Label" section. Here you can change the style of the label that is displayed above the marker.
Please copy the label content from the documentation and insert it into the label field of the widget.

The label text used in the example:

```text
<div style='position: relative; white-space: nowrap; text-align: center; font-size: 14px; top: 2px;'><span style='margin-left: -500%;'></span><div style='border: 2px solid #00695c; border-radius: 10px; color: #000; background-color: #fff;  padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px;'>${entityLabel}</div></div>
```
{: .copy-code}

{% include images-gallery.html imageCollection="adding-image-map-widget-label" %}

- In the "Tooltip" section, keep only ${entityName}, which is responsible for the device name. Delete everything else;

{% include images-gallery.html imageCollection="adding-image-map-widget-tooltip" %}

- Use the marker image function to displays the marker image with the corresponding index, depending on the device type:
  - Copy marker image function from the documentation and paste it into the "Marker image function" field.
  - Remove default markers, and upload new markers for each device type. Image markers used in this example: [Indoor Air Quality Sensor](/images/user-guide/advanced-guides-for-working-with-dashboard/images-from-tutorial/sensor-indoor-air-quality-default.svg){:target="_blank"}, [Energy Sensor](/images/user-guide/advanced-guides-for-working-with-dashboard/images-from-tutorial/sensor-energy-default.svg){:target="_blank"}, and [Water Flow Meter](/images/user-guide/advanced-guides-for-working-with-dashboard/images-from-tutorial/sensor-water-default.svg){:target="_blank"}.

{% capture difference %}
**Please note:**
Each marker has its own index (images[0], images[1], etc.). The marker&#39;s index must correspond to the device type specified in the marker image function.'
{% endcapture %}
{% include templates/info-banner.md content=difference %}

The marker image function used in the example:

```text
var type = dsData[dsIndex]['Type'];
if (type == 'smart-sensor') {
	var res = {
	    url: images[0],
	    size: 50
	}
	return res;
} else if (type == 'energy-sensor') {
    var res = {
	    url: images[1],
	    size: 50
	}
	return res;
} else if (type == 'water-sensor') {
    var res = {
	    url: images[2],
	    size: 50
	}
	return res;
}
```
{:.copy-code.expandable-5}

{% include images-gallery.html imageCollection="adding-image-map-widget-marker-image" %}

The "Widget card" tab:

- Navigate to the "Widget card" tab and change the title to "Office plan";

{% include images-gallery.html imageCollection="adding-image-map-widget-title" %}

- Scroll to the "Advanced widget style" section. This area allows you to make deeper widget settings. 
Input the following CSS code to the "Widget CSS" section:

```css
.leaflet-tooltip-pane .leaflet-tooltip-top{
    opacity: 1 !important;
}
```
{:.copy-code}

This CSS will make the label background opaque.

{% include images-gallery.html imageCollection="adding-image-map-widget-css" %}

- Uncheck the "Enable data export" option in the "Card buttons" section, and click "Add" to complete adding the Image Map widget.

{% include images-gallery.html imageCollection="adding-image-map-uncheck-option" %}

Move the "Office plan" widget to the right corner and adjust its size as shown in the screenshot.

{% include images-gallery.html imageCollection="adding-image-final" %}

<br>
Finally, let's make the Image Map widget automatically fill the layout by height:

- Go to the "Layout" settings;
- Enable the "Auto fill layout height" option, and click "Save";
- Apply layouts settings and save the dashboard.

As you can see, the Image Map widget has filled the entire height of the dashboard.

{% include images-gallery.html imageCollection="automatic-height-layout-filling" %}

A widget has been added that displays the plan of the selected office and the placement of devices on it.

{% include images-gallery.html imageCollection="image-map-widget" %}

### Office sensor list widget

Add another one widget to "office" state that will display devices and their telemetry in a list.

{% include images-gallery.html imageCollection="adding-office-list-widget-1" showListImageTitles="true" %}

<br>
The configured "office" state should look like this:

{% include images-gallery.html imageCollection="adding-office-list-widget-2" %}

## Final view of the dashboard for this lesson

Finally, your dashboard should look like this:

{% include images-gallery.html imageCollection="dashboard-final-lesson-2" %}

## Next step

In the third part of this guide, we will continue to develop our dashboard. We will add individual states and widgets for each device.
When you're ready to continue, just click the button below.

<br>
<p><a href="/docs/{{docsPrefix}}user-guide/advanced-guides-for-working-with-dashboard/advanced-dashboard-guide-lesson-3/" class="n-button add-device">Lesson 3: Charts and card widgets</a></p>