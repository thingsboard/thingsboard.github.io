---
layout: use-case
title: Turn your market into a Smart Retail powerhouse with ThingsBoard IoT
description: Discover how ThingsBoard's Smart Retail Solutions enable real-time monitoring, automated alarms, and intelligent dashboards for supermarkets and retail chains. A scalable IoT template for building connected, efficient retail environments.
notitle: "true"
customTitle: "true"
includeAdvantages: "true"
contactUsModal: "true"

---

{% include usecase-nav.html usecase="smart-retail" %}
<div id="scada-fullpage" onclick="this.style.display='none'; document.body.style.overflow='unset'"><div class="image"></div><div class="close-icon"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.3337 8.5465L23.4537 6.6665L16.0003 14.1198L8.54699 6.6665L6.66699 8.5465L14.1203 15.9998L6.66699 23.4532L8.54699 25.3332L16.0003 17.8798L23.4537 25.3332L25.3337 23.4532L17.8803 15.9998L25.3337 8.5465Z"></path></svg></div></div>
<h1 class="usecase-title">Smart retail</h1>
<section class="smart-retail-about">
    <div class="about-text">
        <div class="short">
            <div class="block">
                <p class="text">Smart retail solution by ThingsBoard is a powerful platform that helps retailers gain full visibility into store infrastructure, automate data collection, respond to incidents in real time, and make informed decisions. Leveraging the flexibility of ThingsBoard, retailers can integrate a wide range of sensors and devices, visualize key metrics through custom dashboards, and implement intelligent analytics.</p>
            </div>
            <div class="demo-button">
                <a id="UseCases_SmartRetail_ViewLiveDemo" target="_blank" href="https://thingsboard.cloud/dashboard/551d4ca0-8b54-11ec-98f9-ff45c37940c6?publicId=4978baf0-8a92-11ec-98f9-ff45c37940c6" class="button gtm_button">View live demo</a>
            </div>
        </div>
        <div class="long">
            <p>The <a href="/docs/pe/solution-templates/smart-retail/">smart retail solution</a> template represents a flexible, ready-to-use structure for building intelligent retail infrastructures using the ThingsBoard IoT platform. As a solution provider, you can provision multiple customers and assign each one a dedicated pool of IoT devices to monitor key assets across their supermarkets. Customers can easily upload custom floor plans, install devices on-site, and place them logically within the dashboard layout to reflect the physical environment.</p>
            <p>With built-in alarm logic and fully configurable thresholds per device, users can detect anomalies such as temperature fluctuations or unauthorized access without needing a complex setup. The template also includes interactive dashboards that allow both providers and customers to monitor the current and historical state of their supermarkets—empowering data-driven decisions, operational efficiency, and a higher standard of safety and service.</p>        
        </div>
    </div>
</section>

<section class="smart-retail-carousel carousel-padding">
    {% include default-carousel.liquid collectionMap = 'use-cases' collectionKey = 'smart-retail' %}
</section> 

{% include contact-us-banner.liquid %}

<section class="smart-retail-solution-structure">
    <h2>Solution structure of smart retail</h2>
    <div class="about-text">
        <div class="short">
            <div class="block">
                <p class="text">A wide range of IoT devices installed across supermarkets—such as motion sensors, temperature probes, smoke detectors, door sensors, and more—are connected to the ThingsBoard platform using MQTT, CoAP, or HTTP protocols.</p>
            </div>
        </div>
        <div class="long">
            <p>All telemetry and event data is collected within ThingsBoard, where it is structured, stored, and processed via the built-in Rule Engine. This enables real-time alarm generation, automation workflows, and configurable notifications to ensure prompt response to anomalies. </p>
            <p>Custom dashboards provide visual insights into equipment status, temperature trends, sensor activity, and alarm history. This empowers operators with clear and actionable monitoring across the entire retail network.</p>
        </div>
    </div>
    <div class="scheme">
        <img id="schemeSVG" loading="lazy" data-src="/images/usecases/smart-use-cases.svg" class="svg-animation" alt="Smart retail solution architecture" title="Smart retail solution architecture: IoT devices connect via gateways to the cloud for processing, visualization, and automation">
    </div>
</section>

