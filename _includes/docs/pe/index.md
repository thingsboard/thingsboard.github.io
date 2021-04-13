{% assign peDocsPrefix == '' %}
{% if docsPrefix == 'pe/' %}
<p>The ThingsBoard Professional Edition(PE) documentation can help you set up ThingsBoard PE, learn about the platform and get your IoT projects running on ThingsBoard PE.</p>
{% elsif docsPrefix == 'paas/' %}
{% assign peDocsPrefix = docsPrefix %}
<p>The ThingsBoard Cloud documentation can help you to start with ThingsBoard Cloud, learn about the platform and get your IoT projects running on ThingsBoard Cloud.</p>
{% endif %}

<a style="margin: 10px 10px 10px 0;" href="/docs/{{docsPrefix}}getting-started-guides/what-is-thingsboard/" class="button">ThingsBoard Overview</a>
<a style="margin: 10px;" href="/docs/{{docsPrefix}}getting-started-guides/helloworld/" class="button">Getting started</a>
<a style="margin: 10px;" href="/docs/{{docsPrefix}}guides/" class="button">&nbsp;&nbsp;&nbsp;Guides&nbsp;&nbsp;&nbsp;</a>

{% if docsPrefix == 'pe/' %}
<h2 id="features">Professional Edition Features</h2>
{% elsif docsPrefix == 'paas/' %}
<h2 id="features">ThingsBoard Cloud Features</h2>
{% endif %}

<ul>
<li><b><a href="/docs/{{docsPrefix}}user-guide/attributes/">Attributes</a></b> - platform ability to assign custom key-value attributes to your entities (e.g configuration, data processing, visualization parameters).</li>
<li><b><a href="/docs/{{docsPrefix}}user-guide/telemetry/">Telemetry</a></b> - API for collection of time-series data and related use cases.</li>
<li><b><a href="/docs/{{docsPrefix}}user-guide/rpc/">Entities and relations</a></b> - platform ability to model physical world objects (e.g. devices and assets) and relations between them.</li>
<li><b><a href="/docs/{{docsPrefix}}guides#AnchorIDDataVisualization">Data visualization</a></b> - covers data visualization capabilities: Widgets, Dashboards, Dashboard states.</li>
<li><b><a href="/docs/{{docsPrefix}}user-guide/rule-engine-2-0/re-getting-started/">Rule engine</a></b> - covers data processing & actions on incoming telemetry and events.</li>
<li><b><a href="/docs/{{docsPrefix}}user-guide/rpc/">RPC</a></b> - API and widgets to push commands from your apps and dashboards to devices and vice versa.</li>
<li><b><a href="/docs/{{docsPrefix}}user-guide/audit-log/">Audit log</a></b> - tracking of user activity and API calls usage.</li>
<li><b><a href="/docs/{{docsPrefix}}user-guide/api-limits/">API Limits</a></b> - controlling API usage, by limiting number of requests from single host during single time unit.</li>
<li><b><a href="/docs/{{docsPrefix}}user-guide/advanced-filters/">Advanced filters</a></b> - filters over entity fields, attributes and latest telemetry.</li>
<li><b><a href="/docs/{{peDocsPrefix}}user-guide/white-labeling/">White-labeling</a></b> - configure your company or product logo, color scheme and mail tempates in 2 minutes.</li>
<li><b><a href="/docs/{{peDocsPrefix}}user-guide/integrations/">Platform Integrations</a></b> - connect devices using connectivity solutions like NB IoT, LoRaWAN and SigFox, specific payload formats or various IoT Platforms</li>
    <ul>
        <li><b><a href="/docs/{{peDocsPrefix}}user-guide/integrations/http/">HTTP</a></b></li>
        <li><b><a href="/docs/{{peDocsPrefix}}user-guide/integrations/mqtt/">MQTT</a></b></li>
        <li><b><a href="/docs/{{peDocsPrefix}}user-guide/integrations/opc-ua/">OPC-UA</a></b></li>
        <li><b><a href="/docs/{{peDocsPrefix}}user-guide/integrations/sigfox/">SigFox</a></b></li>
        <li><b><a href="/docs/{{peDocsPrefix}}user-guide/integrations/thingpark/">ThingPark</a></b></li>
        <li><b><a href="/docs/{{peDocsPrefix}}user-guide/integrations/ttn/">TheThingsNetwork</a></b></li>
        <li><b><a href="/docs/{{peDocsPrefix}}user-guide/integrations/azure-event-hub/">Azure Event Hub</a></b></li>
        <li><b><a href="/docs/{{peDocsPrefix}}user-guide/integrations/azure-iot-hub/">Azure IoT Hub</a></b></li>
        <li><b><a href="/docs/{{peDocsPrefix}}user-guide/integrations/ibm-watson-iot/">IBM Watson IoT</a></b></li>
        <li><b><a href="/docs/{{peDocsPrefix}}user-guide/integrations/aws-iot/">AWS IoT</a></b></li>
        <li><b><a href="/docs/{{peDocsPrefix}}user-guide/integrations/aws-kinesis/">AWS Kinesis</a></b></li>
    </ul>
<li><b><a href="/docs/{{peDocsPrefix}}user-guide/groups/">Device & asset groups</a></b> - configure multiple custom device & asset groups.</li>
<li><b><a href="/docs/{{peDocsPrefix}}user-guide/scheduler/">Scheduler</a></b> - schedule various types of events (i.e. configuration updates, report generation, rpc commands) with flexible configuration options.</li>
<li><b><a href="/docs/{{peDocsPrefix}}user-guide/reporting/">Reporting</a></b> - generate reports using existing dashboards and distribute them to end-users via email.</li>
<li><b><a href="/docs/{{peDocsPrefix}}user-guide/csv-xls-data-export/">CSV/XLS data export</a></b> - export data from widgets to CSV or XLS.</li>
<li><b><a href="/docs/{{peDocsPrefix}}user-guide/file-storage/">File Storage</a></b> - ability to store binary content (files) in the DB.</li>
</ul>

<h2>Video Tutorials</h2>

<p>The ThingsBoard Youtube <b><a href="https://www.youtube.com/channel/UCDb9fsV-YR4JmnipAMGsVAQ/videos">channel</a></b> contains useful video tutorials that cover various platform features.</p>
