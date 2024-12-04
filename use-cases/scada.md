---
layout: use-case
title: SCADA
description: SCADA ThingsBoard IoT Platform
notitle: "true"

---

{% include usecase-nav.html usecase="scada" %}
<div id="scada-fullpage" onclick="this.style.display='none'; document.body.style.overflow='unset'"><div class="image"></div>><div class="close-icon"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.3337 8.5465L23.4537 6.6665L16.0003 14.1198L8.54699 6.6665L6.66699 8.5465L14.1203 15.9998L6.66699 23.4532L8.54699 25.3332L16.0003 17.8798L23.4537 25.3332L25.3337 23.4532L17.8803 15.9998L25.3337 8.5465Z"></path></svg></div></div>
<h1 class="usecase-title">SCADA systems</h1>

<section class="scada-about">
    <div class="about-text">
        <div class="short">
            <div class="block">
                <p class="text">ThingsBoard-based SCADA solutions provide complete control and real-time analytics, making the management of industrial processes simpler and more efficient.</p>
            </div>
            <div class="demo-button">
                <a id="UseCases_SCADA_ViewLiveDemo" target="_blank" href="https://thingsboard.cloud/dashboard/228be650-8acc-11ef-b31e-8fb75668852d?publicId=7aa99e80-8acd-11ef-a59e-a9c993dbec14" class="button gtm_button">View live demo</a>
            </div>
        </div>
        <div class="long">
            <p>The main advantage of SCADA (Supervisory Control and Data Acquisition) systems is their ability to monitor production processes in real time and respond quickly to deviations. ThingsBoard provides comprehensive tools to collect, process, and visualize data from SCADA components, such as PLCs (Programmable Logic Controllers) and RCUs (Remote Control Units), enabling seamless integration with various industrial processes.</p>
            <p>To illustrate the flexibility of ThingsBoard's SCADA integration, we have developed the Swimming Pool Management System template. This solution demonstrates how SCADA symbols—such as pipes, valves, motors, filters, flow meters, tanks, and leak sensors—can be utilized to create simple yet powerful process control systems. It enables any production process to be visualized on a dashboard, allowing for real-time monitoring of equipment operation and timely detection of alarm signals.</p>
        </div>
    </div>
</section>

<section class="scada-carousel">
    {% include carousel.liquid nonActiveItemsVisibility = true overlay = false collectionMap = 'use-cases' collectionKey = 'scada' %}
</section> 

<section class="scada-solution-structure">
    <h1>Solution structure</h1>
    <div class="scheme">
        <img loading="lazy" src="/images/usecases/scada/scada-solution-structure.svg" alt="SCADA solution structure">
    </div>
    <div class="scada-solution-structure-cards">
        <div class="scada-solution-structure-card">
            <h2>PLCs and RTUs</h2>
            <p>Seamlessly integrate your SCADA system with PLCs and RTUs using ThingsBoard integrations and IoT Gateway. Support for Modbus, OPC-UA, BACnet, and other popular protocols ensures reliable real-time data collection and control.</p>
        </div>
        <div class="scada-solution-structure-card">
            <h2>IoT gateway</h2>
            <p>ThingsBoard’s IoT Gateway bridges the gap between legacy SCADA devices and modern IoT platforms. It ensures data reliability with built-in local data storage during network outages and supports efficient protocol conversion, secure data transmission, and centralized device management.</p>
        </div>
        <div class="scada-solution-structure-card">
            <h2>Data processing</h2>
            <p>Unlock actionable insights with ThingsBoard’s robust data processing tools. Perform real-time transformations, apply complex rules, and automate workflows with built-in rule chains and scriptable integrations.</p>
        </div>
        <div class="scada-solution-structure-card">
            <h2>Alarm system</h2>
            <p>Enhance operational awareness with ThingsBoard’s advanced alarm system. Manage incident workflows with features like alarm acknowledgment, clearing, commenting, and configurable escalation rules.</p>
        </div>
        <div class="scada-solution-structure-card">
            <h2>Notification system</h2>
            <p>Stay informed with ThingsBoard’s flexible notification system, delivering alerts via email, SMS, Slack, or custom webhooks. Automate critical notifications based on configurable conditions and thresholds.</p>
        </div>
        <div class="scada-solution-structure-card">
            <h2>IoT dashboards</h2>
            <p>Visualize your SCADA data with ThingsBoard’s real-time IoT dashboards. Design interactive views using SCADA symbols, customizable widgets, and dynamic updates to monitor and control processes seamlessly.</p>
        </div>
    </div>
