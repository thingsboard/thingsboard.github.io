---
layout: docwithnav-mqtt-broker
title: Cluster setup using Helm Chart
description: TBMQ microservices setup with Helm

---

* TOC
{:toc}

This guide will help you to set up TBMQ Cluster using the official Helm [chart](https://artifacthub.io/packages/helm/tbmq-helm-chart/tbmq-cluster).

## General Prerequisites

To deploy TBMQ Cluster using Helm, regardless of which deployment environment you use, you need to have the following tools installed on your local machine:

- [helm](https://helm.sh/docs/intro/install/)
- [kubectl](https://kubernetes.io/docs/tasks/tools/)

## Configure your Kubernetes environment

While the core Helm-based installation of TBMQ is the same across all environments, 
the Kubernetes cluster setup differs depending on the Kubernetes platform. 
Select your deployment environment below to see the appropriate platform-specific prerequisites.

{% capture contenttogglespechelmdeployment %}
Self-Managed %,%default%,%templates/mqtt-broker/install/helm/minikube/configure-deployment.md%br%
Amazon EKS <small>(AWS)</small>%,%aws-eks%,%templates/mqtt-broker/install/helm/aws/configure-deployment.md%br%
Azure AKS <small>(Azure)</small>%,%azure-aks%,%templates/mqtt-broker/install/helm/azure/configure-deployment.md%br%
Google GKE <small>(GCP)</small>%,%gcp-gke%,%templates/mqtt-broker/install/helm/gcp/configure-deployment.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="helmDeploymentType" toggle-spec=contenttogglespechelmdeployment toggle-group="helm-env" %}

## Add the TBMQ Cluster Helm repository

{% include templates/mqtt-broker/install/helm/common/add-helm-repo.md %}

## Modify default chart values

{% include templates/mqtt-broker/install/helm/common/get-default-chart-values.md %}

{% capture installation-option %}

Do not modify `installation.installDbSchema` directly in the `values.yaml`.
This parameter is only required during the first installation to initialize the TBMQ database schema.
Instead, we will pass it explicitly using `--set` option in the `helm install` command.

### External PostgreSQL

By default, the chart installs Bitnami PostgreSQL as a sub-chart:

```yaml
# This section will bring bitnami/postgresql (https://artifacthub.io/packages/helm/bitnami/postgresql) into this chart.
#  If you want to add some extra configuration parameters, you can put them under the `postgresql` key, and they will be passed to bitnami/postgresql chart
postgresql:
  # @param enabled If enabled is set to true, externalPostgresql configuration will be ignored
  enabled: true
```  

provisioning a single-node instance with configurable storage, backups, and monitoring options. 
For users with an existing PostgreSQL instance, TBMQ can be configured to connect externally. 
To do this, disable the built-in PostgreSQL by set `postgresql.enabled: false` and specify connection details in the `externalPostgresql` section.

```yaml
# If you're deploying PostgreSQL externally, configure this section
externalPostgresql:
  # @param host - External PostgreSQL server host
  host: ""
  # @param port - External PostgreSQL server port
  ##
  port: 5432
  # @param password - PostgreSQL user
  ##
  username: "postgres"
  # @param password - PostgreSQL user password
  ##
  password: "postgres"
  # @param database - PostgreSQL database name for TBMQ
  ##
  database: "thingsboard_mqtt_broker"
```

See appropriate external PostgreSQL configuration guidance [here](). 

### Load Balancer configuration

{% endcapture %}
{% include templates/info-banner.md content=installation-option %}

{% capture contenttogglespechelmdefaultvalues %}
Self-Managed %,%default%,%templates/mqtt-broker/install/helm/minikube/modify-load-balancer.md%br%
Amazon EKS <small>(AWS)</small>%,%aws-eks%,%templates/mqtt-broker/install/helm/aws/modify-load-balancer.md%br%
Azure AKS <small>(Azure)</small>%,%azure-aks%,%templates/mqtt-broker/install/helm/azure/modify-load-balancer.md%br%
Google GKE <small>(GCP)</small>%,%gcp-gke%,%templates/mqtt-broker/install/helm/gcp/modify-load-balancer.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="helmModifyValues" toggle-spec=contenttogglespechelmdefaultvalues toggle-group="helm-env" %}

## Create namespace

{% include templates/mqtt-broker/install/helm/common/create-namespace.md %}

## Install the TBMQ Helm chart

{% include templates/mqtt-broker/install/helm/common/install-chart.md %}

## Validate HTTP Access

{% capture contenttogglespechelmvalidatehttp %}
Self-Managed %,%default%,%templates/mqtt-broker/install/helm/minikube/validate-http.md%br%
Amazon EKS <small>(AWS)</small>%,%aws-eks%,%templates/mqtt-broker/install/helm/aws/validate-http.md%br%
Azure AKS <small>(Azure)</small>%,%azure-aks%,%templates/mqtt-broker/install/helm/azure/validate-http.md%br%
Google GKE <small>(GCP)</small>%,%gcp-gke%,%templates/mqtt-broker/install/helm/gcp/validate-http.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="helmValidateHttp" toggle-spec=contenttogglespechelmvalidatehttp toggle-group="helm-env" %}

