---
layout: use-case
title: IoT Smart Metering Solutions — Smart Meter Solution
description: IoT smart metering solutions ✔ Smart meter data visualization ⚫ ThingsBoard ➤ Remote monitoring and recording of energy consumption
notitle: "true"
customTitle: "true"
includeAdvantages: "true"
contactUsModal: "true"

---

{% include usecase-nav.html usecase="smart-metering" %}

<div id="scada-fullpage" onclick="this.style.display='none'; document.body.style.overflow='unset'"><div class="image"></div><div class="close-icon"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.3337 8.5465L23.4537 6.6665L16.0003 14.1198L8.54699 6.6665L6.66699 8.5465L14.1203 15.9998L6.66699 23.4532L8.54699 25.3332L16.0003 17.8798L23.4537 25.3332L25.3337 23.4532L17.8803 15.9998L25.3337 8.5465Z"></path></svg></div></div>
<h1 class="usecase-title">IoT smart metering solution</h1>
<section class="smart-metering-about">
    <div class="about-text">
        <div class="short">
            <div class="block">
                <p class="text">In today's world of growing urban infrastructure, energy efficiency and water management have become top priorities. Smart metering solutions powered by the ThingsBoard IoT platform offer a transformative approach to utility monitoring, enabling stakeholders to access accurate, real-time insights into consumption patterns.</p>
            </div>
            <div class="demo-button">
                <a id="UseCases_SmartMetering_ViewLiveDemo" target="_blank" href="https://demo.thingsboard.io/dashboard/3a1026e0-83f6-11e7-b56d-c7f326cba909?publicId=322a2330-7c36-11e7-835d-c7f326cba909" class="button gtm_button">View live demo</a>            </div>
            </div>
        <div class="long">
            <p>With enhanced visibility, municipalities, facilities managers, and utility providers can make faster, data-driven decisions that optimize resource use, reduce waste, and lower operational costs. ThingsBoard plays an important role in this evolution by offering flexible, open-source tools to collect, process, and visualize telemetry data across distributed assets such as meters, sensors, and edge devices. Its modular architecture and rich feature set enable seamless integration of diverse devices, ensuring reliable real-time monitoring and control of utility infrastructure.</p>
            <p>This use case showcases how ThingsBoard empowers organizations to build robust, end-to-end smart metering solutions. By combining protocol versatility, intuitive dashboards, and powerful rule engines, ThingsBoard makes it easy to monitor energy and water usage across residential, commercial, and municipal environments—enhancing sustainability and operational control.</p>
        </div>
    </div>
</section>

<section class="smart-metering-carousel carousel-padding">
    {% include default-carousel.liquid collectionMap = 'use-cases' collectionKey = 'smart-metering' substrate = true %}
</section> 

{% include contact-us-banner.liquid %}

<section class="smart-metering-solution-structure">
    <h2>Solution structure of smart metering</h2>
    <div class="about-text">
        <div class="short">
            <div class="block">
                <p class="text">The ThingsBoard solution is designed to seamlessly integrate with smart meters and environmental sensors using a broad set of IoT protocols including MQTT, CoAP, and HTTP. These protocols enable low-latency, efficient data transmission even over constrained networks.</p>
            </div>
        </div>
        <div class="long">
            <p>Smart meters transmit electricity, water, and temperature data to ThingsBoard via lightweight, efficient protocols. The platform processes this data through its rule engine, enabling alarms, storage, or forwarding.</p>
            <p>Telemetry is securely stored and visualized on customizable dashboards. Built-in widgets help display trends, real-time usage, and alarms — forming a scalable, reliable system from device to dashboard.</p>
        </div>
    </div>
    <div class="scheme">
        <img id="schemeSVG" loading="lazy" data-src="https://img.thingsboard.io/usecases/smart-use-cases.svg" class="svg-animation" alt="Smart energy solution architecture" title="Smart energy solution architecture: IoT devices connect via gateways to the cloud for processing, visualization, and automation">
    </div>
</section>

