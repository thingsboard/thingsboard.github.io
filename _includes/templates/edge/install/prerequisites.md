#### Prerequisites
##### ThingsBoard Cloud server 
To start using ThingsBoard **Edge** you need to have ThingsBoard CE/PE server that supports edge functionality up and running.

{% capture contenttogglespec %}
Community Edition%,%ce%,%templates/edge/obtain-ce-cloud.md%br%
Professional Edition%,%pe%,%templates/edge/obtain-pe-cloud.md{% endcapture %}

{% include content-toggle.html content-toggle-id="edgeInstallCloud" toggle-spec=contenttogglespec %} 
 
##### Edge provision on cloud
Additionally, you will need to provision ThingsBoard **Edge** on cloud server. Please visit this guide [Provision edge on CE server](/docs/edge/provision-edge-on-server-ce/) or [Provision edge on PE server](/docs/edge/provision-edge-on-server-pe/) respectively.

Once ThingsBoard **Edge** provisioned on cloud server please follow installation steps below.