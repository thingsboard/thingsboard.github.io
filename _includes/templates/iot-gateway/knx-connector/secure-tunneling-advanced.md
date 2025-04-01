Provides authentication and encryption for secure tunneling sessions.

These parameters are available for configuration in the "**security**" subsection:

| **Parameter**                  | **Description**                                                   |
|:-------------------------------|-------------------------------------------------------------------|
| backbone_key                   | Used for KNX Secure Routing in hex representation.                |
| latency_ms                     | Latency in milliseconds for KNX Secure Routing.                   |
| user_id                        | Identifier for user authentication in a secure tunnel session.    |
| device_authentication_password | The authentication password to use when connecting to the tunnel. |
| user_password                  | User password.                                                    |
| ---                            |                                                                   |

This subsection in the configuration file looks like:

```json
"security": {
    "backbone_key": "secret",
    "latency_ms": 100,
    "user_id": "user",
    "device_authentication_password": "password",
    "user_password": "password"
}
```
