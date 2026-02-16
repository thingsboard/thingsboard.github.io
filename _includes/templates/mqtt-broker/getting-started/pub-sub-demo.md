##### Subscribe to topic

To subscribe to the **sensors/temperature** topic and start receiving messages, use the following command:

```bash
mosquitto_sub -d -h demo.tbmq.io -p 1883 -t sensors/temperature -q 1 -u demo
```
{: .copy-code}

Once connected, you can view the session information in the UI by navigating to the _Sessions_ page.

If you have signed up for a demo account, log in to [demo.tbmq.io](https://demo.tbmq.io){:target="_blank"} and navigate to the _Sessions_ page to see all active sessions, including your newly created session.

##### Publish message

To publish a message to the **sensors/temperature** topic, use the following command:

```bash
mosquitto_pub -d -h demo.tbmq.io -p 1883 -t sensors/temperature -m 32 -q 1 -u demo
```
{: .copy-code}
