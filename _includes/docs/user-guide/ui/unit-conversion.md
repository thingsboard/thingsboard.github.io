* TOC
{:toc}

{% assign sinceVersion = "4.1" %}
{% include templates/since.md %}

Starting from ThingsBoard 4.1, automatic unit conversion between different measurement systems is available. This feature simplifies the handling and visualization of telemetry data by automatically converting units, enhancing user experience and enabling seamless integration across diverse geographical regions and measurement standards.


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