---
layout: use-case
title: Smart Irrigation with ThingsBoard for Farms and Cities
description: Discover how ThingsBoard’s smart irrigation solution transforms water management through IoT. Ideal for agriculture, landscaping, urban systems, and research—with real-time monitoring, automation, and analytics at scale.
notitle: "true"
customTitle: "true"
includeAdvantages: "true"
contactUsModal: "true"

---

{% include usecase-nav.html usecase="smart-irrigation" %}

<div id="scada-fullpage" onclick="this.style.display='none'; document.body.style.overflow='unset'"><div class="image"></div><div class="close-icon"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.3337 8.5465L23.4537 6.6665L16.0003 14.1198L8.54699 6.6665L6.66699 8.5465L14.1203 15.9998L6.66699 23.4532L8.54699 25.3332L16.0003 17.8798L23.4537 25.3332L25.3337 23.4532L17.8803 15.9998L25.3337 8.5465Z"></path></svg></div></div>
<h1 class="usecase-title">Smart irrigation solution</h1>
<section class="smart-irrigation-about">
    <div class="about-text">
        <div class="short">
            <div class="block">
                <p class="text">The global challenges of water scarcity, rising agricultural costs, and the need for sustainable farming have made smart irrigation not just a trend, but a necessity. Traditional watering systems often lack responsiveness, leading to water overuse and crop stress. Modern agriculture requires a platform that can bring automation, precision, and adaptability — exactly what ThingsBoard delivers.</p>
            </div>
            <div class="demo-button">
                <a id="UseCases_SmartIrrigation_ViewLiveDemo" target="_blank" href="https://thingsboard.cloud/dashboard/a4640cc0-8fa9-11ef-baa8-4521077809fd?publicId=7aa99e80-8acd-11ef-a59e-a9c993dbec14" class="button gtm_button">View live demo</a>            
            </div>
        </div>
        <div class="long">
            <p>ThingsBoard IoT Platform is purpose-built to address these needs with its robust architecture, supporting seamless integration of diverse sensors, reliable data collection via MQTT, CoAP, or HTTP, and powerful real-time analytics. By enabling farmers to monitor soil conditions, receive threshold-based alarms, and automate irrigation actions through intuitive rule chains, ThingsBoard ensures optimal water distribution and timely response to changing field conditions.</p>
            <p>From small farms to enterprise-scale agricultural operations, ThingsBoard scales effortlessly thanks to its edge computing capabilities, multi-tenant model, and rich dashboard customization. It empowers agribusinesses to implement smart irrigation that not only conserves water and boosts yield, but also reduces manual labor, improves traceability, and aligns with long-term sustainability goals.</p>
        </div>
    </div>
</section>

<section class="smart-irrigation-carousel carousel-padding">
    {% include default-carousel.liquid collectionMap = 'use-cases' collectionKey = 'smart-irrigation' %}
</section> 

{% include contact-us-banner.liquid %}

<section class="smart-irrigation-solution-structure">
    <h2>Solution structure of smart irrigation</h2>
    <div class="about-text">
        <div class="short">
            <div class="block">
                <p class="text">In the <a href="/docs/pe/solution-templates/smart-irrigation/">smart irrigation</a> setup, soil moisture sensors and water meters are installed in each field zone. These devices continuously collect real-time environmental data such as moisture level, temperature, and water flow. The data is transmitted via lightweight and reliable communication protocols such as MQTT, CoAP, or HTTP directly to the ThingsBoard platform.</p>
            </div>
        </div>
        <div class="long">
            <p>Once received, data is processed by ThingsBoard’s rule engine, stored, and visualized on dashboards. If thresholds are exceeded—like low soil moisture—the platform can automatically trigger irrigation or notify personnel, ensuring timely response and water efficiency.</p>
            <p>With flexible device provisioning, edge processing, and a multi-tenant architecture, ThingsBoard scales seamlessly from small farms to enterprise operations, supporting both manual oversight and fully automated control.</p>
        </div>
    </div>
    <div class="scheme">
        <img id="schemeSVG" loading="lazy" data-src="https://img.thingsboard.io/usecases/smart-use-cases.svg" class="svg-animation" alt="Smart energy solution architecture" title="Smart energy solution architecture: IoT devices connect via gateways to the cloud for processing, visualization, and automation">
    </div>
