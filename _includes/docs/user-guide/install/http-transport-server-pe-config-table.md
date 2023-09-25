<table>
  <thead>
      <tr>
          <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>server.address</td>
          <td>HTTP_BIND_ADDRESS</td>
          <td>0.0.0.0</td>
          <td>Server bind address</td>
      </tr>
      <tr>
          <td>server.port</td>
          <td>HTTP_BIND_PORT</td>
          <td>8081</td>
          <td>Server bind port</td>
      </tr>
      <tr>
          <td>server.ssl.enabled</td>
          <td>SSL_ENABLED</td>
          <td>false</td>
          <td>Enable/disable SSL support</td>
      </tr>
      <tr>
          <td>server.ssl.credentials.type</td>
          <td>SSL_CREDENTIALS_TYPE</td>
          <td>PEM</td>
          <td>Server credentials type (PEM - pem certificate file; KEYSTORE - java keystore)</td>
      </tr>
      <tr>
          <td>server.ssl.credentials.pem.cert_file</td>
          <td>SSL_PEM_CERT</td>
          <td>server.pem</td>
          <td>Path to the server certificate file (holds server certificate or certificate chain, may include server private key)</td>
      </tr>
      <tr>
          <td>server.ssl.credentials.pem.key_file</td>
          <td>SSL_PEM_KEY</td>
          <td>server_key.pem</td>
          <td>Path to the server certificate private key file. Optional by default. Required if the private key is not present in server certificate file;</td>
      </tr>
      <tr>
          <td>server.ssl.credentials.pem.key_password</td>
          <td>SSL_PEM_KEY_PASSWORD</td>
          <td>server_key_password</td>
          <td>Server certificate private key password (optional)</td>
      </tr>
      <tr>
          <td>server.ssl.credentials.keystore.type</td>
          <td>SSL_KEY_STORE_TYPE</td>
          <td>PKCS12</td>
          <td>Type of the key store (JKS or PKCS12)</td>
      </tr>
      <tr>
          <td>server.ssl.credentials.keystore.store_file</td>
          <td>SSL_KEY_STORE</td>
          <td>classpath:keystore/keystore.p12</td>
          <td>Path to the key store that holds the SSL certificate</td>
      </tr>
      <tr>
          <td>server.ssl.credentials.keystore.store_password</td>
          <td>SSL_KEY_STORE_PASSWORD</td>
          <td>thingsboard</td>
          <td>Password used to access the key store</td>
      </tr>
      <tr>
          <td>server.ssl.credentials.keystore.key_alias</td>
          <td>SSL_KEY_ALIAS</td>
          <td>tomcat</td>
          <td>Key alias</td>
      </tr>
      <tr>
          <td>server.ssl.credentials.keystore.key_password</td>
          <td>SSL_KEY_PASSWORD</td>
          <td>thingsboard</td>
          <td>Password used to access the key</td>
      </tr>
      <tr>
          <td>server.http2.enabled</td>
          <td>HTTP2_ENABLED</td>
          <td>true</td>
          <td>Enable/disable HTTP/2 support</td>
      </tr>
  </tbody>
</table>