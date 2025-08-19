* TOC
{:toc}

{% assign sinceVersion = "4.2" %}
{% include templates/since.md %}


A **Dashboard** component allows you to embed a screenshot of the specified dashboard as an image in the report.  
The most common use case is embedding a pre-configured chart widget or a group of cards displayed on a single dashboard page.

This guide provides tips and tricks to make embedded dashboards look polished in the screenshot.

## Embedding a dashboard into the report

* Open your report.
* In **Report components**, drag the **Dashboard** component into the **Content** area.
* In the settings panel on the right, go to **Datasource → Device** and select the device you want to display on the dashboard.  
  If you choose an alias with multiple entities, the dashboard image will be duplicated for each entity.
* In the settings panel on the right, go to **Target dashboard → Dashboard** and select your dashboard.

## Embedding time-series chart

We have prepared a pre-configured JSON file with all necessary settings — you can import it and adjust as needed.

[**time_series_chart_template.json**](/docs/pe/user-guide/reporting/time_series_chart_template.json).

The changes applied include:

* **General dashboard settings**:
  * Layouts → Default → Settings (gear icon):
    * Enable **Auto fill layout height**
    * Set **Background color** to white (`#EEEEEE`)
  * Widget is stretched to fill all available space on the dashboard grid.
* **Widget Datasource**:
  * Use an alias of type **Entity taken from dashboard state parameters**.  
    You may hard-code the **Default state entity** for testing purposes.  
    The actual entity will be specified in the report template.
* **Title**:
  * Size: `50px`
  * Line height: `60px`
  * Color: 87% opacity (`#000000DE`)
* **Legend → Label**:
  * Size: `36px`
  * Weight: `400`
  * Line height: `40px`
  * Color: 87% opacity (`#000000DE`)
* **Legend → Value**:
  * Size: `36px`
  * Weight: `400`
  * Line height: `40px`
  * Color: 87% opacity (`#000000DE`)
* To display the legend in the center, go to **Show values** and remove **Average** by clicking on it.
* **Configure Series → Settings (gear icon)**:
  * Line width: `6`
* **Configure Y Axis → Settings (gear icon)**:
  * **Label**:
    * Size: `32px`
    * Weight: `400`
    * Color: 87% opacity (`#000000DE`)
  * **Tick labels**:
    * Size: `36px`
    * Weight: `400`
    * Color: 87% opacity (`#000000DE`)
* **Advanced mode settings**:
  * Disable *Data zoom*
  * Disable *Animation*
  * Widget card: disable *Drop shadow*
  * Add the following to **Advanced widget style (Widget CSS)**:
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

## Embedding pie chart

We have prepared a pre-configured JSON file with all necessary settings — you can import it and adjust as needed.

[**pie_chart_template.json**](/docs/pe/user-guide/reporting/pie_chart_template.json).

The list of changes applied is similar to the time-series chart.

## Next steps

{% assign currentGuide = "GettingStartedGuides" %}{% include templates/multi-project-guides-banner.md %}

## Your feedback

Don&#39;t hesitate to star ThingsBoard on [github](https://github.com/thingsboard/thingsboard){:target="_blank"} to help us spread the word.
If you have any questions about this sample, please [contact us](/docs/contact-us/){:target="_blank"}.