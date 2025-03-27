---
layout: docwithnav-mqtt-broker
title: Cluster setup using Helm Chart
description: TBMQ microservices setup with Helm

---

* TOC
{:toc}

This guide will help you to set up TBMQ Cluster using the official Helm [chart](https://artifacthub.io/packages/helm/tbmq-helm-chart/tbmq-cluster).

### General Prerequisites

To deploy TBMQ Cluster using Helm, regardless of which deployment environment you use, you need to have the following tools installed on your local machine:

- [helm](https://helm.sh/docs/intro/install/)
- [kubectl](https://kubernetes.io/docs/tasks/tools/)

### Choose your deployment environment

While the core Helm-based installation of TBMQ is the same across all environments, 
the load balancer setup differs depending on the Kubernetes platform. 
Select your deployment environment below to see the appropriate platform-specific prerequisites.

{% capture contenttogglespechelmdeployment %}
Self-Managed %,%default%,%templates/mqtt-broker/install/helm/default-k8s.md%br%
Amazon EKS <small>(AWS)</small>%,%aws-eks%,%templates/mqtt-broker/install/helm/aws-eks.md%br%
Azure AKS <small>(Azure)</small>%,%azure-aks%,%templates/mqtt-broker/install/helm/azure-aks.md%br%
Google GKE <small>(GCP)</small>%,%gcp-gke%,%templates/mqtt-broker/install/helm/gcp-gke.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="helmDeploymentType" toggle-spec=contenttogglespechelmdeployment %}

### Upgrading

Helm support was introduced with the TBMQ 2.1.0 release.
Upgrade options were not included in the initial version of the Helm chart and will be provided alongside a future TBMQ release.
This section will be updated once a new version of TBMQ and its Helm chart become available.

### Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/mqtt-broker-guides-banner.md %}
