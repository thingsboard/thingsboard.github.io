
ThingsBoard System Administrator is able to configure SMS provider that will be used the SMS gateway to send text messages to your customers or users. 
For example, you can set up an alarm to send an SMS message to a user when a sensor detects an abnormal condition.
  
Tenant administrator is able to setup [**sms rule node**](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/external-nodes/#send-sms-node) to distribute alarms produced by [**rule engine**](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/re-getting-started/).  

To configure SMS provider settings in Thingsboard, follow these steps:

{% include images-gallery.html imageCollection="smsProviderSettings" showListImageTitles="true" %}

{% capture difference %}
**Note:**
<br>
Please use [AWS SNS](https://docs.aws.amazon.com/sns/latest/dg/sms_publish-to-phone.html), [Twilio](https://www.twilio.com/docs/sms) or [SMPP](https://smpp.org/) documentation to learn more how to use the corresponding system.
{% endcapture %}
{% include templates/info-banner.md content=difference %}