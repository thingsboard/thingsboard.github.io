{% assign peDocsPrefix = '' %}
{% if docsPrefix == 'pe/' %}
{% assign platformName = 'ThingsBoard PE' %}
{% assign firstRowItemClasses = 'col-12 col-sm-6 col-lg col-xxl-6 col-4xl' %}
{% assign faqItemClasses = 'col-12 col-sm-6 col-lg col-xxl-6 col-4xl' %}
<p>The ThingsBoard Professional Edition(PE) documentation can help you set up ThingsBoard PE, learn about the platform and get your IoT projects running on ThingsBoard PE.</p>
{% elsif docsPrefix == 'paas/' %}
{% assign peDocsPrefix = docsPrefix %}
{% assign platformName = 'ThingsBoard Cloud' %}
{% assign firstRowItemClasses = 'col-12 col-sm-6 col-lg-3 col-xxl-6 col-4xl-3' %}
{% assign faqItemClasses = 'col col-lg-6 col-xxl col-4xl-6' %}
<p>The ThingsBoard Cloud documentation can help you to start with ThingsBoard Cloud, learn about the platform and get your IoT projects running on ThingsBoard Cloud.</p>
{% endif %}

<div class="doc-features row mt-4">
    <div class="{{firstRowItemClasses}} mb-4">
        <a class="feature-card" href="/docs/{{docsPrefix}}getting-started-guides/what-is-thingsboard/">
            <img class="feature-logo" src="/images/feature-logo/thingsboard-logo.svg"/>
            <div class="feature-title">What is ThingsBoard?</div>
            <div class="feature-text">
                <ul>
                    <li>Features</li>
                    <li>Architecture</li>
                </ul>
            </div>
        </a>
    </div>
    <div class="{{firstRowItemClasses}} mb-4">
        <a class="feature-card" href="/docs/{{docsPrefix}}getting-started-guides/helloworld/">
            <img class="feature-logo" src="/images/feature-logo/getting-started.svg"/>
            <div class="feature-title">Getting started</div>
            <div class="feature-text">
                Learn how to use {{platformName}} platform.
            </div>
        </a>
    </div>
{% if docsPrefix == 'pe/' %}
    <div class="{{firstRowItemClasses}} mb-4">
        <a class="feature-card" href="/docs/user-guide/install/pe/installation-options/">
            <img class="feature-logo" src="/images/feature-logo/install.svg"/>
            <div class="feature-title">Installation</div>
            <div class="feature-text">
                Learn how to install and upgrade platform.
            </div>
        </a>
    </div>
{% endif %}
    <div class="{{faqItemClasses}} mb-4">
        <a class="feature-card" href="/docs/{{docsPrefix}}faq/">
            <img class="feature-logo" src="/images/feature-logo/faq.svg"/>
            <div class="feature-title">FAQ</div>
            <div class="feature-text">
                Get answers to the most common questions.
            </div>
        </a>
    </div>
    <div class="w-100"></div>
    <div class="col-12 col-sm-6 col-lg-3 col-xxl-6 col-4xl-3 mb-4">
        <a class="feature-card" href="https://www.youtube.com/channel/UCDb9fsV-YR4JmnipAMGsVAQ/videos">
            <img class="feature-logo" src="/images/feature-logo/tutorials.svg"/>
            <div class="feature-title">Video tutorials</div>
            <div class="feature-text">
                Watch tutorials about platform features on YouTube.
            </div>
        </a>
    </div>
    <div class="col-12 col-sm-6 col-lg-3 col-xxl-6 col-4xl-3 mb-4">
        <a class="feature-card" href="/docs/{{docsPrefix}}devices-library/">
            <img class="feature-logo" src="/images/feature-logo/guides.svg"/>
            <div class="feature-title">Devices library</div>
            <div class="feature-text">
                Learn how to connect different devices to {{platformName}}.
            </div>
        </a>
    </div>
    <div class="col-12 col-sm-6 col-lg-3 col-xxl-6 col-4xl-3 mb-4">
        <a class="feature-card" href="/docs/{{docsPrefix}}guides/">
            <img class="feature-logo" src="/images/feature-logo/guides.svg"/>
            <div class="feature-title">Guides</div>
            <div class="feature-text">
                Learn main {{platformName}} features.
            </div>
        </a>
    </div>
    <div class="col-12 col-sm-6 col-lg-3 col-xxl-6 col-4xl-3 mb-4">
        <a class="feature-card" href="/docs/{{docsPrefix}}api/">
            <img class="feature-logo" src="/images/feature-logo/api.svg"/>
            <div class="feature-title">API</div>
            <div class="feature-text">
                Learn device connectivity and server-side platform specific API.
            </div>
        </a>
    </div>
