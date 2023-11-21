---
layout: docwithnav
title: Connect ThingsBoard to Datastax Astra DB 
description: Connect ThingsBoard to Datastax Astra DB
hidetoc: "true"
---

This guide describes how to setup Datastax Astra DB cloud for your ThingsBoard. This is an alternative having your own Cassandra cluster.

* TOC
{:toc}

### Prerequisites

You need high speed and low latency Internet connection to communicate with Cassandra on Astra DB cloud. Allowed outbound connection to https://astra.datastax.com

### Step 1. Get an account on Astra DB 

Register a new or sign in existed account. To register a new account visit [Astra DB register page](https://astra.datastax.com/register)

![Register or sign in to Astra DB](/images/user-guide/install/datastax-astra-db/register_or_sign_in_astra_db.png)

![Login success. Main page with no database](/images/user-guide/install/datastax-astra-db/astra_main_page.png)

### Step 2. Create new Keyspace on Astra DB

Create a new database `thingsboard` with keyspace `thingsboard`. Select the closest location to you and cloud provider you like. 

![Click create database from the main page](/images/user-guide/install/datastax-astra-db/create_database_navigate_from_main_page.png)

![Fill database and keyspace name, choose location and click create](/images/user-guide/install/datastax-astra-db/create_database.png)

![Database Created!](/images/user-guide/install/datastax-astra-db/create_database_success.png)

The database list will look like on the picture below:

![Dashboard with new database created](/images/user-guide/install/datastax-astra-db/dashboard_with_fresh_database.png)

### Step 3. Generate Token

You need a `Database administrator` role to install the Thingsboard schema. Click `Create a token` on the `thingsboard` database.

![Create a token menu](/images/user-guide/install/datastax-astra-db/generate_a_token_menu.png)

![Generate database administrator token](/images/user-guide/install/datastax-astra-db/generate_database_administrator_token.png)

![Your token has been generated](/images/user-guide/install/datastax-astra-db/generate_token_success.png)

### Step 4. Downloading secure connect bundle

To connect to your Astra DB database using the drivers, download the secure database bundle from the DataStax Astra Portal that contains the connection credentials.

The detail info on how to work with secure bundle you can find at [Astra DB documentation](https://docs.datastax.com/en/astra-serverless/docs/connect/connecting.html#_working_with_secure_connect_bundle)

Or simple do as shown on the picture below

![Secure cloud bundle download page](/images/user-guide/install/datastax-astra-db/cloud_bundle_download_page.png)

![Choose region to download secure cloud bundle](/images/user-guide/install/datastax-astra-db/cloud_bundle_choose_region.png)

![Cloud bundle downloaded](/images/user-guide/install/datastax-astra-db/cloud_bundle_downloaded.png)

The `secure-connect-thingsboard.zip` file contains the security certificates and credentials for your database

### Step 5. Set connection parameters on ThingsBoard

Here the environments you need to set to use your Astra DB with ThingsBoard.

#### ThingsBoard service

For ThingsBoard as a local service add to the `/etc/thingsboard/conf/thingsboard.conf`

```bash
export DATABASE_TS_TYPE=cassandra
# Cassandra on Astra DB cloud 
export CASSANDRA_CLOUD_SECURE_BUNDLE_PATH=/etc/thingsboard/astra/secure-connect-thingsboard.zip
# dbadmin
export CASSANDRA_CLOUD_CLIENT_ID=KNpxZasfKNpxZasfKNpxZasf
export CASSANDRA_CLOUD_CLIENT_SECRET=6Rht+1oh8H_v4f3dbFiZ.KHBim6Rht+1oh8H_v4f3dbFiZ.KHBim6Rht+1oh8H_v4f3dbFiZ.KHBim
```
{: .copy-code}

#### ThingsBoard docker compose

Here an example how to set the `docker-compose.yml`

```yaml
version: '3'
services:
  tb:
    image: "thingsboard/tb-postgres:3.4.2"
    network_mode: "host"
    restart: "always"
    # replace /home/your_user/Downloads/ with your local path
    volumes:
      - /home/your_user/Downloads/secure-connect-thingsboard.zip:/etc/thingsboard/astra/secure-connect-thingsboard.zip
    environment:
      HTTP_BIND_PORT: "8080"
      DATABASE_TS_TYPE: "cassandra"
      # Cassandra on cloud
      CASSANDRA_CLOUD_SECURE_BUNDLE_PATH: "/etc/thingsboard/astra/secure-connect-thingsboard.zip"
      # dbadmin
      CASSANDRA_CLOUD_CLIENT_ID: "KNpxZasfKNpxZasfKNpxZasf"
      CASSANDRA_CLOUD_CLIENT_SECRET: "6Rht+1oh8H_v4f3dbFiZ.KHBim6Rht+1oh8H_v4f3dbFiZ.KHBim6Rht+1oh8H_v4f3dbFiZ.KHBim"
```
{: .copy-code}

#### ThingsBoard Kubernetes cluster

Create a secret with base64 encoded bundle file, client_id and client_secret.

Here how to encode the client_id or client_secret. The encoded strings will appear on your screen. 
Copy and paste it to the `astra-secret.yaml`. 
```bash
echo -n "your_client_id" | base64 -w 0
echo -n "your_client_secret" | base64 -w 0
```
{: .copy-code}

Here how to encode a file and put the result to the clipboard as single line:
```bash
base64 -w 0 /home/your_user/projects/astra/secure-connect-thingsboard.zip | xclip -selection clipboard
```
{: .copy-code}

The resulting file will look like `astra-secret.yml`. The `secure-connect-thingsboard.zip` encoded string is very long.
```yaml
apiVersion: v1
kind: Secret
metadata:
  name: astra-secret
type: Opaque
data:
  secure-connect-thingsboard.zip: >-
    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
  client_id: S05weFphc2ZLTnB4WmFzZktOcHhaYXNm
  client_secret: NlJodCsxb2g4SF92NGYzZGJGaVouS0hCaW02Umh0KzFvaDhIX3Y0ZjNkYkZpWi5LSEJpbTZSaHQrMW9oOEhfdjRmM2RiRmlaLktIQmlt
---
```
{: .copy-code}

Then mount `secure-connect-thingsboard.zip` from secret to the `tb-node.yml` and `tb-rule-engine.yml`.
Add the environment variables to provide Astra DB credentials. Here an example for `tb-node.yml`
```yaml
# example header
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: tb-node
spec:
  serviceName: tb-node-headless
  replicas: 2
  podManagementPolicy: "Parallel"
  selector:
    matchLabels:
      app: tb-node
  template:
    metadata:
      labels:
        app: tb-node
    spec:
# below is the Astra DB related settings      
      volumes:
        - name: astra-secret
          secret:
            secretName: "astra-secret"
            items:
              - key: secure-connect-thingsboard.zip
                path: secure-connect-thingsboard.zip
      containers:
        - name: tb-node
          image: thingsboard/tb-node:3.4.2
          volumeMounts:
            - mountPath: /etc/thingsboard/astra
              name: astra-secret
              readOnly: true
          env:
            - name: CASSANDRA_CLOUD_CLIENT_ID
              valueFrom:
                secretKeyRef:
                  name: astra-secret
                  key: client_id
            - name: CASSANDRA_CLOUD_CLIENT_SECRET
              valueFrom:
                secretKeyRef:
                  name: astra-secret
                  key: client_secret
            - name: CASSANDRA_CLOUD_SECURE_BUNDLE_PATH
              value: "/etc/thingsboard/astra/secure-connect-thingsboard.zip"
# merge carefully with your actual yaml file(s) 
---
```
{: .copy-code}

Take notice that you don't need to provide Cassandra user, password, endpoint, keyspace, datacenter, SSL, etc. 
All details will be set automatically based on CASSANDRA_CLOUD_SECURE_BUNDLE_PATH, CASSANDRA_CLOUD_CLIENT_ID, CASSANDRA_CLOUD_CLIENT_SECRET values.

### Step 6. Run standard ThingsBoard install

ThingsBoard is already support install on Astra DB cloud.
It is enough to provide CASSANDRA_CLOUD_SECURE_BUNDLE_PATH, CASSANDRA_CLOUD_CLIENT_ID, CASSANDRA_CLOUD_CLIENT_SECRET values before install.

### TL;DR

The key difference with stand alone Cassandra is that you are not able to create a keyspace using CQL. 
For the Astra DB cloud, you have to create keyspace from UI or API at first. And create user with credentials at second. 

Next steps are completely the same for on-premise Cassandra and Astra DB cloud.

### Thingsboard test run on Astra DB cloud

Here an example how to test your Thingsboard with your Astra DB using performance test tool.
To spin up the Thingsboard locally, use `docker-compose.yml` provided couple sections above.

IMPORTANT: The test will consume your Credits. Please use it smart. Don't forget to delete the keyspace after your test.

Let's put some telemetry from 1000 devices each 10 seconds during 1 hour.

```yaml
docker run -it --rm --network host --name tb-perf-test \
           --pull always --log-driver none \
           --env REST_URL=http://127.0.0.1:8080 \
           --env MQTT_HOST=127.0.0.1 \
           --env REST_USERNAME=tenant@thingsboard.org \
           --env REST_PASSWORD=tenant \
           --env DEVICE_END_IDX=1000 \
           --env MESSAGES_PER_SECOND=100 \
           --env DURATION_IN_SECONDS=3600 \
           --env ALARMS_PER_SECOND=1 \
           --env DEVICE_CREATE_ON_START=true \
           --env TEST_PAYLOAD_TYPE=SMART_METER \
           thingsboard/tb-ce-performance-test:latest
```
{: .copy-code}
