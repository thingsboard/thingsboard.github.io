### Prerequisites
#### ThingsBoard Cloud server 

{% if docsPrefix == 'pe/edge/' %}
{% assign appPrefix = "ThingsBoard PE" %}
{% assign provisionEdgeOnCloudLink = "/docs/pe/edge/provision-edge-on-server/" %}
{% else %}
{% assign appPrefix = "ThingsBoard" %}
{% assign provisionEdgeOnCloudLink = "/docs/edge/provision-edge-on-server/" %}
{% endif %}

To begin using ThingsBoard **Edge**, you must have a {{appPrefix}} server supporting edge functionality up and running.

{% if docsPrefix == 'pe/edge/' %}
{% include templates/edge/obtain-pe-cloud.md %}
{% else %}
{% include templates/edge/obtain-ce-cloud.md %}
{% endif %}
 
#### Edge provision on cloud

Additionally, you will need to provision ThingsBoard **Edge** on a cloud server. If you haven't done so yet, please follow the [Provision Edge on Cloud]({{provisionEdgeOnCloudLink}}) guide.

Once the ThingsBoard **Edge** is provisioned on the cloud server, please follow the installation steps provided below.