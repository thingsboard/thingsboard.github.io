Adds details from the message originator's **customer** (e.g., name, email, country) to either the message data or the message metadata.

## Configuration

The node's configuration allows you to select which customer details you want to fetch and where to place them in the message.

- **Select details**: A set of customer details to retrieve. You must select at least one detail. The available options are:
    * *Id*: The unique identifier of the customer.
    * *Title*: The name of the customer.
    * *Country*: The customer's country.
    * *State*: The state or province.
    * *City*: The city.
    * *Zip*: The postal or ZIP code.
    * *Address*: The primary street address.
    * *Address2*: The secondary street address.
    * *Email*: The contact email address.
    * *Phone*: The contact phone number.
    * *Additional Info*: The `description` field from the customer's `additionalInfo` JSON object.
- **Add selected details to**: Determines the destination for the fetched customer details.
    * *Message*: Adds the details to the message data payload. The message data must be a JSON object for this to succeed.
    * *Metadata*: Adds the details to the message metadata.

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbGetCustomerDetailsNodeConfiguration",
  "type": "object",
  "properties": {
    "detailsList": {
      "type": "array",
      "description": "A set of customer details to fetch.",
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

1. The node identifies the customer associated with the incoming message originator. For example, if the originator is a device, the node fetches the customer that the device is
   assigned to.
2. It reads the **Select details** set to determine which customer details to fetch.
3. The node then asynchronously retrieves the values for the selected details from the customer entity.
4. For each fetched detail, a new key is created by prepending `customer_` to the detail's name. For example, selecting `Email` results in the key `customer_email`, and `Title`
   results in `customer_title`.
5. If a selected detail is not set for the customer, it is simply skipped and not added to the message.
6. Based on the **Add selected details to** setting, the node adds the resulting key-value pairs (e.g., `"customer_email": "info@example.com"`) to either the message data or the
   message metadata.
7. The enriched message is forwarded via the **Success** connection. If an error occurs (for instance, the originator is not assigned to a customer, or trying to add details to
   non-JSON message data), the original message is routed to the **Failure** connection.

## Output connections

- **Success**: The message has been successfully enriched with the customer's details.
- **Failure**: An error occurred during processing. For example, this can happen if **Add selected details to** is set to *Message* but the incoming message data is not a valid
  JSON object, or if the message originator is not assigned to a customer.

## Examples

### Example 1: Adding customer contact info to metadata

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

The message originator (e.g., a device) is assigned to a customer with the title `Company A` and the email `contact@companya.com`.

**Outgoing message**

The node adds the fetched details to the metadata and routes the message via the `Success` connection.

Metadata:

```json
{
  "customer_title": "Company A",
  "customer_email": "contact@companya.com"
}
```

**Explanation**: The node fetched the `Title` and `Email` from the customer and added them to the message metadata under the keys `customer_title` and `customer_email`.

### Example 2: Adding customer location to message data

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

The message originator is assigned to a customer whose country is set to `United States`.

**Outgoing message**

The new key-value pair is merged into the message data's JSON object. The message is routed via the `Success` connection.

Data:

```json
{
  "customer_country": "USA"
}
```

**Explanation**: The node retrieved the `Country` from the customer and added it to the message data with the key `customer_country`.