</section>

<section class="scada-key-functions">
    <h1>Key functions of SCADA systems for fluid management</h1>
    <div class="scada-key-function-block">
        <div class="key-function-description">
            <h2>Pipe monitoring and leakage sensors</h2>
            <p>Drain pipe symbols help visualize areas where potential liquid leaks might occur. In SCADA systems, this solution can be integrated with sensors to immediately alert operators to any issues.</p>
        </div>
        <img src="/images/usecases/scada/pipe.svg" alt="Three examples of pipe monitoring and leakage sensors as dashboard symbols">
    </div>
    <div class="scada-key-function-block">
        <div class="key-function-description">
            <h2>Pump monitoring and management</h2>
            <p>A range of pump symbols (centrifugal, heat, motor pumps) allows for monitoring the performance and efficiency of pump systems. This solution is particularly important for regulating pressure and liquid volumes.</p>
        </div>
        <img src="/images/usecases/scada/pump.svg" alt="Three examples of pump monitoring and management dashboard symbols">
    </div>
    <div class="scada-key-function-block">
        <div class="key-function-description">
            <h2>Tank level monitoring</h2>
            <p>Tank level meter and reservoir symbols enable operators to monitor liquid levels within the system, preventing both overflow and depletion—critical for water supply and chemical processes.</p>
        </div>
        <img src="/images/usecases/scada/tank.svg" alt="Three examples of tank level monitoring dashboard symbols">
    </div>
    <div class="scada-key-function-block">
        <div class="key-function-description">
            <h2>Flow regulation</h2>
            <p>Flow meter and valve symbols allow precise control of fluid flow through pipelines, which is essential for filtration, cooling, and water supply systems.</p>
        </div>
        <img src="/images/usecases/scada/flow.svg" alt="Three examples of flow regulation dashboard symbols">
    </div>
    <div class="scada-key-function-block">
        <div class="key-function-description">
            <h2>Fluid filtration</h2>
            <p>Filter symbols provide visualization and control over filtration processes, ensuring the cleanliness and safety of the liquids being used in the system.</p>
        </div>
        <img src="/images/usecases/scada/fluid.svg" alt="Three examples of fluid filtration dashboard symbols">
    </div>
</section>

