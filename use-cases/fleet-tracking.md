---
layout: use-case
title: Geofencing-Based Excavator & Truck Tracking for Clay Mines
description: Explore how ThingsBoard enables safe and efficient vehicle tracking on clay mine sites using calculated fields, geofencing zones, and zero rule chain logic.
notitle: "true"
customTitle: "true"
includeAdvantages: "true"
contactUsModal: "true"

---

{% include usecase-nav.html usecase="site-fleet-tracking" %}
<div id="scada-fullpage" onclick="this.style.display='none'; document.body.style.overflow='unset'"><div class="image"></div><div class="close-icon"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.3337 8.5465L23.4537 6.6665L16.0003 14.1198L8.54699 6.6665L6.66699 8.5465L14.1203 15.9998L6.66699 23.4532L8.54699 25.3332L16.0003 17.8798L23.4537 25.3332L25.3337 23.4532L17.8803 15.9998L25.3337 8.5465Z"></path></svg></div></div>
<h1 class="usecase-title">Site fleet tracking monitoring solution</h1>
<section class="fleet-tracking-about">
    <div class="about-text">
        <div class="short">
            <div class="block">
                <p class="text">Clay mining operations present a high-risk, high-movement environment, where visibility, safety, and fuel efficiency are critical. Coordinating fleets of excavators and haul trucks across loading, unloading, and restricted zones requires more than GPS — it demands precision logic and real-time automation.</p>
            </div>
            <div class="demo-button">
                <a id="UseCases_FleetTracking_ViewLiveDemo" target="_blank" href="https://demo.thingsboard.io/dashboard/3d0bf910-ee09-11e6-b619-bb0136cc33d0?publicId=963ab470-34c9-11e7-a7ce-bb0136cc33d0" class="button gtm_button">View live demo</a>
            </div>
        </div>
        <div class="long">
            <p>ThingsBoard delivers a robust answer to this challenge. Built with scalability, real-time analytics, and geospatial control at its core, the platform transforms how mine operators monitor and manage their equipment — all without using Rule Chains.</p>
            <p>This Clay Mine Site solution leverages calculated fields, geofencing logic, and alarm rules only to streamline configuration, reduce deployment time, and drive intelligent insights from the ground up. With zero-code automation and dynamic dashboards, operations become more predictable, safer, and easier to scale.</p>        
        </div>
    </div>
</section>

<section class="fleet-tracking-carousel carousel-padding">
    {% include default-carousel.liquid collectionMap = 'use-cases' collectionKey = 'fleet-tracking' %}
</section> 

{% include contact-us-banner.liquid %}

<section class="fleet-tracking-solution-structure">
    <h2>Solution structure of the site fleet tracking monitoring solution</h2>
    <div class="about-text">
        <div class="short">
            <div class="block">
                <p class="text">The solution architecture consists of GPS-enabled excavators and haul trucks, transmitting telemetry to ThingsBoard via MQTT or HTTP protocols. Devices report location, fuel levels, speed, pressure, and more.</p>
            </div>
        </div>
        <div class="long">
            <p>Instead of traditional rule chains, all processing is handled by Calculated Fields, allowing operations teams to configure logic like: zone detection via Geofencing Calculated Fields, fuel burn rate and hydraulic pressure thresholds, speed analysis and usage KPIs, machine state transitions (idle, working, unloading).</p>
            <p>All alerts are configured through Alarm Rules, creating a clean, no-code environment that is easy to maintain and adapt across multiple sites.</p>
        </div>
    </div>
    <div class="scheme">
        <img id="schemeSVG" loading="lazy" data-src="/images/usecases/smart-use-cases.svg" class="svg-animation" alt="IoT Fleet Tracking solution architecture" title="IoT Fleet Tracking solution architecture: IoT devices connect via gateways to the cloud for processing, visualization, and automation">
    </div>
</section>

