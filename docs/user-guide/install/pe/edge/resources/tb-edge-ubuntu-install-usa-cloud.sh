sudo sh -c 'cat <<EOL >> /etc/tb-edge/conf/tb-edge.conf
export CLOUD_ROUTING_KEY=<PUT_YOUR_EDGE_KEY_HERE>
export CLOUD_ROUTING_SECRET=<PUT_YOUR_EDGE_SECRET_HERE>
export CLOUD_RPC_HOST=thingsboard.cloud
export CLOUD_RPC_PORT=7070
export CLOUD_RPC_SSL_ENABLED=true
export INTEGRATIONS_RPC_PORT=19090
EOL'
