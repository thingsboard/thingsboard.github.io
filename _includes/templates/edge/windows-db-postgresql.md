
ThingsBoard Edge supports only PostgreSQL database management system.

##### Step 5.1. PostgreSQL Installation

Download the installation file (PostgreSQL 9.6+ or newer releases) [here](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads#windows) and follow the installation instructions.

During PostgreSQL installation, you will be prompted for superuser (postgres) password.
Don't forget this password. It will be used later. For simplicity, we will substitute it with "postgres".

##### Step 5.2. ThingsBoard Edge Configuration

###### Create ThingsBoard Edge Database

Once installed, launch the "pgAdmin" software and login as superuser (postgres). 
Open your server and create database "thingsboard-edge" with owner "postgres".

In case you have specified the PostgreSQL superuser password as "postgres", you can skip this step. 

Open the Notepad or other editor as administrator user (right click on the app icon and select "Run as administrator").  
Open the following file for editing (select "All Files" instead of "Text Documents" in file choosing dialog, the encoding is UTF-8):

```text 
C:\Program Files (x86)\thingsboard-edge\conf\thingsboard-edge.yml
``` 
{: .copy-code}


and locate "# SQL DAO Configuration" block. Don't forget to replace "postgres" with your real postgres user password:

```yml
# SQL DAO Configuration
spring:
  data:
    jpa:
      repositories:
        enabled: "true"
  jpa:
    hibernate:
      ddl-auto: "none"
    database-platform: "${SPRING_JPA_DATABASE_PLATFORM:org.hibernate.dialect.PostgreSQLDialect}"
  datasource:
    driverClassName: "${SPRING_DRIVER_CLASS_NAME:org.postgresql.Driver}"
    url: "${SPRING_DATASOURCE_URL:jdbc:postgresql://localhost:5432/thingsboard-edge}"
    username: "${SPRING_DATASOURCE_USERNAME:postgres}"
    password: "${SPRING_DATASOURCE_PASSWORD:YOUR_POSTGRES_PASSWORD_HERE}"
``` 
{: .copy-code}

###### Add Edge Key and Secret

Open configuration file "thingsboard-edge.yml"

```text 
C:\Program Files (x86)\thingsboard-edge\conf\thingsboard-edge.yml
``` 

and add the following lines. 
Don't forget **to replace** "PUT_YOUR_EDGE_KEY_HERE" and "PUT_YOUR_EDGE_SECRET_HERE" with your **real key and secret** from [Step 3](#step-3-get-edge-secret-and-key):
 ```bash
!!!!! export CLOUD_ROUTING_KEY=PUT_YOUR_EDGE_KEY_HERE
!!!!! export CLOUD_ROUTING_SECRET=PUT_YOUR_EDGE_SECRET_HERE
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
      
     
Add following line(s) in the configuration file if you want to modify default ports. 
Don’t forget to replace “PUT_EDGES_RPC_PORT_HERE", "PUT_HTTP_PORT_HERE". "PUT_MQTT_PORT_HERE" with the port numbers you want to use

``` bash
!!!!! export CLOUD_RPC_PORT=PUT_EDGES_RPC_PORT_HERE
!!!!! export HTTP_BIND_PORT=PUT_HTTP_PORT_HERE
!!!!! export MQTT_BIND_PORT=PUT_MQTT_PORT_HERE
``` 
{: .copy-code}

##### Step 5.3. Configure connection with ThingsBoard Platform (optional)
{% include templates/edge/configure-ports-windows.md %}
