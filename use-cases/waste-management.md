---
layout: use-case
title: Smart Waste Management with ThingsBoard for Cities & Industry
description: Optimize waste collection across cities, industries, and campuses with ThingsBoard’s IoT platform — featuring real-time monitoring, smart alarms, and interactive dashboards for data-driven efficiency and sustainability.
notitle: "true"
customTitle: "true"
includeAdvantages: "true"
contactUsModal: "true"

---

{% include usecase-nav.html usecase="waste-management" %}

<div id="scada-fullpage" onclick="this.style.display='none'; document.body.style.overflow='unset'"><div class="image"></div><div class="close-icon"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.3337 8.5465L23.4537 6.6665L16.0003 14.1198L8.54699 6.6665L6.66699 8.5465L14.1203 15.9998L6.66699 23.4532L8.54699 25.3332L16.0003 17.8798L23.4537 25.3332L25.3337 23.4532L17.8803 15.9998L25.3337 8.5465Z"></path></svg></div></div>
<h1 class="usecase-title">Waste management solution</h1>
<section class="waste-management-about">
    <div class="about-text">
        <div class="short">
            <div class="block">
                <p class="text">As urban populations grow and sustainability standards tighten, waste management systems must evolve to be more efficient, scalable, and data-driven. Traditional methods — based on fixed collection schedules and manual checks —often result in overflows, resource waste, and high operational costs. ThingsBoard IoT Platform effectively addresses these challenges, offering powerful tools for real-time monitoring, automation, and optimization of waste operations.</p>
            </div>
            <div class="demo-button">
                <a id="UseCases_WasteManagement_ViewLiveDemo" target="_blank" href="https://thingsboard.cloud/dashboard/7814f8a0-8fa9-11ef-baa8-4521077809fd?publicId=7aa99e80-8acd-11ef-a59e-a9c993dbec14" class="button gtm_button">View live demo</a>            
            </div>
        </div>
        <div class="long">
            <p>ThingsBoard IoT platform transforms waste collection logistics for cities, campuses, and enterprises by enabling real-time monitoring through sensor-equipped bins. As these sensors transmit live data on fill levels, battery status, and connectivity, ThingsBoard processes the telemetry instantly, allowing operators to reduce unnecessary pickups, lower emissions, and respond proactively to service needs. With its flexible device integration, rule-based automation, and customizable dashboards, ThingsBoard empowers waste management teams to deploy quickly, scale easily, and make smarter decisions based on actionable insights.</p>
            <p>Supporting industry-standard protocols like MQTT, CoAP, and HTTP, ThingsBoard enables seamless sensor connectivity at scale. Its Rule Engine allows for complex event processing and alarming, while multi-tenant architecture supports parallel use by multiple stakeholders — from city departments to private contractors. Combined with powerful analytics and visualization tools, ThingsBoard delivers a complete, future-ready solution for intelligent waste management.</p>
        </div>
    </div>
</section>

<section class="waste-management-carousel carousel-padding">
    {% include default-carousel.liquid collectionMap = 'use-cases' collectionKey = 'waste-management' %}
</section> 

{% include contact-us-banner.liquid %}

<section class="waste-management-solution-structure">
    <h2>Solution structure of waste management</h2>
    <div class="about-text">
        <div class="short">
            <div class="block">
                <p class="text">The ThingsBoard-powered <a href="/docs/pe/solution-templates/waste-management/">waste management solution</a> begins at the edge — where IoT sensors installed in bins monitor fill levels and battery status in real time. These devices send telemetry data to ThingsBoard using supported protocols such as MQTT, CoAP, or HTTP. Thanks to ThingsBoard gateway and built-in integration capabilities, even legacy systems and non-IP sensors can be seamlessly connected.</p>
            </div>
        </div>
        <div class="long">
            <p>Once the data reaches the platform, it is processed and stored in a time-series database. Rule Engine chains trigger alarms based on predefined conditions such as low battery or bins nearing capacity. Finally, this structured information is presented on interactive dashboards, allowing operators to make timely decisions and optimize collection routes. All of this can be managed in a multi-tenant environment, enabling smart city operators, private contractors, and utility providers to co-manage waste operations securely.</p>
        </div>
    </div>
    <div class="scheme">
        <img id="schemeSVG" loading="lazy" data-src="/images/usecases/smart-use-cases.svg" class="svg-animation" alt="Smart energy solution architecture" title="Smart energy solution architecture: IoT devices connect via gateways to the cloud for processing, visualization, and automation">
    </div>
</section>

