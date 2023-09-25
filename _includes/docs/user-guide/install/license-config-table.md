<table>
  <thead>
      <tr>
          <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>license.secret</td>
          <td>TB_LICENSE_SECRET</td>
          <td></td>
          <td>license secret obtained from ThingsBoard License Portal (https://license.thingsboard.io)</td>
      </tr>
      <tr>
          <td>license.instance_data_file</td>
          <td>TB_LICENSE_INSTANCE_DATA_FILE</td>
          <td>instance-license.data</td>
          <td>Instance data is auto-generated and is used to identify particular ThingsBoard Instance. Instance data is periodically updated and stored into the specified file which can be set to absolute or relative path. Please make sure that thingsboard process has access to the instance data file, in case you use absolute path.</td>
      </tr>
  </tbody>
</table>
