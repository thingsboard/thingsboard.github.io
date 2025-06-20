---
layout: use-case
title: How to Track Your Fleet in Real Time with the ThingsBoard IoT Platform
description: Track, analyze, and optimize your fleet in real time with the ThingsBoard IoT platform. Unlock smarter operations across logistics, transport, and service industries.
notitle: "true"
customTitle: "true"
includeAdvantages: "true"
contactUsModal: "true"

---

{% include usecase-nav.html usecase="fleet-tracking" %}
<div id="scada-fullpage" onclick="this.style.display='none'; document.body.style.overflow='unset'"><div class="image"></div><div class="close-icon"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.3337 8.5465L23.4537 6.6665L16.0003 14.1198L8.54699 6.6665L6.66699 8.5465L14.1203 15.9998L6.66699 23.4532L8.54699 25.3332L16.0003 17.8798L23.4537 25.3332L25.3337 23.4532L17.8803 15.9998L25.3337 8.5465Z"></path></svg></div></div>
<h1 class="usecase-title">IoT Fleet Tracking System</h1>
<section class="fleet-tracking-about">
    <div class="about-text">
        <div class="short">
            <div class="block">
                <p class="text">Managing a fleet today means more than just tracking locations — it’s about real-time control, smart decisions, and operational speed. The ThingsBoard IoT platform makes this possible by uniting tracking, analytics, and automation in one powerful solution, helping companies eliminate blind spots and stay ahead in a fast-paced industry.</p>
            </div>
            <div class="demo-button">
                <a id="UseCases_FleetTracking_ViewLiveDemo" target="_blank" href="https://demo.thingsboard.io/dashboard/3d0bf910-ee09-11e6-b619-bb0136cc33d0?publicId=963ab470-34c9-11e7-a7ce-bb0136cc33d0" class="button gtm_button">View live demo</a>
            </div>
        </div>
        <div class="long">
            <p>The ThingsBoard IoT platform supports industry-standard protocols and seamless device integration, enabling continuous collection, processing, and visualization of data from every vehicle in your fleet. Critical alarms like speeding, breakdowns, or fuel drops are detected automatically, triggering alarms and actions that help you stay in control — without manual intervention.</p>
            <p>As a result, the ThingsBoard-based IoT fleet tracking system helps businesses boost efficiency, ensure safety, and make smarter, data-driven decisions. From daily operations to long-term planning, you get the visibility and automation needed to scale with confidence — whether you're running public transit, logistics, or service delivery fleets.</p>        
        </div>
    </div>
</section>

<section class="fleet-tracking-carousel carousel-padding">
    {% include default-carousel.liquid collectionMap = 'use-cases' collectionKey = 'fleet-tracking' %}
</section> 

{% include contact-us-banner.liquid %}

<section class="fleet-tracking-solution-structure">
    <h2>Solution structure of IoT fleet tracking</h2>
    <div class="about-text">
        <div class="short">
            <div class="block">
                <p class="text">Each bus or vehicle is equipped with IoT devices or telematics modules connected to GPS units, speed sensors, fuel level indicators, and other sensors. These devices periodically transmit telemetry data (such as speed, coordinates, fuel level, and alarms) via MQTT, HTTP, or CoAP.</p>
            </div>
        </div>
        <div class="long">
            <p>The ThingsBoard IoT platform receives this data and registers each device as a unique entity. Real-time processing is handled by the built-in Rule Engine, which detects critical alarms like speeding, fuel drops, or prolonged stops.</p>
            <p>Once processed, the data is presented on interactive dashboards, offering maps, performance graphs, and detailed alarm logs.</p>
        </div>
    </div>
    <div class="scheme">
        <img id="schemeSVG" loading="lazy" data-src="/images/usecases/smart-use-cases.svg" class="svg-animation" alt="IoT Fleet Tracking solution architecture" title="IoT Fleet Tracking solution architecture: IoT devices connect via gateways to the cloud for processing, visualization, and automation">
    </div>
</section>

