
* TOC
{:toc}

{% if (docsPrefix == "pe/") %}

  <div class="installation-options">
      <div class="install-options-header">
         <div class="install-options-hero">
            <div class="container">
              <div class="install-options-hero-content">
                  <h1>TBMQ Professional Edition upgrade options</h1>
              </div>
              <div class="deployment-container one-line-deployment-container">
                  <div class="deployment-div">
                      {% include installation-options-cards.liquid installationOptions="installation-options-pe-mqtt-broker-upgrade-instructions" active=true %}
                  </div>
              </div>
            </div>
         </div>
      </div>
  </div>

{% else %}

  <div class="installation-options">
      <div class="install-options-header">
         <div class="install-options-hero">
            <div class="container">
              <div class="install-options-hero-content">
                  <h1>TBMQ upgrade options</h1>
              </div>
              <div class="deployment-container one-line-deployment-container">
                  <div class="deployment-div">
                      {% include installation-options-cards.liquid installationOptions="installation-options-mqtt-broker-upgrade-instructions" active=true %}
                  </div>
              </div>
            </div>
         </div>
      </div>
  </div>

{% endif %}

{% if docsPrefix == "pe/" %}

### Upgrade from TBMQ CE to TBMQ PE (v2.2.0)

{% capture difference %}
**NOTE**:
<br>
These steps are applicable for 2.2.0 TBMQ CE version. In order to upgrade to TBMQ PE 2.2.0 you need to [upgrade to 2.2.0 TBMQ CE first](/docs/mqtt-broker/install/upgrade-instructions/#upgrading-to-220).
**Notice the Bitnami Images information.**
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### Notice: Third-Party Component Updates in TBMQ PE v2.2.0

We’d like to inform you about several **third-party component updates** introduced in **TBMQ Professional Edition (PE) v2.2.0** compared to the Community Edition (CE).
These changes improve performance, stability, and align TBMQ with officially supported open-source technologies.

These updates follow the modernization plan outlined here:
[Bitnami Image Migration](https://github.com/thingsboard/thingsboard-ce-k8s/blob/master/BITNAMI-IMAGE-MIGRATION.md#3-long-term-production-solution).

#### What’s Changed

| Component          | TBMQ CE v2.2.0              | TBMQ PE v2.2.0       | What Changed & Why                                                                                                                                                                                                                                                      |
| ------------------ | --------------------------- | -------------------- |-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **PostgreSQL**     | `postgres:16`               | `postgres:17`        | Upgraded to a newer major version with improved performance, reliability, and better resource efficiency. Existing data volumes remain fully compatible.                                                                                                                |
| **Kafka**          | `bitnamilegacy/kafka:3.7.0` | `apache/kafka:4.0.0` | Updated according to the plan to migrate from Bitnami to official open-source images. New volumes were introduced and all of them are mapped to new paths required by the Apache Kafka image.                                                                           |
| **Redis → Valkey** | `bitnamilegacy/redis:7.2.5` | `valkey/valkey:8.0`  | Updated according to the plan to migrate from Bitnami to open-source images. Redis was replaced by Valkey (a community-driven fork of Redis 7). A new volume (`tbmq-valkey-data`) was introduced and mapped to the appropriate data directory used by the Valkey image. |

#### Important Notes

Upgrading from TBMQ CE 2.2.0 to TBMQ PE 2.2.0 introduces several component changes that require attention before and during the migration process.

Before starting the upgrade, it is **strongly recommended to create full backups** of your existing environment.
This includes the **PostgreSQL database** (for example, using `pg_dump`), as well as your **Kafka** and **Redis** data volumes if you plan to migrate them.
Backups ensure that your environment can be safely restored in case of configuration or compatibility issues during the upgrade.

The PostgreSQL version is upgraded from **16 to 17**, providing improved performance, reliability, and resource efficiency.
Although existing data volumes remain compatible, you still need to perform a proper database version upgrade (for example, using `pg_upgrade`)
to ensure data integrity and full compatibility with the new version.

Both Kafka and Redis have been migrated from Bitnami images to official open-source ones — **Apache Kafka** and **Valkey**, respectively.
This migration is part of the long-term modernization plan to move away from Bitnami images.
Along with this change, **Kafka was upgraded from version 3.7.0 to 4.0.0**, introducing improvements in performance, scalability, and message handling efficiency.
The new images use **different internal data directories and volume mappings**, so existing Bitnami volumes cannot be reused directly.
You must either **migrate your Kafka and Redis data manually** or **start from new, empty volumes**.
> **⚠️ Be cautious:** starting from new volumes will remove all data currently stored in Kafka and Redis, including client session states, undelivered and retained messages, and any other persisted broker data.

The standard upgrade script focuses only on updating the PostgreSQL database schema and does not include data migration logic for Kafka or Valkey.

{% capture difference %}
**NOTE:** You may [contact us](/docs/pe/mqtt-broker/help/) if you require additional guidance for the migration. While we do not provide direct or fully managed migration assistance, we can offer general recommendations and insights to help facilitate a smoother upgrade experience.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

---

Navigate to the appropriate documentation to proceed with the next upgrade steps by [choosing one of the cards](/docs/{{docsPrefix}}mqtt-broker/install/upgrade-instructions/)
on top of the page.

{% else %}

{% if docsPrefix != 'pe/' %}
{% capture difference %}
Interested in the **TBMQ Professional Edition**? Upgrade your TBMQ CE to [TBMQ PE](/docs/pe/mqtt-broker/install/upgrade-instructions/){:target="_blank"}.
{% endcapture %}
{% include templates/info-banner.md content=difference %}
{% endif %}

### Upgrading to 2.2.0

{% capture difference %}
**NOTE**:
<br>
These steps are applicable for 2.1.0 TBMQ version. In order to upgrade to 2.2.0 you need to [upgrade to 2.1.0 first](#upgrading-to-210).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### Notice About Bitnami Images in TBMQ Deployments

In our TBMQ deployments, we use **Bitnami images** for third-party components such as PostgreSQL, Redis, and Kafka. 
The Bitnami team [**has announced important upcoming changes**](https://github.com/bitnami/charts/issues/35164) to their catalog that affect these images.

**What’s happening:**

* Starting **August 28, 2025**, the public `docker.io/bitnami` registry will only provide a small set of “latest” hardened images for development use.
* All versioned images will be moved to a temporary legacy registry: `docker.io/bitnamilegacy`. These images will remain available but will not receive updates or security patches.
* The long-term, supported solution is Bitnami’s new Secure Images (subscription-based).

**Temporary solution:**
To avoid disruption in your TBMQ deployments, please update your image references from `docker.io/bitnami/...` to `docker.io/bitnamilegacy/...`.
This ensures that your clusters continue to work after August 28, 2025.

**Next steps:**
We are currently evaluating a **long-term strategy** for TBMQ third-party images. We’ll share the details once the new approach is finalized.

---

Navigate to the appropriate documentation to proceed with the next upgrade steps by [choosing one of the cards](/docs/{{docsPrefix}}mqtt-broker/install/upgrade-instructions/)
on top of the page.

### Upgrading to 2.1.0

{% capture difference %}
**NOTE**:
<br>
These steps are applicable for 2.0.0 and 2.0.1 TBMQ versions.
In order to upgrade to 2.1.0, your current version should be greater or equal to 2.0.0 version.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### Pull TBMQ image (Optional)

Pull 2.1.0 version TBMQ image depending on your current installation.

{% capture tabspec %}tbmq-pull-2-1-0
tbmq-pull-2-1-0-single,Single node,shell,resources/2.1.0/tbmq-single-node-pull.sh,/docs/{{docsPrefix}}mqtt-broker/install/resources/2.1.0/tbmq-single-node-pull.sh
tbmq-pull-2-1-0-cluster,Cluster mode,shell,resources/2.1.0/tbmq-cluster-mode-pull.sh,/docs/{{docsPrefix}}mqtt-broker/install/resources/2.1.0/tbmq-cluster-mode-pull.sh{% endcapture %}
{% include tabs.html %}

#### From version (automatically detected since 2.1.0)

Starting from version 2.1.0, the _fromVersion_ parameter has been removed from the upgrade script and is no longer supported.
As of 2.1.0, the upgrade script automatically detects the currently installed version and determines whether the upgrade can proceed based on a predefined list of supported versions.

Navigate to the appropriate documentation to proceed with the next upgrade steps by [choosing one of the cards](/docs/{{docsPrefix}}mqtt-broker/install/upgrade-instructions/)
on top of the page.

### Upgrading to 2.0.1

{% capture difference %}
**NOTE**:
<br>
These steps are applicable for 2.0.0 TBMQ version. In order to upgrade to 2.0.1 you need to [upgrade to 2.0.0 first](#upgrading-to-200).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### Pull TBMQ image (Optional)

Pull 2.0.1 version TBMQ image depending on your current installation.

{% capture tabspec %}tbmq-pull-2-0-1
tbmq-pull-2-0-1-single,Single node,shell,resources/2.0.1/tbmq-single-node-pull.sh,/docs/{{docsPrefix}}mqtt-broker/install/resources/2.0.1/tbmq-single-node-pull.sh
tbmq-pull-2-0-1-cluster,Cluster mode,shell,resources/2.0.1/tbmq-cluster-mode-pull.sh,/docs/{{docsPrefix}}mqtt-broker/install/resources/2.0.1/tbmq-cluster-mode-pull.sh{% endcapture %}
{% include tabs.html %}

#### From version

The _fromVersion_ should be set to **2.0.0**.

Navigate to the appropriate documentation to proceed with the next upgrade steps by [choosing one of the cards](/docs/{{docsPrefix}}mqtt-broker/install/upgrade-instructions/)
on top of the page.

### Upgrading to 2.0.0

{% capture difference %}
**NOTE**:
<br>
These steps are applicable for 1.4.0 TBMQ version. In order to upgrade to 2.0.0 you need to [upgrade to 1.4.0 first](#upgrading-to-140).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

This release of TBMQ introduces significant improvements, including key new features and a migration from PostgreSQL to Redis for storing messages for persistent DEVICE clients. 
For more details, refer to the [architecture documentation](/docs/{{docsPrefix}}mqtt-broker/architecture/).

Before upgrading, it is strongly recommended to back up your PostgreSQL database to ensure data safety. 
Follow the steps by selecting an appropriate guide from [one of the cards](/docs/{{docsPrefix}}mqtt-broker/install/upgrade-instructions/) on top of the page.

#### Pull TBMQ image (Optional)

Pull 2.0.0 version TBMQ image depending on your current installation.

{% capture tabspec %}tbmq-pull-2-0-0
tbmq-pull-2-0-0-single,Single node,shell,resources/2.0.0/tbmq-single-node-pull.sh,/docs/{{docsPrefix}}mqtt-broker/install/resources/2.0.0/tbmq-single-node-pull.sh
tbmq-pull-2-0-0-cluster,Cluster mode,shell,resources/2.0.0/tbmq-cluster-mode-pull.sh,/docs/{{docsPrefix}}mqtt-broker/install/resources/2.0.0/tbmq-cluster-mode-pull.sh{% endcapture %}
{% include tabs.html %}

#### From version

The _fromVersion_ should be set to **1.4.0**.

Navigate to the appropriate documentation to proceed with the next upgrade steps by [choosing one of the cards](/docs/{{docsPrefix}}mqtt-broker/install/upgrade-instructions/)
on top of the page.

### Upgrading to 1.4.0

{% capture difference %}
**NOTE**:
<br>
These steps are applicable for 1.3.0 TBMQ version. In order to upgrade to 1.4.0 you need to [upgrade to 1.3.0 first](#upgrading-to-130).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### Pull TBMQ image (Optional)

Pull 1.4.0 version TBMQ image depending on your current installation.

{% capture tabspec %}tbmq-pull-1-4-0
tbmq-pull-1-4-0-single,Single node,shell,resources/1.4.0/tbmq-single-node-pull.sh,/docs/{{docsPrefix}}mqtt-broker/install/resources/1.4.0/tbmq-single-node-pull.sh
tbmq-pull-1-4-0-cluster,Cluster mode,shell,resources/1.4.0/tbmq-cluster-mode-pull.sh,/docs/{{docsPrefix}}mqtt-broker/install/resources/1.4.0/tbmq-cluster-mode-pull.sh{% endcapture %}
{% include tabs.html %}

#### From version

The _fromVersion_ should be set to **1.3.0**.

Navigate to the appropriate documentation to proceed with the next upgrade steps by [choosing one of the cards](/docs/{{docsPrefix}}mqtt-broker/install/upgrade-instructions/)
on top of the page.

### Upgrading to 1.3.0

{% capture difference %}
**NOTE**:
<br>
These steps are applicable for 1.2.1 TBMQ version. In order to upgrade to 1.3.0 you need to [upgrade to 1.2.1 first](#upgrading-to-121).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### Pull TBMQ image (Optional)

Pull 1.3.0 version TBMQ image depending on your current installation.

{% capture tabspec %}tbmq-pull-1-3-0
tbmq-pull-1-3-0-single,Single node,shell,resources/1.3.0/tbmq-single-node-pull.sh,/docs/{{docsPrefix}}mqtt-broker/install/resources/1.3.0/tbmq-single-node-pull.sh
tbmq-pull-1-3-0-cluster,Cluster mode,shell,resources/1.3.0/tbmq-cluster-mode-pull.sh,/docs/{{docsPrefix}}mqtt-broker/install/resources/1.3.0/tbmq-cluster-mode-pull.sh{% endcapture %}
{% include tabs.html %}

#### From version

The _fromVersion_ should be set to **1.2.1**.

Navigate to the appropriate documentation to proceed with the next upgrade steps by [choosing one of the cards](/docs/{{docsPrefix}}mqtt-broker/install/upgrade-instructions/)
on top of the page.

### Upgrading to 1.2.1

{% capture difference %}
**NOTE**:
<br>
These steps are applicable for 1.2.0 TBMQ version. In order to upgrade to 1.2.1 you need to [upgrade to 1.2.0 first](#upgrading-to-120).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### Pull TBMQ image (Optional)

Pull 1.2.1 version TBMQ image depending on your current installation.

{% capture tabspec %}tbmq-pull-1-2-1
tbmq-pull-1-2-1-single,Single node,shell,resources/1.2.1/tbmq-single-node-pull.sh,/docs/{{docsPrefix}}mqtt-broker/install/resources/1.2.1/tbmq-single-node-pull.sh
tbmq-pull-1-2-1-cluster,Cluster mode,shell,resources/1.2.1/tbmq-cluster-mode-pull.sh,/docs/{{docsPrefix}}mqtt-broker/install/resources/1.2.1/tbmq-cluster-mode-pull.sh{% endcapture %}
{% include tabs.html %}

#### From version

The _fromVersion_ should be set to **1.2.0**.

Navigate to the appropriate documentation to proceed with the next upgrade steps by [choosing one of the cards](/docs/{{docsPrefix}}mqtt-broker/install/upgrade-instructions/)
on top of the page.

### Upgrading to 1.2.0

{% capture difference %}
**NOTE**:
<br>
These steps are applicable for 1.1.0 TBMQ version. In order to upgrade to 1.2.0 you need to [upgrade to 1.1.0 first](#upgrading-to-110).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### Pull TBMQ image (Optional)

Pull 1.2.0 version TBMQ image depending on your current installation.

{% capture tabspec %}tbmq-pull-1-2-0
tbmq-pull-1-2-0-single,Single node,shell,resources/1.2.0/tbmq-single-node-pull.sh,/docs/{{docsPrefix}}mqtt-broker/install/resources/1.2.0/tbmq-single-node-pull.sh
tbmq-pull-1-2-0-cluster,Cluster mode,shell,resources/1.2.0/tbmq-cluster-mode-pull.sh,/docs/{{docsPrefix}}mqtt-broker/install/resources/1.2.0/tbmq-cluster-mode-pull.sh{% endcapture %}
{% include tabs.html %}

#### From version

The _fromVersion_ should be set to **1.1.0**.

Navigate to the appropriate documentation to proceed with the next upgrade steps by [choosing one of the cards](/docs/{{docsPrefix}}mqtt-broker/install/upgrade-instructions/)
on top of the page.

### Upgrading to 1.1.0

{% capture difference %}
**NOTE**:
<br>
These steps are applicable for 1.0.0, and 1.0.1 TBMQ versions.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

#### Pull TBMQ image (Optional)

Pull 1.1.0 version TBMQ image depending on your current installation.

{% capture tabspec %}tbmq-pull-1-1-0
tbmq-pull-1-1-0-single,Single node,shell,resources/1.1.0/tbmq-single-node-pull.sh,/docs/{{docsPrefix}}mqtt-broker/install/resources/1.1.0/tbmq-single-node-pull.sh
tbmq-pull-1-1-0-cluster,Cluster mode,shell,resources/1.1.0/tbmq-cluster-mode-pull.sh,/docs/{{docsPrefix}}mqtt-broker/install/resources/1.1.0/tbmq-cluster-mode-pull.sh{% endcapture %}
{% include tabs.html %}

#### From version

The _fromVersion_ can be set to either **1.0.0** or **1.0.1** values.

Navigate to the appropriate documentation to proceed with the next upgrade steps by [choosing one of the cards](/docs/{{docsPrefix}}mqtt-broker/install/upgrade-instructions/)
on top of the page.

{% endif %}

### Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/mqtt-broker-guides-banner.md %}
