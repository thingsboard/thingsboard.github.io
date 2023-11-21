ThingsBoard uses [JWT](https://jwt.io/) tokens for representing claims securely between the API client (browser, scripts, etc.) and the platform. When you log in to the platform, your username and password are exchanged for a pair of tokens.

The main token is the short-lived token you should use to perform the API calls. The refresh token is used to get a new main token once it is expired.

To customize JWT, log in to ThingsBoard as a System Administrator.

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/ui/jwt/jwt-provider-settings-step-1-ce.png)
{% endif %}
{% if docsPrefix == "pe/" %}
![image](https://img.thingsboard.io/user-guide/ui/jwt/jwt-provider-settings-step-1-pe.png)
{% endif %}

You can customize the following JWT options:

**Issuer name** - this field is required and added to the token’s default “iss” claim value. This field is included in generated tokens and validated in a decoded token.

**Signing key** - this field value is used to sign the content of generated tokens. For HMAC signing, this should be a random string encoded Base64 format with at least 256 bits of data as is required by the signing protocol.

**Token expiration time** - value in seconds specifies how long access tokens are valid. This value is added to the current UTC during token generation to obtain the token’s default “exp” claim value. The default value is 9000 seconds. The minimal value is 60 seconds.

**Refresh token expiration time** - value in seconds specifies how long refresh tokens are valid. This value is added to the current UTC during token generation to obtain the token’s default “exp” claim value. The default value is 604800 seconds. The minimal value is 900 seconds.