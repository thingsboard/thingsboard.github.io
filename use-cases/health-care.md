---
layout: use-case
title: Health Care
description: Health monitoring
notitle: "true"
includeAdvantages: "true"
contactUsModal: "true"

---

{% include usecase-nav.html usecase="health-care" %}
<div id="scada-fullpage" onclick="this.style.display='none'; document.body.style.overflow='unset'"><div class="image"></div><div class="close-icon"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.3337 8.5465L23.4537 6.6665L16.0003 14.1198L8.54699 6.6665L6.66699 8.5465L14.1203 15.9998L6.66699 23.4532L8.54699 25.3332L16.0003 17.8798L23.4537 25.3332L25.3337 23.4532L17.8803 15.9998L25.3337 8.5465Z"></path></svg></div></div>
<h1 class="usecase-title">Health care: smart assisted living solution</h1>

<section class="health-about">
    <div class="about-text">
        <div class="short">
            <div class="block">
                <p class="text">ThingsBoard is an IoT platform with all the tools needed to build a comprehensive healthcare monitoring and management solution with ease. ThingsBoard provides an extensive range of built-in features as well as flexible customization options.</p>
            </div>
            <div class="demo-button">
                <a id="UseCases_HealthCare_ViewLiveDemo" target="_blank" href="https://thingsboard.cloud/dashboard/f8e77210-8fa8-11ef-90c1-0b39f28da380?publicId=7aa99e80-8acd-11ef-a59e-a9c993dbec14" class="button gtm_button">View live demo</a>
            </div>
        </div>
        <div class="long">
            <p>Healthcare monitoring systems are designed to track patient health metrics in real time and immediately notify medical professionals of critical changes. ThingsBoard, as a robust IoT platform, provides all the necessary tools for collecting, processing, and visualizing data from devices that use protocols like BLE or LoRaWAN gateways, enabling seamless integration and support for flexible solutions.</p>
            <p>Our smart assisted living solution powered by ThingsBoard provides real-time monitoring and management of residents' health in assisted living facilities. Using ThingsBoard’s powerful IoT capabilities, this solution integrates connected devices, data analytics, and automated alerts to create a seamless experience for caregivers and administrators, ensuring timely responses and a higher quality of care.</p>
        </div>
    </div>
</section>

<section class="health-carousel">
    {% include default-carousel.liquid collectionMap = 'use-cases' collectionKey = 'health-care' %}
</section> 

{% include contact-us-banner.liquid %}

<section class="health-solution-structure addedBanner">
    <h2>Solution structure</h2>
    <div class="about-text">
        <div class="short">
            <div class="block">
                <p class="text">The solution is designed to be used with BLE (Bluetooth Low Energy) or LoRaWAN gateways and devices. The rooms may be equipped with a number of sensors like room temperature, humidity, indoor air quality (IAQ), leak, smoke, and open/close detectors.</p>
            </div>
        </div>
        <div class="long">
            <p>The geopositioning of the resident is done via the beacon in the wristband and a set of nearby gateways. The platform deduplicates the incoming message from the beacon and enriches it with the attributes of the nearby gateways. The geopositioning algorithm is relatively simple and based on the payload's RSSI parameter. One may improve the algorithm based on the particular use case.</p>
        </div>
    </div>
    <div class="scheme">
        <img id="schemeSVG"  loading="lazy" data-src="/images/usecases/health-care/health-care-solution-structure.svg" alt="Health care solution structure">
    </div>
</section>
<section class="health-solution-structure">
    <h2>Smart assisted living benefits</h2>
    <p>The smart assisted living solution offers a range of benefits for care providers, residents, and facility administrators, supporting safe and efficient management of assisted living facilities:</p>
    <div class="health-solution-structure-cards">
        <div class="health-solution-structure-card">
            <h3>Efficient monitoring and response</h3>
            <p>Enables real-time tracking of residents’ health and environmental conditions, allowing caregivers to respond promptly to emergencies.</p>
        </div>
        <div class="health-solution-structure-card">
            <h3>Automated alerts and notifications</h3>
            <p>Configurable alerts ensure that caregivers and family members are notified of potential health risks, reducing the likelihood of delayed responses.</p>
        </div>
        <div class="health-solution-structure-card">
            <h3>Personalized care plans</h3>
            <p>Customizable alert rules and comprehensive health profiles allow facilities to tailor care based on individual residents' needs, enhancing the quality of care.</p>
        </div>
        <div class="health-solution-structure-card">
            <h3>Increased safety and comfort</h3>
            <p>Environmental monitoring maintains optimal room conditions, minimizing risks associated with temperature or noise fluctuations.</p>
        </div>
        <div class="health-solution-structure-card">
            <h3>Data-driven insights</h3>
            <p>Collects historical health data for each resident, allowing for trend analysis and proactive management of chronic conditions.</p>
        </div>
        <div class="health-solution-structure-card">
            <h3>Streamlined administration</h3>
            <p>A centralized dashboard and intuitive UI simplify the management of resident profiles, health alerts, and facility zones, saving time and reducing administrative burden.</p>
        </div>
    </div>
