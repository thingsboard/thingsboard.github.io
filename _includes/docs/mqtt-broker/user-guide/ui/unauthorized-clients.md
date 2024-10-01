
* TOC
{:toc}

**Unauthorized clients** in MQTT are those clients that attempted but failed to establish a connection with the MQTT broker due to various reasons such as bad credentials, incorrect TLS configuration etc. 

Regularly reviewing and analyzing unauthorized client attempts can help identify potential security threats and misconfigured clients.

### Unauthorized clients

On the Unauthorized Clients page, you can see and filter the list of all unauthorized client connection attempts to the broker.
The table contains the following information about each unauthorized client:
* **Client ID**. The unique identifier for the client attempting to connect.
* **Username**. The username provided by the client.
* **Password**. Indicates whether a password was provided (true/false).
* **TLS**. Indicates if TLS was used for the connection attempt (true/false).
* **Client IP**. The IP address of the client attempting to connect.
* **Reason**. Text description of the reason why client could not connect, for example, incorrect client credentials.
  * To read the full text of reason click on icon "Show reason".

{% include images-gallery.html imageCollection="unauthorized-clients" %}

### Delete unauthorized client

To delete client that had failed to pass the authentication from the Unauthorized Clients table please follow these steps:
1. Find the client in the _Unauthorized Clients_ table and click on the delete icon.
2. Confirm the action by selecting _Yes_.

To delete all unauthorized clients:
1. Click on the button "Delete all unauthorized clients".
2. Confirm delete all clients by clicking _Yes_.

{% include images-gallery.html imageCollection="delete-unauthorized-client" %}
