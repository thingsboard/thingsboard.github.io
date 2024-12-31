---
layout: use-case
title: Health Care
description: Health monitoring
notitle: "true"

---

{% include usecase-nav.html usecase="health-care" %}
<div id="scada-fullpage" onclick="this.style.display='none'; document.body.style.overflow='unset'"><div class="image"></div>><div class="close-icon"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.3337 8.5465L23.4537 6.6665L16.0003 14.1198L8.54699 6.6665L6.66699 8.5465L14.1203 15.9998L6.66699 23.4532L8.54699 25.3332L16.0003 17.8798L23.4537 25.3332L25.3337 23.4532L17.8803 15.9998L25.3337 8.5465Z"></path></svg></div></div>
<h1 class="usecase-title">Health care: smart assisted living solution</h1>

<section class="health-about">
    <div class="about-text">
        <div class="short">
            <div class="block">
                <p class="text">ThingsBoard is an IoT platform with all the tools needed to build a comprehensive healthcare monitoring and management solution with ease. ThingsBoard provides an extensive range of built-in features as well as flexible customization options.</p>
            </div>
            <div class="demo-button">
                <a id="UseCases_HealthCare_ViewLiveDemo" target="_blank" href="https://thingsboard.cloud/dashboard/f8e77210-8fa8-11ef-90c1-0b39f28da380?publicId=7aa99e80-8acd-11ef-a59e-a9c993dbec14" class="button gtm_button">View live demo</a>
            </div>
        </div>
        <div class="long">
            <p>Healthcare monitoring systems are designed to track patient health metrics in real time and immediately notify medical professionals of critical changes. ThingsBoard, as a robust IoT platform, provides all the necessary tools for collecting, processing, and visualizing data from devices that use protocols like BLE or LoRaWAN gateways, enabling seamless integration and support for flexible solutions.</p>
            <p>Our Smart Assisted Living solution powered by ThingsBoard provides real-time monitoring and management of residents' health in assisted living facilities. Using ThingsBoard’s powerful IoT capabilities, this solution integrates connected devices, data analytics, and automated alerts to create a seamless experience for caregivers and administrators, ensuring timely responses and a higher quality of care.</p>
        </div>
    </div>
</section>

<section class="health-carousel">
    {% include carousel.liquid nonActiveItemsVisibility = true overlay = false collectionMap = 'use-cases' collectionKey = 'health-care' %}
</section> 

<section class="health-solution-structure">
    <h1 style="margin-bottom: 40px">Solution structure</h1>
    <div class="about-text">
        <div class="short">
            <div class="block">
                <p class="text">The solution is designed to be used with BLE (Bluetooth Low Energy) or LoRaWAN gateways and devices. The rooms may be equipped with a number of sensors like room temperature, humidity, indoor air quality (IAQ), leak, smoke, and open/close detectors.</p>
            </div>
        </div>
        <div class="long">
            <p>The geopositioning of the resident is done via the beacon in the wristband and a set of nearby gateways. The platform deduplicates the incoming message from the beacon and enriches it with the attributes of the nearby gateways. The geopositioning algorithm is relatively simple and based on the payload's RSSI parameter. One may improve the algorithm based on the particular use case.</p>
        </div>
    </div>
    <div class="scheme">
        <img loading="lazy" src="https://img.thingsboard.io/usecases/health-care/health-care-solution-structure.svg" alt="Health care solution structure">
    </div>
</section>
<section class="health-solution-structure">
    <h1 style="margin-bottom: 0">Smart assisted living benefits</h1>
    <p style="margin-bottom: 64px">The Smart Assisted Living solution offers a range of benefits for care providers, residents, and facility administrators, supporting safe and efficient management of assisted living facilities:</p>
    <div class="health-solution-structure-cards">
        <div class="health-solution-structure-card">
            <h2>Efficient monitoring and sesponse</h2>
            <p>Enables real-time tracking of residents’ health and environmental conditions, allowing caregivers to respond promptly to emergencies.</p>
        </div>
        <div class="health-solution-structure-card">
            <h2>Automated alerts and notifications</h2>
            <p>Configurable alerts ensure that caregivers and family members are notified of potential health risks, reducing the likelihood of delayed responses.</p>
        </div>
        <div class="health-solution-structure-card">
            <h2>Personalized care plans</h2>
            <p>Customizable alert rules and comprehensive health profiles allow facilities to tailor care based on individual residents' needs, enhancing the quality of care.</p>
        </div>
        <div class="health-solution-structure-card">
            <h2>Increased safety and comfort</h2>
            <p>Environmental monitoring maintains optimal room conditions, minimizing risks associated with temperature or noise fluctuations.</p>
        </div>
        <div class="health-solution-structure-card">
            <h2>Data-driven insights</h2>
            <p>Collects historical health data for each resident, allowing for trend analysis and proactive management of chronic conditions.</p>
        </div>
        <div class="health-solution-structure-card">
            <h2>Streamlined administration</h2>
            <p>A centralized dashboard and intuitive UI simplify the management of resident profiles, health alerts, and facility zones, saving time and reducing administrative burden.</p>
        </div>
    </div>
