---
layout: docwithnav
assignees:
- nick
title: Teltonika TCP Integration
description: Teltonika TCP Integration Documentation 

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
    <font color="#228b22"><b>Scheme`s screenshot Teltonika TCP Integration</b></font> (<b>click to open expanded view</b>)
    </summary>
    <img src="/images/user-guide/integrations/teltonika/embeded-integrations-overview.jpg">
</details> 


## Prerequisites

We assume you already have a tenant administrator account on your own ThingsBoard PE v2.4.3 instance or
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
Alternatively, you can import it from this [file](/docs/user-guide/resources/teltonika/teltonika_root_rule_chain.json) 

### Step 2. Create default Uplink and Downlink Converters

Let's create dummy uplink and downlink converters and will set them to work in debug mode.
While running in debug mode, those converters will record all incoming events. 
This will help us to tune the converters once we start receiving the data.

![image](/images/user-guide/integrations/remote/default-converters.gif)  

### Step 3. Settings decoder Function  to Uplink Data Converter

When creating an Uplink Converter, a default decoder is added to the Decoder section.

After creating the Uplink Converter to the Decoder section, you need to update the Decoder code to [the following code](/images/user-guide/integrations/teltonika/upLinkDecoder.txt).

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

Alternatively, you can import it from this [file](/docs/user-guide/resources/teltonika/teltonika_tcp_uplink_converter.json) 
<details>
    <summary>
        <font color="#006400"><i><b>the following way: Go to Data Converters -> Add new Data Converter -> Import Converter </b></i></font> (<b>click to open expanded view</b>)
    </summary>
    <img src="/images/user-guide/rule-engine-2-0/tutorials/mqtt-downlink/import_new_converter.png">
</details>

### Step 4. Settings encoder Function  to Downlink Data Converter
When creating an Downlink Converter, a default decoder is added to the Decoder section.<br>
After creating the Downlink Converter to the Decoder section, you need to update the Decoder code to [the following code](/images/user-guide/integrations/teltonika/downlinkDecoder.txt). <br>

<b>It is necessary to edit the Downlink decoder</b>

Open Downlink Converter, editor mode, click "test decoder function" and replace the default code with a new code:   
   <ul>
        <details>
            <summary>
            <font color="#228b22"><b>Screenshot edit the DownLink decoder</b></font> (<b>click to open expanded view</b>)
            </summary>
            <img src="/images/user-guide/integrations/teltonika/downlink_decoder.png">
        </details>         
        <details>
            <summary>
             <font color="#228b22"><b>JSON: output data after DownLink Data Converter looks like this:</b></font>  <br>(<b>click to open expanded view</b>)
             </summary>  
             {% highlight bash %}
             {
                 {
                    /** Encoder **/                    
                     var codec = 12;
                     var quantity = 1;
                     var commandType = 5;                 
                     var result = setPayload();                 
                     function setPayload() {
                         if (msg.hasOwnProperty('payload') && metadata['payload'] !== null) {
                             return getPayload();
                         }
                         return null;
                     }                 
                     function getPayload() {
                         var rez = {
                             contentType: "JSON",
                             data:  getDataHexMany(),
                             metadata: {
                                 serialNumber: metadata['cs_serialNumber'],
                                 deviceName: metadata['originatorName'],
                                 payload:  getPayloadTrim(),
                                 codec: codec,
                                 quantity: quantity,
                                 commandType: commandType
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
                         var dataArrays = msg.payload.split(",");
                         var data = "";
                         for (var i = 0; i < dataArrays.length; i ++) {
                             data += (getDataHexOneForMany(dataArrays[i].trim()) + ",")
                         }
                         data = data.substring(0, data.lastIndexOf(","));                 
                         return data;                 
                     }                 
                     function getDataHexOneForMany(str) {
                         var codecHex = convertToHexFixLen(codec, "00");
                         var quantityHex = convertToHexFixLen(quantity, "00");
                         var typeHex = convertToHexFixLen(commandType, "00");
                         var commandSizeHex = convertToHexFixLen(str.length,"00000000");
                         var commandHex = convertToHex(str);
                         var dataHex = codecHex + quantityHex  + typeHex + commandSizeHex + commandHex + quantityHex;
                         return dataHex;
                     }                     
                     function getPayloadTrim () {
                         var dataArrays = msg.payload.split(",");
                         var data = "";
                         for (var i = 0; i < dataArrays.length; i ++) {
                             data += (dataArrays[i].trim() + ",")
                         }
                         data = data.substring(0, data.lastIndexOf(","));
                         return data;
                     }                 
                     return result;
                 }
             }
             {% endhighlight %}
         </details>  
    </ul>  
    
    
Alternatively, you can import it from this [file](/docs/user-guide/resources/teltonika/teltonika_tcp_downlink_converter.json) 
<details>
    <summary>
        <font color="#006400"><i><b>the following way: Go to Data Converters -> Add new Data Converter -> Import Converter </b></i></font> (<b>click to open expanded view</b>)
    </summary>
    <img src="/images/user-guide/rule-engine-2-0/tutorials/mqtt-downlink/import_new_converter.png">
</details>   

### Step 5. Create and Save credentials of Teltonika TCP Integration

Let's create Custom integration that will connect to the local service "remote-integration-tcp" using:
- Integration class
- Intagration key
- Integration secret 

Notice that we enable "Debug" and "Execute remotely".   
Let's copy-paste the integration key, secret and class from the integration details.

![image](/images/user-guide/integrations/teltonika/custom-teltonika-tcp-integration.jpg)


### Step 6. Creation  and  configuration of the Dashboard

After creating devices manually: an overview attribute: the serial number of the device or after automatically creating the device (with the first service connection, the device is created automatically) - you need to create a dashboard.

<details>
   <summary>
       <font color="#006400"><i><b>Screenshot of the Dashboard after finishing its creation</b></i></font> (<b>click to open expanded view</b>)
   </summary> 
   <img src="/images/user-guide/integrations/teltonika/teltonika_dashboard_example.png">
</details>

[Example:  Dashboard in json format](/docs/user-guide/resources/teltonika/teltonika_tcp_new.json)

<details>
  <summary>
    <i><b>Creation of the Dashboard (open Dashboard to edit and add three aliases)</b></i> (click to open expanded view)
  </summary> 
  <ol>
    <details>
      <summary>
          <font color="#006400"><i><b>Screenshot: add Entity aliases</b></i></font> (<b>click to open expanded view</b>)
      </summary> 
      <img src="/images/user-guide/integrations/teltonika/teltonika_dashboard_add_aliases.png">
    </details>  
    <ol>
         <li><b>LisTeltonika:</b> Filter type=>Entity list; Type=>Device; and add devices TELTONIKA</li>
          <details>
              <summary>
                  <font color="#006400"><i><b>Screenshot: add Entity aliases LisTeltonika</b></i></font> (<b>click to open expanded view</b>)
              </summary> 
              <img src="/images/user-guide/integrations/teltonika/teltonika_dashboard_alias_ListTeltonika.png">
          </details>       
         <li><b>DigEntityForm:</b> Filter type=>Device type; Type=>teltonika;</li>
        <details>
            <summary>
                <font color="#006400"><i><b>Screenshot: add Entity aliases DigEntityForm</b></i></font> (<b>click to open expanded view</b>)
            </summary> 
            <img src="/images/user-guide/integrations/teltonika/teltonika_dashboard_alias_DigEntityForm.png">
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
                     <font color=New "#006400"><i><b>Screenshot of creation of the state; main</b></i></font> (<b>click to open expanded view</b>)
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
        <li><b>Data</b> widget: add Datasources -> Type=>Entity; Parameters=>ListTeltonika; Fields=>serialNumber... </li>
        <details>
             <summary>
                 <font color="#006400"><i><b>Screenshot of creation widget Entities table</b></i></font> (<b>click to open expanded view</b>)
             </summary> 
             <img src="/images/user-guide/integrations/teltonika/teltonika_dashboard_state_main_entities.png">
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

  </ol>
</details>



## Service: "remote-integration-tcp" install and configuration steps

### Step 1.  Install service: "remote-integration-tcp"
 
[teltonika-tcp-intefration](https://github.com/nickAS21/remote-integration-tcp).  

### Step 2.  Configuration service: "remote-integration-tcp"

tb-remote-integration.yml


## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/guides-banner.md %}




