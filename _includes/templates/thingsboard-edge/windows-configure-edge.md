Open the Notepad or other editor as administrator user (right click on the app icon and select "Run as administrator").  
Open the following file for editing (select "All Files" instead of "Text Documents" in file choosing dialog, the encoding is UTF-8):

```text 
C:\Program Files (x86)\tb-edge\conf\tb-edge.yml
``` 
{: .copy-code}

##### Database configuration

In the file "tb-edge.yml" from the previous step locate "# SQL DAO Configuration" block. 

Don't forget to **replace YOUR_POSTGRES_PASSWORD_HERE** with your real postgres user password:

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
    url: "${SPRING_DATASOURCE_URL:jdbc:postgresql://localhost:5432/tb_edge}"
    username: "${SPRING_DATASOURCE_USERNAME:postgres}"
    password: "${SPRING_DATASOURCE_PASSWORD:YOUR_POSTGRES_PASSWORD_HERE}"
``` 
##### Configure cloud connectivity

Locate "cloud" block and replace **PUT_YOUR_EDGE_KEY_HERE** and **PUT_YOUR_EDGE_SECRET_HERE** with Edge **key and secret** respectively. 

Please replace **PUT_YOUR_CLOUD_IP** with an IP address of the machine where ThingsBoard CE/PE version is running. Use **localhost** in case ThingsBoard Edge is running on the same machine where cloud instance is running:
 
```yml
cloud:
    routingKey: "${CLOUD_ROUTING_KEY:PUT_YOUR_EDGE_KEY_HERE}"
    secret: "${CLOUD_ROUTING_SECRET:PUT_YOUR_EDGE_SECRET_HERE}"
    rpc:
      host: "${CLOUD_PRC_HOST:PUT_YOUR_CLOUD_IP}"
```