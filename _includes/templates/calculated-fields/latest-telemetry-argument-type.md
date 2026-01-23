Uses the most recent **latest telemetry value** for the specified time series key.

**Examples:** temperature, humidity, latitude, longitude

**Configuration:**
- **Argument type**: Latest telemetry
- Specify the **time series key**.
- Set the **argument name** - the variable name used in the script logic.
- Optionally, set **default value** for time series.

{% assign latestTelemetryArgumentTypeCE = '
    ===
        image: /images/user-guide/calculated-fields/argument-latest-telemetry-1-ce.png
        title: Select the **latest telemetry** (3) argument type, specify the **time series key** (4), and set the **argument name** (5). Optionally, define a default value (6). Finally, click **Add** (7).
'
%}

{% assign latestTelemetryArgumentTypePE = '
    ===
        image: /images/user-guide/calculated-fields/argument-latest-telemetry-1-pe.png
        title: Select the **latest telemetry** (3) argument type, specify the **time series key** (4), and set the **argument name** (5). Optionally, define a default value (6). Finally, click **Add** (7).
'
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
{% include images-gallery.liquid imageCollection=latestTelemetryArgumentTypePE %}
{% else %}  
{% include images-gallery.liquid imageCollection=latestTelemetryArgumentTypeCE %}
{% endif %}