The command to send a message to the UDP server that is running on localhost (127.0.0.1) will look like this:

```shell
echo -e -n '\x53\x4e\x2d\x30\x30\x31\x64\x65\x66\x61\x75\x6c\x74\x32\x35\x2e\x37\x36\x39' | nc -w5 -u 127.0.0.1 11560
```
{: .copy-code}

![image](/images/user-guide/integrations/udp/terminal-binary.png)