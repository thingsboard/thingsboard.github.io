---
layout: use-case
title: IoT Environment Monitoring solutions with ThingsBoard
description: Discover scalable and secure IoT environment monitoring solutions with ThingsBoard. Connect multiple sensors, automate alerts, and gain real-time insights to improve safety, efficiency, and comfort across industrial, commercial, and smart building applications.
notitle: "true"
customTitle: "true"
includeAdvantages: "true"

---

{% include usecase-nav.html usecase="environment-monitoring" %}
<div id="scada-fullpage" onclick="this.style.display='none'; document.body.style.overflow='unset'"><div class="image"></div><div class="close-icon"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.3337 8.5465L23.4537 6.6665L16.0003 14.1198L8.54699 6.6665L6.66699 8.5465L14.1203 15.9998L6.66699 23.4532L8.54699 25.3332L16.0003 17.8798L23.4537 25.3332L25.3337 23.4532L17.8803 15.9998L25.3337 8.5465Z"></path></svg></div></div>
<h1 class="usecase-title">Environment monitoring</h1>
<section class="environment-monitoring-about">
    <div class="about-text">
        <div class="short">
            <div class="block">
                <p class="text">Environment monitoring plays a vital role in ensuring safety, comfort, and operational efficiency across all types of facilities — from office buildings to industrial sites. ThingsBoard is perfectly suited to address these challenges.</p>
            </div>
            <div class="demo-button">
                <a id="UseCases_EnvMon_ViewLiveDemo" target="_blank" href="https://thingsboard.cloud/dashboard/dfaef940-8a91-11ec-83d0-83ba2015b874?publicId=4978baf0-8a92-11ec-98f9-ff45c37940c6" class="button gtm_button">View live demo</a>
            </div>
        </div>
        <div class="long">
            <p>ThingsBoard provides a scalable, reliable, and secure platform for environment monitoring. With built-in support for LoRaWAN, NB-IoT, and Sigfox, it enables efficient integration of numerous low-power sensors over long distances, minimizing infrastructure complexity. The platform supports standard IoT protocols like HTTP, MQTT, CoAP, and LwM2M, making it easy to connect a wide range of devices and scale with your project.</p>
            <p>Automated features—from real-time alerts on critical changes to forwarding data into external analytics tools—ensure proactive monitoring. Intuitive dashboards, customizable logic, and seamless integrations turn raw environmental data into actionable insights, enabling smarter and faster decisions.</p>        </div>
    </div>
</section>

<section class="environment-monitoring-carousel carousel-padding">
    {% include carousel.liquid nonActiveItemsVisibility = true overlay = false collectionMap = 'use-cases' collectionKey = 'environment-monitoring' %}
</section> 

<section class="environment-monitoring-solution-structure">
    <h2>Solution structure of environment monitoring</h2>
    <div class="about-text">
        <div class="short">
            <div class="block">
                <p class="text">Sensor data is transmitted to ThingsBoard using IoT protocols like HTTP, MQTT, CoAP, and LwM2M, or via integrations with LoRaWAN servers and other platforms.</p>
            </div>
        </div>
        <div class="long">
            <p>The built-in stream processing engine instantly analyzes incoming messages, triggers events, generates alarms, and routes data to monitoring dashboards. The collected data is visualized through intuitive dashboards, giving users clear insights into alarms, and performance metrics — all in real time, from a single interface.</p>
        </div>
    </div>
    <div class="scheme">
        <img id="schemeSVG" loading="lazy" data-src="/images/usecases/smart-use-cases.svg" class="svg-animation" alt="Environment monitoring solution architecture" title="Environment monitoring solution architecture: IoT devices connect via gateways to the cloud for processing, visualization, and automation">
    </div>
</section>

