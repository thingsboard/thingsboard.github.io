---
layout: docwithnav-pe
assignees:
- stitenko
title: Embedding charts in a report
description: How to embed charts in a report

embedding-chart-1:
    0:
        image: /images/user-guide/reporting/embedding-dashboard/embedding-dashboard-1-pe.png
        title: 'Go to the "<b>Templates</b>" tab on the "<b>Reporting</b>" page. Either select an existing <b>report template</b> or create a new one.'
    1:
        image: /images/user-guide/reporting/embedding-charts/embedding-chart-to-report-2-pe.png
        title: 'In the components library, locate the "<b>Charts</b>" components, choose the desired chart, and drag it into the <b>content area</b> of your report.'
    2:
        image: /images/user-guide/reporting/embedding-charts/embedding-chart-to-report-3-pe.png
        title: 'Configure the <b>chart&#39;s data source:</b><br>- In the "<b>Datasource</b>" section, specify the device whose data should be displayed on the chart, or select an entity alias. If the alias includes multiple entities, the chart will show separate lines for each data key of each entity.<br>- In the "<b>Series</b>" section, specify the key(s) to fetch data.'
    3:
        image: /images/user-guide/reporting/embedding-charts/embedding-chart-to-report-4-pe.png
        title: '- Adjust other parameters such as Y axes, Thresholds, X axis, Legend, etc.<br>- Save the component.'
    4:
        image: /images/user-guide/reporting/embedding-charts/embedding-chart-to-report-5-pe.png
        title: ''

embedding-chart-2:
    0:
        image: /images/user-guide/reporting/embedding-charts/embedding-chart-to-report-6-pe.png
        title: 'To verify that your template is configured correctly and the data is displayed properly, click the <b>Create test report</b> button (located next to <b>Save</b>).'
    1:
        image: /images/user-guide/reporting/embedding-charts/embedding-chart-to-report-7-pe.png
        title: 'The system will generate a test report based on your configuration.'

---

{% assign docsPrefix = "pe/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/user-guide/reporting/embedding-charts.md %}