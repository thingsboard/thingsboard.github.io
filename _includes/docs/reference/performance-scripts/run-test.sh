#!/bin/bash

. test-ips.sh

COUNTER=0
DEVICES_PER_NODE=31250
MESSAGES_PER_NODE=315

START_IDX=0

for IP in ${IPS}; do
  let COUNTER++
  let DEVICE_START_IDX=START_IDX+COUNTER*DEVICES_PER_NODE-DEVICES_PER_NODE
  let DEVICE_END_IDX=START_IDX+COUNTER*DEVICES_PER_NODE
  echo "********** RUN TEST ${COUNTER} FOR ${IP} **********"

SCRIPT="
ulimit -n 1048576;
sudo sysctl -w net.netfilter.nf_conntrack_max=1048576;
cd ~/performance-tests;
export WARMUP_PACK_SIZE=25;
export REST_URL=http://k8s-thingsbo-tbhttplo-784e0efb43-1020620715.eu-west-1.elb.amazonaws.com:80;
export MQTT_HOST=a1435f2586389421f82397b52b690867-b454cc0b7f996e3b.elb.eu-west-1.amazonaws.com;
export DEVICE_START_IDX=${DEVICE_START_IDX};
export DEVICE_END_IDX=${DEVICE_END_IDX};
export MESSAGES_PER_SECOND=${MESSAGES_PER_NODE};
export ALARMS_PER_SECOND=1;
export DURATION_IN_SECONDS=86400;
export DEVICE_CREATE_ON_START=false;
screen -d -m mvn spring-boot:run;
screen -list;
"

#  echo ${SCRIPT}

  ssh -i ~/.ssh/aws/smatvienko.pem -o StrictHostKeyChecking=accept-new ubuntu@${IP} ${SCRIPT}

#  sleep 1

done
