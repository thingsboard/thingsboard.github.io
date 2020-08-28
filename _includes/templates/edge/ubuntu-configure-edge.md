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

###### Add edge key and secret
Add the following lines to the configuration file. 
Don't forget **to replace** "PUT_YOUR_EDGE_KEY_HERE" and "PUT_YOUR_EDGE_SECRET_HERE" with your **real key and secret** from [Step 3](#step-3-create-edge-and-get-credentials):
 ```bash
export CLOUD_ROUTING_KEY=PUT_YOUR_EDGE_KEY_HERE
export CLOUD_ROUTING_SECRET=PUT_YOUR_EDGE_SECRET_HERE
```
