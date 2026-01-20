{% capture difference %}
**Make sure to create the shared attribute `blinkingPeriod` on your device.** 
{% endcapture %}
{% include templates/info-banner.md content=difference %}

The example code includes functionality to retrieve the device state from {% if page.docsPrefix == "pe/edge/" or page.docsPrefix == "edge/" %}**ThingsBoard Edge**{% else %}**ThingsBoard**{% endif %}
during boot. The relevant code sections are shown below.

Attribute callback:
```python
def sync_state(result, exception=None):
    global period
    if exception is not None:
        print("Exception: " + str(exception))
    else:
        period = result.get('shared', {'blinkingPeriod': 1.0})['blinkingPeriod']
```
{:.copy-code}

Attribute request:
```python
def main():
    client = TBDeviceMqttClient("{{hostName}}", username="ACCESS_TOKEN")
    client.connect()
    client.request_attributes(shared_keys=['blinkingPeriod'], callback=sync_state)
    ...
```
{:.copy-code}

In order for the callback to receive the shared attribute data from 
{% if page.docsPrefix == "pe/edge/" or page.docsPrefix == "edge/" %}**ThingsBoard Edge**{% else %}**ThingsBoard**{% endif %}, 
the device must explicitly request it after connecting. 
This functionality allows the device to restore the correct attribute values after a reboot, preserving the actual state.

