{% capture pem_files_location %}
**Make sure the certificate files are reachable by ThingsBoard process:**

* Linux: use */etc/thingsboard/conf* folder. Make sure the files have same permissions as *thingsboard.conf*; Use relative file path, e.g. *server.pem*;
* Docker Compose: mount or use existing volume to */config* folder of the container; Use full file path, e.g. */config/server.pem*;
* K8S: mount separate volume to */https-config* or similar folder. Use full file path, e.g. */https-config/server.pem*;
* Windows: use *C:\Program Files (x86)\thingsboard\conf\\* folder. Make sure the files have same permissions as *thingsboard.conf*; Use relative file path, e.g. *server.pem*;

{% endcapture %}
{% include templates/warn-banner.md content=pem_files_location %}