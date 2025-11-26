---
layout: docwithnav-pe-mqtt-broker
title: TBMQ Professional Edition Roadmap
description: TBMQ upcoming releases

---

* TOC
{:toc}

The product roadmap listed below covers only main features and does not cover small improvements and bug fixes.

## Upcoming Releases

All features and capabilities available in the [Community Edition](/docs/mqtt-broker/roadmap/) are included.

* **Advanced Dropped Message Tracking**
    * **Focus:** Data Integrity & Debugging
    * **Value:** Introduces detailed tracking and logging for all messages dropped by the broker (e.g., due to queue size limits, session expiry, rate limiting, or malformed packets). This provides **critical visibility** into data loss scenarios, essential for maintaining data integrity and troubleshooting high-volume deployments.

* **Enhanced MQTT Client Disconnection Tracking**
    * **Focus:** Operational Monitoring & Client Diagnostics
    * **Value:** Provides granular tracking of client disconnections, recording the reason (e.g., session expiration, clean disconnect, protocol error, keep-alive timeout) and timing. This is vital for **diagnosing client-side issues**, improving uptime, and monitoring device fleet health.

* **Expanded Third-Party Service Integrations**
    * **Focus:** Ecosystem Connectivity & Data Pipeline Flexibility
    * **Value:** Delivers new pre-built integrations with major external services (e.g., specific databases, cloud services, and enterprise applications). This accelerates development and simplifies the process of **connecting TBMQ data directly into enterprise workflows**.

* **Comprehensive Audit Logs**
    * **Focus:** Accountability & Compliance
    * **Value:** Implements detailed, immutable logging of all administrative and configuration changes made within the broker (e.g., user creations, rule modifications, credential changes). This is fundamental for **meeting regulatory compliance requirements** and maintaining a full record of operational accountability.
