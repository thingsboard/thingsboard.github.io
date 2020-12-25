###### ThingsBoard Edge ports сonfiguration

{% include templates/thingsboard-edge/configure-ports.md %}

If you want to modify default ports, open ThingsBoard Edge configuration file

```bash 
sudo nano /usr/share/tb-edge/conf/tb-edge.conf
``` 

add following line(s) to the configuration file. 
Don’t forget to replace “PUT_EDGES_RPC_PORT_HERE", "PUT_HTTP_PORT_HERE". "PUT_MQTT_PORT_HERE" with the port numbers you want to use

``` bash
export CLOUD_RPC_PORT=PUT_EDGES_RPC_PORT_HERE
export HTTP_BIND_PORT=PUT_HTTP_PORT_HERE
export MQTT_BIND_PORT=PUT_MQTT_PORT_HERE
``` 
{: .copy-code}

Write out changes (**Ctrl-O**) and exit from nano editor (**Ctrl-X**).

By default, ThingsBoard connects to ThingsBoard Edge via **RPC port 60100**. 
Follow next steps to check or modify it.

##### ThingsBoard Platform ports сonfiguration

Open ThingsBoard configuration file

```bash 
sudo nano /usr/share/thingsboard/conf/thingsboard.yml
``` 
{: .copy-code}

Locate **EDGES_RPC_PORT** (**Ctrl-W**) and replace port if necessary. 
In configuration file it will look like this
``` bash
# Edges parameters
edges:
  rpc:
    enabled: "${EDGES_ENABLED:true}"
    port: "${EDGES_RPC_PORT:60100}"
``` 
Write out changes (**Ctrl-O**) and exit from nano editor (**Ctrl-X**).

