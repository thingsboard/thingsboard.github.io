---
layout: use-case
title: Tank Level Monitoring with ThingsBoard for Any Industry
description: A comprehensive IoT solution for tank level monitoring. Real-time insights for fuel, water, and chemical storage with dashboards, alarms, and scalable device management — powered by ThingsBoard
notitle: "true"
customTitle: "true"
includeAdvantages: "true"
contactUsModal: "true"

---

{% include usecase-nav.html usecase="tank-level-monitoring" %}

<div id="scada-fullpage" onclick="this.style.display='none'; document.body.style.overflow='unset'"><div class="image"></div><div class="close-icon"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.3337 8.5465L23.4537 6.6665L16.0003 14.1198L8.54699 6.6665L6.66699 8.5465L14.1203 15.9998L6.66699 23.4532L8.54699 25.3332L16.0003 17.8798L23.4537 25.3332L25.3337 23.4532L17.8803 15.9998L25.3337 8.5465Z"></path></svg></div></div>
<h1 class="usecase-title">Tank level monitoring solution</h1>
<section class="tank-monitoring-about">
    <div class="about-text">
        <div class="short">
            <div class="block">
                <p class="text">Modern enterprises that manage liquid storage — from fuel to water — face the critical need for continuous tank level monitoring and infrastructure status control. Poor monitoring can lead to leaks, equipment downtime, and higher operational costs. In this context, IoT-powered solutions become essential for digital transformation. The ThingsBoard IoT platform addresses these challenges with ease.</p>
            </div>
            <div class="demo-button">
                <a id="UseCases_FuelLevelMonitoring_ViewLiveDemo" target="_blank" href="https://thingsboard.cloud/dashboard/e1ff5690-5e0c-11ee-aeee-d16039673934?publicId=7aa99e80-8acd-11ef-a59e-a9c993dbec14" class="button gtm_button">View live demo</a>            
            </div>
        </div>
        <div class="long">
            <p>The ThingsBoard platform offers a comprehensive approach to tank level monitoring, enabling real-time tracking of key metrics such as volume, temperature, sensor battery level, and connectivity status. Thanks to its flexibility, ThingsBoard can be easily tailored to meet industry-specific needs, whether for small-scale or enterprise-wide deployments.</p>
            <p>ThingsBoard stands out due to its scalability, support for multiple protocols (MQTT, HTTP, CoAP, and others), customizable dashboards, and robust device management tools. It empowers users to deploy both local and cloud-based solutions that effectively monitor dispersed tank networks at any scale.</p>
        </div>
    </div>
</section>

<section class="tank-monitoring-carousel carousel-padding">
    {% include default-carousel.liquid collectionMap = 'use-cases' collectionKey = 'tank-level-monitoring' %}
</section> 

{% include contact-us-banner.liquid %}

<section class="tank-monitoring-solution-structure">
    <h2>Solution structure of tank level monitoring</h2>
    <div class="about-text">
        <div class="short">
            <div class="block">
                <p class="text">The <a href="https://thingsboard.io/docs/pe/solution-templates/fuel-level-monitoring/">tank level monitoring</a> solution integrates IoT sensors — such as level, temperature, and battery — with the ThingsBoard platform. Data is transmitted via standard protocols: MQTT for real-time telemetry, HTTP for periodic updates, and CoAP for low-power environments. This ensures reliable, efficient communication across a wide range of devices and conditions.</p>
            </div>
        </div>
        <div class="long">
            <p>Once collected, the data is transmitted to ThingsBoard for processing, aggregation, and visualization. The platform offers historical data storage, advanced alarm rule configuration, and remote device management. Incoming data is presented through interactive dashboards that display all metrics in user-friendly formats: graphs, maps, tables, and status widgets.</p>
        </div>
    </div>
    <div class="scheme">
        <img id="schemeSVG" loading="lazy" data-src="/images/usecases/smart-use-cases.svg" class="svg-animation" alt="Smart energy solution architecture" title="Smart energy solution architecture: IoT devices connect via gateways to the cloud for processing, visualization, and automation">
    </div>
</section>

