---
layout: use-case
title: Urban & Industrial Air Monitoring with IoT and Dashboards
description: Monitor, analyze, and act on air quality in real time with ThingsBoard — the flexible IoT platform for cities, industries, and research.
notitle: "true"
customTitle: "true"
includeAdvantages: "true"
contactUsModal: "true"

---

{% include usecase-nav.html usecase="air-quality-monitoring" %}

<div id="scada-fullpage" onclick="this.style.display='none'; document.body.style.overflow='unset'"><div class="image"></div><div class="close-icon"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.3337 8.5465L23.4537 6.6665L16.0003 14.1198L8.54699 6.6665L6.66699 8.5465L14.1203 15.9998L6.66699 23.4532L8.54699 25.3332L16.0003 17.8798L23.4537 25.3332L25.3337 23.4532L17.8803 15.9998L25.3337 8.5465Z"></path></svg></div></div>
<h1 class="usecase-title">Air quality monitoring solution</h1>
<section class="air-quality-about">
    <div class="about-text">
        <div class="short">
            <div class="block">
                <p class="text">Urban areas, industrial districts, and high-traffic zones constantly battle air pollution — a critical issue that affects both public health and regulatory compliance. From fine particulate matter (PM2.5, PM10) to harmful gases like SO₂ and CO, monitoring these environmental threats requires a robust and responsive system. ThingsBoard rises to this challenge with unmatched flexibility and reliability.</p>
            </div>
            <div class="demo-button">
                <a id="UseCases_AirQM_ViewLiveDemo" target="_blank" href="https://thingsboard.cloud/dashboard/ec564620-82b2-11ed-a624-8360a2a6cb0e?publicId=4978baf0-8a92-11ec-98f9-ff45c37940c6" class="button gtm_button">View live demo</a>            
            </div>
        </div>
        <div class="long">
            <p>The ThingsBoard IoT platform is purpose-built to address this challenge with its scalable architecture, multi-protocol support (MQTT, HTTP, CoAP, LwM2M), and powerful rule engine. It seamlessly connects distributed air quality sensors, ensures secure and reliable data ingestion, and enables real-time analytics and alarming across large deployments.</p>
            <p>With its customizable dashboards, flexible data visualization tools, and low-code rule configuration, ThingsBoard empowers organizations to deploy air quality monitoring systems faster, manage them efficiently, and respond to environmental changes proactively. Whether for smart cities, industrial compliance, or community health initiatives, ThingsBoard delivers the performance and adaptability needed to take control of air quality.</p>
        </div>
    </div>
</section>

<section class="air-quality-carousel carousel-padding">
    {% include default-carousel.liquid collectionMap = 'use-cases' collectionKey = 'air-quality-monitoring' %}
</section> 

{% include contact-us-banner.liquid %}

<section class="air-quality-solution-structure">
    <h2>Solution structure of air quality monitoring</h2>
    <div class="about-text">
        <div class="short">
            <div class="block">
                <p class="text">An <a href="/docs/pe/solution-templates/air-quality-monitoring/">air quality monitoring solution</a> powered by ThingsBoard consists of IoT sensors that collect real-time data on pollutants such as PM2.5, PM10, CO, SO₂, NO₂, and O₃. These devices transmit telemetry to the platform via industry-standard communication protocols, including MQTT, HTTP/HTTPS, CoAP, and LwM2M — enabling flexible integration across sectors.</p>
            </div>
        </div>
        <div class="long">
            <p>Once received by ThingsBoard, the data is processed, stored in a time-series database, and visualized via interactive dashboards. Custom rule chains allow the generation of automated alarms when AQI thresholds are breached or sensor battery levels drop below critical levels.</p>
        </div>
    </div>
    <div class="scheme">
        <img id="schemeSVG" loading="lazy" data-src="https://img.thingsboard.io/usecases/smart-use-cases.svg" class="svg-animation" alt="Smart energy solution architecture" title="Smart energy solution architecture: IoT devices connect via gateways to the cloud for processing, visualization, and automation">
    </div>
</section>

