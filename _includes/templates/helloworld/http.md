Install cURL for **Ubuntu**:

```bash
sudo apt-get install curl
```
{: .copy-code}


Install cURL for **macOS**:

```bash
brew install curl
```
{: .copy-code}

Install cURL for **Windows**:

Starting from Windows 10 b17063, cURL is available by default. 
More info is available in this MSDB blog [post](https://blogs.msdn.microsoft.com/commandline/2018/01/18/tar-and-curl-come-to-windows/).
If you are using older version of Windows OS, you may find official installation guides [here](https://curl.haxx.se/).

<br>

This command works for Windows, Ubuntu and macOS, assuming the cURL tool is already installed. 

Replace $THINGSBOARD_HOST_NAME_AND_PORT and $ACCESS_TOKEN with corresponding values.

```bash
curl -v -X POST -d "{\"temperature\": 25}" $THINGSBOARD_HOST_NAME_AND_PORT/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
```
{: .copy-code}

For example, $THINGSBOARD_HOST_NAME_AND_PORT reference ThingsBoard Cloud (North America), $ACCESS_TOKEN is ABC123:

```bash
echo -n '{"temperature": 25}' | coap post coap://thingsboard.cloud/api/v1/ABC123/telemetry
```
{: .copy-code}

For example, $THINGSBOARD_HOST_NAME_AND_PORT reference ThingsBoard Cloud (Europe), $ACCESS_TOKEN is ABC123:

```bash
echo -n '{"temperature": 25}' | coap post coap://eu.thingsboard.cloud/api/v1/ABC123/telemetry
```
{: .copy-code}

For example, $THINGSBOARD_HOST_NAME_AND_PORT reference your local installation, port is 8080, $ACCESS_TOKEN is ABC123:

```bash
curl -v -X POST -d "{\"temperature\": 25}" http://localhost:8080/api/v1/ABC123/telemetry --header "Content-Type:application/json"
```
{: .copy-code}
