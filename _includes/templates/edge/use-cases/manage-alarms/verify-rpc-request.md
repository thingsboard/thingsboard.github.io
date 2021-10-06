Open the terminal where **mqtt-js.sh** script is running. 
You should see similar messages on the screen:

```shell
pc@pc-XPS-15-9550:~/alarm-tutorial$ bash mqtt-js.sh
Connecting to: localhost:1883 using access token: sFqoF18PTyViO8L0qo7c
Cooler is connected!
Received RPC command from edge!
Method: enabled_air_conditioner
Speed params: 1
```

Congratulations! RPC request was successfully sent to **Air Conditioner** device based on the temperature readings from the **DHT22** sensor.