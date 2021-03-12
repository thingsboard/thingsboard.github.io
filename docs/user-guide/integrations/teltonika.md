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

This article explains the practical steps to connect the Teltonika FMB-920 device to the ThingsBoard and further control of this device using the ThingsBoard Integration features.

We will use remote TCP integration which would receive data through TCP and will send it to the cluster, which in this
case is [cloud.thingsboard.io](https://cloud.thingsboard.io/signup).  

See [deployment options](/docs/user-guide/integrations/#deployment-options) for more general information.
But in our integration we only used TCP protocol:

TODO: request a new icon

![image](/images/user-guide/integrations/teltonika/embeded-integrations-overview.jpg)

## Prerequisites

We assume you already have a tenant administrator account on your own ThingsBoard PE v3.1.1 instance or
[cloud.thingsboard.io](https://cloud.thingsboard.io/signup). 
 
 <br/>
 
# Basic (Uplink)
 

## ThingsBoard configuration steps






### Step 1. Import default Uplink Converter

Let's import uplink converter from this [file](/docs/user-guide/resources/teltonika/teltonika_tcp_uplink_converter.json) 
 and will set it to work in debug mode. While running in debug mode, this converter will record all incoming events. 
This will help us tune the converter once we start receiving the data.

<img data-gifffer="/images/user-guide/integrations/teltonika/teltonika-import-converter.gif" />

 
     

### Step 2. Create and Save credentials of Teltonika TCP Integration

Let's create a custom integration that will connect to the local service "remote-integration-tcp" using the following
configuration: 

<table style="width: 25%">
  <thead>
      <tr>
          <td><b>Field</b></td><td><b>Input Data</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>Name</td>
          <td>TCP-teltonika</td>
      </tr>
      <tr>
          <td>Type</td>
          <td>Custom</td>
      </tr>
      <tr>
          <td>Enabled</td>
          <td>True</td>
      </tr>
      <tr>
          <td>Debug mode</td>
          <td>True</td>
      </tr>
      <tr>
          <td>Allow create devices or assets</td>
          <td>True</td>
      </tr>
      <tr>
          <td>Uplink data converter</td>
          <td>Teltonika Uplink converter</td>
      </tr>
      <tr>
          <td>Execute remotely</td>
          <td>True</td>
      </tr>
      <tr>
          <td>Integration key</td>
          <td>(will be generated automatically)</td>
      </tr>
      <tr>
          <td>Integration secret</td>
          <td>(will be generated automatically)</td>
      </tr>
      <tr>
          <td>Integration class</td>
          <td>org.thingsboard.integration.custom.server.TCPIntegration</td>
      </tr>
      <tr>
          <td>Integartion JSON configuration</td>
          <td>
          {
          	"bindPort": 1994,
          	"typeDevice": "teltonika"
          }
          </td>
      </tr>
      <tr>
          <td>Description</td>
          <td>(empty)</td>
      </tr>
      <tr>
          <td>Metadata</td>
          <td>(empty)</td>
      </tr>
   </tbody>
</table> 

<ol>  
    <img src="/images/user-guide/integrations/teltonika/custom-teltonika-tcp-integration_config.png">  
</ol>

## Remote integration installation and configuration steps

### Step 1.  Install service: "remote-integration-tcp"
- Download the installation of the service and run remotely (or on the same server) from the ThingsBoard PE

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

# Advanced (Downlink)


### Step 1. Creation  and  configuration of the Dashboard

After creating devices manually: an overview attribute: the serial number of the device or after automatically creating the device (with the first service connection, the device is created automatically) - you need to create a dashboard.


Screenshot of the Dashboard after finishing its creation:

![image](/images/user-guide/integrations/teltonika/teltonika_dashboard_example.png)

You can import the dashboard from this [file](/docs/user-guide/resources/teltonika/teltonika_tcp.json) or you can create it as shown below

<!--
Creation of aliases :

1.LisTeltonika: Filter type = Entity list; Type = Device; and add TELTONIKA devices 

![image](/images/user-guide/integrations/teltonika/teltonika_dashboard_alias_ListTeltonika.png)

2.DigEntityForm: Filter type = Device type; Type = teltonika

![image](/images/user-guide/integrations/teltonika/teltonika_dashboard_alias_DigEntityForm.png)

3.SelectedDevice: Filter type = Entity from dashboard state

![image](/images/user-guide/integrations/teltonika/teltonika_dashboard_alias_SelectedDevice.png)

Result of alias creation:

![image](/images/user-guide/integrations/teltonika/teltonika_dashboard_add_aliases.png)

 <details>
  <summary>
    <i><b>Creation of the Dashboard (open Dashboard to edit and add three aliases)</b></i> (click to open expanded view)
  </summary> 
  <ol>
         Screenshot of Entity aliases
      <img src="/images/user-guide/integrations/teltonika/teltonika_dashboard_add_aliases.png">
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
</details>  -->

<!--
Creation of dashboard states:

1.state main: Name = MAIN; Sate id = main; Root state = true

![image](/images/user-guide/integrations/teltonika/teltonika_dashboard_state_main.png)

2.state map: Name = Map; Sate id = map; Root state = false

![image](/images/user-guide/integrations/teltonika/teltonika_dashboard_state_map.png)

3.state details: Name = Setup -> ${entityName}; Sate id = details; Root state = false

![image](/images/user-guide/integrations/teltonika/teltonika_dashboard_state_details.png)

4.state uplinks: Name = UPLINKS -> ${entityName}; Sate id = uplinks; Root state = false

![image](/images/user-guide/integrations/teltonika/teltonika_dashboard_state_uplinks.png)

Result of states creation:

![image](/images/user-guide/integrations/teltonika/teltonika_dashboard_states.png)
-->

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


<!--
Editing of dashboard states:

1) State  <b>main:</b>

a.<b>Add widget:</b> Entities table: Cards -> Entities

b.Widget <b>data</b>: add Datasources -> Type = Entity; Parameters = ListTeltonika; Fields = serialNumber...

![image](/images/user-guide/integrations/teltonika/teltonika_dashboard_state_main_entities.png)

c.Widget <b>actions</b>:

c1) Add action <b>Details</b>: Action source = Action cell button, Name = Details, Type = Navigation to new dashboard state, Target dashboard state = details

![image](/images/user-guide/integrations/teltonika/teltonika_dashboard_state_main_entities_details.png)

c2) Add action <b>GoToUplinks</b>: Action source = Action cell button, Name = GoToUplinks, Type = Navigation to new dashboard state, Target dashboard state = uplinks

