## Prerequisites

To start using the **ThingsBoard Edge**, it is essential to have a running **ThingsBoard {{appPrefix}} server** that supports Edge functionality.

{% if docsPrefix == 'pe/edge/' %}
{% include templates/edge/obtain-pe-cloud.md %}
{% else %}
{% include templates/edge/obtain-ce-cloud.md %}
{% endif %}

{% include templates/edge/install/hardware-requirements.md %}

### Provisioning a new Edge instance on the ThingsBoard server

Additionally, you will need to provision **Edge** on the ThingsBoard server.

{% if docsPrefix == 'pe/edge/' %}
{% assign addEdge = '
    ===
        image: /images/pe/edge/installation-add-edge-item-1.png,
        title: Log in to your **ThingsBoard PE** instance and navigate to the **Edge Management -> Instances** section. Click the **"+"** icon in the top right corner and select **"Add new edge"**.
    ===
        image: /images/pe/edge/installation-add-edge-item-2.png,
        title: Enter a name for your edge. For instance, "My New Edge". If necessary, update the cloud endpoint. This URL should be accessible from the edge. **If the Edge is running in a Docker container, using "localhost" is incorrect**. It must be the **IP address** of the machine running **ThingsBoard PE** that is accessible from the edge container. If you are using the **ThingsBoard Cloud** server to evaluate the edge, leave this setting as it is. Click **"Add"** to confirm the addition of your new Edge.
    ===
        image: /images/pe/edge/installation-add-edge-item-3.png,
        title: Your new edge should now appear at the top of the list, as entries are sorted by creation time by default.
'%}
{% else %}
{% assign addEdge = '
    ===
        image: /images/edge/installation-add-edge-item-1.png,
        title: Log in to your **ThingsBoard PE** instance and navigate to the **Edge Management -> Instances** section. Click the **"+"** icon in the top right corner and select **"Add new edge"**.
    ===
        image: /images/edge/installation-add-edge-item-2.png,
        title: Enter a name for your Edge. For instance, "My New Edge". Click **"Add"** to confirm the addition of your new Edge.
    ===
        image: /images/edge/installation-add-edge-item-3.png,
        title: Your new Edge should now appear at the top of the list, as entries are sorted by creation time by default.
'%}
{% endif %}

{% include images-gallery.liquid imageCollection=addEdge showListImageTitles="true" %}