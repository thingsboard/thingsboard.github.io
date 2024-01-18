#!/bin/bash

. test-ips.sh

COUNTER=0

for IP in ${IPS}; do
  let COUNTER++
  echo "REBOOT ${COUNTER} FOR ${IP}"

  ssh -i ~/.ssh/aws/smatvienko.pem -o StrictHostKeyChecking=accept-new ubuntu@${IP} <<'ENDSSH'
echo "going to reboot"
sudo reboot now
echo "over"
ENDSSH
done
