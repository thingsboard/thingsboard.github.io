---
layout: case-studies
title: "CRAI IIoT Case Study: Remote Control & Data Acquisition"
notitle: "true"
customTitle: "true"
description: See how CRAI unified generators, pumps, VFDs and PLCs on ThingsBoard—real-time dashboards, remote actions, RBAC, and event-driven alerts across sites.
---

<div class="case-study-page-wrapper">
    <section class="case-study-hero">
        <div class="card">
            <div class="text">
                <p class="category">INDUSTRIAL AUTOMATION</p>
                <h1>IoT in industrial automation: how CRAI enables remote control and data acquisition with ThingsBoard</h1>
                <div class="image inner" style="background-image: url('/images/case-studies/crai.webp')">
                    <img src="/images/case-studies/crai.svg" title="CRAI Automatización" alt="CRAI Automatización logo" width="320" height="57">
                </div>
                <p>CRAI, which stands for Centro de Reparación y Automatización Industrial (Industrial Repair and Automation Centre), is an industrial automation and control company based in Honduras. The company specializes in industrial automation solutions, control systems, and the repair of industrial electronic equipment. In recent years, CRAI has expanded into Industrial IoT (IIoT), offering remote monitoring and control services that provide clients with real-time visibility, operational control, and automated alerts across their industrial systems.</p>
            </div>
            <div class="image large" style="background-image: url('/images/case-studies/crai.webp')">
                <img src="/images/case-studies/crai.svg" title="CRAI Automatización" alt="CRAI Automatización logo" width="320" height="57">
            </div>
        </div>
    </section>
    <section class="statistics">
        <div class="block">
            <p>
                {% include number-animation.html startNum = 1 targetNum = 15 useGrouping = true %}+
            </p>
            <p>experience in industrial automation and control systems</p>
        </div>
        <div class="block">
            <p>
                {% include number-animation.html startNum = 1 targetNum = 1000 useMobileMode = true useGrouping = true %}+
            </p>
            <p>completed service engagements and automation solutions delivered to clients across multiple industries</p>
        </div>
        <div class="block">
            <p>
                {% include number-animation.html startNum = 1 targetNum = 50 useGrouping = true %}+
            </p>
            <p>Trusted by companies for industrial automation, monitoring, and control solutions</p>
        </div>
    </section>
    <section class="problem">
        <div class="title-block">
            <h2>What problem did they face?</h2>
            <p>Industrial equipment such as generators, motors, water pumps, VFDs, and PLCs requires continuous monitoring to ensure reliable operation and efficient use of resources. Prior to adopting an IoT platform, CRAI and its customers lacked a centralized system to monitor and control devices in real time, provide remote visibility and access to stakeholders, implement a reliable alert and alarm system, and analyze historical performance and consumption data. This made it difficult to detect issues early, respond to abnormal events, and make informed operational decisions based on accurate data.</p>
        </div>
        <div class="cards-row">
            <div class="card">
                <h3>Challenges</h3>
                <ul>
                    <li>
                        <i class="far fa-question-circle"></i>
                        <p>Lack of real-time visibility into equipment status and limited remote control of industrial devices.</p>
                    </li>
                    <li>
                        <i class="far fa-question-circle"></i>
                        <p>No centralized access to historical data for analyzing system performance and resource consumption over time.</p>
                    </li>
                    <li>
                        <i class="far fa-question-circle"></i>
                        <p>Limited ability for multiple users (technicians, engineers, management) to securely access and interact with operational dashboards.</p>
                    </li>
                    <li>
                        <i class="far fa-question-circle"></i>
                        <p>Delayed detection of critical events (e.g., generator start/stop, low fuel level, VFD faults).</p>
                    </li>
                    <li>
                        <i class="far fa-question-circle"></i>
                        <p>Difficulty scaling monitoring and control as additional devices and locations were integrated.</p>
                    </li>
                </ul>
            </div>
            <div class="card">
                <h3>Key results</h3>
                <ul>
                    <li>
                        <i class="far fa-check-circle"></i>
                        <p>Real-time monitoring and remote control of industrial devices.</p>
                    </li>
                    <li>
                        <i class="far fa-check-circle"></i>
                        <p>Centralized access to historical data for energy, water, and performance analysis to support system optimization and reliability.</p>
                    </li>
                    <li>
                        <i class="far fa-check-circle"></i>
                        <p>Role-based access enabling technicians and management to securely view and interact with IIoT dashboards from anywhere.</p>
                    </li>
                    <li>
                        <i class="far fa-check-circle"></i>
                        <p>Automated alarms and event-driven notifications triggered by operational changes, equipment state transitions, and threshold violations.</p>
                    </li>
                    <li>
                        <i class="far fa-check-circle"></i>
                        <p>A scalable IIoT infrastructure capable of supporting new devices, new users, and multi-site deployments with minimal configuration effort.</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <section class="tb-power mb">
        <h2>How ThingsBoard powers CRAI?</h2>
        <div class="block">
            <div class="text">
                <h3>ThingsBoard serves as the core IIoT platform</h3>
                <p>ThingsBoard serves as the core IIoT platform connecting CRAI’s industrial control panels, PLCs, gateways, energy meters, and field devices into a single monitoring and management system. Equipment is integrated through gateways and edge devices, enabling secure real-time telemetry transmission and remote control of industrial assets. This architecture unifies data from diverse industrial hardware into a structured IoT environment. As a result, technicians and engineers can monitor and manage multiple systems and sites remotely from a centralized interface.</p>
                <p><i>Photo:  Industrial control panel integrating PLC, energy meters (3-phase analyzers), networking equipment, and edge computing devices.</i></p>
            </div>
            <img src="/images/case-studies/crai-1.webp" title="Industrial control panel integrating PLC, energy meters (3-phase analyzers), networking equipment, and edge computing devices" alt="Industrial control panel integrating PLC, energy meters (3-phase analyzers), networking equipment, and edge computing devices" width="900" height="480">
        </div>
        <div class="block">
            <div class="text">
                <h3>Real-time monitoring, alerts, and remote actions</h3>
                <p>CRAI uses ThingsBoard dashboards to visualize live operational parameters from VFD-driven water pump systems, including pressure (PSI), frequency, voltage, current, and run/fault states. Operators can immediately see equipment status and receive alerts when abnormal conditions or faults occur. In addition, remote actions such as ‘Reset’, ‘Force Run/Force Stop’ commands can be triggered directly from the dashboard. This enables faster response to incidents and reduces the need for on-site intervention. </p>
                <p><i>Photo:  ThingsBoard mobile dashboard showing VFD telemetry and control actions.</i></p>
            </div>
            <img src="/images/case-studies/crai-2.webp" title="ThingsBoard mobile dashboard showing VFD telemetry and control actions" alt="ThingsBoard mobile dashboard showing VFD telemetry and control actions" width="450" height="240">
        </div>
        <div class="block">
            <div class="text">
                <h3>Historical analytics for performance and energy insights</h3>
                <p>ThingsBoard stores historical telemetry from generators, including phase voltages and currents, enabling CRAI and its clients to analyze equipment behavior over time. Interactive time-series charts allow operators to zoom into specific time windows, such as periods when the generator is running to investigate load patterns and voltage stability. This historical visibility helps identify abnormal trends, peak loads, performance, use of resources, uptime, and much more. As a result, CRAI and its clients can analyze this data anytime to support preventive maintenance, system efficiency and reliability.</p>
                <p><i>Photo:  ThingsBoard time-series charts showing generator voltage and current trends over time.</i></p>
            </div>
            <img src="/images/case-studies/crai-3.webp" title="ThingsBoard time-series charts showing generator voltage and current trends over time" alt="ThingsBoard time-series charts showing generator voltage and current trends over time" width="450" height="240">
        </div>
        <div class="block">
            <div class="text">
                <h3>Daily energy and water consumption tracking with aggregated bar charts</h3>
                <p>CRAI uses ThingsBoard time-series widgets with bar charts to visualize energy (kWh) and water consumption (m³) across facilities. Aggregated views (minimum, maximum, average, and total) provide quick insight into daily usage patterns and overall resource consumption. This enables operators and managers to compare consumption across different time periods, identify unusual spikes, and gain a deeper understanding of asset and facility performance. As a result, CRAI and its clients can make informed decisions to optimize energy and water usage, reduce waste, and control operating costs.</p>
                <p><i>Photo:  ThingsBoard time-series bar chart showing daily kWh consumption and water usage in cubic meters.</i></p>
            </div>
            <img src="/images/case-studies/crai-4.webp" title="ThingsBoard time-series bar chart showing daily kWh consumption and water usage in cubic meters" alt="ThingsBoard time-series bar chart showing daily kWh consumption and water usage in cubic meters" width="450" height="240">
        </div>
        <div class="block">
            <div class="text">
                <h3>Intelligent alarms and event-based notifications</h3>
                <p>ThingsBoard enables CRAI to configure intelligent alarms based on real time device states and operational limits. For example, alerts can be sent by ThingsBoard when a generator turns ON, when a generator fuel levels drop below a defined limit, or when a critical motor (such as those used in fire protection systems), is activated. These event-based notifications ensure that stakeholders are immediately informed of important operational changes or abnormal conditions. By receiving timely alerts, operators can take quick action on-site or using ThingsBoard dashboards to send commands. This powerful feature improves system safety and efficiency, and prevents potential downtime or resource shortages.</p>
            </div>
            <img src="/images/case-studies/crai-5.webp" title="Intelligent alarms and event-based notifications" alt="Intelligent alarms and event-based notifications" width="450" height="240">
        </div>
        <div class="block">
            <div class="text">
                <h3>Multi-tenancy and role-based access for secure collaboration</h3>
                <p>ThingsBoard’s multi-tenant architecture enables CRAI to manage multiple clients and projects within a single platform while keeping data securely isolated. This feature allows CRAI to provide access to technicians, engineers, and management to the same system with different permissions and views. This ensures that operational controls are restricted to authorized users, while stakeholders can still monitor performance and KPIs. As a result, CRAI can scale its IIoT deployments across multiple customers and teams without compromising security or data separation.</p>
            </div>
            <img src="/images/case-studies/crai-6.webp" title="Multi-tenancy and role-based access for secure collaboration" alt="Multi-tenancy and role-based access for secure collaboration" width="450" height="240">
        </div>
    </section>
    {% include contact-us-banner.liquid linkLabel='Use cases' link='/iot-use-cases/' %}
    <section class="tb-help">
        <h2>How ThingsBoard Helps Industrial Automation & Control Systems Improve Operations with IoT?</h2>
        <div class="block">
            <div class="text">
                <h3>Real-time monitoring of critical operational parameters</h3>
                <p>Industrial automation systems require continuous visibility into key parameters such as voltage, current, frequency, pressure, temperature, RPM, and system states. ThingsBoard centralizes telemetry from industrial devices (PLCs, VFDs, generators, sensors, and energy meters) into real-time dashboards and charts, providing operators with instant access to both historical data and current operating conditions. This real-time visibility enables faster detection of abnormal equipment behavior, unexpected state changes, and performance deviations. As a result, organizations can improve uptime, enhance safety, and increase overall system reliability and efficiency.</p>
            </div>
            <div class="image-container">
                <img src="/images/case-studies/time-series-chart.webp" title="Thingsboard time series chart widget" alt="Thingsboard time series chart widget" width="776" height="776">
                <img src="/images/case-studies/entities-table.webp" title="Thingsboard entities table widget" alt="Thingsboard entities table widget" width="776" height="776">
            </div>
        </div>
        <div class="block">
            <div class="text">
                <h3>Automated alerts and event-driven workflows</h3>
                <p>Unexpected deviations in operational parameters can lead to equipment damage, production losses, or safety risks. ThingsBoard enables organizations to configure automated alerts and alarms that notify stakeholders when abnormal or critical conditions occur. Notifications can be delivered through dashboards and other communication channels to ensure rapid response. This approach reduces downtime, supports preventive maintenance strategies, and improves overall system reliability.</p>
            </div>
            <div class="image-container">
                <img src="/images/case-studies/alarms-table.webp" title="Thingsboard alarm table widget" alt="Thingsboard alarm table widget" width="776" height="776">
                <img src="/images/case-studies/notification-widget.webp" title="Thingsboard notification widget" alt="Thingsboard notification widget" width="776" height="776">
            </div>
        </div>
        <div class="block">
            <div class="text">
                <h3>Remote control and device interaction</h3>
                <p>Modern industrial environments benefit from the ability to remotely interact with equipment to perform control actions and verify device states. ThingsBoard supports bi-directional communication with industrial assets, enabling operators to issue commands (e.g., start/stop equipment, reset faults, update setpoints) and request real-time device status. This capability reduces the need for on-site presence and enables faster, safer intervention when operational changes are required. Remote interaction improves flexibility and response times in industrial systems. Access to these control functions can be securely managed through ThingsBoard’s role-based access control and multi-tenancy features.</p>
            </div>
            <div class="image-container">
                <img src="/images/case-studies/single-switch-widget.webp" title="Thingsboard single switch widget widget" alt="Thingsboard single switch widget widget" width="776" height="776">
                <img src="/images/case-studies/power_button.webp" title="Thingsboard power button" alt="Thingsboard power button" width="776" height="776">
            </div>
        </div>
        <div class="block">
            <div class="text">
                <h3>Historical analytics and performance optimization</h3>
                <p>Access to historical operational data is essential for understanding system behavior and optimizing performance over time. ThingsBoard stores time-series telemetry and provides users with built-in visualization and analytical tools to explore trends, peaks, and anomalies. This enables operators and managers to identify inefficiencies, correlate events with operational outcomes, and validate expected behavior (e.g., reduced load outside operating hours). These data-driven insights support continuous improvement, improve system efficiency, and help teams anticipate potential issues before they become critical.</p>
            </div>
            <div class="image-container">
                <img src="/images/case-studies/tables.webp" title="Thingsboard table widgets" alt="Thingsboard table widgets" width="776" height="776">
                <img src="/images/case-studies/bar-chart.webp" title="Thingsboard bar chart widget" alt="Thingsboard bar chart widget" width="776" height="776">
            </div>
        </div>
        {% include services-banner.liquid %}
    </section>
    <section class="contact">
        <div class="bg-wrap" style="background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url(/images/case-studies/handshake.webp)">
            <div class="outer-frame">
                <div class="inner-frame">
                    <img src="/images/case-studies/thingsboard.svg" title="ThingsBoard logo" alt="ThingsBoard logo" width="298" height="56">
                    <img src="/images/case-studies/crai.svg" title="AgroLog Sensors GmbH" alt="AgroLog Sensors GmbH logo" width="320" height="57">
                </div>
            </div>
        </div>
        <p>Real stories, real impact — share your experience with ThingsBoard!</p>
        <a id="CaseStudy_Crai_ContactUs" target="_blank" href="/docs/contact-us/" class="button gtm_button">Contact us <span class="visually-hidden">to discuss your case</span></a>
    </section>
</div>