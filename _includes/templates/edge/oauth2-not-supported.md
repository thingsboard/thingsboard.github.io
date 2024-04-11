{% capture oauth2-not-supported %}
As of now, Edge does not support OAuth 2.0 for login purposes. If you wish to access Edge using your OAuth 2.0 user credentials, it is necessary to assign a password for this user on the ThingsBoard server.
{% endcapture %}
{% include templates/warn-banner.md content=oauth2-not-supported %}