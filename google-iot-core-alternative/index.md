---
layout: common
title: ThingsBoard is a Google IoT Core alternative
description:
notitle: "true"
---

<section id="google-iot-core-alternative">
    <section class="intro">
        <main>
            <h1>ThingsBoard as a Google IoT Core alternative</h1>
            <h1 class="clari"></h1>
        </main>
    </section>
    
    <section class="description">
        <main>
            <div class="features-top">
                <div class="background" >
                    <div class="main1" style="height: 400px;"></div><div class="small1"></div><div class="small2"></div><div class="small3"></div>
                </div>
                <div class="block" style="padding-top: 120px; padding-bottom: 120px;">
                    <div>
                        <p>Google Cloud will shut down the IoT Core service in August 2023. You might be wondering where and how to migrate. 
                           ThingsBoard is an excellent alternative to Google IoT Cloud. 
                           Launched in 2016 as an open source project, ThingsBoard has grown to a mature platform with 1000+ customers worldwide.</p>
                        <p>ThingsBoard, Inc. provides managed services, training, support, and software development services around the platform. 
                           We may also host and manage a private platform instance in your existing Google Cloud infrastructure. </p>
                    </div>    
                </div>
            </div>
        </main>
    </section>
    
    <section class="description features-comparison">
        <main>
            <div class="features-top">
                <div class="block">
                    <div>
                        <h2>Features comparison</h2>
                        <p>Google IoT Core acts as an MQTT Broker and provides Device Registry and Pub/Sub integration. 
                           ThingsBoard provides an alternative implementation to Google IoT Core features with similar and, in some cases, identical APIs.
                           Our platform is much more than a <a href="/docs/reference/msa/">scalable</a> service to accept and route telemetry.
                           ThingsBoard brings full IoT application enablement capabilities. See the feature comparison table below: </p>
                    </div>    
                </div>
            </div>
        </main>
    </section>
    
    <section class="matrix">
        <main>
            <div class="backg-matrix">
            <div class="google"><div class="coln"><div class="head"></div></div></div>
            <div class="thingsboard"><div class="coln"><div class="head"></div></div></div>
            </div>
            <table>
                    <thead>
                        <tr>
                            <td></td>
                            <th>Google<br/>IoT Core</th>
                            <th>ThingsBoard<br/>Professional Edition</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Asset/Device Management and Data Collection</th>
                            <td><img src="/images/pe/checked.svg"></td>
                            <td><img src="/images/pe/checked.svg"></td>
                        </tr>
                        <tr>
                            <th>MQTT, HTTP transports</th>
                            <td><img src="/images/pe/checked.svg"></td>
                            <td><img src="/images/pe/checked.svg"></td>
                        </tr>
                        <tr>
                            <th>Pub/Sub Integration</th>
                            <td><img src="/images/pe/checked.svg"></td>
                            <td><img src="/images/pe/checked.svg"></td>
                        </tr>
                        <tr>
                            <th>Commands to devices</th>
                            <td><img src="/images/pe/checked.svg"></td>
                            <td><img src="/images/pe/checked.svg"></td>
                        </tr>
                        <tr>
                            <th>Scalability</th>
                            <td><img src="/images/pe/checked.svg"></td>
                            <td><img src="/images/pe/checked.svg"></td>
                        </tr>
                        <tr>
                            <th>User management and RBAC</th>
                            <td><img src="/images/pe/unchecked.svg"></td>
                            <td><img src="/images/pe/checked.svg"></td>
                        </tr>
                        <tr>
                            <th>Real-time, customizable dashboards </th>
                            <td><img src="/images/pe/unchecked.svg"></td>
                            <td><img src="/images/pe/checked.svg"></td>
                        </tr>
                        <tr>
                            <th>White-labeled branded IoT solutions</th>
                            <td><img src="/images/pe/unchecked.svg"></td>
                            <td><img src="/images/pe/checked.svg"></td>
                        </tr>
                        <tr>
                            <th>FOTA updates support</th>
                            <td><img src="/images/pe/unchecked.svg"></td>
                            <td><img src="/images/pe/checked.svg"></td>
                        </tr>
                        <tr>
                            <th>Additional LWM2M and SNMP transports</th>
                            <td><img src="/images/pe/unchecked.svg"></td>
                            <td><img src="/images/pe/checked.svg"></td>
                        </tr>
                        <tr>
                            <th>NB-IoT, SigFox, LoRaWAN, CoAP and other integrations</th>
                            <td><img src="/images/pe/unchecked.svg"></td>
                            <td><img src="/images/pe/checked.svg"></td>
                        </tr>
                    </tbody>
            </table>
        </main>
        <p>Learn more about ThingsBoard features <a href="/docs/pe/getting-started-guides/what-is-thingsboard/">here</a>.</p>
    </section>

    <section class="description">
        <main>
            <div class="features-top">
                <div class="block">
                    <div>
                        <h2>Key concepts</h2>
                        <p>See mapping of the key IoT Core concepts to ThingsBoard features documentation below:</p>
                    </div>    
                </div>
            </div>
        </main>
    </section>

    <section class="description">
        <main>
            <div class="features-top">
                <div class="block">
                    <div>
                        <h2>Device</h2>
                        <p>ThingsBoard supports provisioning and management of <a href="/docs/pe/user-guide/ui/devices/">devices</a> similar to Google IoT Core. 
                            However, IoT application is not only about devices. ThingsBoard support other <a href="/docs/pe/user-guide/entities-and-relations/">entities and relations</a> between them.
                            The relations model enables advanced use cases and business logic. For example, you may configure relations between assets, devices, customers, etc.</p>
                    </div>    
                </div>
            </div>
        </main>
    </section>

    <section class="description">
        <main>
            <div class="features-top">
                <div class="block">
                    <div>
                        <h2>Telemetry</h2>
                        <p>Telemetry is the event data sent from the device to the cloud. For example, measurements about the environment. 
                            ThingsBoard allows you to collect data from devices similar to IoT Core. ThingsBoard also enables data processing (including validation, alerting, etc.) and storage inside the platform.
                            See <a href="/docs/pe/user-guide/rule-engine-2-0/re-getting-started/">Rule Engine</a> for more details.
                            You may also forward the data to external systems (e.g. PubSub) and reuse your existing data processing flow.
                        </p>
                    </div>    
                </div>
            </div>
        </main>
    </section>

    <section class="description">
        <main>
            <div class="features-top">
                <div class="block">
                    <div>
                        <h2>Device state</h2>
                        <p>ThingsBoard monitors device <a href="/docs/pe/user-guide/device-connectivity-status/">connectivity status</a>
                            and allows devices to upload their state via the client <a href="/docs/pe/user-guide/attributes/#client-side-attributes">attributes</a> feature.
                        </p>
                    </div>    
                </div>
            </div>
        </main>
    </section>

    <section class="description">
        <main>
            <div class="features-top">
                <div class="block">
                    <div>
                        <h2>Device configuration</h2>
                        <p>ThingsBoard capabilities of device configuration as similar to Google IoT Core. 
                           See docs about device <a href=".docs/pe/user-guide/attributes/">attributes</a>.
                           Experienced users may notice a few important differences: 
                            ThingsBoard allows to push each attribute(configuration) update separately; 
                            One may change configuration attributes via Dashboard, Admin UI, REST API call, or script; 
                            Attributes are sent to the device via JSON or protobuf format. 
                        </p>
                    </div>    
                </div>
            </div>
        </main>
    </section>

    <section class="description">
        <main>
            <div class="features-top">
                <div class="block">
                    <div>
                        <h2>Device registry and device manager</h2>
                        <p>ThingsBoard provides flexible interfaces for registering, monitoring, and configuring devices: 
                            Dashboards, Admin Web UI, REST API, <a href="/docs/pe/user-guide/bulk-provisioning/">CSV upload</a>, and automatic <a href="/docs/pe/user-guide/device-provisioning/">provisioning</a>. 
                            The platform gives you much more flexibility on how to add, group and control devices. 
                            You can register devices under different tenants or assign devices to different customers. 
                            End users are able to <a href="/docs/pe/user-guide/claiming-devices/">claim devices</a> during the 
                            <a href="/docs/pe/user-guide/self-registration/">self-registration</a> process. 
                            ThingsBoard has all the required built-in instruments to enable complex use cases.
                        </p>
                    </div>    
                </div>
            </div>
        </main>
    </section>

    <section class="description">
        <main>
            <div class="features-top">
                <div class="block">
                    <div>
                        <h2>Publishing over MQTT and HTTP</h2>
                        <p>A central IoT Core point is an MQTT broker that allows data exchange between devices and the cloud. 
                            ThingsBoard also acts like an MQTT broker, but there are a few differences. 
                            With ThingsBoard, you are not limited by static topic name patterns and can define any wildcard topic filters for your needs.
                            The platform accepts JSON or protobuf payloads.
                            ThingsBoard suppors <a href="/docs/pe/user-guide/access-token/">access tokens</a>,
                            <a href="/docs/pe/user-guide/basic-mqtt/">basic MQTT credentials</a> or
                            <a href="/docs/pe/user-guide/certificates/">X.509 certificates</a>.
                            
                            In addition to MQTT and HTTP support, devices can natively communicate with the platform using other protocols like CoAP, LwM2M, and SNMP. 
                            You may also use our <a href="/docs/iot-gateway/what-is-iot-gateway/">IoT Gateway</a> to integrate devices connected to legacy and third-party systems via BLE, CAN, Modbus, OPC-UA, BACnet, ODBC, etc.
                            
                            ThingsBoard also has built-in integrations with external systems like SigFox, LoRaWAN, NB IoT, etc. 
                            You may find a list of all available integrations <a href="/docs/user-guide/integrations/">here</a>.
                        </p>
                    </div>    
                </div>
            </div>
        </main>
    </section>

    <section class="description">
        <main>
            <div class="features-top">
                <div class="block">
                    <div>
                        <h2>Send commands to and from devices</h2>
                        <p>You may send commands to and from devices with the ThingsBoard <a href="/docs/pe/user-guide/rpc/">RPC</a> feature. 
                            The commands can be persisted or not, one-way or two-way, and you can configure retry and failure policies for different command types.
                            Commands may be triggered by the user via the dashboard, via REST API, or based on events received by the platform.
                        </p>
                    </div>    
                </div>
            </div>
        </main>
    </section>

</section>
