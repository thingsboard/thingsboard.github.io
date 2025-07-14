## Prerequisites

You will need to have ThingsBoard server up and running. 
The easiest way is to use [Live Demo](https://demo.thingsboard.io/signup){:target="_blank"} server.

The alternative option is to install ThingsBoard using the [installation guide](/docs/user-guide/install/installation-options/){:target="_blank"}:
- **Windows** users should follow this [guide](/docs/user-guide/install/docker-windows/){:target="_blank"}
- **Linux** users with Docker installed can execute the following commands:

```
mkdir -p ~/.mytb-data && sudo chown -R 799:799 ~/.mytb-data
mkdir -p ~/.mytb-logs && sudo chown -R 799:799 ~/.mytb-logs
docker run -it -p 8080:9090 -p 7070:7070 -p 1883:1883 -p 5683-5688:5683-5688/udp -v ~/.mytb-data:/data \
-v ~/.mytb-logs:/var/log/thingsboard --name mytb --restart always thingsboard/tb-postgres
``` 
{: .copy-code}

These commands install ThingsBoard and load demo data and accounts.

The ThingsBoard UI will be available at: **http://localhost:8080**.

You can use:
- Username: **tenant@thingsboard.org**
- Password: **tenant**

[More information about the demo account](/docs/samples/demo-account/){:target="_blank"}.