![image](/images/user-guide/integrations/teltonika/teltonika_dashboard_state_main_entities_GoToUplinks.png)

c3) Add action <b>GoToMap</b>: Action source = Action cell button, Name = GoToMap, Type = Navigation to new dashboard state, Target dashboard state = map

![image](/images/user-guide/integrations/teltonika/teltonika_dashboard_state_main_entities_GoToMap.png)

c4) Add action <b>Details (On row click)</b>: Action source = On row click, Name = Detailsrow, Type = Navigation to new dashboard state, Target dashboard state = details

![image](/images/user-guide/integrations/teltonika/teltonika_dashboard_state_main_entities_detailsrow.png)

2) State <b>map:</b>

a. <b>Add widget:</b> Trip Animation: Maps -> Trip Animation

b. Widget <b>data</b>: add Datasources -> Type = Entity, Parameters = SelectedDevice, Fields = latitude...

![image](/images/user-guide/integrations/teltonika/teltonika_dashboard_state_map_TripAnimation.png)

Screenshot of the Trip Animation widget at work:

![image](/images/user-guide/integrations/teltonika/teltonika_dashboard_state_map_MigrationMap.png)

3) State <b>details</b>:

a. <b>Add widget:</b> Timeseries table: Cards -> Timeseries table: Title = Messages from device 

a1)Widget <b>data:</b> add Datasources -> Type = Entity; Parameters = SelectedDevice; Fields = latitude...

![image](/images/user-guide/integrations/teltonika/teltonika_dashboard_state_details_Timeseries.png)

b. <b>Add widget:</b> Update Multiple Attributes: Input Widget -> Update Multiple Attributes 

b1)Widget <b>data:</b> add Datasources -> Type = Entity; Parameters = SelectedDevice; Fields = key: payload; label: ${entityLabel}

![image](/images/user-guide/integrations/teltonika/teltonika_dashboard_state_details_Timeseries.png)

c. <b>Add widget:</b> Timeseries table: Cards -> Timeseries table: Title = Commands 

c1)Widget <b>data:</b> add Datasources -> Type = Entity; Parameters = SelectedDevice; Fields = logs...

![image](/images/user-guide/integrations/teltonika/teltonika_dashboard_state_details_logs.png)

Screenshot of the details state:

![image](/images/user-guide/integrations/teltonika/teltonika_dashboard_state_details_Setup.png)

4) State <b>uplinks</b>:

a. <b>Add widget:</b> Entities table: Cards -> Entities table: Title = Last Entity Value

a1) Widget <b>data:</b> add Datasources -> Type = Entity, Parameters = SelectedDevice, Fields = model...

![image](/images/user-guide/integrations/teltonika/teltonika_dashboard_state_uplinks_entity.png)

