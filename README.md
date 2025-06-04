## Instructions for Contributing to the Docs/Website

* [Fork this repository](https://help.github.com/articles/fork-a-repo/)
* [Deploy the site locally](#deploy-the-site-locally)
* [Deploy the site in docker (recommended)](#deploy-the-site-in-docker-recommended)
* Add your changes
* [Generate image preview](#image-preview-generator)
* [Create Pull Request](https://help.github.com/articles/creating-a-pull-request/)

## Deploy the site locally

>Note: the local deployment are not preferable as the local gems can affect transitive dependencies or even collisions on bundle install.
The recommended approach is to use a docker container provided with all dependency installed.

The below commands set up your environment for running GitHub pages locally. 
Any edits you make will be viewable on a lightweight webserver that runs on your local machine.

Install Ruby **3.2.2**. If you're on Ubuntu, run this commands:

```bash
sudo apt-get install ruby-full build-essential zlib1g-dev git
sudo gem install bundler
```

>Note: Ruby <b>2.7.x</b> is not supported since github-pages 232

* If you're on a Mac, follow [these instructions](https://gorails.com/setup/osx/) and choose a Ruby version (**3.2.2**).  
* If you're on a Windows machine you can use the [Ruby Installer](https://rubyinstaller.org/downloads/). During the installation make sure to check the option for *Add Ruby executables to your PATH*.  

Clone our site:

```bash
git clone https://github.com/thingsboard/thingsboard.github.io.git
```

Make any changes you want. Then, to see your changes locally:  

```bash
cd thingsboard.github.io
sudo bundle install
bundle exec jekyll serve --host 0.0.0.0
```
	
If you are struggling with `bundle install` please try to delete the dependency lock file or use a Docker approach

```bash
rm -rf Gemfile.lock
```

In case you change the layout or website structure you might need to cleanup the cache:

```bash
rm -rf _site .jekyll-metadata
```
        
or execute the below script from the project root directory:

```bash        
./restart.sh
```

Your copy of the site will then be viewable at: [http://localhost:4000](http://localhost:4000)
(or wherever Jekyll tells you).

## Deploy the site in Docker (RECOMMENDED)

These instructions will help to run the thingsboard/thingsboard.github.io project in the docker. You do not need to install additional dependencies and packages, everything is already built into the docker image.

If you do not have docker installed, you need to install it. You can do this by following the installation instructions: [Docker Engine installation overview](https://docs.docker.com/engine/install/)

If you do not have a local thingsboard.github.io repository, you need to clone project into the "website" directory.

```bash
git clone https://github.com/thingsboard/thingsboard.github.io.git website
```

### Build and run the site using the Docker

Please replace the `THINGSBOARD_WEBSITE_DIR` with the full path to your local thingsboard.github.io repository.
>To deploy a fork, you need to replace the environment variable PAGES_REPO_NWO with the name of your repository.
As example: \
`PAGES_REPO_NWO="your_github_nickname/thingsboard.github.io"`

```bash
docker pull thingsboard/website
docker run --rm -p 4000:4000 --name thingsboard_website -e PAGES_REPO_NWO="thingsboard/thingsboard.github.io" --volume="THINGSBOARD_WEBSITE_DIR:/website" thingsboard/website
```

### Deploy the site using the docker-compose file

>To deploy a fork, you need to replace the environment variable PAGES_REPO_NWO (in `docker-compose.yaml`) with the name of your repository.
As example:\
`PAGES_REPO_NWO: "your_github_nickname/thingsboard.github.io"`

To start the docker container with docker-compose, run the command:

```bash
docker compose up - d
```

You can rebuild the website with:

```bash
docker compose restart
```

In about 2-7 minutes (depending on PC performance and cache), your copy of the site will be available for viewing at <http://localhost:4000>

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
