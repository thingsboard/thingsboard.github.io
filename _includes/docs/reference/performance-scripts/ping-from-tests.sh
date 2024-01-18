#!/bin/bash

. test-ips.sh

COUNTER=0

for IP in ${IPS}; do
  let COUNTER++
  echo "PING ${COUNTER} FOR ${IP}"

  ssh -i ~/.ssh/aws/smatvienko.pem -o StrictHostKeyChecking=accept-new ubuntu@${IP} <<'ENDSSH'
ping -c 1 54.171.220.200
ENDSSH
done
