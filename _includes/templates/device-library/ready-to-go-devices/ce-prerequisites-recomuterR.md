### Prerequisites

{% include /templates/edge/devices-library/prerequisites-ce.md %}

### Starting Edge on the {{deviceName}} 

{% include /templates/edge/user-guide/starting-edge-on-device.md %}

Proceed with the installation of the **Edge instance** on the **{{deviceName}}**:

* To initiate an **SSH (Secure Shell)** connection to the **{{deviceName}}**, open the terminal and execute the following command:

```bash
ssh recomputer@ip_address #Enter the actual IP address
```
{: .copy-code}

**ip_address:** The IP address of the {{deviceName}}. Enter the actual IP address instead of _ip_address_.<br>
**Password:** Terminal requests the password. _The **default password** for the {{deviceName}} is: 12345678_

* Once connected, you can follow the installation instructions below. Start by creating a new directory:

```bash
mkdir tb_edge
```
{: .copy-code}

* Open this directory:

```bash
cd /home/recomputer/tb_edge
```
{: .copy-code}

{% include /templates/edge/user-guide/preset-edge-config-for-docker.md %}

* To set up a local port forwarding via SSH, open **another terminal tab** and execute the following command:

```bash
ssh -N -L 8080:127.0.0.1:8080 recomputer@ip_address #Enter the actual IP address
```
{: .copy-code}

Any connection to **localhost:8080** on your local machine will be forwarded to **127.0.0.1:8080** on the **{{deviceName}}**.

* The **ThingsBoard Edge** instance is available at [**http://127.0.0.1:8080**](http://127.0.0.1:8080){: target="_blank"}. Use your credentials to log in.

### Provisioning the ThingsBoard IoT Gateway on Edge

{% include /templates/edge/user-guide/deploying-gw.md %}