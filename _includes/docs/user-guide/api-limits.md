API & Rate Limits feature allows controlling API usage, by limiting number of requests from a single host/device/tenant during single time unit (Minutes, Hours, etc.). 

API & Rate limits are **disabled by default**. System administrator is able to configure rate limits using [thingsboard.yml](/docs/{{docsPrefix}}user-guide/install/config/).  

#### REST API limits

REST API calls are used by all sorts of UI components and possibly some automatic scripts launched on behalf of customer user or tenant user. 
It is critical to limit amount of API calls by tenant or by customer to avoid overloading the server due to mistakes in a custom widget or script.

The *rest.limits.tenant.enabled* parameter or *TB_SERVER_REST_LIMITS_TENANT_ENABLED* environment property enables/disables tenant level limits.

The *rest.limits.tenant.configuration* parameter or *TB_SERVER_REST_LIMITS_TENANT_CONFIGURATION* environment property configure maximum amount of REST API calls.
For example, value "100:1,2000:60" means no more then 100 requests per second and no more then 2000 requests per minute.

```yaml
server:
  ...
  rest:
    limits:
      tenant:
        enabled: "${TB_SERVER_REST_LIMITS_TENANT_ENABLED:false}"
        configuration: "${TB_SERVER_REST_LIMITS_TENANT_CONFIGURATION:100:1,2000:60}"
      customer:
        enabled: "${TB_SERVER_REST_LIMITS_CUSTOMER_ENABLED:false}"
        configuration: "${TB_SERVER_REST_LIMITS_CUSTOMER_CONFIGURATION:50:1,1000:60}"
```

### Websocket limits

Websockets are used to deliver real-time notifications about new telemetry values from device to the dashboard. 

The *ws.send_timeout* parameter or *TB_SERVER_WS_SEND_TIMEOUT* environment property controls maximum time for a successful websocket message delivery to the client. If client is too slow, the session will be closed.

The *ws.limits.max_queue_per_ws_session* parameter or *TB_SERVER_WS_TENANT_RATE_LIMITS_MAX_QUEUE_PER_WS_SESSION*  environment property controls max messages that are awaiting delivery to the client. If client is too slow, the session will be closed.
   
The *ws.limits.max_sessions_per_\** parameter or *TB_SERVER_WS_TENANT_RATE_LIMITS_MAX_SESSIONS_PER_\** environment property controls maximum amount of active connections per certain entity: tenant, customer, public or regular user.
If there is too much sessions per certain criteria, new connections will be dropped. 

The *ws.limits.max_subscriptions_per_\** parameter or *TB_SERVER_WS_TENANT_RATE_LIMITS_MAX_SUBSCRIPTIONS_PER_\** environment property controls maximum amount of active subscriptions within all sessions per certain entity: tenant, customer, public or regular user.
If there is too much subscriptions per certain criteria, new subscriptions will not be accepted. 

The *ws.limits.max_updates_per_session* parameter or *TB_SERVER_WS_TENANT_RATE_LIMITS_MAX_UPDATES_PER_SESSION*  environment property configure maximum amount of messages sent to the client from the server for each session. 
For example, value "300:1,3000:60" means no more then 300 updates per second and no more then 3000 updates per minute.  

You can find sample configuration below:

