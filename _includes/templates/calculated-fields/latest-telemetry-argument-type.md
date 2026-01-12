Uses the most recent **latest telemetry value** for the specified time series key.

**Examples:** temperature, humidity, latitude, longitude

**Configuration:**
- **Argument type**: Latest telemetry
- Specify the **time series key**.
- Set the **argument name** - the variable name used in the script logic.
- Optionally, set **default value** for time series.

{% assign latestTelemetryArgumentType = '
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/script/script-latest-telemetry-argument-1-ce.png
        title: Select the **latest telemetry** argument type and specify the **time series key**. Optionally, define a default value. Finally, click **Add**.
'
%}

{% include images-gallery.liquid imageCollection=latestTelemetryArgumentType %}
