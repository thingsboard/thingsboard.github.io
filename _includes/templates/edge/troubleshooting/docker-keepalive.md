#### Server
Stop the currently running **ThingsBoard** container before making any changes. Then, edit the docker compose file:

```bash
nano docker-compose.yml
```
{: .copy-code}

Add the following lines to the **"environment"** block in the YAML file:
```yml
    environment:
      - EDGES_RPC_CLIENT_MAX_KEEP_ALIVE_TIME_SEC=1
      - EDGES_RPC_KEEP_ALIVE_TIME_SEC=30
      - EDGES_RPC_KEEP_ALIVE_TIMEOUT_SEC=25
```
{: .copy-code}

#### Edge

Stop the currently running. **TB Edge container** before making any changes. Then, edit the docker compose file:

```bash
nano docker-compose.yml
```
{: .copy-code}

Add the following lines to the **"environment"** block in the YAML file:
```yml
    environment:
      - CLOUD_RPC_KEEP_ALIVE_TIME_SEC=30
      - CLOUD_RPC_KEEP_ALIVE_TIMEOUT_SEC=25
```
{: .copy-code}

Once all the changes have been made, start the **ThingsBoard** and **TB Edge docker containers**.