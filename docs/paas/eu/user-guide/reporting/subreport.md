---
layout: docwithnav-paas-eu
assignees:
- stitenko
title: Subreport
description: Subreport overview

subreport-builder:
    0:
        image: /images/user-guide/reporting/subreport/subreport-builder-1-pe.png
        title: ''
    1:
        image: /images/user-guide/reporting/subreport/subreport-builder-2-pe.png
        title: ''
    2:
        image: /images/user-guide/reporting/subreport/subreport-builder-3-pe.png
        title: ''
    3:
        image: /images/user-guide/reporting/subreport/subreport-builder-4-pe.png
        title: ''
    4:
        image: /images/user-guide/reporting/subreport/subreport-builder-5-pe.png
        title: ''

adding-subreport-to-master-report:
    0:
        image: /images/user-guide/reporting/subreport/adding-subreport-to-master-report-1-pe.png
        title: 'Open the main report template. From the list of available components, locate the "Subreport" component.'
    1:
        image: /images/user-guide/reporting/subreport/adding-subreport-to-master-report-2-pe.png
        title: 'Drag it to the desired position in the report layout.'
    2:
        image: /images/user-guide/reporting/subreport/adding-subreport-to-master-report-3-pe.png
        title: '- In the "<b>Datasource</b>" section, specify the entity whose data will be passed to the subreport template.<br> - In the "<b>Subreport</b>" section, select the pre-created subreport template you want to include.<br> - Save changes.'
  
example-create-subreport-1:
    0:
        image: /images/user-guide/reporting/subreport/example-create-subreport-1-pe.png
        title: 'On the "<b>Templates</b>" tab of the "<b>Reporting</b>" page, click the "<b>+ Add report template</b>" button in the top-right corner and select "<b>Create new report template</b>". In the pop-up window, enter the subreport template name "<b>Daily Device Alarms (Subreport)</b>", select the <b>PDF</b> report format, and choose <b>Subreport</b> as the report template type. Click "<b>Add</b>".'

example-create-subreport-2:
    0:
        image: /images/user-guide/reporting/subreport/example-create-subreport-2-pe.png
        title: '<b>Add a "Rich text" component</b> by dragging it from the <b>components library</b> into the <b>content area</b>.'
    1:
        image: /images/user-guide/reporting/subreport/example-create-subreport-3-pe.png
        title: 'In the "<b>Data</b>" tab, set the "Datasource" by creating a new entity alias.'
    2:
        image: /images/user-guide/reporting/subreport/example-create-subreport-4-pe.png
        title: 'Create a new <b>entity alias</b> with filter type "<b>Entity from master report</b>". This allows the main report to pass the specific device to the subreport.'
    3:
        image: /images/user-guide/reporting/subreport/example-create-subreport-5-pe.png
        title: 'Add the data key "<b>name</b>" with the type "<b>Entity field</b>".'
    4:
        image: /images/user-guide/reporting/subreport/example-create-subreport-6-pe.png
        title: 'In the "<b>Content</b>" tab, enter your desired text and include the variable <b>${Name}</b> to dynamically display the current entity name.<br> Save the component.'

example-create-subreport-3:
    0:
        image: /images/user-guide/reporting/subreport/example-create-subreport-7-pe.png
        title: '<b>Add an "Alarm table" component</b> by dragging it from the <b>components library</b> into the <b>content area</b>.'
    1:
        image: /images/user-guide/reporting/subreport/example-create-subreport-8-pe.png
        title: 'Configure the <b>time window</b> to display alarms from the <b>current day</b>.'
    2:
        image: /images/user-guide/reporting/subreport/example-create-subreport-9-pe.png
        title: 'Use the previously created "<b>Entity from master report</b>" alias as the <b>datasource</b> so that the table displays alarms for the device whose data is passed by the main report.'
    3:
        image: /images/user-guide/reporting/subreport/example-create-subreport-10-pe.png
        title: '<b>Set the table header</b>. Include the <b>${entityName}</b> variable in the header to dynamically display the current entity&#39;s name.'

