* TOC
{:toc}

TBMQ supports **health checks** through the Spring Boot Actuator framework. 
Health checks allow monitoring systems to assess the state of TBMQ and its dependencies. 
TBMQ health checks are available through the `/actuator/health` endpoint on **8083** port, 
which can be customized to include specific details about the connection health to critical services such as **PostgreSQL**, **Kafka**, and **Redis**.

## Health Endpoint Response Status Codes

* **200 OK**: The system is healthy, and all components are functioning properly.
* **503 Service Unavailable**: One or more components have failed, and the system is deemed unhealthy.

## Key Configuration Parameters

The following parameters are used to configure health checks and expose them through the actuator endpoint.

```yaml
management:
   health:
      diskspace:
         # Enable/disable disk space health check
         enabled: "${HEALTH_DISKSPACE_ENABLED:false}"
   endpoint:
      health:
         # Controls whether health endpoint shows full component details (e.g., Redis, DB, TBMQ).
         # Options:
         # - 'never': always hide details (default if security is enabled).
         # - 'when-authorized': show details only to authenticated users.
         # - 'always': always include full health details in the response
         show-details: "${HEALTH_SHOW_DETAILS:never}"
   endpoints:
      web:
         exposure:
            # Specify which Actuator endpoints should be exposed via HTTP.
            # Use 'health,info' to expose only basic health and information endpoints.
            # For exposing Prometheus metrics, update this to include 'prometheus' in the list (e.g., 'health,info,prometheus')
            include: "${METRICS_ENDPOINTS_EXPOSE:health,info,prometheus}"
```

### Explanation of Parameters

1. **`health.diskspace.enabled`**:

    * **Description**: Enables or disables the disk space health check.
    * **Default**: Disabled (`false`).
    * **Use case**: If enabled, it checks the disk usage of the container and reports if disk space is running low.

2. **`endpoint.health.show-details`**:

    * **Description**: Controls the visibility of detailed health information for the `/actuator/health` endpoint.
    * **Options**:
        * `never`: Always hides detailed component information (default when security is enabled).
        * `when-authorized`: Shows details only to authenticated users.
        * `always`: Always includes full health details in the response.
    * **Default**: `never`.
    * **Use case**: This is used to manage the exposure of health details based on security and access controls.

3. **`endpoints.web.exposure.include`**:

    * **Description**: Specifies which Actuator endpoints should be exposed via HTTP.
    * **Example**: `health,info,prometheus`.
    * **Use case**: This controls which endpoints are publicly accessible, e.g., `health`, `info`, or even `prometheus` metrics.

### Example Health Check Endpoint Output

The `/actuator/health` endpoint provides JSON data that reflects both the overall system status and the status of individual components, 
including custom checks such as **TBMQ** and **Kafka**. 
This detailed information is included when the `show-details` setting is not configured to `never`. 
If `show-details` is set to `never`, the endpoint will only return the overall status without component details.

**Healthy Response**:

```json
{
   "status":"UP",
   "components":{
      "db":{
         "status":"UP",
         "details":{
            "database":"PostgreSQL",
            "validationQuery":"isValid()"
         }
      },
      "kafka":{
         "status":"UP",
         "details":{
            "brokerCount":3
         }
      },
      "ping":{
         "status":"UP"
      },
      "redis":{
         "status":"UP",
         "details":{
            "version":"7.0.15"
         }
      },
      "tbmq":{
         "status":"UP"
      }
   }
}
```

**Unhealthy Response**:

```json
{
   "status":"DOWN",
   "components":{
      "db":{
         "status":"UP",
         "details":{
            "database":"PostgreSQL",
            "validationQuery":"isValid()"
         }
      },
      "kafka":{
         "status":"UP",
         "details":{
            "brokerCount":1
         }
      },
      "ping":{
         "status":"UP"
      },
      "redis":{
         "status":"DOWN",
         "details":{
            "error":"org.springframework.dao.QueryTimeoutException: Redis command timed out"
         }
      },
      "tbmq":{
         "status":"UP"
      }
   }
}
```

