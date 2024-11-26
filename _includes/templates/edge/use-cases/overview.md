## Deployment Scenarios

ThingsBoard Edge offers the flexibility to address the variety of challenges faced in IoT deployments, from connectivity and latency concerns to security and regulatory compliance. 
The choice of deploying ThingsBoard Edge depends on the specific needs and constraints of the IoT project in question:

**Limited Connectivity:** In remote areas where connectivity is intermittent, ThingsBoard Edge can collect and store data locally, and then sync with the main ThingsBoard server when the connection is available.

**Data Volume:** In scenarios where devices produce a massive volume of data, ThingsBoard Edge can aggregate and preprocess the data at the edge, sending only necessary or processed data to the main server, thereby saving bandwidth and storage.

**Low Latency Operations:** For operations that require real-time responses, ThingsBoard Edge can process data and act on it instantly without waiting for round trips to a central server. This is crucial in industries such as manufacturing or real-time monitoring.

**Regulatory Compliance:** In some regions, there might be regulations that prevent certain data from being sent outside a specific geographical boundary. ThingsBoard Edge can process and store the data locally, ensuring that sensitive or regulated data doesn't leave the premises.

**Resilience and Redundancy:** Edge deployments can continue to operate even if the central server is down or unreachable. This ensures that mission-critical applications have minimal downtime.

**Security:** By processing data at the edge, sensitive information can be kept within a local network, reducing exposure to potential external threats.

**Firmware Updates:** ThingsBoard Edge can facilitate firmware updates for IoT devices. In environments with numerous devices, managing updates can be challenging. Edge deployment can help streamline this process.

**Integration with Local Systems:** In some scenarios, IoT data might need to be integrated with local databases or systems. ThingsBoard Edge can serve as an integration point, communicating with both IoT devices and local systems.

**Cost Savings:** By preprocessing and filtering data at the edge, businesses can reduce the amount of data sent to the cloud, leading to potential cost savings in terms of data storage and transfer.

**Distributed Architecture:** For organizations that have multiple locations or branches, deploying ThingsBoard Edge in each location ensures local processing and management while maintaining a connection with the central server for consolidated data views and management.

#### Contents

Following ThingsBoard Edge **Use Cases** guides can help you to get familiar with **ThingsBoard Edge** functionality:

* [**Manage alarms and RPC requests on edge devices**](/docs/{{docsPrefix}}use-cases/manage-alarms-rpc-requests/): Learn how to respond to local situations, even without an internet connection to the Cloud.

* [**Data filtering and traffic reduction**](/docs/{{docsPrefix}}use-cases/data-filtering-traffic-reduce/): Learn how to reduce the amount of data sent from edge devices to the Cloud and save traffic costs.