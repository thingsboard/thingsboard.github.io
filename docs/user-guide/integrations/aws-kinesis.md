---
layout: docwithnav
title: AWS Kinesis Integration
description: AWS Kinesis Integration Guide 

---

{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}


https://docs.aws.amazon.com/streams/latest/dev/fundamental-stream.html

1. Install and Configure the AWS CLI - https://docs.aws.amazon.com/streams/latest/dev/kinesis-tutorial-cli-installation.html
2. From the above step please record your AWS credentials info and region:

AWS Access Key ID: AKIA543FODNN7EXAMPLE
AWS Secret Access Key: wJalrX644FEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
Default region name: us-west-2

AKIAV6SXXXXXXXTWXXV4
u+tkpAEI3vvXXXXXXXX7rTl0QlXXXXXsJBV8
eu-west-1


We'll use this information later on in the Integration configuration.

2. aws kinesis create-stream --stream-name tb-test-uplink --shard-count 1
3. aws kinesis describe-stream --stream-name tb-test-uplink
{
    "StreamDescription": {
        "KeyId": null, 
        "EncryptionType": "NONE", 
        "StreamStatus": "ACTIVE", 
        "StreamName": "tb-test", 
        "Shards": [
            {
                "ShardId": "shardId-000000000000", 
                "HashKeyRange": {
                    "EndingHashKey": "340282366920938463463374607431768211455", 
                    "StartingHashKey": "0"
                }, 
                "SequenceNumberRange": {
                    "StartingSequenceNumber": "49599874927422395224927130964668873176443726009932447746"
                }
            }
        ], 
        "StreamARN": "arn:aws:kinesis:eu-west-1:XXXXXXXXXX:stream/tb-test", 
        "EnhancedMonitoring": [
            {
                "ShardLevelMetrics": []
            }
        ], 
        "StreamCreationTimestamp": 1569503664.0, 
        "RetentionPeriodHours": 24
    }
}


4. aws kinesis put-record --stream-name tb-test-uplink --partition-key 123 --data '{"devName":"kitchen_thermostat", "devType":"thermostat", "temperature": 22}'

aws kinesis put-record --stream-name tb-test-uplink --partition-key 123 --data '{"devName":"kitchen_thermostat", "devType":"thermostat", "temperature": 22}'
{
    "ShardId": "shardId-000000000000", 
    "SequenceNumber": "49599874927422395224927130969901104123735855509150892034"
}


5. 
var data = decodeToJson(payload);
var deviceName = data.devName;
var deviceType = data.devType;

var result = {
    deviceName: deviceName,
    deviceType: deviceType,
    telemetry: {
         temperature: data.temperature
    }
};

function decodeToString(payload) {
    return String.fromCharCode.apply(String, payload);
}

function decodeToJson(payload) {
    var str = decodeToString(payload);
    var data = JSON.parse(str);
    return data;
}

return result;


6. var data = {
    devName: "kitchen_thermostat",
    version: msg.version
};

var result = {
    contentType: "JSON",
    data: JSON.stringify(data),
    metadata: {
        streamName: "tb-test-downlink",
        partitionKey: "1234",
    }

};

return result;


7. Describe 'Use credentials from the Amazon EC2 Instance Metadata Service'
8. Describe 'Use Consumers with Enhanced Fan-Out'

9. aws kinesis get-shard-iterator --shard-id shardId-000000000000 --shard-iterator-type TRIM_HORIZON --stream-name tb-test-uplink
{
    "ShardIterator": "AAAAAAAAAAHHpat8cWmSZ1LSNg2oOra2yaRN/75ZhdwXFNZjnznXU1BQVjo9B+IVi3Pk6ltKN3V8Vhihi74MtXvG9rKcL9VRP1xRebo/NVjaMWd5FmAcp1rvs/DOahY+0FVm6UC1fKFwUXmgnsCzxkU9V8G9cFyGU/4Vvpf2PcrGsHG/JtNouCYT4wwdoXZ6FIFTuWdW7/Qs48PAZCkSjluwA7K1pld4"
}


