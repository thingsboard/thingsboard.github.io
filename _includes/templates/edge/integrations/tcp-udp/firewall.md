{% capture tcp_udp_firewall_note %}
On the machine, running remote {{integrationName}} Integration, port **{{integrationPort}}** must be opened for incoming connections—the **nc** utility must be able to connect to he {{integrationName}} socket.
If you are running it locally, it should be fine without any additional changes.
{% endcapture %}
{% include templates/info-banner.md content=tcp_udp_firewall_note %}