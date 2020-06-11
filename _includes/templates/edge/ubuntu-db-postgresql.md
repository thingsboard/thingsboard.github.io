{% capture postgresql-info %}
ThingsBoard team recommends to use PostgreSQL for development and production environments with reasonable load (< 5000 msg/sec).
Many cloud vendors support managed PostgreSQL servers which is a cost-effective solution for most of ThingsBoard instances.
{% endcapture %}
{% include templates/info-banner.md content=postgresql-info %}

##### Step 5.1. PostgreSQL Installation

{% include templates/install/postgres-install-ubuntu.md %}

{% include templates/edge/create-tb-db.md %}

##### Step 5.2. ThingsBoard Edge Configuration

Edit ThingsBoard Edge configuration file 
```bash 
sudo nano /etc/tb-edge/conf/tb-edge.conf
``` 
{: .copy-code}

###### Database configuration
Add the following lines to the configuration file. Don't forget **to replace** "PUT_YOUR_POSTGRESQL_PASSWORD_HERE" with your **real postgres user password**:

```bash
# DB Configuration 
export DATABASE_ENTITIES_TYPE=sql
export DATABASE_TS_TYPE=sql
export SPRING_JPA_DATABASE_PLATFORM=org.hibernate.dialect.PostgreSQLDialect
export SPRING_DRIVER_CLASS_NAME=org.postgresql.Driver
export SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/thingsboard-edge
export SPRING_DATASOURCE_USERNAME=postgres
export SPRING_DATASOURCE_PASSWORD=PUT_YOUR_POSTGRESQL_PASSWORD_HERE
```
{: .copy-code}

###### Add Edge Key and Secret
Add the following lines to the configuration file. 
Don't forget **to replace** "PUT_YOUR_EDGE_KEY_HERE" and "PUT_YOUR_EDGE_SECRET_HERE" with your **real key and secret** from [Step 3](/docs/edge/install/deb-installation/#step-3-get-edge-secret-and-key):
 ```bash
export CLOUD_ROUTING_KEY=PUT_YOUR_EDGE_KEY_HERE
export CLOUD_ROUTING_SECRET=PUT_YOUR_EDGE_SECRET_HERE
```

###### ThingsBoard Edge ports Configuration (optional)
By default, ThingsBoard Edge service has following configuration properties for transports:
 ``` bash
# ThingsBoard default transport ports used by ThingsBoard Edge
CLOUD_RPC_PORT:60100
HTTP_BIND_PORT:8190
MQTT_BIND_PORT:1993
``` 
     
If you want to modify default ports, open ThingsBoard Edge configuration file

```bash 
sudo nano /usr/share/tb-edge/conf/tb-edge.conf
``` 

add following line(s) to the configuration file. 
Don’t forget to replace “PUT_YOUR_EDGES_RPC_PORT_HERE", "PUT_HTTP_PORT_HERE". "PUT_MQTT_PORT_HERE" with the port numbers you want to use

``` bash
export CLOUD_RPC_PORT=PUT_YOUR_EDGES_RPC_PORT_HERE
export HTTP_BIND_PORT=PUT_HTTP_PORT_HERE
export MQTT_BIND_PORT=PUT_MQTT_PORT_HERE
``` 
{: .copy-code}

Write out changes (**Ctrl-O**) and exit from nano editor (**Ctrl-X**).

##### Step 5.3. Configure connection with ThingsBoard Platform (optional)
{% include templates/edge/configure-ports.md %}
