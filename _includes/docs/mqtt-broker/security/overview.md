* TOC
{:toc}

This guide provides an overview of the various options you have to manage **authentication** and **authorization** for MQTT clients in accordance with your specific requirements 
and infrastructure. 

Authentication refers to the process of verifying the identity of MQTT clients connecting to the broker. 
It ensures that only authenticated clients can access the system. 
The guide will explore different authentication mechanisms such as basic authentication, and SSL/TLS client certificate authentication. 
It will explain how to configure and enable these authentication methods based on your security needs.

Authorization, on the other hand, involves granting or denying access to specific resources or actions based on the authenticated client's privileges. 
You will learn how to assign topic authorization rules to clients to control their permissions and restrict their actions within the MQTT system.

By understanding and implementing the authentication and authorization options outlined in this guide, 
you can ensure secure and controlled access to the MQTT broker, protecting your infrastructure and data from unauthorized access or misuse.

## Next steps

{% assign currentGuide = "SecurityGuide" %}{% include templates/mqtt-broker-guides-banner.md %}
