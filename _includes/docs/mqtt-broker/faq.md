* TOC
{:toc}


## What is ThingsBoard MQTT Broker?

ThingsBoard MQTT Broker is an open-source ThingsBoard's software product for MQTT clients communication.
It is free for both personal and commercial usage, and you can deploy it anywhere.
If this is your first experience with the broker we recommend to review [what-is-thingsboard-mqtt-broker](/docs/mqtt-broker/getting-started-guides/what-is-thingsboard-mqtt-broker/) 
and [getting started guide](/docs/mqtt-broker/getting-started/). You can find more information on the dedicated page.

## How do I get started?

We recommend to [install](/docs/mqtt-broker/install/installation-options/) ThingsBoard MQTT Broker locally on your laptop or PC using Docker
and follow the [getting started guide](/docs/mqtt-broker/getting-started/).

## What can I do with ThingsBoard MQTT Broker?

ThingsBoard MQTT Broker allows to connect MQTT clients to it to send and receive data and provides MQTT features support.

## Where can I host ThingsBoard MQTT Broker?

You can host ThingsBoard MQTT Broker in the cloud, on-premises or locally on your laptop or PC. 
We recommend to get started with [Docker installation](/docs/mqtt-broker/install/docker/). 
You can also take a look at cluster setup [guide](/docs/mqtt-broker/install/cluster/docker-compose-setup/).

## What about security?

You can use MQTT (over SSL).
MQTT client credentials can be created to provide authentication and authorization possibilities.

## How many clients can ThingsBoard MQTT Broker support?

ThingsBoard MQTT Broker is horizontally scalable. Every broker (node) in the cluster is identical and processes some part of the overall connected clients to the cluster.
Actual performance depends on the usage scenario of connected clients - payload size and messages rate are important factors for this.
  
## Where does ThingsBoard MQTT Broker store data?

The data is stored in [PostgreSQL](https://www.postgresql.org/) database and in [Kafka](https://kafka.apache.org/).

## What license type does ThingsBoard MQTT Broker use?

ThingsBoard MQTT Broker is licensed under Apache 2.0 License. It is free for both personal and commercial usage, and you can deploy it anywhere.
 
## How to get support?

You can use troubleshooting instructions and community resources or [contact us](/docs/contact-us) and learn more about [services](/docs/services/) we provide.
