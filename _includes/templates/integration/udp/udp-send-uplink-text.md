The command to send a message to the UDP server that is running on localhost (127.0.0.1) will look like this:

```shell
echo -e 'SN-001,default,temperature,25.7,humidity,69' | nc -q1 -w1 -u 127.0.0.1 11560
```
{: .copy-code}

![image](https://img.thingsboard.io/user-guide/integrations/udp/terminal-text.png)