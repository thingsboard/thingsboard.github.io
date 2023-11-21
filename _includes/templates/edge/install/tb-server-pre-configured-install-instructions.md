The most straightforward method to install and connect Edge to the Server is by utilizing the prepared installation instructions provided by the ThingsBoard Server.
For every Edge Entity, the Server has prepared instructions with already populated fields such as the Edge secret key, Edge routing key, Edge RPC host URI, etc.
Please follow the steps below to use these prepared instructions:


{% if docsPrefix == 'pe/edge/' %}

{% assign preparedInstructionsInstall = '
    ===
        image: /images/pe/edge/installation/prepared-instructions-install-item-1.png,
        title: Open the Edge Entity Details Page by Clicking on the Edge Row;
    ===
        image: /images/pe/edge/installation/prepared-instructions-install-item-2.png,
        title: Click on Install & Connection instructions;
    ===
        image: /images/pe/edge/installation/prepared-instructions-install-item-3.png,
        title: Follow instructions to install Edge and connect to Server.
'%}

{% else %}

{% assign preparedInstructionsInstall = '
    ===
        image: /images/edge/installation/prepared-instructions-install-item-1.png,
        title: Open the Edge Entity Details Page by Clicking on the Edge Row;
    ===
        image: /images/edge/installation/prepared-instructions-install-item-2.png,
        title: Click on Install & Connection instructions;
    ===
        image: /images/edge/installation/prepared-instructions-install-item-3.png,
        title: Follow instructions to install Edge and connect to Server.
'%}

{% endif %}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=preparedInstructionsInstall %}