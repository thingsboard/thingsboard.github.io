Execute the following command to run the initial setup of the database. This command will launch short-living ThingsBoard pod to provision necessary DB tables, indexes, etc
```text
 ./k8s-deploy-trendz.sh
```
{: .copy-code}

After this command finish you should see the next line in the console:

```
Trendz installed successfully!
```
{% capture trendz-db-install %}

Otherwise, please check if you set the PostgreSQL URL and PostgreSQL password in the `trendz-secret.yml` correctly.

{% endcapture %}
{% include templates/info-banner.md content=trendz-db-install %}
