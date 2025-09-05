{% capture tbmq_keystore_files_location %}
**Make sure the keystore files are reachable by TBMQ process:**

* Docker Compose: mount or use existing volume to */config* folder of the container; Use full file path, e.g. */config/keystore.p12*;
* K8S: mount separate volume to */https-config* or similar folder. Use full file path, e.g. */https-config/keystore.p12*.

{% endcapture %}
{% include templates/warn-banner.md content=tbmq_keystore_files_location %}
