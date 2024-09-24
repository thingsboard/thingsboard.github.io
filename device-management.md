---
layout: iot-article
title: ᐉ IoT Device Management Platform
notitle: "true"
description: "IoT Device Management ✔ IoT Device Control ⚫ ThingsBoard ➤ Help organizations to have better control and fetch for all types of device data using REST APIs or Web UI"
redirect_from: "/docs/services/device-management/"
---
<section class="hero light-text"></section>
<div id="header-block" class="block-wrapper wrapper-main-color">
    <div class="block-content">
        <div class="text-wrapper">
            <span class="read-info">6 minutes read</span>
            <h1>IoT Device Management</h1>
            <div class="text-content medium-margin">In the rapidly evolving landscape of the Internet of Things (IoT), the task of managing a multitude of devices can be daunting. This is where IoT device management comes into play. It simplifies the process by providing tools to track, monitor, control, manage, secure and sustain the connected devices.</div>
            <div class="text-content">It provides a comprehensive view of device status, data traffic, and more. Essentially, it serves as a control center for all your IoT devices, ensuring they operate smoothly and securely.</div>
        </div>
        <img class="image" srcset="/images/iot-articles/device_management_1_1090x672.png 1090w, /images/iot-articles/device_management_1_2180x1344.png 2180w" sizes="(max-width: 1920px) 1090px, (min-width: 1921px) 2180px" src="/images/iot-articles/device_management_1_1090x672.png" alt="IoT solutions dashboard with widgets dark"/>
        <div class="text-wrapper">
            <h2>IoT ecosystem - what is it?</h2>
            <div class="text-content medium-margin">IoT ecosystem is a network of physical hardware and IoT applications that communicate with each other to generate value. There are 4 main components that are part of IoT ecosystem: </div>
            <ul class="list">
                <li>Devices and sensors responsible for data collection.</li>
                <li>Connectivity layer is responsible for reliable data transmission from devices to applications.</li>
                <li>Data processing and analytics components define what should be done with collected data, it's main role is to extract valuable information from devices and sensors.</li>
                <li>User interfaces - mobile apps or web portals. Device management dashboard give users instruments to interact with IoT system.</li>
            </ul>
            <div class="text-content medium-margin">Based on business needs, IoT ecosystem can have additional components like an automated workflow engine, alerting and notification, edge computing, anomaly detection module, reporting, etc.</div>
            <h2>What is IoT Device Management?</h2>
            <div class="text-content medium-margin">IoT device management controls all aspects of connected devices from a single location. It includes devices like sensors, meters, PLCs, connected equipment, CCTV cameras, portals, and processors. The services supported by the IoT device management platform include registration and provisioning, inventory control, remote configuration, and firmware upgrades.</div>
            <div class="text-content medium-margin">Collecting location and usage data from managed IoT devices is an essential part of device management. This data is then analyzed for maintenance, repair, optimization, or replacement. Effective cost management becomes increasingly important as more IoT devices are integrated into mission-critical processes.</div>
            <div class="text-content medium-margin">IoT device management system refers to the tasks and interconnected functions related to the setup, configuration, and maintenance of these devices. These tasks include device setup, admin and monitoring of device fleets, and managing the device through its lifecycle.</div>
            <h3 class="line-height-small">What is the role of remote IoT device control?</h3>
            <div class="text-content medium-margin">Remote control is one of the core features of IoT application. Ability to send commands to the device remotely, change device configuration, update firmware are critical for device management. These fundamental capabilities are essential for automating device management procedures and manage fleet of devices efficiently and in real-time.</div>
            <div class="text-content medium-margin">For example, predefined device configuration templates can speedup configuration rollout to big amount of devices. Another example is when a device is automatically provisioned to the IoT platform, system automatically submit latest firmware and latest configuration to that device. Such automation processes are important to guarantee device security and efficiency without direct operator involvement in the process, as a result we avoid scalability issues that are common when companies start to scale device fleet and remote device management platform does not provide ready-to-use automated rules to manage devices lifecycle. Scheduled or conditional rules can automatically send required configuration, command or firmware to device fleet without manual user work, so operators can focus on system efficiency and on incident management instead of manually controlling devices.</div>
            <div class="text-content medium-margin">When you choose the right IoT management system it is recommended to take into account another aspect of remote device management that usually we do not think about at the beginning - command retry policies, the ability to configure failover procedures, delayed command delivery for devices that are offline right now but the command still should be delivered to it once it will go online.</div>
            <h3 class="line-height-small">Different protocols for IoT device configuration management</h3>
            <div class="text-content medium-margin">We can group IoT connectivity protocols into the following categories:</div>
            <ul class="list">
                <li><span class="bold-text">general-purpose protocols:</span> most common protocols in IoT domain are MQTT, HTTP, CoAP, LwM2M. They are lightweight and works well for real-time messaging and device management. They can be run on devices with limited resources and at the same time support data encryption to guarantee security and data protection. MQTT is a de facto standard protocol for IoT ecosystem because of its publish/subscribe model. CoAP closer to REST model but optimized for M2M applications. LwM2M was designed to simplify device management and remote control. </li>
                <li><span class="bold-text">Industrial and automation systems:</span> OPC-UA, Modbus, BACnet are good examples of protocols that are used in industrial domain. They are equipment-specific and were designed many years ago even when "IoT" industry did not exist. In most cases you will use a gateway or integration service to connect such systems to remote IoT device software.</li>
                <li><span class="bold-text">Low power wide area networks (LPWAN): </span> good choice for cases when data should be transmitted for big ranges with minimal amount of energy to prolong battery life. NB-IOT, LoRAWAN and Sigfox are connectivity protocols that shows excellent results. Usually, you select LoRaWAN when your devices are stationary or located inside well known areas (industrial plant, construction site, city with already available LoRa coverage). In case when your devices will move across the country, or you do not want to manage gateways or even think about network coverage, then NB-IoT is your choice because this type of connectivity is managed by telecom providers.</li>
            </ul>
            <div class="text-content medium-margin">For sure there are other popular protocols like HTTP, AMQP, Websockets, BLE and there are a lot of IoT applications that use them as a communication channel between devices and IoT application. They might require slightly more resources from the IoT device (battery, CPU, memory) but in the same time many developers already have experience working with them and software ecosystem provides a lot of libraries, systems and best practices how to utilize and manage them.</div>
            <div class="text-content medium-margin">ThingsBoard IoT device management app supports a variety of direct communication <a class="article-link" href="/docs/pe/api/">protocols</a> for interaction between devices and the IoT platform — MQTT, CoAP, HTTP, LWM2M, OPC-UA, Modbus, etc. Those protocols are already industry standards. However, we do support other options — SNMP, Kafka, TCP/UDP.</div>
            <div class="text-content">We also <a class="article-link" href="/docs/user-guide/integrations/">accept devices</a> from external connectivity IoT device connectivity providers like LoRaWAN, Sigfox, NB-IoT, AWS IoT, Azure IoT, Actility ThingPark, TheThingsStack, OceanConnect, etc.</div>
            <h3 class="line-height-small">Role of Gateway & Edge Computing</h3>
            <div class="text-content medium-margin">IoT gateway acts like a bridge between IoT devices and the cloud and performs 3 main functions:</div>
            <ul class="list">
                <li><span class="bold-text">Connectivity and protocol translation:</span> on-site device can use communication protocols that work on short ranges (Bluetooth, LoRA, ZigBee)  or can operate only in local networks (CAN, Modbus, Bacnet, etc). To organize centralized and scalable device management, gateways are needed to connect data streams between device and cloud. Gateway manage bidirectional connection with local devices, transforms payloads from device into a unified format and transmits it to the cloud and vice versa.</li>
                <li><span class="bold-text">On-site data storage and preprocessing:</span> data from local sensors and devices collected and persisted on the gateway, then preprocessed and finally sent to the cloud. This function gives 2 benefits. First is that data can be persisted locally on site gateway in case of any connectivity issue between site and cloud, so no data is lost if cloud services are not available. Once connection restored, data streams are synchronized between cloud and gateway. Second benefit is that we can pre-aggregate data locally on the gateway and only valuable portion of data will go to the cloud. It allows to reduce network bandwidth, amount of CPU/RAM/Disk resources on the cloud and total cost of ownership of IoT device management app.</li>
                <li><span class="bold-text">Edge-computing:</span> data locality principle says that we can have a more efficient data processing pipeline if our algorithms are closer to the data sources. By deploying processing logic from the cloud to the edge we can receive a lot of benefits of edge computing including improved response time and latency which is critical for real-time use cases with very large data streams. For example, when we work with vibration data for predictive maintenance use case, ability to process data on the edge dramastically reduce networking cost and increate speed of analysis. Once data processed on the edge, only a valuable portion of it would be transferred to the cloud.</li>
            </ul>
            <div class="text-content medium-margin">For more details, explore the <a href="/docs/iot-gateway/what-is-iot-gateway/">IoT Gateway</a> and <a href="https://thingsboard.io/products/thingsboard-edge/">edge computing with ThingsBoard</a>.</div>
            <h2 class="line-height-small">7 Key Steps to Smooth IoT Devices Management</h2>
            <div class="text-content">IoT device management involves several key steps to ensure the smooth operation of your IoT devices.</div>
        </div>
        <div class="definitions-block">
            <div class="definitions-list">
                <div class="definitions-list-item one-to-one-and-half align-start">
                    <div class="term bold padding-top">Adding and Deleting Devices</div>
                    <div class="definition">This involves registering the devices with their unique identifiers and credentials. Once registered, these devices can communicate with the IoT platform and send data. Conversely, if a device is no longer needed or is being replaced, it can be deleted from the system.</div>
                </div>
                <div class="definitions-list-item one-to-one-and-half align-start">
                    <div class="term bold">Updating Firmware</div>
                    <div class="definition">IoT devices often need firmware updates to add new features, fix bugs, or patch security vulnerabilities. With the IoT device management app, these updates can be pushed to the devices remotely using over-the-air update (OTA) mechanisms.</div>
                </div>
                <div class="definitions-list-item one-to-one-and-half align-start">
                    <div class="term bold padding-top">Monitoring Connection Status</div>
                    <div class="definition">This involves checking whether the devices are online or offline, and if they are online, whether they are functioning properly. If a device goes offline or starts malfunctioning alerts can be set up to notify the relevant personnel.</div>
                </div>
                <div class="definitions-list-item one-to-one-and-half align-start">
                    <div class="term bold">Managing Device Credentials</div>
                    <div class="definition">Credentials need to be managed to ensure that only authorized devices can connect to the platform. This involves tasks such as issuing new certificates for new devices, revoking certificates for decommissioned devices, and rotating certificates periodically for security.</div>
                </div>
                <div class="definitions-list-item one-to-one-and-half align-start">
                    <div class="term bold padding-top">Assigning Devices to Customers</div>
                    <div class="definition">In many cases, IoT devices are used by customers or end-users who do not have administrative access to the IoT platform. In such cases, devices can be assigned to customers so that they can view data from their devices and manage certain aspects of their operation.</div>
                </div>
                <div class="definitions-list-item one-to-one-and-half align-start">
                    <div class="term bold">Browsing Device Attributes, Telemetry, Alarms, and Events</div>
                    <div class="definition">Administrators can browse various aspects of a device such as its attributes, telemetry data, alarms, and events.</div>
                </div>
                <div class="definitions-list-item one-to-one-and-half align-start">
                    <div class="term bold padding-top">Managing Device Relations</div>
                    <div class="definition">In complex IoT deployments, different devices might interact with each other and other assets in various ways. These relations between devices and assets can be managed through the IoT platform.</div>
                </div>
            </div>
        </div>
        <div class="text-wrapper">
            <h2>Advantages of Using IoT Device Management Software</h2>
            <div class="text-content">Implementing IoT device management in your business operations can bring a multitude of benefits.</div>
        </div>
    </div>