example-create-subreport-4:
    0:
        image: /images/user-guide/reporting/subreport/example-create-subreport-11-pe.png
        title: '<b>Add a "Divider" component</b> to visually separate sections in the report for each device.'
    1:
        image: /images/user-guide/reporting/subreport/example-create-subreport-12-pe.png
        title: 'Save the component.'

example-create-subreport-5:
    0:
        image: /images/user-guide/reporting/subreport/example-create-subreport-13-pe.png
        title: 'Subreport configuration is complete. Save the subreport by clicking the "<b>Save</b>" button in the top-right corner.'

example-create-report-1:
    0:
        image: /images/user-guide/reporting/subreport/example-create-report-1-pe.png
        title: 'Now create another <b>template for the main report</b>. Go to "<b>Reports</b>" page → "<b>Templates</b>" tab, then click "<b>+ Add report template</b>".<br>- Name it "<b>Daily Device Alarms Report</b>", set the format to <b>PDF</b>, and choose "<b>Report</b>" as the template type. Click "<b>Add</b>".'

example-create-report-2:
    0:
        image: /images/user-guide/reporting/subreport/example-create-report-2-pe.png
        title: '<b>Add a "Heading" component</b>by dragging it from the <b>components library</b> into the <b>content area</b>.'
    1:
        image: /images/user-guide/reporting/subreport/example-create-report-3-pe.png
        title: 'Enter the heading text, for example: "<b>Daily device alarms report</b>"'

example-create-report-3:
    0:
        image: /images/user-guide/reporting/subreport/example-create-report-4-pe.png
        title: '<b>Add an "Subreport" component</b> by dragging it from the <b>components library</b> into the <b>content area</b>. '
    1:
        image: /images/user-guide/reporting/subreport/example-create-report-5-pe.png
        title: 'In the "<b>Datasource</b>" section, create a new entity alias.'
    2:
        image: /images/user-guide/reporting/subreport/example-create-report-6-pe.png
        title: 'Create a new entity alias that retrieves all your entities of type Device.'
    6:
        image: /images/user-guide/reporting/subreport/example-create-report-7-pe.png
        title: 'In the "<b>Subreport</b>" section, select the previously created subreport <b>Daily Device Alarms (Subreport)</b>. Save the component.'
    7:
        image: /images/user-guide/reporting/subreport/example-create-report-8-pe.png
        title: 'Finally, save the main report template.'

example-generate-test-report:
    0:
        image: /images/user-guide/reporting/subreport/example-create-report-9-pe.png
        title: 'To make sure the subreport is generated correctly, click the "<b>Generate test report</b>" button in the top-right corner of the window.'
    1:
        image: /images/user-guide/reporting/subreport/example-create-report-10-pe.png
        title: 'As you can see, the generated report contains all three of our devices, with a separate table for each showing their alarms for the current day.'









create-new-report-template:
    0:
        image: /images/user-guide/reporting/create-new-report-template-1-pe.png
        title: 'Go to the "<b>Reporting</b>" page from the left-hand menu — you&#39;ll land on the "<b>Templates</b>" tab by default. Click the "<b>+ Add report template</b>" button in the top-right corner and select "<b>Create new report template</b>".'
    1:
        image: /images/user-guide/reporting/create-new-report-template-2-pe.png
        title: 'Fill out the following fields: Enter a descriptive name for your template; Choose the desired output format: <b>PDF</b> or <b>CSV</b>; Select the type: <b>Report</b> or <b>Subreport</b>; Then, click "<b>Add</b>" to proceed. Once added, the Report Builder interface will open automatically.'

report-builder:
    0:
        image: /images/user-guide/reporting/report-builder-1-pe.png
        title: 'Here&#39;s how the report builder looks.'

report-example:
    0:
        image: /images/user-guide/reporting/report-1-pe.png
        title: 'Report template.'
    1:
        image: /images/user-guide/reporting/report-2-pe.png
        title: 'Generated report.'

