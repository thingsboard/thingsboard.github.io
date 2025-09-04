---
layout: docwithnav-paas-eu
assignees:
- stitenko
title: Getting started with Reporting
description: Getting started with Reporting

reporting-getting-started-create-template:
    0:
        image: /images/user-guide/reporting/reporting-getting-started/reporting-getting-started-create-template-1-pe.png
        title: 'Go to the "<b>Reporting</b>" page from the left-hand menu — you&#39;ll land on the "<b>Templates</b>" tab by default. Click the "<b>+ Add report template</b>" button in the top-right corner and select "<b>Create new report template</b>".'
    1:
        image: /images/user-guide/reporting/reporting-getting-started/reporting-getting-started-create-template-2-pe.png
        title: 'In the popup, fill out the following:<br>- <b>Name</b> it "<b>Daily Device Alarm Report</b>".<br>- Choose <b>PDF</b> report <b>format</b>.<br>- Choose <b>Report</b> as the <b>template type</b>.<br>- Click "<b>Add</b>" to create the report template and open the <b>Report Builder</b> interface.'

reporting-getting-started-report-builder:
    0:
        image: /images/user-guide/reporting/reporting-getting-started/reporting-getting-started-report-builder-1-pe.png
        title: 'The <b>Report Builder</b> allows you to add and configure components that define the structure and visual layout of your report. Components are added by dragging them from the components library into the content area.'

reporting-getting-started-heading:
    0:
        image: /images/user-guide/reporting/reporting-getting-started/reporting-getting-started-heading-1-pe.png
        title: 'First, let&#39;s add the "<b>Heading</b>" component. Locate it in the <b>report component library</b> and drag it into the <b>header content area</b> of your report.'
    1:
        image: /images/user-guide/reporting/reporting-getting-started/reporting-getting-started-heading-2-pe.png
        title: 'In the <b>editor</b>, under the <b>Text</b> field, type the title you want for the heading. In this example, we&#39;ll name it the same as the report template: "<b>Daily Devices Alarm Report</b>". If desired, you can adjust <b>font settings</b> such as size, style, or alignment to make your title stand out. Once done, click "<b>Apply</b>" to save the component.'

reporting-getting-started-rich-text:
    0:
        image: /images/user-guide/reporting/reporting-getting-started/reporting-getting-started-rich-text-1-pe.png
        title: 'Locate the <b>Rich text</b> component in the <b>component library</b> and drag it into the <b>content area</b>.'
    1:
        image: /images/user-guide/reporting/reporting-getting-started/reporting-getting-started-rich-text-2-pe.png
        title: 'Enter the desired text into the component&#39;s text field.<br>Then, click "<b>Apply</b>" to save the component.'
    
reporting-getting-started-entity-table:
    0:
        image: /images/user-guide/reporting/reporting-getting-started/reporting-getting-started-entity-table-1-pe.png
        title: 'Drag & Drop the "<b>Entity table</b>" component from the <b>component library</b> into the <b>content area</b>.'
    1:
        image: /images/user-guide/reporting/reporting-getting-started/reporting-getting-started-entity-table-2-pe.png
        title: 'In the "<b>Datasource</b>" section, click "<b>Create new</b>" entity alias button.'
    2:
        image: /images/user-guide/reporting/reporting-getting-started/reporting-getting-started-entity-table-3-pe.png
        title: 'Create a new <b>entity alias</b> that retrieves all your entities of type <b>Device</b>.'
    3:
        image: /images/user-guide/reporting/reporting-getting-started/reporting-getting-started-entity-table-4-pe.png
        title: '<b>Enable the table heading</b> and update the heading text. In the "<b>Columns</b>" section click "<b>Add column</b>".'
    4:
        image: /images/user-guide/reporting/reporting-getting-started/reporting-getting-started-entity-table-5-pe.png
        title: 'Specify the telemetry key "<b>temperature</b>" as the key for the new table column.'
    5:
        image: /images/user-guide/reporting/reporting-getting-started/reporting-getting-started-entity-table-6-pe.png
        title: 'Similarly, add columns for the telemetry key "<b>humidity</b>" and the attribute "<b>active</b>", which will display the device status. Click "<b>Apply</b>" to save component.'