<section class="dashboard-structure">
    <h1>Dashboard structure</h1>
    <div class="dashboard-structure-block">
        <div class="menu">
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h2>Swimming pool SCADA system state</h2>
                    </div>
                    <div class="expansion-content">
                        <p>This interactive state allows operators to monitor the pool’s water level, temperature, and equipment operation. In real time, users can heat the pool, drain it, or fill it with water. By interacting with the on-screen widgets for water level, temperature, the filter sensor, and the pH filter, operators can access and control readings directly from a single dashboard.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h2>Water pump state</h2>
                    </div>
                    <div class="expansion-content">
                        <p>This feature enables real-time monitoring of critical parameters like flow rate, temperature, rotation speed, vibration, and power consumption. It also provides information on the pump’s status and last maintenance. An alarm widget is integrated for rapid response to any issues, ensuring that any malfunctions can be quickly addressed and resolved.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h2>Heat pump state</h2>
                    </div>
                    <div class="expansion-content">
                        <p>This screen offers a comprehensive view of the heat pump's performance, including indicators like temperature, rotation speed, vibration, refrigerant pressure, and power consumption. Key data, such as inlet and outlet water temperatures, the desired pool water temperature, and the ambient air temperature, are displayed. Based on these inputs, the heat pump will automatically switch on or off. Operators can adjust the pool water temperature directly from the heat pump widget and also view information about the filter’s status and the last maintenance date. An alarm widget ensures that any malfunctions are quickly addressed in real time.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h2>Sand filter state</h2>
                    </div>
                    <div class="expansion-content">
                        <p>The sand filter state provides detailed monitoring of flow rate, pressure, rotation speed, and vibration. It also displays the filter’s current mode, last maintenance date, and next scheduled service. Operators can easily switch filter modes directly from the widget, for example, from filtration to water draining (waste mode) with a simple click on the mode display.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel last">
                    <div class="expansion-header">
                        <h2>Gateway</h2>
                    </div>
                    <div class="expansion-content">
                        <p>An essential component of this solution is the Gateway, which integrates all devices using an emulator. To simulate the entire swimming pool system, a Modbus emulator is employed, combining 14 individual devices. These devices operate as a unified system, communicating seamlessly via the Modbus protocol. For real-time monitoring of device data received from Modbus servers, the ThingsBoard IoT Gateway dashboard provides a clear view of the status and data from all connected devices, allowing operators to monitor and manage the system effortlessly.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="applications">
    <h1>Applications of SCADA systems</h1>
    <div class="applications-container-large">
        <div class="text-row-top">
            <div class="text-block">
                <h2>Water and wastewater management</h2>
                <p>Ensuring continuous water supply and efficient wastewater treatment is made easier through precise control and management of systems.</p>
            </div>
            <div class="text-block">
                <h2>Food industry</h2>
                <p>Product quality control is achieved through precise management of processes like mixing, heating, and cooling of liquids.</p>
            </div>
            <div class="text-block">
                <h2>Energy and heating</h2>
                <p>Optimization of heating, ventilation, and air conditioning (HVAC) systems becomes more efficient with accurate control of flows and temperatures.</p>
            </div>
        </div>
        <div class="images-row">
            <div class="application-image"><img src="/images/usecases/scada/water-1.svg" alt="Water valve"></div>
            <div class="application-image"><img src="/images/usecases/scada/oil-1.svg" alt="Oil pump"></div>
            <div class="application-image"><img src="/images/usecases/scada/food-1.svg" alt="Food conveyor"></div>
            <div class="application-image"><img src="/images/usecases/scada/chemical-1.svg" alt="Chemical plant"></div>
            <div class="application-image"><img src="/images/usecases/scada/energy-1.svg" alt="Power plant"></div>
        </div>
        <div class="text-row-bottom">
            <div class="text-block">
                <h2>Oil and gas industry</h2>
                <p>From extraction to refining, SCADA symbols help manage complex processes, ensuring the safety and efficiency of operations.</p>
            </div>
            <div class="text-block">
                <h2>Chemical industry</h2>
                <p>Filter symbols provide visualization and control over filtration processes, ensuring the cleanliness and safety of the liquids being used in the system.</p>
            </div>
        </div>
    </div>
    <div class="applications-container-small">
        <div class="application-block">
            <div class="image"><img src="/images/usecases/scada/water-2.svg" alt="Water valve"></div>
            <div class="text-block">
                <h2>Water and wastewater management</h2>
                <p>Ensuring continuous water supply and efficient wastewater treatment is made easier through precise control and management of systems.</p>
            </div>
        </div>
        <div class="application-block">
            <div class="text-block">
                <h2>Food industry</h2>
                <p>Product quality control is achieved through precise management of processes like mixing, heating, and cooling of liquids.</p>
            </div>
            <div class="image"><img src="/images/usecases/scada/oil-2.svg" alt="Oil pump"></div>
        </div>
        <div class="application-block">
            <div class="image"><img src="/images/usecases/scada/food-2.svg" alt="Food conveyor"></div>
            <div class="text-block">
                <h2>Energy and heating</h2>
                <p>Optimization of heating, ventilation, and air conditioning (HVAC) systems becomes more efficient with accurate control of flows and temperatures.</p>
            </div>
        </div>
        <div class="application-block">
            <div class="text-block">
                <h2>Oil and gas industry</h2>
                <p>From extraction to refining, SCADA symbols help manage complex processes, ensuring the safety and efficiency of operations.</p>
            </div>
            <div class="image"><img src="/images/usecases/scada/chemical-2.svg" alt="Chemical plant"></div>
        </div>
        <div class="application-block">
            <div class="image"><img src="/images/usecases/scada/energy-2.svg" alt="Power plant"></div>
            <div class="text-block">
                <h2>Chemical industry</h2>
                <p>Filter symbols provide visualization and control over filtration processes, ensuring the cleanliness and safety of the liquids being used in the system.</p>
            </div>
        </div>
    </div>
