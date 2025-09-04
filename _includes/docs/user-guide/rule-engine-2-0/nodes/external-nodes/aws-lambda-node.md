<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 3.7.1</em></strong></td>
     </tr>
   </thead>
</table> 

![Node example image](/images/user-guide/rule-engine-2-0/nodes/external-nodes/external-aws-lambda.png)

Node publishes messages to AWS Lambda, a service that lets you run code without provisioning or managing servers. 
It sends messages using a RequestResponse invocation type. The node uses a pre-configured client and specified function to run.

Configuration:
{% if docsPrefix == null %}
<object width="70%" data="/images/user-guide/rule-engine-2-0/nodes/external-nodes/aws-lambda-node-2-ce.png"></object>
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
<object width="70%" data="/images/user-guide/rule-engine-2-0/nodes/external-nodes/aws-lambda-node-2-pe.png"></object>
{% endif %}

Function configuration

- **Function name**: required parameter to specify which AWS Lambda function should be invoked.
- **Qualifier**: optional parameter to specify a version or alias of the Lambda function. If the qualifier is not specified, the default qualifier **$LATEST** will be used.

> **Note**: **Function name** and **Qualifier** fields support templatization.

AWS Credentials

- **AWS Access Key ID** and **AWS Secret Access Key** are the credentials of an AWS IAM User with programmatic access.
  More information on AWS access keys can be found [here](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html).
- **AWS Region** must correspond to the one in which the Lambda function is created. Current list of AWS Regions can be found [here](https://docs.aws.amazon.com/general/latest/gr/rande.html).

Advanced settings

- **Connection timeout**: amount of time to wait (in seconds) when initially establishing a connection before giving up and timing out.
A value of 0 means infinity, and is not recommended.
- **Request timeout**: amount of time to wait (in seconds) for the request to complete before giving up and timing out.
A value of 0 means infinity, and is not recommended.
- **Tell Failure if AWS Lambda function execution raises exception**: if enabled, forces failure of message processing if AWS Lambda function execution raises exception. 
If disabled, the error information is added to the response payload, and the message will be routed via success chain.

**Output**
- **Success**: If message was processed successfully.
- **Failure**: If an error occurs during message processing or if the AWS Lambda function execution raises an exception, and the option **Tell Failure if AWS Lambda function execution raises exception** is enabled.

**Usage example: monitoring and processing water meter data with AWS Lambda**

Consider the following scenario: we have a water meter IoT device that sends periodic updates about water usage to our system.
We need to process these updates to check for anomalies and perform specific actions based on the water usage patterns.

Solution with AWS Lambda node:
1. **Receive water meter data**: Our rule chain starts with receiving water meter updates. Each update contains the water usage data.
2. **Preprocess the data**: The message passes through a Transformation Node to format the data appropriately for AWS Lambda.
3. **Invoke AWS Lambda function**: The formatted message is then sent to the AWS Lambda Node. This node is configured with the necessary AWS credentials and function details.
4. **Process data with Lambda**: The AWS Lambda function is invoked, processing the water usage data. It checks for anomalies, such as unusually high water usage, and logs the results or triggers further actions.
5. **Handle Lambda response**: Upon successful execution, the Lambda function returns a response. The AWS Lambda Node captures this response, including the requestId in the message metadata.
6. **Route based on Lambda response**: Based on the response from AWS Lambda, the message is routed through either the Success or Failure path. The Success path can continue to further processing, while the Failure path handles any errors or issues encountered.

By utilizing the AWS Lambda Node in this manner, we can efficiently process and respond to real-time water meter data, leveraging AWS Lambda's capabilities for data processing and anomaly detection.

![Rule chain example image](/images/user-guide/rule-engine-2-0/nodes/external-nodes/external-aws-lambda-chain.png)

**Published payload** - node will publish message payload to the AWS Lambda. If required, Rule Chain can be configured to use chain of Transformation Nodes for sending correct Payload to the AWS Lambda.

**Outbound message** from this node will contain response **requestId** in message metadata.
Message payload will contain result of the function execution.

<br>
