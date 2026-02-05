* TOC
{:toc}

Access token–based authentication is the default authentication method for devices in ThingsBoard. 
When a device is created, ThingsBoard automatically generates a unique access token. This token can be [updated](/docs/{{docsPrefix}}user-guide/ui/devices/#manage-device-credentials){:target="_blank"} later in the device details.

To authenticate a device over HTTP, the client must include the access token as part of the HTTP request URL.

For details about supported endpoints, request formats, and payloads, refer to the [HTTP API](/docs/{{docsPrefix}}reference/http-api/){:target="_blank"} documentation.