<section class="dashboard-structure section-padding">
    <div class="section-header">
        <h2>Smart retail dashboard structure</h2>
        <p>
            <a href="/docs/pe/solution-templates/smart-retail/">Smart retail solution</a> dashboards in ThingsBoard are designed to give retail operators full situational awareness, from high-level monitoring of multiple store locations down to detailed insights into individual devices. Each dashboard state provides a specific layer of visibility to support operational efficiency and safety.
        </p>
    </div>
    <div class="dashboard-structure-block">
        <div class="menu">
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Supermarket map overview state</h3>
                    </div>
                    <div class="expansion-content">
                        <p>This screen provides a global view of all supermarket locations on the map, where each store is marked with a color-coded status icon indicating Normal, Major, or Critical state, and the right-side panel lists all supermarkets with their addresses and current operational status.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Supermarket S1 layout and devices state</h3>
                    </div>
                    <div class="expansion-content">
                        <p>This dashboard displays the detailed layout of Supermarket S1 with real-time positions and statuses of sensors, while highlighting all critical and major alarms directly on the floor plan, and also provides access to the device list and full alarm history.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Supermarket S1: motion sensor detail state</h3>
                    </div>
                    <div class="expansion-content">
                        <p>This state focuses on a specific motion sensor in a restricted area, showing its recent movement detection timeline, current critical state, battery level history, and alarm log for security monitoring and maintenance control.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Supermarket S2 layout and devices state</h3>
                    </div>
                    <div class="expansion-content">
                        <p>This view shows the layout of Supermarket S2 where several sensors such as door, chiller, freezer, and smart shelves are displayed, and the dashboard alarms users about critical issues including broken doors and temperature breaches.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Supermarket S2: freezer temperature monitoring state</h3>
                    </div>
                    <div class="expansion-content">
                        <p>This dashboard monitors the freezer labeled "Meat" in Supermarket S2, displaying the 7-day temperature history, current temperature status in the normal range, and confirming that no alarms were raised during the observed period.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Supermarket S3 layout and devices state</h3>
                    </div>
                    <div class="expansion-content">
                        <p>This state presents the plan of Supermarket S3, showing active devices including a critically malfunctioning door sensor and chiller, along with their types and statuses, and offers quick insights into recent critical alarms.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Supermarket S3: chiller analytics state</h3>
                    </div>
                    <div class="expansion-content">
                        <p>This dashboard visualizes temperature telemetry from the "Milk" chiller in Supermarket S3, where temperature exceeded the critical limit of 15°C, resulting in an active unacknowledged high temperature alarm with full context available in the alarm log.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="applications applications-additional summary-margin section-padding">
    <div class="section-header">
        <h2>Applications of smart retail solution</h2>
        <p>While smart retail solution were originally designed for retail store environments, the versatility and scalability of ThingsBoard's IoT platform make it a perfect fit for a wide range of industries where real-time monitoring, environmental control, and asset visibility are critical.</p>
    </div>
    <div class="applications-container-large">
        <div class="text-row-top">
            <div class="text-block">
                <h3>Pharmacy Chains</h3>
                <p>Smart retail solution enable pharmacy networks to ensure safe medication storage by monitoring refrigeration units, maintaining regulatory compliance, and detecting unauthorized access.</p>
            </div>
            <div class="text-block">
                <h3>Logistics and Cold Chain Warehouses</h3>
                <p>The platform helps logistics operators maintain precise environmental conditions, monitor access points, and comply with food safety standards across their storage facilities.</p>
            </div>
            <div class="text-block">
                <h3>Food Courts and Restaurant Chains</h3>
                <p>Restaurants and food courts can leverage ThingsBoard to track equipment health, detect fire risks, and monitor access to restricted areas in real time.</p>
            </div>
        </div>
        <div class="images-row">
            <div class="application-image"><img src="/images/usecases/smart-retail/pharmacy-1.svg" alt="Pharmacy Chains" title="Pharmacy Chains"></div>
            <div class="application-image"><img src="/images/usecases/smart-retail/fuel-1.svg" alt="Convenience Stores at Fuel Stations" title="Convenience Stores at Fuel Stations"></div>
            <div class="application-image"><img src="/images/usecases/smart-retail/logistics-1.svg" alt="Logistics and Cold Chain Warehouses" title="Logistics and Cold Chain Warehouses"></div>
            <div class="application-image"><img src="/images/usecases/smart-retail/cafeterias-1.svg" alt="Hospital Cafeterias and Institutional Kitchens" title="Hospital Cafeterias and Institutional Kitchens"></div>
            <div class="application-image"><img src="/images/usecases/smart-retail/court-1.svg" alt="Food Courts and Restaurant Chains" title="Food Courts and Restaurant Chains"></div>
        </div>
        <div class="text-row-bottom">
            <div class="text-block">
                <h3>Convenience Stores at Fuel Stations</h3>
                <p>Convenience stores benefit from automated monitoring of refrigeration, security alarms, and predictive maintenance based on real-time telemetry data.</p>
            </div>
            <div class="text-block">
                <h3>Hospital Cafeterias and Institutional Kitchens</h3>
                <p>Institutional kitchens use smart retail solution to ensure food safety, prevent equipment failures, and optimize stock levels through smart shelf monitoring.</p>
            </div>
        </div>
    </div>
    <div class="applications-container-small">
        <div class="application-block">
            <div class="image"><img src="/images/usecases/smart-retail/pharmacy-2.svg" alt="Pharmacy Chains" title="Pharmacy Chains"></div>
            <div class="text-block">
                <h3>Pharmacy Chains</h3>
                <p>Smart retail solution enable pharmacy networks to ensure safe medication storage by monitoring refrigeration units, maintaining regulatory compliance, and detecting unauthorized access.</p>
            </div>
        </div>
        <div class="application-block">
            <div class="text-block">
                <h3>Convenience Stores at Fuel Stations</h3>
                <p>Convenience stores benefit from automated monitoring of refrigeration, security alarms, and predictive maintenance based on real-time telemetry data.</p>
            </div>
            <div class="image"><img src="/images/usecases/smart-retail/fuel-2.svg" alt="Convenience Stores at Fuel Stations" title="Convenience Stores at Fuel Stations"></div>
        </div>
        <div class="application-block">
            <div class="image"><img src="/images/usecases/smart-retail/logistics-2.svg" alt="Logistics and Cold Chain Warehouses" title="Logistics and Cold Chain Warehouses"></div>
            <div class="text-block">
                <h3>Logistics and Cold Chain Warehouses</h3>
                <p>The platform helps logistics operators maintain precise environmental conditions, monitor access points, and comply with food safety standards across their storage facilities.</p>
            </div>
        </div>
        <div class="application-block">
            <div class="text-block">
                <h3>Hospital Cafeterias and Institutional Kitchens</h3>
                <p>Institutional kitchens use smart retail solution to ensure food safety, prevent equipment failures, and optimize stock levels through smart shelf monitoring.</p>
            </div>
            <div class="image"><img src="/images/usecases/smart-retail/cafeterias-2.svg" alt="Hospital Cafeterias and Institutional Kitchens" title="Hospital Cafeterias and Institutional Kitchens"></div>
        </div>
        <div class="application-block">
            <div class="image"><img src="/images/usecases/smart-retail/court-2.svg" alt="Food Courts and Restaurant Chains" title="Food Courts and Restaurant Chains"></div>
            <div class="text-block">
                <h3>Food Courts and Restaurant Chains</h3>
                <p>Restaurants and food courts can leverage ThingsBoard to track equipment health, detect fire risks, and monitor access to restricted areas in real time.</p>
            </div>
        </div>
    </div>
