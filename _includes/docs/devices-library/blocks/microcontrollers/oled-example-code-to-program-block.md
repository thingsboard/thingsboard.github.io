
Now it’s time to program the board to connect to ThingsBoard.  
To do this, you can use the code below. It contains all required functionality for this guide.    


```cpp
#include <WiFi.h>
#include <Arduino_MQTT_Client.h>
#include <SPI.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

#define THINGSBOARD_ENABLE_PSRAM 0
#define THINGSBOARD_ENABLE_DYNAMIC 1

#include <ThingsBoard.h>

#ifndef LED_BUILTIN
#define LED_BUILTIN 99
#endif

#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64

Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, -1);

constexpr char WIFI_SSID[] = "YOUR_WIFI_SSID";
constexpr char WIFI_PASSWORD[] = "YOUR_WIFI_PASSWORD";

// See https://thingsboard.io/docs/getting-started-guides/helloworld/
// to understand how to obtain an access token
constexpr char TOKEN[] = "YOUR_ACCESS_TOKEN";

// Thingsboard we want to establish a connection too
constexpr char THINGSBOARD_SERVER[] = "{% if page.docsPrefix == "pe/" or page.docsPrefix == "paas/" %}thingsboard.cloud{% else %}demo.thingsboard.io{% endif %}";
// MQTT port used to communicate with the server, 1883 is the default unencrypted MQTT port.
constexpr uint16_t THINGSBOARD_PORT = 1883U;

// Maximum size packets will ever be sent or received by the underlying MQTT client,
// if the size is to small messages might not be sent or received messages will be discarded
constexpr uint32_t MAX_MESSAGE_SIZE = 1024U;

// Baud rate for the debugging serial connection.
// If the Serial output is mangled, ensure to change the monitor speed accordingly to this variable
constexpr uint32_t SERIAL_DEBUG_BAUD = 115200U;

// Initialize underlying client, used to establish a connection
WiFiClient wifiClient;
// Initalize the Mqtt client instance
Arduino_MQTT_Client mqttClient(wifiClient);
// Initialize ThingsBoard instance with the maximum needed buffer size
ThingsBoard tb = ThingsBoard(mqttClient, MAX_MESSAGE_SIZE, false, 1024);

// Attribute names for attribute request and attribute updates functionality

constexpr char BLINKING_INTERVAL_ATTR[] = "blinkingInterval";
constexpr char LED_MODE_ATTR[] = "ledMode";
constexpr char LED_STATE_ATTR[] = "ledState";
constexpr char SCREEN_TEXT_ATTR[] = "screenText";

String screenText;
volatile bool screenTextUpdated;

// handle led state and mode changes
volatile bool attributesChanged = false;

// LED modes: 0 - continious state, 1 - blinking
volatile int ledMode = 0;

// Current led state
volatile bool ledState = false;

// Settings for interval in blinking mode
constexpr uint16_t BLINKING_INTERVAL_MS_MIN = 10U;
constexpr uint16_t BLINKING_INTERVAL_MS_MAX = 60000U;
volatile uint16_t blinkingInterval = 1000U;

uint32_t previousStateChange;

// For telemetry
constexpr int16_t telemetrySendInterval = 2000U;
uint32_t previousDataSend;

// List of shared attributes for subscribing to their updates
constexpr std::array<const char *, 3U> SHARED_ATTRIBUTES_LIST = {
  LED_STATE_ATTR,
  BLINKING_INTERVAL_ATTR,
  SCREEN_TEXT_ATTR
};

// List of client attributes for requesting them (Using to initialize device states)
constexpr std::array<const char *, 1U> CLIENT_ATTRIBUTES_LIST = {
  LED_MODE_ATTR
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

  attributesChanged = true;

  // Returning current mode
  return RPC_Response("newMode", (int)ledMode);
}


// Optional, keep subscribed shared attributes empty instead,
// and the callback will be called for every shared attribute changed on the device,
// instead of only the one that were entered instead
const std::array<RPC_Callback, 1U> callbacks = {
  RPC_Callback{ "setLedMode", processSetLedMode }
};


/// @brief Update callback that will be called as soon as one of the provided shared attributes changes value,
/// if none are provided we subscribe to any shared attribute change instead
/// @param data Data containing the shared attributes that were changed and their current value
void processSharedAttributes(const Shared_Attribute_Data &data) {
  for (auto it = data.begin(); it != data.end(); ++it) {
    if (strcmp(it->key().c_str(), BLINKING_INTERVAL_ATTR) == 0) {
      const uint16_t new_interval = it->value().as<uint16_t>();
      if (new_interval >= BLINKING_INTERVAL_MS_MIN && new_interval <= BLINKING_INTERVAL_MS_MAX) {
        blinkingInterval = new_interval;
        Serial.print("Updated blinking interval to: ");
        Serial.println(new_interval);
      }
    } else if (strcmp(it->key().c_str(), SCREEN_TEXT_ATTR) == 0) {
      screenText = String(it->value().as<const char*>());
      screenText.replace("\\n", "\n");
      screenText.replace("\\t", "    ");
      screenTextUpdated = true;
    } else if(strcmp(it->key().c_str(), LED_STATE_ATTR) == 0) {
      ledState = it->value().as<bool>();
      digitalWrite(LED_BUILTIN, ledState ? HIGH : LOW);
      Serial.print("Updated state to: ");
      Serial.println(ledState);
    }
  }
  attributesChanged = true;
}

void processClientAttributes(const Shared_Attribute_Data &data) {
  for (auto it = data.begin(); it != data.end(); ++it) {
    if (strcmp(it->key().c_str(), LED_MODE_ATTR) == 0) {
      const uint16_t new_mode = it->value().as<uint16_t>();
      ledMode = new_mode;
    }
  }
}

const Shared_Attribute_Callback attributes_callback(&processSharedAttributes, SHARED_ATTRIBUTES_LIST.cbegin(), SHARED_ATTRIBUTES_LIST.cend());
const Attribute_Request_Callback attribute_shared_request_callback(&processSharedAttributes, SHARED_ATTRIBUTES_LIST.cbegin(), SHARED_ATTRIBUTES_LIST.cend());
const Attribute_Request_Callback attribute_client_request_callback(&processClientAttributes, CLIENT_ATTRIBUTES_LIST.cbegin(), CLIENT_ATTRIBUTES_LIST.cend());

void setup() {
  // Initalize serial connection for debugging
  Serial.begin(115200);
  pinMode(LED_BUILTIN, OUTPUT);
  Wire.begin(5, 4);
  if(!display.begin(SSD1306_SWITCHCAPVCC, 0x3C, false, false)) { 
    Serial.println("Cannot initialize screen!");
  }
  delay(2000);
  display.clearDisplay();
  display.display();  
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
      delay(2000);
      return;
    }
    // Sending a MAC address as an attribute
    tb.sendAttributeData("macAddress", WiFi.macAddress().c_str());
    
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
  }

  if (screenTextUpdated) {
    screenTextUpdated = false;
    display.clearDisplay();
    display.setTextSize(1);
    display.setTextColor(SSD1306_WHITE);
    display.setCursor(0, 0);
    display.println(screenText);
    display.display();
    Serial.println("Screen updated!");
  }

  if (attributesChanged) {
    attributesChanged = false;
    if (ledMode == 0) {
      previousStateChange = millis();
    }
    tb.sendTelemetryData(LED_MODE_ATTR, ledMode);
    tb.sendTelemetryData(LED_STATE_ATTR, ledState);
    tb.sendAttributeData(LED_MODE_ATTR, ledMode);
    tb.sendAttributeData(LED_STATE_ATTR, ledState);
  }

  if (ledMode == 1 && millis() - previousStateChange > blinkingInterval) {
    previousStateChange = millis();
    ledState = !ledState;
    digitalWrite(LED_BUILTIN, ledState);
    tb.sendTelemetryData(LED_STATE_ATTR, ledState);
    tb.sendAttributeData(LED_STATE_ATTR, ledState);
    if (LED_BUILTIN == 99) {
      Serial.print("LED state changed to: ");
      Serial.println(ledState);
    }
  }

  // Sending telemetry every telemetrySendInterval time
  if (millis() - previousDataSend > telemetrySendInterval) {
    previousDataSend = millis();
    tb.sendTelemetryData("temperature", random(10, 20));
    tb.sendAttributeData("rssi", WiFi.RSSI());
    tb.sendAttributeData("channel", WiFi.channel());
    tb.sendAttributeData("bssid", WiFi.BSSIDstr().c_str());
    tb.sendAttributeData("localIp", WiFi.localIP().toString().c_str());
    tb.sendAttributeData("ssid", WiFi.SSID().c_str());
  }

  tb.loop();
}

```
{:.copy-code.expandable-20}


