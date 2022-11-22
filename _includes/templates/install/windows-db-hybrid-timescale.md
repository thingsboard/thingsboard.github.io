{% capture hybrid-info %}
ThingsBoard team recommends using Timescale database only for companies that already use TimescaleDB in production.
In this case, ThingsBoard will be storing timeseries data in TimescaleDB Hypertable while continue to use PostgreSQL for main entities (devices/assets/dashboards/customers).  
{% endcapture %}
{% include templates/info-banner.md content=hybrid-info %}

##### PostgreSQL Installation

Download the installation file (PostgreSQL 11.7 or newer releases) [here](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads#windows) and follow the installation instructions.

During PostgreSQL installation, you will be prompted for superuser (postgres) password.
Don't forget this password. It will be used later. For simplicity, we will substitute it with "postgres".

##### Create ThingsBoard Database

Once installed, launch the "pgAdmin" software and login as superuser (postgres). 
Open your server and create database "thingsboard" with owner "postgres".

##### TimescaleDB Installation

{% include templates/install/timescale-windows-install.md %}

##### ThingsBoard Configuration

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

locate "DATABASE_TS_TYPE" parameter. Replace "sql" with "timescale".

```yml
      ts:
        type: "${DATABASE_TS_TYPE:sql}" # cassandra, sql, or timescale (for hybrid mode, DATABASE_TS_TYPE value should be cassandra, or timescale)
    
    # note: timescale works only with postgreSQL database for DATABASE_ENTITIES_TYPE.
```

You can optionally tune parameters that refer to the Timescale DB configuration: "timescale" configuration block inside "sql" configuration block.

```yml
# SQL configuration parameters
sql:
    timescale:
      # Specify Interval size for new data chunks storage.
      chunk_time_interval: "${SQL_TIMESCALE_CHUNK_TIME_INTERVAL:604800000}"
```
