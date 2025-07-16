OPC-UA server connections offer three distinct security types:

{% assign securityBasic = '
    ===
        image: /images/gateway/opc-ua-connector/opc-ua-application-basic-anonymous-1-ce.png,
        title: **Anonymous** - the simplest option of identity;
    ===
        image: /images/gateway/opc-ua-connector/opc-ua-application-basic-basic-1-ce.png,
        title: **Basic** - using this option, you can provide the username and password to connect to the OPC-UA server;
    ===
        image: /images/gateway/opc-ua-connector/opc-ua-application-basic-certificates-2-ce.png,
        title: **Certificates** - the safest option of identity. Using this option, you can also provide path on machine with the gateway to certificate, private key and CA certificate. Optionally, you can provide the username/password pair.
    '
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=securityBasic %}