<section class="dashboard-structure section-padding">
    <div class="section-header">
        <h2>Smart metering dashboard structure</h2>
        <p>
            The ThingsBoard smart metering dashboard is structured hierarchically for clear navigation across different locations and asset levels. Each level is designed to provide intuitive, real-time visualization of data, ensuring stakeholders can act quickly and effectively.
        </p>
    </div>
    <div class="dashboard-structure-block">
        <div class="menu">
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Districts overview state</h3>
                    </div>
                    <div class="expansion-content">
                        <p>The top-level view displays a city map with marked districts. Each district shows energy and water consumption statistics, with alarms highlighted for immediate attention. Data visualization at this level enables city operators to identify high-load zones instantly and prioritize interventions.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>District A dashboard state</h3>
                    </div>
                    <div class="expansion-content">
                        <p>Selecting a district reveals its buildings, associated addresses, and utility metrics. A real-time alarm table notifies users of anomalies like overheating. These dashboards allow users to quickly assess building performance and spot irregular consumption.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Building A dashboard state</h3>
                    </div>
                    <div class="expansion-content">
                        <p>The next layer shows a building layout and associated apartments. Energy and water data is displayed per apartment, alongside a localized alarm feed. By visualizing metrics at the building level, operators can pinpoint inefficiencies or leaks with precision.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Apartment A1-1 dashboard state</h3>
                    </div>
                    <div class="expansion-content">
                        <p>This view provides thermostat data, control dials, and temperature graphs. The user can track room-level temperature changes and set optimal thresholds. Granular visualizations empower users to optimize comfort and reduce unnecessary energy use.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>District B & sub-level dashboard state</h3>
                    </div>
                    <div class="expansion-content">
                        <p>Similar structure with Building B1 and B2. Users can compare utility consumption across districts and buildings for better decision-making. Comparative visual data allows stakeholders to benchmark efficiency and replicate best practices across locations.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Building B1 overview state</h3>
                    </div>
                    <div class="expansion-content">
                        <p>Displays apartment-level data for energy and water use. No alarms present, suggesting normal operation. Alarm - free dashboards confirm system stability and simplify routine checks.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Apartment B1-1 dashboard state</h3>
                    </div>
                    <div class="expansion-content">
                        <p>Temperature and thermostat data per room. Visuals include dial controls and temperature history for precise indoor climate monitoring. These visuals help occupants understand thermal patterns and improve energy-saving behavior over time.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="applications applications-additional summary-margin section-padding">
    <div class="section-header">
        <h2>Applications of IoT smart metering solution</h2>
        <p>A similar IoT-based monitoring and management solution, like IoT smart metering, can be adapted and applied in various industries and domains. Here are some of them:</p>
    </div>
    <div class="applications-container-large">
        <div class="text-row-top">
            <div class="text-block">
                <h3>Municipal utilities</h3>
                <p>Optimize city-wide water and energy management to support sustainable urban development.</p>
            </div>
            <div class="text-block">
                <h3>Commercial facilities</h3>
                <p>Ensure operational efficiency and compliance with green building standards by tracking real-time resource use.</p>
            </div>
            <div class="text-block">
                <h3>Educational institutions</h3>
                <p>Empower facility managers to improve campus energy efficiency and promote eco-friendly behavior.</p>
            </div>
        </div>
        <div class="images-row">
            <div class="application-image"><img src="https://img.thingsboard.io/usecases/smart-metering/utilities-1.svg" alt="House and coins" title="Municipal utilities"></div>
            <div class="application-image"><img src="https://img.thingsboard.io/usecases/smart-metering/complex-1.svg" alt="Buildings" title="Residential complexes"></div>
            <div class="application-image"><img src="https://img.thingsboard.io/usecases/smart-metering/facilities-1.svg" alt="Buildings" title="Commercial facilities"></div>
            <div class="application-image"><img src="https://img.thingsboard.io/usecases/smart-metering/industrial-1.svg" alt="Industry" title="Industrial plants"></div>
            <div class="application-image"><img src="https://img.thingsboard.io/usecases/smart-metering/institutions-1.svg" alt="Education" title="Educational institutions"></div>
        </div>
        <div class="text-row-bottom">
            <div class="text-block">
                <h3>Residential complexes</h3>
                <p>Enable landlords and tenants to monitor and reduce energy bills through transparent usage tracking.</p>
            </div>
            <div class="text-block">
                <h3>Industrial plants</h3>
                <p>Gain insights into high-consumption areas, detect leaks or overuse early, and prevent costly downtime.</p>
            </div>
        </div>
    </div>
    <div class="applications-container-small">
        <div class="application-block">
            <div class="image"><img src="https://img.thingsboard.io/usecases/smart-metering/utilities-2.svg" alt="House and coins" title="Municipal utilities"></div>
            <div class="text-block">
                <h3>Municipal utilities</h3>
                <p>Optimize city-wide water and energy management to support sustainable urban development.</p>
            </div>
        </div>
        <div class="application-block">
            <div class="text-block">
                <h3>Residential complexes</h3>
                <p>Enable landlords and tenants to monitor and reduce energy bills through transparent usage tracking.</p>
            </div>
            <div class="image"><img src="https://img.thingsboard.io/usecases/smart-metering/complex-2.svg" alt="Buildings" title="Residential complexes"></div>
        </div>
        <div class="application-block">
            <div class="image"><img src="https://img.thingsboard.io/usecases/smart-metering/facilities-2.svg" alt="Buildings" title="Commercial facilities"></div>
            <div class="text-block">
                <h3>Commercial facilities</h3>
                <p>Ensure operational efficiency and compliance with green building standards by tracking real-time resource use.</p>
            </div>
        </div>
        <div class="application-block">
            <div class="text-block">
                <h3>Industrial plants</h3>
                <p>Gain insights into high-consumption areas, detect leaks or overuse early, and prevent costly downtime.</p>
            </div>
            <div class="image"><img src="https://img.thingsboard.io/usecases/smart-metering/industrial-2.svg" alt="Industry" title="Industrial plants"></div>
        </div>
        <div class="application-block">
            <div class="image"><img src="https://img.thingsboard.io/usecases/smart-metering/institutions-2.svg" alt="Education" title="Educational institutions"></div>
            <div class="text-block">
                <h3>Educational institutions</h3>
                <p>Empower facility managers to improve campus energy efficiency and promote eco-friendly behavior.</p>
            </div>
        </div>
    </div>
