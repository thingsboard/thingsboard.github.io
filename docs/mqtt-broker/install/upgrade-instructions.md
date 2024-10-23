---
layout: docwithnav-mqtt-broker
title: Upgrade instructions
description: TBMQ upgrade instructions
notitle: "true"
---

* TOC
{:toc}

<div class="installation-options">
    <div class="install-options-header">
       <div class="install-options-hero">
          <div class="container">
            <div class="install-options-hero-content">
                <h1>TBMQ upgrade options</h1>
            </div>
            <div class="deployment-container one-line-deployment-container">
                <div class="deployment-div">
                    <div class="container">
                        <div class="deployment-section deployment-on-premise active" id="onPremise">
                           <div class="deployment-cards">
                                <div class="deployment-cards-container">
                                    <div class="deployment-card-block">
                                        <a href="/docs/mqtt-broker/install/docker/#upgrading">
                                            <span>
                                                <div class="deployment-logo">
                                                    <img width="" src="/images/install/platform/docker-linux-macos.svg" title="Docker (Linux or Mac OS)" alt="Docker (Linux or Mac OS)">
                                                 </div>
                                            </span>
                                        </a>
                                    </div>
                                    <div class="deployment-card-block">
                                        <a href="/docs/mqtt-broker/install/docker-windows/#upgrading">
                                            <span>
                                                <div class="deployment-logo">
                                                    <img width="" src="/images/install/platform/docker-windows.svg" title="Docker (Windows)" alt="Docker (Windows)">
                                                 </div>
                                            </span>
                                        </a>
                                    </div>
                                    <div class="deployment-card-block">
                                        <a href="/docs/mqtt-broker/install/cluster/docker-compose-setup/#upgrading">
                                            <span>
                                                <div class="deployment-logo">
                                                    <img width="" src="/images/install/cluster/docker-compose.svg" title="Cluster setup with Docker Compose" alt="Cluster setup with Docker Compose">
                                                 </div>
                                            </span>
                                        </a>
                                    </div>
                                    <div class="deployment-card-block">
                                        <a href="/docs/mqtt-broker/install/cluster/minikube-cluster-setup/#upgrading">
                                            <span>
                                                <div class="deployment-logo">
                                                    <img width="" src="/images/install/cluster/minikube.svg" title="Cluster setup with Minikube" alt="Cluster setup with Minikube">
                                                 </div>
                                            </span>
                                        </a>
                                    </div>
                                    <div class="deployment-card-block">
                                        <a href="/docs/mqtt-broker/install/cluster/aws-cluster-setup/#upgrading">
                                            <span>
                                                <div class="deployment-logo">
                                                    <img width="" src="/images/install/cloud/eks.svg" title="Cluster setup on EKS" alt="AWS K8S cluster">
                                                 </div>
                                            </span>
                                        </a>
                                    </div>
                                    <div class="deployment-card-block">
                                        <a href="/docs/mqtt-broker/install/cluster/azure-cluster-setup/#upgrading">
                                            <span>
                                                <div class="deployment-logo">
                                                    <img width="" src="/images/install/cloud/azure.svg" title="Cluster setup on AKS" alt="Azure K8S cluster">
                                                 </div>
                                            </span>
                                        </a>
                                    </div>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
       </div>
    </div>
</div>

### Upgrading to 2.0.0

