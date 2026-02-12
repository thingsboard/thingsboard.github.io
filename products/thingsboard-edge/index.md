---
layout: thingsboard-edge
title: ThingsBoard Edge
description: Comprehensive software solutions for edge computing, providing data analysis and management at the source of data creation.
---

<section id="intro">
        <div class="stats-container">
            <div class="stat-block">
                <div class="stat-number">5</div>
                <div class="stat-label">Years in Edge domain</div>
            </div>
            <div class="stat-block">
                <div class="stat-number">150+</div>
                <div class="stat-label">Clients</div>
            </div>
            <div class="stat-block">
                <div class="stat-number">∞</div>
                <div class="stat-label">Devices per Edge</div>
            </div>
            <div class="stat-block">
                <div class="stat-number">100%</div>
                <div class="stat-label">Data processed on-site</div>
            </div>
        </div>
</section>

<section id="product">
        <div class="background">
           <div class="small1"></div><div class="small3"></div>
        </div>
    <h2 class="product-title">IoT Architecture Comparison</h2>
    <div class="scenario-wrapper">
        <div class="scenario-tabs">
            <div class="scenario-tab" onclick="switchProductTab('gateway', event)">
                <div class="tab-header">
                    <h3 class="tab-name">IoT Gateway</h3>
                    <svg class="chevron" width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="tab-tags">
                  <span class="tag">Device connectivity</span>
                  <span class="tag">Data routing</span>
                  <span class="tag">Multi-protocol support</span>
                  <span class="tag">Legacy device integration</span>
                  <p>The IoT Gateway bridges local devices to Edge or Server, handling multi-protocol conversion and data routing. It enables legacy equipment integration and real-time data streaming across diverse communication protocols without cloud dependency.</p>
                </div>
            </div>
            <div class="scenario-tab active" onclick="switchProductTab('edge', event)">
                <div class="tab-header">
                    <h3 class="tab-name">ThingsBoard Edge</h3>
                    <svg class="chevron" width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="tab-tags">
                  <span class="tag">Local processing</span>
                  <span class="tag">Offline operation</span>
                  <span class="tag">Low latency</span>
                  <span class="tag">Remote sites</span>
                  <span class="tag">On-premises analytics</span>
                  <p>ThingsBoard Edge processes and visualizes data locally at the network edge, enabling autonomous operation during connectivity outages. It reduces bandwidth costs by filtering data before cloud transmission while maintaining sub-second response times for critical automation.</p>
                </div>
            </div>
            <div class="scenario-tab" onclick="switchProductTab('server', event)">
                <div class="tab-header">
                    <h3 class="tab-name">ThingsBoard Server</h3>
                    <svg class="chevron" width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="tab-tags">
                    <span class="tag">Cloud infrastructure</span>
                    <span class="tag">Centralized platform</span>
                    <span class="tag">Multi-tenancy</span>
                    <span class="tag">Scalable architecture</span>
                    <p>The ThingsBoard Server provides centralized data processing, storage, and advanced analytics with enterprise-grade scalability. It supports multi-tenancy, flexible deployment options from on-premises to cloud, and unlimited device connectivity for large-scale IoT infrastructure.</p>
                </div>
            </div>
        </div>
        <div id="scenario-cat-gateway" class="scenario-category">
            <div>
                <div class="image-container">
                    <div class="image-background"></div>
                    <div class="image-background"></div>
                    <div class="image">
                        <img src="/images/edge/tb-edge-gw.webp" alt="ThingsBoard Gateway block" width="615" height="719" loading="lazy">
                    </div>
                </div>
                <a href="/docs/iot-gateway/getting-started/" target="_blank" class="cta-button gtm_button">Connect Your Devices</a>
            </div>
        </div>
        <div id="scenario-cat-edge" class="scenario-category active">
            <div>
                <div class="image-container">
                    <div class="image-background"></div>
                    <div class="image-background"></div>
                    <div class="image">
                        <img src="/images/edge/tb-edge.webp" alt="ThingsBoard Edge block" loading="lazy">
                    </div>
                </div>
                <a href="/docs/edge/getting-started/" target="_blank" class="cta-button gtm_button">Try Edge Now</a>
            </div>
        </div>
        <div id="scenario-cat-server" class="scenario-category">
            <div>
                <div class="image-container">
                    <div class="image-background"></div>
                    <div class="image-background"></div>
                    <div class="image">
                        <img src="/images/edge/tb-cloud.webp" alt="ThingsBoard Cloud block" loading="lazy">
                    </div>
                </div>
                <a href="/docs/getting-started-guides/helloworld/" target="_blank" class="cta-button gtm_button">Get Started</a>
            </div>
        </div>
    </div>