b. <b>Add widget:</b> Timeseries - Flot: Charts -> Timeseries - Flot

b1) Widget <b>data:</b> add Datasources -> Type = Entity; Parameters = SelectedDevice; Fields = External Voltage mV...

![image](/images/user-guide/integrations/teltonika/teltonika_dashboard_state_uplinks_gtaph.png)
-->

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
    <li> state <b>map:</b></li>
    <ul>
        <li><b>Add widget:</b> Trip Animation: Maps -> Trip Animation </li>
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
              <img src="/images/user-guide/integrations/teltonika/teltonika_dashboard_state_map_MigrationMap.png">
          </details>   
    </ul> 
    <li> state <b>details:</b></li>
    <details>
         <summary>
             <font color="#006400"><i><b>Screenshot of creation All widgets state details: Name=>Setup -> ${entityName} </b></i></font> (<b>click to open expanded view</b>)
         </summary> 
         <img src="/images/user-guide/integrations/teltonika/teltonika_dashboard_state_details_Setup.png">
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
         <img src="/images/user-guide/integrations/teltonika/teltonika_dashboard_state_uplinks_allwidget.png">
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


### Step 2. Config Root Rule Chain (Root)

After installing the ThingsBoard, for the normal operation of the Downlink Data Converter, you need to edit the Root 
Rule Chain (Root) the following way: Rule chains -> Root Rule Chain (Root) -> Add the originator attributes, originator
 fields and integration downlink rule nodes.

![image](/images/user-guide/integrations/teltonika/rule_chain.png)

Alternatively, you can import it from this [file](/docs/user-guide/resources/teltonika/teltonika_root_rule_chain.json) 

### Step 3. Settings decoder Function  to Uplink Data Converter

When creating an Uplink Converter, a default decoder is added to the Decoder section.

After creating the Uplink Converter to the Decoder section, you need to update the Decoder code to [the following code](/images/user-guide/integrations/teltonika/upLinkDecoder.txt).

<b>NOTE: it is necessary to edit the Uplink decoder</b>


Open Uplink Converter, editor mode, click "test decoder function" and replace the default code with a new code:

![image](/images/user-guide/integrations/teltonika/uplink_decoder.png)

Alternatively, you can import it from this [file](/docs/user-guide/resources/teltonika/teltonika_tcp_uplink_converter.json) 


It is done the following way: Go to Data Converters -> Add new Data Converter -> Import Converter

<details>
            <summary>
            (<b>click to open screenshot</b>)
            </summary>
            <img src="/images/user-guide/rule-engine-2-0/tutorials/mqtt-downlink/import_new_converter.png">
</details>

<details>
    <summary>
        <i><b><font color="#FF0000">Note !!!</font> If the following error appears: Script used more than the allowed [<font color="#36abb5">100 ms</font>] of CPU time. </b></i> (click to open expanded view)
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
After creating the Downlink Converter to the Decoder section, you need to update the Decoder code to [the following code](/images/user-guide/integrations/teltonika/downlinkDecoder.txt). <br>

<b>NOTE: It is necessary to edit the Downlink decoder</b>

Open Downlink Converter, editor mode, click "test decoder function" and replace the default code with a new code:

![image](/images/user-guide/integrations/teltonika/downlink_decoder.png)

Alternatively, you can import it from this [file](/docs/user-guide/resources/teltonika/teltonika_tcp_uplink_converter.json) 

It is done the following way: Go to Data Converters -> Add new Data Converter -> Import Converter

<details>
            <summary>
            (<b>click to open screenshot</b>)
            </summary>
            <img src="/images/user-guide/rule-engine-2-0/tutorials/mqtt-downlink/import_new_converter.png">
</details>


## Example of configuration over TCP (Teltonika FMB920)

Example list of some commands (from FMB920 User Manual V0.25)

{% highlight bash %}
         ...
         "getinfo",
         "getver",
         "getstatus",
         "getgps",
         "getio",
         "ggps",
         "cpureset",
         "getparam 2004",                        // Server gettings domen: my.org.ua 
         "setparam 2004:my.thingsboard.io",      // Server settings domen: my.thingsboard.io
         "getparam 2005",                        // Server gettings port: 1994             
         "setparam 2005:1992",                   // Server settings port: 1992             
         "getparam 2006"                         //  Server gettings pototokol: TCP - 0, UDP - 1
         "setparam 2006:1"                       //  Server settings pototokol: UDP - 1
         ...
      {% endhighlight %}
