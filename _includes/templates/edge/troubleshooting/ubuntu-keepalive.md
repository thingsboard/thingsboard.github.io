#### Server

Edit the **ThingsBoard configuration file:**
```bash
sudo nano /etc/thingsboard/conf/thingsboard.conf
```
{: .copy-code}

Add the following lines to the configuration file:
```bash
export EDGES_RPC_CLIENT_MAX_KEEP_ALIVE_TIME_SEC=1
export EDGES_RPC_KEEP_ALIVE_TIME_SEC=30
export EDGES_RPC_KEEP_ALIVE_TIMEOUT_SEC=25
```
{: .copy-code}

#### Edge

Then, edit the **ThingsBoard Edge configuration file:**
```bash
sudo nano /etc/tb-edge/conf/tb-edge.conf
```
{: .copy-code}

Add the following lines to the configuration file:
```bash
export CLOUD_RPC_KEEP_ALIVE_TIME_SEC=30
export CLOUD_RPC_KEEP_ALIVE_TIMEOUT_SEC=25
```
{: .copy-code}

Once all the changes have been made, restart the **ThingsBoard** and **TB Edge services**.