---
layout: docwithnav
title: Alarms based on geo-fencing rules

---


In this short tutorial we will explain how to configure Email Plugin to distribute alarms to recepients. 

If you are using [Live Demo](http://demo.thingsboard.io) or local [installation](/docs/user-guide/install/installation-options/) then you already have pre-configured email plugin that targets GMail.
You can open this plugin configuration page by navigating to **"Plugins -> Demo Email Plugin"** and clicking on red button in the top-right corner:

  ![image](/images/samples/alarms/plugin-edit.png)
  
Once you will open edit mode you can configure **username**, **password** and other parameters:

  ![image](/images/samples/alarms/plugin-configuration.png)

**Note** that we **DO NOT** recommend to specify username and password of your main Google account here. Especially on Live Demo instance. 
You can create one and use for test purposes.

The Email plugin implementation is based on [Java Mail](https://en.wikipedia.org/wiki/JavaMail) may be configured to other mail servers.

## Troubleshooting

Once you configure you plugin and corresponding rules, you may review statistics and events on plugin details page.
If you have configured something wrong, you should see errors logged on the corresponding tab:

  ![image](/images/samples/alarms/plugin-events.png)

