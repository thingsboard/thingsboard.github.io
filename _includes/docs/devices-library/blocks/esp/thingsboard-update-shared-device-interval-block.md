
Also we can change the period of the blinking using shared attribute update functionality.    

{% assign updateLedBlinkingPeriod= '
    ===
        image: /images/devices-library/paas/esp-thingsboard-example-dashboard-update-led-state-before.png,
        title: To change period of the blinking we just need to change the value on our dashboard.
    ===
        image: /images/devices-library/paas/esp-thingsboard-example-dashboard-update-led-blinking-period.png,
        title: After applying by pressing check mark you will see a confirmation message.
'
%} 

{% include images-gallery.liquid showListImageTitles="true" imageCollection=updateLedBlinkingPeriod %}

<!-- {% if docsPrefix == "pe/" or docsPrefix == "paas/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=updateLedBlinkingPeriod %}
{% else %}  
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=checkDeviceTelemetryTabCE %}
{% endif %}-->



To reach this, we have a variable "blinkingInterval" used the following parts of the code:  
- Callback for shared attributes update:  
    
```cpp
...

void processSharedAttributes(const Shared_Attribute_Data &data) {
  for (auto it = data.begin(); it != data.end(); ++it) {
    if (it->key() == BLINKING_INTERVAL_ATTR) {
      const uint16_t new_interval = it->value().as<uint16_t>();
      if (new_interval >= BLINKING_INTERVAL_MS_MIN && new_interval <= BLINKING_INTERVAL_MS_MAX) {
        blinkingInterval = new_interval;
      }
    }
  }
}

...
const Shared_Attribute_Callback attributes_callback(SHARED_ATTRIBUTES_LIST.cbegin(), SHARED_ATTRIBUTES_LIST.cend(), &processSharedAttributes);
...
```

- Subscribing for shared attributes update:  
    
```cpp
...
    if (!tb.Shared_Attributes_Request(attribute_shared_request_callback)) {
      Serial.println("Failed to request for shared attributes");
      return;
    }
...
```

- Part of code to blink:  
    
```cpp
...
  if (ledMode == 1 && millis() - previousStateChange > blinkingInterval) {
    previousStateChange = millis();
    ledState = !ledState;
    digitalWrite(LED_BUILTIN, ledState);
    tb.sendTelemetryInt(LED_STATE_ATTR, ledState);
  }
...
```

You can change the logic to reach your goals and add processing for your attributes.  
