![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/external-nodes/gcp-pubsub-node.png)

**Publish message to the Google Cloud PubSub.**

Will publish message payload to the Google Cloud Platform PubSub topic. Outbound message will contain response fields (`messageId` in the Message Metadata from the GCP PubSub.   
**messageld** field can be accessed with `metadata.messageId`.
