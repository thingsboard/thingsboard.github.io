---
layout: use-case
title: IoT Energy Management & Monitoring with ThingsBoard
description: The Smart Energy solution based on ThingsBoard IoT platform enables real-time energy monitoring and optimization. It helps reduce costs, improve energy efficiency, automate management processes, and achieve sustainable development.
notitle: "true"
customTitle: "true"
includeAdvantages: "true"

---

{% include usecase-nav.html usecase="smart-energy" %}
<div id="scada-fullpage" onclick="this.style.display='none'; document.body.style.overflow='unset'"><div class="image"></div><div class="close-icon"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.3337 8.5465L23.4537 6.6665L16.0003 14.1198L8.54699 6.6665L6.66699 8.5465L14.1203 15.9998L6.66699 23.4532L8.54699 25.3332L16.0003 17.8798L23.4537 25.3332L25.3337 23.4532L17.8803 15.9998L25.3337 8.5465Z"></path></svg></div></div>
<h1 class="usecase-title">Smart Energy</h1>
<section class="environment-monitoring-about">
    <div class="about-text">
        <div class="short">
            <div class="block">
                <p class="text">Smart Energy is intelligent energy resource management using IoT to improve efficiency, reduce costs, and automate processes. ThingsBoard is a perfect platform for these tasks, providing scalable data collection, analytics, and real-time remote control.</p>
            </div>
            <div class="demo-button">
                <a id="UseCases_SmartEnergy_ViewLiveDemo" target="_blank" href="https://demo.thingsboard.io/dashboard/e8e409c0-f2b5-11e6-a6ee-bb0136cc33d0?publicId=963ab470-34c9-11e7-a7ce-bb0136cc33d0" class="button gtm_button">View live demo</a>            </div>
            </div>
        <div class="long">
            <p>IoT is radically transforming the approach to energy management. IoT sensors capture the consumption of electricity, water, heat, as well as environmental parameters such as pressure, temperature, and more. This data is used to make automated decisions — from shutting down systems in case of failures to optimizing consumption and preventing losses.</p>
            <p>The ThingsBoard platform provides a powerful technology stack for building such systems. It supports data collection from various types of devices and protocols (MQTT, CoAP, HTTP, etc.), dashboard visualizations, and advanced automation through its rule engine and alerting system. This enables real-time energy monitoring and rapid response to anomalies, reducing costs and improving operational efficiency.</p>
        </div>
    </div>
</section>

<section class="smart-energy-overview">
    <div class="img-comp-container">
        <div class="img-comp-img">
            <img class="traditional-background" src="/images/usecases/smart-energy/smart-energy-1.webp" alt="ThingsBoard dashboard in light theme showing energy data from smart meters" title="Smart energy monitoring dashboard in light mode: real-time voltage, amperage, consumption, and critical alarms for three smart meters">
        </div>
        <div class="img-comp-img img-comp-overlay">
            <img class="traditional-background" src="/images/usecases/smart-energy/smart-energy-2.webp" alt="ThingsBoard dashboard in dark theme with smart meter data visualization" title="Smart energy monitoring in dark mode: ThingsBoard interface displaying real-time metrics and alarm conditions">
        </div>
    </div>
</section>

<section class="smart-energy-solution-structure">
    <h2>Solution structure of smart energy use case</h2>
    <div class="about-text">
        <div class="short">
            <div class="block">
                <p class="text">ThingsBoard offers a comprehensive IoT-based energy monitoring solution built on a modular, scalable architecture. At the device level, smart meters and industrial Modbus meters collect real-time data on energy consumption across facilities.</p>
            </div>
        </div>
        <div class="long">
            <p>These devices connect through IoT gateways that support a wide range of communication protocols, including MQTT, CoAP, HTTP, and LwM2M, ensuring secure and seamless data transmission to the cloud.</p>
            <p>ThingsBoard core handles device and user management, real-time data processing via a powerful rule engine. The collected data is visualized through intuitive dashboards and mobile applications, giving users clear insights into energy usage, system alarms, and performance metrics — all in real time, from a single interface.</p>
        </div>
    </div>
    <div class="scheme">
        <img id="schemeSVG" loading="lazy" data-src="/images/usecases/smart-use-cases.svg" class="svg-animation" alt="Smart energy solution architecture" title="Smart energy solution architecture: IoT devices connect via gateways to the cloud for processing, visualization, and automation">
    </div>
    <div class="smart-energy-benefits section-padding">
        <div class="section-header">
            <h2>Smart energy benefits</h2>
            <p>The Smart Energy solution provides a wide range of benefits for businesses, facility managers, and technical teams, enabling efficient, automated, and scalable energy management.</p>
        </div>
        <div class="use-cases-solution-structure-cards">
            <div class="use-cases-solution-structure-card">
                <h3>Failure detection and risk mitigation</h3>
                <p>Real-time monitoring detects unusual patterns that may signal potential system failures, helping reduce risks and prevent downtime.</p>
            </div>
            <div class="use-cases-solution-structure-card">
                <h3>Dynamic energy optimization</h3>
                <p>IoT-powered energy systems automatically adjust consumption based on time of day, weather, or pricing factors, improving efficiency and occupant comfort.</p>
            </div>
            <div class="use-cases-solution-structure-card">
                <h3>Centralized monitoring and control</h3>
                <p>A unified platform enables centralized oversight of energy usage across multiple facilities, simplifying management and enhancing visibility.</p>
            </div>
            <div class="use-cases-solution-structure-card">
                <h3>Increased energy efficiency</h3>
                <p>IoT sensors track detailed consumption patterns by device or system, allowing identification of inefficiencies and driving smarter energy use.</p>
            </div>
            <div class="use-cases-solution-structure-card">
                <h3>Sustainability and cost savings</h3>
                <p>Continuous monitoring and automation help reduce operational costs and maintenance needs, supporting long-term sustainability goals.</p>
            </div>
            <div class="use-cases-solution-structure-card">
                <h3>Regulatory compliance</h3>
                <p>Automated tracking and reporting features make it easier to meet energy regulations and environmental standards.</p>
            </div>
        </div>
    </div>
