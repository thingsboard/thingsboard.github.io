---
layout: docwithnav-pe-edge
title: LWM2M Device API Reference
description: Supported LwM2M API Reference for IoT Devices

started:
    0:
        image: /images/lwm2m/architecture.jpg 
        title: 'architecture LwM2M.'    
    1:
        image: /images/lwm2m/object_model.jpg 
        title: 'object model LwM2M.'       
    2:
        image: /images/lwm2m/procedure_client_initiated_bootstrap.jpg 
        title: 'procedure initiated client LwM2M.'    
    3:
        image: /images/lwm2m/client_registration.jpg 
        title: 'example client registration LwM2M.'    
    4:
        image: /images/lwm2m/relations_access_control_object_other_objects.jpg 
        title: 'access control object LwM2M.'

addResourcesModel_common:
    0:
        image: /images/lwm2m/resources_model_common_0.png 
        title: 'start import Resource -> object model LwM2M.'    
    1:
        image: /images/lwm2m/resources_model_common_1.png 
        title: 'click to select a file to upload.'       
    2:
        image: /images/lwm2m/resources_model_common_2.png 
        title: 'open file of Resource -> object model LwM2M (format xml).'    
    3:
        image: /images/lwm2m/resources_model_common_3.png 
        title: 'select the Resource type "LWM2M model" and add Resource -> object model LwM2M.'    
    4:
        image: /images/lwm2m/resources_model_common_4.png 
        title: 'control of parameters by the Resource -> object model LwM2M (example): <br>* Name: <b>Device</b><br>* ObjectID: <b>3</b><br>* ObjectVersion <b>1.2</b><br>* File name <b>3_1_2.xml</b>'    

addResourcesModel_tenant:
    0:
        image: /images/lwm2m/resources_model_tenant_0.png 
        title: 'start import Resource -> object model LwM2M.'    
    1:
        image: /images/lwm2m/resources_model_common_1.png 
        title: 'click to select a file to upload.'       
    2:
        image: /images/lwm2m/resources_model_common_2.png 
        title: 'open file of Resource -> object model LwM2M (format xml).'    
    3:
        image: /images/lwm2m/resources_model_common_3.png 
        title: 'select the Resource type "LWM2M model" and add Resource -> object model LwM2M.'    
    4:
        image: /images/lwm2m/resources_model_common_4.png 
        title: 'control of parameters by the Resource -> object model LwM2M (example): <br>* Name: <b>Device</b><br>* ObjectID: <b>3</b><br>* ObjectVersion <b>1.2</b><br>* File name <b>3_1_2.xml</b>'    

profileNoSec_create:
    0:
        image: /images/lwm2m/noSec_profile_create_Step_1.png 
        title: 'start create profile LwM2M.'    
    1:
        image: /images/lwm2m/noSec_profile_create_Step_2.png 
        title: ' input the name of device profile (for example: "lwm2mProfileNoSec").'       
    2:
        image: /images/lwm2m/noSec_profile_create_Step_3.png 
        title: 'go to the "Transport configuration" tab and select the type of device profile.'    
    3:
        image: /images/lwm2m/noSec_profile_create_Step_4.png 
        title: 'save this device profile: click the "Add" button.'    


profileNoSec_edit:
    1:
        image: /images/lwm2m/noSec_profile_edit_Step_1.png 
        title: '<i>Select</i> line with the <b>name</b> of the <b>device profile</b> to change the configuration.'    
    2:
        image: /images/lwm2m/noSec_profile_edit_Step_2_3.png 
        title: '<i>Select</i> tab with <b>"Transport configuration"</b> and <i>click</i> button <b>"Toggle edit mode"</b>.'       

profileNoSec_edit_typeAfterConnect:      
    1:
        image: /images/lwm2m/noSec_profile_edit_Step_3_1.png 
        title: 'configuration: strategy number <b><font color="#5f9ea0">1</font> selected</b>.'    
    2:
        image: /images/lwm2m/noSec_profile_edit_Step_3_2.png 
        title: 'configuration: strategy number <b><font color="#5f9ea0">2</font> selected</b>.'       

profileNoSec_edit_add_object:      
    1:
        image: /images/lwm2m/noSec_profile_edit_Step_4_1.png 
        title: '<i>Select</i> an item <b>from</b> the list of <b>all the objects</b> ...'       
    2:
        image: /images/lwm2m/noSec_profile_edit_Step_4_2.png 
        title: '<i>Select</i> object <b>by ID object</b> (input only number ID).'    
    3:
        image: /images/lwm2m/noSec_profile_edit_Step_4_3.png 
        title: '<i>Select</i> object <b>by context</b> in the name object...'  

