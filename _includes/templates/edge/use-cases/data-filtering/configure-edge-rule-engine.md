We will update "Edge Root Rule Chain" that will be saving on the edge 10 sensor readings. 
In the rule chain we add rule node that transforms incoming messages and pushes to the cloud message only with distance readings.
Here is the final configuration of the edge root rule chain:

{% include images-gallery.html imageCollection="rootRuleChainPreview" %}

In the next steps we are going to create **JavaScript** node to filter data. 
JavaScript for script node will create an empty object *newMsg*, add property "distance" with corresponding value from the "In-vehicle monitoring system" and send further object *newMsg* as a new message:

{% highlight javascript %}
var newMsg = {};
newMsg.distance = msg.distance;
return { msg: newMsg, metadata: metadata, msgType: msgType }; {% endhighlight %}

Please use this snippet in the next steps, if required.

Here are the steps to update default edge "Root Rule Chain" to the rule chain above:

{% include images-gallery.html imageCollection="updateRootRuleChain" showListImageTitles="true" %}

Now let's open ThingsBoard **Edge** UI to see updated root rule chain:

{% include images-gallery.html imageCollection="updateRootRuleChainEdge" showListImageTitles="true" %}