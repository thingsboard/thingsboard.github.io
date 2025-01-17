{% if docsPrefix == 'pe/edge/' %}
{% assign appPrefix = "ThingsBoard PE" %}
{% else %}
{% assign appPrefix = "ThingsBoard" %}
{% endif %}

{% include templates/edge/install/copy-edge-credentials.md %}

Edit the **ThingsBoard Edge** configuration file:
```bash 
sudo nano /etc/tb-edge/conf/tb-edge.conf
``` 
{: .copy-code}

Update the following lines in your configuration file. Be sure **to replace**:
 * **"PUT_YOUR_POSTGRESQL_PASSWORD_HERE"** replace with your **actual postgres user password**.
 * **"PUT_YOUR_CLOUD_IP"** replace with an IP address of the machine running **{{appPrefix}}** Server. This depends on your setup:
   {% if docsPrefix == 'pe/edge/' %}
    * If you're connecting the Edge to [**ThingsBoard Cloud**](https://thingsboard.cloud/signup), use **thingsboard.cloud**.

    **NOTE**: **thingsboard.cloud** uses the SSL protocol for communication with the Edge. 
    You should also uncomment **export CLOUD_RPC_SSL_ENABLED=true** in this case.
   {% else %}
    * If you're connecting the Edge to the [**ThingsBoard Live Demo**](https://demo.thingsboard.io/signup) for evaluation, use **demo.thingsboard.io**.
   {% endif %}
    * Use **localhost** if the Edge is running on the same machine as the Server instance. 
    * Use an **X.X.X.X** IP address if the Edge is connecting to the Server instance in the same network or in a Docker container.

 * Replace **"PUT_YOUR_EDGE_KEY_HERE"** and **"PUT_YOUR_EDGE_SECRET_HERE"** with the appropriate **Edge key and secret**:

```bash
# UNCOMMENT NEXT LINES AND PUT YOUR CLOUD CONNECTION SETTINGS:
# export CLOUD_ROUTING_KEY=PUT_YOUR_EDGE_KEY_HERE
# export CLOUD_ROUTING_SECRET=PUT_YOUR_EDGE_SECRET_HERE
{% if docsPrefix == 'pe/edge/' %}
# UNCOMMENT NEXT LINES IF EDGE CONNECTS TO PE 'THINGSBOARD.CLOUD' SERVER:
# export CLOUD_RPC_HOST=thingsboard.cloud
# export CLOUD_RPC_SSL_ENABLED=true

# UNCOMMENT NEXT LINES IF YOU ARE RUNNING EDGE ON THE SAME MACHINE WHERE THINGSBOARD SERVER IS RUNNING:
# export HTTP_BIND_PORT=18080
# export MQTT_BIND_PORT=11883
# export COAP_BIND_PORT=15683
# export LWM2M_ENABLED=false
# export SNMP_ENABLED=false
# export INTEGRATIONS_RPC_PORT=19090
{% else %}
# UNCOMMENT NEXT LINES IF EDGE CONNECTS TO CE 'DEMO.THINGSBOARD.IO' SERVER:
# export CLOUD_RPC_HOST=demo.thingsboard.io

# UNCOMMENT NEXT LINES IF YOU ARE RUNNING EDGE ON THE SAME MACHINE WHERE THINGSBOARD SERVER IS RUNNING:
# export HTTP_BIND_PORT=18080
# export MQTT_BIND_PORT=11883
# export COAP_BIND_PORT=15683
# export LWM2M_ENABLED=false
# export SNMP_ENABLED=false
{% endif %}
# UNCOMMENT NEXT LINES IF YOU CHANGED DEFAULT CLOUD RPC HOST/PORT SETTINGS:
# export CLOUD_RPC_HOST=PUT_YOUR_CLOUD_IP
# export CLOUD_RPC_PORT=7070

{% if docsPrefix == 'pe/edge/' %}
# export INTEGRATIONS_RPC_PORT=19090
{% endif %}
# UNCOMMENT NEXT LINES IF YOU HAVE CHANGED DEFAULT POSTGRESQL DATASOURCE SETTINGS:
# export SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/tb_edge
# export SPRING_DATASOURCE_USERNAME=postgres
# export SPRING_DATASOURCE_PASSWORD=PUT_YOUR_POSTGRESQL_PASSWORD_HERE
```

{% capture local-deployment %}
To run **ThingsBoard Edge** on the same machine as the **{{appPrefix}}** Server, update the configuration parameters to avoid port collision between them.
**Uncomment the corresponding lines** in the **tb-edge.conf** file. 

Ensure that other applications do not use the **18080, 11883, and 15683** ports.
{% endcapture %}
{% include templates/info-banner.md content=local-deployment %}

