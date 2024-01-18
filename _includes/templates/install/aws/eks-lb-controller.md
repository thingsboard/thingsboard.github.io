Once the cluster is ready you must create AWS load-balancer controller.
You can do it by following [this](https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html) guide.
The cluster provisioning scripts will create several load balancers:

* "tb-http-loadbalancer" - AWS ALB that is responsible for the web UI, REST API and HTTP transport;
* "tb-mqtt-loadbalancer" - AWS NLB that is responsible for the MQTT transport;
* "tb-coap-loadbalancer" - AWS NLB that is responsible for the CoAP transport;
* "tb-edge-loadbalancer" - AWS NLB that is responsible for the Edge instances connectivity;

Provisioning of the AWS load-balancer [controller](https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html)
is a **very important step** that is required for those load balancers to work properly. 