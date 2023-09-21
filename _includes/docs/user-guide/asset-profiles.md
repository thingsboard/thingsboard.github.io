
* TOC
{:toc}

## Overview

Since ThingsBoard 3.4.2, the Tenant administrator is able to configure common settings for multiple assets using Asset Profiles.
Each Asset has one and only profile at a single point in time.
Experienced ThingsBoard users can notice that the asset type has been deprecated in favor of the Asset Profile.
The update script will automatically create Asset Profiles based on unique Asset Types and assign them to the appropriate assets.

Asset Profile allows you to select the [Rule Chain](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#rule-chain) and [Queue](/docs/{{docsPrefix}}user-guide/rule-engine-2-5/queues/) to be used by the [Rule Engine](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview) for processing of the asset data.
Let's take a look at the settings available in the asset profile.

## Create Asset Profile

To create an asset profile, go to the Asset Profiles on the Profiles tab and click on the plus button to add a new asset profile.

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/asset-profile/asset-profile-add-1-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
![image](https://img.thingsboard.io/user-guide/asset-profile/asset-profile-add-1-pe.png)
{% endif %}

## Asset Profile settings

### Rule Chain

By default, the [Root Rule Chain](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#rule-chain) processes all incoming messages and events for any asset.
However, the more different asset types you have, the more complex your Root Rule Chain may become.
Many platform users create their Root Rule Chain for the sole purpose of sending messages to specific rule chains depending on the asset type.

To avoid this painful and mundane activity, since ThingsBoard 3.4.2, you can specify a custom Rule Chain for your assets.
The new Rule Chain will receive asset attributes updates, and asset lifecycle(Created/Updated/Deleted) events.
This setting is available in the Asset Profile details.

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/asset-profile/asset-profile-rule-chain-1-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
![image](https://img.thingsboard.io/user-guide/asset-profile/asset-profile-rule-chain-1-pe.png)
{% endif %}

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/asset-profile/asset-profile-rule-chain-2-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
![image](https://img.thingsboard.io/user-guide/asset-profile/asset-profile-rule-chain-2-pe.png)
{% endif %}

### Queue

By default, the [Main](/docs/{{docsPrefix}}user-guide/rule-engine-2-5/queues/) queue will be used to store all incoming events from any asset.
The API layer will submit messages to this queue and Rule Engine will poll the queue for new messages.
However, for multiple use cases, you might want to use different queues for different assets.
For example, you might want to isolate data processing for urgent asset data and other assets or devices.
This way, even if your system has a peak load produced by millions of water meters, whenever the important asset configuration changes will be processed without delay.
Separation of the queues also allows you to customize different [submit](/docs/{{docsPrefix}}user-guide/rule-engine-2-5/queues/#queue-submit-strategy) and [processing](/docs/{{docsPrefix}}user-guide/rule-engine-2-5/queues/#queue-processing-strategy) strategies.

This setting is available when you create an Asset Profile and in the Asset Profile details.

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/asset-profile/asset-profile-queue-1-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
![image](https://img.thingsboard.io/user-guide/asset-profile/asset-profile-queue-1-pe.png)
{% endif %}


{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/asset-profile/asset-profile-queue-2-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
![image](https://img.thingsboard.io/user-guide/asset-profile/asset-profile-queue-2-pe.png)
{% endif %}

## Related guides

You can use the following links to check out the related guides:

{% if docsPrefix == null %}
 - [Rule Chains](/docs/{{peDocsPrefix}}user-guide/ui/rule-chains/)
 - [Queues](/docs/{{peDocsPrefix}}user-guide/rule-engine-2-5/queues/)
 - [Assets](/docs/{{peDocsPrefix}}user-guide/ui/assets/)
 - [Entities and Relations](/docs/{{peDocsPrefix}}user-guide/entities-and-relations/)
  {% endif %}
  {% if docsPrefix == "pe/" %}
 - [Rule Chains](/docs/pe/user-guide/ui/rule-chains/)
 - [Queues](/docs/pe/user-guide/rule-engine-2-5/queues/)
 - [Assets](/docs/pe/user-guide/ui/assets/)
 - [Entities and Relations](/docs/pe/user-guide/entities-and-relations/)
  {% endif %}
  {% if docsPrefix == "paas/" %}
 - [Rule Chains](/docs/paas/user-guide/ui/rule-chains/)
 - [Assets](/docs/paas/user-guide/ui/assets/)
 - [Entities and Relations](/docs/paas/user-guide/entities-and-relations/)
  {% endif %}