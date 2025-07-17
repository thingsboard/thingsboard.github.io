At the current stage, we have only one parameter in this section called **Authentication Execution Order**.
It defines the order in which the broker will use authentication providers to validate MQTT client authentication.

**Key rules:**
 
 - Disabled providers will be skipped in the authentication flow.
 - The authentication flow stops at the first successful result or after evaluation of all enabled providers.
 - If all providers are disabled, the client will be authenticated without MQTT client credentials validation.

{% capture scramExecution %}
The SCRAM authentication method is always handled by the broker according to the MQTT 5.0 specification and does not follow the configured execution order of authentication providers.
{% endcapture %}
{% include templates/info-banner.md content=scramExecution %}

{% include images-gallery.html imageCollection="authentication-settings" %}

{% capture downgrade-attacks %}
Placing a weaker authentication method e.g., **Basic** after a stronger method, e.g., **X.509 Certificate Chain** in the execution order may expose the system to downgrade attacks.
If fallback to a weaker method is necessary, configure it with a higher priority (placed earlier) in the execution order to reduce the risk of clients bypassing stronger authentication checks.
{% endcapture %}
{% include templates/warn-banner.md content=downgrade-attacks %}