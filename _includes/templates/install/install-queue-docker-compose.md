ThingsBoard is able to use various messaging systems/brokers for storing the messages and communication between ThingsBoard services. How to choose the right queue implementation?
 
**In Memory** queue implementation is not suitable for any sort of cluster deployments.

 * **Kafka** is recommended for production deployments and used by default. This queue is used on the most of ThingsBoard production environments now. 
It is useful for both on-prem and private cloud deployments. It is also useful if you like to stay independent from your cloud provider.
However, some providers also have managed services for Kafka. See AWS [MSK](https://aws.amazon.com/msk/) for example.

 * **RabbitMQ** is recommended if you don't have much load and you already have experience with this messaging system.

 * **AWS SQS** is a fully managed message queuing service from AWS. Useful if you plan to deploy ThingsBoard on AWS.

 * **Google Pub/Sub** is a fully managed message queuing service from Google. Useful if you plan to deploy ThingsBoard on Google Cloud.  

 * **Azure Service Bus** is a fully managed message queuing service from Azure. Useful if you plan to deploy ThingsBoard on Azure.
 
 * **Confluent Cloud** is a fully managed streaming platform based on Kafka. Useful for a cloud agnostic deployments.

See corresponding architecture [page](/docs/reference/#message-queues-are-awesome) and rule engine [page](/docs/user-guide/rule-engine-2-0/overview/#rule-engine-queue) for more details.