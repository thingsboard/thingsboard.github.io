Adds details from the message originator's tenant (e.g., name, email, country) to either the message data or the message metadata.

## Configuration

The node's configuration allows you to select which tenant details you want to fetch and where to place them in the message.

- **Select details**: A set of tenant details to retrieve. You must select at least one detail. The available options are:
    * *Id*: The unique identifier of the tenant.
    * *Title*: The name of the tenant.
    * *Country*: The tenant's country.
    * *State*: The state or province.
    * *City*: The city.
    * *Zip*: The postal or ZIP code.
    * *Address*: The primary street address.
    * *Address2*: The secondary street address.
    * *Email*: The contact email address.
    * *Phone*: The contact phone number.
    * *Additional Info*: The `description` field from the tenant's `additionalInfo` JSON object.
- **Add selected details to**: Determines the destination for the fetched tenant details.
    * *Message*: Adds the details to the message data payload. The message data must be a JSON object for this to succeed.
    * *Metadata*: Adds the details to the message metadata.

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbGetTenantDetailsNodeConfiguration",
  "type": "object",
  "properties": {
    "detailsList": {
      "type": "array",
      "description": "A set of tenant details to fetch.",
      "items": {
        "type": "string",
        "enum": [
          "ID",
          "TITLE",
          "COUNTRY",
          "STATE",
          "CITY",
          "ZIP",
          "ADDRESS",
          "ADDRESS2",
          "EMAIL",
          "PHONE",
          "ADDITIONAL_INFO"
        ]
      }
    },
    "fetchTo": {
      "type": "string",
      "description": "Destination for the fetched details (message data or metadata).",
      "enum": [
        "DATA",
        "METADATA"
      ]
    }
  },
  "required": [
    "detailsList",
    "fetchTo"
  ],
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. The node identifies the tenant associated with the incoming message.
2. It reads the **Select details** set to determine which tenant details to fetch.
3. The node then asynchronously retrieves the values for the selected details from the tenant.
4. For each fetched detail, a new key is created by prepending `tenant_` to the detail's name. For example, selecting `Email` results in the key `tenant_email`, and `Title` results
   in `tenant_title`.
5. If a selected detail is not set for the tenant, it is simply skipped and not added to the message.
6. Based on the **Add selected details to** setting, the node adds the resulting key-value pairs (e.g., `"tenant_email": "info@example.com"`) to either the message data or the
   message metadata.
7. The enriched message is forwarded via the **Success** connection. If an error occurs (for instance, trying to add details to a non-JSON message data), the original message is
   routed to the **Failure** connection.

## Output connections

- **Success**: The message has been successfully enriched with the tenant's details.
- **Failure**: An error occurred during processing. For example, this can happen if **Add selected details to** is set to `Message` but the incoming message data is not a valid
  JSON object.

## Examples

### Example 1: Adding tenant contact info to metadata

**Incoming message**

Metadata: `{}`

**Node configuration**

```json
{
  "detailsList": [
    "TITLE",
    "EMAIL"
  ],
  "fetchTo": "METADATA"
}
```

**State of the system**

The current tenant has the title `Building Corp` and the email `example@building-corp.com`.

**Outgoing message**

The node adds the fetched details to the metadata and routes message via `Success` connection.

Metadata:

```json
{
  "tenant_title": "Building Corp",
  "tenant_email": "alerts@building-corp.com"
}
```

**Explanation**: The node fetched the `Title` and `Email` from the tenant and added them to the message metadata under the keys `tenant_title` and `tenant_email`.

### Example 2: Adding tenant location to message data

**Incoming message**:

Data: `{}`

**Node configuration**:

```json
{
  "detailsList": [
    "COUNTRY"
  ],
  "fetchTo": "DATA"
}
```

**State of the system**

The current tenant has the country set to `Ukraine`.

**Outgoing message**

The new key-value pair is merged into the message data's JSON object. Message is routed via `Success` connection.

Data:

```json
{
  "tenant_country": "Ukraine"
}
```

**Explanation**: The node retrieved the `Country` from the tenant and added it to the message data with the key `tenant_country`.
