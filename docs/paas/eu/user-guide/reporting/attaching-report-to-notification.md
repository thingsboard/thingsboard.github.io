---
layout: docwithnav-paas-eu
assignees:
- stitenko
title: Attaching report to notification
description: How to attach report to a notification

reporting-getting-started-save-report-1:
    0:
        image: /images/user-guide/reporting/attaching-report-to-notification/example-attach-report-1-pe.png
        title: 'Go to the "<b>Reporting</b>" page from the left-hand menu — you&#39;ll land on the "<b>Templates</b>" tab by default. Click the "<b>+ Add report template</b>" button in the top-right corner and select "<b>Create new report template</b>".'
    1:
        image: /images/user-guide/reporting/attaching-report-to-notification/example-attach-report-2-pe.png
        title: 'In the popup, fill out the following:<br>- <b>Name</b> it "<b>New alarm</b>".<br>- Choose <b>PDF</b> report <b>format</b>.<br>- Choose <b>Report</b> as the <b>template type</b>.<br>- Click "<b>Add</b>" to create the report template and open the <b>Report Builder</b> interface.'
    2:
        image: /images/user-guide/reporting/attaching-report-to-notification/example-attach-report-3-pe.png
        title: 'Drag the "<b>Alarm table</b>" component into the content area of your report.'
    3:
        image: /images/user-guide/reporting/attaching-report-to-notification/example-attach-report-4-pe.png
        title: 'In the "<b>Alarm source</b>" section, click "<b>Create new</b>" entity alias button.'
    4:
        image: /images/user-guide/reporting/attaching-report-to-notification/example-attach-report-5-pe.png
        title: 'Use the "<b>Originator entity</b>" filter — this way, the table will receive data from the entity that triggered the notification. Click "</b>Add</b>".'
    5:
        image: /images/user-guide/reporting/attaching-report-to-notification/example-attach-report-6-pe.png
        title: 'Apply filters to display only <b>active</b> alarms. Save the component.<br>- Click "<b>Save</b>" in the top-right corner to store your template configuration.'

reporting-getting-started-save-report-2:
    0:
        image: /images/user-guide/reporting/attaching-report-to-notification/example-attach-report-7-pe.png
        title: 'Go to the "<b>Templates</b>" tab of the "<b>Notification center</b>" page, find the "<b>New alarm notification</b>" template, and <b>click on it</b> to open it for editing.'
    1:
        image: /images/user-guide/reporting/attaching-report-to-notification/example-attach-report-8-pe.png
        title: 'Let&#39;s add another notification delivery method — <b>Email</b>.'
    2:
        image: /images/user-guide/reporting/attaching-report-to-notification/example-attach-report-9-pe.png
        title: 'Enable the "<b>Attach report</b>" option. Select the previously created <b>New alarm</b> template.<br> Specify the user account on whose behalf the report will be generated: <b>john.doe@thingsboard.io</b> (John Doe — Tenant Administrator). Click "<b>Next</b>".'
    3:
        image: /images/user-guide/reporting/attaching-report-to-notification/example-attach-report-10-pe.png
        title: 'Enter the subject and message that will be sent via email along with the attached PDF report. Save the changes to the template by clicking the "<b>Save</b>" button.'

reporting-getting-started-save-report-3:
    0:
        image: /images/user-guide/reporting/attaching-report-to-notification/example-attach-report-11-pe.png
        title: 'You should immediately see a notification in the ThingsBoard Web UI.'

reporting-getting-started-save-report-4:
    0:
        image: /images/user-guide/reporting/attaching-report-to-notification/example-attach-report-12-pe.png
        title: 'An email will also be sent to all Tenant Administrators, with a PDF report attached containing the alarm details.'
    1:
        image: /images/user-guide/reporting/attaching-report-to-notification/example-attach-report-13-pe.png
        title: 'The user can open and view the report in their browser or download it.'
    2:
        image: /images/user-guide/reporting/attaching-report-to-notification/example-attach-report-14-pe.png
        title: ''

alarm-rule:
    0:
        image: /images/user-guide/reporting/attaching-report-to-notification/alarm-rule-1-pe.png
        title: 'Go to the "<b>Device profiles</b>" page in the "<b>Profiles</b>" section. Select the profile your device is using to open its details. Navigate to the "<b>Alarm rules</b>" tab and configure the alarm rule.'

check-connectivity-feature:
    0:
        image: /images/user-guide/reporting/attaching-report-to-notification/check-connectivity-feature-1-pe.png
        title: 'Click on your device, then click the "<b>Check connectivity</b>" button in the device details.'
    1:
        image: /images/user-guide/reporting/attaching-report-to-notification/check-connectivity-feature-2-pe.png
        title: 'Copy the provided command. Trigger the alarm by publishing telemetry for your device that exceeds the threshold value defined in the alarm creation rule.'

---

{% assign docsPrefix = "paas/eu/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/user-guide/reporting/attaching-report-to-notification.md %}