</section>

<section id="matrix">
    <div class="main-content">
    <h2>Which ThingsBoard Product Is Right for You?</h2>
    <table>
            <colgroup>
                <col class="col-feature">
                <col class="col-gateway">
                <col class="col-edge">
                <col class="col-server">
            </colgroup>
            <thead>
                <tr>
                    <td></td>
                    <th class="gateway">IoT<br>Gateway</th>
                    <th class="edge">ThingsBoard<br>Edge</th>
                    <th class="server">ThingsBoard<br>Server</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>ThingsBoard Server Required</th>
                    <td><img src="/images/pe/checked.svg" alt="checked"></td>
                    <td><img src="/images/pe/checked.svg" alt="checked"></td>
                    <td>N/A</td>
                </tr>
                <tr>
                    <th><a href="/docs/reference/performance/" target="_blank">Data Collection</a></th>
                    <td><img src="/images/pe/checked.svg" alt="checked"></td>
                    <td><img src="/images/pe/checked.svg" alt="checked"></td>
                    <td><img src="/images/pe/checked.svg" alt="checked"></td>
                </tr>
                <tr>
                    <th><a href="/docs/api/" target="_blank">Core Protocols Support<br>(MQTT, HTTP, CoAP, etc.)</a></th>
                    <td><img src="/images/pe/checked.svg" alt="checked"></td>
                    <td><img src="/images/pe/checked.svg" alt="checked"></td>
                    <td><img src="/images/pe/checked.svg" alt="checked"></td>
                </tr>
                <tr>
                    <th><a href="/docs/iot-gateway/what-is-iot-gateway/" target="_blank">Peripheral Infrastructure Protocols Support<br>(Modbus, BACNet, BLE, etc.)</a></th>
                    <td><img src="/images/pe/checked.svg" alt="checked"></td>
                    <td><img src="/images/pe/unchecked.svg" alt="unchecked"></td>
                    <td><img src="/images/pe/unchecked.svg" alt="unchecked"></td>
                </tr>
                <tr>
                    <th><a href="/docs/guides/#AnchorIDDataProcessing" target="_blank">Data Processing and Analysis</a></th>
                    <td><img src="/images/pe/unchecked.svg" alt="unchecked"></td>
                    <td><img src="/images/pe/checked.svg" alt="checked"></td>
                    <td><img src="/images/pe/checked.svg" alt="checked"></td>
                </tr>
                <tr>
                    <th><a href="/docs/user-guide/dashboards/" target="_blank">Real-Time HMI Dashboards</a><br>and <a href="/docs/user-guide/scada/" target="_blank">SCADA-like HMI Dashboards</a></th>
                    <td><img src="/images/pe/unchecked.svg" alt="unchecked"></td>
                    <td><img src="/images/pe/checked.svg" alt="checked"></td>
                    <td><img src="/images/pe/checked.svg" alt="checked"></td>
                </tr>
                <tr>
                    <th><a href="/docs/user-guide/alarms/" target="_blank">Alarms & Notifications</a></th>
                    <td><img src="/images/pe/unchecked.svg" alt="unchecked"></td>
                    <td><img src="/images/pe/checked.svg" alt="checked"></td>
                    <td><img src="/images/pe/checked.svg" alt="checked"></td>
                </tr>
                <tr>
                    <th><a href="/docs/user-guide/ui/assets/" target="_blank">Asset Management</a></th>
                    <td><img src="/images/pe/unchecked.svg" alt="unchecked"></td>
                    <td><img src="/images/pe/checked.svg" alt="checked"></td>
                    <td><img src="/images/pe/checked.svg" alt="checked"></td>
                </tr>
                <tr>
                    <th><a href="/docs/edge/config/management/" target="_blank">Offline Data Computing and Storage<br>(Remote Site Scenarios)</a></th>
                    <td>Data Collection</td>
                    <td><img src="/images/pe/checked.svg" alt="checked"></td>
                    <td><img src="/images/pe/unchecked.svg" alt="unchecked"></td>
                </tr>
                <tr>
                    <th><a href="/docs/user-guide/ui/tenants/" target="_blank">Multi-Tenancy Support</a></th>
                    <td><img src="/images/pe/unchecked.svg" alt="unchecked"></td>
                    <td><img src="/images/pe/unchecked.svg" alt="unchecked"></td>
                    <td><img src="/images/pe/checked.svg" alt="checked"></td>
                </tr>
                <tr>
                    <th>Hardware Resources Usage</th>
                    <td>Low</td>
                    <td>Medium to Low</td>
                    <td>High to Medium</td>
                </tr>
            </tbody>
    </table>
    </div>
