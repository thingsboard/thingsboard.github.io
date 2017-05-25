---
layout: docwithnav
assignees:
- ashvayka
title: Plugins
description: Thingsboard Plugins management

---

* TOC
{:toc}

## Plugins page

Plugins Administration UI page displays a table of system and tenant specific plugins. Each plugin has a separate card.
You are able to do following operations:

 - Import Or Create new Plugin
 - Export Plugin to JSON
 - Suspend and Activate particular Plugin
 - Delete the Plugin
 
See [**Rule Engine**](/docs/user-guide/rule-engine) documentation for more details.

![image](/images/user-guide/ui/plugins.png)

## Plugin details

Each plugin is a represented as a separate card. You are able to edit plugin configuration and review the plugin events in the Plugin details panel.
 
![image](/images/user-guide/ui/plugin-details.png)

You are also able to review plugin life-cycle events, stats and errors during message processing.
Please note that in case of frequent errors the error messages are sampled. 

![image](/images/user-guide/ui/plugin-events.png) 

## Plugin import/export

#### Plugin export

You are able to export your plugin to JSON format and import it to the same or another Thingsboard instance.

In order to export plugin you should navigate to the **Plugins** page and click on the export button located on the particular plugin card.
 
![image](/images/user-guide/ui/plugin-export.png)

#### Plugin import

Similar, to import the plugin you should navigate to the **Plugins** page and click on the big "+" button in the bottom-right part of the screen and then click on the import button. 

![image](/images/user-guide/ui/plugin-import.png)

**Note** All imported plugins are in suspended state. Don't forget to **activate** your plugin after import.

#### Troubleshooting

Possible issues while importing the plugin:

 - The corresponding plugin API Token is **already reserved**. You can choose other token and edit it directly in the source json.
 - The corresponding plugin implementation is **not available** in the server classpath.
