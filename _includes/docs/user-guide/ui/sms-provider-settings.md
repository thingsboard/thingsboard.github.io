* TOC
{:toc}

ThingsBoard System Administrator is able to configure SMS provider that will be used the SMS gateway to send text messages to your customers or users.
For example, you can set up sending an SMS alert to the user when the sensor detects an abnormal condition.

{% unless docsPrefix == null %}
At the tenant administrator level, you can use the SMS provider settings of the system administrator or enter your settings.
{% endunless %}

Tenant administrator is able to setup [**sms rule node**](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/external-nodes/#send-sms-node) to distribute alarms produced by [**rule engine**](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/re-getting-started/).  

To configure SMS provider settings in Thingsboard, follow these steps:

{% include images-gallery.html imageCollection="smsProviderSettings" showListImageTitles="true" %}

<br/>
Please use [AWS SNS](https://docs.aws.amazon.com/sns/latest/dg/sms_publish-to-phone.html), [Twilio](https://www.twilio.com/docs/sms) or [SMPP](https://smpp.org/) documentation to learn more how to use the corresponding system.