In the example above:

* If the system is **UP**, the health check will return a status of `UP` for individual components (e.g., `db`, `redis`, `tbmq`, `kafka`). 
This means the TBMQ is running smoothly and all dependencies are healthy.
* If any individual component fails (e.g., `redis`, `kafka`), the health check will return `DOWN` for that specific service 
and provide an error message explaining why the service is unavailable (e.g., "Redis connection failed" or "Kafka broker not reachable").
* If **any** of the services (e.g., `db`, `redis`, `tbmq`, `kafka`) is down, the **overall status** of the health check will be `DOWN`. 
This means that even if one of the components is unavailable, the entire system is considered unhealthy.

### Timeouts Configuration

The health checks verify the connectivity to essential dependencies, such as Kafka, Redis, and PostgreSQL, 
by executing specific commands designed to test the connection. 
Each command is subject to a timeout, which determines how long the health check will wait before considering the 
connectivity test to have failed. 
The timeout for each third-party service can be customized to suit your application's requirements.

```yaml
# Kafka Admin client command timeout (in seconds). Applies to operations like describeCluster, listTopics, etc
queue.command-timeout: "${TB_KAFKA_ADMIN_COMMAND_TIMEOUT_SEC:30}"

# Maximum time (in seconds) to wait for a lettuce command to complete.
# This affects health checks and any command execution (e.g. GET, SET, PING).
# Reduce this to fail fast if Redis is unresponsive
lettuce.command-timeout: "${REDIS_LETTUCE_COMMAND_TIMEOUT_SEC:30}"

# Maximum time (in milliseconds) HikariCP will wait to acquire a connection from the pool.
# If exceeded, an exception is thrown. Default is 30 seconds
spring.connectionTimeout: "${SPRING_DATASOURCE_CONNECTION_TIMEOUT_MS:30000}"
```

## Integration Executor Microservice

The **TBMQ Integration Executor (IE)** also has a health check exposed through Spring Boot Actuator. 
This health check monitors the health of the Integration Executor, ensuring it can connect to Kafka.

* **Endpoint**: The health check is available at `/actuator/health`.
* **Health Check URL**: The health check verifies the status of the service by sending an HTTP request to the `/actuator/health` endpoint on port **8082**.

**Healthy Response**:

```json
{
   "status":"UP",
   "components":{
      "kafka":{
         "status":"UP",
         "details":{
            "brokerCount":3
         }
      },
      "ping":{
         "status":"UP"
      }
   }
}
```

## Conclusion

* **Health Checks**: TBMQ uses Spring Boot Actuator’s health check mechanism to monitor its own state and dependencies like **PostgreSQL**, **Kafka**, and **Redis**.
* **Configurable Health Details**: You can customize the level of detail shown in health check responses, whether always, based on authorization, or hidden.

By configuring health checks and exposing detailed health information, 
you can ensure that TBMQ's operational state is properly monitored and alerting systems can be set up based on this data.

**Docker Compose Configuration Example**:

```yaml
healthcheck:
  test: ["CMD", "curl", "-f", "http://localhost:8083/actuator/health"]
  interval: 30s
  retries: 3
  start_period: 30s
  timeout: 10s
```
{: .copy-code}

**In Kubernetes**, you can configure liveness and readiness probes in your pod/statefulset/deployment configuration:

```yaml
livenessProbe:
  httpGet:
    path: /actuator/health
    port: 8083
  initialDelaySeconds: 30
  periodSeconds: 30
  timeoutSeconds: 10
  failureThreshold: 3

readinessProbe:
  httpGet:
    path: /actuator/health
    port: 8083
  initialDelaySeconds: 30
  periodSeconds: 30
  timeoutSeconds: 10
  failureThreshold: 3
```
{: .copy-code}

These resources provide detailed information on configuring and utilizing health checks in **Docker** and **Kubernetes** environments.

* **Docker Health Checks Documentation**: [Docker Health Checks](https://docs.docker.com/reference/dockerfile/#healthcheck).
* **Kubernetes Probes**: [Kubernetes Probes](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/).
