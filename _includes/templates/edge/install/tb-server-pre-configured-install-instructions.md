The most straightforward method to install and connect Edge to the Server is by utilizing the prepared installation instructions provided by the ThingsBoard Server.
For every Edge Entity, the Server has prepared instructions with already populated fields such as the Edge secret key, Edge routing key, Edge RPC host URI, etc.
Please follow the steps below to use these prepared instructions:


{% if docsPrefix == 'pe/edge/' %}

{% assign preparedInstructionsInstall = '
    ===
        image: https://img.thingsboard.io/pe/edge/installation/prepared-instructions-install-item-1-pe.png,
        title: Click an Edge entity row to open it&#39;s details;
    ===
        image: https://img.thingsboard.io/pe/edge/installation/prepared-instructions-install-item-2-pe.png,
        title: Click on the "Install & Connection Instructions" button;
    ===
        image: https://img.thingsboard.io/pe/edge/installation/prepared-instructions-install-item-3-pe.png,
        title: Follow instructions to install Edge and connect to the server.
'%}

{% else %}

{% assign preparedInstructionsInstall = '
    ===
        image: https://img.thingsboard.io/edge/installation/prepared-instructions-install-item-1-ce.png,
        title: Click an Edge entity row to open it&#39;s details;
    ===
        image: https://img.thingsboard.io/edge/installation/prepared-instructions-install-item-2-ce.png,
        title: Click on the "Install & Connection Instructions" button;
    ===
        image: https://img.thingsboard.io/edge/installation/prepared-instructions-install-item-3-ce.png,
        title: Follow instructions to install Edge and connect to the server.
'%}

{% endif %}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=preparedInstructionsInstall %}