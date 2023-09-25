<table>
  <thead>
      <tr>
          <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>spring.mvc.async.request-timeout</td>
          <td>SPRING_MVC_ASYNC_REQUEST_TIMEOUT</td>
          <td>30000</td>
          <td>The default timeout for asynchronous requests in milliseconds</td>
      </tr>
      <tr>
          <td>spring.jpa.properties.hibernate.jdbc.lob.non_contextual_creation</td>
          <td></td>
          <td>true</td>
          <td>Fix Postgres JPA Error (Method org.postgresql.jdbc.PgConnection.createClob() is not yet implemented)</td>
      </tr>
      <tr>
          <td>spring.jpa.properties.hibernate.order_by.default_null_ordering</td>
          <td>SPRING_JPA_PROPERTIES_HIBERNATE_ORDER_BY_DEFAULT_NULL_ORDERING</td>
          <td>last</td>
          <td>Note: as for current Spring JPA version, custom NullHandling for the Sort.Order is ignored and this parameter is used</td>
      </tr>
      <tr>
          <td>spring.data.jpa.repositories.enabled</td>
          <td></td>
          <td>true</td>
          <td>Enable/Disable the Spring Data JPA repositories support</td>
      </tr>
      <tr>
          <td>spring.jpa.properties.javax.persistence.query.timeout</td>
          <td>JAVAX_PERSISTENCE_QUERY_TIMEOUT</td>
          <td>30000</td>
          <td>General timeout for JDBC queries</td>
      </tr>
      <tr>
          <td>spring.jpa.open-in-view</td>
          <td></td>
          <td>false</td>
          <td>Enabled by default. Therefore, database queries may be performed during view rendering. Explicitly configure spring.jpa.open-in-view to disable this warning</td>
      </tr>
      <tr>
          <td>spring.jpa.hibernate.ddl-auto</td>
          <td></td>
          <td>none</td>
          <td>You can set a Hibernate feature that controls the DDL behavior in a more fine-grained way. The standard Hibernate property values are none, validate, update, create-drop. Spring Boot chooses a default value for you based on whether it thinks your database is embedded (default create-drop) or not (default none)</td>
      </tr>
      <tr>
          <td>spring.datasource.driverClassName</td>
          <td>SPRING_DRIVER_CLASS_NAME</td>
          <td>org.postgresql.Driver</td>
          <td>Database driver for Spring JPA - org.postgresql.Driver</td>
      </tr>
      <tr>
          <td>spring.datasource.url</td>
          <td>SPRING_DATASOURCE_URL</td>
          <td>jdbc:postgresql://localhost:5432/thingsboard</td>
          <td>Database connection URL</td>
      </tr>
      <tr>
          <td>spring.datasource.username</td>
          <td>SPRING_DATASOURCE_USERNAME</td>
          <td>postgres</td>
          <td>Database username</td>
      </tr>
      <tr>
          <td>spring.datasource.password</td>
          <td>SPRING_DATASOURCE_PASSWORD</td>
          <td>postgres</td>
          <td>Database password</td>
      </tr>
      <tr>
          <td>spring.datasource.hikari.leakDetectionThreshold</td>
          <td>SPRING_DATASOURCE_HIKARI_LEAK_DETECTION_THRESHOLD</td>
          <td>0</td>
          <td>This property controls the amount of time that a connection can be out of the pool before a message is logged indicating a possible connection leak. A value of 0 means leak detection is disabled</td>
      </tr>
      <tr>
          <td>spring.datasource.hikari.maximumPoolSize</td>
          <td>SPRING_DATASOURCE_MAXIMUM_POOL_SIZE</td>
          <td>16</td>
          <td>This property allows the number of connections in the pool to increase as demand increases. At the same time, the property ensures that the pool doesn't grow to the point of exhausting a system's resources, which ultimately affects an application's performance and availability</td>
      </tr>
      <tr>
          <td>spring.datasource.hikari.registerMbeans</td>
          <td>SPRING_DATASOURCE_HIKARI_REGISTER_MBEANS</td>
          <td>false</td>
          <td>Enable/Disable MBean to diagnose pools state via JMX</td>
      </tr>
  </tbody>
</table>
