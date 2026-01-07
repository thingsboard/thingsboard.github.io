Uses **historical time series data** over a specified time window for trend analysis.

**Examples:** speed, voltage

**Configuration:**
- **Argument type**: Time series rolling
- Specify the **time series key**.
- Set the **argument name** - the variable name used in the script logic.
- Define the **time window** for data collection, which determines the period over which historical telemetry is gathered for calculations.
- Set the **maximum number of values** to be processed (This setting is configured in the [Tenant profile](/docs/{{docsPrefix}}user-guide/tenant-profiles/#api-limits--usage){:target="_blank"} by the system administrator.)

{% assign rollingArgumentType = '
    ===
        image: /images/user-guide/calculated-fields/script/script-rolling-argument-1-ce.png
        title: Select the **time series rolling** argument type and specify the **time series key**. Define the **time window for data collection** and the maximum number of values to be processed, then click **Add**.
'
%}

{% include images-gallery.liquid imageCollection=rollingArgumentType %}