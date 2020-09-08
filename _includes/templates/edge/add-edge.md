In order to start using ThingsBoard Edge you must run ThingsBoard Platform and create edge entity. 
For each entity ThingsBoard automatically generates immutable unique credentials: <strong>Edge Secret</strong> and <strong>Edge Key</strong> 
(kind of login/password).

{% capture contenttogglespec %}
ThingsBoard Professional Edition%,%postgresql%,%templates/edge/get-edge-key-secret-pe.md%br%
ThingsBoard Community Edition%,%hybrid%,%templates/edge/get-edge-key-secret-ce.md%br%{% endcapture %}

{% include content-toggle.html content-toggle-id="rhelThingsboardDatabase" toggle-spec=contenttogglespec %} 
