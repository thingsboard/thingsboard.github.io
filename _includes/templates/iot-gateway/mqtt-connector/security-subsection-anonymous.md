**Anonymous** is the simplest option: no credentials are required to publish/subscribe on the MQTT broker. 
It can be useful for testing <br/> (e.g., public test brokers), 
but not recommended for production because it allows unattended access.. 

{% assign securityBasic = '
    ===
        image: /images/gateway/mqtt-connector/security-basic-anonymous-subsection-1-ce.png,
    '
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=securityBasic %}