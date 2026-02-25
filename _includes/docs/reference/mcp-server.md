* TOC
{:toc}

## Overview

The ThingsBoard MCP Server provides a **natural language interface** for LLMs and AI agents to interact with your ThingsBoard IoT platform.

This server implements the [Model Context Protocol (MCP)](https://modelcontextprotocol.io/docs/getting-started/intro){: target="_blank"}, which enables AI systems to access and manipulate data in ThingsBoard through natural language commands. With this integration, you can:

- Query entities (device, asset, customer, etc.) data and telemetry using conversational language
- Manage entities through AI assistants
- Analyze IoT data and create reports using AI tools
- Automate ThingsBoard operations through AI-powered workflows

The server integrates seamlessly with MCP clients such as Claude Desktop, Cursor, and other AI applications that support the MCP protocol.

## Requirements

Before you begin, ensure you have the following:

{% if docsPrefix == nil or docsPrefix == "pe/" %}
- **ThingsBoard instance**:
    - **Local/On-premise instance**: Self-hosted ThingsBoard installation on your own [infrastructure](/docs/{{docsPrefix}}user-guide/install/installation-options/){: target="_blank"}, or
{% endif %}
{% if docsPrefix == nil or docsPrefix == "pe/" %}
    - **ThingsBoard Cloud**: Fully managed cloud service available at [ThingsBoard Cloud](https://thingsboard.io/installations/){: target="_blank"}
{% endif %}
{% if docsPrefix == "paas/" %}
- **ThingsBoard Cloud**: Fully managed cloud service available at [thingsboard.cloud](https://thingsboard.cloud/signup){: target="_blank"}
{% endif %}
{% if docsPrefix == "paas/eu/" %}
- **EU ThingsBoard Cloud**: Fully managed cloud service available at [eu.thingsboard.cloud](https://eu.thingsboard.cloud/signup){: target="_blank"}
{% endif %}
{% if docsPrefix contains "edge/" %}
- **ThingsBoard Edge instance** [up and running](/docs/user-guide/install/{{docsPrefix}}installation-options/){: target="_blank"}
{% endif %}
- **Authentication credentials** - Valid username and password with appropriate permissions on the ThingsBoard instance

Write down your ThingsBoard URL, username and password - we will use them as **your_thingsboard_url**, **your_username** and **your_password** in the next steps.

## Quick Start Guide

1. **Configure your MCP client**: Add the ThingsBoard MCP server to your client configuration (see [Client Configuration](#client-configuration))
2. **Start using natural language**: Begin interacting with your ThingsBoard instance through your MCP client

## Features

### Entity Operations

- **Devices**: View device details, credentials, profiles, and manage device relationships
- **Assets**: View and manage assets, asset profiles, and asset relationships
- **Customers**: Access customer information, titles, and manage customer relationships
- **Users**: Manage users, tokens, activation links, and user assignments

### Telemetry Management

- **Attribute Access**: Retrieve attribute keys and values by scope for any entity
- **Time-series Access**: Get time-series data with various aggregation options
- **Telemetry Insert/Update**: Save attributes or time-series data with optional TTL settings

### Relations

Discover and navigate relationships between entities with direction-based queries.

### Alarms

Fetch alarms, alarm types, and severity information for specific entities.

### Administration

- **System Settings**: Access and manage administration settings
- **Security Settings**: View security policies and JWT configuration
- **Version Control**: Manage repository and auto-commit settings
- **System Information**: Check for updates and retrieve usage statistics

## Installation

{% if docsPrefix == nil or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
This MCP server works with ThingsBoard IoT Platform. You'll need your ThingsBoard instance URL and valid credentials for the installation.
{% endif %}
{% if docsPrefix contains "edge/" %}
This MCP server works with ThingsBoard Edge. You'll need your ThingsBoard Edge instance URL and valid credentials for the installation.
{% endif %}

### ThingsBoard Account

Before installing the MCP server, ensure you have:
{% if docsPrefix == nil or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
* Access to a ThingsBoard instance
{% endif %}
{% if docsPrefix contains "edge/" %}
* Access to a ThingsBoard Edge instance
{% endif %}
* A user account with sufficient permissions
* The username and password for this account

### Docker Image

The easiest way to get started is with the pre-built Docker image from Docker Hub.

#### Server Modes

The ThingsBoard MCP Server can run in two different modes:

- **STDIO Mode (Standard Input/Output)**: The server communicates directly through standard input/output streams
- **SSE Mode (Server-Sent Events)**: The server runs as an HTTP server that clients connect to

#### Running in STDIO Mode (Default)

For STDIO Mode, you must include the `-i` flag to keep stdin open:

```bash
docker pull thingsboard/mcp
docker run --rm -i -e THINGSBOARD_URL=<your_thingsboard_url> -e THINGSBOARD_USERNAME=<your_username> -e THINGSBOARD_PASSWORD=<your_password> thingsboard/mcp
```
{: .copy-code}

#### Running in SSE Mode

In SSE Mode, you must expose port 8000 using the `-p` flag and explicitly override the default settings :

```bash
docker pull thingsboard/mcp
docker run --rm -p 8000:8000 -e THINGSBOARD_URL=<your_thingsboard_url> -e THINGSBOARD_USERNAME=<your_username> -e THINGSBOARD_PASSWORD=<your_password> -e SPRING_AI_MCP_SERVER_STDIO=false -e SPRING_WEB_APPLICATION_TYPE=servlet thingsboard/mcp
```
{: .copy-code}

### Build from Sources

You can also build the JAR file from sources and run the ThingsBoard MCP Server directly.

#### Prerequisites

- Java 17 or later
- Maven 3.6 or later

#### Build Steps

* Clone the [repository](https://github.com/thingsboard/thingsboard-mcp){: target="_blank"}
* Build the project:

```bash
mvn clean install -DskipTests
```
{: .copy-code}

* The JAR file will be available in the target folder:

```bash
./target/thingsboard-mcp-server-1.0.0.jar
```

* Run the server using the JAR file:

```bash
# For STDIO Mode
java -jar ./target/thingsboard-mcp-server-1.0.0.jar
```
{: .copy-code}

```bash
# For SSE Mode
java -Dspring.ai.mcp.server.stdio=false Dspring.main.web-application-type=servlet -jar ./target/thingsboard-mcp-server-1.0.0.jar
```
{: .copy-code}

## Client Configuration

To launch the server as a container when your MCP client starts (e.g., Claude Desktop), you need to add the appropriate configuration to your client's settings.

### Docker Configuration

If you're using the Docker image, use this configuration in your `claude_desktop_config.json`:

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

### Binary Configuration

If you've built the JAR file from sources, use this configuration in your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "thingsboard": {
      "command": "java",
      "args": [
        "-jar",
        "/absolute/path/to/thingsboard-mcp-server-1.0.0.jar"
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

## Environment Variables

The MCP server requires the following environment variables to connect to your ThingsBoard instance:

| Variable | Description                                    | Default |
|----------|------------------------------------------------|---------|
| `THINGSBOARD_URL` | The base URL of your ThingsBoard instance      | |
| `THINGSBOARD_USERNAME` | Username used to authenticate with ThingsBoard | |
| `THINGSBOARD_PASSWORD` | Password used to authenticate with ThingsBoard | |
| `THINGSBOARD_LOGIN_INTERVAL_SECONDS` | Login session refresh interval in seconds      | 1800 |
| `SPRING_WEB_APPLICATION_TYPE` | Spring application type (none or servlet)     | none |
| `SPRING_AI_MCP_SERVER_STDIO` | Enable/disable standard I/O communication      | true |
| `SPRING_AI_MCP_SERVER_SSE_ENDPOINT` | Server-Sent Events (SSE) endpoint URL          | /sse |
| `SPRING_AI_MCP_SERVER_SSE_MESSAGE_ENDPOINT` | Server-Sent Events message endpoint URL        | /mcp/message |
| `SERVER_PORT` | HTTP server port number                        | 8080 |

These variables can be set either:
- Directly via Docker command line using the `-e` flag
- Or through the `env` configuration block in your MCP client setup

## Available Tools

The ThingsBoard MCP Server provides a wide range of tools that can be used through natural language commands. These tools are organized by category.

### Device Tools

| Tool | Description |
|------|-------------|
| `getDeviceById` | Fetch the Device object based on the provided Device Id. |
| `getDeviceCredentialsByDeviceId` | Get device credentials by device id. If during device creation there wasn't specified any credentials, platform generates random 'ACCESS_TOKEN' credentials. |
| `getTenantDevices` | Returns a page of devices owned by tenant. |
| `getTenantDevice` | Get tenant device by name. Device name is a unique property of device. |
| `getCustomerDevices` | Returns a page of devices objects assigned to customer. |
| `getUserDevices` | Returns a page of device objects available for the current user. |
| `getDevicesByIds` | Get Devices By Ids. Requested devices must be owned by tenant or assigned to customer. |
| `getDevicesByEntityGroupId` | Returns a page of device objects that belongs to specified Entity Group Id. |

### Asset Tools

| Tool | Description |
|------|-------------|
| `getAssetById` | Get the Asset object based on the provided Asset Id. |
| `getTenantAssets` | Returns a page of assets owned by tenant. |
| `getTenantAsset` | Get tenant asset by name. Asset name is a unique property of asset. |
| `getCustomerAssets` | Returns a page of assets objects assigned to customer. |
| `getUserAssets` | Returns a page of assets objects available for the current user. |
| `getAssetsByIds` | Get Assets By Ids. Requested assets must be owned by tenant or assigned to customer. |
| `getAssetsByEntityGroupId` | Returns a page of asset objects that belongs to specified Entity Group Id. |

### Customer Tools

| Tool | Description |
|------|-------------|
| `getCustomerById` | Get the Customer object based on the provided Customer Id. |
| `getCustomers` | Returns a page of customers owned by tenant. |
| `getTenantCustomer` | Get the Customer using Customer Title. |
| `getUserCustomers` | Returns a page of customers available for the user. |
| `getCustomersByEntityGroupId` | Returns a page of Customer objects that belongs to specified Entity Group Id. |

### User Tools

| Tool | Description |
|------|-------------|
| `getUserById` | Fetch the User object based on the provided User Id. |
| `getUsers` | Returns a page of users owned by tenant or customer. |
| `getTenantAdmins` | Returns a page of tenant administrator users assigned to the specified tenant. |
| `getCustomerUsers` | Returns a page of users assigned to the specified customer. |
| `getAllCustomerUsers` | Returns a page of users for the current tenant with authority 'CUSTOMER_USER'. |
| `getUsersForAssign` | Returns page of user data objects that can be assigned to provided alarmId. |
| `getUsersByEntityGroupId` | Returns a page of user objects that belongs to specified Entity Group Id. |

### Alarm Tools

| Tool | Description |
|------|-------------|
| `getAlarmById` | Get the Alarm object based on the provided alarm id. |
| `getAlarmInfoById` | Get the Alarm info object based on the provided alarm id. |
| `getAlarms` | Get a page of alarms for the selected entity. |
| `getAllAlarms` | Get a page of alarms that belongs to the current user owner. |
| `getHighestAlarmSeverity` | Get highest alarm severity by originator and optional status filters. |
| `getAlarmTypes` | Get a set of unique alarm types based on alarms that are either owned by tenant or assigned to the customer. |

### Entity Group Tools

| Tool | Description |
|------|-------------|
| `getEntityGroupById` | Fetch the Entity Group object based on the provided Entity Group Id. |
| `getEntityGroupsByType` | Fetch the list of Entity Group Info objects based on the provided Entity Type. |
| `getEntityGroupByOwnerAndNameAndType` | Fetch the Entity Group object based on the provided owner, type and name. |
| `getEntityGroupsByOwnerAndType` | Fetch the list of Entity Group Info objects based on the provided Owner Id and Entity Type. |
| `getEntityGroupsForEntity` | Returns a list of groups that contain the specified Entity Id. |
| `getEntityGroupsByIds` | Fetch the list of Entity Group Info objects based on the provided entity group ids list. |

### Relation Tools

| Tool | Description |
|------|-------------|
| `getRelation` | Returns relation object between two specified entities if present. |
| `findByFrom` | Returns list of relation objects for the specified entity by the 'from' direction. |
| `findInfoByFrom` | Returns list of relation info objects for the specified entity by the 'from' direction. |
| `findByTo` | Returns list of relation objects for the specified entity by the 'to' direction. |
| `findInfoByTo` | Returns list of relation info objects for the specified entity by the 'to' direction. |

### Telemetry Tools

| Tool | Description |
|------|-------------|
| `getAttributeKeys` | Get all attribute keys for the specified entity. |
| `getAttributeKeysByScope` | Get all attribute keys for the specified entity and scope. |
| `getAttributes` | Get attributes for the specified entity. |
| `getAttributesByScope` | Get attributes for the specified entity and scope. |
| `getTimeseriesKeys` | Get all time-series keys for the specified entity. |
| `getLatestTimeseries` | Get the latest time-series values for the specified entity and keys. |
| `getTimeseries` | Get time-series data for the specified entity, keys, and time range. |
| `saveDeviceAttributes` | Save device attributes. |
| `saveEntityAttributesV1` | Save entity attributes (version 1). |
| `saveEntityAttributesV2` | Save entity attributes (version 2). |
| `saveEntityTelemetry` | Save entity telemetry data. |
| `saveEntityTelemetryWithTTL` | Save entity telemetry data with time-to-live (TTL). |

### Admin Tools

| Tool | Description |
|------|-------------|
| `getAdminSettings` | Get the Administration Settings object using specified string key. |
| `getSecuritySettings` | Get the Security settings object that contains password policy, lockout limits, etc. |
| `getSystemInfo` | Get main information about system. |
| `getUsageInfo` | Retrieves usage statistics for the current tenant. |