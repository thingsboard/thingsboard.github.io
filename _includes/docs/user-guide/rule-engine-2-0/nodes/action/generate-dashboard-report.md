Generates a screenshot of a dashboard with specific configuration applied. The dashboard is captured by a separate reports server that runs a headless browser. The generated report
is saved as a blob entity, and its ID is added to the message metadata under the `attachments` key. The message is routed to either the `Success` connection (if the report is
successfully generated) or the `Failure` connection (if an error occurs during generation).

## Usage

The typical workflow for generating dashboard reports follows these steps:

1. A message arrives at the "generate dashboard report" node containing either the complete report configuration in the message data, or the node uses its pre-configured report
   settings.

2. The node requests the reports server (either the system default or a custom endpoint) to generate the dashboard report. The reports server opens the dashboard in a headless
   browser and captures a screenshot.

3. The generated report is saved as a blob entity in ThingsBoard, and its ID is appended to the `attachments` metadata field of the message.

4. If the report is successfully generated and saved, the message is routed via the `Success` connection. If an error occurs during generation, it's routed via the `Failure`
   connection.

{% capture server_note %}
**Reports server required:** Before using this node, ensure that the reports server is properly configured and accessible. The system default reports server URL is controlled by
the `REPORTS_SERVER_ENDPOINT_URL` environment variable (default: `http://localhost:8383`).
{% endcapture %}
{% include templates/info-banner.md content=server_note %}

## Configuration

The configuration specifies how the report should be generated and which reports server to use.

- **Use system reports server** - When enabled, uses the default reports server configured in ThingsBoard. When disabled, requires a custom reports server endpoint URL.
- **Reports server endpoint URL** - The URL of the custom reports server to use (only applicable when **Use system reports server** is disabled).
- **Use report config from message** - When enabled, reads the report configuration from the incoming message data `reportConfig` field. When disabled, uses the report
  configuration specified in this node.
- **Report configuration** - The dashboard report configuration to use (only applicable when **Use report config from message** is disabled). Contains settings such as dashboard
  ID, timezone, output format, and timewindow.

### Report configuration structure

When providing report configuration (either in the node or message), the following fields are used:

- `baseUrl` (required) - Base URL of ThingsBoard UI that should be accessible by the reports server (e.g., "https://thingsboard.cloud")
- `dashboardId` (required) - UUID of the dashboard to capture
- `state` - Target dashboard state to open during report generation
- `timezone` (required) - Timezone in which the dashboard will be presented (e.g., "America/New_York")
- `useDashboardTimewindow` - If true, uses the timewindow configured in the dashboard itself
- `timewindow` - Specific dashboard timewindow configuration (JSON object) to use during report generation
- `namePattern` (required) - File name pattern for the generated report. Supports date formatting
  using [Java SimpleDateFormat](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/text/SimpleDateFormat.html){:target="_blank"} syntax within `%d{}` placeholders (
  e.g., "report-%d{yyyy-MM-dd_HH:mm:ss}")
