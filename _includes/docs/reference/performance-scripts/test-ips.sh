#!/bin/bash
IPS="
54.171.220.200
54.194.217.190
34.240.171.56
18.203.162.117
34.244.174.96
"

COUNT=0

for IP in ${IPS}; do
  let COUNT++
  echo "LIST id ${COUNT} IP ${IP}"
done
