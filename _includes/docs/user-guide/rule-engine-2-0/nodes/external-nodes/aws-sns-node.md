<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/external-nodes/external-aws-sns.png)

Node publish messages to AWS SNS (Amazon Simple Notification Service).

Configuration:
{% if docsPrefix == null %}
<object width="70%" data="/images/user-guide/rule-engine-2-0/nodes/external-nodes/aws-sns-node-2-ce.png"></object>
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
<object width="70%" data="/images/user-guide/rule-engine-2-0/nodes/external-nodes/aws-sns-node-2-pe.png"></object>
{% endif %}

- **Topic ARN pattern** - can be set direct topic name for message publishing 
or pattern can be used, that will be resolved to the real ARN Topic name using Message metadata. 
- **AWS Access Key ID** and **AWS Secret Access Key** are the credentials of an AWS IAM User with programmatic access. More information on AWS access keys can be found [here](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html). 
- **AWS Region** must correspond to the one in which the SNS Topic(s) are created. Current list of AWS Regions can be found [here](http://docs.aws.amazon.com/general/latest/gr/rande.html).

In the following example, topic name depends on Device Type and there is a Message that contains **deviceType** field in Metadata:
{% highlight javascript %}
{
    deviceType: controller
}
{% endhighlight %}

For publishing message in **controller**'s topic, we will set this pattern in **Topic ARN pattern**:

{% highlight bash %}
arn:aws:sns:us-east-1:123456789012:${deviceType}
{% endhighlight %}

In runtime, pattern will be resolved to <code>arn:aws:sns:us-east-1:123456789012:controller</code>

**Published payload** - Node will publish full Message payload to the SNS.
If required, Rule Chain can be configured to use chain of Transformation Nodes for sending correct Payload to the SNS.

**Outbound message** from this node will contain response **messageId** and **requestId**
 in Message metadata. Original Message payload, type and originator will not be changed.

<br>
