## Prerequisites

You will need to have ThingsBoard server up and running.
The easiest way is to use [Live Demo](https://demo.thingsboard.io/signup) server.

The alternative option is to install ThingsBoard using [Installation Guide](/docs/user-guide/install/installation-options/).
**Windows** users should follow this [guide](/docs/user-guide/install/docker-windows/). **Linux** users that have docker installed should execute the following commands:

```
mkdir -p ~/.mytb-data && sudo chown -R 799:799 ~/.mytb-data
mkdir -p ~/.mytb-logs && sudo chown -R 799:799 ~/.mytb-logs
docker run -it -p 8080:9090 -p 1883:1883 -p 5683:5683/udp -v ~/.mytb-data:/data \
-v ~/.mytb-logs:/var/log/thingsboard --name mytb --restart always thingsboard/tb-postgres

``` 
{: .copy-code}

These commands install ThingsBoard and load demo data and accounts.

ThingsBoard UI will be available using the URL: [http://localhost:8080](http://localhost:8080).
You may use username **tenant@thingsboard.org** and password **tenant**.
More info about demo accounts is available [here](/docs/samples/demo-account/). 

In order to use ThingsBoard Edge you will need to have ThingsBoard CE server that supports Edge functionality up and running. The easiest way is to use [Live Demo](https://demo.thingsboard.io/signup) server, that is already updated to the required version.

The alternative option is to install ThingsBoard CE server that supports Edge functionality on-premise.
Please visit [Upgrade instructions for ThingsBoard CE server](/docs/edge/install/upgrade-ce-server/) to install **3.3beta** version of ThingsBoard CE server that supports Edge functionality before the official **3.3** ThingsBoard CE server release.

{% include templates/edge/tb-32-beta-note.md %}

{% include templates/edge/tb-32-pe-beta-note.md %}

## Step 1. Obtain and configure license key

{% include templates/edge/obtain-license.md %}

## Step 2: Provision the edge

{% include templates/edge/add-edge.md %}

## Step 3: Install and connect edge to server

Browse available ThingsBoard Edge [**installation options**](/docs/edge/install/installation-options/) and choose the most suitable installation guide.
Follow steps in chosen ThingsBoard Edge installation guide to install, configure and connect edge to cloud.

## Next Steps with ThingsBoard Edge

{% include templates/edge/next-steps.md %}

