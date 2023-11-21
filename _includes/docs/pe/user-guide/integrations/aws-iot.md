{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}

## Overview

AWS IoT Integration allows to stream data from AWS IoT Backend to ThingsBoard and converts device payloads 
to the ThingsBoard format. AWS IoT will be primarily responsible for receiving all messages (as a broker - 
messaging server), filtering them, deciding who is interested, and then sending the message to all 
subscribers, in our case of integration.

<object width="100%" style="max-width: max-content;" data="https://img.thingsboard.io/user-guide/integrations/aws-iot-integration.svg"></object>

## AWS IOT

You should already have an [AWS account](https://aws.amazon.com/iot/) prepared, on which 
perform a few settings. To establish a correct and secure connection between the service and ThingsBoard, you need to create Policies, devices, and certificates for them.

#### Create Policy

A policy is an object in AWS that, when associated with an entity or resource, defines their permissions. 
Permissions in the policies determine whether the request is allowed or denied. Most policies are stored in 
AWS as JSON documents.

To add a new policy, choose **Security** - **Policies** in the main menu, and select the **Create Policy** button.

{% include images-gallery.html imageCollection="create-policies_0" %}

You will be redirected to the policy creation page, where you must specify the **Policy Name** and switch to **JSON** type.

{% include images-gallery.html imageCollection="create-policies_1" %}

In the field for the **Policy document**, you need to paste the code below with your unique **profile ID**.

{% capture update_server_first %}
Be sure to replace **YOUR_REGION**  and **YOUR_AWS_ID** with your region and account ID accordingly, <br>
(for example region and id "<strong><h style="color:DarkOrange;">eu-west-1:111197721064</h></strong>").
{% endcapture %}
{% include templates/info-banner.md title="Importantly:" content=update_server_first %}

**For example of policy document:**

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "iot:Publish",
        "iot:Receive"
      ],
      "Resource": [
        "arn:aws:iot:YOUR_REGION:YOUR_AWS_ID:topic/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "iot:Subscribe"
      ],
      "Resource": [
        "arn:aws:iot:YOUR_REGION:YOUR_AWS_ID:topicfilter/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "iot:Connect"
      ],
      "Resource": [
        "arn:aws:iot:YOUR_REGION:YOUR_AWS_ID:client/*"
      ]
    }
  ]
}
```
{: .copy-code}

Your region is listed in the URL when you are signed in to your AWS IoT account. <br> For example: **https://<h style="color:orange;">eu-west-1</h>.console.aws.amazaon.com**

{% include images-gallery.html imageCollection="create-policies_2" %}

After that, click the **Create** button. The policy will be added to the list, and you will receive the **Successfully created policy tb_policy** message.

{% include images-gallery.html imageCollection="create-policies_3" %}

#### Create Things and Certificates
A Thing is a digital representation of a physical device or logical entity in AWS IoT.

You can create a conditional device in several steps, but for it need to go to the appropriate section. 
On the left, choose the **All devices** category - then **Things** item. This page will display
all your devices if you don't have them yet. At the top right, select the **Create thing** button to proceed 
to adding a device.

{% include images-gallery.html imageCollection="add_device_0" %}

Consider the example of adding a single device, select the corresponding option the **Create 
single thing**, and then **Next** button.

{% include images-gallery.html imageCollection="add_device_1" %}

In the first stage, we will set the **Name** for the device, and at your discretion, additional parameters. 
Then press the **Next** button to move to the following step.

{% include images-gallery.html imageCollection="add_device_2" %}

At this stage, select the **Auto-generate a new certificate**. Certificates and keys will be available 
for download after confirming the addition of the device, so just click the next button.

{% include images-gallery.html imageCollection="add_device_3" %}

At the last stage, select your previously added policy and confirm the creation of a thing (device) 
with the **Create thing** button.

{% include images-gallery.html imageCollection="add_device_4" %}

Upon completion, you will see an additional window with the possibility to download certificates and keys.

The list of files that are required to configure the integration:
- Device certificate (_*.pem.crt_)
- Private key (_*-private.pem.key_)
- Root CA certificate (_*.pem_)

AWS additionally requires you to save your **Public key file** for yourself, so please download that as well.

After saving the required, click the **Done**.

{% include images-gallery.html imageCollection="save_certificates" %}

## ThingsBoard setup

### Create Uplink Converter

Before creating the integration, you need to create an Uplink converter in Data converters. Uplink is
necessary in order to convert the incoming data from the device into the required format for displaying
them in ThingsBoard. Click on the “plus” and on “Create new converter”. To view the events, enable Debug.
In the function decoder field, specify a script, for it copy the example Uplink converter, or
use own configuration to parse and transform data.

{% capture noteDebug %}
While Debug mode is very useful for development and troubleshooting, leaving it enabled in production mode
can significantly increase the disk space used by the database since all the debug data is stored there. It is highly recommended turning the Debug mode off after debugging is complete.
{% endcapture %}
{% include templates/info-banner.md title="Note:" content=noteDebug %}

{% include templates/tbel-vs-js.md %}

{% capture awsiotuplinkconverterconfig %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/integration/aws-iot/aws-iot-uplink-converter-config-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/integration/aws-iot/aws-iot-uplink-converter-config-javascript.md{% endcapture %}

{% include content-toggle.html content-toggle-id="awsiotuplinkconverterconfig" toggle-spec=awsiotuplinkconverterconfig %}

You can change the decoder function while creating the converter or after creating it. If the converter
has already been created, then click on the “pencil” icon to edit it.
{% include images-gallery.html imageCollection="edit_converter" %}

### Create Integration

- Go to **Integrations** section and click **Add new integration** button. Name it **"AWS IoT Integration"**, select type **AWS IoT**.

![image](https://img.thingsboard.io/user-guide/integrations/aws-iot/aws-iot-add-integration-1-pe.png)

{% capture allowCreateDevice %}
Note that if the “Allow create devices or assets” checkbox is unchecked, when sending a message to thingsboard
with any parameters of the device (or asset), if such a device (asset) does not exist, then device (asset) will not be created.
{% endcapture %}
{% include templates/info-banner.md content=allowCreateDevice %}

- The next steps is to add the recently created **Uplink** converter.

![image](https://img.thingsboard.io/user-guide/integrations/aws-iot/aws-iot-add-integration-2-pe.png)

- For now, leave the "Downlink data converter" field blank.

![image](https://img.thingsboard.io/user-guide/integrations/aws-iot/aws-iot-add-integration-3-pe.png)

- Enter AWS IoT Endpoint. You can find it in your [AWS account](https://aws.amazon.com/iot/) if you go to **Settings** - **Device data endpoint**. 

{% include images-gallery.html imageCollection="aws_endpoint" %}

- Download the previously generated certificates and key.

![image](https://img.thingsboard.io/user-guide/integrations/aws-iot/aws-iot-add-integration-4-pe.png)

- Add a Topic Filter **tb/aws/iot/#**. You can also select QoS level. We use QoS level 0 (At most once) by default.

- Click **Add** to create an integration.

![image](https://img.thingsboard.io/user-guide/integrations/aws-iot/aws-iot-add-integration-5-pe.png)

### Send Uplink message

To send a test message, use the additional functionality of AWS IoT, the MQTT test client.
In the main menu, go to **MQTT test client**, then select the **Publish to a topic** tab.

{% include images-gallery.html imageCollection="send_uplink_0" %}

**Example of topic:**
```
tb/aws/iot/sensors/freezer-432
```
{: .copy-code}

**Example of payload:**
```ruby
{
    "val0": "loaded",
    "val1": -18,
    "val2": 1785,
    "val3": 548
}
```
{: .copy-code}

To check if the message has arrived at AWS IoT integration open the events tab of integration.

{% include images-gallery.html imageCollection="send_uplink_1" %}

## Advanced usage: Create Downlink Converter

Let's look at a simple example to test a connection and send a message. For it need to create a downlink
Data converter. Then set the converter and topic in the AWS IoT integration.

{% include templates/tbel-vs-js.md %}

{% capture awsiotdownlinkconverterconfig %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/integration/aws-iot/aws-iot-downlink-converter-config-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/integration/aws-iot/aws-iot-downlink-converter-config-javascript.md{% endcapture %}

{% include content-toggle.html content-toggle-id="awsiotdownlinkconverterconfig" toggle-spec=awsiotdownlinkconverterconfig %}

Next, configure the conditions under which a message will be sent through the AWS IoT Downlink integration.
To do this, you need to open the Rule Chain used for the device (in our case, the default Root Rule Chain), then add an [integration downlink node](https://thingsboard.io/docs/pe/user-guide/rule-engine-2-0/action-nodes/#integration-downlink-node), for link condition set the Attributes Updated.

{% include images-gallery.html imageCollection="downlink_2-3" %}

To subscribe to a topic for receive messages from Thingsboard, use the **AWS MQTT test client**.

{% include images-gallery.html imageCollection="downlink_4" %}

Now you can update the device attribute. To do this, open **Device**, **Attributes** tab, and choose 
**Shared Attributes**, then select any attribute, or add a new one to update it.

{% include images-gallery.html imageCollection="downlink_5" %}

The result can be tracked on AWS page where you subscribed to the topic:

{% include images-gallery.html imageCollection="downlink_6" %}

## Video tutorial

See video tutorial below for step-by-step instruction how to setup AWS IoT Integration (Outdated interface).

<br>
<div id="video">  
 <div id="video_wrapper">
     <iframe src="https://www.youtube.com/embed/udkuOUrNzWk" frameborder="0" allowfullscreen></iframe>
 </div>
</div>

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}