</section>

<section id="authored-quote">
    <div class="background">
        <div class="main1"></div><div class="small3"></div><div class="small4"></div>
    </div>
    <div class="main-content">
        <img class="h-auto" src="/images/case-studies/Dominic_Winkler.webp" title="ÖBB-Infrastruktur AG IT Enterprise Architect Dominic Winkler" alt="Dominic Winkler" width="1316" height="848">
        <div class="text">
            <h2>ÖBB-Infrastruktur AG</h2>
            <p class="quote">"Thingsboard Edge gives us the invaluable ability to allow data to flow within our IT network without the need to bridge Firewalls and Public Internet."</p>
            <p class="author">Dominic Winkler</p>
            <p class="title">IT Enterprise Architect</p>
        </div>
    </div>
</section>

<section id="get-in-touch">
    <div class="main-content">
        <div class="block">
            <h2 class="cta">Need offline-capable IoT solution?</h2>
            <a id="Lets-Talk-Edge" href="/docs/contact-us/?subject=ThingsBoard%20Products" target="_blank"
               class="button contact-us gtm_button">Let's talk Edge</a>
        </div>
    </div>
</section>

<section id="local-deployment">
        <h2>Edge Key Features</h2>
        <div class="block">
            <div class="feature-des"><h3 class="item-heading">Local Deployment and Storage</h3>
                <p>Process and store data from local (edge) devices independently of the server. Sync updates with the server once connectivity is restored.</p>
                <a class="read-more-button" href="/docs/edge/getting-started-guides/what-is-edge/">Edge CE<img class="arrow first" src="/images/pe/read-more-arrow.svg" alt="arrow first"><img class="arrow second" src="/images/pe/read-more-arrow.svg" alt="arrow second"><img class="arrow third" src="/images/pe/read-more-arrow.svg" alt="arrow third"></a>
                <a class="read-more-button" href="/docs/pe/edge/getting-started-guides/what-is-edge/">Edge PE<img class="arrow first" src="/images/pe/read-more-arrow.svg" alt="arrow first"><img class="arrow second" src="/images/pe/read-more-arrow.svg" alt="arrow second"><img class="arrow third" src="/images/pe/read-more-arrow.svg" alt="arrow third"></a>
            </div>
            <div class="block-img">
                <img src="/images/edge/local-deployment.svg" alt="local deployment">
            </div>
        </div>
</section>

<section id="data-filtering">
        <div class="background">
            <div class="main1"></div><div class="small1"></div><div class="small2"></div><div class="small3"></div>
        </div>
        <div class="block">
            <div class="block-img">
                <img src="/images/edge/data-filtering.svg" alt="data filtering">
            </div>
            <div class="feature-des"><h3 class="item-heading">Data Filtering</h3>
                <p>Use the ThingsBoard Edge service to filter data from local (edge) devices and forward only a subset of data to the server for further processing or storage.</p>
                <a class="read-more-button" href="/docs/edge/getting-started-guides/what-is-edge/">Edge CE<img class="arrow first" src="/images/pe/read-more-arrow.svg" alt="arrow first"><img class="arrow second" src="/images/pe/read-more-arrow.svg" alt="arrow second"><img class="arrow third" src="/images/pe/read-more-arrow.svg" alt="arrow third"></a>
                <a class="read-more-button" href="/docs/pe/edge/getting-started-guides/what-is-edge/">Edge PE<img class="arrow first" src="/images/pe/read-more-arrow.svg" alt="arrow first"><img class="arrow second" src="/images/pe/read-more-arrow.svg" alt="arrow second"><img class="arrow third" src="/images/pe/read-more-arrow.svg" alt="arrow third"></a>
            </div>
        </div>
</section>

