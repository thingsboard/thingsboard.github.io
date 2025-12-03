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
            <div class="edge-faq-tab" onclick="switchEdgeFaqTab('installation')">Installation & Setup</div>
            <div class="edge-faq-tab" onclick="switchEdgeFaqTab('features')">Features & Capabilities</div>
            <div class="edge-faq-tab" onclick="switchEdgeFaqTab('support')">Support</div>
        </div>
        <div class="edge-faq-answers">
            <div id="edge-faq-cat-general" class="edge-faq-category active">
                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">What is ThingsBoard Edge?</div>
                    <div class="edge-faq-answer">
                        <p>ThingsBoard Edge is a solution that brings data processing and analytics capabilities closer to the data source. It runs on edge devices and gateways, reducing latency and bandwidth usage while maintaining connectivity with the central ThingsBoard server.</p>
                    </div>
                </div>
                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">I can deploy ThingsBoard Server on-site. Why should I deploy ThingsBoard Edge instead?</div>
                    <div class="edge-faq-answer">
                        <p>Server is designed for centralized deployment and requires robust infrastructure. Edge is lightweight, runs on minimal hardware (like Raspberry Pi), and is purpose-built for distributed locations.</p>
                        <p>Use Edge when you have multiple sites that need local processing with automatic sync to a central Server. Server is your central hub; Edge extends that capability to remote sites that need local processing but don't need the full server infrastructure.</p>
                    </div>
                </div>
                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">What's the difference between Community Edition and Professional Edition?</div>
                    <div class="edge-faq-answer">
                        <p>Community Edition provides core edge computing features and is suitable for development and small deployments. Professional Edition includes:</p>
                        <ul>
                            <li>White-labeling capabilities</li>
                            <li>Advanced RBAC (Role-Based Access Control)</li>
                            <li>Platform integrations</li>
                            <li>Custom translation support</li>
                            <li>Priority support and SLA options</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="edge-faq-cat-installation" class="edge-faq-category">
                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">How do I install ThingsBoard Edge?</div>
                    <div class="edge-faq-answer">
                        <p>You can install ThingsBoard Edge using several methods:</p>
                        <ul>
                            <li>Docker installation (recommended for quick setup)</li>
                            <li>Package installation (Ubuntu/CentOS)</li>
                            <li>Building from source</li>
                        </ul>
                        <p>See the <a href="/docs/edge/getting-started-guides/what-is-edge/">installation guide</a> for detailed instructions.</p>
                    </div>
                </div>
                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">What are the system requirements?</div>
                    <div class="edge-faq-answer">
                        <p>Minimum system requirements:</p>
                        <ul>
                            <li>RAM: 1GB minimum, 2GB recommended</li>
                            <li>Storage: 10GB minimum</li>
                            <li>Java: OpenJDK 11 or higher</li>
                            <li>Network: Stable internet connection for synchronization</li>
                        </ul>
                    </div>
                </div>
                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">Does Edge require constant connection to ThingsBoard Server?</div>
                    <div class="edge-faq-answer">
                        <p>No. ThingsBoard Edge can operate autonomously during network outages. It processes data locally and stores it until connectivity is restored, at which point it automatically synchronizes with the ThingsBoard server.</p>
                    </div>
                </div>
            </div>
            <div id="edge-faq-cat-features" class="edge-faq-category">
                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">What protocols does Edge support?</div>
                    <div class="edge-faq-answer">
                        <p>ThingsBoard Edge supports the following protocols:</p>
                        <ul>
                            <li>MQTT</li>
                            <li>CoAP</li>
                            <li>HTTP</li>
                            <li>LwM2M</li>
                        </ul>
                    </div>
                </div>
                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">What happens when Edge loses connection to the server?</div>
                    <div class="edge-faq-answer">
                        <p>ThingsBoard Edge continues to function during network outages. It processes data locally, executes rule chains, and stores data. Once connectivity is restored, all collected data and events are automatically synchronized with the ThingsBoard server.</p>
                    </div>
                </div>
                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">How long can Edge store data locally?</div>
                    <div class="edge-faq-answer">
                        <p>The duration depends on your storage capacity and data volume. ThingsBoard Edge stores data in a local database and can retain information until connectivity is restored or storage limits are reached. You can configure data retention policies based on your requirements.</p>
                    </div>
                </div>
            </div>
            <div id="edge-faq-cat-support" class="edge-faq-category">
                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">Where can I get support for Edge CE?</div>
                    <div class="edge-faq-answer">
                        <p>Support options for ThingsBoard Edge Community Edition:</p>
                        <ul>
                            <li>Community forum: <a href="https://groups.google.com/forum/#!forum/thingsboard" target="_blank">ThingsBoard Community</a></li>
                            <li>Documentation: <a href="/docs/edge/" target="_blank">Edge Documentation</a></li>
                            <li>GitHub: <a href="https://github.com/thingsboard/thingsboard-edge" target="_blank">Report issues</a></li>
                            <li>Stack Overflow: Questions tagged with <code>thingsboard</code></li>
                        </ul>
                    </div>
                </div>
                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">What license does Edge CE use?</div>
                    <div class="edge-faq-answer">
                        <p>ThingsBoard Edge Community Edition is distributed under Apache License 2.0, which allows you to use, modify, and distribute the software freely for both commercial and non-commercial purposes.</p>
                    </div>
                </div>
                <div class="edge-faq-question">
                    <div class="edge-faq-question-title" onclick="toggleEdgeFaq(this)">Can I use Edge CE for commercial projects?</div>
                    <div class="edge-faq-answer">
                        <p>Yes, ThingsBoard Edge Community Edition can be used for commercial projects under the Apache License 2.0. However, for production deployments requiring additional features, SLA guarantees, and professional support, we recommend considering Professional Edition.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>