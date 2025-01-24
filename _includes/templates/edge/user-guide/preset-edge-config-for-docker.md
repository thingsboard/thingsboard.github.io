
Create a docker compose file for the **ThingsBoard Edge** service within this directory:

```bash
nano docker-compose.yml
```
{: .copy-code}

Then you need to fill this file with the configuration lines.
Once the **Edge** instance has been created, the preset installation instructions will be available for use. 
They contain important credentials, such as **Edge Secret**, **Edge Key**, etc. To access these configurations:

{% if docsPrefix == 'pe/edge/' %}
{% assign presetConfig = '
    ===
        image: /,
        title: Go to the **Edge management > Instances** section of your **ThingsBoard Professional Edition** instance, and click on the **Instance**. Then, click the **"Install & Connect Instructions"** button.
    ===
        image: /images/devices-library/edge/recomputer-r1000/0.5-docker-pe.webp,
        title: On the **"Install & Connect Instructions"** pop-up window, select the **"Docker"** tab and **copy the configuration lines**.
'
%}
{% else %}
{% assign presetConfig = '
    ===
        image: /,
        title: Go to the **Edge management > Instances** section of your **ThingsBoard Community Edition** instance, and click on the **Instance**. Then, click the **"Install & Connect Instructions"** button.
    ===
        image: /images/devices-library/edge/recomputer-r1000/1.3-docker.webp,
        title: On the **"Install & Connect Instructions"** pop-up window, select the **"Docker"** tab and **copy the configuration lines**.
'
%}
{% endif %}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=presetConfig %}

* Paste the copied lines into the **docker-compose.yml** file and press **CTRL+S** to save it. To close the file press **CTRL+X**.

* Execute the following commands:

```bash
docker compose up -d
docker compose logs -f mytbedge
```
{: .copy-code}

{% capture local-deployment %}
The command must be executed in the **same directory** in which the docker-compose.yml file was saved.
{% endcapture %}
{% include templates/info-banner.md content=local-deployment %}