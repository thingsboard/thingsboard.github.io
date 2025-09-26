{% include /templates/edge/user-guide/starting-edge-on-device.md %}

To proceed with the **Edge installation** on the **{{deviceName}}**, you need to initiate an **SSH (Secure Shell)** connection.

{% if page.url contains "raspberry-pi" %}

For security reasons, **SSH** is disabled by default on all **Raspberry Pi** devices.
You need to enable it to continue.
If you have a monitor and keyboard connected, you can enable **SSH** during storage device setup, via the GUI, or in the Terminal.

To enable **SSH** in the Terminal, run: 

```bash
sudo raspi-config
```
{: .copy-code}

On the **Raspberry Pi Software Configuration Tool (raspi-config)** page:

{% assign raspi-config = '
    ===
        image: https://img.thingsboard.io/devices-library/edge/paspberry-pi/1-raspi-config-interface-options.webp,
        title: Go to **Interface Options** and press **Enter** to select it.
    ===
        image: https://img.thingsboard.io/devices-library/edge/paspberry-pi/2-raspi-config-enable-ssh.webp,
        title: Select the **"Enable/disable remote command line access using SSH"** option and press Enter.
    ===
        image: https://img.thingsboard.io/devices-library/edge/paspberry-pi/3-raspi-config-confirm-enable-ssh.webp,
        title: Select **Yes** to confirm that the SSH server is to be enabled
    ===
        image: https://img.thingsboard.io/devices-library/edge/paspberry-pi/4-raspi-config-ssh-server-enabled-ok.webp,
        title: A confirmation message should appear indicating that the **SSH server is enabled**.
    ===
        image: https://img.thingsboard.io/devices-library/edge/paspberry-pi/5-raspi-config-finish.webp,
        title: Select **Finish** and close the program.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=raspi-config %}

{% endif %}

To initiate an **SSH (Secure Shell)** connection to the **{{deviceName}}**, open the Terminal and run the following command:

```bash
ssh {{userName}}@ip_address #Enter the actual IP address
```
{: .copy-code}

**ip_address:** Replace "_ip_address_" with the actual IP address of the **{{deviceName}}**.<br>
**Password:** The Terminal will request the password. {% if page.url contains "raspberry-pi" %}_The default password is `raspberry`._{% endif %}

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