reporting-getting-started-alarm-table:
    0:
        image: /images/user-guide/reporting/reporting-getting-started/reporting-getting-started-alarm-table-1-pe.png
        title: 'Drag the "<b>Alarm table</b>" component into the content area of your report.'
    1:
        image: /images/user-guide/reporting/reporting-getting-started/reporting-getting-started-alarm-table-2-pe.png
        title: 'Set the "<b>All devices</b>" entity alias as the <b>alarm source</b>.'
    2:
        image: /images/user-guide/reporting/reporting-getting-started/reporting-getting-started-alarm-table-3-pe.png
        title: 'Scroll down to <b>enable the table heading</b> and enter your heading text. <b>Save</b> the component.'

reporting-getting-started-save-report:
    0:
        image: /images/user-guide/reporting/reporting-getting-started/reporting-getting-started-save-report-1-pe.png
        title: 'After you&#39;ve added and configured all the necessary components, update the report file name to the one you need. Click "<b>Save</b>" in the top-right corner to store your template configuration.'

reporting-getting-started-generate-test-report:
    0:
        image: /images/user-guide/reporting/reporting-getting-started/reporting-getting-started-generate-test-report-1-pe.png
        title: 'To make sure your template is set up correctly and data displays as expected, click "<b>Generate test report</b>" (located next to the "Save" button).'
    1:
        image: /images/user-guide/reporting/reporting-getting-started/reporting-getting-started-generate-test-report-2-pe.png
        title: 'The system will generate a test report showing all your devices along with their alarms.'

scheduler-event-customer-a-1:
    0:
        image: /images/user-guide/reporting/reporting-getting-started/scheduler-event-customer-a-1-pe.png
        title: 'Go to the "<b>Scheduling</b>" tab on the "<b>Reporting</b>" page and click the "<b>+ Scheduled report</b>" button in the top-right corner.'
    1:
        image: /images/user-guide/reporting/reporting-getting-started/scheduler-event-customer-a-2-pe.png
        title: 'In the scheduling dialog: give your schedule event a clear title, e.g., <b>Daily Devices Alarm Report for Customer A</b><br>. – Select the previously created <b>Daily Devices Alarm Report</b> template.<br> – Specify the user account on whose behalf the report will be generated: <b>janesmith@thingsboard.io</b> (Jane Smith — Customer A administrator).'

scheduler-event-customer-a-2:
    0:
        image: /images/user-guide/reporting/reporting-getting-started/scheduler-event-customer-a-3-pe.png
        title: 'In the "<b>Recipients</b>" field, click <b>Create new</b> to create a new recipient group.'
    1:
        image: /images/user-guide/reporting/reporting-getting-started/scheduler-event-customer-a-4-pe.png
        title: '- Enter a <b>name</b> for the notification recipient group.<br>- Select <b>Customer users</b> filter. <br>- Set <b>Customer</b> to <b>Customer A</b>.<br>- Click "<b>Add</b>".'
    2:
        image: /images/user-guide/reporting/reporting-getting-started/scheduler-event-customer-a-5-pe.png
        title: 'Select an existing notification template (defines how the report will be delivered) and edit it.'
    3:
        image: /images/user-guide/reporting/reporting-getting-started/scheduler-event-customer-a-6-pe.png
        title: 'Add <b>Email</b> as a <b>delivery method</b> alongside <b>Web</b>. Click "<b>Next</b>".'
    4:
        image: /images/user-guide/reporting/reporting-getting-started/scheduler-event-customer-a-7-pe.png
        title: 'Add the <b>subject and body text</b> for the <b>email notification</b> to which the <b>PDF report</b> will be attached. Click "<b>Save</b>".'