</section>

<section class="dashboard-structure">
    <h1 style="margin-bottom: 0">Dashboard structure</h1>
    <p style="margin-bottom: 64px">The Smart Assisted Living Dashboard enables caregivers and administrators to monitor residents’ health data and environmental conditions in real-time, with intuitive interfaces and easily configurable alarm systems.</p>
    <div class="dashboard-structure-block">
        <div class="menu">
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h2>Resident overview</h2>
                    </div>
                    <div class="expansion-content">
                        <p>Provides a detailed profile for each resident, including health metrics such as heart rate, body temperature, and panic button status, allowing caregivers to quickly assess each resident's current health condition.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h2>Resident alarm configuration</h2>
                    </div>
                    <div class="expansion-content">
                        <p>Allows administrators to set customized alarm rules for resident health parameters like heart rate and body temperature. Major and critical thresholds can be configured to trigger appropriate alerts in case of abnormalities.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h2>Real-time resident alarms</h2>
                    </div>
                    <div class="expansion-content">
                        <p>Displays active alarms for residents, such as panic button presses or irregular vital signs, with real-time updates on each alert's status and severity, enabling quick response by caregivers.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h2>Room alarm configuration</h2>
                    </div>
                    <div class="expansion-content">
                        <p>Provides settings to adjust alarm thresholds for environmental factors in rooms, such as temperature, humidity, air quality, and window or door status. This ensures rooms remain within safe and comfortable conditions for residents.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel last">
                    <div class="expansion-header">
                        <h2>Resident list management</h2>
                    </div>
                    <div class="expansion-content">
                        <p>Lists all residents with essential information such as age, gender, assigned room, and floor, allowing caregivers to locate and access each resident’s data efficiently.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel last">
                    <div class="expansion-header">
                        <h2>Zone and floor management</h2>
                    </div>
                    <div class="expansion-content">
                        <p>Enables administrators to organize the facility into zones or floors, allowing for easy navigation and monitoring of different areas within the facility.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel last">
                    <div class="expansion-header">
                        <h2>Room and device layout</h2>
                    </div>
                    <div class="expansion-content">
                        <p>Shows the layout of each floor with room labels and device icons, allowing caregivers and administrators to identify the location of sensors and devices quickly for effective monitoring.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel last">
                    <div class="expansion-header">
                        <h2>Device addition</h2>
                    </div>
                    <div class="expansion-content">
                        <p>Allows the addition of new devices like sensors or gateways to specific rooms, supporting scalability and enabling administrators to expand monitoring capabilities as needed.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel last">
                    <div class="expansion-header">
                        <h2>Room configuration</h2>
                    </div>
                    <div class="expansion-content">
                        <p>Provides a tool to edit room details and positions within the facility layout, enabling accurate mapping and customization of room assignments.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="applications health">
    <h1 style="margin-bottom: 15px">Applications of smart assisted living solution</h1>
    <p style="margin-bottom: 60px">A similar IoT-based monitoring and management solution, like Smart Assisted Living, can be adapted and applied in various fields and directions. Here are some of them:</p>
    <div class="applications-container-large">
        <div class="text-row-top">
            <div class="text-block">
                <h2>Hospitals and healthcare facilities</h2>
                <p>Real-time monitoring of patients' conditions, tracking vital signs, managing wards and departments, and setting up alerts for timely response by medical staff to any health deterioration.</p>
            </div>
            <div style="gap: unset" class="text-block">
                <h2>Rehabilitation <br> centers</h2>
                <p>Monitoring the condition of patients undergoing rehabilitation after surgery or injuries. The system can track recovery progress, transmit data to doctors, and set reminders for physical therapy.</p>
            </div>
            <div style="gap: unset" class="text-block">
                <h2>Prisons and correctional facilities</h2>
                <p>Monitoring the health of inmates with vital sign tracking, smoke detectors, and access control systems. The system can also monitor movements and support facility security.</p>
            </div>
        </div>
        <div class="images-row">
            <div class="application-image"><img src="https://img.thingsboard.io/usecases/health-care/hospital-1.svg" alt="Hospital"></div>
            <div class="application-image"><img src="https://img.thingsboard.io/usecases/health-care/sport-complex-1.svg" alt="Sport complex"></div>
            <div class="application-image"><img src="https://img.thingsboard.io/usecases/health-care/rehabilitation-center-1.svg" alt="Rehabilitation center"></div>
            <div class="application-image"><img src="https://img.thingsboard.io/usecases/health-care/factories-1.svg" alt="Factory"></div>
            <div class="application-image"><img src="https://img.thingsboard.io/usecases/health-care/prison-1.svg" alt="Prison"></div>
        </div>
        <div class="text-row-bottom">
            <div class="text-block">
                <h2>Sports complexes and fitness centers</h2>
                <p>Maintaining optimal conditions in gyms and locker rooms, monitoring the health of visitors (e.g., heart rate), and setting up emergency alerts if someone’s health deteriorates during workouts.</p>
            </div>
            <div class="text-block">
                <h2>Factories and industrial sites</h2>
                <p>Ensuring employee safety by monitoring working conditions (temperature, gas emissions, noise, humidity) and controlling equipment status to respond promptly to emergency situations.</p>
            </div>
        </div>
    </div>
    <div class="applications-container-small">
        <div class="application-block">
            <div class="image"><img src="https://img.thingsboard.io/usecases/health-care/hospital-2.svg" alt="Water valve"></div>
            <div class="text-block">
                <h2>Hospitals and healthcare facilities</h2>
                <p>Real-time monitoring of patients' conditions, tracking vital signs, managing wards and departments, and setting up alerts for timely response by medical staff to any health deterioration.</p>
            </div>
        </div>
        <div class="application-block">
            <div class="text-block">
                <h2>Rehabilitation centers</h2>
                <p>Monitoring the condition of patients undergoing rehabilitation after surgery or injuries. The system can track recovery progress, transmit data to doctors, and set reminders for physical therapy.</p>
            </div>
            <div class="image"><img src="https://img.thingsboard.io/usecases/health-care/sport-complex-2.svg" alt="Oil pump"></div>
        </div>
        <div class="application-block">
            <div class="image"><img src="https://img.thingsboard.io/usecases/health-care/rehabilitation-center-2.svg" alt="Food conveyor"></div>
            <div class="text-block">
                <h2>Prisons and correctional facilities</h2>
                <p>Monitoring the health of inmates with vital sign tracking, smoke detectors, and access control systems. The system can also monitor movements and support facility security.</p>
            </div>
        </div>
        <div class="application-block">
            <div class="text-block">
                <h2>Sports complexes and fitness centers</h2>
                <p>Maintaining optimal conditions in gyms and locker rooms, monitoring the health of visitors (e.g., heart rate), and setting up emergency alerts if someone’s health deteriorates during workouts.</p>
            </div>
            <div class="image"><img src="https://img.thingsboard.io/usecases/health-care/factories-2.svg" alt="Chemical plant"></div>
        </div>
        <div class="application-block">
            <div class="image"><img src="https://img.thingsboard.io/usecases/health-care/prison-2.svg" alt="Power plant"></div>
            <div class="text-block">
                <h2>Factories and industrial sites</h2>
                <p>Ensuring employee safety by monitoring working conditions (temperature, gas emissions, noise, humidity) and controlling equipment status to respond promptly to emergency situations.</p>
            </div>
        </div>
    </div>
