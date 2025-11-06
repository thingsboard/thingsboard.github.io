
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
image: /images/devices-library/edge/paspberry-pi/1-raspi-config-interface-options.webp,
title: Go to **Interface Options** and press **Enter** to select it.
===
image: /images/devices-library/edge/paspberry-pi/2-raspi-config-enable-ssh.webp,
title: Select the **"Enable/disable remote command line access using SSH"** option and press Enter.
===
image: /images/devices-library/edge/paspberry-pi/3-raspi-config-confirm-enable-ssh.webp,
title: Select **Yes** to confirm that the SSH server is to be enabled
===
image: /images/devices-library/edge/paspberry-pi/4-raspi-config-ssh-server-enabled-ok.webp,
title: A confirmation message should appear indicating that the **SSH server is enabled**.
===
image: /images/devices-library/edge/paspberry-pi/5-raspi-config-finish.webp,
title: Select **Finish** and close the program.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=raspi-config %}