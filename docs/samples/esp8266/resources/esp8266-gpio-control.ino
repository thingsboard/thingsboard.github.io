#include <ESP8266WiFi.h>
#include <ThingsBoard.h>

#define WIFI_AP "YOUR_WIFI_AP"
#define WIFI_PASSWORD "YOUR_WIFI_PASSWORD"

#define TOKEN "ESP8266_DEMO_TOKEN"

#define GPIO0 0
#define GPIO2 2
#define GPIO0_PIN 3
#define GPIO2_PIN 5

#define STR_INDIR(x) #x
#define STR(x) STR_INDIR(x)

char thingsboardServer[] = "demo.thingsboard.io";

WiFiClient wifiClient;

ThingsBoard tb(wifiClient);

int status = WL_IDLE_STATUS;

// We assume that all GPIOs are LOW
bool gpioState[] = {false, false};

bool subscribed = false;

void setup()
{
    Serial.begin(115200);
    //Set output mode for all GPIO pins
    pinMode(GPIO0, OUTPUT);
    pinMode(GPIO2, OUTPUT);
    delay(10);
    InitWiFi();
}

void loop()
{
    if ( !tb.connected() ) {
        reconnect();
    }

    tb.loop();
}

RPC_Response get_gpio_status(const RPC_Data &data)
{
    if (data["pin"].as<int>() == GPIO0_PIN) {
		// Return GPIO0 state
        return RPC_Response(STR(GPIO0_PIN), gpioState[0]);
    } else if (data["pin"].as<int>() == GPIO2_PIN) {
		// Return GPIO2 state
        return RPC_Response(STR(GPIO2_PIN), gpioState[1]);
	}
}


RPC_Response set_gpio_status(const RPC_Data &data)
{
    if (data["pin"].as<int>() == GPIO0_PIN) {
        // Output GPIO0 state
        digitalWrite(GPIO0, data["enabled"].as<bool>() ? HIGH : LOW);
        // Update GPIO2 state
        gpioState[0] = data["enabled"].as<bool>();
    } else if (data["pin"].as<int>() == GPIO2_PIN) {
        // Output GPIO0 state
        digitalWrite(GPIO2, data["enabled"].as<bool>() ? HIGH : LOW);
        // Update GPIO2 state
        gpioState[1] = data["enabled"].as<bool>();
    }
    return get_gpio_status(data);
}

const size_t callbacks_size = 2;
RPC_Callback callbacks[callbacks_size] = {
    { "getGpioStatus", get_gpio_status },
    { "setGpioStatus", set_gpio_status }
};

void InitWiFi()
{
    Serial.println("Connecting to AP ...");
    // attempt to connect to WiFi network

    WiFi.begin(WIFI_AP, WIFI_PASSWORD);
    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }
    Serial.println("Connected to AP");
}

void reconnect()
{
    // Loop until we're reconnected
    while (!tb.connected()) {
        status = WiFi.status();
        if ( status != WL_CONNECTED) {
            WiFi.begin(WIFI_AP, WIFI_PASSWORD);
            while (WiFi.status() != WL_CONNECTED) {
                delay(500);
                Serial.print(".");
            }
            Serial.println("Connected to AP");
        }
        Serial.print("Connecting to ThingsBoard node ... ");
        // Attempt to connect
        if ( tb.connect(thingsboardServer, TOKEN) ) {
            Serial.println( "[DONE]" );

            if (!subscribed) {
                Serial.println("Subscribing for RPC...");

                if (!tb.RPC_Subscribe(callbacks, callbacks_size)) {
                    Serial.println("Failed to subscribe for RPC");
                    return;
                }

				// Send initial GPIO state
                tb.sendAttributeBool(STR(GPIO0_PIN), false);
                tb.sendAttributeBool(STR(GPIO2_PIN), false);

                Serial.println("Subscribe done");
                subscribed = true;
            }
        } else {
            Serial.println( "[FAILED]" );
            Serial.println( "Retrying in 5 seconds ..." );
            // Wait 5 seconds before retrying
            delay( 5000 );
        }
    }
}
