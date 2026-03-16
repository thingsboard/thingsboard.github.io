---
layout: case-studies
title: "EnerGroup + ThingsBoard: Wireless Room Heating Control"
notitle: "true"
customTitle: "true"
description: Discover how EnerGroup improved comfort and operational visibility with wireless heating control, heat pump supervision, and secure dashboards on ThingsBoard.
---

<div class="case-study-page-wrapper">
    <section class="case-study-hero">
        <div class="card">
            <div class="text">
                <p class="category">SMART ENERGY</p>
                <h1>Smart building energy management: how EnerGroup enabled wireless room-level heating control with ThingsBoard</h1>
                <div class="image inner" style="background-image: url('/images/case-studies/energroup.webp')">
                    <img src="/images/case-studies/energroup.svg" title="EnerGroup" alt="EnerGroup logo" width="200" height="38">
                </div>
                <p>EnerGroup is a Swiss energy and automation integrator specializing in smart building technologies, energy renovation projects, and IoT-driven supervision platforms. The company supports residential and commercial building owners in reducing energy consumption, improving occupant comfort, and gaining full visibility into their technical installations.</p>
                <p>EnerGroup delivers end-to-end solutions covering renewable energy production, heating and domestic hot water systems, building automation (MCR), IoT connectivity, and digital supervision through its proprietary platform EnerMon, built on ThingsBoard.</p>
                <p>With a strong focus on real-world renovation constraints, EnerGroup emphasizes scalable, open, and non-intrusive solutions that can be deployed in both new and existing buildings.</p>
            </div>
            <div class="image large" style="background-image: url('/images/case-studies/energroup.webp')">
                <img src="/images/case-studies/energroup.svg" title="EnerGroup" alt="EnerGroup logo" width="200" height="38">
            </div>
        </div>
    </section>
    <section class="statistics">
        <div class="block">
            <p>
                {% include number-animation.html startNum = 1 targetNum = 30 %}
            </p>
            <p>Milesight LoRaWAN devices used for heating regulation</p>
        </div>
        <div class="block">
            <p>
                {% include number-animation.html startNum = 1 targetNum = 27 %}
            </p>
            <p>M-Bus energy meters monitored through the platform</p>
        </div>
        <div class="block">
            <p>{% include number-animation.html startNum = 1 targetNum = 2 %}</p>
            <p>Heat pumps supervised and controlled via Modbus RTU (RS485)</p>
        </div>
    </section>
    <section class="quote-with-mark fill-background">
        <img src="/images/case-studies/quote.svg" title="Quote mark" alt="Quote mark" width="96" height="90">
        <div class="quote-text">
            <p>“The new centralized energy system combined with the ThingsBoard-based supervision platform provides both improved comfort for residents and full operational visibility for the building management.”</p>
            <h2>Representatives of the Pyxis PPE, Val de Bagnes</h2>
        </div>
    </section>
    <section class="problem">
        <div class="title-block">
            <h2>What problem did they face?</h2>
        </div>
        <div class="cards-row">
            <div class="card">
                <h3>Challenges</h3>
                <ul>
                    <li>
                        <i class="far fa-question-circle"></i>
                        <p>Before the renovation, the Pyxis residential building faced several challenges.</p>
                    </li>
                    <li>
                        <i class="far fa-question-circle"></i>
                        <p>Decentralized electric domestic hot water systems in each apartment, resulting in high energy consumption.</p>
                    </li>
                    <li>
                        <i class="far fa-question-circle"></i>
                        <p>No centralized monitoring or control of heating and energy usage.</p>
                    </li>
                    <li>
                        <i class="far fa-question-circle"></i>
                        <p>Limited visibility for the building operator.</p>
                    </li>
                    <li>
                        <i class="far fa-question-circle"></i>
                        <p>Constraints related to renovation works in occupied apartments.</p>
                    </li>
                    <li>
                        <i class="far fa-question-circle"></i>
                        <p>Lack of flexibility for future optimization.</p>
                    </li>
                </ul>
            </div>
            <div class="card">
                <h3>Key results</h3>
                <ul>
                    <li>
                        <i class="far fa-check-circle"></i>
                        <p>Centralized renewable heat and DHW production using heat pumps.</p>
                    </li>
                    <li>
                        <i class="far fa-check-circle"></i>
                        <p>Wireless room-level heating control without intrusive cabling.</p>
                    </li>
                    <li>
                        <i class="far fa-check-circle"></i>
                        <p>Improved comfort for tenants with individual temperature control.</p>
                    </li>
                    <li>
                        <i class="far fa-check-circle"></i>
                        <p>Centralized supervision of technical and energy systems.</p>
                    </li>
                    <li>
                        <i class="far fa-check-circle"></i>
                        <p>A scalable digital foundation for future optimization and analytics.</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <section class="tb-power mb">
        <h2>How ThingsBoard powers the EnerGroup?</h2>
        <div class="block">
            <div class="text">
                <h3>Wireless room temperature monitoring</h3>
                <p>Energroup deployed battery-powered Milesight WT401 thermostats in every room of each apartment. These devices continuously measure room temperatures and transmit data via LoRaWAN to the backend systems. ThingsBoard collects, stores, and visualizes this data, enabling real-time monitoring and historical analysis.</p>
            </div>
            <img src="/images/case-studies/energroup-1.webp" title="Wireless room temperature monitoring" alt="Wireless room temperature monitoring" width="450" height="240">
        </div>
        <div class="block">
            <div class="text">
                <h3>Heating loop control via LoRaWAN actuators</h3>
                <p>At the heating manifold level, Milesight WS558 actuators were installed to control individual heating loops. ThingsBoard manages the bidirectional communication between room demand and hydraulic actuation, ensuring precise and responsive temperature regulation across the building.</p>
            </div>
            <img src="/images/case-studies/energroup-2.webp" title="Heating loop control via LoRaWAN actuators" alt="Heating loop control via LoRaWAN actuators" width="450" height="240">
        </div>
        <div class="block">
            <div class="text">
                <h3>Centralized supervision with EnerMon</h3>
                <p>Energroup uses EnerMon, its branded platform based on ThingsBoard, to provide a unified view of the entire installation. The platform aggregates data from heating systems, domestic hot water production, and energy sources, offering both tenant-level interfaces and operator dashboards.</p>
            </div>
            <img src="/images/case-studies/energroup-3.webp" title="Centralized supervision with EnerMon" alt="Centralized supervision with EnerMon" width="450" height="240">
        </div>
        <div class="block">
            <div class="text">
                <h3>Secure and scalable IoT infrastructure</h3>
                <p>ThingsBoard is deployed on a dedicated server and integrated with a ChirpStack LoRaWAN Network and Application Server hosted by Energroup. This architecture ensures data security, high availability, and independence from proprietary cloud ecosystems.</p>
            </div>
            <img src="/images/case-studies/energroup-4.webp" title="Secure and scalable IoT infrastructure" alt="Secure and scalable IoT infrastructure" width="450" height="240">
        </div>
    </section>
    {% include contact-us-banner.liquid linkLabel='Use cases' link='/iot-use-cases/' %}
    <section class="tb-help">
        <h2>How ThingsBoard helps smart buildings improve operations with IoT</h2>
        <div class="block">
            <div class="text">
                <h3>Custom dashboards</h3>
                <p>ThingsBoard dashboards provide intuitive visualizations for both tenants and operators, including room temperatures, setpoints, heating status, and system overview screens.</p>
            </div>
            <div class="image-container">
                <img src="/images/case-studies/time-series-chart.webp" title="ThingsBoard time series chart widget" alt="ThingsBoard time series chart widget" width="776" height="776">
                <img src="/images/case-studies/alarms-table.webp" title="ThingsBoard alarm table widget" alt="ThingsBoard alarm table widget" width="388" height="388">
            </div>
        </div>
        <div class="block">
            <div class="text">
                <h3>Asset and device hierarchies</h3>
                <p>The platform models the building structure using assets (building → floors → apartments→ rooms), allowing Energroup to organize data logically and scale the solution easily to larger portfolios.</p>
            </div>
            <div class="image-container">
                <img src="/images/case-studies/maps-widgets.webp" title="ThingsBoard map widgets" alt="ThingsBoard map widgets" width="388" height="388">
                <img src="/images/case-studies/entities-table.webp" title="Thingsboard entities table widget" alt="Thingsboard entities table widget" width="776" height="776">
            </div>
        </div>
        <div class="block">
            <div class="text">
                <h3>Rule engine and automation</h3>
                <p>ThingsBoard’s rule engine enables automated data processing, condition-based actions, and integration with external systems, forming the basis for advanced regulation and optimization strategies.</p>
            </div>
            <div class="image-container">
                <img src="/images/case-studies/hp-curcuit-breaker.webp" title="Thingsboard hp circuit breaker widget" alt="Thingsboard hp circuit breaker widget" width="776" height="776">
                <img src="/images/case-studies/markdown-html-widget.webp" title="ThingsBoard markdown html widget" alt="ThingsBoard markdown html widget" width="776" height="776">
            </div>
        </div>
        <div class="block">
            <div class="text">
                <h3>Role-based access control</h3>
                <p>Different user roles ensure that tenants can only access their own apartment data, while operators have full visibility and control over the entire installation.</p>
            </div>
            <div class="image-container">
                <img src="/images/case-studies/roles-table.webp" title="ThingsBoard roles table" alt="ThingsBoard roles table" width="776" height="776">
                <img src="/images/case-studies/hierarchy-widget.webp" title="ThingsBoard hierarchy table" alt="ThingsBoard hierarchy table" width="388" height="388">
            </div>
        </div>
        {% include services-banner.liquid %}
    </section>
    <section class="contact">
        <div class="bg-wrap" style="background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url(/images/case-studies/handshake.webp)">
            <div class="outer-frame">
                <div class="inner-frame">
                    <img src="/images/case-studies/thingsboard.svg" title="ThingsBoard logo" alt="ThingsBoard logo" width="298" height="56">
                    <img src="/images/case-studies/energroup.svg" title="EnerGroup" alt="EnerGroup logo" width="200" height="38">
                </div>
            </div>
        </div>
        <p>Real stories, real impact — share your experience with ThingsBoard!</p>
        <a id="CaseStudy_EnerGroup_ContactUs" target="_blank" href="/docs/contact-us/" class="button gtm_button">Contact us</a>
    </section>
</div>
