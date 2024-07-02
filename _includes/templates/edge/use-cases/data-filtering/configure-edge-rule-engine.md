Configuring the **Edge** rule engine involves setting rules and parameters to filter and process data locally at the **Edge**. 

This setup ensures that only relevant and refined data is transmitted to the cloud for further analysis, storage, or action.

By leveraging edge computing capabilities, organizations can optimize bandwidth usage, reduce latency, enhance data security, and improve overall operational efficiency in cloud environments.

To demonstrate, we will update the "Edge Root Rule Chain" to locally process 10 sensor readings. Within the rule chain, we will add a transformation node to filter incoming messages, sending only those containing distance readings to the cloud. 

Below is the final configuration of the Edge Root Rule Chain:

{% include images-gallery.html imageCollection="rootRuleChainPreview" %}

In the next steps, we will create a [TBEL](https://thingsboard.io/docs/user-guide/tbel/) node to filter data. The **JavaScript** code for the script node will create an empty object *newMsg*, 
add a property named “distance” with the corresponding value from the “In-vehicle monitoring system”, and then send the *newMsg* object as a new message.

{% highlight javascript %}
var newMsg = {};
newMsg.distance = msg.distance;
return { msg: newMsg, metadata: metadata, msgType: msgType }; {% endhighlight %}

Here are the steps to update the default "Edge Root Rule Chain" with the provided rule chain:

{% include images-gallery.html imageCollection="updateRootRuleChain" showListImageTitles="true" %}

Now let's open ThingsBoard **Edge** UI to see updated Root Rule Chain:

{% include images-gallery.html imageCollection="updateRootRuleChainEdge" showListImageTitles="true" %}

