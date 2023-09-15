
Also we can change the period of the blinking using [shared attribute](/docs/{{page.docsPrefix}}user-guide/attributes/#shared-attributes) update functionality.    

{% assign updateLedBlinkingPeriod = '
    ===
        image: https://img.thingsboard.io/devices-library/basic/microcontrollers/dashboard/thingsboard-example-dashboard-change-blinking-mode-1.png,
        title: To change period of the blinking we just need to change the value on our dashboard.
    ===
        image: https://img.thingsboard.io/devices-library/basic/microcontrollers/dashboard/thingsboard-example-dashboard-blinking-interval-change.png,
        title: After applying by pressing check mark you will see a confirmation message.
'
%} 

{% include images-gallery.liquid showListImageTitles="true" imageCollection=updateLedBlinkingPeriod %}

{% assign updateLedState= '
    ===
        image: https://img.thingsboard.io/devices-library/basic/microcontrollers/dashboard/thingsboard-example-dashboard-change-blinking-mode-0.png,
        title: It can be done only when the blinking mode is disabled.
'
%}

In order to change state when blinking is disabled - we can use the switch in the same widget:  

{% include images-gallery.liquid showListImageTitles="true" imageCollection=updateLedState %}

{% if boardLedCount == 0 %}

Unfortunately, this board doesn't have built-in LED indicator that we can control.  
So you can check results of shared attribute change using Serial Monitor (**Tools** -> **Serial monitor**) and choose a baud rate 115200.  

{% endif %}

To reach this, we have a variable "blinkingInterval" used in the following parts of the code:  
- Callback for shared attributes update:  
    
```cpp
...

void processSharedAttributes(const Shared_Attribute_Data &data) {
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
    tb.sendTelemetryData(LED_STATE_ATTR, ledState);
    tb.sendAttributeData(LED_STATE_ATTR, ledState);
    if (LED_BUILTIN == 99) {
      Serial.print("LED state changed to: ");
      Serial.println(ledState);
    }
  }
...
```

{% if boardLedCount == 3 %}

{% assign updateLedColor = '
    ===
        image: https://img.thingsboard.io/devices-library/basic/microcontrollers/dashboard/thingsboard-example-dashboard-change-led-color.png,
        title: You can update the color of the led on the board, using the widget on ThingsBoard dashboard. 
'
%}

Such as the board has included RGB LED we can control it color.  

{% include images-gallery.liquid showListImageTitles="true" imageCollection=updateLedColor %}

To control the led we change "ledColor" shared attribute. It contains RGB values in the following string format "R,G,B". 

The following part of the code used to parse incoming values and save them:  

```cpp
...
if (strcmp(it->key().c_str(), LED_COLOR_ATTR) == 0) {
  std::string data = it->value().as<std::string>();
  Serial.print("Updated colors: ");
  Serial.println(data.c_str());
  int i = 0;
  bool end = false;
  while (data.length() > 0) {
    int index = data.find(',');
    if (index == -1) {
      end = true;
      index = data.length();
    }
    switch (i) {
      case 0:
        redColor = map(atoi(data.substr(0, index).c_str()), 0, 255, 255, 0);
        break;
      case 1:
        greenColor = map(atoi(data.substr(0, index).c_str()), 0, 255, 255, 0);
        break;
      case 2:
        blueColor = map(atoi(data.substr(0, index).c_str()), 0, 255, 255, 0);
        break;
      default:
        break;
    }
    i++;
    if (end) {
      break;
    } else {
      data = data.substr(index + 1);
    }
  }
  setLedColor();
}
...
```

To set the color of the LED we use the following function in the code:  

```cpp
...
void setLedColor() {
  if (redColor < 255 && ledState) {
    analogWrite(LEDR, redColor);
  } else {
    pinMode(LEDR, OUTPUT);
    digitalWrite(LEDR, LOW);
  }
  if (greenColor < 255 && ledState) {
    analogWrite(LEDG, greenColor);
  } else {
    pinMode(LEDG, OUTPUT);
    digitalWrite(LEDG, LOW);
  }
  if (blueColor < 255 && ledState) {
    analogWrite(LEDB, blueColor);
  } else {
    pinMode(LEDB, OUTPUT);
    digitalWrite(LEDB, LOW);
  }
}
...
```

{% endif %}

{% if OLEDInstallationRequired == "true" %}

{% assign updateTextOnDisplay = '
    ===
        image: https://img.thingsboard.io/devices-library/basic/microcontrollers/dashboard/thingsboard-example-dashboard-update-oled-screen.png,
        title: Put text to the input box and apply changes. Text also will be displayed in the field above.
'
%}

Also, you can change text on the display. To do this you can change **screenText** shared attribute or using the example dashboard.  

{% include images-gallery.liquid showListImageTitles="true" imageCollection=updateTextOnDisplay %}

You can use the following special symbols:  
- **\n** - new line.
- **\t** - four spaces.

To connect OLED display we use the following code parts (We have an I2C line, connected to pins **5** and **4** on the board):  

```cpp
...
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, -1);
...
Wire.begin(5, 4);
if(!display.begin(SSD1306_SWITCHCAPVCC, 0x3C, false, false)) { 
    Serial.println("Cannot initialize screen!");
}
...
```

To process incoming text and handle special symbols we use the following code:  
```cpp
...
if (strcmp(it->key().c_str(), SCREEN_TEXT_ATTR) == 0) {
    screenText = String(it->value().as<const char*>());
    screenText.replace("\\n", "\n");
    screenText.replace("\\t", "    ");
    screenTextUpdated = true;
}
...
```

To display incoming test on display we use the following part of code:  
```cpp
...

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
...
```

{% endif %}

You can change the logic to reach your goals and add processing for your attributes.  
