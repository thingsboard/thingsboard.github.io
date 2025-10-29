* TOC
{:toc}

> **ThingsBoard Edge** does not automatically sync telemetry data. 
Instead, it's **a rule-based process**. The ["push to cloud"](/docs/user-guide/rule-engine-2-0/nodes/action/push-to-cloud/){:target="_blank"}
and ["push to edge"](/docs/user-guide/rule-engine-2-0/nodes/action/push-to-edge/){:target="_blank"} rule nodes are responsible for 
the synchronization process.

### Edge → Cloud sync

Edge synchronizes data (timeseries, attributes, etc.) through the **"push to cloud"** rule node within an Edge rule chain.
When a telemetry or attribute message passes through this rule node, it's first stored locally on the Edge as a **Cloud Event** 
in either a local database or Kafka (depending on the queue type).
The event is then **asynchronously** pushed to the Cloud. This means the Edge device doesn't wait for a Cloud delivery confirmation before continuing with other tasks.
Once it reaches the Cloud, it is handled by a corresponding rule chain on the Cloud.

![edge→cloud diagram](/images/edge/user-guide/edge-cloud-telemetry-sync/edge-cloud-diagram.webp){: style="display: block; margin: auto"}

* To propagate attribute changes, connect the **Attributes updated** and **Attributes deleted** relations to the **"push to cloud"** node. 
This ensures both the **key–values** and the **scope** travel with the event. 
* The **attribute scope type** (_Server attributes, Shared attributes, or Client attributes_) is also configured within the **"push to cloud"** node.

{% include images-gallery.html imageCollection="edge-rule-chain" %}

#### Data storage on the Cloud

The database tables updated in Cloud depend entirely on your Cloud‑side rule chain.

* **To store both the latest and historical telemetry,** route telemetry to the **"save timeseries"** rule node and set **Latest values** to **"On every message"**. This will write to and update both the **timeseries** and **latest values** tables.

{% include images-gallery.html imageCollection="update-both-tables-cloud" %}

* **To store only historical telemetry,** route telemetry to the **"save timeseries"** rule node and set **Latest values** to **"Skip"**. This will update only the **timeseries** table. The **latest values** table will remain unchanged.

{% include images-gallery.html imageCollection="update-only-timeseries-cloud" %}

### Cloud → Edge sync

Similarly, Cloud synchronizes data using the ["push to edge"](/docs/user-guide/rule-engine-2-0/nodes/action/push-to-edge/){:target="_blank"} rule node within a Cloud rule chain.

The node converts the message into an **Edge Event** and stores it in the **Edge queue** on the Cloud (_either a local database or Kafka, depending on the queue type_). 
The event is then **asynchronously** pushed to the target Edge.
Once it reaches the Edge instance, it is handled by a corresponding rule chain on the Edge.

![cloud→edge diagram](/images/edge/user-guide/edge-cloud-telemetry-sync/cloud-edge-diagram.webp){: style="display: block; margin: auto"}

* To propagate attribute changes, connect the **Attributes updated** and **Attributes deleted** relations to the **"push to edge"** node.
  This ensures both the **key–values** and the **scope** travel with the event. 
* The **attribute scope type** (_Server attributes, Shared attributes, or Client attributes_) is also configured within the **"push to edge"** node.

{% include images-gallery.html imageCollection="cloud-rule-chain" %}

#### Data storage on the Edge 

Edge always keeps a local, authoritative copy of the data it ingests or receives from the Cloud. This enables offline operation and quick local reactions.

* **When data is sent from a device to the Edge:**  
Edge writes the telemetry data to the local database first. Based on your rule chain configuration, Edge decides whether to push it to the Cloud

{% include images-gallery.html imageCollection="push-telemetry-to-cloud" %}

* **If an Edge event arrives from the Cloud:** 

  * **To store both the latest and historical telemetry,** route telemetry to the **"save timeseries"** rule node and set **Latest values** to **"On every message"**. This will write to and update both the **timeseries** and **latest values** tables.

{% include images-gallery.html imageCollection="edge-update-both-tables" %}

  * **To store only historical telemetry,** route telemetry to the **"save timeseries"** rule node and set **Latest values** to **"Skip"**. This will update only the **timeseries** table. The **latest values** table will remain unchanged.

{% include images-gallery.html imageCollection="edge-update-only-timeseries" %}

### Next Steps

{% include templates/edge/guides-banner-edge.md %}
