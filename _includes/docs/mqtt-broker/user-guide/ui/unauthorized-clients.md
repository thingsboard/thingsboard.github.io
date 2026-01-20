
* TOC
{:toc}

{% if docsPrefix != "pe/" %}
{% assign sinceVersion = "2.0" %}
{% include templates/mqtt-broker/since.md %}
{% endif %}

**Unauthorized clients** in MQTT are those clients that attempted but failed to establish a connection with the MQTT broker due to various reasons such as bad credentials, incorrect TLS configuration etc. 

Regularly reviewing and analyzing unauthorized client attempts can help identify potential security threats and misconfigured clients.

{% capture unauthorizedClientEnableAuth %}
The Unauthorized Clients feature functions only if the corresponding authentication method is [enabled](/docs/{{docsPrefix}}mqtt-broker/security/authentication/basic/).
{% endcapture %}
{% include templates/info-banner.md title="Check configuration" content=unauthorizedClientEnableAuth %}

## Unauthorized Clients table

On the Unauthorized Clients tab of the Authorization page, you can view and filter a list of all unauthorized client connection attempts to the broker.
The table contains the following information about each unauthorized client:
* **Last update time**. The timestamp of the last connection attempt.
* **Client ID**. The unique identifier for the client attempting to connect.
* **Username**. The username provided by the client.
* **Password**. Indicates whether a password was provided (true/false).
* **TLS**. Indicates if TLS was used for the connection attempt (true/false).
* **Client IP**. The IP address of the client attempting to connect.
* **Reason**. Text description of the reason why client could not connect, such as incorrect client credentials. To read the full text of reason, click on the "Show reason" icon.

{% include images-gallery.html imageCollection="unauthorized-clients" %}

## Reasons

Each unauthorized client connection attempt has a specific reason for access denial that TBMQ identifies and notifies users about. 
These reasons, whether related to Basic authentication, SSL/TLS or SCRAM issues, are clearly listed in the table for easy reference.

### Basic credentials

Below are the reasons related to TBMQ Basic Credentials for why a client could not be authorized, along with generalized examples and possible solutions:

1. **No Credentials Found**. No credentials found matching the given client ID and username.
  * **Example**. The client submits a client ID and username that do not match any stored credentials.
  * **Solution**. Verify and provide the correct client ID and username that match the stored credentials.
2. **Password Does Not Match**. The provided password does not match the credentials found by the given client ID and username.
  * **Example**. The client provides an incorrect password for the given client ID and username.
  * **Solution**. Ensure that the client submits the correct password.
3. **No Password Provided**. No password provided to match the credentials found by the given client ID and username.
  * **Example**. The client submits a client ID and username but omits the password.
  * **Solution**. Ensure that the client includes a password with their authentication request.
4. **Cannot Parse Basic Credentials**.
  * **Example**. The server cannot parse the Basic credentials due to a malformed configuration.
  * **Solution**. Verify that the credentials are correctly formed and parsable.

### X.509 Certificate Chain credentials

Below are the reasons related to SSL/TLS for why a client could not be authorized:

1. **Failed to Get Client Certificate CN**.
  * **Example**. The TLS handshake fails because the server could not extract client's certificate CN.
  * **Solution**. Ensure the client's certificate includes a proper CN.
2. **X509 Authentication Failure**. A failure occurred in the X509 authentication process.
  * **Example**. The certificate chain is not trusted, resulting in an X509 authentication failure.
  * **Solution**. Verify that the certificate chain is correct and trusted by the server.
3. **Peer Identity Not Verified**.
  * **Example**. The server cannot verify the identity of the client due to a missing or invalid certificate.
  * **Solution**. Ensure that the client's certificate is valid and properly configured.
4. **No Certificates in Chain**. No certificates are present in the chain to verify the client's identity.
  * **Example**. The client's certificate chain is empty or incomplete.
  * **Solution**. Provide a complete certificate chain that includes all necessary intermediate certificates.
5. **Failed to Get Certificate CN**. Could not get the Common Name from the certificate.
  * **Example**. The server attempts to extract the CN but finds that it is missing.
  * **Solution**. Ensure that each certificate in the chain includes a valid CN.
6. **No Authorization Rules for CN**. No authorization rules found for the provided common name in the credentials.
  * **Example**. The client's CN does not match any existing authorization rules.
  * **Solution**. Add appropriate authorization rules for the client's CN in the server's configuration.
7. **SSL Handler Not Constructed**. Could not authenticate the client using X509 credentials because the SSL handler is not constructed.
  * **Example**. The server-side SSL handler is not properly constructed or initialized.
  * **Solution**. Check the server configuration to ensure that the SSL handler is correctly set up and initialized.
8. **No Matching X509 Credentials Found**.
  * **Example**. The server does not find any X509 credentials that match the client's certificate chain.
  * **Solution**. Verify that the server has the correct X509 credentials configured.
9. **Cannot Parse SSL Credentials**.
  * **Example**. The server fails to parse the X.509 Certificate Chain credentials due to a malformed configuration.
  * **Solution**. Ensure that the credentials are correctly formed and parsable.

## Manage Unauthorized Clients

To delete client that had failed to pass the authentication from the Unauthorized Clients table please follow these steps:
1. Find the client in the _Authentication_ - _Unauthorized Clients_ table and click on the delete icon.
2. Confirm the action by selecting _Yes_.

To delete all unauthorized clients:
1. Click on the button "Delete all unauthorized clients".
2. Confirm delete all clients by clicking _Yes_.

{% include images-gallery.html imageCollection="delete-unauthorized-client" %}
