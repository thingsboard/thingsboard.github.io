* TOC
{:toc}

### Overview

In **ThingsBoard**, **queues** guarantee the message processing, handle occasional spikes, and keep the system up and running on extreme loads. 
**Edge Queues** are designed in the same way as **Platform (Cloud) Queues**.
For a better understanding, read the [Platform Queues documentation](/docs/{{peDocsPrefix}}user-guide/rule-engine-2-5/queues/){: target="_blank"}.

**Tenant administrators** can use any **queue** in the **Edge Rule Chain**, the same as the **Platform Rule Chain**.
**Queues** can be used in [checkpoint node](/docs/user-guide/rule-engine-2-0/nodes/flow/checkpoint/){: target="_blank"} 
or any [analytics nodes](/docs/user-guide/rule-engine-2-0/nodes/analytics/){: target="_blank"} (for a Professional Edition).

Starting with **Edge 3.9**, Edge supports **Kafka** and **in-memory** types of message queues:
* **In-Memory:** The built-in and default queue implementation. It is useful for development or proof-of-concept (PoC) environments, but is not recommended for production or any type of clustered deployments due to limited scalability.
* **Kafka:** A widely used, distributed, and durable message queue system designed to handle large volumes of data. It is well-suited for production environments where high throughput, fault tolerance, and scalability are critical.

All **queues** are created on the **Platform** and automatically propagated to each **Edge** instance connected to the **Platform**.
Only a **system administrator** user can configure queues. After configuration, new changes will apply immediately.
No additional assignment actions are required by **tenant administrator** or **user**.

In the current release, you cannot create, modify, or delete **queues** on the **Edge**. 

### Next steps

{% include templates/edge/guides-banner-edge.md %}
