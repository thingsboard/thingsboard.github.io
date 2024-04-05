{% capture difference %}
**Don't forget to create shared attribute `blinkingPeriod` on your device.** 
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Also, we can change the period of the blinking using [shared attribute](/docs/{{page.docsPrefix}}user-guide/attributes/#shared-attributes) update functionality.

This type of attribute is available only for Devices. It is similar to the Server-side attributes but has one important 
difference. The device firmware/application may request the value of the shared attribute(s) or subscribe to the updates 
of the attribute(s). The most common use case of shared attributes is to store device settings.

In order to run the code of this part of the guide, we recommend using Python 3.9 or above.  


If you haven’t installed Python, please, follow next steps:  

```bash
sudo apt update
sudo apt install software-properties-common
```
{:.copy-code}

```bash
sudo add-apt-repository ppa:deadsnakes/ppa
```
{:.copy-code}

```bash
sudo apt install python3.9
```
{:.copy-code}

```bash
sudo apt-get install -y python3 git python3-pip
```
{:.copy-code}

Also, we will need Adafruit-Blinka library. Please, use the following command to install it:  

```bash
pip3 install Adafruit-Blinka
```
{:.copy-code}


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
    period = result.get('blinkingPeriod', 1.0)

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
can see in the bottom right corner of the dashboard:

![](/images/devices-library/basic/single-board-computers/attribute-update-widget.png)
