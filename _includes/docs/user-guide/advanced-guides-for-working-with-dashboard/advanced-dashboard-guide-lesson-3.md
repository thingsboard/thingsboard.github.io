* TOC
{:toc}

This lesson is the third part of a series on setting up the dashboard. 
In the first two parts, we explored assets and devices, added a control panel and states for buildings and offices, and implemented navigation between them. 
Before proceeding, we strongly recommend that you familiarize yourself with the previous parts if you have not done so already.

<br>
<p><a href="/docs/{{docsPrefix}}user-guide/advanced-guides-for-working-with-dashboard/advanced-dashboard-guide-lesson-2/" class="n-button add-device">Lesson 2: Dashboard states, widget actions, and Image Map widget</a></p>

<br>

In this part, we will add separate states for each device, simulate telemetry data for the devices, and display them on card widgets.

<div class="usecase-carousel owl-carousel owl-theme">
    <div>
        <img class="item-image" src="/images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/dashboard-final-lesson-3-1-pe.png" alt="Smart energy monitoring light theme exmple with the pie chart">
    </div>
    <div>
        <img class="item-image" src="/images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/dashboard-final-lesson-3-2-pe.png" alt="Smart energy monitoring dark theme exmple without the pie chart">
    </div>
    <div>
        <img class="item-image" src="/images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/dashboard-final-lesson-3-3-pe.png" alt="Smart energy monitoring dark theme exmple">
    </div>
    <div>
        <img class="item-image" src="/images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/dashboard-final-lesson-3-4-pe.png" alt="Smart energy monitoring dark theme exmple">
    </div>
    <div>
        <img class="item-image" src="/images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/dashboard-final-lesson-3-5-pe.png" alt="Smart energy monitoring dark theme exmple">
    </div>
    <div>
        <img class="item-image" src="/images/user-guide/advanced-guides-for-working-with-dashboard/lesson-3/dashboard-final-lesson-3-6-pe.png" alt="Smart energy monitoring dark theme exmple">
    </div>
</div>

## Simulation of the devices' telemetry data

Since we are using virtual devices, they do not send telemetry data to the ThingsBoard. However, we can simulate the transmission of such data in real time.
To do this, we will use [Rule Engine](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/){:target="_blank"}.