scheduler-event-customer-a-3:
    0:
        image: /images/user-guide/reporting/reporting-getting-started/scheduler-event-customer-a-8-pe.png
        title: 'Set up the <b>schedule</b>: go to the "<b>Schedule</b>" tab, set the start date and time for the first run, enable the "<b>Repeat</b>" option, select Daily as the interval, and put the schedule&#39;s end date. Finally, click "<b>Create</b>" to save the scheduler event.'
    1:
        image: /images/user-guide/reporting/reporting-getting-started/scheduler-event-customer-a-9-pe.png
        title: 'Now, every day at the scheduled time, all Customer A users will automatically receive a report with the latest information about their device alarms.'

scheduler-event-customer-b:
    0:
        image: /images/user-guide/reporting/reporting-getting-started/scheduler-event-customer-b-1-pe.png
        title: 'Click "<b>+ Scheduled report</b>" in the top right corner of the "<b>Template</b>" page to create a new scheduler event.'
    1:
        image: /images/user-guide/reporting/reporting-getting-started/scheduler-event-customer-b-2-pe.png
        title: '- Give your schedule a descriptive name, for example: <b>Daily Device Alarm Report for Customer B</b>.<br>- Select the same template used for Customer A — <b>Daily Device Alarm Report</b>.<br>- Set the user account to <b>emmajohnson@thingsboard.io</b> (Emma Johnson – Customer B Administrator). The report will be generated on behalf of this user, containing only the data accessible to Customer B.'
    2:
        image: /images/user-guide/reporting/reporting-getting-started/scheduler-event-customer-b-3-pe.png
        title: 'In the "<b>Recipients</b>" field, click <b>Create new</b> to create a new recipient group.'
    3:
        image: /images/user-guide/reporting/reporting-getting-started/scheduler-event-customer-b-4-pe.png
        title: '- Enter a <b>name</b> for the notification recipient group.<br>- Select <b>Customer users</b> filter. <br>- Set <b>Customer</b> to <b>Customer B</b>.<br>- Click "<b>Add</b>".'
    4:
        image: /images/user-guide/reporting/reporting-getting-started/scheduler-event-customer-b-5-pe.png
        title: 'Use the existing <b>notification template</b> that is already configured to send messages via <b>Email</b> and <b>Web</b>.'
    5:
        image: /images/user-guide/reporting/reporting-getting-started/scheduler-event-customer-b-6-pe.png
        title: 'Set the delivery schedule the same way as for Customer A:<br> - Specify the date and time of the first run.<br>- Enable the "<b>Repeat</b>" option, select <br>Daily</b> as the interval, and put the schedule&#39;s end date.<br> - Finally, click "<b>Create</b>" to save the scheduler event.'
    6:
        image: /images/user-guide/reporting/reporting-getting-started/scheduler-event-customer-b-7-pe.png
        title: 'Now all Customer B users will also automatically receive a daily report at the scheduled time with the most up-to-date information on their device alarms.'

sent-web-notification:
    0:
        image: /images/user-guide/reporting/reporting-getting-started/sent-web-notification-1-pe.png
        title: 'A notification about the generated report will appear in the ThingsBoard Web UI.'

sent-email:
    0:
        image: /images/user-guide/reporting/reporting-getting-started/sent-email-1-pe.png
        title: 'An email will be sent to the user with the subject and message you configured in the notification template.'
    1:
        image: /images/user-guide/reporting/reporting-getting-started/sent-email-2-pe.png
        title: 'The report will be attached to the email as a <b>PDF</b> file.'
    2:
        image: /images/user-guide/reporting/reporting-getting-started/sent-email-3-pe.png
        title: 'The user can open and view the report in their browser or download it.'


---

{% assign docsPrefix = "paas/eu/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/user-guide/reporting/reporting-getting-started.md %}