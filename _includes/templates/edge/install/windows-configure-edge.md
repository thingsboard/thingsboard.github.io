{% if docsPrefix == 'pe/edge/' %}
{% assign appPrefix = "ThingsBoard PE" %}
{% else %}
{% assign appPrefix = "ThingsBoard" %}
{% endif %}

Open the Notepad or other editor as administrator user (right click on the app icon and select "Run as administrator").  
Open the following file for editing (select "All Files" instead of "Text Documents" in file choosing dialog, the encoding is UTF-8):

```text 
C:\Program Files (x86)\tb-edge\conf\tb-edge.yml
``` 
{: .copy-code}

##### Database configuration

In the file "tb-edge.yml" from the previous step locate "# SQL DAO Configuration" block. 

Don't forget to **replace YOUR_POSTGRES_PASSWORD_HERE** with your real postgres user password:

```yml
# SQL DAO Configuration
spring:
  data:
    jpa:
      repositories:
        enabled: "true"
  jpa:
    hibernate:
      ddl-auto: "none"
  datasource:
    driverClassName: "${SPRING_DRIVER_CLASS_NAME:org.postgresql.Driver}"
    url: "${SPRING_DATASOURCE_URL:jdbc:postgresql://localhost:5432/tb_edge}"
    username: "${SPRING_DATASOURCE_USERNAME:postgres}"
    password: "${SPRING_DATASOURCE_PASSWORD:YOUR_POSTGRES_PASSWORD_HERE}"
``` 
##### Configure cloud connectivity

{% include templates/edge/install/copy-edge-credentials.md %}

Locate "# Cloud configuration" block and replace **PUT_YOUR_EDGE_KEY_HERE** and **PUT_YOUR_EDGE_SECRET_HERE** with Edge **key and secret** respectively. 

Please replace **PUT_YOUR_CLOUD_IP** with an IP address of the machine where {{appPrefix}} version is running:
{% if docsPrefix == 'pe/edge/' %}
* Use **thingsboard.cloud** in case you are connecting edge to [**ThingsBoard Cloud**](https://thingsboard.cloud/signup).

**NOTE**: **thingsboard.cloud** uses SSL protocol for edge communication. 
Please change **CLOUD_RPC_SSL_ENABLED** to **true** as well.
{% else %}
* Use **demo.thingsboard.io** if you are connecting edge to [**ThingsBoard Live Demo**](https://demo.thingsboard.io/signup) for evaluation.
{% endif %}
* Use **localhost** in case edge is running on the same machine where cloud instance is running. 
* Use **X.X.X.X** IP address in case edge is connecting to the cloud instance in the same network or in the docker.

{% if docsPrefix == 'pe/edge/' %}
```yml
# Cloud configuration
cloud:
    routingKey: "${CLOUD_ROUTING_KEY:PUT_YOUR_EDGE_KEY_HERE}"
    secret: "${CLOUD_ROUTING_SECRET:PUT_YOUR_EDGE_SECRET_HERE}"
    rpc:
      host: "${CLOUD_RPC_HOST:PUT_YOUR_CLOUD_IP}"
      ssl:
        # Set to 'true' if using thingsboard.cloud or if you have configured a TLS connection on your Server; set to 'false' otherwise.
        enabled: "${CLOUD_RPC_SSL_ENABLED:true/false}" 
```
{% else %}
```yml
# Cloud configuration
cloud:
    routingKey: "${CLOUD_ROUTING_KEY:PUT_YOUR_EDGE_KEY_HERE}"
    secret: "${CLOUD_ROUTING_SECRET:PUT_YOUR_EDGE_SECRET_HERE}"
    rpc:
      host: "${CLOUD_RPC_HOST:PUT_YOUR_CLOUD_IP}"
```
{% endif %}

{% capture local-deployment %}
If ThingsBoard Edge is set to run on the same machine where the **{{appPrefix}}** server is operating, you need to update additional configuration parameters to prevent port collision between the ThingsBoard server and ThingsBoard Edge.

Please locate and change next parameters in ThingsBoard Edge configuration file (**C:\Program Files (x86)\tb-edge\conf\tb-edge.yml**):
<br>
<br>**...**
<br>**port: "${HTTP_BIND_PORT:18080}"**
<br>**...**
<br>**bind_port: "${MQTT_BIND_PORT:11883}"**
<br>**...**
<br>**bind_port: "${COAP_BIND_PORT:15683}"**
<br>**...**
<br>**bind_port: "${LWM2M_ENABLED:false}"**
<br>**...**
{% if docsPrefix == 'pe/edge/' %}
<br>**bind_port: "${INTEGRATIONS_RPC_PORT:19090}"**
<br>**...**
{% endif %}
Ensure that the ports listed above (18080, 11883, 15683) are not being used by any other application.

{% endcapture %}
{% include templates/info-banner.md content=local-deployment %}