- `type` - Report file format: PDF, PNG, or JPEG (default: PDF)
- `useCurrentUserCredentials` - If true, uses credentials of the user who created the report configuration
- `userId` (required) - UUID of the user whose credentials will be used to open the dashboard

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbGenerateReportNodeConfiguration",
  "type": "object",
  "properties": {
    "useSystemReportsServer": {
      "type": "boolean",
      "description": "Whether to use the system-configured reports server.",
      "default": true
    },
    "reportsServerEndpointUrl": {
      "type": "string",
      "format": "uri",
      "description": "Custom reports server endpoint URL (used when 'useSystemReportsServer' is false)."
    },
    "useReportConfigFromMessage": {
      "type": "boolean",
      "description": "Whether to read report configuration from the incoming message.",
      "default": true
    },
    "reportConfig": {
      "type": "object",
      "description": "Dashboard report configuration (used when 'useReportConfigFromMessage' is false).",
      "properties": {
        "baseUrl": {
          "type": "string",
          "format": "uri",
          "description": "Base URL of ThingsBoard UI accessible by the reports server."
        },
        "dashboardId": {
          "type": "string",
          "format": "uuid",
          "description": "UUID of the dashboard to capture."
        },
        "state": {
          "type": "string",
          "description": "Dashboard state to apply during report generation."
        },
        "timezone": {
          "type": "string",
          "description": "Timezone for the dashboard presentation."
        },
        "useDashboardTimewindow": {
          "type": "boolean",
          "description": "Whether to use the dashboard's configured timewindow."
        },
        "timewindow": {
          "type": "object",
          "description": "Specific timewindow configuration for the dashboard."
        },
        "namePattern": {
          "type": "string",
          "description": "File name pattern for the generated report."
        },
        "type": {
          "type": "string",
          "enum": [
            "PDF",
            "PNG",
            "JPEG"
          ],
          "description": "Report file format."
        },
        "useCurrentUserCredentials": {
          "type": "boolean",
          "description": "Whether to use the current user's credentials."
        },
        "userId": {
          "type": "string",
          "format": "uuid",
          "description": "UUID of the user whose credentials will be used."
        }
      },
      "required": [
        "baseUrl",
        "dashboardId",
        "timezone",
        "namePattern",
        "userId"
      ]
    }
  },
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. The node determines the report configuration source:
    - If **Use report config from message** is enabled, extracts `reportConfig` from the incoming message data
    - Otherwise, uses the report configuration specified in the node settings

2. The node determines which reports server to use:
    - If **Use system reports server** is enabled, uses the default system reports server
    - Otherwise, uses the custom reports server endpoint URL

3. The node submits the report generation request to the reports server, which:
    - Opens the specified dashboard in a headless browser
    - Applies the specified dashboard state and timewindow
    - Captures a screenshot in the requested format

4. The generated report data is saved as a blob entity with:
    - The report data as binary content
    - Content type based on the report format
    - Report name based on the name pattern
    - Associated with the tenant and customer of the user

5. The blob entity ID is appended to the message metadata:
    - If the `attachments` metadata field already exists, the blob ID is appended with a comma separator
    - Otherwise, the `attachments` field is created with the blob ID

6. The updated message is forwarded via the appropriate connection.

## Output connections

- `Success`
    - The report was successfully generated and saved. The outgoing message includes the blob entity ID in the `attachments` metadata field.
- `Failure`
    - An error occurred during report generation, such as:
        - Invalid report configuration in the message
        - Reports server is unavailable or unreachable
        - Failed to capture the dashboard screenshot
        - Failed to save the blob entity
        - User not found

## Examples

### Example 1 — Generate dashboard report using node settings

**Incoming message**

Any message.

**Node configuration**

```json
{
  "useSystemReportsServer": true,
  "reportsServerEndpointUrl": null,
  "useReportConfigFromMessage": false,
  "reportConfig": {
    "baseUrl": "http://localhost:8080",
    "useDashboardTimewindow": true,
    "timewindow": {
      "selectedTab": 1,
      "history": {
        "historyType": 0,
        "interval": 1000,
        "timewindowMs": 86400000
      }
    },
    "type": "pdf",
    "timezone": "America/New_York",
    "dashboardId": "31815190-a35d-11f0-84cf-d3d34cbac472",
    "state": "",
    "namePattern": "report-%d{yyyy-MM-dd_HH:mm:ss}",
    "useCurrentUserCredentials": true,
    "userId": "f5e2b870-a2d7-11f0-b6e3-69416924d372"
  }
}
```

**Outgoing message**

A message that is a complete copy of the incoming message, with the blob entity ID added to the `attachments` metadata field:

```json
{
  "attachments": "9f8e7d6c-5b4a-3c2b-1a0f-e9d8c7b6a5f4"
}
```

Routed via the `Success` connection.

**Result**

A PDF report of the dashboard is generated, saved as a blob entity, and its ID is added to the message metadata.
