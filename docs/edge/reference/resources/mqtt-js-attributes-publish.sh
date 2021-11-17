# Publish client-side attributes update
cat new-attributes-values.json | mqtt pub -d -h "127.0.0.1" -t "v1/devices/me/attributes" -u '$ACCESS_TOKEN' -s