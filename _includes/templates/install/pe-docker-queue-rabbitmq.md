
For installing RabbitMQ use this [instruction](https://www.rabbitmq.com/install-debian.html).

Create docker compose file for ThingsBoard queue service:

```text
sudo nano docker-compose.yml
```
{: .copy-code}

Add the following line to the yml file. Don't forget to replace "YOUR_USERNAME" and "YOUR_PASSWORD" with your **real user credentials**, "localhost" and "5672" with your **real RabbitMQ host and port**, and "PUT_YOUR_LICENSE_SECRET_HERE" with your **license secret obtained on the first step**:

```yml
version: '2.2'
services:
  mytbpe:
    restart: always
    image: "store/thingsboard/tb-pe:{{ site.release.pe_full_ver }}"
    ports:
      - "8080:8080"
      - "1883:1883"
      - "5683:5683/udp"
    environment:
      TB_QUEUE_TYPE: rabbitmq
      SPRING_DATASOURCE_URL: jdbc:postgresql://postgres:5432/thingsboard
      TB_QUEUE_RABBIT_MQ_USERNAME: YOUR_USERNAME
      TB_QUEUE_RABBIT_MQ_PASSWORD: YOUR_PASSWORD
      TB_QUEUE_RABBIT_MQ_HOST: localhost
      TB_QUEUE_RABBIT_MQ_PORT: 5672
      TB_LICENSE_SECRET: PUT_YOUR_LICENSE_SECRET_HERE
      TB_LICENSE_INSTANCE_DATA_FILE: /data/license.data
    volumes:
      - ~/.mytbpe-data:/data
      - ~/.mytbpe-logs:/var/log/thingsboard
  postgres:
    restart: always
    image: "postgres:12"
    ports:
    - "5432"
    environment:
      POSTGRES_DB: thingsboard
      POSTGRES_PASSWORD: postgres
    volumes:
      - ~/.mytbpe-data/db:/var/lib/postgresql/data
```
{: .copy-code}
