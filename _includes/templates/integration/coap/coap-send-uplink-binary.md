The command to send a message to the CoAP server that is hosted on **int.thingsboard.cloud** will look like this:

```shell
echo -e -n '\x53\x4e\x2d\x30\x30\x31\x64\x65\x66\x61\x75\x6c\x74\x32\x35\x2e\x37\x36\x39' | coap-client -m post coap://int.thingsboard.cloud/i/2ab11247-0fd2-20d6-9e3e-02c917561b45 -t application/octet-stream -f-
```
{: .copy-code}