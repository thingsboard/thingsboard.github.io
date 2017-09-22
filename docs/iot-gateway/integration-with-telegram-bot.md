---
layout: docwithnav
title: Notifications and Alarms on your smartphone using Telegram Bot

---

* TOC
{:toc}

## Overview

Telegram provides possibility to create Telegram Bots, which are considered as a third-party applications. 
You can send them messages, telemetry data or alarms using Rest API Call Plugin.


## Example

In this example, we are going to demonstrate how you can create a Telegram Bot and configure Rest API Call extension to be able to send telemetry messages to Telegram App.


### Creation of the Telegram Bot

[The BotFather](https://telegram.me/botfather) is the main bot that will help you to [create](https://core.telegram.org/bots#6-botfather) new bots and change their settings.

Once the creation of the bot is finished, you can generate an authorization token for your new bot. 
The token is a string that looks like this - **'110201543:AAHdqTcvCH1vGWJxfSeofSAs0K5PALDsaw'** that is required to authorize the bot. After that you can start to configure Rest API Call extension.

Prerequisites :

 - ThingsBoard is up and running
 - Telegram Bot is created

### REST API Call Plugin Integration with Telegram Bot

Let's configure REST API Call plugin first. Go to *Plugins* menu, click on a '+' button and create new plugin:

![image](/images/gateway/telegram-bot/rest-api-telegram-plugin-config.png)

![image](/images/gateway/telegram-bot/rest-api-telegram-plugin-config-2.png)

Please set URI scheme name, URL, port, path, authentication method and headers correctly for the Telegram endpoint where the request is going to be transferred. 
Base path includes **"/bot" + your Telegram Bot API token**.

Save plugin and click on *'Activate'* plugin button:

![image](/images/gateway/telegram-bot/rest-api-telegram-plugin-config-3.png)

### REST API Call Rule Integration with Telegram Bot

Now it's time to create appropriate Rule.

![image](/images/gateway/telegram-bot/rest-api-telegram-rule-config.png)

Add filter for **POST_TELEMETRY** message type:

![image](/images/reference/plugins/rest-api-call/post-telemetry-filter.png)

Click *'Add'* button to add the filter.

Then select *'REST API Telegram Plugin'* in the drop-down box for the Plugin field:

![image](/images/gateway/telegram-bot/rest-api-telegram-rule-config-2.png)

Add an action that will send temperature telemetry of the device to the Telegram App.
In the action you can provide request type and result code that you expected from the Telegram endpoint in case of a successful call.

#### How to get necessary Chat_ID

There are several ways to receive telemetry data or alarm using Telegram Bot:
    
  1) to your private chat with your Telegram Bot;
  
  2) to some group, where your Telegram Bot was added as a member.  

Send some message to your Bot in the private chat or in group (using /BotName "some_text", so that your bot understood you are referring to him). 
Afterwards use following command to receive incoming updates.

```bash
https://api.telegram.org/bot"YOUR_BOT_TOKEN"/getUpdates
e.g. 
https://api.telegram.org/bot110201543:AAHdqTcvCH1vGWJxfSeofSAs0K5PALDsaw/getUpdates
```    
From the outcoming data you can find field **'id'**. 

  - First option : "message" : {"message_id" : "some_id", "from" : {"**id**" : **325041853**, ...} 
  - Second option : "chat" : {"**id**" : **-236746831**, "title" : ...}

Body Template : 

```json
{"chat_id" : "PUT YOUR CHOSEN CHAT_ID", "text" : "SOME MESSAGE YOU WANT TO RECEIVE"}
```
Using **'/sendMessage'** action path is needed to refer to Telegram Bot API to send a message.

![image](/images/gateway/telegram-bot/rest-api-telegram-rule-config-action.png)

Click *'Add'* button and then activate Rule.

### Sending Temperature Telemetry

Now using access token for any of your devices send Telemetry message that contains *'temp'* telemetry:

```json
{"temp":23.4}
```

You should see **'Temperature is 23.4 degrees on device "device_name" !'** as a body request in appropriate Telegram endpoint once you'll post the message.

Here is an example of a command that publish single telemetry message to locally installed ThingsBoard:

```bash
mosquitto_pub -d -h "localhost" -p 1883 -t "v1/devices/me/telemetry" -u "$ACCESS_TOKEN" -m '{"temp":23.4}'
```