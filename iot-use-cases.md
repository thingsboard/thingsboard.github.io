---
layout: use-case
title: IoT Use Cases
description: ThingsBoard IoT Platform use cases
notitle: "true"
contactUsModal: "true"


---

<div class="iot-use-cases-hero">
    <div class="iot-use-cases-hero-left">
        <h1 class="iot-use-cases-title">IoT Use Cases</h1>
        <div class="iot-use-cases-description">
            <p>Being robust, scalable and user friendly, ThingsBoard IoT platform supports various IoT use cases by providing flexible and powerful out-of-the-box features to cut down time to market of your connected products and smart solutions. The platform is device-agnostic, so you can feed and analyze telemetry data from any sensor, connected device or application. ThingsBoard comprehensive features and rich platform APIs allow you to save time and resources on routine IoT tasks and concentrate on specific features of your IoT solution.</p>
            <p>Some of the industry use cases where ThingsBoard is being successfully utilized are listed below. Each use case is equipped with PoC dashboard and reference solution architecture.</p>
            <p>If your use case requires additional functionality or a tailored implementation, explore our custom <a href="/services/development-services/">IoT development service.</a></p>
        </div>
    </div>
    <div class="iot-use-cases-hero-right">
        {% include contact-us-card.liquid modal="true" %}
    </div>
</div>
{% assign filters = "General,SCADA" | split: "," %}
{% include filter.html filters = filters mode = "tab" containerId = "usecase-list" %}

{% include use-cases-cards.html %}

