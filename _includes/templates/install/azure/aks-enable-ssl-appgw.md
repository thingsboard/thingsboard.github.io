For using ssl certificates we can add our certificate directly in Azure ApplicationGateWay using command:

```
az network application-gateway ssl-cert create \
   --resource-group MC_myResourceGroup_myAKSCluster_eastus \
   --gateway-name myApplicationGateway\
   -n mysslcert \
   --cert-file YUR_CERT \
   --cert-password YOUR_CERT_PASS
```
{: .copy-code}

Be careful ***resource-group*** in this case its ***nodeResourceGroup*** from step 3.

After its done, we need to replace MY_CERTIFICATE_NAME in routes.yml file.


