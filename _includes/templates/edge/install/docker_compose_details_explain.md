{% if docsPrefix == 'pe/edge/' %}
{% assign appPrefix = "ThingsBoard PE" %}
{% else %}
{% assign appPrefix = "ThingsBoard" %}
{% endif %}

Where:    
- **restart: always:** ThingsBoard Edge automatically starts on system reboot or after a failure.
- **8080:8080:** Connect local port 8080 to the container's internal HTTP port 8080.
- **1883:1883:** Connect local port 1883 to the container's internal MQTT port 1883.
- **5683-5688:5683-5688/udp:** Connect local UDP ports 5683–5688 to the container’s internal CoAP and LwM2M ports.
{% if docsPrefix == 'pe/edge/' %}
- **thingsboard/tb-edge-pe:{{ site.release.pe_edge_full_ver }}:** The ThingsBoard Edge PE Docker image.
{% else %}
- **thingsboard/tb-edge:{{ site.release.edge_full_ver }}:** The ThingsBoard Edge Docker image.
{% endif %}
- **CLOUD_ROUTING_KEY:** Enter the actual Edge key.
- **CLOUD_ROUTING_SECRET:** Enter the actual Edge secret.
- **CLOUD_RPC_HOST:** he IP address or hostname of the machine running the ThingsBoard platform.
{% if docsPrefix == 'pe/edge/' %}
- **CLOUD_RPC_SSL_ENABLED:** Defines whether SSL is used for the connection between Edge and the ThingsBoard server. Use _true_ to enable SSL, or _false_ to disable it.
{% endif %}

{% capture cloud_rpc_host %}
Please set **CLOUD_RPC_HOST** with an IP address of the machine where {{appPrefix}} version is running:
* DO NOT use **'localhost'** - **'localhost'** is the ip address of the edge service in the docker container.
{% if docsPrefix == 'pe/edge/' %}
* Use **thingsboard.cloud** if you are connecting Edge to the [**ThingsBoard Cloud**](https://thingsboard.cloud/signup){: target="_blank"}.

**NOTE**: **thingsboard.cloud** uses SSL protocol for edge communication.
Please change **CLOUD_RPC_SSL_ENABLED** to **true** as well.
{% endif %}
* Use **X.X.X.X** IP address if the Edge is connected to the Cloud instance in the same network or Docker environment.

{% endcapture %}
{% include templates/info-banner.md content=cloud_rpc_host %}

{% capture local-deployment %}
If **ThingsBoard Edge** is set to run on the **same machine** where the **{{appPrefix}}** server is operating, you need to update port configuration to prevent port collision between the ThingsBoard server and ThingsBoard Edge.

Ensure that the ports **18080, 11883, 15683-15688** are not used by any other application.

Then, update the port configuration in the **docker-compose.yml** file:

**sed -i 's/8080:8080/18080:8080/; s/1883:1883/11883:1883/; s/5683-5688:5683-5688\/udp/15683-15688:5683-5688\/udp/' docker-compose.yml**

{% endcapture %}{% include templates/info-banner.md content=local-deployment %}

