ThingsBoard platform currently supports two type of messaging brokers for storing the messages and communication between ThingsBoard services: In-memory and Kafka-based brokers.
 
 * **In Memory** queue implementation is built-in and default. 
It is useful for development(PoC) environments and is not suitable for production deployments or any sort of cluster deployments.

 * **Kafka** is recommended for production deployments. This queue is used on the most of ThingsBoard production environments now. 
It is useful for both on-prem and private cloud deployments. It is also useful if you like to stay independent from your cloud provider.
However, some providers also have managed services for Kafka. See AWS [MSK](https://aws.amazon.com/msk/) for example.

* **Confluent Cloud** is a fully managed streaming platform based on Kafka. Useful for a cloud agnostic deployments.

See corresponding architecture [page](/docs/reference/#message-queues-are-awesome) and rule engine [page](/docs/user-guide/rule-engine-2-5/queues/) for more details.