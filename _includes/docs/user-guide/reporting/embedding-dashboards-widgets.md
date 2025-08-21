* TOC
{:toc}

{% assign sinceVersion = "4.2" %}
{% include templates/since.md %}

{% assign feature = "Reporting" %}{% include templates/pe-feature-banner.md %}

A **Dashboard** component allows you to embed a screenshot of the specified dashboard as an image in the report.  
The most common use case is embedding a pre-configured chart widget or a group of cards displayed on a single dashboard page.

This guide provides tips and tricks to make embedded dashboards look polished in the screenshot.

## Prerequisites

First, <b>prepare a dashboard or widget</b> — for example, a chart — that you want to embed into the report.

In this guide, we&#39;ll use a pre-configured "[Time series chart template](#embedding-time-series-chart)" dashboard. 
You can [download it in JSON format](/docs/pe/user-guide/reporting/resources/time_series_chart_template.json){:target="_blank" download="time_series_chart_template.json"} and [import](/docs/{{docsPrefix}}user-guide/dashboards/#import-dashboard){:target="_blank"} it into your ThingsBoard instance. 

Alternatively, you can use your own dashboard.

{% include images-gallery.html imageCollection="time-series-chart-template" %}

## Embedding a dashboard into the report

To embed the dashboard into report template, follow these steps:

- Go to the "<b>Templates</b>" tab on the "<b>Reporting</b>" page.
- Either select an existing <b>report template</b> or [create a new one](/docs/{{docsPrefix}}user-guide/reporting/reporting-key-concepts/#how-to-create-a-report-template){:target="_blank"}.
- In the components library, locate the "<b>Dashboard</b>" component and drag it into the <b>content area</b> of your report.
- Configure the <b>data source for the dashboard component</b>:
  - In the "<b>Datasource</b>" section select the device whose data should be displayed in the dashboard. 
  > Alternatively, you can select an [entity alias](/docs/{{docsPrefix}}user-guide/ui/aliases/){:target="_blank"}. If the alias includes multiple entities, the report will duplicate the dashboard for each of them.

  - In the "<b>Target dashboard</b>" section, specify which dashboard you want to embed into the report.
  - Save the component.
- Save the template.

{% include images-gallery.html imageCollection="embedding-dashboard" %}

To make sure your template is set up correctly and data displays as expected, click "<b>Generate test report</b>" (located next to the "Save" button). 
The system will generate a test report showing the chart.

{% include images-gallery.html imageCollection="embedding-dashboard-test" %}

## Embedding time-series chart

We&#39;ve prepared a JSON file with all the required settings for embedding a time-series chart into your report. You can easily [import](/docs/{{docsPrefix}}user-guide/dashboards/#import-dashboard){:target="_blank"} this template into your ThingsBoard instance and adjust it to fit your specific needs.

[Click here to download "time_series_chart_template.json"](/docs/pe/user-guide/reporting/resources/time_series_chart_template.json){:target="_blank" download="time_series_chart_template.json"}

The applied changes include:

<b><font size="4">General dashboard settings:</font></b>

- Manage layouts:
  - Default layout → Layout settings (gear icon):
    - Enable: <b>Auto fill layout height</b> - widget is stretched to fill all available space on the dashboard grid.
    - Set <b>Background color</b> to white (`#FFFFFF`)

<b><font size="4">Widget settings:</font></b>

<b>Datasource</b>:
- Use an alias with the filter type "[Entity from dashboard state](/docs/{{docsPrefix}}user-guide/ui/aliases/#entity-from-dashboard-state){:target="_blank"}".   
  This alias will let you select the actual entity whose data should be displayed in the report template itself.

<b>Series</b>:
- "<b>temperature<b>" key settings:
  - Line width: `6`

<b>Configure Y axes</b>:
- <b>Position</b>: `Left`
- <b>Units</b>: `°C`
- <b>Decimals</b>: `0`
- Settings (gear icon)**:
  - <b>Label</b>:
    - Size: `32px`
    - Weight: `400`
    - Color: 87% opacity (`#000000DE`)
  - <b>Tick labels</b>:
    - Size: `36px`
    - Weight: `400`
    - Color: 87% opacity (`#000000DE`)

<b>Title</b>:
- Size: `50px`
- Line height: `60px`
- Color: 87% opacity (`#000000DE`)

<b>Legend</b>:
- <b>Label</b>:
  - Size: `36px`
  - Weight: `400`
  - Line height: `40px`
  - Color: 87% opacity (`#000000DE`)
- <b>Value</b>:
  - Size: `36px`
  - Weight: `400`
  - Line height: `40px`
  - Color: 87% opacity (`#000000DE`)
- <b>Column title</b>:
  - Size: `36px`
  - Weight: `400`
  - Line height: `24x`
  - Color: 60% opacity (`#00000061`)
- <b>Position</b>: `Bottom`
- <b>Show values</b>:
  - `Min`
  - `Max`
  - `Average`

- <b>Advanced mode settings</b>:
  - <b>Appearance</b>
    - Disable: <b>Data zoom</b>
    - Disable: <b>Animation</b>
  - <b>Widget card</b>: 
    - Disable: <b>Drop shadow</b>
    - Add the following to **Advanced widget style (Widget CSS)**:

```css
.tb-time-series-chart-legend-item-label-circle {
  width: 20px!important;
  height: 20px!important;
}

.tb-time-series-chart-shape > div {
  overflow: visible!important;
}

.tb-time-series-chart-shape > div > svg {
  overflow: visible!important;
}
```
{:.copy-code}

## Embedding pie chart

We&#39;ve prepared a JSON file with all the required settings for embedding a pie chart into your report — you can import it and adjust as needed.

We&#39;ve prepared a JSON file with all the necessary settings for embedding a <b>pie chart</b> into your report. You can simply [import](/docs/{{docsPrefix}}user-guide/dashboards/#import-dashboard){:target="_blank"} it into your ThingsBoard instance and adjust it to your needs.

[Click here to download "pie_chart_template.json"](/docs/pe/user-guide/reporting/resources/pie_chart_template.json){:target="_blank" download="pie_chart_template.json"}

The applied changes are very similar to the ones described in the [time-series chart template example](#embedding-time-series-chart).

## Next steps

{% assign currentGuide = "GettingStartedGuides" %}{% include templates/multi-project-guides-banner.md %}

## Your feedback

Don&#39;t hesitate to star ThingsBoard on [github](https://github.com/thingsboard/thingsboard){:target="_blank"} to help us spread the word.
If you have any questions about this sample, please [contact us](/docs/contact-us/){:target="_blank"}.