<section class="dashboard-structure section-padding">
    <div class="section-header">
        <h2>Dashboard structure of the site fleet tracking monitoring solution</h2>
        <p>
            The solution includes a set of modular dashboards designed to give mine operators full situational control — from zone-level events to individual machine analytics. The primary Mine Overview Dashboard presents a full satellite view of the site with color-coded zones (Loading, Unloading, Restricted), live machine positions, fuel levels, and telemetry streams. Interactive widgets highlight: machines per zone, fuel usage per day, active alarms with severity, zone-specific transitions and KPIs
        </p>
    </div>
    <div class="dashboard-structure-block">
        <div class="menu">
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Main Overview Dashboard</h3>
                    </div>
                    <div class="expansion-content">
                        <p>This dashboard displays a full satellite map of the mine with real-time overlays for each vehicle. Vehicles are color-coded by type and zone, while the right panel shows a live machine list with fuel status and operational state. KPIs summarize daily consumption, number of vehicles in each zone, and triggered alarms. It enables full operational awareness at a glance.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Zone L1 – Loading Area</h3>
                    </div>
                    <div class="expansion-content">
                        <p>Focused on Excavator A, this dashboard tracks its speed, fuel level, and operational alarms. The map zooms into the loading zone, while the sidebar lists alarms for low fuel and hydraulic pressure. Operators can easily monitor zone-specific performance and address machine-level issues in context.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Zone U1 – Unloading Area</h3>
                    </div>
                    <div class="expansion-content">
                        <p>Displays Excavator B actively working in the unloading area with fuel and minor speed violations. Alarms are logged instantly. This dashboard provides quick access to machine status and zone compliance — a key element for high-traffic unloading areas.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Zone R1 – Restricted Area</h3>
                    </div>
                    <div class="expansion-content">
                        <p>This screen shows Haul Truck B parked in a restricted zone, triggering a critical overload alarm. The map provides immediate zone context, and the alarm panel flags violations in real time. This visual enforcement helps prevent unsafe operation or zone breaches.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Excavator B – Machine Dashboard</h3>
                    </div>
                    <div class="expansion-content">
                        <p>A telemetry-rich screen featuring fuel usage, fuel level, pressure, and route playback. Historical data and live metrics provide clear insight into machine performance and workload, while alarm logs support proactive maintenance.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Haul Truck A – Behavior Dashboard</h3>
                    </div>
                    <div class="expansion-content">
                        <p>Highlights repeated speed limit violations, fuel burn, and load data. The route history is shown with all zone transitions. This enables supervisors to analyze driver behavior, optimize travel paths, and reduce excess wear or unsafe driving.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Haul Truck B – Idle & Overload State</h3>
                    </div>
                    <div class="expansion-content">
                        <p>Shows a vehicle in a restricted zone with 28-ton load and no movement. An active overload alarm is triggered. This dashboard is essential for spotting inefficient use of assets or safety violations that need immediate action.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Excavator A – Performance Analysis</h3>
                    </div>
                    <div class="expansion-content">
                        <p>Monitors hydraulic pressure, movement, and fuel trends. Alarm logs indicate repeated pressure spikes. Used in tandem with maintenance schedules, this helps detect early signs of mechanical stress.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Haul Truck C – Out-of-Zone Alert</h3>
                    </div>
                    <div class="expansion-content">
                        <p>Vehicle is detected outside of the mine’s geofence, triggering a critical perimeter breach alarm. Combined with a low-fuel warning, the system prompts immediate resolution — reducing risk and ensuring operational boundaries are respected.</p>
                    </div>
                </div>
            </div>
            <div class="expansion-block">
                <div class="expansion-panel">
                    <div class="expansion-header">
                        <h3>Calculated Fields Panel</h3>
                    </div>
                    <div class="expansion-content">
                        <p>The admin interface shows all backend logic built through calculated fields — fuel formulas, geofence status, speed over limits, etc. Everything is visual, editable, and instantly applied to the data model — zero Rule Chains required. This low-code logic layer drastically reduces setup complexity and speeds up scaling across fleets.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="applications applications-additional summary-margin section-padding">
    <div class="section-header">
        <h2>Applications of the site fleet tracking monitoring solution</h2>
        <p>A solution like this is perfectly suited for a variety of industrial and logistics use cases where zone-based automation, fleet safety, and machine telemetry matter:</p>
    </div>
    <div class="applications-container-large">
        <div class="text-row-top">
            <div class="text-block">
                <h3>Mining & quarrying</h3>
                <p>Track machines across loading, transport, and restricted zones using automated alarms and fuel analytics.</p>
            </div>
            <div class="text-block">
                <h3>Construction sites</h3>
                <p>Monitor heavy machinery in temporary or mobile zones, ensuring route compliance and operational safety.</p>
            </div>
            <div class="text-block">
                <h3>Forestry operations</h3>
                <p>Use geofencing to protect environmental boundaries and track equipment in remote forest sectors.</p>
            </div>
        </div>
        <div class="images-row">
            <div class="application-image"><img src="/images/usecases/fleet-tracking/mining-1.svg" alt="Mining & quarrying" title="Track machines across loading, transport, and restricted zones using automated alarms and fuel analytics."></div>
            <div class="application-image"><img src="/images/usecases/fleet-tracking/dumpsites-1.svg" alt="Material yards & dumpsites" title=" Automate alerts when haul trucks or loaders enter, leave, or overload in processing areas."></div>
            <div class="application-image"><img src="/images/usecases/fleet-tracking/construction-1.svg" alt="Construction sites" title="Monitor heavy machinery in temporary or mobile zones, ensuring route compliance and operational safety."></div>
            <div class="application-image"><img src="/images/usecases/fleet-tracking/infrastructure-1.svg" alt="Infrastructure projects" title="Gain visibility over fleet movement across bridges, tunnels, or time-sensitive zones during large-scale builds."></div>
            <div class="application-image"><img src="/images/usecases/fleet-tracking/forest-1.svg" alt="Forestry operations" title="Use geofencing to protect environmental boundaries and track equipment in remote forest sectors."></div>
        </div>
        <div class="text-row-bottom">
            <div class="text-block">
                <h3>Material yards & dumpsites</h3>
                <p> Automate alerts when haul trucks or loaders enter, leave, or overload in processing areas.</p>
            </div>
            <div class="text-block">
                <h3>Infrastructure projects</h3>
                <p>Gain visibility over fleet movement across bridges, tunnels, or time-sensitive zones during large-scale builds.</p>
            </div>
        </div>
    </div>
    <div class="applications-container-small">
        <div class="application-block">
            <div class="image"><img src="/images/usecases/fleet-tracking/mining-2.svg" alt="Mining & quarrying" title="Track machines across loading, transport, and restricted zones using automated alarms and fuel analytics."></div>
            <div class="text-block">
                <h3>Mining & quarrying</h3>
                <p>Track machines across loading, transport, and restricted zones using automated alarms and fuel analytics.</p>
            </div>
        </div>
        <div class="application-block">
            <div class="text-block">
                <h3>Material yards & dumpsites</h3>
                <p>Automate alerts when haul trucks or loaders enter, leave, or overload in processing areas.</p>
            </div>
            <div class="image"><img src="/images/usecases/fleet-tracking/dumpsites-2.svg" alt="Material yards & dumpsites" title="Automate alerts when haul trucks or loaders enter, leave, or overload in processing areas."></div>
        </div>
        <div class="application-block">
            <div class="image"><img src="/images/usecases/fleet-tracking/construction-2.svg" alt="Construction sites" title="Monitor heavy machinery in temporary or mobile zones, ensuring route compliance and operational safety."></div>
            <div class="text-block">
                <h3>Construction sites</h3>
                <p>Monitor heavy machinery in temporary or mobile zones, ensuring route compliance and operational safety.</p>
            </div>
        </div>
        <div class="application-block">
            <div class="text-block">
                <h3>Infrastructure projects</h3>
                <p>Monitors chemical storage tanks for compliance and safety in industrial environments.</p>
            </div>
            <div class="image"><img src="/images/usecases/fleet-tracking/infrastructure-2.svg" alt="Infrastructure projects" title="Monitors chemical storage tanks for compliance and safety in industrial environments."></div>
        </div>
        <div class="application-block">
            <div class="image"><img src="/images/usecases/fleet-tracking/forest-2.svg" alt="Forestry operations" title="Gain visibility over fleet movement across bridges, tunnels, or time-sensitive zones during large-scale builds."></div>
            <div class="text-block">
                <h3>Forestry operations</h3>
                <p>Gain visibility over fleet movement across bridges, tunnels, or time-sensitive zones during large-scale builds.</p>
            </div>
        </div>
    </div>