<section id="local-alarms">
        <div class="background">
            <div class="main2"></div><div class="small5"></div><div class="small6"></div><div class="small7"></div>
        </div>
        <div class="block">
            <div class="feature-des"><h3 class="item-heading">Local Alarms</h3>
                <p>Respond instantly to critical situations on-site, even without connectivity to server.</p>
                <a class="read-more-button" href="/docs/edge/getting-started-guides/what-is-edge/">Edge CE<img class="arrow first" src="/images/pe/read-more-arrow.svg" alt="arrow first"><img class="arrow second" src="/images/pe/read-more-arrow.svg" alt="arrow second"><img class="arrow third" src="/images/pe/read-more-arrow.svg" alt="arrow third"></a>
                <a class="read-more-button" href="/docs/pe/edge/getting-started-guides/what-is-edge/">Edge PE<img class="arrow first" src="/images/pe/read-more-arrow.svg" alt="arrow first"><img class="arrow second" src="/images/pe/read-more-arrow.svg" alt="arrow second"><img class="arrow third" src="/images/pe/read-more-arrow.svg" alt="arrow third"></a>
            </div>
            <div class="block-img">
                <img src="/images/edge/local-alarms.svg" alt="local alarms">
            </div>
        </div>
</section>

<section id="batch-update">
        <div class="block">
            <div class="block-img">
                <img src="/images/edge/batch-update.svg" alt="batch update">
            </div>
            <div class="feature-des"><h3 class="item-heading">Batch Update and Visualization</h3>
                <p>Update thousands of edge configurations with a single click. Monitor local events and time series data using a real-time dashboard.</p>
                <a class="read-more-button" href="/docs/edge/getting-started-guides/what-is-edge/">Edge CE<img class="arrow first" src="/images/pe/read-more-arrow.svg" alt="arrow first"><img class="arrow second" src="/images/pe/read-more-arrow.svg" alt="arrow second"><img class="arrow third" src="/images/pe/read-more-arrow.svg" alt="arrow third"></a>
                <a class="read-more-button" href="/docs/pe/edge/getting-started-guides/what-is-edge/">Edge PE<img class="arrow first" src="/images/pe/read-more-arrow.svg" alt="arrow first"><img class="arrow second" src="/images/pe/read-more-arrow.svg" alt="arrow second"><img class="arrow third" src="/images/pe/read-more-arrow.svg" alt="arrow third"></a>
            </div>
        </div>
</section>

