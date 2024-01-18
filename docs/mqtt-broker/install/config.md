---
layout: docwithnav-mqtt-broker
title: Configuration properties
description: TBMQ configuration properties and environment variables

---

* TOC
{:toc}

This guide will help you become familiar with TBMQ configuration files and parameters. 
We **strongly recommend** configuring TBMQ using environment variables. 
This way, you won't need to merge the configuration files when a new platform release arrives. 

The list of available configuration parameters and corresponding environment variables can be found [here](#configuration-parameters).

### How to change configuration parameters?

#### Docker-Based deployment

If TBMQ is installed in a Docker Compose environment, you can edit the scripts and add environment variables for 
the corresponding containers. For more details, refer to the [Docker documentation](https://docs.docker.com/compose/environment-variables/#/the-envfile-configuration-option).

#### K8S-Based deployment

If TBMQ is installed in a K8S environment, you can edit the scripts and add environment variables for the 
corresponding deployments/stateful sets. For more details, refer to the [K8S documentation](https://kubernetes.io/docs/tasks/inject-data-application/define-environment-variable-container/).

### Configuration parameters

The configuration file is written in YAML format. All configuration parameters have corresponding environment variable names and default values. 
To change a configuration parameter, simply modify its default value. For example:

```bash
server:
  address: "${HTTP_BIND_ADDRESS:0.0.0.0}"
```

In this case, *'HTTP_BIND_ADDRESS'* is the environment variable name and *'0.0.0.0'* is the default value.

You can use the simple example below to add a new environment variable 'HTTP_BIND_PORT' with value '8084'.

```bash
...
export HTTP_BIND_PORT=8084
```

The parameters are grouped by system components. The list contains the name (address in **thingsboard-mqtt-broker.yml** file), 
environment variable, default value, and description.

{% include docs/mqtt-broker/install/config.md %}
