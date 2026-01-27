* TOC
{:toc}

This document describes how to use the [ThingsBoard MCP Server](https://github.com/thingsboard/thingsboard-mcp){: target="_blank"}  to query platform data, generate sample telemetry, and detect anomalies in your ThingsBoard time-series data.  
We will use <b>natural language queries</b> to interact with ThingsBoard using MCP (via Claude or another LLM provider).

With the help of ThingsBoard MCP, you can:
- <b>Find devices</b>  matching specific criteria in your ThingsBoard platform.
- <b>Simulate or ingest telemetry</b> (e.g., AQI sensor data) directly into ThingsBoard for a specific device.
- <b>Analyze device data</b> for anomalies. This can easily be adapted to search for spikes, data gaps, or other patterns.

## Prerequisites

Before you begin, ensure that you have:

- An account at {% if docsPrefix == nil or docsPrefix == "pe/" or docsPrefix == "paas/" %}[ThingsBoard Cloud](https://thingsboard.cloud/signup){: target="_blank"}{% endif %}{% if docsPrefix == "paas/eu/" %}[EU ThingsBoard Cloud](https://eu.thingsboard.cloud/signup){: target="_blank"}{% endif %} or a self-hosted ThingsBoard installation on your own {% if docsPrefix == nil %}[infrastructure](/docs/user-guide/install/installation-options/){: target="_blank"}{% endif %}{% if docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}[infrastructure](/docs/user-guide/install/pe/installation-options/){: target="_blank"}{% endif %}.
- Authentication credentials (username and password) with sufficient permissions.
- An <b>LLM Agent</b> (e.g., Claude Desktop) capable of running MCP Servers.

## Step 1. Connect MCP server to ThingsBoard

The first step is to start your <b>LLM Agent</b> with the ThingsBoard MCP Server.  
In this guide, we will use [Claude Desktop](https://claude.ai/download){: target="_blank"} to start the <b>ThingsBoard MCP Server</b> and connect it to a ThingsBoard instance.
You may use any other MCP-enabled client.

<b>Run MCP via Docker:</b>

```bash
docker pull thingsboard/mcp
```
{: .copy-code}

<b>Claude Desktop Configuration</b>

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

Once you start <b>Claude Desktop</b>, you will see <b>thingsboard</b> tools available:

{% include images-gallery.html imageCollection="claude-thingsboard-tools" %}

> For advanced setup (running the binary instead of Docker or building locally), refer to the [ThingsBoard MCP GitHub repository](https://github.com/thingsboard/thingsboard-mcp){: target="_blank"}.

## Step 2. Querying devices in ThingsBoard

Here is list of devices inside ThingsBoard platform:

{% include images-gallery.html imageCollection="thingsboard-devices-list" %}

Using <b>Claude Desktop</b>, you can make requests using natural language.

<b>Example query:</b>

```text
Get devices of type 'Air Quality Sensor'
```
{: .copy-code}

ThingsBoard MCP will translate this into a ThingsBoard API query and return structured results:

{% include images-gallery.html imageCollection="claude-get-devices-query" %}

## Step 3. Generating sample data for AQI sensor

Based on your requests, MCP can simulate (generate) telemetry for any device.

<b>Example query:</b>

```text
Generate sample data for Office #1 AQI Sensor for the last 3 days and save it as timeseries data. Use sampling rate as 1 hour
```
{: .copy-code}

{% include images-gallery.html imageCollection="claude-generate-data-query" %}

MCP automatically adds the generated time series data into ThingsBoard, making it available for dashboards and analytics.

{% include images-gallery.html imageCollection="thingsboard-generated-data" %}

## Step 4. Analyzing data for anomalies

Once telemetry is available, you can request MCP to analyze it for anomalies.

<b>Example query:</b>

```text
Analyze AQI of Office #1 AQI Sensor for anomalies in the last 3 days and show results in a table.
```
{: .copy-code}

{% include images-gallery.html imageCollection="claude-analyze-anomaly" %}

MCP will return anomaly detection results in a tabular format:

{% include images-gallery.html imageCollection="claude-analyze-result" %}

## MCP versatility in real-world scenarios

The <b>ThingsBoard MCP Server</b> extends far beyond anomaly detection for <b>AQI</b> sensors. It can be applied to a wide range of use cases, including:

- <b>Industrial IoT Monitoring</b> — Detect unusual vibration, temperature, or pressure changes in machinery.
- <b>Energy Management</b> — Identify consumption spikes in smart meters and optimize energy usage.
- <b>Environmental Monitoring</b> — Detect sudden changes in air or water quality and trigger alerts.
- <b>Predictive Maintenance</b> — Analyze equipment performance trends and anticipate failures before they occur.
- <b>Smart City Applications</b> — Monitor traffic flow, street lighting, or waste collection anomalies.

By combining MCP&#39;s natural language interface with ThingsBoard&#39;s data visualization and alerting capabilities, you can rapidly prototype and deploy AI-driven IoT solutions across a wide range of industries.