</div>
<div id="details-block" class="block-wrapper wrapper-accent-color">
    <div class="block-content">
        <div class="detail">
            <div class="detail-name">Efficient Device Tracking</div>
            <div class="detail-description">IoT device management allows businesses to track and monitor all connected IoT devices in real time. </div>
        </div>
        <div class="detail">
            <div class="detail-name">Improved Organization</div>
            <div class="detail-description">IoT device management tools allow users to organize all devices in an efficient and productive manner.</div>
        </div>
        <div class="detail">
            <div class="detail-name">Cost savings</div>
            <div class="detail-description">By managing your devices with a centralized platform, you can reduce the need for manual maintenance or troubleshooting in the field, freeing up resources for other needs.</div>
        </div>
        <div class="detail">
            <div class="detail-name">Enhance the dependability and consistency</div>
            <div class="detail-description">A top-notch IoT device management solution merges adaptable device structuring, real-time access, and comprehensive visibility into device status and performance on a single, self-service platform.</div>
        </div>
        <div class="detail">
            <div class="detail-name">Proactive Maintenance</div>
            <div class="detail-description">By monitoring the health, connectivity, and security of IoT devices, IoT device management helps to maintain the smooth operation of your network.</div>
        </div>
        <div class="detail">
            <div class="detail-name">Enhanced Security</div>
            <div class="detail-description">With the ability to manage device credentials and provide permissions, IoT device control enhances the security of your IoT ecosystem.</div>
        </div>
    </div>