</section>


<section class="summary">
    <div class="summary-text">
        <h2>Summary of smart retail</h2>
        <p>Smart retail solution by ThingsBoard is a comprehensive solution that enables centralized monitoring of store operations, improves safety through automated alarms and incident logging, and reduces costs related to equipment failures and product spoilage. By streamlining incident response and automating routine checks, it also enhances staff efficiency. More than just data visualization, this solution transforms retail infrastructure into an intelligent, predictive, and adaptive environment that drives value for both customers and businesses.</p>
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

            if (Math.abs(elemCoor.top) < elemCoor.height / 2 - 230 && elemCoor.top < 0) {
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
                <a id="UseCases_EnvMon_ViewLiveDemo" target="_blank" href="https://thingsboard.cloud/dashboard/551d4ca0-8b54-11ec-98f9-ff45c37940c6?publicId=4978baf0-8a92-11ec-98f9-ff45c37940c6" class="button gtm_button">View live demo</a>
                <a id="UseCases_EnvMon_ContactUs" target="_blank" href="/docs/contact-us/?subject=Custom%20Development" class="button contact-us gtm_button">Contact us</a>
            </div>`;
 
            return block;
        }

        function getImage(index) {
            const images = [
                "<img src='/images/usecases/smart-retail/smart-retail-1.webp' alt='ThingsBoard dashboard displaying supermarket locations and active critical alarms on the map' title='Overview of supermarket monitoring with critical and major alerts'/>",
                "<img src='/images/usecases/smart-retail/smart-retail-2.webp' alt='Critical motion sensor and list of active alarms for Supermarket S1 in ThingsBoard interface' title='Device and alarm status for Supermarket S1'/>",
                "<img src='/images/usecases/smart-retail/smart-retail-3.webp' alt='ThingsBoard interface showing Supermarket S1 floor plan with critical motion sensor alerts and alarm chart' title='Floor plan of Supermarket S1 with device states and motion sensor data'/>",
                "<img src='/images/usecases/smart-retail/smart-retail-4.webp' alt='Dashboard view of Supermarket S2 with critical door sensor and major chiller alarm' title='Device overview and alarms in Supermarket S2'/>",
                "<img src='/images/usecases/smart-retail/smart-retail-5.webp' alt='Supermarket S2 layout with freezer temperature monitoring and no active alarms' title='Temperature graph for freezer in Supermarket S2'/>",
                "<img src='/images/usecases/smart-retail/smart-retail-6.webp' alt='Critical door sensor and multiple major temperature alarms in Supermarket S3 on ThingsBoard' title='Supermarket S3 device list and alarm summary'/>",
                "<img src='/images/usecases/smart-retail/smart-retail-7.webp' alt='Dashboard showing temperature fluctuations of chiller in Supermarket S3 on ThingsBoard' title='Supermarket S3 floor plan and temperature trend for chiller'/>",
            ];
            return images[index];
        }
    });
</script>