<section class="dashboard-structure section-padding">
    <div class="section-header">
        <h2>Air quality monitoring dashboard structure</h2>
        <p>
            The air quality monitoring solution in ThingsBoard is built on a modular dashboard structure that serves both public and administrative needs. Each dashboard is composed of configurable widgets, real-time data streams, map overlays, and interactive filters — all powered by ThingsBoard’s flexible dashboard engine.
        </p>
    </div>
    <div class="dashboard-structure-block">
        <div class="menu">
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Public dashboard: citywide AQI map state</h3>
                    </div>
                    <div class="expansion-content">
                        <p>Displays all sensor locations with live AQI values. Colored markers reflect pollution levels using EPA standards. Clicking on a location shows its historical AQI trend. This interface makes data easily accessible to users (citizens and city officials) for transparent decision-making.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Particulate matter insights: PM10, PM2.5, and more</h3>
                    </div>
                    <div class="expansion-content">
                        <p>Detailed popup with pollutant-specific graphs, current and average levels, and health impact descriptions. These insights allow environmental analysts to evaluate pollutant behavior throughout the day.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Dashboard list: access management </h3>
                    </div>
                    <div class="expansion-content">
                        <p>Displays all available dashboards: public for general visibility and administrative for sensor configuration. Separation of access ensures operational control while maintaining public transparency.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Admin dashboard: sensor status and map overview state</h3>
                    </div>
                    <div class="expansion-content">
                        <p>The administrator panel shows sensor connectivity, battery status, last AQI readings, and geolocation. This enables rapid identification of sensor issues or local air quality anomalies.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Sensor detail view state</h3>
                    </div>
                    <div class="expansion-content">
                        <p>Shows real-time values for each pollutant, battery trend, historical connection status, and location on the map. It supports deep technical analysis and validation of specific sensor performance.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Add sensor interface</h3>
                    </div>
                    <div class="expansion-content">
                        <p>Simple form for registering new sensors with ID, label, and coordinates. This supports fast expansion of the network without any development effort.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Alarm rule configuration</h3>
                    </div>
                    <div class="expansion-content">
                        <p>Rule editor for triggering alarms based on battery level or lost connectivity. Enables proactive maintenance and ensures data reliability over time.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="applications applications-additional summary-margin section-padding">
    <div class="section-header">
        <h2>Applications of air quality monitoring</h2>
        <p>An IoT-based solution like the air quality monitoring system, powered by ThingsBoard, can be adapted across industries where air quality impacts health, safety, or compliance. Its flexibility and real-time analytics make it valuable far beyond environmental use cases. Here are some key application areas:</p>
    </div>
    <div class="applications-container-large">
        <div class="text-row-top">
            <div class="text-block">
                <h3>Smart cities</h3>
                <p>ThingsBoard enables city authorities to deploy scalable sensor networks and automate air quality alarms, helping protect public health and enforce clean air regulations in real time.</p>
            </div>
            <div class="text-block">
                <h3>Transportation & logistics</h3>
                <p>Enable landlords and tenants to monitor and reduce energy bills through transparent usage tracking.</p>
            </div>
            <div class="text-block">
                <h3>Real estate development</h3>
                <p>Developers leverage ThingsBoard’s remote monitoring, public dashboards, and analytics to showcase air quality metrics as a selling point for eco-friendly properties.</p>
            </div>
        </div>
        <div class="images-row">
            <div class="application-image"><img src="https://img.thingsboard.io/usecases/air-quality/cities-1.svg" alt="Smart cities" title="Smart cities"></div>
            <div class="application-image"><img src="https://img.thingsboard.io/usecases/air-quality/industrial-1.svg" alt="Industrial zones" title="Industrial zones"></div>
            <div class="application-image"><img src="https://img.thingsboard.io/usecases/air-quality/logistics-1.svg" alt="Transportation & logistics" title="Transportation & logistics"></div>
            <div class="application-image"><img src="https://img.thingsboard.io/usecases/air-quality/education-1.svg" alt="Education & research" title="Education & research"></div>
            <div class="application-image"><img src="https://img.thingsboard.io/usecases/air-quality/development-1.svg" alt="Real estate development" title="Real estate development"></div>
        </div>
        <div class="text-row-bottom">
            <div class="text-block">
                <h3>Industrial zones</h3>
                <p>Manufacturers use ThingsBoard to monitor emissions through customizable dashboards and rule-based automation, ensuring regulatory compliance and minimizing environmental risks.</p>
            </div>
            <div class="text-block">
                <h3>Education & research</h3>
                <p>Academic institutions benefit from ThingsBoard’s real-time data visualization and open API, integrating environmental data into curriculum, research projects, and citizen science initiatives.</p>
            </div>
        </div>
    </div>
    <div class="applications-container-small">
        <div class="application-block">
            <div class="image"><img src="https://img.thingsboard.io/usecases/air-quality/cities-2.svg" alt="Smart cities" title="Smart cities"></div>
            <div class="text-block">
                <h3>Smart cities</h3>
                <p>ThingsBoard enables city authorities to deploy scalable sensor networks and automate air quality alarms, helping protect public health and enforce clean air regulations in real time.</p>
            </div>
        </div>
        <div class="application-block">
            <div class="text-block">
                <h3>Industrial zones</h3>
                <p>Manufacturers use ThingsBoard to monitor emissions through customizable dashboards and rule-based automation, ensuring regulatory compliance and minimizing environmental risks.</p>
            </div>
            <div class="image"><img src="https://img.thingsboard.io/usecases/air-quality/industrial-2.svg" alt="Industrial zones" title="Industrial zones"></div>
        </div>
        <div class="application-block">
            <div class="image"><img src="https://img.thingsboard.io/usecases/air-quality/logistics-2.svg" alt="Transportation & logistics" title="Transportation & logistics"></div>
            <div class="text-block">
                <h3>Transportation & logistics</h3>
                <p>Enable landlords and tenants to monitor and reduce energy bills through transparent usage tracking.</p>
            </div>
        </div>
        <div class="application-block">
            <div class="text-block">
                <h3>Education & research</h3>
                <p>Academic institutions benefit from ThingsBoard’s real-time data visualization and open API, integrating environmental data into curriculum, research projects, and citizen science initiatives.</p>
            </div>
            <div class="image"><img src="https://img.thingsboard.io/usecases/air-quality/education-2.svg" alt="Education & research" title="Education & research"></div>
        </div>
        <div class="application-block">
            <div class="image"><img src="https://img.thingsboard.io/usecases/air-quality/development-2.svg" alt="Real estate development" title="Real estate development"></div>
            <div class="text-block">
                <h3>Real estate development</h3>
                <p>Developers leverage ThingsBoard’s remote monitoring, public dashboards, and analytics to showcase air quality metrics as a selling point for eco-friendly properties.</p>
            </div>
        </div>
    </div>
