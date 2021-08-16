Where:    
- `restart: always` - automatically start ThingsBoard Edge in case of system reboot and restart in case of failure
- `8080:8080` - connect local port 8080 to exposed internal HTTP port 8080
- `1883:1883` - connect local port 1883 to exposed internal MQTT port 1883  
- `5683-5688:5683-5688/udp` - connect local UDP ports 5683-5688 to exposed internal COAP and LwM2M ports   
- `mytb-edge-data:/data` - mounts the host's dir `mytb-edge-data` to ThingsBoard Edge DataBase data directory
- `mytb-edge-logs:/var/log/tb-edge` - mounts the host's dir `mytb-edge-logs` to ThingsBoard Edge logs directory
- `thingsboard/tb-edge-monolith:3.3.0EDGE` - docker image
- `CLOUD_ROUTING_KEY` - your edge key
- `CLOUD_ROUTING_SECRET` - your edge secret
- `CLOUD_RPC_HOST` - ip address of the machine with the ThingsBoard platform. 

{% capture cloud_rpc_host %}
Please set **CLOUD_RPC_HOST** with an IP address of the machine where ThingsBoard CE/PE version is running:
* DO NOT use **'localhost'** - **'localhost'** is the ip address of the edge service in the docker container.
* Use **thingsboard.cloud** in case you are connecting edge to [**ThingsBoard Cloud**](https://thingsboard.cloud/signup). 
* Use **X.X.X.X** IP address in case edge is connecting to the cloud instance in the same network or in the docker.
* Or use **demo.thingsboard.io** if you are connecting edge to [**ThingsBoard Live Demo**](https://demo.thingsboard.io/signup) for evaluation.

{% endcapture %}
{% include templates/info-banner.md content=cloud_rpc_host %}

{% capture local-deployment %}
If ThingsBoard Edge is going to be running on the same machine where ThingsBoard **Professional Edition/Community Edition** server is running you'll need to update docker compose port mapping.
 
Please update next lines of docker compose:
<br>**ports:**
<br> - "**18080**:8080"
<br> - "**11883**:1883"
<br> - "**15683**:5683/udp" 

Please make sure ports above are not used by any other application.

{% endcapture %}
{% include templates/info-banner.md content=local-deployment %}

