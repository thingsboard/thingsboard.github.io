### Step 1. Download the `.rpm` file

Download installation `.rpm` package.

```bash
wget https://github.com/thingsboard/thingsboard-gateway/releases/latest/download/python3-thingsboard-gateway.rpm
````
{: .copy-code}

### Step 2. Install the new `.rpm` file

Run the following command in the terminal to install the updated package:

```bash
sudo dnf install -y ./python3-thingsboard-gateway.rpm
```
{: .copy-code}

{% capture difference %}
This will automatically upgrade your existing Gateway installation without removing your configuration and 
extension files **(from Gateway version 3.7.6)**.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

{% capture difference1 %}
If you are upgrading from a gateway version lower than 3.7.6, make backups of your configuration and extension files.
{% endcapture %}
{% include templates/warn-banner.md content=difference1 %}

### Step 3. Restart the Gateway

After the upgrade, restart the Gateway service to apply the changes:

```bash
sudo systemctl restart thingsboard-gateway
```
{: .copy-code}

### Step 4. Verify the Upgrade

To ensure the upgrade was successful, check the Gateway status and logs by running:

```bash
sudo systemctl status thingsboard-gateway
```
{: .copy-code}

### Configuration File Preservation

During the upgrade, **all user configuration files will be preserved.** This includes customizations made to:
- Connector configuration files.
- Custom user extensions.
- `tb_gateway.json` file.

The upgrade process also automatically creates a backup of your current configuration directory to ensure 
recoverability in case of any issues. The backups are stored under the following paths:

- For connector configurations:
  ```
  /etc/thingsboard-gateway/configs_backup.tar.gz
  ```

- For user extensions:
  ```
  /var/lib/thingsboard_gateway/extensions_backup.tar.gz
  ```

### Notes

- This upgrade procedure applies only to .rpm package-based installations. If you are using Docker or pip-based 
  installations, please refer to the appropriate guide that you can find on the top of this page.
- Always test the Gateway after the upgrade to ensure connectors and extensions operate as expected.
