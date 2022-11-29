You'll need to set up Kafka using Amazon MSK. ThingsBoard will use it to communicate between microservices, store unprocessed messages, etc.
Kafka is useful to survive peak loads and hardware failures to make sure that all messages from devices will be processed.

Please open AWS console and navigate to MSK, press `Create cluster` button and choose `Custom create` mode.

* Make sure your Apache Kafka version is 2.6.x;
* Make sure your MSK instance is accessible from the ThingsBoard cluster.
  The easiest way to achieve this is to deploy the MSK instance in the same VPC.
  We also recommend to use private subnets. This way it will be nearly impossible to accidentally expose it to the internet;
* Use m5.large or similar instance types;
* Choose default security settings. Make sure 'Plaintext' mode is enabled;
* Use default 'Monitoring' settings or enable 'Enhenced topic level monitoring'.

{% include images-gallery.html imageCollection="mskSetup"%}

Once the MSK cluster switch to the 'Active' state, navigate to 'Details' and click 'View client information'.
Copy bootstrap server information in plaintext, it`s **YOUR_MSK_BOOTSTRAP_SERVERS_PLAINTEXT**.

{% include images-gallery.html imageCollection="mskConnectionParams"%}

Edit “tb-kafka-configmap.yml” and replace **YOUR_MSK_BOOTSTRAP_SERVERS_PLAINTEXT**.