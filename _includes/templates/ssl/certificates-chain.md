## X.509 Certificate chain:

### Step 1. Prepare your server and certificate chain

{% if docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}
ThingsBoard Team has already provisioned a valid certificate for [ThingsBoard Cloud](https://{{hostName}}/signup){:target="_blank"}.
{% endif %}
{% if docsPrefix == null or docsPrefix == "pe/" %}
Follow the [MQTT over SSL](/docs/{{docsPrefix}}user-guide/mqtt-over-ssl/){:target="_blank"} guide to provision server certificate if you are hosting your own ThingsBoard instance.
{% endif %}

Once provisioned, you should prepare a CA root certificate in pem format. This certificate will be used by mqtt client to validate the server certificate.
Save the CA root certificate to your working directory as "**ca-root.pem**".
An example of CA root certificate for *{{mqttHostName}}* is located [here](/docs/paas/user-guide/resources/mqtt-over-ssl/ca-root.pem).

### Step 2. Generate Client certificate chain

We should generate a certificate chain with **reasonable** Common Names (CNs). We will use the intermediate certificate to sign certificates for our devices.
For example, the certificate chain CNs might be the following: 

 * Root certificate CN: company-name.com;
 * Intermediate certificate: device-group-name.company-name.com;
 * Device certificate: device-name.device-group-name.company-name.com;

Use the following commands to generate the self-signed private keys, certificate signing requests, and x509 certificates
for each chain level. The commands are based on the **OpenSSL** tool, which is most likely already installed on your workstation:

**Step 2.1** Generate root certificate 

Generate the Root certificate and private key, use the following command. Don't forget to put the correct CN when prompted:

```bash
openssl req -x509 -newkey rsa:4096 -keyout rootKey.pem -out rootCert.pem -sha256 -days 365 -nodes
```
{: .copy-code}

<details>
<summary>
Sample output, referencing *company.com* as CN
</summary>
{% highlight text %}
Generating a RSA private key
writing new private key to 'rootKey.pem'
-----
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [AU]:
State or Province Name (full name) [Some-State]:
Locality Name (eg, city) []:
Organization Name (eg, company) [Internet Widgits Pty Ltd]:
Organizational Unit Name (eg, section) []:
Common Name (e.g. server FQDN or YOUR name) []:company.com
Email Address []:
{% endhighlight %}
</details>
<br>

**Step 2.2** Generate intermediate certificate 

To generate the intermediate key and certificate request, use the following command. Don't forget to put the correct CN when prompted:

```bash
openssl req -new -newkey rsa:4096 -keyout intermediateKey.pem -out intermediate.csr -sha256 -nodes
```
{: .copy-code}

<details>
<summary>
Sample output, referencing *group.company.com* as CN
</summary>
{% highlight text %}
Generating a RSA private key
writing new private key to 'intermediateKey.pem'
-----
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [AU]:
State or Province Name (full name) [Some-State]:
Locality Name (eg, city) []:
Organization Name (eg, company) [Internet Widgits Pty Ltd]:
Organizational Unit Name (eg, section) []:
Common Name (e.g. server FQDN or YOUR name) []:group.company.com
Email Address []:

Please enter the following 'extra' attributes
to be sent with your certificate request
A challenge password []:
An optional company name []:
{% endhighlight %}
</details>
<br>

To generate the intermediate certificate, use the following command. Don't forget to put the correct CN when prompted:

```bash
openssl x509 -req -in intermediate.csr -out intermediateCert.pem -CA rootCert.pem -CAkey rootKey.pem -days 365 -sha256 -CAcreateserial -extfile <(echo "basicConstraints=CA:TRUE")
```
{: .copy-code}

<details>
<summary>
Sample output
</summary>
{% highlight text %}
Signature ok
subject=C = AU, ST = Some-State, O = Internet Widgits Pty Ltd, CN = group.company.com
Getting CA Private Key
{% endhighlight %}
</details>
<br>


**Step 2.3** Generate device certificate 

To generate the device certificate, use the following command. Don't forget to put the correct CN when prompted:

```bash
openssl req -new -newkey rsa:4096 -keyout deviceKey.pem -out device.csr -sha256 -nodes
```
{: .copy-code}

<details>
<summary>
Sample output, referencing <i>device123.group.company.com</i> as CN
</summary>
{% highlight text %}
Generating a RSA private key
writing new private key to 'deviceKey.pem'
-----
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [AU]:
State or Province Name (full name) [Some-State]:
Locality Name (eg, city) []:
Organization Name (eg, company) [Internet Widgits Pty Ltd]:device.group.company.com
Organizational Unit Name (eg, section) []:
Common Name (e.g. server FQDN or YOUR name) []:
Email Address []:

Please enter the following 'extra' attributes
to be sent with your certificate request
A challenge password []:
An optional company name []:
{% endhighlight %}
</details>
<br>

To generate the intermediate certificate, use the following command. Don't forget to put the correct CN when prompted:

```bash
openssl x509 -req -in device.csr -out deviceCert.pem -CA intermediateCert.pem -CAkey intermediateKey.pem -days 365 -sha256 -CAcreateserial
```
{: .copy-code}

<details>
<summary>
Sample output
</summary>
{% highlight text %}
Signature ok
subject=C = AU, ST = Some-State, O = Internet Widgits Pty Ltd, CN = device.group.company.com
Getting CA Private Key
{% endhighlight %}
</details>
<br>


Finally, you need to concatenate certificates into a chain starting from the device certificate till the root.

```bash
cat deviceCert.pem intermediateCert.pem rootCert.pem > chain.pem
```
{: .copy-code}

The output of the commands will be private keys and certificates for each level of chain. In the next steps
we will use device key file *deviceKey.pem* and a chain of certificates *chain.pem*.

### Step 3. Provision Client Intermediate Public Key as Device Profile X509 provision strategy

Go to **ThingsBoard Web UI -> Profiles -> Device profiles -> Your Device profile -> Device provisioning**.
Select **X.509 Certificates Chain** provision strategy, insert the contents of *intermediateCert.pem* file
and regular expression pattern to fetch common name from *deviceCert.pem*, choose allow to create new devices or not and click save.
Alternatively, the same can be done through the [REST API](/docs/{{docsPrefix}}reference/rest-api/).

### Step 4. Test the connection

Execute the following command to upload temperature readings to ThingsBoard Cloud using secure channel:

{% if docsPrefix contains 'paas/' %}
```bash
mosquitto_pub --cafile ca-root.pem -d -q 1 -h "{{mqttHostName}}" -p "8883" \
-t "v1/devices/me/telemetry" --key deviceKey.pem --cert chain.pem -m {"temperature":25}
```
{: .copy-code}
{% else %}
```bash
mosquitto_pub --cafile ca-root.pem -d -q 1 -h "YOUR_TB_HOST" -p "8883" \
-t "v1/devices/me/telemetry" --key deviceKey.pem --cert chain.pem -m {"temperature":25}
```
{: .copy-code}

Similar command for the [self-signed](/docs/{{docsPrefix}}user-guide/mqtt-over-ssl/#self-signed-certificates-generation) server certificate:

```bash
mosquitto_pub --insecure --cafile server.pem -d -q 1 -h "YOUR_TB_HOST" -p "8883" \
-t "v1/devices/me/telemetry" --key deviceKey.pem --cert chain.pem -m {"temperature":25}
```
{: .copy-code}
{% endif %}

 

Don't forget to replace **YOUR_TB_HOST** with the host of your ThingsBoard instance.
