
* TOC
{:toc}

Since ThingsBoard v2.2, the platform supports microservices deployment mode. 
This article consist of high level diagram, description of data flow between various services and some architecture choices made.       

## Architecture diagram

 <object width="80%" data="https://img.thingsboard.io/reference/msa-architecture.svg"></object> 
  
## Transport Microservices

ThingsBoard provides MQTT, HTTP and CoAP based APIs that are available for your device applications/firmware. 
Each of the protocol APIs are provided by a separate server component and is part of ThingsBoard "Transport Layer". 
The full list of components and corresponding documentation pages are listed below:

* HTTP Transport microservice provides device APIs described [here](/docs/{{docsPrefix}}reference/http-api/); 
* MQTT Transport microservice provides device APIs described [here](/docs/{{docsPrefix}}reference/mqtt-api/)
and also enables gateway APIs described [here](/docs/{{docsPrefix}}reference/gateway-mqtt-api/);
* CoAP Transport microservice provides device APIs described [here](/docs/{{docsPrefix}}reference/coap-api/);
* LwM2M Transport microservice provides device APIs described [here](/docs/{{docsPrefix}}reference/lwm2m-api/).

Each of the transport servers listed above communicates with the main ThingsBoard Node microservices using Kafka. 
[Apache Kafka](https://kafka.apache.org) is a distributed, reliable and scalable persistent message queue and streaming platform.

The messages that are sent to Kafka are serialized using [protocol buffers](https://developers.google.com/protocol-buffers/) 
with the messages definition available [here](https://github.com/thingsboard/thingsboard/blob/master/common/proto/src/main/proto/transport.proto).

**Note**: Starting v2.5, ThingsBoard PE is going to support alternative queue implementation: Amazon DynamoDB. See [roadmap](/docs/{{docsPrefix}}reference/roadmap) for more details.
 
There are two main topics that are used by the transport layer microservices.

First topic "tb.transport.api.requests" is used to execute short-living API requests to check device credentials or create device on behalf of the gateway.
Responses to this requests are sent to the topic that is specific for each transport microservice. The prefix of such "callback" topic is "tb.transport.api.responses" by default.

Second topic "tb.rule-engine" is used to store all incoming telemetry messages from devices until they are not processed by the rule engine. In case the rule engine node(s) are down
, messages will be persisted and available for later processing.

You can see a part of configuration file to specify those properties below:   

```yaml
transport:
  type: "${TRANSPORT_TYPE:local}" # local or remote
  remote:
    transport_api:
      requests_topic: "${TB_TRANSPORT_API_REQUEST_TOPIC:tb.transport.api.requests}"
      responses_topic: "${TB_TRANSPORT_API_RESPONSE_TOPIC:tb.transport.api.responses}"
    rule_engine:
      topic: "${TB_RULE_ENGINE_TOPIC:tb.rule-engine}"
```    

Since ThingsBoard uses very simple communication protocol between transport and core services, 
it is quite easy to implement support of custom transport protocol, for example: CSV over plain TCP, binary payloads over UDP, etc.
We suggest to review existing transports [implementation](https://github.com/thingsboard/thingsboard/tree/master/common/transport/mqtt) to get started or [contact us](/docs/contact-us/) if you need any help.

## Web UI Microservices

ThingsBoard provides a lightweight component written using Express.js framework to host static web ui content. Those components are completely stateless and no much configuration available. 

## JavaScript Executor Microservices

ThingsBoard rule engine allows users to specify custom javascript functions to parse, filter and transform messages. 
Since those functions are user defined, we need to execute them in an isolated context to avoid impact on main processing.
ThingsBoard provides a lightweight component written using Node.js to execute user defined JavaScript functions remotely to isolate them from the core rule engine components.

**Note**: ThingsBoard monolith app executes user defined functions in a java embedded JS engine, which does not allow to isolate resource consumption.    
 
We recommend to launch 20+ separate JavaScript Executors that will allow certain concurrency level and load balancing of JS execution requests. 
Each microservice will subscribe to "js.eval.requests" kafka topic as part of single consumer group to enable load balancing. 
Requests for the same script are forwarded to the same JS executor using built-in Kafka partitioning by key (key is a script/rule node id).

It is possible to define max amount of pending JS execution requests and max request timeout to avoid single JS execution blocking the JS exector microservice.
Each ThingsBoard core service has individual blacklist for JS functions and will not invoke blocked function more then 3(by default) times.

## ThingsBoard Node

ThingsBoard node is a core service written in Java that is responsible for handling:
 
 * [REST API](/docs/{{docsPrefix}}reference/rest-api/) calls;
 * WebSocket [subscriptions](/docs/{{docsPrefix}}user-guide/telemetry/#websocket-api) on entity telemetry and attribute changes;
 * Processing messages via [rule engine](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/re-getting-started/);
 * Monitoring device [connectivity state](/docs/{{docsPrefix}}user-guide/device-connectivity-status/) (active/inactive).
 
**Note**: moving rule engine to a separate microservice is scheduled for ThingsBoard v2.5. See [roadmap](/docs/{{docsPrefix}}reference/roadmap) for more details. 
 
ThingsBoard node uses Actor System to implement tenant, device, rule chains and rule node actors. 
Platform nodes can join the cluster, where each node is equal. Service discovery is done via Zookeeper. 
ThingsBoard nodes route messages between each other using consistent hashing algorithm based on entity id. 
So, messages for the same entity are processed on the same ThingsBoard node. Platform uses [gRPC](https://grpc.io/) to send messages between ThingsBoard nodes.

**Note**: ThingsBoard authors consider moving from gRPC to Kafka in the future releases for exchanging messages between ThingsBoard nodes. 
The main idea is to sacrifice small performance/latency penalties in favor of persistent and reliable message delivery and automatic load balancing provided by Kafka consumer groups. 

## Third-party  

### Kafka

[Apache Kafka](https://kafka.apache.org/) is an open-source stream-processing software platform. ThingsBoard uses Kafka to persist incoming telemetry from HTTP/MQTT/CoAP transpots 
until it is processed by the rule engine. ThingsBoard also uses Kafka for some API calls between micro-services.

### Redis

[Redis](https://redis.io/) is an open source (BSD licensed), in-memory data structure store used by ThingsBoard for caching. 
ThingsBoard caches assets, entity views, devices, device credentials, device sessions and entity relations.

### Zookeeper

[Zookeeper](https://zookeeper.apache.org/) is an open-source server which enables highly reliable distributed coordination. 
ThingsBoard uses Zookeeper to address requests processing from a single entity (device,asset,tenant) to a certain ThingsBoard server 
and guarantee that only one server process data from particular device at a single point in time. 

**Note**: Zookeeper is also used by Kafka, so there was almost no reasons to use two different coordination services (Consul, etcd) in parallel.      

### HAProxy (or other LoadBalancer)

We recommend to use HAProxy for load balancing. 
You can find the reference [haproxy.cfg](https://github.com/thingsboard/thingsboard/blob/release-2.5/docker/haproxy/config/haproxy.cfg) 
configuration that corresponds to the architecture diagram below: 

{% highlight conf %}
#HA Proxy Config
global
 ulimit-n 500000
 maxconn 99999
 maxpipes 99999
 tune.maxaccept 500

 log 127.0.0.1 local0
 log 127.0.0.1 local1 notice

 ca-base /etc/ssl/certs
 crt-base /etc/ssl/private

 ssl-default-bind-ciphers ECDH+AESGCM:DH+AESGCM:ECDH+AES256:DH+AES256:ECDH+AES128:DH+AES:ECDH+3DES:DH+3DES:RSA+AESGCM:RSA+AES:RSA+3DES:!aNULL:!MD5:!DSS
 ssl-default-bind-options no-sslv3

defaults

 log global

 mode http

 timeout connect 5000ms
 timeout client 50000ms
 timeout server 50000ms
 timeout tunnel  1h    # timeout to use with WebSocket and CONNECT

 default-server init-addr none

#enable resolving throught docker dns and avoid crashing if service is down while proxy is starting
resolvers docker_resolver
  nameserver dns 127.0.0.11:53

listen stats
 bind *:9999
 stats enable
 stats hide-version
 stats uri /stats
 stats auth admin:admin@123

listen mqtt-in
 bind *:${MQTT_PORT}
 mode tcp
 option clitcpka # For TCP keep-alive
 timeout client 3h
 timeout server 3h
 option tcplog
 balance leastconn
 server tbMqtt1 tb-mqtt-transport1:1883 check inter 5s resolvers docker_resolver resolve-prefer ipv4
 server tbMqtt2 tb-mqtt-transport2:1883 check inter 5s resolvers docker_resolver resolve-prefer ipv4

frontend http-in
 bind *:${HTTP_PORT}

 option forwardfor

 reqadd X-Forwarded-Proto:\ http

 acl acl_static path_beg /static/ /index.html
 acl acl_static path /
 acl acl_static_rulenode path_beg /static/rulenode/

 acl transport_http_acl path_beg /api/v1/
 acl letsencrypt_http_acl path_beg /.well-known/acme-challenge/

 redirect scheme https if !letsencrypt_http_acl !transport_http_acl { env(FORCE_HTTPS_REDIRECT) -m str true }

 use_backend letsencrypt_http if letsencrypt_http_acl
 use_backend tb-http-backend if transport_http_acl
 use_backend tb-web-backend if acl_static !acl_static_rulenode

 default_backend tb-api-backend

frontend https_in
  bind *:${HTTPS_PORT} ssl crt /usr/local/etc/haproxy/default.pem crt /usr/local/etc/haproxy/certs.d ciphers ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM

  option forwardfor

  reqadd X-Forwarded-Proto:\ https

  acl transport_http_acl path_beg /api/v1/

  acl acl_static path_beg /static/ /index.html
  acl acl_static path /
  acl acl_static_rulenode path_beg /static/rulenode/

  use_backend tb-http-backend if transport_http_acl
  use_backend tb-web-backend if acl_static !acl_static_rulenode

  default_backend tb-api-backend

backend letsencrypt_http
  server letsencrypt_http_srv 127.0.0.1:8080

backend tb-web-backend
  balance leastconn
  option tcp-check
  option log-health-checks
  server tbWeb1 tb-web-ui1:8080 check inter 5s resolvers docker_resolver resolve-prefer ipv4
  server tbWeb2 tb-web-ui2:8080 check inter 5s resolvers docker_resolver resolve-prefer ipv4
  http-request set-header X-Forwarded-Port %[dst_port]

backend tb-http-backend
  balance leastconn
  option tcp-check
  option log-health-checks
  server tbHttp1 tb-http-transport1:8081 check inter 5s resolvers docker_resolver resolve-prefer ipv4
  server tbHttp2 tb-http-transport2:8081 check inter 5s resolvers docker_resolver resolve-prefer ipv4

backend tb-api-backend
  balance leastconn
  option tcp-check
  option log-health-checks
  server tbApi1 tb1:8080 check inter 5s resolvers docker_resolver resolve-prefer ipv4
  server tbApi2 tb2:8080 check inter 5s resolvers docker_resolver resolve-prefer ipv4
  http-request set-header X-Forwarded-Port %[dst_port]
{% endhighlight %}

### Databases

See "[SQL vs NoSQL vs Hybrid?](/docs/{{docsPrefix}}reference/#sql-vs-nosql-vs-hybrid-database-approach)" for more details. 

## Deployment

You can find the reference [docker-compose.yml](https://github.com/thingsboard/thingsboard/blob/release-2.5/docker/docker-compose.yml)
and corresponding [documentation](https://github.com/thingsboard/thingsboard/blob/master/docker/README.md) that will help you to run ThingsBoard containers in a cluster mode 
(although on a single host machine)

TODO: 2.5  

{% highlight yaml %}
version: '3.0'

services:
  zookeeper:
    restart: always
    image: "zookeeper:3.5"
    ports:
      - "2181"
    environment:
      ZOO_MY_ID: 1
      ZOO_SERVERS: server.1=zookeeper:2888:3888;zookeeper:2181
  kafka:
    restart: always
    image: "wurstmeister/kafka"
    ports:
      - "9092:9092"
    env_file:
      - kafka.env
    depends_on:
      - zookeeper
  redis:
    restart: always
    image: redis:4.0
    ports:
      - "6379"
  tb-js-executor:
    restart: always
    image: "${DOCKER_REPO}/${JS_EXECUTOR_DOCKER_NAME}:${TB_VERSION}"
    deploy:
      replicas: 20
    env_file:
      - tb-js-executor.env
    depends_on:
      - kafka
  tb1:
    restart: always
    image: "${DOCKER_REPO}/${TB_NODE_DOCKER_NAME}:${TB_VERSION}"
    ports:
      - "8080"
    logging:
      driver: "json-file"
      options:
        max-size: "200m"
        max-file: "30"
    environment:
      TB_HOST: tb1
      CLUSTER_NODE_ID: tb1
    env_file:
      - tb-node.env
    volumes:
      - ./tb-node/conf:/config
      - ./tb-node/log:/var/log/thingsboard
    depends_on:
      - kafka
      - redis
      - tb-js-executor
  tb2:
    restart: always
    image: "${DOCKER_REPO}/${TB_NODE_DOCKER_NAME}:${TB_VERSION}"
    ports:
      - "8080"
    logging:
      driver: "json-file"
      options:
        max-size: "200m"
        max-file: "30"
    environment:
      TB_HOST: tb2
      CLUSTER_NODE_ID: tb2
    env_file:
      - tb-node.env
    volumes:
      - ./tb-node/conf:/config
      - ./tb-node/log:/var/log/thingsboard
    depends_on:
      - kafka
      - redis
      - tb-js-executor
  tb-mqtt-transport1:
    restart: always
    image: "${DOCKER_REPO}/${MQTT_TRANSPORT_DOCKER_NAME}:${TB_VERSION}"
    ports:
      - "1883"
    environment:
      TB_HOST: tb-mqtt-transport1
      CLUSTER_NODE_ID: tb-mqtt-transport1
    env_file:
      - tb-mqtt-transport.env
    volumes:
      - ./tb-transports/mqtt/conf:/config
      - ./tb-transports/mqtt/log:/var/log/tb-mqtt-transport
    depends_on:
      - kafka
  tb-mqtt-transport2:
    restart: always
    image: "${DOCKER_REPO}/${MQTT_TRANSPORT_DOCKER_NAME}:${TB_VERSION}"
    ports:
      - "1883"
    environment:
      TB_HOST: tb-mqtt-transport2
      CLUSTER_NODE_ID: tb-mqtt-transport2
    env_file:
      - tb-mqtt-transport.env
    volumes:
      - ./tb-transports/mqtt/conf:/config
      - ./tb-transports/mqtt/log:/var/log/tb-mqtt-transport
    depends_on:
      - kafka
  tb-http-transport1:
    restart: always
    image: "${DOCKER_REPO}/${HTTP_TRANSPORT_DOCKER_NAME}:${TB_VERSION}"
    ports:
      - "8081"
    environment:
      TB_HOST: tb-http-transport1
      CLUSTER_NODE_ID: tb-http-transport1
    env_file:
      - tb-http-transport.env
    volumes:
      - ./tb-transports/http/conf:/config
      - ./tb-transports/http/log:/var/log/tb-http-transport
    depends_on:
      - kafka
  tb-http-transport2:
    restart: always
    image: "${DOCKER_REPO}/${HTTP_TRANSPORT_DOCKER_NAME}:${TB_VERSION}"
    ports:
      - "8081"
    environment:
      TB_HOST: tb-http-transport2
      CLUSTER_NODE_ID: tb-http-transport2
    env_file:
      - tb-http-transport.env
    volumes:
      - ./tb-transports/http/conf:/config
      - ./tb-transports/http/log:/var/log/tb-http-transport
    depends_on:
      - kafka
  tb-coap-transport:
    restart: always
    image: "${DOCKER_REPO}/${COAP_TRANSPORT_DOCKER_NAME}:${TB_VERSION}"
    ports:
      - "5683-5688:5683-5688/udp"
    environment:
      TB_HOST: tb-coap-transport
      CLUSTER_NODE_ID: tb-coap-transport
    env_file:
      - tb-coap-transport.env
    volumes:
      - ./tb-transports/coap/conf:/config
      - ./tb-transports/coap/log:/var/log/tb-coap-transport
    depends_on:
      - kafka
  tb-web-ui1:
    restart: always
    image: "${DOCKER_REPO}/${WEB_UI_DOCKER_NAME}:${TB_VERSION}"
    ports:
      - "8080"
    env_file:
      - tb-web-ui.env
  tb-web-ui2:
    restart: always
    image: "${DOCKER_REPO}/${WEB_UI_DOCKER_NAME}:${TB_VERSION}"
    ports:
      - "8080"
    env_file:
      - tb-web-ui.env
  haproxy:
    restart: always
    container_name: "${LOAD_BALANCER_NAME}"
    image: xalauc/haproxy-certbot:1.7.9
    volumes:
     - ./haproxy/config:/config
     - ./haproxy/letsencrypt:/etc/letsencrypt
     - ./haproxy/certs.d:/usr/local/etc/haproxy/certs.d
    ports:
     - "80:80"
     - "443:443"
     - "1883:1883"
     - "9999:9999"
    cap_add:
     - NET_ADMIN
    environment:
      HTTP_PORT: 80
      HTTPS_PORT: 443
      MQTT_PORT: 1883
      FORCE_HTTPS_REDIRECT: "false"
    links:
        - tb1
        - tb2
        - tb-web-ui1
        - tb-web-ui2
        - tb-mqtt-transport1
        - tb-mqtt-transport2
        - tb-http-transport1
        - tb-http-transport2
{% endhighlight %}




    
