**Basic** authentication option uses a **username** and **password** configured on the MQTT broker. 
It’s a good default for most setups - just use strong, unique credentials. For stronger identity and mutual verification, 
consider certificate-based authentication.

{% assign securityBasic = '
    ===
        image: /images/gateway/mqtt-connector/security-basic-basic-subsection-1-ce.png,
    '
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=securityBasic %}