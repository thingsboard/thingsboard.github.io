###### ThingsBoard Edge ports configuration
By default, ThingsBoard Edge service has following configurations for transports:

<table>
  <thead>
      <tr>
          <td><b>Environment Variable</b></td><td><b>Default Value</b></td><td><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>CLOUD_RPC_PORT</td>
          <td>60100</td>
          <td>RPC port connects ThingsBoard Edge to ThinsBoard Platform</td>
      </tr>
      <tr>
           <td>HTTP_BIND_PORT</td>
           <td>8190</td>
           <td>HTTP Server bind port</td>
        </tr>
       <tr>
          <td>MQTT_BIND_PORT</td>
          <td>1993</td>
          <td>MQTT Server bind port</td>
      </tr>
  </tbody>
</table>
      
     
Add following line(s) in the configuration file if you want to modify default ports. 
Don’t forget to replace “PUT_EDGES_RPC_PORT_HERE", "PUT_HTTP_PORT_HERE". "PUT_MQTT_PORT_HERE" with the port numbers you want to use

``` bash
!!!!! export CLOUD_RPC_PORT=PUT_EDGES_RPC_PORT_HERE
!!!!! export HTTP_BIND_PORT=PUT_HTTP_PORT_HERE
!!!!! export MQTT_BIND_PORT=PUT_MQTT_PORT_HERE
``` 
{: .copy-code}

##### ThingsBoard Platform port Configuration (optional)

By default, ThingsBoard connects to ThingsBoard Edge via **RPC port 60100**. 
Follow next steps to check or modify it.

Open ThingsBoard Platform "thingsboard.yml" configuration file: 

```text 
C:\Program Files (x86)\thingsboard\conf\thingsboard.yml
``` 
{: .copy-code}

Locate **EDGES_RPC_PORT** (**Ctrl-F**) and replace port if necessary. 
In configuration file it will look like this
``` bash
# Edges parameters
edges:
  rpc:
    enabled: "${EDGES_ENABLED:true}"
    port: "${EDGES_RPC_PORT:60100}"
``` 
Write out changes (**Ctrl-S**) and exit from editor.
