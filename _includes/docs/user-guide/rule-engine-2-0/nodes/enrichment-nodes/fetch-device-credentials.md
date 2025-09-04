![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-nodes/fetch-device-credentials-node.png)

Enriches the outgoing message with the device credentials.

**Configuration**

* **Fetch credentials to** - controls whether the fetched credentials should be added to the **_Message_** or **_Metadata_**.

![image](/images/user-guide/rule-engine-2-0/nodes/enrichment-fetch-device-credentials-config.png)

**Output connections**
* **Success:**
  * If credentials were successfully fetched.
* **Failure:**
  * If incoming message originator's entity type is not a **_DEVICE_**.
  * If unexpected error occurs during message processing.

**Usage example**

Let's examine the rule node behavior using an example with the configuration shown in the screenshot above.
Assume that the following messages, originating from the different devices, arrive at the rule node:

```bash
msg: {"pulseCounter": 678}, metadata: {"deviceType": "WaterMeter", "deviceName": "WM-001"} # WaterMeter device with Access token credentials
msg: {"temperature": 22}, metadata: {"deviceType": "Thermostat", "deviceName": "TH-001"} # Thermostat device with X.509 credentials
msg: {"humidity": 75}, metadata: {"deviceType": "Hygrometer", "deviceName": "HG-001"} # Hygrometer device with MQTT Basic credentials
```

The output will be the following:

```bash
msg: {"pulseCounter": 678}, metadata: {"deviceType": "WaterMeter", "deviceName": "WM-001", "credentials": "yNfZ6lL2cWhS5lh8Nd9u", "credentialsType": "ACCESS_TOKEN"} # WaterMeter device with Access token credentials
msg: {"temperature": 22}, metadata: {"deviceType": "Thermostat", "deviceName": "TH-001", "credentials": "MIIFPjCCAyYCFCk6PrTFzUn5/h0yULiwTy4anVLmMA0GCSqGSIb3DQEBCwUAMFwxCzAJBgNVBAYTAlVBMRMwEQYDVQQIDApTb21lLVN0YXRlMSEwHwYDVQQKDBhJbnRlcm5ldCBXaWRnaXRzIFB0eSBMdGQxFTATBgNVBAMMDGludGVybWVkaWF0ZTAeFw0yMzA1MjkxMjQ3MDlaFw0yNDA1MjgxMjQ3MDlaMFsxCzAJBgNVBAYTAlVBMRMwEQYDVQQIDApTb21lLVN0YXRlMSEwHwYDVQQKDBhJbnRlcm5ldCBXaWRnaXRzIFB0eSBMdGQxFDASBgNVBAMMC2RldmljZUBuYW1lMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAuUCNlaBe1Qoy3CN2UpTuaJ5So3Nq+YRZS8OW3SXQihCndJDm2g7+5AiiKvYClNNqjcm+rJzWfRlWrJsQ8BQpY/r2sXVLwwjxDHKiE6wiifGtIhyBag9wsZ4DehQ7lYN0dDgypE3iRnvTqq7nQOeTWwJqxGCzTGM2EHmiReXg8WHjXBZFOZxj7hFepw+byBCFXhEEEuiZ5lOpTcw+HvJLMo0PwgCv8OOSGczm7Hb2Nw6ZEGkCJ0dlRxtxIRWMaLQDjz8wyUhuTe2Bvn3qy+4e+Kd0kU2FX9t7VPJ9CU+rHUfp7Y4I0jm/06Sj5bv2HlB2Qs/6hKZQq1DHFGQQC1snRljm1ZwjanTvuyGbzrpKPsAarck6mmNInmWELdMgj9PTrWpN3hkuDXI4U4FumiA6344CYIa+0cefjKdHljnyE/U04YNZJs1ECygsflXzyuUwAwa0Y9EgyadbSOCiMhLITOqtD+bV6uHw2pjCp9MyNIMuUMNQkqnVj6rA5XCGVx5eTnPNljxWVVCdtqcfw6H/DH8Den4FL46zJJhb3ZFLryCzNdzvDZz6eJWFhqmAGSiCXu/EE9/LCC6ic0lBlzIgjabaZbSpZXcQ0Xx7S1zj+mbJN4u2rhE8I9+sLttjR7gczhJGyk4Gqvi7GwJ2NS5e53DxQlSwyxcM3SbsgZhtfhkCAwEAATANBgkqhkiG9w0BAQsFAAOCAgEARloOcoBWGk5/OIkMZZLyey+80mKEeD+7aNTvsC5OW/Pdnof1ElHoUG5q/ANLxmXD5gGU8z15mcjJIZt1OqqRqB+s7nOQxqv9TY+L/8l25iE0wZRw1ljCi3Av+gACBFNLiu5hJPneopncofGWNeDZlAVzClpkDu2hHD5f7W6gxrnN372+csHfb8ksD/bS/f736woaacCrgcAzXfHoLlpR+7YkF0Je21GWXbw5FqwctMxQP7NO8PyYqcjEg8XhZomiqqYp3q8tBYLZVM3BbdpxFrRjJpW3+hXhLNhZgM7pYjbqHj5BCFrpK3IvH4ZtowCIUKc1uwcip/rBCgYr1+TpfKmWmnyxpDHnlItKjyprhLsXrgPAA8PcmNu7C+pOsbwjDLubdJ19LcVHOJknu3YQm/8BvKj1QMzAHirl2UxCqRfMoZpkmYLotGSGQy8Qp6IlhBLIMcPaqMObpyhSr0RVdoAulhtFg6rVvpKPM/OQkFfUFfWvp52UDYh1wsJzoIwFOXk7edHqXKTKWYpJNe039NGqdo2+B9GAbzqQorwan7WYEtETNUdTw30mwiNEZAxgP9QXUSW14GzIxwlzbQgmyGZfeH+YwN0MCJgoAwL+Zij0TXjJ+YW+st0Dp8tQrpJjofa8o4IYQJUSx2I8mNberFywsbmzLdE+BoxFaLDvZNs=", "credentialsType": "X509_CERTIFICATE",} # Thermostat device with X.509 credentials
msg: {"humidity": 75}, metadata: {"deviceType": "Hygrometer", "deviceName": "HG-001", "credentials": "{\"clientId\":\"bv1ilvxhq50m8cyi5jjz\",\"userName\":\"ejkkd1fm9csvwakzym1o\",\"password\":\"o04xj87rguv8d6nvi158\"}", "credentialsType": "MQTT_BASIC",} # Hygrometer device with MQTT Basic credentials
```
