* TOC
{:toc}

{% assign sinceVersion = "4.1" %}
{% include templates/since.md %}

Starting from ThingsBoard 4.1, widgets support automatic data conversion and unit switching based on the selected unit system. 
This is especially useful in global IoT solutions and significantly improves data interaction for users across different geographic regions where various measurement standards are used — such as the metric system (°C, km, kg) and the imperial system (°F, miles, lbs).

<br><b><font size="4">Key benefits:</font></b>

- Automatic conversion of numerical values into the appropriate units directly within the widget — no additional data processing required.
- Flexible widget configuration that eliminates the need to duplicate widgets or create separate dashboards for users with different regional unit standards.
- Support for a wide range of measurement units, allowing users to view values in the units that are most familiar and convenient to them.

<b><font size="4">Where the unit conversion feature can be applied?</font></b>

All widgets designed to display telemetry data include a unit conversion option.   
Unit conversion is supported for telemetry data, Y-axis scales, and threshold settings.

> **Note:** If a widget contains multiple telemetry keys, the unit conversion feature must be configured individually for each key.

## Enable unit conversion

Unit conversion is configured in the **unit settings** available in the **telemetry keys**, **Y-axis**, and **thresholds** configurations within the widget settings.

- Specify the **source unit** — the unit of the incoming telemetry value received from the server to ensure correct conversion to the target unit.
- Enable unit conversion by toggling the "**Enable unit conversion**" switch.
- The system will automatically suggest commonly used target units for each unit system (e.g., °C for Metric, °F for Imperial, and °C for Hybrid). However, you can override these by selecting different units from the dropdown list.

> **Note**: All available units are grouped by category (e.g., temperature, length, mass). You can only select target units from the same category as the source unit.

> **Note**: If you do not specify a unit for a particular unit system, that system will fall back to using the unit defined in the **Source unit** field.

- Click "**Apply**" to save the changes.

Once unit conversion is enabled, an icon will appear in the Unit field indicating that the feature is active.

{% include images-gallery.html imageCollection="unit-conversion-configuring" %}

### Range color settings

**Range color settings** use the **original telemetry value** received from the server in its source **units** — before any unit conversion is applied.

For example, if your device sends a temperature value of **22 °C** and unit conversion is enabled, the widget may display it as **71 °F**. 
However, the **range logic still uses the original 22 °C** to determine the color.

So if you&#39;ve defined a green range from **18 to 24 °C**, then any temperature readings within that range will be shown in green — regardless of whether it&#39;s displayed as 22 °C or 71 °F.

This ensures that **range coloring remains consistent**, even when switching between unit systems.

{% include images-gallery.html imageCollection="range-color-settings" %}

## Changing the unit system

To change the unit system used in your ThingsBoard account:
- Click the **three-dot icon** in the top-right corner of the screen and select "**Account**".
- In the **Profile** settings, choose the desired unit system from the dropdown list:
  - **Auto** - Automatically determines the appropriate unit system based on the user&#39;s browser locale or regional settings.
  - **Metric** - The most widely used system globally, based on units like meter (m), kilogram (kg), second (s), etc.
  - **Imperial** - Commonly used in the USA, based on units such as inches (in), feet (ft), miles (m), pounds (lb), gallons (gal), etc.
  - **Hybrid** - A mixed measurement system, typically used in the United Kingdom. Often blends metric and imperial units depending on the context. For example: miles (mi) for distance, Celsius (°C) for temperature, kilograms (kg) or stones (st) for body weight.
- Apply changes.

{% include images-gallery.html imageCollection="changing-unit-system" %}

## Example

Let&#39;s walk through configuring the unit conversion feature using the **Temperature & Humidity dashboard** as an example.   
This dashboard contains widgets that display the **temperature** in degrees Celsius (**°C**) and **humidity** in percentage (**%**).

{% include images-gallery.html imageCollection="unit-conversion-example-1" %}

We will apply the **unit conversion feature** to the **temperature telemetry value**, the **Y-axis of the temperature chart**, **and the temperature threshold**.
The **humidity** value will remain unchanged, as the unit of measurement for humidity is **percentage (%)**, regardless of the selected **unit system**.

<b><font size="3">Step 1: Edit the Chart widget</font></b>

Switch to edit mode for the "**Temperature and Humidity history**" chart widget.

First, configure the unit conversion for the "**temperature**" telemetry key:
- Click on the "**Units**" row in the "**temperature**" key field. You&#39;ll see that the **source unit** is already set to **Celsius** (°C), which is exactly what we need.
- To enable conversion, simply toggle on the "**Enable unit conversion**" option and specify the target unit for each unit system (e.g., °F for Imperial, °C for Metric and Hybrid). 
- Click "**Apply**".

{% include images-gallery.html imageCollection="unit-conversion-example-2" %}

Repeat the same steps to convert temperature values for the **Y-axis** and the **threshold** — enable unit conversion and specify the target units for each measurement system.
After that, apply all changes.

{% include images-gallery.html imageCollection="unit-conversion-example-3" %}

<b><font size="3">Step 2: Edit the Temperature Card widget</font></b>

Switch to edit mode for the "**Temperature**" card widget.

In the "**Unit settings**" dialog, enable unit conversion and provide the appropriate units for each unit system, just like before. 
Apply your changes and save the dashboard.

{% include images-gallery.html imageCollection="unit-conversion-example-4" %}

Since our current unit system is set to **Metric**, temperature values are shown in Celsius (**°C**).

{% include images-gallery.html imageCollection="unit-conversion-example-5" %}

<b><font size="3">Step 3: Changing the unit system</font></b>

To see the unit conversion in action, change your unit system to **Imperial**. 
To do this, go to your **Account** settings, find the "**Unit system**" dropdown, and select **Imperial**.

{% include images-gallery.html imageCollection="unit-conversion-example-6" %}

Return to the dashboard — you will now see that the temperature value, Y-axis labels, and threshold have been converted from Celsius to Fahrenheit according to the selected unit system.

{% include images-gallery.html imageCollection="unit-conversion-example-7" %}