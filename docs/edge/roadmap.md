---
layout: docwithnav-edge
title: ThingsBoard Edge Roadmap
description: Upcoming releases

---

* TOC
{:toc}

The product roadmap below covers only **major features** and does not include minor enhancements and bug fixes.
View active development and bug fixes for the latest release [on our GitHub repository](https://github.com/thingsboard/thingsboard-edge/tree/master){: target="_blank"}.

### Edge 4.2.0

The upcoming release will include all updates form [ThingsBoard CE](/docs/reference/roadmap/){: target="_blank"}.

The updates related to the **Edge**:

**Bugfix**
* **Edge Rule Chain:** Fixed a bug where some connections could disappear after saving the Edge Rule Chain.

**New capabilities for monitoring Downlink/Uplink communications**
* **Support for telemetry of Downlink messages:** These metrics will allow you to fully track the synchronization status between the Cloud and the Edge device via custom dashboards.

#### New telemetry keys on Edge

**Uplink:**
* **uplinkMsgsAdded:** The number of messages added to the queue.
* **uplinkMsgsPushed:** The number of messages successfully sent to the Cloud.
* **uplinkMsgsPermanentlyFailed:** The number of permanently failed messages.
* **uplinkMsgsTmpFailed:** The number of temporarily unsuccessful messages (e.g., due to network problems).
* **uplinkMsgsLag:** The number of messages remaining in the queue (lag).

**Downlink:**
* **downlinkMsgsAdded:** The number of messages added to the queue.
* **downlinkMsgsPushed:** The number of messages successfully sent to the Cloud.
* **downlinkMsgsPermanentlyFailed:** The number of permanently failed messages.
* **downlinkMsgsTmpFailed:** The number of temporarily unsuccessful messages (e.g., due to network problems).
* **downlinkMsgsLag:** The number of messages remaining in the queue (lag).
