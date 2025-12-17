* TOC
{:toc}

## Overview

[n8n](https://n8n.io/){: target="_blank"} is a [fair-code licensed](https://docs.n8n.io/reference/license/){: target="_blank"} workflow automation tool that combines AI capabilities with business process automation.

The [ThingsBoard n8n Node](https://github.com/thingsboard/thingsboard-n8n-node){: target="_blank"} enables seamless integration between [n8n workflow automation](https://n8n.io/){: target="_blank"} and ThingsBoard IoT platform. With this node, you can:

- **Manage IoT devices, assets, and customers** directly from n8n workflows
- **Access and manipulate telemetry data** in real-time with attribute and time-series operations
- **Monitor alarms** and create automated responses based on alarm severity and type
- **Navigate entity relationships** to understand your IoT infrastructure topology
- **Build AI-powered IoT automation** using n8n AI Agents with natural language commands
- **Automate complex IoT workflows** with {% if docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}61 operations across 8 resources{% else %}51 operations across 7 resources{% endif %}

## Requirements

Before you begin, ensure you have the following:

{% if docsPrefix == nil or docsPrefix == "pe/" %}
- **ThingsBoard instance**:
    - **Local/On-premise instance**: Self-hosted ThingsBoard installation on your own [infrastructure](/docs/{{docsPrefix}}user-guide/install/installation-options/){: target="_blank"}, or
{% endif %}
{% if docsPrefix == nil %}
    - **ThingsBoard Demo**: Free Community instance available at [demo.thingsboard.io](https://demo.thingsboard.io/signup){: target="_blank"}
{% endif %}
{% if docsPrefix == "pe/" %}
    - **ThingsBoard Cloud**: Fully managed cloud service available at [thingsboard.cloud](https://thingsboard.cloud/signup){: target="_blank"}
{% endif %}
{% if docsPrefix == "paas/" %}
- **ThingsBoard Cloud**: Fully managed cloud service available at [thingsboard.cloud](https://thingsboard.cloud/signup){: target="_blank"}
{% endif %}
{% if docsPrefix == "paas/eu/" %}
- **EU ThingsBoard Cloud**: Fully managed cloud service available at [eu.thingsboard.cloud](https://eu.thingsboard.cloud/signup){: target="_blank"}
{% endif %}
- **Authentication credentials**: Valid username and password with appropriate permissions on the ThingsBoard instance
- **n8n instance**:
    - **Local n8n installation**: Self-hosted n8n on your infrastructure, or
    - **Docker-based n8n deployment**: n8n running in Docker containers
    - **Cloud n8n**: Not supported at the moment, pending verification for cloud catalog

## Installation

This section describes different methods to install the ThingsBoard n8n Community Node.

### Prerequisites

Ensure n8n is installed and running on your system. For n8n installation instructions, visit [n8n documentation](https://docs.n8n.io/){: target="_blank"}.

### AI Agent Configuration (Optional)

If you plan to use the ThingsBoard node as a **tool for AI Agents**, you must enable community node tool usage in n8n. Add these environment variables:

```bash
N8N_COMMUNITY_PACKAGES_ENABLED=true
N8N_COMMUNITY_PACKAGES_ALLOW_TOOL_USAGE=true
```
{: .copy-code}

**How to set these:**
- **GUI Self-Hosted**: These must be set as environment variables before starting n8n. You cannot enable them through the GUI. Set them in your shell profile or system environment.
- **Local/npm Installation**: Export these in your shell before running `n8n start` (see Method 2 below)
- **Docker**: Add these to your `docker-compose.yml` environment section (see Method 3 below)

**Note**: If you only need the ThingsBoard node as a standard workflow node (not for AI Agents), you can skip this configuration.

### Method 1: GUI Installation (Recommended for Self-Hosted)

For self-hosted n8n instances, you can install directly via the web interface:

1. Open n8n in your browser
2. Navigate to **Settings** → **Community Nodes**
3. Click **Install a community node**
4. Enter package name: `n8n-nodes-thingsboard`
5. Click **Install**
6. Wait for installation to complete
7. Refresh your browser

**Note**: This method requires owner/admin permissions and is only available for self-hosted n8n (not n8n Cloud).

### Method 2: Manual Installation (npm)

For local n8n installations, install the node via npm:

```bash
# Create and navigate to the nodes directory
mkdir -p ~/.n8n/nodes
cd ~/.n8n/nodes

# Install the ThingsBoard node
npm install n8n-nodes-thingsboard
```
{: .copy-code}

After installation, restart n8n:

```bash
# If running n8n directly
n8n start
```
{: .copy-code}

### Method 3: Docker Installation

For n8n running in Docker, use a custom Dockerfile to persist the installation across container restarts.

Create a `Dockerfile`:

```dockerfile
FROM n8nio/n8n:latest
USER node
RUN cd /home/node/.n8n && \
    mkdir -p nodes && \
    cd nodes && \
    npm install n8n-nodes-thingsboard
```
{: .copy-code}

Create or modify your `docker-compose.yml`:

```yaml
version: "3.8"

services:
  n8n:
    build: .
    ports:
      - "5678:5678"
    environment:
      - N8N_BASIC_AUTH_ACTIVE=true
      - N8N_BASIC_AUTH_USER=admin
      - N8N_BASIC_AUTH_PASSWORD=password
    volumes:
      - n8n_data:/home/node/.n8n

volumes:
  n8n_data:
```
{: .copy-code}

Build and start the services:

```bash
docker-compose up -d --build
```
{: .copy-code}

### Method 4: n8n Cloud

The ThingsBoard node requires verification to be available on n8n Cloud. n8n Cloud supports a select group of verified community nodes included in their official catalog.

**Current Status**: Until the node is verified and included in the Cloud-available catalog, use self-hosted n8n (local or Docker) with any installation method above.

### Verify Installation

After installation and restart:

1. Open n8n in your browser (typically `http://localhost:5678`)
2. Create a new workflow
3. Click the **+** button to add a node
4. Search for **"ThingsBoard"** in the node picker
5. The **ThingsBoard** node should appear in the search results

If you don't see the node:
- Verify the npm installation completed without errors
- Ensure you restarted n8n after installation
- Check n8n logs for any loading errors

## Configuration

Before using the ThingsBoard node, configure your connection credentials:

1. In n8n, navigate to **Credentials** → **New Credential**
2. Search for **"ThingsBoard API"**
3. Fill in the required fields and click **Save** to store the credentials:

| Field        | Description                                       | Example                                                                                                                                                                                                                 |
|--------------|---------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Base URL** | ThingsBoard instance URL (without trailing slash) | {% if docsPrefix == nil %}`https://demo.thingsboard.io`{% elsif docsPrefix == "paas/eu/" %}`https://eu.thingsboard.cloud`{% elsif docsPrefix == "pe/" or docsPrefix == "paas/" %}`https://thingsboard.cloud`{% endif %} |
| **Username** | Your ThingsBoard account username                 | `$YOUR_USERNAME`                                                                                                                                                                                                        |
| **Password** | Your ThingsBoard account password                 | `$YOUR_PASSWORD`                                                                                                                                                                                                        |

The credentials are encrypted and stored securely by n8n. You can reuse the same credentials across multiple ThingsBoard nodes in different workflows.

## Usage

The ThingsBoard node supports two usage modes:

{% include images-gallery.html imageCollection="thingsboard-n8n-node" %}

### 1. As a Standard Node

Add the **ThingsBoard node** to your workflow canvas to directly perform IoT operations. This is the traditional workflow approach where you configure operations manually.

**Use cases:**
- **Direct Operations**: Configure operations with fixed values (e.g., save specific attributes to a device on a schedule)
- **Dynamic Operations**: Pass data from previous nodes using expressions (e.g., process alarm webhook → extract entity ID → get attributes → send notification)

**Operation Modes**: For create operations (Device, Asset, Dashboard), you can choose:
- **Params Mode**: Use simple form fields (name, type, label, customer ID)
- **JSON Mode**: Paste a complete ThingsBoard entity JSON object

### 2. As a Tool for AI Agents

Connect ThingsBoard operations to an **AI Agent node** to enable conversational IoT control with natural language commands.

**Use case**: *"Show me all devices"* → Agent calls ThingsBoard → Natural language response

**Prerequisites**: See the [AI Agent Configuration](#ai-agent-configuration-optional) section above for environment variable setup.

*Screenshot showing ThingsBoard as a tool in AI Agent configuration will be added here*

See [Usage Examples](#usage-examples) below for detailed walkthroughs with screenshots.

## Available Operations

The ThingsBoard n8n node provides comprehensive IoT operations organized by resource type:

- **Device Operations** - Create, retrieve, delete, and manage devices with customer assignments
- **Asset Operations** - Full asset lifecycle management with profiles and assignments
- **Customer Operations** - Create and manage customers and customer-entity relationships
- **Dashboard Operations** - Create and manage dashboards and their configurations
- **Telemetry Operations** - Get/save attributes and time-series data with TTL settings
- **Alarm Operations** - Fetch and monitor alarms by severity, type, or originator
- **Relation Operations** - Navigate entity relationships with bidirectional support
{% if docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}
- **Entity Group Operations** - Manage entity groups and query entities by group
{% endif %}

For a complete list of operations, see the [node documentation on npm](https://www.npmjs.com/package/n8n-nodes-thingsboard){: target="_blank"} or explore available operations in the n8n node interface.

## Common Integration Patterns

Here are proven workflow patterns for different automation scenarios:

### Pattern 1: IoT Data Pipeline
```
Webhook → ThingsBoard (Save Telemetry) → Process Data → Save Attributes
```
Receive sensor data via webhook, save to ThingsBoard, process it, and update device attributes.

### Pattern 2: Device Management
```
Schedule Trigger → Get Tenant Devices → Filter Inactive → Send Alert
```
Daily check for inactive devices and send notifications to administrators.

### Pattern 3: Data Export
```
ThingsBoard (Get Timeseries) → Transform Data → Google Sheets / Database
```
Export telemetry data for reporting and analysis in external systems.

### Pattern 4: Intelligent Monitoring
```
AI Agent ← Chat Interface
    ↓
ThingsBoard Tools (Get/Save/Delete operations)
    ↓
Automated device management based on natural language commands
```
Enable non-technical users to manage IoT infrastructure through conversational AI.

## Usage Examples

This section provides practical examples demonstrating the three usage patterns of the ThingsBoard n8n node.

### Example 1: AI Agent Tool - Conversational IoT Control

Use the ThingsBoard node as a **tool for AI Agents** to enable intelligent, natural language IoT automation.

{% include images-gallery.html imageCollection="n8n-ai-agent-usecase" %}

**How it works**:
1. User sends a chat message: *"What devices do I have and what's their status?"*
2. AI Agent (powered by Google Gemini or OpenAI GPT-4) has access to ThingsBoard tools
3. Agent autonomously calls:
   - `Get devices in ThingsBoard` → Retrieves device list
   - `Get timeseries in ThingsBoard` → Fetches latest telemetry
4. Agent responds in natural language with the actual data

**Natural language commands**:
- *"Show me the temperature of my living room sensor"*
- *"Which devices are offline right now?"*
- *"Update the threshold on device X to 30 degrees"*
- *"Send me an alert if any temperature exceeds 25°C"*

The AI agent understands context and calls the appropriate ThingsBoard operations automatically!

**Workflow Configuration**:
1. **Chat Trigger** - Accept user queries
2. **AI Agent Node** - Process natural language queries
   - Model: OpenAI GPT-4, Google Gemini, or similar
   - Tools: ThingsBoard node (all operations available)
3. **Output Node** - Return AI response

---

### Example 2: Direct Operations - Fixed Values

Configure operations with **hardcoded values** directly in the node interface. Perfect for scheduled tasks and testing.

{% include images-gallery.html imageCollection="n8n-save-attributes" %}

**Use Case**: Save configuration attributes to a specific device on a schedule

**Configuration**:
- **Resource**: Telemetry
- **Operation**: Save Entity Attributes
- **Entity Type**: DEVICE
- **Entity ID**: `2d2c8cc0-d75a-11f0-9e9b-db8ef79a21ad` *(hardcoded)*
- **Scope**: SERVER_SCOPE
- **Attributes JSON**: Direct JSON input

```json
{
  "stringKey": "value1",
  "booleanKey": true,
  "doubleKey": 42.0,
  "longKey": 73,
  "jsonKey": {
    "someNumber": 42,
    "someArray": [1, 2, 3],
    "someNestedObject": {"key": "value"}
  }
}
```

**Typical Use Cases**:
- Daily configuration updates on a schedule
- Testing API operations during development
- One-time bulk data migrations
- Periodic attribute updates with fixed values

---

### Example 3: Dynamic Operations - Device Telemetry Query

Pass data between nodes using **expressions** to create dynamic, data-driven workflows. This example demonstrates how to find a device by name and retrieve its telemetry data.

{% include images-gallery.html imageCollection="n8n-rule-chain-usecase" %}

**Use Case**: Find device by name and fetch its complete telemetry history

**Workflow Steps**:

1. **Execute Workflow Trigger** - Start workflow with manual JSON input:
   ```json
   {
     "deviceName": "Refrigerator"
   }
   ```

2. **ThingsBoard Node** - Get a device by name
   - **Resource**: Device
   - **Operation**: Get by Name
   - **Device Name**: `{{ $json.deviceName }}` *(dynamically references "Refrigerator" from trigger)*

3. **ThingsBoard Node** - Timeseries keys
   - **Entity ID**: `{{ $json.id.id }}` *(extracts device ID from previous node)*
   - **Entity Type**: `{{ $json.id.entityType }}` *(extracts "DEVICE" from previous node)*

4. **ThingsBoard Node** - Get timeseries
   - **Entity ID**: `{{ $('Get a device by name').item.json.id.id }}` *(device ID from step 2)*
   - **Entity Type**: `{{ $('Get a device by name').item.json.id.entityType }}` *(type from step 2)*
   - **Keys**: `{{ $json.keys.join(',') }}` *(all keys from step 3)*
   - **Start Time**: Custom timestamp (e.g., last 7 days)
   - **End Time**: Current timestamp

**Note**: This example uses Execute Workflow trigger for simplicity, but you can choose different trigger types to execute your workflow (Schedule, Webhook, Manual, HTTP Request, etc.) depending on your automation needs.

**Common Dynamic Patterns**:
- Processing ThingsBoard webhooks and rule engine outputs
- Dynamic device operations based on user input or external triggers
- Building complex IoT automation pipelines with data flow
- Integrating with external systems (Slack, email, databases, CRM)

## API Reference

The ThingsBoard n8n node is built on top of the ThingsBoard REST API. For detailed information about API endpoints, request/response formats, and additional parameters, refer to the [ThingsBoard REST API documentation](https://thingsboard.io/docs/{{docsPrefix}}reference/rest-api/){: target="_blank"}.

## Links

- **npm Package**: [n8n-nodes-thingsboard](https://www.npmjs.com/package/n8n-nodes-thingsboard){: target="_blank"}
- **GitHub Repository**: [thingsboard/thingsboard-n8n-node](https://github.com/thingsboard/thingsboard-n8n-node){: target="_blank"}
- **n8n Documentation**: [docs.n8n.io](https://docs.n8n.io/){: target="_blank"}
- **n8n Community**: [community.n8n.io](https://community.n8n.io/){: target="_blank"}
- **ThingsBoard REST API**: [REST API Reference](/docs/{{docsPrefix}}reference/rest-api/){: target="_blank"}

## Support

If you encounter issues or have questions about the ThingsBoard n8n node:

- **GitHub Issues**: [Report bugs or request features](https://github.com/thingsboard/thingsboard-n8n-node/issues){: target="_blank"}
- **ThingsBoard Community**: [Get help from the community](https://thingsboard.io/community/){: target="_blank"}
- **n8n Community**: [n8n community](https://community.n8n.io/){: target="_blank"}

## License

MIT License - see the [LICENSE file](https://github.com/thingsboard/thingsboard-n8n-node/blob/master/LICENSE.md){: target="_blank"} for details.

---
