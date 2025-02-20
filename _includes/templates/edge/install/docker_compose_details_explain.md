{% if docsPrefix == 'pe/edge/' %}
{% assign appPrefix = "ThingsBoard PE" %}
{% else %}
{% assign appPrefix = "ThingsBoard" %}
{% endif %}

Where:    
- `restart: always` - automatically start ThingsBoard Edge in case of system reboot and restart in case of failure;
- `8080:8080` - connect local port 8080 to exposed internal HTTP port 8080;
- `1883:1883` - connect local port 1883 to exposed internal MQTT port 1883;
- `5683-5688:5683-5688/udp` - connect local UDP ports 5683-5688 to exposed internal COAP and LwM2M ports;
{% if docsPrefix == 'pe/edge/' %}
- `thingsboard/tb-edge-pe:{{ site.release.pe_edge_full_ver }}` - docker image;
{% else %}
- `thingsboard/tb-edge:{{ site.release.edge_full_ver }}` - docker image;
{% endif %}
- `CLOUD_ROUTING_KEY` - your edge key;
- `CLOUD_ROUTING_SECRET` - your edge secret;
- `CLOUD_RPC_HOST` - ip address of the machine with the ThingsBoard platform;
{% if docsPrefix == 'pe/edge/' %}
- `CLOUD_RPC_SSL_ENABLED` - enable or disable SSL connection to server from edge.
{% endif %}

{% capture cloud_rpc_host %}
Please set **CLOUD_RPC_HOST** with an IP address of the machine where {{appPrefix}} version is running:
* DO NOT use **'localhost'** - **'localhost'** is the ip address of the edge service in the docker container.
{% if docsPrefix == 'pe/edge/' %}
* Use **thingsboard.cloud** in case you are connecting edge to [**ThingsBoard Cloud**](https://thingsboard.cloud/signup).

**NOTE**: **thingsboard.cloud** uses SSL protocol for edge communication.
Please change **CLOUD_RPC_SSL_ENABLED** to **true** as well.
{% else %}
* Use **demo.thingsboard.io** if you are connecting edge to [**ThingsBoard Live Demo**](https://demo.thingsboard.io/signup) for evaluation.
{% endif %}
* Use **X.X.X.X** IP address in case edge is connecting to the cloud instance in the same network or in the docker.

{% endcapture %}
{% include templates/info-banner.md content=cloud_rpc_host %}

{% capture local-deployment %}
If **ThingsBoard Edge** is set to run on the **same machine** where the **{{appPrefix}}** server is operating, you need to update port configuration to prevent port collision between the ThingsBoard server and ThingsBoard Edge.

Ensure that the ports **18080, 11883, 15683-15688** are not used by any other application.

Then, update the port configuration in the `docker-compose.yml` file:

**sed -i 's/8080:8080/18080:8080/; s/1883:1883/11883:1883/; s/5683-5688:5683-5688\/udp/15683-15688:5683-5688\/udp/' docker-compose.yml**

{% endcapture %}{% include templates/info-banner.md content=local-deployment %}

