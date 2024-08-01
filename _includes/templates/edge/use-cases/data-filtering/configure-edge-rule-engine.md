We will update “Edge Root Rule Chain” that will be saving on the edge 10 sensor readings. In the rule chain we add rule node that transforms incoming messages and pushes to the cloud message only with distance readings. Here is the final configuration of the edge root rule chain:

{% include images-gallery.html imageCollection="rootRuleChainPreview" %}

In the next steps, we will create a [TBEL](https://thingsboard.io/docs/user-guide/tbel/) node to filter data. The [TBEL](https://thingsboard.io/docs/user-guide/tbel/) script language node will create an empty object *newMsg*, 
add a property named “distance” with the corresponding value from the “In-vehicle monitoring system”, and then send the *newMsg* object as a new message.

{% highlight javascript %}
var newMsg = {};
newMsg.distance = msg.distance;
return { msg: newMsg, metadata: metadata, msgType: msgType }; {% endhighlight %}

Here are the steps to update the default Edge "Root Rule Chain" with the provided rule chain:

{% include images-gallery.html imageCollection="updateRootRuleChain" showListImageTitles="true" %}

Now let's open ThingsBoard **Edge** UI to see updated Root Rule Chain:

{% include images-gallery.html imageCollection="updateRootRuleChainEdge" showListImageTitles="true" %}

