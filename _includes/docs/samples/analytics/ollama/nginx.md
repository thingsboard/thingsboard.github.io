* TOC
{:toc}

## Overview {#overview}

[Ollama](https://ollama.com/){:target="_blank"} is a powerful tool for running Large Language Models (LLMs) locally, but it does not include built-in authentication mechanisms.
When exposing Ollama on a network, securing the API endpoint becomes your responsibility.

This guide demonstrates how to deploy Ollama with [Nginx](https://nginx.org/){:target="_blank"} as a [reverse proxy](https://en.wikipedia.org/wiki/Reverse_proxy){:target="_blank"}
to add authentication to your Ollama deployment. The Nginx proxy acts as a security gatekeeper, validating credentials before forwarding requests to the Ollama service.

We will cover two common authentication methods:
- **HTTP Basic Authentication** (username and password)
- **Bearer Token Authentication** (a secret API key)

Both services, Ollama and Nginx, will be deployed together as containers using Docker Compose.
This guide focuses on demonstrating the concept with a working implementation that you can use as a foundation for further customization.
We use the standard Ollama Docker image without GPU acceleration to keep the setup straightforward, though GPU support can be added later for improved performance.

{% capture https_warning %}
After completing this guide, we **strongly recommend** securing your [Nginx proxy with HTTPS](https://nginx.org/en/docs/http/configuring_https_servers.html){:target="_blank"}
to ensure that credentials (passwords or bearer tokens) are always encrypted and not sent in plain text over the network.
{% endcapture %}
{% include templates/warn-banner.md content=https_warning %}

## Prerequisites {#prerequisites}

Before you start, ensure you have Docker and Docker Compose installed.
The easiest way to get both is to install [Docker Desktop](https://docs.docker.com/desktop/){:target="_blank"} and ensure it is running before you proceed.

## Setup: Project Directory {#project-setup}

First, create a main project directory named `ollama-nginx-auth`. All the files we create throughout this guide will be placed inside this directory.

Next, inside the `ollama-nginx-auth` directory, create another directory named `nginx`. This is where you will store your Nginx-specific configuration files.

After you are done, your directory structure should look like this:
```
ollama-nginx-auth/
└── nginx/
```

Make sure you are working inside the main `ollama-nginx-auth` directory for the next steps.

## Approach 1: HTTP Basic Authentication {#basic-auth}

This method protects your endpoint with a simple username and password.
When a request is made, Nginx checks the provided credentials against an encrypted list of users in a `.htpasswd` file to grant or deny access.

The `.htpasswd` file is a standard file used for storing usernames and passwords for basic authentication on web servers like Nginx.
Each line in the file represents a single user and contains the username followed by a colon and the encrypted (hashed) password.

### Step 1: Create the Credential File {#basic-credentials}

From your project root (`ollama-nginx-auth`), create the `.htpasswd` file inside the `nginx` directory. This command creates a file with the username `myuser` and password `mypassword`.

{% capture tabspec %}htpasswd-setup
htpasswd-setup-linux-macos,Linux/macOS,shell,/docs/samples/analytics/resources/htpasswd-setup-linux-macos.sh
htpasswd-setup-windows,Windows (PowerShell),text,/docs/samples/analytics/resources/htpasswd-setup-windows.ps1{% endcapture %}  
{% include tabs.html %}

### Step 2: Create the Nginx Configuration File {#basic-config}

Create a file named `basic_auth.conf` inside the `nginx` directory (`ollama-nginx-auth/nginx/basic_auth.conf`) and paste the following content into it.
```
events {}

http {
    server {
        listen 80;
    
        location / {
            # This section enforces HTTP Basic Authentication
            auth_basic "Restricted Access";
            auth_basic_user_file /etc/nginx/.htpasswd; # Path to credentials file inside the container
    
            # If authentication is successful, forward the request to Ollama
            proxy_pass http://ollama:11434;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            
            # Increase timeouts for slow model responses to prevent 504 Gateway Timeout errors
            proxy_connect_timeout 300s;
            proxy_send_timeout 300s;
            proxy_read_timeout 300s;
        }
    }
}
```
{: .copy-code}

Here's what the configuration does:
- `listen 80;`: Nginx listens on port 80 inside the Docker container.
- `auth_basic "Restricted Access";`: Enables HTTP Basic Authentication.
- `auth_basic_user_file /etc/nginx/.htpasswd;`: Specifies the location of the password file inside the container. We will mount our local file to this path.
- `proxy_pass http://ollama:11434;`: Forwards any authenticated requests to the `ollama` service at its internal address.

### Step 3: Create the Docker Compose File {#basic-compose}

Create a file named `docker-compose.basic.yml` in the root of your project (`ollama-nginx-auth/docker-compose.basic.yml`) and paste the following content into it.
```yml
services:
  ollama:
    image: ollama/ollama
    container_name: ollama
    volumes:
      - ollama_data:/root/.ollama
    restart: unless-stopped

  nginx:
    image: nginx:latest
    container_name: nginx_proxy
    ports:
      - "8880:80"
    volumes:
      - ./nginx/basic_auth.conf:/etc/nginx/nginx.conf:ro
      - ./nginx/.htpasswd:/etc/nginx/.htpasswd:ro
    depends_on:
      - ollama
    restart: unless-stopped

volumes:
  ollama_data:
```
{: .copy-code}

### Step 4: Run and Test {#basic-test}

Start the services using the dedicated compose file. The `-f` flag specifies which file to use. This may take a some time.
```shell
docker compose -f docker-compose.basic.yml up -d
```
{: .copy-code}

Pull a model by executing the command directly inside the Ollama container. We'll use `gemma3:1b`, a lightweight model suitable for testing. This may take a some time.
```shell
docker exec -it ollama ollama pull gemma3:1b
```
{: .copy-code}

Test with your user (`myuser`):

{% capture tabspec %}http-basic-test
http-basic-test-linux-macos,Linux/macOS,shell,/docs/samples/analytics/resources/http-basic-test-linux-macos.sh
http-basic-test-windows,Windows (PowerShell),text,/docs/samples/analytics/resources/http-basic-test-windows.ps1{% endcapture %}  
{% include tabs.html %}

Test an API call with incorrect credentials to see it fail:

{% capture tabspec %}http-basic-failed-test
http-basic-failed-test-linux-macos,Linux/macOS,shell,/docs/samples/analytics/resources/http-basic-failed-test-linux-macos.sh
http-basic-failed-test-windows,Windows (PowerShell),text,/docs/samples/analytics/resources/http-basic-failed-test-windows.ps1{% endcapture %}  
{% include tabs.html %}

The output will show `401 Unauthorized` error.

### Step 5 (Optional): Manage Users {#basic-manage-users}

You can easily add or remove users from the `.htpasswd` file. Changes to this file take effect immediately without needing to restart Nginx.

{% capture adding-users-via-htpasswd %}
Always use the `htpasswd` command to add users. This utility correctly encrypts the password and ensures the credentials are stored in the format that Nginx requires.
Manually adding plain-text passwords to the file will not work.
{% endcapture %}
{% include templates/info-banner.md content=adding-users-via-htpasswd %}

**To add a new user:**

Run the `htpasswd` command again. This example adds `anotheruser` with password `anotherpassword`.

{% capture tabspec %}http-basic-add-user
http-basic-add-user-linux-macos,Linux/macOS,shell,/docs/samples/analytics/resources/http-basic-add-user-linux-macos.sh
http-basic-add-user-windows,Windows (PowerShell),text,/docs/samples/analytics/resources/http-basic-add-user-windows.ps1{% endcapture %}  
{% include tabs.html %}

You can repeat this command for as many users as you need.

**To remove a user:**

Simply open the file `./nginx/.htpasswd` in a text editor and delete the line corresponding to the user you want to remove.

## Approach 2: Bearer Token (API Key) Authentication {#bearer-token}

This method uses a secret token. You will manage your keys in a simple text file, and Nginx will be configured to read them without needing a service restart.

### Step 1: Create the API Keys File {#bearer-keys}

Create a file named `api_keys.txt` inside the `nginx` directory (`ollama-nginx-auth/nginx/api_keys.txt`) and paste your API keys into it, one per line.
```
my-secret-api-key-1
admin-key-abcdef
```
{: .copy-code}

### Step 2: Create the Nginx Configuration File {#bearer-config}

Create a file named `bearer_token.conf` inside the `nginx` directory (`ollama-nginx-auth/nginx/bearer_token.conf`) and paste the following content into it.
This configuration includes a [Lua](https://www.lua.org/) script to read the API keys file dynamically.
```
events {}

http {
    server {
        listen 80;

        location / {
            # Lua script to read keys from a file and check against the Authorization header
            # This code runs for every request to this location.
            access_by_lua_block {
                local function trim(s)
                    return (s:gsub("^%s*(.-)%s*$", "%1"))
                end
            
                -- Function to read keys from the file into a set for quick lookups
                local function get_keys_from_file(path)
                    local keys = {}
                    local file = io.open(path, "r")
                    if not file then
                        ngx.log(ngx.ERR, "cannot open api keys file: ", path)
                        return keys
                    end
                    for line in file:lines() do
                        line = trim(line)
                        if line ~= "" then
                            keys[line] = true
                        end
                    end
                    file:close()
                    return keys
                end

                -- Path to the keys file inside the container
                local api_keys_file = "/etc/nginx/api_keys.txt"
                local valid_keys = get_keys_from_file(api_keys_file)

                -- Check the Authorization header
                local auth_header = ngx.var.http_authorization or ""
                local _, _, token = string.find(auth_header, "Bearer%s+(.+)")

                if not token or not valid_keys[token] then
                    return ngx.exit(ngx.HTTP_UNAUTHORIZED)
                end
            }
         
            # If access is granted, forward the request to Ollama
            proxy_pass http://ollama:11434;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            
            # Increase timeouts for slow model responses to prevent 504 Gateway Timeout errors
            proxy_connect_timeout 300s;
            proxy_send_timeout 300s;
            proxy_read_timeout 300s;
        }
    }
}
```
{: .copy-code}

Here's what the configuration does:
- `listen 80;`: Nginx listens on port 80 inside the Docker container.
- `access_by_lua_block`: Executes a Lua script for each request to validate the Bearer token.
  - The script reads valid API keys from `/etc/nginx/api_keys.txt` on every request.
  - It extracts the token from the `Authorization: Bearer <token>` header.
  - If the token is missing or not found in the valid keys list, it returns a 401 Unauthorized response.
- `proxy_pass http://ollama:11434;`: Forwards any authenticated requests to the `ollama` service at its internal address.

### Step 3: Create the Docker Compose File {#bearer-compose}

Create a file named `docker-compose.bearer.yml` in the root of your project (`ollama-nginx-auth/docker-compose.bearer.yml`) and paste the following content into it.
This `docker-compose.bearer.yml` uses an Nginx image that includes the required Lua module (`openresty/openresty`).
```yml
services:
  ollama:
    image: ollama/ollama
    container_name: ollama
    volumes:
      - ollama_data:/root/.ollama
    restart: unless-stopped

  nginx:
    # Use the OpenResty image which includes the Nginx Lua module
    image: openresty/openresty:latest
    container_name: nginx_proxy
    ports:
      - "8880:80"
    volumes:
      # Mount the new Nginx config and the API keys file
      - ./nginx/bearer_token.conf:/usr/local/openresty/nginx/conf/nginx.conf:ro
      - ./nginx/api_keys.txt:/etc/nginx/api_keys.txt:ro
    depends_on:
      - ollama
    restart: unless-stopped

volumes:
  ollama_data:
```
{: .copy-code}

### Step 4: Run and Test {#bearer-test}

Start the services using the dedicated compose file. The `-f` flag specifies which file to use.
```shell
docker compose -f docker-compose.bearer.yml up -d
```
{: .copy-code}

Pull a model (this will be quick if you did it in Approach 1):
```shell
docker exec -it ollama ollama pull gemma3:1b
```
{: .copy-code}

Test a request using a valid API key:

{% capture tabspec %}bearer-test
bearer-test-linux-macos,Linux/macOS,shell,/docs/samples/analytics/resources/bearer-test-linux-macos.sh
bearer-test-windows,Windows (PowerShell),text,/docs/samples/analytics/resources/bearer-test-windows.ps1{% endcapture %}  
{% include tabs.html %}

Test with an invalid API key to see it fail:

{% capture tabspec %}bearer-failed-test
bearer-failed-test-linux-macos,Linux/macOS,shell,/docs/samples/analytics/resources/bearer-failed-test-linux-macos.sh
bearer-failed-test-windows,Windows (PowerShell),text,/docs/samples/analytics/resources/bearer-failed-test-windows.ps1{% endcapture %}  
{% include tabs.html %}

### Step 5 (Optional): Manage API Keys {#bearer-manage-keys}

Simply open the file `./nginx/api_keys.txt` in a text editor. Add, change, or remove keys (one per line). Save the file.

The changes take effect immediately on the next API request because the Lua script reads the file every time a request is made.

For example, you can edit the file, remove the `admin-key-abcdef` key, save it, and then try to use that key in a test request.
The request will now fail with a 401 Unauthorized error.

## Usage {#usage}

To start or stop the services, you will use the `docker compose up` and `docker compose down` commands,
making sure to specify the appropriate file for the authentication approach you want to use (`docker-compose.basic.yml` or `docker-compose.bearer.yml`).
- To start the services for either approach, run the following command from your project directory, replacing `<compose-file-name>` with the correct file name:
  ```shell
  docker compose -f <compose-file-name> up -d
  ```
  {: .copy-code}

- When you're finished, stop the containers with the corresponding file name:
  ```shell
  docker compose -f <compose-file-name> down
  ```
  {: .copy-code}

## Next steps {#next-steps}

Now that you have Ollama endpoint, here are some recommended next steps:

- **Enable HTTPS**: Secure your Nginx proxy with HTTPS by following the [official Nginx HTTPS configuration guide](https://nginx.org/en/docs/http/configuring_https_servers.html){:target="_blank"}.

- **Add GPU Support**: Enable GPU acceleration for Ollama to significantly improve inference speed.
  Use the [Ollama Docker GPU setup instructions](https://github.com/ollama/ollama/blob/main/docs/docker.md){:target="_blank"} as a starting point.