10. aws kinesis get-records --shard-iterator AAAAAAAAAAHlZIxAeL2mL89lR7GyyMXUUOovzvzE3gkUhzq6Ko9qADl6KyIn0lFaBbY+xaIbaqoId/vgXE99KEezsEtuwCtNC6xYZtizRThkookpXAhiriIMMbyvKgYnbeRFlHNOzIZlt28QLKGovV3qaftzP32LQ9RLcKh9X0tTm+5iiPXqGGYOIv/dfhCigOsBm740XyvL4EyooX5acL2IFf4FCuek


11. aws kinesis create-stream --stream-name tb-test-downlink --shard-count 1

12. aws kinesis describe-stream --stream-name tb-test-downlink

13. aws kinesis get-shard-iterator --shard-id shardId-000000000000 --shard-iterator-type TRIM_HORIZON --stream-name tb-test-downlink
{
    "ShardIterator": "AAAAAAAAAAHHpat8cWmSZ1LSNg2oOra2yaRN/75ZhdwXFNZjnznXU1BQVjo9B+IVi3Pk6ltKN3V8Vhihi74MtXvG9rKcL9VRP1xRebo/NVjaMWd5FmAcp1rvs/DOahY+0FVm6UC1fKFwUXmgnsCzxkU9V8G9cFyGU/4Vvpf2PcrGsHG/JtNouCYT4wwdoXZ6FIFTuWdW7/Qs48PAZCkSjluwA7K1pld4"
}


14. aws kinesis get-records --shard-iterator AAAAAAAAAAHlZIxAeL2mL89lR7GyyMXUUOovzvzE3gkUhzq6Ko9qADl6KyIn0lFaBbY+xaIbaqoId/vgXE99KEezsEtuwCtNC6xYZtizRThkookpXAhiriIMMbyvKgYnbeRFlHNOzIZlt28QLKGovV3qaftzP32LQ9RLcKh9X0tTm+5iiPXqGGYOIv/dfhCigOsBm740XyvL4EyooX5acL2IFf4FCuek


15. voba@voba-desktop:~/projects/thingsboard.github.io$ aws kinesis get-records --shard-iterator AAAAAAAAAAFQtL3oAo74irn+ccC3vghADqqmh2MH+HKI9qYTi1NP957vDe8KyV6VdQ+I4shIP0HIRRVYyTZs0W9v6jaai9LevlJayMw6TgdPkVIGmV5SYZF8sGWgtd0wJuRqB+6QwCAUHQ52dgT4m+lypNSzJJw4Mo6h+9Wdk5fpwQxu/GlM8J+Uqblnq4EEr17FkWLahikaSZXktfLq5dh23+LEIc22
{
    "Records": [
        {
            "Data": "eyJkZXZOYW1lIjoia2l0Y2hlbl90aGVybW9zdGF0IiwidmVyc2lvbiI6InYuMC4xMSJ9", 
            "PartitionKey": "1234", 
            "ApproximateArrivalTimestamp": 1569609612.27, 
            "SequenceNumber": "49599912710236940383450082324919185009278025474345271298"
        }
    ], 
    "NextShardIterator": "AAAAAAAAAAFQlgSyxBdpKxlRrocJCYT9YDrCi/vxl0sstJgg4CM+pttVsK4AjjQwJ/QJsags5vdpQdopaqk9aKefAUOWobgwHVaZvhI4tdkmHBr45uO0Hq9AxUlKDxfiYbM0qgN33+5SvGxU8gJBUihYFY4ydPWOWdVTf2lOxp0a9X6DFrjsUqwMXR9skLw8/lQkBmHVFBlFURPy+z/AMuYHga5mDch/", 
    "MillisBehindLatest": 0
}

16. {"devName":"kitchen_thermostat","version":"v.0.11"}

