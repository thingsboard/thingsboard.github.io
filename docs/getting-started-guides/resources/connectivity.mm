graph TD;

%% classDef node stroke:#305680,color:#0f55a2,fill:#ffffff,stroke-width:4px,font-family:Roboto,sans-serif,font-weight:500,font-size:16px;

%% classDef edgeLabel stroke:#305680,stroke-width:4px,font-family:Roboto,sans-serif,font-weight:500,font-size:16px;

%% classDef main fill:#305680,color:#ffffff,font-size:18px;

ipEnabled(IP Enabled ?);
class ipEnabled main;

noIpStack(LoRa WAN/SigFox/NbIot/OPC-UA/SMS);
customFirmware(Custom Firmware?);

ipEnabled -->|No| noIpStack;
ipEnabled -->|Yes| customFirmware;

click customFirmware "/docs/user-guide/rule-engine-2-0/re-getting-started/" "This is a tooltip<br/>for a link";
