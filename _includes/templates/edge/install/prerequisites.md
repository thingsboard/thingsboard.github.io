## Prerequisites

To start utilizing the ThingsBoard **Edge**, it is essential to have an operational ThingsBoard {{appPrefix}} server that supports Edge functionality.

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
        image: https://img.thingsboard.io/pe/edge/installation-add-edge-item-1.png,
        title: Sign in to your ThingsBoard PE instance and navigate to the "Edge Management" section -> "Instances" page. Click the "+" icon in the top right corner and select "Add new edge".
    ===
        image: https://img.thingsboard.io/pe/edge/installation-add-edge-item-2.png,
        title: Enter a name for your edge. For instance, "My New Edge". If necessary, update the cloud endpoint. This URL should be accessible from the edge. If the edge is running in a Docker container, using "localhost" is <b>incorrect</b>. It must be the IP address of the machine where ThingsBoard <b>PE</b> is running and accessible by the edge container. If you are using the ThingsBoard <b>Cloud</b> server to evaluate the edge, leave this setting as it is. Click "Add" to confirm adding your new Edge.
    ===
        image: https://img.thingsboard.io/pe/edge/installation-add-edge-item-3.png,
        title: Your new edge should now appear at the top of the list, as entries are sorted by creation time by default.
'%}
{% else %}
{% assign addEdge = '
    ===
        image: https://img.thingsboard.io/edge/installation-add-edge-item-1.png,
        title: Sign in to your ThingsBoard instance and navigate to the "Edge Management" section -> "Instances" page. Click the "+" icon in the top right corner and select "Add new edge".
    ===
        image: https://img.thingsboard.io/edge/installation-add-edge-item-2.png,
        title: Enter a name for your Edge. For instance, "My New Edge". Click "Add" to confirm adding of your new Edge.
    ===
        image: https://img.thingsboard.io/edge/installation-add-edge-item-3.png,
        title: Your new Edge should now appear at the top of the list, as entries are sorted by creation time by default.
'%}
{% endif %}

{% include images-gallery.liquid imageCollection=addEdge showListImageTitles="true" %}