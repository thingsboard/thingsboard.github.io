### Step 1. Stop the Gateway

If the Gateway is running as a background service or a systemd service, stop it first:

```bash
sudo systemctl stop thingsboard-gateway
```
{: .copy-code}

Or if you are running it manually in a terminal, stop it using `Ctrl + C`.

### Step 2. Upgrade the ThingsBoard Gateway Package via pip

Run the following command in your Python environment:

```bash
pip install --upgrade thingsboard-gateway
```
{: .copy-code}

{% capture difference %}
You may need to use pip3 or python3 -m pip depending on your environment. Add `--user` if it's a user-level installation.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

### Step 3. Restart the Gateway

Once the upgrade completes, start the Gateway again:

```bash
sudo systemctl start thingsboard-gateway
```
{: .copy-code}

Or, if you run it manually:

```bash
thingsboard-gateway
```
{: .copy-code}

### Notes

- If running in a virtual environment, ensure the `pip install` and service control commands are executed within that environment.
- If you installed Gateway via systemd service, the service file may need to point to the correct environment or executable path.
