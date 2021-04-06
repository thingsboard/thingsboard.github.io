If you are using <code>RETRY_ALL, RETRY_FAILED, RETRY_TIMED_OUT</code> or <code>RETRY_FAILED_AND_TIMED_OUT</code> strategy for some rule-engine queue, it is possible that some failed node could block the whole processing of the messages in this queue.

Here what you can do to find the reason of the issue:

- Analyze [Rule Engine Statistics Dashboard](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#rule-engine-statistics). Here you can find out if some of your messages failed or timed-out.
Also in the bottom side of the dashboard you can find description of the exceptions inside the rule-engine with the name of the problematic rule-node.

- After finding out what rule-node is failing you can [enable DEBUG](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#debugging) and see what messages cause the failure of the rule-node and look at the detailed error description.

**Tip:** Separate unstable and test use-cases from other rule-engine by creating a separate queue. In this case failure will only affect the processing of this separate queue, and not the whole system.
You can configure this logic to happen automatically for the device by using [Device Profile](/docs/{{docsPrefix}}user-guide/device-profiles/#queue-name) feature. 

**Tip:** Handle <b>Failure</b> events for all rule-nodes that connect to some external service (REST API call, Kafka, MQTT etc).
This way you guaranty that your rule-engine processing won't stop in case of some failure on the side of external system.
You can store failed message in DB, send some notification or just <b>log</b> message.