</section>

<section class="advantages">
    <h1>ThingsBoard advantages</h1>
    <div class="advantages-block">
        <div class="advantage">
            <div><img src="/images/usecases/scada/security.svg" alt="Security"></div>
            <a class="title" href="/docs/pe/user-guide/ssl/http-over-ssl/">Security</a>
            <p>ThingsBoard protects your data with industry-standard encryption algorithms like RSA and ECDSA. Secure communication is ensured via TLS (TCP) and DTLS (UDP), with added support for SCADA-specific protocols like OPC-UA encryption and authentication. Role-based access control and audit logs further enhance platform security.</p>
        </div>
        <div class="advantage">
            <div><img src="/images/usecases/scada/data-visualization.svg" alt="Data visualization"></div>
            <a class="title" href="/docs/user-guide/dashboards/">Data visualization</a>
            <p>Visualize your data effortlessly with ThingsBoard’s rich, interactive dashboards. Create multi-state, real-time dashboards using built-in widgets like charts, gauges, maps, and tables—no coding required. Customize layouts or develop custom widgets for complete flexibility. WebSocket support ensures low-latency updates.</p>
        </div>
        <div class="advantage">
            <div><img src="/images/usecases/scada/connectivity.svg" alt="Connectivity"></div>
            <a class="title" href="/docs/getting-started-guides/connectivity/">Connectivity</a>
            <p>Connect devices directly to ThingsBoard using protocols like HTTP, CoAP, MQTT, LwM2M, SNMP, LoRaWAN, and NB-IoT. For local networks, ThingsBoard Gateway bridges the cloud via Modbus, BLE, BACnet, OPC-UA, and more. Advanced protocol translation and offline data buffering ensure reliable communication even in challenging conditions.</p>
        </div>
        <div class="advantage scale">
            <div><img src="/images/usecases/scada/scalability.svg" alt="Scalability and high availability"></div>
            <a class="title" href="/docs/reference/msa/">Scalability and high availability</a>
            <p>ThingsBoard supports high-availability deployments on cloud and on-premises data centers using K8S or bare-metal deployments. Platform components are horizontally scalable. ThingsBoard has production deployments supporting more then 18 000 vehicles and 500 000 devices connected.</p>
        </div>
        <div class="advantage data">
            <div><img src="/images/usecases/scada/data-processing.svg" alt="Data processing"></div>
            <a class="title" href="/docs/pe/user-guide/rule-engine-2-0/overview/">Data processing</a>
            <p>ThingsBoard allows you to define application logic with drag-n-drop rule chain designer. The Rule Engine is a robust and scalable processing framework that leverages industry-standard message queue implementations like Apache Kafka or AWS SQS to ensure data durability and guarantee data processing. You are free to process data with the Rule engine or push it to further processing in external systems.</p>
        </div>
        <div class="advantage">
            <div><img src="/images/usecases/scada/multi-tenancy.svg" alt="Multi-tenancy"></div>
            <a class="title" href="/docs/user-guide/entities-and-relations/">Multi-tenancy</a>
            <p>ThingsBoard provides UI and API to manage tenants, customers, users, devices, and assets. Single tenant may have multiple tenant administrators and millions of devices and customers. It also offers out-of-the-box support of OTA updates for your smart meters.</p>
        </div>
        <div class="advantage">
            <div><img src="/images/usecases/scada/lorawan-sigfox.svg" alt="LoRaWAN and SigFox support"></div>
            <a class="title" href="/docs/user-guide/integrations/">LoRaWAN & SigFox support</a>
            <p>Connect LoRaWAN devices via integrations with standard network servers like TTN, LORIOT, ChirpStack, Actility, etc. Connect SigFox devices via integrations with the SigFox backend.</p>
        </div>
        <div class="advantage">
            <div><img src="/images/usecases/scada/mobile.svg" alt="Mobile application"></div>
            <a class="title" href="/docs/mobile/">Mobile application</a>
            <p>Build your own IoT mobile application with minimum coding efforts using ThingsBoard Mobile Application, an open-source project based on Flutter. Leverage a built-in set of mobile actions to take a photo, scan QR code, update location, and more directly within the dashboard.</p>
        </div>
    </div>
