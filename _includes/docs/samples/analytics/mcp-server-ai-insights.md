* TOC
{:toc}

This document describes how to use the [ThingsBoard MCP Server](https://github.com/thingsboard/thingsboard-mcp){: target="_blank"}  to query platform data, generate sample telemetry, and detect anomalies in your ThingsBoard time-series data.  
We will use **natural language queries** to interact with ThingsBoard using MCP (via Claude or another LLM provider).

## Overview

In this guide, with the help of ThingsBoard MCP, we will perform the following tasks:

1. **Find devices** matching specific criteria in your ThingsBoard platform.
2. **Simulate or ingest telemetry** (e.g., AQI sensor data) directly into ThingsBoard for a specific device.
3. **Analyze the data** of this device for anomalies. This can easily be adapted to search for spikes, data gaps, or other patterns.

## Prerequisites

{% if docsPrefix == nil %}
- An account at [ThingsBoard Demo](https://demo.thingsboard.io/signup){: target="_blank"} or a self-hosted ThingsBoard installation on your own [infrastructure](/docs/{{docsPrefix}}user-guide/install/installation-options/){: target="_blank"};
{% endif %}
{% if docsPrefix == "pe/" %}
- An account at [ThingsBoard Cloud](https://thingsboard.cloud/signup){: target="_blank"} or a self-hosted ThingsBoard installation on your own [infrastructure](/docs/{{docsPrefix}}user-guide/install/installation-options/){: target="_blank"};
{% endif %}
{% if docsPrefix == "paas/" %}
- An account at [ThingsBoard Cloud](https://thingsboard.cloud/signup){: target="_blank"};
{% endif %}
{% if docsPrefix == "paas/eu/" %}
- An account at [EU ThingsBoard Cloud](https://eu.thingsboard.cloud/signup){: target="_blank"};
{% endif %}
- Authentication credentials: username and password with appropriate permissions on the ThingsBoard instance;
- Claude or another LLM Agent capable of running MCP Servers.

## Step 1 — Connect MCP Server to ThingsBoard

The first step is to start your **LLM Agent** with the ThingsBoard MCP Server.  
In this example, we are going to use [Claude Desktop](https://claude.ai/download){: target="_blank"} to start the **ThingsBoard MCP Server** and connect it to a ThingsBoard instance.
You can use any other MCP-enabled client.

Follow these steps:

```bash
docker pull thingsboard/mcp
```
{: .copy-code}

Add the following configuration to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "thingsboard": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "THINGSBOARD_URL",
        "-e",
        "THINGSBOARD_USERNAME",
        "-e",
        "THINGSBOARD_PASSWORD",
        "-e",
        "LOGGING_PATTERN_CONSOLE",
        "thingsboard/mcp"
      ],
      "env": {
        "THINGSBOARD_URL": "<thingsboard_url>",
        "THINGSBOARD_USERNAME": "<thingsboard_username>",
        "THINGSBOARD_PASSWORD": "<thingsboard_password>",
        "LOGGING_PATTERN_CONSOLE": ""
      }
    }
  }
}
```
{: .copy-code}

Once you start **Claude Desktop**, you will see **thingsboard** tools available:

{% include images-gallery.html imageCollection="claude-thingsboard-tools" %}

If you need more details on how to use the binary instead of Docker, or if you would like to build the **ThingsBoard MCP server** locally, please refer to the [GitHub repository](https://github.com/thingsboard/thingsboard-mcp){: target="_blank"} for full instructions.

## Step 2 — Querying Devices in ThingsBoard

Here is list of devices inside ThingsBoard platform:

{% include images-gallery.html imageCollection="thingsboard-devices-list" %}

Using **Claude Desktop**, you can issue natural language queries such as:

```text
Get devices of type 'Air Quality Sensor'
```
{: .copy-code}

ThingsBoard MCP will translate this into a ThingsBoard API query and return structured results:

{% include images-gallery.html imageCollection="claude-get-devices-query" %}

## Step 3 — Generating Sample Data for AQI Sensor

You can ask MCP to simulate telemetry for an AQI sensor device.

Example query:

```text
Generate sample data for Office #1 AQI Sensor for the last 3 days and save it as timeseries data. Use sampling rate as 1 hour
```
{: .copy-code}

{% include images-gallery.html imageCollection="claude-generate-data-query" %}

MCP will insert this synthetic time-series data into ThingsBoard:

{% include images-gallery.html imageCollection="thingsboard-generated-data" %}

## Step 4 — Analyzing Data for Anomalies

Once data exists in ThingsBoard, you can request MCP to analyze it for anomalies.

Example query:

```text
Analyze AQI of Office #1 AQI Sensor for anomalies in the last 3 days and show results in a table.
```
{: .copy-code}

{% include images-gallery.html imageCollection="claude-analyze-anomaly" %}

And here are the results in a table format:

{% include images-gallery.html imageCollection="claude-analyze-result" %}

## MCP Versatility in Real-World Scenarios

The **ThingsBoard MCP Server** is not limited to **AQI** sensor anomaly detection. It can be applied to a wide range of use cases, including:

- **Industrial IoT monitoring**: Detect unusual vibration, temperature, or pressure changes in machinery;
- **Energy management**: Identify consumption spikes in smart meters and optimize energy usage;
- **Environmental monitoring**: Detect sudden changes in air or water quality to trigger alerts;
- **Predictive maintenance**: Analyze equipment performance trends to anticipate failures before they occur;
- **Smart city applications**: Monitor traffic flow, street lighting, or waste collection anomalies.

By combining MCP's natural language interface with **ThingsBoard’s** powerful data visualization and alerting features, you can rapidly prototype and deploy solutions for **virtually** any IoT scenario.
