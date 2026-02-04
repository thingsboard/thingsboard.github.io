---
layout: docwithnav
assignees:
- ashvayka
title: Getting Started with ThingsBoard
description: Getting started with ThingsBoard open-source IoT platform and simulated IoT devices
redirect_from: "/docs/samples/"

---

* TOC
{:toc}

{% include get-hosts-name.html %}

This guide introduces the core ThingsBoard concepts and helps you get started with IoT data in just a few minutes.

By following this guide, you will learn how to:
- connect a device to ThingsBoard
- publish telemetry data
- visualize data on dashboards
- configure alarms and notifications
- securely share data with customers

<hr>

## Prerequisites

You need ThingsBoard server up and running. 
To save time, you can skip local installation and use **ThingsBoard Cloud**. Simply follow the Getting Started guide for your region: [North America](/docs/paas/getting-started-guides/helloworld/) or [Europe](/docs/paas/eu/getting-started-guides/helloworld/).

Alternatively, you can deploy ThingsBoard on your own infrastructure using our guides for [Windows (Docker)](/docs/user-guide/install/docker-windows/){:target="_blank"} or [Linux / MacOS (Docker)](/docs/user-guide/install/docker/){:target="_blank"}.

<hr>

## Log in to ThingsBoard

Open the ThingsBoard web interface. On the login page, you can:
- **Sign up** using{% unless docsPrefix contains "paas/" %} Google, GitHub, Apple, or{% endunless %} an email and password.
- **Sign in** using existing account credentials.

After successful authentication, you will be redirected to the ThingsBoard interface.
All further steps in this guide are performed at the [Tenant](/docs/{{docsPrefix}}user-guide/ui/tenants/){:target="_blank"} level.

> **Note:** Available login options and branding may differ between ThingsBoard Cloud and self-hosted deployments.

<hr>

## Step 1. Provision a Device {#step-1-provision-device}

A [Device](/docs/{{docsPrefix}}user-guide/ui/devices/){:target="_blank"} in ThingsBoard represents a physical or virtual IoT device connected to the platform. 
Devices publish telemetry and attributes and can receive control commands.

Create a device that will act as the telemetry source for the platform.
1. Navigate to **Entities &#8702; Devices** from the main menu.
2. Click **&#43;** (**Add**) in the upper-right corner and select **Add new device**. 
3. Enter a device name (for example, **Thermometer**). 
4. Click **Add** to complete the device creation.
5. A connectivity check dialog appears. Close it for now — you will return to it in the next step.

The device is successfully created and registered in ThingsBoard. It is ready to send telemetry data and be used in subsequent steps.

<hr>

## Step 2. Connect the Device {#step-2-connect-device}

ThingsBoard provides built-in connectivity examples for sending telemetry using different protocols. It allows you to quickly test connectivity, validate credentials, and confirm that incoming data is processed correctly.

