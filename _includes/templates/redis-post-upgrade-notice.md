{% capture redis-notice %}
If you use Redis for caching, you need to flush all stored keys before starting the ThingsBoard.

Connect to your Redis instance (or container/pod, depending on your setup) and run the command: 

`redis-cli flushall`
{% endcapture %}
{% include templates/info-banner.md content=redis-notice %}