<section id="bottom-features">
    <div class="main-content">
        <div class="background">
            <div class="main3"></div><div class="small8"></div>
        </div>
        <h2>Why Edge Works</h2>
        <div class="features-grid">
            <div class="feature-card">
                <div class="feature-header" onclick="toggleFeature(this)">
                    <div class="feature-icon">
                        <img src="/images/edge/opensource-icon.svg" alt="100% Open-source">
                    </div>
                    <h3 class="feature-title">100% Open-source</h3>
                    <svg class="chevron" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="feature-content">
                    <p>Licensed under Apache 2.0. Use freely in commercial products, host as SaaS/PaaS, or modify to fit your needs.</p>
                </div>
            </div>
            <div class="feature-card">
                <div class="feature-header" onclick="toggleFeature(this)">
                    <div class="feature-icon">
                        <img src="/images/edge/customizable-icon.svg" alt="Customizable">
                    </div>
                    <h3 class="feature-title">Customizable</h3>
                    <svg class="chevron" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="feature-content">
                    <p>Flexible rule engine and customizable dashboards let you tailor Edge to your specific workflow and business requirements.</p>
                </div>
            </div>
            <div class="feature-card">
                <div class="feature-header" onclick="toggleFeature(this)">
                    <div class="feature-icon">
                        <img src="/images/edge/robust-icon.svg" alt="Robust and Efficient">
                    </div>
                    <h3 class="feature-title">Robust and Reliable</h3>
                    <svg class="chevron" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="feature-content">
                    <p>Handles up to 1,000 devices per Edge instance while ensuring zero data loss through persistent local storage and automatic sync.</p>
                </div>
            </div>
            <div class="feature-card">
                <div class="feature-header" onclick="toggleFeature(this)">
                    <div class="feature-icon">
                        <img src="/images/edge/scalable-icon.svg" alt="Scalable">
                    </div>
                    <h3 class="feature-title">Scalable</h3>
                    <svg class="chevron" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="feature-content">
                    <p>Deploy thousands of Edge instances across distributed sites for horizontal scalability and distributed data processing.</p>
                </div>
            </div>
            <div class="feature-card">
                <div class="feature-header" onclick="toggleFeature(this)">
                    <div class="feature-icon">
                        <img src="/images/edge/visualization-icon.svg" alt="Real-Time">
                    </div>
                    <h3 class="feature-title">Real-Time</h3>
                    <svg class="chevron" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="feature-content">
                    <p>Instant access to critical data enables immediate decision-making. Local alarms trigger on-site without server connectivity.</p>
                </div>
            </div>
            <div class="feature-card">
                <div class="feature-header" onclick="toggleFeature(this)">
                    <div class="feature-icon">
                        <img src="/images/edge/offline-edge.svg" alt="Offline Capable">
                    </div>
                    <h3 class="feature-title">Offline Capable</h3>
                    <svg class="chevron" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="feature-content">
                    <p>Operates independently when disconnected. Stores data locally and auto-syncs when connection restores—zero data loss.</p>
                </div>
            </div>
            <div class="feature-card">
                <div class="feature-header" onclick="toggleFeature(this)">
                    <div class="feature-icon">
                        <img src="/images/edge/low-latency.svg" alt="Responsive">
                    </div>
                    <h3 class="feature-title">Responsive</h3>
                    <svg class="chevron" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="feature-content">
                    <p>Local processing delivers sub-second response times, critical for industrial automation and real-time control systems.</p>
                </div>
            </div>
            <div class="feature-card">
                <div class="feature-header" onclick="toggleFeature(this)">
                    <div class="feature-icon">
                        <img src="/images/edge/engine-icon.svg" alt="Logic-Driven">
                    </div>
                    <h3 class="feature-title">Logic-Driven</h3>
                    <svg class="chevron" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="feature-content">
                    <p>Drag-and-drop rule chain designer lets you define custom logic for data processing, external integrations, and alarm notifications.</p>
                </div>
            </div>
            <div class="feature-card">
                <div class="feature-header" onclick="toggleFeature(this)">
                    <div class="feature-icon">
                        <img src="/images/edge/friendly-icon.svg" alt="User-Friendly">
                    </div>
                    <h3 class="feature-title">User-Friendly</h3>
                    <svg class="chevron" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="feature-content">
                    <p>Intuitive interface and multi-protocol support (MQTT, CoAP, HTTP) enable fast deployment across diverse device ecosystems.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="bottom">
    <div class="contact-us-banner">
        <div class="contact-us-banner-content">
            <h2>Ready to bring intelligence to the network edge?</h2>
            <div class="contact-us-banner-buttons">
                <a id="Products_Edge_TryEdgeNow" href="/docs/edge/getting-started/" target="_blank" class="bottom-button gtm_button">Get started now</a>
            </div>
        </div>
        <img src="/images/edge/offline-edge.svg" alt="Edge icon">
    </div>
</section>


<script>
function switchProductTab(tabId, event) {
  var tabs = document.querySelectorAll('.scenario-tab');
  tabs.forEach(function(tab) {
    tab.classList.remove('active');
  });
  var categories = document.querySelectorAll('.scenario-category');
  categories.forEach(function(cat) {
    cat.classList.remove('active');
  });
  event.target.closest('.scenario-tab').classList.add('active');
  var category = document.getElementById('scenario-cat-' + tabId);
  if (category) category.classList.add('active');
}

function toggleFeature(headerElement) {
  var card = headerElement.closest('.feature-card');
  var allCards = document.querySelectorAll('.feature-card');
  var cardsArray = Array.from(allCards);

  if (window.innerWidth <= 1000) {
    allCards.forEach(function(c) {
      if (c !== card) {
        c.classList.remove('open');
        c.classList.remove('active');
      }
    });
    card.classList.toggle('open');
    card.classList.toggle('active');
  } else {
    var cardIndex = cardsArray.indexOf(card);
    var rowIndex = Math.floor(cardIndex / 3);

    var rowStart = rowIndex * 3;
    var rowEnd = Math.min(rowStart + 3, cardsArray.length);
    var rowCards = cardsArray.slice(rowStart, rowEnd);

    var isRowOpen = rowCards.some(function(c) { return c.classList.contains('open'); });

    rowCards.forEach(function(c) {
      if (isRowOpen) {
        c.classList.remove('open');
      } else {
        c.classList.add('open');
      }
    });

    allCards.forEach(function(c) { c.classList.remove('active'); });
    if (!isRowOpen) {
      card.classList.add('active');
    }
  }
}
</script>