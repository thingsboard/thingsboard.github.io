{% if page.docsPrefix == "pe/edge/" or page.docsPrefix == "edge/" %}
In this guide, we will learn how to [create device on Thingsboard Edge](#create-device-on-thingsboard-edge), 
[install required libraries and tools](#install-required-libraries-and-tools).  
After this we will [modify our code and upload it to the device](#connect-device-to-thingsboard-edge), 
and [check the results of our coding and check data on ThingsBoard Edge using imported dashboard](#check-data-on-thingsboard-edge).
Our device will synchronize with ThingsBoard using [client and shared attributes requests functionality](#synchronize-device-state-using-client-and-shared-attribute-requests).      
Of course, we will control our device using provided functionality like [shared attributes](#control-device-using-shared-attributes) or [RPC requests](#control-device-using-rpc).

### Prerequisites

To continue with this guide we will need the following:  
{{ prerequisites }} {% if page.docsPrefix == "pe/edge/" %}
- [ThingsBoard Cloud (Europe)](https://eu.thingsboard.cloud/signup){: target="_blank"} or [ThingsBoard Cloud (America)](https://thingsboard.cloud/signup){: target="_blank"}
{% else %}
- [ThingsBoard account](https://demo.thingsboard.io/signup){: target="_blank"}
{% endif %}

{% else %}

In this guide, we will learn how to [create device on Thingsboard](#create-device-on-thingsboard), 
[install required libraries and tools](#install-required-libraries-and-tools).  
After this we will [modify our code and upload it to the device](#connect-device-to-thingsboard), 
and [check the results of our coding and check data on ThingsBoard using imported dashboard](#check-data-on-thingsboard).
Our device will synchronize with ThingsBoard using [client and shared attributes requests functionality](#synchronize-device-state-using-client-and-shared-attribute-requests).      
Of course, we will control our device using provided functionality like [shared attributes](#control-device-using-shared-attributes) or [RPC requests](#control-device-using-rpc).  

### Prerequisites

To continue with this guide we will need the following:  
{{ prerequisites }} {% if page.docsPrefix == "pe/" %}
- [ThingsBoard Cloud (Europe)](https://eu.thingsboard.cloud/signup){: target="_blank"} or [ThingsBoard Cloud (America)](https://thingsboard.cloud/signup){: target="_blank"}
{% else %}
- [ThingsBoard account](https://demo.thingsboard.io/signup){: target="_blank"}
{% endif %}

{% endif %}