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
- Either select an existing <b>report (subreport) template</b> or [create a new one](/docs/{{docsPrefix}}user-guide/reporting/reporting-key-concepts/#how-to-create-a-report-template){:target="_blank"}.
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

## Next steps

{% assign currentGuide = "GettingStartedGuides" %}{% include templates/multi-project-guides-banner.md %}

## Your feedback

Don&#39;t hesitate to star ThingsBoard on [github](https://github.com/thingsboard/thingsboard){:target="_blank"} to help us spread the word.
If you have any questions about this sample, please [contact us](/docs/contact-us/){:target="_blank"}.