<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.1</em></strong></td>
     </tr>
   </thead>
</table> 

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/pe/nodes/analytics-aggregate-stream.png)

Calculates MIN/MAX/SUM/AVG/COUNT/UNIQUE based on the incoming data stream. 
Groups incoming data stream based on originator id of the message (i.e. particular device, asset, customer), 
**aggregation function** (e.g. "Average", "Sum", "Min", "Max"), **aggregation interval value** (e.g. 1 minute, 6 hours) into **Intervals**.


Intervals are periodically persisted based on **interval persistence policy** and **interval check value**. Intervals are cached in memory based on **Interval TTL value**.
State of the Intervals are persisted as timeseries entities based on **state persistence policy** and **state persistence value**.
In case there is no data for certain entity, it might be useful to generate default values for those entities. 
To lookup those entities one may select **Create intervals automatically** checkbox and configure **Interval entities**.


Generates 'POST_TELEMETRY_REQUEST' messages with the results of the aggregation for particular interval.


Configuration below will calculate average hourly temperature and will persist it within one minute once the hourly interval is ended. 
In case some delayed telemetry will arrive for the particular interval, the rule node will lookup it from internal cache or from telemetry values.

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/pe/nodes/analytics-aggregate-stream-config.png)
    
The results of aggregation will be persisted to the database once per minute. Alternatively you can persist the interval on each new message to avoid any data loss in case of server outage.
In case devices for some building are not reporting any temperature readings, we can generate default value (zero) for such building on each interval by selecting "Create Intervals automatically" and 
specifying "Buildings" entity group.    

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/pe/nodes/analytics-aggregate-stream-config-2.png)

**Since TB Version 3.3.3** you can select the queue name:

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/pe/nodes/analytics-queue-name.png)
