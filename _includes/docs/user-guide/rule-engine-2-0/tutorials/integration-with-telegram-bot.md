* TOC
{:toc}

## Overview

Telegram provides a possibility to create Telegram Bots, which are considered as third-party applications. 
So, In this tutorial, we are going to demonstrate how you can create a Telegram Bot<br>
and configure your ThingsBoard rule engine to be able to send notifications to Telegram App using Rest API Call extension.

## Use case

This tutorial is based on the [create & clear alarms](/docs/user-guide/rule-engine-2-0/tutorials/create-clear-alarms/#use-case) tutorial and it's use case. 
We will reuse the rule chains from above mentioned tutorial and will add few more rule nodes to integrate with Telegram   

Let's assume your device is using DHT22 sensor to collect and push temperature readings to ThingsBoard. 
DHT22 sensor is good for -40 to 80°C temperature readings.We want to generate Alarms if temperature is out of good range and send notifications to Telegram App when the alarm was created.

In this tutorial we will configure ThingsBoard Rule Engine to: 

- Send a message notification to the user if the alarm was created.

- Add current alarm type and it originator to the message body using Script Transform node.

## Prerequisites 

We assume you have completed the following guides and reviewed the articles listed below:

  * [Getting Started](/docs/{{docsPrefix}}getting-started-guides/helloworld/) guide.
  * [Rule Engine Overview](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/).
  * [Create & clear alarms](/docs/user-guide/rule-engine-2-0/tutorials/create-clear-alarms/) guide.

## Message flow  

In this section, we explain the purpose of each node in this tutorial:

- Node A: [**Transform Script**](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/transformation-nodes/#script-transformation-node) node.
  - This node will be used to creating a body of the Telegram message notification.  
- Node B: [**REST API Call**](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/external-nodes/#rest-api-call-node) node.
  - This node will send Telegram message payload to the configured REST endpoint. In our case, it is Telegram REST API.

## Creation of the Telegram Bot

[The BotFather](https://telegram.me/botfather) is the main bot that will help you to [create](https://core.telegram.org/bots#6-botfather) new bots and change their settings.

Once the creation of the bot is finished, you can generate an authorization token for your new bot. 
The token is a string that looks like this - **'110201543:AAHdqTcvCH1vGWJxfSeofSAs0K5PALDsaw'** that is required to authorize the bot. 
    
Prerequisites :

 - ThingsBoard is up and running
 - Telegram Bot is created

### Getting the Chat ID

In the next step, we need to retrieve a Chat ID. The Chat ID is needed to send messages via the HTTP API. 

There are several ways to get the Chat ID:

 - First of all, you need send some message to your Bot:
 
    - in the private chat; 
    
       ![image](https://img.thingsboard.io/gateway/telegram-bot/private-msg-to-bot.png)    
    
    - in the group where your Bot was added as a member.
    
       ![image](https://img.thingsboard.io/gateway/telegram-bot/msg-to-bot-in-chat.png)    
      
    <br> where **ThingsBoard_Bot** is name of the Telegram bot.

 - Next, open your web browser and enter the following URL:

```bash
https://api.telegram.org/bot"YOUR_BOT_TOKEN"/getUpdates

"YOUR_BOT_TOKEN" has to be replaced by the authentication token of your bot, e.g.:

https://api.telegram.org/bot110201543:AAHdqTcvCH1vGWJxfSeofSAs0K5PALDsaw/getUpdates
```



From the outcoming data you can find field **'id'**. This is the so-called chat_id. 

 - First option:

![image](https://img.thingsboard.io/gateway/telegram-bot/first-option.png)

 - Second option:

![image](https://img.thingsboard.io/gateway/telegram-bot/second-option.png)

After that, you can start to configure Rule engine to use Rest API Call extension.

## Configure Rule Chains

In this tutorial, we used Rule Chains from [create & clear alarms](/docs/user-guide/rule-engine-2-0/tutorials/create-clear-alarms/) tutorial.
We modified Rule Chain **Create & Clear Alarms** by adding nodes that was described above in the section [Message flow](#message-flow)<br>
 and renamed this rule chain to: **Create/Clear Alarms & send notifications to Telegram**.

<br>The following screenshots show how the above Rule Chains should look like:
 
  - **Create/Clear Alarms & send notifications to Telegram:**

![image](https://img.thingsboard.io/gateway/telegram-bot/send-to-telegram-chain.png)

 - **Root Rule Chain:**

![image](https://img.thingsboard.io/gateway/telegram-bot/root-rule-chain.png)

<br> 


The following section shows you how to modify this rule chain from scratch.
<br> 

### Modify **Create/Clear Alarm & Send Email**

#### Adding the required nodes

In this rule chain, you will create 2 nodes as it will be explained in the following sections:
 
##### Node A: **Transform Script**

- Add the **Transform Script** node and connect it to the **Create Alarm** node with a relation type **Created**.
 <br>This node will use for creating a body of the message notification.
 <br>Body Template must have 2 parameters: 
  
   - chat_id;
  
   -  text.
  
   this is an example of the outbound message:
  
```json
{"chat_id" : "PUT YOUR CHOSEN CHAT_ID", "text" : "SOME MESSAGE YOU WANT TO RECEIVE"}
```
  
 - To do this use the following script: 
 
 {% highlight javascript %}
 var newMsg ={};
 newMsg.text = '"' +  msg.name + '"' + " alarm was created for device: " + '"' + metadata.deviceName + '"';
 newMsg.chat_id = 337878729; //has to be replaced by the actual chat id
 return {msg: newMsg, metadata: metadata, msgType: msgType};{% endhighlight %}
      
- Enter the Name field as **New telegram message**.  
  
![image](https://img.thingsboard.io/gateway/telegram-bot/transform-script.png)
   
##### Node B: **REST API Call**
- Add the **REST API Call** node and connect it to the **Transform Script** node with a relation type **Success**.
  <br>This node will send full Message payload to the configured REST endpoint. In our case, it is the Telegram REST API.
  <br>At the scope of this tutorial, we will use **'/sendMessage'** action path to refer to Telegram Bot API to send a message.

  
- Fill in the fields with the input data shown in the following table: 
  
  <table style="width: 25%">
    <thead>
        <tr>
            <td><b>Field</b></td><td><b>Input Data</b></td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Name</td>
            <td>REST API telegram Call</td>
        </tr>
        <tr>
            <td>Endpoint URL pattern</td>
            <td>https://api.telegram.org/bot"YOUR_BOT_TOKEN"/sendMessage</td>
        </tr>
        <tr>
            <td>Request method</td>
            <td>POST</td>
        </tr>
        <tr>
            <td>Header</td>
            <td>Content-Type</td>
        </tr>
        <tr>
            <td>Value</td>
            <td>application/json</td>
        </tr>
     </tbody>
  </table>
     
![image](https://img.thingsboard.io/gateway/telegram-bot/rest-api-telegram-node.png)


## Post telemetry and verify

For posting device telemetry we will use the Rest APIs, [Telemetry upload APIs](/docs/{{docsPrefix}}reference/http-api/#telemetry-upload-api). For this we will need to
copy device access token from then device **Thermostat Home**. 

![image](https://img.thingsboard.io/gateway/telegram-bot/copy-token.png)


Lets post temperature = 99. Alarm should be created:

{% highlight bash %}
curl -v -X POST -d '{"temperature":99}' http://localhost:8080/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"

**you need to replace $ACCESS_TOKEN with actual device token**
{% endhighlight %}

You should understand that message won't be sent to the Telegram App when the alarm was updated, only in the case when the alarm will be created. 

Finally, we can see that the message was received with the correct values:

- first option:

![image](https://img.thingsboard.io/gateway/telegram-bot/msg-received-first-way.png)


- second option: 

![image](https://img.thingsboard.io/gateway/telegram-bot/msg-received-second-way.png)


Also, you can:

  - configure Alarm Details function in the Create and Clear Alarm nodes.
    
  - configure the Dashboard by adding an alarm widget to visualize the alarms.
  
  - define other additional logic for alarm processing, for example, sending an email.

Please refer to the links under the **See Also** section to see how to do this.
  
<br>

## See Also

- [Create & Clear Alarms: alarm details:](/docs/user-guide/rule-engine-2-0/tutorials/create-clear-alarms-with-details/#step-2-createupdate-alarm) guide - to learn how to configure Alarm Details function in Alarm nodes.

- [Create & Clear Alarms: configure dashboard](/docs/user-guide/rule-engine-2-0/tutorials/create-clear-alarms-with-details/#configure-device-and-dashboard) guide - to learn how to add an Alarm widget to the dashboard.

- [Send Email](/docs/user-guide/rule-engine-2-0/tutorials/send-email/) tutorial.

## Next steps

{% assign currentGuide = "HardwareSamples" %}{% include templates/multi-project-guides-banner.md %}
