**Certificate-based authentication** uses TLS so the gateway and broker verify each other.
Set the **Path to CA certificate file** to your CA certificate (to trust the broker), **Path to client certificate file** 
to the gateway’s client certificate, and **Path to private key file** to its private key (so the broker can authenticate the gateway). 
Use the broker’s TLS port (typically 8883) for encrypted, production-grade security.

{% assign securityBasic = '
    ===
        image: /images/gateway/mqtt-connector/security-basic-certificates-subsection-1-ce.png,
    '
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=securityBasic %}