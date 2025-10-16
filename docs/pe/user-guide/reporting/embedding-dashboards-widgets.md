---
layout: docwithnav-pe
assignees:
- stitenko
title: Embedding dashboards in a report
description: How to embed existing dashboards in a report
redirect_from: "/docs/user-guide/reporting/embedding-dashboards-widgets/"

dashboard-component-example-1:
    0:
        image: /images/user-guide/reporting/embedding-dashboard/dashboard-component-example-1-pe.png
        title: 'In this example, we will embed the preconfigured <b>Environmental Monitor</b> dashboard into the report.'
    1:
        image: /images/user-guide/reporting/embedding-dashboard/dashboard-component-example-2-pe.png
        title: 'All widgets on this dashboard use the entity alias "<b>Entity from dashboard state</b>" as their data source. This means they will display values from the entity you specify as the data source in the report template.'

dashboard-component-example-2:
    0:
        image: /images/user-guide/reporting/embedding-dashboard/dashboard-component-example-3-pe.png
        title: '- Go to the "<b>Templates</b>" tab on the "<b>Reporting</b>" page.<br>- Open an existing <b>report template</b> or create a new one.<br>- Drag the <b>Dashboard</b> component into the <b>content area</b> of your report.'

dashboard-component-example-3:
    0:
        image: /images/user-guide/reporting/embedding-dashboard/dashboard-component-example-4-pe.png
        title: '<b>Configure the data source</b>:<br>- In the "<b>Datasource</b>" section, select the device whose data should be displayed in the dashboard.<br>- In the "<b>Target dashboard</b>" section, choose the <b>Environmental Monitor</b> dashboard.<br>- <b>Save</b> the component.'

dashboard-component-example-4:
    0:
        image: /images/user-guide/reporting/embedding-dashboard/dashboard-component-example-5-pe.png
        title: '- Update the <b>file name pattern</b> so that exported reports are easy to identify.<br>- <b>Save</b> the template.'

dashboard-component-example-5:
    0:
        image: /images/user-guide/reporting/embedding-dashboard/dashboard-component-example-6-pe.png
        title: 'Click <b>Generate test report</b> to verify the configuration.'

dashboard-component-example-6:
    0:
        image: /images/user-guide/reporting/embedding-dashboard/dashboard-component-example-7-pe.png
        title: 'Your report will now include a snapshot of the Environmental Monitor dashboard with data from the selected device.'

---

{% assign docsPrefix = "pe/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/user-guide/reporting/embedding-dashboards-widgets.md %}