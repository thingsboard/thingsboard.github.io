### Step 1. Stop and Remove Existing Containers

First, stop the currently running Gateway containers:

```bash
docker compose down
```
{: .copy-code}

This will gracefully shut down the gateway and remove the containers, without deleting any volumes or configuration data.

### Step 2. Pull the Latest Gateway Image

Fetch the latest version of the ThingsBoard IoT Gateway Docker image:

```bash
docker pull thingsboard/tb-gateway
```
{: .copy-code}

### Step 3. Start the Updated Gateway

Recreate and start the containers with the updated image:

```bash
docker compose up -d
```
{: .copy-code}

The `-d` flag runs the containers in detached mode.

### Step 4. Verify the Upgrade

To ensure the upgrade was successful, check the Gateway logs by running:

```bash
docker compose logs -f
```
{: .copy-code}

This will display the logs in real-time, allowing you to confirm that the Gateway is running correctly with the new version.

### Notes

- This method is compatible with any version of the Gateway as long as your `docker-compose.yml` and volume mappings are correctly configured.
- To automate future upgrades, consider version pinning or tagging in your Compose file and keeping track of official image changelogs.