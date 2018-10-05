- locate the following lines:

prior **2.1.1** version:

```
   database:
     type: "${DATABASE_TYPE:sql}" # cassandra OR sql
```

- change ```database.type``` value from ```sql``` to ```cassandra```:

```
   database:
     type: "${DATABASE_TYPE:cassandra}" # cassandra OR sql
```


after **2.1.1** version:

```
database:
  entities:
    type: "${DATABASE_ENTITIES_TYPE:sql}" # cassandra OR sql
  ts:
    type: "${DATABASE_TS_TYPE:sql}" # cassandra OR sql (for hybrid mode, only this value should be cassandra)
```
 
- change ```database.entities.type``` value from ```sql``` to ```cassandra``` and ```database.ts.type``` value from ```sql``` to ```cassandra```:

```
database:
  entities:
    type: "${DATABASE_ENTITIES_TYPE:cassandra}" # cassandra OR sql
  ts:
    type: "${DATABASE_TS_TYPE:cassandra}" # cassandra OR sql (for hybrid mode, only this value should be cassandra)
```