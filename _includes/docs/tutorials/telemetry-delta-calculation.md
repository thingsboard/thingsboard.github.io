* TOC
{:toc}

> Before proceeding, we recommend reviewing the {% if docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}[Getting Started guide](/docs/getting-started-guides/helloworld-pe/){:target="_blank"}{% endif %}{% if docsPrefix == null %}[Getting Started guide](/docs/getting-started-guides/helloworld/){% endif %} to become familiar with the basics of ThingsBoard.
Additionally, it&#39;s useful to read the documentation on [calculated fields](/docs/{{docsPrefix}}user-guide/calculated-fields/){:target="_blank"}, as well as [creating and clearing alarms](/docs/{{docsPrefix}}user-guide/device-profiles/#alarm-rules){:target="_blank"}.

Suppose you have a device with a temperature sensor that sends data to ThingsBoard. 
You want to trigger an alarm whenever the difference (delta) between the last two temperature readings within the past 5 minutes exceeds 5 °C.

This is a simple theoretical example meant to showcase the platform&#39;s capabilities. You can use this tutorial as a foundation for implementing more advanced and customized scenarios.

## Adding the device

First, **create a new device** in ThingsBoard by following these steps:

- Go to the "**Devices**" page of the "**Entities**" section. 
- Click on the "+" icon in the top right corner of the table, and select "Add new device" from drop-down menu;
- Name the device. For example "**Thermostat**".
- Create a new device profile: enter a name for it, for example "**smart-sensor**", then click "**Create a new one**".
- Confirm the creation of the device profile by clicking the "**Add**" button.
- Complete the device adding by clicking the "**Add**" button.

Device added.

{% include images-gallery.html imageCollection="adding-thermometer-device" %}

## Create calculated field

The **Calculated fields** feature allows users to perform real-time calculations based on telemetry data and/or attributes. You can learn more about calculated fields [here](/docs/{{docsPrefix}}user-guide/calculated-fields/){:target="_blank"}.

To begin, add a calculated field to your device that will compute the delta between the two most recent telemetry values of the **temperature** key and store the result as a new telemetry value under the key **deltaTemperature**.

- Go back to your device, open its details, and navigate to the "**Calculated fields**" tab.
- Click the "**plus**" icon button and select "**Create new calculated field**" from the dropdown menu.

{% include images-gallery.html imageCollection="create-calculated-field-1" %}

<br>

**General**. The calculated field configuration window will open.

- Enter a descriptive **title** for the calculated field.
- Select the "**Script**" calculated field type. This allows you to perform complex calculations using the [TBEL](/docs/{{docsPrefix}}user-guide/tbel/){:target="_blank"} scripting language.

{% include images-gallery.html imageCollection="create-calculated-field-2" %}

> [Optionally]. Use the **Debug mode** to track calculated field events, such as state changes and errors, for easier debugging and troubleshooting.

<br>

**Arguments**. Now you need to add an argument:
- Click the "**Add argument**" button.
- Set the reference **name for the variable** in the expression.
- Leave the entity type set to "**Current entity**".
- Set the argument type to "**Time series column**". This enables the use of historical time series data over a specified period for trend analysis.
- Specify the **time series key** as "**temperature**".
- Set the data collection time window to **5 minutes**. This determines the duration over which historical telemetry data will be collected for calculations.
- Set the **maximum number of values** to be processed.
- Finally, click "**Add**" button.

{% include images-gallery.html imageCollection="create-calculated-field-3" %}

<br>

**Script**. Now, define a function that will perform a calculation using the variable defined in the "**Arguments**" section.

> The variable name that will store the calculation result is defined within the function itself.

Copy this script and paste it to the function calculation window:

**function calculate(ctx, temperature) {**
```javascript
var delta = 0;

if (temperature.values.size() >= 2) {
    delta = temperature.last - temperature.first;
}

return {
    "deltaTemperature": Math.abs(toInt(delta))
}
```
{:.copy-code}
**}**

<br>

**Output**. The calculated value is returned as a JSON object containing a key that represents the computed result. This key, along with its value, is then stored in the system.

- Set the output type as "**Time series**" to store the calculation result as time series data.
- To finish adding the calculated field, click "**Add**".

