prior **2.1.2** version:

```text
database:
  type: "${DATABASE_TYPE:cassandra}" # cassandra OR sql
``` 

after **2.1.2** version:
 
```text
database:
  entities:
    type: "${DATABASE_ENTITIES_TYPE:cassandra}" # cassandra OR sql
  ts:
    type: "${DATABASE_TS_TYPE:cassandra}" # cassandra OR sql (for hybrid mode, only this value should be cassandra)
```