</section>

<section class="dashboard-structure">
    <h2>Dashboard structure</h2>
    <p>The smart assisted living dashboard enables caregivers and administrators to monitor residents’ health data and environmental conditions in real-time, with intuitive interfaces and easily configurable alarm systems.</p>
    <div class="dashboard-structure-block">
        <div class="menu">
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Resident overview</h3>
                    </div>
                    <div class="expansion-content">
                        <p>Provides a detailed profile for each resident, including health metrics such as heart rate, body temperature, and panic button status, allowing caregivers to quickly assess each resident's current health condition.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Resident alarm configuration</h3>
                    </div>
                    <div class="expansion-content">
                        <p>Allows administrators to set customized alarm rules for resident health parameters like heart rate and body temperature. Major and critical thresholds can be configured to trigger appropriate alerts in case of abnormalities.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Real-time resident alarms</h3>
                    </div>
                    <div class="expansion-content">
                        <p>Displays active alarms for residents, such as panic button presses or irregular vital signs, with real-time updates on each alert's status and severity, enabling quick response by caregivers.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Room alarm configuration</h3>
                    </div>
                    <div class="expansion-content">
                        <p>Provides settings to adjust alarm thresholds for environmental factors in rooms, such as temperature, humidity, air quality, and window or door status. This ensures rooms remain within safe and comfortable conditions for residents.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Resident list management</h3>
                    </div>
                    <div class="expansion-content">
                        <p>Lists all residents with essential information such as age, gender, assigned room, and floor, allowing caregivers to locate and access each resident’s data efficiently.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Zone and floor management</h3>
                    </div>
                    <div class="expansion-content">
                        <p>Enables administrators to organize the facility into zones or floors, allowing for easy navigation and monitoring of different areas within the facility.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Room and device layout</h3>
                    </div>
                    <div class="expansion-content">
                        <p>Shows the layout of each floor with room labels and device icons, allowing caregivers and administrators to identify the location of sensors and devices quickly for effective monitoring.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Device addition</h3>
                    </div>
                    <div class="expansion-content">
                        <p>Allows the addition of new devices like sensors or gateways to specific rooms, supporting scalability and enabling administrators to expand monitoring capabilities as needed.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Room configuration</h3>
                    </div>
                    <div class="expansion-content">
                        <p>Provides a tool to edit room details and positions within the facility layout, enabling accurate mapping and customization of room assignments.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="applications health">
    <h2>Applications of smart assisted living solution</h2>
    <p>A similar IoT-based monitoring and management solution, like smart assisted living, can be adapted and applied in various fields and directions. Here are some of them:</p>
    <div class="applications-container-large">
        <div class="text-row-top">
            <div class="text-block">
                <h3>Hospitals and healthcare facilities</h3>
                <p>Real-time monitoring of patients' conditions, tracking vital signs, managing wards and departments, and setting up alerts for timely response by medical staff to any health deterioration.</p>
            </div>
            <div class="text-block">
                <h3>Rehabilitation <br> centers</h3>
                <p>Monitoring the condition of patients undergoing rehabilitation after surgery or injuries. The system can track recovery progress, transmit data to doctors, and set reminders for physical therapy.</p>
            </div>
            <div class="text-block">
                <h3>Prisons and correctional facilities</h3>
                <p>Monitoring the health of inmates with vital sign tracking, smoke detectors, and access control systems. The system can also monitor movements and support facility security.</p>
            </div>
        </div>
        <div class="images-row">
            <div class="application-image"><img src="/images/usecases/health-care/hospital-1.svg" alt="Hospital"></div>
            <div class="application-image"><img src="/images/usecases/health-care/sport-complex-1.svg" alt="Sport complex"></div>
            <div class="application-image"><img src="/images/usecases/health-care/rehabilitation-center-1.svg" alt="Rehabilitation center"></div>
            <div class="application-image"><img src="/images/usecases/health-care/factories-1.svg" alt="Factory"></div>
            <div class="application-image"><img src="/images/usecases/health-care/prison-1.svg" alt="Prison"></div>
        </div>
        <div class="text-row-bottom">
            <div class="text-block">
                <h3>Sports complexes and fitness centers</h3>
                <p>Maintaining optimal conditions in gyms and locker rooms, monitoring the health of visitors (e.g., heart rate), and setting up emergency alerts if someone’s health deteriorates during workouts.</p>
            </div>
            <div class="text-block">
                <h3>Factories and industrial sites</h3>
                <p>Ensuring employee safety by monitoring working conditions (temperature, gas emissions, noise, humidity) and controlling equipment status to respond promptly to emergency situations.</p>
            </div>
        </div>
    </div>
    <div class="applications-container-small">
        <div class="application-block">
            <div class="image"><img src="/images/usecases/health-care/hospital-2.svg" alt="Water valve"></div>
            <div class="text-block">
                <h3>Hospitals and healthcare facilities</h3>
                <p>Real-time monitoring of patients' conditions, tracking vital signs, managing wards and departments, and setting up alerts for timely response by medical staff to any health deterioration.</p>
            </div>
        </div>
        <div class="application-block">
            <div class="text-block">
                <h3>Rehabilitation centers</h3>
                <p>Monitoring the condition of patients undergoing rehabilitation after surgery or injuries. The system can track recovery progress, transmit data to doctors, and set reminders for physical therapy.</p>
            </div>
            <div class="image"><img src="/images/usecases/health-care/sport-complex-2.svg" alt="Oil pump"></div>
        </div>
        <div class="application-block">
            <div class="image"><img src="/images/usecases/health-care/rehabilitation-center-2.svg" alt="Food conveyor"></div>
            <div class="text-block">
                <h3>Prisons and correctional facilities</h3>
                <p>Monitoring the health of inmates with vital sign tracking, smoke detectors, and access control systems. The system can also monitor movements and support facility security.</p>
            </div>
        </div>
        <div class="application-block">
            <div class="text-block">
                <h3>Sports complexes and fitness centers</h3>
                <p>Maintaining optimal conditions in gyms and locker rooms, monitoring the health of visitors (e.g., heart rate), and setting up emergency alerts if someone’s health deteriorates during workouts.</p>
            </div>
            <div class="image"><img src="/images/usecases/health-care/factories-2.svg" alt="Chemical plant"></div>
        </div>
        <div class="application-block">
            <div class="image"><img src="/images/usecases/health-care/prison-2.svg" alt="Power plant"></div>
            <div class="text-block">
                <h3>Factories and industrial sites</h3>
                <p>Ensuring employee safety by monitoring working conditions (temperature, gas emissions, noise, humidity) and controlling equipment status to respond promptly to emergency situations.</p>
            </div>
        </div>
    </div>