</section>

<section class="summary">
    <div class="summary-text">
        <h2>Summary of air quality monitoring</h2>
        <p>ThingsBoard’s air quality monitoring solution offers a scalable, real-time IoT-based platform for environmental intelligence. It connects pollution sensors with cloud dashboards, alarms, and data storage to empower cities, industries, and institutions to act on air quality insights. Its flexibility, open protocol support, and customizable visualization make it ideal for public health, regulatory compliance, and green initiatives.</p>
    </div>
    <div class="summary-icon">
        <img src="https://img.thingsboard.io/usecases/health-care/summary.svg" alt="Text summary icon" title="Text summary icon">
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
                <a id="UseCases_AirQM_ViewLiveDemo" target="_blank" href="https://thingsboard.cloud/dashboard/ec564620-82b2-11ed-a624-8360a2a6cb0e?publicId=4978baf0-8a92-11ec-98f9-ff45c37940c6" class="button gtm_button">View live demo</a>            
                <a id="UseCases_AirQM_ContactUs" target="_blank" href="/docs/contact-us/?subject=Custom%20Development" class="button contact-us gtm_button">Contact us</a>
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
                "<img src='https://img.thingsboard.io/usecases/air-quality/aiq-1.webp' alt='Interactive AQI heatmap of Los Angeles on the ThingsBoard IoT Platform' title='AQI map of Los Angeles monitored via ThingsBoard'/>",
                "<img src='https://img.thingsboard.io/usecases/air-quality/aiq-2.webp' alt='Live PM10 air quality metrics for Beverly Hills on ThingsBoard dashboard' title='PM10 air quality levels in Beverly Hills displayed in ThingsBoard'/>",
                "<img src='https://img.thingsboard.io/usecases/air-quality/aiq-3.webp' alt='List of IoT dashboards for air quality monitoring in ThingsBoard' title='Manage air quality dashboards in ThingsBoard'/>",
                "<img src='https://img.thingsboard.io/usecases/air-quality/aiq-4.webp' alt='IoT air quality sensors and alerts visualized on ThingsBoard map dashboard' title='Live air quality sensors and alerts across LA in ThingsBoard'/>",
                "<img src='https://img.thingsboard.io/usecases/air-quality/aiq-5.webp' alt='Sensor metrics for Beverly Hills including AQI and battery on ThingsBoard' title='Sensor data for Beverly Hills – AQI, battery and status'/>",
                "<img src='https://img.thingsboard.io/usecases/air-quality/aiq-6.webp' data-bg='#A4A4A4' alt='Sensor registration form with ID and GPS fields in ThingsBoard' title='Create a new air quality sensor in ThingsBoard'/>",
                "<img src='https://img.thingsboard.io/usecases/air-quality/aiq-7.webp' data-bg='#A4A4A4' alt='ThingsBoard interface for configuring IoT alarm thresholds' title='Configure alert rules for sensor battery and connection'/>"
            ];
            return images[index];
        }
    });
</script>
