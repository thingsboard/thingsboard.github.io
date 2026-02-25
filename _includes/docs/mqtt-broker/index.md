{% include templates/mqtt-broker/pe-tbmq-explore-banner.md %}

**TBMQ** is a highly scalable and fault-tolerant [MQTT broker](/products/mqtt-broker/){:target="_blank"} designed for efficient and reliable message routing between connected devices and applications using the 
<a href="/products/mqtt-broker/" target="_blank" style="color: inherit; text-decoration: none;">MQTT protocol</a>.

Engineered for high performance, TBMQ can handle **millions** of concurrent connections and process [millions of messages per second](/docs/{{docsPrefix}}mqtt-broker/reference/3m-throughput-single-node-performance-test/) 
while maintaining exceptionally low latency. 
Its distributed **cluster architecture** takes scalability even further, supporting [massive IoT deployments](/docs/{{docsPrefix}}mqtt-broker/reference/100m-connections-performance-test/) and ensuring **high availability** across all nodes.

For installation instructions and detailed insights into its architecture and MQTT features, refer to the official TBMQ documentation.

## Try Live Demo

The fastest way to get started is to use our **free public MQTT broker** — no installation required.

<div class="doc-features row mt-4 align-items-stretch">
    <div class="col-12 col-sm-7 col-lg-7 mb-4 d-flex">
        <div class="feature-card w-100">
            <div class="feature-title">MQTT Connection Details</div>
            <div class="feature-text">
                <b>Host:</b> <code>demo.tbmq.io</code><br>
                <b>TCP Port:</b> <code>1883</code><br>
                <b>TLS Port:</b> <code>8883</code><br>
                <b>Username:</b> <code>demo</code><br>
                <b>Password:</b> <i>leave empty</i>
            </div>
        </div>
    </div>
    <div class="col-12 col-sm-5 col-lg-5 mb-4 d-flex">
        <a class="feature-card w-100" href="https://demo.tbmq.io/signup" target="_blank">
            <img class="feature-logo" src="/images/feature-logo/getting-started.svg" alt="Sign up icon">
            <div class="feature-title">Sign Up for Free</div>
            <div class="feature-text">
                Create an account to access the live TBMQ Demo Broker — monitor sessions, subscriptions, and broker statistics in real time.
            </div>
        </a>
    </div>
</div>

<div class="doc-features row mt-4">
    <div class="col-12 col-sm-6 col-lg col-xxl-6 col-4xl mb-4">
        <a class="feature-card" href="/docs/{{docsPrefix}}mqtt-broker/getting-started-guides/what-is-thingsboard-mqtt-broker/">
            <img class="feature-logo" src="/images/feature-logo/thingsboard-logo.svg" alt="Thingsboard logo">
            <div class="feature-title">What is TBMQ?</div>
            <div class="feature-text">
                <ul>
                    <li>Features</li>
                    <li>Architecture</li>
                </ul>
            </div>
        </a>
    </div>
    <div class="col-12 col-sm-6 col-lg col-xxl-6 col-4xl mb-4">
        <a class="feature-card" href="/docs/{{docsPrefix}}mqtt-broker/getting-started/">
            <img class="feature-logo" src="/images/feature-logo/getting-started.svg" alt="Getting started icon">
            <div class="feature-title">Getting started</div>
            <div class="feature-text">
                Learn how to use TBMQ.
            </div>
        </a>
    </div>
    <div class="col-12 col-sm-6 col-lg col-xxl-6 col-4xl mb-4">
        <a class="feature-card" href="/docs/{{docsPrefix}}mqtt-broker/install/installation-options/">
            <img class="feature-logo" src="/images/feature-logo/install.svg" alt="Install icon">
            <div class="feature-title">Installation</div>
            <div class="feature-text">
                Learn how to install and upgrade TBMQ.
            </div>
        </a>
    </div>
    <div class="col-12 col-sm-6 col-lg col-xxl-6 col-4xl mb-4">
        <a class="feature-card" href="/docs/{{docsPrefix}}mqtt-broker/faq/">
            <img class="feature-logo" src="/images/feature-logo/faq.svg" alt="Question icon">
            <div class="feature-title">FAQ</div>
            <div class="feature-text">
                Get answers to the most common questions.
            </div>
        </a>
    </div>
    <div class="w-100"></div>
    <div class="col-12 col-sm-6 mb-4">
        <a class="feature-card" href="/docs/{{docsPrefix}}mqtt-broker/install/config/">
            <img class="feature-logo" src="/images/feature-logo/configuration.svg" alt="Gear icon">
            <div class="feature-title">Configuration</div>
            <div class="feature-text">
                Configuration of TBMQ.
            </div>
        </a>
    </div>
    <div class="col-12 col-sm-6 mb-4">
        <a class="feature-card" href="/docs/{{docsPrefix}}mqtt-broker/api/">
            <img class="feature-logo" src="/images/feature-logo/api.svg" alt="Api documentation icon">
            <div class="feature-title">API</div>
            <div class="feature-text">
                Learn client connectivity and server-side broker specific API.
            </div>
        </a>
    </div>
    <div class="w-100"></div>
    <div class="col col-xxl mb-4">
        <div class="feature-card">
            <div class="feature-title"><a href="/docs/{{docsPrefix}}mqtt-broker/integrations/">Integrations</a></div>
            <div class="feature-text">
                Forward MQTT messages to external systems like HTTP, Kafka, or external MQTT brokers — seamlessly connecting your IoT data to the rest of your infrastructure.
            </div>
            <div class="row mt-4">
                <div class="col-12 col-sm-6 col-lg-4 col-xxl-6 col-4xl-4 mb-4">
                    <a class="feature-card inner" href="/docs/{{docsPrefix}}mqtt-broker/integrations/http/">
                        <div class="feature-title"><img class="integration-logo" src="/images/feature-logo/integration/http.svg" alt="HTTP logo icon"><span>HTTP</span></div>
                    </a>
                </div>
                <div class="col-12 col-sm-6 col-lg-4 col-xxl-6 col-4xl-4 mb-4">
                    <a class="feature-card inner" href="/docs/{{docsPrefix}}mqtt-broker/integrations/mqtt/">
                        <div class="feature-title"><img class="integration-logo" src="/images/feature-logo/integration/mqtt.svg" alt="MQTT logo icon"><span>MQTT</span></div>
                    </a>
                </div>
                <div class="col-12 col-sm-6 col-lg-4 col-xxl-6 col-4xl-4 mb-4">
                    <a class="feature-card inner" href="/docs/{{docsPrefix}}mqtt-broker/integrations/kafka/">
                        <div class="feature-title"><img class="integration-logo" src="/images/feature-logo/integration/kafka.svg" alt="Kafka"><span>Kafka</span></div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
