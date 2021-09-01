---
layout: docwithnav-gw
title: How to configure ThingsBoard IoT Gateway using Configurator
description: How to configure ThingsBoard IoT Gateway using Configurator

---

* TOC
{:toc}

This guide will help you to configure your ThingsBoard IoT Gateway using Configurator, especially
if you used installing via deb package.

# Step 1 Starting Configurator

To start configuring Gateway you have to start your terminal and in it start Configurator using the next command:
```bash
tb-gateway-configurator
```

If you correctly install Gateway, you will see the next:

![](/images/gateway/gateway-cli.png)

# Step 2 Configuring

Answering on questions which will be displayed in turn using your option (You can use the default value which
displays in the input field).

_Default value is taken from **/etc/thingsboard-gateway/config/tb_gateway.yaml** and all your configuration via
CLI will be saved there._

![](/images/gateway/gateway-cli-questions.png)

# Step 3 Starting Gateway

Finally, you can start your ThingsBoard IoT Gateway using the next command:
```bash
thingsboard-gateway
```

## Next steps

Explore guides related to main ThingsBoard features:

 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
