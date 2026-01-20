---
layout: docwithnav-pe-mqtt-broker
title: TBMQ Professional Edition Release Notes
description: TBMQ Professional Edition Releases

---

* TOC
{:toc}

## v2.2.0 (January 20, 2026) {#v220PE}

This release includes all features, improvements, and bug fixes from [TBMQ CE v2.2](/docs/mqtt-broker/releases/#v220-september-1-2025), along with the following Professional Edition exclusive updates:

**Main Features**

* **Single Sign-On / OAuth 2.0:**
  * Enable seamless integration with corporate identity providers (IdPs) via Single Sign-On (SSO) and the OAuth 2.0 framework. This centralizes user management, enforces strong authentication, and improves the overall security posture for TBMQ users and administrators.
* **Role-Based Access Control (RBAC):**
  * Introduce a robust RBAC system allowing administrators to define fine-grained access permissions based on roles. This ensures users only have access to the specific administrative functions and resources necessary for their job, which is crucial for compliance and security segmentation.
* **White Labeling (Custom Branding):**
  * Provide the ability to fully customize the TBMQ user interface (UI) with custom logos, color schemes, and branding elements. This allows partners and enterprise users to integrate the broker management UI seamlessly into their own product ecosystem.

**Core System and Operational Improvements**

* **Security and Performance:**
  * Vulnerability fixes across core services and deployment scripts.
  * Significant memory and performance optimizations to enhance throughput and reduce operational costs.
* **Modernized System Dependencies:**
  * Upgraded core components to the latest stable versions, including **Apache Kafka 4.0**, **Valkey 8.0**, and **PostgreSQL 17**. This ensures long-term stability and access to the latest performance enhancements.
* **Advanced Networking Control:**
  * Introduced the ability to **control the Proxy Protocol configuration independently for each MQTT listener** (TCP, TLS, WS, WSS). This offers greater flexibility in complex networking environments and load-balancer setups.
* **Flexible Certificate Authentication:**
  * Added support to use the **Common Name (CN) placeholder** for X.509 Certificate Chain credentials within authentication rules. This simplifies the creation of dynamic, certificate-based authentication policies.
* **Authentication Reliability Fix:**
  * Resolved a validation bug in the JWT authentication provider when switching between PEM and JWKS (JSON Web Key Set) formats, ensuring stable authentication across dynamic key rotation setups.
