{% assign feature = "Mail Settings" %}{% include templates/pe-feature-banner.md %} 

* TOC
{:toc}

## Introduction

ThingsBoard uses **mail templates** to send email notifications to users when certain events occur.
For example, a message about activating an account or resetting a password.

{% capture difference %}
**NOTE**
<br>
To send messages via Email, a tenant administrator should be configured [outgoing mail server](/docs/user-guide/ui/mail-settings/).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

By default, ThingsBoard **use system mail templates**. But you can edit each message template from the list.

To do this, go to the "White Labeling" page -> "Mail Templates" tab and uncheck "Use System Mail Templates" box. 

Select mail template from the drop-dawn list and edit mail subject and mail body.

## Next steps

{% assign currentGuide = "AdvancedFeatures" %}{% include templates/multi-project-guides-banner.md %}
