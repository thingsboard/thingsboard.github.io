{% if docsPrefix == 'pe/' %}
{% assign appPrefix = "ThingsBoard PE" %}
{% else %}
{% assign appPrefix = "ThingsBoard" %}
{% endif %}

{{appPrefix}} Mobile Application allows you to perform the following customizations **without code changes**:

- **[Customize home screen](/docs/{{docsPrefix}}mobile/customize-dashboards)**
- **[Customize device icons](/docs/{{docsPrefix}}mobile/customize-devices)**
- **[Setup device details dashboard](/docs/{{docsPrefix}}mobile/device-dashboard)**
- **[Setup alarm details dashboard](/docs/{{docsPrefix}}mobile/alarm-dashboard)**
- **[Configure mobile actions](/docs/{{docsPrefix}}mobile/mobile-actions)**
- **[Configure OAuth 2.0](/docs/{{docsPrefix}}mobile/oauth2)**
{% if docsPrefix == 'pe/' %}
- **[Configure white-labeling](/docs/pe/mobile/white-labeling)**
- **[Configure self-registration](/docs/pe/mobile/self-registration)**
{% endif %}