variables-and-dynamic-content-1:
    0:
        image: /images/user-guide/reporting/variables-and-dynamic-content-1-pe.png
        title: 'In the Report Builder, add a component (for example, Rich text). In the editor, go to the "Data" tab and click "Add datasource".'
    1:
        image: /images/user-guide/reporting/variables-and-dynamic-content-2-pe.png
        title: 'Specify the target entity and the data keys you want to use in the report.'
    2:
        image: /images/user-guide/reporting/variables-and-dynamic-content-3-pe.png
        title: 'Next, in the component&#39;s text field, type the <b>$</b> symbol where you want to insert a variable&#39;s value. This will open a list of all available variables in the current context. <b>Select a variable</b> (for example, ${reportCreatedTime}), and its value will be inserted into the report during generation.'
    3:
        image: /images/user-guide/reporting/variables-and-dynamic-content-4-pe.png
        title: 'Continue entering text and adding variables as needed.'
    4:
        image: /images/user-guide/reporting/variables-and-dynamic-content-5-pe.png
        title: 'After entering your text, click the "Save" button in the top-right corner to apply the changes.'

variables-and-dynamic-content-2:
    0:
        image: /images/user-guide/reporting/variables-and-dynamic-content-6-pe.png
        title: 'To verify the result, generate a test report sample by clicking the corresponding button in the top-right corner.'
    1:
        image: /images/user-guide/reporting/variables-and-dynamic-content-7-pe.png
        title: 'The test report.'
    
reporting-new-entity-aliases-1:
    0:
        image: /images/user-guide/reporting/reporting-new-entity-aliases-1-pe.png
        title: '- <b>Originator entity</b> — the entity that either originated the message sent to the "Generate Report" rule node or triggered the creation of a notification.<br>- <b>Owner of originator entity</b> — the owner of the entity that originated the message sent to the "Generate Report" rule node, or the owner of the entity that triggered the creation of a notification.'

reporting-new-entity-aliases-2:
    0:
        image: /images/user-guide/reporting/reporting-new-entity-aliases-2-pe.png
        title: '- <b>Entity from master report</b> - the entity retrieved from the data source configured for the subreport component. If multiple entities are present, a separate subreport component will be generated for each entity.<br> - <b>Owner of entity from master report</b> - the owner of entity retrieved from the data source configured for the <b>subreport</b> component. If multiple entities are present, a separate <b>subreport</b> component will be generated for each entity.'

create-subreport-template:
    0:
        image: /images/user-guide/reporting/create-subreport-template-1-pe.png
        title: 'Fill out the following fields: Enter a descriptive name for your template; Choose the desired output format: <b>PDF</b> or <b>CSV</b>; Select the type - <b>Subreport</b>; Then, click "<b>Add</b>" to proceed. Once added, the subreport builder interface will open automatically.'
    1:
        image: /images/user-guide/reporting/create-subreport-template-2-pe.png
        title: 'Just like regular reports, subreports can contain components such as tables, text blocks, images, dashboards, etc., and they fully support dynamic entity aliases and data filtering. However, subreports <b>are not scheduled or generated independently</b> — they are <b>included as part of a main report</b>.'

import-report-template:
    0:
        image: /images/user-guide/reporting/import-report-template-1-pe.png
        title: 'Replace the logo with your company&#39;s logo and provide an up-to-date address or any other relevant information. Apply all necessary filters and don&#39;t forget to save your changes.'
    1:
        image: /images/user-guide/reporting/import-report-template-2-pe.png
        title: 'When you&#39;re done, don&#39;t forget to click Save to apply your changes.<br>Optionally, try generating a test report to make sure everything looks just right.'
  
create-schedule-report:
    0:
        image: /images/user-guide/reporting/schedule-report-1-pe.png
        title: 'Go to the "Scheduling" page and click the "+ Scheduled report" button in the top-right corner.'
    1:
        image: /images/user-guide/reporting/schedule-report-2-pe.png
        title: 'In the scheduling dialog: Specify the schedule name;<br> General configuration: Select a predefined template to use; Select the user whose credentials will be used for report generation; Choose the time zone for schedule execution; Specify the report recipients.'
    2:
        image: /images/user-guide/reporting/schedule-report-3-pe.png
        title: 'Set up the schedule for generating and sending the report.'
    3:
        image: /images/user-guide/reporting/schedule-report-4-pe.png
        title: 'The report generation schedule has been added.'

reports:
    0:
        image: /images/user-guide/reporting/reports-1-pe.png
        title: ''

---

{% assign docsPrefix = "paas/eu/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/user-guide/reporting/subreport.md %}