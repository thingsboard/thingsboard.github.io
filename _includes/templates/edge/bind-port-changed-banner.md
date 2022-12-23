{% capture local-deployment %}
Use next **Edge** UI URL if during installation process you set **HTTP_BIND_PORT** to **18080**:

**http://localhost:18080**

{% endcapture %}
{% include templates/info-banner.md content=local-deployment %}