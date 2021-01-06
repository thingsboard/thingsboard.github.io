<br>
{% capture local-deployment %}
If during installation process you have changed edge **HTTP_BIND_PORT** please use that instead of 18080 port
```bash
http://localhost:HTTP_BIND_PORT
``` 
{% endcapture %}
{% include templates/info-banner.md content=local-deployment %}