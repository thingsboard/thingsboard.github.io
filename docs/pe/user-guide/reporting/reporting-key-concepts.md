---
layout: docwithnav-pe
assignees:
- stitenko
title: Reporting overview
description: Reporting overview
redirect_from: "/docs/user-guide/reporting/reporting-key-concepts/"

create-new-report-template:
    0:
        image: /images/user-guide/reporting/overview/create-new-report-template-1-pe.png
        title: 'Go to the "<b>Reporting</b>" page from the left-hand menu — you&#39;ll land on the "<b>Templates</b>" tab by default. Click the "<b>+ Add report template</b>" button in the top-right corner and select "<b>Create new report template</b>".'
    1:
        image: /images/user-guide/reporting/overview/create-new-report-template-2-pe.png
        title: 'Fill out the following fields: Enter a descriptive name for your template; Choose the desired output format: <b>PDF</b> or <b>CSV</b>; Select the type: <b>Report</b> or <b>Subreport</b>; Then, click "<b>Add</b>" to proceed. Once added, the Report Builder interface will open automatically.'

report-builder:
    0:
        image: /images/user-guide/reporting/overview/report-builder-1-pe.png
        title: 'Here&#39;s how the report builder looks.'

report-example:
    0:
        image: /images/user-guide/reporting/overview/report-1-pe.png
        title: 'Report template.'
    1:
        image: /images/user-guide/reporting/overview/report-2-pe.png
        title: 'Generated report.'

variables-and-dynamic-content-1:
    0:
        image: /images/user-guide/reporting/overview/variables-and-dynamic-content-1-pe.png
        title: 'In the Report Builder, add a component (for example, Rich text). In the editor, go to the "Data" tab and click "Add datasource".'
    1:
        image: /images/user-guide/reporting/overview/variables-and-dynamic-content-2-pe.png
        title: 'Specify the target entity and the data keys you want to use in the report.'
    2:
        image: /images/user-guide/reporting/overview/variables-and-dynamic-content-3-pe.png
        title: 'Next, in the component&#39;s text field, type the <b>$</b> symbol where you want to insert a variable&#39;s value. This will open a list of all available variables in the current context. <b>Select a variable</b> (for example, ${reportCreatedTime}), and its value will be inserted into the report during generation.'
    3:
        image: /images/user-guide/reporting/overview/variables-and-dynamic-content-4-pe.png
        title: 'Continue entering text and adding variables as needed.'
    4:
        image: /images/user-guide/reporting/overview/variables-and-dynamic-content-5-pe.png
        title: 'After entering your text, click the "Save" button in the top-right corner to apply the changes.'

variables-and-dynamic-content-2:
    0:
        image: /images/user-guide/reporting/overview/variables-and-dynamic-content-6-pe.png
        title: 'To verify the result, generate a test report sample by clicking the corresponding button in the top-right corner.'
    1:
        image: /images/user-guide/reporting/overview/variables-and-dynamic-content-7-pe.png
        title: 'The test report.'
    
reporting-new-entity-aliases-1:
    0:
        image: /images/user-guide/reporting/overview/reporting-new-entity-aliases-1-pe.png
        title: '- <b>Originator entity</b> — the entity that either originated the message sent to the "Generate Report" rule node or triggered the creation of a notification.<br>- <b>Owner of originator entity</b> — the owner of the entity that originated the message sent to the "Generate Report" rule node, or the owner of the entity that triggered the creation of a notification.'

import-report-template:
    0:
        image: /images/user-guide/reporting/overview/import-report-template-1-pe.png
        title: 'Replace the logo with your company&#39;s logo and provide an up-to-date address or any other relevant information. Apply all necessary filters and don&#39;t forget to save your changes.'
    1:
        image: /images/user-guide/reporting/overview/import-report-template-2-pe.png
        title: 'When you&#39;re done, don&#39;t forget to click Save to apply your changes.<br>Optionally, try generating a test report to make sure everything looks just right.'

---

{% assign docsPrefix = "pe/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/user-guide/reporting/reporting-key-concepts.md %}