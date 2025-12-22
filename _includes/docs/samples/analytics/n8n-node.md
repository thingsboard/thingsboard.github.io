* TOC
{:toc}

[n8n](https://n8n.io/){: target="_blank"} is a workflow automation platform with a [fair-code license](https://docs.n8n.io/reference/license/){: target="_blank"} that combines traditional business process automation with AI capabilities.

The [ThingsBoard n8n Node](https://github.com/thingsboard/thingsboard-n8n-node){: target="_blank"} provides deep and native integration between n8n and the ThingsBoard IoT Platform, enabling you to manage IoT infrastructure directly from [n8n workflows](https://n8n.io/){: target="_blank"}.

- **Manage IoT devices, assets, and customers** directly from n8n workflows
- **Access and manipulate telemetry data** in real-time with attribute and time-series operations
- **Monitor alarms** and create automated responses based on alarm severity and type
- **Navigate entity relationships** to understand your IoT infrastructure topology
- **Build AI-powered IoT automation** using n8n AI Agents with natural language commands
- **Automate complex IoT workflows** with {% if docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}61 operations across 8 resources{% else %}51 operations across 7 resources{% endif %}

## When to use n8n with ThingsBoard

ThingsBoard already provides powerful automation capabilities through its Rule Engine.  
However, **n8n complements ThingsBoard** by enabling advanced workflow automation that goes beyond IoT-specific logic.

Use **n8n with ThingsBoard** when you need:
- Integration with **external business systems** (CRM, ERP, Google Sheets, Slack, Email, Databases)
- **Human-in-the-loop** workflows (approvals, notifications, AI decisions)
- **Scheduled and batch operations**
- Complex orchestration across **multiple systems**
- **AI-driven automation** using natural language

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
    - **Cloud n8n**: The ThingsBoard node requires official verification to be listed in the n8n Cloud catalog.

## Installation

This section describes all available methods for installing the **ThingsBoard n8n Community Node**.

### Prerequisites

Make sure that n8n is already installed and running.
Installation instructions are available in the official [n8n documentation](https://docs.n8n.io/){: target="_blank"}.

### AI Agent Configuration (Optional)

{% capture difference %}
**Note:** If you are using the ThingsBoard node only as a regular workflow node (not for AI Agents), you can skip this step.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

If you plan to use the ThingsBoard node as a **tool for AI Agents**, you must enable community node tool usage in n8n.   
Add the following environment variables:

```text
N8N_COMMUNITY_PACKAGES_ENABLED=true
N8N_COMMUNITY_PACKAGES_ALLOW_TOOL_USAGE=true
```
{: .copy-code}

**How to set these:**
- **GUI Self-Hosted**  
  The variables must be set before starting n8n. It is not possible to configure them via the UI. Set them in your shell profile or system environment.
- **Local/npm installation**   
  Export the variables in your shell before running `n8n start` (see [Method 2](#method-2-manual-installation-npm)).
- **Docker**   
  Add the variables to the `docker-compose.yml` file in the environment section (see [Method 3](#method-3-docker-installation)).

### Method 1: GUI installation (Recommended for Self-Hosted)

For self-hosted n8n instances, you can install directly via the web interface:

1. Open **n8n** in your browser. 
2. In the bottom-left corner, click the **three dots** button and select **Settings** from the dropdown menu. 
3. Go to the **Community Nodes** tab. 
4. Click **Install a community node**. 
5. Enter the package name: `n8n-nodes-thingsboard` and click **Install**. 
6. Wait for the installation to complete. 
7. Refresh the browser page.

{% assign n8nGuiInstallation = '
    ===
        image: /images/samples/analytics/n8n-node/n8n-gui-installation-1.png
        title: Open **n8n** in your browser. In the bottom-left corner, click the **three dots** button and select **Settings** from the dropdown menu.
   ===
        image: /images/samples/analytics/n8n-node/n8n-gui-installation-2.png
        title: Go to the **Community Nodes** tab and click **Install a community node**.
   ===
        image: /images/samples/analytics/n8n-node/n8n-gui-installation-3.png
        title: Enter the package name: `n8n-nodes-thingsboard` and click **Install**.
    ===
        image: /images/samples/analytics/n8n-node/n8n-gui-installation-4.png
        title: Wait for the installation to complete. Then, refresh the browser page.
'
%}

{% include images-gallery.liquid imageCollection=n8nGuiInstallation %}

**Note**: This method requires owner/admin permissions and is only available for self-hosted n8n (not n8n Cloud).

**AI Agent Tool Usage**: To use the ThingsBoard node as an AI Agent tool, you must set the `N8N_COMMUNITY_PACKAGES_ALLOW_TOOL_USAGE=true` environment variable before starting n8n. This cannot be configured via the GUI - see the [AI Agent Configuration](#ai-agent-configuration-optional) section above.

### Method 2: Manual installation (npm)

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

To use the ThingsBoard node as an AI Agent Tool, restart n8n with the environment variable:

```bash
# If running n8n directly
N8N_COMMUNITY_PACKAGES_ALLOW_TOOL_USAGE=true n8n start
```
{: .copy-code}

### Method 3: Docker installation

**Step 1**: Create a directory for n8n and navigate to it:

```bash
mkdir n8n
cd n8n
```
{: .copy-code}

**Step 2**: Create a `docker-compose.yml` file in this directory:

```yaml
services:
  n8n:
    image: n8nio/n8n:latest
    ports:
      - "5678:5678"
    environment:
      - N8N_BASIC_AUTH_ACTIVE=true
      - N8N_BASIC_AUTH_USER=admin
      - N8N_BASIC_AUTH_PASSWORD=password
      # Uncomment the lines below to use ThingsBoard node as AI Agent tool
      # - N8N_COMMUNITY_PACKAGES_ENABLED=true
      # - N8N_COMMUNITY_PACKAGES_ALLOW_TOOL_USAGE=true
    volumes:
      - n8n_data:/home/node/.n8n

volumes:
  n8n_data:
```
{: .copy-code}

**AI Agent Tool Usage**: To use the ThingsBoard node as an AI Agent tool, uncomment the two environment variable lines in the environment section above. See the [AI Agent Configuration](#ai-agent-configuration-optional) section for details.

**Step 3**: Start the services:

```bash
docker-compose up -d
```
{: .copy-code}

**Step 4**: After n8n starts, install the ThingsBoard node using the GUI method ([Method 1](#method-1-gui-installation-recommended-for-self-hosted)):

1. Open n8n in your browser (`http://localhost:5678`)
2. Navigate to **Settings** → **Community Nodes**
3. Install `n8n-nodes-thingsboard`
4. Refresh your browser

### Credentials configuration

Before using the ThingsBoard node, configure your connection credentials:

1. In the top-left corner, click **+** and select **Credentials** from the dropdown menu.
2. Search and select **ThingsBoard API** to connect to and click **Continue**.
3. Fill in the required fields:
   - **Base URL** — your ThingsBoard instance URL (without a trailing slash) (for example {% if docsPrefix == nil %}`https://demo.thingsboard.io`{% elsif docsPrefix == "paas/eu/" %}`https://eu.thingsboard.cloud`{% elsif docsPrefix == "pe/" or docsPrefix == "paas/" %}`https://thingsboard.cloud`{% endif %})
   - **Username** — your ThingsBoard account username (email)
   - **Password** — your ThingsBoard account password
4. Click **Save** to store the credentials.

{% capture difference %}
The credentials are encrypted and stored securely by n8n. You can reuse the same credentials across multiple ThingsBoard nodes in different workflows.
{% endcapture %}
{% include templates/info-banner.md content=difference %}


{% assign n8nGuiInstallation = '
    ===
        image: /images/samples/analytics/n8n-node/credentials-configuration-1.png
        title: In the top-left corner, click **+** and select **Credentials** from the dropdown menu.
    ===
        image: /images/samples/analytics/n8n-node/credentials-configuration-2.png
        title: Search and select **ThingsBoard API** to connect to and click **Continue**.
    ===
        image: /images/samples/analytics/n8n-node/credentials-configuration-3.png
        title: Fill in the required fields:<br>- **Base URL** — your ThingsBoard instance URL (without a trailing slash)<br>- **Username** — your ThingsBoard account username<br>- **Password** — your ThingsBoard account password.<br>Click **Save** to store the credentials.
    ===
        image: /images/samples/analytics/n8n-node/credentials-configuration-4.png
        title: The credentials are encrypted and stored securely by n8n. You can reuse the same credentials across multiple ThingsBoard nodes in different workflows.
'
%}

{% include images-gallery.liquid imageCollection=n8nGuiInstallation %}

### Installation Verification

After installing the node and restarting n8n, follow these steps to verify that the ThingsBoard n8n Node has been successfully installed and is available:

1. **Open n8n in your browser**
   Typically, the n8n interface is available at [http://localhost:5678](http://localhost:5678){:target="_blank"}    
   (or via a custom domain/port if modified in your configuration).
2. **Create a new workflow**   
   In the top-right corner of the interface, click Create Workflow.
3. **Add a new node**   
   On the workflow canvas, click the **+** button to open the list of available nodes.
4. **Find the ThingsBoard node**   
   In the node search field, type **ThingsBoard**. The **ThingsBoard node** should appear in the search results. Click on it.
5. **Verify node availability**   
   A list of available **actions** will be displayed.

Note: the number of operations may differ between **Community Edition** and **Professional Edition**.

{% assign installationVerification = '
    ===
        image: /images/samples/analytics/n8n-node/installation-verification-1.png
        title: In the top-right corner of the interface, click Create Workflow.
    ===
        image: /images/samples/analytics/n8n-node/installation-verification-2.png
        title: On the workflow canvas, click the **+** button to open the list of available nodes.
    ===
        image: /images/samples/analytics/n8n-node/installation-verification-3.png
        title: In the node search field, type **ThingsBoard**. The **ThingsBoard node** should appear in the search results. Click on it.
    ===
        image: /images/samples/analytics/n8n-node/installation-verification-4.png
        title: A list of available **actions** will be displayed.
'
%}

{% include images-gallery.liquid imageCollection=installationVerification %}

If you don&#39;t see the node:
- Verify the npm installation completed without errors
- Ensure you restarted n8n after installation
- Check n8n logs for any loading errors

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

**Workflow Configuration**:

1. **Create a new workflow with AI Agent node**
   - Choose your AI Model (Gemini, Anthropic, ChatGPT, etc.)
   - Configure memory settings

2. **Add ThingsBoard Tools**
   - Select ThingsBoard from the Tools list
   - Add **Get devices** and **Get timeseries** operations

3. **Open chat and interact**
   - Open the chat interface
   - Write your natural language query

{% assign example1 = '
    ===
        image: /images/samples/analytics/n8n-node/example-1-1-0.png
        title: Create a new workflow with AI Agent node. Choose your AI Model (Gemini, Anthropic, ChatGPT, etc.) and configure memory settings.
    ===
        image: /images/samples/analytics/n8n-node/example-1-1-1.png
        title: Select ThingsBoard from the Tools list. Add **Get devices** and **Get timeseries** operations.
    ===
        image: /images/samples/analytics/n8n-node/ai-agent-define-parameter.png
        title: For tools with required or optional fields, the AI model intelligently determines parameter values based on conversation context. The model decides which values to pass automatically.
    ===
        image: /images/samples/analytics/n8n-node/example-1-2.png
        title: Open the chat interface and write your natural language query.
'
%}

{% include images-gallery.liquid imageCollection=example1 %}

**How it works**:
1. User sends a chat message: *"What devices do I have and what's their telemetry?"*
2. AI Agent (powered by Google Gemini, Anthropic, or OpenAI GPT-4) has access to ThingsBoard tools
3. The AI model automatically determines which parameter values to pass based on the conversation context
4. Agent autonomously calls:
   - `Get devices in ThingsBoard` → Retrieves device list
   - `Get timeseries in ThingsBoard` → Fetches latest telemetry
5. Agent responds in natural language with the actual data

**Natural language commands**:
- *"Show me the temperature of my living room sensor"*
- *"Which devices are offline right now?"*
- *"Update the threshold on device X to 30 degrees"*
- *"Send me an alert if any temperature exceeds 25°C"*

The AI agent understands context and calls the appropriate ThingsBoard operations automatically!

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

### Example 3: Dynamic operations - device telemetry query

This example demonstrates how to build a dynamic, data-driven workflow in n8n by passing data between nodes using expressions.   
You will learn how to:
- accept dynamic input (device name), 
- find a device in ThingsBoard by its name, 
- retrieve available telemetry keys, 
- query telemetry data for that device.

<b><font size="3">Use case</font></b>

Find a device by name and retrieve its telemetry data dynamically.

This pattern is commonly used when:
- device identifiers are not known in advance,
- workflows are triggered by external input (webhooks, chat, API calls),
- you want to reuse the same workflow for different devices.

---

<b><font size="4">Workflow steps</font></b>

<b><font size="3">Step 1: Trigger — manual JSON input</font></b>

This step simulates an external input (for example, webhook or API call).

**Configuration**
- Click **Add first step…** 
- Select **Trigger manually** 
- Click on the trigger node to open its configuration 
- In the top-right corner, click the **pencil** icon 
- Paste the following JSON into the input field:

```json
{
  "deviceName": "Refrigerator"
}
```
{:.copy-code}

- Save the changes
- **Back to canvas**

{% assign example31 = '
    ===
        image: /images/samples/analytics/n8n-node/example-3-1-1.png
        title: Click **Add first step…** and select **Trigger manually**.
    ===
        image: /images/samples/analytics/n8n-node/example-3-1-2.png
        title: Click on the trigger node to open its configuration.
===
        image: /images/samples/analytics/n8n-node/example-3-1-3.png
        title: In the top-right corner, click the **pencil** icon.
    ===
        image: /images/samples/analytics/n8n-node/example-3-1-4.png
        title: Paste the following JSON into the input field. **Save** the changes and **back to canvas**.
'
%}

{% include images-gallery.liquid imageCollection=example31 %}

<br><b><font size="4">Result</font></b>

The workflow now has an input parameter <span class="code-light">deviceName</span> that will be used in subsequent steps.

---

<b><font size="3">Step 2: ThingsBoard — Get device by name</font></b>

This step retrieves the device entity from ThingsBoard using the name provided by the trigger.

**Configuration**
- Click the **+** button to the right of the **trigger node**
- Find and select **ThingsBoard**
- Choose **Get device by name** action
- In the **Parameters** panel:
  - Drag <span class="code-light">deviceName</span> from the **INPUT** panel (left side) into the **Name** field   
  This creates a dynamic reference to the trigger input.

- Click **Execute step**
- **Back to canvas**

{% assign example32 = '
    ===
        image: /images/samples/analytics/n8n-node/example-3-2-1.png
        title: Click the **+** button to the right of the **trigger node**.
    ===
        image: /images/samples/analytics/n8n-node/example-3-2-2.png
        title: Find and select **ThingsBoard**
    ===
        image: /images/samples/analytics/n8n-node/example-3-2-3.png
        title: Choose **Get a device by name** action.
    ===
        image: /images/samples/analytics/n8n-node/example-3-2-4.png
        title: Drag **deviceName** from the **INPUT** panel (left side) into the **Name** field. This creates a dynamic reference to the trigger input.
    ===
        image: /images/samples/analytics/n8n-node/example-3-2-5.png
        title: Click **Execute step**
    ===
        image: /images/samples/analytics/n8n-node/example-3-2-6.png
        title: The node returns the full device object, including:<br>- device ID<br>- <span class="code-light">type</span><br>- additional metadata<br>**Back to canvas**.
'
%}

{% include images-gallery.liquid imageCollection=example32 %}

<br><b><font size="4">Result</font></b>

The node returns the full device object, including:
- Device ID
- Type
- Additional metadata

---

<b><font size="3">Step 3: ThingsBoard — Get timeseries keys</font></b>

This step retrieves all available telemetry keys for the selected device.

**Configuration**
- Click the **+** button to the right of the **Get a device by name** node.
- Select **ThingsBoard**
- Choose **Get timeseries keys** action
- Set parameters dynamically:
  - Entity ID 
  - Entity Type   
  You can drag these values directly from the **INPUT** panel (left side)   

- Click **Execute step**
- **Back to canvas**

{% assign example33 = '
    ===
        image: /images/samples/analytics/n8n-node/example-3-3-1.png
        title: - Click the **+** button to the right of the **Get a device by name** node.<br>- Select **ThingsBoard**<br>- Choose **Get timeseries keys** action.
    ===
        image: /images/samples/analytics/n8n-node/example-3-3-2.png
        title: - Set parameters dynamically:<br>- Entity ID<br>- Entity Type<br>You can drag these values directly from the **INPUT** panel (left side).<br>- Click **Execute step**<br>- **Back to canvas**
'
%}

{% include images-gallery.liquid imageCollection=example33 %}

<br><b><font size="4">Result</font></b>

The node returns a list of telemetry keys available for the device (e.g. temperature, humidity).

---

<b><font size="3">Step 4: ThingsBoard — Get timeseries data</font></b>

This step retrieves the actual telemetry values using the keys obtained in Step 3.

**Configuration**
- Click the **+** button to the right of the **Get timeseries keys** node.
- Select **ThingsBoard**
- Choose **Get timeseries** action
- Configure parameters:
  - Get a device by name -> id -> **id** to **Entity ID**
  - Get a device by name -> id -> **entityType** to **Entity Type**
  - Get timeseries keys -> **timeseriesKeys** to **Keys (Comma Separated)**

    **Note**: The **Keys** field accepts a comma-separated string. Since **timeseriesKeys** returns an array, you need to convert it using the `.join(',')` operation.

- Click **Execute step**
- **Back to canvas**

{% assign example34 = '
    ===
        image: /images/samples/analytics/n8n-node/example-3-4-1.png
        title: Click the **+** button to the right of the trigger node.<br>Select **ThingsBoard**.<br>Choose **Get timeseries action**.
    ===
        image: /images/samples/analytics/n8n-node/example-3-4-2.png
        title: Configure parameters:<br>- **Entity ID**<br>- **Entity Type**<br>- **Keys (Comma Separated)**<br>You can drag these values directly from the **INPUT** panel (left side).<br>- Click **Execute step**.<br>- **Back to canvas**.
'
%}

{% include images-gallery.liquid imageCollection=example34 %}

<br><b><font size="4">Result</font></b>

The workflow returns time-series telemetry data for the selected device and time range.

---

<b><font size="4">Final result</font></b>

This workflow dynamically:
1. Accepts a device name as input 
2. Finds the corresponding device in ThingsBoard 
3. Discovers available telemetry keys 
4. Retrieves telemetry values for the specified time window

{% assign ruleChainUseCase = '
    ===
        image: /images/samples/analytics/n8n-node/example-3-final-1.png
        title: Accepts a device name as input. Finds the corresponding device in ThingsBoard.
    ===
        image: /images/samples/analytics/n8n-node/example-3-final-2.png
        title: Discovers available telemetry keys.
    ===
        image: /images/samples/analytics/n8n-node/example-3-final-3.png
        title: Retrieves telemetry values for the specified time window.
'
%}

{% include images-gallery.liquid imageCollection=ruleChainUseCase %}

<b><font size="4">Notes and best practices</font></b>

- Although this example uses **Trigger manually**, the same workflow can be triggered by:
  - Webhook
  - Schedule 
  - HTTP Request 
  - Chat / AI Agent 
- Always prefer **dynamic expressions** over hardcoded IDs for reusable workflows

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
