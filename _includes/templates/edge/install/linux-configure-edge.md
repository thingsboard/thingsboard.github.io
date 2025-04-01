{% if docsPrefix == 'pe/edge/' %}
{% assign appPrefix = "ThingsBoard PE" %}
{% else %}
{% assign appPrefix = "ThingsBoard" %}
{% endif %}

{% include templates/edge/install/copy-edge-credentials.md %}

Edit the **ThingsBoard Edge** configuration file.

{% if docsPrefix == 'pe/edge/' %}

{% capture tabspec %}tb-edge-install-ubuntu
tb-edge-install-ubuntu-cloud,<div style="text-align:center;">Cloud<br>(North America)</div>,shell,resources/tb-edge-ubuntu-install-usa-cloud.sh,/docs/user-guide/install/pe/edge/resources/tb-edge-ubuntu-install-usa-cloud.sh
tb-edge-install-ubuntu-cloud-eu,<div style="text-align:center;">Cloud<br>(Europe)</div>,shell,resources/tb-edge-ubuntu-install-eu-cloud.sh,/docs/user-guide/install/pe/edge/resources/tb-edge-ubuntu-install-eu-cloud.sh
tb-edge-install-ubuntu-onprem,<div style="text-align:center;">On-Premise<br>(Local host)</div>,shell,resources/tb-edge-ubuntu-install-onprem.sh,/docs/user-guide/install/pe/edge/resources/tb-edge-ubuntu-install-onprem.sh{% endcapture %}
{% include tabs.html %}

{% else %}

{% capture tabspec %}tb-edge-install-ubuntu
tb-edge-install-ubuntu-cloud,Live Demo,shell,resources/tb-edge-ubuntu-install-cloud.sh,/docs/user-guide/install/edge/resources/3.9/tb-edge-ubuntu-install-cloud.sh
tb-edge-install-ubuntu-onprem,On-Premise,shell,resources/tb-edge-ubuntu-install-onprem.sh,/docs/user-guide/install/edge/resources/3.9/tb-edge-ubuntu-install-onprem.sh{% endcapture %}
{% include tabs.html %}

{% endif %}

* **PUT_YOUR_EDGE_KEY_HERE:** Replace with your **actual Edge Key**.
* **PUT_YOUR_EDGE_SECRET_HERE:** Replace with your **actual Edge Secret**.
* **PUT_YOUR_RPC_HOST:**
  * Use **localhost** if the Edge is running on the same machine as the Server instance.
  * Use an **X.X.X.X** IP address if the Edge is connecting to the Server instance in the same network or in a Docker container.

#### Configure PostgreSQL (Optional)

If you changed PostgreSQL default datasource settings, use the following command:

```bash
sudo sh -c 'cat <<EOL >> /etc/tb-edge/conf/tb-edge.conf
export SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/tb_edge
export SPRING_DATASOURCE_USERNAME=postgres
export SPRING_DATASOURCE_PASSWORD=<PUT_YOUR_POSTGRESQL_PASSWORD_HERE>
EOL'
```
{: .copy-code}

* **PUT_YOUR_POSTGRESQL_PASSWORD_HERE:** Replace with your actual **PostgreSQL user password**.