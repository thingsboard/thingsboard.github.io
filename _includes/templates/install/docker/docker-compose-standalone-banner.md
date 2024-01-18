{% capture dockerComposeStandalone %}
ThingsBoard supports Docker Compose V2 (Docker Desktop or Compose plugin) starting from **3.4.2** release, because **docker-compose** as standalone setup is no longer supported by Docker.
<br><br>We **strongly** recommend to update to Docker Compose V2 and use it.
<br><br>If you still rely on using Docker Compose as docker-compose (with a hyphen), then please execute the following commands to start ThingsBoard:
<br>**docker-compose up -d**
<br>**docker-compose logs -f my{{serviceName}}**

{% endcapture %}
{% include templates/info-banner.md content=dockerComposeStandalone %}