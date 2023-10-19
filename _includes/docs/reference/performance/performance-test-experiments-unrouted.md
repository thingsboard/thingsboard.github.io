## Experiments

Postgres + Kafka + Cassandra

### Cassandra 4.0 vs 3.11 versions comparison on AMD and Intel instances

Cassandra 4.0 m6a.xlarge (4 vCPU, 16 GiB)

![](/images/reference/performance-aws-instances/method/experiments/img_0.png)

Cassandra 3.11 m6a.xlarge (4 vCPU, 16 GiB)

![](/images/reference/performance-aws-instances/method/experiments/img_1.png)

Cassandra 4.0 c6i.xlarge (4 vCPU, 8 GiB)

![](/images/reference/performance-aws-instances/method/experiments/img_2.png)

### Max msg rate experiments Cassandra 4.0 m6a.4xlarge (16 vCPU, 32 GiB)

Cassandra 4.0 m6a.4xlarge (16 vCPU, 32 GiB)

5k devices, 15k msg/sec, 45k data points/sec -- 100% handled

![](/images/reference/performance-aws-instances/method/experiments/img_4.png)

![](/images/reference/performance-aws-instances/method/experiments/img_3.png)

5k devices, 25k msg/sec, 75k data points/sec -- 100% handled

![](/images/reference/performance-aws-instances/method/experiments/img_5.png)

![](/images/reference/performance-aws-instances/method/experiments/img_6.png)

5k devices, 40k msg/sec, 120k data points/sec - bottleneck

![](/images/reference/performance-aws-instances/method/experiments/img_8.png)

CPU is about 60%, so bottleneck happens.

![](/images/reference/performance-aws-instances/method/experiments/img_7.png)

Let's try to write timeseries without persisting latest values to the PostgreSQL - no effect

![](/images/reference/performance-aws-instances/method/experiments/img_9.png)
