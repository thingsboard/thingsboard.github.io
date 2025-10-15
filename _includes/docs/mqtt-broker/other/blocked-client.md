
* TOC
{:toc}

The **Blocked Clients** feature in TBMQ allows administrators to restrict access to the broker based on specific client identifiers or pattern-based rules.
It strengthens security, helps conserve system resources, and provides fine-grained control over who can initiate and maintain connections with the MQTT broker.

Blocked Clients are stored in memory for fast and efficient matching and are synchronized across all broker nodes in the cluster using Kafka.
This ensures consistent enforcement of block rules in distributed deployments.

Each Blocked Client entry can include an optional expiration timestamp. Once expired, the entry is treated as inactive and automatically cleaned up during the periodic cleanup process.

Importantly, Blocked Client checks are performed **before** the authentication phase.
This ensures that unauthorized or potentially malicious connection attempts are rejected early—before any credentials are evaluated—resulting in reduced system load and faster rejection of disallowed clients.

> **Scenario**: You’ve detected a client (clientId: attack-bot-23) trying to flood the broker with connection attempts or malformed packets.
> **Action**: Create a CLIENT_ID block entry to immediately prevent further connections from this client.
> **Benefit**: Immediate mitigation of malicious behavior without requiring changes to authentication logic or certificates.

## Supported Block Types

{% if docsPrefix == "pe/" %}
![image](/images/pe/mqtt-broker/other/blocked-clients.png)
{% else %}
![image](/images/mqtt-broker/other/blocked-clients.png)
{% endif %}

You can block a client using any of the following identifiers:

| Block by     | Label on UI | Description                            |
| ------------ |-------------| -------------------------------------- |
| `CLIENT_ID`  | Client ID   | Block clients with specific client IDs |
| `USERNAME`   | Username    | Block based on MQTT usernames          |
| `IP_ADDRESS` | IP address  | Block by the client’s IP address       |
| `REGEX`      | Regex       | Pattern-based blocking using regex     |

The `REGEX` type supports matching based on one of:

* `BY_CLIENT_ID` (UI label is "Client ID").
* `BY_USERNAME` (UI label is "Username").
* `BY_IP_ADDRESS` (UI label is "IP address").

To block all clients whose IDs start with `test-` followed by digits, you can use the following regex rule:

```text
Block by: REGEX
Regex Pattern Value: ^test-\d+$
Match by: BY_CLIENT_ID
```

This will block clients such as:

* `test-001`
* `test-42`
* `test-9999`

But **not**:

* `demo-test-1`
* `test-user`
* `test-`

Each entry can be in one of the following **three statuses**:

* ✅ **Active** – The entry is valid and fully operational.
* ⏳ **Expired** – The entry is no longer valid but hasn't been cleaned up yet.
* ⚠️ **Deleting soon** – A transitional state for expired entries. This status appears **when more than half of the cleanup grace period has passed**, signaling that the entry is about to be removed by the system.

## How It Works

During the connection phase, each client is evaluated in the following order:

1. Exact match on `CLIENT_ID`.
2. Exact match on `USERNAME`.
3. Exact match on `IP_ADDRESS`.
4. Regex-based match (if any exist).

If a match is found and the corresponding entry is not expired, the connection is rejected.
Blocked Client events are also tracked and visible via the [Unauthorized Clients](/docs/{{docsPrefix}}mqtt-broker/user-guide/ui/unauthorized-clients/) feature.

## Automatic Cleanup

Expired Blocked Clients are automatically cleaned up in the background.

```yaml
blocked-client:
  cleanup:
    # The parameter to specify the period of execution cleanup task for expired blocked clients. Value set in minutes. Default value corresponds to five minutes
    period: "${BLOCKED_CLIENT_CLEANUP_PERIOD_MINUTES:5}"
    # Time to Live for expired blocked clients. After this time, the expired blocked client is removed completely. Value set in minutes. Default value corresponds to one week
    ttl: "${BLOCKED_CLIENT_CLEANUP_TTL_MINUTES:10080}"
```

Cleanup is performed only when the Blocked Client is expired and the TTL period has passed.

## Recommendations

To ensure optimal performance and maintainability when using the **Blocked Clients** feature, consider the following best practices:

* **Avoid using regex rules unless truly needed**: Pattern matching with regular expressions can slow down the system, 
as all regex rules must be checked for every client connection. Use this only when exact matches by client ID, username, or IP address are not enough.

* **Use authentication to reject the majority of clients**: It’s better to block clients using standard authentication methods. 
Blocking should be used as an additional method, not the main one.

* **Keep the number of Blocked Clients low**: A large number of blocked entries, especially regex-based ones, can use more memory and slow down lookups. 
Keeping the list small ensures faster performance and better scalability.