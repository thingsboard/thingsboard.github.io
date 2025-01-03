The easiest way to install and connect the **Edge** to the Server is to follow the installation instructions provided by the **ThingsBoard Server**.
For every **Edge Entity**,  the Server displays the instructions with **pre-populated field**s such as the Edge secret key, Edge routing key, Edge RPC host URI, and so on

Please follow the steps below to use these prepared instructions:


{% if docsPrefix == 'pe/edge/' %}

{% assign preparedInstructionsInstall = '
    ===
        image: /images/pe/edge/installation/prepared-instructions-install-item-1-pe.png,
        title: Click an **Edge entity row** to open its details;
    ===
        image: /images/pe/edge/installation/prepared-instructions-install-item-2-pe.png,
        title: Click on the **"Install & Connect Instructions"** button;
    ===
        image: /images/pe/edge/installation/prepared-instructions-install-item-3-pe.png,
        title: Follow the instructions to install **Edge** and connect to the server.
'%}

{% else %}

{% assign preparedInstructionsInstall = '
    ===
        image: /images/edge/installation/prepared-instructions-install-item-1-ce.png,
        title: Click an **Edge entity row** to open its details;
    ===
        image: /images/edge/installation/prepared-instructions-install-item-2-ce.png,
        title: Click on the **"Install & Connect Instructions"** button;
    ===
        image: /images/edge/installation/prepared-instructions-install-item-3-ce.png,
        title: Follow the instructions to install **Edge** and connect to the server.
'%}

{% endif %}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=preparedInstructionsInstall %}