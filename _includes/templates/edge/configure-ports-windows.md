
By default, ThingsBoard connects to ThingsBoard Edge via **RPC port 60100**. 
Follow next steps to check or modify it.

##### ThingsBoard Platform port Configuration (optional)

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
    enabled: "${EDGES_RPC_ENABLED:true}"
    port: "${EDGES_RPC_PORT:60100}"
``` 
Write out changes (**Ctrl-S**) and exit from editor.
