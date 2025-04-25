---
layout: use-case
title: IoT smart office solutions with ThingsBoard
description: Smart Office is a ready-to-use IoT solution powered by ThingsBoard for real-time monitoring and automation of office environments. Control energy usage, climate, air quality, and devices through intuitive dashboards. Scalable, flexible, and efficient.
notitle: "true"
customTitle: "true"
includeAdvantages: "true"

---

{% include usecase-nav.html usecase="smart-office" %}
<div id="scada-fullpage" onclick="this.style.display='none'; document.body.style.overflow='unset'"><div class="image"></div><div class="close-icon"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.3337 8.5465L23.4537 6.6665L16.0003 14.1198L8.54699 6.6665L6.66699 8.5465L14.1203 15.9998L6.66699 23.4532L8.54699 25.3332L16.0003 17.8798L23.4537 25.3332L25.3337 23.4532L17.8803 15.9998L25.3337 8.5465Z"></path></svg></div></div>
<h1 class="usecase-title">Smart office</h1>
<section class="smart-office-about">
    <div class="about-text">
        <div class="short">
            <div class="block">
                <p class="text">The Smart Office solution powered by ThingsBoard enables efficient monitoring of energy and water consumption, tracking of air quality and CO₂ levels, control of HVAC systems, real-time response to critical events, and overall improvement of energy efficiency and employee comfort.</p>
            </div>
            <div class="demo-button">
                <a id="UseCases_SmartOffice_ViewLiveDemo" target="_blank" href="https://thingsboard.cloud/dashboard/bf47dcb0-8b38-11ec-a344-c767c1ab1bb8?publicId=4978baf0-8a92-11ec-98f9-ff45c37940c6" class="button gtm_button">View live demo</a>            </div>
            </div>
        <div class="long">
            <p>Smart Office solutions are designed to optimize workplace environments by monitoring key operational parameters and automating building systems in real time. ThingsBoard, as a robust IoT platform, provides all the necessary tools for collecting, processing, and visualizing data from devices that use protocols like BLE or LoRaWAN gateways, enabling seamless integration and support for flexible solutions.</p>
            <p>Thanks to ThingsBoard, an open-source IoT platform, it's easy to integrate and visualize data from various devices and sensors, enabling the creation of intelligent, data-driven solutions. This approach allows not only real-time monitoring of office conditions but also active management—turning systems on or off, receiving alerts, and configuring automation scenarios. All of these capabilities are fully demonstrated in our Smart Office solution.</p>
        </div>
    </div>
</section>

<section class="smart-office-carousel carousel-padding">
    {% include carousel.liquid nonActiveItemsVisibility = true overlay = false collectionMap = 'use-cases' collectionKey = 'smart-office' %}
</section> 

<section class="smart-office-solution-structure">
    <h2>Solution structure of smart office use case</h2>
    <div class="about-text">
        <div class="short">
            <div class="block">
                <p class="text">The Smart Office solution connects devices like energy meters, HVAC, and sensors to ThingsBoard via MQTT, CoAP, or HTTP, or through a gateway with Modbus, BLE, and BACnet connectors.</p>
            </div>
        </div>
        <div class="long">
            <p>This setup enables seamless data ingestion through IoT gateways or direct connections. The collected data is then visualized in real time on interactive dashboards and processed through a powerful rule engine that supports analytics and configurable alarms.</p>
        </div>
    </div>
    <div class="scheme">
        <img id="schemeSVG" loading="lazy" data-src="/images/usecases/smart-use-cases.svg" class="svg-animation" alt="Smart office solution architecture" title="Smart office solution architecture: IoT devices connect via gateways to the cloud for processing, visualization, and automation">
    </div>
</section>