<section class="dashboard-structure section-padding">
    <div class="section-header">
        <h2>Tank level monitoring dashboard structure</h2>
        <p>
            The dashboards in ThingsBoard are modular: each panel is a self-contained widget that retrieves data from a specific device or group. They support drill-down navigation, filtering, and grouping by fuel type or region. This makes the interface intuitive and easy to scale for large deployments.
        </p>
    </div>
    <div class="dashboard-structure-block">
        <div class="menu">
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Interactive map and tank status overview state</h3>
                    </div>
                    <div class="expansion-content">
                        <p>This state combines an interactive map with a real-time table of tank metrics, displaying fuel level, temperature, battery, and connectivity status for each unit. It also includes a centralized alarm panel showing active alarms like low fuel, overheating, or offline sensors. The unified view allows operators to monitor spatial distribution and critical tank data at a glance, ensuring fast, informed decision-making.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Sensor add interface</h3>
                    </div>
                    <div class="expansion-content">
                        <p>This form guides users through adding a new sensor by entering its serial number and assigning a label. It’s the first step in onboarding a tank into the system. Simple onboarding flows are critical for scaling the monitoring system with minimal manual work or technical barriers.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Alarm rules configuration</h3>
                    </div>
                    <div class="expansion-content">
                        <p>This screen lets users configure threshold values for alarms based on remaining level, temperature, and battery status. Alarms are triggered when incoming data crosses defined boundaries. Such visual rule management helps organizations enforce control policies and reduce downtime through preventive alarms.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Edit sensor</h3>
                    </div>
                    <div class="expansion-content">
                        <p>This state allows users to edit key sensor details, including the serial number, custom label, tank assignment, and related metadata. It provides a clean, form-based interface to ensure sensor information stays accurate and organized across the system. Maintaining consistent sensor data is essential for reliable monitoring, especially in large-scale deployments with many connected devices.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Tank details dashboard state</h3>
                    </div>
                    <div class="expansion-content">
                        <p>This state provides a detailed view of an individual tank, displaying current fuel level with visual indicators, real-time telemetry, historical data logs, and refill or drain events. It also includes a list of recent alarms related to this tank, such as level drops or temperature spikes, with timestamps and statuses. Such granular visualization helps operators track tank behavior over time, identify abnormal patterns, and take preventive action before issues escalate.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Tank shape</h3>
                    </div>
                    <div class="expansion-content">
                        <p>This state allows users to define the physical characteristics of a tank — including its shape (e.g., cylindrical, rectangular), dimensions, and total capacity — which are crucial for accurate volume calculation. Users can also configure how the sensor interprets level data based on the tank geometry and select the preferred measurement method (e.g., linear, step-based). Precise calibration of sensor readings to the real tank shape significantly improves measurement accuracy and ensures correct volume representation on dashboards.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="applications applications-additional summary-margin section-padding">
    <div class="section-header">
        <h2>Applications of tank level monitoring solution</h2>
        <p>ThingsBoard's Tank Level Monitoring Solution is adaptable across a wide range of industries, addressing their specific needs:</p>
    </div>
    <div class="applications-container-large">
        <div class="text-row-top">
            <div class="text-block">
                <h3>Oil & gas</h3>
                <p>Enables remote monitoring of fuel tanks with automated alarms and minimal maintenance requirements.</p>
            </div>
            <div class="text-block">
                <h3>Agriculture</h3>
                <p>Tracks water or fertilizer tank levels on farms, with location-based analysis and consumption forecasting.</p>
            </div>
            <div class="text-block">
                <h3>Municipal services</h3>
                <p>Manages city tanks for drinking water or chemicals with centralized monitoring and regulatory reporting.</p>
            </div>
        </div>
        <div class="images-row">
            <div class="application-image"><img src="/images/usecases/tank-level-monitoring/gas-1.svg" alt="Oil & gas" title="Oil & gas"></div>
            <div class="application-image"><img src="/images/usecases/scada-drilling-system/logistics.svg" alt="Logistics & transportation" title="Logistics & transportation"></div>
            <div class="application-image"><img src="/images/usecases/smart-irrigation/agriculture-1.svg" alt="Agriculture" title="Agriculture"></div>
            <div class="application-image"><img src="/images/usecases/tank-level-monitoring/manufacturing-1.svg" alt="Manufacturing & processing" title="Manufacturing & processing"></div>
            <div class="application-image"><img src="/images/usecases/smart-metering/utilities-1.svg" alt="Municipal services" title="Municipal services"></div>
        </div>
        <div class="text-row-bottom">
            <div class="text-block">
                <h3>Logistics & transportation</h3>
                <p>Tracks fuel levels in fleet tankers and depots, integrated with GPS and routing systems.</p>
            </div>
            <div class="text-block">
                <h3>Manufacturing & processing</h3>
                <p>Monitors chemical storage tanks for compliance and safety in industrial environments.</p>
            </div>
        </div>
    </div>
    <div class="applications-container-small">
        <div class="application-block">
            <div class="image"><img src="/images/usecases/tank-level-monitoring/gas-2.svg" alt="Oil & gas" title="Oil & gas"></div>
            <div class="text-block">
                <h3>Oil & gas</h3>
                <p>Enables remote monitoring of fuel tanks with automated alarms and minimal maintenance requirements.</p>
            </div>
        </div>
        <div class="application-block">
            <div class="text-block">
                <h3>Logistics & transportation</h3>
                <p>Tracks fuel levels in fleet tankers and depots, integrated with GPS and routing systems.</p>
            </div>
            <div class="image"><img src="/images/usecases/scada-drilling-system/logistics-2.svg" alt="Logistics & transportation" title="Logistics & transportation"></div>
        </div>
        <div class="application-block">
            <div class="image"><img src="/images/usecases/smart-irrigation/agriculture-2.svg" alt="Agriculture" title="Agriculture"></div>
            <div class="text-block">
                <h3>Agriculture</h3>
                <p>Tracks water or fertilizer tank levels on farms, with location-based analysis and consumption forecasting.</p>
            </div>
        </div>
        <div class="application-block">
            <div class="text-block">
                <h3>Manufacturing & processing</h3>
                <p>Monitors chemical storage tanks for compliance and safety in industrial environments.</p>
            </div>
            <div class="image"><img src="/images/usecases/tank-level-monitoring/manufacturing-2.svg" alt="Manufacturing & processing" title="Manufacturing & processing"></div>
        </div>
        <div class="application-block">
            <div class="image"><img src="/images/usecases/smart-metering/utilities-2.svg" alt="Municipal services" title="Municipal services"></div>
            <div class="text-block">
                <h3>Municipal services</h3>
                <p>Manages city tanks for drinking water or chemicals with centralized monitoring and regulatory reporting.</p>
            </div>
        </div>
    </div>
