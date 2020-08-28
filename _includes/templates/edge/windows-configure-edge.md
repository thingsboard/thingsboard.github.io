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

###### Add edge key and secret

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
