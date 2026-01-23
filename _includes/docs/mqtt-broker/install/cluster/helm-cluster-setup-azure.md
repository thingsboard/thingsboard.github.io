* TOC
{:toc}

This guide will help you to set up TBMQ Cluster using the official Helm [chart](https://artifacthub.io/packages/helm/tbmq-helm-chart/tbmq-cluster) 
on Azure using Azure Kubernetes Service (AKS).

## Prerequisites

{% include templates/mqtt-broker/install/helm/azure/prerequisites.md %}

## Configure your Kubernetes environment

{% include templates/mqtt-broker/install/helm/azure/configure-deployment.md %}

## Add the TBMQ Cluster Helm repository

{% include templates/mqtt-broker/install/helm/common/add-helm-repo.md %}

## Modify default chart values

{% include templates/mqtt-broker/install/helm/common/get-default-chart-values.md %}

### External PostgreSQL

{% include templates/mqtt-broker/install/helm/common/external-postgres.md %}

If you're deploying on Azure AKS and plan to use Azure Database for PostgreSQL, follow this
[guide](/docs/{{docsPrefix}}mqtt-broker/install/cluster/azure-cluster-setup/#step-5-provision-postgresql-db) to provision and configure your PostgreSQL instance.

### Load Balancer configuration

{% include templates/mqtt-broker/install/helm/azure/modify-load-balancer.md %}

## Create namespace

{% include templates/mqtt-broker/install/helm/common/create-namespace.md %}

## Install the TBMQ Helm chart

{% include templates/mqtt-broker/install/helm/common/install-chart.md %}

## Validate HTTP Access

{% include templates/mqtt-broker/install/helm/azure/validate-http.md %}

## Validate MQTT Access

{% include templates/mqtt-broker/install/helm/azure/validate-mqtt.md %}

## Troubleshooting

{% include templates/mqtt-broker/install/helm/common/helm-setup-troubleshooting.md %}

## Upgrading

{% include templates/mqtt-broker/install/helm/common/upgrading.md %}

## Uninstalling TBMQ Helm chart

{% include templates/mqtt-broker/install/helm/common/uninstall-chart.md %}

## Delete Kubernetes Cluster

{% include templates/mqtt-broker/install/helm/azure/delete-cluster.md %}

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/mqtt-broker-guides-banner.md %}
