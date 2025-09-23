{% if page.docsPrefix == "pe/edge/" or page.docsPrefix == "edge/" %}
You can now easily install **ThingsBoard Edge** on the **{{deviceName}}**, connect your device, and begin sending data.

To go further, explore the [**ThingsBoard Edge** documentation](/docs/{{page.docsPrefix}}){: target="_blank"}
to learn more about key features, such as creating [dashboards](/docs/{{page.docsPrefix}}user-guide/db-overview/){: target="_blank"} to visualize your telemetry,
or setting up [alarm rules](/docs/{{page.docsPrefix}}user-guide/alarms/){: target="_blank"} to monitor device behavior in real time.

{% else %}
Now you can easily connect your {{deviceName}} and start sending data to **ThingsBoard**.

To go further, explore the [**ThingsBoard** documentation](/docs/{{page.docsPrefix}}){: target="_blank"} 
to learn more about key features, such as creating [dashboards](/docs/{{page.docsPrefix}}user-guide/dashboards/){: target="_blank"} to visualize your telemetry, 
or setting up [alarm rules](/docs/{{page.docsPrefix}}user-guide/alarms/){: target="_blank"} to monitor device behavior in real time.
{% endif %}