* TOC
{:toc}

To integrate [Microsoft Teams](https://www.microsoft.com/en-us/microsoft-teams/group-chat-software/){:target="_blank"} with the ThingsBoard platform, you first need to configure workflows for channels that you are going to use with ThingsBoard.

To do this, follow these steps:

{% assign microsoftTeamsSettings = '
    ===
        image: https://img.thingsboard.io/user-guide/ui/microsoft-teams/microsoft-teams-settings-1.png,
        title: Sign in to Microsoft Teams and navigate to the "Teams" tab, then left-click on your channel name. In the drop-down menu click on the "Workflows" item;
    ===
        image: https://img.thingsboard.io/user-guide/ui/microsoft-teams/microsoft-teams-settings-2.png,
        title: Find "Post to a channel when a webhook request is received" workflow and click on it;
    ===
        image: https://img.thingsboard.io/user-guide/ui/microsoft-teams/microsoft-teams-settings-3.png,
        title: Give a name to the workflow and click the "Next" button;
    ===
        image: https://img.thingsboard.io/user-guide/ui/microsoft-teams/microsoft-teams-settings-4.png,
        title: In the "Details" choose the team and the channel and click the "Add workflow" button;
    ===
        image: https://img.thingsboard.io/user-guide/ui/microsoft-teams/microsoft-teams-settings-5.png,
        title: Workflow added successfully. Now, copy the workflow URL which will be used in the configuration for notifications. Finally, click the "Done" button.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=microsoftTeamsSettings %}

<br>
Now you are ready to use Microsoft Teams via [Notification Center](/docs/{{docsPrefix}}user-guide/notifications/#microsoft-teams).
