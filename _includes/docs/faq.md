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
.tb-faq-question-title:hover { color: rgba(33, 33, 33, 0.78) !important; }
.tb-faq-question-title:after { 
    font-family: "Font Awesome 5 Free" !important; 
    font-weight: 900 !important; 
    color: rgba(0,0,0,0.38) !important; 
    content: "\f078" !important; 
    position: absolute !important; 
    right: 8px !important; 
    top: 22px !important; 
    transition: transform 0.3s !important; 
}
.tb-faq-question.open .tb-faq-question-title:after { transform: rotate(180deg) !important; }
.tb-faq-answer { 
    display: none; 
    padding: 5px 50px 25px 10px; 
    margin: 0 10px 10px; 
    font-size: 14px; 
    line-height: 24px; 
}
.tb-faq-question.open .tb-faq-answer { display: block !important; }
.tb-faq-answer p, .tb-faq-answer li { font-size: 14px; color: #3D3D3D; line-height: 24px; }
.tb-faq-answer a { color: #2A7DEC; text-decoration: none; }
.tb-faq-answer a:hover { text-decoration: underline; }
.tb-faq-answer ul { margin: 20px 0; padding-left: 30px; list-style: disc; }
.tb-faq-answer li { margin-bottom: .75em; }
.tb-faq-hidden { display: none !important; }
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
            <div class="tb-faq-tab" onclick="switchTbFaqTab('addons')">ThingsBoard Add-ons</div>
            <div class="tb-faq-tab" onclick="switchTbFaqTab('private-cloud')">Private Cloud</div>
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
                {% if page.docsPrefix contains "paas/" or docsPrefix contains "paas/" or page.docsPrefix == "pe/" or docsPrefix == "pe/" %}
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Can I use Community Edition for commercial projects?</div>
                    <div class="tb-faq-answer">
                        <p>Yes. CE is licensed under <a href="https://github.com/thingsboard/thingsboard/blob/master/LICENSE" target="_blank">Apache 2.0</a>, allowing commercial use without restrictions. You can build, sell, and deploy commercial products on CE.</p>
                    </div>
                </div>
                {% endif %}
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
                <div class="tb-faq-question tb-faq-hidden">
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
                        <p>See <a href="/docs/pe/edge/" target="_blank">Edge documentation</a> for setup and configuration details.</p>
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">How many Edge instances are included with PE?</div>
                    <div class="tb-faq-answer">
                        <p>The number of included Edge instances <b>depends on your subscription plan</b>. Additional instances can be purchased separately. Check your plan details or <a href="/docs/contact-us/" target="_blank">contact us</a> for specifics.</p>
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">What is Trendz Analytics?</div>
                    <div class="tb-faq-answer">
                        <p>Trendz Analytics is an advanced analytics and reporting tool for ThingsBoard. It provides predictive analytics, automated reporting, and data visualization beyond ThingsBoard's built-in capabilities. Trendz requires a separate subscription and integrates with both CE and PE.</p>
                        <p>See <a href="/docs/trendz/" target="_blank">Trendz documentation</a> for more information.</p>
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Can I use Edge and/or Trendz with ThingsBoard Community Edition?</div>
                    <div class="tb-faq-answer">
                        <ul>
                            <li><b>Edge CE:</b> Yes, you can use Edge Community Edition with ThingsBoard CE Server. It's free and open-source as well as ThingsBoard CE. </li>
                            <li><b>Trendz Analytics:</b> No, Trendz requires ThingsBoard Professional Edition.</li>
                        </ul>
                        <p><b>Note:</b> Edge CE only connects to ThingsBoard CE Server, not PE Server.</p>
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
                        <p>Yes,you can start a 30-day trial of the <b>Maker</b> plan with <b>Edge Computing</b> and <b>Trendz add-ons enabled</b>. You'll have full access to add-ons features.</p>
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
                        <p>ThingsBoard Private Cloud is a fully managed, isolated ThingsBoard Professional Edition instance hosted in a dedicated environment. It provides enterprise security, compliance, and performance while eliminating infrastructure management overhead.</p>
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">How is Private Cloud different from ThingsBoard Cloud?</div>
                    <div class="tb-faq-answer">
                        <p>Private Cloud provides a dedicated, isolated environment for your organization, whereas ThingsBoard Cloud is a shared multi-tenant SaaS platform. Private Cloud offers enhanced security, custom SLAs, and infrastructure isolation for compliance-sensitive industries.</p>
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
                        <p>ThingsBoard team manages all infrastructure, updates, monitoring, and maintenance. You focus on your IoT application while we handle platform operations.</p>
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">What support is included with Private Cloud?</div>
                    <div class="tb-faq-answer">
                        <p>Private Cloud includes priority support, dedicated success management, and custom SLA options. Support levels are defined in your service agreement.</p>
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Can I customize Private Cloud configuration?</div>
                    <div class="tb-faq-answer">
                        <p>Yes, Private Cloud supports custom configurations including white-labeling, custom domains, and infrastructure scaling to match your requirements.</p>
                    </div>
                </div>
                <div class="tb-faq-question tb-faq-hidden">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Is Private Cloud compliant with security standards?</div>
                    <div class="tb-faq-answer">
                        <p>Private Cloud is designed to support compliance requirements including GDPR, HIPAA, and ISO 27001. Specific compliance certifications depend on your deployment configuration and service agreement.</p>
                    </div>
                </div>
                <div class="tb-faq-question tb-faq-hidden">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">How do I get started with Private Cloud?</div>
                    <div class="tb-faq-answer">
                        <p><a href="" target="_blank">Contact sales</a> to discuss your requirements. We'll help you design the right Private Cloud configuration for your use case.</p>
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
                        <p>Yes, Professional Edition includes an AI Request node in the Rule Engine that allows integration with AI services like OpenAI, Azure OpenAI, and custom AI endpoints.</p>
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Can I use AI for predictive maintenance?</div>
                    <div class="tb-faq-answer">
                        <p>Yes, CE/PE includes built-in AI integration capabilities. You can use the AI Request node to send telemetry data to machine learning models for predictive analytics, anomaly detection, and maintenance scheduling.</p>
                        <p>See <a href="" target="_blank">predictive maintenance example</a> for implementation details.</p>
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
                        <p>Yes, export historical telemetry via <a href="" target="_blank">REST API</a> or <a href="" target="_blank">data export features</a> to train models externally. Deploy trained models as API endpoints and integrate them using the AI Request node.</p>
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Does AI functionality work offline with ThingsBoard Edge?</div>
                    <div class="tb-faq-answer">
                        <p>Yes, if you deploy AI models locally at edge locations. Edge can call local AI endpoints without cloud connectivity. Configure the AI Request node to use local API endpoints.</p>
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Are there examples of AI use cases?</div>
                    <div class="tb-faq-answer">
                        <p>Yes, see documentation for examples including <a href="" target="_blank">anomaly detection</a>, <a href="" target="_blank">predictive maintenance</a>, and <a href="" target="_blank">natural language processing</a>.</p>
                    </div>
                </div>
                <div class="tb-faq-question tb-faq-hidden">
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
                        <p>Professional Edition can be deployed as: ThingsBoard Cloud (fully managed SaaS), Private Cloud (dedicated managed environment), or self-hosted on your infrastructure (on-premises or cloud VM).</p>
                        {% else %}
                        <p>You can install the Community Edition on your virtual machine, local servers, or deploy it on cloud platforms like AWS, Azure, or GCP. Installation guides support <a href="" target="_blank">Docker</a>, <a href="" target="_blank">Kubernetes</a>, and manual installations.</p>
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
                        <p>See <a href="" target="_blank">cluster setup guide</a> for configuration details.</p>
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">What are the hardware requirements?</div>
                    <div class="tb-faq-answer">
                        <p>Minimum: 2 CPU cores, 4GB RAM for testing. Recommended for production: 8+ CPU cores, 16GB+ RAM. Requirements scale with device count and message volume. See <a href="" target="_blank">hardware sizing guide</a> for detailed recommendations.</p>
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">How many devices can ThingsBoard handle?</div>
                    <div class="tb-faq-answer">
                        <p>ThingsBoard scales horizontally via clustering. Single-node deployments handle thousands of devices. Clustered deployments can manage millions of devices with appropriate hardware and configuration.</p>
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">What databases does ThingsBoard support?</div>
                    <div class="tb-faq-answer">
                        <p>ThingsBoard supports PostgreSQL (default), Cassandra (for high-volume time-series data), or TimescaleDB (PostgreSQL extension for time-series). Hybrid configurations (PostgreSQL + Cassandra) are recommended for large-scale deployments.</p>
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Can I deploy ThingsBoard in a Docker container?</div>
                    <div class="tb-faq-answer">
                        <p>Yes, official Docker images are available on <a href="" target="_blank">Docker Hub</a>. Docker Compose files simplify deployment with all dependencies included.</p>
                    </div>
                </div>
                <div class="tb-faq-question tb-faq-hidden">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Is Kubernetes supported?</div>
                    <div class="tb-faq-answer">
                        <p>Yes, Kubernetes deployment is fully supported with Helm charts available. See <a href="" target="_blank">Kubernetes installation guide</a> for details.</p>
                    </div>
                </div>
                <div class="tb-faq-load-more" onclick="loadMoreTbFaq(this)">
                    <div class="title">Load more FAQ</div>
                </div>
            </div>
            <div id="tb-faq-cat-security" class="tb-faq-category">
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Is ThingsBoard secure?</div>
                    <div class="tb-faq-answer">
                        {% if page.docsPrefix contains "paas/" or docsPrefix contains "paas/" or page.docsPrefix == "pe/" or docsPrefix == "pe/" %}
                        <p>Security depends on deployment type. Cloud/Private Cloud deployments are hosted on secure infrastructure with encryption, monitoring, and regular security updates. Self-hosted deployments require you to manage infrastructure security, network configuration, and SSL/TLS setup.</p>
                        {% else %}
                        <p>Yes, but security depends on your deployment setup and infrastructure.</p>
                        {% endif %}
                        <p>ThingsBoard provides device authentication, encrypted communication (SSL/TLS), role-based access control, and audit logging. Follow <a href="" target="_blank">security best practices</a> for secure deployments.</p>
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
                        <p>For data-at-rest encryption, configure database-level encryption. See <a href="" target="_blank">security documentation</a> for setup instructions.</p>
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">How are devices authenticated?</div>
                    <div class="tb-faq-answer">
                        <p>ThingsBoard supports multiple authentication methods: access tokens, X.509 certificates, and username/password. Each device receives unique credentials. See <a href="" target="_blank">device authentication guide</a> for configuration.</p>
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Does ThingsBoard support role-based access control (RBAC)?</div>
                    <div class="tb-faq-answer">
                        <p>Yes, both editions support RBAC. Professional Edition includes advanced RBAC with custom roles, hierarchical permissions, and group-based access control.</p>
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Can I integrate with external authentication providers?</div>
                    <div class="tb-faq-answer">
                        <p>Yes, ThingsBoard supports OAuth2, LDAP, and SAML integration. Professional Edition includes additional SSO options. See <a href="" target="_blank">authentication configuration</a> for setup.</p>
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Are there audit logs?</div>
                    <div class="tb-faq-answer">
                        <p>Yes, ThingsBoard logs user actions, API calls, and system events. Professional Edition provides enhanced audit logging with detailed tracking and export capabilities.</p>
                    </div>
                </div>
            </div>
            <div id="tb-faq-cat-support" class="tb-faq-category">
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">What support is available for CE?</div>
                    <div class="tb-faq-answer">
                        {% if page.docsPrefix contains "paas/" or docsPrefix contains "paas/" or page.docsPrefix == "pe/" or docsPrefix == "pe/" %}
                        <p>Support varies by plan: Cloud Maker/Prototype (community support), Startup+ (email support with SLA), Growth+ (priority support), Enterprise (dedicated support team).</p>
                        {% else %}
                        <p>The ThingsBoard team does not provide dedicated support for Community Edition users. Support is community-driven through <a href="" target="_blank">GitHub</a>, <a href="" target="_blank">Stack Overflow</a>, and community forums.</p>
                        {% endif %}
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Where can I get help?</div>
                    <div class="tb-faq-answer">
                        {% if page.docsPrefix contains "paas/" or docsPrefix contains "paas/" or page.docsPrefix == "pe/" or docsPrefix == "pe/" %}
                        <p>Professional Edition users with Startup+ plans have access to ThingsBoard Support Team via email. Enterprise plans include dedicated support channels and faster response times.</p>
                        {% else %}
                        <p><a href="" target="_blank">GitHub</a> (report issues, contribute), <a href="" target="_blank">Stack Overflow</a> (developer questions), <a href="" target="_blank">Documentation</a> (guides and tutorials), <a href="" target="_blank">Community forum</a> (discussions and advice).</p>
                        {% endif %}
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Do you offer professional services?</div>
                    <div class="tb-faq-answer">
                        <p>Yes, ThingsBoard offers consulting, custom development, training, and deployment assistance. <a href="" target="_blank">Contact sales</a> to discuss your requirements.</p>
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">How do I report a bug?</div>
                    <div class="tb-faq-answer">
                        {% if page.docsPrefix contains "paas/" or docsPrefix contains "paas/" or page.docsPrefix == "pe/" or docsPrefix == "pe/" %}
                        <p>Professional Edition users should contact support through their designated channel. Include detailed reproduction steps, logs, and system information.</p>
                        {% else %}
                        <p>Report bugs on <a href="" target="_blank">GitHub Issues</a>. Include detailed reproduction steps, logs, and system information. Community members and maintainers will investigate.</p>
                        {% endif %}
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Are there training resources?</div>
                    <div class="tb-faq-answer">
                        <p>Yes, comprehensive documentation, video tutorials, and sample projects are available. Professional services include custom training programs. See <a href="" target="_blank">learning resources</a> for more.</p>
                    </div>
                </div>
                <div class="tb-faq-question">
                    <div class="tb-faq-question-title" onclick="toggleTbFaq(this)">Can I get help with deployment?</div>
                    <div class="tb-faq-answer">
                        <p>Yes, professional services include deployment assistance, architecture review, and production setup. <a href="" target="_blank">Contact us</a> to discuss your deployment needs.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>