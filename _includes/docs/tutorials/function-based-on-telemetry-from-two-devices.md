* TOC
{:toc}

> Before proceeding, we recommend reviewing the {% if docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}[Getting Started guide](/docs/getting-started-guides/helloworld-pe/){:target="_blank"}{% endif %}{% if docsPrefix == null %}[Getting Started guide](/docs/getting-started-guides/helloworld/){% endif %} to become familiar with the basics of ThingsBoard.
Additionally, it&#39;s useful to read the documentation on [calculated fields](/docs/{{docsPrefix}}user-guide/calculated-fields/){:target="_blank"}.

This tutorial demonstrates how to calculate the temperature delta based on readings from indoor and outdoor thermometers in a warehouse.

## Asset & devices provisioning

First, [create a new asset](/docs/{{docsPrefix}}user-guide/ui/assets/#adding-and-delete-asset){:target="_blank"} and a corresponding asset profile for it. Name the asset **Warehouse A**, and the profile — **warehouse**.

{% include images-gallery.html imageCollection="adding-asset" %}

Now [create two devices](/docs/{{docsPrefix}}user-guide/ui/devices/#adding-a-new-device){:target="_blank"} named **Indoor Thermometer** and **Outdoor Thermometer**. Create a device profile called **thermometer** and assign it to these devices.

{% include images-gallery.html imageCollection="added-devices" %}

Create relationships between the **Warehouse A** asset and the **Indoor Thermometer** and **Outdoor Thermometer** devices.

{% include images-gallery.html imageCollection="adding-relation-from-devices" %}

> **Note**: Please review the following [documentation page](/docs/{{docsPrefix}}user-guide/entities-and-relations/){:target="_blank"} to learn how to create relationships between entities.

## Thermometer emulators node

Since we are using virtual devices, they do not send telemetry data to the ThingsBoard. However, we can simulate the transmission of such data in real time.
To do this, we will use [Rule Engine](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/){:target="_blank"}.

Let&#39;s add two [generator nodes](/docs/user-guide/rule-engine-2-0/nodes/action/generator/){:target="_blank"} that will periodically produce messages with random temperature readings. 
Ideally, such use cases should have a dedicated [Rule Chain](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#rule-chain){:target="_blank"}, but for simplicity, we&#39;ll use the **Root Rule Chain**.
Route the messages from these nodes to the **device profile node**.

{% include images-gallery.html imageCollection="thermostat-emulator-nodes" %}

Indoor Thermometer emulator:
```javascript
var temperature = toFixed(Math.random()*10 + 18, 2);
var msg = { temperature: temperature };
var metadata = { data: 40 };
var msgType = "POST_TELEMETRY_REQUEST";
return { msg: msg, metadata: metadata, msgType: msgType };
```
{:.copy-code}

Outdoor Thermometer emulator:
```javascript
var temperature = toFixed(Math.random()*10 + 16, 2);
var msg = { temperature: temperature };
var metadata = { data: 40 };
var msgType = "POST_TELEMETRY_REQUEST";
return { msg: msg, metadata: metadata, msgType: msgType };
```
{:.copy-code}

After waiting for the period specified in the generator nodes, you will be able to see the telemetry on the "**Latest telemetry**" tab of your devices.

{% include images-gallery.html imageCollection="thermometer-telemetry" %}

## Create calculated field

The **Calculated fields** feature allows users to perform real-time calculations based on telemetry data and/or attributes. You can learn more about calculated fields [here](/docs/{{docsPrefix}}user-guide/calculated-fields/){:target="_blank"}.

As part of our example, add a calculated field to the Warehouse A resource that calculates the difference between the temperature values of the two thermometers and stores the result as a new telemetry value with the key **deltaTemperature**.

- Go back to еру asset **Warehouse A**, open its details, and navigate to the "**Calculated fields**" tab.
- Click the "**plus**" icon button and select "**Create new calculated field**" from the dropdown menu.

{% include images-gallery.html imageCollection="create-calculated-field-1" %}

<br>

**General**. The calculated field configuration window will open.

- Enter a descriptive **title** for the calculated field.
- Select the "**Simple**" calculated field type. This allows you to perform basic mathematical operations on the provided arguments.

{% include images-gallery.html imageCollection="create-calculated-field-2" %}

> [Optionally]. Use the **Debug mode** to track calculated field events, such as state changes and errors, for easier debugging and troubleshooting.

<br>

**Arguments**. Now you need to add two arguments: **indoorTemperature** and **outdoorTemperature**.

In the "**Arguments**" section, add the first argument:

- Click the "**Add argument**" button.
- Enter **indoorTemperature** as the name of the first argument.
- Choose device **Indoor Thermometer** as the entity.
- Leave the argument type set to "**Latest telemetry**".
- Set "**temperature**" as the time series key.
- Click "**Add**".

{% include images-gallery.html imageCollection="create-calculated-field-3" %}

<br>

Add another argument:

- Click "**Add argument**" button again.
- Name it "**outdoorTemperature**". 
- Choose device **Outdoor Thermometer** as the entity.
- Leave the argument type set to "**Latest telemetry**".
- Set "**temperature**" as the time series key.
- Finally, click "**Add**" button.

{% include images-gallery.html imageCollection="create-calculated-field-4" %}

<br>

**Expression**. Now, enter the mathematical expression for the calculation using the variables defined in the "**Arguments**" section.

Copy this script and paste it to the function calculation window:

```js
abs(indoorTemperature - outdoorTemperature)
```
{:.copy-code}

{% include images-gallery.html imageCollection="create-calculated-field-5" %}

<br>

**Output**. The calculated value is returned as a JSON object containing a key that represents the computed result. This key, along with its value, is then stored in the system.

- Set the output type as "**Time series**" to store the calculation result as time series data.
- Assign **deltaTemperature** as the name of the variable that will store the calculation result.
- Optionally, set **decimals by default** to define how many decimal places the result should be rounded to. If not specified, the result will not be rounded.
- To finish adding the calculated field, click "**Add**".

The calculated field has been successfully added to your device.

{% include images-gallery.html imageCollection="create-calculated-field-6" %}

> If needed, you can [download the JSON file with the calculated field configuration](/docs/user-guide/resources/temperature_delta_based_on_2_devices.json){:target="_blank"} described above and [import](/docs/{{docsPrefix}}user-guide/calculated-fields/#import-calculated-field){:target="_blank"} it into your instance.

## Check configurations

To verify that your configuration is working correctly, go to the "**Latest telemetry**" tab of the **Warehouse A** asset. If everything is set up properly, you should see the **deltaTemperature** key and its value.

{% include images-gallery.html imageCollection="check-calculated-field-configuration" %}

<br>

To monitor the temperature difference in real time, download and import this [dashboard](/docs/{{docsPrefix}}user-guide/dashboards/){:target="_blank"} prepared specifically for this example.

- [Download the "Warehouse dashboard" JSON file](/docs/user-guide/resources/warehouse_dashboard.json){:target="_blank"}
- [Import](/docs/{{docsPrefix}}user-guide/dashboards/#import-dashboard){:target="_blank"} it into ThingsBoard. 
- After importing, you&#39;ll need to assign your asset in the [entity alias](/docs/{{docsPrefix}}user-guide/ui/aliases/){:target="_blank"} to display the correct data.

After that, the dashboard should display the temperature delta data between the two thermometers of the **Warehouse A** asset.

{% include images-gallery.html imageCollection="delta-temperature-dashboard" %}
