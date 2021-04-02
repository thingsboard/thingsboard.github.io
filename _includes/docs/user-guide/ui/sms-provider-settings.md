
ThingsBoard System Administrator is able to configure SMS provider that will be used to distribute SMS messages about alarms.
This configuration step is required in production environments if you plan to use SMS messages. 
  
Tenant administrator is able to setup [**sms rule node**](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/external-nodes/#send-sms-node) to distribute alarms produced by [**rule engine**](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/re-getting-started/).  

Following steps are required to configure system SMS provider settings.

{% include images-gallery.html imageCollection="smsProviderSettings" showListImageTitles="true" %}

**Note**: Please use [AWS SNS](https://docs.aws.amazon.com/sns/latest/dg/sms_publish-to-phone.html) or [Twilio](https://www.twilio.com/docs/{{docsPrefix}}sms) documentation to learn more how to use the corresponding system. 