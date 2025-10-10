* TOC
{:toc}

{% assign sinceVersion = "4.2" %}
{% include templates/since.md %}

{% assign feature = "Reporting" %}{% include templates/pe-feature-banner.md %}

In ThingsBoard, **Reporting** is a powerful and flexible tool for collecting, organizing, and automatically delivering data in the form of reports.

The reporting system is built around two key components:
- **Report Template** – defines the structure, content, and format of a report. A template can be in **PDF** or **CSV** format and include any [supported components](/docs/{{docsPrefix}}user-guide/reporting/reporting-key-concepts/#components--interaction){:target="_blank"}.
- **Scheduler Event** – automatically triggers report generation at a specified time and delivers it to selected recipients through available channels, such as email, Slack, or other integrations.

**In short**: the template defines **what** will be in the report, while the scheduler determines **when** and **to whom** it will be delivered.

In this guide, we&#39;ll walk through the basic steps of using Reporting in ThingsBoard, and create a report template with automated delivery configured for two different customers.

{% include templates/prerequisites-pe.md %}

> <b>Important:</b>
- For this example, three devices and two customers who own these devices have been created. Alarms have also been triggered on some of the devices. 
You&#39;ll need to do the same — otherwise, the device and alarm tables in your report will appear empty.
- If you&#39;re just getting started with the ThingsBoard platform, it is recommended that you first review the [Getting Started Guide with ThingsBoard Professional Edition](/docs/getting-started-guides/helloworld-pe/){:target="_blank"}.

## Step 1. Create the report template

As an example, let&#39;s create a report template that includes:
- **A table with all customer devices**, displaying their latest telemetry values and current status.
- **A table of alarms** triggered on these devices over the past 24 hours.
- **Two separate line charts** for device temperature and humidity values over the past 24 hours.


This setup provides both an up-to-date overview of device conditions and a quick reference for any issues detected today — all in one consolidated report.

- Open the "**Reporting**" page from the left-hand sidebar. You&#39;ll automatically be taken to the "**Templates**" tab.
- Click the "**+ Add report template**" button in the top-right corner.
- Choose "**Create new report template**".
- In the popup, fill out the following:
    - <b>Name</b> it "<b>Daily Device Alarm Report</b>".
    - Choose <b>PDF</b> report <b>format</b>.
    - Choose <b>Report</b> as the <b>template type</b>.
    - [Optional] <b>Description</b>: "<b>Daily report on device activity and alarms</b>".
    - Click "<b>Add</b>" to create the report template and open the <b>Report Builder</b> interface.

In the **Report Builder** you can design the structure, layout, and content of your report.

{% include images-gallery.html imageCollection="reporting-getting-started-create-template" %}

## Step 2. Adding report components

The <b>Report Builder</b> allows you to add and configure components that define the structure and visual layout of your report.

Components are added by dragging them from the components library into the content area.

{% include images-gallery.html imageCollection="reporting-getting-started-report-builder" %}

### Step 2.1 "Heading" component

First, let&#39;s add the <b>Heading</b> component. 

- Locate it in the <b>report components library</b> and drag it into the <b>header area</b> of your report.
- In the <b>editor</b>, under the <b>Text</b> field, type the title you want for the heading. In this example, we&#39;ll name it the same as the report template:
  ```
  Daily Devices Alarm Report
  ```
  {:.copy-code}

- If desired, you can adjust <b>font settings</b> such as size, style, or alignment to make your title stand out.
- Once done, click <b>Apply</b> to save the component.

{% include images-gallery.html imageCollection="reporting-getting-started-heading" %}

### Step 2.2 "Rich text" component

Next, let&#39;s add the <b>Rich text</b> component, which will contain a brief explanation of the report&#39;s purpose.

- Locate the <b>Rich text</b> component in the <b>components library</b> and drag it into the <b>content area</b>.
- Enter the following text (or your preferred description) component&#39;s text field.   
  For example:
  ```
  This report lists all devices currently deployed in your project, along with their alarms for the current day.
  ```
  {:.copy-code}  

- Once you&#39;ve added the text, click <b>Apply</b>.

{% include images-gallery.html imageCollection="reporting-getting-started-rich-text" %}

### Step 2.3 "Entity table" component

The next component we&#39;ll add is the <b>Entity table</b> — a table-style component that will display a list of all your devices along with their latest telemetry values and status.

- Drag & Drop the <b>Entity table</b> component from the <b>components library</b> into the <b>content area</b>.
- In the <b>Datasource</b> section, create a new <b>entity alias</b> that retrieves all your entities of type <b>Device</b>.
- Turn on the <b>table heading</b> and update the heading text.
- In the <b>Columns</b> section:
  - Add a new table column and set the key to "<b>temperature</b>".
  - Add another table column with the telemetry key "<b>humidity</b>". 
  - Add one more table column for the attribute "<b>active</b>", which will display the device&#39;s status.
- In the <b>column settings</b>, set <b>center alignment</b> for the cells of each key.
- Click <b>Save</b> component to apply your changes.

{% include images-gallery.html imageCollection="reporting-getting-started-entity-table" %}

### Step 2.4 "Alarm table" component

The next component we&#39;ll add is the **Alarm table** component, which displays a list of alarms for the selected period.

- From the components panel, drag the <b>Alarm table</b> component into the main content area of your report layout.
- By default, the Alarm table is preconfigured to display alarms from the <b>last 24 hours</b>.
- Set the <b>All devices</b> entity alias as the <b>alarm source</b>.
- In the <b>Filters</b> section, check the box to display only currently active alarms.
- Scroll down slightly, find the switch labeled <b>Table heading</b>, and toggle it on. 
- Type your desired heading, for example:
  ```
  The following table lists all alarms for your devices from the last day.
  ```
  {:.copy-code}

  - Adjust the <b>horizontal alignment</b> and reduce the <b>font size</b> if desired.
- Keep the table columns as they are (no changes needed).
- <b>Save</b> the component.

{% include images-gallery.html imageCollection="reporting-getting-started-alarm-table" %}

### Step 2.5 "Line chart" component

The final components we&#39;ll add to the report are two separate <b>line charts</b> to visualize <b>historical telemetry trends</b> for <b>temperature</b> and <b>humidity</b>. Each chart will represent data collected over the <b>last 24 hours</b> from your devices.

<b><font size="3">1. Add the first chart – Temperature</font></b>

- Drag the <b>Line chart</b> component into the content area of the report.
- By default, the time window shows the last day of data, aggregated by 1 hour.
- Set the entity alias <b>All devices</b> as the <b>datasource</b>.
- Keep the telemetry key <b>temperature</b>, but change the <b>label</b> to 
  ```
  ${entityName} temperature
  ```
  {:.copy-code}

- Configure the Y axes:
  - Label: **Temperature** 
  - Min: **15**
  - Max: **35**
  - Units: **°C**
- Set thresholds:
  - First: **30 °C** , color <span style="color:red">red</span>
  - Second: **18 °C** , color <span style="color:blue">blue</span>
- Set the <b>legend position</b> to <b>Bottom</b>.
- <b>Save</b> the component.

{% include images-gallery.html imageCollection="reporting-getting-started-charts-1" %}

<br><b><font size="3">2. Add the second chart – Humidity</font></b>

- Drag another <b>Line chart</b> component just below the first one.
- Specify the entity alias <b>All devices</b> as the <b>datasource</b>.
- Set the telemetry key to <b>humidity</b>, units <b>%</b>, and change the <b>label</b> to
  ```
  ${entityName} humidity
  ```
  {:.copy-code}

- Configure the Y axes:
  - Label: **Humidity**
  - Units: **%**
- Set the <b>legend position</b> to <b>Bottom</b>.
- <b>Save</b> the component.

{% include images-gallery.html imageCollection="reporting-getting-started-charts-2" %}

### Step 2.6 Save the report template and preview

After adding and configuring all required components in your report template, the final step is to <b>save your work</b> and optionally <b>generate a test report</b> to verify that everything displays correctly.

<br><b><font size="3">Update the report file name</font></b>

Before saving the template, update the report file name so that exported files are easy to identify:
- In the <b>File name pattern</b> field enter a clear, descriptive name such as:
  ```text
  daily-device-alarm-report-%d{yyyy-MM-dd_HH:mm:ss}
  ```
  {:.copy-code}

{% include images-gallery.html imageCollection="reporting-getting-started-save-report-1" %}

<br><b><font size="3">Save your template</font></b>

To save the current configuration:
- Click the <b>Save</b> button in the <b>top-right corner</b> of the report builder interface.

This stores your layout, components, and settings under the current template for future use in manual or [scheduled report](/docs/{{docsPrefix}}user-guide/reporting/scheduling-reports/){:target="_blank"} generation.

{% include images-gallery.html imageCollection="reporting-getting-started-save-report-2" %}

### Step 2.7 Generate a test report (Optional)

To make sure your template is set up correctly and data displays as expected, click "<b>Generate test report</b>" (located next to the <b>Save</b> button).   
The system will create a sample report using available test data from your selected entity alias.

{% include images-gallery.html imageCollection="reporting-getting-started-generate-test-report" %}

## Step 3: Scheduling the report for customers

Now that the <b>Daily Devices Alarm</b> report template is ready, you can set it up for automatic delivery to your clients using the scheduler feature.

<b>Key points for correct scheduling</b>

To ensure the report is generated correctly and contains accurate data, you must specify:
- <b>Report recipients</b> – the users who will receive the generated report (e.g., managers or clients).
- <b>User account</b> – the account under which the report will be generated. This defines the data scope and permissions applied to the report.

<b>Why this matters</b>

In ThingsBoard, reports are generated according to the access rights of the user account that triggers them.

Example:
- If the report should include only devices owned by <b>Customer A</b>, you must set the <b>User</b> field to the email address of a user belonging to Customer A when scheduling the report.
- Likewise, to schedule a report for <b>Customer B</b> recipients, use the email address of a Customer B user in the <b>User</b> field.

This ensures the report will only display devices and data accessible to that specific user.

### Step 3.1 Scheduling a report for Customer A users

First, we&#39;ll set up automated delivery of the report for all Customer A users.
The report will be generated on behalf of <b>Jane Smith</b>, the administrator for this customer.

- Go to the "<b>Scheduling</b>" tab on the "<b>Reporting</b>" page.
- Сlick the "<b>+ Scheduled Report</b>" in the top-right corner to create a new scheduler event.
- In the <b>scheduling</b> dialog, provide the following details:
  - Give your schedule event a clear title, for example:
  ```
  Daily Devices Alarm Report for Customer A
  ```
  {:.copy-code}

  - <b>Event type</b> – always set to <b>Create report</b>.
  - <b>Report template</b> – select the previously created Daily Devices Alarm Report template.
  - <b>User</b> – specify the user account on whose behalf the report will be generated: <b>janesmith@thingsboard.io</b> (Jane Smith — Customer A administrator).

{% include images-gallery.html imageCollection="scheduler-event-customer-a-1" %}

- Set the <b>recipients</b>:
  - In the "<b>Recipients</b>" field, click <b>Create new</b> to create a new recipient group.
    - Enter a <b>name</b> for the notification recipient group.
    - Select <b>Customer users</b> filter. 
    - Set <b>Customer</b> to <b>Customer A</b>.
    - Click "<b>Add</b>".

- <b>Notification template</b> & delivery methods:
  - Select an existing notification template (defines how the report will be delivered) and edit it.
  - Add <b>Email</b> as a delivery method alongside <b>Web</b>. Click "<b>Next</b>".
  - Add the <b>subject and body text</b> for the <b>email notification</b> to which the <b>PDF report</b> will be attached. Click "<b>Save</b>".

{% include images-gallery.html imageCollection="scheduler-event-customer-a-2" %}

<b>Set up the <b>schedule</b>

- Go to the <b>Schedule</b> tab.
- <b>Start time</b> – set the date and time of the first run.
- <b>Time zone</b> – choose the applicable time zone.
- Enable <b>Repeat</b>:
  - <b>Interval</b> – select <b>Daily</b>.
  - <b>End date</b> – set an end date or leave blank for ongoing delivery.
- Finally, click "<b>Create</b>" to save and apply the scheduler event.

Now, every day at the scheduled time, all Customer A users will automatically receive a report with the latest information about their device alarms.

{% include images-gallery.html imageCollection="scheduler-event-customer-a-3" %}

### Step 3.2. Scheduling a report for Customer B users

Now let&#39;s create another schedule event to send the report to Customer B&#39;s users.
This report will be generated on behalf of <b>Emma Johnson</b> — the administrator of this customer.

- Click "<b>+ Scheduled report</b>" in the top right corner of the "<b>Template</b>" page to create a new scheduler event.
- Give your schedule a descriptive name, for example: 
  ```
  Daily Device Alarm Report for Customer B
  ```
  {:.copy-code}

- Select the same template used for Customer A — <b>Daily Device Alarm Report.
- Set the user account to <b>emmajohnson@thingsboard.io</b> (Emma Johnson – Customer B Administrator). 
  > The report will be generated on behalf of this user, containing only the data accessible to Customer B.

- In the "<b>Recipients</b>" field, click "<b>Create new</b>" to create a new recipient group.
  - <b>Name</b>: Enter a <b>group name</b>.
  - <b>Filter</b>: Select <b>Customer users</b>.
  - <b>Customer</b>: Set to <b>Customer B</b>.
  - Click "<b>Add</b>".

- Use the existing <b>notification template</b> that is already configured to send messages via <b>Email</b> and <b>Web</b>.
- Set the delivery schedule the same way as for Customer A:
  - Start date/time: Specify the date and time of the first run.
  - <b>Repeat</b>: Enable this option.
    - <b>Interval</b>: Select "<b>Daily</b>".
    - <b>End date</b>: put the schedule&#39;s end date.

- Finally, click "<b>Create</b>" to save the scheduler event.

{% include images-gallery.html imageCollection="scheduler-event-customer-b" %}

## Step 4. Scheduled events result

Both scenarios use the same template — Daily Device Alarm Report.

Each user from both customers receives their own individual report containing only the entities they have access to.

The system automatically sends the reports daily at the scheduled time, without any manual intervention.

At the time specified in the scheduled events, all users of Customer A and Customer B will receive [notifications](/docs/{{docsPrefix}}user-guide/notifications/){:target="_blank"} along with the generated report on their device alarms.

Notifications will be delivered through two channels:

<b>1. Web UI notification<b>

- A notification about the generated report will appear in the ThingsBoard Web UI.
- Tenant Users can open the report directly within the ThingsBoard interface.

> <b>Important:</b>
- Only Tenant Users can view generated reports directly in the ThingsBoard Web UI.
- Customer users do not have access to reports in the Web UI — they can only receive them through <b>Email</b> or <b>Slack</b>.   
If your recipients are customer users, make sure at least one of these delivery channels is selected.

{% include images-gallery.html imageCollection="sent-web-notification" %}

<br>
<b>2. Email notification<b>
- An email will be sent to the user with the subject and message you configured in the notification template.
- The email will have the report attached as a PDF file, which can be opened and viewed in the browser or downloaded.

{% include images-gallery.html imageCollection="sent-email" %}

## Importing a template from JSON

If needed, you can also [download a ready-made "Daily Device Alarm Report" template as a JSON file](/docs/pe/user-guide/reporting/resources/daily_device_alarm_report.json){:target="_blank" download="daily_device_alarm_report.json"}.   
To import a template from a JSON file into your instance, see the instructions [in this guide](/docs/{{docsPrefix}}user-guide/reporting/reporting-key-concepts/#importing-report-template){:target="_blank"}.

## Next steps

{% assign currentGuide = "GettingStartedGuides" %}{% include templates/multi-project-guides-banner.md %}

## Your feedback

Don&#39;t hesitate to star ThingsBoard on [github](https://github.com/thingsboard/thingsboard){:target="_blank"} to help us spread the word.
If you have any questions about this sample, please [contact us](/docs/contact-us/){:target="_blank"}.