<section class="dashboard-structure section-padding">
    <div class="section-header">
        <h2>Environment monitoring dashboard structure</h2>
        <p>
            The Smart Office solution includes a sample dashboard designed for clear visualization of key metrics. It displays energy and water consumption, air quality, temperature, humidity, and HVAC system status. Alarms are also shown to enable prompt response to abnormal conditions. While the provided dashboard is relatively simple, ThingsBoard allows users to create much more complex and customized dashboards based on their specific Smart Office requirements.
        </p>
    </div>
    <div class="dashboard-structure-block">
        <div class="menu">
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Environment monitoring state</h3>
                    </div>
                    <div class="expansion-content">
                        <p>Dashboard provides real-time monitoring of sensor data with interactive charts displaying metrics like temperature and humidity. The interface allows configuring alarm thresholds and sensor locations while showing active alarms with severity levels. You can analyze historical data and manage device settings.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Sensor C1 monitoring state</h3>
                    </div>
                    <div class="expansion-content">
                        <p>Track real-time temperature and humidity readings from Sensor C1 along with historical data from the past hour. Compare key metrics (min/max/average values) to maintain optimal Environment conditions.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Sensor T1 monitoring state</h3>
                    </div>
                    <div class="expansion-content">
                        <p>Track real-time temperature and humidity readings from Sensor T1 along with historical data from the past hour. Compare key metrics (min/max/average values) to maintain optimal Environment conditions.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Add or edit sensor</h3>
                    </div>
                    <div class="expansion-content">
                        <p>You can configure Sensor's critical thresholds including high temperature and low humidity alarms. Precise geolocation can be modified via latitude/longitude coordinates. All changes remain pending until confirmed with the Save button. The Cancel option reverts any unsaved modifications to previous settings.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="applications applications-additional summary-margin section-padding">
    <div class="section-header">
        <h2>Applications of environment monitoring solution</h2>
        <p>A similar IoT-based monitoring and management solution, like Smart Assisted Living, can be adapted and applied in various fields and directions. Here are some of them:</p>
    </div>
    <div class="applications-container-large">
        <div class="text-row-top">
            <div class="text-block">
                <h3>Smart cities and urban infrastructure</h3>
                <p>Monitoring air quality, noise levels, temperature, and humidity across city zones to support Environment policy, alert residents, improve urban living conditions.</p>
            </div>
            <div class="text-block">
                <h3>Agricultural and greenhouse facilities</h3>
                <p>Controlling power consumption in classrooms, labs, and dormitories, scheduling energy use based on occupancy, and ensuring sustainability targets are met.</p>
            </div>
            <div class="text-block">
                <h3>Warehouses and cold storage facilities</h3>
                <p>tMonitoring temperature, humidity, and air circulation to ensure proper storage conditions for perishable goods and pharmaceutical products.</p>
            </div>
        </div>
        <div class="images-row">
            <div class="application-image"><img src="/images/usecases/environment-monitoring/smart-cities-1.svg" alt="Smart city" title="Smart cities and urban infrastructure"></div>
            <div class="application-image"><img src="/images/usecases/environment-monitoring/laboratory-1.svg" alt="Laboratory" title="Healthcare and laboratory environments"></div>
            <div class="application-image"><img src="/images/usecases/environment-monitoring/agriculture-1.svg" alt="Greenhouse" title="Agricultural and greenhouse facilities"></div>
            <div class="application-image"><img src="/images/usecases/environment-monitoring/education-1.svg" alt="School" title="Educational and research institutions"></div>
            <div class="application-image"><img src="/images/usecases/environment-monitoring/warehouse-1.svg" alt="Warehouse" title="Warehouses and cold storage facilities"></div>
        </div>
        <div class="text-row-bottom">
            <div class="text-block">
                <h3>Healthcare and laboratory environments</h3>
                <p>Maintaining sterile conditions and proper ventilation by tracking air quality, CO₂ levels, and temperature in sensitive medical or laboratory zones.</p>
            </div>
            <div class="text-block">
                <h3>Educational and research institutions</h3>
                <p>Collecting long-term Environment data for scientific research, campus sustainability programs, and educational use in Environment studies.</p>
            </div>
        </div>
    </div>
    <div class="applications-container-small">
        <div class="application-block">
            <div class="image"><img src="/images/usecases/environment-monitoring/smart-cities-2.svg" alt="Smart city" title="Smart cities and urban infrastructure"></div>
            <div class="text-block">
                <h3>Smart cities and urban infrastructure</h3>
                <p>Monitoring air quality, noise levels, temperature, and humidity across city zones to support Environment policy, alert residents, improve urban living conditions.</p>
            </div>
        </div>
        <div class="application-block">
            <div class="text-block">
                <h3>Healthcare and laboratory environments</h3>
                <p>Maintaining sterile conditions and proper ventilation by tracking air quality, CO₂ levels, and temperature in sensitive medical or laboratory zones.</p>
            </div>
            <div class="image"><img src="/images/usecases/environment-monitoring/laboratory-2.svg" alt="Laboratory" title="Healthcare and laboratory environments"></div>
        </div>
        <div class="application-block">
            <div class="image"><img src="/images/usecases/environment-monitoring/agriculture-2.svg" alt="Greenhouse" title="Agricultural and greenhouse facilities"></div>
            <div class="text-block">
                <h3>Agricultural and greenhouse facilities</h3>
                <p>Controlling power consumption in classrooms, labs, and dormitories, scheduling energy use based on occupancy, and ensuring sustainability targets are met.</p>
            </div>
        </div>
        <div class="application-block">
            <div class="text-block">
                <h3>Educational and research institutions</h3>
                <p>Collecting long-term Environment data for scientific research, campus sustainability programs, and educational use in Environment studies.</p>
            </div>
            <div class="image"><img src="/images/usecases/environment-monitoring/education-2.svg" alt="School" title="Educational and research institutions"></div>
        </div>
        <div class="application-block">
            <div class="image"><img src="/images/usecases/environment-monitoring/warehouse-2.svg" alt="Warehouse" title="Warehouses and cold storage facilities"></div>
            <div class="text-block">
                <h3>Warehouses and cold storage facilities</h3>
                <p>Monitoring temperature, humidity, and air circulation to ensure proper storage conditions for perishable goods and pharmaceutical products.</p>
            </div>
        </div>
    </div>
