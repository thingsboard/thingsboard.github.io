Edit ThingsBoard Edge configuration file 
```bash 
sudo nano /etc/tb-edge/conf/tb-edge.conf
``` 
{: .copy-code}

Add the following lines to the configuration file. Don't forget **to replace**:
 * "PUT_YOUR_POSTGRESQL_PASSWORD_HERE" with your **real postgres user password**.
 * "PUT_YOUR_CLOUD_IP" with an IP address of the machine where ThingsBoard **CE** server is running. Use **localhost** in case ThingsBoard Edge is running on the same machine where cloud instance is running. Or use **demo.thingsboard.io** if you are connecting edge to ThingsBoard **Live Demo** for evaluation. 
 * "PUT_YOUR_EDGE_KEY_HERE" and "PUT_YOUR_EDGE_SECRET_HERE" with Edge **key and secret** respectively:
```bash
# DB Configuration 
export SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/tb_edge
export SPRING_DATASOURCE_USERNAME=postgres
export SPRING_DATASOURCE_PASSWORD=PUT_YOUR_POSTGRESQL_PASSWORD_HERE
export CLOUD_ROUTING_KEY=PUT_YOUR_EDGE_KEY_HERE
export CLOUD_ROUTING_SECRET=PUT_YOUR_EDGE_SECRET_HERE
export CLOUD_PRC_HOST=PUT_YOUR_CLOUD_IP
```
{: .copy-code}

{% capture local-deployment %}
If ThingsBoard Edge is going to be running on the same machine where ThingsBoard CE server is running you'll need to add additional configuration parameters to avoid port collision.
 
Please add next parameters to ThingsBoard Edge configuration file: 
 
 ```bash
 
 export HTTP_BIND_PORT=18080
 export MQTT_BIND_PORT=11883
 export COAP_BIND_PORT=15683
  ```

Please make sure ports above are not used by any other application.

{% endcapture %}
{% include templates/info-banner.md content=local-deployment %}

