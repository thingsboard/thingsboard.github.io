* TOC
{:toc}


## What is TBMQ?

TBMQ represents an open-source software product developed by ThingsBoard, designed to facilitate communication between MQTT clients. 
This particular product is freely available for both personal and commercial purposes, with the added flexibility of being deployable in any desired location. 
For individuals new to utilizing the broker, we suggest consulting the comprehensive resources, namely the
[what-is-thingsboard-mqtt-broker](/docs/mqtt-broker/getting-started-guides/what-is-thingsboard-mqtt-broker/) and the
[getting started guide](/docs/mqtt-broker/getting-started/), in order to gain a thorough understanding of its functionality. 
Further details can be found on the dedicated page, providing a wealth of additional information.

## How do I get started?

We recommend [installing](/docs/mqtt-broker/install/installation-options/) TBMQ locally on your laptop or PC using Docker
and follow the [getting started guide](/docs/mqtt-broker/getting-started/).

## What can I do with TBMQ?

TBMQ facilitates the establishment of connections between MQTT clients, enabling the seamless exchange of data. 
Furthermore, it extends robust support for various MQTT features, enhancing the overall functionality and versatility of the system.

## Where can I host TBMQ?

The hosting options for TBMQ are highly flexible, allowing you to choose from cloud-based environments, on-premises setups, 
or even running it locally on your personal laptop or PC.
For initiating the setup process, we advise opting for the [Docker installation](/docs/mqtt-broker/install/docker/), which offers a streamlined and efficient approach. 
If you're interested in configuring a cluster setup, a comprehensive [guide](/docs/mqtt-broker/install/cluster/docker-compose-setup/) is available, specifically designed for Docker Compose setups.

## What about security?

The utilization of MQTT with SSL encryption is supported, ensuring secure and encrypted communication. 
In addition, it is possible to create MQTT client credentials, granting the ability to authenticate and authorize clients, 
thereby enhancing the overall security and control of the system.

## How many clients and messages per second can TBMQ support?

TBMQ boasts horizontal scalability, meaning it can be expanded seamlessly to accommodate growing demands. 
Each broker, or node, within the cluster possesses identical capabilities and handles a specific subset of the data. 
It's worth noting that the actual performance of the system is contingent upon the specific usage scenario, 
with factors such as payload size and message rate playing crucial roles in determining the overall efficiency and throughput of the system.
For a comprehensive understanding of the performance capabilities of TBMQ, we recommend referring to the dedicated 
[performance test page](/docs/mqtt-broker/reference/performance-tests/).
  
## Where does TBMQ store data?

The data is stored in [PostgreSQL](https://www.postgresql.org/) database and in [Kafka](https://kafka.apache.org/).

## What license type does TBMQ use?

TBMQ is licensed under Apache 2.0 License. It is free for both personal and commercial usage, and you can deploy it anywhere.
 
## How to get support?

You can use troubleshooting instructions and community resources or [contact us](/docs/contact-us) and learn more about [services](/docs/services/) we provide.
