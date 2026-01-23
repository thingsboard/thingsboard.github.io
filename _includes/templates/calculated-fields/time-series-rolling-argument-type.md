Uses **historical time series data** over a specified time window for trend analysis.

**Examples:** speed, voltage

**Configuration:**
- **Argument type**: Time series rolling
- Specify the **time series key**.
- Set the **argument name** - the variable name used in the script logic.
- Define the **time window** for data collection, which determines the period over which historical telemetry is gathered for calculations.
- Set the **maximum number of values** to be processed (This setting is configured in the [Tenant profile](/docs/{{docsPrefix}}user-guide/tenant-profiles/#api-limits--usage){:target="_blank"} by the system administrator.)

{% assign rollingArgumentTypeCE = '
    ===
        image: /images/user-guide/calculated-fields/argument-time-series-rolling-1-ce.png
        title: Select the **time series rolling** argument type (3), specify the **time series key** (4), and set the **argument name** (5). Define the **time window for data collection** (6) and the maximum number of values (7) to be processed, then click **Add** (8).
'
%}

{% assign rollingArgumentTypePE = '
    ===
        image: /images/user-guide/calculated-fields/argument-time-series-rolling-1-pe.png
        title: Select the **time series rolling** argument type (3), specify the **time series key** (4), and set the **argument name** (5). Define the **time window for data collection** (6) and the maximum number of values (7) to be processed, then click **Add** (8).
'
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
{% include images-gallery.liquid imageCollection=rollingArgumentTypePE %}
{% else %}  
{% include images-gallery.liquid imageCollection=rollingArgumentTypeCE %}
{% endif %}