{% capture replacePlaceholders %}
Don’t forget to replace placeholders with your real WiFi network SSID, password, ThingsBoard device access token.
{% endcapture %}

{% include templates/info-banner.md content=replacePlaceholders %}

Necessary variables for connection:  

| Variable name      | Default value                                                                                                                | Description                                                                             | 
|--------------------|------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| WIFI_SSID          | **YOUR_WIFI_SSID**                                                                                                           | Your WiFi network name.                                                                 | 
| WIFI_PASSWORD      | **YOUR_WIFI_PASSWORD**                                                                                                       | Your WiFi network password.                                                             |
| TOKEN              | **YOUR_DEVICE_ACCESS_TOKEN**                                                                                                 | Access token from device. Obtaining process described in #connect-device-to-thingsboard | 
| THINGSBOARD_SERVER | **{% if page.docsPrefix == "pe/" or page.docsPrefix == "paas/" %}thingsboard.cloud{% else %}demo.thingsboard.io{% endif %}** | Your ThingsBoard host or ip address.                                                    |
| THINGSBOARD_PORT   | **1883U**                                                                                                                    | ThingsBoard server MQTT port. Can be default for this guide.                            |
| MAX_MESSAGE_SIZE   | **256U**                                                                                                                     | Maximal size of MQTT messages. Can be default for this guide.                           |
| SERIAL_DEBUG_BAUD  | **1883U**                                                                                                                    | Baud rate for serial port. Can be default for this guide.                               |  

