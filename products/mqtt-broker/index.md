---
layout: mqtt-broker
title: TBMQ - Open Source MQTT Broker - Scalable IoT Messaging
description: Deliver 3M+ MQTT messages/sec with TBMQ — a fault-tolerant open-source MQTT broker with clustering and message durability.
---

<section id="top-features">
    <main>
        <h2 class="title">Core strengths & MQTT server capabilities</h2>
        <div id="cards">
            <div class="col-lg-6">
                <div class="block">
                    <img src="/images/mqtt-broker/product/scalability.svg" alt="Scalability">
                    <div>
                        <h3 class="title">Scalability</h3>
                        <p>Scale horizontally to manage more than <a target="_blank" href="/docs/mqtt-broker/reference/100m-connections-performance-test/">100M</a> MQTT connections on a single cluster</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="block">
                    <img src="/images/mqtt-broker/product/performance.svg" alt="Performance">
                    <div>
                        <h3 class="title">Performance</h3>
                        <p>Process <a target="_blank" href="/docs/mqtt-broker/reference/3m-throughput-single-node-performance-test/">millions</a> of messages per second with 1 TBMQ server and single-digit latency</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="block">
                    <img src="/images/mqtt-broker/product/durability.svg" alt="Durability">
                    <div>
                        <h3 class="title">Durability</h3>
                        <p>Guarantee the persistence and replication of your data to ensure it's never lost</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="block">
                    <img src="/images/mqtt-broker/product/security.svg" alt="Fault tolerance">
                    <div>
                        <h3 class="title">Fault tolerance</h3>
                        <p>Prevent single point of failure with masterless nodes in the cluster</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="block">
                    <img src="/images/mqtt-broker/product/cloud-native.svg" alt="Cloud-Native and K8s-Compliant">
                    <div>
                        <h3 class="title">Cloud-Native and K8s-Compliant</h3>
                        <p>Deploy in cloud or on-premise using K8s scripts with ease</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="block">
                    <img src="/images/mqtt-broker/product/mqtt-version-compatibility.svg" alt="MQTT version compatibility">
                    <div>
                        <h3 class="title">MQTT version compatibility</h3>
                        <p>MQTT 3.x and 5.0 compatible for a seamless and secure connection experience</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</section>

<section id="scenarios">
    <main>
        <div id="background">
            <div class="main1"></div>
        </div>
        <div class="block scenarios-header">
            <div class="scenarios-title">
                <h2>MQTT broker for real-life IoT scenarios</h2>
            </div>
            <div class="scenarios-details">
                <p>Utilize diverse communication patterns effectively, ensuring comprehensive coverage of your use cases. TBMQ places particular emphasis on mastering fan-in, fan-out, and point-to-point (p2p) messaging.</p>
            </div>
        </div>
        <div class="block">
            <div class="description">
                <div class="scenario-title">
                    <h3 class="item-heading"><a target="_blank" href="/docs/mqtt-broker/reference/100m-connections-performance-test/">Fan-in</a><p>Many-to-one messaging using MQTT wildcards.</p></h3>
                </div>
                <div>
                    <span>Many-to-one communication pattern. Many devices generate a large volume of messages consumed by specific applications. They must be persistent clients with QoS levels set to 1 or 2, capable of retaining all the data even when they're temporarily offline due to restarts or upgrades.</span>
                </div>
            </div>            
            <div class="image-container">
                <img src="/images/mqtt-broker/product/fan-in.svg" alt="Fan in" loading="lazy">
            </div>
        </div>
        <div class="block">
            <div class="image-container reverse-img">
                <img src="/images/mqtt-broker/product/fan-out.svg" alt="Fan out" loading="lazy">
            </div>            
            <div class="description">
                <div class="scenario-title">
                    <h3 class="item-heading"><a target="_blank" href="/docs/mqtt-broker/reference/3m-throughput-single-node-performance-test/">Fan-out</a><p>Broadcast MQTT topics.</p></h3>
                </div>
                <div>
                    <span>This scenario facilitates one-to-many messaging. It involves numerous devices subscribing to specific updates or notifications that must be delivered. This leads to a few incoming requests that cause a high volume of outgoing data.</span>
                </div>
            </div>
        </div>
        <div class="block">
            <div class="description">
                <div class="scenario-title">
                    <h3 class="item-heading"><a target="_blank" href="/docs/mqtt-broker/reference/1m-throughput-p2p-performance-test/">Point-to-point</a><p>Targeted MQTT topic communication.</p></h3>
                </div>
                <div>
                    <span>A targeted messaging pattern, primarily used for one-to-one communication. Achieved through uniquely defined topics, p2p is ideal for use cases such as private messaging or command-based interactions. Persistent clients with QoS levels set to 1 or 2 are often utilized to ensure reliable message delivery, even during temporary disconnections or client downtime.</span>
                </div>
            </div>            
            <div class="image-container">
                <img src="/images/mqtt-broker/product/p2p.svg" alt="Point to point" loading="lazy">
            </div>
        </div>
    </main>
