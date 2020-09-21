###### Create ThingsBoard Edge Database

Once installed, launch the "pgAdmin" software and login as superuser (postgres). 
Open your server and create database **thingsboard_edge** with owner "postgres".

###### ThingsBoard Edge Configuration



Open the Notepad or other editor as administrator user (right click on the app icon and select "Run as administrator"). Open the following file for editing (select "All Files" instead of "Text Documents" in file choosing dialog, the encoding is UTF-8):

```text 
C:\Program Files (x86)\tb-edge\conf\tb-edge.yml
``` 
{: .copy-code}

###### Database configuration

In the file "tb-edge.yml" from the previous step locate "# SQL DAO Configuration" block. 

Don't forget to **replace YOUR_POSTGRES_PASSWORD_HER** with your real postgres user password:

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
    url: "${SPRING_DATASOURCE_URL:jdbc:postgresql://localhost:5432/thingsboard_edge}"
    username: "${SPRING_DATASOURCE_USERNAME:postgres}"
    password: "${SPRING_DATASOURCE_PASSWORD:YOUR_POSTGRES_PASSWORD_HERE}"
``` 
{: .copy-code}

###### Add edge key and secret

Locate "cloud" block and replace **PUT_YOUR_EDGE_KEY_HERE** and **PUT_YOUR_EDGE_SECRET_HERE** with your **real credentials** from [Step 3](#step-3-create-edge-and-get-credentials):
 
```bash
cloud:
    routingKey: "${CLOUD_ROUTING_KEY:PUT_YOUR_EDGE_KEY_HERE}"
    secret: "${CLOUD_ROUTING_SECRET:PUT_YOUR_EDGE_SECRET_HERE}"
```