</div>

<h2 id="features">Features</h2>

<div class="doc-features row mt-4">
    <div class="col-12 col-sm-6 col-lg-4 col-xxl-6 col-4xl-4 mb-4">
        <a class="feature-card" href="/docs/{{docsPrefix}}guides#AnchorIDDataVisualization">
            <div class="feature-title">Data visualization</div>
            <div class="feature-text">
                Covers data visualization capabilities: Widgets, Dashboards, Dashboard states.
            </div>
        </a>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 col-xxl-6 col-4xl-4 mb-4">
        <a class="feature-card" href="/docs/{{docsPrefix}}user-guide/telemetry/">
            <div class="feature-title">Telemetry</div>
            <div class="feature-text">
                API for collection of time-series data and related use cases.
            </div>
        </a>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 col-xxl-6 col-4xl-4 mb-4">
        <a class="feature-card" href="/docs/{{peDocsPrefix}}user-guide/reporting/">
            <div class="feature-title">Reporting</div>
            <div class="feature-text">
                Generate reports using existing dashboards and distribute them to end-users via email.
            </div>
        </a>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 col-xxl-6 col-4xl-4 mb-4">
        <a class="feature-card" href="/docs/{{docsPrefix}}user-guide/attributes/">
            <div class="feature-title">Attributes</div>
            <div class="feature-text">
                Platform ability to assign custom key-value attributes to your entities (e.g configuration, data processing, visualization parameters).
            </div>
        </a>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 col-xxl-6 col-4xl-4 mb-4">
        <a class="feature-card" href="/docs/{{docsPrefix}}user-guide/rule-engine-2-0/re-getting-started/">
            <div class="feature-title">Rule engine</div>
            <div class="feature-text">
                Covers data processing & actions on incoming telemetry and events.
            </div>
        </a>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 col-xxl-6 col-4xl-4 mb-4">
        <a class="feature-card" href="/docs/{{docsPrefix}}user-guide/entities-and-relations/">
            <div class="feature-title">Entities and relations</div>
            <div class="feature-text">
                Platform ability to model physical world objects (e.g. devices and assets) and relations between them.
            </div>
        </a>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 col-xxl-6 col-4xl-4 mb-4">
        <a class="feature-card" href="/docs/{{docsPrefix}}user-guide/audit-log/">
            <div class="feature-title">Audit log</div>
            <div class="feature-text">
                Tracking of user activity and API calls usage.
            </div>
        </a>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 col-xxl-6 col-4xl-4 mb-4">
        <a class="feature-card" href="/docs/{{docsPrefix}}user-guide/api-limits/">
            <div class="feature-title">API Limits</div>
            <div class="feature-text">
                Controlling API usage, by limiting number of requests from single host during single time unit.
            </div>
        </a>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 col-xxl-6 col-4xl-4 mb-4">
        <a class="feature-card" href="/docs/{{docsPrefix}}user-guide/rpc/">
            <div class="feature-title">RPC</div>
            <div class="feature-text">
                API and widgets to push commands from your apps and dashboards to devices and vice versa.
            </div>
        </a>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 col-xxl-6 col-4xl-4 mb-4">
        <a class="feature-card" href="/docs/{{peDocsPrefix}}user-guide/white-labeling/">
            <div class="feature-title">White-labeling</div>
            <div class="feature-text">
                Configure your company or product logo, color scheme and mail tempates in 2 minutes.
            </div>
        </a>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 col-xxl-6 col-4xl-4 mb-4">
        <a class="feature-card" href="/docs/{{peDocsPrefix}}user-guide/scheduler/">
            <div class="feature-title">Scheduler</div>
            <div class="feature-text">
                Schedule various types of events (i.e. configuration updates, report generation, rpc commands) with flexible configuration options.
            </div>
        </a>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 col-xxl-6 col-4xl-4 mb-4">
        <a class="feature-card" href="/docs/{{docsPrefix}}user-guide/advanced-filters/">
            <div class="feature-title">Advanced filters</div>
            <div class="feature-text">
                Filters over entity fields, attributes and latest telemetry.
            </div>
        </a>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 col-xxl-6 col-4xl-4 mb-4">
        <a class="feature-card" href="/docs/{{peDocsPrefix}}user-guide/groups/">
            <div class="feature-title">Device & asset groups</div>
            <div class="feature-text">
                Configure multiple custom device & asset groups.
            </div>
        </a>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 col-xxl-6 col-4xl-4 mb-4">
        <a class="feature-card" href="/docs/{{peDocsPrefix}}user-guide/csv-xls-data-export/">
            <div class="feature-title">CSV/XLS data export</div>
            <div class="feature-text">
                Export data from widgets to CSV or XLS.
            </div>
        </a>
    </div>
    <div class="col col-lg-4 col-xxl col-4xl-4 mb-4">
        <a class="feature-card" href="/docs/{{peDocsPrefix}}user-guide/file-storage/">
            <div class="feature-title">File storage</div>
            <div class="feature-text">
                Ability to store binary content (files) in the DB.
            </div>
        </a>
    </div>
    <div class="w-100"></div>
    <div class="col col-lg-8 col-xxl col-4xl-8 mb-4">
        <div class="feature-card">
            <div class="feature-title"><a href="/docs/{{peDocsPrefix}}user-guide/integrations/">Platform Integrations</a></div>
            <div class="feature-text">
                Connect devices using connectivity solutions like NB IoT, LoRaWAN and SigFox, specific payload formats or various IoT Platforms.
            </div>
            <div class="row mt-4">
                <div class="col-12 col-sm-6 mb-4">
                    <a class="feature-card inner" href="/docs/{{peDocsPrefix}}user-guide/integrations/http/">
                        <div class="feature-title"><img class="integration-logo" src="/images/feature-logo/integration/http.svg"/><span>HTTP</span></div>
                    </a>
                </div>
                <div class="col-12 col-sm-6 mb-4">
                    <a class="feature-card inner" href="/docs/{{peDocsPrefix}}user-guide/integrations/opc-ua/">
                        <div class="feature-title"><img class="integration-logo" src="/images/feature-logo/integration/opc-ua.svg"/><span>OPC-UA</span></div>
                    </a>
                </div>
                <div class="col-12 col-sm-6 mb-4">
                    <a class="feature-card inner" href="/docs/{{peDocsPrefix}}user-guide/integrations/mqtt/">
                        <div class="feature-title"><img class="integration-logo" src="/images/feature-logo/integration/mqtt.svg"/><span>MQTT</span></div>
                    </a>
                </div>
                <div class="col-12 col-sm-6 mb-4">
                    <a class="feature-card inner" href="/docs/{{peDocsPrefix}}user-guide/integrations/sigfox/">
                        <div class="feature-title"><img class="integration-logo" src="/images/feature-logo/integration/sigfox.svg"/><span>SigFox</span></div>
                    </a>
                </div>
                <div class="col-12 col-sm-6 mb-4">
                    <a class="feature-card inner" href="/docs/{{peDocsPrefix}}user-guide/integrations/tcp/">
                        <div class="feature-title"><img class="integration-logo" src="/images/feature-logo/integration/tcp.svg"/><span>TCP</span></div>
                    </a>
                </div>
                <div class="col-12 col-sm-6 mb-4">
                    <a class="feature-card inner" href="/docs/{{peDocsPrefix}}user-guide/integrations/azure-event-hub/">
                        <div class="feature-title"><img class="integration-logo" src="/images/feature-logo/integration/azure-event-hub.svg"/><span>Azure Event Hub</span></div>
                    </a>
                </div>
                <div class="col-12 col-sm-6 mb-4">
                    <a class="feature-card inner" href="/docs/{{peDocsPrefix}}user-guide/integrations/azure-iot-hub/">
                        <div class="feature-title"><img class="integration-logo" src="/images/feature-logo/integration/azure-iot-hub.svg"/><span>Azure IoT Hub</span></div>
                    </a>
                </div>
                <div class="col-12 col-sm-6 mb-4">
                    <a class="feature-card inner" href="/docs/{{peDocsPrefix}}user-guide/integrations/coap/">
                        <div class="feature-title"><img class="integration-logo" src="/images/feature-logo/integration/coap.svg"/><span>CoAP</span></div>
                    </a>
                </div>
                <div class="col-12 col-sm-6 mb-4">
                    <a class="feature-card inner" href="/docs/{{peDocsPrefix}}user-guide/integrations/thingpark/">
                        <div class="feature-title"><img class="integration-logo" src="/images/feature-logo/integration/thingpark.svg"/><span>ThingPark</span></div>
                    </a>
                </div>
                <div class="col-12 col-sm-6 mb-4">
                    <a class="feature-card inner" href="/docs/{{peDocsPrefix}}user-guide/integrations/ttn/">
                        <div class="feature-title"><img class="integration-logo" src="/images/feature-logo/integration/ttn.svg"/><span>TheThingsStackCommunity</span></div>
                    </a>
                </div>
                <div class="col-12 col-sm-6 mb-4">
                    <a class="feature-card inner" href="/docs/{{peDocsPrefix}}user-guide/integrations/tti/">
                        <div class="feature-title"><img class="integration-logo" src="/images/feature-logo/integration/things-stack-industries.svg"/><span>TheThingsStackIndustries</span></div>
                    </a>
                </div>
                <div class="col-12 col-sm-6 mb-4">
                    <a class="feature-card inner" href="/docs/{{peDocsPrefix}}user-guide/integrations/chirpstack/">
                        <div class="feature-title"><img class="integration-logo" src="/images/feature-logo/integration/chirpstack.svg"/><span>ChirpStack</span></div>
                    </a>
                </div>
                <div class="col-12 col-sm-6 mb-4">
                    <a class="feature-card inner" href="/docs/{{peDocsPrefix}}user-guide/integrations/">
                        <div class="feature-title"><img class="integration-logo" src="/images/feature-logo/integration/apache-pulsar.svg"/><span>Apache Pulsar</span></div>
                    </a>
                </div>
                <div class="col-12 col-sm-6 mb-4">
                    <a class="feature-card inner" href="/docs/{{peDocsPrefix}}user-guide/integrations/aws-iot/">
                        <div class="feature-title"><img class="integration-logo" src="/images/feature-logo/integration/aws-iot.svg"/><span>AWS IoT</span></div>
                    </a>
                </div>
                <div class="col-12 col-sm-6 mb-4">
                    <a class="feature-card inner" href="/docs/{{peDocsPrefix}}user-guide/integrations/aws-kinesis/">
                        <div class="feature-title"><img class="integration-logo" src="/images/feature-logo/integration/aws-kinesis.svg"/><span>AWS Kinesis</span></div>
                    </a>
                </div>
                <div class="col-12 col-sm-6 mb-4">
                    <a class="feature-card inner" href="/docs/{{peDocsPrefix}}user-guide/integrations/">
                        <div class="feature-title"><img class="integration-logo" src="/images/feature-logo/integration/aws-sqs.svg"/><span>AWS SQS</span></div>
                    </a>
                </div>
                <div class="col-12 col-sm-6 mb-4">
                    <a class="feature-card inner" href="/docs/{{peDocsPrefix}}user-guide/integrations/">
                        <div class="feature-title"><img class="integration-logo" src="/images/feature-logo/integration/custom.svg"/><span>Custom</span></div>
                    </a>
                </div>
                <div class="col-12 col-sm-6 mb-4">
                    <a class="feature-card inner" href="/docs/{{peDocsPrefix}}user-guide/integrations/ibm-watson-iot/">
                        <div class="feature-title"><img class="integration-logo" src="/images/feature-logo/integration/ibm-watson-iot.svg"/><span>IBM Watson IoT</span></div>
                    </a>
                </div>
                <div class="col-12 col-sm-6 mb-4">
                    <a class="feature-card inner" href="/docs/{{peDocsPrefix}}user-guide/integrations/kafka/">
                        <div class="feature-title"><img class="integration-logo" src="/images/feature-logo/integration/kafka.svg"/><span>Kafka</span></div>
                    </a>
                </div>
                <div class="col-12 col-sm-6 mb-4">
                    <a class="feature-card inner" href="/docs/{{peDocsPrefix}}user-guide/integrations/loriot/">
                        <div class="feature-title"><img class="integration-logo" src="/images/feature-logo/integration/loriot.svg"/><span>Loriot</span></div>
                    </a>
                </div>
                <div class="col-12 col-sm-6 mb-4">
                    <a class="feature-card inner" href="/docs/{{peDocsPrefix}}user-guide/integrations/ocean-connect/">
                        <div class="feature-title"><img class="integration-logo" src="/images/feature-logo/integration/ocean-connect.svg"/><span>Ocean Connect</span></div>
                    </a>
                </div>
                <div class="col-12 col-sm-6 mb-4">
                    <a class="feature-card inner" href="/docs/{{peDocsPrefix}}user-guide/integrations/">
                        <div class="feature-title"><img class="integration-logo" src="/images/feature-logo/integration/pub-sub.svg"/><span>Pub/Sub</span></div>
                    </a>
                </div>
                <div class="col-12 col-sm-6 mb-4">
                    <a class="feature-card inner" href="/docs/{{peDocsPrefix}}user-guide/integrations/">
                        <div class="feature-title"><img class="integration-logo" src="/images/feature-logo/integration/rabbitmq.svg"/><span>RabbitMQ</span></div>
                    </a>
                </div>
                <div class="col-12 col-sm-6 mb-4">
                    <a class="feature-card inner" href="/docs/{{peDocsPrefix}}user-guide/integrations/thingpark/">
                        <div class="feature-title"><img class="integration-logo" src="/images/feature-logo/integration/thingpark.svg"/><span>ThingPark</span></div>
                    </a>
                </div>
                <div class="col-12 col-sm-6 mb-4">
                    <a class="feature-card inner" href="/docs/{{peDocsPrefix}}user-guide/integrations/">
                        <div class="feature-title"><img class="integration-logo" src="/images/feature-logo/integration/thingpark-enterprise.svg"/><span>ThingParkEnterprise</span></div>
                    </a>
                </div>
                <div class="col-12 col-sm-6 mb-4">
                    <a class="feature-card inner" href="/docs/{{peDocsPrefix}}user-guide/integrations/udp/">
                        <div class="feature-title"><img class="integration-logo" src="/images/feature-logo/integration/udp.svg"/><span>UDP</span></div>
                    </a>
                </div>
                <div class="col-12 col-sm-6 mb-4">
                    <a class="feature-card inner" href="/docs/{{peDocsPrefix}}user-guide/integrations/">
                        <div class="feature-title"><img class="integration-logo" src="/images/feature-logo/integration/iotcreators.com.svg"/><span>iotcreators.com (T-Mobile – IoT CDP)</span></div>
                    </a>
                </div>
                <div class="col-12 col-sm-6 mb-4">
                    <a class="feature-card inner" href="/docs/{{peDocsPrefix}}user-guide/integrations/tuya/">
                        <div class="feature-title"><img class="integration-logo" src="/images/feature-logo/integration/tuya.svg"/><span>Tuya</span></div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
