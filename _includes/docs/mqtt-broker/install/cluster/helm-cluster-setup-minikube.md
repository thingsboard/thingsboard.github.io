* TOC
{:toc}

This guide will help you to set up TBMQ Cluster using the official Helm [chart](https://artifacthub.io/packages/helm/tbmq-helm-chart/tbmq-cluster). 
Minikube used as the reference environment for the self-hosted kubernetes deployment. 
If you're deploying TBMQ in a self-managed cluster without cloud-specific load balancer integrations, Minikube provides a simple way to test the setup end-to-end.

## Prerequisites

{% include templates/mqtt-broker/install/helm/minikube/prerequisites.md %}

## Configure your Kubernetes environment

{% include templates/mqtt-broker/install/helm/minikube/configure-deployment.md %}

## Add the TBMQ Cluster Helm repository

{% include templates/mqtt-broker/install/helm/common/add-helm-repo.md %}

## Modify default chart values

{% include templates/mqtt-broker/install/helm/common/get-default-chart-values.md %}

### External PostgreSQL

{% include templates/mqtt-broker/install/helm/common/external-postgres.md %}

### Load Balancer configuration

{% include templates/mqtt-broker/install/helm/minikube/modify-load-balancer.md %}

## Create namespace

{% include templates/mqtt-broker/install/helm/common/create-namespace.md %}

## Install the TBMQ Helm chart

{% include templates/mqtt-broker/install/helm/common/install-chart.md %}

## Validate HTTP Access

{% include templates/mqtt-broker/install/helm/minikube/validate-http.md %}

## Validate MQTT Access

{% include templates/mqtt-broker/install/helm/minikube/validate-mqtt.md %}

## Troubleshooting

{% include templates/mqtt-broker/install/helm/common/helm-setup-troubleshooting.md %}

## Upgrading

{% include templates/mqtt-broker/install/helm/common/upgrading.md %}

## Uninstalling TBMQ Helm chart

{% include templates/mqtt-broker/install/helm/common/uninstall-chart.md %}

## Delete Kubernetes Cluster

{% include templates/mqtt-broker/install/helm/minikube/delete-cluster.md %}

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/mqtt-broker-guides-banner.md %}