<section class="dashboard-structure section-padding">
    <div class="section-header">
        <h2>Waste management dashboard structure</h2>
        <p>
            The dashboard structure in the ThingsBoard waste management solution is modular and intuitive, combining high-level overviews with detailed sensor-level insights. It includes map-based bin tracking, alarm configuration panels, device management interfaces, and historical analytics — ensuring full operational visibility and control from a single interface.        
        </p>
    </div>
    <div class="dashboard-structure-block">
        <div class="menu">
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Dashboard overview and sensor states</h3>
                    </div>
                    <div class="expansion-content">
                        <p>This main dashboard view combines a real-time map with bin locations and a set of dynamic widgets showing battery status, fill levels, and device connectivity. Key metrics such as total bins, low battery alarms, and offline units are summarized for instant system awareness. This visual structure allows operators to monitor geographical distribution, detect anomalies at a glance, and make fast, informed decisions.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Sensor registration panel</h3>
                    </div>
                    <div class="expansion-content">
                        <p>New sensors can be added directly through this panel using a simple CSV import, with required metadata such as GPS coordinates, addresses, and serial numbers. The intuitive interface streamlines onboarding, allowing operators to register and configure devices quickly without leaving the dashboard. This automation ensures accurate geo-tagging and immediate visibility on the map, significantly improving deployment speed and routing efficiency.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Alarm configuration panel</h3>
                    </div>
                    <div class="expansion-content">
                        <p>Operators can define and adjust threshold values that trigger alarms — such as battery dropping below 30% or bin fill level exceeding 90%. These thresholds are fully configurable, allowing the system to adapt to evolving operational needs or seasonal waste patterns. This flexibility ensures timely maintenance, prevents overflow, and keeps devices functioning reliably, while the visual rule editor makes it easy to fine-tune alarm logic in just a few clicks.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Sensor edit interface</h3>
                    </div>
                    <div class="expansion-content">
                        <p>Device metadata such as address, serial number, and coordinates can be updated manually. This flexibility helps in field corrections and GPS updates post-deployment. Correct metadata ensures better filtering and dashboard grouping.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Device insights view</h3>
                    </div>
                    <div class="expansion-content">
                        <p>Detailed sensor views include trend graphs for fill level and battery life. Historical visualization helps detect usage patterns and forecast maintenance. Dashboards convert raw telemetry into actionable insights.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="applications applications-additional summary-margin section-padding">
    <div class="section-header">
        <h2>Applications of waste management solution</h2>
        <p>This solution, built on ThingsBoard IoT platform, is highly adaptable and can meet the operational needs of multiple industries—offering real-time monitoring, flexible device integration, smart alarming, and powerful analytics. Here are five key sectors where it delivers value:</p>
    </div>
    <div class="applications-container-large">
        <div class="text-row-top">
            <div class="text-block">
                <h3>Municipal services</h3>
                <p>Enables city authorities to optimize waste collection routes and respond faster to bin overflow alarms using ThingsBoard’s real-time telemetry, automated rules, and geospatial dashboards.</p>
            </div>
            <div class="text-block">
                <h3>University and corporate campuses</h3>
                <p>Promotes sustainability goals with smart bin tracking, usage analytics, and seamless deployment across distributed locations, all from a centralized dashboard.</p>
            </div>
            <div class="text-block">
                <h3>Event venues and stadiums</h3>
                <p>Handles fluctuating waste loads during events with scalable sensor connectivity and predictive analytics, ensuring clean environments and resource efficiency.</p>
            </div>
        </div>
        <div class="images-row">
            <div class="application-image"><img src="/images/usecases/waste-monitoring/municipal-1.svg" alt="Municipal services" title="Municipal services"></div>
            <div class="application-image"><img src="/images/usecases/air-quality/industrial-1.svg" alt="Industrial facilities" title="Industrial facilities"></div>
            <div class="application-image"><img src="/images/usecases/smart-energy/education-1.svg" alt="University and corporate campuses" title="University and corporate campuses"></div>
            <div class="application-image"><img src="/images/usecases/waste-monitoring/transportation-1.svg" alt="Transportation hubs (airports, ports, stations)" title="Transportation hubs (airports, ports, stations)"></div>
            <div class="application-image"><img src="/images/usecases/waste-monitoring/stadium-1.svg" alt="Event venues and stadiums" title="Event venues and stadiums"></div>
        </div>
        <div class="text-row-bottom">
            <div class="text-block">
                <h3>Industrial facilities</h3>
                <p>Ensures safe and compliant handling of waste in manufacturing zones through detailed sensor insights, custom alarms, and support for legacy device integration.</p>
            </div>
            <div class="text-block">
                <h3>Transportation hubs (airports, ports, stations)</h3>
                <p>Maintains hygiene and safety in high-traffic zones by enabling dynamic monitoring and maintenance scheduling via ThingsBoard’s event-driven automation.</p>
            </div>
        </div>
    </div>
    <div class="applications-container-small">
        <div class="application-block">
            <div class="image"><img src="/images/usecases/waste-monitoring/municipal-2.svg" alt="Municipal services" title="Municipal services"></div>
            <div class="text-block">
                <h3>Municipal services</h3>
                <p>Enables city authorities to optimize waste collection routes and respond faster to bin overflow alarms using ThingsBoard’s real-time telemetry, automated rules, and geospatial dashboards.</p>
            </div>
        </div>
        <div class="application-block">
            <div class="text-block">
                <h3>Industrial facilities</h3>
                <p>Ensures safe and compliant handling of waste in manufacturing zones through detailed sensor insights, custom alarms, and support for legacy device integration.</p>
            </div>
            <div class="image"><img src="/images/usecases/air-quality/industrial-2.svg" alt="Industrial facilities" title="Industrial facilities"></div>
        </div>
        <div class="application-block">
            <div class="image"><img src="/images/usecases/smart-energy/education-2.svg" alt="University and corporate campuses" title="University and corporate campuses"></div>
            <div class="text-block">
                <h3>University and corporate campuses</h3>
                <p>Promotes sustainability goals with smart bin tracking, usage analytics, and seamless deployment across distributed locations, all from a centralized dashboard.</p>
            </div>
        </div>
        <div class="application-block">
            <div class="text-block">
                <h3>Transportation hubs (airports, ports, stations)</h3>
                <p>Maintains hygiene and safety in high-traffic zones by enabling dynamic monitoring and maintenance scheduling via ThingsBoard’s event-driven automation.</p>
            </div>
            <div class="image"><img src="/images/usecases/waste-monitoring/transportation-2.svg" alt="Transportation hubs (airports, ports, stations)" title="Transportation hubs (airports, ports, stations)"></div>
        </div>
        <div class="application-block">
            <div class="image"><img src="/images/usecases/waste-monitoring/stadium-2.svg" alt="Event venues and stadiums" title="Event venues and stadiums"></div>
            <div class="text-block">
                <h3>Event venues and stadiums</h3>
                <p>Handles fluctuating waste loads during events with scalable sensor connectivity and predictive analytics, ensuring clean environments and resource efficiency.</p>
            </div>
        </div>
    </div>
