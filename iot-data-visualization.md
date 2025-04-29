---
layout: iot-data-visualization
title: IoT Data Visualization with Widgets, SCADA & Dashboards
notitle: "true"
description: Explore powerful IoT data visualization with ThingsBoard. Build interactive dashboards using charts, graphs, SCADA widgets, and control elements. Leverage states and responsive layouts for real-time monitoring, enhanced UX, decision-making, and industrial process optimization.
---

<div class="visualization-wrapper">
    <section class="visualization-hero">
        <div class="title">
            <h1>IoT data visualization</h1>
            <p>Create interactive dashboards that turn raw IoT data into actionable intelligence.</p>
            <a id="visualization_startFree" target="_blank" href="/installations/" class="button gtm_button">Try it now</a>
        </div>
        <div class="images">
            <div class="circle-bg"></div>
            <img src="/images/visualization/bar-chart.svg" class="visualization-hero-image" alt="Thingsboard dashboards and menus">
            <img src="/images/visualization/cold_water_usage.webp" class="visualization-hero-image-2" alt="Cold water usage value-chart card">
            <img src="/images/visualization/route_history.webp" class="visualization-hero-image-3" alt="Trip animation map">
            <img src="/images/visualization/moisture_himidity.webp" class="visualization-hero-image-4" alt="Moisture and humidity line chart">
            <img src="/images/visualization/energy_sources.webp" class="visualization-hero-image-5" alt="Energy source pie chart">
            <img src="/images/visualization/slider.webp" class="visualization-hero-image-6" alt="Slider widget">
        </div>
    </section>
    <section class="visualization-definition">
        <div class="title">
            <h2>What is data visualization in IoT?</h2>
            <p>IoT Data visualization is the process of turning raw device data into visual formats like charts, graphs, and gauges to help users quickly understand patterns and trends. In ThingsBoard, you can create real-time dashboards using a variety of widgets—charts, tables, SCADA symbols, and more—for monitoring and control. Dashboards support responsive layouts, navigation flows, and can be easily shared with customers.</p>
        </div>
        <img data-src="/images/visualization/visualization-scheme.svg" src="/images/visualization/visualization-scheme.svg" class="svg-animation" alt="Visualization scheme">
    </section>
    <section class="visualization-implementation">
        <h2>How data visualization is implemented in ThingsBoard</h2>
        <div class="block">
            <div class="title">
                <h3>Widgets</h3>
                <p>A widget is a dashboard element that displays specific information or provides functionality. Widgets can show static, latest, or historical device data, enable remote control, and support alarm monitoring and management.</p>
            </div>
            <div class="row">
                <div class="card">
                    <div class="image-container">
                        <img class="svg-animation" data-src="/images/visualization/cards.svg" src="/images/visualization/cards.svg" alt="Card widgets">
                    </div>
                    <div class="content">
                        <h4>Cards</h4>
                        <p>The Cards bundle is useful for visualization of time series data or attributes in table or card widgets.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="image-container">
                        <img class="svg-animation" data-src="/images/visualization/charts.svg" src="/images/visualization/charts.svg" alt="Charts widgets">
                    </div>
                    <div class="content">
                        <h4>Charts</h4>
                        <p>The Charts bundle is useful for visualization of historical or real-time data with a time window.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="card">
                    <div class="image-container">
                        <img class="svg-animation" data-src="/images/visualization/control.svg" src="/images/visualization/control.svg" alt="Control and status widgets">
                    </div>
                    <div class="content">
                        <h4>Control & Status widgets</h4>
                        <p>The Control & Status widgets bundle is useful for visualization of the current state and sending RPC commands to target devices, battery level, signal strength, and progress bar.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="image-container">
                        <img class="svg-animation" data-src="/images/visualization/gauges.svg" src="/images/visualization/gauges.svg" alt="Gauges widgets">
                    </div>
                    <div class="content">
                        <h4>Gauges</h4>
                        <p>The Gauges bundles are useful for visualization of temperature, humidity, speed and other integer or float values.</p>
                    </div>
                </div>
            </div>
            <div class="block-link">
                <a href="/docs/user-guide/widgets/">Read more <i class="fas fa-chevron-right fa-md"></i></a>
            </div>
        </div>
        <div class="block">
            <div class="title">
                <h3>SCADA dashboards</h3>
                <p>SCADA refers to an architecture used to monitor and control various machines and manufacturing processes. ThingsBoard provides comprehensive tools to collect, process, and visualize data from SCADA components, such as PLCs (Programmable Logic Controllers) and RCUs (Remote Control Units), enabling seamless integration with various industrial processes.</p>
            </div>
            <div class="row">
                <div class="card">
                    <div class="image-container">
                        <img class="svg-animation" data-src="/images/visualization/SCADA-high-perf-section.svg" src="/images/visualization/SCADA-high-perf-section.svg" alt="SCADA high performance widgets">
                    </div>
                    <div class="content">
                        <h4>High-performance</h4>
                        <p>High-performance SCADA symbols simplified, minimalist approach, which focuses on basic monitoring and control.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="image-container">
                        <img class="svg-animation" data-src="/images/visualization/SCADA-traditional-section.svg" src="/images/visualization/SCADA-traditional-section.svg" alt="SCADA traditional widgets">
                    </div>
                    <div class="content">
                        <h4>Traditional</h4>
                        <p>Traditional SCADA symbols has dynamic, visually engaging and interactive design  for emphasizing streamlined interfaces, faster decision-making, and enhanced operational efficiency.</p>
                    </div>
                </div>
            </div>
            <div class="block-link">
                <a href="/docs/user-guide/scada/">Read more <i class="fas fa-chevron-right fa-md"></i></a>
            </div>
        </div>
        <div class="block">
            <div class="title">
                <h3>Solution templates</h3>
                <p>ThingsBoard provides convenient IoT solution templates to reduce time-to-market for your IoT products. The template includes interactive dashboards, processing logic, sample devices, users and all other required entities. You can treat template as a complete PoC/MVP.</p>
            </div>
            <div class="row">
                <div class="card">
                    <div class="image-container solution-template">
                        <img src="/images/visualization/placeholder.png" alt="placeholder">
                        <img class="al1" src="/images/visualization/assisted-living-1.webp" alt="Assisted living widgets">
                        <img class="al2" src="/images/visualization/assisted-living-2.webp" alt="Assisted living widgets">
                    </div>
                    <div class="content">
                        <h4>Health care</h4>
                        <p>ThingsBoard is an IoT platform with all the tools needed to build a comprehensive healthcare monitoring and management solution with ease. ThingsBoard provides an extensive range of built-in features as well as flexible customization options.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="image-container solution-template">
                        <img src="/images/visualization/placeholder.png" alt="placeholder">
                        <img class="d1" src="/images/visualization/energy_1.webp" alt="Energy SCADA widgets">
                        <img class="d2" src="/images/visualization/energy_2.webp" alt="Energy SCADA widgets">
                    </div>
                    <div class="content">
                        <h4>SCADA Energy management</h4>
                        <p>The use of SCADA systems enables businesses to monitor energy generation, distribution, and consumption in real time, optimize energy efficiency, reduce costs, and enhance system reliability with ThingsBoard IoT platform.</p>
                    </div>
                </div>
            </div>
            <div class="block-link">
                <a href="/iot-use-cases/">Read more <i class="fas fa-chevron-right fa-md"></i></a>
            </div>
        </div>
        <div class="block">
            <div class="title">
                <h3>States & Layouts</h3>
                <p>Allow you to organize dashboards into multiple views and arrange widgets efficiently for better user experience. States enable navigation between different dashboard screens, while layouts define responsive positioning and sizing of widgets across devices. Together, they help build structured, user-friendly, and adaptive interfaces.</p>
            </div>
            <div class="row no-margin">
                <div class="card image-only">
                    <div class="image-container layouts no-border">
                        <img src="/images/visualization/placeholder.png" alt="placeholder">
                        <img class="layout1 large" src="/images/visualization/layouts_macbook.webp" alt="Macbook layout">
                        <img class="layout2 large" src="/images/visualization/layouts_iphone.webp" alt="iPhone layout">
                        <img class="layout3 large" src="/images/visualization/layouts_ipad.webp" alt="iPad layout">
                        <img class="layout small" src="/images/visualization/layouts_image.webp" alt="Layouts">
                    </div>
                </div>
            </div>
            <div class="row no-margin">
                <div class="card">
                    <div class="content">
                        <h4><a href="/docs/user-guide/dashboards/#states">States</a></h4>
                        <p>States in ThingsBoard dashboards allow you to create multi-view dashboards where each state represents a separate screen or context, such as a detailed device view or a summary panel. You can define navigation rules and pass parameters between states to build dynamic, context-aware user flows.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="content">
                        <h4><a href="/docs/user-guide/ui/layouts/">Layouts</a></h4>
                        <p>Layouts define how widgets are arranged and displayed within each dashboard state, supporting responsive design for different screen sizes. ThingsBoard supports grid and fixed layouts, allowing you to control widget size, position, and behavior for desktop, tablet, and mobile views.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="block">
            <div class="title">
                <h3>Dashboards</h3>
                <p>Dashboards in ThingsBoard are flexible visualization tools that allow users to monitor, control, and interact with IoT data in real time. They support assigning dashboards to specific customers or sharing them directly with individual users, enabling secure, role-based access and collaboration across different stakeholders. With dynamic data sources, SCADA-like controls, custom widgets, and responsive layouts, dashboards offer a customizable interface for building industrial-grade monitoring and control systems.</p>
            </div>
            <div class="row no-margin">
                <div class="card image-only">
                    <div class="image-container customers no-border">
                        <img src="/images/visualization/placeholder.png" alt="placeholder">
                        <img class="customerA" src="/images/visualization/customer_a.webp" alt="Customer A dashboard">
                        <img class="customerB" src="/images/visualization/customer_b.webp" alt="Customer B dashboard">
                        <img class="customerC" src="/images/visualization/customer_c.webp" alt="Customer C dashboard">
                    </div>
                </div>
            </div>
            <div class="row no-margin">
                <div class="card">
                    <div class="content">
                        <h4><a href="/docs/getting-started-guides/helloworld/#step-7-assign-device-and-dashboard-to-customer">In ThingsBoard Community Edition</a></h4>
                        <p>You assign dashboards to a customer, granting their users read-only access to the data that belongs to their devices and assets.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="content">
                        <h4><a href="/docs/getting-started-guides/helloworld-pe/#step-7-share-dashboard-with-customers">In ThingsBoard Professional Edition</a></h4>
                        <p>You can fully control access to dashboards with advanced RBAC and white labeling—enabling flexible, secure, and branded data visualization for your customers.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="block">
            <div class="title">
                <h3>Custom widgets & Actions</h3>
                <p>Custom widgets & actions enable you to extend visualization capabilities by creating your own widgets and configuring user actions. You can develop unique UI elements and define behaviors for clicks, hovers, and other events to ensure interactivity and tailor the interface to specific needs.</p>
            </div>
            <div class="row no-margin">
                <div class="card image-only">
                    <div class="image-container custom no-border">
                        <img class="left" src="/images/visualization/left_img.webp" alt="Person on image map widget">
                        <img class="arrow" src="/images/visualization/arrow.svg" alt="Arrow">
                        <img class="right" src="/images/visualization/guest_info.webp" alt="Person information widget">
                    </div>
                </div>
            </div>
            <div class="row no-margin">
                <div class="card">
                    <div class="content">
                        <h4><a href="/docs/user-guide/contribution/widgets-development/">Custom Widget Development</a></h4>
                        <p>Custom widget development enables you to build and contribute your own widgets with custom logic, visuals, and configuration options. This gives full control over the look and functionality of dashboard elements.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="content">
                        <h4><a href="/docs/user-guide/ui/widget-actions/">Actions</a></h4>
                        <p>Widget actions allow you to define interactive behaviors like navigation, RPC calls, and custom scripts triggered by user events. This empowers users to create responsive and dynamic dashboards tailored to real-time needs.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="widgets">
        <div class="widgets-slide">
            <img src="/images/visualization/widgets_part.webp" alt="Thingsboard widgets">
        </div>
        <div class="widgets-slide">
            <img src="/images/visualization/widgets_part.webp" alt="Thingsboard widgets">
        </div>
    </section>
    <section class="visualize-with-tb">
        <h2>Visualize your data with ThingsBoard!</h2>
        <a id="visualization_startFree" target="_blank" href="/pricing/" class="button gtm_button">Try it now</a>
    </section>
</div>