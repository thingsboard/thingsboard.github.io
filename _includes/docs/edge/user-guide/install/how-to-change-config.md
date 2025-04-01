* TOC
{:toc}

This guide will help you to get familiar with ThingsBoard Edge configuration files and parameters. We **recommend** to
configure ThingsBoard Edge using environment variables. This way you do not need to merge the configuration files when new
edge release arrives. List of available configuration parameters and corresponding environment variables is
located [here](#configuration-parameters).

## How to change configuration parameters?

### Linux

If ThingsBoard Edge is installed on **Linux**, you may specify the environment variables in the tb-edge.conf file:

```bash
sudo nano /usr/share/tb-edge/conf/tb-edge.conf
```

Use simple example below to add new environment variable 'HTTP_BIND_PORT' with value '8081'.

```bash
...
export HTTP_BIND_PORT=8081
```

### Windows

If ThingsBoard Edge is installed on **Windows**, you may specify the environment variables in
the tb-edge.yml file located in the following directory:

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

### Docker based deployment

If ThingsBoard Edge is installed in a docker compose environment, you may edit the scripts and add environment variables for
the corresponding containers.
See [docker documentation](https://docs.docker.com/compose/environment-variables/#/the-envfile-configuration-option) for
more details.

