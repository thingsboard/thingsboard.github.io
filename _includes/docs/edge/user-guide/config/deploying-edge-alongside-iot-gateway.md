* TOC
{:toc}

The [ThingsBoard Edge](/docs/{{docsPrefix}}getting-started-guides/what-is-edge/){: target="_blank"} can be run alongside the [ThingsBoard IoT Gateway](/docs/iot-gateway/what-is-iot-gateway/){: target="_blank"}. 
This approach can create a robust, decentralized IoT architecture due to **Edge's** ability to process data at its source and **IoT Gateway's** extended list of communication protocols.

## How Does It Work?

**ThingsBoard IoT Gateway** collects data locally, translates it into the [ThingsBoard-compatible communication protocols](/docs/{{peDocsPrefix}}edge/api/){: target="_blank"}, and transmits it to the **ThingsBoard Edge**.
The [Rule Engine](/docs/{{peDocsPrefix}}user-guide/rule-engine-2-0/re-getting-started/){: target="_blank"} processes the data in real time, enabling immediate visualizations and event responses. Summarised or aggregated data can be sent to the central server for analysis if required.

![image](/images/edge/how-does-it-work.webp){: style="display: block; margin: auto; max-width: 600px; max-height: 600px"}

{% capture local-deployment %}
When deployed in remote locations with unreliable internet connections, **Edge** continues operating until connectivity is restored.
{% endcapture %}
{% include templates/info-banner.md content=local-deployment %}

## Prerequisites
* Have [Docker](https://docs.docker.com/engine/install/){: target="_blank"} installed
* The **ThingsBoard Cloud** Account (Demo, Professional edition, or Community edition)
* Any Linux-based **IoT Gateway** device

## Step 1. Creating a New Edge Instance

{% include images-gallery.html imageCollection="startEdge" showListImageTitles="true" %}

## Step 2. Installing Edge on the Gateway Device

To install the **Edge instance** on the **IoT Gateway** device, initiate the **SSH (Secure Shell)** connection to the **device** through the terminal:

```bash
ssh username@ip_address
```
{: .copy-code}

* **username:** Enter the actual username with access to the Gateway device;
* **ip_address:** Enter the actual IP address of the Gateway device;
* **password:** The terminal will request the authentication credentials.

{% capture local-deployment %}
If the **SSH** server runs on a non-default port, specify it with the **-p** command.<br>
Example: _ssh -p 2222 username@ip_address_
{% endcapture %}
{% include templates/info-banner.md content=local-deployment %}

Once connected, create a new directory:

```bash
mkdir tb_edge
```
{: .copy-code}

Create a docker-compose file for the **ThingsBoard Edge** service within this directory:

```bash
nano docker-compose.yml
```
{: .copy-code}

Configure this file:

{% include images-gallery.html imageCollection="copyYml" showListImageTitles="true" %}

To run the **Edge instance** on the **IoT Gateway device**, execute the following commands:

```bash
docker compose up -d
docker compose logs -f mytbedge
```
{: .copy-code}

{% capture local-deployment %}
The command must be executed in the same directory in which the **docker-compose.yml** file is saved.
{% endcapture %}
{% include templates/info-banner.md content=local-deployment %}

To configure a **local port forwarding via SSH**, open **another terminal tab** and execute the following command:

```bash
ssh -N -L 8080:127.0.0.1:8080 username@ip_address
```
{: .copy-code}

* **8080:** The port on your local machine;
* **127.0.0.1:** The target remote host accessible by the IoT Gateway device;
* **8080:** The port to access the IoT Gateway device.
* **username:** Enter the actual username with access to the Gateway device;
* **ip_address:** Enter the actual IP address of the Gateway device;

Any connection to **localhost:8080** on your local machine will be forwarded to **127.0.0.1:8080** on the **IoT Gateway device**. The **ThingsBoard Edge** instance is available at [**http://127.0.0.1:8080**](http://127.0.0.1:8080){: target="_blank"}. Use your credentials to log in.

## Step 3. Provisioning the ThingsBoard IoT Gateway on Edge

To provision the **ThingsBoard Gateway** on **Edge** instance:

{% include images-gallery.html imageCollection="provisionGW" showListImageTitles="true" %}

## Step 4. Installing the ThingsBoard IoT Gateway Software on the Gateway Device

Once the **docker-compose.yml** file has been downloaded, open the terminal and initiate the **SSH** connection to the **IoT Gateway device**:

```bash
ssh username@ip_address
```
{: .copy-code}

* **username:** Enter the actual username with access to the Gateway device;
* **ip_address:** Enter the actual IP address of the Gateway device;
* **password:** The terminal will request the authentication credentials.

To install **ThingsBoard IoT Gateway**, create a new directory:

```bash
mkdir iot_gateway
```
{: .copy-code}

Create the docker-compose file for your **ThingsBoard IoT Gateway** within this directory:

```bash
nano docker-compose.yml
```
{: .copy-code}

Copy the content of the previously downloaded **docker-compose.yml** file and paste it into the new one via the terminal:

{% include images-gallery.html imageCollection="copyPasteYml" %}

Save the changes in the **docker-compose.yml** file. To close it, press **CTRL+X**.

To start the **ThingsBoard IoT Gateway**, execute the following command in the terminal:

```bash
docker compose up -d
docker compose logs -f
```
{: .copy-code}

Once the **ThingsBoard Edge** and **ThingsBoard IoT Gateway** are running on the **IoT Gateway device**, you can connect IoT devices and sensors to transfer data. Read [this real-life example of visualizing data from IoT devices on a Dashboard](/docs/{{docsPrefix}}device-library/recomputer-r1000/#visualize-incoming-data-with-the-dashboard){: target="_blank"} when **ThingsBoard Edge** and **Gateway** are deployed on the same **IoT Gateway device**. 

## Next Steps

{% include templates/edge/guides-banner-edge.md %}