We are going to update "Edge Root Rule Chain" that will handle **Alarm Created** events for "DHT22" sensor and will send appropriate commands to the "Air Conditioner" device.
Here is the final configuration of edge root rule chain:

{% include images-gallery.html imageCollection="rootRuleChainPreview" %}

In the next steps we are going to create **JavaScript** node to create appropriate RPC commands to the **Air Conditioner** device.
JavaScript for script node that will emulate enabling of Air Conditioner:

{% highlight javascript %}
var newMsg = {};
newMsg.method = "enabled_air_conditioner";
newMsg.params = {"speed": 1.0};
return { msg: newMsg, metadata: metadata, msgType: msgType }; {% endhighlight %}

Please use this snippet in the next steps, if required.

Here are the steps to update default edge "Root Rule Chain" to the rule chain above:

{% include images-gallery.html imageCollection="updateRootRuleChain" showListImageTitles="true" %}

Now let's open ThingsBoard **Edge** UI to see updated root rule chain:

{% include images-gallery.html imageCollection="updateRootRuleChainEdge" showListImageTitles="true" %}