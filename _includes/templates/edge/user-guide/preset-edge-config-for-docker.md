
Create a docker compose file for the **ThingsBoard Edge** service within this directory:

```bash
nano docker-compose.yml
```
{: .copy-code}

Then, you need to fill this file with the configuration lines.
Once the **Edge** instance has been created, the preset installation instructions will be available for use. 
They contain important credentials, such as **Edge Secret**, **Edge Key**, etc. To access these configurations:

{% assign presetConfigPE = '
    ===
        image: https://img.thingsboard.io/edge/user-guide/edge-install/4-install-instructions-pe.webp,
        title: Go to the **Edge management > Instances** section of your **ThingsBoard Professional Edition** instance, and click on the **Instance**. Then, click the **"Install & Connect Instructions"** button.
    ===
        image: https://img.thingsboard.io/edge/user-guide/edge-install/5-docker-pe.webp,
        title: On the **"Install & Connect Instructions"** pop-up window, select the **"Docker"** tab and **copy the configuration lines**.
'
%}

{% assign presetConfigCE = '
    ===
        image: https://img.thingsboard.io/edge/user-guide/edge-install/4-install-instructions.webp,
        title: Go to the **Edge management > Instances** section of your **ThingsBoard Community Edition** instance, and click on the **Instance**. Then, click the **"Install & Connect Instructions"** button.
    ===
        image: https://img.thingsboard.io/edge/user-guide/edge-install/5-docker.webp,
        title: On the **"Install & Connect Instructions"** pop-up window, select the **"Docker"** tab and **copy the configuration lines**.
'
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix contains "pe/edge" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=presetConfigPE %}
{% else %}  
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=presetConfigCE %}
{% endif %}


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