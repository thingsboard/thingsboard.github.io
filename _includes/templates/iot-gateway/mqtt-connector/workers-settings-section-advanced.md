![image](/images/gateway/mqtt-connector/workers-settings-advanced-1-ce.png)

- **maxNumberOfWorkers** is a maximal number of workers thread for converters (amount of workers changes dynamically, depending on load). Recommended amount 50-100;
- **maxMessageNumberPerWorker** is a maximal messages count that will be in queue for each converter worker.