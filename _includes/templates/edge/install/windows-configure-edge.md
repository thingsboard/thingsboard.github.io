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
    database-platform: "${SPRING_JPA_DATABASE_PLATFORM:org.hibernate.dialect.PostgreSQLDialect}"
  datasource:
    driverClassName: "${SPRING_DRIVER_CLASS_NAME:org.postgresql.Driver}"
    url: "${SPRING_DATASOURCE_URL:jdbc:postgresql://localhost:5432/tb_edge}"
    username: "${SPRING_DATASOURCE_USERNAME:postgres}"
    password: "${SPRING_DATASOURCE_PASSWORD:YOUR_POSTGRES_PASSWORD_HERE}"
``` 
##### Configure cloud connectivity

Locate "# Cloud configuration" block and replace **PUT_YOUR_EDGE_KEY_HERE** and **PUT_YOUR_EDGE_SECRET_HERE** with Edge **key and secret** respectively. 

Please replace **PUT_YOUR_CLOUD_IP** with an IP address of the machine where ThingsBoard CE/PE version is running:
* Use **thingsboard.cloud** in case you are connecting edge to [**ThingsBoard Cloud**](https://thingsboard.cloud/signup).

**NOTE**: **thingsboard.cloud** uses SSL protocol for edge communication. 
Please change **CLOUD_RPC_SSL_ENABLED** to **true** as well. 

* Use **localhost** in case edge is running on the same machine where cloud instance is running. 
* Use **X.X.X.X** IP address in case edge is connecting to the cloud instance in the same network or in the docker.
* Or use **demo.thingsboard.io** if you are connecting edge to [**ThingsBoard Live Demo**](https://demo.thingsboard.io/signup) for evaluation. 

```yml
# Cloud configuration
cloud:
    routingKey: "${CLOUD_ROUTING_KEY:PUT_YOUR_EDGE_KEY_HERE}"
    secret: "${CLOUD_ROUTING_SECRET:PUT_YOUR_EDGE_SECRET_HERE}"
    rpc:
      host: "${CLOUD_RPC_HOST:PUT_YOUR_CLOUD_IP}"
      ssl:
        enabled: "${CLOUD_RPC_SSL_ENABLED:false}"
```

{% capture local-deployment %}
If ThingsBoard Edge is going to be running on the same machine where ThingsBoard **Professional Edition/Community Edition** server is running you'll need to update additional configuration parameters to avoid port collision.
 
Please locate and change next parameters in ThingsBoard Edge configuration file (**C:\Program Files (x86)\tb-edge\conf\tb-edge.yml**):
<br>
<br>**port: "${HTTP_BIND_PORT:18080}"**
<br>**...**
<br>**bind_port: "${MQTT_BIND_PORT:11883}"**
<br>**...**
<br>**bind_port: "${COAP_BIND_PORT:15683}"**

Please make sure ports above are not used by any other application.

{% endcapture %}
{% include templates/info-banner.md content=local-deployment %}
