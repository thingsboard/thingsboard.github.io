
# for ThingsBoard Cloud

# Subscribes to attribute updates
mosquitto_sub -d -h "thingsboard.cloud" -t "v1/devices/me/attributes" -u "$ACCESS_TOKEN"

# for local ThingsBoard

# Subscribes to attribute updates
mosquitto_sub -d -h "127.0.0.1" -t "v1/devices/me/attributes" -u "$ACCESS_TOKEN"
