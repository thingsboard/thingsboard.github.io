The command to send a message to the TCP server that is running on localhost (127.0.0.1) will look like this:

```shell
echo -e 'SN-002,default,temperature,25.7' | nc -q0 127.0.0.1 10560
```

We can also send multiple messages in one string, separated by **Message Separator** (**System Line Delimiter**).
In this case, the command will look like this:

```shell
echo -e 'SN-002,default,temperature,25.7\n\rSN-002,default,humidity,69' | nc -q1 -w1 127.0.0.1 10560
```

If you want to send a message back to the device using **Downlink,** the command will look like this:

```shell
echo -e 'SN-002,default,temperature,25.7' | nc 127.0.0.1 10560
```
For multiple messages in one string:

```shell
echo -e 'SN-002,default,temperature,25.7\n\rSN-002,default,humidity,69' | nc -w60 127.0.0.1 10560
```
