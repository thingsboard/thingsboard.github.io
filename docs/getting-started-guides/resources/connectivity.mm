graph TD;

%% classDef node stroke:#305680,color:#0f55a2,fill:#ffffff,stroke-width:4px,font-family:Roboto,sans-serif,font-weight:500,font-size:16px;

%% classDef edgeLabel stroke:#305680,stroke-width:4px,font-family:Roboto,sans-serif,font-weight:500,font-size:16px;

%% classDef main fill:#305680,color:#ffffff,font-size:18px;

ipEnabled(IP Enabled ?);
class ipEnabled main;

customFirmware(Custom Firmware?);
commandsOrUploads(Commands to device?</br>or Frequent uploads?)
mqtt(MQTT?)
http(HTTP?)
mqttCeApi(ThingsBoard CE MQTT API)
httpCeApi(ThingsBoard CE HTTP API)
customIntegration(Custom Integration)
class mqttCeApi main;
class httpCeApi main;
class customIntegration main;

noIpStack(LoRa WAN/SigFox/NbIot/OPC-UA/SMS);
platformIntegrations(Platform Integrations)
contactUsOtherIntegration(Contact us)
class platformIntegrations main;
class contactUsOtherIntegration main;

connectedToBackend(Already Connected to Backend?)
configureCustomBackend(Configure custom backend?)

existingBackend("
<a class=innerLink
   title=AWS&nbsp;IoT&nbsp;Integration
   target=_blank
   href=/docs/user-guide/integrations/aws-iot/>
   AWS IoT
</a><br/>
<a class=innerLink
   title=Azure&nbsp;Event&nbsp;Hub&nbsp;Integration
   target=_blank
   href=/docs/user-guide/integrations/azure-event-hub/>
   Azure Event Hub
</a><br/>
<a class=innerLink
   title=IBM&nbsp;Watson&nbsp;IoT&nbsp;Integration
   target=_blank
   href=/docs/user-guide/integrations/ibm-watson-iot/>
   IBM Watson IoT
</a>
")

httpPlatformIntegrations(HTTP Integration)
brokerPlatformIntegrations(Broker + MQTT Integration)
contactUsOtherCustomBackend(Contact us)
mqttBroker(Supports MQTT Broker?)
mqttIntegration(MQTT Integration)
httpCallbacks(Supports HTTP callbacks</br>or webhooks?)
httpIntegration(HTTP Integration)
contactUsOtherBackendIntegration(Contact us)
class existingBackend big;
class httpPlatformIntegrations main;
class brokerPlatformIntegrations main;
class contactUsOtherCustomBackend main;
class mqttIntegration main;
class httpIntegration main;
class contactUsOtherBackendIntegration main;

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

%% click existingBackend openLink "Device is connected to existing supported backend?"
click mqttIntegration openLink "MQTT Integration"
click httpIntegration openLink "HTTP Integration"
click contactUsOtherBackendIntegration openLink "Contact Us"
click httpPlatformIntegrations openLink "HTTP Integration"
click brokerPlatformIntegrations openLink "Broker + MQTT Integration"
click contactUsOtherCustomBackend openLink "Contact Us"