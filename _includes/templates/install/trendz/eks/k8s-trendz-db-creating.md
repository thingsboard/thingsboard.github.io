Edit “trendz/trendz-secret.yml” and replace YOUR_RDS_ENDPOINT_URL and YOUR_RDS_PASSWORD and apply Kubernetes Job:
```text
kubectl apply -f ./trendz/trendz-secret.yml
kubectl apply -f ./trendz/trendz-create-db.yml
```
{: .copy-code}

You can see logs if you run the next command:
```text
kubectl logs job/trendz-create-db -n thingsboard
```