<!--
<details>
     <summary>
         <i><b>Example list of some commands (from FMB920 User Manual V0.25)</b></i> (click to open expanded view)
     </summary> 
     {% highlight bash %}
         ...
         "getinfo",
         "getver",
         "getstatus",
         "getgps",
         "getio",
         "ggps",
         "cpureset",
         "getparam 2004",                        // Server gettings domen: my.org.ua 
         "setparam 2004:my.thingsboard.io",      // Server settings domen: my.thingsboard.io
         "getparam 2005",                        // Server gettings port: 1994             
         "setparam 2005:1992",                   // Server settings port: 1992             
         "getparam 2006"                         //  Server gettings pototokol: TCP - 0, UDP - 1
         "setparam 2006:1"                       //  Server settings pototokol: UDP - 1
         ...
      {% endhighlight %}
</details>  
-->
<ol>
    <li><b>Sending</b> a request:</li>
    {% highlight bash %}
        getver, getinfo
    {% endhighlight %}
    <li><b>Receiving</b> a response to a request:</li>
     {% highlight bash %}
         getver  => "logs": "Downlink: getver Uplink: Ver:03.25.14_05 GPS:AXN_5.10_3333 Hw:FMB920 Mod:13 IMEI:359633100458590 Init:1970-1-1 0:0 Uptime:7202 MAC:001E42BD06FE SPC:1(0) AXL:1 OBD:0 BL:1.7 BT:4" 
         getinfo => "logs": "Downlink: getinfo Uplink: RTC:2004/1/1 7:59 Init:1970/1/1 0:0 UpTime:6853s PWR:SoftReset RST:0 GPS:2 SAT:0 TTFF:0 TTLF:0 NOGPS:1:54 SR:0 FG:0 FL:10 SMS:0 REC:10000+ MD:1 DB:0"
     {% endhighlight %}
    
             <font color="#006400"><i><b>Screenshot of sending a request and receiving a response to a request:</b></i></font> 
         <img src="/images/user-guide/integrations/teltonika/example_list_some_commands.png">
     <li>If a <b>request</b> from the device: IMEV number is sent an answer == <font color="#0031ff">"0x01"</font> in bytes, then we get an answer about the state of all the <b>parameters</b> listed in the <b>I / O</b></li>
      <details>
           <summary>
               Example <b>Receiving</b> a response to a <font color="#36abb5">request</font> : <font color="#0031ff">1</font> (click to open expanded view)
           </summary> 
                 {% highlight bash %}
                   "telemetry": {
                        "ts": 1072944932000,
                        "values": {
                            "priority": "Low",
                            "longitude": "0",
                            "latitude": "0",
                            "altitude": 0,
                            "angle": 0,
                            "satellites": 0,
                            "speed": 0,
                            "eventIoId": 0,
                            "Ignition": 1,
                            "Movement": 1,
                            "Data Mode": 1,
                            "GSM Signal": "Good Signal",
                            "Sllep Mode": 0,
                            "GNSS Status": "Activated",
                            "Digital Input 1": 0,
                            "Digital Output 1": 0,
                            "BLE Battery #1 (%)": 0,
                            "BLE Battery #2 (%)": 0,
                            "BLE Battery #3 (%)": 0,
                            "BLE Battery #4 (%)": 0,
                            "Internel Battery Status %": 83,
                            "GNSS PDOP": 0,
                            "GNSS NDOP": 0,
                            "External Voltage mV": 12019,
                            "Speed km/h": 0,
                            "GSM Cell ID": 27216,
                            "GSM Area Code": 1821,
                            "Battery Voltage mV": 3934,
                            "Battery Current mA": 0,
                            "Analog Input 1": 131,
                            "FC AVG By GPS (l/h*100)": 9999,
                            "Axis X (mG)": -15,
                            "Axis Y (mG)": 3,
                            "Axis Z (mG)": 1003,
                            "Eco score": 0,
                            "BLE Temp #1 (C)": 0,
                            "BLE Temp #2 (C)": 0,
                            "BLE Temp #3 (C)": 0,
                            "BLE Temp #4 (C)": 0,
                            "BLE Humidity #1 (%RH)": 0,
                            "BLE Humidity #2 (%RH)": 0,
                            "BLE Humidity #3 (%RH)": 0,
                            "BLE Humidity #4 (%RH)": 0,
                            "Actual Operator Code": 25501,
                            "Trip Odometr (m)": 0,
                            "Total Odometr (m)": 194928,
                            "FC By GPS (ml)": 129178,
                            "Pulse Counter DIN1": 0,
                            "ICCID1": 893800180,
                            "User ID": 0,
                            "ICCID4": 402338912
                        }
                    }      
                {% endhighlight %}
       </details>    
     

 </ol>

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/guides-banner.md %}




