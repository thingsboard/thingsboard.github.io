- Select the argument type **Time series rolling**.
- Specify the **Time series key**.
- Set the **Time window** for data collection. This defines the duration over which historical telemetry data is gathered for calculations.
- Set the **Maximum number of values** to be processed.
  > **Note**: This setting is configured in the [Tenant profile](/docs/{{docsPrefix}}user-guide/tenant-profiles/#api-limits--usage){:target="_blank"} by the system administrator.
- Finally, click **Add** button.

A new argument has been added.

{% assign rollingArgumentType = '
    ===
        image: /images/user-guide/calculated-fields/script-rolling-argument-1-ce.png
        title: Select the argument type **Time series rolling**, and specify the time series key. Set the time period for data collection and the maximum number of values to be processed. Finally, click **Add**.
    ===
        image: /images/user-guide/calculated-fields/script-rolling-argument-2-ce.png
        title: A new argument has been added.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=rollingArgumentType %}