<table>
  <thead>
      <tr>
          <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>security.jwt.tokenExpirationTime</td>
          <td>JWT_TOKEN_EXPIRATION_TIME</td>
          <td>9000</td>
          <td>Number of seconds (2.5 hours)</td>
      </tr>
      <tr>
          <td>security.jwt.refreshTokenExpTime</td>
          <td>JWT_REFRESH_TOKEN_EXPIRATION_TIME</td>
          <td>604800</td>
          <td>Number of seconds (1 week).</td>
      </tr>
      <tr>
          <td>security.jwt.tokenIssuer</td>
          <td>JWT_TOKEN_ISSUER</td>
          <td>thingsboard.io</td>
          <td>User JWT Token issuer</td>
      </tr>
      <tr>
          <td>security.jwt.tokenSigningKey</td>
          <td>JWT_TOKEN_SIGNING_KEY</td>
          <td>thingsboardDefaultSigningKey</td>
          <td>Base64 encoded</td>
      </tr>
      <tr>
          <td>security.user_token_access_enabled</td>
          <td>SECURITY_USER_TOKEN_ACCESS_ENABLED</td>
          <td>true</td>
          <td>Enable/disable access to Tenant Administrators JWT token by System Administrator or Customer Users JWT token by Tenant Administrator</td>
      </tr>
      <tr>
          <td>security.user_login_case_sensitive</td>
          <td>SECURITY_USER_LOGIN_CASE_SENSITIVE</td>
          <td>true</td>
          <td>Enable/disable case-sensitive username login</td>
      </tr>
      <tr>
          <td>security.claim.allowClaimingByDefault</td>
          <td>SECURITY_CLAIM_ALLOW_CLAIMING_BY_DEFAULT</td>
          <td>true</td>
          <td>Enable/disable claiming devices, if false -> the device's [claimingAllowed] SERVER_SCOPE attribute must be set to [true] to allow claiming specific device</td>
      </tr>
      <tr>
          <td>security.claim.duration</td>
          <td>SECURITY_CLAIM_DURATION</td>
          <td>86400000</td>
          <td>Time allowed to claim the device in milliseconds 1 minute, note this value must equal claimDevices.timeToLiveInMinutes value</td>
      </tr>
      <tr>
          <td>security.basic.enabled</td>
          <td>SECURITY_BASIC_ENABLED</td>
          <td>false</td>
          <td>Enable/Disable basic security options</td>
      </tr>
      <tr>
          <td>security.oauth2.loginProcessingUrl</td>
          <td>SECURITY_OAUTH2_LOGIN_PROCESSING_URL</td>
          <td>/login/oauth2/code/</td>
          <td>Redirect URL where access code from external user management system will be processed</td>
      </tr>
      <tr>
          <td>security.oauth2.githubMapper.emailUrl</td>
          <td>SECURITY_OAUTH2_GITHUB_MAPPER_EMAIL_URL_KEY</td>
          <td>https://api.github.com/user/emails</td>
          <td>The email addresses that will be mapped from the URL.</td>
      </tr>
      <tr>
          <td>security.java_cacerts.path</td>
          <td>SECURITY_JAVA_CACERTS_PATH</td>
          <td>${java.home}/lib/security/cacerts</td>
          <td>CA certificates keystore default path. Typically this keystore is at JAVA_HOME/lib/security/cacerts</td>
      </tr>
      <tr>
          <td>security.java_cacerts.password</td>
          <td>SECURITY_JAVA_CACERTS_PASSWORD</td>
          <td>changeit</td>
          <td>The password of the cacerts keystore file</td>
      </tr>
  </tbody>
</table>
