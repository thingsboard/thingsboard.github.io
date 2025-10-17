TBMQ v2.1.0 introduces enhancements, including a new Integration Executor microservice and bumped versions for third-party services.

#### Add Integration Executor microservice

This release adds support for external integrations via the new [Integration Executor](/docs/{{docsPrefix}}mqtt-broker/integrations/) microservice.

<br>
<details markdown="1">
<summary>
Add the service definition and volume to your existing docker-compose.yml file
</summary>

```yaml
  tbmq-integration-executor:
    restart: always
    image: "thingsboard/tbmq-integration-executor:2.1.0"
    depends_on:
      - kafka
      - tbmq
    logging:
      driver: "json-file"
      options:
        max-size: "200m"
        max-file: "5"
    environment:
      TB_SERVICE_ID: tbmq-ie
      TB_KAFKA_SERVERS: kafka:9092
      #JAVA_OPTS: "-Xmx2048M -Xms2048M -Xss384k -XX:+AlwaysPreTouch"
    volumes:
      - tbmq-ie-logs:/var/log/tbmq-integration-executor

volumes:
  tbmq-ie-logs:
    external: true
```
{: .copy-code}
</details>
<br>

For the complete updated `docker-compose.yml`, see the [official example here](https://github.com/thingsboard/tbmq/blob/release-2.1.0/msa/tbmq/configs/docker-compose.yml).

Run the following command to create a Docker volume for Integration Executor logs:

```bash
docker volume create tbmq-ie-logs
```
{: .copy-code}

After updating your configuration, start the service with:

```bash
docker compose up -d tbmq-integration-executor --no-deps
```
{: .copy-code}

#### Update third-party services

{% include templates/mqtt-broker/upgrade/upgrade-third-parties-for-2.1.0-release.md %}
