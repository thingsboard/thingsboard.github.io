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
    font-size: 18px; 
    font-weight: 500; 
    line-height: 30px; 
    color: #212121; 
    padding: 22px 37px 22px 7px; 
    cursor: pointer; 
    position: relative; 
    margin: 0;
    display: block;
}
.edge-faq-question-title:hover { color: rgba(33, 33, 33, 0.78) }
.edge-faq-question-title:after { 
    font-family: "Font Awesome 5 Free"; 
    font-weight: 900; 
    color: rgba(0,0,0,0.38); 
    content: "\f078"; 
    position: absolute; 
    right: 8px; 
    top: 22px; 
    transition: transform 0.3s; 
}
.edge-faq-question.open .edge-faq-question-title:after { transform: rotate(180deg); }
.edge-faq-answer { 
    display: none; 
    padding: 5px 50px 25px 10px; 
    margin: 0 10px 10px; 
    font-size: 14px; 
    line-height: 24px; 
}
.edge-faq-question.open .edge-faq-answer { display: block; }
.edge-faq-answer p, .edge-faq-answer li { font-size: 14px; color: #3D3D3D; line-height: 24px; }
.edge-faq-answer a { color: #2A7DEC; text-decoration: none; }
.edge-faq-answer a:hover { text-decoration: underline; }
.edge-faq-answer ul { margin: 20px 0; padding-left: 30px; list-style: disc; }
.edge-faq-answer li { margin-bottom: .75em; }
.edge-faq-hidden { display: none; }
.edge-faq-load-more { 
    border-bottom: 1.5px solid rgba(62,154,248,0.12);
    overflow: visible;
    margin-bottom: 7px;
    position: relative;
}
.edge-faq-load-more .title { 
    font-size: 18px;
    font-weight: 500;
    line-height: 30px;
    color: #2A7DEC;
    padding: 22px 37px 22px 7px;
    margin: 0;
    cursor: pointer;
    transition: none;
}
.edge-faq-load-more .title:hover { 
    color: #1e5fb8;
}
.edge-faq-load-more .title:after {
    color: #2A7DEC;
    content: "+";
    position: absolute;
    right: 8px;
    top: 22px;
    font-size: 20px;
    font-weight: 300;
    line-height: 1;
}
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
    
    // Reset load more button for the new category
    resetEdgeLoadMore(tabId);
}

function loadMoreEdgeFaq(loadMoreDiv) {
    var category = loadMoreDiv.closest('.edge-faq-category');
    var hiddenQuestions = category.querySelectorAll('.edge-faq-question.edge-faq-hidden');
    
    // Show all hidden questions
    hiddenQuestions.forEach(function(question) {
        question.classList.remove('edge-faq-hidden');
    });
    
    // Hide the load more div
    loadMoreDiv.style.display = 'none';
}

function resetEdgeLoadMore(categoryId) {
    var category = document.getElementById('edge-faq-cat-' + categoryId);
    var loadMoreDiv = category.querySelector('.edge-faq-load-more');
    
    if (loadMoreDiv) {
        var hiddenQuestions = category.querySelectorAll('.edge-faq-question.edge-faq-hidden');
        if (hiddenQuestions.length > 0) {
            loadMoreDiv.style.display = 'block';
        }
    }
}
</script>

<h2>Edge Computing - {{edgeName}}</h2>

<div class="edge-faq-wrapper">
    <div class="edge-faq-sections">
        <div class="edge-faq-tabs">
            <div class="edge-faq-tab active" onclick="switchEdgeFaqTab('general')">General Questions</div>
            <div class="edge-faq-tab" onclick="switchEdgeFaqTab('comparison')">Edition Comparison & Upgrade</div>
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
                        <p>ThingsBoard Edge Professional Edition (PE) is the commercial version of ThingsBoard Edge, an advanced IoT platform designed for managing and processing IoT data at the edge in production-grade and enterprise environments.</p>
                        <p>It offers comprehensive features including white-labeling, role-based access control (RBAC), advanced integrations, and enterprise-grade capabilities, while maintaining seamless synchronization with ThingsBoard Server.</p>
                        {% else %}
                        <p><b>ThingsBoard Edge Community Edition (CE)</b> is a free, open-source platform designed specifically for edge computing scenarios. It provides essential capabilities for managing and analyzing IoT data at the edge, while staying seamlessly synchronized with the ThingsBoard Server (Cloud or On-premise).</p>
                        {% endif %}
                        <p><b>New to edge computing?</b> Edge computing means processing data where it's generated rather than sending everything to the cloud.</p> 
                        <p>See <a href="/docs/{{docsPrefix}}getting-started-guides/what-is-edge/" target="_blank">What is Edge?</a> for a detailed introduction, or jump to our <a href="/docs/{{docsPrefix}}getting-started/" target="_blank">Getting Started</a> to begin working with ThingsBoard Edge.</p>
                    </div>
                </div>
                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">I can deploy Server on-site. Why should I deploy Edge instead?</div>
                    <div class="edge-faq-answer">
                        <p>If you only have <b>one site</b>, deploying ThingsBoard Server on-premises may be enough.</p>
                        <p>Use ThingsBoard Edge when you <b>have multiple or remote locations</b> that need local processing, dashboards, and automation, but you don't want a full Server at each site.</p>
                        <p><b>Server</b> stays your <b>central hub</b>, while <b>Edge</b> runs on lightweight hardware at each site and <b>keeps working offline</b>, then syncs data and configuration back to Server.</p>
                    </div>
                </div>
                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">How do I get ThingsBoard Edge {{edgeName}}?</div>
                    <div class="edge-faq-answer">
                        {% if docsPrefix == "pe/edge/" %}
                        <p>Edge {{edgeName}} is an <b>add-on to your ThingsBoard PE subscription</b>. Your plan includes a base number of Edge instances, and you can purchase additional instances as needed.</p>
                        <p>See the <a href="/pricing/" target="_blank">Pricing Page</a> for details on what's included with each plan, or contact your System Administrator.</p>
                        {% else %}
                        <p>Edge {{edgeName}} is <b>open-source</b> and <b>free to download</b>. Install it from our <a href="/docs/user-guide/install/{{docsPrefix}}installation-options/" target="_blank">documentation</a> or access the source code on <a href="https://github.com/thingsboard/thingsboard-edge" target="_blank">GitHub</a>.</p>
                        <p>You'll need a ThingsBoard Server instance to connect Edge to. See our <a href="/docs/{{docsPrefix}}getting-started/" target="_blank">Getting Started</a> guide for complete setup instructions.</p> 
                        {% endif %}
                    </div>
                </div>
                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">Can I run ThingsBoard Edge on Raspberry Pi or other edge devices?</div>
                    <div class="edge-faq-answer">
                        <p>Yes, <b>ThingsBoard Edge</b> is specifically designed to run on a variety of Edge hardware platforms, including single-board computers like <b>Raspberry Pi</b> and other devices with sufficient processing power and memory.</p>
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
                <div class="edge-faq-question edge-faq-hidden">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">I have devices that use proprietary protocols. Can Edge connect to them?</div>
                    <div class="edge-faq-answer">
                        <p>Yes. Edge natively supports <a href="/docs/{{docsPrefix}}reference/mqtt-api/" target="_blank">MQTT</a>, <a href="/docs/{{docsPrefix}}reference/coap-api/" target="_blank">CoAP</a>, <a href="/docs/{{docsPrefix}}reference/http-api/" target="_blank">HTTP</a>, <a href="/docs/{{docsPrefix}}reference/snmp-api/" target="_blank">SNMP</a>, and <a href="/docs/{{docsPrefix}}reference/lwm2m-api/" target="_blank">LwM2M</a>. For other protocols, use: </p>
                        <p>For other protocols, use the <a href="/docs/iot-gateway/what-is-iot-gateway/" target="_blank">ThingsBoard IoT Gateway</a> to bridge legacy devices. Gateway supports <a href="/docs/iot-gateway/config/modbus/" target="_blank">Modbus</a>, <a href="/docs/iot-gateway/config/bacnet/" target="_blank">BACnet</a>, <a href="/docs/iot-gateway/config/opc-ua/" target="_blank">OPC-UA</a>, and more, and is available at no extra cost. </p>
                        {% if docsPrefix == "pe/edge/" %}
                        <p>Or, the <a href="/docs/{{docsPrefix}}user-guide/integrations/" target="_blank">Platform Integrations</a> to connect via <a href="/docs/{{docsPrefix}}user-guide/integrations/opc-ua/" target="_blank">OPC-UA</a>, <a href="/docs/{{docsPrefix}}user-guide/integrations/chirpstack/" target="_blank">ChirpStack</a>, and 30+ other systems using <a href="/docs/user-guide/integrations/#converters-library" target="_blank">convertor library</a>.</p>
                        {% endif %}
                    </div>
                </div>
                <div class="edge-faq-question edge-faq-hidden">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">Can I customize and modify the Edge {{edgeName}}?</div>
                    <div class="edge-faq-answer">
                        {% if docsPrefix == "pe/edge/" %}
                        <p>No, the <b>ThingsBoard {{edgeName}}</b> is a commercial project and can not be modified.</p>
                        {% else %}
                        <p>Yes, the source code is available on GitHub, and you can fork and modify it to suit your needs. By the way, please consider starring <a href="https://github.com/thingsboard/thingsboard-edge" target="_blank">our repository</a>.</p> 
                        {% endif %}
                    </div>
                </div>
                <div class="edge-faq-load-more" onclick="loadMoreEdgeFaq(this)">
                    <div class="title">Load more FAQ</div>
                </div>
            </div>
            <div id="edge-faq-cat-comparison" class="edge-faq-category">
                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">What's the difference between Edge Community Edition and Professional Edition?</div>
                    <div class="edge-faq-answer">
                        <p><b>Both editions</b> provide device management, rule engine, dashboards, and standard protocols (MQTT, CoAP, HTTP, etc.).</p>
                        <p><b>Community Edition</b> is free and open-source.</p>
                        <p><b>Professional Edition</b> is commercial and adds:</p>
                        <ul>
                        <li><b>White-labeling:</b> Deploy under your company's brand.</li>
                        <li><b>Solution templates:</b> Pre-built IoT solutions ready to install with dashboards, rule chains, and sample devices.</li>
                        <li><b>Converter library:</b> Ready-to-use decoder functions for 100+ devices across 6 LoRaWAN networks.</li>
                        <li><b>Scheduler:</b> Automate report generation, attribute updates, and device commands.</li>
                        </ul>
                    </div>
                </div>
                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">Do I need PE Edge if I'm building a commercial product?</div>
                    <div class="edge-faq-answer">
                        <p>Not necessarily. <b>Community Edition is production-ready</b> and supports commercial deployments. You can build, sell, and deploy commercial products on CE.</p>
                        <p>The choice between CE and PE depends on your specific requirements.</p>
                        <p>Consider PE if you need to:</p>
                        <ul>
                        <li>Deliver a branded product to customers.</li>
                        <li>Connect legacy equipment via OPC-UA or other industrial protocols.</li>
                        <li>Deploy pre-built solutions (irrigation, water metering, waste management, etc.).</li>
                        <li>Manage multiple end-customers with hierarchical access control.</li>
                        </ul>
                    </div>
                </div>
                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">Can I use Edge Professional Edition with Community Edition Server and vise versa?</div>
                    <div class="edge-faq-answer">
                        <p>No. Edge <b>edition must match</b> your ThingsBoard Server edition:</p>
                        <ul>
                        <li>CE Edge connects to ThingsBoard CE Server.</li>
                        <li>PE Edge connects to ThingsBoard PE Server.</li>
                        </ul>
                        <p>PE-specific features (white-labeling, solution templates, integrations, etc.) require both PE Edge and PE Server to function.</p>
                    </div>
                </div>
                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">How many Edge instances can connect to one Server?</div>
                    <div class="edge-faq-answer">
                        <ul>
                        <li><b>CE Edge:</b> The number of Edge instances is unlimited.</li>
                        <li><b>PE Edge:</b> The number of included Edge instances depends on your ThingsBoard PE plan. You can add extra Edge instances for an additional monthly cost. Check your plan details or contact your administrator to see how many Edge instances are included.</li>
                        </ul>
                    </div>
                </div>
                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">Can I migrate from CE Edge to PE Edge?</div>
                    <div class="edge-faq-answer">
                        <p>Yes, but it requires upgrading your entire system:</p>
                        <ul>
                        <li><b>Upgrade your ThingsBoard Server</b> from CE to PE.</li>
                        <li><b>Purchase the Edge Computing add-on</b> for your PE license.</li>
                        <li><b>Reinstall Edge</b> using PE packages.</li>
                        </ul>
                        <p><b>Before upgrading:</b> Back up any custom dashboards, rule chains, or configurations. <a href="/docs/contact-us/" target="_blank">Consult</a> our support team for assistance or see our <a href="/docs/pe/user-guide/install/upgrade-instructions/upgrade-from-ce/" target="_blank">migration guide</a> for step-by-step instructions.</p>
                    </div>
                </div>
                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">How do I start a free trial?</div>
                    <div class="edge-faq-answer">
                        <p>Community Edition is free and open-source - no trial needed. <a href="/docs/user-guide/install/{{docsPrefix}}installation-options/" target="_blank">Download</a> and use it indefinitely at no cost.</p>
                        <p>For Professional Edition, you can start with the <b>Free</b> plan, which is limited in terms of the number of devices, but which has Edge Computing add-on permanently enabled. This allows you to try out the add-on features free of charge.</p>
                    </div>
                </div>
            </div>
            <div id="edge-faq-cat-features" class="edge-faq-category">
                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">What core features are available in the {{edgeName}}?</div>
                    <div class="edge-faq-answer">
                        {% if docsPrefix == "pe/edge/" %}
                        <p>Edge <b>{{edgeName}}</b> includes all <b>Community Edition</b> features plus:</p>
                        <ul>
                        <li><b>UI customization</b>: <a href="/docs/{{peDocsPrefix}}user-guide/white-labeling/" target="_blank">White-labeling</a> and <a href="/docs/{{peDocsPrefix}}user-guide/custom-menu/" target="_blank">custom menu</a> configuration.</li>
                        <li><b>Solution templates</b>: <a href="/docs/{{peDocsPrefix}}solution-templates/overview/" target="_blank">Pre-built IoT solutions</a> ready to install.</li>
                        <li><b>Platform Integrations</b>: <a href="/docs/{{docsPrefix}}user-guide/integrations/" target="_blank">Connect</a> to OPC-UA servers, and other systems with <a href="/docs/user-guide/integrations/#converters-library" target="_blank">ready-to-use decoders</a> for 100+ devices.</li>
                        <li><b>Scheduler</b>: <a href="/docs/{{docsPrefix}}user-guide/scheduler/" target="_blank">Automate</a> reports, commands, and updates.</li>
                        <li><b>Customer hierarchy</b>: Organize multiple end-customers with isolated access.</li>
                        </ul>
                        {% else %}
                        <p>Edge <b>{{edgeName}}</b> provides complete edge computing functionality:</p>
                        <ul>
                        <li><b>Device connectivity</b>: MQTT, CoAP, HTTP, SNMP, and LwM2M protocols.</li>
                        <li><b>Local data processing</b>: Rule engine for real-time analytics and automation.</li>
                        <li><b>Visualization</b>: Dashboard creation and customization.</li>
                        <li><b>Data management</b>: Device telemetry collection and attribute management.</li>
                        <li><b>Open-source</b>: Fully open-source with active community support.</li>
                        </ul>
                        {% endif %}
                    </div>
                </div>
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
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">Does ThingsBoard Edge {{edgeName}} support AI or machine learning integrations?</div>
                    <div class="edge-faq-answer">
                        <p>Yes. Edge includes an <a href="/docs/user-guide/rule-engine-2-0/nodes/external/ai-request/" target="_blank">AI Request node</a> in the Rule Engine that allows integration with AI services like OpenAI, Azure OpenAI, and custom AI endpoints. You can use this for predictive maintenance, anomaly detection, natural language processing, and other AI-powered analytics.</p>
                        <p>See <a href="/docs/samples/analytics/ai-predictive-maintenance/" target="_blank">AI predictive maintenance example</a> for implementation details.</p>
                    </div>
                </div>
                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">Can I integrate devices that are connected via third-party systems such as LoRAWAN?</div>
                    <div class="edge-faq-answer">
                        <p>Not out-of-the-box for Community Edition. To connect with third-party platforms like LoRaWAN networks, you would need to develop custom integration code.</p>
                        <p>Professional Edition provides <b>ready-to-use Platform Integrations</b> for LoRaWAN networks (ChirpStack, TTN, Loriot), OPC-UA servers, and 30+ other platforms. See <a href="/docs/pe/edge/user-guide/integrations/" target="_blank">Edge Integrations documentation</a> for more details.</p>
                    </div>
                </div>
                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">Does ThingsBoard Edge support clustering?</div>
                    <div class="edge-faq-answer">
                        <p>Starting with <b>version 4.0</b>, yes. You can cluster multiple Edge nodes for high availability. If one node fails, others continue handling workloads.</p>
                        <p>Earlier versions run as single instances.</p>
                        <p>Refer to <a href="/docs/{{docsPrefix}}config/edge-cluster-setup/" target="_blank">Edge Cluster Setup documentation</a> for more details.</p>
                    </div>
                </div>
                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">What databases and uplink message storages does ThingsBoard Edge support?</div>
                    <div class="edge-faq-answer">
                        <p>Edge {{edgeName}} supports <b>pure SQL and hybrid SQL + NoSQL</b> (for telemetry storage) approaches:</p>
                        <ul>
                            <li><b>PostgreSQL</b>: The default; suitable for most deployments.</li>
                            <li><b>PostgreSQL + Cassandra</b>: A hybrid approach for high-volume telemetry (1M+ devices or >5,000 msg/sec).</li>
                        </ul>
                        <p>Edge also supports different <b>uplink message storages</b>:</p>
                        <ul>
                            <li><b>PostgreSQL</b>: The built-in default, <b>suitable for PoC and low-load environments</b> — not recommended for production or cluster deployments with high volumes of uplink messages.</li>
                            <li><b>Kafka</b>: Recommended for production deployments.</li>
                        </ul>
                    </div>
                </div>
                {% if docsPrefix == "edge/" %}
                <div class="edge-faq-question edge-faq-hidden">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">Does Edge {{edgeName}} support UI customization options, such as white-labeling or custom menu?</div>
                    <div class="edge-faq-answer">
                        <p><a href="/docs/{{peDocsPrefix}}user-guide/white-labeling/" target="_blank">White-labeling</a> and <a href="/docs/{{peDocsPrefix}}user-guide/custom-menu/" target="_blank">custom menu</a> configuration are <b>Professional Edition</b> features that provide UI customization without code changes.</p>
                        <p><b>{{edgeName}}</b> is open-source, allowing developers to customize the interface by modifying the source code.</p>
                    </div>
                </div>
                {% endif %}
                <div class="edge-faq-question edge-faq-hidden">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">Can I automate device management and telemetry processing?</div>
                    <div class="edge-faq-answer">
                        <p>Yes. you can. The <a href="/docs/{{docsPrefix}}rule-engine/rule-chain-templates/" target="_blank">Rule Engine</a> allows you to automate device workflows, data processing, and alerts based on incoming telemetry.</p>
                        <p>For example, you can automatically provision devices, transform data, trigger actions based on thresholds, or forward telemetry to external systems.</p>
                    </div>
                </div>
                <div class="edge-faq-question edge-faq-hidden">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">Can I run rule chains on Edge?</div>
                    <div class="edge-faq-answer">
                        <p>Yes. Edge runs rule chains locally for real-time processing. Starting with <b>version 4.0</b>, you can <b>create</b> and <b>edit rule chains directly on Edge</b>. In <b>earlier versions</b>, rule chains are <b>configured as templates on the Server and pushed</b> to Edge.</p>
                        <p>See <a href="/docs/{{docsPrefix}}rule-engine/rule-chain-templates/" target="_blank">Edge Rule Chain Templates</a> for more information.</p>
                    </div>
                </div>
                <div class="edge-faq-question edge-faq-hidden">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">Does Edge {{edgeName}} support OTA (Over-the-Air) firmware updates?</div>
                    <div class="edge-faq-answer">
                        <p>Yes. You can manage firmware versions, schedule updates, and track deployment status across your devices. See <a href="/docs/{{docsPrefix}}user-guide/ota-updates/" target="_blank">OTA updates documentation</a> for setup instructions.</p>
                    </div>
                </div>
                <div class="edge-faq-question edge-faq-hidden">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">Is there a mobile app for ThingsBoard Edge {{edgeName}}?</div>
                    <div class="edge-faq-answer">
                        <p>No, there is no dedicated mobile app for ThingsBoard Edge.</p>
                        <p>However, you can access and manage Edge instance through a web browser on any device, including mobile devices. Typically, instance is <b>hosted on port 8080</b>.</p>
                    </div>
                </div>
                <div class="edge-faq-load-more" onclick="loadMoreEdgeFaq(this)">
                    <div class="title">Load more FAQ</div>
                </div>
            </div>
            <div id="edge-faq-cat-installation" class="edge-faq-category">
                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">Is Edge version tied to Server version?</div>
                    <div class="edge-faq-answer">
                        <p>Partially. Edge version X.Y.Z works with:</p>
                        <ul>
                        <li>Server version X.Y.Z (<b>same version</b>).</li>
                        <li>Server versions X.Y+1 and X.Y+2 (<b>up to two minor versions ahead</b>).</li>
                        </ul>
                        <p><b>Edge does not work with older Server versions.</b></p>
                        <p>Example: Edge 3.8.0 works with Server 3.8.0, 3.8.1, and 3.9.0 — but not with Server 3.7.x or earlier. If your Edge is newer than your Server, upgrade the Server first.</p>
                        <p>See also <a href="/docs/{{docsPrefix}}releases/" target="_blank">Edge Release Notes</a>.</p>
                    </div>
                </div>
                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">What hardware do I need to run Edge?</div>
                    <div class="edge-faq-answer">
                        <p>Less than you might think. Edge runs on:</p>
                        <ul>
                        <li>Raspberry Pi or similar single-board computers.</li>
                        <li>Industrial gateways.</li>
                        <li>Mini PCs or embedded systems.</li>
                        <li><b>Any machine with 1GB+ RAM for light workloads, 4GB+ for heavy use</b>.</li>
                        </ul>
                    </div>
                </div>
                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">How to upgrade to the latest version?</div>
                    <div class="edge-faq-answer">
                        <p>To upgrade to the latest version, follow <a href="/docs/user-guide/install/{{docsPrefix}}upgrade-instructions/" target="_blank">upgrade instructions</a>.</p>
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
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">How do I install Edge?</div>
                    <div class="edge-faq-answer">
                        <p>Edge runs on <b>Docker, Ubuntu, CentOS, Windows, and Raspberry Pi</b>. See the Installation Guide for step-by-step instructions.</p>
                        <p>See the <a href="/docs/user-guide/install/{{docsPrefix}}installation-options/" target="_blank">Installation Options</a> for step-by-step instructions.</p>
                    </div>
                </div>
                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">Is there an official Docker image for ThingsBoard Edge?</div>
                    <div class="edge-faq-answer">
                        {% if docsPrefix == 'pe/edge/' %}
                        <p>Yes, the official <a href="https://hub.docker.com/r/thingsboard/tb-edge-pe" target="_blank">Docker image</a> is available on <b>Docker Hub</b>.</p>
                        {% else %}
                        <p>Yes, the official <a href="https://hub.docker.com/r/thingsboard/tb-edge" target="_blank">Docker image</a> is available on <b>Docker Hub</b>.</p>
                        {% endif %}
                    </div>
                </div>
                <div class="edge-faq-question edge-faq-hidden">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">Where does ThingsBoard Edge store time-series data?</div>
                    <div class="edge-faq-answer">
                        <p>By default, Edge stores time-series data in <b>PostgreSQL</b>, which handles <b>both device metadata and telemetry</b> efficiently for typical deployments.</p>
                        <p>For high-volume scenarios (1M+ devices or >5,000 msg/sec), you can configure a <b>hybrid setup</b> where <b>time-series data is stored in Cassandra while PostgreSQL handles device metadata and attributes</b>.</p>
                    </div>
                </div>
                <div class="edge-faq-question edge-faq-hidden">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">Do I need to use a software development kit (SDK)?</div>
                    <div class="edge-faq-answer">
                        <p>No, many IoT devices are not designed to embed third-party SDKs.</p>
                        <p>ThingsBoard Edge provides a <b>simple API over common IoT protocols</b>, so you can choose any client-side library you like, or even use your own. 
                        Some useful references include <a href="https://github.com/mqtt/mqtt.github.io/wiki/libraries" target="_blank">MQTT client-side libraries list</a> and <a href="https://libcoap.net/" target="_blank">C-implementation for CoAP</a>.</p>
                    </div>
                </div>
                <div class="edge-faq-load-more" onclick="loadMoreEdgeFaq(this)">
                    <div class="title">Load more FAQ</div>
                </div>
            </div>
            <div id="edge-faq-cat-support" class="edge-faq-category">
                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">What support options are available for the {{edgeName}}?</div>
                    <div class="edge-faq-answer">
                        {% if docsPrefix == "pe/edge/" %}
                        <p>Starting from version 4.2, we offer <a href="/docs/{{docsPrefix}}releases/release-policy/" target="_blank">Long-Term Support (LTS)</a> versions for production users with extended security updates and stability improvements.</p>
                        <p>You can always <a href="/docs/contact-us/" target="_blank">contact us</a> with any questions.</p>
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
                        <p>Also, starting from version 4.2, we offer <a href="/docs/{{docsPrefix}}releases/release-policy/" target="_blank">Long-Term Support (LTS)</a> versions for production users with extended security updates and stability improvements.</p>
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