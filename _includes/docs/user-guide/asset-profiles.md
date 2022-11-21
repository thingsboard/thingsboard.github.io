
* TOC
{:toc}

## Overview

Since ThingsBoard 3.4.2, the Tenant administrator is able to configure common settings for multiple assets using Asset Profiles.

With Asset Profiles, you can set an individual Rule Chain that will be optimal for working with Assets, and set Queue rules to guarantee message processing.

Let's take a look at the settings available in the asset profile.

## Create Asset Profile

Let's create a custom asset profile.
Go to the Asset Profiles on the Profiles tab and click on the plus button to add a new asset profile.

{% if docsPrefix == null %}
![image](/images/user-guide/asset-profiles/asset-profile-add-1-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
![image](/images/user-guide/asset-profiles/asset-profile-add-1-pe.png)
{% endif %}

## Asset Profile settings

### Rule Chain

By default, the [Root Rule Chain](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#rule-chain) processes all incoming messages and events for any entity.
However, the more different entity types you have, the more complex your Root Rule Chain may become.

Since ThingsBoard 3.4.2, you can specify a custom root Rule Chain for your assets.
In the custom root Rule Chain, you may create individual data processing rules for different types of assets.
This setting is available when you create an asset profile and in the asset profile details.

{% if docsPrefix == null %}
![image](/images/user-guide/asset-profiles/asset-profile-rule-chain-1-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
![image](/images/user-guide/asset-profiles/asset-profile-rule-chain-1-pe.png)
{% endif %}


{% if docsPrefix == null %}
![image](/images/user-guide/asset-profiles/asset-profile-rule-chain-2-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
![image](/images/user-guide/asset-profiles/asset-profile-rule-chain-2-pe.png)
{% endif %}

### Queue Name

By default, the [Main](/docs/{{docsPrefix}}user-guide/rule-engine-2-5/queues/) queue will be used to store all incoming messages and events from any entity.
The transport layer will submit messages to this queue and Rule Engine will poll the queue for new messages.
However, for multiple use cases, you might want to use different queues for different entitys.
Separation of the queues also allows you to customize different [submit](/docs/{{docsPrefix}}user-guide/rule-engine-2-5/queues/#queue-submit-strategy) and [processing](/docs/{{docsPrefix}}user-guide/rule-engine-2-5/queues/#queue-processing-strategy) strategies.

This setting is available when you create an asset profile and in the asset profile details.

{% unless docsPrefix == 'paas/' %}
{% capture difference %}
**Please note:**
<br>
that if you choose to use a custom queue, you should configure it in the [thingsboard.yml](/docs/{{docsPrefix}}user-guide/install/config/#thingsboard-core-settings) file before you using it. 
{% endcapture %}
{% include templates/info-banner.md content=difference %}
{% endunless %}

{% if docsPrefix == null %}
![image](/images/user-guide/asset-profiles/asset-profile-queue-1-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
![image](/images/user-guide/asset-profiles/asset-profile-queue-1-pe.png)
{% endif %}


{% if docsPrefix == null %}
![image](/images/user-guide/asset-profiles/asset-profile-queue-2-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
![image](/images/user-guide/asset-profiles/asset-profile-queue-2-pe.png)
{% endif %}

## Related guides

You can use the following links to check out the related guides:

{% if docsPrefix == null %}
- [Rule Chains](/docs/{{peDocsPrefix}}user-guide/ui/rule-chains/)
- [Queue](/docs/{{peDocsPrefix}}user-guide/rule-engine-2-5/queues/)
- [Assets](/docs/{{peDocsPrefix}}user-guide/ui/assets/)
- [Entities and Relations](/docs/{{peDocsPrefix}}user-guide/entities-and-relations/)
{% endif %}
{% if docsPrefix == "pe/" %}
- [Rule Chains](/docs/pe/user-guide/ui/rule-chains/)
- [Queue](/docs/pe/user-guide/rule-engine-2-5/queues/)
- [Assets](/docs/pe/user-guide/ui/assets/)
- [Entities and Relations](/docs/pe/user-guide/entities-and-relations/)
{% endif %}
{% if docsPrefix == "paas/" %}
- [Rule Chains](/docs/paas/user-guide/ui/rule-chains/)
- [Assets](/docs/paas/user-guide/ui/assets/)
- [Entities and Relations](/docs/paas/user-guide/entities-and-relations/)
{% endif %}