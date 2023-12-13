**Note:** make sure the downloaded PowerShell scripts are allowed to run on your system.

* **Open PowerShell** (Run as Administrator).
* **(Optional) Get the current execution policy**. 
It determines the level of security for running scripts on a system. For example, if `Restricted` is returned, it means PowerShell doesn't execute any scripts.

```bash
Get-ExecutionPolicy
```
{: .copy-code}

* **(Optional) Change the current execution policy if required**. 
Set it to the one that will allow you to run PowerShell scripts and the one that suits your security requirements.
For example, `Unrestricted` is the least restrictive setting that allows all scripts to be executed.

```bash
Set-ExecutionPolicy Unrestricted
```
{: .copy-code}

* **Install TBMQ**

```bash
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/thingsboard/tbmq/{{ site.release.broker_branch }}/msa/tbmq/configs/windows/tbmq-install-and-run.ps1" `
-OutFile ".\tbmq-install-and-run.ps1"; .\tbmq-install-and-run.ps1
```
{: .copy-code}
