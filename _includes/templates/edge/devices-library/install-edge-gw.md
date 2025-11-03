{% include /templates/edge/user-guide/starting-edge-on-device.md %}

To proceed with the **Edge installation** on the **{{deviceName}}**, you need to initiate an **SSH (Secure Shell)** connection.

{% if page.url contains "raspberry-pi" %}
{% include /templates/edge/devices-library/rpi-enable-ssh.md %}
{% endif %}

To initiate an **SSH (Secure Shell)** connection to the **{{deviceName}}**, open the Terminal and run the following command:

```bash
ssh {{userName}}@ip_address #Enter the actual IP address
```
{: .copy-code}

**ip_address:** Replace "_ip_address_" with the actual IP address of the **{{deviceName}}**.<br>
**Password:** The Terminal will request the password. {% if page.url contains "raspberry-pi" %}_The default password is `raspberry`._{% endif %}
{% if page.url contains "nvidia" %}_The default password is `nvidia`._{% endif %}

Once connected, follow the installation instructions below. Start by creating a new directory:

```bash
mkdir tb_edge
```
{: .copy-code}

Open this directory:

```bash
cd /home/{{userName}}/tb_edge
```
{: .copy-code}

{% include /templates/edge/user-guide/preset-edge-config-for-docker.md %}

To set up a local port forwarding via SSH, open **another terminal tab** and run the following command:

```bash
ssh -N -L 8080:127.0.0.1:8080 {{userName}}@ip_address #Enter the actual IP address
```
{: .copy-code}

Any connection to **localhost:8080** on your local machine will be forwarded to **127.0.0.1:8080** on the **{{deviceName}}**.

The **ThingsBoard Edge** instance is available at [**http://127.0.0.1:8080**](http://127.0.0.1:8080){: target="_blank"}. Use your credentials to log in.
