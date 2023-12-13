To install ThingsBoard Arduino SDK - we will need to do the following steps:  

{% assign libraryInstallation = '
    ===
        image: /images/devices-library/basic/arduino-ide/tools-manage-libraries.png
        title: Go to "**Tools**" tab and click on "**Manage libraries**".
    ===
        image: /images/devices-library/basic/arduino-ide/manage-libraries-thingsboard.png
        title: Put "**ThingsBoard**" into the search box and press "***INSTALL***" button for the found library.
' 
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=libraryInstallation %}    

{% capture libraryVersion %}

All provided code examples require ThingsBoard Library version {% if wifininaInstallationRequired == "true" %}**0.10.2**{% else %}**0.11.1** or above{% endif %}.  

{% endcapture %}

{% include templates/warn-banner.md content=libraryVersion %}

{% if mbedtlsInstallationRequired == "true" %}

Also, for boards, based on ESP8266 chip we should install the "mbedtls" library.  

{% assign mbedtlsInstallation='
    ===
        image: /images/devices-library/basic/arduino-ide/install-mbedtls.png,
        title: Put into library search field "**mbedtls**" and install the library - "***Seeed_Arduino_mbedtls by Peter Yang***"
'%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=mbedtlsInstallation %}

{% endif %}

{% if OLEDInstallationRequired == "true" %}

Also, to control display we should install the Adafruit SSD1306 library.  

{% assign oledInstallation='
    ===
        image: /images/devices-library/basic/arduino-ide/install-adafruit-ssd1306.png,
        title: Put into library search field "**Adafruit SSD1306**" and install the library - "**Adafruit SSD1306 by Adafruit**"
'%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=oledInstallation %}

{% endif %}

{% if wifininaInstallationRequired == "true" %}

Also, for boards, based on RP2040 chip we should install the "WiFiNINA" library.  

{% assign wifininaInstallation='
    ===
        image: /images/devices-library/basic/arduino-ide/install-wifinina.png,
        title: Put into library search field "**WiFiNINA**" and install the library - "**WiFiNINA by Arduino**"
'%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=wifininaInstallation %}

{% endif %}

At this point, we have installed all required libraries and tools.  