```yaml
server:
  ...
  ws:
    send_timeout: "${TB_SERVER_WS_SEND_TIMEOUT:5000}"
    limits:
      # Limit the amount of sessions and subscriptions available on each server. Put values to zero to disable particular limitation
      max_sessions_per_tenant: "${TB_SERVER_WS_TENANT_RATE_LIMITS_MAX_SESSIONS_PER_TENANT:0}"
      max_sessions_per_customer: "${TB_SERVER_WS_TENANT_RATE_LIMITS_MAX_SESSIONS_PER_CUSTOMER:0}"
      max_sessions_per_regular_user: "${TB_SERVER_WS_TENANT_RATE_LIMITS_MAX_SESSIONS_PER_REGULAR_USER:0}"
      max_sessions_per_public_user: "${TB_SERVER_WS_TENANT_RATE_LIMITS_MAX_SESSIONS_PER_PUBLIC_USER:0}"
      max_queue_per_ws_session: "${TB_SERVER_WS_TENANT_RATE_LIMITS_MAX_QUEUE_PER_WS_SESSION:500}"
      max_subscriptions_per_tenant: "${TB_SERVER_WS_TENANT_RATE_LIMITS_MAX_SUBSCRIPTIONS_PER_TENANT:0}"
      max_subscriptions_per_customer: "${TB_SERVER_WS_TENANT_RATE_LIMITS_MAX_SUBSCRIPTIONS_PER_CUSTOMER:0}"
      max_subscriptions_per_regular_user: "${TB_SERVER_WS_TENANT_RATE_LIMITS_MAX_SUBSCRIPTIONS_PER_REGULAR_USER:0}"
      max_subscriptions_per_public_user: "${TB_SERVER_WS_TENANT_RATE_LIMITS_MAX_SUBSCRIPTIONS_PER_PUBLIC_USER:0}"
      max_updates_per_session: "${TB_SERVER_WS_TENANT_RATE_LIMITS_MAX_UPDATES_PER_SESSION:300:1,3000:60}"
```

### Database rate limits

Although we are limiting users by amount of REST API calls, some of the calls may produce more then one database query. Similar, rule chains may also cause a lot of queries during the message processing. 
Single telemetry upload also causes database queries to write the data to DB.

You can specify the limits for Cassandra DB and you can also specify parameters to print the statistics. For example:

```log
2018-11-29 10:51:25,020 [SockJS-1] INFO  o.t.s.d.n.CassandraBufferedRateExecutor - 
Permits queueSize [0] totalAdded [6395] totalLaunched [6395] totalReleased [6396] totalFailed [0] totalExpired [0] 
totalRejected [0] totalRateLimited [0] totalRateLimitedTenants [0] currBuffer [0]
```  

Optionally, you can specify to print the tenant names that are violating the thresholds.

The *cassandra.query.tenant_rate_limits.configuration* parameter or *CASSANDRA_QUERY_TENANT_RATE_LIMITS_CONFIGURATION* environment property configure maximum amount of queries 
per tenant. For example, value "1000:1,30000:60" means no more then 1000 updates per second and no more then 30000 updates per minute.  


```yaml
# Cassandra driver configuration parameters
cassandra:
  ...
  # Cassandra cluster connection query parameters
  query:
  ...
    rate_limit_print_interval_ms: "${CASSANDRA_QUERY_RATE_LIMIT_PRINT_MS:10000}"
    tenant_rate_limits:
      enabled: "${CASSANDRA_QUERY_TENANT_RATE_LIMITS_ENABLED:false}"
      configuration: "${CASSANDRA_QUERY_TENANT_RATE_LIMITS_CONFIGURATION:1000:1,30000:60}"
      print_tenant_names: "${CASSANDRA_QUERY_TENANT_RATE_LIMITS_PRINT_TENANT_NAMES:false}"
```

### Transport rate limits

It is quite important to be able to limit amount of messages that are accepted from a single device or from all devices per tenant. 
This limit is applied on a transport level, before messages are pushed to the rule engine.  

The *transport.rate_limits.tenant.configuration* parameter or *TB_TRANSPORT_RATE_LIMITS_TENANT* environment property configure maximum amount of messages from all devices per tenant. 
For example, value "1000:1,20000:60" means no more then 1000 messages per second and no more then 20000 updates per minute.  

The *transport.rate_limits.tenant.configuration* parameter or *TB_TRANSPORT_RATE_LIMITS_DEVICE* environment property configure maximum amount of messages from single device. 
For example, value "10:1,300:60" means no more then 10 messages per second and no more then 300 updates per minute.  


```yaml
transport:
...
  rate_limits:
    enabled: "${TB_TRANSPORT_RATE_LIMITS_ENABLED:false}"
    tenant: "${TB_TRANSPORT_RATE_LIMITS_TENANT:1000:1,20000:60}"
    device: "${TB_TRANSPORT_RATE_LIMITS_DEVICE:10:1,300:60}"
```

## Next steps

{% assign currentGuide = "AdvancedFeatures" %}{% include templates/multi-project-guides-banner.md %}
