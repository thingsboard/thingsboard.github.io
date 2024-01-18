* TOC
{:toc}

Access Token Based Authentication is the default device authentication type. Once the device is created in ThingsBoard, the default access token is generated. It can be changed afterwards.
In order to connect the device to a server using Access Token based authentication, the client must specify the access token as part of HTTP request URL.
See [HTTP API](/docs/{{docsPrefix}}reference/coap-api/) for more details. There are no specific examples, since all modern HTTP clients support HTTPS as well.