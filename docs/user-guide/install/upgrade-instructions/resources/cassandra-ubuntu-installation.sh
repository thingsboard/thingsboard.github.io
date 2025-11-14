# Add cassandra repository
echo 'deb http://www.apache.org/dist/cassandra/debian 311x main' | sudo tee --append /etc/apt/sources.list.d/cassandra.list > /dev/null
curl -L https://www.apache.org/dist/cassandra/KEYS | sudo apt-key add -
sudo apt-get update
## Cassandra installation
sudo apt-get install cassandra
## Tools installation
sudo apt-get install cassandra-tools