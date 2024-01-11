We have added support of JSON data structures to telemetry and attributes API to simplify work with device configuration.
JSON support allows you to both upload from the device, and push nested objects to the device.
You can store one configuration JSON as a shared attribute and push it to the device. You can also process the JSON data in the rule engine and raise alarms, etc.

Therefore, this improvement minimizes the number of Database operations when ThingsBoard stores the data.
For example, “temperature” and “humidity” would be stored as separate rows in SQL or NoSQL databases in order to efficiently aggregate this data for visualization.
Since there is no need to aggregate JSON data, we can store all the content as one row instead of separate rows for each configuration item.
In some of our environments, it is possible to decrease the number of database operations more than 10 times by aggregating multiple parameters within one JSON.

Learn more about JSON value support with the [video](https://www.youtube.com/watch?v=ErV5Krwhak0&ab_channel=ThingsBoard).