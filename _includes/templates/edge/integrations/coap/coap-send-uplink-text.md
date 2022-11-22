```shell
echo -e 'SN-001,default,temperature,25.7,humidity,69' | coap-client -m post $YOUR_COAP_ENDPOINT_URL -t text/plain -f-
```
{: .copy-code}