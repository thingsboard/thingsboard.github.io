There are several types available for this subsection:  
1. anonymous  
2. username  
3. cert.PEM  

{% capture identityopcuatogglespec %}
<b>anonymous</b><br> <small>(recommended if all servers are on the local network)</small>%,%anonymous%,%templates/iot-gateway/opcua-connector/opcua-identity-anonymous-config.md%br%
<b>username</b><br> <small>(recommended for a basic level of security)</small>%,%username%,%templates/iot-gateway/opcua-connector/opcua-identity-username-config.md%br%
<b>cert.PEM</b><br> <small>(recommended for a higher level of security)</small>%,%certpem%,%templates/iot-gateway/opcua-connector/opcua-identity-certpem-config.md%br%{% endcapture %}

{% include content-toggle.liquid content-toggle-id="opcuaIdentityConfig" toggle-spec=identityopcuatogglespec %}