</section>

<section class="dashboard-structure section-padding">
    <div class="section-header">
        <h2>Smart irrigation dashboard structure</h2>
        <p>
            The smart irrigation dashboard on ThingsBoard provides a clear, real-time view of irrigation processes. It includes map-based tracking, sensor panels, scheduling tools, and alarm systems—enabling fast decisions, automation, and efficient water use across varied field conditions.
        </p>
    </div>
    <div class="dashboard-structure-block">
        <div class="menu">
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Field overview dashboard state</h3>
                    </div>
                    <div class="expansion-content">
                        <p>This high-level map displays all monitored fields and their average moisture levels in real time. It includes interactive polygons that represent specific fields, labeled with crop types and live sensor values. This allows operators to instantly assess field health. Visualizing field data geographically accelerates decision-making and localizes issues within seconds.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Add field</h3>
                    </div>
                    <div class="expansion-content">
                        <p>This interface allows users to add new fields, define crop types, and set individual soil moisture thresholds. These values are used to trigger automated irrigation actions or alarms. Custom moisture thresholds per field help tailor irrigation plans to specific crop needs, increasing efficiency.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Edit field</h3>
                    </div>
                    <div class="expansion-content">
                        <p>Users can edit field parameters, update crop labels, and reconfigure map boundaries using a visual map editor. This ensures that geospatial information is always accurate and actionable. Accurate geolocation enhances field-specific analytics and irrigation zoning precision.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>SI Field 1 dashboard with sensor data and irrigation logs</h3>
                    </div>
                    <div class="expansion-content">
                        <p>Displays real-time soil moisture readings from all sensors, average moisture levels, water consumption, alarms, and detailed irrigation task logs. Combining sensor data and water logs offers a complete view for effective irrigation planning and validation.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Add new sensor</h3>
                    </div>
                    <div class="expansion-content">
                        <p>Quickly integrate a new sensor by assigning a name and label, seamlessly extending system coverage as your infrastructure grows. Easy sensor addition supports scalability and fast deployment across multiple zones.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Create irrigation schedule</h3>
                    </div>
                    <div class="expansion-content">
                        <p>Users can define irrigation conditions such as start time, repetition, water volume, and stop rules (e.g., water volume or duration). The system then triggers irrigation commands automatically. Automating irrigation based on real thresholds reduces human error and conserves water.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Alarm monitoring panel</h3>
                    </div>
                    <div class="expansion-content">
                        <p>This view aggregates all critical and warning-level alarms related to soil moisture and device health, helping users quickly react to anomalies. Centralized alarm management ensures prompt responses to avoid crop stress or system failures.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>SI Field 2 dashboard statex</h3>
                    </div>
                    <div class="expansion-content">
                        <p>Similar to the first field dashboard, this view provides detailed monitoring for another crop zone (corn), showcasing ThingsBoard’s multi-field, multi-crop support. Supporting multiple field dashboards promotes centralized yet granular monitoring for large-scale operations.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="applications applications-additional summary-margin section-padding">
    <div class="section-header">
        <h2>Applications of smart irrigation solution</h2>
        <p>This solution can be effectively used across multiple industries, addressing specific operational needs through real-time data, automation, and scalability powered by the ThingsBoard IoT platform:</p>
    </div>
    <div class="applications-container-large">
        <div class="text-row-top">
            <div class="text-block">
                <h3>Precision agriculture</h3>
                <p>Covers the need for data-driven water management by providing real-time moisture analytics, alarming, and automated irrigation, improving crop yield while reducing resource waste.</p>
            </div>
            <div class="text-block">
                <h3>Municipal parks & landscaping</h3>
                <p>Solves the challenge of wide-area water efficiency by offering centralized dashboard control, alarm notifications, and device management for public green spaces.</p>
            </div>
            <div class="text-block">
                <h3>Agri-Tech research & experimental farms</h3>
                <p>Meets the need for accurate environmental data collection and testing flexibility by enabling detailed telemetry tracking, custom rule chains, and rapid integration of new devices.</p>
            </div>
        </div>
        <div class="images-row">
            <div class="application-image"><img src="https://img.thingsboard.io/usecases/smart-irrigation/agriculture-1.svg" alt="Precision agriculture" title="Precision agriculture"></div>
            <div class="application-image"><img src="https://img.thingsboard.io/usecases/smart-irrigation/greenhouse-1.svg" alt="Smart greenhouses" title="Smart greenhouses"></div>
            <div class="application-image"><img src="https://img.thingsboard.io/usecases/smart-irrigation/parks-1.svg" alt="Municipal parks & landscaping" title="Municipal parks & landscaping"></div>
            <div class="application-image"><img src="https://img.thingsboard.io/usecases/smart-irrigation/fields-1.svg" alt="Golf courses & sports fields" title="Golf courses & sports fields"></div>
            <div class="application-image"><img src="https://img.thingsboard.io/usecases/smart-irrigation/research-1.svg" alt="Agri-Tech research & experimental farms" title="Agri-Tech research & experimental farms"></div>
        </div>
        <div class="text-row-bottom">
            <div class="text-block">
                <h3>Smart greenhouses</h3>
                <p>Fulfills the demand for microclimate-based watering by supporting multi-zone sensor management and conditional scheduling, ensuring healthy plant growth with minimal manual intervention.</p>
            </div>
            <div class="text-block">
                <h3>Golf courses & sports fields</h3>
                <p>Addresses the requirement for uniform turf quality with zone-specific moisture monitoring, historical analytics, and rule-based irrigation triggers to maintain optimal soil conditions.</p>
            </div>
        </div>
    </div>
    <div class="applications-container-small">
        <div class="application-block">
            <div class="image"><img src="https://img.thingsboard.io/usecases/smart-irrigation/agriculture-2.svg" alt="Precision agriculture" title="Precision agriculture"></div>
            <div class="text-block">
                <h3>Precision agriculture</h3>
                <p>Covers the need for data-driven water management by providing real-time moisture analytics, alarming, and automated irrigation, improving crop yield while reducing resource waste.</p>
            </div>
        </div>
        <div class="application-block">
            <div class="text-block">
                <h3>Smart greenhouses</h3>
                <p>Fulfills the demand for microclimate-based watering by supporting multi-zone sensor management and conditional scheduling, ensuring healthy plant growth with minimal manual intervention.</p>
            </div>
            <div class="image"><img src="https://img.thingsboard.io/usecases/smart-irrigation/greenhouse-2.svg" alt="Smart greenhouses" title="Smart greenhouses"></div>
        </div>
        <div class="application-block">
            <div class="image"><img src="https://img.thingsboard.io/usecases/smart-irrigation/parks-2.svg" alt="Municipal parks & landscaping" title="Municipal parks & landscaping"></div>
            <div class="text-block">
                <h3>Municipal parks & landscaping</h3>
                <p>Solves the challenge of wide-area water efficiency by offering centralized dashboard control, alarm notifications, and device management for public green spaces.</p>
            </div>
        </div>
        <div class="application-block">
            <div class="text-block">
                <h3>Golf courses & sports fields</h3>
                <p>Addresses the requirement for uniform turf quality with zone-specific moisture monitoring, historical analytics, and rule-based irrigation triggers to maintain optimal soil conditions.</p>
            </div>
            <div class="image"><img src="https://img.thingsboard.io/usecases/smart-irrigation/fields-2.svg" alt="Golf courses & sports fields" title="Golf courses & sports fields"></div>
        </div>
        <div class="application-block">
            <div class="image"><img src="https://img.thingsboard.io/usecases/smart-irrigation/research-2.svg" alt="Agri-Tech research & experimental farms" title="Agri-Tech research & experimental farms"></div>
            <div class="text-block">
                <h3>Agri-Tech research & experimental farms</h3>
                <p>Meets the need for accurate environmental data collection and testing flexibility by enabling detailed telemetry tracking, custom rule chains, and rapid integration of new devices.</p>
            </div>
        </div>
    </div>