</section>

<section class="summary">
    <h2>Summary of environment monitoring</h2>
    <div>
        <p>The following interactive dashboard represents an environment monitoring component that you may easily embed into your IoT solution. This particular dashboard allows users to monitor temperature and humidity sensors. You may quickly adapt it to Air quality or other sensors and add remote control scenarios.</p>
        <img src="/images/usecases/health-care/summary.svg" alt="Text summary icon">
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

            if (Math.abs(elemCoor.top) < elemCoor.height / 2 - 400 && elemCoor.top < 0) {
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
                "<img src='/images/usecases/environment-monitoring/environment-monitoring-2.webp' alt='Dashboard with sensor status, critical alarm, and map location of sensors' title='ThingsBoard dashboard showing real-time sensor metrics, alarm status, and their geographic positions on the map'/>",
                "<img src='/images/usecases/environment-monitoring/environment-monitoring-3.webp' alt='Temperature and humidity charts with location of Sensor C1' title='Live monitoring of Sensor C1: temperature and humidity data alongside sensor location on the map'/>",
                "<img src='/images/usecases/environment-monitoring/environment-monitoring-4.webp' alt='Temperature and humidity charts with location of Sensor T1' title='Sensor T1 real-time readings: temperature and humidity graphs with sensor map marker'/>",
                "<img src='/images/usecases/environment-monitoring/environment-monitoring-1.webp' alt='Sensor configuration panel with thresholds and map location in ThingsBoard' title='Editing Sensor T1: setting temperature and humidity thresholds and viewing sensor location on the map'/>",
            ];
            return images[index];
        }
    });
</script>