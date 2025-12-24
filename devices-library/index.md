---
layout: page-with-filter
title: ThingsBoard Devices Library
description: Device library and connecting guides
containerId: "devices-card-collection"
filterSelector: ".pagination-render-trigger"
itemsSelector: ".card"
itemsPerPage: "18"
searchControl: "#searchCompanyInput"
customTitle: "true"
not-found: "No devices have been found..."

filterCollection:
  - label: Platform
    selectPlatfrom: true
    filters:
      - label: Community Edition
        platform: ce
      - label: Professional Edition
        platform: pe
      - label: Cloud
        platform: paas
      - label: Edge
        platform: edge
      - label: Edge Professional Edition
        platform: pe-edge
  - label: Hardware types
    filters:
      - Microcontrollers
      - Single-board computers
      - Gateways
      - Sensors
      - Trackers
      - Other devices
  - label: Connectivity
    filters:
      - HTTP
      - MQTT
      - WIFI
      - Bluetooth
      - BLE
      - Ethernet
      - GSM
      - GPRS
      - GPS
      - LoRaWAN
      - 4G
      - LTE
      - Zigbee
      - LAN
      - WAN
      - SIGFOX
      - 5G
      - KNX
      - NB-IoT
      - LTE-M
      - DigiMesh
      - BACnet
      - RS-485
      - UDP
      - 3G
      - CoAP
      - MODBUS TCP
      - HTTPS
  - label: Industry
    filters:
      - Industrial Manufacturing
      - Security
      - Smart Buildings
      - Environmental Monitoring
      - Smart Cities
      - Transportation & Logistics
      - Retail
      - Healthcare
      - Energy Management
      - Agriculture
  - label: Use cases
    filters:
      - Smart energy
      - Environment Monitoring
      - Smart Office
      - Smart Retail
      - Smart Farming
      - Fleet Tracking
      - Health Care
      - Air Quality Monitoring
      - Waste Management
      - Tank Level Monitoring
      - Smart Metering
      - Smart Irrigation
      - Water Metering
---


<div class="devices-hero">
    <div class="devices-wrapper">
        <div class="devices-hero-text">
            <h1>Welcome to the ThingsBoard Devices Library!</h1>
            <p>The Devices Library is a collection of guides and code snippets that explain how to connect popular IoT development boards to the ThingsBoard platform. We intentionally concentrate on the code snippets for programmable devices to boost the productivity of the firmware engineers. Device Library is a constantly extending resource. We encourage our community members to <a href="/devices-library/guidelines/">contribute</a>.</p>
        </div>
        <div class="devices-hero-banner">
            <p>Wish to integrate existing sensors?</p>
            <a href="/docs/getting-started-guides/connectivity/">See instruction</a>
            <img src="/images/devices-library-icon.svg" width="210" height="210" alt="Hardware partner icon">
        </div>
    </div>
</div>