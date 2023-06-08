
* TOC
{:toc}

### Session Details

To access the detailed information of the current ThingsBoard MQTT Broker sessions, please follow these steps:

**1. Session details.** Navigate to the left-hand menu and click on 'Sessions.' Then, click on the session row. 
The details dialog will appear, providing you with basic information about the session:
* Connected Status (Connected/Disconnected).
* Connected At time. 
* Disconnected At time.
* Keep Alive (seconds) - indicates the duration for which the Broker and Client can remain without communication before the session is closed.
* Node name.
* Clean Start. If the checkbox is set to true, it means that the session is non-persistent. In other words, all information and messages from the previous persistent session will be lost upon disconnection.
* Client ID.
* Client IP.
* Client type (Device/Application).

**2. Disconnect Client.** To disconnect a client, click on the "Disconnect client" button. Please note that only `Connected` clients can be disconnected.

**3. Remove Client.** To remove a client session, click on the "Remove session" button. Keep in mind that only `Disconnected` clients can be removed.

{% include images-gallery.html imageCollection="sessions-info" %}

### Subscriptions Management

Users can view various details about the subscriptions associated with a session, such as:
* The number of current subscriptions
* Topic filters
* Quality of Service (QoS)
* The share group name for the Shared Subscriptions feature.

While session details are generally read-only, users can effectively manage their subscriptions within the session, making additions, removals, and edits as needed. 
Here are the available actions for managing subscriptions:
* To **add** a new subscription, click on the "Add Subscription" button. 
* To **remove** a subscription, click on the "Delete" icon associated with the specific subscription. 
* To **edit** existing Topic filter or QoS, make the desired changes in the provided form and click the "Update" button.

Please note that the Shared Subscriptions feature is read-only, meaning that modifications to shared subscriptions are not allowed.

![image](/images/mqtt-broker/user-guide/ui/session-subscriptions-1.png)
