
* TOC
{:toc}

There are multiple ways to customize ThingsBoard platform to suit your needs:
{% unless docsPrefix == 'paas/' %}
 - [Rule Engine](/docs/{{docsPrefix}}user-guide/contribution/rule-node-development/) - allows to create custom rule nodes and add them to your ThingsBoard server instance.
{% endunless %}
 - [Widgets Library](/docs/{{docsPrefix}}user-guide/contribution/widgets-development/) - allows to develop new widgets.
{% unless docsPrefix %}
 - [Device Connectivity Protocols](/docs/reference/protocols/) - add new protocol or customize [existing implementations](https://github.com/thingsboard/thingsboard/tree/master/transport)
{% else %}
{% assign peDocsPrefix = '' %}
{% if docsPrefix == 'paas/' %}
{% assign peDocsPrefix = docsPrefix %}
{% endif %}
 - [Custom Integration](/docs/{{peDocsPrefix}}user-guide/integrations/custom/) - allows to create integration with custom configuration that will use any transport protocol for communication with your devices.
{% endunless %}
