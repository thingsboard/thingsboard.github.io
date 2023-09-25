<table>
  <thead>
      <tr>
          <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>spring.freemarker.checkTemplateLocation</td>
          <td></td>
          <td>false</td>
          <td>Spring freemarker configuration</td>
      </tr>
      <tr>
          <td>spring.mvc.async.request-timeout</td>
          <td>SPRING_MVC_ASYNC_REQUEST_TIMEOUT</td>
          <td>30000</td>
          <td>The default timeout for asynchronous requests in milliseconds</td>
      </tr>
      <tr>
          <td>spring.resources.chain.compressed</td>
          <td></td>
          <td>true</td>
          <td>This property enables or disables support for serving pre-compressed resources (for example, a .gzip or .br file)</td>
      </tr>
      <tr>
          <td>spring.resources.chain.strategy.content.enabled</td>
          <td></td>
          <td>true</td>
          <td>This property enables or disables the content Version Strategy. This strategy allows Spring to generate a unique version for static resources, which is based on the content of the resource</td>
      </tr>
      <tr>
          <td>spring.servlet.multipart.max-file-size</td>
          <td></td>
          <td>50MB</td>
          <td>Total file size cannot exceed 50MB when configuring file uploads</td>
      </tr>
      <tr>
          <td>spring.servlet.multipart.max-request-size</td>
          <td></td>
          <td>50MB</td>
          <td>Total request size for a multipart/form-data cannot exceed 50MB</td>
      </tr>
      <tr>
          <td>spring.main.allow-circular-references</td>
          <td></td>
          <td>true</td>
          <td>Spring Boot configuration property that controls whether circular dependencies between beans are allowed or not.</td>
      </tr>
  </tbody>
</table>
