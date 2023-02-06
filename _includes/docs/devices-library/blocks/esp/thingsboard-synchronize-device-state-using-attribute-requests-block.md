In order to get the state of the device from ThingsBoard during booting we have functionality to do this in the code.  
Responsible parts of the example code:  
- Attribute callbacks:  
    
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

void processClientAttributes(const Shared_Attribute_Data &data) {
  for (auto it = data.begin(); it != data.end(); ++it) {
    if (it->key() == LED_MODE_ATTR) {
      const uint16_t new_mode = it->value().as<uint16_t>();
      ledMode = new_mode;
    } else if (it->key() == LED_STATE_ATTR) {
      const uint16_t new_state = it->value().as<uint16_t>();
      ledState = new_state;
    }
  }
}
...
const Attribute_Request_Callback attribute_shared_request_callback(SHARED_ATTRIBUTES_LIST.cbegin(), SHARED_ATTRIBUTES_LIST.cend(), &processSharedAttributes);
const Attribute_Request_Callback attribute_client_request_callback(CLIENT_ATTRIBUTES_LIST.cbegin(), CLIENT_ATTRIBUTES_LIST.cend(), &processClientAttributes);
...
```

As you can see - we have 2 callbacks, the first one is for shared attributes and the second one is for client attributes.  
The first one receives response with blinkingInterval to set the correct period for blinking.  
The second callback receives mode and state of the LED to save it and set them.  
This functionality allows us to keep the actual state after rebooting.  

- Attribute requests:    
```cpp
...
    // Request current states of shared attributes
    if (!tb.Shared_Attributes_Request(attribute_shared_request_callback)) {
      Serial.println("Failed to request for shared attributes");
      return;
    }

    // Request current states of client attributes
    if (!tb.Client_Attributes_Request(attribute_client_request_callback)) {
      Serial.println("Failed to request for client attributes");
      return;
    }
...
``` 
In order to give ability to our callbacks to receive the data we have to send a request to ThingsBoard.  