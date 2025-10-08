---
layout: case-studies
title: Securing Critical Communication with ThingsBoard | TJK-Solutions
notitle: "true"
customTitle: "true"
description: Discover how TJK-Solutions uses ThingsBoard to monitor its Meshtastic-based emergency communication network — ensuring visibility and reliability even offline.
---

<div class="case-study-page-wrapper">
    <section class="case-study-hero">
        <div class="card">
            <div class="text">
                <p class="category">DISASTER AND CIVIL PROTECTION</p>
                <h1>Securing Critical Communication: How TJK-Solutions Uses ThingsBoard to Monitor Meshtastic Infrastructure in Disaster Response</h1>
                <div class="image inner" style="background-image: url('/images/case-studies/tjk-solutions.webp')">
                    <img src="/images/case-studies/tjk-solutions.svg" title="TJK-solutions" alt="TJK-solutions logo" width="126" height="56">
                </div>
                <p>TJK-Solutions is a German IoT and environmental technology company specializing in smart monitoring solutions for water management, weather observation, and critical infrastructure. Beyond these areas, the company is also deeply involved in projects related to IoT, LoRaWAN, and Smart Village / Smart City development, helping municipalities and organizations implement scalable, connected systems for digital transformation.</p>
                <p>Driven by the need for resilient and self-sufficient communication systems, TJK-Solutions develops and operates self-managed IoT platforms that remain fully functional even when public infrastructure fails.</p>
                <p>As part of a large-scale disaster management exercise conducted in the municipality of Am Mellensee (Brandenburg, Germany), TJK-Solutions deployed a Meshtastic-based emergency communication network to test how decentralized systems can ensure reliable information flow under crisis conditions. To maintain full visibility of this critical infrastructure, the company implemented ThingsBoard Professional Edition (PE) on local servers — enabling continuous real-time monitoring of nodes, routers, and connections essential for emergency coordination and disaster response.</p>
            </div>
            <div class="image large" style="background-image: url('/images/case-studies/tjk-solutions.webp')">
                <img src="/images/case-studies/tjk-solutions.svg" title="TJK-solutions" alt="TJK-solutions logo" width="126" height="56">
            </div>
        </div>
    </section>
    <section class="statistics">
        <div class="block">
            <p>
                {% include number-animation.html startNum = 1 targetNum = 33 %}
            </p>
            <p>Meshtastic devices deployed</p>
        </div>
        <div class="block">
            <p>
                {% include number-animation.html startNum = 1 targetNum = 10 %}
            </p>
            <p>autonomous sub-networks across Am Mellensee</p>
        </div>
        <div class="block">
            <p>
                {% include number-animation.html startNum = 1 targetNum = 104 %}.{% include number-animation.html startNum = 1 targetNum = 4 %}
            </p>
            <p>km² coverage area</p>
        </div>
    </section>
    <section class="authored-quote">
        <img src="/images/case-studies/tom-jonas-krüger.webp" title="Founder & CEO of TJK-Solutions" alt="Tom Jonas Krüger" width="658" height="424">
        <div class="text">
            <h2>TJK-Solutions</h2>
            <p class="quote">“Thanks to ThingsBoard, we can continuously monitor our entire Meshtastic emergency network — even when the public internet or power grid fails. It gives us the transparency and confidence we need in crisis situations.”</p>
            <p class="author">Tom Jonas Krüger</p>
            <p class="title">Founder & CEO of TJK-Solutions</p>
        </div>
    </section>
    <section class="problem">
        <div class="title-block">
            <h2>What problem did they face?</h2>
            <p>TJK-Solutions needed a reliable and self-hosted platform to monitor the status of its Meshtastic-based emergency communication network. There was no existing tool capable of providing a real-time overview, device health checks, and alerts — especially one that could operate fully offline and remain independent from public infrastructure.</p>
        </div>
        <div class="cards-row">
            <div class="card">
                <h3>Challenges</h3>
                <ul>
                    <li>
                        <i class="far fa-question-circle"></i>
                        <p>A centralized, always-available overview of all Meshtastic devices.</p>
                    </li>
                    <li>
                        <i class="far fa-question-circle"></i>
                        <p>Continuous monitoring of battery voltage and connectivity for SenseCAP P1 Solar Routers.</p>
                    </li>
                    <li>
                        <i class="far fa-question-circle"></i>
                        <p>Historical data trends and visual analytics to detect weak nodes.</p>
                    </li>
                    <li>
                        <i class="far fa-question-circle"></i>
                        <p>Push notifications for outages or anomalies.</p>
                    </li>
                    <li>
                        <i class="far fa-question-circle"></i>
                        <p>With 33 active Meshtastic devices covering 104.4 km² and serving 7 224 residents, manual monitoring was no longer feasible.</p>
                    </li>
                </ul>
            </div>
            <div class="card">
                <h3>Key results</h3>
                <ul>
                    <li>
                        <i class="far fa-check-circle"></i>
                        <p>ThingsBoard PE provided a single real-time view of all 33 Meshtastic devices across 10 districts and 104.4 km², replacing manual supervision with automated control.</p>
                    </li>
                    <li>
                        <i class="far fa-check-circle"></i>
                        <p>Continuous monitoring of battery voltage, connectivity, and signal strength ensures reliable communication even during outages.</p>
                    </li>
                    <li>
                        <i class="far fa-check-circle"></i>
                        <p>Historical telemetry in ThingsBoard helps detect weak nodes early, enabling proactive maintenance and higher network reliability.</p>
                    </li>
                    <li>
                        <i class="far fa-check-circle"></i>
                        <p>The Rule Engine sends instant notifications on device failures or voltage drops, ensuring rapid response to critical issues.</p>
                    </li>
                    <li>
                        <i class="far fa-check-circle"></i>
                        <p>Local deployment of ThingsBoard PE keeps all monitoring operational during blackouts, securing data availability in crisis conditions.</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <section class="tb-power mb">
        <h2>How ThingsBoard powers TJK-Solutions?</h2>
        <p>TJK-Solutions deployed a self-hosted ThingsBoard PE instance within its secure local network to ensure operation even during total internet outages.</p>
        <div class="block">
            <div class="text">
                <h3>MQTT integration</h3>
                <p>The Meshtastic telemetry data (voltage, signal strength, hops, uptime, etc.) is transmitted to ThingsBoard via a dedicated MQTT broker.</p>
            </div>
            <img src="/images/case-studies/tjk-solutions-1.webp" title="Seamless integration with industrial equipment" alt="Seamless integration with industrial equipment" width="450" height="240">
        </div>
        <div class="block">
            <div class="text">
                <h3>Data converter & uplink automation</h3>
                <p>ThingsBoard’s integration engine automatically creates and configures new devices as soon as they transmit data. Attributes such as device type, label, and location are assigned dynamically.</p>
            </div>
            <img src="/images/case-studies/tjk-solutions-2.webp" title="Wireless data transmission enabled by ThingsBoard and LoRaWAN" alt="Wireless data transmission enabled by ThingsBoard and LoRaWAN" width="450" height="240">
        </div>
        <div class="block">
            <div class="text">
                <h3>Dashboard visualization</h3>
                <p>A custom dashboard provides a real-time overview, including total, online, and offline nodes; an interactive map showing live status; and a data table for telemetry such as battery voltage, RSSI, and hop distance.</p>
            </div>
            <img src="/images/case-studies/tjk-solutions-3.webp" title="Advanced data aggregation and digital twin vsualization" alt="Advanced data aggregation and digital twin vsualization" width="450" height="240">
        </div>
        <div class="block">
            <div class="text">
                <h3>Offline-resilient architecture</h3>
                <p>By running ThingsBoard PE on local servers, TJK-Solutions ensures full operation even during blackouts. This guarantees data security, autonomy, and consistent monitoring for critical infrastructure.</p>
            </div>
            <img src="/images/case-studies/tjk-solutions-4.webp" title="Real-time performance monitoring" alt="Real-time performance monitoring" width="450" height="240">
        </div>
    </section>
    {% include contact-us-banner.liquid linkLabel='Use cases' link='/iot-use-cases/' %}
    <section class="tb-help">
        <h2>How ThingsBoard helps civil protection improve operations with IoT</h2>
        <div class="block">
            <div class="text">
                <h3>Integration & data converters</h3>
                <p>Enabled seamless ingestion of Meshtastic data into ThingsBoard, eliminating the need for external scripts or manual configuration.</p>
                <p>How It Works:</p>
                <ul>
                    <li><p>Use converters to parse JSON, Base64, binary or hex payloads.</p></li>
                    <li><p>Connect external systems through  integrations</p></li>
                </ul>
            </div>
            <div class="image-container">
                <img src="/images/case-studies/entities-table.webp" title="Thingsboard entities table widget" alt="Thingsboard entities table widget" width="776" height="776">
                <img src="/images/case-studies/maps-widgets.webp" title="Thingsboard maps widgets widget" alt="Thingsboard maps widgets widget" width="776" height="776">
            </div>
        </div>
        <div class="block">
            <div class="text">
                <h3>Dashboarding & visualization</h3>
                <p>Allowed clear and intuitive presentation of real-time and historical data across the distributed emergency network.</p>
                <p>How It Works:</p>
                <ul>
                    <li><p>Visualize GPS coordinates, movement, and deployment zones with dynamic maps.</p></li>
                    <li><p>Use Timeseries charts for historical analysis of critical signals (battery voltage, sensor triggers).</p></li>
                </ul>
            </div>
            <div class="image-container">
                <img src="/images/case-studies/battery-level.webp" title="Thingsboard battery level widget" alt="Thingsboard battery level widget" width="388" height="388">
                <img src="/images/case-studies/time-series-chart.webp" title="Thingsboard time series chart widget" alt="Thingsboard time series chart widget" width="776" height="776">
            </div>
        </div>
        <div class="block">
            <div class="text">
                <h3>Rule engine & notifications</h3>
                <p>Used for automated alerts and push notifications in case of device failure or voltage drop.</p>
                <p>How It Works:</p>
                <ul>
                    <li><p>Monitor telemetry such as low voltage or sensor anomalies.</p></li>
                    <li><p>Trigger notifications through SMS, email and more.</p></li>
                </ul>
            </div>
            <div class="image-container">
                <img src="/images/case-studies/alarms-table.webp" title="Thingsboard alarms table widget" alt="Thingsboard alarms table widget" width="776" height="776">
                <img src="/images/case-studies/notification-widget.webp" title="Thingsboard notification widget" alt="Thingsboard notification widget" width="776" height="776">
            </div>
        </div>
        <div class="block">
            <div class="text">
                <h3>Local deployment & security</h3>
                <p>The self-managed PE setup ensures that all monitoring remains operational and confidential within the municipality’s protected environment.</p>
                <p>How It Works:</p>
                <ul>
                    <li><p>Support for TLS, RBAC, and OAuth2 for SSO and fine-grained access control.</p></li>
                    <li><p>Set up HA clusters, regular backups, and custom firewall rules for disaster readiness.</p></li>
                </ul>
            </div>
            <div class="image-container">
                <img src="/images/case-studies/network-status.webp" title="Thingsboard network status widget" alt="Thingsboard network status widget" width="388" height="388">
                <img src="/images/case-studies/signal-strength-hop-count.webp" title="Thingsboard signal strength widget" alt="Thingsboard signal strength widget" width="388" height="388">
            </div>
        </div>
        {% include default-carousel.liquid collectionMap = 'case-studies' collectionKey = 'tjk-solutions' %}
        <br>
        <br>
        {% include services-banner.liquid %}
    </section>
    <section class="contact">
        <div class="bg-wrap" style="background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url(/images/case-studies/handshake.webp)">
            <div class="outer-frame">
                <div class="inner-frame">
                    <img src="/images/case-studies/thingsboard.svg" title="ThingsBoard logo" alt="ThingsBoard logo" width="298" height="56">
                    <img src="/images/case-studies/tjk-solutions.svg" title="TJK-solutions" alt="TJK-solutions logo" width="126" height="56">
                </div>
            </div>
        </div>
        <p>Real stories, real impact — share your experience with ThingsBoard!</p>
        <a id="CaseStudy_TJK_ContactUs" target="_blank" href="/docs/contact-us/" class="button gtm_button">Contact us</a>
    </section>
</div>