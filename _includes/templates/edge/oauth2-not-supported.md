{% capture oauth2-not-supported %}
At the moment Edge doesn't support OAuth 2.0 login. To be able to login into Edge with your OAuth 2.0 user, you must set password for this user in the ThingsBoard server. 
{% endcapture %}
{% include templates/info-banner.md content=oauth2-not-supported %}