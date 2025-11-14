---
layout: docwithnav-mqtt-broker
title: Redis Architecture for Persistent DEVICE clients
description: Redis Architecture Overview for Persistent DEVICE clients

redis-cluster-constraints:
 0:
  image: /images/mqtt-broker/architecture/details/redis-cluster-constraints.png
  title: 'Key-slot based sharding in a Redis Cluster (masters with replicas)'

redis-data-structures:
  0:
   image: /images/mqtt-broker/architecture/details/sorted-set.png
   title: 'Maintaining per-client message order with a Redis Sorted Set'
   
jedis-to-lettuce:
  0:
   image: /images/mqtt-broker/architecture/details/jedis-performance.png
   title: 'RedisInsight shows ~66k commands/s per node, aligning with TBMQ’s 40k msg/s, as Lua scripts trigger multiple Redis operations per message.'
  1:
   image: /images/mqtt-broker/architecture/details/lettuce-performance.png
   title: 'At 60k msg/s, RedisInsight shows ~100k commands/s per node, aligning with the expected increase from 40k msg/s, which produced ~66k commands/s per node.' 

---

{% include docs/mqtt-broker/architecture-details/persistent-device-client.md %}