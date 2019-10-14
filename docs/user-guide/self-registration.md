---
layout: docwithnav
title: Self-registration
description:  

---

{% assign feature = "Self-registration" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}

ThingsBoard self registration feature allows tenant to configure sign up page for its customers to be able to simply sign up and login the ThingsBoard with predefined permission configurations.
This feature was introduced in ThingsBoard PE 2.4.1. 

This documentation page contains complete use-case configuration example. 

## Use Case description

As a Tenant Administrator, I would like to allow users to register their own account on my IoT Platform instance. 
Once they register, I would like to allow them to see specific dashboards 
and provisioning their own devices or claim existing devices. 
Today we will demonstrate how to achieve this with ThingsBoard. 
Let’s start with the pre-requisites.

## Prerequisites

### Step 1. Install ThingsBoard in the cloud. 

We will need a running ThingsBoard PE instance with white-labeling feature enabled. 
You can easily deploy your own ThingsBoard PE instance using the [installation instructions](/docs/user-guide/install/pe/installation-options/). 
Note that your instance should run in the cloud, and have public IP address assigned to it.

### Step 2. Assign DNS record to your ThingsBoard IP address.

We also need a valid **DNS name** to be assigned to your ThingsBoard instance.
You can use any domain registrar if you don't have domain yet.
If you do have the domain name, contact your system administrator to issue sub-domain, for example iot.mycompany.com. 

### Step 3. Setup HTTPS access to your ThingsBoard instance

Please note the HAProxy installation instructions in the [post install steps](/docs/user-guide/install/pe/ubuntu/#post-installation-steps). 
They are available for Linux distributions and Docker. You can easily issue a valid Let's Encrypt certificate and setup HTTPS for your ThingsBoard instace.

### Step 4. ReCAPTCHA v2

We need to protect our sign-up form from Robots. 
Let’s generate the ReCAPTCHA. Please navigate to google recaptcha 
Navigate to the Google ReCaptcha [admin console](https://www.google.com/recaptcha/intro/v3.html) and use your new domain name here.
Please note that we must use ReCAPTCHA v2. See example configuration below.

![image](/images/user-guide/self-registration/reCAPTCHA.png)

Copy-paste the site key and secret to the safe place.

### Prerequisites summary

So, I have prepared a ThingsBoard Prototype instance running on DigitalOcean. 
I have also assigned a specific domain name: srd.thingsboard.io (srd stands for “self registration demo”) to my server’s IP address: 46.101.146.242.

![image](/images/user-guide/self-registration/digitalocean.png)

## ThingsBoard configuration

### Step 5. Mail Server settings

Now, let’s login to our instance as a tenant administrator. I am going to navigate to the Whitelabeling->Mail server.
Configure ThingsBoard using your SMTP server settings. If you don't have one, the easiest way is to use [SendGrid](https://sendgrid.com/).
See more info in mail settings [guide](/docs/user-guide/ui/mail-settings/).

Don't forget to validate the mail server settings using "Send Test Mail" button.

![image](/images/user-guide/self-registration/mailserver.png)

### Step 6. Create new User Roles.

Create the “Customer Administrator” Role. Navigate to "Roles" and click on "+" button.
This role is auto-generated when you create first Customer entity in scope of your Tenant. 
If you don’t have this Role yet, you can easily add it. 
The Role type is “Generic” and it allows “All” operations for “All” entities.

![image](/images/user-guide/self-registration/customer-admin-role.png)

So, when you apply this role to your customer user, Customer User can control every entity in scope of the Customer. 
Of course, you may create different role. For example, we may create a Role that is read-only.

Let’s create a “Read-Only” Group Role. We will use this Role to allow read-only access to the specific dashboard. 
This Dashboard will be the same for all our Self-Registered Customers.

![image](/images/user-guide/self-registration/read-only-role.png)

### Step 6. Create shared dashboard.

Now, let’s navigate to the Dashboard Groups and create a new Group called “Shared Dashboards”.
let's upload a [simple dashboard](/docs/user-guide/resources/my_smart_devices_dashboard.json) that shows us a list of devices. 
This dashboard provides the ability to add/edit/remove devices. 
Note that we use new widget from Entity Admin Widgets Bundle.

Few things to notice here. 

![image](/images/user-guide/self-registration/dashboard.gif)

Let’s see what happens when I want to add device. 
I see the UI form. 
This and other forms are configured in the widget configuration. 
Let’s open an Edit mode, Click on Edit widget and navigate to “Actions”.
Here you can see three custom actions. 
Delete action is simple, but Add and Edit Device actions use new feature called “HTML Templates”. 
Now you can completely control the UI and logic of your dialogs. 
Let’s open an “Add” action and expand it to full screen.

![image](/images/user-guide/self-registration/dashboard-config.png)
 
You can see custom Resources, CSS, HTML and JS tabs. 
This is the exact place where Add/Edit dialogs are configured.
See more on the custom actions and forms in a separate video tutorial.

![image](/images/user-guide/self-registration/action-config.png)

### Step 7. Signup Form to open Dashboard on Full Screen.

Finally, we can provision our Signup Form. 
Use your domain and ReCAPTCHA credentials from notepad.  

Add two User Group Roles. 
One is for Customer Administrator. It is important that our new User will be able to create and edit any entities within this Customer.
Second is the Read-Only access to the shared dashboard that we have just created. Now I will also select this dashboard as default and mark “Always Full Screen”.

Let’s also change the text message and privacy policy.

![image](/images/user-guide/self-registration/signup-form-config.png)

Congratulations! We have completed our self-registration form setup. Click save now and finally we can navigate to signup form. 
Now we can create a new user and see that he is completely isolated and controls his own devices.

See signup form example below:

![image](/images/user-guide/self-registration/signup-form.png)


## Next steps

{% assign currentGuide = "AdvancedFeatures" %}{% include templates/guides-banner.md %}
