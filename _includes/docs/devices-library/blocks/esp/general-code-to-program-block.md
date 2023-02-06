
Now it’s time to program the board to connect to ThingsBoard.  
To do this, you can use the code below. It contains all required functionality for this guide.    

```cpp
#if defined(ESP8266)
#include <ESP8266WiFi.h>
#elif defined(ESP32)
#include <WiFi.h>
#include <WiFiClientSecure.h>
#endif

#include <ThingsBoard.h>


// PROGMEM can only be added when using the ESP32 WiFiClient,
// will cause a crash if using the ESP8266WiFiSTAClass instead.
#if defined(ESP8266)
constexpr char WIFI_SSID[] = "YOUR_WIFI_SSID";
constexpr char WIFI_PASSWORD[] = "YOUR_WIFI_PASSWORD";
#elif defined(ESP32)
constexpr char WIFI_SSID[] PROGMEM = "YOUR_WIFI_SSID";
constexpr char WIFI_PASSWORD[] PROGMEM = "YOUR_WIFI_PASSWORD";
#endif

// See https://thingsboard.io/docs/getting-started-guides/helloworld/
// to understand how to obtain an access token
constexpr char TOKEN[] PROGMEM = "YOUR_ACCESS_TOKEN";

// Thingsboard we want to establish a connection too
constexpr char THINGSBOARD_SERVER[] PROGMEM = "{% if docsPrefix == "pe/" or docsPrefix == "paas/" %}thingsboard.cloud{% else %}demo.thingsboard.io{% endif %}";
// MQTT port used to communicate with the server, 1883 is the default unencrypted MQTT port.
constexpr uint16_t THINGSBOARD_PORT PROGMEM = 1883U;

// Maximum size packets will ever be sent or received by the underlying MQTT client,
// if the size is to small messages might not be sent or received messages will be discarded
constexpr uint32_t MAX_MESSAGE_SIZE PROGMEM = 1024U;

// Baud rate for the debugging serial connection.
// If the Serial output is mangled, ensure to change the monitor speed accordingly to this variable
constexpr uint32_t SERIAL_DEBUG_BAUD PROGMEM = 115200U;


// Initialize underlying client, used to establish a connection
WiFiClient espClient;
// Initialize ThingsBoard instance with the maximum needed buffer size
ThingsBoardSized<MAX_MESSAGE_SIZE> tb(espClient);

// Statuses for subscribing to rpc
bool subscribed = false;

// LED modes: 0 - continious state, 1 - blinking
volatile int ledMode = 0;

// Current led state
volatile bool ledState = false;

// Settings for interval in blinking mode
constexpr uint16_t BLINKING_INTERVAL_MS_MIN = 10U;
constexpr uint16_t BLINKING_INTERVAL_MS_MAX = 60000U;
volatile uint16_t blinkingInterval = 1000U;

// To handle RPC for led state changes
volatile bool stateChanged = false;

uint32_t previousStateChange;

// For telemetry
constexpr int16_t telemetrySendInterval = 2000U;
uint32_t previousDataSend;

// Attribute names for attribute request and attribute updates functionality

constexpr char BLINKING_INTERVAL_ATTR[] PROGMEM = "blinkingInterval";
constexpr char LED_MODE_ATTR[] PROGMEM = "ledMode";
constexpr char LED_STATE_ATTR[] PROGMEM = "ledState";

// List of shared attributes for subscribing to their updates
constexpr std::array<const char *, 1U> SHARED_ATTRIBUTES_LIST = {
  BLINKING_INTERVAL_ATTR
};

// List of client attributes for requesting them (Using to initialize device states)
constexpr std::array<const char *, 2U> CLIENT_ATTRIBUTES_LIST = {
  LED_MODE_ATTR,
  LED_STATE_ATTR
};

/// @brief Initalizes WiFi connection,
// will endlessly delay until a connection has been successfully established
void InitWiFi() {
  Serial.println("Connecting to AP ...");
  // Attempting to establish a connection to the given WiFi network
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  while (WiFi.status() != WL_CONNECTED) {
    // Delay 500ms until a connection has been succesfully established
    delay(500);
    Serial.print(".");
  }
  Serial.println("Connected to AP");
}

/// @brief Reconnects the WiFi uses InitWiFi if the connection has been removed
/// @return Returns true as soon as a connection has been established again
const bool reconnect() {
  // Check to ensure we aren't connected yet
  const wl_status_t status = WiFi.status();
  if (status == WL_CONNECTED) {
    return true;
  }

  // If we aren't establish a new connection to the given WiFi network
  InitWiFi();
  return true;
}

/// @brief Processes function for RPC call "getLedState"
/// RPC_Data is a JSON variant, that can be queried using operator[]
/// See https://arduinojson.org/v5/api/jsonvariant/subscript/ for more details
/// @param data Data containing the rpc data that was called and its current value
/// @return Response that should be sent to the cloud. Useful for getMethods
RPC_Response processGetLedState(const RPC_Data &data) {
  return RPC_Response("currentState", ledState);
}

/// @brief Processes function for RPC call "setLedState"
/// RPC_Data is a JSON variant, that can be queried using operator[]
/// See https://arduinojson.org/v5/api/jsonvariant/subscript/ for more details
/// @param data Data containing the rpc data that was called and its current value
/// @return Response that should be sent to the cloud. Useful for getMethods
RPC_Response processGetLedMode(const RPC_Data &data) {
  return RPC_Response("currentMode", ledMode);
}

/// @brief Processes function for RPC call "setLedState"
/// RPC_Data is a JSON variant, that can be queried using operator[]
/// See https://arduinojson.org/v5/api/jsonvariant/subscript/ for more details
/// @param data Data containing the rpc data that was called and its current value
/// @return Response that should be sent to the cloud. Useful for getMethods
RPC_Response processSetLedState(const RPC_Data &data) {
  Serial.println("Received the set led state RPC method");

  // Process data
  bool received_state = data;

  Serial.print("Received state: ");
  Serial.println(received_state);

  bool changed = digitalRead(LED_BUILTIN) != received_state;

  // If led mode is just a lightening - we don't need to set the same state again
  if (!changed && ledMode == 0) {
    return RPC_Response("error", "LED state is the same!");
  }

  digitalWrite(LED_BUILTIN, received_state);
  ledState = received_state;
  
  tb.sendTelemetryInt(LED_MODE_ATTR, ledMode);
  tb.sendTelemetryInt(LED_STATE_ATTR, ledState);
  tb.sendAttributeInt(LED_MODE_ATTR, ledMode);
  tb.sendAttributeInt(LED_STATE_ATTR, ledState);

  // Was the led state changed
  return RPC_Response("changed", changed);
}


/// @brief Processes function for RPC call "setLedMode"
/// RPC_Data is a JSON variant, that can be queried using operator[]
/// See https://arduinojson.org/v5/api/jsonvariant/subscript/ for more details
/// @param data Data containing the rpc data that was called and its current value
/// @return Response that should be sent to the cloud. Useful for getMethods
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
  
  tb.sendTelemetryInt(LED_MODE_ATTR, ledMode);
  tb.sendTelemetryInt(LED_STATE_ATTR, ledState);
  tb.sendAttributeInt(LED_MODE_ATTR, ledMode);
  tb.sendAttributeInt(LED_STATE_ATTR, ledState);

  // Returning current mode
  return RPC_Response("newMode", ledMode);
}


// Optional, keep subscribed shared attributes empty instead,
// and the callback will be called for every shared attribute changed on the device,
// instead of only the one that were entered instead
const std::array<RPC_Callback, 4U> callbacks = {
  RPC_Callback{ "getLedState", processGetLedState },
  RPC_Callback{ "getLedMode", processGetLedMode },
  RPC_Callback{ "setLedState", processSetLedState },
  RPC_Callback{ "setLedMode", processSetLedMode }
};


/// @brief Update callback that will be called as soon as one of the provided shared attributes changes value,
/// if none are provided we subscribe to any shared attribute change instead
/// @param data Data containing the shared attributes that were changed and their current value
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

const Shared_Attribute_Callback attributes_callback(SHARED_ATTRIBUTES_LIST.cbegin(), SHARED_ATTRIBUTES_LIST.cend(), &processSharedAttributes);
const Attribute_Request_Callback attribute_shared_request_callback(SHARED_ATTRIBUTES_LIST.cbegin(), SHARED_ATTRIBUTES_LIST.cend(), &processSharedAttributes);
const Attribute_Request_Callback attribute_client_request_callback(CLIENT_ATTRIBUTES_LIST.cbegin(), CLIENT_ATTRIBUTES_LIST.cend(), &processClientAttributes);

void setup() {
  // Initalize serial connection for debugging
  Serial.begin(SERIAL_DEBUG_BAUD);
  pinMode(LED_BUILTIN, OUTPUT);
  delay(1000);
  InitWiFi();
}

void loop() {
  delay(10);

  if (!reconnect()) {
    return;
  }

  if (!tb.connected()) {
    // Connect to the ThingsBoard
    Serial.print("Connecting to: ");
    Serial.print(THINGSBOARD_SERVER);
    Serial.print(" with token ");
    Serial.println(TOKEN);
    if (!tb.connect(THINGSBOARD_SERVER, TOKEN, THINGSBOARD_PORT)) {
      Serial.println("Failed to connect");
      return;
    }
    // Sending a MAC address as an attribute
    tb.sendAttributeString("macAddress", WiFi.macAddress().c_str());
  }

  if (!subscribed) {
    Serial.println("Subscribing for RPC...");
    // Perform a subscription. All consequent data processing will happen in
    // processSetLedState() and processSetLedMode() functions,
    // as denoted by callbacks array.
    if (!tb.RPC_Subscribe(callbacks.cbegin(), callbacks.cend())) {
      Serial.println("Failed to subscribe for RPC");
      return;
    }

    if (!tb.Shared_Attributes_Subscribe(attributes_callback)) {
      Serial.println("Failed to subscribe for shared attribute updates");
      return;
    }

    Serial.println("Subscribe done");
    subscribed = true;

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
    tb.sendAttributeInt(LED_MODE_ATTR, ledMode);
    tb.sendAttributeInt(LED_STATE_ATTR, ledState);
  }

  if (stateChanged) {
    stateChanged = false;
    previousStateChange = millis();
  }

  if (ledMode == 1 && millis() - previousStateChange > blinkingInterval) {
    previousStateChange = millis();
    ledState = !ledState;
    digitalWrite(LED_BUILTIN, ledState);
    tb.sendTelemetryInt(LED_STATE_ATTR, ledState);
  }

  // Sending telemetry every telemetrySendInterval time
  if (millis() - previousDataSend > telemetrySendInterval) {
    previousDataSend = millis();
    tb.sendTelemetryInt("temperature", random(10, 20));
    tb.sendAttributeInt("rssi", WiFi.RSSI());
    tb.sendAttributeString("bssid", WiFi.BSSIDstr().c_str());
  }

  tb.loop();
}

```
{:.copy-code}

