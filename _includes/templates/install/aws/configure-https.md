Use [AWS Certificate Manager](https://aws.amazon.com/certificate-manager/) to create or import SSL certificate.
After creation/import you'll need to uncomment the 'alb.ingress.kubernetes.io/certificate-arn' setting and paste certificate's ARN instead of **YOUR_HTTPS_CERTIFICATE_ARN** in the `routes.yml` file:

```yaml
...
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  namespace: thingsboard
  name: tb-http-loadbalancer
  annotations:
    kubernetes.io/ingress.class: alb
    alb.ingress.kubernetes.io/scheme: internet-facing
    alb.ingress.kubernetes.io/target-type: ip
    # Uncomment the following line to enable HTTPS. Don't forget to replace YOUR_CERTIFICATE_ARN with the correct value
    # See https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#https-listener-certificates for more info
    # alb.ingress.kubernetes.io/certificate-arn: YOUR_CERTIFICATE_ARN
...
```
