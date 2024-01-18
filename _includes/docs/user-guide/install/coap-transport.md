<table>
    <thead>
      <tr>
          <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
      </tr>
    </thead>
    <tbody>
    <tr>
        <td>transport.coap.bind_address</td>
        <td>COAP_BIND_ADDRESS</td>
        <td>0.0.0.0</td>
        <td>CoAP bind address</td>
    </tr>
    <tr>
        <td>transport.coap.bind_port</td>
        <td>COAP_BIND_PORT</td>
        <td>5683</td>
        <td>CoAP bind port</td>
    </tr>
    <tr>
        <td>transport.coap.timeout</td>
        <td>COAP_TIMEOUT</td>
        <td>10000</td>
        <td>CoaP processing timeout in milliseconds</td>
    </tr>
    <tr>
        <td>transport.coap.psm_activity_timer</td>
        <td>COAP_PSM_ACTIVITY_TIMER</td>
        <td>10000</td>
        <td>Default PSM Activity Timer if not specified in device profile.</td>
    </tr>
    <tr>
        <td>transport.coap.paging_transmission_window</td>
        <td>COAP_PAGING_TRANSMISSION_WINDOW</td>
        <td>10000</td>
        <td>Default Paging Transmission Window for eDRX support if not specified in the device profile.</td>
    </tr>
    <tr>
        <td>transport.coap.dtls.enabled</td>
        <td>COAP_DTLS_ENABLED</td>
        <td>false</td>
        <td>Enable/disable DTLS 1.2 support</td>
    </tr>
    <tr>
        <td>transport.coap.dtls.bind_address</td>
        <td>COAP_DTLS_BIND_ADDRESS</td>
        <td>0.0.0.0</td>
        <td>CoAP DTLS bind address</td>
    </tr>
    <tr>
        <td>transport.coap.dtls.bind_port</td>
        <td>COAP_DTLS_BIND_PORT</td>
        <td>5684</td>
        <td>CoAP DTLS bind port</td>
    </tr>
    <tr>
        <td>transport.coap.dtls.credentials.type</td>
        <td>COAP_DTLS_CREDENTIALS_TYPE</td>
        <td>PEM</td>
        <td>Server credentials type (PEM - pem certificate file; KEYSTORE - java keystore)</td>
    </tr>
    <tr>
        <td>transport.coap.dtls.credentials.pem.cert_file</td>
        <td>COAP_DTLS_PEM_CERT</td>
        <td>coapserver.pem</td>
        <td>Path to the server certificate file (holds server certificate or certificate chain, may include server
            private key)
        </td>
    </tr>
    <tr>
        <td>transport.coap.dtls.credentials.pem.key_file</td>
        <td>COAP_DTLS_PEM_KEY</td>
        <td>coapserver_key.pem</td>
        <td>Path to the server certificate private key file (optional)</td>
    </tr>
    <tr>
        <td>transport.coap.dtls.credentials.pem.key_password</td>
        <td>COAP_DTLS_PEM_KEY_PASSWORD</td>
        <td>server_key_password</td>
        <td>Server certificate private key password (optional)</td>
    </tr>
    <tr>
        <td>transport.coap.dtls.credentials.keystore.type</td>
        <td>COAP_DTLS_KEY_STORE_TYPE</td>
        <td>JKS</td>
        <td>Type of the key store</td>
    </tr>
    <tr>
        <td>transport.coap.dtls.credentials.keystore.store_file</td>
        <td>COAP_DTLS_KEY_STORE</td>
        <td>coapserver.jks</td>
        <td>Path to the key store that holds the SSL certificate</td>
    </tr>
    <tr>
        <td>transport.coap.dtls.credentials.keystore.store_password</td>
        <td>COAP_DTLS_KEY_STORE_PASSWORD</td>
        <td>server_ks_password</td>
        <td>Password used to access the key store</td>
    </tr>
    <tr>
        <td>transport.coap.dtls.credentials.keystore.key_alias</td>
        <td>COAP_DTLS_KEY_ALIAS</td>
        <td>serveralias</td>
        <td>Key alias</td>
    </tr>
    <tr>
        <td>transport.coap.dtls.credentials.keystore.key_password</td>
        <td>COAP_DTLS_KEY_PASSWORD</td>
        <td>server_key_password</td>
        <td>Password used to access the key</td>
    </tr>
    <tr>
        <td>transport.coap.dtls.x509.skip_validity_check_for_client_cert</td>
        <td>TB_COAP_X509_DTLS_SKIP_VALIDITY_CHECK_FOR_CLIENT_CERT</td>
        <td>false</td>
        <td>Skip check of client certificate validity.</td>
    </tr>
    <tr>
        <td>transport.coap.dtls.x509.dtls_session_inactivity_timeout</td>
        <td>TB_COAP_X509_DTLS_SESSION_INACTIVITY_TIMEOUT</td>
        <td>86400000</td>
        <td>Inactivity timeout of DTLS session. Used to cleanup cache.</td>
    </tr>
    <tr>
        <td>transport.coap.dtls.x509.dtls_session_report_timeout</td>
        <td>TB_COAP_X509_DTLS_SESSION_REPORT_TIMEOUT</td>
        <td>1800000</td>
        <td>Interval of periodic eviction of the timed-out DTLS sessions.</td>
    </tr>
    </tbody>
</table>