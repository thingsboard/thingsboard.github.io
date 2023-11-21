
{% assign changeStateAndMode = '
    ===
        image: https://img.thingsboard.io/devices-library/basic/microcontrollers/dashboard/thingsboard-example-dashboard-change-blinking-mode-0.png,
        title: Change LED state using switch widget to continuous lightning.
    ===
        image: https://img.thingsboard.io/devices-library/basic/microcontrollers/dashboard/thingsboard-example-dashboard-change-blinking-mode-1.png,
        title: Change LED state using round switch widget to blinking mode.
 '
 %}

You can manually change state of the LED and change mode between continuous lightning and blinking.
To do this, you can use the following parts of our dashboard:  

{% include images-gallery.liquid showListImageTitles="true" imageCollection=changeStateAndMode %}
  
Please note that you can change the LED state only if blinking mode is disabled.  

In the code example we have functionality to handle [RPC commands](/docs/{{page.docsPrefix}}user-guide/rpc/#server-side-rpc).  
To get ability to control the device we have used the following parts of the code:  
- Callback for RPC requests:  
    
```cpp
...

RPC_Response processSetLedMode(const RPC_Data &data) {
  Serial.println("Received the set led state RPC method");

  // Process data
  int new_mode = data;

  Serial.print("Mode to change: ");
  Serial.println(new_mode);

  if (new_mode != 0 && new_mode != 1) {
    return RPC_Response("error", "Unknown mode!");
  }

  ledMode = new_mode;

  attributesChanged = true;

  // Returning current mode
  return RPC_Response("newMode", (int)ledMode);
}

...
{% if hasCamera == "true" %}
const std::array<RPC_Callback, 2U> callbacks = {
  RPC_Callback{ "setLedMode", processSetLedMode },
  RPC_Callback{ "takePicture", processTakePicture }
};
{% else %}
const std::array<RPC_Callback, 1U> callbacks = {
  RPC_Callback{ "setLedMode", processSetLedMode }
};
{% endif %}
...
```

- Subscribing for RPC requests:  
    
```cpp
...
    if (!tb.RPC_Subscribe(callbacks.cbegin(), callbacks.cend())) {
      Serial.println("Failed to subscribe for RPC");
      return;
    }
...
```

{% if hasCamera == "true" %}

{% assign takePictureRPC = '
    ===
        image: https://img.thingsboard.io/devices-library/basic/microcontrollers/dashboard/thingsboard-example-dashboard-take-a-picture.png,
        title: You can take a picture from camera module, by pressing the button on ThingsBoard dashboard. 
'
%}

Such as the board has included camera we can take a picture and see it on the dashboard.  

{% include images-gallery.liquid showListImageTitles="true" imageCollection=takePictureRPC %}

To take a picture we send "takePicture" RPC to the device.   

The following part of the code takes a picture.

```cpp
...

bool captureImage() {
  camera_fb_t *fb = NULL;
  fb = esp_camera_fb_get();
  if (!fb) {
    return false;
  }
  encode((uint8_t *)fb->buf, fb->len);
  esp_camera_fb_return(fb);
  return true;
}
...
```

We are unable to send a raw bytes array of the photo in JSON, so we are also encoding bytes to Base64:  

```cpp
...
void encode(const uint8_t *data, size_t length) {
  size_t size = base64_encode_expected_len(length) + 1;
  base64_encodestate _state;
  base64_init_encodestate(&_state);
  int len = base64_encode_block((char *)&data[0], length, &imageBuffer[0], &_state);
  len = base64_encode_blockend((imageBuffer + len), &_state);
}
...
```

Our encoded picture will be sent in the main loop:  

```cpp
...
if (sendPicture) {
tb.sendTelemetryData(PICTURE_ATTR, imageBuffer);
sendPicture = false;
}
...
```

{% endif %}

You can change the code to reach your goals and add processing for your RPC commands.  