</section>


<section class="summary fleet-tracking">
    <div class="summary-text">
        <h2>Summary of the site fleet tracking monitoring solution</h2>
        <p>ThingsBoard’s Clay Mine Monitoring Solution sets a new benchmark for no-code industrial IoT. By eliminating Rule Chains and relying solely on calculated fields and alarm rules, it reduces configuration overhead, speeds up deployment, and empowers teams to operate smarter and safer.</p>
        <p>The platform provides everything needed for real-time tracking, performance analysis, geofencing control, and automated alerts — all through a powerful and flexible dashboard layer.</p>
        <p>Whether applied to clay mines or other heavy equipment scenarios, this solution offers unmatched operational clarity and scalability.</p>
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
                <a id="UseCases_FleetTracking_ContactUs" target="_blank" href="/docs/contact-us/?subject=Custom%20Development" class="button contact-us gtm_button">Contact us</a>
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
                "<img src='/images/usecases/fleet-tracking/site-fleet-tracking-1.webp' alt='This dashboard displays a full satellite map of the mine with real-time overlays for each vehicle. Vehicles are color-coded by type and zone, while the right panel shows a live machine list with fuel status and operational state. KPIs summarize daily consumption, number of vehicles in each zone, and triggered alarms. It enables full operational awareness at a glance.'/>",
                "<img src='/images/usecases/fleet-tracking/zone-l1.webp' alt='Focused on Excavator A, this dashboard tracks its speed, fuel level, and operational alarms. The map zooms into the loading zone, while the sidebar lists alarms for low fuel and hydraulic pressure. Operators can easily monitor zone-specific performance and address machine-level issues in context.'/>",
                "<img src='/images/usecases/fleet-tracking/zone-u1.webp' alt='Displays Excavator B actively working in the unloading area with fuel and minor speed violations. Alarms are logged instantly. This dashboard provides quick access to machine status and zone compliance — a key element for high-traffic unloading areas.'/>",
                "<img src='/images/usecases/fleet-tracking/zone-r1.webp' alt='This screen shows Haul Truck B parked in a restricted zone, triggering a critical overload alarm. The map provides immediate zone context, and the alarm panel flags violations in real time. This visual enforcement helps prevent unsafe operation or zone breaches.'/>",
                "<img src='/images/usecases/fleet-tracking/excavator-b.webp' alt='A telemetry-rich screen featuring fuel usage, fuel level, pressure, and route playback. Historical data and live metrics provide clear insight into machine performance and workload, while alarm logs support proactive maintenance.'/>",
                "<img src='/images/usecases/fleet-tracking/haul-truck-a.webp' alt='Highlights repeated speed limit violations, fuel burn, and load data. The route history is shown with all zone transitions. This enables supervisors to analyze driver behavior, optimize travel paths, and reduce excess wear or unsafe driving.'/>",
                "<img src='/images/usecases/fleet-tracking/haul-truck-b.webp' alt='Shows a vehicle in a restricted zone with 28-ton load and no movement. An active overload alarm is triggered. This dashboard is essential for spotting inefficient use of assets or safety violations that need immediate action.'/>",
                "<img src='/images/usecases/fleet-tracking/excavator-a.webp' alt='Monitors hydraulic pressure, movement, and fuel trends. Alarm logs indicate repeated pressure spikes. Used in tandem with maintenance schedules, this helps detect early signs of mechanical stress.'/>",
                "<img src='/images/usecases/fleet-tracking/haul-truck-c.webp' alt='Vehicle is detected outside of the mine’s geofence, triggering a critical perimeter breach alarm. Combined with a low-fuel warning, the system prompts immediate resolution — reducing risk and ensuring operational boundaries are respected.'/>",
                "<img src='/images/usecases/fleet-tracking/calc-fields.webp' alt='The admin interface shows all backend logic built through calculated fields — fuel formulas, geofence status, speed over limits, etc. Everything is visual, editable, and instantly applied to the data model — zero Rule Chains required. This low-code logic layer drastically reduces setup complexity and speeds up scaling across fleets.'/>"
            ];
            return images[index];
        }
    });
</script>