function startup()
    if file.open("init.lua") == nil then
        print("init.lua deleted")
    else
        print("Running")
        file.close("init.lua")
        tmr.unregister(0)
        dofile("dht11.lua")
    end
end

-- setup wifi
function setup_wifi(mode, ssid, pass)
    wifi.setmode(mode)
    wifi.sta.config(ssid, pass, 1)
end

--init.lua
wifi.sta.disconnect()

if file.exists("config.lua") then
    print("Loading configration from config.lua")
    dofile("config.lua")
end

setup_wifi((wifi_mode or wifi.AP), (wifi_ssid or "node_esp8266"), (wifi_pass or "_esp8266_"))

print("connecting to wifi...")
tmr.alarm(1, 1000, tmr.ALARM_AUTO, function()
    if wifi.sta.getip() == nil then
        print("IP unavaiable, Waiting...")
    else
        tmr.unregister(1)
        print("Config done, IP is " .. wifi.sta.getip())
        print("Waiting 10 seconds before startup...")
        tmr.alarm(0, 10000, 0, startup)
    end
end)