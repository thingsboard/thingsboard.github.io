##### Deploy Cassandra stateful set

Create ThingsBoard namespace:

```bash
kubectl apply -f tb-namespace.yml
kubectl config set-context $(kubectl config current-context) --namespace=thingsboard
```

Deploy Cassandra to new node groups:

```bash
kubectl apply -f receipts/cassandra.yml
```
{: .copy-code}

The startup of Cassandra cluster may take few minutes. You may monitor the process using:

```bash
kubectl get pods
```
{: .copy-code}

##### Update DB settings

Edit the ThingsBoard DB settings file and add Cassandra settings{{tbCassandraRegionComments}}


```bash
echo "  DATABASE_TS_TYPE: cassandra" >> tb-node-db-configmap.yml
echo "  CASSANDRA_URL: cassandra:9042" >> tb-node-db-configmap.yml
echo "  CASSANDRA_LOCAL_DATACENTER: {{tbCassandraRegion}}"  >> tb-node-db-configmap.yml
```
{: .copy-code}

Check that the settings are updated:

```bash
cat tb-node-db-configmap.yml | grep DATABASE_TS_TYPE
```
{: .copy-code}

Expected output:

```text
  DATABASE_TS_TYPE: cassandra
```

##### Create keyspace

Create *thingsboard* keyspace using following command:

```bash
    kubectl exec -it cassandra-0 -- bash -c "cqlsh -e \
                    \"CREATE KEYSPACE IF NOT EXISTS thingsboard \
                    WITH replication = { \
                        'class' : 'NetworkTopologyStrategy', \
                        'us-east' : '3' \
                    };\""
```
{: .copy-code}