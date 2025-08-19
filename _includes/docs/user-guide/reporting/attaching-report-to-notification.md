* TOC
{:toc}

{% assign sinceVersion = "4.2" %}
{% include templates/since.md %}

{% assign feature = "Reporting" %}{% include templates/pe-feature-banner.md %}

In ThingsBoard, you can attach ready-made reports to system [notifications](/docs/{{docsPrefix}}user-guide/notifications/){:target="_blank"} sent to users through available channels (only Web, Email or [Slack](/docs/{{docsPrefix}}user-guide/notifications/#slack){:target="_blank"}).
This lets you pair an event notification with a full report that recipients can open and view or download instantly.

> **Important**: If the recipient is a Customer user, reports can only be attached to notifications sent via Email or Slack.   
Viewing reports directly in the Web UI is available only for tenant users.

**When it&#39;s useful:**
- Automatically sending a report when a critical alarm occurs.
- Delivering regular summaries without needing to run the scheduler.
- Combining system events (like data updates) with up-to-date analytical content.

<br><b><font size="4">Example: Adding a Report to the "New alarm notification" Template</font></b>

Let&#39;s walk through how to attach a report to a notification using the existing "<b>New alarm notification</b>" [template](/docs/{{docsPrefix}}user-guide/notifications/#templates){:target="_blank"}.
This template is used to send alerts to tenant administrators whenever a new alarm is created.

<b>We&#39;ll make the following changes:</b>
- <b>Add another delivery method — Email</b> (in addition to the existing Web notifications).
- <b>Attach a PDF report<b> with detailed alarm information to the email.

<b><font size="3">First, let&#39;s create a template for generating a PDF report.</font></b>

We&#39;ll add a single component to the template — an Alarm Table — to display the created alarm and its details.

- Go to the "<b>Reporting</b>" page from the left-hand menu — you&#39;ll land on the "<b>Templates</b>" tab by default. 
- Click the "<b>+ Add report template</b>" button in the top-right corner and select "<b>Create new report template</b>".
- In the popup, fill out the following:
  - <b>Name</b> it "<b>New alarm</b>".
  - Choose <b>PDF</b> report <b>format</b>.
  - Choose <b>Report</b> as the <b>template type</b>.<br>
  - Click "<b>Add</b>" to create the report template and open the <b>Report Builder</b> interface.

**Configure the report in Report Builder:**

- Locate and drag the "<b>Alarm table</b>" component into the content area of your report.
- In the "<b>Alarm source</b>" section, click "<b>Create new</b>" entity alias button.
  - Use the "<b>Originator entity</b>" filter — this way, the table will receive data from the entity that triggered the notification.
- Apply filters to display only <b>active</b> alarms. 
- Save the component. 
- Click "<b>Save</b>" in the top-right corner to store your template configuration.

{% include images-gallery.html imageCollection="reporting-getting-started-save-report-1" %}

<br><b><font size="3">Now, let&#39;s modify the "New alarm notification" template.</font></b>

- Go to the "<b>Templates</b>" tab of the "<b>Notification center</b>" page.
- Find the "<b>New alarm notification</b>" template, and <b>click on it</b> to open it for editing.
- Let&#39;s add another notification delivery method — <b>Email</b>.
- Enable the "<b>Attach report</b>" option. 
  - Select the previously created <b>New alarm</b> template.
  - Specify the user account on whose behalf the report will be generated: <b>john.doe@thingsboard.io</b> (John Doe — Tenant Administrator). 
  - Click "<b>Next</b>".
- Enter the <b>subject and message</b> that will be sent via email along with the attached PDF report. 
- Save the changes to the template by clicking the "<b>Save</b>" button.

{% include images-gallery.html imageCollection="reporting-getting-started-save-report-2" %}

<br><b><font size="3">After making changes to the "New alarm notification" template, it&#39;s a good idea to test that everything works as expected.</font></b>

First, make sure that you have an alarm creation rule configured for your device.
You can find instructions for setting up such a rule in the relevant section of the documentation ([see the link](https://thingsboard.io/docs/getting-started-guides/helloworld-pe/#step-4-configure-alarm-rules){:target="_blank"}).

{% include images-gallery.html imageCollection="alarm-rule" %}

Trigger the alarm by publishing telemetry for your device that exceeds the threshold value defined in the alarm creation rule.
The easiest way to do this is by using the [Check connectivity](https://thingsboard.io/docs/getting-started-guides/helloworld-pe/#step-2-connect-device){:target="_blank"} feature in ThingsBoard.

{% include images-gallery.html imageCollection="check-connectivity-feature" %}

<b>Check the notifications:</b>

You should immediately see a notification in the ThingsBoard Web UI.

{% include images-gallery.html imageCollection="reporting-getting-started-save-report-3" %}

An email will also be sent to all Tenant Administrators, with a PDF report attached containing the alarm details. The user can open and view the report in their browser or download it.

{% include images-gallery.html imageCollection="reporting-getting-started-save-report-4" %}