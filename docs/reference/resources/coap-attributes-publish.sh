
# for ThingsBoard Cloud

# Publish client-side attributes update
coap-client -m post coap://coap.thingsboard.cloud/api/v1/$ACCESS_TOKEN/attributes -f new-attributes-values.json

# for local ThingsBoard

# Publish client-side attributes update
coap-client -m post coap://localhost/api/v1/$ACCESS_TOKEN/attributes -f new-attributes-values.json 