## Validate MQTT Access

{% capture contenttogglespechelmvalidatemqtt %}
Self-Managed %,%default%,%templates/mqtt-broker/install/helm/minikube/validate-mqtt.md%br%
Amazon EKS <small>(AWS)</small>%,%aws-eks%,%templates/mqtt-broker/install/helm/aws/validate-mqtt.md%br%
Azure AKS <small>(Azure)</small>%,%azure-aks%,%templates/mqtt-broker/install/helm/azure/validate-mqtt.md%br%
Google GKE <small>(GCP)</small>%,%gcp-gke%,%templates/mqtt-broker/install/helm/gcp/validate-mqtt.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="helmValidateMqtt" toggle-spec=contenttogglespechelmvalidatemqtt toggle-group="helm-env" %}

## Troubleshooting

{% include templates/mqtt-broker/install/helm/common/helm-setup-troubleshooting.md %}

## Upgrading

Helm support was introduced with the TBMQ 2.1.0 release.
Upgrade options were not included in the initial version of the Helm chart and will be provided alongside a future TBMQ release.
This section will be updated once a new version of TBMQ and its Helm chart become available.

## Uninstalling TBMQ Helm chart

To uninstall the TBMQ Helm chart, run the following command:

```bash
helm delete my-tbmq-cluster
```
{: .copy-code}

This command removes all TBMQ components associated with the release from the namespace set in your current Kubernetes context.

The `helm delete` command removes only the logical resources of the TBMQ cluster. 
To fully clean up all persistent data, you may also need to manually delete the associated Persistent Volume Claims (PVCs) after uninstallation:

```bash
kubectl delete pvc -l app.kubernetes.io/instance=my-tbmq-cluster
```
{: .copy-code}

## Delete Kubernetes Cluster

{% capture contenttogglespechelmvalidatemqtt %}
Self-Managed %,%default%,%templates/mqtt-broker/install/helm/minikube/delete-cluster.md%br%
Amazon EKS <small>(AWS)</small>%,%aws-eks%,%templates/mqtt-broker/install/helm/aws/delete-cluster.md%br%
Azure AKS <small>(Azure)</small>%,%azure-aks%,%templates/mqtt-broker/install/helm/azure/delete-cluster.md%br%
Google GKE <small>(GCP)</small>%,%gcp-gke%,%templates/mqtt-broker/install/helm/gcp/delete-cluster.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="helmValidateMqtt" toggle-spec=contenttogglespechelmvalidatemqtt toggle-group="helm-env" %}

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/mqtt-broker-guides-banner.md %}
