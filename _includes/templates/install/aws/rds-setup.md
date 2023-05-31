You'll need to set up PostgreSQL on Amazon RDS. ThingsBoard will use it as a main database to store devices, dashboards, rule chains and device telemetry.
You may follow [this](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_GettingStarted.CreatingConnecting.PostgreSQL.html) guide,
but take into account the following requirements:

* Keep your postgresql password in a safe place. We will refer to it later in this guide using **YOUR_RDS_PASSWORD**.
* Make sure your PostgreSQL version is latest 12.x, not 13.x yet;
* Make sure your PostgreSQL RDS instance is accessible from the ThingsBoard cluster;
  The easiest way to achieve this is to deploy the PostgreSQL RDS instance in the same VPC
  and use 'eksctl-thingsboard-cluster-ClusterSharedNodeSecurityGroup-*' security group.
  We assume you locate it in the same VPC in this guide;
* Make sure you use **"thingsboard"** as initial database name. If you do not specify a database name, Amazon RDS does not create a database;

And recommendations:

* Use 'Production' template for high availability. It enables a lot of useful settings by default;
* Use 'Provisioned IOPS' for better performance;
* Consider creation of custom parameters group for your RDS instance. It will make change of DB parameters easier;
* Consider deployment of the RDS instance into private subnets. This way it will be nearly impossible to accidentally expose it to the internet.

{% include images-gallery.html imageCollection="rdsSetup"%}

Once the database switch to the 'Available' state, navigate to the 'Connectivity and Security' and copy the endpoint value.

{% include images-gallery.html imageCollection="rdsEndpointUrl"%}

Edit "tb-node-db-configmap.yml" and replace **YOUR_RDS_ENDPOINT_URL** and **YOUR_RDS_PASSWORD**.

