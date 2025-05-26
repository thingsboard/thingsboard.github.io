---
layout: docwithnav-mqtt-broker
title: Blocked Clients
description: TBMQ Blocked clients description

---

* TOC
{:toc}

The **Blocked Clients** feature in TBMQ allows administrators to deny access to clients based on specific identifiers or patterns.
This enhances security, protects system resources, and enables dynamic control over who is permitted to connect and communicate with the MQTT broker.

Blocked clients are loaded into memory for fast lookup and are propagated across the cluster using Kafka,
ensuring consistent behavior in multi-node deployments. Each blocked client entry can have an expiration timestamp,
after which it is considered inactive and eligible for automatic removal.

The blocked client check is performed **before** the authentication process,
ensuring that unauthorized or malicious clients can be denied access early during the connection establishment phase.

## Supported Block Types

You can block a client using any of the following identifiers:

| Block Type   | Description                            |
|--------------|----------------------------------------|
| `CLIENT_ID`  | Block clients with specific client IDs |
| `USERNAME`   | Block based on MQTT usernames          |
| `IP_ADDRESS` | Block by the client’s IP address       |
| `REGEX`      | Pattern-based blocking using regex     |

The `REGEX` type supports matching based on one of:

* `BY_CLIENT_ID`
* `BY_USERNAME`
* `BY_IP_ADDRESS`

## How It Works

During the connection phase, each client is evaluated in the following order:

1. Exact match on `CLIENT_ID`
2. Exact match on `USERNAME`
3. Exact match on `IP_ADDRESS`
4. Regex-based match (if any exist)

If a match is found and the corresponding entry is not expired, the connection is rejected.
Blocked Client events are also tracked and visible via the [Unauthorized Clients](/docs/mqtt-broker/user-guide/ui/unauthorized-clients/) feature.

## Automatic Cleanup

Expired blocked Clients are automatically cleaned up in the background.

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

* Use regex blocking only when necessary, as pattern matching may introduce additional overhead.
* Prefer authentication-based denial mechanisms (e.g., invalid credentials or certificates) over blocking where possible.
* Keep the number of Blocked Clients as low as possible to avoid memory overhead and ensure fast lookup performance.
