#!/bin/bash

. test-ips.sh

COUNTER=0
for IP in ${IPS}; do
  let COUNTER++
  echo "SSH ${COUNTER} FOR ${IP}"

  ssh -i ~/.ssh/aws/smatvienko.pem -o StrictHostKeyChecking=accept-new ubuntu@${IP} <<'ENDSSH'

hostname

ENDSSH


done
