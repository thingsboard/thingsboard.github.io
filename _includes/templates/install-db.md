ThingsBoard is able to use SQL, NoSQL or hybrid database approach. 
See corresponding architecture [page](/docs/reference/#sql-vs-nosql-vs-hybrid-database-approach) for more details. 

ThingsBoard team recommends to use PostgreSQL for development and production environments with reasonable load (< 5000 msg/sec).
Many cloud vendors support managed PostgreSQL servers which is a cost-effective solution for most of ThingsBoard instances.

However, if you do plan to have 1M+ devices in production, we suggest to use NoSQL database (Cassandra) for storing timeseries data 
while continue to use PostgreSQL for everything else (devices/assets/dashboards/customers).  
 
