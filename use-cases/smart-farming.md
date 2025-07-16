---
layout: use-case
title: "Smart Farming with ThingsBoard: Scalable IoT for Agriculture"
description: Smart farming IoT solution powered by ThingsBoard. Real-time monitoring, automation, and analytics for crops, silos, and climate control. Ideal for agriculture, logistics, and agritech businesses.
notitle: "true"
customTitle: "true"
includeAdvantages: "true"
contactUsModal: "true"

---

{% include usecase-nav.html usecase="smart-farming" %}
<div id="scada-fullpage" onclick="this.style.display='none'; document.body.style.overflow='unset'"><div class="image"></div><div class="close-icon"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.3337 8.5465L23.4537 6.6665L16.0003 14.1198L8.54699 6.6665L6.66699 8.5465L14.1203 15.9998L6.66699 23.4532L8.54699 25.3332L16.0003 17.8798L23.4537 25.3332L25.3337 23.4532L17.8803 15.9998L25.3337 8.5465Z"></path></svg></div></div>
<h1 class="usecase-title">Smart farming & IoT agriculture solution</h1>
<section class="smart-farming-about">
    <div class="about-text">
        <div class="short">
            <div class="block">
                <p class="text">Modern agriculture is undergoing a digital transformation driven by the need for sustainability, efficiency, and resilience. Farmers and agricultural enterprises face increasing pressure to optimize yield, reduce resource consumption, and mitigate risks related to climate and storage. ThingsBoard easily handles this task by providing real-time data collection, automation, and intuitive visualization tailored for smart farming needs.</p>
            </div>
            <div class="demo-button">
                <a id="UseCases_SmartFarming_ViewLiveDemo" target="_blank" href="https://demo.thingsboard.io/dashboard/1f9828d0-058e-11e7-87f7-bb0136cc33d0?publicId=963ab470-34c9-11e7-a7ce-bb0136cc33d0" class="button gtm_button">View live demo</a>     
            </div>
        </div>
        <div class="long">
            <p>ThingsBoard IoT platform empowers agricultural stakeholders with a robust, scalable solution to collect, process, and visualize environmental and operational data. Its support for multiple communication protocols and seamless device integration makes it ideal for diverse farming environments, whether remote fields, greenhouses, or storage facilities.</p>
            <p>By leveraging ThingsBoard, agribusinesses gain full control over assets and infrastructure — from temperature and humidity sensors to automated aeration systems. With real-time dashboards, rule-based alerts, and remote control features, the platform helps reduce waste, improve crop quality, and lower operational costs.</p>
        </div>
    </div>
</section>

<section class="smart-farming-overview">
    <div class="img-comp-container">
        <div class="img-comp-img">
            <img class="traditional-background" src="/images/usecases/smart-farming/smart-farming-2.webp" alt="Silos monitoring dashboard in dark mode with temperature graphs, crop levels, and alarm logs in ThingsBoard" title="Silo monitoring (dark mode) – live telemetry, graphs, and alerts via ThingsBoard IoT platform">
        </div>
        <div class="img-comp-img img-comp-overlay">
            <img class="traditional-background" src="/images/usecases/smart-farming/smart-farming-1.webp" alt="Silos monitoring dashboard in light mode showing crop level, temperature, moisture, and alarms using ThingsBoard" title="Silo monitoring (light mode) – real-time crop level, temperature, and alarm tracking in ThingsBoard">
        </div>
    </div>
</section>

{% include contact-us-banner.liquid %}

<section class="smart-farming-solution-structure">
    <h2>Solution structure of smart farming</h2>
    <div class="about-text">
        <div class="short">
            <div class="block">
                <p class="text">The smart farming solution powered by ThingsBoard connects IoT sensors across silos, greenhouses, and fields to gather key data like temperature, humidity, soil moisture, and crop levels. Using protocols such as MQTT, CoAP, HTTP, and Modbus, the system ensures smooth, real-time data transmission and integration with existing equipment.</p>
            </div>
        </div>
        <div class="long">
            <p>ThingsBoard processes incoming telemetry with automated rule chains that trigger alerts or control actions. Custom dashboards visualize the data through maps and charts, enabling users to monitor operations, identify issues, and respond quickly. The solution is fully scalable—from small farms to large agricultural enterprises.</p>
        </div>
    </div>
    <div class="scheme">
        <img id="schemeSVG" loading="lazy" data-src="/images/usecases/smart-use-cases.svg" class="svg-animation" alt="Smart energy solution architecture" title="Smart energy solution architecture: IoT devices connect via gateways to the cloud for processing, visualization, and automation">
    </div>
