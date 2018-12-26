- Make a folder to store docker files:

```bash
mkdir <docker-folder>
cd <docker-folder>
```

- Download the following files from thingsboard repo:
    1. **[docker-compose.yml](https://raw.githubusercontent.com/thingsboard/thingsboard/release-2.0/docker/docker-compose.yml)** - main docker-compose file.
    1. **[.env](https://raw.githubusercontent.com/thingsboard/thingsboard/release-2.0/docker/.env)** - main env file that contains default location of cassandra data folder and cassandra schema.
    1. **[tb.env](https://raw.githubusercontent.com/thingsboard/thingsboard/release-2.0/docker/tb.env)** - default thingsboard environment variables.
      
```bash
curl -L https://raw.githubusercontent.com/thingsboard/thingsboard/release-2.0/docker/docker-compose.yml > docker-compose.yml
curl -L https://raw.githubusercontent.com/thingsboard/thingsboard/release-2.0/docker/.env > .env
curl -L https://raw.githubusercontent.com/thingsboard/thingsboard/release-2.0/docker/tb.env > tb.env
```