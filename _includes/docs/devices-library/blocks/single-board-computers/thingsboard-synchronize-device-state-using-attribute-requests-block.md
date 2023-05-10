{% capture difference %}
<br>
**Don't forget to create shared attribute `blinkingPeriod` on your device.** 
{% endcapture %}
{% include templates/info-banner.md content=difference %}

In order to get the state of the device from ThingsBoard during booting we have functionality to do this in the code.
Responsible parts of the example code:

Attribute callback:
```python
def sync_state(result, exception=None):
    global period
    if exception is not None:
        print("Exception: " + str(exception))
    else:
        period = result.get('shared', {'blinkingPeriod': 1.0})['blinkingPeriod']
```

Attribute request:
```python
def main():
    client = TBDeviceMqttClient("thingsboard.cloud", 1883, "ACCESS_TOKEN")
    client.connect()
    client.request_attributes(shared_keys=['blinkingPeriod'], callback=sync_state)
    ...
```

In order to give ability to our callbacks to receive the data we have to send a request to ThingsBoard. This 
functionality allows us to keep the actual state after rebooting.

