<style>
.edge-faq-wrapper { padding: 20px 15px 80px; max-width: 1200px; margin: 0 auto; }
.edge-faq-sections { display: flex; gap: 40px; }
@media (max-width: 1200px) { .edge-faq-sections { flex-direction: column; } }
.edge-faq-tabs { display: flex; flex-direction: column; align-items: flex-start; padding: 8px; width: fit-content; margin-bottom: 24px; }
@media (max-width: 690px) { .edge-faq-tabs { width: 100%; } }
.edge-faq-tab { width: 100%; font-size: 24px; font-weight: 500; line-height: 36px; padding: 24px 32px; border: 1.5px solid transparent; border-radius: 24px; cursor: pointer; color: #757575; margin: 0; }
.edge-faq-tab:hover { color: #757575; }
.edge-faq-tab.active { color: #000000DE; border-bottom: 1.5px solid #E6F0FC; background: #F4F8FE; }
.edge-faq-answers { flex: 1.5; }
.edge-faq-category { display: none; }
.edge-faq-category.active { display: block; }
.edge-faq-question { border-bottom: 1.5px solid rgba(62,154,248,0.12); margin-bottom: 7px; }
.edge-faq-question-title { 
    font-size: 18px !important; 
    font-weight: 500 !important; 
    line-height: 30px !important; 
    color: #212121 !important; 
    padding: 22px 37px 22px 7px !important; 
    cursor: pointer !important; 
    position: relative !important; 
    margin: 0 !important;
    display: block !important;
}
.edge-faq-question-title:hover { color: rgba(33, 33, 33, 0.78) !important; }
.edge-faq-question-title:after { 
    font-family: "Font Awesome 5 Free" !important; 
    font-weight: 900 !important; 
    color: rgba(0,0,0,0.38) !important; 
    content: "\f078" !important; 
    position: absolute !important; 
    right: 8px !important; 
    top: 22px !important; 
    transition: transform 0.3s !important; 
}
.edge-faq-question.open .edge-faq-question-title:after { transform: rotate(180deg) !important; }
.edge-faq-answer { 
    display: none; 
    padding: 5px 50px 25px 10px; 
    margin: 0 10px 10px; 
    font-size: 14px; 
    line-height: 24px; 
}
.edge-faq-question.open .edge-faq-answer { display: block !important; }
.edge-faq-answer p, .edge-faq-answer li { font-size: 14px; color: #3D3D3D; line-height: 24px; }
.edge-faq-answer a { color: #2A7DEC; text-decoration: none; }
.edge-faq-answer a:hover { text-decoration: underline; }
.edge-faq-answer ul { margin: 20px 0; padding-left: 30px; list-style: disc; }
.edge-faq-answer li { margin-bottom: .75em; }
</style>

<script>
function toggleEdgeFaq(element) {
    var question = element.closest('.edge-faq-question');
    question.classList.toggle('open');
}

function switchEdgeFaqTab(tabId) {
    var tabs = document.querySelectorAll('.edge-faq-tab');
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });
    
    var categories = document.querySelectorAll('.edge-faq-category');
    categories.forEach(function(cat) {
        cat.classList.remove('active');
    });
    
    event.target.classList.add('active');
    
    var category = document.getElementById('edge-faq-cat-' + tabId);
    if (category) category.classList.add('active');
}
</script>

<div class="edge-faq-wrapper">
    <div class="edge-faq-sections">
        <div class="edge-faq-tabs">
            <div class="edge-faq-tab active" onclick="switchEdgeFaqTab('general')">General Questions</div>
            <div class="edge-faq-tab" onclick="switchEdgeFaqTab('comparison')">Community vs. Professional Edition</div>
            <div class="edge-faq-tab" onclick="switchEdgeFaqTab('features')">Features & Capabilities</div>
            <div class="edge-faq-tab" onclick="switchEdgeFaqTab('installation')">Installation & Setup</div>
            <div class="edge-faq-tab" onclick="switchEdgeFaqTab('support')">Support</div>
        </div>
        <div class="edge-faq-answers">
            <div id="edge-faq-cat-general" class="edge-faq-category active">
                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">What is ThingsBoard Edge {{edgeName}}?</div>
                    <div class="edge-faq-answer">
                        {% if docsPrefix == "pe/edge/" %}
                        <p><b>ThingsBoard Edge Professional Edition (PE)</b> is the commercial tier of our edge computing solution. While the Community Edition provides core edge functionality, PE adds enterprise features needed for production deployments at scale.</p>
                        {% else %}
                        <p><b>ThingsBoard Edge Community Edition (CE)</b> is a free, open-source platform designed specifically for edge computing scenarios. It provides essential capabilities for managing and analyzing IoT data at the edge, while staying seamlessly synchronized with the ThingsBoard Server (Cloud or On-premise).</p>
                        {% endif %}
                        <p><b>New to edge computing?</b> Edge computing means processing data where it's generated rather than sending everything to the cloud.</p> 
                        <p>See <a href="/docs/{{docsPrefix}}getting-started-guides/what-is-edge/" target="_blank">What is Edge?</a>  for a detailed introduction, or jump to our <a href="/docs/{{docsPrefix}}getting-started/" target="_blank">Getting Started</a> to begin working with ThingsBoard Edge.</p>
                    </div>
                </div>
                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">I can deploy Server on-site. Why should I deploy Edge instead?</div>
                    <div class="edge-faq-answer">
                        <p>If you only have <b>one site</b>, deploying ThingsBoard Server on-premises may be enough.</p>
                        <p>Use ThingsBoard Edge when you <b>have multiple or remote locations</b> that need local processing, dashboards, and automation, but you don’t want a full Server at each site.</p>
                        <p><b>Server</b> stays your <b>central hub</b>, while <b>Edge</b> runs on lightweight hardware at each site and <b>keeps working offline</b>, then syncs data and configuration back to Server.</p>
                    </div>
                </div>
                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">How do I get ThingsBoard Edge {{edgeName}}?</div>
                    <div class="edge-faq-answer">
                        {% if docsPrefix == "pe/edge/" %}
                        <p>Edge {{edgeName}} is an <b>add-on to your ThingsBoard PE subscription</b>. Your plan includes a base number of Edge instances, and you can purchase additional instances as needed.</p>
                        <p>See the <a href="/pricing/" target="_blank">Pricing Page</a> for details on what's included with each plan or contact your System Administrator.</p>
                        {% else %}
                        <p>Edge {{edgeName}} is <b>open-source</b> and <b>free to download</b>. Install from our <a href="/docs/user-guide/install/{{docsPrefix}}installation-options/" target="_blank">documentation</a> or access source code on <a href="https://github.com/thingsboard/thingsboard-edge" target="_blank">GitHub</a></p>
                        <p>You'll need a ThingsBoard Server instance to connect Edge to. See our <a href="/docs/{{docsPrefix}}getting-started/" target="_blank">Getting Started</a> guide for complete setup instructions.</p> 
                        {% endif %}
                    </div>
                </div>
                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">What happens if my internet connection drops?</div>
                    <div class="edge-faq-answer">
                        <p>Edge keeps running. <b>It processes data, triggers alarms, and updates dashboards locally — no cloud required</b>. When connectivity returns, Edge automatically syncs everything with your ThingsBoard Server. No data loss, no manual intervention.</p>
                    </div>
                </div>
                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">Can Edge handle my device volume?</div>
                    <div class="edge-faq-answer">
                        <p>We recommend <b>up to 1,000 devices</b> per Edge instance based on typical edge hardware and connectivity constraints. You <b>can exceed</b> this number; performance depends on your specific hardware and network conditions.</p>
                        <p>If you need more capacity, you can deploy multiple Edge instances. Alternatively, if you are using <b>version 4.0 or later</b>, you can <a href="/docs/{{docsPrefix}}config/edge-cluster-setup/" target="_blank">cluster Edge nodes</a> for high availability.</p>
                    </div>
                </div>
                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">I have devices that use proprietary protocols. Can Edge connect to them?</div>
                    <div class="edge-faq-answer">
                        <p>Yes. Edge natively supports <a href="/docs/{{docsPrefix}}reference/mqtt-api/">MQTT</a>, <a href="/docs/{{docsPrefix}}reference/coap-api/">CoAP</a>, <a href="/docs/{{docsPrefix}}reference/http-api/">HTTP</a>, <a href="/docs/{{docsPrefix}}reference/snmp-api/">SNMP</a>, and <a href="/docs/{{docsPrefix}}reference/lwm2m-api/">LwM2M</a>. For other protocols, use: </p>
                        <ul>
                        <li>The <a href="/docs/iot-gateway/what-is-iot-gateway/" target="_blank">ThingsBoard IoT Gateway</a> to bridge legacy devices. Gateway supports <a href="/docs/iot-gateway/config/modbus/" target="_blank">Modbus</a>, <a href="/docs/iot-gateway/config/bacnet/" target="_blank">BACnet</a>, <a href="/docs/iot-gateway/config/opc-ua/" target="_blank">OPC-UA</a>, and more, and is available at no extra cost.</li>
                        {% if docsPrefix == "pe/edge/" %}
                        <li>The <a href="/docs/{{docsPrefix}}user-guide/integrations/" target="_blank">Platform Integrations</a> to connect via <a href="/docs/{{docsPrefix}}user-guide/integrations/opc-ua/" target="_blank">OPC-UA</a>, <a href="/docs/{{docsPrefix}}user-guide/integrations/chirpstack/" target="_blank">ChirpStack</a>, and 30+ other systems using <a href="/docs/user-guide/integrations/#converters-library" target="_blank">convertor library</a>.</li>
                        {% endif %}
                        </ul>
                    </div>
                </div>
                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">Can I customize and modify the Edge {{edgeName}}?</div>
                    <div class="edge-faq-answer">
                        {% if docsPrefix == "pe/edge/" %}
                        <p>No, the <b>ThingsBoard {{edgeName}}</b> is a commercial project and can not be modified.</p>
                        {% else %}
                        <p>Yes, the source code is available on GitHub, and you can fork and modify it to suit your needs. By the way, please consider starring <a href="https://github.com/thingsboard/thingsboard-edge" target="_blank">our repository</a>.</p> 
                        {% endif %}
                    </div>
                </div>
            </div>
            <div id="edge-faq-cat-comparison" class="edge-faq-category">
                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">What's the difference between Edge Community Edition and Professional Edition?</div>
                    <div class="edge-faq-answer">
                        <p>Both editions provide device management, rule engine, dashboards, and standard protocols (MQTT, CoAP, HTTP, etc.).</p>
                        <p><b>Community Edition</b> is free and open-source.</p>
                        <p><b>Professional Edition</b> is commercial and adds:</p>
                        <ul>
                        <li><b>White-labeling:</b> Deploy under your company's brand</li>
                        <li><b>Solution templates:</b> Pre-built IoT solutions ready to install with dashboards, rule chains, and sample devices</li>
                        <li><b>Converter library:</b> Ready-to-use decoder functions for 100+ devices across 6 LoRaWAN networks</li>
                        <li><b>Scheduler:</b> Automate report generation, attribute updates, and device commands</li>
                        </ul>
                    </div>
                </div>
                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">Do I need Edge PE if I'm building a commercial product?</div>
                    <div class="edge-faq-answer">
                        <p>Not necessarily. <b>Community Edition is production-ready</b> and supports commercial deployments. You can build, sell, and deploy commercial products on CE.</p>
                        <p>The choice between CE and PE depends on your specific requirements.</p>
                        <p>Consider PE if you need to:</p>
                        <ul>
                        <li>Deliver a branded product to customers</li>
                        <li>Connect legacy equipment via OPC-UA or other industrial protocols</li>
                        <li>Deploy pre-built solutions (irrigation, water metering, waste management, etc.)</li>
                        <li>Manage multiple end-customers with hierarchical access control</li>
                        </ul>
                    </div>
                </div>
                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">Can I use Edge Professional Edition with Community Edition Server and vise versa?</div>
                    <div class="edge-faq-answer">
                        <p>No. Edge <b>edition must match</b> your ThingsBoard Server edition:</p>
                        <ul>
                        <li>Edge CE connects to ThingsBoard Server CE</li>
                        <li>Edge PE connects to ThingsBoard Server PE</li>
                        </ul>
                        <p>PE-specific features (white-labeling, solution templates, integrations, etc.) require both Edge PE and Server PE to function.</p>
                    </div>
                </div>
                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">How many Edge instances can connect to one Server?</div>
                    <div class="edge-faq-answer">
                        <ul>
                        <li><b>Edge CE:</b> The number of Edge instances is unlimited.</li>
                        <li><b>Edge PE:</b> The number of included Edge instances depends on your ThingsBoard PE plan. You can add additional Edge instances with extra cost per month. Check your plan details or contact your administrator to see how many Edge instances are included.</li>
                        </ul>
                    </div>
                </div>
                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">How do I start a free trial?</div>
                    <div class="edge-faq-answer">
                        <p>Community Edition is free and open-source - no trial needed. <a href="/docs/user-guide/install/{{docsPrefix}}installation-options/" target="_blank">Download</a> and use it indefinitely at no cost.</p>
                        <p>For Professional Edition, start a 30-day trial of the Maker plan with Edge Computing add-on enabled. You'll have full access to Edge PE features.</p>
                    </div>
                </div>
            </div>

            <div id="edge-faq-cat-features" class="edge-faq-category">
                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">What core features are available in the {{edgeName}}?</div>
                    <div class="edge-faq-answer">
                        {% if docsPrefix == "pe/edge/" %}
                        <p>The <b>{{edgeName}}</b> includes all the features of the <b>Community Edition</b> plus additional functionality:</p><ul>
                        <li>White Labeling</li>
                        <li>Scheduler</li>
                        <li>Integrations</li>
                        <li>Custom menu</li>
                        <li>and more</li></ul>
                        {% else %}
                        <p>The <b>{{edgeName}}</b> includes features for:</p>
                        <ul>
                        <li>Device management and telemetry</li>
                        <li>Rule engine for data processing</li>
                        <li>Dashboard creation</li>
                        <li>Support for MQTT, CoAP and HTTP protocols</li>
                        <li>Open-source extensibility through plugins</li>
                        </ul>
                        {% endif %}
                    </div>
                </div>

            <div id="edge-faq-cat-installation" class="edge-faq-category">
               {% if docsPrefix == "edge/" %}
                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">How do I get ThingsBoard Edge {{edgeName}}?</div>
                    <div class="edge-faq-answer">                        
                        <p>In order to use Edge Professional Edition, you'll need to <b>upgrade to ThingsBoard Professional Edition</b> first. Then, add the Edge Computing add-on to your subscription. Your plan includes a base number of Edge instances, and you can purchase additional instances as needed.</p>
                        <p>See the <a href="/pricing/" target="_blank">Pricing Page</a> for details on what's included with each plan or contact your System Administrator.</p>
                    </div>
                </div>
                {% endif %}

                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">Does the ThingsBoard Edge support multi-tenancy?</div>
                    <div class="edge-faq-answer">
                        <p>No, ThingsBoard Edge {{edgeName}} <b>does not support</b> multi-tenancy.</p>
                        {% if docsPrefix == 'pe/edge/' %}
                        <p>{{edgeName}} supports a <b>single tenant</b> and <b>multiple customers with hierarchy</b>.</p>
                        <p>For instance, if an Edge owner is a sub-customer, all the parent entities of that sub-customer up to the tenant level will be provisioned to the Edge.
                        This means customers from the same hierarchy path can access the same Edge instance.</p>
                        <p>However, you <b>can not share</b> an instance between multiple tenants, and devices from multiple tenants <b>can not connect</b> to a single Edge instance.
                        If you need multi-tenancy, provision multiple Edge instances for each tenant.</p>
                        {% else %}
                        <p>{{edgeName}} is designed for a <b>single tenant</b> and a <b>single customer</b>. This means that you <b>can not share</b> a single Edge instance between multiple tenants or customers, as well as devices from different tenants <b>can not be connected</b> to the same Edge instance.</p>
                        <p>If you need multi-tenancy, provision multiple Edge instances for each tenant.</p>
                        {% endif %}
                    </div>
                </div>

                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">How many devices can ThingsBoard Edge support?</div>
                    <div class="edge-faq-answer">
                        {% if docsPrefix == 'pe/edge/' %}
                        <p>The number of connected devices depends on your <a href="https://thingsboard.io/pricing/?section=thingsboard-edge" target="_blank">subscription plan</a>.</p>
                        <p>Some plans offer 'Unlimited Devices and Assets, thus there are no soft limits on creating devices and assets on the edge side.</p>
                        {% else %}
                        <p><b>ThingsBoard Edge</b> doesn’t impose a fixed limit on the number of devices you can connect.</p>
                        <p>In practice, the number of devices you can support depends largely on your hardware resources, system configuration, and the specific use case. 
                        Since <b>ThingsBoard Edge</b> is designed with remote locations with potentially low bandwidth connectivity in mind, we do not recommend connecting more than <b>1000</b> devices to a single edge.</p>
                        {% endif %}
                    </div>
                </div>

                {% if docsPrefix == "edge/" %}
                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">Does the Community Edition support white-labeling?</div>
                    <div class="edge-faq-answer">
                        <p>No, white-labeling is available only in the <b>Professional Edition</b>.</p>
                    </div>
                </div>
                {% endif %}

                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">Can I integrate third-party systems with ThingsBoard Edge?</div>
                    <div class="edge-faq-answer">
                        <p>Yes, you can integrate the <b>ThingsBoard Edge {{edgeName}}</b> with third-party systems through REST APIs.</p>
                        {% if docsPrefix == "pe/edge/" %}
                        <p>Also, the <a href="/docs/pe/edge/user-guide/integrations/" target="_blank">platform integrations</a> are available for the <b>{{edgeName}}</b>.</p>
                        {% else %}
                        <p>However, the <a href="/docs/pe/edge/user-guide/integrations/" target="_blank">platform integrations</a>, which are available only in the <b>Professional Edition</b>, are not included in the <b>Community Edition</b>.</p>
                        {% endif %}
                    </div>
                </div>

                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">What databases does the ThingsBoard Edge support?</div>
                    <div class="edge-faq-answer">
                        <p>The ThingsBoard Edge supports pure SQL or a hybrid SQL + NoSQL (for telemetry storage) approach. For more details on database options, you can check <a href="/docs/{{peDocsPrefix}}reference/#sql-vs-nosql-vs-hybrid-database-approach" target="_blank">here</a>.</p>
                    </div>
                </div>

                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">Can I automate device management and telemetry processing?</div>
                    <div class="edge-faq-answer">
                        <p>Yes, you can. The <b>Rules Engine</b> allows for event-based processing and alerts.</p>
                    </div>
                </div>

                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">Does Edge {{edgeName}} support OTA (Over-the-Air) firmware updates?</div>
                    <div class="edge-faq-answer">
                        <p>Yes, the {{edgeName}} supports <a href="/docs/{{docsPrefix}}user-guide/ota-updates/" target="_blank">OTA (Over-the-Air)</a> firmware updates.</p>
                    </div>
                </div>

                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">Is there a mobile app for ThingsBoard Edge {{edgeName}}?</div>
                    <div class="edge-faq-answer">
                        <p>No, there is no dedicated mobile app for <b>ThingsBoard Edge {{edgeName}}</b>.</p>
                        <p>However, you can access and manage ThingsBoard Edge through a web browser on any device, including mobile devices, by visiting the ThingsBoard Edge dashboard (typically hosted on port 8080).</p>
                    </div>
                </div>

                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">Does ThingsBoard Edge {{edgeName}} support AI or machine learning integrations?</div>
                    <div class="edge-faq-answer">
                        <p>Not natively, but you can incorporate AI or ML into your <b>ThingsBoard Edge</b> deployment using custom development or third-party integrations.</p>
                    </div>
                </div>

                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">How do I upgrade to the latest version of ThingsBoard Edge?</div>
                    <div class="edge-faq-answer">
                        <p>In order to upgrade to the latest version of <b>ThingsBoard Edge</b>, please follow <a href="/docs/user-guide/install/{{docsPrefix}}upgrade-instructions/" target="_blank">these instructions</a>.</p>
                    </div>
                </div>

                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">How can I connect my device?</div>
                    <div class="edge-faq-answer">
                        <p><b>ThingsBoard Edge</b> supports various protocols, including <a href="/docs/{{docsPrefix}}reference/mqtt-api" target="_blank">MQTT</a>, <a href="/docs/{{docsPrefix}}reference/coap-api" target="_blank">CoAP</a>, <a href="/docs/{{docsPrefix}}reference/http-api" target="_blank">HTTP</a>, and <a href="/docs/{{docsPrefix}}reference/lwm2m-api" target="_blank">LwM2M</a>.</p>
                        <p>Legacy devices can be connected to the platform via <a href="/docs/iot-gateway/what-is-iot-gateway/" target="_blank">ThingsBoard Gateway</a>. More information is available on the <a href="/docs/{{docsPrefix}}reference/protocols/" target="_blank">connectivity</a> page.</p>
                        {% if docsPrefix == 'pe/edge/' %}
                        <p>You can also use the <a href="/docs/user-guide/integrations/" target="_blank">ThingsBoard Integrations</a> to connect devices from different sources and with custom payloads to the edge.</p>
                        {% endif %}
                    </div>
                </div>

                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">Do I need to use a software development kit (SDK)?</div>
                    <div class="edge-faq-answer">
                        <p>No, many IoT devices are not designed to embed third-party SDKs.</p>
                        <p><b>ThingsBoard Edge</b> provides a simple API over common IoT protocols, so you can choose any client-side library you like, or even use your own. 
                        Some useful references include <a href="https://github.com/mqtt/mqtt.github.io/wiki/libraries" target="_blank">MQTT client-side libraries list</a> and <a href="https://libcoap.net/" target="_blank">C-implementation for CoAP</a>.</p>
                    </div>
                </div>
            </div>


                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">Does ThingsBoard Edge support clustering?</div>
                    <div class="edge-faq-answer">
                        <p>The <b>earlier versions</b> of ThingsBoard Edge do not support clustering. It is designed to operate, process and analyze data locally before synchronizing with the central Server.</p>
                        <p>Starting with <b>release 4.0</b>, Edge supports clustering. Multiple <b>Edge nodes</b> can be clustered to provide high availability. If one node fails, the others can seamlessly continue to handle workloads.</p>
                    </div>
                </div>

                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">Is there an official Docker image for ThingsBoard Edge?</div>
                    <div class="edge-faq-answer">
                        <p>Yes, official <b>Docker images</b> are available on <b>Docker Hub</b>.</p>
                    </div>
                </div>

                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">Can I run ThingsBoard Edge on Raspberry Pi or other edge devices?</div>
                    <div class="edge-faq-answer">
                        <p>Yes, <b>ThingsBoard Edge</b> is specifically designed to run on a variety of Edge hardware platforms, including single-board computers like <b>Raspberry Pi</b> and other devices with sufficient processing power and memory.</p>
                    </div>
                </div>

                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">Where does ThingsBoard Edge store time-series data?</div>
                    <div class="edge-faq-answer">
                        <p>Depending on your database approach, there are two options. If you've chosen a <b>hybrid approach</b>, the time-series data will be stored in <b>Cassandra</b>. Otherwise, the data is stored in the <b>PostgreSQL</b> database, which is well suited for storing and querying entities and local time-series data.</p>
                    </div>
                </div>

                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">What should I do if I have legacy devices to connect?</div>
                    <div class="edge-faq-answer">
                        <p>If you have legacy devices that don't natively speak one of the protocols supported by <b>ThingsBoard Edge</b> (such as MQTT, CoAP, or HTTP), you can still connect them by installing <a href="/docs/iot-gateway/" target="_blank">ThingsBoard IoT Gateway</a>. It will act as a bridge between your legacy devices and <b>ThingsBoard Edge</b>.</p>
                        <p><b>ThingsBoard IoT Gateway</b> is available out-of-the-box and requires no additional fees.</p>
                    </div>
                </div>
            </div>

            <div id="edge-faq-cat-support" class="edge-faq-category">
                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">What support options are available for the {{edgeName}}?</div>
                    <div class="edge-faq-answer">
                        {% if docsPrefix == "pe/edge/" %}
                        <p>All subscriptions include optional support.</p>
                        <p>Also, support can be provided by the <b>ThingsBoard community</b></p>
                        {% else %}
                        <p>Support for the <b>Community Edition</b> is primarily community-driven, including:</p>
                        {% endif %}
                        <ul>
                        <li><a href="https://stackoverflow.com/questions/tagged/thingsboard" target="_blank">Community Forums:</a> Engage with other users and developers.</li>
                        <li><a href="https://github.com/thingsboard/thingsboard-edge/issues" target="_blank">GitHub Issues:</a> Report bugs or request features.</li>
                        <li><a href="/docs/{{docsPrefix}}" target="_blank">Documentation:</a> Comprehensive guides and API references available on the ThingsBoard Documentation.</li>
                        </ul>
                    </div>
                </div>

                {% if docsPrefix == "pe/edge/" %}
                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">Do you offer 24/7 customer support?</div>
                    <div class="edge-faq-answer">
                        <p>Yes, we do provide 24/7 support. If this is what you're looking for, please <a href="/docs/contact-us/" target="_blank">contact us</a> for a more detailed discussion about your specific needs.</p>
                    </div>
                </div>
                {% else %}
                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">What should I do if I find a bug in Community Edition?</div>
                    <div class="edge-faq-answer">
                        <p>You can report it on <a href="https://github.com/thingsboard/thingsboard-edge/issues" target="_blank">GitHub Issues</a>, and the open-source community may help fix it.</p>
                    </div>
                </div>

                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">Can I contribute to the development of ThingsBoard Edge Community Edition?</div>
                    <div class="edge-faq-answer">
                        <p>Yes! Pull requests and contributions are welcome on <a href="https://github.com/thingsboard/thingsboard-edge" target="_blank">GitHub</a>. By the way, please consider starring our repository.</p>
                    </div>
                </div>

                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">Is official support available for the Community Edition?</div>
                    <div class="edge-faq-answer">
                        <p>No, official support is not included in the <b>Community Edition</b>. For official support, consider upgrading to a paid edition.</p>
                    </div>
                </div>
                {% endif %}
            </div>

        </div>
    </div>
</div>