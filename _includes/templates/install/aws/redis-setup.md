ThingsBoard uses **cache** to improve performance and reduce frequent database reads. By default, the deployment uses a **local Valkey cache**. 
However, ThingsBoard is also compatible with managed services such as **Amazon ElastiCache**.

Here are the steps to create a **basic ElastiCache Valkey cluster**:
- Open AWS console and navigate to [ElastiCache Valkey caches](https://console.aws.amazon.com/elasticache#/valkey) and click the "**Create**" button.
- You can choose the Deployment option **Serverless** or **Design your own cache**.
- Specify **Valkey Engine version 8.x** and node type with at least 1 GB of RAM.
- Make sure your **Valkey cluster** is accessible from the **ThingsBoard cluster**. The easiest way to achieve this is by **deploying the Valkey cluster in the same VPC**. We also recommend using **private subnets**. Use your **group ID**.
- Disable the "**Enable automatic backups**" option.

{% include images-gallery.html imageCollection="redisSetup"%}

Once the **Valkey cluster** switches to the "**Available" state**, navigate to the "**Details**" section and copy the "**Endpoint**" field **without the ":6379" port suffix** – this is the **Valkey endpoint** for ThingsBoard.

{% include images-gallery.html imageCollection="redisEndpointUrl"%}

Edit the `tb-valkey.yml` file, locate the **StatefulSet section** named `tb-valkey`, and set the `spec.replicas` value to **0** to disable the default local Valkey deployment.

Then, edit `tb-cache-configmap.yml` and replace the **REDIS_HOST** value with your **Valkey endpoint**.