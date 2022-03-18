{% capture redis-notice %}
If you use Redis for caching, you need to flush all stored keys before starting the ThingsBoard.

Connect to your Redis instance (or container/pod, depending on your setup) and run the command: 

`redis-cli flushall`

Please note that this command is applicable only if you use Redis exclusively for ThingsBoard. If other applications use Redis, you need to locate the ThingsBoard database and flush only that. The default database index is 0, configurable with REDIS_DB <a style="pointer-events: all;" href="/docs/user-guide/install/config/">ThingsBoard environment value</a>.

`redis-cli`

`select 0`

`flushdb`
 
{% endcapture %}
{% include templates/info-banner.md content=redis-notice %}

