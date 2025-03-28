* TOC
{:toc}

**ThingsBoard Edge** offers the flexibility to address the variety of challenges faced in IoT deployments, from connectivity and latency concerns to security and regulatory compliance.
The choice of deploying **ThingsBoard Edge** depends on the specific business needs and constraints.

## Deployment Scenarios

* **Limited Connectivity and Resilience:** In remote areas with intermittent connectivity, edge deployments can continue to operate even if the central server is down or unreachable. This ensures that critical applications and machines continue to operate. Synchronize with the main ThingsBoard server when connectivity is restored.

* **Data Volume and Cost Savings:** In scenarios where devices generate massive amounts of data, Edge can aggregate and pre-process data locally and then, send only necessary or processed data to the main server, saving bandwidth and storage. Thereby, businesses can reduce the amount of data sent to the cloud, leading to potential cost savings in terms of data storage and transfer.

* **Low Latency Operations:** For operations that require real-time reactions, Edge can process data and act on it immediately, without waiting for a response from the central server. Response time can be critical in industries such as manufacturing or real-time monitoring.

* **Regulatory Compliance and Security:** Some regions may have regulations that prevent certain data from being sent outside a specific geographic boundary. Edge can process and store the data locally, ensuring that sensitive or regulated data doesn't leave the premises. In addition to that, sensitive information can be kept within a local network, reducing exposure to potential external threats.

* **Firmware Updates:** Edge can facilitate firmware updates for IoT devices. In environments with numerous devices, managing updates can be challenging. Edge deployment can help streamline this process.

* **Integration with Local Systems:** In some scenarios, IoT data might need to be integrated with local databases or systems. ThingsBoard Edge can serve as an integration point, communicating with both IoT devices and local systems.

* **Distributed Architecture:** For organizations with multiple locations or branches, deploying ThingsBoard Edge at each location ensures local processing and management while maintaining a connection to the central server for consolidated data views and management.

## Edge Use Cases

The following guides can help you learn about the **use cases of ThingsBoard Edge functionality**:

* [**Manage alarms and RPC requests on edge devices**](/docs/{{docsPrefix}}use-cases/manage-alarms-rpc-requests/){: target="_blank"}: Learn how to manage local work environments, even without an Internet connection to the Cloud.

* [**Data filtering and traffic reduction**](/docs/{{docsPrefix}}use-cases/data-filtering-traffic-reduce/){: target="_blank"}: Learn how to reduce the amount of data sent from edge devices to the Cloud and save traffic costs.