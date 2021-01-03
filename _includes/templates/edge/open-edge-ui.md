
Once started, you will be able to open ThingsBoard **Edge** UI using the following link [http://localhost:18080](http://localhost:18080).

{% capture local-deployment %}
If in the previous steps you have changed **HTTP_BIND_PORT** please use that instead of 18080 port
```bash
http://localhost:HTTP_BIND_PORT
``` 
{% endcapture %}
{% include templates/info-banner.md content=local-deployment %}

You may use username **tenant@thingsboard.org** and password **tenant** to log in.