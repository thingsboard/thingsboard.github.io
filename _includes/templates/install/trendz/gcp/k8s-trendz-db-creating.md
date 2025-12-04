Edit “trendz/trendz-secret.yml” and replace YOUR_DB_IP_ADDRESS and YOUR_DB_PASSWORD and apply Kubernetes Job:
```text
kubectl apply -f ./trendz/trendz-secret.yml
kubectl apply -f ./trendz/trendz-create-db.yml
```
{: .copy-code}

You can see logs if you run the next command:
```text
kubectl logs job/trendz-create-db -n thingsboard
```
