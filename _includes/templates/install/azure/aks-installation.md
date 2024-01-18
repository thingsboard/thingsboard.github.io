Execute the following command to run the initial setup of the database. This command will launch short-living ThingsBoard pod to provision necessary DB tables, indexes, etc
```
 ./k8s-install-tb.sh --loadDemo
```
{: .copy-code}

Where:

- `--loadDemo` - optional argument. Whether to load additional demo data.

After this command finish you should see the next line in the console:

```
Installation finished successfully!
```

Otherwise, please check if you set the PostgreSQL URL in the `tb-node-db-configmap.yml` correctly.