<style>
.tbmq-faq-wrapper { padding: 20px 15px 80px; max-width: 1200px; margin: 0 auto; }
.tbmq-faq-wrapper h1 { text-align: center; font-size: 36px; font-weight: 500; line-height: 48px; margin-bottom: 48px; color: #212529; }
.tbmq-faq-sections { display: flex; gap: 40px; }
@media (max-width: 1200px) { .tbmq-faq-sections { flex-direction: column; } }
.tbmq-faq-tabs { display: flex; flex-direction: column; align-items: flex-start; padding: 8px; width: fit-content; margin-bottom: 24px; }
@media (max-width: 690px) { .tbmq-faq-tabs { width: 100%; } }
.tbmq-faq-tab { width: 100%; font-size: 24px; font-weight: 500; line-height: 36px; padding: 24px 32px; border: 1.5px solid transparent; border-radius: 24px; cursor: pointer; color: #757575; }
.tbmq-faq-tab:hover { color: #757575; }
.tbmq-faq-tab.active { color: #000000DE; border-bottom: 1.5px solid #E6F0FC; background: #F4F8FE; }
.tbmq-faq-answers { flex: 1.5; }
.tbmq-faq-category { display: none; }
.tbmq-faq-category.active { display: block; }
.tbmq-faq-question { border-bottom: 1.5px solid rgba(62,154,248,0.12); margin-bottom: 7px; }
.tbmq-faq-question-title { 
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
.tbmq-faq-question-title:hover { color: rgba(33, 33, 33, 0.78) }
.tbmq-faq-question-title:after { 
    font-family: "Font Awesome 5 Free"; 
    font-weight: 900 ; 
    color: rgba(0,0,0,0.38); 
    content: "\f078"; 
    position: absolute; 
    right: 8px; 
    top: 22px; 
    transition: transform 0.3s; 
}
.tbmq-faq-question.open .tbmq-faq-question-title:after { transform: rotate(180deg); }
.tbmq-faq-answer { 
    display: none; 
    padding: 5px 50px 25px 10px; 
    margin: 0 10px 10px; 
    font-size: 14px; 
    line-height: 24px; 
}
.tbmq-faq-question.open .tbmq-faq-answer { display: block; }
.tbmq-faq-answer p, .tbmq-faq-answer li { font-size: 14px; color: #3D3D3D; line-height: 24px; }
.tbmq-faq-answer a { color: #2A7DEC; text-decoration: none; }
.tbmq-faq-answer a:hover { text-decoration: underline; }
.tbmq-faq-answer ul { margin: 20px 0; padding-left: 30px; list-style: disc; }
.tbmq-faq-answer li { margin-bottom: .75em; }
</style>

<script>
function toggleTbmqFaq(element) {
    var question = element.closest('.tbmq-faq-question');
    question.classList.toggle('open');
}

function switchTbmqFaqTab(tabId) {
    // Remove active from all tabs
    var tabs = document.querySelectorAll('.tbmq-faq-tab');
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });
    
    // Remove active from all categories
    var categories = document.querySelectorAll('.tbmq-faq-category');
    categories.forEach(function(cat) {
        cat.classList.remove('active');
    });
    
    // Add active to clicked tab
    event.target.classList.add('active');
    
    // Add active to corresponding category
    var category = document.getElementById('tbmq-faq-cat-' + tabId);
    if (category) category.classList.add('active');
}
</script>

<h2>MQTT Broker</h2>

<div class="tbmq-faq-wrapper">
    <div class="tbmq-faq-sections">
        <div class="tbmq-faq-tabs">
            <div class="tbmq-faq-tab active" onclick="switchTbmqFaqTab('start')">Getting Started</div>
            <div class="tbmq-faq-tab" onclick="switchTbmqFaqTab('configuration')">Configuration & Deployment</div>
            <div class="tbmq-faq-tab" onclick="switchTbmqFaqTab('connectivity')">Connectivity</div>
            <div class="tbmq-faq-tab" onclick="switchTbmqFaqTab('usage')">Usage and Capabilities</div>
            <div class="tbmq-faq-tab" onclick="switchTbmqFaqTab('security')">Security and Reliability</div>
            <div class="tbmq-faq-tab" onclick="switchTbmqFaqTab('subscriptions')">Subscriptions & Messaging</div>
            <div class="tbmq-faq-tab" onclick="switchTbmqFaqTab('performance')">Performance and Scalability</div>
            <div class="tbmq-faq-tab" onclick="switchTbmqFaqTab('licensing')">Licensing and Support</div>
        </div>
        <div class="tbmq-faq-answers">
            <div id="tbmq-faq-cat-start" class="tbmq-faq-category active">
               {% if docsPrefix == null %}
                <div class="tbmq-faq-question">
                    <div class="tbmq-faq-question-title" onclick="toggleTbmqFaq(this)">What is TBMQ Community Edition (CE)?</div>
                    <div class="tbmq-faq-answer">
                        <p>TBMQ is a high-performance MQTT broker developed by ThingsBoard. It enables efficient, reliable, and scalable communication between MQTT clients and IoT applications. TBMQ supports <b>MQTT 3.x</b> and <b>MQTT 5.0</b>, ensuring compatibility with a wide range of devices and industry use cases.</p>
                        <p>The broker is available in two editions: <b>Community Edition (CE)</b> and <b>Professional Edition (PE)</b>.</p>
                        <p>The <b>Community Edition</b> is a <b>free and open-source</b> version, ideal for developers and teams who want to explore, prototype, and test MQTT-based solutions without licensing costs. It provides a robust MQTT broker that can be deployed locally, on-premises, or in the cloud. CE delivers all the essential features for reliable messaging, scalability, and monitoring — making it a perfect starting point for both learning and production-scale use cases.</p>
                        <p>If this is your first experience with TBMQ, we recommend reviewing the <a href="/docs/{{docsPrefix}}mqtt-broker/getting-started-guides/what-is-thingsboard-mqtt-broker/" target="_blank">What is TBMQ</a> and <a href="/docs/{{docsPrefix}}mqtt-broker/getting-started/" target="_blank">Getting Started Guide</a> to learn more about its architecture, setup, and key capabilities.</p>
                    </div>
                </div>
                {% endif %}
                {% if docsPrefix == "pe/" %}
                <div class="tbmq-faq-question">
                    <div class="tbmq-faq-question-title" onclick="toggleTbmqFaq(this)">What is TBMQ Professional Edition (PE)?</div>
                    <div class="tbmq-faq-answer">
                        <p>TBMQ is a high-performance MQTT broker developed by ThingsBoard. It enables efficient, reliable, and scalable communication between MQTT clients and IoT applications. TBMQ supports <b>MQTT 3.x</b> and <b>MQTT 5.0</b>, ensuring compatibility with a wide range of devices and industry use cases.</p>
                        <p>The broker is available in two editions: <b>Community Edition (CE)</b> and <b>Professional Edition (PE)</b>.</p>
                        <p>The <b>Professional Edition (PE)</b> is the <b>enterprise-grade</b> version of TBMQ, designed for <b>commercial IoT deployments</b> and large-scale production environments. It includes all the capabilities of the Community Edition, plus advanced features such as:</p>
                        <ul>
                            <li><b>White-label branding</b> and UI customization</li>
                            <li><b>Advanced security and access control</b></li>
                            <li><b>Enhanced monitoring, analytics, and reporting</b></li>
                            <li><b>Professional support and maintenance</b></li>
                        </ul>
                        <p>PE is built for organizations that require high throughput, operational reliability, and premium management capabilities to run mission-critical IoT infrastructures.</p>
                        <p>If this is your first experience with TBMQ, we recommend reviewing the <a href="/docs/{{docsPrefix}}mqtt-broker/getting-started-guides/what-is-thingsboard-mqtt-broker/" target="_blank">What is TBMQ</a> and <a href="/docs/{{docsPrefix}}mqtt-broker/getting-started/" target="_blank">Getting Started Guide</a> to understand its features and deployment options in detail.</p>
                    </div>
                </div>
                {% endif %}
                <div class="tbmq-faq-question">
                    <div class="tbmq-faq-question-title" onclick="toggleTbmqFaq(this)">How do I get started?</div>
                    <div class="tbmq-faq-answer">
                        <p>We recommend <a href="/docs/{{docsPrefix}}mqtt-broker/install/installation-options/" target="_blank">installing</a> TBMQ locally on your laptop or PC using <b>Docker</b> and following the <a href="/docs/{{docsPrefix}}mqtt-broker/getting-started/" target="_blank">Getting Started Guide</a>. The guide walks you through installation, configuration, and initial testing, helping you establish your first MQTT connections quickly and reliably.</p>
                    </div>
                </div>
                <div class="tbmq-faq-question">
                    <div class="tbmq-faq-question-title" onclick="toggleTbmqFaq(this)">How do I install TBMQ?</div>
                    <div class="tbmq-faq-answer">
                        <p>You can install TBMQ locally or in the cloud using <b>Docker</b>, <b>Kubernetes scripts</b>, or <b>Helm</b>. Detailed step-by-step guides are available in the <a href="/docs/{{docsPrefix}}mqtt-broker/install/installation-options/" target="_blank">Installation Guide</a>, including configuration of Kafka, Redis, and PostgreSQL dependencies.</p>
                    </div>
                </div>
                <div class="tbmq-faq-question">
                    <div class="tbmq-faq-question-title" onclick="toggleTbmqFaq(this)">How can I start TBMQ using Docker or Helm?</div>
                    <div class="tbmq-faq-answer">
                        <p>To start TBMQ with <b>Docker</b>, run the provided Docker Compose file, which launches all required services (Kafka, Redis, PostgreSQL, and the MQTT broker) in a single command.
                            For <b>Kubernetes</b>, use the official Helm chart to deploy TBMQ as a scalable, fault-tolerant cluster. The Helm chart includes configurable parameters for persistence, resource limits, and monitoring.
                            Both methods provide a quick way to get TBMQ running in minutes, whether for testing or production.</p>
                    </div>
                </div>
                <div class="tbmq-faq-question">
                    <div class="tbmq-faq-question-title" onclick="toggleTbmqFaq(this)">What are the system requirements for TBMQ?</div>
                    <div class="tbmq-faq-answer">
                        <p>TBMQ can run on modest hardware for testing or small-scale evaluation. The <b>minimum requirements</b> to start TBMQ are:</p>
                        <ul>
                            <li><b>CPU:</b> 1 core</li>
                            <li><b>Memory:</b> 2 GB RAM</li>
                        </ul>
                        <p>However, for stable performance and smoother operation in typical environments, the <b>recommended configuration</b> is:</p>
                        <ul>
                            <li><b>CPU:</b> 4 cores</li>
                            <li><b>Memory:</b> 8 GB RAM</li>
                            <li><b>Storage:</b> 50 GB of free disk space</li>
                            <li><b>Operating System:</b> Linux (x86-64 architecture)</li>
                        </ul>
                        <p>For clustered or production environments, hardware needs depend on the expected number of clients and message throughput.</p>
                        <p>High-volume setups should allocate dedicated nodes for <b>Kafka</b>, <b>Redis</b>, and <b>PostgreSQL</b> to ensure optimal scalability and reliability.</p>
                    </div>
                </div>
                <div class="tbmq-faq-question">
                    <div class="tbmq-faq-question-title" onclick="toggleTbmqFaq(this)">How can I upgrade TBMQ to a newer version?</div>
                    <div class="tbmq-faq-answer">
                        <p>Upgrading TBMQ is straightforward. <a href="/docs/{{docsPrefix}}mqtt-broker/install/upgrade-instructions/" target="_blank">The Upgrade Guide</a>
                            provides version-specific instructions and notes about compatibility changes or configuration updates introduced in each release.</p>
                    </div>
                </div>
            </div>
            <div id="tbmq-faq-cat-configuration" class="tbmq-faq-category">
                <div class="tbmq-faq-question">
                    <div class="tbmq-faq-question-title" onclick="toggleTbmqFaq(this)">How do I configure TBMQ for production use?</div>
                    <div class="tbmq-faq-answer">
                        <p>For production environments, TBMQ should be configured for performance, security, and fault tolerance. It is recommended to:</p>
                        <ul>
                            <li>Enable <b>SSL/TLS</b> encryption for MQTT and WebSocket connections.</li>
                            <li>Configure <b>authentication providers</b> for secure client validation.</li>
                            <li>Configure an appropriate number of <b>Kafka partitions</b> for each topic, tune producer and consumer parameters, and adjust <b>Redis stateful connection</b> settings to achieve optimal throughput.</li>
                            <li>Tune JVM memory and thread pool settings according to system resources.</li>
                        </ul>
                    </div>
                </div>
                <div class="tbmq-faq-question">
                    <div class="tbmq-faq-question-title" onclick="toggleTbmqFaq(this)">Can I deploy TBMQ in Kubernetes?</div>
                    <div class="tbmq-faq-answer">
                        <p>Yes. TBMQ fully supports <b>Kubernetes deployments</b> through the official <b>Helm chart</b> or k8s manifests. This approach provides easy scaling, automatic recovery, and rolling updates. You can configure node roles, persistence volumes, and monitoring integrations directly through Helm values, making it suitable for cloud or hybrid environments.</p>
                    </div>
                </div>
                <div class="tbmq-faq-question">
                    <div class="tbmq-faq-question-title" onclick="toggleTbmqFaq(this)">How do I set up clustering in TBMQ?</div>
                    <div class="tbmq-faq-answer">
                        <p>TBMQ supports <b>horizontal scaling</b> through clustering. Each node in the cluster handles a portion of MQTT clients and message flow, ensuring reliability and load balancing. Cluster coordination is achieved using <b>Kafka</b> for message routing.</p>
                        <p>To enable clustering, deploy multiple TBMQ instances connected to the same Kafka, Redis, and PostgreSQL services, and configure a unique broker ID (<code>TB_SERVICE_ID</code>) in the environment variables per node.</p>
                    </div>
                </div>
                <div class="tbmq-faq-question">
                    <div class="tbmq-faq-question-title" onclick="toggleTbmqFaq(this)">What ports does TBMQ use?</div>
                    <div class="tbmq-faq-answer">
                        <p>By default, TBMQ listens on the following ports:</p>
                        <ul>
                            <li><b>1883</b> – MQTT (plain TCP)</li>
                            <li><b>8883</b> – MQTT over SSL/TLS</li>
                            <li><b>8084</b> – MQTT over WebSocket</li>
                            <li><b>8085</b> – MQTT over Secure WebSocket (WSS)</li>
                            <li><b>8083</b> - HTTP Web UI access</li>
                        </ul>
                        <p>These ports can be modified in the TBMQ configuration file or via environment variables before startup. Make sure your firewall or Kubernetes ingress rules allow access to the selected ports.</p>
                    </div>
                </div>
                <div class="tbmq-faq-question">
                    <div class="tbmq-faq-question-title" onclick="toggleTbmqFaq(this)">How can I enable TLS/SSL for secure connections?</div>
                    <div class="tbmq-faq-answer">
                        <p>You can enable SSL/TLS by providing a valid <b>server certificate</b> and <b>private key</b> in the TBMQ configuration. TBMQ supports both server-side encryption and <b>client certificate authentication (X.509)</b> for stronger security. Certificates can be issued by a trusted CA or generated internally for testing. Once configured, restart the broker to apply the changes.</p>
                    </div>
                </div>
                <div class="tbmq-faq-question">
                    <div class="tbmq-faq-question-title" onclick="toggleTbmqFaq(this)">How can I configure authentication providers in TBMQ?</div>
                    <div class="tbmq-faq-answer">
                        <p>TBMQ uses a <b>pluggable authentication model</b>, allowing you to define how clients are authenticated. You can choose between:</p>
                        <ul>
                            <li><b>Basic authentication</b> (client ID, username, and password)</li>
                            <li><b>SSL-based authentication</b> (X.509 certificate chain)</li>
                            <li><b>JWT authentication</b> (JSON Web Tokens)</li>
                            <li><b>Enhanced authentication</b> (MQTT 5.0)</li>
                        </ul>
                        <p>Authentication rules are defined in the database and evaluated during each connection attempt.</p>
                    </div>
                </div>
                <div class="tbmq-faq-question">
                    <div class="tbmq-faq-question-title" onclick="toggleTbmqFaq(this)">Where does TBMQ store data?</div>
                    <div class="tbmq-faq-answer">
                        <p>TBMQ integrates with <a href="https://kafka.apache.org/" target="_blank">Kafka</a>, <a href="https://redis.io/" target="_blank">Redis</a>, and <a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a> to ensure reliable, high-performance data storage:</p>
                        <ul>
                            <li><b>Kafka</b> – handles unprocessed PUBLISH messages, persistent messages for Application clients, and stores client sessions and subscriptions.</li>
                            <li><b>Redis</b> – stores Device persistent messages for fast access and recovery.</li>
                            <li><b>PostgreSQL</b> – stores metadata such as user credentials, MQTT client credentials, system statistics, etc.</li>
                        </ul>
                        <p>This hybrid architecture ensures data durability, high availability, and efficient delivery across distributed systems.</p>
                    </div>
                </div>
            </div>
            <div id="tbmq-faq-cat-connectivity" class="tbmq-faq-category">
                <div class="tbmq-faq-question">
                    <div class="tbmq-faq-question-title" onclick="toggleTbmqFaq(this)">Which MQTT protocol versions are supported?</div>
                    <div class="tbmq-faq-answer">
                        <p>TBMQ fully supports <b>MQTT 3.1.1</b> and <b>MQTT 5.0</b>, ensuring compatibility with all major MQTT clients and libraries. Support for MQTT 5.0 introduces advanced features such as <b>shared subscriptions</b>, <b>user properties</b>, <b>topic aliases</b>, <b>enhanced authentication</b>, and <b>reason codes</b>, giving developers greater flexibility and control over client interactions.</p>
                    </div>
                </div>
                <div class="tbmq-faq-question">
                    <div class="tbmq-faq-question-title" onclick="toggleTbmqFaq(this)">Does TBMQ support MQTT over WebSocket?</div>
                    <div class="tbmq-faq-answer">
                        <p>Yes, TBMQ supports <b>MQTT over WebSocket</b> and <b>Secure WebSocket (WSS)</b>, allowing browser-based applications and web dashboards to publish and subscribe to topics in real time. You can enable the WebSocket endpoints by default on:</p>
                        <ul>
                            <li><b>8084</b> – MQTT over WebSocket</li>
                            <li><b>8085</b> – MQTT over Secure WebSocket (WSS)</li>
                        </ul>
                        <p>WebSocket support makes it easy to integrate MQTT communication into modern web applications and IoT portals.</p>
                    </div>
                </div>
                <div class="tbmq-faq-question">
                    <div class="tbmq-faq-question-title" onclick="toggleTbmqFaq(this)">How can I configure Keep Alive and Clean Start options?</div>
                    <div class="tbmq-faq-answer">
                        <p>TBMQ supports <b>Keep Alive</b> and <b>Clean Start</b> according to the MQTT specification.</p>
                        <ul>
                            <li><b>Keep Alive</b> defines the maximum allowed idle time between messages from the client. If no packets are sent within this interval, the broker considers the connection lost.</li>
                            <li><b>Clean Start</b> (MQTT 5.0) or <b>Clean Session</b> (MQTT 3.1.1) determines whether the broker should maintain the client’s session state after disconnect.</li>
                        </ul>
                        <p>These options can be configured on the client side. TBMQ automatically handles session persistence and message queuing based on the chosen settings, ensuring reliable reconnect behavior.</p>
                    </div>
                </div>
            </div>
            <div id="tbmq-faq-cat-usage" class="tbmq-faq-category">
                <div class="tbmq-faq-question">
                    <div class="tbmq-faq-question-title" onclick="toggleTbmqFaq(this)">What can I do with TBMQ?</div>
                    <div class="tbmq-faq-answer">
                        <p>TBMQ enables seamless communication between MQTT clients, ensuring secure and efficient message exchange. It supports advanced MQTT 5.0 features such as <b>shared subscriptions</b>, <b>enhanced authentication</b>, <b>topic aliasing</b>, and <b>flow control</b>, providing flexibility for IoT applications of any scale. TBMQ is built for performance and scalability — whether you’re running a single instance for testing or a clustered setup serving thousands of clients.</p>
                    </div>
                </div>
                <div class="tbmq-faq-question">
                    <div class="tbmq-faq-question-title" onclick="toggleTbmqFaq(this)">Where can I host TBMQ?</div>
                    <div class="tbmq-faq-answer">
                        <p>You can host TBMQ in <b>cloud environments</b>, <b>on-premises setups</b>, or <b>locally</b> on your laptop or PC. For the fastest setup, we recommend using the <a href="/docs/{{docsPrefix}}mqtt-broker/install/docker/" target="_blank">Docker installation guide</a>. If you plan to deploy TBMQ for production or cluster environments, refer to the <a href="/docs/{{docsPrefix}}mqtt-broker/install/cluster/docker-compose-setup/" target="_blank">Cluster Setup Guide</a> for step-by-step instructions on configuring multi-node deployments using Docker Compose.</p>
                    </div>
                </div>
                <div class="tbmq-faq-question">
                    <div class="tbmq-faq-question-title" onclick="toggleTbmqFaq(this)">Can I replace the default TBMQ logo in the menu?</div>
                    <div class="tbmq-faq-answer">
                        {% if docsPrefix == null %}
                        <p>The <b>Community Edition</b> of TBMQ does not include a built-in white-labeling feature. However, it is technically possible to replace the default logo by modifying the source code and rebuilding the platform. This approach requires <b>development experience</b> and <b>familiarity with the TBMQ front-end codebase</b>.</p>
                        <p>If you need an easier and fully supported way to customize the interface, consider upgrading to the <b>Professional Edition</b>. It allows you to upload your own <b>logo</b> and <b>favicon</b>, customize <b>login</b> and <b>system pages</b>, and adjust <b>colors and branding palettes</b> — all directly from the web interface, without any code changes.</p>
                        {% endif %}
                        {% if docsPrefix == "pe/" %}
                        <p>Yes. In the <b>Professional Edition</b>, all branding and visual identity settings can be configured directly from the <b>White Label</b> page in the user interface — no code changes required. You can fully adapt the platform to your company’s look and feel with just a few clicks:</p>
                        <ul>
                            <li><b>Replace</b> the default TBMQ logo and favicon with your own corporate visuals.</li>
                            <li><b>Customize</b> login, dashboard, and system pages to greet users with your brand from the first interaction.</li>
                            <li><b>Adjust</b> color palettes, accent tones, logo size, and styling options (including CSS tweaks) to match your identity.</li>
                            <li><b>Preview</b> all changes live before publishing them.</li>
                            <li><b>Configure custom domains</b> — map your own URL (for example, <code>portal.company.com</code>) so users access TBMQ through your branded domain.</li>
                        </ul>
                        <p>These tools make it easy to deliver a fully branded experience that aligns with your organization’s visual standards.</p>
                        {% endif %}
                    </div>
                </div>
            </div>
            <div id="tbmq-faq-cat-security" class="tbmq-faq-category">
                <div class="tbmq-faq-question">
                    <div class="tbmq-faq-question-title" onclick="toggleTbmqFaq(this)">What about security?</div>
                    <div class="tbmq-faq-answer">
                        <p>TBMQ ensures secure message exchange by supporting <b>MQTT over SSL/TLS encryption</b>, preventing unauthorized access and data tampering. It allows creating custom <b>authentication providers</b> for validating client credentials, and supports <b>enhanced authentication (MQTT 5.0)</b> for more flexible security models. You can integrate TBMQ with your existing certificate authority or use username/password-based authentication. These features provide a strong foundation for building secure and reliable IoT communication networks.</p>
                    </div>
                </div>
                <div class="tbmq-faq-question">
                    <div class="tbmq-faq-question-title" onclick="toggleTbmqFaq(this)">What authentication methods does TBMQ support?</div>
                    <div class="tbmq-faq-answer">
                        <p>TBMQ supports multiple authentication mechanisms to ensure secure and flexible client validation. The available methods include:</p>
                        <ul>
                            <li><b>Basic authentication</b> – verifies client ID, username, and password credentials stored in the database.</li>
                            <li><b>X.509 certificate chain authentication</b> – validates clients using SSL/TLS certificates.</li>
                            <li><b>Enhanced authentication (MQTT 5.0)</b> – supports SCRAM-based authentication flows defined by the MQTT 5.0 specification.</li>
                            <li><b>JWT authentication</b> – enables token-based authentication and integration with external identity systems via the TBMQ authentication API.</li>
                        </ul>
                        <p>These options allow you to choose the best approach depending on your deployment and security requirements.</p>
                    </div>
                </div>
                <div class="tbmq-faq-question">
                    <div class="tbmq-faq-question-title" onclick="toggleTbmqFaq(this)">How can I enable client certificate authentication (SSL)?</div>
                    <div class="tbmq-faq-answer">
                        <p>TBMQ supports <b>SSL/TLS encryption</b> and <b>client certificate authentication</b> (X.509 certificate chain). To enable this feature:</p>
                        <ol>
                            <li>Provide a valid <b>server certificate</b> and <b>private key</b> in the configuration file.</li>
                            <li>Enable the <b>secure MQTT port</b> (default: <code>8883</code>).</li>
                            <li>Configure TBMQ to verify client certificates for mutual authentication using X.509 Certificate Chain credentials.</li>
                        </ol>
                        <p>This ensures that both the client and server validate each other’s identity before establishing a connection, adding a strong layer of security for IoT and enterprise deployments.</p>
                    </div>
                </div>
                <div class="tbmq-faq-question">
                    <div class="tbmq-faq-question-title" onclick="toggleTbmqFaq(this)">Does TBMQ support JWT authentication?</div>
                    <div class="tbmq-faq-answer">
                        <p>Yes, TBMQ supports <b>JWT (JSON Web Token)</b>-based authentication through authentication providers. This approach enables clients to connect securely using signed tokens instead of static credentials. JWT support is ideal for dynamic or short-lived sessions where credentials are issued by an external identity service.</p>
                    </div>
                </div>
                <div class="tbmq-faq-question">
                    <div class="tbmq-faq-question-title" onclick="toggleTbmqFaq(this)">How are unauthorized client connections handled?</div>
                    <div class="tbmq-faq-answer">
                        <p>TBMQ automatically detects and logs unauthorized connection attempts. When a client fails authentication, the broker records details such as <b>client ID</b>, <b>IP address</b>, <b>username</b>, and <b>TLS status</b>. This data can be reviewed in the <b>Unauthorized Clients</b> dashboard or queried via API for further analysis.</p>
                    </div>
                </div>
                <div class="tbmq-faq-question">
                    <div class="tbmq-faq-question-title" onclick="toggleTbmqFaq(this)">How can I monitor and block unauthorized clients?</div>
                    <div class="tbmq-faq-answer">
                        <p>TBMQ provides tools to monitor unauthorized clients directly through the web interface or REST API. Administrators can filter, inspect, and delete recorded entries. You can also apply blocking rules to reject future connection attempts from known malicious IP addresses or repeated offenders. This feature helps maintain system integrity and visibility into potential security risks.</p>
                    </div>
                </div>
            </div>
            <div id="tbmq-faq-cat-subscriptions" class="tbmq-faq-category">
                <div class="tbmq-faq-question">
                    <div class="tbmq-faq-question-title" onclick="toggleTbmqFaq(this)">How does TBMQ manage subscriptions?</div>
                    <div class="tbmq-faq-answer">
                        <p>TBMQ manages client subscriptions using a <b>Trie-based data structure</b>, which provides fast and memory-efficient topic lookups. All client subscriptions are consumed from a Kafka topic and stored in memory within the Trie, where each node represents a level in the topic filter hierarchy.</p>
                        <p>The Trie structure enables <b>prefix-based matching</b>, allowing TBMQ to quickly identify all clients subscribed to topics that match a published message. When a <b>PUBLISH</b> message is read from Kafka, TBMQ uses the Trie to determine the set of clients with relevant subscriptions and forwards the message to each of them.</p>
                        <p>This approach ensures <b>high-performance message routing</b>, as the lookup time depends on the length of the topic rather than the total number of subscriptions. It scales efficiently even in large environments with <b>millions of active subscriptions</b>. While this method slightly increases memory usage due to in-memory storage of the Trie, it provides predictable and low-latency message delivery.</p>
                    </div>
                </div>
                <div class="tbmq-faq-question">
                    <div class="tbmq-faq-question-title" onclick="toggleTbmqFaq(this)">Does TBMQ support shared subscriptions?</div>
                    <div class="tbmq-faq-answer">
                        <p>Yes, TBMQ supports <b>shared subscriptions</b> as defined by the MQTT 5.0 specification. Shared subscriptions allow multiple clients to consume messages from the same topic group in a <b>load-balanced</b> manner. This feature is especially useful for scaling message processing horizontally — for example, distributing telemetry data processing among several backend services.</p>
                    </div>
                </div>
                <div class="tbmq-faq-question">
                    <div class="tbmq-faq-question-title" onclick="toggleTbmqFaq(this)">How are retained messages handled in TBMQ?</div>
                    <div class="tbmq-faq-answer">
                        <p>TBMQ supports <b>retained messages</b>, which ensure that newly connected subscribers immediately receive the most recent message published on a topic. When a client publishes a retained message, TBMQ stores it and delivers it automatically to any future subscribers of that topic. If a retained message with an empty payload is received, TBMQ clears the retained message for that topic, following the MQTT specification.</p>
                    </div>
                </div>
                <div class="tbmq-faq-question">
                    <div class="tbmq-faq-question-title" onclick="toggleTbmqFaq(this)">What is the difference between persistent and non-persistent sessions?</div>
                    <div class="tbmq-faq-answer">
                        <p>A <b>persistent session</b> stores the client’s subscriptions and undelivered QoS 1/2 messages, allowing message delivery to resume after reconnecting. A <b>non-persistent session</b> (Clean Start = true) is temporary — all subscriptions and queued messages are discarded when the client disconnects. TBMQ fully supports both modes and automatically handles session recovery for persistent clients after reconnecting.</p>
                    </div>
                </div>
                <div class="tbmq-faq-question">
                    <div class="tbmq-faq-question-title" onclick="toggleTbmqFaq(this)">How does TBMQ handle Last Will and Testament (LWT)?</div>
                    <div class="tbmq-faq-answer">
                        <p>TBMQ follows the MQTT standard for <b>Last Will and Testament (LWT)</b> messages. When a client connects, it can specify an LWT message that the broker will publish automatically if the client disconnects unexpectedly. This feature helps notify other clients or monitoring systems about abnormal disconnections, improving visibility and reliability in IoT systems.</p>
                    </div>
                </div>
                <div class="tbmq-faq-question">
                    <div class="tbmq-faq-question-title" onclick="toggleTbmqFaq(this)">How can I monitor the number of messages published and received?</div>
                    <div class="tbmq-faq-answer">
                        <p>TBMQ provides detailed metrics on message throughput, including the number of <b>published</b>, <b>received</b>, and <b>dropped</b> messages. These statistics are available through the built-in <b>monitoring dashboard</b>. Administrators can use these insights to track broker performance and optimize system configuration.</p>
                    </div>
                </div>
            </div>
            <div id="tbmq-faq-cat-performance" class="tbmq-faq-category">
                <div class="tbmq-faq-question">
                    <div class="tbmq-faq-question-title" onclick="toggleTbmqFaq(this)">How many clients and messages per second can TBMQ support?</div>
                    <div class="tbmq-faq-answer">
                        <p>TBMQ offers <b>horizontal scalability</b>, meaning it can grow seamlessly with your workload. Each broker node in a cluster handles a portion of the load, ensuring balanced message processing and uninterrupted performance. Actual throughput depends on hardware, configuration, and message characteristics (size, QoS level, persistence). Optimized setups can handle <b>millions of simultaneous client connections</b> and <b>millions of messages per second</b>. For detailed metrics and benchmarks, visit the <a href="/docs/{{docsPrefix}}mqtt-broker/reference/100m-connections-performance-test/" target="_blank">Performance Test Page</a>.</p>
                    </div>
                </div>
                <div class="tbmq-faq-question">
                    <div class="tbmq-faq-question-title" onclick="toggleTbmqFaq(this)">How can I monitor TBMQ performance?</div>
                    <div class="tbmq-faq-answer">
                        <p>TBMQ exposes detailed performance metrics through its <b>monitoring dashboard</b> and <b>Prometheus endpoint</b>. You can track key indicators such as:</p>
                        <ul>
                            <li>Number of connected clients</li>
                            <li>Message publish and receive rates</li>
                            <li>Queue sizes and processing latency</li>
                            <li>Redis and Kafka performance</li>
                        </ul>
                        <p>These metrics can be visualized in <b>Grafana</b> or other observability platforms to gain real-time insights into system health and throughput trends.</p>
                    </div>
                </div>
                <div class="tbmq-faq-question">
                    <div class="tbmq-faq-question-title" onclick="toggleTbmqFaq(this)">How does TBMQ handle backpressure when clients are slow?</div>
                    <div class="tbmq-faq-answer">
                        <p>TBMQ implements an internal <b>backpressure management mechanism</b> to maintain stable performance when clients are unable to consume messages quickly. When a client’s network channel becomes non-writable, TBMQ temporarily pauses message delivery for that client. Once the channel becomes writable again, queued messages are delivered in the correct order. This design prevents slow consumers from impacting other clients, ensuring consistent throughput across the cluster.</p>
                    </div>
                </div>
            </div>
            <div id="tbmq-faq-cat-licensing" class="tbmq-faq-category">
                <div class="tbmq-faq-question">
                    <div class="tbmq-faq-question-title" onclick="toggleTbmqFaq(this)">What license type does TBMQ use?</div>
                    <div class="tbmq-faq-answer">
                        {% if docsPrefix == null %}
                        <p>TBMQ CE is distributed under the <b>Apache 2.0 License</b>, allowing both personal and commercial usage. You can freely deploy, modify, and distribute it in any environment without additional licensing costs.</p>
                        {% endif %}
                        {% if docsPrefix == "pe/" %}
                        <p>TBMQ PE is a commercially licensed version of TBMQ available under a subscription-based license. It includes additional enterprise-grade features, support services, and maintenance. Use of the PE version requires a valid license agreement with ThingsBoard, Inc.</p>
                        {% endif %}
                    </div>
                </div>
                <div class="tbmq-faq-question">
                    <div class="tbmq-faq-question-title" onclick="toggleTbmqFaq(this)">How to get support?</div>
                    <div class="tbmq-faq-answer">
                        <p>You can access community-driven troubleshooting guides and documentation, or <a href="/docs/{{docsPrefix}}mqtt-broker/help" target="_blank">contact us</a> directly for technical assistance. Learn more about <a href="/services/" target="_blank">services</a> we provide.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>