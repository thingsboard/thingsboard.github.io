* TOC
{:toc}

By integrating Slack with Thingsboard, users will be able to receive notifications in Slack of events occurring in the Thingsboard system according to the notification rules you set. For example, to notify about device status or detected issues.

{% capture difference %}
**Note:**
<br>
You can send Slack notifications to users from your workspace only
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Tenant administrator is able to setup to distribute alarms produced by [**rule engine**](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/re-getting-started/).

### Create an application in Slack. Get Slack API token

To configure Slack settings in Thingsboard, first register an application in Slack API. To do this, open [get Slack API token](https://api.slack.com/tutorials/tracks/getting-a-token) page. Next, follow these steps:

{% include images-gallery.html imageCollection="slackProviderSettings" showListImageTitles="true" %}

### Slack settings configuration as System administrator

{% include images-gallery.html imageCollection="thingsboardSystemAdminSettings" showListImageTitles="true" %}

### Slack settings configuration as Tenant administrator

{% include images-gallery.html imageCollection="thingsboardTenantAdminSettings" showListImageTitles="true" %}

<br/>
Once you have configured your notifications, you will start receiving notifications in your Slack channel whenever an event is triggered in your Thingsboard instance according to the notification rules you set. You will also be able to send messages to any of your users.