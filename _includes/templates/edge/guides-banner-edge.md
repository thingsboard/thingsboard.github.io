{% if currentGuide != "GettingStartedGuide" %}
- [Getting started guide](/docs/{{docsPrefix}}getting-started/) - Provide quick overview of main ThingsBoard Edge features. Designed to be completed in 15-30 minutes:
{% endif %}
{% if currentGuide != "InstallationGuides" %}
- [Installation guides](/docs/user-guide/install/{{docsPrefix}}installation-options/) - Learn how to setup ThingsBoard Edge on various available operating systems and connect to ThingsBoard CE server.
{% endif %}
- Edge Rule Engine:
{% if currentGuide != "EdgeRuleEngineOverview" %}
  - [Overview](/docs/{{docsPrefix}}rule-engine/general/) - Learn about ThingsBoard Edge Rule Engine.
{% endif %}
{% if currentGuide != "RuleChainTemplates" %}
  - [Rule Chain Templates](/docs/{{docsPrefix}}rule-engine/rule-chain-templates/) - Learn how to use ThingsBoard Edge Rule Chain Templates.
{% endif %}
{% if currentGuide != "ProvisionRuleChainFromCloudToEdge" %}
  - [Provision Rule Chains from cloud to edge](/docs/{{docsPrefix}}rule-engine/provision-rule-chains/) - Learn how to provision edge rule chains from cloud to edge.
{% endif %}
{% if currentGuide != "PushDataFromEdgeToCloudAndViseVersa" %}
  - [Push data from edge to cloud and vice versa](/docs/{{docsPrefix}}rule-engine/push-data/) - Learn how to push data from edge to cloud and vice versa.
{% endif %}
{% if currentGuide != "GrpcOverSsl" %}
- Security:
  - [gRPC over SSL/TLS](/docs/{{docsPrefix}}user-guide/grpc-over-ssl/) - Learn how to configure gRPC over SSL/TLS for communication between edge and cloud.
{% endif %}
- Features:
{% if currentGuide != "EdgeStatus" %}
  - [Edge Status](/docs/{{docsPrefix}}features/edge-status/) - Learn about Edge Status page on ThingsBoard Edge.
{% endif %}
{% if currentGuide != "CloudEvents" %}
  - [Cloud Events](/docs/{{docsPrefix}}features/cloud-events/) -  Learn about Cloud Events page on ThingsBoard Edge.
{% endif %}    
- Use cases:
{% if currentGuide != "ManageAlarmsAndRpcRequestsOnEdgeDevices" %}
  - [Manage alarms and RPC requests on edge devices](/docs/{{docsPrefix}}use-cases/manage-alarms-rpc-requests/) - This guide will show how to generate local alarms on the edge and send RPC requests to devices connected to edge:
{% endif %}
{% if currentGuide != "DataFilteringAndTrafficReduce" %}
  - [Data filtering and traffic reduce](/docs/{{docsPrefix}}use-cases/data-filtering-traffic-reduce/) - This guide will show how to send to cloud from edge only filterd amount of device data:
{% endif %}
{% if currentGuide != "EdgeRoadmap" %}
- [Roadmap](/docs/{{docsPrefix}}roadmap) - ThingsBoard Edge roadmap. 
{% endif %}