</section>

<section id="installation-options">
    <main>
        <div id="background">
            <div class="main2"></div>
        </div>
        <h2>TBMQ management & MQTT protocol</h2>
        <div class="row">
            <div class="col-lg-6">
                <div class="block">
                    <h3>Diverse installation options</h3>
                    <p>Select the perfect fit for your infrastructure with our Docker-based or K8s-based deployments, crafted for seamless integration in both on-premise and cloud environments.</p>
                    <div class="installation-options-buttons">
                        <a target="_blank" href="/docs/mqtt-broker/install/installation-options/" class="button arrow-top-right">Install TBMQ CE</a>
                        <a target="_blank" href="/docs/pe/mqtt-broker/install/installation-options/" class="button arrow-top-right">Install TBMQ PE</a>
                    </div>                    
                </div>
            </div>
            <div class="col-lg-6 installation-options-img">
                <div class="options">
                    <img src="/images/mqtt-broker/product/docker.webp" alt="Docker">
                    <img src="/images/mqtt-broker/product/aws.webp" alt="Aws">
                    <img src="/images/mqtt-broker/product/azure.webp" alt="Azure">
                    <img src="/images/mqtt-broker/product/google-cloud.webp" alt="Google Cloud">
                    <img src="/images/mqtt-broker/product/helm-charts.webp" alt="Helm charts">
                </div>
            </div>
        </div>
    </main>
</section>

