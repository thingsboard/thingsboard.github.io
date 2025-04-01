* TOC
{:toc}

### Overview

Installing **Edge** behind a [proxy](https://en.wikipedia.org/wiki/Proxy_server){: target="_blank"} means that the **Edge** instance cannot directly access the internet and all communication to **ThingsBoard Cloud** or any other external service is routed through a **proxy server**.

Compare:
* **Without Proxy** (direct connection):

![Without Proxy](https://img.thingsboard.io/edge/config/edge-behind-proxy/without-proxy.webp){: style="max-width: 400px"}

* **With Proxy** (indirect connection):

![With Proxy](https://img.thingsboard.io/edge/config/edge-behind-proxy/with-proxy.webp){: style="max-width: 575px"}

Using a proxy server allows enhancing security by filtering and monitoring internet traffic. In restricted environments, direct internet access is often deliberately blocked, making proxy configurations a necessity for maintaining security protocols. 

Beyond security, proxies can cache resources that can substantially reduce overall network consumption and improve performance for distributed systems like ThingsBoard Edge.

### The Installation Guide

{% capture contenttogglespecqueue %}
Debian-based installation%,%deb%,%templates/edge/user-guide/deb-edge-behind-proxy.md%br%
Docker-based installation%,%docker%,%templates/edge/user-guide/docker-edge-behind-proxy.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="edgeBehindProxy" toggle-spec=contenttogglespecqueue %}  