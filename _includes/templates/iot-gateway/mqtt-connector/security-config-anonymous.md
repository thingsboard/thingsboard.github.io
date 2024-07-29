Anonymous auth is the most simple option. It is useful for testing on public MQTT brokers, like test.mosquitto.org.  


|**Parameter**|**Default value**|**Description**|
|:-|:-|-
| type               | **anonymous**                      | Type of authorization.      |
|---

Security subsection in configuration file will look like this: 

```json
    "security": {
      "type": "anonymous"
    }
```

![image](https://img.thingsboard.io/gateway/mqtt-connector/security-advanced-anonymous-subsection-1-ce.png)