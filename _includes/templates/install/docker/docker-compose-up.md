Set the terminal in the directory which contains the `docker-compose.yml` file and execute the following command to up this docker compose directly:

```
docker compose pull
docker compose up -d
docker compose logs -f my{{serviceName}}
```
{: .copy-code}

{% include templates/install/docker/docker-compose-standalone-banner.md %}

After executing this command you can open `http://{your-host-ip}:8080` in your browser (for ex. `http://localhost:8080`).
You should see ThingsBoard login page. Use the following default credentials:

- **System Administrator**: sysadmin@thingsboard.org / sysadmin
- **Tenant Administrator**: tenant@thingsboard.org / tenant
- **Customer User**: customer@thingsboard.org / customer

You can always change passwords for each account in account profile page.