In the code, replace placeholders with your WiFi network SSID, password, ThingsBoard device access token.  

Necessary variables for connection:  

| Variable name | Default value | Description | 
|-|-|-|
| WIFI_SSID | **YOUR_WIFI_SSID** | Your WiFi network name. | 
| WIFI_PASSWORD | **YOUR_WIFI_PASSWORD** | Your WiFi network password. |
| TOKEN | **YOUR_DEVICE_ACCESS_TOKEN** | Access token from device. Obtaining process described in #connect-device-to-thingsboard | 
| THINGSBOARD_SERVER | **thingsboard.cloud** | Your ThingsBoard host or ip address. |

Sending data part (By default the example sends random value for **temperature** and **humidity** keys):  
```cpp
...
    tb.sendTelemetryInt("temperature", random(10, 20));
    tb.sendAttributeInt("rssi", WiFi.RSSI());
    tb.sendAttributeString("bssid", WiFi.BSSIDstr().c_str());
...
```

Then upload the code to the device by pressing Upload button or keyboard combination Ctrl+U.  
{% assign codeByUploadButton='
    ===
        image: /images/devices-library/basic/arduino-ide-upload.png
' 
%}
{% include images-gallery.liquid imageCollection=codeByUploadButton %}

If you cannot upload the code and receive an error: `Property 'upload.tool.serial' is undefined` you can do the following:  
  
{% assign codeByUploadWithProgrammer='
    ===
        image: /images/devices-library/basic/arduino-ide-select-esptool-programmer.png,
        title: Go to "Tools" > "Programmer" and select "Esptool" as a programmer.  
    ===
        image: /images/devices-library/basic/arduino-ide-upload-using-programmer.png,
        title: Go to "Sketch" > "Upload Using Programmer".  
' 
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=codeByUploadWithProgrammer %}
