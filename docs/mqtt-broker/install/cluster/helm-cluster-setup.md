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

### Configure your deployment environment

While the core Helm-based installation of TBMQ is the same across all environments, 
the Kubernetes cluster setup differs depending on the Kubernetes platform. 
Select your deployment environment below to see the appropriate platform-specific prerequisites.

{% capture contenttogglespechelmdeployment %}
Self-Managed %,%default%,%templates/mqtt-broker/install/helm/minikube/configure-deployment.md%br%
Amazon EKS <small>(AWS)</small>%,%aws-eks%,%templates/mqtt-broker/install/helm/aws/configure-deployment.md%br%
Azure AKS <small>(Azure)</small>%,%azure-aks%,%templates/mqtt-broker/install/helm/azure/configure-deployment.md%br%
Google GKE <small>(GCP)</small>%,%gcp-gke%,%templates/mqtt-broker/install/helm/gcp/configure-deployment.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="helmDeploymentType" toggle-spec=contenttogglespechelmdeployment toggle-group="helm-env" %}

### Add the TBMQ Cluster Helm repository

{% include templates/mqtt-broker/install/helm/common/add-helm-repo.md %}

### Retrieve and modify default chart values

{% include templates/mqtt-broker/install/helm/common/retrieve-and-modify-default-chart-values.md %}

{% capture contenttogglespechelmdefaultvalues %}
Self-Managed %,%default%,%templates/mqtt-broker/install/helm/minikube/change-default-values.md%br%
Amazon EKS <small>(AWS)</small>%,%aws-eks%,%templates/mqtt-broker/install/helm/aws/change-default-values.md%br%
Azure AKS <small>(Azure)</small>%,%azure-aks%,%templates/mqtt-broker/install/helm/azure/change-default-values.md%br%
Google GKE <small>(GCP)</small>%,%gcp-gke%,%templates/mqtt-broker/install/helm/gcp/change-default-values.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="helmDefaultValues" toggle-spec=contenttogglespechelmdefaultvalues toggle-group="helm-env" %}

### Create namespace

{% include templates/mqtt-broker/install/helm/common/create-namespace.md %}

### Install the TBMQ Helm chart

{% include templates/mqtt-broker/install/helm/common/install-chart.md %}

### Validate HTTP Access

{% capture contenttogglespechelmvalidatehttp %}
Self-Managed %,%default%,%templates/mqtt-broker/install/helm/minikube/validate-http.md%br%
Amazon EKS <small>(AWS)</small>%,%aws-eks%,%templates/mqtt-broker/install/helm/aws/validate-http.md%br%
Azure AKS <small>(Azure)</small>%,%azure-aks%,%templates/mqtt-broker/install/helm/azure/validate-http.md%br%
Google GKE <small>(GCP)</small>%,%gcp-gke%,%templates/mqtt-broker/install/helm/gcp/validate-http.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="helmValidateHttp" toggle-spec=contenttogglespechelmvalidatehttp toggle-group="helm-env" %}

### Validate MQTT Access

{% capture contenttogglespechelmvalidatemqtt %}
Self-Managed %,%default%,%templates/mqtt-broker/install/helm/minikube/validate-mqtt.md%br%
Amazon EKS <small>(AWS)</small>%,%aws-eks%,%templates/mqtt-broker/install/helm/aws/validate-mqtt.md%br%
Azure AKS <small>(Azure)</small>%,%azure-aks%,%templates/mqtt-broker/install/helm/azure/validate-mqtt.md%br%
Google GKE <small>(GCP)</small>%,%gcp-gke%,%templates/mqtt-broker/install/helm/gcp/validate-mqtt.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="helmValidateMqtt" toggle-spec=contenttogglespechelmvalidatemqtt toggle-group="helm-env" %}

### Troubleshooting

{% include templates/mqtt-broker/install/helm/common/helm-setup-troubleshooting.md %}

### Upgrading

Helm support was introduced with the TBMQ 2.1.0 release.
Upgrade options were not included in the initial version of the Helm chart and will be provided alongside a future TBMQ release.
This section will be updated once a new version of TBMQ and its Helm chart become available.

### Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/mqtt-broker-guides-banner.md %}
