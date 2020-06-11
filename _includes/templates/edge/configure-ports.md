By default, ThingsBoard connects to ThingsBoard Edge via **RPC port 60100**. 
Follow next steps to check or modify it.

##### ThingsBoard Platform port Configuration (optional)

Open ThingsBoard configuration file

```bash 
sudo nano /usr/share/thingsboard/conf/thingsboard.yml
``` 
{: .copy-code}

Locate **EDGES_RPC_PORT** (press **Ctrl-W** to search in text) and replace port if necessary. 
In configuration file it looks this way
``` bash
# Edges parameters
edges:
  rpc:
    enabled: "${EDGES_RPC_ENABLED:true}"
    port: "${EDGES_RPC_PORT:60100}"
``` 
Write out changes (**Ctrl-O**) and exit from nano editor (**Ctrl-X**).