We will add a new [Rule Chain](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#rule-chain){:target="_blank"} with three [generator nodes](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/action-nodes/#generator-node){:target="_blank"} that will periodically generate simple messages with random telemetry readings, unique to each of our devices. Let's get started.

- Go to the "Rule chains" page and click "plus" icon, then "Create new rule chain";
- Name it "Device Telemetry Emulators", and click "Add". Open created rule chain by clicking on it;
- Find the [generator node](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/action-nodes/#generator-node){:target="_blank"} and drag it to the rules chain. With its help, we will generate telemetry values for further visualization on the dashboard. Name it "Indoor air quality data emulator", and set the number of messages to send to 100 and the sending period to 600;
- Specify the device "SD-001" (Indoor Air Quality Sensor) as originator;
- Copy the following script from the documentation:

```js
var msg = { temperature: Math.random()*10 + 20, humidity: Math.random()*15 + 30, co2: Math.random()*70 + 440 };
var metadata = { data: 40 };
var msgType = "POST_TELEMETRY_REQUEST";

return { msg: msg, metadata: metadata, msgType: msgType };
```
{:.copy-code}

- Paste the copied script into the generation function section to simulate temperature, humidity, and CO2 telemetry data;
- Click "Add".

{% include images-gallery.html imageCollection="adding-new-rule-chain-1" %}

You have added a "generator" node that will send telemetry to ThingsBoard on behalf of the "Indoor Air Quality Sensor" device every 10 minutes (600 seconds). There will be 100 such messages.

Similarly, add data emulator for "Energy Meter" device. Use the following script:

```js
var msg = { powerConsumption: Math.random() * 4.3 };
var metadata = { data: 40 };
var msgType = "POST_TELEMETRY_REQUEST";

return { msg: msg, metadata: metadata, msgType: msgType };
```
{:.copy-code}

{% include images-gallery.html imageCollection="adding-new-rule-chain-2" %}

<br>
Add data emulator for "Water Flow Meter" device. Use the following script:

```js
var msg = { waterConsumption: Math.random()*0.6 + 2, batteryLevel: Math.random()*1 + 45 };
var metadata = { data: 40 };
var msgType = "POST_TELEMETRY_REQUEST";

return { msg: msg, metadata: metadata, msgType: msgType };
```
{:.copy-code}

{% include images-gallery.html imageCollection="adding-new-rule-chain-3" %}

<br>
Finally, add data emulator for "IAQ Sensor" device. Use the following script:

```js
var msg = { temperature: Math.random()*10 + 20, humidity: Math.random()*15 + 30, co2: Math.random()*70 + 440 };
var metadata = { data: 40 };
var msgType = "POST_TELEMETRY_REQUEST";

return { msg: msg, metadata: metadata, msgType: msgType };
```
{:.copy-code}

{% include images-gallery.html imageCollection="adding-new-rule-chain-4" %}

<br>
Now we need to direct these messages to the Root Rule Chain for further processing and saving telemetry in the database.

{% include images-gallery.html imageCollection="adding-new-rule-chain-5" showListImageTitles="true" %}

After waiting for the period specified in the generator node, you can see the telemetry on your device's "Latest telemetry" tab.

{% include images-gallery.html imageCollection="incoming-telemetry-1" %}

## Displaying devices telemetry in Office sensors list widget

Now that we are receiving telemetry data from the devices, we can display it on the "Office sensors list" widget.
Devices can send multiple telemetry values. By default, each telemetry value (key) is represented by a separate column in the table widget.
We'll combine multiple telemetry values into a single column for a cleaner look and hide the columns we don’t need.

{% include images-gallery.html imageCollection="customize-office-sensors-list-widget-1" showListImageTitles="true" %}

Cell content function, using in this example:

```text
if (entity.temperature && entity.humidity && entity.co2){
    return '<div style="display:flex;flex-direction:row;flex-wrap:wrap;gap:7px;margin:10px 0;align-items:center">' +  
        '<div style="padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px;background:#e0e0e0;border-radius:20px;">Temp: ' + entity.temperature.toFixed(0) + ' °C</div>' + 
        '<div style="padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px;background:#e0e0e0;border-radius:20px">Hum: ' + entity.humidity.toFixed(0) + ' %</div>' + 
        '<div style="padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px;background:#e0e0e0;border-radius:20px">CO2: ' + entity.co2.toFixed(0) + ' ppm</div>'
    + '</div>';
}
else if (entity.powerConsumption){
    return '<div style="display: inline-block;padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px;background:#d3d3d3;border-radius:20px">' + entity.powerConsumption.toFixed(2) + ' kWh per hour</div>';
}
else if (entity.waterConsumption){
    return '<div style="display: inline-block;padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px;background:#d3d3d3;border-radius:20px">' + entity.waterConsumption.toFixed(2) + ' gal per hour</div>';
}
return value;
```
{:.copy-code.expandable-5}

Now, the Office sensors list widget will display a list of your devices with their telemetry values combined into a single column for each device.

{% include images-gallery.html imageCollection="customize-office-sensors-list-widget-2" %}

## Adding state for each device & navigation between states

Now we need to add separate states for each of our devices and set up transitions from the "Office sensors list" and "Office plan" widgets to these states.

{% include images-gallery.html imageCollection="adding-devices-states-1" showListImageTitles="true" %}

Similarly, add "<b>Energy Meter</b>" state with the "<b>energy_sensor</b>" state Id and "<b>Water Flow Meter</b>" state with the "<b>water_sensor</b>" state Id.

{% include images-gallery.html imageCollection="adding-devices-states-2" %}

### Customize Office sensors list widget

Now let's customize the "[Office sensors list](/docs/{{docsPrefix}}user-guide/advanced-guides-for-working-with-dashboard/advanced-dashboard-guide-lesson-2/#office-sensor-list)" widget by adding an action so that when you click on a device row, we transition to its state.

- Go to the "office" state and enter editing mode of the "Office sensors list" widget;
- Scroll to the "Actions" menu section and click the "Add action" button;
- The "Actions" window will open. Click the "plus" icon in the top right corner of the screen to open a new "Add action" window;
- In the "Add action" dialog, select "On row click" action source, and enter action name. Then, choose the "Custom action" action type. After choosing an action type, the "Custom action function" section appears. Paste the function by copying it from the documentation:

```js
const $injector = widgetContext.$injector;
const deviceService = $injector.get(widgetContext.servicesMap.get('deviceService'));

deviceService.getDevice(entityId.id).subscribe(device => {
    if (device.type === 'energy-sensor') {
        openDashboardState('energy_sensor');
    } else if (device.type === 'water-sensor') {
        openDashboardState('water_sensor');
    } else {
        openDashboardState('smart_sensor');
    }
});

function openDashboardState(stateId) {
    const params = {
        entityId: entityId,
        entityName: entityName
    };
    widgetContext.stateController.openState(stateId, params, false);
}
```
{:.copy-code.expandable-4}

- After, click "Add";
- Now in the "Actions" window, you can see the configured action, so you can double-check the action source, icon, and action type. Click "Save";
- Click "Apply" to save the widget settings;
- Save the dashboard by clicking "Save" in the upper right corner of the dashboard page.

{% include images-gallery.html imageCollection="action-go-to-device-1" %}

Check how it works. Click on the row of any device to transition to its state.

{% include images-gallery.html imageCollection="action-go-to-device-2" %}

### Customize Office plan widget

Now, enhance the functionality of the "[Office plan](/docs/{{docsPrefix}}user-guide/advanced-guides-for-working-with-dashboard/advanced-dashboard-guide-lesson-2/#adding-image-map-widget)" widget by enabling tooltip that display telemetry data of the sensors and adding the ability to drill down to the details of each device. Follow these steps to customize the widget:

- While in the "office" state, enter the dashboard edit mode;
- Click the "pencil" icon of the "Office sensors list" widget to modify its settings;
- Add the following data keys to the existing ones: "temperature", "humidity", "co2", "powerConsumption", "waterConsumption," and "batteryLevel". These keys represent the telemetry data that will be shown in the tooltip when clicking on the device;

{% include images-gallery.html imageCollection="customize-office-plan-widget-1" %}

- Navigate to the "Appearance" tab. Scroll to the "Tooltip" section and enable the "Use tooltip function" option. Now, copy the tooltip function from the documentation and paste it into the "Tooltip function" field;

The tooltip function used in the example:

```js
let tooltip = '<h1 style="margin: 8px 0; width: 200px; border-bottom: 1px solid #0000000d; padding-bottom: 8px; padding-right: 15px; font-size: 16px; font-weight: 600; line-height: 24px; top: 15px;">${entityLabel}</h1>';
let typeTooltip = '';
if (data.deviceType == 'energy-sensor') {
    typeTooltip = '<div style="display: flex; flex-direction: row; justify-content: space-between;align-items: center; gap: 10px;">' +
        '<span style="font-weight: 600; font-size: 12px; line-height: 16px; color: #0000008a; max-width: 90px;">Power consumption: </span>' +
        '<span style="font-weight: 600; font-size: 13px; line-height: 20px; color: #000000de">${powerConsumption} per day</span>' +
    '</div>';
    typeTooltip += '<div style="margin-top: 17px; text-align: center; background: var(--tb-primary-50, #87CEEB); border-radius: 6px;"><link-act name="sensor_details">Details ></link-act></div>';
} else if (data.deviceType == 'smart-sensor') {
    typeTooltip = '<div style="display: flex; flex-direction: column">' +
        '<div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; gap: 10px">' +
            '<span style="font-weight: 600; font-size: 12px; line-height: 16px; color: #0000008a; max-width: 90px;">Temperature: </span>' +
            '<span style="font-weight: 600; font-size: 13px; line-height: 20px; color: #000000de">${temperature:0} °C</span>' +
        '</div>' +
        '<div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; gap: 10px">' +
            '<span style="font-weight: 600; font-size: 12px; line-height: 16px; color: #0000008a; max-width: 90px;">Humidity: </span>' +
            '<span style="font-weight: 600; font-size: 13px; line-height: 20px; color: #000000de">${humidity:0} %</span>' +
        '</div>' +
        '<div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; gap 10px;">' +
            '<span style="font-weight: 600; font-size: 12px; line-height: 16px; color: #0000008a; max-width: 90px;">CO2: </span>' +
            '<span style="font-weight: 600; font-size: 13px; line-height: 20px; color: #000000de">${co2:0} ppm</span>' +
        '</div>' +
    '</div>';
    typeTooltip += '<div style="margin-top: 17px; text-align: center; background: var(--tb-primary-50, #87CEEB); border-radius: 6px;"><link-act name="sensor_details">Details ></link-act></div>';
} else if (data.deviceType == 'water-sensor') {
    typeTooltip = '<div style="display: flex; flex-direction: column">' + 
        '<div style="font-weight: 600; display: flex; flex-direction: row; justify-content: space-between; align-items: center; gap: 10px">' +
            '<span style="font-weight: 600; font-size: 12px; line-height: 16px; color: #0000008a; max-width: 90px;">Water consumption: </span>' +
            '<span style="font-weight: 600; font-size: 13px; line-height: 20px; color: #000000de">${waterConsumption} per day</span>' +
        '</div>' +
        '<div style="font-weight: 600; display: flex; flex-direction: row; justify-content: space-between; align-items: center; gap: 10px">' +
            '<span style="font-weight: 600; font-size: 12px; line-height: 16px; color: #0000008a; max-width: 90px;">Battery Level: </span>' +
            '<span style="font-weight: 600; font-size: 13px; line-height: 20px; color: #000000de">${batteryLevel:0} %</span>' +
        '</div>';
    '</div>';    
    typeTooltip += '<div style="margin-top: 17px; text-align: center; background: var(--tb-primary-50, #87CEEB); border-radius: 6px;"><link-act name="sensor_details">Details ></link-act></div>';
}
return tooltip + typeTooltip;
```
{:.copy-code.expandable-4}

- Adjust the tooltip's Y offset relative to the marker to -0.77 for optimal positioning;

{% include images-gallery.html imageCollection="customize-office-plan-widget-2" %}

- Go to the "Widget card" tab. Access "Advanced widget style" and paste the provided CSS into the "Widget CSS" field to enhance the widget visual appearance:

The CSS used in this example:

```css
.leaflet-tooltip-pane .leaflet-tooltip-top{
    opacity: 1 !important;
}
.leaflet-popup-content {
    width: auto !important;
    margin: 8px;
}
a.leaflet-popup-close-button {
    font-size: 20px;
    color: black;
    border-radius: 2px;  
    top: 8px;
    right: 5px;
}
```
{:.copy-code.expandable-4}

{% include images-gallery.html imageCollection="customize-office-plan-widget-3" %}

- Navigate to the "Actions" tab and click "plus" to add new action;
- In the "Add action" dialog, select "On row click" as the action source. Choose "Custom action" for the action type and paste the specified function in the "Custom action function" section. After, click "Add";

The function used in this example:

```js
const $injector = widgetContext.$injector;
const deviceService = $injector.get(widgetContext.servicesMap.get('deviceService'));

deviceService.getDevice(entityId.id).subscribe(device => {
    if (device.type === 'smart-sensor') {
        openDashboardState('smart_sensor');
    } else if (device.type === 'water-sensor') {
        openDashboardState('water_sensor');
    } else {
        openDashboardState('energy_sensor');
    }
});

function openDashboardState(stateId) {
    const params = {
        entityId: entityId,
        entityName: entityName
    };
    widgetContext.stateController.openState(stateId, params, false);
}
```
{:.copy-code.expandable-4}

- Click "Apply" to save the modifications;
- Save your dashboard configuration by selecting "Save" in the upper-right corner of the dashboard.

{% include images-gallery.html imageCollection="customize-office-plan-widget-4" %}

Click any marker on the "Office plan" widget to open a tooltip. In each device’s tooltip, there is a line to access the details of the selected device. Click on this line.

{% include images-gallery.html imageCollection="customize-office-plan-widget-5" %}

## Configuring state for Indoor Air Quality Sensor

To effectively monitor and analyze indoor air quality, we'll add three widgets to display current readings of temperature, humidity, and CO2 levels, alongside two widgets for tracking historical data on air quality in the office.
This will allow not only to monitor the current state of air quality parameters but also to analyze the trends of their changes over time.

### Temperature, humidity, and CO2 level cards widgets

In ThingsBoard, there is a bundle of pre-configured widgets for displaying telemetry of the indoor environment, such as temperature, humidity, and CO2 levels, etc. In this lesson, we will use this widgets bundle.

First, add a widget to display the current temperature in the office.

{% include images-gallery.html imageCollection="indoor-air-quality-sensor-card-widgets-1" showListImageTitles="true" %}

Similarly, add a widget to display the humidity.

{% include images-gallery.html imageCollection="indoor-air-quality-sensor-card-widgets-2" showListImageTitles="true" %}

Now, add a widget to display the CO2 level.

{% include images-gallery.html imageCollection="indoor-air-quality-sensor-card-widgets-3" showListImageTitles="true" %}

Now, you can see the current values of temperature, humidity, and CO2 levels.

{% include images-gallery.html imageCollection="indoor-air-quality-sensor-card-widgets-4" %}

### Temperature and humidity history charts

Now, we will add a widget that displays temperature and humidity readings in the office on a chart for the last 12 hours. This way, we can track their changes.

{% include images-gallery.html imageCollection="temperature-and-humidity-history-1" showListImageTitles="true" %}

<br>
The "Temperature and humidity history" widget is added, but there are no charts on it. We will fix it right now.

To correctly display data on widgets that use the dashboard [timewindow](/docs/{{docsPrefix}}user-guide/dashboards/#timewindow), you need to adjust the time interval and aggregation function settings. To do this, open the time window, select to display data from the last 12 hours, choose the aggregation as "Average," and the grouping interval as "1 hour".

This setup ensures that all widgets using the dashboard's timewindow will now display data averaged over each of the last 12 hours, providing a clear view of the temperature and humidity trends. 
Now, you can effectively monitor the average temperature and humidity readings for each hour over the past 12 hours.

{% include images-gallery.html imageCollection="temperature-and-humidity-history-2" %}

### CO2 level chart

Now, add another line chart widget to display CO2 data in the office for the last 12 hours.

{% include images-gallery.html imageCollection="air-quality-widget-1" showListImageTitles="true" %}

The configured "Indoor Air Quality Sensor" state should look like this:

{% include images-gallery.html imageCollection="smart-sensor-state" %}

## Configuring state for Energy Meter

Let's proceed to configure the state for the "Energy Meter" device. We will add two widgets: one to display power consumption per hour, and another to display power consumption data over the last 12 hours.

### Power consumption per hour

To display hourly power consumption, we will use the "Power consumption card" widget from the "Industrial widgets" widget bundle:

{% include images-gallery.html imageCollection="power-consumption-per-hour-1" showListImageTitles="true" %}

### Power consumption chart

The next widget we will add is a "Range chart". A feature of this widget is that the line color on the chart is colored according to the range in which the value falls.
This widget will visualize data on power consumption over the last 12 hours.

{% include images-gallery.html imageCollection="power-consumption-range-chart-1" showListImageTitles="true" %}

Now you can monitor hourly power consumption and power consumption data for the last 12 hours.

{% include images-gallery.html imageCollection="energy-meter-state-final" %}

## Configuring state for Water Flow Meter

We still need to set up the state for the "Water Flow Meter" device. We will add a card widget to display the average water consumption per hour, a chart widget to display water consumption data over the last 12 hour, and the device's battery level widget.

### Water consumption per hour

To visualize hourly water consumption, you can use any card widget and customize it. In this example, we will use the "Power consumption card" widget from the "Industrial widgets" widgets bundle and configure it according to our needs.

{% include images-gallery.html imageCollection="water-consumption-per-hour-1" showListImageTitles="true" %}

### Water consumption chart

Now we need to visualize the water consumption data for the last 12 hours. Earlier, we added a similar widget to track power consumption. Therefore, let's copy the ["Power consumption history" widget](#power-consumption-chart), insert it into the "water_sensor" state, and change its data source to water consumption.

{% include images-gallery.html imageCollection="water-consumption-range-chart-1" showListImageTitles="true" %}

### Battery level widget

And lastly in this tutorial, we will add the "Battery charge" widget. It will display the battery charge level in the "Water Flow Meter" device.

{% include images-gallery.html imageCollection="battery-charge-1" showListImageTitles="true" %}

Now you can track water usage per hour, over the last 12 hours, and the battery charge level in the "Water Flow Meter" device.

{% include images-gallery.html imageCollection="water-flow-meter-final" %}

## Final view of the dashboard for this lesson

Finally, your dashboard should look like this:

{% include images-gallery.html imageCollection="dashboard-final-lesson-3" %}

## Next step

At this stage, the development of our dashboard is complete. In the next lesson, we will share this dashboard with customers.
When you are ready to proceed, simply click the button below.

<br>
<p><a href="/docs/{{docsPrefix}}user-guide/advanced-guides-for-working-with-dashboard/advanced-dashboard-guide-lesson-4/" class="n-button add-device">Lesson 4: Share dashboard with customer</a></p>