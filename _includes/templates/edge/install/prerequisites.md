{% if docsPrefix == 'pe/edge/' %}
{% assign appPrefix = "Professional Edition" %}
{% else %}
{% assign appPrefix = "Community Edition" %}
{% endif %}

## Prerequisites

To start running **ThingsBoard {{appPrefix}} Edge**, you will need an active **ThingsBoard {{appPrefix}} account** that supports **Edge** functionality.

{% if docsPrefix == 'pe/edge/' %}
{% include templates/edge/obtain-pe-cloud.md %}
{% else %}
{% include templates/edge/obtain-ce-cloud.md %}
{% endif %}

{% include templates/edge/install/hardware-requirements.md %}

### Deploying a New Edge Instance

To create a new **Edge**:

{% if docsPrefix == 'pe/edge/' %}
{% assign addEdge = '
    ===
        image: /images/pe/edge/installation-add-edge-item-1.png,
        title: Sign in to your **ThingsBoard PE** instance and navigate to the **Edge Management > Instances** section. Click the **"+"** icon in the top right corner and select the **"Add new edge"** option.
    ===
        image: /images/pe/edge/installation-add-edge-item-2.png,
        title: Enter a name for the Edge you are creating. For example, "My New Edge". **If needed**, update the **cloud endpoint**. 
* If the **Edge** runs in a [Docker container](https://docs.docker.com/get-started/docker-overview/){:target="_blank"}, **do not** use “localhost” as the endpoint. Instead, use the **IP address** of the machine where **ThingsBoard PE** is hosted and accessible by the Edge container. For example, http://10.7.2.143:8080.
* If you are using the **ThingsBoard Cloud**, there’s no need to change this setting — keep it as is.
* Click the **"Add"** button to confirm the addition of the **Edge instance**. 

    ===
        image: /images/pe/edge/installation-add-edge-item-3.png,
        title: Your new **Edge** is created and will appear at the top of the list, as entries are sorted by creation time by default.
'%}
{% else %}
{% assign addEdge = '
    ===
        image: /images/edge/installation-add-edge-item-1.png,
        title: Sign in to your **ThingsBoard CE** instance and navigate to the **Edge Management > Instances** section. Click the **"+"** icon in the top right corner and select the **"Add new edge"** option.
    ===
        image: /images/edge/installation-add-edge-item-2.png,
        title: Enter a name for the Edge you are creating. For example, "My New Edge". Click the **"Add"** button to confirm the addition of the **Edge instance**.
    ===
        image: /images/edge/installation-add-edge-item-3.png,
        title: Your new **Edge** is created and will appear at the top of the list, as entries are sorted by creation time by default.
'%}
{% endif %}

{% include images-gallery.liquid imageCollection=addEdge showListImageTitles="true" %}