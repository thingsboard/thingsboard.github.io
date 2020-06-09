**ThingsBoard includes In Memory Queue service and use it by default without extra settings.**

Create docker compose file for ThingsBoard queue service:

```text
docker-compose.yml
```
{: .copy-code}

Add the following line to the yml file. Don’t forget to replace "PUT_YOUR_LICENSE_SECRET_HERE" with your **license secret obtained on the first step**:

```yml
version: '2.2'
services:
  mytbpe:
    restart: always
    image: "store/thingsboard/tb-pe:3.0.1PE"
    ports:
      - "8080:9090"
      - "1883:1883"
      - "5683:5683/udp"
    environment:
      TB_QUEUE_TYPE: in-memory
      TB_LICENSE_SECRET: PUT_YOUR_LICENSE_SECRET_HERE
      TB_LICENSE_INSTANCE_DATA_FILE: /data/license.data
    volumes:
      - mytbpe-data:/data
      - mytbpe-logs:/var/log/thingsboard
```
{: .copy-code}
