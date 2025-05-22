* TOC
{:toc}

> Before proceeding, we recommend reviewing the {% if docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}[Getting Started guide](/docs/getting-started-guides/helloworld-pe/){:target="_blank"}{% endif %}{% if docsPrefix == null %}[Getting Started guide](/docs/getting-started-guides/helloworld/){% endif %} to become familiar with the basics of ThingsBoard.
Additionally, it&#39;s useful to read the documentation on [calculated fields](/docs/{{docsPrefix}}user-guide/calculated-fields/){:target="_blank"}, as well as [creating and clearing alarms](/docs/{{docsPrefix}}user-guide/device-profiles/#alarm-rules){:target="_blank"}.

Let&#39;s assume, you have a device equipped with a temperature sensor that sends temperature readings to ThingsBoard. You want to trigger an alarm whenever the difference (delta) between the latest temperature reading and the average of the readings from the past five minutes exceeds 5°C.

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

## Create alarm rule

Now, you need to set a **rule to trigger the alarm**: the alarm will activate when the "**delta**" key value is 5 or greater. The easiest way to configure this alarm rule is directly in the [device profile](/docs/{{docsPrefix}}user-guide/device-profiles/){:target="_blank"}.
Additionally, you should specify the condition for automatically clearing the alarm when the "delta" key value falls below **5**.

Let&#39;s begin by adding the condition for **triggering the alarm**:

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

{% include images-gallery.html imageCollection="adding-alarm-rule-2" showListImageTitles="true" %}

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

Finally, you&#39;ve successfully configured the rule for creating and clearing alarms triggered by deviations in the "**deltaTemperature**" key value from the specified parameters.

{% include images-gallery.html imageCollection="configured-alarm-rule" %}

## Create calculated field

**Calculated fields** allow users to perform real-time calculations based on telemetry data and/or attributes. You can learn more about calculated fields [here](/docs/{{docsPrefix}}user-guide/calculated-fields/){:target="_blank"}.

- Go back to your device and open its details, and navigate to the "**Calculated fields**" tab. 
- Click the "**plus**" icon button and select "**Create new calculated field**" from the dropdown menu.

{% include images-gallery.html imageCollection="create-calculated-field-1" %}

**General**. The calculated field configuration window will open. 

- Enter a descriptive **title** for the calculated field.
- Select "**Script**" as the type of calculated field. This allows you to perform complex calculations using the [TBEL](/docs/{{docsPrefix}}user-guide/tbel/){:target="_blank"} scripting language.
- Use the **Debug mode** to track calculated field events, such as state changes and errors, for easier debugging and troubleshooting.

{% assign feature = "components" %}
{% include templates/debug-mode.md %}

{% include images-gallery.html imageCollection="create-calculated-field-2" showListImageTitles="true" %}

**Expression**. Now you need to add an argument:
- Click the "**Add argument**" button.
- Set the reference **name for the variable** in the expression.
- Leave the entity type set to "**Current entity**".
- Set the argument type to "**Time series column**". This enables the use of historical time series data over a specified period for trend analysis.
- Specify the **time series key** as "**temperature**".
- Set the data collection time window to **5 minutes**. This determines the duration over which historical telemetry data will be collected for calculations.
- Set the **maximum number of values** to be processed.
- Finally, click "**Add**" button.

{% include images-gallery.html imageCollection="create-calculated-field-3" showListImageTitles="true" %}

Now, define a function that will perform a calculation using the variable defined in the "**Arguments**" section.

> The variable name that will store the calculation result is defined within the function itself.

Copy this script and paste it to the function calculation window:

**function calculate(ctx, temperature, defrost) {**
```js
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

**Output**. The calculated value are returned as a JSON object containing key that represent the computed result, which are then used to store those value in the system.

- Set the output type as "**Time series**" to store the calculation result as time series data.
- To finish adding the calculated field, click "**Add**".

The calculated field has been successfully added to your device.

{% include images-gallery.html imageCollection="create-calculated-field-4" %}

## Check configurations

To verify that our configurations are working correctly, we need to publish telemetry for our device twice within a 5-minute interval. 
The simplest way to publish temperature readings on behalf of your device is by using the **Check connectivity** feature. 

- In the "**Details**" tab of your device view, and click the "**Check connectivity**" button.
- Copy the generated telemetry publishing command.

{% include images-gallery.html imageCollection="check-configuration-1" %}

- Go to the "**Latest telemetry**" tab to monitor the incoming data in real time.
- Execute the copied command in your Terminal. 

You should see a **temperature** key with a value of **25**. Additionally, a **deltaTemperature** key should appear with a value of **0**. This is the result of the calculated field processing.

{% include images-gallery.html imageCollection="check-configuration-2" %}

- Now publish another temperature value, for example **32**. 

The **deltaTemperature** ket value should now be **7**, which meets the condition for triggering the alarm.

{% include images-gallery.html imageCollection="check-configuration-3" %}

- Navigate to the "**Alarms**" tab, where you should see the newly created alarm. This confirms that all our settings have been correctly configured.

{% include images-gallery.html imageCollection="check-configuration-4" %}

## Next steps

{% assign currentGuide = "DataProcessing" %}{% include templates/guides-banner.md %}