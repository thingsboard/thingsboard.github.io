* TOC
{:toc}

{% assign sinceVersion = "4.2.1" %}
{% include templates/since.md %}

{% assign feature = "Reporting" %}{% include templates/pe-feature-banner.md %}

Charts are powerful visualization tools that make analytics more accessible, intuitive, and actionable. Instead of manually analyzing raw numbers, charts help you see patterns and insights at a glance.

Common use cases:
- **Visualizing time series** – track changes in metrics over time and highlight emerging trends.
- **Comparing categories or entities** – quickly compare data from multiple devices or key performance indicators across groups.
- **Spotting anomalies and irregular patterns** – easily identify sudden deviations or abnormal events.
- **Aggregating data** – display averages, minimums, or maximums across time intervals in a clear and structured way.
- **Showing proportions and distribution** – use pie or doughnut charts to illustrate how categories contribute to the whole.
- **Management presentations** – communicate key insights visually to stakeholders without digging into raw numbers.

Using charts makes analytics more visual and helps you make informed decisions faster.

## Chart types in ThingsBoard reports

ThingsBoard supports a variety of chart components, each designed for specific purposes. 
Below is a list of available charts with explanations and practical examples.

<div style="display: flex; flex-direction: column;">
  <div>
    <p style="font-size: 16px;">
      <b>&#8226; Time series chart.</b>
    </p>
    <img src="/images/user-guide/reporting/embedding-charts/time-series-table.png" alt="Time series chart" class="image-float" style="float: left; max-width: 200px; max-height: 200px; margin: 0px 10px 0px 0px">
    <p>A universal chart for visualizing values over time. Ideal for monitoring trends and detecting anomalies. Can combine line and bar views.<br><b>Example:</b> displaying sensor temperature throughout the day together with the number of messages in each interval.</p>
  </div><br>
  <div>
    <p style="font-size: 16px;">
      <b>&#8226; Line chart.</b>
    </p>
    <img src="/images/user-guide/reporting/embedding-charts/line-chart.png" alt="Line chart" class="image-float" style="float: left; max-width: 200px; max-height: 200px; margin: 0px 10px 0px 0px">
    <p class="text-content">
    A classic line graph for comparing multiple metrics over time. Great for showing progression or correlation.<br>
    <b>Example:</b> comparing average room temperatures across different areas.
    </p>
  </div><br>
  <div>
    <p style="font-size: 16px;">
      <b>&#8226; Bar chart.</b>
    </p>
    <img src="/images/user-guide/reporting/embedding-charts/bar-chart.png" alt="Bar chart" class="image-float" style="float: left; max-width: 200px; max-height: 200px; margin: 0px 10px 0px 0px">
    <p class="text-content">
    Vertical bars for comparing categories or groups. Perfect for ranking and showing aggregated values.<br>
    <b>Example:</b> monthly energy consumption of devices for the month.
    </p>
  </div><br>
  <div>
    <p style="font-size: 16px;">
      <b>&#8226; Point chart.</b>
    </p>
    <img src="/images/user-guide/reporting/embedding-charts/point-chart.png" alt="Point chart" class="image-float" style="float: left; max-width: 200px; max-height: 200px; margin: 0px 10px 0px 0px">
    <p class="text-content">
    Shows individual values as dots. Useful for scatter plots or event distribution over time.<br>
    <b>Example:</b> displaying motion sensor trigger events.
    </p>
  </div><br>
  <div>
    <p style="font-size: 16px;">
      <b>&#8226; State chart.</b>
    </p>
    <img src="/images/user-guide/reporting/embedding-charts/state-chart.png" alt="State chart" class="image-float" style="float: left; max-width: 200px; max-height: 200px; margin: 0px 10px 0px 0px">
    <p class="text-content">
    Illustrates changes in system or device states over time (e.g., ONLINE/OFFLINE).<br>
    <b>Example:</b> pump activity (ON/OFF) during a week.
    </p>
  </div><br>
  <div>
    <p style="font-size: 16px;">
      <b>&#8226; Bar chart with labels.</b>
    </p>
    <img src="/images/user-guide/reporting/embedding-charts/bar-chart-with-labels.png" alt="Bar chart with labels." class="image-float" style="float: left; max-width: 200px; max-height: 200px; margin: 0px 10px 0px 0px">
    <p class="text-content">
    Bar chart with numeric labels inside or above bars. Highlights exact values.<br>
    <b>Example:</b> daily water usage per apartment, with liters displayed directly on bars.
    </p>
  </div><br>
  <div>
    <p style="font-size: 16px;">
      <b>&#8226; Range chart.</b>
    </p>
    <img src="/images/user-guide/reporting/embedding-charts/range-chart.png" alt="Range chart." class="image-float" style="float: left; max-width: 200px; max-height: 200px; margin: 0px 10px 0px 0px">
    <p class="text-content">
    Displays minimum and maximum values over time as shaded ranges.<br>
    <b>Example:</b> hourly min/max temperature.
    </p>
  </div><br>
  <div>
    <p style="font-size: 16px;">
      <b>&#8226; Bars.</b>
    </p>
    <img src="/images/user-guide/reporting/embedding-charts/bars.png" alt="Bars." class="image-float" style="float: left; max-width: 200px; max-height: 200px; margin: 0px 10px 0px 0px">
    <p class="text-content">
    Compact representation of metrics as progress bars. Useful for completion levels.<br>
    <b>Example:</b> battery charge or memory usage.
    </p>
  </div><br>
  <div>
    <p style="font-size: 16px;">
      <b>&#8226; Pie.</b>
    </p>
    <img src="/images/user-guide/reporting/embedding-charts/pie.png" alt="Pie." class="image-float" style="float: left; max-width: 200px; max-height: 200px; margin: 0px 10px 0px 0px">
    <p class="text-content">
    Circular chart for showing parts of a whole.<br>
    <b>Example:</b> share of electricity consumption by department.
    </p>
  </div><br>
  <div>
    <p style="font-size: 16px;">
      <b>&#8226; Doughnut.</b>
    </p>
    <img src="/images/user-guide/reporting/embedding-charts/doughnut.png" alt="Doughnut." class="image-float" style="float: left; max-width: 200px; max-height: 200px; margin: 0px 10px 0px 0px">
    <p class="text-content">
    Similar to a pie chart, but with a hollow center where a key metric (e.g., average, sum, KPI) can be displayed.<br>
    <b>Example:</b> % of used capacity plus absolute value in the center.
    </p>
  </div><br>
  <div>
    <p style="font-size: 16px;">
      <b>&#8226; Horizontal doughnut.</b>
    </p>
    <img src="/images/user-guide/reporting/embedding-charts/horizontal-doughnut.png" alt="Horizontal doughnut." class="image-float" style="float: left; max-width: 200px; max-height: 200px; margin: 0px 10px 0px 0px">
    <p class="text-content">
    A horizontal variation of the doughnut chart, displayed as side-by-side rings. Useful for compact metric comparison.<br>
    <b>Example:</b> percentage of completed vs. pending tasks in a project.
    </p>
  </div>