```cpp
...

constexpr char WIFI_SSID[] = "YOUR_WIFI_SSID";
constexpr char WIFI_PASSWORD[] = "YOUR_WIFI_PASSWORD";

constexpr char TOKEN[] = "YOUR_ACCESS_TOKEN";

constexpr char THINGSBOARD_SERVER[] = "{% if page.docsPrefix == "pe/" or page.docsPrefix == "paas/" %}thingsboard.cloud{% else %}demo.thingsboard.io{% endif %}";
constexpr uint16_t THINGSBOARD_PORT = 1883U;

constexpr uint32_t MAX_MESSAGE_SIZE = 256U;
constexpr uint32_t SERIAL_DEBUG_BAUD = 115200U;

...
```

Send data part (By default the example sends random value for **temperature** key and some WiFi information):  
```cpp
...
    tb.sendTelemetryData("temperature", random(10, 20));
    tb.sendAttributeData("rssi", WiFi.RSSI());
    tb.sendAttributeData("bssid", WiFi.BSSIDstr().c_str());
    tb.sendAttributeData("localIp", WiFi.localIP().toString().c_str());
    tb.sendAttributeData("ssid", WiFi.SSID().c_str());
    tb.sendAttributeData("channel", WiFi.channel());
...
```

Then upload the code to the device by pressing Upload button or keyboard combination Ctrl+U.  
{% assign codeByUploadButton='
    ===
        image: https://img.thingsboard.io/devices-library/basic/arduino-ide/upload.png
' 
%}
{% include images-gallery.liquid imageCollection=codeByUploadButton %}

{% if arduinoBoardPath contains "ESP" %}

If you cannot upload the code and receive an error: `Property 'upload.tool.serial' is undefined` you can do the following:  
  
{% assign codeByUploadWithProgrammer='
    ===
        image: https://img.thingsboard.io/devices-library/basic/arduino-ide/select-esptool-programmer.png,
        title: Go to "Tools" > "Programmer" and select "Esptool" as a programmer.  
    ===
        image: https://img.thingsboard.io/devices-library/basic/arduino-ide/upload-using-programmer.png,
        title: Go to "Sketch" > "Upload Using Programmer".  
' 
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=codeByUploadWithProgrammer %}

{% endif %}