</div>
<div class="block-wrapper wrapper-main-color medium-padding">
    <div class="block-content">
        <div class="text-wrapper">
            <h2>When Businesses Should Use IoT Device Management Software</h2>
            <div class="text-content medium-margin">Businesses should consider using IoT device management software when they have a multitude of devices — dozens, hundreds, or even thousands — and need to gain secure access to them from a remote or central location for firmware updates and insights on the health of those devices.</div>
            <div class="text-content small-margin">Here are some scenarios when IoT device management software becomes particularly useful:</div>
            <ul class="list">
                <li><span class="bold-text">Large-scale deployments.</span> If your business involves deploying a large number of IoT devices, managing them individually can be a daunting task. IoT device management software allows you to manage all your devices from a single platform, making the process more efficient and less time-consuming.</li>
                <li><span class="bold-text">Security concerns.</span> With the increasing number of cyber threats, securing your IoT devices is paramount. Device management IoT platform provides robust security features such as device authentication and encryption to protect your devices from potential threats.</li>
                <li><span class="bold-text">Complex networks.</span> If your IoT network involves complex interactions between different devices, managing these interactions manually can be challenging. Device management application provides you with managing device relations and ensuring smooth inter-device communication.</li>
            </ul>
            <div class="text-content">In essence, if your business relies heavily on IoT devices, investing in IoT device management software can greatly enhance your operational efficiency and security.</div>
            <h2>Enterprise IoT Device Management Scalability</h2>
            <div class="text-content">Enterprises usually deal with a big amount of IoT devices and sensors so device management system must handle thousands and millions of connected devices. To achieve this system should follow next best practices:</div>
            <ul class="list">
                <li>Use microservice architecture for supporting horizontal scaling of different components based on demands.</li>
                <li>Integrate with cloud providers to utilize their infrastructure and service to reduce effort for system management, maintenance and scaling.</li>
                <li>Use Edge computing capabilities that allow to process data closer to devices and reduce network bandwidth and latency.</li>
                <li>Utilize data partitioning and use distributed databases - it allows to simplify scaling of persistence layer of the system once it would be needed.</li>
                <li>Ensure that security mechanisms are scalable and system complies with regulation constraints.</li>
                <li>Configure realtime monitoring stack to track performance and health of the system.</li>
            </ul>
            <h2>Our Products for Comprehensive Device Management</h2>
            <div class="text-content">At ThingsBoard, we offer comprehensive IoT device management features for managing your IoT devices. Our device management platform supports various aspects of a distributed infrastructure for managing, controlling, and monitoring software, hardware, and communication components as well as data flows and data quality.</div>
            <h3 class="small-padding">Our solutions include:</h3>
            <ul class="list">
                <li>Easily add new devices to the system with unique identifiers and credentials.</li>
                <li>Manage firmware and software versions for devices including automated OTA update workflows for bulk firmware rollout and push updates to devices remotely.</li>
                <li>Remote IoT device control by sending commands and configuration updates to group of devices.</li>
                <li>Keep track of the connection status of your devices in real-time.</li>
                <li>Manage device credentials to ensure that only authorized devices can connect to your network.</li>
                <li>Assign devices to customers or end-users who do not have administrative access to the IoT platform.</li>
                <li>Browse various aspects of a device such as its attributes, telemetry data, alarms, and events.</li>
            </ul>
            <div class="text-content">We provide a cross-layer graph-based view of the end-to-end path between devices and the cloud, giving you a comprehensive overview of your entire IoT ecosystem.</div>
        </div>
        <img class="image" srcset="/images/iot-articles/device_settings_1_1090x658.png 1090w, /images/iot-articles/device_settings_1_2180x1316.png 2180w" sizes="(max-width: 1920px) 1090px, (min-width: 1921px) 2180px" src="/images/iot-articles/device_settings_1_1090x658.png" alt="IoT solutions dashboard with widgets dark"/>
        <div class="text-wrapper">
            <h2 class="center-text">Our Cases</h2>
            <div class="text-content">At ThingsBoard, we have successfully implemented IoT device monitoring and management solutions in various scenarios.</div>
        </div>
        <div class="definitions-block">
            <div class="definitions-list side-paddings">
                <div class="definitions-list-item one-to-one-and-half align-start">
                    <div class="term bold padding-top">Healthcare</div>
                    <div class="definition">Similar to fitness bands that are used to ьщтшещк users activity, our solutions have been used in the healthcare industry to monitor the health of patients remotely and to connect medical devices such as hematological analyzers, blood pressure monitors, heart rate monitors, and glucose sensors.</div>
                </div>
                <div class="definitions-list-item one-to-one-and-half align-start">
                    <div class="term bold">Manufacturing</div>
                    <div class="definition">In the manufacturing sector, our products have been used to monitor and manage industrial IoT devices. This includes tracking the status of machines, predicting maintenance needs, and optimizing production processes.</div>
                </div>
                <div class="definitions-list-item one-to-one-and-half align-start">
                    <div class="term bold padding-top">Smart Cities</div>
                    <div class="definition">Our solutions have been deployed in smart city projects to manage a wide range of IoT devices such as traffic sensors, waste management systems, and smart lighting systems. This helps city administrators to monitor and manage their infrastructure more effectively.</div>
                </div>
                <div class="definitions-list-item one-to-one-and-half align-start">
                    <div class="term bold">Energy</div>
                    <div class="definition">Our tools have been used in the energy sector to manage devices like smart meters and solar panels. This helps energy companies to monitor energy consumption and production in real-time, leading to more efficient energy management.</div>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="contact-us" class="block-wrapper wrapper-main-color">
    <div class="block-content">
        <div class="contact-us-content">
            <div class="info">
                <div class="title">Ready to launch your unique product?</div>
                <div class="text">Leave us your name and email and we will get back to you within 2 business days</div>
            </div>
            <form id="Serv_DeviceManage_ReadyToLaunch" class="contact-form gtm_form readyToLaunchForm" method="post" onsubmit="return validateContactForm(this)">
                <fieldset>
                    <div class="form-section">
                        <div class="form-element">
                            <label for="name">
                                <input id="name" class="contact-us-form-control" value="" placeholder="Your Name" name="name" type="text" size="40" maxlength="50">
                                <p>Name*</p>
                            </label>
                        </div>
                        <div class="form-element">
                            <label for="email">
                                <input id="email" class="contact-us-form-control" value="" placeholder="Enter Email" name="email" type="email" size="40" maxlength="80">
                                <p>Email Address*</p>
                            </label>
                        </div>
                    </div>
                    <div class="submit-button-container">
                        <input class="contact-us-button" value="Submit" type="submit">
                    </div>
                </fieldset>
            </form>
        </div>
    </div>
</div>
