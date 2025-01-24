
Once the **Edge** instance has been created, the installation instructions will be available for use. 
Each **Edge** has preset configurations that contain important credentials, such as **Edge Secret**, **Edge Key**, etc.  To access these configurations:

{% if docsPrefix == 'pe/edge/' %}

{% assign preparedInstructionsInstall = '
    ===
        image: /images/pe/edge/installation/prepared-instructions-install-item-1-pe.png,
        title: Click on the **Edge** entity to open its details.
    ===
        image: /images/pe/edge/installation/prepared-instructions-install-item-2-pe.png,
        title: Click the **"Install & Connection Instructions"** button.
    ===
        image: /images/pe/edge/installation/prepared-instructions-install-item-3-pe.png,
        title: Follow the instructions to install **Edge** and connect it to the server.
'%}

{% else %}

{% assign preparedInstructionsInstall = '
    ===
        image: /images/edge/installation/prepared-instructions-install-item-1-ce.png,
        title: Click on the **Edge** entity to open its details.
    ===
        image: /images/edge/installation/prepared-instructions-install-item-2-ce.png,
        title: Click the **"Install & Connection Instructions"** button.
    ===
        image: /images/edge/installation/prepared-instructions-install-item-3-ce.png,
        title: Follow the instructions to install **Edge** and connect it to the server.
'%}

{% endif %}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=preparedInstructionsInstall %}