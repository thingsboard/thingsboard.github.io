---
layout: docwithnav
assignees:
- nick
title: Galileosky TCP Integration
description: Galileosky TCP Integration Documentation 

---

{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}

## Introduction

This article discusses the practical steps to connect the Teltonika FMB-920 device to the ThingsBoard Integration and further control of this device using the ThingsBoard Integration features.

It is possible to execute any ThingsBoard Integration remotely from main ThingsBoard instance.
This guide contains step-by-step instructions how to launch ThingsBoard integration remotely.
For example, we will launch Teltonika TCP Integration that connects to the ThingsBoard PE and pushes data to 
[cloud.thingsboard.io](https://cloud.thingsboard.io/signup).  

See [deployment options](/docs/user-guide/integrations/#deployment-options) for more general information.
But in our integraation we used only TCP protocol:
<details>
    <summary>
    <font color="#228b22"><b>Scheme`s screenshot Galileosky TCP Integration</b></font> (<b>click to open expanded view</b>)
    </summary>
    <img src="/images/user-guide/integrations/galileosky/embeded-integrations-overview.jpg">
</details> 


## Prerequisites

We assume you already have a tenant administrator account on your own ThingsBoard PE v2.5 instance or
[cloud.thingsboard.io](https://cloud.thingsboard.io/signup). 
 

## ThingsBoard configuration steps

### Step 1. Config Root Rule Chain (Root)

After installing the ThingsBoard, for the normal operation of the Downlink Data Converter, you need to edit the Root Rule Chain (Root).

<details>
    <summary>
        <font color="#006400"><i><b>the following way: Rule chains -> Root Rule Chain (Root) -> Add the originator attributes, originator fields and integration downlink </b></i></font> (<b>click to open expanded view</b>)
    </summary>
    <img src="/images/user-guide/integrations/teltonika/rule_chane.png">
</details>
Alternatively, you can import it from this [file](/docs/user-guide/resources/teltonika/teltonika_galileosky_root_rule_chain.json) 

### Step 2. Create default Uplink and Downlink Converters

Let's create dummy uplink and downlink converters and will set them to work in debug mode.
While running in debug mode, those converters will record all incoming events. 
This will help us to tune the converters once we start receiving the data.

![image](/images/user-guide/integrations/remote/default-converters.gif)  

### Step 3. Settings decoder Function  to Uplink Data Converter

When creating an Uplink Converter, a default decoder is added to the Decoder section.

After creating the Uplink Converter to the Decoder section, you need to update the Decoder code to [the following code](/images/user-guide/integrations/galileosky/upLinkDecoder.txt).

<b>It is necessary to edit the Uplink decoder</b>

<p></p> <p></p>
<details>
    <summary>
        <font color="#006400"><i><b>Open Uplink Converter, editor mode, click "test decoder function" and replace the default code with a new code:</b></i></font> <br> (<b>click to open expanded view</b>)
    </summary> 
   <ul>
        <details>
            <summary>
            <font color="#228b22"><b>Screenshot of editing the UpLink decoder</b></font> (<b>click to open expanded view</b>)
            </summary>
            <img src="/images/user-guide/integrations/teltonika/uplink_decoder.png">
        </details> 
    </ul>
</details>

Alternatively, you can import it from this [file](/docs/user-guide/resources/galileosky/galileosky_tcp_uplink_converter.json) 
<details>
    <summary>
        <font color="#006400"><i><b>the following way: Go to Data Converters -> Add new Data Converter -> Import Converter </b></i></font> (<b>click to open expanded view</b>)
    </summary>
    <img src="/images/user-guide/rule-engine-2-0/tutorials/mqtt-downlink/import_new_converter.png">
</details>

<details>
    <summary>
        <i><b><font color="#FF0000">Note !!!</font> If error: Script used more than the allowed [<font color="#36abb5">100 ms</font>] of CPU time. </b></i> (click to open expanded view)
    </summary>
    <ul>
        <li>If you have an <b>error</b> while executing <b>uplink scripts:</b></li>         
        {% highlight bash %}
            java.util.concurrent.ExecutionException: java.util.concurrent.ExecutionException: javax.script.ScriptException: delight.nashornsandbox.exceptions.ScriptCPUAbuseException: Script used more than the allowed [100 ms] of CPU time.
 	        at com.google.common.util.concurrent.AbstractFuture.getDoneValue(AbstractFuture.java:502) ...    
        {% endhighlight %}          
        <li>It is possible to raise <font color="#006400"><i><b>"Maximum CPU time in milliseconds allowed for script execution"</b></i></font> in <i><b>src/main/resources/tb-remote-integration.yml</b></i></li>  
        {% highlight bash %}
            ...
            js:
              evaluator: "${JS_EVALUATOR:local}" # local/remote
              # Built-in JVM JavaScript environment properties
              local:
                 # Use Sandboxed (secured) JVM JavaScript environment
                 use_js_sandbox: "${USE_LOCAL_JS_SANDBOX:false}"
                ...
                # Maximum CPU time in milliseconds allowed for script execution
                max_cpu_time: "${LOCAL_JS_SANDBOX_MAX_CPU_TIME:300}"
                ...
        {% endhighlight %}
    </ul>
</details>
<br>

### Step 4. Settings encoder Function  to Downlink Data Converter
When creating an Downlink Converter, a default decoder is added to the Decoder section.<br>
After creating the Downlink Converter to the Decoder section, you need to update the Decoder code to [the following code](/images/user-guide/integrations/galileosky/downlinkDecoder.txt). <br>

<b>It is necessary to edit the Downlink decoder</b>

Open Downlink Converter, editor mode, click "test decoder function" and replace the default code with a new code:   
   <ul>
        <details>
            <summary>
            <font color="#228b22"><b>Screenshot edit the DownLink decoder</b></font> (<b>click to open expanded view</b>)
            </summary>
            <img src="/images/user-guide/integrations/galileosky/downlink_decoder.png">
        </details>         
        <details>
            <summary>
             <font color="#228b22"><b>JSON: output data after DownLink Data Converter looks like this:</b></font>  <br>(<b>click to open expanded view</b>)
             </summary>  
             {% highlight bash %}
             {
                 {
                    /** Encoder **/                    
                     var lenPacketStart = 26;
                     var result = setPayload();
                     var commandNumber;
                     var newPayload;
                     var separator;                 
                     function setPayload() {
                         if (msg.hasOwnProperty('payload') && metadata['payload'] !== null) {
                             return getPayload();
                         }
                         return null;
                     }                 
                     function getPayload() {
                         newPayload = [];
                          separator = ";";
                         commandNumber = metadata['commandNumber'];
                         var rez = {
                             contentType: "JSON",
                             data:  getDataHexMany(),
                             metadata: {
                                 serialNumber: metadata['cs_serialNumber'],
                                 deviceName: metadata['originatorName'],
                                 commandNumber: commandNumber,
                                 // payload:  getPayloadTrim()
                                 payload:  getNewPayloadStr ()
                             }
                         };
                         return rez;
                     }                 
                     function convertToHex(str) {
                         var hex = '';
                         for(var i=0;i<str.length;i++) {
                             hex += ''+str.charCodeAt(i).toString(16);
                         }
                         return hex;
                     }                 
                     function convertToHexFixLen(str, len){
                         var strHex = len +str.toString(16);
                         return strHex.substring(strHex.length - len.length);
                     }                 
                     function getDataHexMany() {
                         var dataArrays = msg.payload.split(separator);
                         var data = "";
                         for (var i = 0; i < dataArrays.length; i ++) {
                             data += (getDataHexOneForMany(dataArrays[i].trim()) + separator)
                         }
                         data = data.substring(0, data.lastIndexOf(separator));
                         return data;
                     }                 
                     function getDataHexOneForMany(str) {
                         var lenCommand = str.length;
                         var lenPacket = lenPacketStart + lenCommand;
                         var lenCommandHex = convertToHexFixLen(lenCommand, "00");
                         var lenPacketHex = hexStringToStringRev(convertToHexFixLen(lenPacket, "0000"));
                         var serialNumberHex = convertToHex(metadata['cs_serialNumber']);
                         var commandHex = convertToHex(str);
                         var commNumber = parseInt(commandNumber, 10);
                         commNumber ++;
                         // commNumber *= 10000;
                         var commNumberHex = convertToHexFixLen(commNumber, "00000000");
                         var dataHex = "01" + lenPacketHex  + "03" + serialNumberHex + "04" + "0000" + "E0" + commNumberHex + "E1" + lenCommandHex + commandHex;
                         var val = commNumberHex + ": " + str;
                         newPayload.push (val);
                         commandNumber = commNumber.toString();
                         return dataHex;
                     }                 
                     function hexStringToStringRev(str) {
                         var strRev = "";
                         for (var i = (str.length - 2); i >= 0; i -= 2) {
                             strRev += str.substring(i, i + 2);
                         }
                         return strRev;
                     }                 
                     function getPayloadTrim () {
                         var dataArrays = msg.payload.split(separator);
                         var data = "";
                         for (var i = 0; i < dataArrays.length; i ++) {
                             data += (dataArrays[i].trim() + separator)
                         }
                         data = data.substring(0, data.lastIndexOf(separator));
                         return data;
                     }
                     function getNewPayloadStr () {
                         var data = "";
                         for (var i = 0; i < newPayload.length; i ++) {
                             data += (newPayload[i].trim() + separator)
                         }
                         data = data.substring(0, data.lastIndexOf(separator));
                         return data;
                     }                 
                     return result;
                 }
             }
             {% endhighlight %}
         </details>  
    </ul>  
    
    
Alternatively, you can import it from this [file](/docs/user-guide/resources/galileosky/galileosky_tcp_downlink_converter.json) 
<details>
    <summary>
        <font color="#006400"><i><b>the following way: Go to Data Converters -> Add new Data Converter -> Import Converter </b></i></font> (<b>click to open expanded view</b>)
    </summary>
    <img src="/images/user-guide/rule-engine-2-0/tutorials/mqtt-downlink/import_new_converter.png">
</details>   

### Step 5. Create and Save credentials of Galileosky TCP Integration

Let's create Custom integration that will connect to the local service "remote-integration-tcp" using:
- Integration class
- Intagration key
- Integration secret 
<ol>
    <li>Notice that we enable "Debug" and "Execute remotely".</li>    
    <li>Required field: "Integration JSON configuration".</li>
        {% highlight bash %}
            {"bindPort": 1994}
        {% endhighlight %}    
    <img src="/images/user-guide/integrations/galileosky/custom-galileosky-tcp-integration_config.png">
    <li>If bindPort`s value is not set in the "Integration JSON configuration", the default value will be used: <font color="#36abb5">bindPort </font>=<font color="#0031ff">1990</font></li>
    <li>Let's copy-paste the integration key, secret and class from the integration details.</li>
     <img src="/images/user-guide/integrations/galileosky/custom-galileosky-tcp-integration.png">   
</ol>

### Step 6. Creation  and  configuration of the Dashboard

After creating devices manually: an overview attribute: the serial number of the device or after automatically creating the device (with the first service connection, the device is created automatically) - you need to create a dashboard.

<details>
   <summary>
       <font color="#006400"><i><b>Screenshot of the Dashboard after finishing its creation</b></i></font> (<b>click to open expanded view</b>)
   </summary> 
   <img src="/images/user-guide/integrations/galileosky/galileosky_dashboard_example.png">
</details>

[Example:  Dashboard in json format](/docs/user-guide/resources/galileosky/galileosky_tcp.json)

<details>
  <summary>
    <i><b>Creation of the Dashboard (open Dashboard to edit and add three aliases)</b></i> (click to open expanded view)
  </summary> 
  <ol>
    <details>
      <summary>
          <font color="#006400"><i><b>Screenshot: add Entity aliases</b></i></font> (<b>click to open expanded view</b>)
      </summary> 
      <img src="/images/user-guide/integrations/galileosky/galileosky_dashboard_add_aliases.png">
    </details>  
    <ol>
         <li><b>ListGalileoisky:</b> Filter type=>Device type; Type=>galileosky;</li>
        <details>
            <summary>
                <font color="#006400"><i><b>Screenshot: add Entity aliases ListGalileosky</b></i></font> (<b>click to open expanded view</b>)
            </summary> 
            <img src="/images/user-guide/integrations/galileosky/galileosky_dashboard_alias_ListGalileosky.png">
        </details>
        <li><b>SelectedDevice:</b> Filter type=>Entity from dashboard state;</li>
        <details>
            <summary>
                <font color="#006400"><i><b>Screenshot: add Entity aliases SelectedDevice</b></i></font> (<b>click to open expanded view</b>)
            </summary> 
            <img src="/images/user-guide/integrations/teltonika/teltonika_dashboard_alias_SelectedDevice.png">
        </details>
    </ol>
   </ol>
</details>  

<details>
  <summary>
    <i><b>Add to the Dashboard new states (open Dashboard to edit, click "Manage dashboard states" and add states)</b></i> (click to open expanded view)
  </summary> 
  <ol>    
    <details>
         <summary>
             <font color="#006400"><i><b>Screenshot of creation of the states; main, map, detailers, uplinks</b></i></font> (<b>click to open expanded view</b>)
         </summary> 
         <img src="/images/user-guide/integrations/teltonika/teltonika_dashboard_states.png">
     </details>
    <ol>
        <li> state main: Name=>MAIN; Sate id:=>main; Root state=>true</li>
        <ul>
            <details>
                 <summary>
                     <font color="#006400"><i><b>Screenshot of creation of the state; main</b></i></font> (<b>click to open expanded view</b>)
                 </summary> 
                 <img src="/images/user-guide/integrations/teltonika/teltonika_dashboard_state_main.png">
             </details>
        </ul>    
        <li> state map: Name=>Map; Sate id:=>map; Root state=>false</li>
        <ul>
            <details>
                 <summary>
                     <font color="#006400"><i><b>Screenshot of creation of the state; main</b></i></font> (<b>click to open expanded view</b>)
                 </summary> 
                 <img src="/images/user-guide/integrations/teltonika/teltonika_dashboard_state_map.png">
             </details>
        </ul>    
        <li> state details: Name=>Setup -> ${entityName}; Sate id:=>details; Root state=>false</li>
        <ul>
            <details>
                 <summary>New 
                     <font color="#006400"><i><b>Screenshot of creation of the state; main</b></i></font> (<b>click to open expanded view</b>)
                 </summary> 
                 <img src="/images/user-guide/integrations/teltonika/teltonika_dashboard_state_details.png">
             </details>
        </ul>    
        <li> state uplinks: Name=>UPLINKS -> ${entityName}; Sate id:=>uplinks; Root state=>false</li>
        <ul>
            <details>
                 <summary>
                     <font color="#006400"><i><b>Screenshot of creation of the state; main</b></i></font> (<b>click to open expanded view</b>)
                 </summary> 
                 <img src="/images/user-guide/integrations/teltonika/teltonika_dashboard_state_uplinks.png">
             </details>
        </ul> 
    </ol>
   </ol>
</details>  

<details>
  <summary>
    <i><b>Edit states and add  new widgets (open Dashboard and state to edit)</b></i> (click to open expanded view)
  </summary> 
  <ol> 
    <li> state <b>main:</b></li>
        <ul>
            <li><b>Add widget:</b> Entities table: Cards -> Entities </li>
            <li><b>Data</b> widget: add Datasources -> Type=>Entity; Parameters=>ListGalileosky Fields=>serialNumber... </li>
            <details>
                 <summary>
                     <font color="#006400"><i><b>Screenshot of creation widget Entities table</b></i></font> (<b>click to open expanded view</b>)
                 </summary> 
                 <img src="/images/user-guide/integrations/galileosky/galileosky_dashboard_state_main_entities.png">
             </details>
            <li><b>Actions</b> widget: Details, GoToUplinks, GoToMap, Details (On row click) </li>        
            <details>
                  <summary>
                      <i><b>Add actions...</b></i> (click to open expanded view)
                  </summary> 
                  <ol>
                     <li> Add action <b>Details</b>: Action source=>Action cell button; Name=>Details; Type=>Navigation to new dashboard state; Target dashboard state=>details</li>
                     <ul>
                         <details>
                              <summary>
                                  <font color="#006400"><i><b>Screenshot add of action Details</b></i></font> (<b>click to open expanded view</b>)
                              </summary> 
                              <img src="/images/user-guide/integrations/teltonika/teltonika_dashboard_state_main_entities_details.png">
                          </details>
                     </ul>                  
                     <li> Add action <b>GoToUplinks</b>: Action source=>Action cell button; Name=>GoToUplinks; Type=>Navigation to new dashboard state; Target dashboard state=>uplinks</li>
                     <ul>
                         <details>
                              <summary>
                                  <font color="#006400"><i><b>Screenshot add action GoToUplinks</b></i></font> (<b>click to open expanded view</b>)
                              </summary> 
                              <img src="/images/user-guide/integrations/teltonika/teltonika_dashboard_state_main_entities_GoToUplinks.png">
                          </details>
                     </ul>                 
                     <li> Add action <b>GoToMap</b>: Action source=>Action cell button; Name=>GoToMap; Type=>Navigation to new dashboard state; Target dashboard state=>map</li>
                     <ul>
                         <details>
                              <summary>
                                  <font color="#006400"><i><b>Screenshot of add action GoToMap</b></i></font> (<b>click to open expanded view</b>)
                              </summary> 
                              <img src="/images/user-guide/integrations/teltonika/teltonika_dashboard_state_main_entities_GoToMap.png">
                          </details>
                     </ul>                  
                     <li>Add action <b>Details (On row click)</b>: Action source=>On row click; Name=>Detailsrow; Type=>Navigation to new dashboard state; Target dashboard state=>details</li>
                     <ul>
                         <details>
                              <summary>
                                  <font color="#006400"><i><b>Screenshot add of action Details (On row click)</b></i></font> (<b>click to open expanded view</b>)
                              </summary> 
                              <img src="/images/user-guide/integrations/teltonika/teltonika_dashboard_state_main_entities_detailsrow.png">
                          </details>
                     </ul>                  
                  </ol>
             </details>           
        </ul>  
    <li> state <b>map:</b></li>
        <ul>
            <li><b>Add widget:</b> Trip Animation: Maps -> Trip Animation</li>
            <li><b>Data</b> widget: add Datasources -> Type=>Entity; Parameters=>SelectedDevice; Fields=>latitude... </li>
            <details>
                 <summary>
                     <font color="#006400"><i><b>Screenshot of creation widget Trip Animation</b></i></font> (<b>click to open expanded view</b>)
                 </summary> 
                 <img src="/images/user-guide/integrations/teltonika/teltonika_dashboard_state_map_TripAnimation.png">
             </details> 
             <details>
                  <summary>
                      <font color="#006400"><i><b>Screenshot of widget Trip Animation -> Title: Device Migration Map</b></i></font> (<b>click to open expanded view</b>)
                  </summary> 
                  <img src="/images/user-guide/integrations/galileosky/galileosky_dashboard_state_map_MigrationMap.png">
              </details>   
        </ul> 
    <li> state <b>details:</b></li>
    <details>
         <summary>
             <font color="#006400"><i><b>Screenshot of creation All widgets state details: Name=>Setup -> ${entityName} </b></i></font> (<b>click to open expanded view</b>)
         </summary> 
         <img src="/images/user-guide/integrations/galileosky/galileosky_dashboard_state_details_Setup.png">
     </details>      
    <ul>
        <li><b>Add widget:</b> Timeseries table: Cards -> Timeseries table: Title=>Messages from device <p></p> <b>Data</b> widget: add Datasources -> Type=>Entity; Parameters=>SelectedDevice; Fields=>latitude... </li>
        <details>
             <summary>
                 <font color="#006400"><i><b>Screenshot of creation widget Timeseries table: Title=>Messages from device</b></i></font> (<b>click to open expanded view</b>)
             </summary> 
             <img src="/images/user-guide/integrations/teltonika/teltonika_dashboard_state_details_Timeseries.png">
         </details>          “TCP Integration”
         <li><b>Add widget:</b> Update Multiple Attributes: Input Widget -> Update Multiple Attributes <p></p> <b>Data</b> widget: add Datasources -> Type=>Entity; Parameters=>SelectedDevice; Fields=>key: payload; label: ${entityLabel} </li>
        <details>
             <summary>
                 <font color="#006400"><i><b>Screenshot of creation widget Update Multiple Attributes: Title: Send DownLink command</b></i></font> (<b>click to open expanded view</b>)
             </summary> 
             <img src="/images/user-guide/integrations/teltonika/teltonika_dashboard_state_details_InputAtrribut.png">
         </details>        
         <details>
             <summary>
                 <font color="#006400"><i><b>Screenshot of add to widget Update Multiple Attributes new field: key: payload; label: ${entityLabel} </b></i></font> (<b>click to open expanded view</b>)
             </summary> 
             <img src="/images/user-guide/integrations/teltonika/teltonika_dashboard_state_details_InputAtrribut_payload.png">
         </details>   
         <li><b>Add widget:</b> Timeseries table: Cards -> Timeseries table: Title=>Commands <p></p> <b>Data</b> widget: add Datasources -> Type=>Entity; Parameters=>SelectedDevice; Fields=>logs... </li>
         <details>
              <summary>
                  <font color="#006400"><i><b>Screenshot of creation widget Timeseries table: Title=>Commands</b></i></font> (<b>click to open expanded view</b>)
              </summary> 
              <img src="/images/user-guide/integrations/teltonika/teltonika_dashboard_state_details_logs.png">
         </details>        
    </ul>    
    <li> state <b>uplinks:</b></li>
    <details>
         <summary>
             <font color="#006400"><i><b>Screenshot of creation All widgets state uplinks: Name=>UPLINKS -> ${entityName} </b></i></font> (<b>click to open expanded view</b>)
         </summary> 
         <img src="/images/user-guide/integrations/galileosky/galileosky_dashboard_state_uplinks_allwidget.png">
     </details> 
    <ul>
        <li><b>Add widget:</b> Entities table: Cards -> Entities table: Title=>Last Entity Value <p></p> <b>Data</b> widget: add Datasources -> Type=>Entity; Parameters=>SelectedDevice; Fields=>model... </li>
        <details>
             <summary>
                 <font color="#006400"><i><b>Screenshot of creation widget Entities table: Title=>Last Entity Value</b></i></font> (<b>click to open expanded view</b>)
             </summary> 
             <img src="/images/user-guide/integrations/teltonika/teltonika_dashboard_state_uplinks_entity.png">
         </details>          
         <li><b>Add widget:</b> Timeseries - Flot: Charts -> Timeseries - Flot <p></p> <b>Data</b> widget: add Datasources -> Type=>Entity; Parameters=>SelectedDevice; Fields=>External Voltage mV... </li>
        <details>
             <summary>
                 <font color="#006400"><i><b>Screenshot of creation widget Timeseries - Flot: Title: Graph value</b></i></font> (<b>click to open expanded view</b>)
             </summary> 
             <img src="/images/user-guide/integrations/teltonika/teltonika_dashboard_state_uplinks_gtaph.png">
         </details>           
    </ul>
  </ol>
</details>



## Service: "remote-integration-tcp" install and configuration steps

### Step 1.  Install service: "remote-integration-tcp"
- Download the installation of the service and run remotely from the Thingsboard_pe

[remote-integration-tcp](https://github.com/nickAS21/remote-integration-tcp.git). 

### Step 2.  Configuration service: "remote-integration-tcp"

Example configuration file for <b>"remote-integration-tcp".</b>
<ol>
    <li>The <b>path to the main file</b> should correspond to the “TCP Integration” value in the field: “Integration Class”. Default value: <b>org.thingsboard.integration.custom.server.TCPIntegration</b> (src/main/java/org/thingsboard/integration/custom/server/TCPIntegration.java).</li>
    <li>routingKey: value from  “TCP Integration” </li>
        {% highlight bash %}
            integration:
                routingKey: "${INTEGRATION_ROUTING_KEY:f340c97bdee97fa79ce69cdc3b2f50a2}"
        {% endhighlight %}
    <li>secret: value from  “TCP Integration” </li>
        {% highlight bash %}
            ...
                secret: "${INTEGRATION_SECRET:3ezdnokj455v03wkzt44}"
        {% endhighlight %}    
     <li>connect remote-integration with ThingsBoard integration on cloud.thingsboard.io” </li>
        {% highlight bash %}
            ...
                rpc:
                  #  Cloud...
                  host: "${PRC_HOST:cloud.thingsboard.io}"
                  port: "${RPC_PORT:9090}""
        {% endhighlight %}
</ol>
[the following code: <b>tb-remote-integration.yml</b>](/images/user-guide/integrations/teltonika/tb-remote-integration.yml)

## Example of configuration over TCP (Galileosky)
<details>
     <summary>
         <i><b>Example list of some commands (from Galileosky)</b></i> (click to open expanded view)
     </summary> 
     {% highlight bash %}
         ...
             "HeadPack 1110",    // Ответ: HeadPack = 0000000000000000000000000000000000000000000000000000000000001110b
             "MainPack 1111000",    // Ответ: HeadPack = 0000000000000000000000000000000000000000000000000000000000001110b
             "status",
             "imei",
             "imsi", // код SIM-карты
             "inall",
             "insys",    // Ответ: INSYS: Pow=12438,Vbat=4196,Vant=2921,Vdc=4115,Temper=37
             "RS485",    // Ответ: RS485 100,0;100,1;100,2;100,3;100,4;100,5;100,6;100,7;100,8;100,9;100,10; 100,11;100,12;100,13;100,14;100,15;
             "statall",  // Ответ: StatAll: Dev=1,Ins=2,Outs=7,Mileage=152;
             "EFS 010117,01011712",  // EFS: Uploading of archive has been scheduled (ДДММГГ[ЧЧ[ММ]])
             "LED 60",   // Ответ: LED:LED=60
         ...
      {% endhighlight %}
</details>  


## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/guides-banner.md %}


