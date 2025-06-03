* TOC
{:toc}

{% assign sinceVersion = "4.1" %}
{% include templates/since.md %}

Starting from ThingsBoard 4.1, widgets support automatic data conversion and unit switching based on the selected unit system. This greatly improves data interaction for users across different geographic regions where different standards are used — such as the metric system (°C, km, kg) and the imperial system (°F, miles, lbs).

**Key benefits:**
- Automatic conversion of numerical values in widgets without the need for additional data processing.
- Support for global use cases, where users see values in the units familiar to them.
- Flexible configuration and adaptation of widgets to local standards.

**Where it's especially useful:**
- In global IoT solutions serving users across various countries.
- For UI unification without duplicating widgets or creating separate dashboards.
- When it's important to display data in units that feel natural to the user.

## Configuring widget for unit conversion

Each widget designed to display telemetry values includes a unit settings option. This is where the unit conversion feature is activated.

> Note: Unit conversion settings are applied individually for each telemetry key.

Let's look at unit conversion using the Value card widget as an example, which displays a single value — the temperature in degrees Celsius.

To enable unit conversion:
- Open the widget settings and locate the "Value" parameter.
- Click on the **unit** row.

> By default, unit conversion is disabled.

To enable unit conversion, you must specify the source unit, so the system knows what unit the current telemetry value is measured in.

- Toggle the "Enable unit conversion" switch.
- Define the target units for each supported unit system (e.g., °F for Imperial, °C for Metric).
- Apply the changes to save the configuration.

Коли unit conversion активовано, у полі unit відображається відповідний значок.

The widget will now automatically convert incoming values and display them in the appropriate units based on the selected unit system.



Перетворення можна застосувати не тільки до телеметрії, а й до налаштуань  






## Changing the unit system

Auto

Metric - Найбільш поширена система у світі, офіційно прийнята майже в усіх країнах. Основні одиниці: метр (м), кілограм (кг), секунда (с), ампер (А), кельвін (К), моль (моль), кандела (кд)

Imperial - Використовується у США, історично походить з англійської системи. Одиниці: дюйм (inch), фут (foot), ярд (yard), миля (mile), фунт (pound), галон (gallon)

Hybrid - Використовується переважно у Великобританії


Key Features:

Automatic Detection: ThingsBoard detects measurement units from incoming telemetry data.

Flexible Configuration: Users can define preferred measurement units for viewing and analysis.

Wide Unit Support: Includes conversions between metric, imperial, and other commonly used measurement systems.

Real-Time Conversion: Telemetry data is converted on-the-fly, ensuring accurate and immediate representation.

Configuring Automatic Unit Conversion:

To enable automatic unit conversion:

Navigate to Settings > System Settings.

Click on the Unit Conversion tab.

Toggle on the Enable Automatic Unit Conversion switch.

Select your preferred units for each measurement category (e.g., temperature, length, mass).

Supported Measurement Categories:

Temperature (°C, °F, K)

Length (meters, feet, miles, kilometers)

Mass (grams, kilograms, pounds)

Volume (liters, gallons)

Pressure (Pa, psi, bar)

Example Scenario:

If a device sends temperature data in Fahrenheit, but your preference is set to Celsius, ThingsBoard automatically converts and displays the temperature in Celsius throughout dashboards and reports, without requiring additional configuration or calculation.

Benefits:

Simplified data integration

Consistent data visualization

Enhanced user convenience

Troubleshooting:

If automatic unit conversion is not functioning as expected, ensure that:

Telemetry data contains explicit unit definitions.

Preferred units are correctly set under System Settings > Unit Conversion.

Your version of ThingsBoard is updated to 4.1 or newer.

Explore and leverage automatic unit conversion to streamline your data handling and visualization workflows with ThingsBoard 4.1.