<section class="dashboard-structure section-padding">
    <div class="section-header">
        <h2>IoT fleet tracking dashboard structure</h2>
        <p>
            The ThingsBoard dashboard for <a href="/docs/pe/solution-templates/fleet-tracking/">fleet tracking</a> is intuitive and organized into several key components that provide full visibility into fleet operations.
        </p>
    </div>
    <div class="dashboard-structure-block">
        <div class="menu">
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Fleet overview dashboard state</h3>
                    </div>
                    <div class="expansion-content">
                        <p>The main dashboard displays a table listing all buses with their current status, speed, and fuel level. A live map visualizes each vehicle's location using color-coded markers. Statuses include On route, Broken, and Refueling, helping operators quickly assess conditions. Below, an alarm log highlights alarms like speeding or low fuel.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Bus route history state</h3>
                    </div>
                    <div class="expansion-content">
                        <p>Each vehicle has a dedicated route history window showing its movement over the past day. The route is displayed as a line on the map, with playback controls for reviewing trips in sequence. This allows fleet managers to analyze travel patterns and detect route deviations or stops.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Bus A details state</h3>
                    </div>
                    <div class="expansion-content">
                        <p>Bus A is currently on the road, moving actively along its route. The dashboard shows frequent speed changes and steady fuel consumption. Several critical alarms were triggered, mostly related to speeding and low fuel.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Bus B details state</h3>
                    </div>
                    <div class="expansion-content">
                        <p>Bus B is on the move, following a consistent route pattern. Speed trends are regular, and fuel usage decreases steadily. The system logged multiple critical alarms, including speeding and one low fuel alarm.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Bus C details state</h3>
                    </div>
                    <div class="expansion-content">
                        <p>Bus C is currently in the Broken state, indicating that the vehicle is not operational. The dashboard shows no movement or speed activity, while the fuel level remains stable. A warning alarm has been triggered, noting that the bus has stopped and requires attention.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Bus D details state</h3>
                    </div>
                    <div class="expansion-content">
                        <p>Bus D is currently in the Refueling state, with no movement detected. The fuel level graph shows a consistent increase, reaching full capacity. A warning alarm has been registered, indicating the bus is stopped during the refueling process.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="applications applications-additional summary-margin section-padding">
    <div class="section-header">
        <h2>Applications of IoT fleet tracking system</h2>
        <p>The IoT fleet tracking system can be adapted for various industries:</p>
    </div>
    <div class="applications-container-large">
        <div class="text-row-top">
            <div class="text-block">
                <h3>Urban and intercity transportation</h3>
                <p>The system enables real-time tracking of buses, ensuring adherence to schedules and routes. This improves passenger safety and allows rapid response to unexpected issues such as delays or breakdowns.</p>
            </div>
            <div class="text-block">
                <h3>Municipal and construction services</h3>
                <p>The solution tracks actual machine operation time, identifies idle periods, and monitors areas of activity. This leads to more efficient resource management and reduced operational costs.</p>
            </div>
            <div class="text-block">
                <h3>Logistics and delivery</h3>
                <p>IoT monitoring provides transparency of delivery routes, reduces the risk of route deviations, and ensures schedule compliance. This is especially critical for companies handling time-sensitive or temperature-controlled shipments.</p>
            </div>
        </div>
        <div class="images-row">
            <div class="application-image"><img src="/images/usecases/fleet-tracking/urban-1.svg" alt="Urban and intercity transportation" title="Urban and intercity transportation"></div>
            <div class="application-image"><img src="/images/usecases/fleet-tracking/emergency-1.svg" alt="Emergency and fire services" title="Emergency and fire services"></div>
            <div class="application-image"><img src="/images/usecases/fleet-tracking/municipal-1.svg" alt="Municipal and construction services" title="Municipal and construction services"></div>
            <div class="application-image"><img src="/images/usecases/fleet-tracking/rental-1.svg" alt="Rental and leasing companies" title="Rental and leasing companies"></div>
            <div class="application-image"><img src="/images/usecases/fleet-tracking/logistics-1.svg" alt="Logistics and delivery" title="Logistics and delivery"></div>
        </div>
        <div class="text-row-bottom">
            <div class="text-block">
                <h3>Emergency and fire services</h3>
                <p>The system displays the exact location and current status of each vehicle, including speed and fuel level. It enables dispatchers to quickly coordinate on-site actions and reduce emergency response times.</p>
            </div>
            <div class="text-block">
                <h3>Rental and leasing companies</h3>
                <p>The IoT platform tracks how and where vehicles are used, detects misuse, and helps prevent theft. This increases trust in the service and enhances the customer experience.</p>
            </div>
        </div>
    </div>
    <div class="applications-container-small">
        <div class="application-block">
            <div class="image"><img src="/images/usecases/fleet-tracking/urban-2.svg" alt="Urban and intercity transportation" title="Urban and intercity transportation"></div>
            <div class="text-block">
                <h3>Urban and intercity transportation</h3>
                <p>The system enables real-time tracking of buses, ensuring adherence to schedules and routes. This improves passenger safety and allows rapid response to unexpected issues such as delays or breakdowns.</p>
            </div>
        </div>
        <div class="application-block">
            <div class="text-block">
                <h3>Emergency and fire services</h3>
                <p>The system displays the exact location and current status of each vehicle, including speed and fuel level. It enables dispatchers to quickly coordinate on-site actions and reduce emergency response times.</p>
            </div>
            <div class="image"><img src="/images/usecases/fleet-tracking/emergency-2.svg" alt="Emergency and fire services" title="Emergency and fire services"></div>
        </div>
        <div class="application-block">
            <div class="image"><img src="/images/usecases/fleet-tracking/municipal-2.svg" alt="Municipal and construction services" title="Municipal and construction services"></div>
            <div class="text-block">
                <h3>Municipal and construction services</h3>
                <p>The solution tracks actual machine operation time, identifies idle periods, and monitors areas of activity. This leads to more efficient resource management and reduced operational costs.</p>
            </div>
        </div>
        <div class="application-block">
            <div class="text-block">
                <h3>Rental and leasing companies</h3>
                <p>The IoT platform tracks how and where vehicles are used, detects misuse, and helps prevent theft. This increases trust in the service and enhances the customer experience.</p>
            </div>
            <div class="image"><img src="/images/usecases/fleet-tracking/rental-2.svg" alt="Rental and leasing companies" title="Rental and leasing companies"></div>
        </div>
        <div class="application-block">
            <div class="image"><img src="/images/usecases/fleet-tracking/logistics-2.svg" alt="Logistics and delivery" title="Logistics and delivery"></div>
            <div class="text-block">
                <h3>Logistics and delivery</h3>
                <p>IoT monitoring provides transparency of delivery routes, reduces the risk of route deviations, and ensures schedule compliance. This is especially critical for companies handling time-sensitive or temperature-controlled shipments.</p>
            </div>
        </div>
    </div>
