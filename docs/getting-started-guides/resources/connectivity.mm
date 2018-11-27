graph TD;

ipEnabled(IP Enabled ?);
class ipEnabled main;

customFirmware(Custom Firmware?);
commandsOrUploads(Commands to device?</br>or Frequent uploads?)
mqtt(MQTT?)
http(HTTP?)
mqttCeApi(fa:fa-external-link ThingsBoard CE MQTT API)
httpCeApi(fa:fa-external-link ThingsBoard CE HTTP API)
customIntegration(fa:fa-envelope Custom Integration)
class mqttCeApi main;
class httpCeApi main;
class customIntegration pe;

noIpStack(LoRa WAN/SigFox/NbIot/OPC-UA/SMS);
platformIntegrations(fa:fa-external-link Platform Integrations)
contactUsOtherIntegration(fa:fa-envelope Contact us)
class platformIntegrations pe;
class contactUsOtherIntegration pe;

connectedToBackend(Already Connected to Backend?)
configureCustomBackend(Configure custom backend?)

existingBackend("
<a class='innerLink pe'
   title=AWS&nbsp;IoT&nbsp;Integration
   target=_self
   href=/docs/user-guide/integrations/aws-iot/>
   fa:fa-amazon AWS IoT
</a>
<a class='innerLink pe'
   title=Azure&nbsp;Event&nbsp;Hub&nbsp;Integration
   target=_self
   href=/docs/user-guide/integrations/azure-event-hub/>
   fa:fa-windows Azure Event Hub
</a>
<a class='innerLink pe'
   title=IBM&nbsp;Watson&nbsp;IoT&nbsp;Integration
   target=_self
   href=/docs/user-guide/integrations/ibm-watson-iot/>
   fa:fa-external-link IBM Watson IoT
</a>
")

httpPlatformIntegrations(fa:fa-external-link HTTP Integration)
brokerPlatformIntegrations(fa:fa-external-link Broker + MQTT Integration)
contactUsOtherCustomBackend(fa:fa-envelope Contact us)
mqttBroker(Supports MQTT Broker?)
mqttIntegration(fa:fa-external-link MQTT Integration)
httpCallbacks(Supports HTTP callbacks</br>or webhooks?)
httpIntegration(fa:fa-external-link HTTP Integration)
contactUsOtherBackendIntegration(fa:fa-envelope Contact us)
class existingBackend big;
class httpPlatformIntegrations pe;
class brokerPlatformIntegrations pe;
class contactUsOtherCustomBackend pe;
class mqttIntegration pe;
class httpIntegration pe;
class contactUsOtherBackendIntegration pe;

ipEnabled -->|Yes| customFirmware;
ipEnabled -->|No| noIpStack;

customFirmware -->|Yes| commandsOrUploads;
customFirmware -->|No| connectedToBackend;

commandsOrUploads -->|Yes| mqtt;
commandsOrUploads -->|No| http;

mqtt -->|Yes| mqttCeApi;
mqtt -->|No| http;

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

click httpCeApi openLink "HTTP Device API Reference"
click mqttCeApi openLink "MQTT Device API Reference"
click customIntegration openLink "Develop custom Platform Integration"

click mqttIntegration openLink "MQTT Integration"
click httpIntegration openLink "HTTP Integration"
click contactUsOtherBackendIntegration openLink "Contact Us"
click httpPlatformIntegrations openLink "HTTP Integration"
click brokerPlatformIntegrations openLink "Broker + MQTT Integration"
click contactUsOtherCustomBackend openLink "Contact Us"