<section id="middle-features">
    <main>
        <h3 class="middle-features-title">MQTT client management & connectivity</h3>
        <div class="row">
            <div class="col-lg-6">
                <div class="block">
                    <h4>Administer client sessions</h4>
                    <p>Gain full visibility over your IoT ecosystem with the user-friendly session management dashboard, enabling you to monitor vital session attributes. Seamlessly administer your device subscriptions for efficient data communication.</p>
                    <a class="read-more-button" href="/docs/mqtt-broker/user-guide/ui/sessions/" target="_blank">TBMQ CE<img class="arrow first" src="/images/pe/read-more-arrow.svg" alt="arrow first"><img class="arrow second" src="/images/pe/read-more-arrow.svg" alt="arrow second"><img class="arrow third" src="/images/pe/read-more-arrow.svg" alt="arrow third"></a>
                    <a class="read-more-button" style="margin-left: 60px;" href="/docs/pe/mqtt-broker/user-guide/ui/sessions/" target="_blank">TBMQ PE<img class="arrow first" src="/images/pe/read-more-arrow.svg" alt="arrow first"><img class="arrow second" src="/images/pe/read-more-arrow.svg" alt="arrow second"><img class="arrow third" src="/images/pe/read-more-arrow.svg" alt="arrow third"></a>
                </div>
            </div>
            <div class="col-lg-6 image-container">
                <div class="block">
                    <img src="/images/mqtt-broker/product/administer-client-session.webp" alt="Administer client sessions" loading="lazy">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div class="block">
                    <h4>Administer client subscriptions</h4>
                    <p>Efficiently manage subscriptions with a powerful and intuitive interface, ensuring optimal client communication and data flow across your IoT network.</p>
                    <a class="read-more-button" href="/docs/mqtt-broker/user-guide/ui/subscriptions/" target="_blank">TBMQ CE<img class="arrow first" src="/images/pe/read-more-arrow.svg" alt="arrow first"><img class="arrow second" src="/images/pe/read-more-arrow.svg" alt="arrow second"><img class="arrow third" src="/images/pe/read-more-arrow.svg" alt="arrow third"></a>
                    <a class="read-more-button" style="margin-left: 60px;" href="/docs/pe/mqtt-broker/user-guide/ui/subscriptions/" target="_blank">TBMQ PE<img class="arrow first" src="/images/pe/read-more-arrow.svg" alt="arrow first"><img class="arrow second" src="/images/pe/read-more-arrow.svg" alt="arrow second"><img class="arrow third" src="/images/pe/read-more-arrow.svg" alt="arrow third"></a>
                </div>
            </div>
            <div class="col-lg-6 image-container">
                <div class="block">
                    <img src="/images/mqtt-broker/product/administer-client-subscriptions.webp" alt="Administer client subscriptions" loading="lazy">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div class="block">
                    <h4>MQTT client credentials management</h4>
                    <p>Strengthen your IoT security using the MQTT client credentials management system, crafted to handle both Basic and X.509 Certificate Chain authentication options effortlessly.</p>
                    <a class="read-more-button" href="/docs/mqtt-broker/user-guide/ui/mqtt-client-credentials/" target="_blank">TBMQ CE<img class="arrow first" src="/images/pe/read-more-arrow.svg" alt="arrow first"><img class="arrow second" src="/images/pe/read-more-arrow.svg" alt="arrow second"><img class="arrow third" src="/images/pe/read-more-arrow.svg" alt="arrow third"></a>
                    <a class="read-more-button" style="margin-left: 60px;" href="/docs/pe/mqtt-broker/user-guide/ui/mqtt-client-credentials/" target="_blank">TBMQ PE<img class="arrow first" src="/images/pe/read-more-arrow.svg" alt="arrow first"><img class="arrow second" src="/images/pe/read-more-arrow.svg" alt="arrow second"><img class="arrow third" src="/images/pe/read-more-arrow.svg" alt="arrow third"></a>
                </div>
            </div>
            <div class="col-lg-6 image-container">
                <div class="block">
                    <img src="/images/mqtt-broker/product/credentials-management.webp" alt="MQTT client credentials management" loading="lazy">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div class="block">
                    <h3>MQTT websocket connectivity</h3>
                    <p>Interact with your IoT devices in real-time through the WebSocket client, offering a streamlined and responsive interface for device messaging and monitoring.</p>
                    <a class="read-more-button" href="/docs/mqtt-broker/user-guide/ui/websocket-client/" target="_blank">TBMQ CE<img class="arrow first" src="/images/pe/read-more-arrow.svg" alt="arrow first"><img class="arrow second" src="/images/pe/read-more-arrow.svg" alt="arrow second"><img class="arrow third" src="/images/pe/read-more-arrow.svg" alt="arrow third"></a>
                    <a class="read-more-button" style="margin-left: 60px;" href="/docs/pe/mqtt-broker/user-guide/ui/websocket-client/" target="_blank">TBMQ PE<img class="arrow first" src="/images/pe/read-more-arrow.svg" alt="arrow first"><img class="arrow second" src="/images/pe/read-more-arrow.svg" alt="arrow second"><img class="arrow third" src="/images/pe/read-more-arrow.svg" alt="arrow third"></a>
                </div>
            </div>
            <div class="col-lg-6 image-container">
                <div class="block">
                    <img src="/images/mqtt-broker/product/websocket-client-connectivity.webp" alt="WebSocket client connectivity" loading="lazy">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div class="block">
                    <h3>Real-time MQTT monitoring</h3>
                    <p>Keep a pulse on your IoT environment by tracking key metrics in real-time, ensuring your network's health and performance are always at their peak.</p>
                    <a class="read-more-button" href="/docs/mqtt-broker/user-guide/ui/monitoring/" target="_blank">TBMQ CE<img class="arrow first" src="/images/pe/read-more-arrow.svg" alt="arrow first"><img class="arrow second" src="/images/pe/read-more-arrow.svg" alt="arrow second"><img class="arrow third" src="/images/pe/read-more-arrow.svg" alt="arrow third"></a>
                    <a class="read-more-button" style="margin-left: 60px;" href="/docs/pe/mqtt-broker/user-guide/ui/monitoring/" target="_blank">TBMQ PE<img class="arrow first" src="/images/pe/read-more-arrow.svg" alt="arrow first"><img class="arrow second" src="/images/pe/read-more-arrow.svg" alt="arrow second"><img class="arrow third" src="/images/pe/read-more-arrow.svg" alt="arrow third"></a>
                </div>
            </div>
            <div class="col-lg-6 image-container">
                <div class="block">
                    <img src="/images/mqtt-broker/product/monitor-key-metrics.webp" alt="Monitor key metrics" loading="lazy">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div class="block">
                    <h3>External system integrations</h3>
                    <p>Enable smooth data transmission between IoT devices, the broker, and external platforms with a reliable and scalable solution — all without impacting core broker performance.</p>
                    <a class="read-more-button" href="/docs/mqtt-broker/integrations/" target="_blank">TBMQ CE<img class="arrow first" src="/images/pe/read-more-arrow.svg" alt="arrow first"><img class="arrow second" src="/images/pe/read-more-arrow.svg" alt="arrow second"><img class="arrow third" src="/images/pe/read-more-arrow.svg" alt="arrow third"></a>
                    <a class="read-more-button" style="margin-left: 60px;" href="/docs/pe/mqtt-broker/integrations/" target="_blank">TBMQ PE<img class="arrow first" src="/images/pe/read-more-arrow.svg" alt="arrow first"><img class="arrow second" src="/images/pe/read-more-arrow.svg" alt="arrow second"><img class="arrow third" src="/images/pe/read-more-arrow.svg" alt="arrow third"></a>
                </div>
            </div>
            <div class="col-lg-6 image-container">
                <div class="block">
                    <img src="/images/mqtt-broker/product/integrations.webp" alt="Integrations" loading="lazy">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div class="block">
                    <h3>White labeling</h3>
                    <span class="pe-only-banner">PE only</span>
                    <p>Rebrand the TBMQ broker web interface with your company or product logo and color scheme in 2 minutes. No coding or service restart required.</p>
                    <a class="read-more-button" href="/docs/pe/mqtt-broker/white-labeling/" target="_blank">Read more<img class="arrow first" src="/images/pe/read-more-arrow.svg" alt="arrow first"><img class="arrow second" src="/images/pe/read-more-arrow.svg" alt="arrow second"><img class="arrow third" src="/images/pe/read-more-arrow.svg" alt="arrow third"></a>
                </div>
            </div>
            <div class="col-lg-6 image-container">
                <div class="block">
                    <img class="shadow" src="/images/mqtt-broker/product/white-labeling.webp" alt="White labeling" loading="lazy">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div class="block">
                    <h3>RBAC</h3>
                    <span class="pe-only-banner">PE only</span>
                    <p>Advanced user access control with role-based permissions. Manage broker operations with two predefined roles: Admin for full control, and Viewer for read-only access.</p>
                    <a class="read-more-button" href="/docs/pe/mqtt-broker/security/rbac/" target="_blank">Read more<img class="arrow first" src="/images/pe/read-more-arrow.svg" alt="arrow first"><img class="arrow second" src="/images/pe/read-more-arrow.svg" alt="arrow second"><img class="arrow third" src="/images/pe/read-more-arrow.svg" alt="arrow third"></a>
                </div>
            </div>
            <div class="col-lg-6 image-container">
                <div class="block">
                    <img class="shadow" src="/images/mqtt-broker/product/scheme.webp" alt="RBAC" loading="lazy">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div class="block">
                    <h3>Single sign-on</h3>
                    <span class="pe-only-banner">PE only</span>
                    <p> Single Sign-On (SSO) integration for simplified and secure access. Seamlessly authenticate users through your organization’s identity provider, reducing password management and strengthening security.</p>
                    <a class="read-more-button" href="/docs/pe/mqtt-broker/security/oauth-2-support/" target="_blank">Read more<img class="arrow first" src="/images/pe/read-more-arrow.svg" alt="arrow first"><img class="arrow second" src="/images/pe/read-more-arrow.svg" alt="arrow second"><img class="arrow third" src="/images/pe/read-more-arrow.svg" alt="arrow third"></a>
                </div>
            </div>
            <div class="col-lg-6 image-container">
                <div class="block">
                    <img class="shadow" src="/images/mqtt-broker/product/login.webp" alt="Single sign-on" loading="lazy">
                </div>
            </div>
        </div>
    </main>
