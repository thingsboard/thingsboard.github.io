---
layout: docwithnav-mqtt-broker
title: TBMQ Roadmap
description: TBMQ upcoming releases

---

* TOC
{:toc}

The product roadmap listed below covers only main features and does not cover small improvements and bug fixes.

## Upcoming Releases

* **Externalized Client Authentication via Webhooks**
    * **Focus:** Security & Enterprise Integration
    * **Value:** This feature allows TBMQ to delegate MQTT client authentication (Client ID, Username, Password) to any external custom identity service or enterprise IAM system using a webhook call. It provides **flexible security policies** and simplifies integration with existing IT infrastructure.

* **Real-Time Client Lifecycle Event Sourcing**
    * **Focus:** Operational Monitoring & Data Pipeline
    * **Value:** Enable the broker to push all critical client lifecycle events (e.g., Connect, Disconnect, etc.) directly to external systems (via built-in TBMQ Integrations like Kafka, HTTP, etc.). This ensures **real-time operational awareness**, facilitating accurate logging, auditing, and usage/billing calculations.
