* TOC
{:toc}

{% assign sinceVersion = "4.2" %}
{% include templates/since.md %}

{% assign feature = "Reporting" %}{% include templates/pe-feature-banner.md %}

The **Dashboard component** allows you to take a snapshot of a selected dashboard and insert it into a report as an image.

As a result, the report displays a **static view of the dashboard at the time the report was generated**.

This is useful when you want to:
- include dashboards in [scheduled reports](/docs/{{docsPrefix}}user-guide/reporting/scheduling-reports/){:target="_blank"}
- archive dashboard data for historical reference
- share a dashboard snapshot without exposing live data access

<hr>

## Adding the component

1. Navigate to the **Templates** tab on the **Reporting** page.<br>
2. Open an existing report (or subreport) template or [create a new one](/docs/{{docsPrefix}}user-guide/reporting/reporting-key-concepts/#how-to-create-a-report-template){:target="_blank"}.<br>
3. In the **Components library**, find the **Dashboard** component and drag it into the **content area** of your report.

<hr>

## Configuration

#### Datasource

The widgets on the dashboard you embed may:
- have their own data source defined in their widget settings,
- have no data source at all (e.g., a static info card),
- or be configured to display data from the entity (or entities) defined in the Dashboard component of the report template.

If widgets on the dashboard are configured to display data from the entity (or entities) set in the component: 
- Define the component&#39;s data source (either a device or an [entity alias](/docs/{{docsPrefix}}user-guide/ui/aliases/){:target="_blank"}).
- If needed, configure [filters](/docs/{{docsPrefix}}user-guide/widgets/#filters){:target="_blank"}.

{% capture difference %}
If the alias contains multiple entities, the report will generate <b>a copy of the dashboard for each entity</b>.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### Target dashboard

- Select the **dashboard** you want to embed in the report.
- Optionally, specify a particular **dashboard state**.
- You can also configure a custom **time window** and **time zone** for the snapshot.

#### Layout settings

Adjust the appearance of the component by setting:
- width
- alignment
- paddings and margins
- background and border style

#### Saving and Testing

1. Once the dashboard component is configured, click **Save**.
2. To verify that your template is set up correctly and the data displays as expected, click <b>Generate test report</b> (next to the <b>Save</b> button).
   The system will generate a sample report using the available test data from the selected device or entity alias.

<hr>

## Example: Embedding the Environmental Monitor dashboard

In this example, we will embed the preconfigured <b>Environmental Monitor</b> dashboard into the report.   
All widgets on this dashboard use the entity alias "[Entity from dashboard state](/docs/{{docsPrefix}}user-guide/ui/aliases/#entity-from-dashboard-state){:target="_blank"}" as their data source.   
This means they will display values from the entity you specify as the data source in the report template.

{% include images-gallery.html imageCollection="dashboard-component-example-1" %}

<br><b><font size="4">Step 1. Preparation</font></b>

1. **Prepare a device** that sends **temperature and humidity telemetry** to ThingsBoard.   
   If you don&#39;t have a real device, you can simulate sending telemetry data in real time using the [Rule Engine](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/){:target="_blank"}. [See the guide here.](/docs/{{docsPrefix}}user-guide/advanced-guides-for-working-with-dashboard/advanced-dashboard-guide-lesson-3/#simulation-of-the-devices-telemetry-data){:target="_blank"}

2. **Prepare the [dashboard](/docs/{{docsPrefix}}user-guide/dashboards/){:target="_blank"}** you want to embed:
   - [Download the **Environmental Monitor** dashboard in JSON format.](/docs/pe/user-guide/reporting/resources/environmental_monitor.json){:target="_blank" download="environmental_monitor.json"}
   - [Import](/docs/{{docsPrefix}}user-guide/dashboards/#import-dashboard){:target="_blank"} it into your ThingsBoard instance.
   - Or use your own existing dashboard.

<b><font size="4">Step 2. Adding the component</font></b>

- Go to the "<b>Templates</b>" tab on the "<b>Reporting</b>" page.
- Open an existing <b>report template</b> or [create a new one](/docs/{{docsPrefix}}user-guide/reporting/reporting-key-concepts/#how-to-create-a-report-template){:target="_blank"}.
- Drag the <b>Dashboard</b> component into the <b>content area</b> of your report.

{% include images-gallery.html imageCollection="dashboard-component-example-2" %}

<br><b><font size="3">Step 3. Configure the data source</font></b>

- In the "<b>Datasource</b>" section, select the device whose data should be displayed in the dashboard. 
- In the "<b>Target dashboard</b>" section, choose the <b>Environmental Monitor</b> dashboard.
- <b>Save</b> the component.

{% include images-gallery.html imageCollection="dashboard-component-example-3" %}

<br><b><font size="3">Step 4. Save the report template</font></b>

- Update the <b>file name pattern</b> so that exported reports are easy to identify.   
  For example:

```text
environmental-monitor-report-%d{yyyy-MM-dd_HH:mm:ss}
```
{:.copy-code}

- **Save** the template.

{% include images-gallery.html imageCollection="dashboard-component-example-4" %}

<br><b><font size="4">Step 5. Testing</font></b>

- Click <b>Generate test report</b> to verify the configuration.

{% include images-gallery.html imageCollection="dashboard-component-example-5" %}

<br><b><font size="4">✅ Result</font></b>

Your report will now include a snapshot of the Environmental Monitor dashboard with data from the selected device.

{% include images-gallery.html imageCollection="dashboard-component-example-6" %}

<hr>

## Next steps

{% assign currentGuide = "GettingStartedGuides" %}{% include templates/multi-project-guides-banner.md %}

<hr>

## Your feedback

Don&#39;t hesitate to star ThingsBoard on [github](https://github.com/thingsboard/thingsboard){:target="_blank"} to help us spread the word.
If you have any questions about this sample, please [contact us](/docs/contact-us/){:target="_blank"}.