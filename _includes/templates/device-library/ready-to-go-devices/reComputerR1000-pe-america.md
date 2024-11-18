### Prerequisites

To continue with this guide, we will require the following:  
* [reComputer R1000](https://wiki.seeedstudio.com/recomputer_r/)
* Modbus Controller (in our case, [Siemens LOGO!](https://www.siemens.com/ua/uk/produkty/avtomatyzatsiya-promyslovosti/systemy-avtomatyzatsiyi/systemy-promyslovoyi-avtomatyzatsiyi-simatic/plc-kontrolery-simatic/lohichnyy-modul-logo.html){: target="_blank"})
* [Docker](https://docs.docker.com/engine/install/){: target="_blank"} installed
* [ThingsBoard Cloud account](https://thingsboard.cloud/signup){: target="_blank"} or the **ThingsBoard Professional Edition** server [on-premises](/docs/user-guide/install/pe/installation-options/){: target="_blank"} as an alternative.

#### Step 1. Starting the ThingsBoard Edge on the reComputer R1000

Create a new **Edge instance**:

{% assign startEdgePE = '
    ===
        image: https://img.thingsboard.io/devices-library/edge/recomputer-r1000/0.1-cloud-instances-section-pe.webp,
        title: Log in to the [ThingsBoard Cloud account](https://thingsboard.cloud/signup){: target="_blank"} and navigate to the **Edge Management > Instances** section. Click the **“+”** icon in the top right corner and select the **“Add new edge”** option.
    ===
        image: https://img.thingsboard.io/devices-library/edge/recomputer-r1000/0.2-add-new-edge-pe.webp,
        title: Enter a name for your Edge in the **"Name"** field, e.g., R1000 Demo Edge, and click the **"Add"** button to confirm the addition of your new Edge.
    ===
        image: https://img.thingsboard.io/devices-library/edge/recomputer-r1000/0.3-done-pe.webp,
        title: Your new **Edge instance** is displayed at the top of the list, as entries are sorted by creation time by default.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=startEdgePE %}

Proceed with the installation of the **Edge instance** on the **reComputer R1000**:

* To initiate an **SSH (Secure Shell)** connection to the **reComputer R1000**, open the terminal and execute the following command:

```bash
ssh recomputer@ip_address #Enter the actual IP address
```
{: .copy-code}

**ip_address:** The IP address of the reComputer R1000. Enter the actual IP address instead of _ip_address_.<br>
**Password:** Terminal requests the password. _The default password for the reComputer R1000 is: 12345678_

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

* Create a docker compose file for the **ThingsBoard Edge** service within this directory:

```bash
nano docker-compose.yml
```
{: .copy-code}

To configure this file properly:

{% assign copyYmlPE = '
    ===
        image: https://img.thingsboard.io/devices-library/edge/recomputer-r1000/0.4-instrucrions-button-pe.webp,
        title: Go to the **Edge management > Instances** section of your ThingsBoard Demo account, and click on the **Instance** itself. Then, click the **"Install & Connect Instructions"** button.
    ===
        image: https://img.thingsboard.io/devices-library/edge/recomputer-r1000/0.5-docker-pe.webp,
        title: On the **"Install & Connect Instructions"** pop-up window, select the **"Docker"** tab and copy the configuration lines.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=copyYmlPE %}

* Insert the copied lines into the **docker-compose.yml** file and press **CTRL+S** to save it. To close the file press **CTRL+X**.

* Execute the following commands:

```bash
docker compose up -d
docker compose logs -f mytbedge
```
{: .copy-code}

{% capture local-deployment %}
The command must be executed in the same directory in which the docker-compose.yml file was saved.
{% endcapture %}
{% include templates/info-banner.md content=local-deployment %}

* To set up a local port forwarding via SSH, open **another terminal tab** and execute the following command:

```bash
ssh -N -L 8080:127.0.0.1:8080 recomputer@ip_address #Enter the actual IP address
```
{: .copy-code}

Any connection to **localhost:8080** on your local machine will be forwarded to **127.0.0.1:8080** on the **reComputer R1000**.

* The **ThingsBoard Edge** instance is available at [**http://127.0.0.1:8080**](http://127.0.0.1:8080){: target="_blank"}. Use your credentials to log in.

#### Step 2. Provisioning the ThingsBoard IoT Gateway on Edge

To provision the **ThingsBoard Gateway**:

{% assign iotGWdashboardPE = '
    ===
        image: https://img.thingsboard.io/devices-library/edge/recomputer-r1000/1.1-create-group-pe.webp,
        title: Log in to the [ThingsBoard Cloud account](https://thingsboard.cloud/signup){: target="_blank"}, navigate to the **Dashboards** section and select the **"Group"** tab. Click the **"+"** icon to add a new group. In the **"Add entity group"** pop-up window, enter the group name in the **"Name"** field and click the **"Add"** button.
    ===
        image: https://img.thingsboard.io/devices-library/edge/recomputer-r1000/1.2-click-details-dashboard-pe.webp,
        title: Then, select the **"All"** tab and find the **"ThingsBoard IoT Gateways"** dashboard. The **"ThingsBoard IoT Gateways"** dashboard is one of the pre-created, out-of-the-box dashboards available. Click the **"Dashboard details"** button.
    ===
        image: https://img.thingsboard.io/devices-library/edge/recomputer-r1000/1.3-manage-owners-pe.webp,
        title: On the **"Dashboard details"** page click the **"Manage owner and groups"** button.
    ===
        image: https://img.thingsboard.io/devices-library/edge/recomputer-r1000/1.4-select-group-pe.webp,
        title: In the **"Manage owner and groups"** pop-up window, select the newly created group from the **"Groups"** drop-down menu. Click the **"Update"** button.
    ===
        image: https://img.thingsboard.io/devices-library/edge/recomputer-r1000/1-instances-section-pe.webp,
        title: Navigate to the **Edge Management > Instances** section, then click the **“Manage edge dashboard groups”** button.
    ===
        image: https://img.thingsboard.io/devices-library/edge/recomputer-r1000/2-assign-dashboard-pe.webp,
        title: On the **“Dashboard groups”** page, click the **“+”** icon to assign the newly created group to the Edge instance. Click the **“Assign”** button. The group and all dashboard within it will be assigned to the Edge instance.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=iotGWdashboardPE %}

{% assign localhostPE = '
    ===
        image: https://img.thingsboard.io/devices-library/edge/recomputer-r1000/3-login-to-edge-pe.webp,
        title: Open your **Edge instance**, navigate to the **Dashboards** section and open the **“ThingsBoard IoT Gateways”** dashboard.
    ===
        image: https://img.thingsboard.io/devices-library/edge/recomputer-r1000/4-add-gw-pe.webp,
        title: Click the **“+”** icon in the upper right corner to add a new gateway. Enter the gateway name in the **“Name”** field, and select the **“default”** device profile. Click the **“Create”** button.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=localhostPE %}



