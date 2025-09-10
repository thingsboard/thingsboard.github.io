* TOC
{:toc}

{% assign sinceVersion = "4.2" %}
{% include templates/since.md %}

{% assign feature = "Scheduling" %}{% include templates/pe-feature-banner.md %}

The **Scheduler** is a mechanism for automating report generation. It allows you to set up automatic creation and distribution of reports at a specified time — based on a pre-defined [report template](/docs/{{docsPrefix}}user-guide/reporting/reporting-key-concepts/){:target="_blank"}.

With the Scheduler, you can:
- <b>Receive reports regularly without manual execution</b> — no need to trigger them yourself.
- <b>Set custom intervals</b> — daily, weekly, monthly, or any custom schedule.
- <b>Define recipients and formats</b> — choose who gets the report and in what format (PDF, CSV).
- <b>Use one template for multiple recipients with different data filters</b> — tailor the same report for different audiences.

## Creating a new scheduler event

- Open the "**Reporting**" page from the left-hand sidebar and go to the "**Scheduling**" tab.
- Click the "**+ Scheduled report**" button in the top-right corner.
- In the scheduling dialog, configure the following:
    - Specify the **schedule name**.
    - **General configuration**:
        - **Event type** – is always set to "Generate Report".
        - **Report template** – select a [predefined report](#report-templates) template to use.
        - **User** – select the user whose credentials will be used for report generation.
        - **Time zone** – choose the time zone  for report generation.
        - **Recipients**:
            - **Recipients** — specify the users who will receive the report.
            - **Template** — select the template that defines the report delivery method.
    - **Schedule settings**:
        - **Start time** – set the initial trigger time.
        - **Time zone** – select the time zone in which the schedule will operate.
        - **Repeat** – toggle to enable recurrence: choose intervals like daily, weekly, or monthly.

You&#39;ll find all generated reports under the "[Reports](#reports)" tab.

{% include images-gallery.html imageCollection="create-schedule-report" %}

## Reports

The "**Reports**" tab stores all your generated reports. Here you can:
- Download reports.
- Filter reports by report template or by the user whose credentials were used to generate the report.
- Delete reports you no longer need.

> The number of generated reports can be limited per tenant via [tenant profile](/docs/{{docsPrefix}}user-guide/tenant-profiles/){:target="_blank"} configuration.

{% include images-gallery.html imageCollection="reports" %}
