Edit "tb-node-db-configmap.yml" and replace **YOUR_DB_IP_ADDRESS** and **** with the values you have obtained during [step 3](#step-3-provision-google-cloud-sql-postgresql-instance).

```bash
nano tb-node-db-configmap.yml
```
{: .copy-code}

Execute the following command to run installation:

```bash
./k8s-install-tb.sh --loadDemo
```
{: .copy-code}

where:

- `--loadDemo` - optional argument. Whether to load additional demo data.

After this command finish you should see the next line in the console:

```
Installation finished successfully!
```

