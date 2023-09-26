<table>
  <thead>
      <tr>
          <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>rabbitmq.host</td>
          <td>TB_QUEUE_RABBIT_MQ_HOST</td>
          <td>localhost</td>
          <td>RabbitMQ address</td>
      </tr>
      <tr>
          <td>rabbitmq.port</td>
          <td>TB_QUEUE_RABBIT_MQ_PORT</td>
          <td>5672</td>
          <td>RabbitMQ bind port</td>
      </tr>
      <tr>
          <td>rabbitmq.virtual_host</td>
          <td>TB_QUEUE_RABBIT_MQ_VIRTUAL_HOST</td>
          <td></td>
          <td>Virtual hosts provide logical grouping and separation of resource</td>
      </tr>
      <tr>
          <td>rabbitmq.username</td>
          <td>TB_QUEUE_RABBIT_MQ_USERNAME</td>
          <td>admin</td>
          <td>Username for RabbitMQ user account</td>
      </tr>
      <tr>
          <td>rabbitmq.password</td>
          <td>TB_QUEUE_RABBIT_MQ_PASSWORD</td>
          <td>password</td>
          <td>User password for RabbitMQ user account</td>
      </tr>
      <tr>
          <td>rabbitmq.queue_properties</td>
          <td>TB_QUEUE_RABBIT_MQ_JE_QUEUE_PROPERTIES</td>
          <td>x-max-length-bytes:1048576000;x-message-ttl:604800000</td>
          <td>RabbitMQ queue properties</td>
      </tr>
  </tbody>
</table>
