graph TD;

ipEnabled(IP Enabled ?);
class ipEnabled main;

customFirmware(Custom Firmware?);
commandsOrUploads(Commands to device</br>or Frequent uploads?)
mqtt(MQTT?)
http(HTTP?)
gateway(Your device</br> is an IoT gateway?)
mqttCeApi(fa:fa-external-link ThingsBoard CE </br>MQTT API)
httpCeApi(fa:fa-external-link ThingsBoard CE </br>HTTP API)
mqttGwApi(fa:fa-external-link ThingsBoard CE </br>MQTT Gateway API)
customIntegration(fa:fa-envelope Contact Us)
class mqttGwApi main;
class mqttCeApi main;
class httpCeApi main;
class customIntegration main;

noIpStack(Your device supports</br> LoRaWAN</br>SigFox</br>NB IoT</br>OPC-UA or SMS?);
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
</br>
<a class='innerLink pe'
   title=IBM&nbsp;Watson&nbsp;IoT&nbsp;Integration
   target=_self
   href=/docs/user-guide/integrations/ibm-watson-iot/>
   fa:fa-external-link IBM Watson IoT
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
http -->|No| customIntegration;

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

click ipEnabled openLink "Is your device IP enabled ?"
click customFirmware openLink "Is your device supports custom firmware?";
click platformIntegrations openLink "Platform Integrations"
click contactUsOtherIntegration openLink "Contact Us"

click gateway openLink "Your device has multiple other devices connected to itself using various protocols like BTLE, ZigBee, etc"
click httpCeApi openLink "HTTP Device API Reference"
click mqttCeApi openLink "MQTT Device API Reference"
click mqttGwApi openLink "MQTT Gateway API Reference"
click customIntegration openLink "Contact Us"

click mqttIntegration openLink "MQTT Integration"
click httpIntegration openLink "HTTP Integration"
click contactUsOtherBackendIntegration openLink "Contact Us"
click httpPlatformIntegrations openLink "HTTP Integration"
click brokerPlatformIntegrations openLink "Broker + MQTT Integration"
click contactUsOtherCustomBackend openLink "Contact Us"