<section class="dashboard-structure section-padding">
    <div class="section-header">
        <h2>Dashboard structure of smart office solution</h2>
        <p>
            ThingsBoard provides a flexible dashboard system that allows for clear visualization of key metrics. In the context of the Smart Office, this includes parameters such as energy and water consumption, air quality, temperature and humidity, and the status of the HVAC system. Additionally, dashboards display alarms, enabling prompt response to any deviations from normal conditions.
        </p>
    </div>
    <div class="dashboard-structure-block">
        <div class="menu">
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Smart office overview state</h3>
                    </div>
                    <div class="expansion-content">
                        <p>This state provides a general overview of all connected devices, displaying the status of the HVAC system, current temperature, energy consumption, and active alarms. It also includes a 3D office floor plan indicating the locations of the Energy Meter, Smart Sensor, HVAC, and Water Meter.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Energy meter state</h3>
                    </div>
                    <div class="expansion-content">
                        <p>This state displays total and per-minute energy consumption, along with real-time values for power, current, voltage, and frequency. The data visualization enables monitoring of electrical load and detecting anomalies in real time.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>HVAC state</h3>
                    </div>
                    <div class="expansion-content">
                        <p>This state allows for control of the HVAC system, monitoring its current status (on/off), target temperature, and airflow. It also includes charts showing the history of system states, target temperature changes, and airflow dynamics.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Smart sensor state</h3>
                    </div>
                    <div class="expansion-content">
                        <p>This state monitors temperature, humidity, air quality (CO₂, TVOC), and room occupancy history. All data is presented through charts and gauges, offering a complete view of the office microclimate and comfort level.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Water meter state</h3>
                    </div>
                    <div class="expansion-content">
                        <p>This state shows total and hourly water consumption, as well as the battery level of the device. The data helps track water usage efficiency and monitor the sensor’s operational status.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="applications applications-additional summary-margin section-padding">
    <div class="section-header">
        <h2>Applications of smart office solution</h2>
        <p>The Smart Office approach can be easily adapted to various other sectors</p>
    </div>
    <div class="applications-container-large">
        <div class="text-row-top">
            <div class="text-block">
                <h3>Smart retail</h3>
                <p>Energy consumption monitoring, climate automation in shopping areas, and lighting control.</p>
            </div>
            <div class="text-block">
                <h3>Healthcare</h3>
                <p>Microclimate control in patient rooms, occupancy monitoring, and tracking of CO₂ levels and temperature.</p>
            </div>
            <div class="text-block">
                <h3>Education</h3>
                <p>Managing comfort and resource usage in educational facilities.</p>
            </div>
        </div>
        <div class="images-row">
            <div class="application-image"><img src="/images/usecases/smart-energy/malls-1.svg" alt="Mall" title="Smart retail"></div>
            <div class="application-image"><img src="/images/usecases/smart-office/manufacturing-1.svg" alt="Manufacturing" title="Manufacturing"></div>
            <div class="application-image"><img src="/images/usecases/health-care/hospital-1.svg" alt="Hospital" title="Healthcare"></div>
            <div class="application-image"><img src="/images/usecases/smart-office/hospitality-1.svg" alt="Hospitality" title="Hospitality"></div>
            <div class="application-image"><img src="/images/usecases/smart-energy/education-1.svg" alt="Education" title="Education"></div>
        </div>
        <div class="text-row-bottom">
            <div class="text-block">
                <h3>Manufacturing</h3>
                <p>Energy audits, airflow monitoring, and smart overload notifications.</p>
            </div>
            <div class="text-block">
                <h3>Hospitality</h3>
                <p>Room automation, personalized climate control, and monitoring of CO₂ levels and space occupancy.</p>
            </div>
        </div>
    </div>
    <div class="applications-container-small">
        <div class="application-block">
            <div class="image"><img src="/images/usecases/smart-office/mall-2.svg" alt="Mall" title="Smart retail"></div>
            <div class="text-block">
                <h3>Smart retail</h3>
                <p>Energy consumption monitoring, climate automation in shopping areas, and lighting control.</p>
            </div>
        </div>
        <div class="application-block">
            <div class="text-block">
                <h3>Manufacturing</h3>
                <p>Energy audits, airflow monitoring, and smart overload notifications.</p>
            </div>
            <div class="image"><img src="/images/usecases/smart-office/manufacturing-2.svg" alt="Manufacturing" title="Manufacturing"></div>
        </div>
        <div class="application-block">
            <div class="image"><img src="/images/usecases/smart-office/hospital-2.svg" alt="Hospital" title="Healthcare"></div>
            <div class="text-block">
                <h3>Healthcare</h3>
                <p>Microclimate control in patient rooms, occupancy monitoring, and tracking of CO₂ levels and temperature.</p>
            </div>
        </div>
        <div class="application-block">
            <div class="text-block">
                <h3>Hospitality</h3>
                <p>Room automation, personalized climate control, and monitoring of CO₂ levels and space occupancy.</p>
            </div>
            <div class="image"><img src="/images/usecases/smart-office/hospitality-2.svg" alt="Hospitality" title="Hospitality"></div>
        </div>
        <div class="application-block">
            <div class="image"><img src="/images/usecases/smart-office/education-2.svg" alt="Education" title="Education"></div>
            <div class="text-block">
                <h3>Education</h3>
                <p>Managing comfort and resource usage in educational facilities.</p>
            </div>
        </div>
    </div>
</section>

<section class="summary">
    <h2>Summary of smart office solution</h2>
    <div>
        <p>The following interactive dashboard represents an environment monitoring component that you may easily embed into your IoT solution. This particular dashboard allows users to monitor temperature and humidity sensors. You may quickly adapt it to Air quality or other sensors and add remote control scenarios.</p>
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

            if (Math.abs(elemCoor.top) < elemCoor.height / 2 - 350 && elemCoor.top < 0) {
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
                <a id="UseCases_EnvMon_ViewLiveDemo" target="_blank" href="https://thingsboard.cloud/dashboard/dfaef940-8a91-11ec-83d0-83ba2015b874?publicId=4978baf0-8a92-11ec-98f9-ff45c37940c6" class="button gtm_button">View live demo</a>
                <a id="UseCases_EnvMon_ContactUs" target="_blank" href="https://thingsboard.io/docs/contact-us/" class="button contact-us gtm_button">Contact us</a>
            </div>`;
    
            return block;
        }

        function getImage(index) {
            const images = [
                "<img src='/images/usecases/smart-office/smart-office-1.webp' alt='HVAC switch, temperature and power chart, device list, and floor plan with sensor locations' title='HVAC system dashboard: includes temperature control knob, power chart, connected devices, and interactive floor plan in ThingsBoard'/>",
                "<img src='/images/usecases/smart-office/smart-office-2.webp' alt='Energy consumption, power and current charts with wind turbine background' title='Energy monitoring dashboard with consumption statistics, real-time current and voltage tracking, and no active alarms'/>",
                "<img src='/images/usecases/smart-office/smart-office-3.webp' alt='HVAC control with state, airflow history, and temperature targets' title='ThingsBoard dashboard for HVAC: displays airflow, target temperature, device state, and alarm history over time'/>",
                "<img src='/images/usecases/smart-office/smart-office-5.webp' alt='Smart sensor dashboard with temperature, humidity, CO2, TVOC, and occupancy tracking' title='Environmental monitoring via smart sensor: tracks temperature, humidity, air quality, and room occupancy in ThingsBoard platform'/>",
                "<img src='/images/usecases/smart-office/smart-office-4.webp' alt='Water consumption statistics and battery discharge graph with office contact info' title='Water meter dashboard: shows water usage per minute, historical consumption, battery voltage over time, and device contact information'/>",
            ];
            return images[index];
        }
    });
</script>