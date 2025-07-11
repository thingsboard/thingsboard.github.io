The `Authentication Execution Order` parameter defines the priority in which the broker will evaluate the enabled authentication providers. How It Works:

- The broker attempts to authenticate an incoming MQTT client using the first available (enabled) method in the list.
- If authentication fails or the method is disabled, the broker moves to the next one in order.
- The process stops as soon as one provider successfully authenticates the client.
- Disabled providers are completely skipped.

{% include images-gallery.html imageCollection="authentication-settings" %}

{% capture authExecutionOrder %}
Changes to provider status (enabled/disabled) affect how the Authentication Execution Order operates, since disabled methods are automatically skipped.
{% endcapture %}
{% include templates/info-banner.md title="Disabled providers in Authentication execution order" content=authExecutionOrder %}