</section>

<section class="summary">
    <div class="summary-text">
        <h2>Summary of health care solution</h2>
        <p>This smart assisted living solution on ThingsBoard provides a comprehensive approach to resident and facility management, with robust monitoring capabilities, intuitive zoning and device management, and customizable alerts for both health and environmental conditions. The solution empowers caregivers and administrators to respond quickly, keep environments safe, and provide the highest standard of care for residents.</p>
    </div>
    <div class="summary-icon">
        <img src="/images/usecases/health-care/summary.svg" alt="Text summary icon" title="Text summary icon">
    </div>
</section>

<script type="text/javascript">
    document.addEventListener('DOMContentLoaded', function() {
        const img = document.getElementById("schemeSVG");
        const observer = new IntersectionObserver((entries, obs) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              img.src = img.getAttribute("data-src");
              obs.unobserve(img);
            }
          });
        }, { threshold: 1 });
        observer.observe(img);

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

            if (Math.abs(elemCoor.top) < elemCoor.height / 2 && elemCoor.top < 0) {
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
            <div class="image-container">
                <div class="image-background"></div>
                <div class="image-background"></div>
                <div class="image-background"></div>
                <div class=image>${getImage(0)}</div>
            </div>
            <div class="buttons-block">
                <a id="UseCases_HealthCare_ViewLiveDemo" target="_blank" href="https://thingsboard.cloud/dashboard/f8e77210-8fa8-11ef-90c1-0b39f28da380?publicId=7aa99e80-8acd-11ef-a59e-a9c993dbec14" class="button gtm_button">View live demo</a>
                <a id="UseCases_HealthCare_ContactUs" target="_blank" href="/docs/contact-us/?subject=Custom%20Development" class="button contact-us gtm_button">Contact us</a>
            </div>`;
    
            return block;
        }

        function getImage(index) {
            const images = [
                "<img src='/images/usecases/health-care/resident-overview.webp' alt='Resident overview dialog of dashboard'/>",
                "<img src='/images/usecases/health-care/resident-alarm.webp' alt='Resident alarm configuration dialog of dashboard'/>",
                "<img src='/images/usecases/health-care/real-time-resident-alarm.webp' alt='Real time resident alarm state of dashboard'/>",
                "<img src='/images/usecases/health-care/room-alarm-configuration.webp' alt='Room alarm configuration state of dashboard'/>",
                "<img src='/images/usecases/health-care/resident-list-management.webp' alt='Resident list management state of dashboard'/>",
                "<img src='/images/usecases/health-care/zone-and-floor-management.webp' alt='Zone and floor management state of dashboard'/>",
                "<img src='/images/usecases/health-care/room-and-device-layout.webp' alt='Room and device layout state of dashboard'/>",
                "<img src='/images/usecases/health-care/device-addition.webp' alt='Device addition state of dashboard'/>",
                "<img src='/images/usecases/health-care/room-configuration.webp' alt='Room configuration state of dashboard'/>"
            ];
            return images[index];
        }
    });
</script>
