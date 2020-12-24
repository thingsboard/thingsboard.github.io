Install coap-cli. Assuming you have Node.js and NPM installed on your Windows/Linux/MacOS machine, execute the following command:

```bash
npm install coap-cli -g
```
{: .copy-code}

Replace $HOST_NAME and $ACCESS_TOKEN with corresponding values.

```bash
echo -n '{"temperature": 25}' | coap post coap://$THINGSBOARD_HOST/api/v1/$ACCESS_TOKEN/telemetry
```
{: .copy-code}

For example, $HOST_NAME reference ThingsBoard Cloud server, access token is ABC123:

```bash
echo -n '{"temperature": 25}' | coap post coap://coap.thingsboard.cloud/api/v1/ABC123/telemetry 
```
{: .copy-code}

For example, $HOST_NAME reference your local installation, access token is ABC123:

```bash
echo -n '{"temperature": 25}' | coap post coap://localhost/api/v1/ABC123/telemetry
```
{: .copy-code}

<br/>
<br/>
