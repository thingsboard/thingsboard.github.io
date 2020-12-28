<br>
{% capture grpc_ssl_note %}
**Important note for securing communication between ThingsBoard Edge and ThingsBoard CE/PE server**
 - ThingsBoard Edge and ThingsBoard CE/PE server instance are communicating over gRPC protocol
 - gRPC channel is not secured with TLS/SSL mechanism dy default and binary messages that are transferring between ThingsBoard Edge and ThingsBoard CE/PE server instance could be stolen by non-authorized persons
 - gRPC messages contain sensitive data like user passwords and device credentials, and theft of this data could lead to serious consequences 
 - ThingBoard team strongly recommends secure gRPC with TLS/SSL for production environments and environments with sensitive data
 - Please follow this guide to configure gRPC with TLS/SSL TODO: voba - add link 
{% endcapture %}
{% include templates/info-banner.md content=grpc_ssl_note %}