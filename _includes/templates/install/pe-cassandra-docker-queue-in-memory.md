**ThingsBoard includes In Memory Queue service and use it by default without extra settings.**

```text
nano tb-node.env
```
{: .copy-code}

Add the following line to the file.

```bash
TB_QUEUE_TYPE=in-memory
```
{: .copy-code}

Check docker-compose.yml and configure ports if you need:

```bash
nano docker-compose.yml
```

```bash
services:
  tbpe:
    restart: always
    image: "${DOCKER_REPO}/${TB_NODE_DOCKER_NAME}:${TB_VERSION}"
    ports:
      - "8080:8080"
      - "1883:1883"
      - "7070:7070"
      - "5683-5688:5683-5688/udp"
```
{: .copy-code}
