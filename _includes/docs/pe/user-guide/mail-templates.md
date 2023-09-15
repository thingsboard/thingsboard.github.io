{% assign feature = "Mail Settings" %}{% include templates/pe-feature-banner.md %} 

* TOC
{:toc}

## Introduction

ThingsBoard uses mail templates to send email notifications to users when certain events occur.
For example, a message about activating an account or resetting a password.

{% capture difference %}
**NOTE**
<br>
To send messages via Email, a tenant administrator should be configured [outgoing mail server](/docs/user-guide/ui/mail-settings/).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

ThingsBoard provides default system mail message templates with sample content, which can be customized individually from the list.

To do this, following steps:
 - Go to the "**White Labeling**" page -> "**Mail Templates**" tab;

![image](https://img.thingsboard.io/user-guide/white-labeling/mail-templates-1.png)

 - Uncheck "**Use System Mail Templates**" box; 
 - Select **mail template** from the drop-down list, that you want to edit;
 - Edit **mail subject** and **mail body**; 
 - Save changes.

![image](https://img.thingsboard.io/user-guide/white-labeling/mail-templates-2.png)

## Next steps

{% assign currentGuide = "AdvancedFeatures" %}{% include templates/multi-project-guides-banner.md %}