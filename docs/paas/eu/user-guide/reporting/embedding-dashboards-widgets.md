---
layout: docwithnav-paas-eu
assignees:
- stitenko
title: Embedding dashboards in a report
description: How to embed existing dashboards in a report

time-series-chart-template:
    0:
        image: /images/user-guide/reporting/embedding-dashboard/time-series-chart-template-1-pe.png
        title: '<b>Prepare dashboard or widget</b> — for example, chart, you want to embed into the report.'

embedding-dashboard:
    0:
        image: /images/user-guide/reporting/embedding-dashboard/embedding-dashboard-1-pe.png
        title: 'Go to the "<b>Templates</b>" tab on the "<b>Reporting</b>" page. Either select an existing <b>report template</b> or create a new one.'
    1:
        image: /images/user-guide/reporting/embedding-dashboard/embedding-dashboard-2-pe.png
        title: 'In the components library, locate the "<b>Dashboard</b>" component and drag it into the <b>content area</b> of your report.'
    2:
        image: /images/user-guide/reporting/embedding-dashboard/embedding-dashboard-3-pe.png
        title: 'Configure the <b>data source for the dashboard component</b>:<br>- In the "<b>Datasource</b>" section select the device whose data should be displayed in the dashboard.<br>- In the "<b>Target dashboard</b>" section, specify which dashboard you want to embed into the report.<br>- Save the component.'
    3:
        image: /images/user-guide/reporting/embedding-dashboard/embedding-dashboard-4-pe.png
        title: 'Save the template.'

embedding-dashboard-test:
    0:
        image: /images/user-guide/reporting/embedding-dashboard/embedding-dashboard-5-pe.png
        title: 'To make sure your template is set up correctly and data displays as expected, click "<b>Generate test report</b>" (located next to the "Save" button). '
    1:
        image: /images/user-guide/reporting/embedding-dashboard/embedding-dashboard-6-pe.png
        title: 'The system will generate a test report showing the chart.'

---

{% assign docsPrefix = "paas/eu/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/user-guide/reporting/embedding-dashboards-widgets.md %}