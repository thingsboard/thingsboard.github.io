{% capture postgresql-info %}
ThingsBoard team recommends to use PostgreSQL for development and production environments with reasonable load (< 5000 msg/sec).
Many cloud vendors support managed PostgreSQL servers which is a cost-effective solution for most of ThingsBoard instances.
{% endcapture %}
{% include templates/info-banner.md content=postgresql-info %}

##### PostgreSQL Installation

Download the installation file (PostgreSQL 11.7 or newer releases) [here](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads#windows) and follow the installation instructions.

During PostgreSQL installation, you will be prompted for superuser (postgres) password.
Don't forget this password. It will be used later. For simplicity, we will substitute it with "postgres".

##### Create ThingsBoard Database

Once installed, launch the "pgAdmin" software and login as superuser (postgres). 
Open your server and create database "thingsboard" with owner "postgres".

##### ThingsBoard Configuration

In case you have specified the PostgreSQL superuser password as "postgres", you can skip this step. 

Open the Notepad or other editor as administrator user (right click on the app icon and select "Run as administrator").  
Open the following file for editing (select "All Files" instead of "Text Documents" in file choosing dialog, the encoding is UTF-8):

```text 
C:\Program Files (x86)\thingsboard\conf\thingsboard.yml
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
    open-in-view: "false"
    hibernate:
      ddl-auto: "none"
  datasource:
    driverClassName: "${SPRING_DRIVER_CLASS_NAME:org.postgresql.Driver}"
    url: "${SPRING_DATASOURCE_URL:jdbc:postgresql://localhost:5432/thingsboard}"
    username: "${SPRING_DATASOURCE_USERNAME:postgres}"
    password: "${SPRING_DATASOURCE_PASSWORD:YOUR_POSTGRES_PASSWORD_HERE}"
    hikari:
      maximumPoolSize: "${SPRING_DATASOURCE_MAXIMUM_POOL_SIZE:5}"
``` 
{: .copy-code}

locate "SQL_POSTGRES_TS_KV_PARTITIONING" parameter in order to override the default value for timestamp key-value storage partitioning size:

```yml
    sql:
      postgres:
        # Specify partitioning size for timestamp key-value storage. Example: DAYS, MONTHS, YEARS, INDEFINITE.
        ts_key_value_partitioning: "${SQL_POSTGRES_TS_KV_PARTITIONING:MONTHS}"
```