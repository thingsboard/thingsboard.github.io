---
layout: docwithnav-mqtt-broker
title: Health API
description: TBMQ Health API description

---

* TOC
{:toc}

TBMQ supports **health checks** through the Spring Boot Actuator framework. 
Health checks allow monitoring systems to assess the state of TBMQ and its dependencies. 
TBMQ health checks are available through the `/actuator/health` endpoint on **8083** port, 
which can be customized to include specific details about the health of critical services such as **PostgreSQL**, **Kafka**, and **Redis**.

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
    * **Use case**: This controls which endpoints are publicly accessible, e.g., `health`, `info`, or even Prometheus metrics.

### Example Health Check Endpoint Output

The `/actuator/health` endpoint will return JSON data representing the overall status and the status of individual components, including custom checks like **TBMQ** and **Kafka**.

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

* If the service is **UP**, the health check will return a status of `UP` for individual components (e.g., `db`, `redis`, `tbmq`, `kafka`). 
This means the service is running smoothly and all dependencies are healthy.
* If any individual component fails (e.g., `redis` or `kafka`), the health check will return `DOWN` for that specific service 
and provide an error message explaining why the service is unavailable (e.g., "Redis connection failed" or "Kafka broker not reachable").
* If **any** of the services (e.g., `db`, `redis`, `tbmq`, `kafka`) is down, the **overall status** of the health check will be `DOWN`. 
This means that even if one of the components is unavailable, the entire system is considered unhealthy.

## Integration Executor Microservice

The **TBMQ Integration Executor (IE)** also has a health check exposed through Spring Boot Actuator. 
This health check monitors the health of the Integration Executor, ensuring it can connect to Kafka.

* **Endpoint**: The health check is available at `/actuator/health`.
* **Health Check URL**: The health check verifies the status of the service by sending an HTTP request to the `/actuator/health` endpoint on port `8082`.

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

These resources provide detailed information on configuring and utilizing health checks in **Docker** and **Kubernetes** environments.

* **Docker Health Checks Documentation**: [Docker Health Checks](https://docs.docker.com/reference/dockerfile/#healthcheck)
* **Kubernetes Probes**: [Kubernetes Probes](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/)
