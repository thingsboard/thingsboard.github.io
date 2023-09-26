<table>
  <thead>
      <tr>
          <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>queue.aws_sqs.use_default_credential_provider_chain</td>
          <td>TB_QUEUE_AWS_SQS_USE_DEFAULT_CREDENTIAL_PROVIDER_CHAIN</td>
          <td>false</td>
          <td>Use default credentials provider for AWS SQS</td>
      </tr>
      <tr>
          <td>queue.aws_sqs.access_key_id</td>
          <td>TB_QUEUE_AWS_SQS_ACCESS_KEY_ID</td>
          <td>YOUR_KEY</td>
          <td>Access key ID from AWS IAM user</td>
      </tr>
      <tr>
          <td>queue.aws_sqs.secret_access_key</td>
          <td>TB_QUEUE_AWS_SQS_SECRET_ACCESS_KEY</td>
          <td>YOUR_SECRET</td>
          <td>Secret access key from AWS IAM user</td>
      </tr>
      <tr>
          <td>queue.aws_sqs.region</td>
          <td>TB_QUEUE_AWS_SQS_REGION</td>
          <td>YOUR_REGION</td>
          <td>Region from AWS account</td>
      </tr>
      <tr>
          <td>queue.aws_sqs.threads_per_topic</td>
          <td>TB_QUEUE_AWS_SQS_THREADS_PER_TOPIC</td>
          <td>1</td>
          <td>Number of threads per each AWS SQS queue in consumer</td>
      </tr>
      <tr>
          <td>queue.aws_sqs.queue-properties.rule-engine</td>
          <td>TB_QUEUE_AWS_SQS_RE_QUEUE_PROPERTIES</td>
          <td>VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800</td>
          <td>AWS SQS queue properties. VisibilityTimeout in seconds;MaximumMessageSize in bytes;MessageRetentionPeriod in seconds</td>
      </tr>
      <tr>
          <td>queue.aws_sqs.queue-properties.core</td>
          <td>TB_QUEUE_AWS_SQS_CORE_QUEUE_PROPERTIES</td>
          <td>VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800</td>
          <td>AWS SQS queue properties. VisibilityTimeout in seconds;MaximumMessageSize in bytes;MessageRetentionPeriod in seconds</td>
      </tr>
      <tr>
          <td>queue.aws_sqs.queue-properties.transport-api</td>
          <td>TB_QUEUE_AWS_SQS_TA_QUEUE_PROPERTIES</td>
          <td>VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800</td>
          <td>AWS SQS queue properties. VisibilityTimeout in seconds;MaximumMessageSize in bytes;MessageRetentionPeriod in seconds</td>
      </tr>
      <tr>
          <td>queue.aws_sqs.queue-properties.notifications</td>
          <td>TB_QUEUE_AWS_SQS_NOTIFICATIONS_QUEUE_PROPERTIES</td>
          <td>VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800</td>
          <td>AWS SQS queue properties. VisibilityTimeout in seconds;MaximumMessageSize in bytes;MessageRetentionPeriod in seconds</td>
      </tr>
  </tbody>
</table>