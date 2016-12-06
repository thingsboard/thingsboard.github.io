-- init mqtt client with keepalive timer 120sec
m = mqtt.Client("esp8266", 120, access_token, "password", 1)

print("Connecting to MQTT broker...")
m:connect(mqtt_ip, mqtt_port, 0, 1, function(client) print("Connected to MQTT!") end,
    function(client, reason) print("Could not connect, failed reason: " .. reason) end)

m:on("offline", function(client) print("MQTT offline") end)

pin = 5

print("Collecting Temperature and Humidity...")
tmr.alarm(2, 10000, tmr.ALARM_AUTO, function()
    status, temp, humi, temp_dec, humi_dec = dht.read(pin)
    if status == dht.OK then
        -- Integer firmware using this example
        print(string.format("DHT Temperature:%d.%03d;Humidity:%d.%03d\r\n",
            math.floor(temp),
            temp_dec,
            math.floor(humi),
            humi_dec))
        m:publish("v1/devices/me/telemetry", string.format("[{\"temperature\":%d}, {\"humidity\":%d}]", math.floor(temp), math.floor(humi)), 0, 0, function(client) print("Data sent") end)
    elseif status == dht.ERROR_CHECKSUM then
        print("DHT Checksum error.")
    elseif status == dht.ERROR_TIMEOUT then
        print("DHT timed out.")
    end
end)