</section>


<section class="summary">
    <div class="summary-text">
        <h2>Summary of IoT fleet tracking</h2>
        <p>The IoT fleet tracking system powered by ThingsBoard provides real-time visibility into fleet operations, enabling automated alarms, insightful analytics, and seamless integration with business systems. This scalable solution helps organizations optimize performance, reduce costs, and make smarter, data-driven decisions through a reliable and flexible IoT platform.</p>
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

            if (Math.abs(elemCoor.top) < elemCoor.height / 2 - 250 && elemCoor.top < 0) {
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
                <a id="UseCases_FleetTracking_ViewLiveDemo" target="_blank" href="https://demo.thingsboard.io/dashboard/3d0bf910-ee09-11e6-b619-bb0136cc33d0?publicId=963ab470-34c9-11e7-a7ce-bb0136cc33d0" class="button gtm_button">View live demo</a>
                <a id="UseCases_FleetTracking_ContactUs" target="_blank" href="https://thingsboard.io/docs/contact-us/" class="button contact-us gtm_button">Contact us</a>
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
                "<img src='/images/usecases/fleet-tracking/fleet-tracking-1.webp' alt='ThingsBoard interface showing bus status, speed, fuel level, and location on the map' title='Real-time bus monitoring using ThingsBoard platform'/>",
                "<img src='/images/usecases/fleet-tracking/fleet-tracking-2.webp' alt='ThingsBoard interface showing historical route and movement playback for Bus A on the map' title='Bus A route playback and history visualization in ThingsBoard' data-bg='#A4A4A4'/>",
                "<img src='/images/usecases/fleet-tracking/fleet-tracking-3.webp' alt='ThingsBoard dashboard displaying real-time and historical data for Bus A, including speed, fuel level, route history, and critical events' title='Real-time telemetry dashboard for Bus A in ThingsBoard'/>",
                "<img src='/images/usecases/fleet-tracking/fleet-tracking-4.webp' alt='ThingsBoard dashboard displaying Bus B speed, fuel level, historical route, and tracking events including critical speed limit violations' title='Bus B telemetry and route analytics dashboard in ThingsBoard'/>",
                "<img src='/images/usecases/fleet-tracking/fleet-tracking-5.webp' alt='ThingsBoard dashboard showing Bus C with zero speed, constant fuel level, stop event warning, and static location on the map' title='Bus C status monitoring and stop event tracking in ThingsBoard'/>",
                "<img src='/images/usecases/fleet-tracking/fleet-tracking-6.webp' alt='ThingsBoard dashboard showing Bus D with full fuel level, no movement, stop warning, and current location on the map' title='Bus D refueling status and stop alert monitoring in ThingsBoard'/>"
            ];
            return images[index];
        }
    });
</script>