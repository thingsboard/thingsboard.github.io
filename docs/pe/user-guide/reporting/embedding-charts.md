---
layout: docwithnav-pe
assignees:
- stitenko
title: Embedding charts in a report
description: How to embed charts in a report
redirect_from: "/docs/user-guide/reporting/embedding-charts/"

chart-component-example-1:
    0:
        image: /images/user-guide/reporting/embedding-charts/chart-component-example-1-pe.png
        title: '- Go to the "<b>Templates</b>" tab on the "<b>Reporting</b>" page. Either select an existing <b>report template</b> or create a new one.<br>- Drag the <b>Line chart</b> component into the content area of your report.'

chart-component-example-2:
    0:
        image: /images/user-guide/reporting/embedding-charts/chart-component-example-2-pe.png
        title: 'Configure the <b>line chart</b>:<br>- Set the time interval: last 24 hours, aggregated by 1 hour.<br>- Specify chart title.<br>- In the "<b>Datasource</b>" section, create an entity alias that references three devices.'
    1:
        image: /images/user-guide/reporting/embedding-charts/chart-component-example-3-pe.png
        title: '- In the "<b>Series</b>" section, specify the telemetry key "temperature", with label <b>${entityName} temperature</b>.<br>- Configure Y axis.'
    2:
        image: /images/user-guide/reporting/embedding-charts/chart-component-example-4-pe.png
        title: '- Set the legend position to <b>Bottom</b>.<br>- Display <b>Min</b>, <b>Max</b>, and <b>Average</b> values.<br>- <b>Save</b> the component.'

chart-component-example-3:
    0:
        image: /images/user-guide/reporting/embedding-charts/chart-component-example-5-pe.png
        title: '- Update the <b>file name pattern</b> so that exported reports are easy to identify.<br>- <b>Save</b> the template.'

chart-component-example-4:
    0:
        image: /images/user-guide/reporting/embedding-charts/chart-component-example-6-pe.png
        title: 'Click <b>Generate test report</b> to verify the configuration.'

chart-component-example-5:
    0:
        image: /images/user-guide/reporting/embedding-charts/chart-component-example-7-pe.png
        title: 'The generated report will include a line chart showing temperature trends from all three devices, allowing you to compare them over time.'

---

{% assign docsPrefix = "pe/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/user-guide/reporting/embedding-charts.md %}