</section>

<script type="text/javascript">
    document.addEventListener('DOMContentLoaded', function() {
        const expansionBlocks = document.querySelectorAll('.expansion-block');
        const structureBlock = document.querySelector('.dashboard-structure-block');
        const smallImageBlock = createImageBlock('small');
        const largeImageBlock = createImageBlock('large');

        expansionBlocks[0].appendChild(smallImageBlock);
        structureBlock.appendChild(largeImageBlock);

        const largeImageElement = document.querySelector('.image-block-large > .image-container > .image');
        const smallImageElement = document.querySelector('.image-block-small > .image-container > .image');

        let currentExpandedIndex = 0;

        expansionBlocks[0].classList.add('expanded');

        expansionBlocks.forEach((panel, index) => {
            panel.addEventListener('click', function() {
                if (index === currentExpandedIndex) {
                    return; 
                }

                smallImageElement.innerHTML = getImage(index);
                this.appendChild(smallImageBlock);
                largeImageElement.style.height = largeImageElement.firstChild.getBoundingClientRect().height + 'px';
                largeImageElement.innerHTML = getImage(index);

                expansionBlocks.forEach(item => {
                    item.classList.remove('expanded');
                });

                this.classList.add('expanded');
                currentExpandedIndex = index; 
                if (window.screen.width < 600) {
                    const blockRect = expansionBlocks[index].getBoundingClientRect();
                    const target = blockRect.top + window.scrollY - 80;
                    window.scrollTo(0, target);
                    setTimeout(()=> document.getElementById("nav").style.top = "-78px");
                }
                if (index === 4) {
                    window.scrollTo(0, window.scrollY +1);
                }
            });
        });

        window.onscroll = function() {
            const elemCoor = document.querySelector('.dashboard-structure').getBoundingClientRect();
            const large = document.querySelector('.image-block-large');

            if (elemCoor.top > -453 && elemCoor.top < 0) {
                large.style.marginTop = Math.abs(elemCoor.top) + 'px';
            } else if (expansionBlocks[4].classList.contains('expanded') && elemCoor.top > -523 && elemCoor.top < 0) {
                large.style.marginTop = Math.abs(elemCoor.top) + 'px';
            }
        };

        if (window.screen.width > 960) {
            const fullPage = document.querySelector('#scada-fullpage');
            largeImageElement.addEventListener('click', function(image) {
                fullPage.children[0].innerHTML = `<img src=${image.currentTarget.children[0].src} />`;
                fullPage.style.display = 'block';
                fullPage.style.top = window.scrollY + 'px';
                document.querySelector('body').style.overflow = 'hidden';
             });
        }

        function createImageBlock(layout) {
            let block = document.createElement('div');
            block.className = `image-block-${layout}`;
            block.innerHTML = `
            <div class="image-container">
                <div class="image-background"></div>
                <div class="image-background"></div>
                <div class="image-background"></div>
                <div class=image>${getImage(0)}</div>
            </div>
            <div class="buttons-block">
                <a id="UseCases_SCADA_ViewLiveDemo" target="_blank" href="https://thingsboard.cloud/dashboard/228be650-8acc-11ef-b31e-8fb75668852d?publicId=7aa99e80-8acd-11ef-a59e-a9c993dbec14" class="button gtm_button">View live demo</a>
                <a id="UseCases_SCADA_ContactUs" target="_blank" href="https://thingsboard.io/docs/contact-us/" class="button contact-us gtm_button">Contact us</a>
            </div>`;
    
            return block;
        }

        function getImage(index) {
            const images = [
                "<img src='/images/usecases/scada/swiming-pool-system-state.svg' alt='Swimming pool SCADA system state dashboard'/>",
                "<img src='/images/usecases/scada/water-pump-state.svg' alt='Water pump state dashboard'/>",
                "<img src='/images/usecases/scada/heat-pump-state.svg' alt='Heat pump state dashboard'/>",
                "<img src='/images/usecases/scada/sand-filter-state.svg' alt='Sand filter state dashboard'/>",
                "<img src='/images/usecases/scada/gateway.svg' alt='Gateway dashboard'/>"
            ];
            return images[index];
        }
    });
</script>
