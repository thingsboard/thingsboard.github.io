{% if currentGuide != "GettingStartedGuide" %}
- Getting started guides - Provide quick overview of main ThingsBoard Edge features. Designed to be completed in 15-30 minutes:
    * [Professional Edition](/docs/edge/getting-started/getting-started-pe/)
    * [Community Edition](/docs/edge/getting-started/getting-started-ce/)
{% endif %}
{% if currentGuide != "InstallationGuides" %}
- [Installation guides](/docs/edge/install/installation-options/) - Learn how to setup ThingsBoard Edge on various available operating systems and connect to ThingsBoard CE/PE server.
{% endif %}
- Edge Rule Engine:
{% if currentGuide != "EdgeRuleEngineOverview" %}
  - [Overview](/docs/edge/rule-engine/general/) - Learn about ThingsBoard Edge Rule Engine.
{% endif %}
{% if currentGuide != "RuleChainTemplates" %}
  - [Rule Chain Templates](/docs/edge/rule-engine/rule-chain-templates/) - Learn how to use ThingsBoard Edge Rule Chain Templates.
{% endif %}
{% if currentGuide != "ProvisionRuleChainFromCloudToEdge" %}
  - [Provision Rule Chains from cloud to edge](/docs/edge/rule-engine/provision-rule-chains/) - Learn how to provision edge rule chains from cloud to edge.
{% endif %}
{% if currentGuide != "PushDataFromEdgeToCloudAndViseVersa" %}
  - [Push data from edge to cloud and vice versa](/docs/edge/rule-engine/push-data/) - Learn how to push data from edge to cloud and vice versa.
{% endif %}
{% if currentGuide != "GrpcOverSsl" %}
- Security:
  - [gRPC over SSL/TLS](/docs/edge/security/grpc-over-ssl/) - Learn how to configure gRPC over SSL/TLS for communication between edge and cloud.
{% endif %}
- Features:
{% if currentGuide != "EdgeStatus" %}
  - [Edge Status](/docs/edge/features/edge-status/) - Learn about Edge Status page on ThingsBoard Edge.
{% endif %}
{% if currentGuide != "CloudEvents" %}
  - [Cloud Events](/docs/edge/features/cloud-events/) -  Learn about Cloud Events page on ThingsBoard Edge.
{% endif %}    
- Use cases:
{% if currentGuide != "ManageAlarmsAndRpcRequestsOnEdgeDevices" %}
  - Manage alarms and RPC requests on edge devices - This guide will show how to generate local alarms on the edge and send RPC requests to devices connected to edge:
    * [Professional Edition](/docs/edge/use-cases/manage-alarms-rpc-requests-pe/)
    * [Community Edition](/docs/edge/use-cases/manage-alarms-rpc-requests-ce/)
{% endif %}
{% if currentGuide != "DataFilteringAndTrafficReduce" %}
  - Data filtering and traffic reduce - This guide will show how to send to cloud from edge only filterd amount of device data:
    * [Professional Edition](/docs/edge/use-cases/data-filtering-traffic-reduce-pe/)
    * [Community Edition](/docs/edge/use-cases/data-filtering-traffic-reduce-ce/)
{% endif %}
{% if currentGuide != "EdgeRoadmap" %}
- [Roadmap](/docs/edge/roadmap) - ThingsBoard Edge roadmap. 
{% endif %}    
<br/>