</section>

<section id="comparison-features">
    <main>
        <div id="background">
            <div class="main5"></div>
        </div>
        <section class="comparison-table">
            <h2>TBMQ feature comparison</h2>
            <div class="header">
              <p>Features</p>
              <p><span>Community Edition</span><span>CE</span></p>
              <p><span>Professional Edition</span><span>PE</span></p>
            </div>
            <div class="block">
              <div class="comparison-row">
                <p>Broker Core</p>
              </div>
              <a href="/docs/mqtt-broker/user-guide/mqtt-protocol/#differences-between-mqtt-311-and-mqtt-50" target="_blank" class="comparison-row">
                <p>MQTT 3.1 / 3.1.1 support</p>
                <div><img src="/images/pe/blue-mark.svg" alt="Blue checkmark"></div>
                <div><img src="/images/pe/green-mark.svg" alt="Green checkmark"></div>
              </a>
              <a href="/docs/mqtt-broker/user-guide/mqtt-protocol/#new-features-in-mqtt-50" target="_blank" class="comparison-row">
                <p>MQTT 5.0 support</p>
                <div><img src="/images/pe/blue-mark.svg" alt="Blue checkmark"></div>
                <div><img src="/images/pe/green-mark.svg" alt="Green checkmark"></div>
              </a>
              <a href="/docs/mqtt-broker/architecture/" target="_blank" class="comparison-row">
                <p>Scalability (Clustering)</p>
                <div><img src="/images/pe/blue-mark.svg" alt="Blue checkmark"></div>
                <div><img src="/images/pe/green-mark.svg" alt="Green checkmark"></div>
              </a>
              <a href="/docs/mqtt-broker/user-guide/mqtt-over-ws/" target="_blank" class="comparison-row">
                <p>MQTT over WebSocket</p>
                <div><img src="/images/pe/blue-mark.svg" alt="Blue checkmark"></div>
                <div><img src="/images/pe/green-mark.svg" alt="Green checkmark"></div>
              </a>
              <a href="/docs/mqtt-broker/user-guide/ui/websocket-client/" target="_blank" class="comparison-row">
                <p>WebSocket client</p>
                <div><img src="/images/pe/blue-mark.svg" alt="Blue checkmark"></div>
                <div><img src="/images/pe/green-mark.svg" alt="Green checkmark"></div>
              </a>
              <a href="/docs/mqtt-broker/user-guide/backpressure/" target="_blank" class="comparison-row">
                <p>Backpressure support</p>
                <div><img src="/images/pe/blue-mark.svg" alt="Blue checkmark"></div>
                <div><img src="/images/pe/green-mark.svg" alt="Green checkmark"></div>
              </a>
            </div>
            <div class="block">
              <div class="comparison-row">
                <p>Security & Admin</p>
              </div>
              <a href="/docs/mqtt-broker/security/authentication/basic/" target="_blank" class="comparison-row">
                <p>Basic authentication</p>
                <div><img src="/images/pe/blue-mark.svg" alt="Blue checkmark"></div>
                <div><img src="/images/pe/green-mark.svg" alt="Green checkmark"></div>
              </a>
              <a href="/docs/mqtt-broker/security/authentication/x509/" target="_blank" class="comparison-row">
                <p>X.509 certificate chain authentication</p>
                <div><img src="/images/pe/blue-mark.svg" alt="Blue checkmark"></div>
                <div><img src="/images/pe/green-mark.svg" alt="Green checkmark"></div>
              </a>
              <a href="/docs/mqtt-broker/security/authentication/jwt/" target="_blank" class="comparison-row">
                <p>JWT authentication</p>
                <div><img src="/images/pe/blue-mark.svg" alt="Blue checkmark"></div>
                <div><img src="/images/pe/green-mark.svg" alt="Green checkmark"></div>
              </a>
              <a href="/docs/mqtt-broker/security/overview/#authorization" target="_blank" class="comparison-row">
                <p>Access control list (ACL)</p>
                <div><img src="/images/pe/blue-mark.svg" alt="Blue checkmark"></div>
                <div><img src="/images/pe/green-mark.svg" alt="Green checkmark"></div>
              </a>
              <a href="/docs/pe/mqtt-broker/security/oauth-2-support/" target="_blank" class="comparison-row">
                <p>Single Sign-On (SSO) / OAuth2</p>
                <div class="hidden-space">&nbsp;</div>
                <div><img src="/images/pe/green-mark.svg" alt="Green checkmark"></div>
              </a>
              <a href="/docs/pe/mqtt-broker/security/rbac/" target="_blank" class="comparison-row">
                <p>Role-Based Access Control (RBAC)</p>
                <div class="hidden-space">&nbsp;</div>
                <div><img src="/images/pe/green-mark.svg" alt="Green checkmark"></div>
              </a>
              <div class="comparison-row">
                <p>Audit logs</p>
                <div class="hidden-space">&nbsp;</div>
                <p>Coming soon</p>
              </div>
            </div>
            <div class="block">
              <div class="comparison-row">
                <p>Monitoring & Management</p>
              </div>
              <a href="/docs/mqtt-broker/user-guide/ui/monitoring/" target="_blank" class="comparison-row">
                <p>MQTT sessions and subscriptions management</p>
                <div><img src="/images/pe/blue-mark.svg" alt="Blue checkmark"></div>
                <div><img src="/images/pe/green-mark.svg" alt="Green checkmark"></div>
              </a>
              <a href="/docs/mqtt-broker/user-guide/ui/monitoring/" target="_blank" class="comparison-row">
                <p>Metrics monitoring</p>
                <div><img src="/images/pe/blue-mark.svg" alt="Blue checkmark"></div>
                <div><img src="/images/pe/green-mark.svg" alt="Green checkmark"></div>
              </a>
              <a href="/docs/mqtt-broker/user-guide/ui/unauthorized-clients/" target="_blank" class="comparison-row">
                <p>Unauthorized MQTT clients</p>
                <div><img src="/images/pe/blue-mark.svg" alt="Blue checkmark"></div>
                <div><img src="/images/pe/green-mark.svg" alt="Green checkmark"></div>
              </a>
              <a href="/docs/mqtt-broker/other/blocked-client/" target="_blank" class="comparison-row">
                <p>Blocked MQTT clients</p>
                <div><img src="/images/pe/blue-mark.svg" alt="Blue checkmark"></div>
                <div><img src="/images/pe/green-mark.svg" alt="Green checkmark"></div>
              </a>
            </div>
            <div class="block">
              <div class="comparison-row">
                <p>Extensibility & Customization</p>
              </div>
              <div class="comparison-row">
                <p>System integrations</p>
                <p style="text-align: center"><a href="/docs/mqtt-broker/integrations/" target="_blank" style="color: #0D417B">Basic</a></p>
                <p style="text-align: center"><a href="/docs/pe/mqtt-broker/integrations/" target="_blank">Advanced (coming soon)</a></p>
              </div>
              <a href="/docs/pe/mqtt-broker/white-labeling/" target="_blank" class="comparison-row">
                <p>White labeling</p>
                <div class="hidden-space">&nbsp;</div>
                <div><img src="/images/pe/green-mark.svg" alt="Green checkmark"></div>
              </a>
            </div>
            <div class="block">
              <div class="comparison-row">
                <p>Deployment Options</p>
              </div>
              <a href="/pricing/?section=tbmq-options&product=tbmq-pe" target="_blank" class="comparison-row">
                <p>Self-Managed (On-premise/Cloud)</p>
                <div><img src="/images/pe/blue-mark.svg" alt="Blue checkmark"></div>
                <div><img src="/images/pe/green-mark.svg" alt="Green checkmark"></div>
              </a>
              <a href="/pricing/?section=tbmq-options&product=tbmq-private-cloud" target="_blank" class="comparison-row">
                <p>Managed Private Cloud</p>
                <div class="hidden-space">&nbsp;</div>
                <div><img src="/images/pe/green-mark.svg" alt="Green checkmark"></div>
              </a>
            </div>
            <div class="block">
              <div class="comparison-row">
                <p>Support</p>
              </div>
              <div class="comparison-row">
                <p>Support Model</p>
                <p><a href="/pricing/?section=tbmq-options&product=tbmq-ce" target="_blank">Community</a></p>
                <p><a href="/pricing/?section=tbmq-options&product=tbmq-pe" target="_blank">Advanced + SLA</a></p>
              </div>
            </div>
        </section>
    </main>
