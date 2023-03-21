Also we can change the period of the blinking using [shared attribute](/docs/{{page.docsPrefix}}user-guide/attributes/#shared-attributes) update functionality.

This type of attribute is available only for Devices. It is similar to the Server-side attributes but has one important 
difference. The device firmware/application may request the value of the shared attribute(s) or subscribe to the updates 
of the attribute(s). The most common use case of shared attributes is to store device settings.

For now, we are ready to write our code. In this part, we use new packages for blinking our LED in the `blink` function.
Also, we use the `attibute_callback` function, which will be called when we change the value of our shared attribute. And 
finally, we bind our callback to subscriber in the `main` function.

```python
import digitalio
import board

...

# default blinking period
period = 1.0

# callback function that will call when we will change value of our Shared Attribute
def attribute_callback(client, result):
    print(client, result)
    # make sure that you paste YOUR shared attribute name
    period = result['blinkingPeriod']

def main():
    ...
    # make sure that you paste YOUR shared attribute name
    sub_id_1 = client.subscribe_to_attribute("blinkingPeriod", attribute_callback)
    sub_id_2 = client.subscribe_to_all_attributes(attribute_callback)
    led = digitalio.DigitalInOut(board.PD14)
    led.direction = digitalio.Direction.OUTPUT
    ...
    led.value = True
    time.sleep(period)
    led.value = False
    time.sleep(period)
```

Also, if you are using the imported dashboard, you can change the blinking period using the following widget, which you 
can see in the top right corner of the dashboard:

![](/images/devices-library/basic/single-board-computers/attribute-update-widget.png)
