The command to send a message to the UDP server that is running on localhost (127.0.0.1) will look like this:

```shell
echo -e -n '534e2d30303164656661756c7432352e373639' | xxd -r -p | nc -q1 -w1 -u 127.0.0.1 11560
```
