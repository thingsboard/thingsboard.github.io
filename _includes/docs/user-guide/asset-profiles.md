
* TOC
{:toc}

## Overview

Since ThingsBoard 3.4.2, the Tenant administrator is able to configure common settings for multiple assets using Asset Profiles.
Each Asset has one and only profile at a single point in time.

Experienced ThingsBoard users can notice that the asset type has been deprecated in favor of the Asset Profile.
The update script will automatically create Asset Profiles based on unique Asset Types and assign them to the appropriate assets.

Let's take a look at the settings available in the asset profile one by one.

## Asset Profile settings

### Rule Chain

By default, the [Root Rule Chain](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#rule-chain) processes all incoming messages and events for any asset.
However, the more different asset types you have, the more complex your Root Rule Chain may become.
Many platform users create their Root Rule Chain for the sole purpose of sending messages to specific rule chains depending on the asset type.

To avoid this painful and mundane activity, since ThingsBoard 3.4.2, you can specify a custom root Rule Chain for your assets.
The new Rule Chain will receive asset attributes updates, and asset lifecycle(Created/Updated/Deleted) events.
This setting is available in the Asset Profile details.

{% include images-gallery.html imageCollection="ruleChainSetting" %}

### Queue

By default, the [Main](/docs/{{docsPrefix}}user-guide/rule-engine-2-5/queues/) queue will be used to store all incoming events from any asset.
The API layer will submit messages to this queue and Rule Engine will poll the queue for new messages.
However, for multiple use cases, you might want to use different queues for different assets.
For example, you might want to isolate data processing for urgent asset data and other assets or devices.
This way, even if your system has a peak load produced by millions of water meters, whenever the important asset configuration changes will be processed without delay.
Separation of the queues also allows you to customize different [submit](/docs/{{docsPrefix}}user-guide/rule-engine-2-5/queues/#queue-submit-strategy) and [processing](/docs/{{docsPrefix}}user-guide/rule-engine-2-5/queues/#queue-processing-strategy) strategies.

This setting is available in the Asset Profile details.

{% include images-gallery.html imageCollection="queueNameSetting" %}
