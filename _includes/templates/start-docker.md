- If you would like to create system and demo data and to start Thingsboard node execute next command 
 
```bash
ADD_SCHEMA_AND_SYSTEM_DATA=true ADD_DEMO_DATA=true bash -c 'docker-compose up -d tb'
```
      
- In case you would like to skip creation of system and demo data or you already added and you only need to start Thingsboard node then execute *docker-compose* command 

```bash
docker-compose up -d tb
```