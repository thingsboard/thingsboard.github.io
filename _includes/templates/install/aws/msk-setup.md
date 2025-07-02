
ThingsBoard uses Kafka as an external queue for exchanging data between microservices, storing unprocessed messages, etc. Kafka is useful for handling peak loads and failures to ensure that all messages from devices are processed.
By default, the deployment already uses local Kafka. However, Thingsboard is compatible with managed services such as Amazon MSK.
Here are the steps to create a basic Kafka MSK cluster:

* Open the AWS console, go to [MSK](https://console.aws.amazon.com/msk), click the “Create Cluster” button, and select “Custom creation” mode.
* Specify a name for your cluster and select “Cluster type” - “Provisioned”, which will allow you to specify the number of brokers and storage volume.
* Select version 3.8.x to use **Express brokers** or 4.0.x for **Standard brokers**.
* Select the storage size for the broker (with the default ThingsBoard partition settings, Kafka can consume up to 100 GB).
* Make sure your MSK instance is accessible from the ThingsBoard cluster. The easiest way to achieve this is to deploy the MSK instance in the same VPC.  We also recommend using private subnets. This way, it will be virtually impossible to accidentally expose it to the Internet.
* Select the default security settings. Make sure that “Plaintext” mode is enabled.
* Use the default “Monitoring” settings or enable “Enhanced topic level monitoring.”


{% include images-gallery.html imageCollection="mskSetup"%}

Once the MSK cluster switch to the 'Active' state, navigate to 'Details' and click 'View client information'.
Copy bootstrap server information in plaintext, it`s your Kafka endpoint.

{% include images-gallery.html imageCollection="mskConnectionParams"%}

If you choose to use Amazon MSK instead of local Kafka, edit the `tb-kafka.yml`  file and set the replicas value to 0 (`replicas: 0`) to disable the default local Kafka deployment.

Edit `tb-kafka-configmap.yml` and replace **TB_KAFKA_SERVERS** value with MSK endpoint.