The command to send a message to the TCP server that is running on localhost (127.0.0.1) will look like this:

```shell
echo -e 'SN-002,default,temperature,25.7' | nc -q0 127.0.0.1 10560
```
{: .copy-code}

![image](/images/user-guide/integrations/tcp/tcp-terminal-text-add-attribute-1.png)

We can also send multiple messages in one string, separated by **Message Separator** (**System Line Delimiter**).
Newline delimiter (**\n**) will be used to split payload into multiple messages.

In this case, the command will look like this:

```shell
echo -e 'SN-002,default,temperature,25.7\nSN-002,default,humidity,69' | nc -q1 -w1 127.0.0.1 10560
```
{: .copy-code}

![image](/images/user-guide/integrations/tcp/tcp-terminal-text-add-attribute-2.png)

If you want to send a message back to the device using **Downlink,** the command will look like this:

```shell
echo -e 'SN-002,default,temperature,25.7' | nc 127.0.0.1 10560
```
{: .copy-code}

![image](/images/user-guide/integrations/tcp/tcp-terminal-text-downlink-message-1.png)

For multiple messages in one string:

```shell
echo -e 'SN-002,default,temperature,25.7\nSN-002,default,humidity,69' | nc -w60 127.0.0.1 10560
```
{: .copy-code}

![image](/images/user-guide/integrations/tcp/tcp-terminal-text-downlink-message-2.png)