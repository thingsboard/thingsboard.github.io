Install coap-cli. Assuming you have Node.js and NPM installed on your Windows/Linux/MacOS machine, execute the following command:

```bash
npm install coap-cli -g
```
{: .copy-code}

Replace $HOST_NAME, $COAP_PORT and $ACCESS_TOKEN with corresponding values. If $COAP_PORT is not specified, default **5683** used.

```bash
echo -n '{"temperature": 25}' | coap post coap://$HOST_NAME:$COAP_PORT/api/v1/$ACCESS_TOKEN/telemetry
```
{: .copy-code}

For example, $HOST_NAME reference your local ThingsBoard Edge installation, coap port is **5683** and access token is **ABC123**:

```bash
echo -n '{"temperature": 25}' | coap post coap://localhost:5683/api/v1/ABC123/telemetry
```
{: .copy-code}

<br/>
