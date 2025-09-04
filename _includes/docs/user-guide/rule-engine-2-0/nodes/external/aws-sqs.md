<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/external-nodes/external-aws-sqs.png)

Node publish messages to the AWS SQS (Amazon Simple Queue Service).

Configuration:

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/external-nodes/external-aws-sqs-config.png)

- **Queue Type** - SQS queue type. Can be *Standard* or *FIFO*.
- **Queue URL Pattern** - Pattern for building Queue URL. For example <code>${deviceType}</code>.
Can be set direct Queue URL for message publishing or pattern can be used, that will be resolved to the real Queue URL using Message metadata.
- **Delay** - delay in seconds, used to delay a specific message.
- **Message attributes** - optional list of message attributes to publish.
- **AWS Access Key ID** and **AWS Secret Access Key** are the credentials of an AWS IAM User with programmatic access. More information on AWS access keys can be found [here](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html). 
- **AWS Region** must correspond to the one in which the SQS Queue(s) are created. Current list of AWS Regions can be found [here](http://docs.aws.amazon.com/general/latest/gr/rande.html).

In the following example, Queue URL depends on Device Type and there is a Message that contains **deviceType** field in Metadata:

{% highlight json %}
{
    deviceType: controller
}
{% endhighlight %}

For publishing message in **controller**'s Queue, we will set this pattern in **Queue URL pattern**:

{% highlight bash %}
https://sqs.us-east-1.amazonaws.com/123456789012/${deviceType}
{% endhighlight %}

In runtime, pattern will be resolved to <code>https://sqs.us-east-1.amazonaws.com/123456789012/controller</code>

**Published body** - Node will publish full Message payload to the SQS. 
If required, Rule Chain can be configured to use chain of Transformation Nodes for sending correct Payload to the SQS.

**Published attributes** - optional list of attributes can be added for publishing message in SQS. It is a collection of <NAME> - <VALUE> pairs.
Both, NAME and VALUE, could be a static values or patterns that will be resolved using Message metadata.

If **FIFO** queue is selected, then Message ID will be used as **deduplication ID** and Message originator as **group ID**.

**Outbound message** from this node will contain response **messageId**, **requestId**, **messageBodyMd5**, **messageAttributesMd5** 
and **sequenceNumber** in Message metadata. Original Message payload, type and originator will not be changed.