</div>

<hr>

## Adding a Chart to a Report

1. Navigate to the **Templates** tab on the **Reporting** page.
2. Open an existing report (or subreport) template or [create a new one](/docs/{{docsPrefix}}user-guide/reporting/reporting-key-concepts/#how-to-create-a-report-template){:target="_blank"}.
3. In the **Components library**, go to **Charts**, select the **chart type**, and drag it into the **content area** of your report.

<hr>

## Configuring a Chart

Define the data the chart should display, the time interval for that data, X and Y axis configurations, thresholds, legend, appearance settings, and other options.

#### Time window

- Define the time intervals for displaying telemetry data on the chart. Learn more about configuring the time window [here](/docs/{{docsPrefix}}user-guide/dashboards/#time-window){:target="_blank"}.

#### Data configuration

- **Datasource:**
  - Define the chart&#39;s data source:
    - **Device** — telemetry from a specific device.
    - **Entity alias** — an abstract reference to one or more entities. It is often used when a chart needs to work with multiple entities.
  - If needed, configure [filters](/docs/{{docsPrefix}}user-guide/widgets/#filters){:target="_blank"}.

- **Series:**   
  Specify which telemetry keys to visualize (e.g., *temperature*).

For each data key (depending on the selected chart), you can configure units, labels, colors, line or bar styles, and more.

#### Layout settings

Adjust the appearance of the component by setting height, width, alignment, padding, margins, background, and border styles.

#### Other settings

Depending on the chart type, you may configure additional options that improve clarity and usability:

- **Y axes** – configure axis labels, units, position, and value ranges to control how vertical data is displayed.
- **Thresholds** – add reference lines based on constant values, keys, or entities to highlight safe, warning, or critical limits.
- **X axis** – define horizontal axis properties including label, position, ticks, and vertical line.
- **Legend** – manage the placement, formatting, and content of the chart legend to clarify series meanings.
- For configuring other options and more details, see the [Widgets](/docs/{{docsPrefix}}user-guide/widgets/){:target="_blank"} documentation.

#### Saving and Testing

1. Once the chart is configured, click **Save**. 
2. To verify that your template is set up correctly and the data displays as expected, click <b>Generate test report</b> (next to the <b>Save</b> button).
The system will generate a sample report using the available test data from the selected device or entity alias.

<hr>

## Example: Embedding a Line Chart

**Goal:** Display and compare temperature readings from three devices over the past 24 hours.

<br><b><font size="4">Step 1. Preparation</font></b>

- **Prepare three devices** that will send temperature values to ThingsBoard as telemetry. Data from my devices is sent once per hour.   
  > If needed, simulate telemetry in real time using the [Rule Engine](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/){:target="_blank"}.   
  [See the guide here.](/docs/{{docsPrefix}}user-guide/advanced-guides-for-working-with-dashboard/advanced-dashboard-guide-lesson-3/#simulation-of-the-devices-telemetry-data){:target="_blank"}

<b><font size="4">Step 2. Adding the chart</font></b>

- Go to the <b>Templates</b> tab on the <b>Reporting</b> page.
- Select an existing report template or [create a new one](/docs/{{docsPrefix}}user-guide/reporting/reporting-key-concepts/#how-to-create-a-report-template){:target="_blank"}.
- Drag the <b>Line chart</b> component into the content area of your report.

{% include images-gallery.html imageCollection="chart-component-example-1" %}

<br><b><font size="4">Step 3. Configuring the chart</font></b>

- **Time window:** last 24 hours, aggregated by 1 hour.
- **Title:**
  ```text
  Temperature history
  ```
  {:.copy-code}

- **Datasource:** create a new Entity alias that includes the three devices.
  - **Alias name:** My devices
  - **Filter type:** Entity list
  - **Type:** Device
  - **Entity list**: specify three devices for comparing temperature values.
- **Series:** add the telemetry key <b>temperature</b>, with label 
  ```text
  ${entityName} temperature
  ```
  {:.copy-code}

- **Y axis:**
  - **Label:** Temperature 
  - **Min:** 15 
  - **Max:** 35 
  - **Units:** °C
- **Legend:**:
  - **Position** at the **bottom**, 
  - Display **Min**, **Max**, and **Average** values.
- **Save** the component.

{% include images-gallery.html imageCollection="chart-component-example-2" %}

<br><b><font size="4">Step 4. Save the report template</font></b>

- Update the file naming pattern to make reports easy to identify:
  ```
  temperature-monitoring-report-%d{yyyy-MM-dd_HH:mm:ss}
  ```
  {:.copy-code}

- Save the template.

{% include images-gallery.html imageCollection="chart-component-example-3" %}

<br><b><font size="4">Step 5. Testing</font></b>

- Click <b>Generate test report</b> to verify the configuration.

{% include images-gallery.html imageCollection="chart-component-example-4" %}

<br><b><font size="4">✅ Result</font></b>

The generated report will include a line chart showing temperature trends from all three devices, allowing you to compare them over time.

{% include images-gallery.html imageCollection="chart-component-example-5" %}

<hr>

## Next steps

{% assign currentGuide = "GettingStartedGuides" %}{% include templates/multi-project-guides-banner.md %}

<hr>

## Your feedback

Don&#39;t hesitate to star ThingsBoard on [github](https://github.com/thingsboard/thingsboard){:target="_blank"} to help us spread the word.
If you have any questions about this sample, please [contact us](/docs/contact-us/){:target="_blank"}.