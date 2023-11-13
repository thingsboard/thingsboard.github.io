## Instructions for Contributing to the Docs/Website

* [Fork this repository](https://help.github.com/articles/fork-a-repo/)
* [Deploy the site locally](#deployment-of-the-site-locally)
* [Deploy the site in docker](#deployment-of-the-site-in-docker)
* Add your changes
* [Generate image preview](#image-preview-generator)
* [Create Pull Request](https://help.github.com/articles/creating-a-pull-request/)

## Deployment of the site locally

The below commands set up your environment for running GitHub pages locally. 
Any edits you make will be viewable on a lightweight webserver that runs on your local machine.

Install Ruby **3.0.x**. If you're on Ubuntu, run this commands:

    sudo apt-get install ruby-full build-essential zlib1g-dev git
    sudo gem install github-pages jekyll bundler


<details><summary>Or you can use Ruby <b>2.7.x</b>. (<i>Click to Open</i>)</summary>

<p>If you're on Ubuntu 20.04 LTS, run these commands:</p>
<pre>
    sudo apt-get install software-properties-common
    sudo apt-add-repository ppa:brightbox/ruby-ng
    sudo apt-get update
    sudo apt-get install make ruby ruby-dev libffi-dev g++ zlib1g-dev
    sudo gem install github-pages
    sudo gem install jekyll bundler
</pre>

</details>

* If you're on a Mac, follow [these instructions](https://gorails.com/setup/osx/) and choose a Ruby version (**3.0.x** or **2.7.6**).  
* If you're on a Windows machine you can use the [Ruby Installer](https://rubyinstaller.org/downloads/). During the installation make sure to check the option for *Add Ruby executables to your PATH*.  

Clone our site:  

	git clone https://github.com/thingsboard/thingsboard.github.io.git

Make any changes you want. Then, to see your changes locally:  

	cd thingsboard.github.io
	sudo bundle install
	bundle exec jekyll serve --host 0.0.0.0
	
In case you change the layout or website structure you might need to execute following command:

    rm -rf _site .jekyll-metadata && bundle exec jekyll serve --host 0.0.0.0
        
or execute the below script from the project root directory:
        
    ./restart.sh


Your copy of the site will then be viewable at: [http://localhost:4000](http://localhost:4000)
(or wherever Jekyll tells you).

## Deployment of the site in docker

These instructions will help to run the thingsboard/thingsboard.github.io project in the docker. You do not need to install additional dependencies and packages, everything is already built into the docker image.

If you do not have docker installed, you need to install it. You can do this by following the installation instructions: [Docker Engine installation overview](https://docs.docker.com/engine/install/)

If you do not have a local thingsboard.github.io repository, you need to clone project into the "website" directory.

```bash
git clone https://github.com/thingsboard/thingsboard.github.io.git website
```
### Deploy the site using the docker run command

Please replace the `THINGSBOARD_WEBSITE_DIR` with the full path to your local thingsboard.github.io repository.
>To deploy a fork, you need to replace the environment variable PAGES_REPO_NWO with the name of your repository.
As example: \
`PAGES_REPO_NWO="your_github_nickname/thingsboard.github.io"`

```bash
docker run --rm -d -p 4000:4000 --name thingsboard_website -e PAGES_REPO_NWO="thingsboard/thingsboard.github.io" --volume="THINGSBOARD_WEBSITE_DIR:/website" thingsboard/website
```



### Deploy the site using the docker-compose file

Please replace the `THINGSBOARD_WEBSITE_DIR` with the full path to your local thingsboard.github.io repository.

>To deploy a fork, you need to replace the environment variable PAGES_REPO_NWO with the name of your repository.
As example:\
`PAGES_REPO_NWO: "your_github_nickname/thingsboard.github.io"`

Create docker-compose.yml file:

```bash
cat <<EOT | sudo tee docker-compose.yml
version: '3.1'
services:
  thingsboard_website:
    container_name: thingsboard_website
    restart: always
    image: "thingsboard/website"
    environment:
      PAGES_REPO_NWO: "thingsboard/thingsboard.github.io"
    ports:
      - "4000:4000"
    volumes:
      - THINGSBOARD_WEBSITE_DIR:/website
EOT
```

To start the docker container with docker-compose, run the command:

```bash
docker compose up
```

In about 2 minutes (depending on PC performance), your copy of the site will be available for viewing at http://localhost:4000


## Image preview generator

For new *.png images preview is required along with original images.

To create a previews use the script
````bash
#run once
#install mogrify utility to perform resize 
sudo apt install graphicsmagick-imagemagick-compat
````
Usage:
```bash
./generate-previews.sh path file_mask*.png
```
Example:
```bash
./generate-previews.sh images/solution-templates *.png
```

### Image preview generator in docker

Usage:
```bash
docker exec thingsboard_website bash -c "./generate-previews.sh path file_mask*.png"

```

Example:
```bash
docker exec thingsboard_website bash -c "./generate-previews.sh images/solution-templates *.png"

```
> **_NOTE:_** This command must be executed with the running container

## Linkchecker

Use the following command to check the broken links.

```bash
docker run -it --rm --network=host ghcr.io/linkchecker/linkchecker --check-extern http://0.0.0.0:4000/
```

## Update pages in _includes/docs/pe/user-guide/install directory in accordance with thingsboard/thingsborad-pe repositories: 

Use the following command from the project root directory to regenerate configuration pages (first script parameter is TB version: 'ce' or 'pe', second parameter is relative path to TB repository):
    
    python3 generate_config_pages.py ce ../thingsboard