</section>

<section id="bottom-features">
    <main>
        <div id="background">
            <div class="main3"></div>
        </div>
        <h2>TBMQ features</h2>
        <div id="cards">
            <div class="col-lg-6">
                <div class="block">
                    <img src="/images/thingsboard-logo.svg" alt="MQTT client type">
                    <div>
                        <h3 class="title"><a target="_blank" href="/docs/mqtt-broker/user-guide/mqtt-client-type/">MQTT client type management</a></h3>
                        <p>Supports two distinct client types to provide customized messaging solutions for diverse IoT scenarios. One type efficiently handles frequent data transmissions and effectively manages incoming moderate message volumes (fan-out and p2p). The other specializes in high-rate topic subscriptions, perfect for data analytics and processing (fan-in).</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="block"><img src="/images/mqtt-broker/product/load-balancing.svg" alt="MQTT client Load Balancing">
                    <div>
                        <h3 class="title"><a target="_blank" href="/docs/mqtt-broker/user-guide/shared-subscriptions/">MQTT client Load Balancing</a></h3>
                        <p>Delivers an advanced solution for the even distribution of messages among multiple MQTT clients through a fault-tolerant, distributed message processing platform. Ensures no single client becomes overwhelmed, resulting in optimized resource utilization.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="block"><img style="margin: 0" src="/images/mqtt-broker/product/security.svg" alt="Security">
                    <div>
                        <h3 class="title"><a target="_blank" href="/docs/mqtt-broker/security/overview/">MQTT security for data protection</a></h3>
                        <p>Ensure secure communication with transport encryption for both MQTT and MQTT over WebSocket. Supports Basic, JWT, SCRAM, and X.509 Certificate Chain authentications.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="block"><img src="/images/mqtt-broker/product/ws.svg" alt="MQTT over WebSocket">
                    <div>
                        <h3 class="title"><a target="_blank" href="/docs/mqtt-broker/user-guide/mqtt-over-ws/">MQTT over WebSocket connectivity</a></h3>
                        <p>Experience seamless, secure, and real-time communication between web applications and MQTT networks. This powerful feature allows for easy integration of web-based interfaces with IoT devices.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="block">
                    <img src="/images/mqtt-broker/product/unauthorized-clients.svg" alt="Unauthorized clients">
                    <div>
                        <h3 class="title"><a target="_blank" href="/docs/mqtt-broker/user-guide/ui/unauthorized-clients/">Unauthorized MQTT clients</a></h3>
                        <p>Secure your IoT network with real-time monitoring of unauthorized access attempts. Gain critical details into potential security threats, enabling you to take proactive measures and strengthen overall system protection.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="block">
                    <img src="/images/mqtt-broker/product/blocked-clients.svg" alt="Blocked MQTT clients">
                    <div>
                        <h3 class="title"><a target="_blank" href="/docs/mqtt-broker/other/blocked-client/">Blocked MQTT clients</a></h3>
                        <p>Restrict access with rule-based blocking by Client ID, Username, IP address, or Regex. Ensures malicious clients are rejected early, conserves system resources, and keeps your MQTT broker secure.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="block">
                    <img src="/images/mqtt-broker/product/client-session-metrics.svg" alt="Client session metrics">
                    <div>
                        <h3 class="title"><a target="_blank" href="/docs/mqtt-broker/user-guide/ui/sessions/#metrics">MQTT client session metrics</a></h3>
                        <p>Gain valuable insights into client behavior and performance with detailed session metrics, allowing you to identify messaging anomalies and proactively troubleshoot issues.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="block">
                    <img src="/images/mqtt-broker/product/backpressure.svg" alt="MQTT channel backpressure">
                    <div>
                        <h3 class="title"><a target="_blank" href="/docs/mqtt-broker/user-guide/backpressure/">MQTT channel backpressure</a></h3>
                        <p>Protect broker performance with smart handling of slow subscribers. TBMQ pauses delivery when clients can’t keep up and resumes once they recover, ensuring reliability and stability under load.</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</section>

