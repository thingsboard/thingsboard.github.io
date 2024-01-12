{% if docsPrefix == 'pe/' %}
{% assign platformName = 'ThingsBoard PE' %}
{% else %}
{% assign platformName = 'ThingsBoard' %}
{% endif %}

{% if docsPrefix != 'pe/' %}
<h3>Interested in the Professional Edition? Explore the ThingsBoard PE Edge Documentation <a style="pointer-events: all;" href="/docs/pe/edge/">Here</a>.</h3>
<br>
{% endif %}

The {{platformName}} **Edge** empowers you to leverage edge computing for the distribution of data processing and analysis.

For instance, it allows you to perform calculations and group data from edge devices right on the {{platformName}} Edge. 
By doing so, you can push only filtered and grouped data to the cloud. 
This strategy effectively reduces data traffic and saves cost.

<div class="doc-features row mt-4">
    <div class="col-12 col-sm-6 col-lg col-xxl-6 col-4xl mb-4">
        <a class="feature-card" href="/docs/{{docsPrefix}}edge/getting-started-guides/what-is-edge/">
            <img class="feature-logo" src="/images/feature-logo/edge-logo.svg" alt="Edge logo">
            <div class="feature-title">What is {{platformName}} Edge?</div>
            <div class="feature-text">
                <ul>
                    <li>Features</li>
                    <li>Architecture</li>
                </ul>
            </div>
        </a>
    </div>
    <div class="col-12 col-sm-6 col-lg col-xxl-6 col-4xl mb-4">
        <a class="feature-card" href="/docs/{{docsPrefix}}edge/getting-started/">
            <img class="feature-logo" src="/images/feature-logo/getting-started.svg" alt="Getting started icon">
            <div class="feature-title">Getting started</div>
            <div class="feature-text">
                Provides an overview of the edge functionality and classical "Hello World" guide.
            </div>
        </a>
    </div>
    <div class="col-12 col-sm-6 col-lg col-xxl-6 col-4xl mb-4">
        <a class="feature-card" href="/docs/user-guide/install/{{docsPrefix}}edge/installation-options/">
            <img class="feature-logo" src="/images/feature-logo/install.svg" alt="Install icon">
            <div class="feature-title">Installation</div>
            <div class="feature-text">
                Learn how to install and upgrade {{platformName}} Edge.
            </div>
        </a>
    </div>
    <div class="col-12 col-sm-6 col-lg col-xxl-6 col-4xl mb-4">
        <a class="feature-card" href="/docs/{{docsPrefix}}edge/faq/">
            <img class="feature-logo" src="/images/feature-logo/faq.svg" alt="Question icon">
            <div class="feature-title">FAQ</div>
            <div class="feature-text">
                Get answers to the most common questions.
            </div>
        </a>
    </div>
    <div class="w-100"></div>
    <div class="col-12 col-sm-6 mb-4">
        <a class="feature-card" href="/docs/{{docsPrefix}}edge/use-cases/overview/">
            <img class="feature-logo" src="/images/feature-logo/tutorials.svg" alt="Tutorials icon">
            <div class="feature-title">Use cases</div>
            <div class="feature-text">
                Overview use cases that could be achieved with {{platformName}} Edge.
            </div>
        </a>
    </div>
    <div class="col-12 col-sm-6 mb-4">
        <a class="feature-card" href="/docs/{{docsPrefix}}edge/api/">
            <img class="feature-logo" src="/images/feature-logo/api.svg" alt="API documentationn icon">
            <div class="feature-title">API</div>
            <div class="feature-text">
                Learn device connectivity and server-side platform specific API.
            </div>
        </a>
    </div>
</div>