</section>

<section class="summary">
    <div class="summary-text">
        <h2>Summary of smart metering</h2>
        <p>IoT smart metering with ThingsBoard provides a scalable, flexible way to monitor utilities. Through sensor integration and protocol support, data is collected and visualized across districts, buildings, and apartments. ThingsBoard enables tracking of energy use, alarms, and temperature trends—helping users make timely decisions and meet sustainability goals across industries. With ThingsBoard, organizations can build future-ready smart metering systems that scale, adapt, and drive sustainable impact.</p>
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
                <a id="UseCases_SmartMetering_ViewLiveDemo" target="_blank" href="https://demo.thingsboard.io/dashboard/3a1026e0-83f6-11e7-b56d-c7f326cba909?publicId=322a2330-7c36-11e7-835d-c7f326cba909" class="button gtm_button">View live demo</a>
                <a id="UseCases_SmartMetering_ContactUs" target="_blank" href="/docs/contact-us/?subject=Custom%20Development" class="button contact-us gtm_button">Contact us</a>
            </div>`;
    
            return block;
        }

        function getImage(index) {
            const images = [
                "<img src='https://img.thingsboard.io/usecases/smart-metering/smart-metering-1.webp'/>",
                "<img src='https://img.thingsboard.io/usecases/smart-metering/smart-metering-2.webp'/>",
                "<img src='https://img.thingsboard.io/usecases/smart-metering/smart-metering-3.webp'/>",
                "<img src='https://img.thingsboard.io/usecases/smart-metering/smart-metering-4.webp'/>",
                "<img src='https://img.thingsboard.io/usecases/smart-metering/smart-metering-5.webp'/>",
                "<img src='https://img.thingsboard.io/usecases/smart-metering/smart-metering-6.webp'/>",
                "<img src='https://img.thingsboard.io/usecases/smart-metering/smart-metering-7.webp'/>"
            ];
            return images[index];
        }
    });
</script>
