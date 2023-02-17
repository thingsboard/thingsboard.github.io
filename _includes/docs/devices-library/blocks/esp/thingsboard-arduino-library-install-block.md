To install ThingsBoard Arduino SDK - we will need to do the following steps:  

{% assign libraryInstallation = '
    ===
        image: /images/devices-library/basic/arduino-ide/tools-manage-libraries.png
        title: Go to "Tools" tab and click on "Manage libraries".
    ===
        image: /images/devices-library/basic/arduino-ide/manage-libraries-thingsboard.png
        title: Put "ThingsBoard" into the search box and press "INSTALL" button for the found library.
' 
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=libraryInstallation %}    

{% if mbedtlsInstallationRequired == "true" %}

Also, for boards, based on ESP8266 chip we should install the "mbedtls" library.  

{% assign mbedtlsInstallation='
    ===
        image: /images/devices-library/basic/arduino-ide/install-mbedtls.png,
        title: Put into library search field "mbetls" and install the library - "Seeed_Arduino_mbedtls by Peter Yang"
'%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=mbedtlsInstallation %}

{% endif %}

At this point, we have installed all required libraries and tools.  