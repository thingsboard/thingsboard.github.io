For using ssl certificates we can add our certificate directly in Azure $AKS_GATEWAY using command:

```
az network application-gateway ssl-cert create \
   --resource-group MC_$AKS_RESOURCE_GROUP_$TB_CLUSTER_NAME_$AKS_LOCATION \
   --gateway-name $AKS_GATEWAY\
   --name ThingsBoardHTTPCert \
   --cert-file YOUR_CERT \
   --cert-password YOUR_CERT_PASS
```
{: .copy-code}

Be careful ***resource-group*** in this case its ***nodeResourceGroup*** from step 3.

After its done, we need to replace MY_CERTIFICATE_NAME in https-load-balancer.yml file.