</section>

<section class="summary">
    <div class="summary-text">
        <h2>Summary of waste management</h2>
        <p>ThingsBoard’s waste management solution addresses a critical urban and industrial challenge with precision, scalability, and real-time intelligence. From seamless sensor integration to customizable dashboards and proactive alarming, it empowers stakeholders to manage waste efficiently and sustainably. With IoT at its core, this solution lays the foundation for smarter, cleaner cities and optimized resource management.</p>
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
                <a id="UseCases_WasteManagement_ViewLiveDemo" target="_blank" href="https://thingsboard.cloud/dashboard/7814f8a0-8fa9-11ef-baa8-4521077809fd?publicId=7aa99e80-8acd-11ef-a59e-a9c993dbec14" class="button gtm_button">View live demo</a>            
                <a id="UseCases_WasteManagement_ContactUs" target="_blank" href="/docs/contact-us/?subject=Custom%20Development" class="button contact-us gtm_button">Contact us</a>
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
                "<img src='/images/usecases/waste-monitoring/waste-1.webp' data-bg='#F9F9FB' alt='Smart waste management dashboard with bin status, battery levels, and interactive map in ThingsBoard' title='Live overview of smart waste bins, battery alerts, and location tracking via ThingsBoard IoT'/>",
                "<img src='/images/usecases/waste-monitoring/waste-2.webp' data-bg='#A4A4A4' alt='Sensor registration dialog for uploading CSV file with bin data in ThingsBoard' title='Register multiple smart bin sensors by importing CSV in ThingsBoard'/>",
                "<img src='/images/usecases/waste-monitoring/waste-3.webp' data-bg='#A4A4A4' alt='Alarm rule configuration for bin fullness and battery level in ThingsBoard' title='Define alarm rules – fullness over 90%, battery below 30% (ThingsBoard IoT)'/>",
                "<img src='/images/usecases/waste-monitoring/waste-4.webp' data-bg='#A4A4A4' alt='Edit bin sensor data including location and address in ThingsBoard' title='Modify sensor details – serial number, address, GPS coordinates'/>",
                "<img src='/images/usecases/waste-monitoring/waste-5.webp' data-bg='#F9F9FB' alt='Smart bin sensor detail view with charts for fullness and battery history in ThingsBoard' title='Sensor data trends – fullness and battery level monitoring over time'/>"
            ];
            return images[index];
        }
    });
</script>
