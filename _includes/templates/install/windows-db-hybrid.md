{% capture hybrid-info %}
ThingsBoard team recommends to use Hybrid database approach if you do plan to have 1M+ devices in production or high data ingestion rate (> 5000 msg/sec).
In this case, ThingsBoard will be storing timeseries data in Cassandra while continue to use PostgreSQL for main entities (devices/assets/dashboards/customers).  
{% endcapture %}
{% include templates/info-banner.md content=hybrid-info %}

##### PostgreSQL Installation

Download the installation file (PostgreSQL 12.17 or newer releases) [here](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads#windows) and follow the installation instructions.

During PostgreSQL installation, you will be prompted for superuser (postgres) password.
Don't forget this password. It will be used later. For simplicity, we will substitute it with "postgres".

##### Create ThingsBoard Database

Once installed, launch the "pgAdmin" software and login as superuser (postgres). 
Open your server and create database "thingsboard" with owner "postgres".

##### Cassandra Installation

Instructions listed below will help you to install Cassandra.

- Download DataStax Community Edition v3.0.9
    - [MSI Installer (32-bit)](http://downloads.datastax.com/community/datastax-community-32bit_3.0.9.msi)
    - [MSI Installer (64-bit)](http://downloads.datastax.com/community/datastax-community-64bit_3.0.9.msi)
- Run downloaded MSI package. You are first presented with an initial welcome panel that identifies your installation package:

 ![image](https://img.thingsboard.io/user-guide/install/windows/windows-cassandra-1.png)
 
- Clicking next takes you to the end user license agreement:
 
 ![image](https://img.thingsboard.io/user-guide/install/windows/windows-cassandra-2.png)
 
- The next panel allows you to specify where the software is to be installed:
   
 ![image](https://img.thingsboard.io/user-guide/install/windows/windows-cassandra-3.png)

- Once the installation directory has been set, the installer will ask how you want to handle the service that will be installed:

 ![image](https://img.thingsboard.io/user-guide/install/windows/windows-cassandra-4.png)

- The next panel initiates the installation process:

 ![image](https://img.thingsboard.io/user-guide/install/windows/windows-cassandra-5.png)
 
 ![image](https://img.thingsboard.io/user-guide/install/windows/windows-cassandra-6.png)

- The final panel asks if you would like to register to be updated when new versions of the software become available:

 ![image](https://img.thingsboard.io/user-guide/install/windows/windows-cassandra-7.png)
 
- You can find installed interfaces in "DataStax Community Edition" program group that the installer creates for you:

 ![image](https://img.thingsboard.io/user-guide/install/windows/windows-cassandra-8.png)
 
- The primary interface into Cassandra is the CQL (Cassandra Query Language) shell utility, which can be used to execute CQL commands for the new Cassandra server.

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

locate "DATABASE_TS_TYPE" parameter. Replace "sql" with "cassandra".

```yml
    type: "${DATABASE_TS_TYPE:cassandra}" # cassandra OR sql (for hybrid mode, only this value should be cassandra)
```

You can optionally tune parameters inside "cassandra" configuration block.

```yml
# Cassandra driver configuration parameters
cassandra:
  # Thingsboard cluster name
  cluster_name: "${CASSANDRA_CLUSTER_NAME:Thingsboard Cluster}"
  # Thingsboard keyspace name
  keyspace_name: "${CASSANDRA_KEYSPACE_NAME:thingsboard}"
  # Specify node list
  url: "${CASSANDRA_URL:127.0.0.1:9042}"
  # Enable/disable secure connection
  ssl: "${CASSANDRA_USE_SSL:false}"
  # Enable/disable JMX
  jmx: "${CASSANDRA_USE_JMX:true}"
  # Enable/disable metrics collection.
  metrics: "${CASSANDRA_DISABLE_METRICS:true}"
  # NONE SNAPPY LZ4
  compression: "${CASSANDRA_COMPRESSION:none}"
  # Specify cassandra cluster initialization timeout in milliseconds (if no hosts available during startup)
  init_timeout_ms: "${CASSANDRA_CLUSTER_INIT_TIMEOUT_MS:300000}"
  # Specify cassandra claster initialization retry interval (if no hosts available during startup)
  init_retry_interval_ms: "${CASSANDRA_CLUSTER_INIT_RETRY_INTERVAL_MS:3000}"
  max_requests_per_connection_local: "${CASSANDRA_MAX_REQUESTS_PER_CONNECTION_LOCAL:32768}"
  max_requests_per_connection_remote: "${CASSANDRA_MAX_REQUESTS_PER_CONNECTION_REMOTE:32768}"
  # Credential parameters #
  credentials: "${CASSANDRA_USE_CREDENTIALS:false}"
  # Specify your username
  username: "${CASSANDRA_USERNAME:}"
  # Specify your password
  password: "${CASSANDRA_PASSWORD:}"
```

