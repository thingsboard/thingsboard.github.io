* TOC 
{:toc}

## Overview

ThingsBoard Notification Center allows you to send notifications to the end-users. 
You may send notifications manually, via REST API, or based on a specific trigger event.
Each notification may be delivered using multiple delivery methods: WebSocket, SMS, email, or [Slack](https://slack.com/). 
You may also schedule delivery of the notification for a specific time. 

Let's review the key components of the notification center below. 

### Inbox

The "Inbox" tab displays unread notifications by default. 
You may use the inbox table to browse the notifications and mark them as read. 
You may also switch the view to browse all notifications.

### Sent 

The "Sent" tab displays the status of sent notifications. 
You may use the "Notify again" button to copy an existing notification and send it again.

Also, you may investigate issues with the delivery of certain notifications here. 
In case of delivery issues, the corresponding notification row will have information about the recipient who missed the update. 
This typically happens when the email address is wrong, or the phone number is not configured.

### Templates

The "Templates" tab displays the list of notification templates. You may create, copy and delete notification templates here. 

The template defines the content of the notification and the set of delivery methods to use.
Each template contains a notification subject and body. Those fields support templatization. See documentation [below](todo). 
The user may adjust the notification content for specific delivery methods. For example, you may use a concise message for SMS and an advanced HTML template for the Email.

### Recipients

The "Recipients" tab displays the list of notification recipients. You may create and delete notification recipients here.

There are two types of recipients: platform users and Slack entities. Recipients group defines either a set of platform users or set of Slack entities.

##### Platform users

There are several user filters that help you to define a recipient group. The scope of the filter depends on the role of the user that creates the recipient group.

For System Administrator:

**All users** - all users of the platform. Includes all tenant administrators and all customer users;

TODO: image

**Tenant administrators** - set of tenant administrator users that are selected based on the list of tenants or their tenant profiles.

TODO: image

For Tenant Administrator:

**All users** - all users of the current tenant. Includes the tenant administrator and all customer users;

TODO: image

**Tenant administrators** - all administrators of the current tenant;

TODO: image

**Customer users** - all administrators of the current tenant;


