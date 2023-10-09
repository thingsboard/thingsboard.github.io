* TOC
{:toc}

This guide will help you to get familiar with ThingsBoard configuration files and parameters. We **recommend** to
configure ThingsBoard using environment variables. This way you do not need to merge the configuration files when new
platform release arrives. List of available configuration parameters and corresponding environment variables is
located [here](#configuration-parameters).

## How to change configuration parameters?

#### Monolithic deployment on Linux

If ThingsBoard is installed on **Linux** as a **monolithic application**, you may specify the environment variables in
the thingsboard.conf file:

```bash
sudo nano /usr/share/thingsboard/conf/thingsboard.conf
```

Use simple example below to add new environment variable 'HTTP_BIND_PORT' with value '8081'.

```bash
...
export HTTP_BIND_PORT=8081
```

#### Monolithic deployment on Windows

If ThingsBoard is installed on **Windows** as a **monolithic application**, you may specify the environment variables in
the thingsboard.yml file located in the following directory:

```bash
YOUR_INSTALL_DIR/conf
```

The configuration file is written in YAML.

All configuration parameters have corresponding environment variable name and default value. In order to change
configuration parameter you can simply change it's default value. For example:

```bash
server:
  address: "${HTTP_BIND_ADDRESS:0.0.0.0}"
```

In this case, *'HTTP_BIND_ADDRESS'* is environment variable name and *'0.0.0.0'* is a default value.

#### Docker based deployment

If ThingsBoard is installed in a docker compose environment, you may edit the scripts and add environment variables for
the corresponding containers.
See [docker documentation](https://docs.docker.com/compose/environment-variables/#/the-envfile-configuration-option) for
more details.

#### K8S based deployment

If ThingsBoard is installed in a K8S environment, you may edit the scripts and add environment variables for the
corresponding deployments/stateful sets.
See [K8S documentation](https://kubernetes.io/docs/tasks/inject-data-application/define-environment-variable-container/)
for more details.

## Configuration parameters

The parameters are grouped by system components. The list contains the name (address in thingsboard.yml file),
environment variable, default value and description.

{% if docsPrefix == null %}
{% include docs/user-guide/install/ce-config-tables.md %}
{% endif %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/pe-config-tables.md %}
{% endif %}

### logback.xml

The configuration file for logging. Allows controlling the log level, the size of log files and the total size/volume of
logs.
