graph TD;

ipEnabled(Is your device IP Enabled ?);
class ipEnabled main;

customFirmware(Custom Firmware?);
commandsOrUploads(Commands to device</br>or Frequent uploads?)
mqtt(MQTT?)
http(HTTP?)
coap(CoAP?)
gateway(Your device</br> is an IoT gateway?)
mqttCeApi(fa:fa-external-link ThingsBoard CE </br>MQTT API)
httpCeApi(fa:fa-external-link ThingsBoard CE </br>HTTP API)
coapCeApi(fa:fa-external-link ThingsBoard CE </br>CoAP API)
mqttGwApi(fa:fa-external-link ThingsBoard CE </br>MQTT Gateway API)
customIntegration(fa:fa-envelope Contact Us)
class mqttGwApi main;
class mqttCeApi main;
class httpCeApi main;
class coapCeApi main;
class customIntegration main;

noIpStack(Your device supports</br> LoRaWAN</br>SigFox</br>NB IoT</br>or SMS?);
platformIntegrations(fa:fa-external-link Platform Integrations)
contactUsOtherIntegration(fa:fa-envelope Contact Us)
class platformIntegrations pe;
class contactUsOtherIntegration main;

connectedToBackend(Already Connected to Backend?)
configureCustomBackend(Able to configure custom backend?)

existingBackend("
<a class='innerLink pe'
   title=AWS&nbsp;IoT&nbsp;Integration
   target=_self
   href=/docs/user-guide/integrations/aws-iot/>
   fa:fa-amazon AWS IoT
</a>
</br>
<a class='innerLink pe'
   title=Azure&nbsp;Event&nbsp;Hub&nbsp;Integration
   target=_self
   href=/docs/user-guide/integrations/azure-event-hub/>
   fa:fa-windows Azure Event Hub
</a>
<a class='innerLink pe'
   title=Azure&nbsp;IoT&nbsp;Hub&nbsp;Integration
   target=_self
   href=/docs/user-guide/integrations/azure-iot-hub/>
   fa:fa-windows Azure IoT Hub
</a>
</br>
<a class='innerLink pe'
   title=IBM&nbsp;Watson&nbsp;IoT&nbsp;Integration
   target=_self
   href=/docs/user-guide/integrations/ibm-watson-iot/>
   fa:fa-external-link IBM Watson IoT
</a>
</br>
<a class='innerLink pe'
   title=OPC-UA Integration
   target=_self
   href=/docs/user-guide/integrations/opc-ua/>
   fa:fa-external-link OPC-UA
</a>
")

httpPlatformIntegrations(fa:fa-external-link HTTP Integration)
brokerPlatformIntegrations(fa:fa-external-link Broker + MQTT Integration)
contactUsOtherCustomBackend(fa:fa-envelope Contact Us)
mqttBroker(Supports MQTT Broker?)
mqttIntegration(fa:fa-external-link MQTT Integration)
httpCallbacks(Supports HTTP callbacks</br>or webhooks?)
httpIntegration(fa:fa-external-link HTTP Integration)
contactUsOtherBackendIntegration(fa:fa-envelope Contact Us)
class existingBackend big;
class httpPlatformIntegrations pe;
class brokerPlatformIntegrations pe;
class contactUsOtherCustomBackend main;
class mqttIntegration pe;
class httpIntegration pe;
class contactUsOtherBackendIntegration main;

ipEnabled -->|Yes| customFirmware;
ipEnabled -->|No| noIpStack;

customFirmware -->|Yes| commandsOrUploads;
customFirmware -->|No| connectedToBackend;

commandsOrUploads -->|Yes| mqtt;
commandsOrUploads -->|No| http;

mqtt -->|Yes| gateway;
mqtt -->|No| http;

gateway -->|No| mqttCeApi;
gateway -->|Yes| mqttGwApi;

http -->|Yes| httpCeApi;
http -->|No| coap;

coap -->|Yes| coapCeApi;
coap -->|No| customIntegration;

noIpStack -->|Yes| platformIntegrations;
noIpStack -->|No| contactUsOtherIntegration;

connectedToBackend -->|Yes| existingBackend;
connectedToBackend -->|No| configureCustomBackend;

existingBackend -->|No| mqttBroker;

mqttBroker -->|Yes| mqttIntegration;
mqttBroker -->|No| httpCallbacks;

httpCallbacks -->|Yes| httpIntegration;
httpCallbacks -->|No| contactUsOtherBackendIntegration

configureCustomBackend -->|HTTP?| httpPlatformIntegrations;
configureCustomBackend -->|MQTT?| brokerPlatformIntegrations;
configureCustomBackend -->|Other?| contactUsOtherCustomBackend;

click ipEnabled openLink "Is your device connected through the common TCP/UDP based protocols?"
click customFirmware openLink "Are you able to change and upload custom device firmware to use ThingsBoard data format and supported protocols?"
click commandsOrUploads openLink "Are you pushing a lot of data frequently or would you like to control your device using remote commands from the server?"
click platformIntegrations openLink "Platform Integrations"
click contactUsOtherIntegration openLink "Contact Us"
click configureCustomBackend openLink "Are you able to configure where to push uplink data?"

click gateway openLink "Your device has multiple other devices connected to itself using various protocols like BTLE, ZigBee, etc"
click httpCeApi openLink "HTTP Device API Reference"
click mqttCeApi openLink "MQTT Device API Reference"
click lwm2mCeApi openLink "LwM2M Device API Reference"
click mqttGwApi openLink "MQTT Gateway API Reference"
click coapCeApi openLink "CoAP Device API Reference"
click customIntegration openLink "Contact Us"

click mqttIntegration openLink "MQTT Integration"
click httpIntegration openLink "HTTP Integration"
click contactUsOtherBackendIntegration openLink "Contact Us"
click httpPlatformIntegrations openLink "Configure ThingsBoard HTTP Integration to consume data from your devices"
click brokerPlatformIntegrations openLink "Use external MQTT broker. Configure ThingsBoard MQTT Integration to subscribe to the data feed from the external MQTT broker as well as push downlink messages to the broker"
click contactUsOtherCustomBackend openLink "Contact Us"