</section>

<section class="summary">
    <div class="summary-text">
        <h2>Summary of smart irrigation</h2>
        <p>The smart irrigation solution built on ThingsBoard empowers users to manage irrigation processes intelligently, reduce water waste, and maintain crop health with precision. Leveraging real-time data collection, powerful automation, and rich visualizations, it enables scalable deployments across diverse sectors—from agriculture to urban landscapes. With its flexible architecture and low-code configurability, the solution can be rapidly deployed, customized, and expanded as needs grow.</p>
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

            if (Math.abs(elemCoor.top) < elemCoor.height / 2 - 150 && elemCoor.top < 0) {
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
                <a id="UseCases_SmartIrrigation_ViewLiveDemo" target="_blank" href="https://thingsboard.cloud/dashboard/a4640cc0-8fa9-11ef-baa8-4521077809fd?publicId=7aa99e80-8acd-11ef-a59e-a9c993dbec14" class="button gtm_button">View live demo</a>            
                <a id="UseCases_SmartIrrigation_ContactUs" target="_blank" href="/docs/contact-us/?subject=Custom%20Development" class="button contact-us gtm_button">Contact us</a>
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
                "<img src='https://img.thingsboard.io/usecases/smart-irrigation/smart-irrigation-1.webp' data-bg='#F9FAFF' alt='Satellite view of crop fields with real-time moisture levels and chart in ThingsBoard' title='Soil moisture monitoring for wheat and corn fields using ThingsBoard'/>",
                "<img src='https://img.thingsboard.io/usecases/smart-irrigation/smart-irrigation-2.webp' data-bg='#A9AAAC' alt='Field configuration form for setting crop type and moisture range in ThingsBoard' title='Add a new field and define crop type and soil moisture thresholds'/>",
                "<img src='https://img.thingsboard.io/usecases/smart-irrigation/smart-irrigation-3.webp' data-bg='#A9AAAC' alt='Edit field details with boundary selection and moisture settings in ThingsBoard' title='Update field boundaries and soil moisture limits for precision farming'/>",
                "<img src='https://img.thingsboard.io/usecases/smart-irrigation/smart-irrigation-4.webp' data-bg='#F9FAFF' alt='Dashboard showing irrigation status, alarms, field map, and moisture statistics in ThingsBoard' title='Irrigation and soil monitoring dashboard for smart agriculture'/>",
                "<img src='https://img.thingsboard.io/usecases/smart-irrigation/smart-irrigation-5.webp' data-bg='#A9AAAC' alt='Dialog to add a new soil moisture sensor on the map in ThingsBoard' title='Register a new soil moisture sensor and assign a label'/>",
                "<img src='https://img.thingsboard.io/usecases/smart-irrigation/smart-irrigation-6.webp' data-bg='#A9AAAC' alt='Form to create an automated irrigation schedule based on consumption or time' title='Define irrigation rules by water usage or duration for field automation'/>",
                "<img src='https://img.thingsboard.io/usecases/smart-irrigation/smart-irrigation-7.webp' data-bg='#F9FAFF' alt='Active and cleared alarms for soil moisture and battery levels in ThingsBoard' title='View and manage critical alerts from field sensors in the irrigation system'/>",
                "<img src='https://img.thingsboard.io/usecases/smart-irrigation/smart-irrigation-8.webp' data-bg='#F9FAFF' alt='Dashboard view for a second field showing multiple active alarms and irrigation tasks' title='Monitor critical issues and manage irrigation for corn field using ThingsBoard'/>"
            ];
            return images[index];
        }
    });
</script>
