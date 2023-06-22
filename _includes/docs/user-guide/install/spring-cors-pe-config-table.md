<table>
  <thead>
      <tr>
          <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>spring.mvc.cors.mappings.[/api/**].allowed-origin-patterns</td>
          <td></td>
          <td>*</td>
          <td>Comma-separated list of origins to allow. '*' allows all origins. When not set,CORS support is disabled.</td>
      </tr>
      <tr>
          <td>spring.mvc.cors.mappings.[/api/**].allowed-methods</td>
          <td></td>
          <td>*</td>
          <td>Comma-separated list of methods to allow. '*' allows all methods.</td>
      </tr>
      <tr>
          <td>spring.mvc.cors.mappings.[/api/**].allowed-headers</td>
          <td></td>
          <td>*</td>
          <td>Comma-separated list of headers to allow in a request. '*' allows all headers.</td>
      </tr>
      <tr>
          <td>spring.mvc.cors.mappings.[/api/**].max-age</td>
          <td></td>
          <td>1800</td>
          <td>How long, in seconds, the response from a pre-flight request can be cached by clients.</td>
      </tr>
      <tr>
          <td>spring.mvc.cors.mappings.[/api/**].allow-credentials</td>
          <td></td>
          <td>true</td>
          <td>Set whether credentials are supported. When not set, credentials are not supported.</td>
      </tr>
      <tr>
          <td>spring.mvc.pathmatch.matching-strategy</td>
          <td></td>
          <td>ANT_PATH_MATCHER</td>
          <td>For endpoints matching in Swagger</td>
      </tr>
  </tbody>
</table>