profileNoSec_edit_add_instance:
    1:
        image: /images/lwm2m/noSec_profile_edit_Step_4_4.png 
        title: '<i>Object</i> is supports <b>multiple instances</b>'    
    2:
        image: /images/lwm2m/noSec_profile_edit_Step_4_5.png
        title: '<b>Start</b> add...'    
    3:
        image: /images/lwm2m/noSec_profile_edit_Step_4_6.png
        title: '<b>Input</b> ID for new instance'     
    4:
        image: /images/lwm2m/noSec_profile_edit_Step_4_7.png
        title: '<b>Delete</b> ID instance'

profileNoSec_edit_observe:
    1:
        image: /images/lwm2m/noSec_profile_edit_Step_4_8.png 
        title: 'For <b>observation</b> resource in an instance: to mark check <font color="blue">"Observe"</font> <u>with</u> <font color="red">"Attribute"</font> <u>without</u> <font color="blue">"Telemetry"</font> <u>without</u> change <b>"Key Name"</b>'       
    2:
        image: /images/lwm2m/noSec_profile_edit_Step_4_9.png 
        title: 'For <b>observation</b> resource in an instance: to mark check <font color="blue">"Observe"</font> <u>without</u> <font color="red">"Attribute"</font> <u>with</u> <font color="blue">"Telemetry"</font> <u>without</u> change <b>"Key Name"</b>'       
    3:
        image: /images/lwm2m/noSec_profile_edit_Step_4_10.png 
        title: 'For <b>observation</b> resource in an instance: to mark check <font color="blue">"Observe"</font> <u>with</u> <font color="red">"Attribute"</font> <u>with</u> <font color="blue">"Telemetry"</font> <u>without</u> change <b>"Key Name"</b>'       
    4:
        image: /images/lwm2m/noSec_profile_edit_Step_4_11.png 
        title: 'For <b>observation</b> resource in an instance: to mark check <font color="blue">"Observe"</font> <u>with</u> <font color="red">"Attribute"</font> <u>with</u> <font color="blue">"Telemetry"</font> <u>with</u> change <b>"Key Name"</b>'       

profileNoSec_edit_bootstrap:      
    1:
        image: /images/lwm2m/noSec_profile_edit_Step_5_1.png 
        title: '<b>Settings</b> connection to a <b>new LwM2M server</b> on the client after upgrade:<p></p> - Short identifier,<p></p> - Minimum Period...,<p></p> - Lifetime...,<p></p> - Binding (default UDP),<p></p> - Notification Storing...'       
    2:
        image: /images/lwm2m/noSec_profile_edit_Step_5_2.png 
        title: '<b>Configuring</b> to connect to the <b>new Bootstrap server</b> on the client after upgrade:<p></p> - Security Mode,<p></p> - Host,<p></p> - Port,<p></p> - Short identifier,<p></p> - Hold off Time,<p></p> - Account after timeout'    
    3:
        image: /images/lwm2m/noSec_profile_edit_Step_5_3.png 
        title: '<b>Configuring</b> to connect to the  new <b>LwM2M server</b> on the client after upgrade:<p></p> - Security Mode,<p></p> - Host,<p></p> - Port,<p></p> - Short identifier,<p></p> - Hold off Time,<p></p> - Account after timeout'    

deviceNoSec_create:
    0:
        image: /images/lwm2m/noSec_device_create_Step_1.png
        title: '<b> - start:</b> click <+> button, <p></p><b> - input the name</b> of device (for example: "LwNoSec00000000"), <p></p><b> - select transport type:</b> "LWM2M",<p></p><b> - select existing device profile</b> (for example: "lwm2mProfileNoSec").'       
    1:
        image: /images/lwm2m/noSec_device_create_Step_2.png
        title: '<b>Add credential</b>: <p></p>- <b>to mark</b> check <font color="red">"Add credential"</font><p></p>- <b>select</b> Credentials type (<b>"LwM2M Credentials"</b>)<p></p>- <b>input</b> <b><font color="blue">"LwM2M Security config key"</font></b> (<b>endPoint</b> of LwM2M Client/PSK identity of LwM2M Client (<b>"Public Key or Identity"</b>))<p></p> - <b>edit</b> "LwM2M Security <b>config</b>"'    

deviceNoSec_create_security_config:
    0:
        image: /images/lwm2m/noSec_device_create_security_Step_1.png
        title: '<b>- edit</b>: <b>"Client Security Config"</b>.'    
    1:
        image: /images/lwm2m/noSec_device_create_security_Step_2.png
        title: '<b>- edit</b>: <b>"Bootstrap Client"</b>: <font color="blue">BOOTSTRAP SERVER</font>.'       
    2:
        image: /images/lwm2m/noSec_device_create_security_Step_3.png
        title: '- <b>edit</b>: <b>"Bootstrap Client"</b>: <font color="blue">LWM2M SERVER</font>,  <p></p> - <b><font color="blue">save</font></b>: <i>Security config info</i> after finish edit.'

deviceNoSec_create_save:
    0:
        image: /images/lwm2m/noSec_device_create_Step_3.png
        title: '- click <font color="blue">"Add"</font> button.'

---

{% assign docsPrefix = "pe/" %}
{% include docs/reference/lwm2m-api.md %}