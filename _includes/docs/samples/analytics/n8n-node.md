* TOC
{:toc}

[n8n](https://n8n.io/){: target="_blank"} is a workflow automation platform that lets you connect ThingsBoard to hundreds of other services.

The [ThingsBoard n8n Node](https://github.com/thingsboard/thingsboard-n8n-node){: target="_blank"} gives you direct access to your IoT entities, telemetry, and alarms from n8n workflows.

- **Manage IoT devices, assets, and customers** directly from n8n workflows
- **Access and manipulate telemetry data** in real-time with attribute and time-series operations
- **Monitor alarms** and create automated responses based on alarm severity and type
- **Navigate entity relationships** to understand your IoT infrastructure topology
- **Build AI-powered IoT automation** using n8n AI Agents with natural language commands

## Quick Start: Your First Workflow

Here's what you can build in 5 minutes - a real-world data pipeline that exports IoT telemetry to cloud storage.

**Scenario**: Every day at midnight, automatically export the last 24 hours of device telemetry to AWS S3 as JSON files for data warehousing, analytics, or compliance archival.

**The Workflow**:
```
Schedule (Daily at 00:00 UTC)
    ↓
Code node (calculate last 24h time range in MS)
    ↓
ThingsBoard: Get device by a name
    ↓
ThingsBoard: Get timeseries data for device
    ↓
Convert to File (JSON format)
    ↓
Upload to AWS S3
```

{% assign quickExample = '
    ===
        image: /images/samples/analytics/n8n-node/quick-example.png
        title: The complete workflow showing all nodes: Schedule trigger → Code (time calc) → Get device → Get timeseries → Convert to file → AWS S3 upload.
    ===
        image: /images/samples/analytics/n8n-node/quick-example-result.png
        title: Successful execution result showing the telemetry data exported to S3 as a JSON file.
'
%}

{% include images-gallery.liquid imageCollection=quickExample %}

This is a production-ready pattern used for IoT data archival, analytics pipelines, and compliance logging.

Want to see the full step-by-step walkthrough with code details? Jump to [Example 2: Daily Telemetry Export to AWS S3](#example-2-daily-telemetry-export-to-aws-s3) after installation.

## When to use n8n with ThingsBoard

ThingsBoard's Rule Engine is great for IoT-specific automation. But when you need to connect to external systems that ThingsBoard doesn't integrate with natively, n8n fills the gap.

**Use n8n when you need to**:
- Archive telemetry to **AWS S3**, **Google Cloud Storage**, or **Azure Blob** for data warehousing
- Export data to **databases** (PostgreSQL, Snowflake, ClickHouse) for analytics
- Create tickets in **Jira**, **ServiceNow**, or other ticketing systems
- Sync device data with **CRMs** (Salesforce, HubSpot) or **ERPs**
- Let non-technical users write query via **AI chat**

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

Before you start, make sure n8n is already running. Check the [official n8n docs](https://docs.n8n.io/){: target="_blank"} if you need to install it first.

### Install the ThingsBoard Node

{% capture difference %}
**Note:** Community nodes require `N8N_COMMUNITY_PACKAGES_ENABLED=true` in your n8n environment. Most n8n installations have this enabled by default. If you can't access the Community Nodes section in Settings, you'll need to set this variable before starting n8n.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

**Recommended: Use the n8n GUI** (for self-hosted instances):

1. Open n8n in your browser
2. Click the **three dots** (bottom-left) → **Settings** → **Community Nodes**
3. Click **Install a community node**
4. Enter: `@thingsboard/n8n-nodes-thingsboard` and click **Install**
5. Refresh your browser

{% assign n8nGuiInstallation = '
    ===
        image: /images/samples/analytics/n8n-node/n8n-gui-installation-1.png
        title: Open **n8n** in your browser. In the bottom-left corner, click the **three dots** button and select **Settings** from the dropdown menu.
   ===
        image: /images/samples/analytics/n8n-node/n8n-gui-installation-2.png
        title: Go to the **Community Nodes** tab and click **Install a community node**.
   ===
        image: /images/samples/analytics/n8n-node/n8n-gui-installation-3.png
        title: Enter the package name: `@thingsboard/n8n-nodes-thingsboard` and click **Install**.
    ===
        image: /images/samples/analytics/n8n-node/n8n-gui-installation-4.png
        title: Wait for the installation to complete. Then, refresh the browser page.
'
%}

{% include images-gallery.liquid imageCollection=n8nGuiInstallation %}

### Configure AI Agent Support (Optional)

Skip this if you're only using the node in regular workflows (not with AI agents).

To let AI agents use ThingsBoard as a tool, add this **additional** environment variable before starting n8n:

```text
N8N_COMMUNITY_PACKAGES_ALLOW_TOOL_USAGE=true
```
{: .copy-code}

**How to set it**:
- **Docker**: Add to `docker-compose.yml` environment section (along with `N8N_COMMUNITY_PACKAGES_ENABLED=true`)
- **npm/local**: Export in your shell: `N8N_COMMUNITY_PACKAGES_ALLOW_TOOL_USAGE=true n8n start`

### Configure Credentials

Connect n8n to your ThingsBoard instance:

1. Click **+** (top-left) → **Credentials**
2. Search for **ThingsBoard API** → **Continue**
3. Fill in your ThingsBoard details:
   - **Base URL**: Your instance URL (e.g., {% if docsPrefix == nil %}`https://demo.thingsboard.io`{% elsif docsPrefix == "paas/eu/" %}`https://eu.thingsboard.cloud`{% elsif docsPrefix == "pe/" or docsPrefix == "paas/" %}`https://thingsboard.cloud`{% endif %})
   - **Username**: Your email
   - **Password**: Your password
4. Click **Save**

These credentials work across all ThingsBoard nodes in your workflows.


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

### Verify Installation

After installing the node and restarting n8n, verify the ThingsBoard node is available:

1. **Open n8n** in your browser (typically [http://localhost:5678](http://localhost:5678){:target="_blank"})
2. **Create a new workflow** - Click **Create Workflow** in the top-right corner
3. **Add a node** - Click the **+** button on the workflow canvas
4. **Search for ThingsBoard** - Type "ThingsBoard" in the search field
5. **Verify it appears** - You should see the ThingsBoard node with available actions

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

**Note**: The number of operations may differ between Community Edition and Professional Edition.

**If you don't see the node**:
- Verify `N8N_COMMUNITY_PACKAGES_ENABLED=true` is set
- Check that npm installation completed without errors
- Restart n8n after installation
- Check n8n logs for loading errors

## How to Use the Node

{% assign n8nUsageNode = '
    ===
        image: /images/samples/analytics/n8n-node/thingsboard-n8n-node.png
        title: A ThingsBoard Node and a ThingsBoard Tool for AI Agent.
'
%}

{% include images-gallery.html imageCollection=n8nUsageNode %}



There are two ways to use the ThingsBoard node:

### 1. Regular Workflow Node

Drag the ThingsBoard node onto your canvas and configure what you want to do (get devices, save telemetry, create alarms, etc.).

Good for:
- Scheduled tasks (daily reports, health checks)
- Webhooks (incoming sensor data, external triggers)
- Multi-step workflows (get device → fetch telemetry → send to Slack)

### 2. AI Agent Tool

Give an AI agent access to ThingsBoard operations. Users can then ask questions in plain English instead of building workflows.

Good for:
- Non-technical users querying entities, data, etc
- Support teams troubleshooting issues

**Setup required**: See [AI Agent Configuration](#configure-ai-agent-support-optional) above.

Check out the [examples below](#usage-examples) to see both approaches in action.

## Common Workflow Patterns

**Archive telemetry to cloud storage**: Schedule (daily) → Code (calc time range) → Get timeseries → Convert to file → S3/GCS upload

**Create tickets from alarms**: Webhook (alarm) → Check severity → Create Jira/ServiceNow ticket

**Customer onboarding automation**: CRM webhook (new customer) → Create devices and dashboard → Assign to customer

**AI-powered queries**: Chat → AI Agent → ThingsBoard operations → Natural language response

## Usage Examples

This section provides practical examples demonstrating the three usage patterns of the ThingsBoard n8n node.

### Example 1: AI Agent

**Real-world scenario**: Ask questions in plain text to check entities, their status, query data, update configurations, etc.

**Why this matters**:
- Just ask what you need (“Which devices are offline?”, “Show today’s temperature”) and the node handles the technical part for you.
- Reduces bottlenecks in your IoT operations

**Setup**: Use the ThingsBoard node as a **tool for AI Agents** to enable conversational IoT control

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
1. User asks: *"Which freezers in the warehouse are showing temperatures above -10°C?"*
2. AI Agent (powered by Google Gemini, Anthropic, or OpenAI) automatically:
   - Calls `Get devices` to find all freezer devices
   - Calls `Get timeseries` for temperature readings
   - Filters results and responds in plain language
3. No code, no API knowledge needed

**Real queries your team can ask**:
- *"Show me all devices that haven't sent data in the last 24 hours"*
- *"What's the current temperature of Freezer 3?"*
- *"Which sensors are in Building A?"*
- *"Get me the last week of humidity data for all warehouse sensors"*

This democratizes IoT access - anyone can query your infrastructure without knowing ThingsBoard's API.

---

### Example 2: Daily Telemetry Export to AWS S3

**Real-world scenario**: Every night, export device telemetry to S3, but also enrich it with device metadata from your CRM, convert to Parquet format for Athena, and trigger a Lambda function to update your data warehouse. One workflow, multiple outputs.

**Why use n8n instead of ThingsBoard's native export**:
- **Multi-destination** - Send the same data to S3 + Snowflake + email report in one workflow
- **Data transformation** - Enrich telemetry with business context (customer names, locations from CRM)
- **Custom formats** - Convert to Parquet, Avro, or CSV with specific schemas for your analytics tools
- **Conditional logic** - Export only specific devices, filter by customer tier, or aggregate before storage
- **Integration chains** - After S3 upload → Trigger AWS Lambda → Update tracking database → Send Slack notification

---

<b><font size="4">Building the workflow</font></b>

<b><font size="3">Step 1: Create a new workflow and add Schedule Trigger</font></b>

Start by creating a new workflow and adding a Schedule Trigger to run the export daily at midnight UTC.

**Configuration**:
- Click **Add first step…** → Select **Schedule Trigger**
- Set **Trigger Interval**: Every day at 00:00 (midnight)
- This ensures your export runs automatically every 24 hours

{% assign example21 = '
    ===
        image: /images/samples/analytics/n8n-node/example-2-1.png
        title: Create a new workflow and select **Schedule Trigger** to run the export daily.
    ===
        image: /images/samples/analytics/n8n-node/example-2-2.png
        title: Configure the trigger to run every day at 00:00 UTC (midnight).
'
%}

{% include images-gallery.liquid imageCollection=example21 %}

<br>**What you just did**: Set up automated daily execution at midnight UTC.

---

<b><font size="3">Step 2: Add Code node for time range calculation</font></b>

ThingsBoard's API requires timestamps in milliseconds. Add a Code node to calculate the exact 24-hour time range.

**Configuration**:
- Click **+** after the Schedule node → Select **Code**
- Paste the following code:

```javascript
const DAY_MS = 24 * 60 * 60 * 1000;  // 24 hours in milliseconds
const endTsMs = new Date($input.first().json.timestamp).getTime()  // Current time in MS
const startTsMs = endTsMs - DAY_MS;  // 24 hours ago in MS

return [{ startTsMs, endTsMs }];  // Pass to next node
```
{: .copy-code}

- Click **Execute node** to test

{% assign example22 = '
    ===
        image: /images/samples/analytics/n8n-node/example-2-3.png
        title: Add a **Code** node after the Schedule Trigger.
    ===
        image: /images/samples/analytics/n8n-node/example-2-4.png
        title: Paste the time calculation code and click **Execute node** to test it.
'
%}

{% include images-gallery.liquid imageCollection=example22 %}

<br>**What you got**: Two timestamps (startTsMs and endTsMs) representing exactly 24 hours of data.

---

<b><font size="3">Step 3: Get device by name from ThingsBoard</font></b>

Now retrieve the device you want to export telemetry for.

**Configuration**:
- Click **+** → **ThingsBoard** → **Get a device by name**
- **Device Name**: Enter your device name (e.g., "Temperature Sensor 1")
- Click **Execute node**

{% assign example23 = '
    ===
        image: /images/samples/analytics/n8n-node/example-2-5.png
        title: Add ThingsBoard node and select **Get a device by name**.
    ===
        image: /images/samples/analytics/n8n-node/example-2-6.png
        title: Enter the device name and execute to retrieve the device object.
'
%}

{% include images-gallery.liquid imageCollection=example23 %}

<br>**What you got**: The full device object including ID, type, and metadata needed for the next step.

---

<b><font size="3">Step 4: Get timeseries data for the device</font></b>

Fetch the telemetry data using the time range from the Code node.

**Configuration**:
- Click **+** → **ThingsBoard** → **Get timeseries**
- Drag values from the **INPUT panel** (left side):
  - **Entity ID**: From "Get a device by name" → id → id
  - **Entity Type**: From "Get a device by name" → id → entityType
  - **Start timestamp**: From Code node → startTsMs
  - **End timestamp**: From Code node → endTsMs
  - **Keys**: Enter the telemetry keys you want (e.g., "temperature,humidity")
- Click **Execute node**

{% assign example24 = '
    ===
        image: /images/samples/analytics/n8n-node/example-2-7.png
        title: Add ThingsBoard **Get timeseries** node.
    ===
        image: /images/samples/analytics/n8n-node/example-2-8.png
        title: Configure with device ID, entity type, and time range from previous nodes. Execute to fetch telemetry data.
'
%}

{% include images-gallery.liquid imageCollection=example24 %}

<br>**What you got**: The last 24 hours of telemetry data for your device in JSON format.

---

<b><font size="3">Step 5: Build your logic with uploading to AWS S3</font></b>

Finally, upload the file to your S3 bucket.

**Configuration**:
- Click **+** → **AWS S3**
- **Operation**: Upload
- **Bucket Name**: Your S3 bucket name
- **File Name**: Use expressions for datestamped names (e.g., `telemetry-{{ $now.format('yyyy-MM-dd') }}.json`)
- Configure AWS credentials
- Click **Execute node**

{% assign example26 = '
    ===
        image: /images/samples/analytics/n8n-node/example-2-10.png
        title: Add **AWS S3** node and configure upload settings with your bucket name and credentials.
    ===
        image: /images/samples/analytics/n8n-node/example-2-11.png
        title: Execute the workflow to see the file successfully uploaded to S3.
'
%}

{% include images-gallery.liquid imageCollection=example26 %}

<br>**What you got**: Your telemetry data successfully uploaded to S3 with a datestamped filename.

---

<b><font size="4">Final result</font></b>

You've built a complete automated data pipeline that:
1. Runs every night at midnight UTC
2. Calculates the exact 24-hour time window
3. Fetches device telemetry from ThingsBoard
4. Converts it to a file format
5. Uploads to AWS S3 with predictable naming

**What you get**:
- Daily JSON files in S3: `s3://my-bucket/telemetry-2024-12-23.json`
- Automated backups without manual intervention
- Data ready for AWS Athena queries or data pipeline ingestion
- Complete audit trail of daily exports

**What makes this powerful**:
n8n acts as the orchestration layer between ThingsBoard and your data ecosystem. You're not just exporting data - you're building a complete data pipeline with transformations, enrichments, and multi-system integration that ThingsBoard alone can't handle.

**Next steps - extend this workflow**:
- **Add multiple destinations**: After "Convert to File", split to also send to Snowflake, Google Sheets, or email
- **Enrich the data**: Before S3 upload, join with CRM data or add business context
- **Conditional routing**: Route high-value customers to premium storage, others to standard
- **Trigger downstream actions**: After S3 upload → Trigger AWS Lambda → Update inventory system → Notify team

---

### Example 3: Webhook-Triggered Device Query

**Real-world scenario**: Your customer portal has a "Get Device Status" button. When clicked, it needs to fetch real-time telemetry for whatever device the customer owns - you don't know which device in advance.

**Why this pattern?** Most real workflows are dynamic:
- Mobile apps that query devices by name (not hardcoded IDs)
- Chatbots that respond to "check temperature in Room 405"
- External systems triggering reports for specific assets
- Customer-facing dashboards that filter by user

**What you'll learn**: How to chain ThingsBoard operations together, passing data between nodes (device name → device ID → telemetry keys → actual data).

---

<b><font size="4">Building the workflow</font></b>

<b><font size="3">Step 1: Set up the trigger (simulating a webhook)</font></b>

We'll use a manual trigger to simulate what would normally be a webhook from your customer portal.

**Configuration**:
- Click **Add first step…** → **Trigger manually**
- Click the trigger node → Click **pencil icon** (top-right)
- Paste this JSON (simulating incoming webhook data):

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

<br>**What you just did**: Created a workflow input that accepts a device name. In production, this would come from a webhook, API call, or chat message.

---

<b><font size="3">Step 2: Find the device in ThingsBoard</font></b>

Now we need to look up the device by name to get its ID (since most ThingsBoard operations need the device ID, not the name).

**Configuration**:
- Click **+** next to the trigger node → **ThingsBoard** → **Get device by name**
- Drag `deviceName` from the **INPUT panel** (left) into the **Name** field

  *This creates a dynamic link - the node will use whatever device name was in the trigger*

- Click **Execute step** to test it
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

<br>**What you got**: The full device object - including the ID we need for the next steps.

---

<b><font size="3">Step 3: Discover what telemetry this device has</font></b>

Before we can fetch telemetry, we need to know what keys are available (temperature? humidity? battery?). This step finds that out.

**Configuration**:
- Click **+** → **ThingsBoard** → **Get timeseries keys**
- Drag **Entity ID** and **Entity Type** from the **INPUT panel** (left)

  *We're using the device info from Step 2 automatically*

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

<br>**What you got**: A list of available telemetry keys (like `temperature`, `humidity`, etc.)

---

<b><font size="3">Step 4: Fetch the actual telemetry data</font></b>

Finally, get the actual sensor readings using the keys we just discovered.

**Configuration**:
- Click the **+** button to the right of the **Get timeseries keys** node.
- Select **ThingsBoard**
- Choose **Get timeseries** action
- Configure parameters:
  - Get a device by name -> id -> **id** to **Entity ID**
  - Get a device by name -> id -> **entityType** to **Entity Type**
  - Get timeseries keys -> **timeseriesKeys** to **Keys (Comma Separated)**

  **Note**: The Keys field needs comma-separated values. Since Step 3 returns an array, you'll need to join it: `{{ $json.timeseriesKeys.join(',') }}`

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

<br>**What you got**: Real telemetry data! Temperature, humidity, or whatever sensors this device has.

---

<b><font size="4">Why this matters</font></b>

You just built a completely reusable workflow. Change the input from "Refrigerator" to "Freezer 3" and it works automatically. No hardcoded IDs, no changes needed.

**This pattern unlocks**:
1. Customer portals - each user sees their own devices
2. Chatbots - "check the AC in Room 405" just works
3. Mobile apps - query any device by name
4. Multi-tenant systems - same workflow, different data

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

<b><font size="4">Next steps</font></b>

- Replace the manual trigger with a **Webhook** to connect your customer portal
- Add a **Slack** or **Email** node at the end to send the telemetry data
- Use a **Schedule** trigger to run this hourly for monitoring
- Connect to an **AI Agent** so users can ask "check device X" in chat

## API Reference

The ThingsBoard n8n node is built on top of the ThingsBoard REST API. For detailed information about API endpoints, request/response formats, and additional parameters, refer to the [ThingsBoard REST API documentation](https://thingsboard.io/docs/{{docsPrefix}}reference/rest-api/){: target="_blank"}.

## Links

- **npm Package**: [@thingsboard/n8n-nodes-thingsboard](https://www.npmjs.com/package/@thingsboard/n8n-nodes-thingsboard){: target="_blank"}
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
