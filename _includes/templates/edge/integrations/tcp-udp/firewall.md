{% capture tcp_udp_firewall_note %}
On the machine, where remote {{integrationName}} Integration is running, port **{{integrationPort}}** must be opened for incoming connections - **nc** utility must be able to connect to {{integrationName}} socket.
In case you are running it locally, it should be fine without any additional changes.
{% endcapture %}
{% include templates/info-banner.md content=tcp_udp_firewall_note %}