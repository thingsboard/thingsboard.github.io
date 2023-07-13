
In this guide, we will learn how to [create device on Thingsboard](#create-device-on-thingsboard), [install required libraries and tools](#install-required-libraries-and-tools).  
After this we will [modify our code and upload it to the device](#connect-device-to-thingsboard), and [check the results of our coding and check data on ThingsBoard using imported dashboard](#check-data-on-thingsboard).
Our device will synchronize with ThingsBoard using [client and shared attributes requests functionality](#synchronize-device-state-using-client-and-shared-attribute-requests).      
Of course, we will control our device using provided functionality like [shared attributes](#control-device-using-shared-attributes) or [RPC requests](#control-device-using-rpc).  

### Prerequisites

To continue with this guide we will need the following:  
{{ prerequisites }}
{% if page.docsPrefix == "pe/" or page.docsPrefix == "paas/" %}
- [ThingsBoard account](https://thingsboard.cloud){: target="_blank"}
{% else %}
- [ThingsBoard account](https://demo.thingsboard.io){: target="_blank"}
{% endif %}
