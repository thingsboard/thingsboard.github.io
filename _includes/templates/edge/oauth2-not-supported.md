{% capture oauth2-not-supported %}
Currently, Edge does not support OAuth 2.0 login. To log into Edge using your OAuth 2.0 user credentials, you must set a password for this user in the ThingsBoard server. 
{% endcapture %}
{% include templates/warn-banner.md content=oauth2-not-supported %}