</section>

<section class="dashboard-structure section-padding">
    <div class="section-header">
        <h2>Smart farming dashboard structure</h2>
        <p>
            Effective data visualization is critical for smart farming. ThingsBoard dashboards are designed to be intuitive, modular, and informative, helping users quickly identify anomalies and make informed decisions.
        </p>
    </div>
    <div class="dashboard-structure-block">
        <div class="menu">
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Overview dashboard state</h3>
                    </div>
                    <div class="expansion-content">
                        <p>Displays a geographic map with locations, real-time stats (aeration, crop level, temperature, humidity), charts for crop level and temperature, and an alarm panel. Consolidates multiple data points for instant status tracking and efficient response.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Night mode dashboard state</h3>
                    </div>
                    <div class="expansion-content">
                        <p>A dark-themed version of the main dashboard — ideal for nighttime operation or low-light environments. Enhances operator focus and visibility during late-hour monitoring.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Silo A state</h3>
                    </div>
                    <div class="expansion-content">
                        <p>Features local map, moisture graph, crop level chart, temperature trends, and aeration control toggle. Focused monitoring supports precise diagnostics and device-level control.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Silo B state</h3>
                    </div>
                    <div class="expansion-content">
                        <p>Similar layout, highlighting real-time moisture, crop level, indoor/outdoor temperature comparison. Enables insights into environmental conditions and ventilation efficiency.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Silo C state</h3>
                    </div>
                    <div class="expansion-content">
                        <p>Displays readings from a silo with aeration turned off, helping to assess impact on crop conditions. Supports preventive maintenance and smarter control strategies.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="applications applications-additional summary-margin section-padding">
    <div class="section-header">
        <h2>Applications of smart farming & IoT agriculture solution</h2>
        <p>The Smart Farming solution built on the ThingsBoard platform is highly adaptable and addresses specific needs across various sectors of agriculture and agritech. Its powerful features — real-time telemetry, rule-based automation, multi-protocol support, customizable dashboards, and scalable architecture — make it ideal for a wide range of applications:</p>
    </div>
    <div class="applications-container-large">
        <div class="text-row-top">
            <div class="text-block">
                <h3>Grain & oilseed storage</h3>
                <p>Enables remote monitoring of fuel tanks with automated alarms and minimal maintenance requirements.</p>
            </div>
            <div class="text-block">
                <h3>Greenhouse farming</h3>
                <p>Tracks water or fertilizer tank levels on farms, with location-based analysis and consumption forecasting.</p>
            </div>
            <div class="text-block">
                <h3>Livestock farming</h3>
                <p>Manages city tanks for drinking water or chemicals with centralized monitoring and regulatory reporting.</p>
            </div>
        </div>
        <div class="images-row">
            <div class="application-image"><img src="/images/usecases/smart-farming/grain-1.svg" alt="Grain & oilseed storage" title="Grain & oilseed storage"></div>
            <div class="application-image"><img src="/images/usecases/smart-farming/orchards-1.svg" alt="Viticulture & orchards" title="Viticulture & orchards"></div>
            <div class="application-image"><img src="/images/usecases/environment-monitoring/agriculture-1.svg" alt="Greenhouse farming" title="Greenhouse farming"></div>
            <div class="application-image"><img src="/images/usecases/smart-farming/logistics-1.svg" alt="Agri-logistics & cold chain" title="Agri-logistics & cold chain"></div>
            <div class="application-image"><img src="/images/usecases/smart-farming/sheep-1.svg" alt="Livestock farming" title="Livestock farming"></div>
        </div>
        <div class="text-row-bottom">
            <div class="text-block">
                <h3>Viticulture & orchards</h3>
                <p>Tracks fuel levels in fleet tankers and depots, integrated with GPS and routing systems.</p>
            </div>
            <div class="text-block">
                <h3>Agri-logistics & cold chain</h3>
                <p>Monitors chemical storage tanks for compliance and safety in industrial environments.</p>
            </div>
        </div>
    </div>
    <div class="applications-container-small">
        <div class="application-block">
            <div class="image"><img src="/images/usecases/smart-farming/grain-2.svg" alt="Grain & oilseed storage" title="Grain & oilseed storage"></div>
            <div class="text-block">
                <h3>Grain & oilseed storage</h3>
                <p>Enables remote monitoring of fuel tanks with automated alarms and minimal maintenance requirements.</p>
            </div>
        </div>
        <div class="application-block">
            <div class="text-block">
                <h3>Viticulture & orchards</h3>
                <p>Tracks fuel levels in fleet tankers and depots, integrated with GPS and routing systems.</p>
            </div>
            <div class="image"><img src="/images/usecases/smart-farming/orchards-2.svg" alt="Viticulture & orchards" title="Viticulture & orchards"></div>
        </div>
        <div class="application-block">
            <div class="image"><img src="/images/usecases/environment-monitoring/agriculture-2.svg" alt="Greenhouse farming" title="Greenhouse farming"></div>
            <div class="text-block">
                <h3>Greenhouse farming</h3>
                <p>Tracks water or fertilizer tank levels on farms, with location-based analysis and consumption forecasting.</p>
            </div>
        </div>
        <div class="application-block">
            <div class="text-block">
                <h3>Agri-logistics & cold chain</h3>
                <p>Monitors chemical storage tanks for compliance and safety in industrial environments.</p>
            </div>
            <div class="image"><img src="/images/usecases/smart-farming/logistics-2.svg" alt="Agri-logistics & cold chain" title="Agri-logistics & cold chain"></div>
        </div>
        <div class="application-block">
            <div class="image"><img src="/images/usecases/smart-farming/sheep-2.svg" alt="Livestock farming" title="Livestock farming"></div>
            <div class="text-block">
                <h3>Livestock farming</h3>
                <p>Manages city tanks for drinking water or chemicals with centralized monitoring and regulatory reporting.</p>
            </div>
        </div>
    </div>