<section id="get-started">
    <main>
        <div id="background">
            <div class="main4"></div>
        </div>
        <div class="row">
            <div class="container">
                <div class="block">
                    <h2>Get started with TBMQ</h2>
                    <p>Get started with TBMQ today and unlock the full potential of your IoT solutions! With support for millions of concurrent connections, robust message handling, and reliable data persistence, TBMQ empowers you to build, scale, and secure your IoT applications like never before.</p>
                    <a target="_blank" href="/docs/mqtt-broker/getting-started/" class="button arrow-top-right">Get started</a>
                </div>
            </div>
        </div>
    </main>
</section>

<section id="news">
    <main>
        <h2>TBMQ news</h2>
        <div id="cards">
            <div class="col-lg-6">
                <div class="block">
                    <div class="image-container">
                        <a target="_blank" href="/blog/tbmq-2-2-strengthening-mqtt-security-with-jwt-and-client-blocking/">
                            <img src="/images/mqtt-broker/product/news-1.webp" alt="TBMQ 2.2: Strengthening MQTT security with JWT and Client Blocking" loading="lazy">
                        </a>
                    </div>
                    <div class="content">
                        <div class="tags">
                            <a target="_blank" href="/blog/category/updates/">Updates</a>
                        </div>
                        <a target="_blank" class="title" href="/blog/tbmq-2-2-strengthening-mqtt-security-with-jwt-and-client-blocking/">TBMQ 2.2: Strengthening MQTT security with JWT and Client Blocking</a>
                        <p>We’re excited to announce the release of TBMQ 2.2.0! This release brings powerful new features that make TBMQ more secure, resilient, and easier to operate in production at scale.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="block">
                    <div class="image-container">
                        <a target="_blank" href="/blog/tbmq-2-1-new-chapter-in-mqtt-messaging-with-embedded-integrations/">
                            <img src="/images/mqtt-broker/product/news-4.webp" alt="TBMQ 2.1: New chapter in MQTT messaging with embedded Integrations" loading="lazy">
                        </a>
                    </div>
                    <div class="content">
                        <div class="tags">
                            <a target="_blank" href="/blog/category/updates/">Updates</a>
                        </div>
                        <a target="_blank" class="title" href="/blog/tbmq-2-1-new-chapter-in-mqtt-messaging-with-embedded-integrations/">TBMQ 2.1: New chapter in MQTT messaging with embedded Integrations</a>
                        <p>We're excited to announce the release of TBMQ 2.1.0! This version marks a major milestone by introducing the Integration Executor microservice, responsible for managing integrations. It powers scalable and multi-protocol message delivery to external systems, starting with support for HTTP, Kafka, and MQTT outbound integrations. We've also released the official Helm Chart for TBMQ, simplifying deployment and management of the infrastructure in K8s environments.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="block">
                    <div class="image-container">
                        <a target="_blank" href="/blog/1-million-reasons-to-choose-tbmq-as-high-performance-mqtt-broker/">
                            <img src="/images/mqtt-broker/product/news-3.webp" alt="TBMQ one million messages per second" loading="lazy">
                        </a>
                    </div>
                    <div class="content">
                        <div class="tags">
                            <a target="_blank" href="/blog/category/tech/">Tech</a>
                        </div>
                        <a target="_blank" class="title" href="/blog/1-million-reasons-to-choose-tbmq-as-high-performance-mqtt-broker/">1 Million reasons to choose TBMQ as a high-performance MQTT broker</a>
                        <p>Can an open-source MQTT broker handle one million messages per second for persistent sessions? TBMQ 2.x proves it can! Even more importantly, it achieves this with no single point of failure and ensures no data loss, even when hardware fails, making it a robust self-hosted MQTT broker solution for IIoT applications</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="block">
                    <div class="image-container">
                        <a target="_blank" href="/blog/tbmq-2-0-migration-to-redis-mqtt-5-0-support-and-more/">
                            <img src="/images/mqtt-broker/product/news-2.webp" alt="TBMQ 2.0.0 release" loading="lazy">
                        </a>
                    </div>
                    <div class="content">
                        <div class="tags">
                            <a target="_blank" href="/blog/category/updates/">Updates</a>
                        </div>
                        <a target="_blank" class="title" href="/blog/tbmq-2-0-migration-to-redis-mqtt-5-0-support-and-more/">TBMQ 2.0.0 release: migration to Redis, MQTT 5.0 support, and more</a>
                        <p>TBMQ 2.0.0 release brings a major update with data migration of persistent sessions for devices from PostgreSQL to Redis. It also expands TBMQ’s MQTT 5.0 feature set, achieving full compatibility with the MQTT 5.0 standard. Here’s an overview of the features and updates included in this release</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</section>
