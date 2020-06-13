
ThingsBoard Edge supports only PostgreSQL database management system.

##### Step 5.1. PostgreSQL Installation

{% include templates/install/postgres-install-rhel.md %}

{% include templates/edge/create-tb-db-rhel.md %}

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
Don't forget **to replace** "PUT_YOUR_EDGE_KEY_HERE" and "PUT_YOUR_EDGE_SECRET_HERE" with your **real key and secret** from [Step 3](#step-3-get-edge-secret-and-key):
 ```bash
export CLOUD_ROUTING_KEY=PUT_YOUR_EDGE_KEY_HERE
export CLOUD_ROUTING_SECRET=PUT_YOUR_EDGE_SECRET_HERE
```

###### ThingsBoard Edge ports Configuration (optional)
By default, ThingsBoard Edge service has following configurations for transports:

<table>
  <thead>
      <tr>
          <td><b>Environment Variable</b></td><td><b>Default Value</b></td><td><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>CLOUD_RPC_PORT</td>
          <td>60100</td>
          <td>RPC port connects ThingsBoard Edge to ThinsBoard Platform</td>
      </tr>
      <tr>
           <td>HTTP_BIND_PORT</td>
           <td>8190</td>
           <td>HTTP Server bind port</td>
        </tr>
       <tr>
          <td>MQTT_BIND_PORT</td>
          <td>1993</td>
          <td>MQTT Server bind port</td>
      </tr>
  </tbody>
</table>
      
     
If you want to modify default ports, open ThingsBoard Edge configuration file

```bash 
sudo nano /usr/share/tb-edge/conf/tb-edge.conf
``` 

add following line(s) to the configuration file. 
Don’t forget to replace “PUT_EDGES_RPC_PORT_HERE", "PUT_HTTP_PORT_HERE". "PUT_MQTT_PORT_HERE" with the port numbers you want to use

``` bash
export CLOUD_RPC_PORT=PUT_EDGES_RPC_PORT_HERE
export HTTP_BIND_PORT=PUT_HTTP_PORT_HERE
export MQTT_BIND_PORT=PUT_MQTT_PORT_HERE
``` 
{: .copy-code}

Write out changes (**Ctrl-O**) and exit from nano editor (**Ctrl-X**).

##### Step 5.3. Configure connection with ThingsBoard Platform (optional)
{% include templates/edge/configure-ports.md %}