</section>

<section class="summary">
    <h1>Summary</h1>
    <div>
        <p>This Smart Assisted Living Solution on ThingsBoard provides a comprehensive approach to resident and facility management, with robust monitoring capabilities, intuitive zoning and device management, and customizable alerts for both health and environmental conditions. The solution empowers caregivers and administrators to respond quickly, keep environments safe, and provide the highest standard of care for residents.</p>
        <img src="https://img.thingsboard.io/usecases/health-care/summary.svg" alt="Text summary icon">
    </div>
</section>

<section class="advantages">
    <h1>ThingsBoard advantages</h1>
    <div class="advantages-block">
        <div class="advantage">
            <div><img src="https://img.thingsboard.io/usecases/scada/security.svg" alt="Security"></div>
            <a class="title" href="/docs/pe/user-guide/ssl/http-over-ssl/">Security</a>
            <p>ThingsBoard supports industry-standard encryption algorithms like RSA and ECDSA to ensure the data is secure during transfer via TLS(TCP) and DTLS (UDP).</p>
        </div>
        <div class="advantage">
            <div><img src="https://img.thingsboard.io/usecases/scada/data-visualization.svg" alt="Data visualization"></div>
            <a class="title" href="/docs/user-guide/dashboards/">Data visualization</a>
            <p>Visualize your data effortlessly with ThingsBoard’s rich, interactive dashboards. Create multi-state, real-time dashboards using built-in widgets like charts, gauges, maps, and tables—no coding required. Customize layouts or develop custom widgets for complete flexibility. WebSocket support ensures low-latency updates.</p>
        </div>
        <div class="advantage">
            <div><img src="https://img.thingsboard.io/usecases/scada/connectivity.svg" alt="Connectivity"></div>
            <a class="title" href="/docs/getting-started-guides/connectivity/">Connectivity</a>
            <p>Connect devices directly to ThingsBoard using protocols like HTTP, CoAP, MQTT, LwM2M, SNMP, LoRaWAN, and NB-IoT. For local networks, ThingsBoard Gateway bridges the cloud via Modbus, BLE, BACnet, OPC-UA, and more. Advanced protocol translation and offline data buffering ensure reliable communication even in challenging conditions.</p>
        </div>
        <div class="advantage scale">
            <div><img src="https://img.thingsboard.io/usecases/scada/scalability.svg" alt="Scalability and high availability"></div>
            <a class="title" href="/docs/reference/msa/">Scalability and high availability</a>
            <p>ThingsBoard supports high-availability deployments on cloud and on-premises data centers using K8S or bare-metal deployments. Platform components are horizontally scalable. ThingsBoard has production deployments supporting more then 18 000 vehicles and 500 000 devices connected.</p>
        </div>
        <div class="advantage data">
            <div><img src="https://img.thingsboard.io/usecases/scada/data-processing.svg" alt="Data processing"></div>
            <a class="title" href="/docs/pe/user-guide/rule-engine-2-0/overview/">Data processing</a>
            <p>ThingsBoard allows you to define application logic with drag-n-drop rule chain designer. The Rule Engine is a robust and scalable processing framework that leverages industry-standard message queue implementations like Apache Kafka or AWS SQS to ensure data durability and guarantee data processing. You are free to process data with the Rule engine or push it to further processing in external systems.</p>
        </div>
        <div class="advantage">
            <div><img src="https://img.thingsboard.io/usecases/scada/multi-tenancy.svg" alt="Multi-tenancy"></div>
            <a class="title" href="/docs/user-guide/entities-and-relations/">Multi-tenancy</a>
            <p>ThingsBoard provides UI and API to manage tenants, customers, users, devices, and assets. Single tenant may have multiple tenant administrators and millions of devices and customers. It also offers out-of-the-box support of OTA updates for your smart meters.</p>
        </div>
        <div class="advantage">
            <div><img src="https://img.thingsboard.io/usecases/scada/lorawan-sigfox.svg" alt="LoRaWAN and SigFox support"></div>
            <a class="title" href="/docs/user-guide/integrations/">LoRaWAN & SigFox support</a>
            <p>Connect LoRaWAN devices via integrations with standard network servers like TTN, LORIOT, ChirpStack, Actility, etc. Connect SigFox devices via integrations with the SigFox backend.</p>
        </div>
        <div class="advantage">
            <div><img src="https://img.thingsboard.io/usecases/scada/mobile.svg" alt="Mobile application"></div>
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

            if (elemCoor.top > -840 && elemCoor.top < 0) {
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
                <a id="UseCases_HealthCare_ViewLiveDemo" target="_blank" href="https://thingsboard.cloud/dashboard/f8e77210-8fa8-11ef-90c1-0b39f28da380?publicId=7aa99e80-8acd-11ef-a59e-a9c993dbec14" class="button gtm_button">View live demo</a>
                <a id="UseCases_HealthCare_ContactUs" target="_blank" href="https://thingsboard.io/docs/contact-us/" class="button contact-us gtm_button">Contact us</a>
            </div>`;
    
            return block;
        }

        function getImage(index) {
            const images = [
                "<img src='https://img.thingsboard.io/usecases/health-care/resident-overview.png' alt='Resident overview dialog of dashboard'/>",
                "<img src='https://img.thingsboard.io/usecases/health-care/resident-alarm.png' alt='Resident alarm configuration dialog of dashboard'/>",
                "<img src='https://img.thingsboard.io/usecases/health-care/real-time-resident-alarm.png' alt='Real time resident alarm state of dashboard'/>",
                "<img src='https://img.thingsboard.io/usecases/health-care/room-alarm-configuration.png' alt='Room alarm configuration state of dashboard'/>",
                "<img src='https://img.thingsboard.io/usecases/health-care/resident-list-management.png' alt='Resident list management state of dashboard'/>",
                "<img src='https://img.thingsboard.io/usecases/health-care/zone-and-floor-management.png' alt='Zone and floor management state of dashboard'/>",
                "<img src='https://img.thingsboard.io/usecases/health-care/room-and-device-layout.png' alt='Room and device layout state of dashboard'/>",
                "<img src='https://img.thingsboard.io/usecases/health-care/device-addition.png' alt='Device addition state of dashboard'/>",
                "<img src='https://img.thingsboard.io/usecases/health-care/room-configuration.png' alt='Room configuration state of dashboard'/>"
            ];
            return images[index];
        }
    });
</script>
