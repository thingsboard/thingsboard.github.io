* TOC
{:toc}

#### Overview

Edge Queues are designed in the same way, as [Platform (Cloud) Queues](/docs/{{cloudDocsPrefix}}user-guide/rule-engine-2-5/queues/).
Please read Platform Queues documentation to get knowledge on Queues functionality in general.

#### Propagation Queues to Edge

Queues are created on the *Platform*. In the current version you **can not** create, modify or delete them on the *Edge*.

All the Queues, that are created on the Platform, are automatically propagated to every Edge instance, that is connected to the Platform. 
No additional assignment actions required from Tenant administrator or user.

#### Queues Usage in the Rule Engine

Tenant administrator is able to use any Queue in the *Edge* Rule Chain, in the same way as it used for *Platform* Rule Chain.

You can use Queues in *Checkpoint* or any analytics (**PE**) rule nodes. 
No additional configuration steps required. 
 
## Next steps

{% include templates/edge/guides-banner-edge.md %}
