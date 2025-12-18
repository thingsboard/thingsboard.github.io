---
layout: case-studies
title: How ÖBB-Infrastruktur AG Transformed Railway Operations with ThingsBoard
notitle: "true"
customTitle: "true"
description: Discover how ÖBB-Infrastruktur AG enhanced railway efficiency and safety by integrating ThingsBoard's IoT platform—achieving real-time monitoring, predictive maintenance, and secure data flow without public internet exposure.
---

<div class="case-study-page-wrapper">
    <section class="case-study-hero">
        <div class="card">
            <div class="text">
                <p class="category">SMART INFRASTRUCTURE</p>
                <h1>Smart railway infrastructure: digital transformation of ÖBB-Infrastruktur AG</h1>
                <div class="image inner" style="background-image: url('/images/case-studies/obb.webp')">
                    <img src="/images/case-studies/obb.svg" title="ÖBB-Infrastruktur AG" alt="ÖBB-Infrastruktur AG logo" width="91" height="56">
                </div>
                <p>As Austria's pioneer rail transport provider, ÖBB-Infrastruktur AG is responsible for planning, developing, maintaining, and operating Austria's rail infrastructure. The company is committed to setting high standards for punctuality, safety, cleanliness, and open access to the rail system.</p>
                <p>With innovation and sustainability in mind, ÖBB-Infrastruktur AG ensures that millions of passengers travel comfortably and enables efficient transportation of goods across Austria and beyond. The goal is simple: make every journey a good experience, create welcoming stations, and contribute to the country’s progress with every project.</p>
                <p>The main challenge in the upcoming years is going to be the rising demand in railway traffic, increased density in our timetables, thus less time-windows for maintenance work which require the track closings. Those challenges can only be encountered with better planning, and more cooperation between business units based on data in our railway digital twin.</p>
            </div>
            <div class="image large" style="background-image: url('/images/case-studies/obb.webp')">
                <img src="/images/case-studies/obb.svg" title="ÖBB-Infrastruktur AG" alt="ÖBB-Infrastruktur AG logo" width="91" height="56">
            </div>
        </div>
    </section>
    <section class="statistics">
        <div class="block">
            <p>
                {% include number-animation.html startNum = 1 targetNum = 25888 useMobileMode = true useGrouping = true %}
            </p>
            <p>manage signals <br> to control and safety</p>
        </div>
        <div class="block">
            <p>
                {% include number-animation.html startNum = 1 targetNum = 5 %}
            </p>
            <p>operational control centers <br> monitoring and management</p>
        </div>
        <div class="block">
            <p>
                {% include number-animation.html startNum = 1 targetNum = 6634 useGrouping = true %}
            </p>
            <p>bridges maintenance and <br> cost reduction</p>
        </div>
    </section>
    <section class="authored-quote">
        <img class="h-auto" src="/images/case-studies/Dominic_Winkler.webp" title="ÖBB-Infrastruktur AG IT Enterprise Architect Dominic Winkler" alt="Dominic Winkler" width="1316" height="848">
        <div class="text">
            <h2>ÖBB-Infrastruktur AG</h2>
            <p class="quote">“Thingsboard Edge gives us the invaluable ability to allow data to flow within our IT network without the need to bridge Firewalls and Public Internet.”</p>
            <p class="author">Dominic Winkler</p>
            <p class="title">IT Enterprise Architect</p>
        </div>
    </section>
    <section class="problem">
        <div class="title-block">
            <h2>What problem did they face?</h2>
            <p>ÖBB-Infrastruktur AG aimed to ensure greater traffic capacity on our tracks while maintaining excellent levels of safety, travel comfort and sustainability. The lifecycle of railway assets needs to be monitored and managed proactively to ensure high availability for railway operation teams. This requires integration of IoT solutions that will confront the challenges related to real-time data processing, secure communication, and predictive analytics. The objective is to enhance mobility, reduce emissions, and optimize maintenance processes.</p>
        </div>
        <div class="cards-row">
            <div class="card">
                <h3>Challenges</h3>
                <ul>
                    <li>
                        <i class="far fa-question-circle"></i>
                        <p>Managing real-time data from a vast network of IoT devices across a nationwide railway infrastructure, and eliminating the need to expose internal systems to the public Internet while maintaining data flow.</p>
                    </li>
                    <li>
                        <i class="far fa-question-circle"></i>
                        <p>Moving from "What's now?" to "What's next?" to "What if?" using data analytics.</p>
                    </li>
                    <li>
                        <i class="far fa-question-circle"></i>
                        <p>Provide a unified and accessible interface for ÖBB's internal customers to visualize IoT data.</p>
                    </li>
                </ul>
            </div>
            <div class="card">
                <h3>Key results</h3>
                <ul>
                    <li>
                        <i class="far fa-check-circle"></i>
                        <p>By leveraging the country-wide private fiber network and ThingsBoard Edge, ÖBB-Infrastruktur AG has created a secure internal communications channel that keeps data within its IT network, minimizes security risks, and enables local systems to connect securely without bridging firewalls or using the public Internet.</p>
                    </li>
                    <li>
                        <i class="far fa-check-circle"></i>
                        <p>Thingsboard played a key role in the Austrian Railways initiative to create a Digital Twin of the railway assets by providing real-time asset condition data and recording time-series data. By leveraging the Digital Twin concept with ThingsBoard, ÖBB-Infrastruktur AG could predict potential issues, simulate scenarios, and make informed decisions proactively.</p>
                    </li>
                    <li>
                        <i class="far fa-check-circle"></i>
                        <p>The main UI provided by the ThingsBoard PE instance in the ÖBB Azure Cloud Tenant allowed all internal stakeholders to access customized dashboards and insights tailored to their use cases.</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <section class="tb-power">
        <h2>How ThingsBoard and ThingsBoard Edge power ÖBB-Infrastruktur AG?</h2>
        <div class="block">
            <div class="text">
                <h3>Digital Twin initiative</h3>
                <p>ÖBB-Infrastruktur AG uses a Digital Twin to evaluate current conditions, make predictions, and simulate possible situations. Digital Twin is a digital representation of a physical system, in this case, the railway infrastructure. The approach requires accessing real-time asset condition data as well as time-series records. ThingsBoard acts as one major enabling technology of this initiative, offering a unified platform for IoT data ingestion, processing, visualization, and analysis:</p>
                <ul>
                    <li><p>ThingsBoard enables seamless integration of diverse IoT devices deployed via communication protocols (e.g., MQTT, CoAP, HTTP) across the rail infrastructure for real-time data collection.</p></li>
                    <li><p>ThingsBoard Edge allows on-premise data processing, keeping critical data within ÖBB’s private network and facilitates secure integration with internal systems without exposing them to the public internet as well as prevent data loss in situations of network separation between cloud and on-premise.</p></li>
                    <li><p>ThingsBoard Cloud provides powerful visualization tools through customizable dashboards, enabling internal stakeholders to monitor assets, track performance, and analyze trends.</p></li>
                    <li><p>ThingsBoard enables condition monitoring and predictive maintenance through the analysis of sensor data and environmental parameters, reducing unplanned downtime by generating alerts based on predefined thresholds and conditions.</p></li>
                    <li><p>Assessing current asset conditions ("What now?") and forecasting future developments ("What next?") based on data processed in the Digital Twin.</p></li>
                </ul>
            </div>
            <img src="/images/case-studies/digital-twin.webp" title="Digital Twin initiative" alt="Laptop" width="900" height="480">
        </div>
        <div class="block">
            <div class="text">
                <h3>Secure and resilient data flow for ÖBB-Infrastruktur AG</h3>
                <p>ThingsBoard Edge instances, strategically deployed  on-premises within ÖBB-Infrastruktur AG's infrastructure, ensure secure data flow entirely within the internal IT network, avoiding exposure to the public Internet and firewall bridging. By caching IoT data locally until a successful transmission to the ThingsBoard PE instance in the ÖBB Azure Cloud Tenant, this setup achieves:</p>
                <ul>
                    <li><p>Network Decoupling: Efficiently separates on-premises and cloud environments, reducing dependencies and potential disruptions.</p></li>
                    <li><p>Resilience to Network Issues: Maintains data integrity and operational continuity during Internet slowdowns, VPN issues, or cloud connectivity problems.</p></li>
                    <li><p>Optimized Data Flow: Allows continuous data processing even when Site2Site VPN or ExpressRoute connections experience challenges.</p></li>
                </ul>
                <p>This architecture not only enhances data security and availability but also supports real-time monitoring and predictive maintenance as part of ÖBB's Digital Twin initiative.</p>
            </div>
            <img src="/images/case-studies/secure-resilient.webp" title="Secure and resilient data flow for ÖBB-Infrastruktur AG" alt="Server" width="900" height="480">
        </div>
    </section>
    <section class="full-width-img bannerMargin">
        <img src="/images/case-studies/railway.webp" title="Railways" alt="Railways" width="1920" height="946">
    </section>
    {% include contact-us-banner.liquid linkLabel='Use cases' link='/iot-use-cases/' %}
    <section class="tb-help">
        <h2>How ThingsBoard Edge helps smart rail infrastructure management improve operations with IoT?</h2>
        <div class="block">
            <div class="text">
                <h3>Smart railway infrastructure management</h3>
                <p>ThingsBoard Edge can play a crucial role in smart railway infrastructure management. Due to specifics of edge computing, the data remains within the network, enhancing security by eliminating the need to expose internal systems to the public internet. By caching IoT data locally until a successful connection with the ThingsBoard PE instance, ThingsBoard Edge ensures both data integrity and operational continuity.</p>
            </div>
            <div class="image-container">
                <img src="/images/case-studies/status-widget.webp" title="Thingsboard status widget" alt="Thingsboard status widget" width="776" height="776">
                <img src="/images/case-studies/notification-widget.webp" title="Thingsboard notification widget" alt="Thingsboard notification widget" width="776" height="776">
            </div>
        </div>
        <div class="block">
            <div class="text">
                <h3>Real-time data and proactive scenario testing</h3>
                <p>The platform offers real-time data and time-series records allowing organizations to evaluate asset current conditions, anticipate future issues, and test different operational scenarios proactively. This capability is essential for informed decision-making and enhancing the safety, efficiency, and sustainability of railway operations.</p>
            </div>
            <div class="image-container">
                <img src="/images/case-studies/alarms-table-2.webp" title="Thingsboard alarms table widget" alt="Thingsboard alarms table widget" width="776" height="776">
                <img src="/images/case-studies/line-chart.webp" title="Thingsboard line chart widget" alt="Thingsboard line chart widget" width="776" height="776">
            </div>
        </div>
        <div class="block">
            <div class="text">
                <h3>Enabling predictive maintenance and operational efficiency</h3>
                <p>Additionally, by analyzing collected sensor data from railway assets, ThingsBoard Edge enables support for the predictive maintenance strategies, helping to reduce unplanned downtime and improve the overall efficiency of operations.</p>
            </div>
            <div class="image-container">
                <img src="/images/case-studies/value-card.webp" title="Thingsboard value card widget" alt="Thingsboard value card widget" width="776" height="776">
                <img src="/images/case-studies/entities-table-4.webp" title="Thingsboard entities table widget" alt="Thingsboard entities table widget" width="776" height="776">
            </div>
        </div>
        <div class="block">
            <div class="text">
                <h3>Centralized visualization and enhanced operational management</h3>
                <p>The ThingsBoard PE instance provides a centralized user interface in the cloud, offering customizable dashboards that enable stakeholders to visualize IoT data relevant to their specific use cases. This unified visualization capability helps improve train scheduling, capacity management, and asset utilization, directly contributing to optimized railway operations.</p>
            </div>
            <div class="image-container">
                <img src="/images/case-studies/maps-widgets.webp" title="Thingsboard maps widgets widget" alt="Thingsboard maps widgets widget" width="776" height="776">
                <img src="/images/case-studies/bar-chart.webp" title="Thingsboard bar chart widget" alt="Thingsboard bar chart widget" width="776" height="776">
            </div>
        </div>
        {% include services-banner.liquid %}
    </section>
    <section class="contact">
        <div class="bg-wrap" style="background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url(/images/case-studies/handshake.webp)">
            <div class="outer-frame">
                <div class="inner-frame">
                    <img src="/images/case-studies/thingsboard.svg" title="ThingsBoard logo" alt="ThingsBoard logo" width="298" height="56">
                    <img src="/images/case-studies/obb.svg" title="ÖBB-Infrastruktur AG" alt="ÖBB-Infrastruktur AG logo" width="91" height="56">
                </div>
            </div>
        </div>
        <p>Real stories, real impact — share your experience with ThingsBoard!</p>
        <a id="CaseStudy_OXI_ContactUs" target="_blank" href="/docs/contact-us/" class="button gtm_button">Contact us</a>
    </section>
</div>