</section>

<section class="summary">
    <div class="summary-text">
        <h2>Summary of smart farming</h2>
        <p>Smart farming with ThingsBoard offers a complete end-to-end IoT solution for agricultural operations. From field to storage, it unifies device connectivity, real-time analytics, control systems, and user-friendly dashboards. By adopting this solution, agri-businesses can boost productivity, ensure compliance, minimize losses, and gain full transparency over their entire value chain.</p>
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
                <a id="UseCases_SmartFarming_ViewLiveDemo" target="_blank" href="https://demo.thingsboard.io/dashboard/1f9828d0-058e-11e7-87f7-bb0136cc33d0?publicId=963ab470-34c9-11e7-a7ce-bb0136cc33d0" class="button gtm_button">View live demo</a>     
                <a id="UseCases_SmartFarming_ContactUs" target="_blank" href="/docs/contact-us/?subject=Custom%20Development" class="button contact-us gtm_button">Contact us</a>
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
                "<img src='/images/usecases/smart-farming/smart-farming-1.webp' alt='Silos monitoring dashboard in light mode showing crop level, temperature, moisture, and alarms using ThingsBoard' title='Silo monitoring (light mode) – real-time crop level, temperature, and alarm tracking in ThingsBoard'/>",
                "<img src='/images/usecases/smart-farming/smart-farming-2.webp' data-bg='#092035' alt='Silos monitoring dashboard in dark mode with temperature graphs, crop levels, and alarm logs in ThingsBoard' title='Silo monitoring (dark mode) – live telemetry, graphs, and alerts via ThingsBoard IoT platform'/>",
                "<img src='/images/usecases/smart-farming/smart-farming-3.webp' alt='Silo A dashboard with real-time charts for moisture, temperature, crop level, and alarm log in ThingsBoard' title='Monitor Silo A – live temperature, crop fill level, moisture, and alerts'/>",
                "<img src='/images/usecases/smart-farming/smart-farming-4.webp' alt='Silo B dashboard showing moisture, crop level, temperature graph, and active critical alarms in ThingsBoard' title='Silo B status – high temperature warnings, real-time monitoring of environmental and crop data'/>",
                "<img src='/images/usecases/smart-farming/smart-farming-5.webp' alt='Silo C dashboard with temperature and moisture tracking, crop level chart, and no current alarms in ThingsBoard' title='Silo C live monitoring – stable environmental conditions, no alarms'/>"
            ];
            return images[index];
        }
    });
</script>