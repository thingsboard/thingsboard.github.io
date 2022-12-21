
* TOC
{:toc}

One of the key features of the MQTT broker is to receive messages published by clients, 
filter the messages by topic, and distribute them to subscribers, and this is a crucial process that must work reliably under high load. 
In this article, we are going to describe steps that we have made to ensure that ThingsBoard MQTT Broker can constantly handle 1M connected clients 
and 1M MQTT publish messages per minute.

Herewith you can find total cost of ownership (TCO) calculations for ThingsBoard MQTT Broker deployed using AWS.
Important notice: all calculation and pricing below are approximate and are listed as an example. 
Please consult your cloud provider in order to get your accurate pricing.

### Test methodology



### Test summary


### Running tests



### How to repeat the tests

Check out the next [installation guide](/docs/mqtt-broker/install/cluster/aws-cluster-setup/) on how to deploy ThingsBoard MQTT Broker on AWS.
Additionally, check out the [folder](https://github.com/thingsboard/thingsboard-mqtt-broker/tree/perf-tests/k8s/aws) with scripts and parameters of broker used during the run.
And finally, the [performance tests tool](https://github.com/thingsboard/tb-mqtt-perf-tests).

### Conclusion

This performance test demonstrates how a ThingsBoard MQTT Broker cluster, that costs approximately 1$ per hour, can receive, 
process and send approximately 1 million messages per minute from your devices. 
We will continue our work on performance improvements and are going to publish updated performance results for the cluster of ThingsBoard MQTT Broker in the near future. 
We hope this article will be useful for people who are evaluating the platform and want to execute performance tests on their own.

Please let us know your feedback and follow our project on [GitHub](https://github.com/thingsboard/thingsboard-mqtt-broker) or [Twitter](https://twitter.com/thingsboard).