
# for ThingsBoard Cloud

# Publish client-side attributes update
cat new-attributes-values.json | coap post coap://coap.thingsboard.cloud/api/v1/$ACCESS_TOKEN/attributes

# for local ThingsBoard

# Publish client-side attributes update
cat new-attributes-values.json | coap post coap://localhost/api/v1/$ACCESS_TOKEN/attributes
