##### Authorization Rules

Authorization rule patterns allow controlling what topics clients can publish/subscribe to based on **regular expression syntax**:

* **Allowing particular topic(s)** - the rule `country/.*` will allow clients to publish/subscribe messages only to topics that start with `country/`.
* **Allowing any topic** - the rule `.*` (default) will allow clients to publish/subscribe messages to any topic.
* **Forbidding all topics** - if the rule is `empty`, the client is forbidden to publish/subscribe to any topic.