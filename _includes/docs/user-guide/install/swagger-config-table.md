<table>
  <thead>
      <tr>
          <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>swagger.enabled</td>
          <td>SWAGGER_ENABLED</td>
          <td>true</td>
          <td>If false swagger api docs will be unavailable</td>
      </tr>
      <tr>
          <td>swagger.api_path_regex</td>
          <td>SWAGGER_API_PATH_REGEX</td>
          <td>/api/.*</td>
          <td>General swagger match pattern of swaggerUI links</td>
      </tr>
      <tr>
          <td>swagger.security_path_regex</td>
          <td>SWAGGER_SECURITY_PATH_REGEX</td>
          <td>/api/.*</td>
          <td>General swagger match pattern path of swaggerUI links</td>
      </tr>
      <tr>
          <td>swagger.non_security_path_regex</td>
          <td>SWAGGER_NON_SECURITY_PATH_REGEX</td>
          <td>/api/(?:noauth|v1)/.*</td>
          <td>Non security API path match pattern of swaggerUI links</td>
      </tr>
      <tr>
          <td>swagger.title</td>
          <td>SWAGGER_TITLE</td>
          <td>ThingsBoard REST API</td>
          <td>The title on the API doc UI page</td>
      </tr>
      <tr>
          <td>swagger.description</td>
          <td>SWAGGER_DESCRIPTION</td>
          <td>ThingsBoard Professional Edition IoT platform REST API documentation.</td>
          <td>The description on the API doc UI page</td>
      </tr>
      <tr>
          <td>swagger.contact.name</td>
          <td>SWAGGER_CONTACT_NAME</td>
          <td>ThingsBoard, Inc.</td>
          <td>The contact name on the API doc UI page</td>
      </tr>
      <tr>
          <td>swagger.contact.url</td>
          <td>SWAGGER_CONTACT_URL</td>
          <td>https://thingsboard.io</td>
          <td>The contact URL on the API doc UI page</td>
      </tr>
      <tr>
          <td>swagger.contact.email</td>
          <td>SWAGGER_CONTACT_EMAIL</td>
          <td>info@thingsboard.io</td>
          <td>The contact email on the API doc UI page</td>
      </tr>
      <tr>
          <td>swagger.license.title</td>
          <td>SWAGGER_LICENSE_TITLE</td>
          <td>Apache License Version 2.0</td>
          <td>The license title on the API doc UI page</td>
      </tr>
      <tr>
          <td>swagger.license.url</td>
          <td>SWAGGER_LICENSE_URL</td>
          <td>https://github.com/thingsboard/thingsboard/blob/master/LICENSE</td>
          <td>Link to the license body on the API doc UI page</td>
      </tr>
      <tr>
          <td>swagger.version</td>
          <td>SWAGGER_VERSION</td>
          <td></td>
          <td>The version of the API doc to display. Default to the package version.</td>
      </tr>
  </tbody>
</table>
