ThingsBoard uses **Kafka as an external queue** for exchanging data between microservices, storing unprocessed messages, and more. 
Kafka is useful for **handling peak loads and failures**, ensuring that all messages from devices are processed reliably. 
By default, the deployment uses **local Kafka**, but ThingsBoard is also compatible with **managed services such as Amazon MSK**.

Here are the steps to create a **basic Kafka MSK cluster**:

- Open the **AWS console**, go to [MSK](https://console.aws.amazon.com/msk){:target="_blank"} and click the "**Create Cluster**" button.
- Select "**Custom creation**" method.
- Specify a **name for your cluster** and select "**Cluster type**" - "**Provisioned**", which will allow you to specify the **number of brokers and storage volume**.
- Select **Apache Kafka version 3.8.x** to use **Express brokers** or **version 4.0.x** for **Standard brokers**.
- Choose **kafka.m7.large** or similar instance types.
- Select the **storage size** for the broker (with the default ThingsBoard partition settings, Kafka can use up to **100 GB**).
- Make sure your **MSK instance is accessible** from the **ThingsBoard cluster**. The easiest way to achieve this is by **deploying the MSK instance in the same VPC**.
  We also recommend using **private subnets**, as this will make it virtually impossible to accidentally expose the instance to the **Internet**.
- Use the **default security settings**. Make sure that "**Plaintext" mode** is enabled.
- Use either the "**Basic monitoring**" or "**Enhanced topic-level monitoring**" settings.

{% include images-gallery.html imageCollection="mskSetup" %}

Once the <b>MSK cluster</b> switches to the "<b>Active</b>" state, navigate to "<b>Details</b>" and click "<b>View client information</b>".   
Copy the <b>bootstrap server information in plaintext</b> – this is your <b>Kafka endpoint</b>.

{% include images-gallery.html imageCollection="mskConnectionParams" %}

Edit the `tb-kafka.yml` file, find the **StatefulSet section** named `tb-kafka`, and set the `spec.replicas` value to **0** to disable the default local **Kafka deployment**.

Edit `tb-kafka-configmap.yml` and replace **TB_KAFKA_SERVERS** value with **MSK endpoint**.