At the current stage, we have only one parameter in this section called **Authentication Execution Order**.
It defines the order in which the broker will use authentication providers to validate MQTT client authentication.

{% include images-gallery.html imageCollection="authentication-settings" %}

**Key rules:**
 
 - Disabled providers will be skipped in the authentication flow.
 - The authentication flow stops at the first successful result or after evaluation of all enabled providers.
 - If all providers are disabled, the client will be authenticated without MQTT client credentials validation.

{% capture scramExecution %}
The SCRAM authentication method is always handled by the broker according to the MQTT 5.0 specification and does not follow the configured execution order of authentication providers.
{% endcapture %}
{% include templates/info-banner.md content=scramExecution %}