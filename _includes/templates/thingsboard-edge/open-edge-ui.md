
Once started, you will be able to open ThingsBoard Edge Web UI using the following link:
```bash
http://localhost:8080
```
{: .copy-code}

{% capture local-deployment %}
If in the previous steps you have changed **HTTP_BIND_PORT** please use that instead of 8080 port
```bash
http://localhost:HTTP_BIND_PORT
``` 
{% endcapture %}
{% include templates/info-banner.md content=local-deployment %}

Please use **tenant administrator** credentials to login to ThingsBoard Edge UI in case Edge connected to **ThingsBoard CE**.

If ThingBoard Edge connected to **ThingsBoard PE** please use credentials of the **user(s)** that were assigned to the Edge during Edge **provisioning**.
