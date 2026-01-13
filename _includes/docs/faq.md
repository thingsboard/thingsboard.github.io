<style>
.tb-faq-wrapper { padding: 20px 15px 80px; max-width: 1200px; margin: 0 auto; }
.tb-faq-wrapper h1 { text-align: center; font-size: 36px; font-weight: 500; line-height: 48px; margin-bottom: 48px; color: #212529; }
.tb-faq-sections { display: flex; gap: 40px; }
@media (max-width: 1200px) { .tb-faq-sections { flex-direction: column; } }
.tb-faq-tabs { display: flex; flex-direction: column; align-items: flex-start; padding: 8px; width: fit-content; margin-bottom: 24px; }
@media (max-width: 690px) { .tb-faq-tabs { width: 100%; } }
.tb-faq-tab { width: 100%; font-size: 24px; font-weight: 500; line-height: 36px; padding: 24px 32px; border: 1.5px solid transparent; border-radius: 24px; cursor: pointer; color: #757575; }
.tb-faq-tab:hover { color: #757575; }
.tb-faq-tab.active { color: #000000DE; border-bottom: 1.5px solid #E6F0FC; background: #F4F8FE; }
.tb-faq-answers { flex: 1.5; }
.tb-faq-category { display: none; }
.tb-faq-category.active { display: block; }
.tb-faq-question { border-bottom: 1.5px solid rgba(62,154,248,0.12); margin-bottom: 7px; }
.tb-faq-question-title { 
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
.tb-faq-question-title:hover { color: rgba(33, 33, 33, 0.78); }
.tb-faq-question-title:after { 
    font-family: "Font Awesome 5 Free"; 
    font-weight: 900; 
    color: rgba(0,0,0,0.38); 
    content: "\f078"; 
    position: absolute; 
    right: 8px; 
    top: 22px; 
    transition: transform 0.3s; 
}
.tb-faq-question.open .tb-faq-question-title:after { transform: rotate(180deg); }
.tb-faq-answer { 
    display: none; 
    padding: 5px 50px 25px 10px; 
    margin: 0 10px 10px; 
    font-size: 14px; 
    line-height: 24px; 
}
.tb-faq-question.open .tb-faq-answer { display: block; }
.tb-faq-answer p, .tb-faq-answer li { font-size: 14px; color: #3D3D3D; line-height: 24px; }
.tb-faq-answer a { color: #2A7DEC; text-decoration: none; }
.tb-faq-answer a:hover { text-decoration: underline; }
.tb-faq-answer ul { margin: 20px 0; padding-left: 30px; list-style: disc; }
.tb-faq-answer li { margin-bottom: .75em; }
.tb-faq-hidden { display: none; }
.tb-faq-load-more { 
    border-bottom: 1.5px solid rgba(62,154,248,0.12);
    overflow: visible;
    margin-bottom: 7px;
    position: relative;
}
.tb-faq-load-more .title { 
    font-size: 18px;
    font-weight: 500;
    line-height: 30px;
    color: #2A7DEC;
    padding: 22px 37px 22px 7px;
    margin: 0;
    cursor: pointer;
    transition: none;
}
.tb-faq-load-more .title:hover { 
    color: #1e5fb8;
}
.tb-faq-load-more .title:after {
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
function toggleTbFaq(element) {
    var question = element.closest('.tb-faq-question');
    question.classList.toggle('open');
}

function switchTbFaqTab(tabId) {
    // Remove active from all tabs
    var tabs = document.querySelectorAll('.tb-faq-tab');
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });
    
    // Remove active from all categories
    var categories = document.querySelectorAll('.tb-faq-category');
    categories.forEach(function(cat) {
        cat.classList.remove('active');
    });
    
    // Add active to clicked tab
    event.target.classList.add('active');
    
    // Add active to corresponding category
    var category = document.getElementById('tb-faq-cat-' + tabId);
    if (category) category.classList.add('active');
    
    // Reset load more button for the new category
    resetLoadMore(tabId);
}

function loadMoreTbFaq(loadMoreDiv) {
    var category = loadMoreDiv.closest('.tb-faq-category');
    var hiddenQuestions = category.querySelectorAll('.tb-faq-question.tb-faq-hidden');
    
    // Show all hidden questions
    hiddenQuestions.forEach(function(question) {
        question.classList.remove('tb-faq-hidden');
    });
    
    // Hide the load more div
    loadMoreDiv.style.display = 'none';
}

function resetLoadMore(categoryId) {
    var category = document.getElementById('tb-faq-cat-' + categoryId);
    var loadMoreDiv = category.querySelector('.tb-faq-load-more');
    
    if (loadMoreDiv) {
        var hiddenQuestions = category.querySelectorAll('.tb-faq-question.tb-faq-hidden');
        if (hiddenQuestions.length > 0) {
            loadMoreDiv.style.display = 'block';
        }
    }
}
</script>

<h2>Open Source IoT Platform</h2>

<div class="tb-faq-wrapper">
    <div class="tb-faq-sections">
        <div class="tb-faq-tabs">
            <div class="tb-faq-tab active" onclick="switchTbFaqTab('general')">General</div>
            {% if page.docsPrefix contains "paas/" or docsPrefix contains "paas/" or page.docsPrefix == "pe/" or docsPrefix == "pe/" %}
            <div class="tb-faq-tab" onclick="switchTbFaqTab('private-cloud')">Private Cloud</div>
            <div class="tb-faq-tab" onclick="switchTbFaqTab('addons')">ThingsBoard Add-ons</div>
            {% endif %}
            <div class="tb-faq-tab" onclick="switchTbFaqTab('ai')">AI Capabilities</div>
            <div class="tb-faq-tab" onclick="switchTbFaqTab('deployment')">Deployments & Limits</div>
            <div class="tb-faq-tab" onclick="switchTbFaqTab('security')">Security & Compliance</div>
            <div class="tb-faq-tab" onclick="switchTbFaqTab('support')">Support & Assistance</div>
        </div>
        <div class="tb-faq-answers">
            <div id="tb-faq-cat-general" class="tb-faq-category active">
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">What is ThingsBoard?</div>
                    <div class="tb-faq-answer">
                        {% if page.docsPrefix contains "paas/" or docsPrefix contains "paas/" or page.docsPrefix == "pe/" or docsPrefix == "pe/" %}
                        <p>ThingsBoard Professional Edition (PE) is an advanced IoT platform designed <b>for production-grade deployments, offering enterprise features, white-labeling, advanced security, and official support.</b> It is ideal for businesses looking to deploy scalable, reliable IoT solutions with professional backing.</p>
                        <p>ThingsBoard is an IoT platform for <b>data collection, processing, visualization, and device management</b>. It provides out-of-the-box components and APIs to significantly accelerate development and lower costs while maintaining control of your solution and data.</p>
                        <p>See <a href="/docs/{{docsPrefix}}getting-started-guides/what-is-thingsboard/" target="_blank">What is ThingsBoard?</a> to learn more about the platform's architecture and capabilities, or jump to our <a href="/docs/getting-started-guides/helloworld-pe/" target="_blank">Getting Started Guide</a> to begin building your first IoT project.</p>
                        {% else %}
                        <p>ThingsBoard Community Edition (CE) is the free and open-source IoT platform for collecting, storing, analyzing, and visualizing data from IoT devices. It is designed for developers and businesses who want full control over their IoT infrastructure without licensing fees.</p>
                        <p>ThingsBoard is an <b>open-source IoT platform</b> for data collection, processing, visualization, and device management. It provides out-of-the-box components and APIs to significantly accelerate development and lower costs while maintaining control of your solution and data.</p>
                        <p>See <a href="/docs/{{docsPrefix}}getting-started-guides/what-is-thingsboard/" target="_blank">What is ThingsBoard?</a> to learn more about the platform's architecture and capabilities, or jump to our <a href="/docs/getting-started-guides/helloworld/" target="_blank">Getting Started Guide</a> to begin building your first IoT project.</p>
                        {% endif %}
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Is ThingsBoard free?</div>
                    <div class="tb-faq-answer">
                        {% if page.docsPrefix contains "paas/" or docsPrefix contains "paas/" or page.docsPrefix == "pe/" or docsPrefix == "pe/" %}
                        <p>No, Professional Edition requires <b>a paid subscription</b>.</p>
                        {% else %}
                        <p>Yes, it <b>is completely free</b>, with no licensing fees or hidden costs.</p>
                        {% endif %}
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">What's the difference between Community Edition and Professional Edition?</div>
                    <div class="tb-faq-answer">
                        <p><b>Community Edition</b> is free and open-source, suitable for development, testing, and production use without licensing costs. It includes essential features for IoT device management, data collection, visualization, and rule processing.</p>
                        <p><b>Professional Edition</b> includes all features from CE and offers advanced features such as <a href="/docs/pe/user-guide/white-labeling/" target="_blank">white-labeling</a>, <a href="/docs/pe/user-guide/rbac/" target="_blank">role-based access control (RBAC)</a>, <a href="/docs/user-guide/integrations/" target="_blank">platform integrations</a>, <a href="/docs/pe/solution-templates/overview/" target="_blank">solution templates</a>, <a href="/docs/pe/user-guide/scheduler/" target="_blank">scheduler</a>, and enterprise support.</p>
                        <p>See the <a href="/products/thingsboard-pe/" target="_blank">PE product page</a> for detailed <b>feature comparison table</b>.</p>
                    </div>
                </div>
                {% unless page.docsPrefix contains "paas/" or docsPrefix contains "paas/" or page.docsPrefix == "pe/" or docsPrefix == "pe/" %}
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Can I use Community Edition for commercial projects?</div>
                    <div class="tb-faq-answer">
                        <p>Yes. CE is licensed under <a href="https://github.com/thingsboard/thingsboard/blob/master/LICENSE" target="_blank">Apache 2.0</a>, allowing commercial use without restrictions. You can build, sell, and deploy commercial products on CE.</p>
                    </div>
                </div>
                {% endunless %}
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">How do I get started with ThingsBoard?</div>
                    <div class="tb-faq-answer">
                        {% if page.docsPrefix contains "paas/" or docsPrefix contains "paas/" or page.docsPrefix == "pe/" or docsPrefix == "pe/" %}
                        <p>Start with <a href="https://thingsboard.cloud/signup" target="_blank">ThingsBoard Cloud</a> for immediate access, or follow our <a href="/docs/pe/user-guide/install/installation-options/" target="_blank">installation guide</a> to deploy PE on your infrastructure.</p>
                        <p>To connect your first device and build dashboards, explore the <a href="/docs/getting-started-guides/helloworld-pe/" target="_blank">Getting Started Guide</a>.</p>
                        {% else %}
                        <p>Start with <a href="https://demo.thingsboard.io/signup" target="_blank">Live Demo</a> for immediate access, or install ThingsBoard CE locally by following <a href="/docs/user-guide/install/installation-options/" target="_blank">installation guide</a>.</p>
                        <p>To connect your first device and build dashboards, explore the <a href="/docs/getting-started-guides/helloworld/" target="_blank">Getting Started Guide</a>.</p>
                        {% endif %}
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Can I migrate from CE to PE?</div>
                    <div class="tb-faq-answer">
                        <p>Yes, you can migrate from ThingsBoard Community Edition to Professional Edition <b>without losing telemetry data and/or configurations</b>. The upgrade process preserves your existing setup, ensuring a seamless transition.</p>
                        <p>However, please note that <b>any custom modifications</b> made directly to the source code of the Community Edition <b>will be removed</b> during the upgrade process.</p>
                        <p>See the <a href="/docs/pe/user-guide/install/upgrade-instructions/upgrade-from-ce/" target="_blank">ThingsBoard instructions for upgrading from Community Edition</a>. Back up your data before starting.</p>
                    </div>
                </div>
                <div class="tb-faq-question{% unless page.docsPrefix contains 'paas/' or docsPrefix contains 'paas/' or page.docsPrefix == 'pe/' or docsPrefix == 'pe/' %} tb-faq-hidden{% endunless %}">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">What protocols does ThingsBoard support?</div>
                    <div class="tb-faq-answer">
                        <p>ThingsBoard supports <a href="/docs/{{docsPrefix}}reference/mqtt-api" target="_blank">MQTT</a>, <a href="/docs/{{docsPrefix}}reference/coap-api" target="_blank">CoAP</a>, <a href="/docs/{{docsPrefix}}reference/http-api" target="_blank">HTTP</a>, <a href="/docs/{{docsPrefix}}reference/lwm2m-api" target="_blank">LwM2M</a>, and <a href="/docs/{{docsPrefix}}reference/snmp-api" target="_blank">SNMP</a>.</p>
                        <p>For legacy devices, use <a href="/docs/iot-gateway/what-is-iot-gateway/" target="_blank">ThingsBoard IoT Gateway</a> which supports Modbus, BACnet, OPC-UA, and more.</p>
                    </div>
                </div>
                <div class="tb-faq-question tb-faq-hidden">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Are there device limits?</div>
                    <div class="tb-faq-answer">
                        {% if page.docsPrefix contains "paas/" or docsPrefix contains "paas/" or page.docsPrefix == "pe/" or docsPrefix == "pe/" %}
                        <p>Limits vary by subscription plan. Cloud plans range from 30 devices (Maker) to unlimited (Enterprise). Self-managed subscriptions range from 10 devices (Maker) to unlimited (Enterprise).</p>
                        {% else %}
                        <p>No, there are no programmatic limits, but performance depends on your server(s) capacity.</p>
                        {% endif %}
                    </div>
                </div>
                <div class="tb-faq-question tb-faq-hidden">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Are there API rate limits?</div>
                    <div class="tb-faq-answer">
                        {% if page.docsPrefix contains "paas/" or docsPrefix contains "paas/" or page.docsPrefix == "pe/" or docsPrefix == "pe/" %}
                        <p>Yes, each Cloud plan has specific API and rate limits. Self-managed plans have no programmatic API limits but depend on infrastructure capacity.</p>
                        {% else %}
                        <p>No built-in API rate limits in the software itself, but performance depends on infrastructure.</p>
                        {% endif %}
                    </div>
                </div>
                <div class="tb-faq-question tb-faq-hidden">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Can I integrate with third-party systems?</div>
                    <div class="tb-faq-answer">
                        {% if page.docsPrefix contains "paas/" or docsPrefix contains "paas/" or page.docsPrefix == "pe/" or docsPrefix == "pe/" %}
                        <p>Yes, through REST APIs, Rule Engine, and Platform Integrations (PE-only feature with 30+ built-in connectors for OPC-UA, LoRaWAN networks, cloud platforms, etc.).</p>
                        {% else %}
                        <p>Yes, you can integrate ThingsBoard Community Edition with third-party systems through REST APIs or Rule Engine.</p>
                        {% endif %}
                    </div>
                </div>
                <div class="tb-faq-question tb-faq-hidden">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Does ThingsBoard support white-labeling?</div>
                    <div class="tb-faq-answer">
                        {% if page.docsPrefix contains "paas/" or docsPrefix contains "paas/" or page.docsPrefix == "pe/" or docsPrefix == "pe/" %}
                        <p>Yes, white-labeling is available starting from the Prototype plan and above.</p>
                        {% else %}
                        <p>No, white-labeling is available only in the Professional Edition.</p>
                        {% endif %}
                    </div>
                </div>
                <div class="tb-faq-question tb-faq-hidden">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Can I try Professional Edition before purchasing?</div>
                    <div class="tb-faq-answer">
                        <p>Yes, start a <b>30 days</b> free trial with <b>Maker plan</b> or <a href="/docs/contact-us/" target="_blank">request a demo</a>. The trial includes access to all PE features for evaluation.</p>
                    </div>
                </div>
                <div class="tb-faq-question tb-faq-hidden">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Where can I find the source code?</div>
                    <div class="tb-faq-answer">
                        {% if page.docsPrefix contains "paas/" or docsPrefix contains "paas/" or page.docsPrefix == "pe/" or docsPrefix == "pe/" %}
                        <p>Professional Edition is proprietary software. Source code is not publicly available.</p>
                        {% else %}
                        <p>The source code is available on <a href="https://github.com/thingsboard/thingsboard" target="_blank">GitHub</a>. You can fork, modify, and contribute to the project under the <a href="https://github.com/thingsboard/thingsboard/blob/master/LICENSE" target="_blank">Apache 2.0 license</a>.</p>
                        {% endif %}
                    </div>
                </div>
                <div class="tb-faq-question tb-faq-hidden">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Can I contribute to ThingsBoard?</div>
                    <div class="tb-faq-answer">
                        {% if page.docsPrefix contains "paas/" or docsPrefix contains "paas/" or page.docsPrefix == "pe/" or docsPrefix == "pe/" %}
                        <p>Professional Edition is closed-source and does not accept external contributions.</p>
                        {% else %}
                        <p>Yes! Pull requests and contributions are welcome on <a href="https://github.com/thingsboard/thingsboard/" target="_blank">GitHub</a>. Check the <a href="https://github.com/thingsboard/thingsboard/pulls" target="_blank">contribution guidelines</a> before submitting.</p>
                        {% endif %}
                    </div>
                </div>
                <div class="tb-faq-load-more" onclick="loadMoreTbFaq(this)">
                    <div class="title">Load more FAQ</div>
                </div>
            </div>
            {% if page.docsPrefix contains "paas/" or docsPrefix contains "paas/" or page.docsPrefix == "pe/" or docsPrefix == "pe/" %}
            <div id="tb-faq-cat-addons" class="tb-faq-category">
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">What is a ThingsBoard Add-on?</div>
                    <div class="tb-faq-answer">
                        <p>Add-ons are complementary <b>products that extend</b> ThingsBoard Professional Edition capabilities. They integrate seamlessly with your ThingsBoard instance and require a PE subscription to use. Add-ons include <b>ThingsBoard Edge PE</b> (edge computing), and <b>Trendz Analytics</b> (advanced analytics/AI).</p>
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">What add-ons are available for ThingsBoard?</div>
                    <div class="tb-faq-answer">
                        <p><a href="/docs/pe/edge/getting-started-guides/what-is-edge/" target="_blank">ThingsBoard Edge PE</a> and <a href="/docs/trendz/what-is-trendz/" target="_blank">Trendz Analytics.</a></p>
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">What is ThingsBoard Edge?</div>
                    <div class="tb-faq-answer">
                        <p>ThingsBoard Edge is an <b>edge computing solution</b> that runs locally at remote sites, processing data with reduced latency while maintaining sync with your central ThingsBoard server. It operates offline and automatically syncs when connectivity returns.</p>
                        <p>Edge Professional Edition, included as an add-on to ThingsBoard PE subscriptions, adds enterprise features such as white-labeling, solution templates, platform integrations, scheduler, and customer hierarchy management to edge computing core capabilities.</p>
                        <p>The number of included Edge instances <b>depends on your subscription plan</b>. Additional instances can be purchased separately. Check your plan details or <a href="/docs/contact-us/" target="_blank">contact us</a> for specifics.</p>
                        <p>See <a href="/docs/pe/edge/" target="_blank">Edge documentation</a> for setup and configuration details.</p>
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">What is Trendz Analytics?</div>
                    <div class="tb-faq-answer">
                        <p>Trendz Analytics is an <b>advanced analytics platform</b> for ThingsBoard PE that brings anomaly detection, predictive analytics, calculated fields, an AI assistant, Metric Explorer, and rich visualizations into one unified workspace.</p>
                        <p>It enables you to analyze IoT data, detect issues, and predict outcomes — all seamlessly integrated with your ThingsBoard environment.</p>
                        <p>See <a href="/docs/trendz/" target="_blank">Trendz documentation</a> for more information.</p>
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Can I use Edge and/or Trendz add-ons with ThingsBoard Community Edition?</div>
                    <div class="tb-faq-answer">
                        <ul>
                            <li><b>Edge:</b> No. Edge edition must match your ThingsBoard Server edition. Edge PE connects to ThingsBoard PE Server. However, you can use <b>Edge CE</b> with ThingsBoard CE Server. It's free and open-source as well as ThingsBoard CE.</li>
                            <li><b>Trendz Analytics:</b> No, Trendz requires ThingsBoard Professional Edition.</li>
                        </ul>
                    </div>
                </div>
                <div class="tb-faq-question tb-faq-hidden">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Can I use Edge and/or Trendz without ThingsBoard?</div>
                    <div class="tb-faq-answer">
                        <p>No, they are both designed to complement the capabilities of ThingsBoard, not to function as standalone solutions. Neither can operate independently:</p>
                        <ul>
                            <li><b>Edge PE:</b> Requires connection to sync with ThingsBoard PE Server (Cloud, Private Cloud, or self-managed).</li>
                            <li><b>Trendz Analytics:</b> Requires ThingsBoard PE as its data source. </li>
                        </ul>
                    </div>
                </div>
                <div class="tb-faq-question tb-faq-hidden">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Can I try add-ons before purchasing?</div>
                    <div class="tb-faq-answer">
                        <p>You can start with the <b>Free</b> plan, which is limited in terms of the number of devices, but which has Edge Computing and Trendz add-ons permanently enabled. This allows you to try out the add-on features free of charge.</p>
                        <p>For larger deployments, you can upgrade to paid plans with higher device limits and additional features.</p>
                    </div>
                </div>
                <div class="tb-faq-load-more" onclick="loadMoreTbFaq(this)">
                    <div class="title">Load more FAQ</div>
                </div>
            </div>
            <div id="tb-faq-cat-private-cloud" class="tb-faq-category">
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">What is ThingsBoard Private Cloud?</div>
                    <div class="tb-faq-answer">
                        <p>ThingsBoard Private Cloud is a <b>fully managed, isolated ThingsBoard Professional Edition cluster</b> that our team deploys and operates for you.</p>
                        <p>We provision the infrastructure, keep the platform patched and monitored 24×7, run automated backups, and provide an SLA-backed uptime guarantee (99%–99.99%, depending on plan). During onboarding, you choose the region that best fits your compliance or latency requirements—EU, North America, or APAC.</p>
                        <p><b>All environments are hosted in ISO 27001/PCI-DSS-certified data centers.</b> Your engineers can stay focused on building IoT applications instead of managing DevOps.</p>
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">How is Private Cloud different from ThingsBoard Cloud?</div>
                    <div class="tb-faq-answer">
                        <p>Private Cloud provides a dedicated, isolated environment for your organization, whereas ThingsBoard Cloud is a shared multi-tenant SaaS platform. Private Cloud offers enhanced security, custom SLAs, and infrastructure isolation for compliance-sensitive industries.</p>
                        <p>Private Cloud offers <b>enhanced security, custom SLAs</b>, and <b>infrastructure isolation</b> for compliance-sensitive industries.</p>
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">What are the benefits of Private Cloud versus self-hosting?</div>
                    <div class="tb-faq-answer">
                        <p>Private Cloud eliminates operational complexity:</p>
                        <ul>
                        <li><b>Zero DevOps overhead</b>: No infrastructure management or DevOps required.</li> 
                        <li><b>Guaranteed availability</b>: 99.9-99.99% uptime SLA with service credits.</li> 
                        <li><b>Faster time-to-market</b>: Deployed in 1-2 hours vs. weeks for self-hosting</li>
                        <li><b>Scalability</b>: Kubernetes infrastructure grows with your traffic</li> 
                        <li><b>Predictable cost</b>: One monthly fee replaces infrastructure and staffing expenses.</li>
                        </ul>
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">What is ‘uptime’ and how do you calculate it?</div>
                    <div class="tb-faq-answer">
                        <p>Uptime measures platform availability as a percentage of time services are operational during the billing month.</p>
                        <p><b>Formula:</b> Uptime (%) = ((Total Time – Downtime) / Total Time) × 100.</p>
                        <p>Scheduled maintenance, security patches, and issues caused by customer configurations are excluded from downtime calculations.</p>
                        </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Can I choose where Private Cloud is hosted?</div>
                    <div class="tb-faq-answer">
                        <p>Yes, Private Cloud can be deployed in your preferred AWS, Azure, or GCP region to meet data residency and latency requirements.</p>
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Who manages Private Cloud infrastructure?</div>
                    <div class="tb-faq-answer">
                        <p><b>ThingsBoard team manages all infrastructure, updates, monitoring, and maintenance</b>. You focus on your IoT application while we handle platform operations.</p>
                    </div>
                </div>
                <div class="tb-faq-question tb-faq-hidden">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">What support is included with Private Cloud?</div>
                    <div class="tb-faq-answer">
                        <p>Private Cloud includes <b>priority support, dedicated success management, and custom SLA options</b>. Support levels are defined in your service agreement.</p>
                    </div>
                </div>
                <div class="tb-faq-question tb-faq-hidden">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Can I customize Private Cloud configuration?</div>
                    <div class="tb-faq-answer">
                        <p>Yes, Private Cloud supports custom configurations including white-labeling, custom domains, and infrastructure scaling to match your requirements.</p>
                    </div>
                </div>
                <div class="tb-faq-question tb-faq-hidden">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Is Private Cloud compliant with security standards?</div>
                    <div class="tb-faq-answer">
                        <p>Private Cloud is designed to support compliance requirements including <b></b>GDPR, HIPAA, and ISO 27001</p>. Specific compliance certifications depend on your deployment configuration and service agreement.</p>
                    </div>
                </div>
                <div class="tb-faq-question tb-faq-hidden">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">How do I get started with Private Cloud?</div>
                    <div class="tb-faq-answer">
                        <p><a href="/docs/contact-us/" target="_blank">Contact us</a> to discuss your requirements. We'll help you design the right Private Cloud configuration for your use case.</p>
                    </div>
                </div>
                <div class="tb-faq-load-more" onclick="loadMoreTbFaq(this)">
                    <div class="title">Load more FAQ</div>
                </div>
            </div>
            {% endif %}
            <div id="tb-faq-cat-ai" class="tb-faq-category">
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Does ThingsBoard support AI integration?</div>
                    <div class="tb-faq-answer">
                        <p>Yes, ThingsBoard includes an <a href="/docs/user-guide/rule-engine-2-0/nodes/external/ai-request/" target="_blank">AI Request node</a> in the Rule Engine that allows integration with AI services like OpenAI, Azure OpenAI, and custom AI endpoints.</p>
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Can I use AI for predictive maintenance?</div>
                    <div class="tb-faq-answer">
                        <p>Yes, ThingsBoard includes built-in AI integration capabilities. You can use the <a href="/docs/user-guide/rule-engine-2-0/nodes/external/ai-request/" target="_blank">AI Request node</a> to send telemetry data to machine learning models for predictive analytics, anomaly detection, and maintenance scheduling.</p>
                        <p>See predictive maintenance example for implementation details.</p>
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Which AI providers are supported?</div>
                    <div class="tb-faq-answer">
                        <p>ThingsBoard supports OpenAI, Azure OpenAI, and custom API endpoints. You can integrate any AI service that provides a REST API.</p>
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Can I train custom ML models with ThingsBoard data?</div>
                    <div class="tb-faq-answer">
                        <p>Yes, export historical telemetry via <a href="/docs/{{docsPrefix}}api/" target="_blank">REST API</a> or <a href="/docs/pe/user-guide/csv-xls-data-export/" target="_blank">data export features (PE)</a> to train models externally. Deploy trained models as API endpoints and integrate them using the <a href="/docs/user-guide/rule-engine-2-0/nodes/external/ai-request/" target="_blank">AI Request node</a>.</p>
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Are there examples of AI use cases?</div>
                    <div class="tb-faq-answer">
                        <p>Yes, see documentation for examples including <a href="/docs/{{docsPrefix}}samples/analytics/ai-predictive-maintenance/" target="_blank">anomaly detection</a>, and <a href="/docs/{{docsPrefix}}samples/analytics/ai-models/" target="_blank">natural language processing</a>.</p>
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Do I need a separate AI subscription?</div>
                    <div class="tb-faq-answer">
                        <p>ThingsBoard integration is included, but you need subscriptions to external AI services (OpenAI, Azure, etc.) if using those providers. Custom AI endpoints are entirely under your control.</p>
                    </div>
                </div>
                <div class="tb-faq-question tb-faq-hidden">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Can I process AI requests in batches?</div>
                    <div class="tb-faq-answer">
                        <p>Yes, the Rule Engine allows batch processing. Aggregate telemetry data and send batched requests to AI endpoints to optimize costs and performance.</p>
                    </div>
                </div>
                <div class="tb-faq-load-more" onclick="loadMoreTbFaq(this)">
                    <div class="title">Load more FAQ</div>
                </div>
            </div>
            <div id="tb-faq-cat-deployment" class="tb-faq-category">
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Where can I install ThingsBoard?</div>
                    <div class="tb-faq-answer">
                        {% if page.docsPrefix contains "paas/" or docsPrefix contains "paas/" or page.docsPrefix == "pe/" or docsPrefix == "pe/" %}
                        <p>Professional Edition offers three deployment options:</p>
                        <ul>
                        <li><b>ThingsBoard Cloud:</b> Fully managed SaaS (North America or EU regions)</li>
                        <li><b>Private Cloud:</b> Dedicated managed instance in your choice of region</li>
                        <li><b>Self-managed:</b> On your infrastructure—on-premise or cloud (AWS, Azure, GCP, DigitalOcean), Docker, or Kubernetes</li>
                        </ul>
                        {% else %}
                        <p>Community Edition can be installed on:</p>
                        <ul>
                        <li><b>On-premise</b> servers or virtual machines. Docker and Kubernetes deployments are supported.</li>
                        <li><b>Cloud platforms:</b> AWS, Microsoft Azure, DigitalOcean, Google Cloud Platform</li>
                        </ul>
                        {% endif %}
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Does ThingsBoard support clustering?</div>
                    <div class="tb-faq-answer">
                        {% if page.docsPrefix contains "paas/" or docsPrefix contains "paas/" or page.docsPrefix == "pe/" or docsPrefix == "pe/" %}
                        <p>Yes, clustering is supported in all deployment options.</p>
                        {% else %}
                        <p>Yes, clustering is fully supported in the Community Edition.</p>
                        {% endif %}
                        <p>See <a href="/docs/user-guide/install/{{docsPrefix}}cluster-setup/" target="_blank">cluster setup guide</a> for configuration details.</p>
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">What are the hardware requirements?</div>
                    <div class="tb-faq-answer">
                        <p><b>Minimum:</b> 2 CPU cores, 4GB RAM for testing.</p>
                        <p><b>Recommended for production:</b> 8+ CPU cores, 16GB+ RAM. Requirements scale with device count and message volume.</p>
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">How many devices can ThingsBoard handle?</div>
                    <div class="tb-faq-answer">
                    {% if page.docsPrefix contains "paas/" or docsPrefix contains "paas/" or page.docsPrefix == "pe/" or docsPrefix == "pe/" %}
                        <p>Device capacity varies by deployment type:</p>
                        <ul>
                        <li><b>ThingsBoard Cloud</b>: Plan-based limits (30 devices for Maker up to unlimited for Enterprise).</li>
                        <li><b>Private Cloud</b>: Plan-based allocations (5K-100K+ devices).</li>
                        <li><b>Self-managed</b>: No software limits—capacity depends on your infrastructure (tens of thousands on single server, millions in clusters).</li>
                        </ul>
                        {% else %}
                        <p>There are <b>no software limits</b> on device count. The number of devices depends on your hardware capacity, database configuration, and deployment architecture (standalone vs cluster). A single server can handle tens of thousands of devices; clustered deployments can scale to millions</p>
                        {% endif %}
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">What databases does ThingsBoard support?</div>
                    <div class="tb-faq-answer">
                        <p>ThingsBoard supports two database approaches:</p>
                        <ul>
                        <li><b>Pure SQL</b>: PostgreSQL database which is default and recommended for development and production environments with reasonable load (< 5000 msg/sec).</li>
                        <li><b>Hybrid database</b>: PostgreSQL+Cassandra or PostgreSQL+TimescaleDB for 1M+ devices in production or high data ingestion rate (> 5000 msg/sec). </li>
                        </ul>
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Does ThingsBoard support multi-tenancy?</div>
                    <div class="tb-faq-answer">
                        {% if page.docsPrefix contains "paas/" or docsPrefix contains "paas/" or page.docsPrefix == "pe/" or docsPrefix == "pe/" %}
                        <p>Yes, ThingsBoard Cloud supports multi-tenancy, with each <b>tenant requiring its own subscription</b>.</p>
                        <p>Within a tenant, a customer hierarchy can be established, allowing tenant administrators to manage multiple customers under a single subscription. This structure provides sufficient flexibility and access control for most use cases, ensuring a well-organized and efficient management model.</p>
                        <p>ThingsBoard Enterprise subscription offers multi-tenancy within a single plan.</p>
                        {% else %}
                        <p>Yes, the ThingsBoard Community Edition supports multi-tenancy out of the box.</p>
                        {% endif %}
                    </div>
                </div>
                <div class="tb-faq-question tb-faq-hidden">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Does ThingsBoard support OTA (Over-the-Air) firmware updates?</div>
                    <div class="tb-faq-answer">
                        <p>Yes, the ThingsBoard supports OTA (Over-the-Air) firmware updates.</p>
                    </div>
                </div>
                <div class="tb-faq-question tb-faq-hidden">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Do you charge for API requests?</div>
                    <div class="tb-faq-answer">
                        {% if page.docsPrefix contains "paas/" or docsPrefix contains "paas/" or page.docsPrefix == "pe/" or docsPrefix == "pe/" %}
                        <p>API charges depend on your deployment type:</p>
                        <ul>
                        <li><b>ThingsBoard Cloud & Private Cloud</b>: API requests are included in your subscription with no additional charges</li>
                        <li><b>Self-managed:</b>: No charges or programmatic limits on API requests.</li>
                        </ul>
                        {% else %}
                        <p>No. Community Edition has no charges or limits on API requests. However, performance depends on your server capacity and infrastructure.</p>
                        {% endif %}
                    </div>
                </div>
                {% if page.docsPrefix contains "paas/" or docsPrefix contains "paas/" or page.docsPrefix == "pe/" or docsPrefix == "pe/" %}
                <div class="tb-faq-question tb-faq-hidden">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">What happens if I exceed my plan's API limits?</div>
                    <div class="tb-faq-answer">
                        <p>API access may be throttled until the next billing cycle, or you can upgrade to a higher plan.</p>
                    </div>
                </div>
                {% endif %}
                <div class="tb-faq-question tb-faq-hidden">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Is there a mobile app for ThingsBoard?</div>
                    <div class="tb-faq-answer">
                        {% if page.docsPrefix contains "paas/" or docsPrefix contains "paas/" or page.docsPrefix == "pe/" or docsPrefix == "pe/" %}
                        <p>Yes. Professional Edition offers <a href="/products/mobile-pe/" target="_blank">PE Mobile Application</a> - advanced mobile app with enterprise features and white-labeling.</p>
                        {% else %}
                        <p>Yes. ThingsBoard <a href="/products/mobile/" target="_blank">Mobile Application</a> is free and open-source (Apache 2.0 license). It's available for iOS and Android and works with ThingsBoard CE Server.</p>
                        {% endif %}
                    </div>
                </div>
                {% if page.docsPrefix contains "paas/" or docsPrefix contains "paas/" or page.docsPrefix == "pe/" or docsPrefix == "pe/" %}
                <div class="tb-faq-question tb-faq-hidden">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">What happens to my data if I cancel my subscription?</div>
                    <div class="tb-faq-answer">
                        <p>Your data will be retained for a short period before being permanently deleted.</p>
                    </div>
                </div>
                {% endif %}
                <div class="tb-faq-load-more" onclick="loadMoreTbFaq(this)">
                    <div class="title">Load more FAQ</div>
                </div>
            </div>
            <div id="tb-faq-cat-security" class="tb-faq-category">
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Is my ThingsBoard instance secure?</div>
                    <div class="tb-faq-answer">
                        {% if page.docsPrefix contains "paas/" or docsPrefix contains "paas/" or page.docsPrefix == "pe/" or docsPrefix == "pe/" %}
                        <p>Security depends on deployment type:</p>
                        <ul>
                        <li><b>Cloud/Private Cloud</b> deployments are hosted in ISO 27001/SOC 2 compliant infrastructure.</li>
                        <li><b>Self-managed</b> security depends on your infrastructure setup. It requires you to manage infrastructure security, network configuration, and SSL/TLS setup.</li>
                        </ul>
                        {% else %}
                        <p>Yes, but security depends on your deployment setup and infrastructure.</p>
                        {% endif %}
                        <p>ThingsBoard provides device authentication, encrypted communication (SSL/TLS), role-based access control, and audit logging.</p>
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Does ThingsBoard support encryption?</div>
                    <div class="tb-faq-answer">
                        {% if page.docsPrefix contains "paas/" or docsPrefix contains "paas/" or page.docsPrefix == "pe/" or docsPrefix == "pe/" %}
                        <p>Yes, transport encryption (TLS/SSL) is supported. Additional encryption features may depend on your subscription plan and deployment type.</p>
                        {% else %}
                        <p>Yes, the Community Edition includes transport encryption (TLS/SSL).</p>
                        {% endif %}
                        <p>For data-at-rest encryption, configure database-level encryption. See <a href="/docs/{{docsPrefix}}user-guide/ui/security-settings/" target="_blank">security documentation</a> for setup instructions.</p>
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Does ThingsBoard support SSO/OAuth?</div>
                    <div class="tb-faq-answer">
                        {% if page.docsPrefix contains "paas/" or docsPrefix contains "paas/" or page.docsPrefix == "pe/" or docsPrefix == "pe/" %}
                        <p>Yes, SSO and OAuth are supported with additional enterprise features in PE.</p>
                        {% else %}
                        <p>Yes, the Community Edition includes SSO (Single Sign-On) and OAuth functionality.</p>
                        {% endif %}
                        <p>For data-at-rest encryption, configure database-level encryption. See <a href="/docs/{{docsPrefix}}user-guide/ui/security-settings/" target="_blank">security documentation</a> for setup instructions.</p>
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Can I store ThingsBoard data in my preferred region?</div>
                    <div class="tb-faq-answer">
                        {% if page.docsPrefix contains "paas/" or docsPrefix contains "paas/" or page.docsPrefix == "pe/" or docsPrefix == "pe/" %}
                        <ul>
                        <li><b>Cloud:</b> Your data is stored in either North America or the EU, depending on the cloud region (US or European) you choose. With the Enterprise subscription, you can choose any region or specific country for data storage.</li>
                        <li><b>Private Cloud/Self-managed:</b> Yes, you have full control over data storage location.</li>
                        </ul>
                        {% else %}
                        <p>Yes, you have full control over where your data is stored.</p>
                        {% endif %}
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">How are devices authenticated?</div>
                    <div class="tb-faq-answer">
                        <p>ThingsBoard supports multiple authentication methods: access tokens, X.509 certificates, and username/password. Each device receives unique credentials. See <a href="/docs/{{docsPrefix}}user-guide/device-credentials/" target="_blank">device authentication options</a> available.</p>
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Does ThingsBoard support role-based access control (RBAC)?</div>
                    <div class="tb-faq-answer">
                        <p>Community Edition supports a <b>straight-forward security model</b> with three main roles: System administrator, Tenant administrator, and Customer user. A system administrator is able to manage tenants, while a tenant administrator manages devices, dashboards, customers, and other entities that belong to a particular tenant. Customer user is able to view dashboards and control devices that are assigned to a specific customer.</p>
                        {% if page.docsPrefix contains "paas/" or docsPrefix contains "paas/" or page.docsPrefix == "pe/" or docsPrefix == "pe/" %}
                        <p>Yes, ThingsBoard supports <a href="/docs/pe/user-guide/rbac/" target="_blank">RBAC</a>.</p>
                        <p>Professional Edition includes advanced RBAC with custom roles, hierarchical permissions, and group-based access control.</p>
                        {% endif %}
                    </div>
                </div>
                <div class="tb-faq-question tb-faq-hidden">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Is ThingsBoard compliant with regulations (GDPR, etc.)?</div>
                    <div class="tb-faq-answer">
                        {% if page.docsPrefix contains "paas/" or docsPrefix contains "paas/" or page.docsPrefix == "pe/" or docsPrefix == "pe/" %}
                        <ul>
                        <li><b>Cloud/Private Cloud:</b> Infrastructure is ISO 27001/SOC 2 compliant. GDPR compliance depends on how you configure and use the platform.</li>
                        <li><b>Self-managed:</b> Compliance depends on your infrastructure and practices.</li>
                        </ul>
                        {% else %}
                        <p>Compliance depends on your hosting environment and data security practices.</p>
                        {% endif %}
                    </div>
                </div>
                <div class="tb-faq-question tb-faq-hidden">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Can I integrate with external authentication providers?</div>
                    <div class="tb-faq-answer">
                        <p>Yes, ThingsBoard supports OAuth2, LDAP, and SAML integration.</p>
                        {% if page.docsPrefix contains "paas/" or docsPrefix contains "paas/" or page.docsPrefix == "pe/" or docsPrefix == "pe/" %}
                        <p>Professional Edition includes additional SSO options.</p>
                        {% endif %}
                    </div>
                </div>
                <div class="tb-faq-question tb-faq-hidden">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Are there audit logs?</div>
                    <div class="tb-faq-answer">
                        <p>Yes, ThingsBoard logs user actions, API calls, and system events.</p>
                        {% if page.docsPrefix contains "paas/" or docsPrefix contains "paas/" or page.docsPrefix == "pe/" or docsPrefix == "pe/" %}
                        <p>Professional Edition provides enhanced audit logging with detailed tracking and export capabilities.</p>
                        {% endif %}
                    </div>
                </div>
                <div class="tb-faq-load-more" onclick="loadMoreTbFaq(this)">
                    <div class="title">Load more FAQ</div>
                </div>
            </div>
            <div id="tb-faq-cat-support" class="tb-faq-category">
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">What support is available for ThingsBoard?</div>
                    <div class="tb-faq-answer">
                        {% if page.docsPrefix contains "paas/" or docsPrefix contains "paas/" or page.docsPrefix == "pe/" or docsPrefix == "pe/" %}
                        <p>Starting from version 4.2, we offer <a href="/docs/{{docsPrefix}}releases/release-policy/" target="_blank">Long-Term Support (LTS)</a> versions for production users with extended security updates and stability improvements.</p>
                        <p>You can always <a href="/docs/contact-us/" target="_blank">contact us</a> with any questions. Community support is available to all users.</p>
                        {% else %}
                        <p>The ThingsBoard team does not provide dedicated support for Community Edition users. Support is community-driven through <a href="https://github.com/thingsboard/thingsboard" target="_blank">GitHub</a> (report issues, contribute), <a href="https://stackoverflow.com/questions/tagged/thingsboard" target="_blank">Stack Overflow</a> (developer questions), <a href="/docs/{{docsPrefix}}" target="_blank">Documentation</a> (guides and tutorials), <a href="https://www.youtube.com/thingsboard" target="_blank">Youtube channel</a> (tutorials).</p>
                        {% endif %}
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Do you offer professional services?</div>
                    <div class="tb-faq-answer">
                        <p>Yes, ThingsBoard offers consulting, <a href="/services/development-services/" target="_blank">custom development</a>, <a href="/services/trainings/" target="_blank">learning resources</a>, and deployment assistance. <a href="/docs/contact-us/" target="_blank">Contact us</a> to discuss your requirements.</p>
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">How do I report a bug?</div>
                    <div class="tb-faq-answer">
                        {% if page.docsPrefix contains "paas/" or docsPrefix contains "paas/" or page.docsPrefix == "pe/" or docsPrefix == "pe/" %}
                        <p>Report via Support Portal (for paying customers) or Report bugs on <a href="https://github.com/thingsboard/thingsboard/issues" target="_blank">GitHub</a>. Include detailed reproduction steps, logs, and system information.</p>
                        {% else %}
                        <p>Report bugs on <a href="https://github.com/thingsboard/thingsboard/issues" target="_blank">GitHub Issues</a>. Include detailed reproduction steps, logs, and system information. Community members and maintainers will investigate.</p>
                        {% endif %}
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Are there training resources?</div>
                    <div class="tb-faq-answer">
                        <p>Yes, comprehensive documentation, video tutorials, and sample projects are available. Professional services include custom training programs. See <a href="/services/trainings/" target="_blank">learning resources</a> for more.</p>
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Can I get help with deployment?</div>
                    <div class="tb-faq-answer">
                        <p>Yes, professional services include deployment assistance, architecture review, and production setup. <a href="/docs/contact-us/" target="_blank">Contact us</a> to discuss your deployment needs.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>