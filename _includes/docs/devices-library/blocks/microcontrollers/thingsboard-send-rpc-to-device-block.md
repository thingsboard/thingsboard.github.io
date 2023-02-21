
{% assign changeStateAndMode = '
    ===
        image: /images/devices-library/basic/microcontrollers/dashboard/thingsboard-example-dashboard-change-blinking-mode-0.png,
        title: Change led state using switch widget to continuous lightning.
    ===
        image: /images/devices-library/basic/microcontrollers/dashboard/thingsboard-example-dashboard-change-blinking-mode-1.png,
        title: Change led state using round switch widget to blinking mode.
 '
 %}

You can manually change state of the led and change mode between continuous lightning and blinking.
To do this, you can use the following parts of our dashboard:  

{% include images-gallery.liquid showListImageTitles="true" imageCollection=changeStateAndMode %}
  
Please note that you can change the LED state only if blinking mode is disabled.  

In the code example we have functionality to handle RPC commands.  
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
const std::array<RPC_Callback, 1U> callbacks = {
  RPC_Callback{ "setLedMode", processSetLedMode }
};
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

You can change the code to reach your goals and add processing for your RPC commands.  