{% capture difference %}
**NOTE**:
<br>
These steps are applicable for 1.4.0 TBMQ version. In order to upgrade to 2.0.0 you need to [upgrade to 1.4.0 first](#upgrading-to-140).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

This release of TBMQ introduces significant improvements, including key new features and a migration from PostgreSQL to Redis for storing messages for persistent DEVICE clients. 
For more details, refer to the [architecture documentation](/docs/mqtt-broker/architecture/).

Before upgrading, it is strongly recommended to back up your PostgreSQL database to ensure data safety. 
Follow the steps by selecting an appropriate guide from [one of the cards](/docs/mqtt-broker/install/upgrade-instructions/) on top of the page.

#### Pull TBMQ image (Optional)

Pull 2.0.0 version TBMQ image depending on your current installation.

{% capture tabspec %}tbmq-pull-2-0-0
tbmq-pull-2-0-0-single,Single node,shell,resources/2.0.0/tbmq-single-node-pull.sh,/docs/mqtt-broker/install/resources/2.0.0/tbmq-single-node-pull.sh
tbmq-pull-2-0-0-cluster,Cluster mode,shell,resources/2.0.0/tbmq-cluster-mode-pull.sh,/docs/mqtt-broker/install/resources/2.0.0/tbmq-cluster-mode-pull.sh{% endcapture %}
{% include tabs.html %}

#### From version

The _fromVersion_ should be set to **1.4.0**.

Navigate to the appropriate documentation to proceed with the next upgrade steps by [choosing one of the cards](/docs/mqtt-broker/install/upgrade-instructions/)
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
tbmq-pull-1-4-0-single,Single node,shell,resources/1.4.0/tbmq-single-node-pull.sh,/docs/mqtt-broker/install/resources/1.4.0/tbmq-single-node-pull.sh
tbmq-pull-1-4-0-cluster,Cluster mode,shell,resources/1.4.0/tbmq-cluster-mode-pull.sh,/docs/mqtt-broker/install/resources/1.4.0/tbmq-cluster-mode-pull.sh{% endcapture %}
{% include tabs.html %}

#### From version

The _fromVersion_ should be set to **1.3.0**.

Navigate to the appropriate documentation to proceed with the next upgrade steps by [choosing one of the cards](/docs/mqtt-broker/install/upgrade-instructions/)
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
tbmq-pull-1-3-0-single,Single node,shell,resources/1.3.0/tbmq-single-node-pull.sh,/docs/mqtt-broker/install/resources/1.3.0/tbmq-single-node-pull.sh
tbmq-pull-1-3-0-cluster,Cluster mode,shell,resources/1.3.0/tbmq-cluster-mode-pull.sh,/docs/mqtt-broker/install/resources/1.3.0/tbmq-cluster-mode-pull.sh{% endcapture %}
{% include tabs.html %}

#### From version

The _fromVersion_ should be set to **1.2.1**.

Navigate to the appropriate documentation to proceed with the next upgrade steps by [choosing one of the cards](/docs/mqtt-broker/install/upgrade-instructions/)
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
tbmq-pull-1-2-1-single,Single node,shell,resources/1.2.1/tbmq-single-node-pull.sh,/docs/mqtt-broker/install/resources/1.2.1/tbmq-single-node-pull.sh
tbmq-pull-1-2-1-cluster,Cluster mode,shell,resources/1.2.1/tbmq-cluster-mode-pull.sh,/docs/mqtt-broker/install/resources/1.2.1/tbmq-cluster-mode-pull.sh{% endcapture %}
{% include tabs.html %}

#### From version

The _fromVersion_ should be set to **1.2.0**.

Navigate to the appropriate documentation to proceed with the next upgrade steps by [choosing one of the cards](/docs/mqtt-broker/install/upgrade-instructions/)
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
tbmq-pull-1-2-0-single,Single node,shell,resources/1.2.0/tbmq-single-node-pull.sh,/docs/mqtt-broker/install/resources/1.2.0/tbmq-single-node-pull.sh
tbmq-pull-1-2-0-cluster,Cluster mode,shell,resources/1.2.0/tbmq-cluster-mode-pull.sh,/docs/mqtt-broker/install/resources/1.2.0/tbmq-cluster-mode-pull.sh{% endcapture %}
{% include tabs.html %}

#### From version

The _fromVersion_ should be set to **1.1.0**.

Navigate to the appropriate documentation to proceed with the next upgrade steps by [choosing one of the cards](/docs/mqtt-broker/install/upgrade-instructions/)
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
tbmq-pull-1-1-0-single,Single node,shell,resources/1.1.0/tbmq-single-node-pull.sh,/docs/mqtt-broker/install/resources/1.1.0/tbmq-single-node-pull.sh
tbmq-pull-1-1-0-cluster,Cluster mode,shell,resources/1.1.0/tbmq-cluster-mode-pull.sh,/docs/mqtt-broker/install/resources/1.1.0/tbmq-cluster-mode-pull.sh{% endcapture %}
{% include tabs.html %}

#### From version

The _fromVersion_ can be set to either **1.0.0** or **1.0.1** values.

Navigate to the appropriate documentation to proceed with the next upgrade steps by [choosing one of the cards](/docs/mqtt-broker/install/upgrade-instructions/)
on top of the page.

### Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/mqtt-broker-guides-banner.md %}
