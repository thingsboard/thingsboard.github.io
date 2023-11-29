## Prerequisites

{% include templates/edge/install/hardware-requirements.md %}

### Setting Up the Server Environment for ThingsBoard Edge 

To start utilizing ThingsBoard **Edge**, it is essential to have an operational {{appPrefix}} server that supports Edge functionality.

{% if docsPrefix == 'pe/edge/' %}
{% include templates/edge/obtain-pe-cloud.md %}
{% else %}
{% include templates/edge/obtain-ce-cloud.md %}
{% endif %}
 
### Provisioning a New Edge Instance on Server

{% if docsPrefix == 'pe/edge/' %}
{% assign addEdge = '
    ===
        image: /images/pe/edge/installation-add-edge-item-1.png,
        title: Sign in to your ThingsBoard <b>PE</b> instance and navigate to the "Edge Management" -> "Instances" page. Click the "+" icon in the top right corner and select "Add Edge".
    ===
        image: /images/pe/edge/installation-add-edge-item-2.png,
        title: Enter a name for your edge. For instance, "My New Edge". If necessary, update the cloud endpoint. This URL should be accessible from the edge. If the edge is running in a Docker container, using "localhost" is <b>incorrect</b>. It must be the IP address of the machine where ThingsBoard <b>PE</b> is running and accessible by the edge container. If you are using the ThingsBoard <b>Cloud</b> server to evaluate the edge, leave this setting as it is. Click "Add" to create your new edge.
    ===
        image: /images/pe/edge/installation-add-edge-item-3.png,
        title: Your new edge should now appear at the top of the list, as entries are sorted by creation time by default.
'%}
{% else %}
{% assign addEdge = '
    ===
        image: /images/edge/installation-add-edge-item-1.png,
        title: Sign in to your ThingsBoard <b>CE</b> instance and navigate to the "Edge Management" -> "Instances" page. Click the "+" icon in the top right corner and select "Add Edge".
    ===
        image: /images/edge/installation-add-edge-item-2.png,
        title: Enter a name for your Edge. For instance, "My New Edge". Click "Add" to confirm the creation of your new Edge.
    ===
        image: /images/edge/installation-add-edge-item-3.png,
        title: Your new Edge should now appear at the top of the list, as entries are sorted by creation time by default.
'%}
{% endif %}

Additionally, you will need to provision ThingsBoard **Edge** on a server. 

{% include images-gallery.liquid imageCollection=addEdge showListImageTitles="true" %}