The calculated field has been successfully added to your device.

{% include images-gallery.html imageCollection="create-calculated-field-4" %}

If needed, you can [download the JSON file with the calculated field configuration](/docs/user-guide/resources/telemetry_delta_calculation.json){:target="_blank"} described above and [import](/docs/{{docsPrefix}}user-guide/calculated-fields/#import-calculated-field){:target="_blank"} it into your instance.

## Create alarm rule

Now you need to set up an **alarm rule**: the alarm should be triggered when the value of the **deltaTemperature** key is equal to or greater than 5. The easiest way to configure this alarm rule is directly within the [device profile](/docs/{{docsPrefix}}user-guide/device-profiles/){:target="_blank"}.   
Additionally, you should define a condition to automatically clear the alarm when the deltaTemperature value drops below 5.

Let&#39;s start by adding the trigger condition for the alarm:

- Go to the "**Device profiles**" pageo f the "**Profiles**" section, and click on the "**smart-sensor**" device profile to open its details.
- Navigate to the "**Alarm rules**" tab.
- Enter editing mode by clicking the big orange pencil button, and click the "**Add alarm rule**" button.
- Input the "**Deviation alarm**" as alarm type.
- Leave the "Critical" severity, and click on the red "**+**" sign.

{% include images-gallery.html imageCollection="adding-alarm-rule-1" %}

- Add alarm rule condition:
  - Click the "**Add key filter**" button.
  - In the opened window, click the "**Add key filter**" button.
  - Set the following:
    - Key type: "**Time series**".
    - Key name: "**deltaTemperature**".
    - Value type: "**Numeric**".
    - Click the "**Add**" button in the "**Filters**" section. Define conditions: select the "**greater or equal**" operation from the drop-down menu and input **5** as the threshold value. Click "**Add**" to confirm adding the key filter.
  - Click the "**Save**" button to apply the alarm condition.

The alarm trigger condition has been successfully added.

{% include images-gallery.html imageCollection="adding-alarm-rule-2" %}

<br>

Now, add the **condition to clear the alarm**:

- Click the "**Add clear condition**" button.
- Click on the red "**+**" sign.
- Click the "**Add key filter**" button.
- Select the "**Time series**" as key type, and the "**deltaTemperature**" as the key name. Change "**Value type**" to "**Numeric**". Click the "**Add**" button in the "**Filters**" section.
- Select the "**less than**" operation from drop-down menu, and input **5** as the threshold value. Click "**Add**" to confirm adding key filter.
- Click the "**Save**" button to apply the alarm condition.
- Finally, apply changes.

The alarm automatically clears when the value of the "**deltaTemperature**" key drops below **5**.

{% include images-gallery.html imageCollection="clear-alarm-rule" %}

You have successfully configured the **rule for creating and clearing alarms** based on deviations in the **deltaTemperature** key value from the defined thresholds.

{% include images-gallery.html imageCollection="configured-alarm-rule" %}

## Check configurations

To ensure that our configurations are working correctly, we need to publish telemetry for our device twice within a 5-minute interval. 
The easiest way to send temperature data on behalf of your device is by using the **Check connectivity** feature. 

- In the "**Details**" tab of the device view, click the "**Check connectivity**" button and copy the generated telemetry publishing command.
- Go to the "**Latest telemetry**" tab to monitor incoming data in real time.
- Execute the copied command in the **Terminal** to send telemetry to ThingsBoard on behalf of the device.

You will see two telemetry data keys: the **temperature** key with a value of **25**, and the **deltaTemperature** key — the result of processing the temperature value using the calculated field function.
Its value is **0** because, so far, only a single telemetry value has been sent to ThingsBoard.

- Send another temperature value, for example, **32**. The **deltaTemperature** value should now be **7**, which matches the [condition for triggering the alarm](#create-alarm-rule).

Navigate to the "**Alarms**" tab, where you should see the newly created alarm. This confirms that all our configurations are correct.

{% include images-gallery.html imageCollection="check-configuration-1" %}

As soon as the **deltaTemperature** key value becomes less than 5, the alarm will be automatically cleared.

## Next steps

{% assign currentGuide = "DataProcessing" %}{% include templates/guides-banner.md %}