</section>

<section class="dashboard-structure section-padding">
    <div class="section-header">
        <h2>Dashboard structure of smart energy solution</h2>
        <p>
            The live dashboard displays real-time data from several smart meters collected using ThingsBoard MQTT API. Collected data is processed via the rule engine to raise alarms on certain thresholds. The main dashboard displays the energy meters, corresponding alarms, and real-time data feeds. Click on the alarm or energy meter row to open the meter details. You may export the dashboard from our live demo server and import it to your ThingsBoard instance.    
        </p>
    </div>
    <div class="dashboard-structure-block">
        <div class="menu">
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Smart energy state</h3>
                    </div>
                    <div class="expansion-content">
                        <p>This unified dashboard provides a comprehensive real-time view of voltage, amperage, frequency, and energy consumption across all three floors. Operators can monitor Smart Meters A, B, and C, analyze, compare performance, and detect anomalies instantly. Alarm widgets notify users about critical events like low or high voltage, while interactive charts and tables offer full control and insight — all from a single interface.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Smart Meter A — 1st Floor state</h3>
                    </div>
                    <div class="expansion-content">
                        <p>This dashboard provides full visibility into voltage, frequency, amperage, and energy consumption for Smart Meter A. Real-time charts help detect instability in power supply, while a historical consumption graph supports weekly analysis. The frequency dip and critical high-voltage alarm enable timely diagnostics and response.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Smart Meter B — 2nd Floor state</h3>
                    </div>
                    <div class="expansion-content">
                        <p>This dashboard provides full visibility into voltage, frequency, amperage, and energy consumption for Smart Meter B. Real-time charts help detect instability in power supply, while a historical consumption graph supports weekly analysis. The frequency dip and critical high-voltage alarm enable timely diagnostics and response.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Smart Meter C — 3rd Floor state</h3>
                    </div>
                    <div class="expansion-content">
                        <p>This dashboard provides full visibility into voltage, frequency, amperage, and energy consumption for Smart Meter C. Real-time charts help detect instability in power supply, while a historical consumption graph supports weekly analysis. The frequency dip and critical high-voltage alarm enable timely diagnostics and response.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Theme toggle mode</h3>
                    </div>
                    <div class="expansion-content">
                        <p>With a single click on the theme icon in the top right corner, users can switch between light and dark modes. This flexibility enhances user comfort in various lighting conditions, improves focus, and reduces eye strain — especially during night shifts or long monitoring sessions. The dark theme preserves full dashboard functionality, including charts, alerts, and controls.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="applications applications-additional section-padding">
    <div class="section-header">
        <h2>Applications of smart energy solution</h2>
        <p>A scalable IoT-based energy monitoring and management system can be adapted for a wide range of industries and infrastructure types. Below are just a few examples of where Smart Energy solutions can be applied.</p>
    </div>
    <div class="applications-container-large">
        <div class="text-row-top">
            <div class="text-block">
                <h3>Industrial facilities and factories</h3>
                <p>Tracking energy usage of heavy machinery, identifying inefficiencies, and improving power distribution for safer and more cost-effective production processes.</p>
            </div>
            <div class="text-block">
                <h3>Educational institutions and campuses</h3>
                <p>Controlling power consumption in classrooms, labs, and dormitories, scheduling energy use based on occupancy, and ensuring sustainability targets are met.</p>
            </div>
            <div class="text-block">
                <h3>Shopping malls and retail chains</h3>
                <p>Monitoring temperature, humidity, and air circulation to ensure proper storage conditions for perishable goods and pharmaceutical products.</p>
            </div>
        </div>
        <div class="images-row">
            <div class="application-image"><img src="/images/usecases/smart-energy/factory-1.svg" alt="Factory" title="Industrial facilities and factories"></div>
            <div class="application-image"><img src="/images/usecases/smart-energy/buildings-1.svg" alt="Buildings" title="Commercial buildings and offices"></div>
            <div class="application-image"><img src="/images/usecases/smart-energy/education-1.svg" alt="School" title="Educational institutions and campuses"></div>
            <div class="application-image"><img src="/images/usecases/smart-energy/data-centers-1.svg" alt="Data centers" title="Data centers"></div>
            <div class="application-image"><img src="/images/usecases/smart-energy/malls-1.svg" alt="Mall" title="Shopping malls and retail chains"></div>
        </div>
        <div class="text-row-bottom">
            <div class="text-block">
                <h3>Commercial buildings and offices</h3>
                <p>Optimizing HVAC, lighting, and equipment usage across floors and departments, with real-time monitoring to reduce energy waste and operational costs.</p>
            </div>
            <div class="text-block">
                <h3>Data centers</h3>
                <p>Maintaining stable voltage, temperature, and load balancing to ensure uninterrupted operations while reducing electricity consumption and cooling costs.</p>
            </div>
        </div>
    </div>
    <div class="applications-container-small">
        <div class="application-block">
            <div class="image"><img src="/images/usecases/smart-energy/factory-2.svg" alt="Factory" title="Industrial facilities and factories"></div>
            <div class="text-block">
                <h3>Industrial facilities and factories</h3>
                <p>Tracking energy usage of heavy machinery, identifying inefficiencies, and improving power distribution for safer and more cost-effective production processes.</p>
            </div>
        </div>
        <div class="application-block">
            <div class="text-block">
                <h3>Commercial buildings and offices</h3>
                <p>Optimizing HVAC, lighting, and equipment usage across floors and departments, with real-time monitoring to reduce energy waste and operational costs.</p>
            </div>
            <div class="image"><img src="/images/usecases/smart-energy/buildings-2.svg" alt="Buildings" title="Commercial buildings and offices"></div>
        </div>
        <div class="application-block">
            <div class="image"><img src="/images/usecases/smart-energy/education-2.svg" alt="School" title="Educational institutions and campuses"></div>
            <div class="text-block">
                <h3>Educational institutions and campuses</h3>
                <p>Controlling power consumption in classrooms, labs, and dormitories, scheduling energy use based on occupancy, and ensuring sustainability targets are met.</p>
            </div>
        </div>
        <div class="application-block">
            <div class="text-block">
                <h3>Data centers</h3>
                <p>Maintaining stable voltage, temperature, and load balancing to ensure uninterrupted operations while reducing electricity consumption and cooling costs.</p>
            </div>
            <div class="image"><img src="/images/usecases/smart-energy/data-centers-2.svg" alt="Data centers" title="Data centers"></div>
        </div>
        <div class="application-block">
            <div class="image"><img src="/images/usecases/smart-energy/malls-2.svg" alt="Mall" title="Shopping malls and retail chains"></div>
            <div class="text-block">
                <h3>Shopping malls and retail chains</h3>
                <p>Monitoring energy usage across multiple locations, managing peak hours, and controlling lighting and HVAC systems automatically for higher efficiency.</p>
            </div>
        </div>
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
                <a id="UseCases_SmartEnergy_ViewLiveDemo" target="_blank" href="https://demo.thingsboard.io/dashboard/e8e409c0-f2b5-11e6-a6ee-bb0136cc33d0?publicId=963ab470-34c9-11e7-a7ce-bb0136cc33d0" class="button gtm_button">View live demo</a>
                <a id="UseCases_SmartEnergy_ContactUs" target="_blank" href="https://thingsboard.io/docs/contact-us/" class="button contact-us gtm_button">Contact us</a>
            </div>`;
    
            return block;
        }

        function getImage(index) {
            const images = [
                "<img src='/images/usecases/smart-energy/smart-energy-1.webp' alt='ThingsBoard dashboard in light theme showing energy data from smart meters' title='Smart energy monitoring dashboard in light mode: real-time voltage, amperage, consumption, and critical alarms for three smart meters'/>",
                "<img src='/images/usecases/smart-energy/smart-energy-3.webp' alt='Smart Meter A dashboard on the 1st floor showing voltage, frequency, amperage, and energy consumption' title='Smart Meter A on the 1st floor: real-time monitoring of voltage, frequency, current and weekly energy usage with one active high voltage alarm'/>",
                "<img src='/images/usecases/smart-energy/smart-energy-4.webp' alt='Smart Meter B dashboard on the 2nd floor with energy data and real-time frequency' title='Smart Meter B on the 2nd floor: displays live voltage, frequency, amperage and energy consumption. No active alarms detected'/>",
                "<img src='/images/usecases/smart-energy/smart-energy-5.webp' alt='Smart Meter C dashboard on the 3rd floor showing real-time energy metrics and critical alarm' title='Smart Meter C on the 3rd floor: visualization of voltage, frequency, current and consumption, with one unacknowledged low voltage alarm'/>",
                "<img src='/images/usecases/smart-energy/smart-energy-2.webp' alt='ThingsBoard dashboard in dark theme with smart meter data visualization' title='Smart energy monitoring in dark mode: ThingsBoard interface displaying real-time metrics and alarm conditions'/>",
            ];
            return images[index];
        }
    });
</script>