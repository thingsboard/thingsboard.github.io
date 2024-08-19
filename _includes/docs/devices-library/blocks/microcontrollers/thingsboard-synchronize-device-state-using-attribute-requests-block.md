In order to get the state of the device from ThingsBoard during booting we have [functionality](/docs/{{page.docsPrefix}}reference/mqtt-api/#request-attribute-values-from-the-server) to do this in the code.  

Below are the relevant parts of the code example:  

- Attribute callbacks:  
    
```cpp
...
void processSharedAttributes(const JsonObjectConst &data) {
  for (auto it = data.begin(); it != data.end(); ++it) {
    if (strcmp(it->key().c_str(), BLINKING_INTERVAL_ATTR) == 0) {
      const uint16_t new_interval = it->value().as<uint16_t>();
      if (new_interval >= BLINKING_INTERVAL_MS_MIN && new_interval <= BLINKING_INTERVAL_MS_MAX) {
        blinkingInterval = new_interval;
        Serial.print("Updated blinking interval to: ");
        Serial.println(new_interval);
      }
    } else if(strcmp(it->key().c_str(), LED_STATE_ATTR) == 0) {
      ledState = it->value().as<bool>();
      digitalWrite(LED_BUILTIN, ledState ? HIGH : LOW);
      Serial.print("Updated state to: ");
      Serial.println(ledState);
    }
  }
  attributesChanged = true;
}

void processClientAttributes(const JsonObjectConst &data) {
  for (auto it = data.begin(); it != data.end(); ++it) {
    if (strcmp(it->key().c_str(), LED_MODE_ATTR) == 0) {
      const uint16_t new_mode = it->value().as<uint16_t>();
      ledMode = new_mode;
    }
  }
}
...
const Attribute_Request_Callback<MAX_ATTRIBUTES> attribute_shared_request_callback(SHARED_ATTRIBUTES_LIST.cbegin(), SHARED_ATTRIBUTES_LIST.cend(), &processSharedAttributes);
const Attribute_Request_Callback<MAX_ATTRIBUTES> attribute_client_request_callback(CLIENT_ATTRIBUTES_LIST.cbegin(), CLIENT_ATTRIBUTES_LIST.cend(), &processClientAttributes);
...
```

We have two callbacks:
* Shared Attributes Callback: 
  This callback is specific to shared attributes. Its primary function is to receive a response containing the blinking interval, which determines the appropriate blinking period.;
* Client Attributes Callback: 
  This callback is specific to client attributes. It receives information regarding the mode and state of the LED. Once this data is received, the system saves and sets these parameters.

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
In order for our callbacks to receive the data, we have to send a request to ThingsBoard.  