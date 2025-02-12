Protects data transmitted over Ethernet/IP-based networks to prevent unauthorized access and tampering.

These parameters are available for configuration in the "**security**" subsection:

| **Parameter** | **Description**                                    |
|:--------------|----------------------------------------------------|
| backbone_key  | Used for KNX Secure Routing in hex representation. |
| latency_ms    | Latency in milliseconds for KNX Secure Routing.    |
| ---           |                                                    |

This subsection in the configuration file looks like:

```json
"security": {
    "backbone_key": "secret",
    "latency_ms": 100
}
```