> To learn how to connect devices based on your technology stack or connectivity solution, see the available [connection guides](/docs/guides/#AnchorIDConnectYourDevice){:target="_blank"}.

Verify the device connection to ThingsBoard by publishing test telemetry data:
1. Click on device to open its details.
2. Click **Check connectivity**. 
3. Choose a messaging protocol and platform-specific client tool. 
4. Copy the generated command and execute it in a Terminal. The provided command publishes a temperature value of 25.

Once telemetry is published successfully:
- The device status changes from **Inactive &#8702; Active**
- Telemetry is displayed on the device&#39;s **Latest telemetry** tab.

For additional protocols and API options,[ThingsBoard API reference](/docs/api/){:target="_blank"}.

<hr>

## Step 3. Visualize data on Dashboard {#step-3-create-dashboard}

A [Dashboard](/docs/{{docsPrefix}}user-guide/dashboards/){:target="_blank"} is a configurable user interface composed of widgets that visualize telemetry, alarms, and other data from IoT entities, allow users to control devices, and highlight abnormal behavior, enabling real-time monitoring, analysis, and response to events.

Create a dashboard to visualize telemetry and alarm data from the device.
1. Navigate to **Dashboards**.
2. Click **&#43;** (**Add**) in the upper-right corner and select **Create new dashboard**.
3. Name it **My Dashboard** and click **Add**.

The dashboard has been created. It opens automatically, so you can start adding widgets right away.

### Step 3.1 Add a Value card widget

A [Widget](/docs/{{docsPrefix}}user-guide/widgets/){:target="_blank"} in ThingsBoard is a configurable UI component used on dashboards to visualize data, control devices, or display alarms and events.
Its enabling interactive monitoring and management of IoT systems.

Add a **Value card** widget to display the latest temperature value.
1. In dashboard edit mode, click Add widget.
2. Select the **Cards** widget bundle. 
3. Add the **Value card** widget. 
4. Configure the data source:   
   &#8211;&#8195;Set **Thermometer** as the data source.   
   &#8211;&#8195;Use **temperature** as the telemetry key.
5. Click **Add**.
6. Resize the widget if necessary.

The widget now displays the latest temperature reported by the device.

> This guide uses a single device as the widget data source.
For dynamic or multi-entity dashboards, use [entity aliases](/docs/{{docsPrefix}}user-guide/ui/aliases/){:target="_blank"}.

### Step 3.2 Add a Time series chart widget

A **Time series chart** visualizes how telemetry values change over time.

Add a chart to display temperature history:
1. Click **Add widget**. 
2. Choose the **Charts** widget bundle. 
3. Select **Time series chart**. 
4. Set the **Thermometer** as the data source. 
5. In **Series**, specify **temperature** as the series key.
6. Click **Add**. 
7. Adjust the widget size if needed.

The chart now displays temperature values over time.

Send several telemetry updates (see [Step 2](#step-2-connect-the-device)). The chart updates automatically as new data arrives.

You can customize the [time window](/docs/{{docsPrefix}}user-guide/dashboards/#time-window){:target="_blank"}, aggregation, and grouping settings in the widget configuration.

### Step 3.3 Add an Alarms table widget

An **Alarms table** widget displays alarms associated with selected entities, including severity and status.

Add an alarms table to the dashboard:
1. In edit mode, click **Add widget**. 
2. Choose the **Alarm widgets** bundle. 
3. Select **Alarms table**. 
4. Set **Thermometer** as the data source. 
5. Configure alarm severity and status filters as needed.   
   Mark those you want to see in the widget. If none are marked, all alarms will be displayed regardless of their status or severity. 
6. Click **Add**.
7. Resize and position the widget.
8. **Save** the dashboard.
9. Click **Save** in the top-right corner of the dashboard to save it.

The dashboard now provides real-time visibility into both telemetry data and active alarms.

## Step 4. Alarms & Notifications

An [Alarm](/docs/{{docsPrefix}}user-guide//alarms/){:target="_blank"} in ThingsBoard represents an abnormal event, condition violation, or critical state change associated with your entities, such as devices, assets, customers, or other system components.

Alarms are generated automatically when conditions defined in [alarm rules](/docs/{{docsPrefix}}user-guide/alarm-rules/){:target="_blank"} are met.

In this step, you configure an alarm rule that detects high temperature and observe how alarms and notifications work in practice.

<hr>

### Step 4.1 Configure alarm rules {#step-4-configure-alarm-rules}

Define an alarm rule that generates an alarm when the temperature exceeds 25 °C.

Configure the alarm rule at the device profile level to ensure the same logic is applied to all devices using this profile.

<b><font size="3">Create the alarm rule</font></b>
1. Navigate to **Alarms &#8702; Alarm rules**. 
2. Click **&#43;** (**Add**) in the upper-right corner and select **Create new alarm rule**.

<b><font size="3">Configure general settings</font></b>   
1. **Alarm type**: <span class="code-light">High temperature</span>
2. **Target entity**: <span class="code-light">default</span> device profile

<b><font size="3">Add a telemetry argument</font></b>   
1. Click **Add argument**
2. Configure the argument:   
   &#8194;&#8226;&#8194;**Entity type**: **Current entity**   
   &#8194;&#8226;&#8194;**Argument type**: **Latest telemetry**   
   &#8194;&#8226;&#8194;**Time series key**: <span class="code-light">temperature</span>   
   &#8194;&#8226;&#8194;**Argument name**: <span class="code-light">temperature</span>   
3. Click **Add**

This creates the <span class="code-light">temperature</span> variable used in the alarm condition.

<b><font size="3">Define the trigger condition</font></b>   
1. Click **Add trigger condition**.
2. Set **Severity** to **Critical**.
3. **Add a condition** in **Script** mode:
   ```javascript
   // Triggers an alarm when temperature is above 25 degrees
   return temperature > 25;
   ```
   {:.copy-code} 
4. Click **Save**.

<b><font size="3">Save the rule</font></b>

Click **Add** to save and activate the alarm rule.

The alarm will now be triggered whenever the temperature exceeds **25 °C**.

<hr>

### Step 4.2 Trigger an Alarm {#step-5-create-alarm}

Publish a telemetry value greater than 25 °C (for example, <span class="code-light">26</span>), as described in [Step 2](#step-2-connect-device).

When the threshold is crossed:
- a new **active alarm** appears on the dashboard;
- the alarm can be **acknowledged** or **cleared** using the alarm widget;
- a notification is generated in the **Notification center**.

This demonstrates how ThingsBoard detects and reacts to critical conditions in real time.

<hr>

### Alarm notifications {#step-6-alarm-notifications}

ThingsBoard [Notification center](/docs/{{docsPrefix}}user-guide/notifications/){:target="_blank"} allows you to send personalized notifications to end users about device activity, alarms, and system events in your IoT ecosystem.

Notifications can be delivered via email, SMS, or integrations with third-party systems.

> To learn how to configure email notifications for alarms, see the [Send email on alarm](/docs/tutorials/send-email/){:target="_blank"} guide.

Use the [ThingsBoard Mobile Application](/docs/mobile/){:target="_blank"} to enable push notifications that instantly deliver alerts about critical events in your IoT ecosystem directly to your smartphone—wherever you are.

<hr>

## Step 5. Share data with Customers {#step-7-assign-device-and-dashboard-to-customer}

ThingsBoard supports multi-tenancy, allowing you to securely share devices and dashboards with different customers while keeping their data isolated.
Each customer user must be able to see only the devices and dashboards assigned to their customer and must not have access to devices, dashboards, or any other data belonging to another customer.

In this step, you will:
- create a Customer and a Customer User
- assign a device and dashboard to the Customer
- verify that the Customer User can access only the assigned data

This demonstrates how ThingsBoard ensures secure data isolation between customers.

<hr>

### Step 5.1 Create a Customer and a Customer User

A [Customer](/docs/{{docsPrefix}}user-guide/ui/customers/){:target="_blank"} in ThingsBoard is a logical container used to isolate data and provide controlled access for external users under a Tenant. It typically represents a department, business unit, or subdivision within the tenant’s organization.

Create a Customer:
1. Navigate to the **Customers**. 
2. Click the **&#43;** (**Add customer**). 
3. Enter **My New Customer** as the title.   
   Optionally, provide an address, phone number, or other additional details. 
4. Click **Add**.

The customer is created and ready for assigned devices, dashboards, and create users.

<hr>

A **Customer User** is a user account associated with a specific Customer. Customer users have **read-only access** and can view only the entities assigned to their Customer.

Create a Customer User:
1. In the **Customers** list, click **Manage customer users** for the newly created customer. 
2. Click **Add user** in the top-right corner. 
3. Enter the user&#39;s email address.   
   Optionally, specify the first name, last name, phone number, preferred UI language, and unit system. 
4. Click **Add**.
5. **Copy the activation link** and store it in a secure place—you will use it later to sign in to ThingsBoard. 
6. Click **OK** to finish.

A customer user account is created and ready for activation.

<hr>

### Step 5.2 Assign the Device to the Customer

To allow Customer Users to view telemetry and interact with the device, assign the device to the Customer.
1. In the **Customers** list, click **Manage customer devices** for **My New Customer**. 
2. Click the **Assign new device** in the top right corner of the table. 
3. Click **Assign new device**. 
4. Select **Thermometer** and click **Assign**.

The device is now assigned to the customer.

<hr>

### Step 5.3 Assign the Dashboard to the Customer

Share the dashboard with the customer so they can visualize device data. Customer users will have read-only access and will not be able to add, modify, or remove widgets.
1. In the **Customers** list, click **Manage customer dashboards** for **My New Customer**.
2. Click the **Assign new dashboard** in the top right corner of the table. 
3. Select **My Dashboard** and click **Assign**.

Customer Users now have **read-only access** to the dashboard.

> **Optionally**:
You can configure a dashboard to be displayed immediately after the user logs in to the ThingsBoard web UI.   
- In the **Customers** list, click **Manage customer users** for **My New Customer**.
- Click the created user to open its details.
- Click the orange **pencil** icon to enter edit mode.
- Set **My Dashboard** as the **default dashboard**.
- Enable **Always fullscreen**.
- Apply changes.

<hr>

### Step 5.4 Activate the Customer User

Activate the Customer User account and sign in to ThingsBoard.
1. Paste the previously copied **activation link** in a new browser tab and press **Enter**.
2. Create a password by entering it twice, then click **Create Password**. 

You are now logged in to ThingsBoard as a **Customer User**. 

With this role, the user can:
- view assigned devices and their telemetry data on dashboards
- monitor alarms related to assigned devices
- acknowledge and clear alarms

<hr>

## Next steps

Use the knowledge gained in this guide as a foundation for expanding your IoT solution—add more devices, improve dashboards, automate workflows, and integrate with external systems.

Continue with the following guides to explore advanced features and production-ready configurations. 

<br><b><font size="4">Learn how to</font></b>
- [connect devices based on your technology stack or connectivity solution](/docs/guides/#AnchorIDConnectYourDevice){:target="_blank"}
- [process and react to incoming data, including validating and filtering telemetry, calculating deltas, transforming values, and triggering actions such as alarms, notifications, or messages](/docs/guides#AnchorIDDataProcessing){:target="_blank"}
- [manage devices programmatically using APIs](/docs/api/){:target="_blank"}
- [perform bulk provisioning by importing multiple devices from a CSV file via the UI](/docs/user-guide/bulk-provisioning/){:target="_blank"}
- [configure devices for automatic self-registration](/docs/user-guide/device-provisioning/){:target="_blank"}
- [compute new values from incoming data using Calculated fields](/docs/user-guide/calculated-fields/){:target="_blank"}
- [explore advanced ThingsBoard features](/docs/guides/#AnchorIDAdvancedFeatures){:target="_blank"}.

<br><b><font size="4">Prefer watching videos?</font></b>

Explore step-by-step [video tutorials](/docs/guides/#AnchorIDDataVisualization){:target="_blank"} that demonstrate how to design advanced ThingsBoard dashboards.

<hr> 

## Your feedback

Don&#39;t hesitate to star ThingsBoard on [github](https://github.com/thingsboard/thingsboard){:target="_blank"} to help us spread the word. 
If you have any questions about this sample, please [contact us](/docs/contact-us/){:target="_blank"}.