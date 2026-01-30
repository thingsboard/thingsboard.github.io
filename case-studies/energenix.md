---
layout: case-studies
title: Energenix Scales Solar SCADA & Analytics on ThingsBoard
notitle: "true"
customTitle: "true"
description: Energenix unifies 80+ sites and monitors 120+ MW on an AWS-hosted ThingsBoard Cloud + ThingsBoard Edge setup—real-time KPI dashboards, rule-engine alarms, on-site monitoring and control, and automated reporting.
---

<div class="case-study-page-wrapper">
    <section class="case-study-hero">
        <div class="card">
            <div class="text">
                <p class="category">SMART ENERGY</p>
                <h1>Scaling renewable energy intelligence: how Energenix uses ThingsBoard to monitor and optimize 120+ MW of solar power assets</h1>
                <div class="image inner" style="background-image: url('/images/case-studies/energenix.webp')">
                    <img src="/images/case-studies/energenix.svg" title="Energenix" alt="Energenix logo" width="200" height="56">
                </div>
                <p>Energenix is a renewable energy intelligence and SCADA solutions provider operating across South Asia, delivering real-time monitoring, analytics, and control for utility-scale and commercial renewable energy assets. The company specializes in solar power plant performance monitoring, grid compliance reporting, and operational intelligence for asset owners, EPCs, and O&M teams.</p>
                <p>Energenix is powered by ThingsBoard, hosted on AWS, as its primary IoT and data intelligence platform. The solution has been developed and deployed by its technology partner Thingsnode, an IoT systems integrator and analytics company with deep expertise in energy systems and industrial data platforms.</p>
                <p class="no-margin">Today, Energenix monitors a consolidated renewable energy portfolio exceeding 120 MW, spanning:</p>
                <ul>
                    <li><p class="no-margin">Utility-scale solar parks</p></li>
                    <li><p class="no-margin">Commercial & industrial rooftop solar</p></li>
                    <li><p class="no-margin">Distributed generation sites across Sri Lanka, India, Bangladesh, and selected international deployments.</p></li>
                </ul>
            </div>
            <div class="image large" style="background-image: url('/images/case-studies/energenix.webp')">
                <img src="/images/case-studies/energenix.svg" title="Energenix" alt="Energenix logo" width="200" height="56">
            </div>
        </div>
    </section>
    <section class="statistics">
        <div class="block">
            <p>
                {% include number-animation.html startNum = 1 targetNum = 120 %}+
            </p>
            <p>MW of renewable energy assets monitored</p>
        </div>
        <div class="block">
            <p>
                {% include number-animation.html startNum = 1 targetNum = 80 %}+
            </p>
            <p>sites onboarded under a unified platform</p>
        </div>
        <div class="block">
            <p>{% include number-animation.html startNum = 1 targetNum = 24 %}/{% include number-animation.html startNum = 0 targetNum = 7 %}</p>
            <p>real-time visibility for asset owners and operators</p>
        </div>
    </section>
    <section class="authored-quote">
        <img class="h-auto" src="/images/case-studies/samantha-epa.webp" title="General Manager – Solar, Windforce PL, Samantha Epa" alt="Samantha Epa" width="658" height="424">
        <div class="text">
            <h2>Energenix</h2>
            <p class="quote">"Energenix has significantly improved visibility across our entire solar portfolio. Having real-time performance data, unified dashboards, and automated alerts in one platform has transformed how our teams monitor plants, identify issues, and make operational decisions. It has become an essential tool for managing and optimizing our renewable energy assets at scale."</p>
            <p class="author">Samantha Epa</p>
            <p class="title">General Manager – Solar, Windforce PL</p>
        </div>
    </section>
    <section class="problem">
        <div class="title-block">
            <h2>What problem did they face?</h2>
            <p>Before implementing Energenix on ThingsBoard, asset owners and operators faced several operational challenges:</p>
        </div>
        <div class="cards-row">
            <div class="card">
                <h3>Challenges</h3>
                <ul>
                    <li>
                        <i class="far fa-question-circle"></i>
                        <p>Fragmented monitoring systems across different inverter brands and sites.</p>
                    </li>
                    <li>
                        <i class="far fa-question-circle"></i>
                        <p>Limited real-time visibility into plant performance and losses.</p>
                    </li>
                    <li>
                        <i class="far fa-question-circle"></i>
                        <p>Manual and time-consuming performance reporting.</p>
                    </li>
                    <li>
                        <i class="far fa-question-circle"></i>
                        <p>High operational overhead in managing devices, users, and security.</p>
                    </li>
                    <li>
                        <i class="far fa-question-circle"></i>
                        <p>Difficulty scaling monitoring systems cost-effectively as MW capacity grew.</p>
                    </li>
                </ul>
            </div>
            <div class="card">
                <h3>Key results</h3>
                <ul>
                    <li>
                        <i class="far fa-check-circle"></i>
                        <p>Centralized monitoring across multi-vendor, multi-site portfolios.</p>
                    </li>
                    <li>
                        <i class="far fa-check-circle"></i>
                        <p>Faster fault detection and reduced Mean Time to Resolution (MTTR).</p>
                    </li>
                    <li>
                        <i class="far fa-check-circle"></i>
                        <p>Standardized dashboards and automated reporting.</p>
                    </li>
                    <li>
                        <i class="far fa-check-circle"></i>
                        <p>Scalable platform with predictable operational costs.</p>
                    </li>
                    <li>
                        <i class="far fa-check-circle"></i>
                        <p>Improved asset availability and performance transparency.</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <section class="tb-power mb">
        <h2>How ThingsBoard powers Energenix?</h2>
        <div class="block">
            <div class="text">
                <h3>Unified asset & device management</h3>
                <p>Energenix uses ThingsBoard's asset hierarchy and device model to represent complex renewable portfolios, from plant level down to inverters, meters, and weather stations. This abstraction allows operators to manage hundreds of sites without increasing operational complexity.</p>
            </div>
            <img src="/images/case-studies/energenix-1.webp" title="Unified asset & device management" alt="Unified asset & device management" width="450" height="250">
        </div>
        <div class="block">
            <div class="text">
                <h3>Real-time monitoring & visualization</h3>
                <p>Custom dashboards built on ThingsBoard provide real-time KPIs such as power output, energy yield, PR, CUF, and loss breakdowns. Different dashboards are tailored for operators, asset managers, and executives, ensuring clarity at every level.</p>
            </div>
            <img src="/images/case-studies/energenix-2.webp" title="Real-time monitoring & visualization" alt="Real-time monitoring & visualization" width="450" height="240">
        </div>
        <div class="block">
            <div class="text">
                <h3>Advanced rule engine & alerts</h3>
                <p>ThingsBoard's rule engine enables real-time alerts for inverter faults, grid outages, communication failures, and performance deviations. Automated notifications help teams act before issues escalate into revenue losses.</p>
            </div>
            <img src="/images/case-studies/energenix-3.webp" title="Advanced rule engine & alerts" alt="Advanced rule engine & alerts" width="450" height="240">
        </div>
        <div class="block">
            <div class="text">
                <h3>Fast on-site control with ThingsBoard Edge</h3>
                <p>ThingsBoard Edge enables Energenix to deliver low-latency monitoring and control directly at plant sites, allowing operational staff to respond instantly to events without reliance on cloud connectivity. This improves response times, enhances operational control, and ensures uninterrupted plant monitoring even during network disruptions.</p>
                <p><i>Photo: Energenix Solution at 10MW Solar power plant control room in Sri Lanka</i></p>
            </div>
            <img src="/images/case-studies/energenix-4.webp" title="Fast on-site control with ThingsBoard Edge" alt="Fast on-site control with ThingsBoard Edge" width="450" height="250">
        </div>
        <div class="block">
            <div class="text">
                <h3>Edge + Cloud for mission-critical reliability</h3>
                <p>ThingsBoard Edge enables Energenix to maintain continuous monitoring and control at plant level, while AWS-hosted ThingsBoard Cloud provides centralized analytics, dashboards, and long-term storage. This architecture significantly improves system resilience, reduces downtime risk, and ensures reliable operations across large renewable portfolios.</p>
                <p><i>Photo: Energenix Solution was presented to the president of Sri Lanka at the Disrupt Asia Summit 2025</i></p>
            </div>
            <img src="/images/case-studies/energenix-5.webp" title="Edge + Cloud for mission-critical reliability" alt="Edge + Cloud for mission-critical reliability" width="450" height="240">
        </div>
    </section>
    {% include contact-us-banner.liquid linkLabel='Use cases' link='/iot-use-cases/' %}
    <section class="tb-help">
        <h2>How ThingsBoard helps Energenix improve operations with IoT?</h2>
        <div class="block">
            <div class="text">
                <h3>Comprehensive device & security management</h3>
                <p>ThingsBoard handles device provisioning, authentication, and access control out-of-the-box. This eliminates the burden of building and maintaining custom IoT infrastructure, significantly reducing long-term maintenance costs.</p>
            </div>
            <div class="image-container">
                <img src="/images/case-studies/entities-table-4.webp" title="Thingsboard entities table widget" alt="Thingsboard entities table widget" width="776" height="776">
                <img src="/images/case-studies/hp-scada-energy.webp" title="Thingsboard HP SCADA energy widgets" alt="Thingsboard HP SCADA energy widgets" width="388" height="388">
            </div>
        </div>
        <div class="block">
            <div class="text">
                <h3>Powerful dashboards & data visualization</h3>
                <p>The platform's flexible widget system enables intuitive visualization of complex energy data, making performance trends and anomalies easy to interpret for both technical and non-technical users.</p>
            </div>
            <div class="image-container">
                <img src="/images/case-studies/digital_gauges.webp" title="Thingsboard digital gauges widgets" alt="Thingsboard digital gauges widgets" width="388" height="388">
                <img src="/images/case-studies/line-chart.webp" title="Thingsboard line chart widget" alt="Thingsboard line chart widget" width="776" height="776">
            </div>
        </div>
        <div class="block">
            <div class="text">
                <h3>Scalability without complexity</h3>
                <p>As Energenix expanded its portfolio toward 120+ MW, ThingsBoard scaled effortlessly. New plants and devices can be onboarded with minimal configuration, supporting rapid business growth.</p>
            </div>
            <div class="image-container">
                <img src="/images/case-studies/hierarchy-widget.webp" title="Thingsboard hierarchy widget" alt="Thingsboard hierarchy widget" width="776" height="776">
                <img src="/images/case-studies/maps-widgets.webp" title="Thingsboard maps widgets widget" alt="Thingsboard maps widgets widget" width="776" height="776">
            </div>
        </div>
        <div class="block">
            <div class="text">
                <h3>Lower total cost of ownership</h3>
                <p>By leveraging a mature IoT platform, Energenix avoids high engineering overhead related to device management, security hardening, and platform stability - allowing teams to focus on value-added analytics and customer outcomes.</p>
            </div>
            <div class="image-container">
                <img src="/images/case-studies/alarms-table.webp" title="Thingsboard alarms table widget" alt="Thingsboard alarms table widget" width="776" height="776">
                <img src="/images/case-studies/bar-chart.webp" title="Thingsboard bar chart widget" alt="Thingsboard bar chart widget" width="776" height="776">
            </div>
        </div>
        <div class="block">
            <div class="text">
                <h3>Why ThingsBoard was the right choice</h3>
                <p>ThingsBoard’s comprehensive IoT capabilities—combined with AWS cloud infrastructure—enable Energenix to deliver a stable, secure, and scalable renewable energy monitoring solution without the risks and costs associated with custom-built platforms.</p>
                <p>For Energenix and its customers, this translates into:</p>
                <ul>
                    <li><p>Faster deployment</p></li>
                    <li><p>Lower operational risk</p></li>
                    <li><p>Higher system reliability</p></li>
                    <li><p>Sustainable long-term growth</p></li>
                </ul>
            </div>
            <div class="image-container">
                <img src="/images/case-studies/tb-logo-card.webp" title="Thingsboard logo card" alt="Thingsboard logo card" width="388" height="388">
                <img src="/images/case-studies/energenix-logo-card.webp" title="Energenix logo card" alt="Energenix logo card" width="388" height="388">
            </div>
        </div>
        {% include services-banner.liquid %}
    </section>
    <section class="authored-quote">
        <img class="h-auto" src="/images/case-studies/Anuruddha_Tennakoon-Migara_Amithodhana.webp" title="Anuruddha Tennakoon and Migara Amithodhana" alt="Anuruddha Tennakoon and Migara Amithodhana" width="658" height="424">
        <div class="text">
            <h2>Conclusion</h2>
            <p class="quote">By adopting ThingsBoard as its core IoT platform, Energenix has successfully transformed renewable energy monitoring into a scalable, productized intelligence solution. The platform now serves as the backbone for managing a rapidly growing renewable energy portfolio, empowering asset owners to maximize performance, reduce losses, and operate with confidence.</p>
            <p class="author">Anuruddha Tennakoon and Migara Amithodhana</p>
            <p class="title">Directors, Co-Founderes</p>
        </div>
    </section>
    <section class="contact">
        <div class="bg-wrap" style="background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url(/images/case-studies/handshake.webp)">
            <div class="outer-frame">
                <div class="inner-frame">
                    <img src="/images/case-studies/thingsboard.svg" title="ThingsBoard logo" alt="ThingsBoard logo" width="298" height="56">
                    <img src="/images/case-studies/energenix.svg" title="Energenix" alt="Energenix logo" width="200" height="56">
                </div>
            </div>
        </div>
        <p>Real stories, real impact — share your experience with ThingsBoard!</p>
        <a id="CaseStudy_Energenix_ContactUs" target="_blank" href="/docs/contact-us/" class="button gtm_button">Contact us</a>
    </section>
</div>
