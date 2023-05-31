### Prerequisites
#### ThingsBoard Cloud server 

{% if docsPrefix == 'pe/edge/' %}
{% assign appPrefix = "ThingsBoard PE" %}
{% assign step1Link = "/docs/pe/edge/provision-edge-on-server/" %}
{% else %}
{% assign appPrefix = "ThingsBoard" %}
{% assign step1Link = "/docs/edge/provision-edge-on-server/" %}
{% endif %}

To start using ThingsBoard **Edge** you need to have {{appPrefix}} server that supports edge functionality up and running.

{% if docsPrefix == 'pe/edge/' %}
{% include templates/edge/obtain-pe-cloud.md %}
{% else %}
{% include templates/edge/obtain-ce-cloud.md %}
{% endif %}
 
#### Edge provision on cloud
Additionally, you will need to provision ThingsBoard **Edge** on cloud server. Please follow [Step 1]({{step1Link}}) first if you skipped it.

Once ThingsBoard **Edge** provisioned on cloud server please follow installation steps below.