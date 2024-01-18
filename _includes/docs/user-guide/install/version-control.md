<table>
    <thead>
      <tr>
          <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
      </tr>
    </thead>
    <tbody>
    <tr>
        <td>vc.thread_pool_size</td>
        <td>TB_VC_POOL_SIZE</td>
        <td>2</td>
        <td>Size of the thread pool for processing the synchronization tasks</td>
    </tr>
    <tr>
        <td>vc.git.io_pool_size</td>
        <td>TB_VC_GIT_POOL_SIZE</td>
        <td>3</td>
        <td>Size of the thread pool for processing IO operations related to Git</td>
    </tr>
    <tr>
        <td>vc.git.repositories-folder</td>
        <td>TB_VC_GIT_REPOSITORIES_FOLDER</td>
        <td>${java.io.tmpdir}/repositories</td>
        <td>Folder for storing the GIT repositories</td>
    </tr>
    </tbody>
</table>