## Overview
AWS Kinesis provides easily collect, process, and analyze video and data streams in real time, so you can get timely insights and react quickly to new information. 
After integrating AWS Kinesis with the Thingsboard, you can process and visualize data from AWS Kinesis streams in the Thingsboard IoT platform.


## AWS Kinesis setup

##### Register Application
The first step is to create an **application** in TheThingsNetwork console. Go to [console](https://console.thethingsnetwork.org/){:target="_blank"}, open 
**Applications** section, press **add application** button and fill required fields.

- **Application ID** - tb_applciation
- **Handler registration** - ttn-handler-eu

Handler registration - used to identify region where application will be registered. In our example it will be *eu* region.

![image](/images/user-guide/integrations/ttn/ttn-add-application.png)


##### Payload Decoder
Our device submits data in binary format. We have 2 options where to decode this data:

- **TheThingsNetwork decoder** - data will be decoded before entering the Thingsboard
- **Thingsboard converters** - uplink/downlink converters will be used to decode data from binary format into JSON

In this tutorial, we will make an initial transformation into JSON with TTN decoder and then use Thingsboard converters for correct data processing.
In real life scenario, it is up to you where to decode/encode data, because it is possible to do this on any side.

After application registered in TTN, go to **payload_formats**, select decoder function. We will take the first byte as a temperature value from a device 
and transform it into JSON.

Decode Function {% highlight javascript %}
function Decoder(bytes, port) {
  var decoded = {temperature: bytes[0]};
  return decoded;
}
{% endhighlight %}
 
Output json:
{% highlight json %}
{
  "temperature": 15
}
{% endhighlight %}

![image](/images/user-guide/integrations/ttn/ttn-decoder.png)

Press **Save payload function**

##### Device Registration in TheThingsNetwork

Next step is a Device creation in the TTN. Open **Devices** page and press **register device**

- Device ID - thermostat_a
- Device EUI - press **generate** button for generating random identified

![image](/images/user-guide/integrations/ttn/ttn-add-device.png)

Press **Register** button.


## Integration with the Thingsboard
In the TheThingsNetwork, we already make all required configuration (register device, decoder function, and register application). Now we can start configuring the Thingsboard.

##### Thingsboard Uplink Data Converter

First, we need to create Uplink Data converter that will be used for receiving messaged from the TTN. The converter should transform incoming payload into the required message format.
Message must contains **deviceName** and **deviceType**. Those fields are used for submitting data to the correct device. If a device was not found then new device will be created.
Here is how payload from TheThingsNetwork will look like:
{% highlight json %}
{
    "app_id": "tb_platform",
    "dev_id": "thermostat_a",
    "hardware_serial": "*********",
    "port": 1,
    "counter": 0,
    "payload_raw": "Dw==",
    "payload_fields": {
        "temperature": 15
    },
    "metadata": {
        "time": "2018-06-07T17:31:18.670792607Z"
    }
}
{% endhighlight %}

We will take **dev_id** and map it to the **deviceName** and **app_id** map to the **deviceType**. But you can use another mapping in your specific use cases.
Also, we will take the value of the **temperature** field and use it as a device telemetry. 

Go to **Data Converters** and create new **uplink** Converter with this function: {% highlight javascript %}
var data = decodeToJson(payload);
var deviceName = data.dev_id;
var deviceType = data.app_id;

var result = {
    deviceName: deviceName,
    deviceType: deviceType,
    telemetry: {
         temperature: data.payload_fields.temperature
    }
};

function decodeToString(payload) {
    return String.fromCharCode.apply(String, payload);
}

function decodeToJson(payload) {
    var str = decodeToString(payload);
    var data = JSON.parse(str);
    return data;
}

return result;
{% endhighlight %}

![image](/images/user-guide/integrations/ttn/tb-converter.png)


##### Thingsboard Downlink Data Converter
For sending Downlink messages from the Thingsboard to the device inside TTN, we need to define downlink Converter.
In general, output from Downlink converter should have the following structure:
{% highlight json %}
{
    "contentType": "JSON",
    "data": "{\"port\":1,\"confirmed\":false,\"payload_fields\":{\"version\":\"0.11\"}}",
    "metadata": {
        "devId": "thermostat_a"
    }
}
{% endhighlight %}

- **contentType** - defines how data will be encoded {TEXT \| JSON \| BINARY}
- **data** - actual data that will be sent to the device in TTN. More details about API can be foind in this [TTN API](https://www.thethingsnetwork.org/docs/applications/mqtt/api.html){:target="_blank"}
- **metadata** - in this object you should place correct devId value that will be used to identify target device in TTN

Go to **Data Converters** and create new **downlink** Converter with this function: {% highlight javascript %}
var data = {
      port: 1,                
      confirmed: false,      
      payload_fields: {
          version: msg.version
      }
    };

var result = {
    contentType: "JSON",
    data: JSON.stringify(data),
    metadata: {
        devId: 'thermostat_a'
    }

};

return result;
{% endhighlight %}

This converter will take **version** field from the incoming message and add it is a payload field in the outbound message. Destination device is a **thermostat_a** device.

![image](/images/user-guide/integrations/ttn/tb-downlink-converter.png)

##### TTN Integration

Next we will create Integration with TheThingsNetwork inside the Thingsboard. Open **Integrations** section and add new Integration with type
**TheThingsNetwork**

- Name: ttn_integration
- Type: TheThingsNetwork
- Uplink data converter: ttn_converter
- Downlink data converter: ttn_downlink_version
- Region: eu (region where your application was registered inside TTN)
- Application ID: tb_platform (use **Application ID** from TTN)
- Access Key: use **Access Key** from TTN

![image](/images/user-guide/integrations/ttn/tb-integration.png)

## Validation

##### Validate Uplink Messages
Lets verify our integration. Go to the device **thermostat_a** page in TheThingsNetwork. Scroll to the **Simulate Uplink** section.
Our device will publish temperature **0F** (15). So enter **0F** into payload field and press **Send** button.

![image](/images/user-guide/integrations/ttn/ttn-send-payload.png)

Go to **Device Group** -> **All** -> **thermostat_a** - you can see that 

- new device was registered in the thingsboard
- In the **Latest Telemetry** section you will see that last submitted temperature = 15.

![image](/images/user-guide/integrations/ttn/tb-device-telemetry.png)

##### Validate Downlink Messages
For testing Downlink Messages, we will update our Root Rule Chain to send downlink message when device attribute is changed.
Open and edit **Root Rule Chain**. Add **Integration Downlink** Action node and connect it with the **Message Type Switch** Node using relation 
**Attributes Updated**
 
![image](/images/user-guide/integrations/ttn/tb-add-rule-downlink.png)

![image](/images/user-guide/integrations/ttn/tb-route-to-downlink.png)

Save Changes.

Go to **Device Group** -> **All** -> **thermostat_a** -> attributes section. We will add **Shared attribute** with name **version** and
value **v.0.11**

![image](/images/user-guide/integrations/ttn/tb-add-version.png)

By making this step, we triggered downlink message to the device **thermostat_a** and this message should contains version field value. 
Open TTN Console, navigate to **tb_platfrom** application, to the section **Data**. And we see that Downlink message was received.

![image](/images/user-guide/integrations/ttn/ttn-downlink-verified.png)

## See also
With this integration you can also configure Downlink converters and trigger required actions using Rule Engine nodes.

- [Integration Overview](/docs/user-guide/integrations/) 
- [Uplink Converters](/docs/user-guide/integrations/#uplink-data-converter) 
- [DownLink Converters](/docs/user-guide/integrations/#downlink-data-converter) 
- [Rule Engine](/docs/user-guide/rule-engine-2-0/re-getting-started/) 


## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/guides-banner.md %}