</section>

<section class="summary">
    <div class="summary-text">
        <h2>Summary of tank level monitoring</h2>
        <p>The ThingsBoard-based tank level monitoring solution automates fluid storage monitoring for any scale or complexity. With strong support for industrial protocols, real-time visualization, rule-based alarming, and device control, it is a perfect fit for B2B enterprises, public infrastructure, and industrial environments. Enhanced transparency and timely alarms lead to improved operational efficiency and reduced costs.</p>
    </div>
    <div class="summary-icon">
        <img src="/images/usecases/health-care/summary.svg" alt="Text summary icon" title="Text summary icon">
    </div>
</section>

<script type="text/javascript">
    document.addEventListener('DOMContentLoaded', function() {
        const svgAnimations = document.querySelectorAll(".svg-animation");
        const svgObserver = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.style.visibility = 'visible';
                    img.src = img.dataset.src;
                    obs.unobserve(img);
                }
            });
        }, {threshold: 1.0});

        svgAnimations.forEach(img => svgObserver.observe(img));

        document.querySelectorAll('.card-link').forEach((link) => {
            link.classList.add('linkDefault');
        });

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

                applyImageBg(smallImageBlock);
                applyImageBg(largeImageBlock);

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

            if (Math.abs(elemCoor.top) < elemCoor.height / 2 - 300 && elemCoor.top < 0) {
                large.style.marginTop = Math.abs(elemCoor.top) + 20 + 'px';
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
            <div class="image-container image-background">
                <div class="image-background"></div>
                <div class="image-background"></div>
                <div class="image-background"></div>
                <div class=image>${getImage(0)}</div>
            </div>
            <div class="buttons-block">
                <a id="UseCases_FuelLevelMonitoring_ViewLiveDemo" target="_blank" href="https://thingsboard.cloud/dashboard/e1ff5690-5e0c-11ee-aeee-d16039673934?publicId=7aa99e80-8acd-11ef-a59e-a9c993dbec14" class="button gtm_button">View live demo</a>            
                <a id="UseCases_FuelLevelMonitoring_ContactUs" target="_blank" href="/docs/contact-us/?subject=Custom%20Development" class="button contact-us gtm_button">Contact us</a>
            </div>`;

            applyImageBg(block);
    
            return block;
        }

        function applyImageBg(block) {
            const img = block.querySelector('.image img');
            const container = block.querySelector('.image-container');
            if (img && container) {
                const bg = img.dataset.bg;
                container.style.backgroundColor = bg || '';
            }
        }

        function getImage(index) {
            const images = [
                "<img src='/images/usecases/tank-level-monitoring/tank-level-monitoring-1.webp' data-bg='#F9F9F9' alt='Tank monitoring dashboard in light mode showing fuel level, temperature, battery, and alerts on the ThingsBoard platform' title='Tank Monitoring Dashboard'/>",
                "<img src='/images/usecases/tank-level-monitoring/tank-level-monitoring-2.webp' data-bg='#A9AAAC' alt='Modal window for adding a new sensor with serial number and label fields in the ThingsBoard dashboard.' title='Add New Sensor Form'/>",
                "<img src='/images/usecases/tank-level-monitoring/tank-level-monitoring-3.webp' data-bg='#A9AAAC' alt='Dialog for setting alarm thresholds for tank monitoring, including fuel level, temperature, and battery.' title='Alarm Threshold Settings for Tanks'/>",
                "<img src='/images/usecases/tank-level-monitoring/tank-level-monitoring-4.webp' data-bg='#A9AAAC' alt='Editing a sensors serial number and label in the ThingsBoard tank monitoring interface.' title='Edit Sensor 001133'/>",
                "<img src='/images/usecases/tank-level-monitoring/tank-level-monitoring-5.webp' data-bg='#F9F9F9' alt='Tank 1289 status dashboard showing fuel level, temperature, battery, and consumption chart.' title='Tank 1289 Monitoring Overview'/>",
                "<img src='/images/usecases/tank-level-monitoring/tank-level-monitoring-6.webp' data-bg='#A9AAAC' alt='Interface to configure tank shape, size, and measurement system for accurate monitoring.' title='Configure Tank Shape and Dimensions'/>",
            ];
            return images[index];
        }
    });
</script>
