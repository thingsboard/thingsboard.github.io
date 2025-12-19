* TOC
{:toc}

This lesson is the third installment in our series on setting up a dashboard to visualize and monitor data from devices integrated into your premises. 
In the first two parts, we explored assets and devices, added a dashboard, created states for buildings and offices, and implemented navigation between them. 
Before we proceed, we strongly recommend reviewing the previous lessons if you have not done so already.

<br>
<p><a href="/docs/{{docsPrefix}}user-guide/advanced-guides-for-working-with-dashboard/advanced-dashboard-guide-lesson-2/" class="button">Lesson 2: Dashboard states, widget actions, and Image Map widget</a></p>

<br>

In this part, we will add separate states for each device, simulate telemetry data for the devices, and display them on card widgets.

{% include default-carousel.liquid collectionMap = 'dashboard-lesson-3' nonActiveItemsVisibility = false %}

## Simulation of the devices' telemetry data

Since we are using virtual devices, they do not send telemetry data to the ThingsBoard. However, we can simulate the transmission of such data in real time.
To do this, we will use [Rule Engine](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/){:target="_blank"}.

We will add a new [Rule Chain](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#rule-chain){:target="_blank"} with four [generator nodes](/docs/user-guide/rule-engine-2-0/nodes/action/generator/){:target="_blank"} that will periodically generate simple messages with random telemetry readings, unique to each of our devices.
Then, we will save this telemetry in the database using the [save time series](/docs/user-guide/rule-engine-2-0/nodes/action/save-timeseries/){:target="_blank"} node.
Let&#39;s get started.


First, create the new rule chain:

- Go to the "Rule chains" page and click "plus" icon, then select the "Create new rule chain" from drop-down menu;
- Name it "Device Telemetry Emulators", and click "Add"; 
- Open created rule chain by clicking on it.

{% include images-gallery.html imageCollection="adding-new-rule-chain-1" %} 

Now, let&#39;s add the necessary nodes:

- Find the [generator node](/docs/user-guide/rule-engine-2-0/nodes/action/generator/){:target="_blank"} and drag it to the rule chain. With its help, we will generate telemetry values for further visualization on the dashboard. Name it "Indoor air quality data emulator", and set the number of messages to send to 100 and the sending period to 600;
- Specify the device "SD-001" (Indoor Air Quality Sensor) as originator;
- Copy the following script from the documentation:

```js
var temperature = toFixed(Math.random()*10 + 18, 2);
var humidity = toFixed(Math.random()*15 + 40, 2);
var co2 = toFixed(Math.random()*70 + 440, 2);
var msg = { temperature: temperature, humidity: humidity, co2: co2 };
var metadata = { data: 40 };
var msgType = "POST_TELEMETRY_REQUEST";
return { msg: msg, metadata: metadata, msgType: msgType };
```
{:.copy-code}

- Paste the copied script into the generator function section to simulate temperature, humidity, and CO2 telemetry data;
- Click "Add".

We added a "generator" node that will send telemetry to ThingsBoard on behalf of the "Indoor Air Quality Sensor" device every 10 minutes (600 seconds). There will be 100 such messages.

{% include images-gallery.html imageCollection="adding-new-rule-chain-2" %}

<br>
Similarly, add data emulator for "Energy Meter" device:

- Name it "Power consumption data emulator";
- Set the number of messages to send to 100 and the sending period to 600;
- Specify the device "EM-002" (Energy Meter) as originator;
- Use the following script to simulate power consumption telemetry data:

```js
var powerConsumption = toFixed(Math.random() * 2.2, 2);
var msg = { powerConsumption: powerConsumption};
var metadata = { data: 40 };
var msgType = "POST_TELEMETRY_REQUEST";
return { msg: msg, metadata: metadata, msgType: msgType };
```
{:.copy-code}

- Click "Add.

{% include images-gallery.html imageCollection="adding-new-rule-chain-3" %}

<br>
Add data emulator for "Water Flow Meter" device.

- Name it "Water consumption data emulator";
- Set the number of messages to send to 100 and the sending period to 600;
- Specify the device "WM-003" (Water Flow Meter) as originator;
- Use the following script to simulate water consumption telemetry data, and battery voltage data:

```js
var waterConsumption = toFixed(Math.random()*1.3, 2);
var batteryLevel = toFixed(Math.random()*1 + 45, 2);
var msg = { waterConsumption: waterConsumption, batteryLevel: batteryLevel };
var metadata = { data: 40 };
var msgType = "POST_TELEMETRY_REQUEST";
return { msg: msg, metadata: metadata, msgType: msgType };
```
{:.copy-code}

- Click "Add.

{% include images-gallery.html imageCollection="adding-new-rule-chain-4" %}

<br>
Finally, add data emulator for "IAQ Sensor" device. Name it "IAQ data emulator". Set the number of messages to send to 100 and the sending period to 600.

- Name it "Water consumption data emulator";
- Set the number of messages to send to 100 and the sending period to 600;
- Specify the device "AM-307" (IAQ Sensor) as originator;
- Use the following script to simulate water consumption, and battery voltage telemetry data:

```js
var temperature = toFixed(Math.random()*10 + 18, 2);
var humidity = toFixed(Math.random()*15 + 40, 2);
var co2 = toFixed(Math.random()*70 + 440, 2);
var msg = { temperature: temperature, humidity: humidity, co2: co2 };
var metadata = { data: 40 };
var msgType = "POST_TELEMETRY_REQUEST";
return { msg: msg, metadata: metadata, msgType: msgType };
```
{:.copy-code}

- Click "Add.

{% include images-gallery.html imageCollection="adding-new-rule-chain-5" %}

<br>
Four generator nodes have been added. Now, we need to route incoming messages from these nodes to the "[save time series](/docs/user-guide/rule-engine-2-0/nodes/action/save-timeseries/){:target="_blank"}" node to save time-series data in the database.

- Find the "save time series" node and drag it to the rule chain;
- Name it "save time series", and click "Add".

We have added all the necessary nodes.

{% include images-gallery.html imageCollection="adding-new-rule-chain-6" %}

Now, we need to connect the generator nodes to the "save time series" node for message routing:

{% include images-gallery.html imageCollection="adding-new-rule-chain-7" showListImageTitles="true" %}

After waiting for the period specified in the generator nodes, you will be able to see the telemetry on the "Latest telemetry" tab of your devices.

{% include images-gallery.html imageCollection="incoming-telemetry-1" %}

## Displaying devices telemetry in Office sensors list widget

Now that we are receiving telemetry data from the devices, we can display it on the "Office sensors list" widget.

{% include images-gallery.html imageCollection="customize-office-sensors-list-widget-1" showListImageTitles="true" %}

Devices can send multiple telemetry values. For example, an Indoor Air Quality Sensor sends values of temperature, humidity, and CO2 level. 
By default, each telemetry value (key) is represented as a separate column in the table widget. 
However, this layout might not be the most convenient for viewing. 
Let&#39;s combine the telemetry values for a device that transmits multiple readings into a single column for a cleaner appearance and hide unnecessary columns.

{% include images-gallery.html imageCollection="customize-office-sensors-list-widget-2" showListImageTitles="true" %}

Cell content function used in this example:

```text
if (entity.temperature && entity.humidity && entity.co2){
    return '<div style="display:flex;flex-direction:row;flex-wrap:wrap;gap:7px;margin:10px 0;align-items:center">' +  
        '<div style="padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px;background:#e0e0e0;border-radius:20px;">Temp: ' + entity.temperature.toFixed(0) + ' °C</div>' + 
        '<div style="padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px;background:#e0e0e0;border-radius:20px">Hum: ' + entity.humidity.toFixed(0) + ' %</div>' + 
        '<div style="padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px;background:#e0e0e0;border-radius:20px">CO2: ' + entity.co2.toFixed(0) + ' ppm</div>'
    + '</div>';
}
else if (entity.powerConsumption){
    return '<div style="display: inline-block;padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px;background:#d3d3d3;border-radius:20px">' + entity.powerConsumption.toFixed(1) + ' kW</div>';
}
else if (entity.waterConsumption){
    return '<div style="display: inline-block;padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px;background:#d3d3d3;border-radius:20px">' + entity.waterConsumption.toFixed(1) + ' gal</div>';
}
return value;
```
{:.copy-code.expandable-5}

For the "power Consumption" and "water Consumption" keys, we will sum all data point values over the selected time interval.
We will specify the time interval later in the dashboard time window settings.

- Click the "pencil" icon of the "powerConsumption" key;
- Select the "Sum" as the aggregation function, and click "Save";
- Also, set "Sum" as the aggregation function for the telemetry key "waterConsumption". Remove the automatically added prefixes from the keys label "powerConsumption" and "waterConsumption" after selecting aggregation;
- Scroll up to locate the time window settings. Use the dashboard&#39;s time window and apply the changes to the widget;
- Save changes to the dashboard.

Now, in the "Office sensors list" widget, the telemetry for the Indoor Air Quality Sensor is displayed in a single column.

{% include images-gallery.html imageCollection="customize-office-sensors-list-widget-3" %}

However, telemetry for the other two devices is not displayed because the aggregation applied to the keys "powerConsumption" and "waterConsumption" is available only for fixed time intervals, like "current day" or "current month", etc., and is not available for sliding window intervals like "last 30 minutes," "last 24 hours," or "last 1 minute," which our dashboard currently uses. 
Therefore, let&#39;s proceed to configure the time window.

## Time window

To correctly display data on widgets that use the [dashboard time window](/docs/{{docsPrefix}}user-guide/dashboards/#time-window){:target="_blank"}, you need to adjust the time interval and aggregation parameters.
Data sent by devices will be grouped by hour and displayed for the current day, week, or month, depending on your choice.

Let’s proceed with the setup:

{% include images-gallery.html imageCollection="time-window-configuration-1" showListImageTitles="true" %}

Now, configure the "History" tab:

- Navigate to the "History" tab, and hide the "Last" and "Range" interval options from users;
- For the "Relative" tab, leave the default settings;
- Set "Sum" as the aggregation function and ensure users cannot modify this parameter by hiding it;
- Configure the grouping interval to "1 hour" and restrict users from changing it.
- Click "Apply" to save the time window adjustments;
- Select "Update" to apply the updated time window settings to the dashboard;
- Save the dashboard to confirm the changes.

As you can see, the "Office sensors list" widget now displays data on the office&#39;s energy and water consumption for the selected time period, which in our case is the current day.

{% include images-gallery.html imageCollection="time-window-configuration-2" %}

This configuration ensures that all widgets using the dashboard&#39;s time window will display the aggregated telemetry values for the current day (or another selected interval) grouped by the hour.

## Adding state for each device & navigation between states

Now we need to add separate states for each of our devices and set up transitions from the "Office sensors list" and "Office plan" widgets to these states.

{% include images-gallery.html imageCollection="adding-devices-states-1" showListImageTitles="true" %}

Similarly, add "Energy Meter" state with the **energy_sensor** state Id and "Water Flow Meter" state with the **water_sensor** state Id.

{% include images-gallery.html imageCollection="adding-devices-states-2" %}

### Customize Office sensors list widget

Now let&#39;s customize the "[Office sensors list](/docs/{{docsPrefix}}user-guide/advanced-guides-for-working-with-dashboard/advanced-dashboard-guide-lesson-2/#office-sensors-list-widget){:target="_blank"}" widget by adding an action so that when you click on a device row, we transition to its state.

- Go to the "office" state and enter editing mode of the "Office sensors list" widget;
- Scroll to the "Actions" menu section and click the "Add action" button;
- The "Actions" window will open. Click the "plus" icon in the top-right corner of the screen. Complete the following steps in the "Add action" dialog: 
  - Select "On row click" action source;
  - Enter action name;
  - Choose the "Custom action" action type;
  - After choosing an action type, the "Custom action function" section appears. Paste the function by copying it from the documentation.
  This function performs a transition to the dashboard state depending on the type (device profile) of the selected device.

Custom action function used in this example:

```js
const $injector = widgetContext.$injector;
const deviceService = $injector.get(widgetContext.servicesMap.get('deviceService'));

deviceService.getDevice(entityId.id).subscribe(device => {
    if (device.type === 'energy-sensor') {
        openDashboardState('energy_sensor');
    } else if (device.type === 'water-sensor') {
        openDashboardState('water_sensor');
    } else {
        openDashboardState('air_sensor');
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

- Afterwards, click "Add";
- In the "Actions" window, you can review the configured action, including its source, icon, and type. Click "Save";
- Click "Apply" to save the widget settings;
- Save the dashboard by clicking "Save" in the upper-right corner of the dashboard page.

{% include images-gallery.html imageCollection="action-go-to-device-1" %}

Check how it works. Click on the row of any device to transition to its state.

{% include images-gallery.html imageCollection="action-go-to-device-2" %}

### Customize Office plan widget

Enhance the functionality of the "[Office plan](/docs/{{docsPrefix}}user-guide/advanced-guides-for-working-with-dashboard/advanced-dashboard-guide-lesson-2/#adding-image-map-widget){:target="_blank"}" widget by adding a tooltip that display telemetry data for the sensors and adding the ability to drill down to the details of each device. Follow these steps to customize the widget:

- While in the "office" state, enter the dashboard edit mode;
- Click the "pencil" icon of the "Office sensors list" widget to modify its settings;
- Add the following data keys to the existing ones: "temperature", "humidity", "co2", "powerConsumption", "waterConsumption," and "batteryLevel". These keys represent the telemetry data that will be shown in the tooltip when clicking on the device;

{% include images-gallery.html imageCollection="customize-office-plan-widget-1" %}

- Navigate to the "Appearance" tab. Scroll to the "Tooltip" section and turn on the "Use tooltip function" option. Now, copy the tooltip function from the documentation and paste it into the "Tooltip function" field;

The tooltip function used in the example:

```js
let tooltip = '<h1 style="margin: 8px 0; width: 200px; border-bottom: 1px solid #0000000d; padding-bottom: 8px; padding-right: 15px; font-size: 16px; font-weight: 600; line-height: 24px; top: 15px;">${entityLabel}</h1>';
let typeTooltip = '';
if (data.deviceType == 'energy-sensor') {
  typeTooltip = '<div style="display: flex; flex-direction: row; justify-content: space-between;align-items: center; gap: 10px;">' +
          '<span style="font-weight: 600; font-size: 12px; line-height: 16px; color: #0000008a; max-width: 90px;">Power consumption: </span>' +
          '<span style="font-weight: 600; font-size: 13px; line-height: 20px; color: #000000de">${powerConsumption:1} kW</span>' +
          '</div>';
  typeTooltip += '<div style="margin-top: 17px; text-align: center; background: var(--tb-primary-50, #87CEEB); border-radius: 6px;"><link-act name="sensor_details">Details ></link-act></div>';
} else if (data.deviceType == 'air-sensor') {
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
          '<span style="font-weight: 600; font-size: 13px; line-height: 20px; color: #000000de">${waterConsumption:1} gal</span>' +
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

- Adjust the tooltip&#39;s Y offset relative to the marker to -0.77 for optimal positioning;

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

- Navigate to the "Actions" tab and click "plus" to add new action. Complete the following steps in the "Add action" dialog:
  - Select "Tooltip tag action" as the action source;
  - Enter "sensor_details" as action name;
  - Choose "Custom action" for the action type;
  - Paste the custom action function by copying it from the documentation.

The custom action function used in this example:

```js
const $injector = widgetContext.$injector;
const deviceService = $injector.get(widgetContext.servicesMap.get('deviceService'));

deviceService.getDevice(entityId.id).subscribe(device => {
    if (device.type === 'air-sensor') {
        openDashboardState('air_sensor');
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

- Then, click "Add";

{% capture difference %}
Ensure that the name of the created action matches the name specified in the tooltip function.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

- Click "Apply" to save the modifications;
- Save your dashboard configuration by selecting "Save" in the upper-right corner of the dashboard.

{% include images-gallery.html imageCollection="customize-office-plan-widget-4" %}

Click any marker on the "Office plan" widget to open a tooltip. Each device&#39;s tooltip includes a line button to access the details of the selected device. Click on this line.

{% include images-gallery.html imageCollection="customize-office-plan-widget-5" %}

## Configuring air_sensor state

To effectively monitor and analyze indoor air quality, we&#39;ll add three widgets to display current readings of temperature, humidity, and CO2 levels, alongside two widgets for tracking historical data on air quality in the office.
This will allow us to not only monitor the current state of air quality but also to analyze the trends in their changes over time.

### Temperature, humidity, and CO2 level cards widgets

In ThingsBoard, there is a bundle of pre-configured widgets for displaying telemetry of the indoor environment, including temperature, humidity, and CO2 levels, etc. In this lesson, we will use this widgets bundle.

First, add a widget to display the current temperature in the office.

{% include images-gallery.html imageCollection="indoor-air-quality-sensor-card-widgets-1" showListImageTitles="true" %}

Now, add a widget to display the humidity.

{% include images-gallery.html imageCollection="indoor-air-quality-sensor-card-widgets-2" showListImageTitles="true" %}

Add another card widget to display the CO2 level.

{% include images-gallery.html imageCollection="indoor-air-quality-sensor-card-widgets-3" showListImageTitles="true" %}

Now you can see the current temperature, humidity, and CO2 values.

{% include images-gallery.html imageCollection="indoor-air-quality-sensor-card-widgets-4" %}

### Temperature and humidity history chart

Now, we will add a chart widget to display historical data on temperature and humidity in the office. This widget will use its own time window settings.
The configuration we set will allow us to view the hourly average values of temperature and humidity for the current day. This way, we can monitor their changes over time.

{% include images-gallery.html imageCollection="temperature-and-humidity-history-1" showListImageTitles="true" %}

### CO2 level chart

Add another line chart widget to display air quality data. This widget will also use its own time window settings, showing hourly data for the selected time period.

{% include images-gallery.html imageCollection="air-quality-widget-1" showListImageTitles="true" %}

<br>
Monitor the current air quality status and analyze its changes over time in a separate dashboard state.

{% include images-gallery.html imageCollection="air-sensor-state" %}

## Configuring energy_sensor state

Let&#39;s move on to configuring the **energy_sensor** state. We will add two widgets: one to display the total energy consumption for the current day and another to display historical data on hourly energy consumption.

### Current power consumption

To display total power consumption, use the "Power consumption card" widget from the "Industrial widgets" bundle:

{% include images-gallery.html imageCollection="power-consumption-card-1" showListImageTitles="true" %}

### Power consumption chart

To display historical data on power consumption, we will add the "Range chart" widget. 
The unique feature of this widget is that changes in data values on the graph are visualized using configurable color ranges.

{% include images-gallery.html imageCollection="power-consumption-range-chart-1" showListImageTitles="true" %}

Now you can monitor the total energy consumption for the current day and track historical data on hourly energy consumption.

{% include images-gallery.html imageCollection="energy-meter-state-final" %}

## Configuring water_sensor state

Finally, we will configure the state for the "Water Flow Meter" device. This will include a card widget to display the total water consumption for the current day, a chart widget to show historical data on hourly water consumption, and a battery level widget for the device.

###  Current water consumption

If you need to display specific data but cannot find a suitable widget in the available bundles, you can customize any widget to fit your needs. Let’s take the "Flow rate card" widget from the "Industrial widgets" bundle as an example and configure it to display water consumption.

{% include images-gallery.html imageCollection="water-consumption-1" showListImageTitles="true" %}

### Water consumption chart

Now we need to add a widget to visualize historical data on water consumption. Previously, we added a similar widget for tracking [power consumption](#power-consumption-chart).
Let&#39;s copy the ["Power consumption history" widget](#power-consumption-chart), paste it into the **water_sensor** state, and change the data source to display water consumption.

{% include images-gallery.html imageCollection="water-consumption-range-chart-1" showListImageTitles="true" %}

### Battery level widget

And lastly in this lesson, we will add the "Battery charge" widget. It will display the battery charge level of the "Water Flow Meter" device.

{% include images-gallery.html imageCollection="battery-charge-1" showListImageTitles="true" %}

The state for the "Water Flow Meter" device has been configured. 
Monitor water consumption for the current day, track historical data on hourly water consumption, and control the battery charge level of the "Water Flow Meter" device.

{% include images-gallery.html imageCollection="water-flow-meter-final" %}

## Final view of the dashboard for this lesson

Finally, your dashboard should look like this:

{% include images-gallery.html imageCollection="dashboard-final-lesson-3" %}

## Next step

In the next lesson, you will learn how to configure notification rules, add the "Alarms table" widget, and manage alarm notifications.
If you&#39;re ready to proceed, click the button below.

<br>
<p><a href="/docs/{{docsPrefix}}user-guide/advanced-guides-for-working-with-dashboard/advanced-dashboard-guide-lesson-4/" class="button">Lesson 4: Alarm management</a></p>
